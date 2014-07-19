function counterGenerator() {
		var count = 0;
		return function () {
			var ret = count;
			count = (count + 1);
			return ret;
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
	var ret = "";
	var seq = expr[0];
	var length = 	seq.length;
	for (var i = 0; i < length; i++) {
		var seqCtx = ctx0;
		if (i === length - 1) {
			seqCtx = ctx;
		}
		ret += generate(seq[i], env, seqCtx) + ";\n";
	}
	return ret;
}

function generateOr(expr, env, ctx) {
	var ret = "(";
	ret += generate(expr[0], env, ctx0);
	ret += " || ";
	ret += generate(expr[2], env, ctx0);
	ret += ")";
	return ctx(ret);
}

function generateAnd(expr, env, ctx) {
	var ret = "(";
	ret += generate(expr[0], env, ctx0);
	ret += " && ";
	ret += generate(expr[2], env, ctx0);
	ret += ")";
	return ctx(ret);
}

function generateIf(expr, env, ctx) {
	var cases = expr[0];
	var ret = [];
	var retVar = '__if_retval__' + getCount();
	var ifCtx = ctx;
//	var ifCtx = function (v) {
//				return retVar + ' = ' + v;
//			};
	for (var i = 0; i < cases.length; i++) {
//		console.log(cases[i]);
		if (cases[i][1] === 'else') {
			var elsecase =	'{\n' + generate(cases[i][0], env, ifCtx) + '\n}'; 
			ret.push(elsecase);
		} else if (cases[i][1] === 'if') {
			ret.push(generateIf(cases[i], env, ctx0));
		} else {
			var ifcase =	'if (' + generate(cases[i][0], env, ctx0) + ') {\n'
						+ generate(cases[i][1], env, ifCtx) + '\n}'; 
			ret.push(ifcase);
		}
	}
//	return 'var ' + retVar + ';\n' + ret.join(' else ') + ctx(retVar);
	return ret.join(' else ');
}

var operateFuncName = {
	"+": '__add__',
	"-": '__sub__',
	"*": '__mul__',
	"/": '__div__',
	"%": '__mod__',
	">=": '__ge__',
	">": '__gt__',
	"==": '__eq__',
	"<": '__lt__',
	"<=": '__le__',
};

function generateAtomic(expr, env, ctx) {
	var ret = expr[0];
	if (expr[2] === '{var}') {
		if (operateFuncName[expr[0]]) {
			ret = operateFuncName[expr[0]];
		} else {
			ret = transformVarName(expr[0]);
		}
	}
	return ctx(ret);
}

function generatePropertyName(expr, env, ctx) {
	if (expr[1] === '{atomic}') {
		var ret = generateAtomic(expr, env, ctx);
		return ctx(ret);
	} else if ((expr[1] === '{index}')) {
		var ret = generateAtomic(expr[0], env, ctx0);
		return ctx(ret);
	}
}

function generateProperty(expr, env, ctx) {
	var propertyName = generatePropertyName(expr[0], env, ctx0);
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
	return ctx(ret);
}

var transformVarName = function (name) {
	return name;
}

function getVarName(expr) {
	if (expr[1] === '{atomic}') {
		return generateAtomic(expr, {}, ctx0);
	} else if (expr[1] === '{.}') {
		return getVarName (expr[0]);
	}
}

function generateField(expr, env, ctx) {
	if (expr[1] === '{atomic}') {
		var ret = '.' + generateAtomic(expr, env, ctx0);
		return ret;
	} else if (expr[1] === '{index}') {
		var ret = '[' + generate(expr[0], env, ctx0) + ']';
		return ret;
	}
}

function generateFieldAccess(expr, env, ctx) {
	if (expr[1] === '{atomic}') {
		var ret = generateAtomic(expr, env, ctx0);
		return ctx(ret);
	} else if (expr[1] === '{.}') {
		var field = generateField(expr[2], env, ctx0);
		var ret = generateFieldAccess(expr[0], env, ctx0) + field;
		return ctx(ret);
	}
}

function generateArray(expr, env, ctx) {
	var ret = "[";
	var arr = expr[0];
	var length = 	arr.length;
	for (var i = 0; i < length; i++) {
		ret += generate(arr[i], env, ctx0) + ",";
	}
	ret += "]";
	return ctx(ret);
}

function env_new(env) {
	env = (env || {
		print: true,
		not: true,
		_instance_: true,
		__gt__: true,
		__ge__: true,
		__eq__: true,
		__le__: true,
		__lt__: true,
		__add__: true,
		__sub__: true,
		__mul__: true,
		__div__: true,
		__mod__: true,
		isFunction: true,
		isArray: true,
		foreach: true,
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
					localValName +") {\nreturn " + method + '(' + args + ');\n})(' + obj + ')';
	return ctx(ret);
}

function generate (expr, env, ctx) {
	if (expr[1] === '{start}') {
		return generate(expr[0], env, ctx);
	} else if (expr[1] === '{seq}') {
		return generateSeq(expr, env, ctx);
	} else if (expr[1] === '{mono}') {
		return generate(expr[0], env, ctx);
	} else if (expr[1] === '{atomic}') {
		return generateAtomic(expr, env, ctx);
	} else if (expr[1] === '{.}') {
		return generateFieldAccess(expr, env, ctx);
	} else if (expr[1] === '{func}') {
		var funcEnv = env_new(env);
		var args = generateFuncArgs(expr[0], funcEnv);
		var body = generate(expr[2], funcEnv, function(v) {
				return 'return ' + v;
		});
		var ret = '(function (' + args + ') {\n' + body + '\n})';
		return ctx(ret);
	} else if (expr[1] === '{array}') {
		return generateArray(expr, env, ctx);
	} else if (expr[1] === '{object}') {
		return generateObjectLiteral(expr, env, ctx);
	} else if (expr[1] === '{method}') {
		return generateMethod(expr, env, ctx);
	} else if (expr[1] === '{empty}') {
		return ctx(0);
	} else if (expr[1] === ':=') {
		var varname = expr[0][0];
		var ret = 'var ' + varname + ' = ' + generate(expr[2], env, ctx0) + ';\n' + ctx(varname);
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
		return ctx(ret);
	} else if (expr[1] === 'if') {
		return generateIf(expr, env, ctx);
	} else if (expr[1] === 'and') {
		return generateAnd(expr, env, ctx);
	} else if (expr[1] === 'or') {
		return generateOr(expr, env, ctx);
	}

	var func = generate(expr[1], env, ctx0);
	var args = generate(expr[0], env, ctx0);
	for (var i = 2; i < expr.length; i++) {
			args += ', ';
			args += generate(expr[i], env, ctx0);
	}
	var ret = func + '(' + args + ')';
	return ctx(ret);
}

exports.compile = function (expr) {
	var libs = [
	"function print(x) {\n return console.log(x); \n}",
	"function not(x) {\n return !x;\n}",
	"function _instance_(x) {\n return new x(); \n}",
	"function __add__(x, y) {\n return x + y;\n}",
	"function __sub__(x, y) {\n return x - y;\n}",
	"function __mul__(x, y) {\n return x * y;\n}",
	"function __div__(x, y) {\n return x / y;\n}",
	"function __mod__(x, y) {\n return x % y;\n}",
	"function __gt__(x, y) {\n return x > y;\n}",
	"function __ge__(x, y) {\n return x >= y;\n}",
	"function __eq__(x, y) {\n return x === y;\n}",
	"function __le__(x, y) {\n return x <= y;\n}",
	"function __lt__(x, y) {\n return x < y;\n}",
	"function isFunction(x) {\n return typeof x === 'function';\n}",
	"function isArray(x) {\n return x instanceof Array;\n}",
	"function foreach(arr, cb) {\n for (var i in arr) { cb(arr[i], i); };\n}",
	].join("\n");

	var env0 = env_new();
	console.log(libs + "\n" + generate(expr, env0, ctx0));
}
