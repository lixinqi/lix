/* Lambda calculus grammar by Zach Carter */
/*\s+\.													{ return 'SEPDOT'; }*/
/*\s*(("#".*)?\n+)+\s*\.				{ return 'NLDOT'; }*/

%start Program

%{
	function makeExpr(expr) {
		if (expr.length === 1) {
			expr.push('{mono}');
		}
		return expr;
	}
//	lixlib = require("./lixlib.js");
	lixlib = require("./lib.lix.js");
%}

%lex
%%
<<EOF>>   										{ return 'EOF'; }
\'(\\.|[^\\'])*\'|\"(\\.|[^\\"])*\"			{ return 'STRING_LITERAL'; }	

\.    												{ return '.'; }
\s*(("#".*)?\n+)*\s*"->"\s*(("#".*)?\n+)*\s*   { return 'FUNC_ARROW'; }
\s*(("#".*)?\n+)+\s*"and"\s*(("#".*)?\n+)*\s*	{ return 'NLAND'; }
\s*(("#".*)?\n+)+\s*"or"\s*(("#".*)?\n+)*\s*	{ return 'NLOR'; }

\s*(("#".*)?\n+)+\s*       		{ return 'NEWLINE'; }

\s*"|"\s*   									{ return 'VBAR'; }

"("\s*       									{ return 'OPENPARAN'; }
\s*")"      									{ return 'CLOSEPARAN'; }
"{"\s*(("#".*)?\n+)*\s* 			{ return '{'; }
\s*"}"       									{ return '}'; }
"["\s*(("#".*)?\n+)*\s*  			{ return '['; }
\s*"]"       									{ return ']'; }



'if'													{ return 'IF'; }
'else'												{ return 'ELSE'; }
'while'												{ return 'WHILE'; }
'break'												{ return 'BREAK'; }
'true'												{ return 'TRUE'; }
'false'												{ return 'FALSE'; }
"and"\s*											{ return 'AND'; }
"or"\s*												{ return 'OR'; }
\s+"and"\s+										{ return 'AND'; }
\s+"or"\s+										{ return 'OR'; }

[+-]?[0-9]+("."[0-9]*)?([Ee][+-]?[0-9]+)?  		{ return 'NAT'; }
[\u4e00-\u9fa5_a-zA-Z][\u4e00-\u9fa5_a-zA-Z0-9]* 				{ return 'VAR'; }
"+"														{ return 'VAR'; }
"*"														{ return 'VAR'; }
"-"														{ return 'VAR'; }
"/"														{ return 'VAR'; }
"%"														{ return 'VAR'; }
">="													{ return 'VAR'; }
">"														{ return 'VAR'; }
"=="													{ return 'VAR'; }
"<="													{ return 'VAR'; }
"<"														{ return 'VAR'; }

\s+":="\s+  									{ return 'DEF'; }
\s+"="\s+  										{ return 'ASSIGN_OPERATOR'; }

\s+       										{ return 'SEP'; }
/lex

%left NEWLINE
%left VBAR
%left SEP
%left ASSIGN_OPERATOR

%%

FUNC_ARGS
		: VAR
			{
				$$ = [[$VAR, '{atomic}', '{var}']];
			}
		| FUNC_ARGS SEP VAR
			{
				$FUNC_ARGS.push([$VAR, '{atomic}', '{var}']);
				$$ = $FUNC_ARGS;
			}
		;

PropertyField
		: VAR
			{
				$$ = [$1, '{atomic}'];
			}
		| '[' STRING_LITERAL ']'
			{
				$$ = [[$2, '{atomic}'], '{index}'];
			}
		| '[' NAT ']'
			{
				$$ = [[$2, '{atomic}'], '{index}'];
			}
		| NAT
			{
				$$ = [[$1, '{atomic}'], '{index}'];
			}
		;
	
Field
		: VAR
			{
				$$ = [$1, '{atomic}'];
			}
		| '[' MultiLineExpr ']'
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
		| Object '.' Field
			{
				$$ = [$1, '{.}', $3];
			}
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
		: '.' Property
			{
				$$ = [$Property];
			}
		| PropertyList SEP '.' Property
			{
				$PropertyList.push($Property);
				$$ = $PropertyList;
			}
		| PropertyList NEWLINE
		| PropertyList NEWLINE '.' Property
			{
				$PropertyList.push($Property);
				$$ = $PropertyList;
			}
		;

PrimaryExpr
		: OPENPARAN MultiLineExpr CLOSEPARAN FUNC_ARROW '{' FUNC_BODY '}'
			{
				$$ = [$MultiLineExpr, '{func}', $FUNC_BODY];
			}
		| OPENPARAN CLOSEPARAN FUNC_ARROW '{' FUNC_BODY '}'
			{
				$$ = [[], '{func}', $FUNC_BODY];
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
		| '[' ']'
			{
				$$ = [[], '{array}'];
			}
		| '[' ArrayLiteral ']'
			{
				$$ = [$ArrayLiteral, '{array}'];
			}
		| '.' PropertyField
			{
				$$ = [$2, '{method}']
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

		;

FUNC_BODY
		: NullableSourceElements
		| Expr
			{
				$$ = makeExpr($Expr);
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

BreakStatement
		: BREAK NEWLINE
			{
				$$ = [[], 'break']
			}
		;

Statement
		: ExprStatement
		| AssignStatement
		| DefStatement
		| IfStatement
		| WhileStatement
		| BreakStatement
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
		| SourceElements EOF
			{
				$$ = [$SourceElements, '{start}'];
				lixlib.compile($$);
			}
    ;   

