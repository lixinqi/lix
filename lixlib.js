function generateFuncArgs(args, env) {
	var ret = [];
	for (var i = 0; i < args.length; i++) {
		var varname = args[i][0];
		ret.push(varname);
		env[varname] = true;
	}
	return ret.join(", ");
}

function generateSeq(expr, ctx, env) {
	var ret = "{\n";
	var seq = expr[0];
	var length = 	seq.length;
	for (var i = 0; i < length; i++) {
		ret += ctx(generate(seq[i], env), i, length) + ";\n";
	}
	ret += "}";
	return ret;
}

function env_new(env) {
	env = (env || {
		add: true,
		sub: true,
		print: true,
		then: true,
		not: true,
		gt: true,
		ge: true,
		eq: true,
		le: true,
		lt: true,
	});
	var Env = function () {};
	Env.prototype = env;
	var env = new Env();
	return env;
}

function generate (expr, env) {
	if (expr[1] === '{start}') {
		return generate(expr[0], env);
	} else if (expr[1] === '{seq}') {
		return generateSeq(expr, function(x){return x;}, env);
	} else if (expr[1] === '{mono}') {
		return generate(expr[0], env);
	} else if (expr[1] === '{atomic}') {
//		var varname = expr[0];
//		if (env[varname] == undefined) {
//			console.log(varname);
//			var_not_defined;
//		}
		return expr[0];
	} else if (expr[1] === '{func}') {
		var funcEnv = env_new(env);
		var args = generateFuncArgs(expr[0], funcEnv);
		var body = generate(expr[2], funcEnv);
		var body = generateSeq(expr[2], function(v, i, l) {
			if (i + 1 == l) {
				return 'return ' + v;
			}
			return v;
		}, funcEnv);
		return '(function (' + args + ') ' + body + ')';
	} else if (expr[1] === ':=') {
		var varname = expr[0][0];
		var ret = 'var ' + varname + ' = ' + generate(expr[2], env);
		env[varname] = true;
		return ret;
	} else if (expr[1] === '=') {
		var varname = expr[0][0];
		if (env[varname] == undefined) {
			console.log(varname);
			var_not_defined;
		}
		return "(" + varname + "=== undefined ? \n(function(){\nconsole.log('" + varname +" 变量没定义');\n})() : \n(" + varname + " = " + generate(expr[2], env) + "\n))\n"
	}

	var func = generate(expr[1], env);
	var args = generate(expr[0], env);
	for (var i = 2; i < expr.length; i++) {
			args += ', ';
			args += generate(expr[i], env);
	}
	return func + '(' + args + ')';
}

exports.compile = function (expr) {
	var libs = [
	"function add(x, y) {\n return x + y;\n}",
	"function sub(x, y) {\n return x - y; \n}",
	"function print(x) {\n return console.log(x); \n}",
	"function then(x, fn) {\n if (x) { fn(); } else { } return x; \n}",
	"function not(x) {\n return !x \n}",
	"function gt(x, y) {\n return x > y \n}",
	"function ge(x, y) {\n return x >= y \n}",
	"function eq(x, y) {\n return x === y \n}",
	"function le(x, y) {\n return x <= y \n}",
	"function lt(x, y) {\n return x < y \n}",
	].join("\n");

	var env0 = env_new();
	console.log(libs + "\n" + generate(expr, env0));
}
