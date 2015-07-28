var PREV = 0; 
var F = 1; 
var STEP = 2; 
var RET = 3; 

function f0(str)
{
	return function (s) {
		switch (s[STEP]) {
			case 0:
				lix(s, f1(str));
			case 1:
				lix(s, cc(ctx));
			case 2:
				lix(s, f1(s[RET]));
			case 4:
				lix(s, f1('ok'));
			default:
				break;
		}
		return s[RET];
	}
}

function cb_print()
{
	return function (s) {
		console.log('cb_print');
	}
}

function immediately(cb)
{
	return function (s) {
		return setImmediate(function () {
			lix_start(cb());
		});
	}
}

function ctx(brk)
{
	return function (s) {
		function cb_print_brk()
		{
			return function (s) {
				console.log('cb_print');
				return lix(s, brk('*good*'))
			}
		}
		switch (s[STEP]) {
			case 0:
//				lix(s, brk('fine'));
				lix(s, immediately(cb_print_brk));
			default:
				break;
		}
	}
}

function f1(str)
{
	return function () {
		console.log(str);
	}
}

function cc(ctx)
{
	return function (s) {
		s = s[PREV]
		function brk(ret) {
			return function (s0) {
				s[RET] = ret;
				setImmediate(function () {
					try {
						lix_resume(s);
					} catch (e) {
						console.log(e);
					}
				});
				throw 0;
			}
		}
		try {
			s[STEP] --;
			lix(s, ctx(brk));
		} catch (e) {
//				console.log(e);
		}
		throw 0;
	}
}

function lix(s, f)
{
	s[STEP] ++;
	var ns = [
		/*prev:*/ s,
		/*f:*/ f,
		/*step:*/ 0,
		/*ret:*/ undefined,
	]
	s[RET] = f(ns);
	ns[PREV] = undefined;
	ns[F] = undefined;
	return s[RET];
}

function lix_resume(s)
{
	var ret = s[RET];
	while (s) {
		s[RET] = ret;
		ret = s[F](s);
		s = s[PREV];
	}
}

function lix_start(f)
{
	try {
		lix ([
			/*PREV*/ null,
			/*F*/ function () {},
			/*STEP*/ 0,
			/*RET*/ undefined,
		], f);
	} catch (e) {
//		console.log(e);
	}
}

lix_start(f0('good'));

