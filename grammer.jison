/* Lambda calculus grammar by Zach Carter */
/*\s+\.													{ return 'SEPDOT'; }*/
/*\s*(("#".*)?\n+)+\s*\.				{ return 'NLDOT'; }*/

%start Program

%{
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
<<EOF>>   											{ return 'EOF'; }

"/"+"("\s*(("#".*)?\n+)*\s*			{ return 'DIRITEM_PARAN'; }
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

"."[0-9]+  											{ return 'NUMERIC_INDEX'; }

"&"  											{ return 'AMPERSAND'; }


\'(\\.|[^\\'])*\'|\"(\\.|[^\\"])*\"			{ return 'STRING_LITERAL'; }	

\.    												{ return '.'; }
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



"("\s*       									{ return 'OPENPARAN'; }
\s*")"      									{ return 'CLOSEPARAN'; }
"{"\s*(("#".*)?\n+)*\s* 			{ return '{'; }
\s*"}"       									{ return '}'; }
"["\s*(("#".*)?\n+)*\s*  			{ return '['; }
\s*"]"       									{ return ']'; }


'if'													{ return 'IF'; }
'else'												{ return 'ELSE'; }
'while'												{ return 'WHILE'; }
'true'												{ return 'TRUE'; }
'false'												{ return 'FALSE'; }
"and"\s*											{ return 'AND'; }
"or"\s*												{ return 'OR'; }
\s+"and"\s+										{ return 'AND'; }
\s+"or"\s+										{ return 'OR'; }

[+-]?[0-9]+("."[0-9]*)?([Ee][+-]?[0-9]+)?  		{ return 'NAT'; }
[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]* 				{ return 'var'; }

'$'"("\s*(("#".*)?\n+)*\s* 				{ return 'DOLLAR_PARAN'; }
'$'[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]* 				{ return 'DOLLAR_STR'; }

"+"														{ return 'var'; }
"*"														{ return 'var'; }
"-"														{ return 'var'; }
"/"														{ return 'DIV'; }
"%"														{ return 'var'; }
">="													{ return 'var'; }
">"														{ return 'var'; }
"=="													{ return 'var'; }
"!="													{ return 'var'; }
"<="													{ return 'var'; }
"<"														{ return 'var'; }

\s+":="\s+  									{ return 'DEF'; }
\s+"="\s+  										{ return 'ASSIGN_OPERATOR'; }

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

%%

VAR
	: var
	| DIV
	;
		

FUNC_ARGS
		: VAR
			{
				$$ = [[$VAR, "{atomic}", "{var}"]];
			}
		| FUNC_ARGS SEP VAR
			{
				$FUNC_ARGS.push([$VAR, '{atomic}', '{var}']);
				$$ = $FUNC_ARGS;
			}
		;

PropertyField
		: '.' VAR
			{
				$$ = [$VAR, "{atomic}", "{dot}", "{global}"];
			}
		| NUMERIC_INDEX
			{
				$$ = [[$NUMERIC_INDEX.substring(1), '{atomic}'], '{index}', "{index}", "{global}"];
			}
//		| '.' NAT
//			{
//				$$ = [[$NAT, '{atomic}'], '{index}'];
//			}
		| '.' STRING_LITERAL
			{
				$$ = [[$STRING_LITERAL, '{atomic}'], '{index}', "{index}", "{global}"];
			}
//		| '.' OPENPARAN STRING_LITERAL CLOSEPARAN
//			{
//				$$ = [[$STRING_LITERAL, '{atomic}'], '{index}'];
//			}
//		| '.' OPENPARAN NAT CLOSEPARAN
//			{
//				$$ = [[$NAT, '{atomic}'], '{index}'];
//			}
		| '.' OPENPARAN MultiLineExpr CLOSEPARAN
			{
				$$ = [makeExpr($MultiLineExpr), '{index}', "{index}"];
			}
		;
	
Field
		: VAR
			{
				$$ = [$1, '{atomic}'];
			}
		| OPENPARAN MultiLineExpr CLOSEPARAN
			{
				$$ = [makeExpr($2), '{index}'];
			}
		| NAT
			{
				$$ = [[$1, '{atomic}'], '{index}'];
			}
		;
	
Object
		: VAR
			{
				$$ = [$1, '{atomic}', '{var}'];
			}
		| DOLLAR_STR
			{
				$$ = [($1).substr(1), '{module}', '{var}'];
			}
		| DOLLAR_PARAN MultiLineExpr CLOSEPARAN
			{
				$$ = [makeExpr($3), '{module}', '{index}'];
			} 
		| Object PropertyField
			{
				$$ = [$1, '{.}', $PropertyField];
			}
//		| Object '.' Field
//			{
//				$$ = [$1, '{.}', $3];
//			}
		;

Property
		: PropertyField SEP PrimaryExpr
			{
				$$ = [$1, '{property}', makeExpr($3)];
			}
		| PropertyField NEWLINE PrimaryExpr
			{
				$$ = [$1, '{property}', makeExpr($3)];
			}
		;

PropertyList
		: Property
			{
				$$ = [$Property];
			}
		| PropertyList SEP Property
			{
				$PropertyList.push($Property);
				$$ = $PropertyList;
			}
		| PropertyList NEWLINE
		| PropertyList NEWLINE Property
			{
				$PropertyList.push($Property);
				$$ = $PropertyList;
			}
		;

DirItem
		: DIRITEM
			{
				$$ = [$1, '{path_item}'];
			}
		| CURRENT_DIRITEM_PARAN MultiLineExpr CLOSEPARAN
			{
				$$ = [makeExpr($MultiLineExpr), '{path_arg_item}', './'];
			}
		| PARENT_DIRITEM_PARAN MultiLineExpr CLOSEPARAN
			{
				$$ = [makeExpr($MultiLineExpr), '{path_arg_item}', '../'];
			}
		| DIRITEM_PARAN MultiLineExpr CLOSEPARAN
			{
				$$ = [makeExpr($MultiLineExpr), '{path_arg_item}', ''];
			}
		;

PATH
		: DirItem
			{
				$$ = [[$DirItem], '{path}'];
			}
		| PATH DirItem
			{
				$PATH[0].push($DirItem);
				$$ = $PATH;
			}
		;

Slashes
		: DIV
		| ROOT
		;

Path
		: PATH
		| ROOT
			{
				$$ = [[$ROOT], '{path}'];
			}
		| PARENT_PATH
			{
				$$ = [[$PARENT_PATH], '{path}'];
			}
		| CURRENT_PATH
			{
				$$ = [[$CURRENT_PATH], '{path}'];
			}
		| Path Slashes
		;

PrimaryExpr
		: '[' ']'
			{
				$$ = [[], '{array}'];
			}
		| '[' ArrayLiteral ']'
			{
				$$ = [$ArrayLiteral, '{array}'];
			}
		| '[' ArrayLiteral ']' FUNC_ARROW '{' FUNC_BODY '}'
			{
				$$ = [$ArrayLiteral, '{func}', $FUNC_BODY];
			}

		| '[' ']' FUNC_ARROW '{' FUNC_BODY '}'
			{ $$ = [[], '{func}', $FUNC_BODY]; }
		| AMPERSAND VAR
			{
				$$ = [[["$x", "{atomic}", "{var}"]], "{func}", [[
					[[$VAR, "{atomic}", "{var}"], '=', ["$x", "{atomic}", "{var}"]],
				], "{seq}"]];	
			}

		| OPENPARAN MultiLineExpr CLOSEPARAN
			{
				$$ = makeExpr($MultiLineExpr);
			}

		| '{' '}'
			{
				$$ = [[], '{object}'];
			}
		| '{' PropertyList '}'
			{
				$$ = [$2, '{object}'];
			}
		| PropertyField
			{
				$$ = [$PropertyField, '{method}', 'field']
			}
		| Object
		| NAT
			{
				$$ = [$NAT, '{atomic}'];
			}
		| FALSE
			{
				$$ = [$FALSE, '{atomic}'];
			}
		| TRUE
			{
				$$ = [$TRUE, '{atomic}'];
			}
		| STRING_LITERAL
			{
				$$ = [$STRING_LITERAL, '{atomic}'];
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
				$$ = [[makeExpr($Expr)], '{seq}'];
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
				$$ = [[$VAR, '{atomic}', '{var}'], ':=', makeExpr($3)];
			}
		;

AssignStatement
		: Object ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [$1, '=', makeExpr($3)];
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
				$$ = [[], '{empty}'];
			}
		;

WhileStatement
		: WHILE SEP PrimaryExpr SEP '{' NullableSourceElements '}' NEWLINE
			{
				$$ = [makeExpr($PrimaryExpr), 'while', $NullableSourceElements]
			}
		;

Statement
		: ExprStatement
		| AssignStatement
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

