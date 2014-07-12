function counterGenerator() {
		var count = 0;
		return function () {
			var ret = count;
			count = (count + 1);
			return count;
		};
}

var getCount = counterGenerator();

function generateFuncArgs(args, env) {
	var ret = [];
	for (var i = 0; i < args.length; i++) {
		var varname = args[i][0];
		ret.push(varname);
		env[varname] = true;
	}
	return ret.join(", ");
}

var ctx0 = function (x) {
	return x;
};

function generateSeq(expr, env, ctx) {
//	var ret = "{\n";
	var ret = "";
	var seq = expr[0];
	var length = 	seq.length;
	for (var i = 0; i < length; i++) {
		ret += ctx(generate(seq[i], env, ctx0), i, length) + ";\n";
	}
//	ret += "}";
	return ret;
}

function generatePropertyName(expr, env, ctx) {
	if (expr[1] === '{atomic}') {
		var ret = expr[0];
		return ctx(ret, 0, 1);
	} else if ((expr[1] === '{index}')) {
		var ret = expr[0][0];
		return ctx(ret, 0, 1);
	}
}

function generateProperty(expr, env, ctx) {
	var propertyName = generatePropertyName(expr[0], env, ctx);
	var propertyValue = generate(expr[2], env, ctx0);
	return propertyName + ": " + propertyValue;
}

function generateObjectLiteral(expr, env, ctx) {
	var list = expr[0];
	var length = 	list.length;
	var collect = [];
	for (var i = 0; i < length; i++) {
		collect[i] = generateProperty(list[i], env, ctx0);
	}
	var ret = "{\n" + collect.join(",\n") + "\n}";
	return ret;
}

function getVarName(expr) {
	if (expr[1] === '{atomic}') {
		return expr[0];
	} else if (expr[1] === '{.}') {
		return getVarName (expr[0]);
	}
}

function generateField(expr, env, ctx) {
	if (expr[1] === '{atomic}') {
		var ret = '.' + expr[0];
		return ctx(ret, 0, 1);
	} else if (expr[1] === '{index}') {
		var ret = '[' + generate(expr[0], env, ctx0) + ']';
		return ctx(ret, 0, 1);
	}
}

function generateFieldAccess(expr, env, ctx) {
	if (expr[1] === '{atomic}') {
		var ret = expr[0];
		return ctx(ret, 0, 1);
	} else if (expr[1] === '{.}') {
		var field = generateField(expr[2], env, ctx);
		var ret = generateFieldAccess(expr[0], env, ctx0) + field;
		return ctx(ret, 0, 1);
	}
	die();
}

function generateArray(expr, env, ctx) {
	var ret = "[";
	var arr = expr[0];
	var length = 	arr.length;
	for (var i = 0; i < length; i++) {
		ret += ctx(generate(arr[i], env, ctx0), i, length) + ",";
	}
	ret += "]";
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
		_instance_: true,
	});
	var Env = function () {};
	Env.prototype = env;
	var env = new Env();
	return env;
}


function generateMethod(methodExpr, env, ctx) {
	var expr = methodExpr[0];

	var method = generateField(expr[1], env, ctx0);
	var obj = generate(expr[0], env, ctx0);
	var localValName = '_val_' + getCount();
	var args = localValName;
	for (var i = 2; i < expr.length; i++) {
			args += ', ';
			args += generate(expr[i], env, ctx0);
	}
	method = localValName + method;
	ret = '(function (' +
					localValName +') { return ' + method + '(' + args + '); })(' + obj + ')';
	return ret;
}

function generate (expr, env, ctx) {
//	ctx = (ctx || function (x) { return x; });
	if (expr[1] === '{start}') {
		return generate(expr[0], env, ctx);
	} else if (expr[1] === '{seq}') {
		return generateSeq(expr, env, ctx);
	} else if (expr[1] === '{mono}') {
		return ctx(generate(expr[0], env, ctx0), 0, 1);
	} else if (expr[1] === '{atomic}') {
		return ctx(expr[0], 0, 1);
	} else if (expr[1] === '{.}') {
		return ctx(generateFieldAccess(expr, env, ctx0));
	} else if (expr[1] === '{func}') {
		var funcEnv = env_new(env);
		var args = generateFuncArgs(expr[0], funcEnv);
		var body = generate(expr[2], funcEnv, function(v, i, l) {
			if (i + 1 == l) {
				return 'return ' + v;
			}
			return v;
		});
		var ret = '(function (' + args + ') {\n' + body + '\n})';
		return ctx(ret, 0, 1);
	} else if (expr[1] === '{array}') {
		return ctx(generateArray(expr, env, ctx0), 0, 1);
	} else if (expr[1] === '{object}') {
		return ctx(generateObjectLiteral(expr, env, ctx0));
	} else if (expr[1] === '{method}') {
		return ctx(generateMethod(expr, env, ctx0), 0, 1);
	} else if (expr[1] === '{empty}') {
		return ctx(0, 0, 1);
	} else if (expr[1] === ':=') {
		var varname = expr[0][0];
		var ret = 'var ' + varname + ' = ' + generate(expr[2], env, ctx);
		env[varname] = true;
		return ret;
	} else if (expr[1] === '=') {
		var varname = getVarName(expr[0]);
		if (env[varname] == undefined) {
			console.log(varname);
			var_not_defined;
		}
		var fieldChain = generate(expr[0], env, ctx0);
		var ret = "(" + fieldChain + " = " + generate(expr[2], env, ctx0) + ")";
		return ctx(ret, 0, 1);
	}

	var func = generate(expr[1], env, ctx0);
	var args = generate(expr[0], env, ctx0);
	for (var i = 2; i < expr.length; i++) {
			args += ', ';
			args += generate(expr[i], env, ctx0);
	}
	var ret = func + '(' + args + ')';
	return ctx(ret, 0, 1);
}

exports.compile = function (expr) {
	var libs = [
	"function add(x, y) {\n return x + y;\n}",
	"function sub(x, y) {\n return x - y; \n}",
	"function print(x) {\n return console.log(x); \n}",
	"function then(x, fn) {\n if (x) { fn(); } else { } return x; \n}",
	"function not(x) {\n return !x \n}",
	"function gt(x, y) {\n return x > y; \n}",
	"function ge(x, y) {\n return x >= y; \n}",
	"function eq(x, y) {\n return x === y; \n}",
	"function le(x, y) {\n return x <= y; \n}",
	"function lt(x, y) {\n return x < y; \n}",
	"function _instance_(x) {\n return new x(); \n}",
	].join("\n");

	var env0 = env_new();
	console.log(libs + "\n" + generate(expr, env0, ctx0));
}
