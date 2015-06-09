/* Lambda calculus grammar by Zach Carter */
/*\s+\.													{ return 'SEPDOT'; }*/
/*\s*(("#".*)?\n+)+\s*\.				{ return 'NLDOT'; }*/

%start Program

%{
	var count = 0;
	var uniqVarNamePrefix = "_u_";
	function getCounter() {
		return count ++;
	}

	function getUniqVarName() {
		return uniqVarNamePrefix + getCounter();
	}

	function makeExpr(expr) {
		if (expr.length === 1) {
			expr.push("{mono}");
		}
		return expr;
	}

	function makePartialExpr(expr) {
		console.error('enter');
		console.error(expr);
		if (expr.length === 1) {
			expr.push("{mono}");
			return expr;
		}
		var expr0 = expr[0];
		expr[0] = ["__", "{atomic}", "{var}"];
		expr = expr.unshift(expr0);
		console.error(expr);
		return expr;
	}

//	lixlib = require("./lixlib.js");
//	lixlib = require("./lib.lix.js");
%}

%lex
%%
<<EOF>> 												{ return 'EOF'; }

'...'														{ return '...'; }	
'..*'														{ return '..*'; }	
'*..'														{ return '*..'; }	

"/"+"("\s*(("#".*)?\n+)*\s* 		{ return 'DIRITEM_PARAN'; }
'.''/'+"("\s*(("#".*)?\n+)*\s*	{ return 'CURRENT_DIRITEM_PARAN'; }
'..''/'+"("\s*(("#".*)?\n+)*\s*	{ return 'PARENT_DIRITEM_PARAN'; }

'/'+[\-.\u4e00-\u9fa5_a-zA-Z0-9]+	{	return 'DIRITEM'; }
'/'+'..' 												{	return 'DIRITEM'; }
'/'+'.'													{	return 'DIRITEM'; }
'..''/'+[\-.\u4e00-\u9fa5_a-zA-Z0-9]+ {	return 'DIRITEM'; }
'.''/'+[\-.\u4e00-\u9fa5_a-zA-Z0-9]+	{	return 'DIRITEM'; }

'..''/'+												{	return 'PARENT_PATH'; }
'.''/'+													{	return 'CURRENT_PATH'; }
'/''/'+													{	return 'ROOT'; }

".."														{ return ".."; }

"."[0-9]+  											{ return 'NUMERIC_INDEX'; }
"."[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]*
																{ return "DOT_VAR" }
"*"[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]*
																{ return "ASTERISK_VAR" }

\s*(("#".*)?\n+)*\s*"&"\s*(("#".*)?\n+)*\s*
															{ return "&"; }

\s*(("#".*)?\n+)*\s*"U"\s*(("#".*)?\n+)*\s*
    													{ return "U"; }

"?" 													{ return "?"; }

"@{"\s*  											{ return "@{"; }
"@["\s* 											{ return "@["; }
"@("\s*  											{ return "@("; }


\'(\\.|[^\\'])*\'|\"(\\.|[^\\"])*\"			{ return 'STRING_LITERAL'; }	

\.    												{ return '.'; }

\s*(("#".*)?\n+)*\s*"=>"\s*(("#".*)?\n+)*\s*						
															{ return '=>'; }

\s*(("#".*)?\n+)*\s*"->"\s*(("#".*)?\n+)*\s*   { return 'FUNC_ARROW'; }
\s*(("#".*)?\n+)+\s*"and"\s*(("#".*)?\n+)*\s*	{ return 'NLAND'; }
\s*(("#".*)?\n+)+\s*"or"\s*(("#".*)?\n+)*\s*	{ return 'NLOR'; }

\s*(("#".*)?\n+)*\s*"|"\s*   									{ return 'VBAR'; }
\s*(("#".*)?\n+)*\s*">>="\s+									{ return '>>='; }
\s*(("#".*)?\n+)*\s*">>>"\s+									{ return ">>>"; }
\s*(("#".*)?\n+)*\s*"<<<"\s+									{ return "<<<"; }
\s*(("#".*)?\n+)*\s*">>"\s+										{ return ">>"; }
\s*(("#".*)?\n+)*\s*"<<"\s+										{ return "<<"; }

/*
\s*"|"\s*   									{ return 'VBAR'; }
\s*">>="\s+										{ return '>>='; }
\s*">>>"\s+										{ return ">>>"; }
\s*"<<<"\s+										{ return "<<<"; }
\s*">>"\s+										{ return ">>"; }
\s*"<<"\s+										{ return "<<"; }
*/

\s*(("#".*)?\n+)+\s*       		{ return 'NEWLINE'; }



"("\s*       									{ return '('; }
\s*")"      									{ return ')'; }
"{"\s*(("#".*)?\n+)*\s* 			{ return '{'; }
\s*"}"       									{ return '}'; }
"["\s*(("#".*)?\n+)*\s*  			{ return '['; }
\s*"]"       									{ return ']'; }


\s+'fn'												{ return 'FN'; }
'if'													{ return 'IF'; }
'else'												{ return 'ELSE'; }
'while'												{ return 'WHILE'; }
'null'												{ return 'NULL'; }
'undefined'										{ return 'UNDEFINED'; }
'true'												{ return 'TRUE'; }
'false'												{ return 'FALSE'; }
"and"\s*											{ return 'AND'; }
"or"\s*												{ return 'OR'; }
\s+"and"\s+										{ return 'AND'; }
\s+"or"\s+										{ return 'OR'; }

[+-]?[0-9]+("."[0-9]+)?([Ee][+-]?[0-9]+)?  		{ return 'NAT'; }
[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]* 				{ return 'var'; }

'$'"("\s*(("#".*)?\n+)*\s* 				{ return 'DOLLAR_PARAN'; }
'$'[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]*
															{ return 'DOLLAR_STR'; }

"+"														{ return '+'; }
"*"														{ return '*'; }
"-"														{ return '-'; }
"/"														{ return '/'; }
"%"														{ return '%'; }
">="													{ return '>='; }
">"														{ return '>'; }
"=="													{ return '=='; }
"!="													{ return '!='; }
"<="													{ return '<='; }
"<"														{ return '<'; }

\s+":="\s+  									{ return 'DEF'; }
\s+"="\s+  										{ return 'ASSIGN_OPERATOR'; }

\s*(("#".*)?\n+)*\s*":"\s*(("#".*)?\n+)*\s*
															{ return ":"; }

"!" 													{ return "!"; }


\s+       										{ return 'SEP'; }
/lex

%left NEWLINE
%left VBAR
%left ">>="
%left ">>>"
%left "<<<"
%left ">>"
%left "<<"
%left SEP
%left ASSIGN_OPERATOR
%left FN

%%

Operator
	: "+"	
	| "*"	
	| "-"	
	| "/"	
	| "%"	
	| ">="
	| ">"	
	| "=="
	| "!="
	| "<="
	| "<"	
	;

VAR
	: var
	| Operator
	;
		

FUNC_ARGS
		: VAR
			{
				$$ = [[$VAR, "{atomic}", "{var}"]];
			}
		| FUNC_ARGS SEP VAR
			{
				$FUNC_ARGS.push([$VAR, "{atomic}", "{var}"]);
				$$ = $FUNC_ARGS;
			}
		;

PropertyField
		: DOT_VAR
			{
				$$ = [$DOT_VAR.substring(1), "{atomic}", "{dot}", "{global}"];
			}
		| NUMERIC_INDEX
			{
				$$ = [[$NUMERIC_INDEX.substring(1), "{atomic}"], "{index}", "{index}", "{global}"];
			}
		| '.' STRING_LITERAL
			{
				$$ = [[$STRING_LITERAL, "{atomic}"], "{index}", "{index}", "{global}"];
			}
		| '.' '(' MultiLineExpr ')'
			{
				$$ = [makeExpr($MultiLineExpr), "{index}", "{index}"];
			}
		;
	
Field
		: VAR
			{
				$$ = [$1, "{atomic}"];
			}
		| '(' MultiLineExpr ')'
			{
				$$ = [makeExpr($2), "{index}"];
			}
		| NAT
			{
				$$ = [[$1, "{atomic}"], "{index}"];
			}
		;
	
AsteriskObject
		: ASTERISK_VAR
			{
				$$ = [$ASTERISK_VAR.substring(1), "{atomic}", "{var}"];
			}
		| AsteriskObject PropertyField
			{
				$$ = [$1, "{.}", $PropertyField];
			}
		;

Object
		: VAR
			{
				$$ = [$1, "{atomic}", "{var}"];
			}
		| DOLLAR_STR
			{
				$$ = [($1).substr(1), "{module}", "{var}"];
			}
		| DOLLAR_PARAN MultiLineExpr ')'
			{
				$$ = [makeExpr($3), "{module}", "{index}"];
			} 
		| Object PropertyField
			{
				$$ = [$1, "{.}", $PropertyField];
			}
		;

Property
		: PropertyField MultiLineSEP PrimaryExpr
			{
				$$ = [$1, "{property}", makeExpr($3)];
			}
//		| PropertyField NEWLINE PrimaryExpr
//			{
//				$$ = [$1, "{property}", makeExpr($3)];
//			}
		;

PropertyList
		: Property
			{
				$$ = [$Property];
			}
		| PropertyList MultiLineSEP Property
			{
				$PropertyList.push($Property);
				$$ = $PropertyList;
			}
		| PropertyList NEWLINE
//		| PropertyList NEWLINE Property
//			{
//				$PropertyList.push($Property);
//				$$ = $PropertyList;
//			}
		;

DirItem
		: DIRITEM
			{
				$$ = [$1, "{path_item}"];
			}
		| CURRENT_DIRITEM_PARAN MultiLineExpr ')'
			{
				$$ = [makeExpr($MultiLineExpr), "{path_arg_item}", './'];
			}
		| PARENT_DIRITEM_PARAN MultiLineExpr ')'
			{
				$$ = [makeExpr($MultiLineExpr), "{path_arg_item}", '../'];
			}
		| DIRITEM_PARAN MultiLineExpr ')'
			{
				$$ = [makeExpr($MultiLineExpr), "{path_arg_item}", ''];
			}
		;

PATH
		: DirItem
			{
				$$ = [[$DirItem], "{path}"];
			}
		| PATH DirItem
			{
				$PATH[0].push($DirItem);
				$$ = $PATH;
			}
		;

Slashes
		: '/'
		| ROOT
		;

Path
		: PATH
		| ROOT
			{
				$$ = [[$ROOT], "{path}"];
			}
		| PARENT_PATH
			{
				$$ = [[$PARENT_PATH], "{path}"];
			}
		| CURRENT_PATH
			{
				$$ = [[$CURRENT_PATH], "{path}"];
			}
		| Path Slashes
		;

PrimaryExpr
		: '[' ']'
			{
				$$ = [[], "{array}"];
			}
		| '[' ArrayLiteral ']'
			{
				$$ = [$ArrayLiteral, "{array}"];
			}
		| '[' ArrayLiteral ']' FUNC_ARROW '{' FUNC_BODY '}'
			{
				$$ = [$ArrayLiteral, "{func}", $FUNC_BODY];
			}

		| '[' ']' FUNC_ARROW '{' FUNC_BODY '}'
			{ $$ = [[], "{func}", $FUNC_BODY]; }

		| AsteriskObject
			{
				$$ = [$AsteriskObject, "{asterisk}"]
			}

		| "&" Object
			{
				$$ = [$Object, "{ampersand}"]
			}

		| '(' MultiLineExpr ')'
			{
				$$ = makeExpr($MultiLineExpr);
			}

		| '{' '}'
			{
				$$ = [[], "{object}"];
			}
		| '{' PropertyList '}'
			{
				$$ = [$2, "{object}"];
			}
		| PropertyField
			{
				$$ = [$PropertyField, "{method}", "field"]
			}
		| Object

		| NAT
			{
				$$ = [$NAT, "{atomic}"];
			}
		| NULL
			{
				$$ = [$NULL, "{atomic}"];
			}
		| UNDEFINED
			{
				$$ = [$UNDEFINED, "{atomic}"];
			}
		| FALSE
			{
				$$ = [$FALSE, "{atomic}"];
			}
		| TRUE
			{
				$$ = [$TRUE, "{atomic}"];
			}
		| STRING_LITERAL
			{
				$$ = [$STRING_LITERAL, "{atomic}"];
			}
		| Path
		;

ArrayLiteral
		: PrimaryExpr
			{
				$$ = [$PrimaryExpr];
			}
		| ArrayLiteral SEP PrimaryExpr
			{
				$ArrayLiteral.push($PrimaryExpr);
				$$ = $ArrayLiteral;
			}
		| ArrayLiteral NEWLINE
		| ArrayLiteral NEWLINE PrimaryExpr
			{
				$ArrayLiteral.push($PrimaryExpr);
				$$ = $ArrayLiteral;
			}
		;

MultiLineSEP
		: SEP
		| NEWLINE
		;

OptMultiLineSEP
		:
		| MultiLineSEP
		;

MultiLineOR
		: OR
		| NLOR
		;

MultiLineAND
		: AND
		| NLAND
		;

MultiLineExpr
		: PrimaryExpr
			{
				$$ = [$PrimaryExpr];
			}

		| MultiLineExpr NEWLINE

		| MultiLineExpr MultiLineSEP PrimaryExpr
			{
				$MultiLineExpr.push($PrimaryExpr);
				$$ = $MultiLineExpr;
			}

		| PrimaryExpr MultiLineAND PrimaryExpr
			{
				$$ = [makeExpr($1), 'and', makeExpr($3)];
			}

		| PrimaryExpr MultiLineOR PrimaryExpr
			{
				$$ = [makeExpr($1), 'or', makeExpr($3)];
			}

		| MultiLineExpr VBAR MultiLineAND OptMultiLineSEP PrimaryExpr
			{
				$$ = [makeExpr($1), 'and', makeExpr($5)];
			}

		| MultiLineExpr VBAR MultiLineOR OptMultiLineSEP PrimaryExpr
			{
				$$ = [makeExpr($1), 'or', makeExpr($5)];
			}
		| MultiLineExpr VBAR MultiLineExpr
			{
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| MultiLineExpr '>>=' MultiLineExpr
			{
				$3.unshift('>>=');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| MultiLineExpr '>>>' MultiLineExpr
			{
				$3.unshift('>>>');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| MultiLineExpr '<<<' MultiLineExpr
			{
				$3.unshift('<<<');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| MultiLineExpr '>>' MultiLineExpr
			{
				$3.unshift('>>');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| MultiLineExpr '<<' MultiLineExpr
			{
				$3.unshift('<<');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}

		;

Expr
		: PrimaryExpr
			{
				$$ = [$PrimaryExpr];
			}

		| Expr SEP PrimaryExpr
			{
				$Expr.push($PrimaryExpr);
				$$ = $Expr;
			}

		| PrimaryExpr AND PrimaryExpr
			{
				$$ = [makeExpr($1), 'and', makeExpr($3)];
			}

		| PrimaryExpr OR PrimaryExpr
			{
				$$ = [makeExpr($1), 'or', makeExpr($3)];
			}

		| Expr VBAR AND PrimaryExpr
			{
				$$ = [makeExpr($1), 'and', makeExpr($4)];
			}

		| Expr VBAR OR PrimaryExpr
			{
				$$ = [makeExpr($1), 'or', makeExpr($4)];
			}

		| Expr VBAR Expr
			{
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| Expr '>>=' Expr
			{
				$3.unshift('>>=');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| Expr '>>>' Expr
			{
				$3.unshift('>>>');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| Expr '<<<' Expr
			{
				$3.unshift('<<<');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| Expr '>>' Expr
			{
				$3.unshift('>>');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}
		| Expr '<<' Expr
			{
				$3.unshift('<<');
				$3.unshift(makeExpr($1));
				$$ = $3;
			}

		;

FUNC_BODY
		: NullableSourceElements
		| Expr
			{
				$$ = [[makeExpr($Expr)], "{seq}"];
			}
		;

ExprStatement
		: Expr NEWLINE
			{
				$$ = makeExpr($Expr);
			}
		;

DefStatement
		: VAR DEF Expr NEWLINE
			{
				$$ = [[$VAR, "{atomic}", "{var}"], ":=", makeExpr($3)];
			}
		;

AssignStatement
		: Object ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [$1, '=', makeExpr($3)];
			}
		| AsteriskObject ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [makeExpr($Expr), $AsteriskObject];
			}
		;

OptSEP
		:
		| SEP
		;

IfCaseStatement
		: OptSEP PrimaryExpr OptSEP '{' NullableSourceElements '}'
			{
				$$ = [[makeExpr($PrimaryExpr), $NullableSourceElements]];
			}
		| IfCaseStatement OptSEP PrimaryExpr OptSEP '{' NullableSourceElements '}'
			{
				$1.push([makeExpr($PrimaryExpr), $NullableSourceElements]);
				$$ = $1
			}
		;

IfStatementNoNL
		: IF IfCaseStatement
			{
				$$ = [$IfCaseStatement, 'if'];
			}
		| IF IfCaseStatement OptSEP ELSE OptSEP '{' NullableSourceElements '}'
			{
				$IfCaseStatement.push([$NullableSourceElements, 'else']);
				$$ = [$IfCaseStatement, 'if'];
			}
		| IF IfCaseStatement OptSEP ELSE OptSEP IfStatementNoNL
			{
				$IfCaseStatement.push($IfStatementNoNL);
				$$ = [$IfCaseStatement, 'if'];
			}
		;

IfStatement
		: IfStatementNoNL NEWLINE
		;

EmptyStatement
		: NEWLINE
			{
				$$ = [[], "{empty}"];
			}
		;

WhileStatement
		: WHILE SEP PrimaryExpr SEP '{' NullableSourceElements '}' NEWLINE
			{
				$$ = [makeExpr($PrimaryExpr), 'while', $NullableSourceElements]
			}
		;

FnObjectFieldArg
		: DOT_VAR MultiLineSEP FnArg
			{
				$$ = [$DOT_VAR.substring(1), "{field_arg}", $FnArg];
			}
		| NUMERIC_INDEX MultiLineSEP FnArg
			{
				$$ = [$NUMERIC_INDEX.substring(1), "{index_arg}", $FnArg];
			}
		| "." STRING_LITERAL MultiLineSEP FnArg
			{
				$$ = [$STRING_LITERAL, "{index_arg}", $FnArg];
			}
		;

FnObjectArgs
		: FnObjectFieldArg
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{object_arg}", [$FnObjectFieldArg]];
			}
		| FnObjectArgs MultiLineSEP FnObjectFieldArg
			{
				$FnObjectArgs[2].push($FnObjectFieldArg);
				$$ = $FnObjectArgs;
			}
		;

LITERAL
		: NAT
		| STRING_LITERAL
		| TRUE
		| FALSE
		| NULL
		| UNDEFINED
		;

OptFnArgList
		:
			{
				$$ = [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], 
					"{array_arg}", []]
			}
		| FnVAList
		;

OptFnObjectArgs
		:
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{object_arg}", []];
			}
		| FnObjectArgs
		;

FnArg
		: var
			{
				$$ = [[$var, "{atomic}", "{var}"], "{any_type_arg}"]
			}
		| FnArgTypeLiteralExpr
		| '(' FnArgTypeExpr ')'
			{
				$$ = $FnArgTypeExpr;
			}
		| '!' FnArgTypeLiteralExpr
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{not_arg}", $FnArgTypeLiteralExpr]
			}
		| '!' '(' FnArgTypeExpr ')'
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{not_arg}", $FnArgTypeExpr]
			}
		| '?' FnArgTypeLiteralExpr
		| '?' '(' FnArgTypeExpr ')'
		| '(' var ':' FnArgTypeExpr ')'
			{
				$$ = [[$2, "{atomic}", "{var}"], "{named_arg}", $FnArgTypeExpr]
			}
		;

FnArgTypeLiteralExpr
		: LITERAL
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{literal_arg}", $LITERAL]
			}
		| "*.." NAT
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{lt_arg}", $NAT]
			}
		| NAT ".." NAT
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{between_arg}", $1, $3]
			}
		| NAT "..*"
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{ge_arg}", $NAT]
			}
		| "{" OptFnObjectArgs "}"
			{
				$$ = $OptFnObjectArgs;
			}
		| "[" OptFnArgList "]"
			{
				$$ = $OptFnArgList;
			}
		;

FnArgTypePrimaryExpr
		: var
			{
				$$ = [$var, "{type_arg}"]
			}
		| FnArgTypeLiteralExpr
		| '(' FnArgTypeExpr ')'
			{
				$$ = $FnArgTypeExpr;
			}
		| '!' FnArgTypePrimaryExpr
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{not_arg}", $FnArgTypePrimaryExpr]
			}
		| '?' FnArgTypePrimaryExpr
		;

FnArgTypeExpr
		: FnArgTypePrimaryExpr
		| FnArgTypeExpr "U" FnArgTypePrimaryExpr
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{or_arg}", $FnArgTypeExpr, $FnArgTypePrimaryExpr]
			}
		| FnArgTypeExpr "&" FnArgTypePrimaryExpr
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{and_arg}", $FnArgTypeExpr, $FnArgTypePrimaryExpr]
			}
		;

FnArgList
		: FnArg
			{
				$$ = [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], 
					"{array_arg}", [$FnArg]]
			}
		| FnArgList MultiLineSEP FnArg
			{
				$FnArgList[2].push($FnArg);	
				$$ = $FnArgList;
			}
		;

FnVAArg
		: "..."
			{
				$$ = [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], "{anonymous_va_arg}"];
			}
		| "..." var
			{
				$$ = [[$var, "{atomic}", "{var}"], "{va_arg}"];
			}
		;

FnVAList
		: FnArgList
		| FnVAArg
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"]
				$$ = [$name, "{va_args}", [], $FnVAArg, []];
			}
		| FnVAArg MultiLineSEP FnArgList
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"]
				$$ = [$name, "{va_args}", [], $FnVAArg, $FnArgList[2]];
			}
		| FnArgList MultiLineSEP FnVAArg MultiLineSEP FnArgList
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"]
				$$ = [$name, "{va_args}", $1[2], $FnVAArg, $5[2]];
			}
		| FnArgList MultiLineSEP FnVAArg 
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"]
				$$ = [$name, "{va_args}", $FnArgList[2], $FnVAArg, []];
			}
		;

FnStatement
		: VAR FN OptMultiLineSEP ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [[$VAR, "{atomic}", "{var}"],
					"{fn}", [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], 
					"{array_arg}", []], [[makeExpr($Expr)], "{seq}"]];
			}
//		| VAR DOT_VAR FN ASSIGN_OPERATOR Expr NEWLINE
//			{
//				$$ = [[$VAR, "{.}" , [$DOT_VAR.substring(1), "{atomic}", "{dot}"]],
//						"{fn}", [], [[makeExpr($Expr)], "{seq}"]];
//			}
		| VAR FN OptMultiLineSEP FnVAList ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [[$VAR, "{atomic}", "{var}"],
					"{fn}", $FnVAList, [[makeExpr($Expr)], "{seq}"]];
			}
//		| VAR DOT_VAR FN FnVAList ASSIGN_OPERATOR Expr NEWLINE
//			{
//				$$ = [[$VAR, "{.}" , [$DOT_VAR.substring(1), "{atomic}", "{dot}"]],
//					"{fn}", $FnVAList, [[makeExpr($Expr)], "{seq}"]];
//			}
		| VAR FN "=>" "{" FUNC_BODY "}" NEWLINE
			{
				$$ = [[$VAR, "{atomic}", "{var}"], "{fn}",
						[[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], 
						"{array_arg}", []], $FUNC_BODY];
			}
//		| VAR DOT_VAR FN "=>" "{" FUNC_BODY "}" NEWLINE
//			{
//				$$ = [[$VAR, "{.}" , [$DOT_VAR.substring(1), "{atomic}", "{dot}"]],
//					"{fn}", [], $FUNC_BODY];
//			}
		| VAR FN OptMultiLineSEP FnVAList  "=>" "{" FUNC_BODY "}" NEWLINE
			{
				$$ = [[$VAR, "{atomic}", "{var}"], "{fn}", $FnVAList, $FUNC_BODY];
			}
//		| VAR DOT_VAR FN FnVAList "=>" "{" FUNC_BODY "}" NEWLINE
//			{
//				$$ = [[$VAR, "{.}" , [$DOT_VAR.substring(1), "{atomic}", "{dot}"]],
//					"{fn}", $FnVAList, $FUNC_BODY];
//			}
		;

Statement
		: ExprStatement
		| AssignStatement
		| FnStatement
		| DefStatement
		| IfStatement
		| WhileStatement
		| EmptyStatement
		;

NullableSourceElements
		:
			{
				$$ = [[], '{seq}'];
			}
		| SourceElements
		;

SourceElements
    : Statement
			{
					$$ = [[$Statement], '{seq}'];
			}
    | SourceElements Statement
			{
				$SourceElements[0].push($Statement);
				$$ = $SourceElements;
			}
    ;   

Program
		:
			{
				$$ = [[], '{start}'];
				//lixlib.compile($$);
				return $$;
			}
		| SourceElements EOF
			{
				$$ = [$SourceElements, '{start}'];
				//lixlib.compile($$);
				return $$;
			}
    ;   

