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

<<EOF>>   { return 'EOF'; }
\s*\n+\s*       { return 'NEWLINE'; }
"("\s*       { return 'OPENPARAN'; }
\s*")"       { return 'CLOSEPARAN'; }
"{"[\n\s]*       { return '{'; }
\s*"}"       { return '}'; }
\s*"->"\s*   		{ return 'FUNC_ARROW'; }
\s*"|"\s*   		{ return 'VBAR'; }
\s*":="\s*  { return 'DEF'; }
\s*"="\s*  { return 'ASSIGN_OPERATOR'; }
"."\s?    { return '.'; }
[_a-zA-Z][_a-zA-Z0-9]* { return 'VAR'; }
[0-9]+  	{ return 'NAT'; }
\s+       { return 'SEP'; }
/lex

%left NEWLINE
%left VBAR
%left SEP

%%

NL
		: NEWLINE
		| SEP NL
		| NL SEP
		;

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
	
PrimaryExpr
		: OPENPARAN Expr CLOSEPARAN FUNC_ARROW OPENBRACE FUNC_BODY CLOSEBRACE
			{
				$$ = [$Expr, '{func}', $FUNC_BODY];
			}
		| OPENPARAN CLOSEPARAN FUNC_ARROW OPENBRACE FUNC_BODY CLOSEBRACE
			{
				$$ = [[], '{func}', $FUNC_BODY];
			}
		| OPENPARAN Expr CLOSEPARAN
			{
//				$$ = [$Expr, '{mono}'];
				$$ = makeExpr($Expr);
			}
		| VAR
			{
				$$ = [$VAR, '{atomic}'];
			}
		| NAT
			{
				$$ = [$NAT, '{atomic}'];
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
//				console.log($3[0]);
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
		: VAR ASSIGN_OPERATOR Expr NEWLINE
			{
				$$ = [[$VAR, '{atomic}'], '=', makeExpr($3)];
			}
		;

Statement
		: ExprStatement
		| AssignStatement
		| DefStatement
		;

Program
		:
    | SourceElements EOF
			{
				$$ = [$SourceElements, '{start}'];
				lixlib.compile($$);
			}
    ;   

SourceElements
    : Statement
			{
				$$ = [[$Statement], '{seq}'];
			}
    | SourceElements Statement
			{
				if ($SourceElements[1] !== '{seq}') {
					$SourceElements = [[$SourceElements], '{seq}'];
				}
				$SourceElements[0].push($Statement);
				$$ = $SourceElements;
			}
    ;   

