/* Lambda calculus grammar by Zach Carter */

%start Program

%{
	function makeExpr(expr) {
		if (expr.length === 1) {
			expr.push('{mono}');
		}
		return expr;
	}
	lixlib = require("./lixlib.js");
%}

%lex
%%
<<EOF>>   										{ return 'EOF'; }
\'(\\.|[^\\'])*\'|\"(\\.|[^\\"])*\"			{ return 'STRING_LITERAL'; }	

\.    												{ return '.'; }
\s+\.													{ return 'SEPDOT'; }
\s*(("#".*)?\n+)+\s*\.				{ return 'NLDOT'; }
\s*(("#".*)?\n+)*\s*"->"\s*(("#".*)?\n+)*\s*   { return 'FUNC_ARROW'; }

\s*(("#".*)?\n+)+\s*       		{ return 'NEWLINE'; }

\s*"|"\s*   									{ return 'VBAR'; }

"("\s*       									{ return 'OPENPARAN'; }
\s*")"      									{ return 'CLOSEPARAN'; }
"{"\s*(("#".*)?\n+)*\s* 			{ return '{'; }
\s*"}"       									{ return '}'; }
"["\s*(("#".*)?\n+)*\s*  			{ return '['; }
\s*"]"       									{ return ']'; }



'if'													{ return 'IF' }
'else'												{ return 'ELSE' }

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
		| PropertyList SEPDOT Property
			{
				$PropertyList.push($Property);
				$$ = $PropertyList;
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
		| Object
		| NAT
			{
				$$ = [$NAT, '{atomic}'];
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

MultiLineBasicExpr
		: PrimaryExpr
			{
				$$ = [$PrimaryExpr];
			}

		| MultiLineBasicExpr NEWLINE

		| MultiLineBasicExpr MultiLineSEP PrimaryExpr
			{
				$MultiLineBasicExpr.push($PrimaryExpr);
				$$ = $MultiLineBasicExpr;
			}
		;


BasicExpr
		: PrimaryExpr
			{
				$$ = [$PrimaryExpr];
			}

		| BasicExpr SEP PrimaryExpr
			{
				$BasicExpr.push($PrimaryExpr);
				$$ = $BasicExpr;
			}
		;

MultiLineDOT
		: NLDOT
		| SEPDOT
		;

MultiLineDOTAfterVar
		: '.'
		| NLDOT
		;

MultiLineSEP
		: SEP
		| NEWLINE
		;

MultiLineExpr
		: MultiLineBasicExpr

		| PrimaryExpr MultiLineDOT Field
			{
				$$ = [[$PrimaryExpr, $Field], '{method}'];
			}

		| PrimaryExpr MultiLineDOT Field MultiLineSEP
			{
				$$ = [[$PrimaryExpr, $Field], '{method}'];
			}

		| PrimaryExpr MultiLineDOT Field MultiLineSEP MultiLineBasicExpr
			{
				$$ = [[$PrimaryExpr, $Field], '{method}'];
				for (var i = 0; i < $MultiLineBasicExpr.length; i++) {
					$$[0].push($MultiLineBasicExpr[i]);
				}
			}

		| MultiLineExpr VBAR MultiLineBasicExpr
			{
				$3.unshift(makeExpr($1));
				$$ = $3;
			}

		| MultiLineExpr VBAR MultiLineDOTAfterVar Field
			{
				$$ = [[makeExpr($MultiLineExpr), $Field], '{method}'];
			}

		| MultiLineExpr VBAR MultiLineDOTAfterVar Field MultiLineSEP
			{
				$$ = [[makeExpr($MultiLineExpr), $Field], '{method}'];
			}

		| MultiLineExpr VBAR MultiLineDOTAfterVar Field MultiLineSEP MultiLineBasicExpr
			{
				$$ = [[makeExpr($MultiLineExpr), $Field], '{method}'];
				for (var i = 0; i < $MultiLineBasicExpr.length; i++) {
					$$[0].push($MultiLineBasicExpr[i]);
				}
			}
		;

Expr
		: BasicExpr

		| PrimaryExpr SEPDOT Field
			{
				$$ = [[$PrimaryExpr, $Field], '{method}'];
			}

		| PrimaryExpr SEPDOT Field SEP BasicExpr
			{
				$$ = [[$PrimaryExpr, $Field], '{method}'];
				for (var i = 0; i < $BasicExpr.length; i++) {
					$$[0].push($BasicExpr[i]);
				}
			}

		| Expr VBAR BasicExpr
			{
				$3.unshift(makeExpr($1));
				$$ = $3;
			}

		| Expr VBAR '.' Field
			{
				$$ = [[makeExpr($Expr), $Field], '{method}'];
			}
		| Expr VBAR '.' Field SEP BasicExpr
			{
				$$ = [[makeExpr($Expr), $Field], '{method}'];
				for (var i = 0; i < $BasicExpr.length; i++) {
					$$[0].push($BasicExpr[i]);
				}
			}
		;

FUNC_BODY
		:
		| Expr
			{
				$$ = makeExpr($Expr);
			}
		| SourceElements
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

IfStatement
		: IF IfCaseStatement NEWLINE
			{
				$$ = [$IfCaseStatement, 'if'];
			}
		| IF IfCaseStatement OptSEP ELSE OptSEP '{' NullableSourceElements '}' NEWLINE
			{
				$IfCaseStatement.push(['else', $NullableSourceElements]);
				$$ = [$IfCaseStatement, 'if'];
			}
		;

EmptyStatement
		: NEWLINE
			{
				$$ = [[], '{empty}'];
			}
		;


Statement
		: ExprStatement
		| AssignStatement
		| DefStatement
		| IfStatement
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

