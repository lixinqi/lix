function print(x) {
 return console.log(x); 
}
function not(x) {
 return !x;
}
function _instance_(x) {
 return new x(); 
}
function __add__(x, y) {
 return x + y;
}
function __sub__(x, y) {
 return x - y;
}
function __mul__(x, y) {
 return x * y;
}
function __div__(x, y) {
 return x / y;
}
function __mod__(x, y) {
 return x % y;
}
function __gt__(x, y) {
 return x > y;
}
function __ge__(x, y) {
 return x >= y;
}
function __eq__(x, y) {
 return x == y;
}
function __le__(x, y) {
 return x <= y;
}
function __lt__(x, y) {
 return x < y;
}
function isFunction(x) {
 return typeof x === 'function';
}
function isArray(x) {
 return x instanceof Array;
}
function foreach(arr, cb) {
 for (var i in arr) { cb(arr[i], i); };
}
function call(fn) {
 var collect = []; for (var i in arguments) { collect.push(arguments[i]); }; collect.shift(); return fn.apply(fn, collect); 
}
function apply(fn) {
 return fn.apply(fn, arguments[1]); 
}
0;
var join = (function (arr) {
var ret = "";
ret;
foreach(arr, (function (i) {
return (ret = __add__(ret, i));

}));
return ret;

});
join;
var map = (function (arr, cb) {
var ret = [];
ret;
foreach(arr, (function (i, index) {
return (function (_uniq_val_0, _uniq_val_1) {
if (typeof _uniq_val_0.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_0.push.apply(_uniq_val_0, arguments);
} else if (_uniq_val_0.push !== undefined) {
if (_uniq_val_1 === undefined) {
return _uniq_val_0.push;
}
_uniq_val_0.push = _uniq_val_1;
}return _uniq_val_0;
})(ret, cb(i, index));

}));
return ret;

});
map;
var counterGenerator = (function () {
var counter = 0;
counter;
return (function () {
var ret = counter;
ret;
(counter = __add__(counter, 1));
return ret;

});

});
counterGenerator;
var getCount = call(counterGenerator);
getCount;
var getUniqVarName = (function () {
return __add__('_uniq_val_', call(getCount))
});
getUniqVarName;
var generateFuncArgs = (function (args, env, ctx) {
return (function (_uniq_val_2, _uniq_val_3) {
if (typeof _uniq_val_2.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_2.join.apply(_uniq_val_2, arguments);
} else if (_uniq_val_2.join !== undefined) {
if (_uniq_val_3 === undefined) {
return _uniq_val_2.join;
}
_uniq_val_2.join = _uniq_val_3;
}return _uniq_val_2;
})(map(args, (function (i) {
var varname = i[0];
varname;
(env[varname] = true);
return varname;

})), ', ');

});
generateFuncArgs;
var ctx0 = (function (x) {
return x
});
ctx0;
var generateSeq = (function (expr, env, ctx) {
var last = __sub__(expr[0].length, 1);
last;
var seqCtx = (function (index) {
if (__lt__(index, last)) {
return ctx0;

} else {
return ctx;

};

});
seqCtx;
return __add__((function (_uniq_val_4, _uniq_val_5) {
if (typeof _uniq_val_4.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_4.join.apply(_uniq_val_4, arguments);
} else if (_uniq_val_4.join !== undefined) {
if (_uniq_val_5 === undefined) {
return _uniq_val_4.join;
}
_uniq_val_4.join = _uniq_val_5;
}return _uniq_val_4;
})(map(expr[0], (function (item, index) {
return generate(item, env, seqCtx(index));

})), ";\n"), ";\n");

});
generateSeq;
var generateOr = (function (expr, env, ctx) {
return ctx(join(['(', generate(expr[0], env, ctx0), " || ", generate(expr[2], env, ctx0), ')']));

});
generateOr;
var generateAnd = (function (expr, env, ctx) {
return ctx(join(['(', generate(expr[0], env, ctx0), " && ", generate(expr[2], env, ctx0), ')']));

});
generateAnd;
var generateIf = (function (expr, env, ctx) {
return (function (_uniq_val_6, _uniq_val_7) {
if (typeof _uniq_val_6.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_6.join.apply(_uniq_val_6, arguments);
} else if (_uniq_val_6.join !== undefined) {
if (_uniq_val_7 === undefined) {
return _uniq_val_6.join;
}
_uniq_val_6.join = _uniq_val_7;
}return _uniq_val_6;
})(map(expr[0], (function (i) {
if (__eq__(i[1], 'else')) {
return join(['{\n', generate(i[0], env, ctx), '\n}']);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx);

} else {
return join(['if (', generate(i[0], env, ctx0), ') {\n', generate(i[1], env, ctx), '\n}']);

};

})), ' else ');

});
generateIf;
var operateFuncName = {
"+": '__add__',
"-": '__sub__',
"*": '__mul__',
"/": '__div__',
"%": '__mod__',
">=": '__ge__',
">": '__gt__',
"==": '__eq__',
"!=": '__ne__',
"<": '__lt__',
"<=": '__le__'
};
operateFuncName;
var generateAtomic = (function (expr, env, ctx) {
var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = operateFuncName[expr[0]]);

} else {
(ret = transformVarName(expr[0]));

};

};
return ctx(ret);

});
generateAtomic;
var generatePropertyName = (function (expr, env, ctx) {
if (__eq__(expr[1], '{atomic}')) {
return ctx(generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{index}')) {
return ctx(generateAtomic(expr[0], env, ctx0));

};

});
generatePropertyName;
var generateProperty = (function (expr, env, ctx) {
var propertyName = generatePropertyName(expr[0], env, ctx0);
propertyName;
var propertyValue = generate(expr[2], env, ctx0);
propertyValue;
return join([propertyName, ": ", propertyValue]);

});
generateProperty;
var generateObjectLiteral = (function (expr, env, ctx) {
var objectBody = (function (_uniq_val_8, _uniq_val_9) {
if (typeof _uniq_val_8.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_8.join.apply(_uniq_val_8, arguments);
} else if (_uniq_val_8.join !== undefined) {
if (_uniq_val_9 === undefined) {
return _uniq_val_8.join;
}
_uniq_val_8.join = _uniq_val_9;
}return _uniq_val_8;
})(map(expr[0], (function (i) {
return generateProperty(i, env, ctx0);

})), ",\n");
objectBody;
return ctx(join(["{\n", objectBody, "\n}"]));

});
generateObjectLiteral;
var transformVarName = (function (name) {
return name
});
transformVarName;
var getVarName = (function (expr) {
if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, {

}, ctx0);

} else if (__eq__(expr[1], '{.}')) {
return getVarName(expr[0]);

};

});
getVarName;
var generateField = (function (expr, env, ctx) {
if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{index}')) {
return join(['[', generate(expr[0], env, ctx0), ']']);

};

});
generateField;
var generateFieldAccess = (function (expr, env, ctx) {
if (__eq__(expr[1], '{atomic}')) {
return ctx(generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx0);
obj;
var field = generateField(expr[2], env, ctx0);
field;
return ctx(__add__(obj, field));

};

});
generateFieldAccess;
var generateArray = (function (expr, env, ctx) {
var arrayBody = (function (_uniq_val_10, _uniq_val_11) {
if (typeof _uniq_val_10.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_10.join.apply(_uniq_val_10, arguments);
} else if (_uniq_val_10.join !== undefined) {
if (_uniq_val_11 === undefined) {
return _uniq_val_10.join;
}
_uniq_val_10.join = _uniq_val_11;
}return _uniq_val_10;
})(map(expr[0], (function (i) {
return generate(i, env, ctx0);

})), ', ');
arrayBody;
return ctx(join(['[', arrayBody, ']']));

});
generateArray;
var generateMethod = (function (expr, env, ctx) {
var localVarName = call(getUniqVarName);
localVarName;
var localValueName = call(getUniqVarName);
localValueName;
var method = __add__(localVarName, generateField(expr[0], env, ctx0));
method;
return ctx(join(['(function (', localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 1, arguments.length);", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return ", method, ';\n', "}\n", method, " = ", localValueName, ";\n", "}", "return ", localVarName, ';\n', '})']));

});
generateMethod;
var generateWhile = (function (expr, env, ctx) {
return join(['while (', generate(expr[0], env, ctx0), ') {\n', generate(expr[2], env, ctx0), "}\n", ctx('null')]);

});
generateWhile;
var generateBreak = (function (expr, env, ctx) {
return 'break';

});
generateBreak;
var generateEmpty = (function (expr, env, ctx) {
return ctx(0);

});
generateEmpty;
var generateDef = (function (expr, env, ctx) {
var varname = expr[0][0];
varname;
var ret = join(['var ', varname, ' = ', generate(expr[2], env, ctx0), ";\n", ctx(varname)]);
ret;
(env[varname] = true);
return ret;

});
generateDef;
var generateAssign = (function (expr, env, ctx) {
var varname = getVarName(expr[0]);
varname;
if (__eq__(env[varname], undefined)) {
console.log(varname);
console.log("var undefined");

};
return ctx(join(["(", generate(expr[0], env, ctx0), " = ", generate(expr[2], env, ctx0), ")"]));

});
generateAssign;
var generateFunc = (function (expr, env, ctx) {
var funcEnv = env_new(env);
funcEnv;
var args = generateFuncArgs(expr[0], funcEnv, ctx0);
args;
var body = generate(expr[2], funcEnv, (function (v) {
return __add__('return ', v);

}));
body;
return ctx(join(['(function (', args, ') {\n', body, '\n})']));

});
generateFunc;
var generateExpr = (function (expr, env, ctx) {
var func = generate(expr[1], env, ctx0);
func;
var args = generate(expr[0], env, ctx0);
args;
foreach(expr, (function (item, index) {
if (__gt__(index, 1)) {
return (args = join([args, ', ', generate(item, env, ctx0)]));

};

}));
return ctx(join([func, '(', args, ')']));

});
generateExpr;
var generateStart = (function (expr, env, ctx) {
return generate(expr[0], env, ctx);

});
generateStart;
var generateMono = (function (expr, env, ctx) {
return generate(expr[0], env, ctx);

});
generateMono;
var generateOpTable = {
'{start}': generateStart,
'{seq}': generateSeq,
'{mono}': generateMono,
'{atomic}': generateAtomic,
'{.}': generateFieldAccess,
'{func}': generateFunc,
'{array}': generateArray,
'{object}': generateObjectLiteral,
'{method}': generateMethod,
'{empty}': generateEmpty,
':=': generateDef,
'=': generateAssign,
'if': generateIf,
'and': generateAnd,
'or': generateOr,
'while': generateWhile,
'break': generateBreak
};
generateOpTable;
var generateOp = (function (hint) {
if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};

});
generateOp;
var generate = (function (expr, env, ctx) {
return generateOp(expr[1])(expr, env, ctx);

});
generate;
var env_new = (function (env) {
(env = (env || {
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
call: true,
apply: true,
exports: true
}));
var Env = (function () {
;

});
Env;
(Env.prototype = env);
return _instance_(Env);

});
env_new;
(exports.compile = (function (expr) {
var libs = (function (_uniq_val_12, _uniq_val_13) {
if (typeof _uniq_val_12.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _uniq_val_12.join.apply(_uniq_val_12, arguments);
} else if (_uniq_val_12.join !== undefined) {
if (_uniq_val_13 === undefined) {
return _uniq_val_12.join;
}
_uniq_val_12.join = _uniq_val_13;
}return _uniq_val_12;
})(["function print(x) {\n return console.log(x); \n}", "function not(x) {\n return !x;\n}", "function _instance_(x) {\n return new x(); \n}", "function __add__(x, y) {\n return x + y;\n}", "function __sub__(x, y) {\n return x - y;\n}", "function __mul__(x, y) {\n return x * y;\n}", "function __div__(x, y) {\n return x / y;\n}", "function __mod__(x, y) {\n return x % y;\n}", "function __gt__(x, y) {\n return x > y;\n}", "function __ge__(x, y) {\n return x >= y;\n}", "function __eq__(x, y) {\n return x == y;\n}", "function __ne__(x, y) {\n return x != y;\n}", "function __le__(x, y) {\n return x <= y;\n}", "function __lt__(x, y) {\n return x < y;\n}", "function isFunction(x) {\n return typeof x === 'function';\n}", "function isArray(x) {\n return x instanceof Array;\n}", "function foreach(arr, cb) {\n for (var i in arr) { cb(arr[i], i); };\n}", "function call(fn) {\n var collect = []; for (var i in arguments) { collect.push(arguments[i]); }; collect.shift(); return fn.apply(fn, collect); \n}", "function apply(fn) {\n return fn.apply(fn, arguments[1]); \n}"], "\n");
libs;
return console.log(join([libs, "\n", generate(expr, call(env_new), ctx0)]));

}));

