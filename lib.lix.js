true
true
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
function __ne__(x, y) {
 return x != y;
}
function __le__(x, y) {
 return x <= y;
}
function __lt__(x, y) {
 return x < y;
}
function AND(x, y) {
 return x & y;
}
function AND(x, y) {
 return x | y;
}
function AND(x, y) {
 return x ^ y;
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
var join = (function () {var _uniq_var_3 = function (arr) {return (function () {var _uniq_var_2 = function (_uniq_var_0, _uniq_var_1) {
if (typeof _uniq_var_0.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_0.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_0.join.apply(_uniq_var_0, arguments);
} else if (_uniq_var_0.join !== undefined) {
if (_uniq_var_1 === undefined) {
return _uniq_var_0.join;
}
_uniq_var_0.join = _uniq_var_1;
}return _uniq_var_0;
};_uniq_var_2.__lix_func__ = true;return _uniq_var_2;})()(arr, "");
};_uniq_var_3.__lix_func__ = true;return _uniq_var_3;})();
join;
var map = (function () {var _uniq_var_8 = function (arr, cb) {var ret = [];
ret;
foreach(arr, (function () {var _uniq_var_7 = function (i, index) {return (function () {var _uniq_var_6 = function (_uniq_var_4, _uniq_var_5) {
if (typeof _uniq_var_4.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_4.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_4.push.apply(_uniq_var_4, arguments);
} else if (_uniq_var_4.push !== undefined) {
if (_uniq_var_5 === undefined) {
return _uniq_var_4.push;
}
_uniq_var_4.push = _uniq_var_5;
}return _uniq_var_4;
};_uniq_var_6.__lix_func__ = true;return _uniq_var_6;})()(ret, cb(i, index));
};_uniq_var_7.__lix_func__ = true;return _uniq_var_7;})());
return ret;
};_uniq_var_8.__lix_func__ = true;return _uniq_var_8;})();
map;
var counterGenerator = (function () {var _uniq_var_10 = function () {var counter = 0;
counter;
return (function () {var _uniq_var_9 = function () {var ret = counter;
ret;
(counter = __add__(counter, 1));
return ret;
};_uniq_var_9.__lix_func__ = true;return _uniq_var_9;})();
};_uniq_var_10.__lix_func__ = true;return _uniq_var_10;})();
counterGenerator;
var getCount = call(counterGenerator);
getCount;
var getUniqVarName = (function () {var _uniq_var_11 = function () {return __add__('_uniq_var_', call(getCount));
};_uniq_var_11.__lix_func__ = true;return _uniq_var_11;})();
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_16 = function (args, env, ctx) {return (function () {var _uniq_var_14 = function (_uniq_var_12, _uniq_var_13) {
if (typeof _uniq_var_12.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_12.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_12.join.apply(_uniq_var_12, arguments);
} else if (_uniq_var_12.join !== undefined) {
if (_uniq_var_13 === undefined) {
return _uniq_var_12.join;
}
_uniq_var_12.join = _uniq_var_13;
}return _uniq_var_12;
};_uniq_var_14.__lix_func__ = true;return _uniq_var_14;})()(map(args, (function () {var _uniq_var_15 = function (i) {var varname = i[0];
varname;
(env[varname] = true);
return varname;
};_uniq_var_15.__lix_func__ = true;return _uniq_var_15;})()), ', ');
};_uniq_var_16.__lix_func__ = true;return _uniq_var_16;})();
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_17 = function (x) {return x;
};_uniq_var_17.__lix_func__ = true;return _uniq_var_17;})();
ctx0;
var generateSeq = (function () {var _uniq_var_23 = function (expr, env, ctx) {var last = __sub__(expr[0].length, 1);
last;
var seqCtx = (function () {var _uniq_var_18 = function (index) {if (__lt__(index, last)) {
return ctx0;

} else {
return ctx;

};
};_uniq_var_18.__lix_func__ = true;return _uniq_var_18;})();
seqCtx;
return __add__((function () {var _uniq_var_21 = function (_uniq_var_19, _uniq_var_20) {
if (typeof _uniq_var_19.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_19.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_19.join.apply(_uniq_var_19, arguments);
} else if (_uniq_var_19.join !== undefined) {
if (_uniq_var_20 === undefined) {
return _uniq_var_19.join;
}
_uniq_var_19.join = _uniq_var_20;
}return _uniq_var_19;
};_uniq_var_21.__lix_func__ = true;return _uniq_var_21;})()(map(expr[0], (function () {var _uniq_var_22 = function (item, index) {return generate(item, env, seqCtx(index));
};_uniq_var_22.__lix_func__ = true;return _uniq_var_22;})()), ";\n"), ";\n");
};_uniq_var_23.__lix_func__ = true;return _uniq_var_23;})();
generateSeq;
var generateOr = (function () {var _uniq_var_24 = function (expr, env, ctx) {return ctx(join(['(', generate(expr[0], env, ctx0), " || ", generate(expr[2], env, ctx0), ')']));
};_uniq_var_24.__lix_func__ = true;return _uniq_var_24;})();
generateOr;
var generateAnd = (function () {var _uniq_var_25 = function (expr, env, ctx) {return ctx(join(['(', generate(expr[0], env, ctx0), " && ", generate(expr[2], env, ctx0), ')']));
};_uniq_var_25.__lix_func__ = true;return _uniq_var_25;})();
generateAnd;
var generateIf = (function () {var _uniq_var_30 = function (expr, env, ctx) {return (function () {var _uniq_var_28 = function (_uniq_var_26, _uniq_var_27) {
if (typeof _uniq_var_26.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_26.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_26.join.apply(_uniq_var_26, arguments);
} else if (_uniq_var_26.join !== undefined) {
if (_uniq_var_27 === undefined) {
return _uniq_var_26.join;
}
_uniq_var_26.join = _uniq_var_27;
}return _uniq_var_26;
};_uniq_var_28.__lix_func__ = true;return _uniq_var_28;})()(map(expr[0], (function () {var _uniq_var_29 = function (i) {if (__eq__(i[1], 'else')) {
return join(['{\n', generate(i[0], env, ctx), '\n}']);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx);

} else {
return join(['if (', generate(i[0], env, ctx0), ') {\n', generate(i[1], env, ctx), '\n}']);

};
};_uniq_var_29.__lix_func__ = true;return _uniq_var_29;})()), ' else ');
};_uniq_var_30.__lix_func__ = true;return _uniq_var_30;})();
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
var generateAtomic = (function () {var _uniq_var_31 = function (expr, env, ctx) {var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = operateFuncName[expr[0]]);

} else {
(ret = transformVarName(expr[0]));

};

};
return ctx(ret);
};_uniq_var_31.__lix_func__ = true;return _uniq_var_31;})();
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_32 = function (expr, env, ctx) {if (__eq__(expr[1], '{atomic}')) {
return ctx(generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{index}')) {
return ctx(generateAtomic(expr[0], env, ctx0));

};
};_uniq_var_32.__lix_func__ = true;return _uniq_var_32;})();
generatePropertyName;
var generateProperty = (function () {var _uniq_var_33 = function (expr, env, ctx) {var propertyName = generatePropertyName(expr[0], env, ctx0);
propertyName;
var propertyValue = generate(expr[2], env, ctx0);
propertyValue;
return join([propertyName, ": ", propertyValue]);
};_uniq_var_33.__lix_func__ = true;return _uniq_var_33;})();
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_38 = function (expr, env, ctx) {var objectBody = (function () {var _uniq_var_36 = function (_uniq_var_34, _uniq_var_35) {
if (typeof _uniq_var_34.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_34.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_34.join.apply(_uniq_var_34, arguments);
} else if (_uniq_var_34.join !== undefined) {
if (_uniq_var_35 === undefined) {
return _uniq_var_34.join;
}
_uniq_var_34.join = _uniq_var_35;
}return _uniq_var_34;
};_uniq_var_36.__lix_func__ = true;return _uniq_var_36;})()(map(expr[0], (function () {var _uniq_var_37 = function (i) {return generateProperty(i, env, ctx0);
};_uniq_var_37.__lix_func__ = true;return _uniq_var_37;})()), ",\n");
objectBody;
return ctx(join(["{\n", objectBody, "\n}"]));
};_uniq_var_38.__lix_func__ = true;return _uniq_var_38;})();
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_39 = function (name) {return name;
};_uniq_var_39.__lix_func__ = true;return _uniq_var_39;})();
transformVarName;
var getVarName = (function () {var _uniq_var_40 = function (expr) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, {

}, ctx0);

} else if (__eq__(expr[1], '{.}')) {
return getVarName(expr[0]);

};
};_uniq_var_40.__lix_func__ = true;return _uniq_var_40;})();
getVarName;
var generateField = (function () {var _uniq_var_41 = function (expr, env, ctx) {if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{index}')) {
return join(['[', generate(expr[0], env, ctx0), ']']);

};
};_uniq_var_41.__lix_func__ = true;return _uniq_var_41;})();
generateField;
var generateFieldAccess = (function () {var _uniq_var_42 = function (expr, env, ctx) {if (__eq__(expr[1], '{atomic}')) {
return ctx(generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx0);
obj;
var field = generateField(expr[2], env, ctx0);
field;
return ctx(__add__(obj, field));

};
};_uniq_var_42.__lix_func__ = true;return _uniq_var_42;})();
generateFieldAccess;
var generateArray = (function () {var _uniq_var_47 = function (expr, env, ctx) {var arrayBody = (function () {var _uniq_var_45 = function (_uniq_var_43, _uniq_var_44) {
if (typeof _uniq_var_43.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_43.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_43.join.apply(_uniq_var_43, arguments);
} else if (_uniq_var_43.join !== undefined) {
if (_uniq_var_44 === undefined) {
return _uniq_var_43.join;
}
_uniq_var_43.join = _uniq_var_44;
}return _uniq_var_43;
};_uniq_var_45.__lix_func__ = true;return _uniq_var_45;})()(map(expr[0], (function () {var _uniq_var_46 = function (i) {return generate(i, env, ctx0);
};_uniq_var_46.__lix_func__ = true;return _uniq_var_46;})()), ', ');
arrayBody;
return ctx(join(['[', arrayBody, ']']));
};_uniq_var_47.__lix_func__ = true;return _uniq_var_47;})();
generateArray;
var generateMethod = (function () {var _uniq_var_48 = function (expr, env, ctx) {var localVarName = call(getUniqVarName);
localVarName;
var localValueName = call(getUniqVarName);
localValueName;
var method = __add__(localVarName, generateField(expr[0], env, ctx0));
method;
var tmpVar = call(getUniqVarName);
tmpVar;
return ctx(join(["(function () {", 'var ', tmpVar, ' = function (', localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(", "arguments, (", method, ".__lix_func__ ? 0 : 1), arguments.length);", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return ", method, ';\n', "}\n", method, " = ", localValueName, ";\n", "}", "return ", localVarName, ';\n', '};', tmpVar, '.__lix_func__ = true;', 'return ', tmpVar, ';', '})()']));
};_uniq_var_48.__lix_func__ = true;return _uniq_var_48;})();
generateMethod;
var generateWhile = (function () {var _uniq_var_49 = function (expr, env, ctx) {return join(['while (', generate(expr[0], env, ctx0), ') {\n', generate(expr[2], env, ctx0), "}\n", ctx('null')]);
};_uniq_var_49.__lix_func__ = true;return _uniq_var_49;})();
generateWhile;
var generateBreak = (function () {var _uniq_var_50 = function (expr, env, ctx) {return 'break';
};_uniq_var_50.__lix_func__ = true;return _uniq_var_50;})();
generateBreak;
var generateEmpty = (function () {var _uniq_var_51 = function (expr, env, ctx) {return ctx(0);
};_uniq_var_51.__lix_func__ = true;return _uniq_var_51;})();
generateEmpty;
var generateDef = (function () {var _uniq_var_52 = function (expr, env, ctx) {var varname = expr[0][0];
varname;
var ret = join(['var ', varname, ' = ', generate(expr[2], env, ctx0), ";\n", ctx(varname)]);
ret;
(env[varname] = true);
return ret;
};_uniq_var_52.__lix_func__ = true;return _uniq_var_52;})();
generateDef;
var generateAssign = (function () {var _uniq_var_53 = function (expr, env, ctx) {var varname = getVarName(expr[0]);
varname;
if (__eq__(env[varname], undefined)) {
console.log(varname);
console.log("var undefined");

};
return ctx(join(["(", generate(expr[0], env, ctx0), " = ", generate(expr[2], env, ctx0), ")"]));
};_uniq_var_53.__lix_func__ = true;return _uniq_var_53;})();
generateAssign;
var generateFunc = (function () {var _uniq_var_55 = function (expr, env, ctx) {var funcEnv = env_new(env);
funcEnv;
var args = generateFuncArgs(expr[0], funcEnv, ctx0);
args;
var body = generate(expr[2], funcEnv, (function () {var _uniq_var_54 = function (v) {return __add__('return ', v);
};_uniq_var_54.__lix_func__ = true;return _uniq_var_54;})());
body;
var tmpVar = call(getUniqVarName);
tmpVar;
return ctx(join(['(function () {', 'var ', tmpVar, ' = function (', args, ') {', body, '};', tmpVar, '.__lix_func__ = true;', 'return ', tmpVar, ';', '})()']));
};_uniq_var_55.__lix_func__ = true;return _uniq_var_55;})();
generateFunc;
var generateExpr = (function () {var _uniq_var_57 = function (expr, env, ctx) {var func = generate(expr[1], env, ctx0);
func;
var args = generate(expr[0], env, ctx0);
args;
foreach(expr, (function () {var _uniq_var_56 = function (item, index) {if (__gt__(index, 1)) {
return (args = join([args, ', ', generate(item, env, ctx0)]));

};
};_uniq_var_56.__lix_func__ = true;return _uniq_var_56;})());
return ctx(join([func, '(', args, ')']));
};_uniq_var_57.__lix_func__ = true;return _uniq_var_57;})();
generateExpr;
var generateStart = (function () {var _uniq_var_58 = function (expr, env, ctx) {return generate(expr[0], env, ctx);
};_uniq_var_58.__lix_func__ = true;return _uniq_var_58;})();
generateStart;
var generateMono = (function () {var _uniq_var_59 = function (expr, env, ctx) {return generate(expr[0], env, ctx);
};_uniq_var_59.__lix_func__ = true;return _uniq_var_59;})();
generateMono;
var generatePathItem = (function () {var _uniq_var_60 = function (expr, env, ctx) {return ctx(join(['"', expr[0], '"']));
};_uniq_var_60.__lix_func__ = true;return _uniq_var_60;})();
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_61 = function (expr, env, ctx) {return ctx(join(['("', expr[2], '" + ', generate(expr[0], env, ctx0), ')']));
};_uniq_var_61.__lix_func__ = true;return _uniq_var_61;})();
generatePathArgItem;
var generatePath = (function () {var _uniq_var_66 = function (expr, env, ctx) {var path = (function () {var _uniq_var_64 = function (_uniq_var_62, _uniq_var_63) {
if (typeof _uniq_var_62.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_62.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_62.join.apply(_uniq_var_62, arguments);
} else if (_uniq_var_62.join !== undefined) {
if (_uniq_var_63 === undefined) {
return _uniq_var_62.join;
}
_uniq_var_62.join = _uniq_var_63;
}return _uniq_var_62;
};_uniq_var_64.__lix_func__ = true;return _uniq_var_64;})()(map(expr[0], (function () {var _uniq_var_65 = function (i) {return generate(i, env, ctx0);
};_uniq_var_65.__lix_func__ = true;return _uniq_var_65;})()), ',');
path;
return ctx(join(['[', path, '].join("/")']));
};_uniq_var_66.__lix_func__ = true;return _uniq_var_66;})();
generatePath;
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
'{path}': generatePath,
'{path_item}': generatePathItem,
'{path_arg_item}': generatePathArgItem,
':=': generateDef,
'=': generateAssign,
'if': generateIf,
'and': generateAnd,
'or': generateOr,
'while': generateWhile,
'break': generateBreak
};
generateOpTable;
var generateOp = (function () {var _uniq_var_67 = function (hint) {if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};
};_uniq_var_67.__lix_func__ = true;return _uniq_var_67;})();
generateOp;
var generate = (function () {var _uniq_var_68 = function (expr, env, ctx) {return generateOp(expr[1])(expr, env, ctx);
};_uniq_var_68.__lix_func__ = true;return _uniq_var_68;})();
generate;
var env0 = {
exports: true,
require: true,
print: "function print(x) {\n return console.log(x); \n}",
print: "function print(x) {\n return console.log(x); \n}",
not: "function not(x) {\n return !x;\n}",
_instance_: "function _instance_(x) {\n return new x(); \n}",
__add__: "function __add__(x, y) {\n return x + y;\n}",
__sub__: "function __sub__(x, y) {\n return x - y;\n}",
__mul__: "function __mul__(x, y) {\n return x * y;\n}",
__div__: "function __div__(x, y) {\n return x / y;\n}",
__mod__: "function __mod__(x, y) {\n return x % y;\n}",
__gt__: "function __gt__(x, y) {\n return x > y;\n}",
__ge__: "function __ge__(x, y) {\n return x >= y;\n}",
__eq__: "function __eq__(x, y) {\n return x == y;\n}",
__ne__: "function __ne__(x, y) {\n return x != y;\n}",
__le__: "function __le__(x, y) {\n return x <= y;\n}",
__lt__: "function __lt__(x, y) {\n return x < y;\n}",
AND: "function AND(x, y) {\n return x & y;\n}",
OR: "function AND(x, y) {\n return x | y;\n}",
XOR: "function AND(x, y) {\n return x ^ y;\n}",
isFunction: "function isFunction(x) {\n return typeof x === 'function';\n}",
isArray: "function isArray(x) {\n return x instanceof Array;\n}",
foreach: "function foreach(arr, cb) {\n for (var i in arr) { cb(arr[i], i); };\n}",
call: "function call(fn) {\n var collect = []; for (var i in arguments) { collect.push(arguments[i]); }; collect.shift(); return fn.apply(fn, collect); \n}",
apply: "function apply(fn) {\n return fn.apply(fn, arguments[1]); \n}"
};
env0;
var env_new = (function () {var _uniq_var_70 = function (env) {(env = (env || env0));
var Env = (function () {var _uniq_var_69 = function () {;
};_uniq_var_69.__lix_func__ = true;return _uniq_var_69;})();
Env;
(Env.prototype = env);
return _instance_(Env);
};_uniq_var_70.__lix_func__ = true;return _uniq_var_70;})();
env_new;
var flattenExpr = (function () {var _uniq_var_72 = function (expr, define) {return define(map(expr, (function () {var _uniq_var_71 = function (item) {return flatten(item, define);
};_uniq_var_71.__lix_func__ = true;return _uniq_var_71;})()));
};_uniq_var_72.__lix_func__ = true;return _uniq_var_72;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_73 = function (expr, define) {return expr;
};_uniq_var_73.__lix_func__ = true;return _uniq_var_73;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_78 = function (expr, define) {var whileDefine = call(statementFlattenGenerator);
whileDefine;
(expr[0] = flatten(expr[0], whileDefine));
(expr[2] = flatten(expr[2], define0));
(expr[2][0] = (function () {var _uniq_var_76 = function (_uniq_var_74, _uniq_var_75) {
if (typeof _uniq_var_74.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_74.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_74.concat.apply(_uniq_var_74, arguments);
} else if (_uniq_var_74.concat !== undefined) {
if (_uniq_var_75 === undefined) {
return _uniq_var_74.concat;
}
_uniq_var_74.concat = _uniq_var_75;
}return _uniq_var_74;
};_uniq_var_76.__lix_func__ = true;return _uniq_var_76;})()(expr[2][0], call(whileDefine)));
foreach(call(whileDefine), (function () {var _uniq_var_77 = function (i) {return define(i, true);
};_uniq_var_77.__lix_func__ = true;return _uniq_var_77;})());
return expr;
};_uniq_var_78.__lix_func__ = true;return _uniq_var_78;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_83 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_82 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_81 = function (_uniq_var_79, _uniq_var_80) {
if (typeof _uniq_var_79.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_79.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_79.push.apply(_uniq_var_79, arguments);
} else if (_uniq_var_79.push !== undefined) {
if (_uniq_var_80 === undefined) {
return _uniq_var_79.push;
}
_uniq_var_79.push = _uniq_var_80;
}return _uniq_var_79;
};_uniq_var_81.__lix_func__ = true;return _uniq_var_81;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_82.__lix_func__ = true;return _uniq_var_82;})();
getAndOpSeq;
define([[[[ret, ['not', '{atomic}', 'var']], call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_83.__lix_func__ = true;return _uniq_var_83;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_88 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_87 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_86 = function (_uniq_var_84, _uniq_var_85) {
if (typeof _uniq_var_84.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_84.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_84.push.apply(_uniq_var_84, arguments);
} else if (_uniq_var_84.push !== undefined) {
if (_uniq_var_85 === undefined) {
return _uniq_var_84.push;
}
_uniq_var_84.push = _uniq_var_85;
}return _uniq_var_84;
};_uniq_var_86.__lix_func__ = true;return _uniq_var_86;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_87.__lix_func__ = true;return _uniq_var_87;})();
getAndOpSeq;
define([[[ret, call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_88.__lix_func__ = true;return _uniq_var_88;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_93 = function (expr, define, tmpVar, ctx) {return foreach(expr[0], (function () {var _uniq_var_92 = function (i) {if (__eq__(i[1], 'else')) {
var elseSeq = flatten(i[0], define0, ctx);
elseSeq;
return define([[[tmpVar, elseSeq]], 'if'], true);

} else if (__eq__(i[1], 'if')) {
return define(_flattenIf(i, define, tmpVar, ctx));

} else {
var ifSeq = flatten(i[1], define0, ctx);
ifSeq;
(function () {var _uniq_var_91 = function (_uniq_var_89, _uniq_var_90) {
if (typeof _uniq_var_89.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_89.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_89.unshift.apply(_uniq_var_89, arguments);
} else if (_uniq_var_89.unshift !== undefined) {
if (_uniq_var_90 === undefined) {
return _uniq_var_89.unshift;
}
_uniq_var_89.unshift = _uniq_var_90;
}return _uniq_var_89;
};_uniq_var_91.__lix_func__ = true;return _uniq_var_91;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
var cond = flatten(i[0], define);
cond;
var cond = [tmpVar, 'and', cond];
cond;
return define([[[cond, ifSeq]], 'if'], true);

};
};_uniq_var_92.__lix_func__ = true;return _uniq_var_92;})());
};_uniq_var_93.__lix_func__ = true;return _uniq_var_93;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_95 = function (expr, define) {var tmpVar = define(['true', '{atomic}']);
tmpVar;
var retVar = define(['null', '{atomic}']);
retVar;
var ctx = (function () {var _uniq_var_94 = function (i) {return [retVar, '=', i];
};_uniq_var_94.__lix_func__ = true;return _uniq_var_94;})();
ctx;
_flattenIf(expr, define, tmpVar, ctx);
return retVar;
};_uniq_var_95.__lix_func__ = true;return _uniq_var_95;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_96 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_96.__lix_func__ = true;return _uniq_var_96;})();
flattenAssign;
var flattenDef = (function () {var _uniq_var_97 = function (expr, define) {(expr[2] = flatten(expr[2], define));
define(expr, true);
return expr[0];
};_uniq_var_97.__lix_func__ = true;return _uniq_var_97;})();
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_98 = function (expr, define) {(expr[0] = flatten(expr[0], define));
return expr;
};_uniq_var_98.__lix_func__ = true;return _uniq_var_98;})();
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_99 = function (expr, define) {return expr;
};_uniq_var_99.__lix_func__ = true;return _uniq_var_99;})();
flattenPathItem;
var flattenPath = (function () {var _uniq_var_101 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_100 = function (i) {return flatten(i, define);
};_uniq_var_100.__lix_func__ = true;return _uniq_var_100;})()));
return expr;
};_uniq_var_101.__lix_func__ = true;return _uniq_var_101;})();
flattenPath;
var flattenEmpty = (function () {var _uniq_var_102 = function (expr, define) {return expr;
};_uniq_var_102.__lix_func__ = true;return _uniq_var_102;})();
flattenEmpty;
var flattenField = (function () {var _uniq_var_103 = function (expr, define) {if (__eq__(expr[1], '{index}')) {
(expr[0] = flatten(expr[0], define));

};
return expr;
};_uniq_var_103.__lix_func__ = true;return _uniq_var_103;})();
flattenField;
var flattenMethod = (function () {var _uniq_var_104 = function (expr, define) {(expr[0] = flattenField(expr[0], define));
return expr;
};_uniq_var_104.__lix_func__ = true;return _uniq_var_104;})();
flattenMethod;
var flattenProperty = (function () {var _uniq_var_105 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_105.__lix_func__ = true;return _uniq_var_105;})();
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_107 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_106 = function (i) {return flattenProperty(i, define);
};_uniq_var_106.__lix_func__ = true;return _uniq_var_106;})()));
return expr;
};_uniq_var_107.__lix_func__ = true;return _uniq_var_107;})();
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_109 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_108 = function (i) {return flatten(i, define);
};_uniq_var_108.__lix_func__ = true;return _uniq_var_108;})()));
return expr;
};_uniq_var_109.__lix_func__ = true;return _uniq_var_109;})();
flattenArray;
var flattenFunc = (function () {var _uniq_var_110 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_110.__lix_func__ = true;return _uniq_var_110;})();
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_111 = function (expr, define) {if (__eq__(expr[1], '{.}')) {
(expr[0] = flattenFieldAccess(expr[0], define));
(expr[2] = flattenField(expr[2], define));

};
return expr;
};_uniq_var_111.__lix_func__ = true;return _uniq_var_111;})();
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_112 = function (expr, define) {return expr;
};_uniq_var_112.__lix_func__ = true;return _uniq_var_112;})();
flattenAtomic;
var flattenMono = (function () {var _uniq_var_113 = function (expr, define) {return flatten(expr[0], define);
};_uniq_var_113.__lix_func__ = true;return _uniq_var_113;})();
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_121 = function () {var data = [];
data;
return (function () {var _uniq_var_120 = function (statement, onlyPush) {if (__eq__(statement, undefined)) {
return data;

} else if (onlyPush) {
return (function () {var _uniq_var_116 = function (_uniq_var_114, _uniq_var_115) {
if (typeof _uniq_var_114.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_114.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_114.push.apply(_uniq_var_114, arguments);
} else if (_uniq_var_114.push !== undefined) {
if (_uniq_var_115 === undefined) {
return _uniq_var_114.push;
}
_uniq_var_114.push = _uniq_var_115;
}return _uniq_var_114;
};_uniq_var_116.__lix_func__ = true;return _uniq_var_116;})()(data, statement);

} else {
var varName = call(getUniqVarName);
varName;
var lixVar = [varName, '{atomic}', '{var}'];
lixVar;
(function () {var _uniq_var_119 = function (_uniq_var_117, _uniq_var_118) {
if (typeof _uniq_var_117.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_117.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_117.push.apply(_uniq_var_117, arguments);
} else if (_uniq_var_117.push !== undefined) {
if (_uniq_var_118 === undefined) {
return _uniq_var_117.push;
}
_uniq_var_117.push = _uniq_var_118;
}return _uniq_var_117;
};_uniq_var_119.__lix_func__ = true;return _uniq_var_119;})()(data, [lixVar, ':=', statement]);
return lixVar;

};
};_uniq_var_120.__lix_func__ = true;return _uniq_var_120;})();
};_uniq_var_121.__lix_func__ = true;return _uniq_var_121;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_130 = function (expr, define, seqCtx) {var ret = [];
ret;
var ctx = (function () {var _uniq_var_122 = function (stmt, index) {var ret = stmt;
ret;
if ((seqCtx && __eq__(parseInt(index), __sub__(expr[0].length, 1)))) {
var ret = seqCtx(stmt);
ret;

};
return ret;
};_uniq_var_122.__lix_func__ = true;return _uniq_var_122;})();
ctx;
foreach(expr[0], (function () {var _uniq_var_129 = function (item, index) {var exprDefine = call(statementFlattenGenerator);
exprDefine;
var itemRet = flatten(item, exprDefine);
itemRet;
(ret = (function () {var _uniq_var_125 = function (_uniq_var_123, _uniq_var_124) {
if (typeof _uniq_var_123.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_123.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_123.concat.apply(_uniq_var_123, arguments);
} else if (_uniq_var_123.concat !== undefined) {
if (_uniq_var_124 === undefined) {
return _uniq_var_123.concat;
}
_uniq_var_123.concat = _uniq_var_124;
}return _uniq_var_123;
};_uniq_var_125.__lix_func__ = true;return _uniq_var_125;})()(ret, call(exprDefine)));
return (function () {var _uniq_var_128 = function (_uniq_var_126, _uniq_var_127) {
if (typeof _uniq_var_126.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_126.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_126.push.apply(_uniq_var_126, arguments);
} else if (_uniq_var_126.push !== undefined) {
if (_uniq_var_127 === undefined) {
return _uniq_var_126.push;
}
_uniq_var_126.push = _uniq_var_127;
}return _uniq_var_126;
};_uniq_var_128.__lix_func__ = true;return _uniq_var_128;})()(ret, ctx(itemRet, index));
};_uniq_var_129.__lix_func__ = true;return _uniq_var_129;})());
(expr[0] = ret);
return expr;
};_uniq_var_130.__lix_func__ = true;return _uniq_var_130;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_131 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
return [ret, '{start}'];
};_uniq_var_131.__lix_func__ = true;return _uniq_var_131;})();
flattenStart;
var flattenOpTable = {
'{start}': flattenStart,
'{seq}': flattenSeq,
'{mono}': flattenMono,
'{atomic}': flattenAtomic,
'{.}': flattenFieldAccess,
'{func}': flattenFunc,
'{array}': flattenArray,
'{object}': flattenObjectLiteral,
'{method}': flattenMethod,
'{empty}': flattenEmpty,
'{path}': flattenPath,
'{path_item}': flattenPathItem,
'{path_arg_item}': flattenPathArgItem,
':=': flattenDef,
'=': flattenAssign,
'if': flattenIf,
'and': flattenAnd,
'or': flattenOr,
'while': flattenWhile,
'break': flattenBreak
};
flattenOpTable;
var flattenOp = (function () {var _uniq_var_132 = function (hint) {if (flattenOpTable[hint]) {
return flattenOpTable[hint];

} else {
return flattenExpr;

};
};_uniq_var_132.__lix_func__ = true;return _uniq_var_132;})();
flattenOp;
var flatten = (function () {var _uniq_var_133 = function (expr, define, ctx) {return flattenOp(expr[1])(expr, define, ctx);
};_uniq_var_133.__lix_func__ = true;return _uniq_var_133;})();
flatten;
var define0 = (function () {var _uniq_var_134 = function (i) {return i;
};_uniq_var_134.__lix_func__ = true;return _uniq_var_134;})();
define0;
(exports.compile = (function () {var _uniq_var_140 = function (expr) {var libs = (function () {var _uniq_var_137 = function (_uniq_var_135, _uniq_var_136) {
if (typeof _uniq_var_135.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_135.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_135.join.apply(_uniq_var_135, arguments);
} else if (_uniq_var_135.join !== undefined) {
if (_uniq_var_136 === undefined) {
return _uniq_var_135.join;
}
_uniq_var_135.join = _uniq_var_136;
}return _uniq_var_135;
};_uniq_var_137.__lix_func__ = true;return _uniq_var_137;})()(map(env0, (function () {var _uniq_var_138 = function (i) {return i;
};_uniq_var_138.__lix_func__ = true;return _uniq_var_138;})()), "\n");
libs;
var code = generate(flatten(expr, (function () {var _uniq_var_139 = function (i) {;
};_uniq_var_139.__lix_func__ = true;return _uniq_var_139;})()), call(env_new), ctx0);
code;
return console.log(join([libs, "\n", code]));
};_uniq_var_140.__lix_func__ = true;return _uniq_var_140;})());

