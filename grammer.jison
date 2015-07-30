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
	var short_cut_lambda_args = [];
	for (var i = 0; i < 10; i ++) {
		short_cut_lambda_args.push(["_" + i, "{atomic}", "{var}"]);
	}
//	lixlib = require("./lixlib.js");
//	lixlib = require("./lib.lix.js");
%}

%lex
%%
<<EOF>> 												{ return 'EOF'; }

"\\"\s*(("#".*)?\n+)*\s*				{ return "LAMBDA"; }	
';'															{ return ';'; }	
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
"&"[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]*
																{ return "AMPSAND_VAR" }

"&["\s*(("#".*)?\n+)*\s* 				{ return "&[" }
"&{"\s*(("#".*)?\n+)*\s* 				{ return "&{" }


\s*(("#".*)?\n+)*\s*"&"\s+(("#".*)?\n+)*\s*
															{ return "&"; }

\s*(("#".*)?\n+)*\s*"&"\s*(("#".*)?\n+)+\s*
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

\s*(("#".*)?\n+)*\s*"->"\s*(("#".*)?\n+)*\s*   { return "->"; }
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

"{"\s*(("#".*)?\n+)*\s* 			{ return '{'; }
\s*(("#".*)?\n+)*\s*"}"       { return '}'; }

\s*(("#".*)?\n+)*\s*'proto'\s*(("#".*)?\n+)*\s*
															{ return 'PROTO'; }
\s*(("#".*)?\n+)*\s*'instance'\s*(("#".*)?\n+)*\s*
															{ return 'INSTANCE'; }

\s*(("#".*)?\n+)+\s*       		{ return 'NEWLINE'; }


"("\s*       									{ return '('; }
\s*")"      									{ return ')'; }
"["\s*(("#".*)?\n+)*\s*  			{ return '['; }
\s*"]"       									{ return ']'; }


\s+'ptn'											{ return 'PTN'; }
\s+'fn'												{ return 'FN'; }
'match'												{ return 'MATCH'; }
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

"<>"													{ return '<>'; }
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
\s+"="\s+  	{ return '='; }

\s*(("#".*)?\n+)*\s*":"\s*(("#".*)?\n+)*\s*
															{ return ":"; }

"!" 													{ return "!"; }


\s+       										{ return 'SEP'; }
/lex

%left NEWLINE
%left VBAR  ">>" "<<" ">>>" "<<<" ">>="
%left SEP
%left "="
%left FN PTN

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
	| "<>"	
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
	
AmpsandObject
		: AMPSAND_VAR
			{
				$$ = [$AMPSAND_VAR.substring(1), "{atomic}", "{var}"];
			}
		| AmpsandObject PropertyField
			{
				$$ = [$1, "{.}", $PropertyField];
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
				$$ = [['"' + ($1).substr(1) + '"', "{atomic}"], "{module}", "{var}"];
			}
		| DOLLAR_PARAN MultiLineExpr ')'
			{
				$$ = [makeExpr($MultiLineExpr), "{module}", "{index}"];
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
		| PropertyList MultiLineSEP
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

VarList
		: var
			{
				$$ = [[$var, "{atomic}", "{var}"]];
			}
		| VarList MultiLineSEP var
			{
				$VarList.push([$var, "{atomic}", "{var}"]);
				$$ = $VarList;
			}
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
		| '[' ArrayLiteral ']' "->" '{' '}'
			{
				$$ = [$ArrayLiteral, "{func}", [[], "{seq}"]];
			}

		| LAMBDA LambdaArgList "->" '{' '}'
			{
				$$ = [[], "{func}", [[], "{seq}"]];
			}
		| LAMBDA "(" MultiLineExpr ")"
			{
				$$ = [short_cut_lambda_args, "{func}", [[makeExpr($MultiLineExpr)], "{seq}"]];
			}

		| Match

		| LAMBDA '{' '}'
			{
				$$ = [[], "{func}", [[], "{seq}"]];
			}

		| LAMBDA '{' SourceElements '}'
			{
				$$ = [[], "{func}", $SourceElements];
			}

		| '[' ArrayLiteral ']' "->" '{' SourceElements '}'
			{
				$$ = [$ArrayLiteral, "{func}", $SourceElements];
			}

		| LAMBDA LambdaArgList "->" '{' SourceElements '}'
			{
				$$ = [$LambdaArgList, "{lambda}", $SourceElements];
			}

		| '[' ']' "->" '{' SourceElements '}'
			{ $$ = [[], "{func}", $SourceElements]; }

		| LAMBDA "->" '{' SourceElements '}'
			{ $$ = [[], "{func}", $SourceElements]; }

		| '[' ']' "->" '{' '}'
			{ $$ = [[], "{func}", [[], "{seq}"]]; }

		| LAMBDA "->" '{' '}'
			{ $$ = [[], "{func}", [[], "{seq}"]]; }

		| AsteriskObject
			{
				$$ = [$AsteriskObject, "{asterisk}"]
			}

		| AmpsandObject
			{
				$$ = [$AmpsandObject, "{ampersand}"]
			}
		| "&[" OptMultiLineSEP "]"
			{
				$$ = [[], "{ampersand_bracket}"];
			}

		| "&[" $VarList OptMultiLineSEP "]"
			{
				$$ = [$VarList, "{ampersand_bracket}"];
			}

		| "&{" OptMultiLineSEP "}"
			{
				$$ = [{}, "{ampersand_object}"];
			}

		| "&{" $VarList OptMultiLineSEP"}"
			{
				var $Fields = {}
				for (var i in $VarList) {
					$Fields[$VarList[i][0]] = $VarList[i];
				}
				$$ = [$Fields, "{ampersand_object}"];
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

LambdaArrayArgList
		: var
			{
				$$ = [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"],
					"{array_arg}", [[[$var, "{atomic}", "{var}"], "{any_type_arg}"]]];
			}
		| LambdaArrayArgList MultiLineSEP var
			{
				$LambdaArrayArgList[2].push([[$var, "{atomic}", "{var}"], "{any_type_arg}"]);
				$$ = $LambdaArrayArgList;
			}
		;

LambdaArg
		: var
			{
				$$ = [[$var, "{atomic}", "{var}"], "{any_type_arg}"];
			}
		| '[' ']'
			{
				$$ = [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], "{array_arg}", []];
			}
		| '[' LambdaArrayArgList ']'
			{
				$$ = $LambdaArrayArgList
			}
		;

LambdaArgList
		: LambdaArg
			{
				$$ = [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"],
						"{array_arg}", [$LambdaArg]];
			}
		| LambdaArgList MultiLineSEP LambdaArg
			{
				$LambdaArgList[2].push($LambdaArg);
				$$ = $LambdaArgList;
			}
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

//FUNC_BODY
//		: SourceElements
//		| Expr
//			{
//				$$ = [[makeExpr($Expr)], "{seq}"];
//			}
//		;

ExprStatement
		: Expr
			{
				$$ = makeExpr($Expr);
			}
		;

DefStatement
		: VAR DEF Expr
			{
				$$ = [[$VAR, "{atomic}", "{var}"], ":=", makeExpr($3)];
			}
		;

AssignStatement
		: Object "=" Expr
			{
				$$ = [$1, '=', makeExpr($3)];
			}
		| AsteriskObject "=" Expr
			{
				$$ = [makeExpr($Expr), $AsteriskObject];
			}
		;

OptSEP
		:
		| SEP
		;

IfCaseStatement
		: OptSEP PrimaryExpr OptSEP '{' SourceElements '}'
			{
				$$ = [[makeExpr($PrimaryExpr), $SourceElements]];
			}
		| IfCaseStatement OptSEP PrimaryExpr OptSEP '{' SourceElements '}'
			{
				$1.push([makeExpr($PrimaryExpr), $SourceElements]);
				$$ = $1
			}
		;

IfStatementNoNL
		: IF IfCaseStatement
			{
				$$ = [$IfCaseStatement, 'if'];
			}
		| IF IfCaseStatement OptSEP ELSE OptSEP '{' SourceElements '}'
			{
				$IfCaseStatement.push([$SourceElements, 'else']);
				$$ = [$IfCaseStatement, 'if'];
			}
		| IF IfCaseStatement OptSEP ELSE OptSEP IfStatementNoNL
			{
				$IfCaseStatement.push($IfStatementNoNL);
				$$ = [$IfCaseStatement, 'if'];
			}
		;

IfStatement
		: IfStatementNoNL
		;

EmptyStatement
		: 
			{
				$$ = [[], "{empty}"];
			}
		;

WhileStatement
		: WHILE SEP PrimaryExpr SEP '{' SourceElements '}'
			{
				$$ = [makeExpr($PrimaryExpr), 'while', $SourceElements]
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
		| '(' var PTN ')'
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{ptn_arg}", $var];
			}
		| '(' var PROTO ')'
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{type_arg}", $var];
			}
		| '(' var INSTANCE ')'
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{type_arg}", $var];
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
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
				$$ = [$name, "{type_arg}", $var]
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
//		| "..." "(" FnArgTypeExpr ")"
//			{
//				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"];
//				$$ = [$name, "{va_cond_arg}", $FnArgTypeExpr];
//			}
//		| "..." "(" var ':' FnArgTypeExpr ")"
//			{
//				$$ = [[$var, "{atomic}", "{var}"], "{va_cond_arg}", $FnArgTypeExpr];
//			}
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

MatchCase
		: FnVAList "->" "{" SourceElements "}"
			{
				$$ = [null, "{fn}", $FnVAList, $SourceElements];
			}
//		: FnArgTypeExpr "->" "{" SourceElements "}"
//			{
//				$$ = [null, "{fn}", [[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], 
//					"{array_arg}", [$FnArgTypeExpr]], $SourceElements];
//			}
		;

MatchCaseList
		: MatchCase
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"]
				$MatchCase[0] = $name;
				$$ = [$name, "{matchCaseList}", [$MatchCase]];
			}
		| MatchCaseList MultiLineSEP MatchCase
			{
				$MatchCase[0] = $MatchCaseList[0];
				$MatchCaseList[2].push($MatchCase);
				$$ = $MatchCaseList;
			}
		| MatchCaseList MultiLineSEP
		;

Match
		:	MATCH MultiLineSEP "{" "}"
			{
				$$ = [[], "{func}", [[], "{seq}"]];	
			}
		| MATCH MultiLineSEP "{" MatchCaseList "}"
			{
				var $name = [getUniqVarName(), "{atomic}", "{var}", "{tmp}"]
				$MatchCaseList[2].push([$MatchCaseList[0], "{fn}",
					[$name, "{va_args}", [], [$name, "{anonymous_va_arg}"], []],
					[[], "{seq}"]]);
				$$ = [$MatchCaseList, "match"]
			}
		;

PtnStatement
		: var PTN "=" FnArgTypeExpr
			{
				$$ = [[$var, "{atomic}", "{var}"], "ptn", $FnArgTypeExpr];
			}
		;

FnStatement
		: var FN "->" "{" SourceElements "}"
			{
				$$ = [[$var, "{atomic}", "{var}"], "{fn}",
						[[getUniqVarName(), "{atomic}", "{var}", "{tmp}"], 
						"{array_arg}", []], $SourceElements];
			}
		| var FN "=" OptMultiLineSEP Expr
			{
				var expr = [["Larguments[0]", "{atomic}", "{var}", "{tmp}"], makeExpr($Expr)];
				$$ = [[$var, "{atomic}", "{var}"],
					"{fn}", $FnVAList, [[expr], "{seq}"]];
			}
		| var FN OptMultiLineSEP FnVAList "=" OptMultiLineSEP Expr
			{
				var expr = [["Larguments[0]", "{atomic}", "{var}", "{tmp}"], makeExpr($Expr)];
				$$ = [[$var, "{atomic}", "{var}"],
					"{fn}", $FnVAList, [[expr], "{seq}"]];
			}
		| var FN OptMultiLineSEP FnVAList "->" "{" SourceElements "}"
			{
				$$ = [[$var, "{atomic}", "{var}"], "{fn}", $FnVAList, $SourceElements];
			}
		;

Statement
		: ExprStatement
		| AssignStatement
		| FnStatement
		| PtnStatement
		| DefStatement
		| IfStatement
		| WhileStatement
//		| EmptyStatement
		;

//NullableSourceElements
//		:
//			{
//				$$ = [[], "{seq}"];
//			}
//		: SourceElements
//		;

OptNEWLINE
		:
		| NEWLINE
		;

OptStatementSeperator
		:
		| StatementSeperator
		| OptStatementSeperator StatementSeperator
		;

StatementSeperator
		: NEWLINE
		| ';'
		;

SourceElements
    : Statement
			{
					$$ = [[$Statement], "{seq}"];
			}
//    | SourceElements StatementSeperator
    | SourceElements NEWLINE Statement
			{
				$SourceElements[0].push($Statement);
				$$ = $SourceElements;
			}
    ;   

Program
		: OptNEWLINE EOF
			{
				$$ = [[[], "{seq}"], "{start}"];
				//lixlib.compile($$);
				return $$;
			}
		| OptNEWLINE SourceElements OptNEWLINE EOF
			{
				$$ = [$SourceElements, "{start}"];
				//lixlib.compile($$);
				return $$;
			}
    ;   

