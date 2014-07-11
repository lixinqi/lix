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

\s*(("#".*)?\n+)+\s*       		{ return 'NEWLINE'; }

"("\s*       									{ return 'OPENPARAN'; }
\s*")"      									{ return 'CLOSEPARAN'; }
"{"\s*(("#".*)?\n+)*\s* 			{ return '{'; }
\s*"}"       									{ return '}'; }
"["\s*(("#".*)?\n+)*\s*  			{ return '['; }
\s*"]"       									{ return ']'; }

\s*"->"\s*   									{ return 'FUNC_ARROW'; }
\s*"|"\s*   									{ return 'VBAR'; }
\s*":="\s*  									{ return 'DEF'; }
\s*"="\s*  										{ return 'ASSIGN_OPERATOR'; }
\.    												{ return '.'; }
[_a-zA-Z][_a-zA-Z0-9]* 				{ return 'VAR'; }
[0-9]+  											{ return 'NAT'; }
\s+       										{ return 'SEP'; }
/lex

%left NEWLINE
%left VBAR
%left SEP

%%

OPENBRACE
		: '{'
		;

CLOSEBRACE
		: '}'
		;

FUNC_ARGS
		: VAR
			{
				$$ = [[$VAR, '{atomic}']];
			}
		| FUNC_ARGS SEP VAR
			{
				$FUNC_ARGS.push([$VAR, '{atomic}']);
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
				$$ = [$1, '{atomic}'];
			}
		| Object '.' Field
			{
				$$ = [$1, '{.}', $3];
			}
		;

Property
		: '.' PropertyField SEP PrimaryExpr
			{
				$$ = [$2, '{property}', makeExpr($4)];
			}
		| '.' PropertyField NEWLINE PrimaryExpr
			{
				$$ = [$2, '{property}', makeExpr($4)];
			}
		;

PropertyList
		: Property
			{
				$$ = [$1];
			}
		| PropertyList SEP Property
			{
				$1.push($3);
				$$ = $1;
			}
		| PropertyList NEWLINE
		| PropertyList NEWLINE Property
			{
				$1.push($3);
				$$ = $1;
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

MultiLineExpr
		: PrimaryExpr
			{
				$$ = [$PrimaryExpr];
			}
		| MultiLineExpr SEP PrimaryExpr
			{
				$MultiLineExpr.push($PrimaryExpr);
				$$ = $MultiLineExpr;
			}
		| MultiLineExpr NEWLINE
		| MultiLineExpr NEWLINE PrimaryExpr
			{
				$MultiLineExpr.push($PrimaryExpr);
				$$ = $MultiLineExpr;
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
		| Expr VBAR Expr
			{
				$3.unshift(makeExpr($1));
				$$ = $3;
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
				$$ = [[$VAR, '{atomic}'], ':=', makeExpr($3)];
			}
		;

AssignStatement
		: Object ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [$1, '=', makeExpr($3)];
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
		| EmptyStatement
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

