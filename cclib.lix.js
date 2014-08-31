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
var generateSeq = (function () {var _uniq_var_23 = function (expr, env, ctx, def) {var funcName = call(getUniqVarName);
funcName;
var ctx = (function () {var _uniq_var_18 = function (v) {return __add__(v, '()');
};_uniq_var_18.__lix_func__ = true;return _uniq_var_18;})();
ctx;
var body = __add__((function () {var _uniq_var_21 = function (_uniq_var_19, _uniq_var_20) {
if (typeof _uniq_var_19.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_19.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_19.join.apply(_uniq_var_19, arguments);
} else if (_uniq_var_19.join !== undefined) {
if (_uniq_var_20 === undefined) {
return _uniq_var_19.join;
}
_uniq_var_19.join = _uniq_var_20;
}return _uniq_var_19;
};_uniq_var_21.__lix_func__ = true;return _uniq_var_21;})()(map(expr[0], (function () {var _uniq_var_22 = function (item, index) {var stmt = generate(item, env, ctx, def);
stmt;
if (__eq__(index, __sub__(expr[0].length, 1))) {
var stmt = __add__('return ', stmt);
stmt;

};
return stmt;
};_uniq_var_22.__lix_func__ = true;return _uniq_var_22;})()), ";\n"), ";\n");
body;
def.defineFunc(join(['function ', funcName, '() {\n', body, '}']));
return funcName;
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
var generateAtomic = (function () {var _uniq_var_31 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = operateFuncName[expr[0]]);

} else {
(ret = transformVarName(expr[0]));

};

};
return ret;
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
var generateEmpty = (function () {var _uniq_var_51 = function (expr, env, ctx, def) {return 0;
};_uniq_var_51.__lix_func__ = true;return _uniq_var_51;})();
generateEmpty;
var generateDef = (function () {var _uniq_var_52 = function (expr, env, ctx, def) {var varname = expr[0][0];
varname;
def.defineVar(varname);
var ret = join([varname, ' = ', generate(expr[2], env, ctx, def)]);
ret;
(env[varname] = true);
return ret;
};_uniq_var_52.__lix_func__ = true;return _uniq_var_52;})();
generateDef;
var generateAssign = (function () {var _uniq_var_53 = function (expr, env, ctx, def) {var varname = getVarName(expr[0]);
varname;
if (__eq__(env[varname], undefined)) {
console.log(varname);
console.log("var undefined");

};
var varname = generate(expr[0], env, ctx0, def);
varname;
return join([varname, " = ", generate(expr[2], env, ctx, def)]);
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
var generateExpr = (function () {var _uniq_var_57 = function (expr, env, ctx, def) {var func = generate(expr[1], env, ctx0, def);
func;
var args = generate(expr[0], env, ctx0, def);
args;
foreach(expr, (function () {var _uniq_var_56 = function (item, index) {if (__gt__(index, 1)) {
return (args = join([args, ', ', generate(item, env, ctx0, def)]));

};
};_uniq_var_56.__lix_func__ = true;return _uniq_var_56;})());
return ctx(join([func, '(', args, ')']));
};_uniq_var_57.__lix_func__ = true;return _uniq_var_57;})();
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_70 = function () {var vars = {

};
vars;
var funcs = [];
funcs;
return {
defineVar: (function () {var _uniq_var_62 = function (v) {if (v) {
return (vars[v] = v);

} else {
var vecs = map(vars, (function () {var _uniq_var_58 = function (i) {return i;
};_uniq_var_58.__lix_func__ = true;return _uniq_var_58;})());
vecs;
if (__gt__(vecs.length, 0)) {
return __add__('var ', (function () {var _uniq_var_61 = function (_uniq_var_59, _uniq_var_60) {
if (typeof _uniq_var_59.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_59.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_59.join.apply(_uniq_var_59, arguments);
} else if (_uniq_var_59.join !== undefined) {
if (_uniq_var_60 === undefined) {
return _uniq_var_59.join;
}
_uniq_var_59.join = _uniq_var_60;
}return _uniq_var_59;
};_uniq_var_61.__lix_func__ = true;return _uniq_var_61;})()(vecs, ', '));

} else {
return '';

};

};
};_uniq_var_62.__lix_func__ = true;return _uniq_var_62;})(),
defineFunc: (function () {var _uniq_var_69 = function (v) {if (v) {
return (function () {var _uniq_var_65 = function (_uniq_var_63, _uniq_var_64) {
if (typeof _uniq_var_63.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_63.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_63.push.apply(_uniq_var_63, arguments);
} else if (_uniq_var_63.push !== undefined) {
if (_uniq_var_64 === undefined) {
return _uniq_var_63.push;
}
_uniq_var_63.push = _uniq_var_64;
}return _uniq_var_63;
};_uniq_var_65.__lix_func__ = true;return _uniq_var_65;})()(funcs, v);

} else {
return (function () {var _uniq_var_68 = function (_uniq_var_66, _uniq_var_67) {
if (typeof _uniq_var_66.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_66.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_66.join.apply(_uniq_var_66, arguments);
} else if (_uniq_var_66.join !== undefined) {
if (_uniq_var_67 === undefined) {
return _uniq_var_66.join;
}
_uniq_var_66.join = _uniq_var_67;
}return _uniq_var_66;
};_uniq_var_68.__lix_func__ = true;return _uniq_var_68;})()(funcs, ';\n');

};
};_uniq_var_69.__lix_func__ = true;return _uniq_var_69;})()
};
};_uniq_var_70.__lix_func__ = true;return _uniq_var_70;})();
GenerateDefNew;
var generateStart = (function () {var _uniq_var_71 = function (expr, env, ctx, def) {var def = call(GenerateDefNew);
def;
var body = generate(expr[0], env, ctx, def);
body;
var body = join([body, '()']);
body;
return join([call(def.defineVar), ";\n", call(def.defineFunc), ";\n", body]);
};_uniq_var_71.__lix_func__ = true;return _uniq_var_71;})();
generateStart;
var generateMono = (function () {var _uniq_var_72 = function (expr, env, ctx, def) {return generate(expr[0], env, ctx, def);
};_uniq_var_72.__lix_func__ = true;return _uniq_var_72;})();
generateMono;
var generatePathItem = (function () {var _uniq_var_73 = function (expr, env, ctx) {return ctx(join(['"', expr[0], '"']));
};_uniq_var_73.__lix_func__ = true;return _uniq_var_73;})();
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_74 = function (expr, env, ctx) {return ctx(join(['("', expr[2], '" + ', generate(expr[0], env, ctx0), ')']));
};_uniq_var_74.__lix_func__ = true;return _uniq_var_74;})();
generatePathArgItem;
var generatePath = (function () {var _uniq_var_79 = function (expr, env, ctx) {var path = (function () {var _uniq_var_77 = function (_uniq_var_75, _uniq_var_76) {
if (typeof _uniq_var_75.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_75.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_75.join.apply(_uniq_var_75, arguments);
} else if (_uniq_var_75.join !== undefined) {
if (_uniq_var_76 === undefined) {
return _uniq_var_75.join;
}
_uniq_var_75.join = _uniq_var_76;
}return _uniq_var_75;
};_uniq_var_77.__lix_func__ = true;return _uniq_var_77;})()(map(expr[0], (function () {var _uniq_var_78 = function (i) {return generate(i, env, ctx0);
};_uniq_var_78.__lix_func__ = true;return _uniq_var_78;})()), ',');
path;
return ctx(join(['[', path, '].join("/")']));
};_uniq_var_79.__lix_func__ = true;return _uniq_var_79;})();
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
var generateOp = (function () {var _uniq_var_80 = function (hint) {if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};
};_uniq_var_80.__lix_func__ = true;return _uniq_var_80;})();
generateOp;
var generate = (function () {var _uniq_var_81 = function (expr, env, ctx, def) {return generateOp(expr[1])(expr, env, ctx, def);
};_uniq_var_81.__lix_func__ = true;return _uniq_var_81;})();
generate;
var env0 = {
exports: true,
print: (function () {var _uniq_var_84 = function (_uniq_var_82, _uniq_var_83) {
if (typeof _uniq_var_82.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_82.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_82.join.apply(_uniq_var_82, arguments);
} else if (_uniq_var_82.join !== undefined) {
if (_uniq_var_83 === undefined) {
return _uniq_var_82.join;
}
_uniq_var_82.join = _uniq_var_83;
}return _uniq_var_82;
};_uniq_var_84.__lix_func__ = true;return _uniq_var_84;})()(["function print(x) {", "return function () {", "return console.log(x); ", "}", "}"], '\n'),
not: (function () {var _uniq_var_87 = function (_uniq_var_85, _uniq_var_86) {
if (typeof _uniq_var_85.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_85.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_85.join.apply(_uniq_var_85, arguments);
} else if (_uniq_var_85.join !== undefined) {
if (_uniq_var_86 === undefined) {
return _uniq_var_85.join;
}
_uniq_var_85.join = _uniq_var_86;
}return _uniq_var_85;
};_uniq_var_87.__lix_func__ = true;return _uniq_var_87;})()(["function not(x) {", "return function () {", "return !x; ", "}", "}"], '\n'),
_instance_: (function () {var _uniq_var_90 = function (_uniq_var_88, _uniq_var_89) {
if (typeof _uniq_var_88.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_88.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_88.join.apply(_uniq_var_88, arguments);
} else if (_uniq_var_88.join !== undefined) {
if (_uniq_var_89 === undefined) {
return _uniq_var_88.join;
}
_uniq_var_88.join = _uniq_var_89;
}return _uniq_var_88;
};_uniq_var_90.__lix_func__ = true;return _uniq_var_90;})()(["function _instance_(x) {", "return function () {", "return new x(); ", "}", "}"], '\n'),
__add__: (function () {var _uniq_var_93 = function (_uniq_var_91, _uniq_var_92) {
if (typeof _uniq_var_91.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_91.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_91.join.apply(_uniq_var_91, arguments);
} else if (_uniq_var_91.join !== undefined) {
if (_uniq_var_92 === undefined) {
return _uniq_var_91.join;
}
_uniq_var_91.join = _uniq_var_92;
}return _uniq_var_91;
};_uniq_var_93.__lix_func__ = true;return _uniq_var_93;})()(["function __add__(x, y) {", "return function () {", "return x + y;", "}", "}"], '\n'),
__sub__: (function () {var _uniq_var_96 = function (_uniq_var_94, _uniq_var_95) {
if (typeof _uniq_var_94.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_94.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_94.join.apply(_uniq_var_94, arguments);
} else if (_uniq_var_94.join !== undefined) {
if (_uniq_var_95 === undefined) {
return _uniq_var_94.join;
}
_uniq_var_94.join = _uniq_var_95;
}return _uniq_var_94;
};_uniq_var_96.__lix_func__ = true;return _uniq_var_96;})()(["function __sub__(x, y) {", "return function () {", "return x - y;", "}", "}"], '\n'),
__mul__: (function () {var _uniq_var_99 = function (_uniq_var_97, _uniq_var_98) {
if (typeof _uniq_var_97.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_97.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_97.join.apply(_uniq_var_97, arguments);
} else if (_uniq_var_97.join !== undefined) {
if (_uniq_var_98 === undefined) {
return _uniq_var_97.join;
}
_uniq_var_97.join = _uniq_var_98;
}return _uniq_var_97;
};_uniq_var_99.__lix_func__ = true;return _uniq_var_99;})()(["function __mul__(x, y) {", "return function () {", "return x * y;", "}", "}"], '\n'),
__div__: (function () {var _uniq_var_102 = function (_uniq_var_100, _uniq_var_101) {
if (typeof _uniq_var_100.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_100.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_100.join.apply(_uniq_var_100, arguments);
} else if (_uniq_var_100.join !== undefined) {
if (_uniq_var_101 === undefined) {
return _uniq_var_100.join;
}
_uniq_var_100.join = _uniq_var_101;
}return _uniq_var_100;
};_uniq_var_102.__lix_func__ = true;return _uniq_var_102;})()(["function __div__(x, y) {", "return function () {", "return x / y;", "}", "}"], '\n'),
__mod__: (function () {var _uniq_var_105 = function (_uniq_var_103, _uniq_var_104) {
if (typeof _uniq_var_103.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_103.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_103.join.apply(_uniq_var_103, arguments);
} else if (_uniq_var_103.join !== undefined) {
if (_uniq_var_104 === undefined) {
return _uniq_var_103.join;
}
_uniq_var_103.join = _uniq_var_104;
}return _uniq_var_103;
};_uniq_var_105.__lix_func__ = true;return _uniq_var_105;})()(["function __mod__(x, y) {", "return function () {", "return x % y;", "}", "}"], '\n'),
__gt__: (function () {var _uniq_var_108 = function (_uniq_var_106, _uniq_var_107) {
if (typeof _uniq_var_106.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_106.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_106.join.apply(_uniq_var_106, arguments);
} else if (_uniq_var_106.join !== undefined) {
if (_uniq_var_107 === undefined) {
return _uniq_var_106.join;
}
_uniq_var_106.join = _uniq_var_107;
}return _uniq_var_106;
};_uniq_var_108.__lix_func__ = true;return _uniq_var_108;})()(["function __gt__(x, y) {", "return function () {", "return x > y;", "}", "}"], '\n'),
__ge__: (function () {var _uniq_var_111 = function (_uniq_var_109, _uniq_var_110) {
if (typeof _uniq_var_109.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_109.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_109.join.apply(_uniq_var_109, arguments);
} else if (_uniq_var_109.join !== undefined) {
if (_uniq_var_110 === undefined) {
return _uniq_var_109.join;
}
_uniq_var_109.join = _uniq_var_110;
}return _uniq_var_109;
};_uniq_var_111.__lix_func__ = true;return _uniq_var_111;})()(["function __ge__(x, y) {", "return function () {", "return x >= y;", "}", "}"], '\n'),
__eq__: (function () {var _uniq_var_114 = function (_uniq_var_112, _uniq_var_113) {
if (typeof _uniq_var_112.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_112.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_112.join.apply(_uniq_var_112, arguments);
} else if (_uniq_var_112.join !== undefined) {
if (_uniq_var_113 === undefined) {
return _uniq_var_112.join;
}
_uniq_var_112.join = _uniq_var_113;
}return _uniq_var_112;
};_uniq_var_114.__lix_func__ = true;return _uniq_var_114;})()(["function __eq__(x, y) {", "return function () {", "return x == y;", "}", "}"], '\n'),
__ne__: (function () {var _uniq_var_117 = function (_uniq_var_115, _uniq_var_116) {
if (typeof _uniq_var_115.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_115.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_115.join.apply(_uniq_var_115, arguments);
} else if (_uniq_var_115.join !== undefined) {
if (_uniq_var_116 === undefined) {
return _uniq_var_115.join;
}
_uniq_var_115.join = _uniq_var_116;
}return _uniq_var_115;
};_uniq_var_117.__lix_func__ = true;return _uniq_var_117;})()(["function __ne__(x, y) {", "return function () {", "return x != y;", "}", "}"], '\n'),
__le__: (function () {var _uniq_var_120 = function (_uniq_var_118, _uniq_var_119) {
if (typeof _uniq_var_118.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_118.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_118.join.apply(_uniq_var_118, arguments);
} else if (_uniq_var_118.join !== undefined) {
if (_uniq_var_119 === undefined) {
return _uniq_var_118.join;
}
_uniq_var_118.join = _uniq_var_119;
}return _uniq_var_118;
};_uniq_var_120.__lix_func__ = true;return _uniq_var_120;})()(["function __le__(x, y) {", "return function () {", "return x <= y;", "}", "}"], '\n'),
__lt__: (function () {var _uniq_var_123 = function (_uniq_var_121, _uniq_var_122) {
if (typeof _uniq_var_121.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_121.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_121.join.apply(_uniq_var_121, arguments);
} else if (_uniq_var_121.join !== undefined) {
if (_uniq_var_122 === undefined) {
return _uniq_var_121.join;
}
_uniq_var_121.join = _uniq_var_122;
}return _uniq_var_121;
};_uniq_var_123.__lix_func__ = true;return _uniq_var_123;})()(["function __lt__(x, y) {", "return function () {", "return x < y;", "}", "}"], '\n'),
isFunction: (function () {var _uniq_var_126 = function (_uniq_var_124, _uniq_var_125) {
if (typeof _uniq_var_124.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_124.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_124.join.apply(_uniq_var_124, arguments);
} else if (_uniq_var_124.join !== undefined) {
if (_uniq_var_125 === undefined) {
return _uniq_var_124.join;
}
_uniq_var_124.join = _uniq_var_125;
}return _uniq_var_124;
};_uniq_var_126.__lix_func__ = true;return _uniq_var_126;})()(["function isFunction(x) {", "return function () {", "return typeof x === 'function';", "}", "}"], '\n'),
isArray: (function () {var _uniq_var_129 = function (_uniq_var_127, _uniq_var_128) {
if (typeof _uniq_var_127.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_127.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_127.join.apply(_uniq_var_127, arguments);
} else if (_uniq_var_127.join !== undefined) {
if (_uniq_var_128 === undefined) {
return _uniq_var_127.join;
}
_uniq_var_127.join = _uniq_var_128;
}return _uniq_var_127;
};_uniq_var_129.__lix_func__ = true;return _uniq_var_129;})()(["function isArray(x) {", "return function () {", "return x instanceof Array;", "}", "}"], '\n'),
foreach: (function () {var _uniq_var_132 = function (_uniq_var_130, _uniq_var_131) {
if (typeof _uniq_var_130.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_130.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_130.join.apply(_uniq_var_130, arguments);
} else if (_uniq_var_130.join !== undefined) {
if (_uniq_var_131 === undefined) {
return _uniq_var_130.join;
}
_uniq_var_130.join = _uniq_var_131;
}return _uniq_var_130;
};_uniq_var_132.__lix_func__ = true;return _uniq_var_132;})()(["function foreach(arr, cb) {", "return function () {", "for (var i in arr) {", "cb(arr[i], i);", "}", "}", "}"], '\n'),
call: (function () {var _uniq_var_135 = function (_uniq_var_133, _uniq_var_134) {
if (typeof _uniq_var_133.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_133.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_133.join.apply(_uniq_var_133, arguments);
} else if (_uniq_var_133.join !== undefined) {
if (_uniq_var_134 === undefined) {
return _uniq_var_133.join;
}
_uniq_var_133.join = _uniq_var_134;
}return _uniq_var_133;
};_uniq_var_135.__lix_func__ = true;return _uniq_var_135;})()(["function call(fn) {", "return function () {", "var collect = [];", "for (var i in arguments) {", "collect.push(arguments[i]);", "}", "collect.shift();", "return fn.apply(fn, collect);", "}", "}"], '\n'),
apply: (function () {var _uniq_var_138 = function (_uniq_var_136, _uniq_var_137) {
if (typeof _uniq_var_136.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_136.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_136.join.apply(_uniq_var_136, arguments);
} else if (_uniq_var_136.join !== undefined) {
if (_uniq_var_137 === undefined) {
return _uniq_var_136.join;
}
_uniq_var_136.join = _uniq_var_137;
}return _uniq_var_136;
};_uniq_var_138.__lix_func__ = true;return _uniq_var_138;})()(["function apply(fn) {", "return function () {", "return fn.apply(fn, arguments[1]);", "}", "}"], '\n')
};
env0;
var env_new = (function () {var _uniq_var_140 = function (env) {(env = (env || env0));
var Env = (function () {var _uniq_var_139 = function () {;
};_uniq_var_139.__lix_func__ = true;return _uniq_var_139;})();
Env;
(Env.prototype = env);
return _instance_(Env);
};_uniq_var_140.__lix_func__ = true;return _uniq_var_140;})();
env_new;
var flattenExpr = (function () {var _uniq_var_142 = function (expr, define) {return define(map(expr, (function () {var _uniq_var_141 = function (item) {return flatten(item, define);
};_uniq_var_141.__lix_func__ = true;return _uniq_var_141;})()));
};_uniq_var_142.__lix_func__ = true;return _uniq_var_142;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_143 = function (expr, define) {return expr;
};_uniq_var_143.__lix_func__ = true;return _uniq_var_143;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_148 = function (expr, define) {var whileDefine = call(statementFlattenGenerator);
whileDefine;
(expr[0] = flatten(expr[0], whileDefine));
(expr[2] = flatten(expr[2], define0));
(expr[2][0] = (function () {var _uniq_var_146 = function (_uniq_var_144, _uniq_var_145) {
if (typeof _uniq_var_144.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_144.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_144.concat.apply(_uniq_var_144, arguments);
} else if (_uniq_var_144.concat !== undefined) {
if (_uniq_var_145 === undefined) {
return _uniq_var_144.concat;
}
_uniq_var_144.concat = _uniq_var_145;
}return _uniq_var_144;
};_uniq_var_146.__lix_func__ = true;return _uniq_var_146;})()(expr[2][0], call(whileDefine)));
foreach(call(whileDefine), (function () {var _uniq_var_147 = function (i) {return define(i, true);
};_uniq_var_147.__lix_func__ = true;return _uniq_var_147;})());
return expr;
};_uniq_var_148.__lix_func__ = true;return _uniq_var_148;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_153 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_152 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_151 = function (_uniq_var_149, _uniq_var_150) {
if (typeof _uniq_var_149.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_149.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_149.push.apply(_uniq_var_149, arguments);
} else if (_uniq_var_149.push !== undefined) {
if (_uniq_var_150 === undefined) {
return _uniq_var_149.push;
}
_uniq_var_149.push = _uniq_var_150;
}return _uniq_var_149;
};_uniq_var_151.__lix_func__ = true;return _uniq_var_151;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_152.__lix_func__ = true;return _uniq_var_152;})();
getAndOpSeq;
define([[[[ret, ['not', '{atomic}', 'var']], call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_153.__lix_func__ = true;return _uniq_var_153;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_158 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_157 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_156 = function (_uniq_var_154, _uniq_var_155) {
if (typeof _uniq_var_154.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_154.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_154.push.apply(_uniq_var_154, arguments);
} else if (_uniq_var_154.push !== undefined) {
if (_uniq_var_155 === undefined) {
return _uniq_var_154.push;
}
_uniq_var_154.push = _uniq_var_155;
}return _uniq_var_154;
};_uniq_var_156.__lix_func__ = true;return _uniq_var_156;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_157.__lix_func__ = true;return _uniq_var_157;})();
getAndOpSeq;
define([[[ret, call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_158.__lix_func__ = true;return _uniq_var_158;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_163 = function (expr, define, tmpVar, ctx) {return foreach(expr[0], (function () {var _uniq_var_162 = function (i) {if (__eq__(i[1], 'else')) {
var elseSeq = flatten(i[0], define0, ctx);
elseSeq;
return define([[[tmpVar, elseSeq]], 'if'], true);

} else if (__eq__(i[1], 'if')) {
return define(_flattenIf(i, define, tmpVar, ctx));

} else {
var ifSeq = flatten(i[1], define0, ctx);
ifSeq;
(function () {var _uniq_var_161 = function (_uniq_var_159, _uniq_var_160) {
if (typeof _uniq_var_159.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_159.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_159.unshift.apply(_uniq_var_159, arguments);
} else if (_uniq_var_159.unshift !== undefined) {
if (_uniq_var_160 === undefined) {
return _uniq_var_159.unshift;
}
_uniq_var_159.unshift = _uniq_var_160;
}return _uniq_var_159;
};_uniq_var_161.__lix_func__ = true;return _uniq_var_161;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
var cond = flatten(i[0], define);
cond;
var cond = [tmpVar, 'and', cond];
cond;
return define([[[cond, ifSeq]], 'if'], true);

};
};_uniq_var_162.__lix_func__ = true;return _uniq_var_162;})());
};_uniq_var_163.__lix_func__ = true;return _uniq_var_163;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_165 = function (expr, define) {var tmpVar = define(['true', '{atomic}']);
tmpVar;
var retVar = define(['null', '{atomic}']);
retVar;
var ctx = (function () {var _uniq_var_164 = function (i) {return [retVar, '=', i];
};_uniq_var_164.__lix_func__ = true;return _uniq_var_164;})();
ctx;
_flattenIf(expr, define, tmpVar, ctx);
return retVar;
};_uniq_var_165.__lix_func__ = true;return _uniq_var_165;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_166 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_166.__lix_func__ = true;return _uniq_var_166;})();
flattenAssign;
var flattenDef = (function () {var _uniq_var_167 = function (expr, define) {(expr[2] = flatten(expr[2], define));
define(expr, true);
return expr[0];
};_uniq_var_167.__lix_func__ = true;return _uniq_var_167;})();
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_168 = function (expr, define) {(expr[0] = flatten(expr[0], define));
return expr;
};_uniq_var_168.__lix_func__ = true;return _uniq_var_168;})();
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_169 = function (expr, define) {return expr;
};_uniq_var_169.__lix_func__ = true;return _uniq_var_169;})();
flattenPathItem;
var flattenPath = (function () {var _uniq_var_171 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_170 = function (i) {return flatten(i, define);
};_uniq_var_170.__lix_func__ = true;return _uniq_var_170;})()));
return expr;
};_uniq_var_171.__lix_func__ = true;return _uniq_var_171;})();
flattenPath;
var flattenEmpty = (function () {var _uniq_var_172 = function (expr, define) {return expr;
};_uniq_var_172.__lix_func__ = true;return _uniq_var_172;})();
flattenEmpty;
var flattenField = (function () {var _uniq_var_173 = function (expr, define) {if (__eq__(expr[1], '{index}')) {
(expr[0] = flatten(expr[0], define));

};
return expr;
};_uniq_var_173.__lix_func__ = true;return _uniq_var_173;})();
flattenField;
var flattenMethod = (function () {var _uniq_var_174 = function (expr, define) {(expr[0] = flattenField(expr[0], define));
return expr;
};_uniq_var_174.__lix_func__ = true;return _uniq_var_174;})();
flattenMethod;
var flattenProperty = (function () {var _uniq_var_175 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_175.__lix_func__ = true;return _uniq_var_175;})();
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_177 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_176 = function (i) {return flattenProperty(i, define);
};_uniq_var_176.__lix_func__ = true;return _uniq_var_176;})()));
return expr;
};_uniq_var_177.__lix_func__ = true;return _uniq_var_177;})();
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_179 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_178 = function (i) {return flatten(i, define);
};_uniq_var_178.__lix_func__ = true;return _uniq_var_178;})()));
return expr;
};_uniq_var_179.__lix_func__ = true;return _uniq_var_179;})();
flattenArray;
var flattenFunc = (function () {var _uniq_var_180 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_180.__lix_func__ = true;return _uniq_var_180;})();
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_181 = function (expr, define) {if (__eq__(expr[1], '{.}')) {
(expr[0] = flattenFieldAccess(expr[0], define));
(expr[2] = flattenField(expr[2], define));

};
return expr;
};_uniq_var_181.__lix_func__ = true;return _uniq_var_181;})();
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_182 = function (expr, define) {return expr;
};_uniq_var_182.__lix_func__ = true;return _uniq_var_182;})();
flattenAtomic;
var flattenMono = (function () {var _uniq_var_183 = function (expr, define) {return flatten(expr[0], define);
};_uniq_var_183.__lix_func__ = true;return _uniq_var_183;})();
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_191 = function () {var data = [];
data;
return (function () {var _uniq_var_190 = function (statement, onlyPush) {if (__eq__(statement, undefined)) {
return data;

} else if (onlyPush) {
return (function () {var _uniq_var_186 = function (_uniq_var_184, _uniq_var_185) {
if (typeof _uniq_var_184.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_184.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_184.push.apply(_uniq_var_184, arguments);
} else if (_uniq_var_184.push !== undefined) {
if (_uniq_var_185 === undefined) {
return _uniq_var_184.push;
}
_uniq_var_184.push = _uniq_var_185;
}return _uniq_var_184;
};_uniq_var_186.__lix_func__ = true;return _uniq_var_186;})()(data, statement);

} else {
var varName = call(getUniqVarName);
varName;
var lixVar = [varName, '{atomic}', '{var}'];
lixVar;
(function () {var _uniq_var_189 = function (_uniq_var_187, _uniq_var_188) {
if (typeof _uniq_var_187.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_187.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_187.push.apply(_uniq_var_187, arguments);
} else if (_uniq_var_187.push !== undefined) {
if (_uniq_var_188 === undefined) {
return _uniq_var_187.push;
}
_uniq_var_187.push = _uniq_var_188;
}return _uniq_var_187;
};_uniq_var_189.__lix_func__ = true;return _uniq_var_189;})()(data, [lixVar, ':=', statement]);
return lixVar;

};
};_uniq_var_190.__lix_func__ = true;return _uniq_var_190;})();
};_uniq_var_191.__lix_func__ = true;return _uniq_var_191;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_200 = function (expr, define, seqCtx) {var ret = [];
ret;
var ctx = (function () {var _uniq_var_192 = function (stmt, index) {var ret = stmt;
ret;
if ((seqCtx && __eq__(parseInt(index), __sub__(expr[0].length, 1)))) {
var ret = seqCtx(stmt);
ret;

};
return ret;
};_uniq_var_192.__lix_func__ = true;return _uniq_var_192;})();
ctx;
foreach(expr[0], (function () {var _uniq_var_199 = function (item, index) {var exprDefine = call(statementFlattenGenerator);
exprDefine;
var itemRet = flatten(item, exprDefine);
itemRet;
(ret = (function () {var _uniq_var_195 = function (_uniq_var_193, _uniq_var_194) {
if (typeof _uniq_var_193.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_193.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_193.concat.apply(_uniq_var_193, arguments);
} else if (_uniq_var_193.concat !== undefined) {
if (_uniq_var_194 === undefined) {
return _uniq_var_193.concat;
}
_uniq_var_193.concat = _uniq_var_194;
}return _uniq_var_193;
};_uniq_var_195.__lix_func__ = true;return _uniq_var_195;})()(ret, call(exprDefine)));
return (function () {var _uniq_var_198 = function (_uniq_var_196, _uniq_var_197) {
if (typeof _uniq_var_196.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_196.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_196.push.apply(_uniq_var_196, arguments);
} else if (_uniq_var_196.push !== undefined) {
if (_uniq_var_197 === undefined) {
return _uniq_var_196.push;
}
_uniq_var_196.push = _uniq_var_197;
}return _uniq_var_196;
};_uniq_var_198.__lix_func__ = true;return _uniq_var_198;})()(ret, ctx(itemRet, index));
};_uniq_var_199.__lix_func__ = true;return _uniq_var_199;})());
(expr[0] = ret);
return expr;
};_uniq_var_200.__lix_func__ = true;return _uniq_var_200;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_201 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
return [ret, '{start}'];
};_uniq_var_201.__lix_func__ = true;return _uniq_var_201;})();
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
var flattenOp = (function () {var _uniq_var_202 = function (hint) {if (flattenOpTable[hint]) {
return flattenOpTable[hint];

} else {
return flattenExpr;

};
};_uniq_var_202.__lix_func__ = true;return _uniq_var_202;})();
flattenOp;
var flatten = (function () {var _uniq_var_203 = function (expr, define, ctx) {return flattenOp(expr[1])(expr, define, ctx);
};_uniq_var_203.__lix_func__ = true;return _uniq_var_203;})();
flatten;
var define0 = (function () {var _uniq_var_204 = function (i) {return i;
};_uniq_var_204.__lix_func__ = true;return _uniq_var_204;})();
define0;
var def0 = {
defineVar: (function () {var _uniq_var_205 = function (i) {;
};_uniq_var_205.__lix_func__ = true;return _uniq_var_205;})(),
defineFunc: (function () {var _uniq_var_206 = function (i) {;
};_uniq_var_206.__lix_func__ = true;return _uniq_var_206;})()
};
def0;
(exports.compile = (function () {var _uniq_var_212 = function (expr) {var libs = (function () {var _uniq_var_209 = function (_uniq_var_207, _uniq_var_208) {
if (typeof _uniq_var_207.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_207.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_207.join.apply(_uniq_var_207, arguments);
} else if (_uniq_var_207.join !== undefined) {
if (_uniq_var_208 === undefined) {
return _uniq_var_207.join;
}
_uniq_var_207.join = _uniq_var_208;
}return _uniq_var_207;
};_uniq_var_209.__lix_func__ = true;return _uniq_var_209;})()(map(env0, (function () {var _uniq_var_210 = function (i) {return i;
};_uniq_var_210.__lix_func__ = true;return _uniq_var_210;})()), "\n");
libs;
var code = generate(flatten(expr, (function () {var _uniq_var_211 = function (i) {;
};_uniq_var_211.__lix_func__ = true;return _uniq_var_211;})()), call(env_new), ctx0, def0);
code;
return console.log(join([libs, "\n", code]));
};_uniq_var_212.__lix_func__ = true;return _uniq_var_212;})());

