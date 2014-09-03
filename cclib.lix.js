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
var generateOr = (function () {var _uniq_var_24 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " || ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_24.__lix_func__ = true;return _uniq_var_24;})();
generateOr;
var generateAnd = (function () {var _uniq_var_25 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " && ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_25.__lix_func__ = true;return _uniq_var_25;})();
generateAnd;
var generateIf = (function () {var _uniq_var_30 = function (expr, env, ctx, def) {return (function () {var _uniq_var_28 = function (_uniq_var_26, _uniq_var_27) {
if (typeof _uniq_var_26.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_26.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_26.join.apply(_uniq_var_26, arguments);
} else if (_uniq_var_26.join !== undefined) {
if (_uniq_var_27 === undefined) {
return _uniq_var_26.join;
}
_uniq_var_26.join = _uniq_var_27;
}return _uniq_var_26;
};_uniq_var_28.__lix_func__ = true;return _uniq_var_28;})()(map(expr[0], (function () {var _uniq_var_29 = function (i) {if (__eq__(i[1], 'else')) {
return join(['{\n', generate(i[0], env, ctx, def), '\n}']);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx, def);

} else {
return join(['if (', generate(i[0], env, ctx, def), ') {\n', ctx(generate(i[1], env, ctx, def)), '\n}']);

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
var generatePropertyName = (function () {var _uniq_var_32 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx, def);

} else if (__eq__(expr[1], '{index}')) {
return generateAtomic(expr[0], env, ctx, def);

};
};_uniq_var_32.__lix_func__ = true;return _uniq_var_32;})();
generatePropertyName;
var generateProperty = (function () {var _uniq_var_33 = function (expr, env, ctx, def) {var propertyName = generatePropertyName(expr[0], env, ctx0, def);
propertyName;
var propertyValue = generate(expr[2], env, ctx, def);
propertyValue;
return join([propertyName, ": ", propertyValue]);
};_uniq_var_33.__lix_func__ = true;return _uniq_var_33;})();
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_38 = function (expr, env, ctx, def) {var objectBody = (function () {var _uniq_var_36 = function (_uniq_var_34, _uniq_var_35) {
if (typeof _uniq_var_34.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_34.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_34.join.apply(_uniq_var_34, arguments);
} else if (_uniq_var_34.join !== undefined) {
if (_uniq_var_35 === undefined) {
return _uniq_var_34.join;
}
_uniq_var_34.join = _uniq_var_35;
}return _uniq_var_34;
};_uniq_var_36.__lix_func__ = true;return _uniq_var_36;})()(map(expr[0], (function () {var _uniq_var_37 = function (i) {return generateProperty(i, env, ctx, def);
};_uniq_var_37.__lix_func__ = true;return _uniq_var_37;})()), ",\n");
objectBody;
return join(["{\n", objectBody, "\n}"]);
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
var generateField = (function () {var _uniq_var_41 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0, def));

} else if (__eq__(expr[1], '{index}')) {
return join(['[', generate(expr[0], env, ctx, def), ']']);

};
};_uniq_var_41.__lix_func__ = true;return _uniq_var_41;})();
generateField;
var generateFieldAccess = (function () {var _uniq_var_42 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx0, def);

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx, def);
obj;
var field = generateField(expr[2], env, ctx, def);
field;
return __add__(obj, field);

};
};_uniq_var_42.__lix_func__ = true;return _uniq_var_42;})();
generateFieldAccess;
var generateArray = (function () {var _uniq_var_47 = function (expr, env, ctx, def) {var arrayBody = (function () {var _uniq_var_45 = function (_uniq_var_43, _uniq_var_44) {
if (typeof _uniq_var_43.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_43.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_43.join.apply(_uniq_var_43, arguments);
} else if (_uniq_var_43.join !== undefined) {
if (_uniq_var_44 === undefined) {
return _uniq_var_43.join;
}
_uniq_var_43.join = _uniq_var_44;
}return _uniq_var_43;
};_uniq_var_45.__lix_func__ = true;return _uniq_var_45;})()(map(expr[0], (function () {var _uniq_var_46 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_46.__lix_func__ = true;return _uniq_var_46;})()), ', ');
arrayBody;
return join(['[', arrayBody, ']']);
};_uniq_var_47.__lix_func__ = true;return _uniq_var_47;})();
generateArray;
var generateMethod = (function () {var _uniq_var_48 = function (expr, env, ctx) {var localVarName = call(getUniqVarName);
localVarName;
var localValueName = call(getUniqVarName);
localValueName;
var methodName = generateField(expr[0], env, ctx0);
methodName;
var method = __add__(localVarName, methodName);
method;
var tmpVar = call(getUniqVarName);
tmpVar;
return join(["(function (", localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return ", method, ';\n', "}\n", "return function () {\n", method, " = ", localValueName, ";\n", "}\n", "}", "})"]);
};_uniq_var_48.__lix_func__ = true;return _uniq_var_48;})();
generateMethod;
var generateWhile = (function () {var _uniq_var_49 = function (expr, env, ctx, def) {return join(['while (', generate(expr[0], env, ctx, def), ') {\n', ctx(generate(expr[2], env, ctx, def)), "\n}"]);
};_uniq_var_49.__lix_func__ = true;return _uniq_var_49;})();
generateWhile;
var generateBreak = (function () {var _uniq_var_50 = function (expr, env, ctx) {return 'break';
};_uniq_var_50.__lix_func__ = true;return _uniq_var_50;})();
generateBreak;
var generateEmpty = (function () {var _uniq_var_51 = function (expr, env, ctx, def) {return "";
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
var generateFunc = (function () {var _uniq_var_54 = function (expr, env, ctx, def) {var funcEnv = env_new(env);
funcEnv;
var args = generateFuncArgs(expr[0], funcEnv, ctx0);
args;
var tmpVar = call(getUniqVarName);
tmpVar;
var def = call(GenerateDefNew);
def;
var body = generate(expr[2], funcEnv, ctx0, def);
body;
return join(['(function (', args, ') {\n', call(def.defineVar), ";\n", call(def.defineFunc), ";\n", 'return ', body, ";\n", '})']);
};_uniq_var_54.__lix_func__ = true;return _uniq_var_54;})();
generateFunc;
var generateExpr = (function () {var _uniq_var_56 = function (expr, env, ctx, def) {var func = generate(expr[1], env, ctx0, def);
func;
var args = generate(expr[0], env, ctx0, def);
args;
foreach(expr, (function () {var _uniq_var_55 = function (item, index) {if (__gt__(index, 1)) {
return (args = join([args, ', ', generate(item, env, ctx0, def)]));

};
};_uniq_var_55.__lix_func__ = true;return _uniq_var_55;})());
return ctx(join([func, '(', args, ')']));
};_uniq_var_56.__lix_func__ = true;return _uniq_var_56;})();
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_69 = function () {var vars = {

};
vars;
var funcs = [];
funcs;
return {
defineVar: (function () {var _uniq_var_61 = function (v) {if (v) {
return (vars[v] = v);

} else {
var vecs = map(vars, (function () {var _uniq_var_57 = function (i) {return i;
};_uniq_var_57.__lix_func__ = true;return _uniq_var_57;})());
vecs;
if (__gt__(vecs.length, 0)) {
return __add__('var ', (function () {var _uniq_var_60 = function (_uniq_var_58, _uniq_var_59) {
if (typeof _uniq_var_58.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_58.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_58.join.apply(_uniq_var_58, arguments);
} else if (_uniq_var_58.join !== undefined) {
if (_uniq_var_59 === undefined) {
return _uniq_var_58.join;
}
_uniq_var_58.join = _uniq_var_59;
}return _uniq_var_58;
};_uniq_var_60.__lix_func__ = true;return _uniq_var_60;})()(vecs, ', '));

} else {
return '';

};

};
};_uniq_var_61.__lix_func__ = true;return _uniq_var_61;})(),
defineFunc: (function () {var _uniq_var_68 = function (v) {if (v) {
return (function () {var _uniq_var_64 = function (_uniq_var_62, _uniq_var_63) {
if (typeof _uniq_var_62.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_62.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_62.push.apply(_uniq_var_62, arguments);
} else if (_uniq_var_62.push !== undefined) {
if (_uniq_var_63 === undefined) {
return _uniq_var_62.push;
}
_uniq_var_62.push = _uniq_var_63;
}return _uniq_var_62;
};_uniq_var_64.__lix_func__ = true;return _uniq_var_64;})()(funcs, v);

} else {
return (function () {var _uniq_var_67 = function (_uniq_var_65, _uniq_var_66) {
if (typeof _uniq_var_65.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_65.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_65.join.apply(_uniq_var_65, arguments);
} else if (_uniq_var_65.join !== undefined) {
if (_uniq_var_66 === undefined) {
return _uniq_var_65.join;
}
_uniq_var_65.join = _uniq_var_66;
}return _uniq_var_65;
};_uniq_var_67.__lix_func__ = true;return _uniq_var_67;})()(funcs, ';\n');

};
};_uniq_var_68.__lix_func__ = true;return _uniq_var_68;})()
};
};_uniq_var_69.__lix_func__ = true;return _uniq_var_69;})();
GenerateDefNew;
var generateStart = (function () {var _uniq_var_70 = function (expr, env, ctx, def) {var def = call(GenerateDefNew);
def;
var body = generate(expr[0], env, ctx, def);
body;
var body = join([body, '()']);
body;
return join([call(def.defineVar), ";\n", call(def.defineFunc), ";\n", body]);
};_uniq_var_70.__lix_func__ = true;return _uniq_var_70;})();
generateStart;
var generateMono = (function () {var _uniq_var_71 = function (expr, env, ctx, def) {return generate(expr[0], env, ctx, def);
};_uniq_var_71.__lix_func__ = true;return _uniq_var_71;})();
generateMono;
var generatePathItem = (function () {var _uniq_var_72 = function (expr, env, ctx, def) {return join(['"', expr[0], '"']);
};_uniq_var_72.__lix_func__ = true;return _uniq_var_72;})();
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_73 = function (expr, env, ctx, def) {return join(['("', expr[2], '" + ', generate(expr[0], env, ctx, def), ')']);
};_uniq_var_73.__lix_func__ = true;return _uniq_var_73;})();
generatePathArgItem;
var generatePath = (function () {var _uniq_var_78 = function (expr, env, ctx, def) {var path = (function () {var _uniq_var_76 = function (_uniq_var_74, _uniq_var_75) {
if (typeof _uniq_var_74.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_74.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_74.join.apply(_uniq_var_74, arguments);
} else if (_uniq_var_74.join !== undefined) {
if (_uniq_var_75 === undefined) {
return _uniq_var_74.join;
}
_uniq_var_74.join = _uniq_var_75;
}return _uniq_var_74;
};_uniq_var_76.__lix_func__ = true;return _uniq_var_76;})()(map(expr[0], (function () {var _uniq_var_77 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_77.__lix_func__ = true;return _uniq_var_77;})()), ',');
path;
return join(['[', path, '].join("/")']);
};_uniq_var_78.__lix_func__ = true;return _uniq_var_78;})();
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
var generateOp = (function () {var _uniq_var_79 = function (hint) {if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};
};_uniq_var_79.__lix_func__ = true;return _uniq_var_79;})();
generateOp;
var generate = (function () {var _uniq_var_80 = function (expr, env, ctx, def) {return generateOp(expr[1])(expr, env, ctx, def);
};_uniq_var_80.__lix_func__ = true;return _uniq_var_80;})();
generate;
var env0 = {
exports: true,
array_join: (function () {var _uniq_var_83 = function (_uniq_var_81, _uniq_var_82) {
if (typeof _uniq_var_81.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_81.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_81.join.apply(_uniq_var_81, arguments);
} else if (_uniq_var_81.join !== undefined) {
if (_uniq_var_82 === undefined) {
return _uniq_var_81.join;
}
_uniq_var_81.join = _uniq_var_82;
}return _uniq_var_81;
};_uniq_var_83.__lix_func__ = true;return _uniq_var_83;})()(["function array_join(arr, glue) {\n", "return function () {\n", "return arr.join(glue)\n", "}\n", "}"], '\n'),
print: (function () {var _uniq_var_86 = function (_uniq_var_84, _uniq_var_85) {
if (typeof _uniq_var_84.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_84.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_84.join.apply(_uniq_var_84, arguments);
} else if (_uniq_var_84.join !== undefined) {
if (_uniq_var_85 === undefined) {
return _uniq_var_84.join;
}
_uniq_var_84.join = _uniq_var_85;
}return _uniq_var_84;
};_uniq_var_86.__lix_func__ = true;return _uniq_var_86;})()(["function print(x) {", "return function () {", "return console.log(x); ", "}", "}"], '\n'),
not: (function () {var _uniq_var_89 = function (_uniq_var_87, _uniq_var_88) {
if (typeof _uniq_var_87.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_87.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_87.join.apply(_uniq_var_87, arguments);
} else if (_uniq_var_87.join !== undefined) {
if (_uniq_var_88 === undefined) {
return _uniq_var_87.join;
}
_uniq_var_87.join = _uniq_var_88;
}return _uniq_var_87;
};_uniq_var_89.__lix_func__ = true;return _uniq_var_89;})()(["function not(x) {", "return function () {", "return !x; ", "}", "}"], '\n'),
_instance_: (function () {var _uniq_var_92 = function (_uniq_var_90, _uniq_var_91) {
if (typeof _uniq_var_90.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_90.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_90.join.apply(_uniq_var_90, arguments);
} else if (_uniq_var_90.join !== undefined) {
if (_uniq_var_91 === undefined) {
return _uniq_var_90.join;
}
_uniq_var_90.join = _uniq_var_91;
}return _uniq_var_90;
};_uniq_var_92.__lix_func__ = true;return _uniq_var_92;})()(["function _instance_(x) {", "return function () {", "return new x(); ", "}", "}"], '\n'),
__add__: (function () {var _uniq_var_95 = function (_uniq_var_93, _uniq_var_94) {
if (typeof _uniq_var_93.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_93.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_93.join.apply(_uniq_var_93, arguments);
} else if (_uniq_var_93.join !== undefined) {
if (_uniq_var_94 === undefined) {
return _uniq_var_93.join;
}
_uniq_var_93.join = _uniq_var_94;
}return _uniq_var_93;
};_uniq_var_95.__lix_func__ = true;return _uniq_var_95;})()(["function __add__(x, y) {", "return function () {", "return x + y;", "}", "}"], '\n'),
__sub__: (function () {var _uniq_var_98 = function (_uniq_var_96, _uniq_var_97) {
if (typeof _uniq_var_96.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_96.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_96.join.apply(_uniq_var_96, arguments);
} else if (_uniq_var_96.join !== undefined) {
if (_uniq_var_97 === undefined) {
return _uniq_var_96.join;
}
_uniq_var_96.join = _uniq_var_97;
}return _uniq_var_96;
};_uniq_var_98.__lix_func__ = true;return _uniq_var_98;})()(["function __sub__(x, y) {", "return function () {", "return x - y;", "}", "}"], '\n'),
__mul__: (function () {var _uniq_var_101 = function (_uniq_var_99, _uniq_var_100) {
if (typeof _uniq_var_99.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_99.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_99.join.apply(_uniq_var_99, arguments);
} else if (_uniq_var_99.join !== undefined) {
if (_uniq_var_100 === undefined) {
return _uniq_var_99.join;
}
_uniq_var_99.join = _uniq_var_100;
}return _uniq_var_99;
};_uniq_var_101.__lix_func__ = true;return _uniq_var_101;})()(["function __mul__(x, y) {", "return function () {", "return x * y;", "}", "}"], '\n'),
__div__: (function () {var _uniq_var_104 = function (_uniq_var_102, _uniq_var_103) {
if (typeof _uniq_var_102.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_102.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_102.join.apply(_uniq_var_102, arguments);
} else if (_uniq_var_102.join !== undefined) {
if (_uniq_var_103 === undefined) {
return _uniq_var_102.join;
}
_uniq_var_102.join = _uniq_var_103;
}return _uniq_var_102;
};_uniq_var_104.__lix_func__ = true;return _uniq_var_104;})()(["function __div__(x, y) {", "return function () {", "return x / y;", "}", "}"], '\n'),
__mod__: (function () {var _uniq_var_107 = function (_uniq_var_105, _uniq_var_106) {
if (typeof _uniq_var_105.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_105.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_105.join.apply(_uniq_var_105, arguments);
} else if (_uniq_var_105.join !== undefined) {
if (_uniq_var_106 === undefined) {
return _uniq_var_105.join;
}
_uniq_var_105.join = _uniq_var_106;
}return _uniq_var_105;
};_uniq_var_107.__lix_func__ = true;return _uniq_var_107;})()(["function __mod__(x, y) {", "return function () {", "return x % y;", "}", "}"], '\n'),
__gt__: (function () {var _uniq_var_110 = function (_uniq_var_108, _uniq_var_109) {
if (typeof _uniq_var_108.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_108.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_108.join.apply(_uniq_var_108, arguments);
} else if (_uniq_var_108.join !== undefined) {
if (_uniq_var_109 === undefined) {
return _uniq_var_108.join;
}
_uniq_var_108.join = _uniq_var_109;
}return _uniq_var_108;
};_uniq_var_110.__lix_func__ = true;return _uniq_var_110;})()(["function __gt__(x, y) {", "return function () {", "return x > y;", "}", "}"], '\n'),
__ge__: (function () {var _uniq_var_113 = function (_uniq_var_111, _uniq_var_112) {
if (typeof _uniq_var_111.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_111.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_111.join.apply(_uniq_var_111, arguments);
} else if (_uniq_var_111.join !== undefined) {
if (_uniq_var_112 === undefined) {
return _uniq_var_111.join;
}
_uniq_var_111.join = _uniq_var_112;
}return _uniq_var_111;
};_uniq_var_113.__lix_func__ = true;return _uniq_var_113;})()(["function __ge__(x, y) {", "return function () {", "return x >= y;", "}", "}"], '\n'),
__eq__: (function () {var _uniq_var_116 = function (_uniq_var_114, _uniq_var_115) {
if (typeof _uniq_var_114.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_114.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_114.join.apply(_uniq_var_114, arguments);
} else if (_uniq_var_114.join !== undefined) {
if (_uniq_var_115 === undefined) {
return _uniq_var_114.join;
}
_uniq_var_114.join = _uniq_var_115;
}return _uniq_var_114;
};_uniq_var_116.__lix_func__ = true;return _uniq_var_116;})()(["function __eq__(x, y) {", "return function () {", "return x == y;", "}", "}"], '\n'),
__ne__: (function () {var _uniq_var_119 = function (_uniq_var_117, _uniq_var_118) {
if (typeof _uniq_var_117.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_117.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_117.join.apply(_uniq_var_117, arguments);
} else if (_uniq_var_117.join !== undefined) {
if (_uniq_var_118 === undefined) {
return _uniq_var_117.join;
}
_uniq_var_117.join = _uniq_var_118;
}return _uniq_var_117;
};_uniq_var_119.__lix_func__ = true;return _uniq_var_119;})()(["function __ne__(x, y) {", "return function () {", "return x != y;", "}", "}"], '\n'),
__le__: (function () {var _uniq_var_122 = function (_uniq_var_120, _uniq_var_121) {
if (typeof _uniq_var_120.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_120.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_120.join.apply(_uniq_var_120, arguments);
} else if (_uniq_var_120.join !== undefined) {
if (_uniq_var_121 === undefined) {
return _uniq_var_120.join;
}
_uniq_var_120.join = _uniq_var_121;
}return _uniq_var_120;
};_uniq_var_122.__lix_func__ = true;return _uniq_var_122;})()(["function __le__(x, y) {", "return function () {", "return x <= y;", "}", "}"], '\n'),
__lt__: (function () {var _uniq_var_125 = function (_uniq_var_123, _uniq_var_124) {
if (typeof _uniq_var_123.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_123.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_123.join.apply(_uniq_var_123, arguments);
} else if (_uniq_var_123.join !== undefined) {
if (_uniq_var_124 === undefined) {
return _uniq_var_123.join;
}
_uniq_var_123.join = _uniq_var_124;
}return _uniq_var_123;
};_uniq_var_125.__lix_func__ = true;return _uniq_var_125;})()(["function __lt__(x, y) {", "return function () {", "return x < y;", "}", "}"], '\n'),
isFunction: (function () {var _uniq_var_128 = function (_uniq_var_126, _uniq_var_127) {
if (typeof _uniq_var_126.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_126.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_126.join.apply(_uniq_var_126, arguments);
} else if (_uniq_var_126.join !== undefined) {
if (_uniq_var_127 === undefined) {
return _uniq_var_126.join;
}
_uniq_var_126.join = _uniq_var_127;
}return _uniq_var_126;
};_uniq_var_128.__lix_func__ = true;return _uniq_var_128;})()(["function isFunction(x) {", "return function () {", "return typeof x === 'function';", "}", "}"], '\n'),
isArray: (function () {var _uniq_var_131 = function (_uniq_var_129, _uniq_var_130) {
if (typeof _uniq_var_129.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_129.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_129.join.apply(_uniq_var_129, arguments);
} else if (_uniq_var_129.join !== undefined) {
if (_uniq_var_130 === undefined) {
return _uniq_var_129.join;
}
_uniq_var_129.join = _uniq_var_130;
}return _uniq_var_129;
};_uniq_var_131.__lix_func__ = true;return _uniq_var_131;})()(["function isArray(x) {", "return function () {", "return x instanceof Array;", "}", "}"], '\n'),
foreach: (function () {var _uniq_var_134 = function (_uniq_var_132, _uniq_var_133) {
if (typeof _uniq_var_132.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_132.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_132.join.apply(_uniq_var_132, arguments);
} else if (_uniq_var_132.join !== undefined) {
if (_uniq_var_133 === undefined) {
return _uniq_var_132.join;
}
_uniq_var_132.join = _uniq_var_133;
}return _uniq_var_132;
};_uniq_var_134.__lix_func__ = true;return _uniq_var_134;})()(["function foreach(arr, cb) {", "return function () {", "for (var i in arr) {", "cb(arr[i], i)();", "}", "}", "}"], '\n'),
call: (function () {var _uniq_var_137 = function (_uniq_var_135, _uniq_var_136) {
if (typeof _uniq_var_135.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_135.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_135.join.apply(_uniq_var_135, arguments);
} else if (_uniq_var_135.join !== undefined) {
if (_uniq_var_136 === undefined) {
return _uniq_var_135.join;
}
_uniq_var_135.join = _uniq_var_136;
}return _uniq_var_135;
};_uniq_var_137.__lix_func__ = true;return _uniq_var_137;})()(["function call(fn) {", "var collect = []", "for (var i in arguments) {", "collect.push(arguments[i])", "}", "return fn.apply(fn, collect);", "}"], '\n'),
apply: (function () {var _uniq_var_140 = function (_uniq_var_138, _uniq_var_139) {
if (typeof _uniq_var_138.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_138.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_138.join.apply(_uniq_var_138, arguments);
} else if (_uniq_var_138.join !== undefined) {
if (_uniq_var_139 === undefined) {
return _uniq_var_138.join;
}
_uniq_var_138.join = _uniq_var_139;
}return _uniq_var_138;
};_uniq_var_140.__lix_func__ = true;return _uniq_var_140;})()(["function apply(fn) {", "var args = arguments[1]", "return function () {", "return fn.apply(fn, args)();", "}", "}"], '\n')
};
env0;
var env_new = (function () {var _uniq_var_142 = function (env) {(env = (env || env0));
var Env = (function () {var _uniq_var_141 = function () {;
};_uniq_var_141.__lix_func__ = true;return _uniq_var_141;})();
Env;
(Env.prototype = env);
return _instance_(Env);
};_uniq_var_142.__lix_func__ = true;return _uniq_var_142;})();
env_new;
var flattenExpr = (function () {var _uniq_var_147 = function (expr, define) {var ret = define(map(expr, (function () {var _uniq_var_143 = function (item) {return flatten(item, define);
};_uniq_var_143.__lix_func__ = true;return _uniq_var_143;})()));
ret;
(function () {var _uniq_var_146 = function (_uniq_var_144, _uniq_var_145) {
if (typeof _uniq_var_144.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_144.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_144.push.apply(_uniq_var_144, arguments);
} else if (_uniq_var_144.push !== undefined) {
if (_uniq_var_145 === undefined) {
return _uniq_var_144.push;
}
_uniq_var_144.push = _uniq_var_145;
}return _uniq_var_144;
};_uniq_var_146.__lix_func__ = true;return _uniq_var_146;})()(ret, 'tmp');
return ret;
};_uniq_var_147.__lix_func__ = true;return _uniq_var_147;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_148 = function (expr, define) {return expr;
};_uniq_var_148.__lix_func__ = true;return _uniq_var_148;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_153 = function (expr, define) {var whileDefine = call(statementFlattenGenerator);
whileDefine;
(expr[0] = flatten(expr[0], whileDefine));
(expr[2] = flatten(expr[2], define0));
(expr[2][0] = (function () {var _uniq_var_151 = function (_uniq_var_149, _uniq_var_150) {
if (typeof _uniq_var_149.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_149.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_149.concat.apply(_uniq_var_149, arguments);
} else if (_uniq_var_149.concat !== undefined) {
if (_uniq_var_150 === undefined) {
return _uniq_var_149.concat;
}
_uniq_var_149.concat = _uniq_var_150;
}return _uniq_var_149;
};_uniq_var_151.__lix_func__ = true;return _uniq_var_151;})()(expr[2][0], call(whileDefine)));
foreach(call(whileDefine), (function () {var _uniq_var_152 = function (i) {return define(i, true);
};_uniq_var_152.__lix_func__ = true;return _uniq_var_152;})());
define(expr, true);
return ['', '{empty}'];
};_uniq_var_153.__lix_func__ = true;return _uniq_var_153;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_158 = function (expr, define) {var ret = flatten(expr[0], define);
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
define([[[[ret, ['not', '{atomic}', 'var']], call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_158.__lix_func__ = true;return _uniq_var_158;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_163 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_162 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_161 = function (_uniq_var_159, _uniq_var_160) {
if (typeof _uniq_var_159.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_159.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_159.push.apply(_uniq_var_159, arguments);
} else if (_uniq_var_159.push !== undefined) {
if (_uniq_var_160 === undefined) {
return _uniq_var_159.push;
}
_uniq_var_159.push = _uniq_var_160;
}return _uniq_var_159;
};_uniq_var_161.__lix_func__ = true;return _uniq_var_161;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_162.__lix_func__ = true;return _uniq_var_162;})();
getAndOpSeq;
define([[[ret, call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_163.__lix_func__ = true;return _uniq_var_163;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_168 = function (expr, define, tmpVar, ctx) {return foreach(expr[0], (function () {var _uniq_var_167 = function (i) {if (__eq__(i[1], 'else')) {
var elseSeq = flatten(i[0], define0, ctx);
elseSeq;
return define([[[tmpVar, elseSeq]], 'if'], true);

} else if (__eq__(i[1], 'if')) {
return define(_flattenIf(i, define, tmpVar, ctx));

} else {
var ifSeq = flatten(i[1], define0, ctx);
ifSeq;
(function () {var _uniq_var_166 = function (_uniq_var_164, _uniq_var_165) {
if (typeof _uniq_var_164.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_164.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_164.unshift.apply(_uniq_var_164, arguments);
} else if (_uniq_var_164.unshift !== undefined) {
if (_uniq_var_165 === undefined) {
return _uniq_var_164.unshift;
}
_uniq_var_164.unshift = _uniq_var_165;
}return _uniq_var_164;
};_uniq_var_166.__lix_func__ = true;return _uniq_var_166;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
var cond = flatten(i[0], define);
cond;
var cond = [tmpVar, 'and', cond];
cond;
return define([[[cond, ifSeq]], 'if'], true);

};
};_uniq_var_167.__lix_func__ = true;return _uniq_var_167;})());
};_uniq_var_168.__lix_func__ = true;return _uniq_var_168;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_170 = function (expr, define) {var tmpVar = define(['true', '{atomic}']);
tmpVar;
var retVar = define(['null', '{atomic}']);
retVar;
var ctx = (function () {var _uniq_var_169 = function (i) {return [retVar, '=', i];
};_uniq_var_169.__lix_func__ = true;return _uniq_var_169;})();
ctx;
_flattenIf(expr, define, tmpVar, ctx);
return retVar;
};_uniq_var_170.__lix_func__ = true;return _uniq_var_170;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_171 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_171.__lix_func__ = true;return _uniq_var_171;})();
flattenAssign;
var flattenDef = (function () {var _uniq_var_172 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_172.__lix_func__ = true;return _uniq_var_172;})();
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_173 = function (expr, define) {(expr[0] = flatten(expr[0], define));
return expr;
};_uniq_var_173.__lix_func__ = true;return _uniq_var_173;})();
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_174 = function (expr, define) {return expr;
};_uniq_var_174.__lix_func__ = true;return _uniq_var_174;})();
flattenPathItem;
var flattenPath = (function () {var _uniq_var_176 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_175 = function (i) {return flatten(i, define);
};_uniq_var_175.__lix_func__ = true;return _uniq_var_175;})()));
return expr;
};_uniq_var_176.__lix_func__ = true;return _uniq_var_176;})();
flattenPath;
var flattenEmpty = (function () {var _uniq_var_177 = function (expr, define) {return expr;
};_uniq_var_177.__lix_func__ = true;return _uniq_var_177;})();
flattenEmpty;
var flattenField = (function () {var _uniq_var_178 = function (expr, define) {if (__eq__(expr[1], '{index}')) {
(expr[0] = flatten(expr[0], define));

};
return expr;
};_uniq_var_178.__lix_func__ = true;return _uniq_var_178;})();
flattenField;
var flattenMethod = (function () {var _uniq_var_179 = function (expr, define) {(expr[0] = flattenField(expr[0], define));
return expr;
};_uniq_var_179.__lix_func__ = true;return _uniq_var_179;})();
flattenMethod;
var flattenProperty = (function () {var _uniq_var_180 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_180.__lix_func__ = true;return _uniq_var_180;})();
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_182 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_181 = function (i) {return flattenProperty(i, define);
};_uniq_var_181.__lix_func__ = true;return _uniq_var_181;})()));
return expr;
};_uniq_var_182.__lix_func__ = true;return _uniq_var_182;})();
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_184 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_183 = function (i) {return flatten(i, define);
};_uniq_var_183.__lix_func__ = true;return _uniq_var_183;})()));
return expr;
};_uniq_var_184.__lix_func__ = true;return _uniq_var_184;})();
flattenArray;
var flattenFunc = (function () {var _uniq_var_185 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_185.__lix_func__ = true;return _uniq_var_185;})();
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_186 = function (expr, define) {if (__eq__(expr[1], '{.}')) {
(expr[0] = flattenFieldAccess(expr[0], define));
(expr[2] = flattenField(expr[2], define));

};
return expr;
};_uniq_var_186.__lix_func__ = true;return _uniq_var_186;})();
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_187 = function (expr, define) {return expr;
};_uniq_var_187.__lix_func__ = true;return _uniq_var_187;})();
flattenAtomic;
var flattenMono = (function () {var _uniq_var_188 = function (expr, define) {return flatten(expr[0], define);
};_uniq_var_188.__lix_func__ = true;return _uniq_var_188;})();
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_196 = function () {var data = [];
data;
return (function () {var _uniq_var_195 = function (statement, onlyPush) {if (__eq__(statement, undefined)) {
return data;

} else if (onlyPush) {
return (function () {var _uniq_var_191 = function (_uniq_var_189, _uniq_var_190) {
if (typeof _uniq_var_189.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_189.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_189.push.apply(_uniq_var_189, arguments);
} else if (_uniq_var_189.push !== undefined) {
if (_uniq_var_190 === undefined) {
return _uniq_var_189.push;
}
_uniq_var_189.push = _uniq_var_190;
}return _uniq_var_189;
};_uniq_var_191.__lix_func__ = true;return _uniq_var_191;})()(data, statement);

} else {
var varName = call(getUniqVarName);
varName;
var lixVar = [varName, '{atomic}', '{var}'];
lixVar;
(function () {var _uniq_var_194 = function (_uniq_var_192, _uniq_var_193) {
if (typeof _uniq_var_192.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_192.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_192.push.apply(_uniq_var_192, arguments);
} else if (_uniq_var_192.push !== undefined) {
if (_uniq_var_193 === undefined) {
return _uniq_var_192.push;
}
_uniq_var_192.push = _uniq_var_193;
}return _uniq_var_192;
};_uniq_var_194.__lix_func__ = true;return _uniq_var_194;})()(data, [lixVar, ':=', statement]);
return lixVar;

};
};_uniq_var_195.__lix_func__ = true;return _uniq_var_195;})();
};_uniq_var_196.__lix_func__ = true;return _uniq_var_196;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_205 = function (expr, define, seqCtx) {var ret = [];
ret;
var ctx = (function () {var _uniq_var_197 = function (stmt, index) {var ret = stmt;
ret;
if ((seqCtx && __eq__(parseInt(index), __sub__(expr[0].length, 1)))) {
var ret = seqCtx(stmt);
ret;

};
return ret;
};_uniq_var_197.__lix_func__ = true;return _uniq_var_197;})();
ctx;
foreach(expr[0], (function () {var _uniq_var_204 = function (item, index) {var exprDefine = call(statementFlattenGenerator);
exprDefine;
var itemRet = flatten(item, exprDefine);
itemRet;
(ret = (function () {var _uniq_var_200 = function (_uniq_var_198, _uniq_var_199) {
if (typeof _uniq_var_198.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_198.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_198.concat.apply(_uniq_var_198, arguments);
} else if (_uniq_var_198.concat !== undefined) {
if (_uniq_var_199 === undefined) {
return _uniq_var_198.concat;
}
_uniq_var_198.concat = _uniq_var_199;
}return _uniq_var_198;
};_uniq_var_200.__lix_func__ = true;return _uniq_var_200;})()(ret, call(exprDefine)));
var stmtRet = ctx(itemRet, index);
stmtRet;
if ((__ne__(stmtRet[1], '{atomic}') || __ne__(stmtRet[3], 'tmp'))) {
return (function () {var _uniq_var_203 = function (_uniq_var_201, _uniq_var_202) {
if (typeof _uniq_var_201.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_201.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_201.push.apply(_uniq_var_201, arguments);
} else if (_uniq_var_201.push !== undefined) {
if (_uniq_var_202 === undefined) {
return _uniq_var_201.push;
}
_uniq_var_201.push = _uniq_var_202;
}return _uniq_var_201;
};_uniq_var_203.__lix_func__ = true;return _uniq_var_203;})()(ret, stmtRet);

};
};_uniq_var_204.__lix_func__ = true;return _uniq_var_204;})());
(expr[0] = ret);
return expr;
};_uniq_var_205.__lix_func__ = true;return _uniq_var_205;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_206 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
return [ret, '{start}'];
};_uniq_var_206.__lix_func__ = true;return _uniq_var_206;})();
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
var flattenOp = (function () {var _uniq_var_207 = function (hint) {if (flattenOpTable[hint]) {
return flattenOpTable[hint];

} else {
return flattenExpr;

};
};_uniq_var_207.__lix_func__ = true;return _uniq_var_207;})();
flattenOp;
var flatten = (function () {var _uniq_var_208 = function (expr, define, ctx) {return flattenOp(expr[1])(expr, define, ctx);
};_uniq_var_208.__lix_func__ = true;return _uniq_var_208;})();
flatten;
var define0 = (function () {var _uniq_var_209 = function (i) {return i;
};_uniq_var_209.__lix_func__ = true;return _uniq_var_209;})();
define0;
var def0 = {
defineVar: (function () {var _uniq_var_210 = function (i) {;
};_uniq_var_210.__lix_func__ = true;return _uniq_var_210;})(),
defineFunc: (function () {var _uniq_var_211 = function (i) {;
};_uniq_var_211.__lix_func__ = true;return _uniq_var_211;})()
};
def0;
(exports.compile = (function () {var _uniq_var_217 = function (expr) {var libs = (function () {var _uniq_var_214 = function (_uniq_var_212, _uniq_var_213) {
if (typeof _uniq_var_212.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_212.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_212.join.apply(_uniq_var_212, arguments);
} else if (_uniq_var_212.join !== undefined) {
if (_uniq_var_213 === undefined) {
return _uniq_var_212.join;
}
_uniq_var_212.join = _uniq_var_213;
}return _uniq_var_212;
};_uniq_var_214.__lix_func__ = true;return _uniq_var_214;})()(map(env0, (function () {var _uniq_var_215 = function (i) {return i;
};_uniq_var_215.__lix_func__ = true;return _uniq_var_215;})()), "\n");
libs;
var code = generate(flatten(expr, (function () {var _uniq_var_216 = function (i) {;
};_uniq_var_216.__lix_func__ = true;return _uniq_var_216;})()), call(env_new), ctx0, def0);
code;
return console.log(join([libs, "\n", code]));
};_uniq_var_217.__lix_func__ = true;return _uniq_var_217;})());

