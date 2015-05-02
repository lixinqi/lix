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
var PREV = '0';
PREV;
var F = '1';
F;
var STEP = '2';
STEP;
var RET = '3';
RET;
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
var getUniqVarName = (function () {var _uniq_var_11 = function () {return __add__('_', call(getCount));
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
};_uniq_var_14.__lix_func__ = true;return _uniq_var_14;})()(map(args, (function () {var _uniq_var_15 = function (i) {var varname = transformVarName(i[0]);
varname;
(env[varname] = true);
return varname;
};_uniq_var_15.__lix_func__ = true;return _uniq_var_15;})()), ', ');
};_uniq_var_16.__lix_func__ = true;return _uniq_var_16;})();
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_17 = function (x) {return x;
};_uniq_var_17.__lix_func__ = true;return _uniq_var_17;})();
ctx0;
var generateSeq = (function () {var _uniq_var_22 = function (expr, env, ctx, def) {var funcName = call(getUniqVarName);
funcName;
var getCount = call(counterGenerator);
getCount;
var body = (function () {var _uniq_var_20 = function (_uniq_var_18, _uniq_var_19) {
if (typeof _uniq_var_18.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_18.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_18.join.apply(_uniq_var_18, arguments);
} else if (_uniq_var_18.join !== undefined) {
if (_uniq_var_19 === undefined) {
return _uniq_var_18.join;
}
_uniq_var_18.join = _uniq_var_19;
}return _uniq_var_18;
};_uniq_var_20.__lix_func__ = true;return _uniq_var_20;})()(map(expr[0], (function () {var _uniq_var_21 = function (item, index) {var current = call(getCount);
current;
var stmt = generate(item, env, ctx0, def);
stmt;
var stmt = join(['case ', current, ':\n', stmt]);
return stmt;
};_uniq_var_21.__lix_func__ = true;return _uniq_var_21;})()), ";\n");
body;
def.appendExpr(join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']));
return funcName;
};_uniq_var_22.__lix_func__ = true;return _uniq_var_22;})();
generateSeq;
var generateOr = (function () {var _uniq_var_23 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " || ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_23.__lix_func__ = true;return _uniq_var_23;})();
generateOr;
var generateAnd = (function () {var _uniq_var_24 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " && ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_24.__lix_func__ = true;return _uniq_var_24;})();
generateAnd;
var generateIf = (function () {var _uniq_var_29 = function (expr, env, ctx, def) {return (function () {var _uniq_var_27 = function (_uniq_var_25, _uniq_var_26) {
if (typeof _uniq_var_25.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_25.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_25.join.apply(_uniq_var_25, arguments);
} else if (_uniq_var_25.join !== undefined) {
if (_uniq_var_26 === undefined) {
return _uniq_var_25.join;
}
_uniq_var_25.join = _uniq_var_26;
}return _uniq_var_25;
};_uniq_var_27.__lix_func__ = true;return _uniq_var_27;})()(map(expr[0], (function () {var _uniq_var_28 = function (i) {if (__eq__(i[1], 'else')) {
return join(['{\n', ctx(generate(i[0], env, ctx, def)), '\n}']);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx, def);

} else {
return join(['if (', generate(i[0], env, ctx, def), ') {\n', ctx(generate(i[1], env, ctx, def)), '\n}']);

};
};_uniq_var_28.__lix_func__ = true;return _uniq_var_28;})()), ' else ');
};_uniq_var_29.__lix_func__ = true;return _uniq_var_29;})();
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
var generateAtomic = (function () {var _uniq_var_30 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = transformVarName(operateFuncName[expr[0]]));

} else if (__eq__(expr[3], undefined)) {
(ret = transformVarName(expr[0]));

};

};
return ret;
};_uniq_var_30.__lix_func__ = true;return _uniq_var_30;})();
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_31 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx, def);

} else if (__eq__(expr[1], '{index}')) {
return generateAtomic(expr[0], env, ctx, def);

};
};_uniq_var_31.__lix_func__ = true;return _uniq_var_31;})();
generatePropertyName;
var generateProperty = (function () {var _uniq_var_32 = function (expr, env, ctx, def) {var propertyName = generatePropertyName(expr[0], env, ctx0, def);
propertyName;
var propertyValue = generate(expr[2], env, ctx, def);
propertyValue;
return join([propertyName, ": ", propertyValue]);
};_uniq_var_32.__lix_func__ = true;return _uniq_var_32;})();
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_37 = function (expr, env, ctx, def) {var objectBody = (function () {var _uniq_var_35 = function (_uniq_var_33, _uniq_var_34) {
if (typeof _uniq_var_33.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_33.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_33.join.apply(_uniq_var_33, arguments);
} else if (_uniq_var_33.join !== undefined) {
if (_uniq_var_34 === undefined) {
return _uniq_var_33.join;
}
_uniq_var_33.join = _uniq_var_34;
}return _uniq_var_33;
};_uniq_var_35.__lix_func__ = true;return _uniq_var_35;})()(map(expr[0], (function () {var _uniq_var_36 = function (i) {return generateProperty(i, env, ctx, def);
};_uniq_var_36.__lix_func__ = true;return _uniq_var_36;})()), ",\n");
objectBody;
return join(["{\n", objectBody, "\n}"]);
};_uniq_var_37.__lix_func__ = true;return _uniq_var_37;})();
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_38 = function (name) {if (__eq__(name, 'require')) {
(name = '_require(require)');

} else if (__eq__(name, 'defer')) {
(name = '_defer(defer_stack)');

} else if (((((__ne__(name, 'exports') && __ne__(name, 'undefined')) && __ne__(name, 'null')) && __ne__(name, 'true')) && __ne__(name, 'false'))) {
(name = __add__('L', name));

};
return name;
};_uniq_var_38.__lix_func__ = true;return _uniq_var_38;})();
transformVarName;
var getVarName = (function () {var _uniq_var_39 = function (expr) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, {

}, ctx0);

} else if (__eq__(expr[1], '{.}')) {
return getVarName(expr[0]);

};
};_uniq_var_39.__lix_func__ = true;return _uniq_var_39;})();
getVarName;
var generateField = (function () {var _uniq_var_40 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0, def));

} else if (__eq__(expr[1], '{index}')) {
return join(['[', generate(expr[0], env, ctx, def), ']']);

};
};_uniq_var_40.__lix_func__ = true;return _uniq_var_40;})();
generateField;
var generateFieldAccess = (function () {var _uniq_var_41 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx0, def);

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx, def);
obj;
var field = generateField(expr[2], env, ctx, def);
field;
return __add__(obj, field);

};
};_uniq_var_41.__lix_func__ = true;return _uniq_var_41;})();
generateFieldAccess;
var generateArray = (function () {var _uniq_var_46 = function (expr, env, ctx, def) {var arrayBody = (function () {var _uniq_var_44 = function (_uniq_var_42, _uniq_var_43) {
if (typeof _uniq_var_42.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_42.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_42.join.apply(_uniq_var_42, arguments);
} else if (_uniq_var_42.join !== undefined) {
if (_uniq_var_43 === undefined) {
return _uniq_var_42.join;
}
_uniq_var_42.join = _uniq_var_43;
}return _uniq_var_42;
};_uniq_var_44.__lix_func__ = true;return _uniq_var_44;})()(map(expr[0], (function () {var _uniq_var_45 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_45.__lix_func__ = true;return _uniq_var_45;})()), ', ');
arrayBody;
return join(['[', arrayBody, ']']);
};_uniq_var_46.__lix_func__ = true;return _uniq_var_46;})();
generateArray;
var generateMethod = (function () {var _uniq_var_47 = function (expr, env, ctx) {var localVarName = call(getUniqVarName);
localVarName;
var localValueName = call(getUniqVarName);
localValueName;
var methodName = generateField(expr[0], env, ctx0);
methodName;
var method = __add__(localVarName, methodName);
method;
var tmpVar = call(getUniqVarName);
tmpVar;
return join(["(function (", localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return function (_ret) {\n", "return ", method, ';\n', "}\n", "}\n", "return function (_ret) {\n", method, " = ", localValueName, ";\n", "}\n", "}", "})"]);
};_uniq_var_47.__lix_func__ = true;return _uniq_var_47;})();
generateMethod;
var generateWhile = (function () {var _uniq_var_48 = function (expr, env, ctx, def) {return join(['while (', generate(expr[0], env, ctx, def), ') {\n', ctx(generate(expr[2], env, ctx, def), true), "\n}"]);
};_uniq_var_48.__lix_func__ = true;return _uniq_var_48;})();
generateWhile;
var generateBreak = (function () {var _uniq_var_49 = function (expr, env, ctx) {return 'break';
};_uniq_var_49.__lix_func__ = true;return _uniq_var_49;})();
generateBreak;
var generateEmpty = (function () {var _uniq_var_50 = function (expr, env, ctx, def) {return "";
};_uniq_var_50.__lix_func__ = true;return _uniq_var_50;})();
generateEmpty;
var generateDef = (function () {var _uniq_var_51 = function (expr, env, ctx, def) {var varname = getVarName(expr[0]);
varname;
def.defineVar(varname);
var ret = join([varname, ' = ', generate(expr[2], env, ctx, def)]);
ret;
(env[varname] = true);
return ret;
};_uniq_var_51.__lix_func__ = true;return _uniq_var_51;})();
generateDef;
var generateAssign = (function () {var _uniq_var_52 = function (expr, env, ctx, def) {var varname = getVarName(expr[0]);
varname;
if ((__eq__(env[varname], undefined) && __ne__(varname, seqFuncParamsName.ret))) {
console.log(varname);
console.log("this var is undefined");

};
var varname = generate(expr[0], env, ctx0, def);
varname;
var value = generate(expr[2], env, ctx, def);
value;
return join([varname, " = ", value]);
};_uniq_var_52.__lix_func__ = true;return _uniq_var_52;})();
generateAssign;
var generateFunc = (function () {var _uniq_var_56 = function (expr, env, ctx, def) {var funcEnv = env_new(env);
funcEnv;
var args = generateFuncArgs(expr[0], funcEnv, ctx0);
args;
var tmpVar = call(getUniqVarName);
tmpVar;
var def = call(GenerateDefNew);
def;
var body = generate(expr[2], funcEnv, ctx0, def);
body;
return (function () {var _uniq_var_55 = function (_uniq_var_53, _uniq_var_54) {
if (typeof _uniq_var_53.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_53.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_53.join.apply(_uniq_var_53, arguments);
} else if (_uniq_var_53.join !== undefined) {
if (_uniq_var_54 === undefined) {
return _uniq_var_53.join;
}
_uniq_var_53.join = _uniq_var_54;
}return _uniq_var_53;
};_uniq_var_55.__lix_func__ = true;return _uniq_var_55;})()(['(function (', args, ') {\n', 'var ', transformVarName('arguments'), ' = arguments, defer_stack = [];\n', call(def.defineVar), ";\n", call(def.appendExpr), ";\n", 'return ', body, ";\n", '})'], '');
};_uniq_var_56.__lix_func__ = true;return _uniq_var_56;})();
generateFunc;
var generateExpr = (function () {var _uniq_var_58 = function (expr, env, ctx, def) {var func = generate(expr[1], env, ctx0, def);
func;
var args = generate(expr[0], env, ctx0, def);
args;
foreach(expr, (function () {var _uniq_var_57 = function (item, index) {if (__gt__(index, 1)) {
return (args = join([args, ', ', generate(item, env, ctx0, def)]));

};
};_uniq_var_57.__lix_func__ = true;return _uniq_var_57;})());
return ctx(join(['lix(s, ', func, '(', args, '))']));
};_uniq_var_58.__lix_func__ = true;return _uniq_var_58;})();
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_71 = function () {var vars = {

};
vars;
var funcs = [];
funcs;
return {
defineVar: (function () {var _uniq_var_63 = function (v) {if (v) {
return (vars[v] = v);

} else {
var vecs = map(vars, (function () {var _uniq_var_59 = function (i) {return i;
};_uniq_var_59.__lix_func__ = true;return _uniq_var_59;})());
vecs;
if (__gt__(vecs.length, 0)) {
return __add__('var ', (function () {var _uniq_var_62 = function (_uniq_var_60, _uniq_var_61) {
if (typeof _uniq_var_60.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_60.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_60.join.apply(_uniq_var_60, arguments);
} else if (_uniq_var_60.join !== undefined) {
if (_uniq_var_61 === undefined) {
return _uniq_var_60.join;
}
_uniq_var_60.join = _uniq_var_61;
}return _uniq_var_60;
};_uniq_var_62.__lix_func__ = true;return _uniq_var_62;})()(vecs, ', '));

} else {
return '';

};

};
};_uniq_var_63.__lix_func__ = true;return _uniq_var_63;})(),
appendExpr: (function () {var _uniq_var_70 = function (v) {if (v) {
return (function () {var _uniq_var_66 = function (_uniq_var_64, _uniq_var_65) {
if (typeof _uniq_var_64.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_64.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_64.push.apply(_uniq_var_64, arguments);
} else if (_uniq_var_64.push !== undefined) {
if (_uniq_var_65 === undefined) {
return _uniq_var_64.push;
}
_uniq_var_64.push = _uniq_var_65;
}return _uniq_var_64;
};_uniq_var_66.__lix_func__ = true;return _uniq_var_66;})()(funcs, v);

} else {
return (function () {var _uniq_var_69 = function (_uniq_var_67, _uniq_var_68) {
if (typeof _uniq_var_67.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_67.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_67.join.apply(_uniq_var_67, arguments);
} else if (_uniq_var_67.join !== undefined) {
if (_uniq_var_68 === undefined) {
return _uniq_var_67.join;
}
_uniq_var_67.join = _uniq_var_68;
}return _uniq_var_67;
};_uniq_var_69.__lix_func__ = true;return _uniq_var_69;})()(funcs, ';\n');

};
};_uniq_var_70.__lix_func__ = true;return _uniq_var_70;})()
};
};_uniq_var_71.__lix_func__ = true;return _uniq_var_71;})();
GenerateDefNew;
var generateStart = (function () {var _uniq_var_72 = function (expr, env, ctx, def) {var def = call(GenerateDefNew);
def;
var body = generate(expr[0], env, ctx, def);
body;
var body = join(['module.exports = ', body, '\n']);
body;
return join([call(def.defineVar), ";\n", call(def.appendExpr), ";\n", body]);
};_uniq_var_72.__lix_func__ = true;return _uniq_var_72;})();
generateStart;
var generateMono = (function () {var _uniq_var_73 = function (expr, env, ctx, def) {return generate(expr[0], env, ctx, def);
};_uniq_var_73.__lix_func__ = true;return _uniq_var_73;})();
generateMono;
var generatePathItem = (function () {var _uniq_var_74 = function (expr, env, ctx, def) {return join(['"', expr[0], '"']);
};_uniq_var_74.__lix_func__ = true;return _uniq_var_74;})();
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_75 = function (expr, env, ctx, def) {return join(['("', expr[2], '" + ', generate(expr[0], env, ctx, def), ')']);
};_uniq_var_75.__lix_func__ = true;return _uniq_var_75;})();
generatePathArgItem;
var generatePath = (function () {var _uniq_var_80 = function (expr, env, ctx, def) {var path = (function () {var _uniq_var_78 = function (_uniq_var_76, _uniq_var_77) {
if (typeof _uniq_var_76.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_76.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_76.join.apply(_uniq_var_76, arguments);
} else if (_uniq_var_76.join !== undefined) {
if (_uniq_var_77 === undefined) {
return _uniq_var_76.join;
}
_uniq_var_76.join = _uniq_var_77;
}return _uniq_var_76;
};_uniq_var_78.__lix_func__ = true;return _uniq_var_78;})()(map(expr[0], (function () {var _uniq_var_79 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_79.__lix_func__ = true;return _uniq_var_79;})()), ',');
path;
return join(['[', path, '].join("/")']);
};_uniq_var_80.__lix_func__ = true;return _uniq_var_80;})();
generatePath;
var generateModule = (function () {var _uniq_var_84 = function (expr, env, ctx, def) {var name = [(function () {var _uniq_var_83 = function (_uniq_var_81, _uniq_var_82) {
if (typeof _uniq_var_81.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_81.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_81.join.apply(_uniq_var_81, arguments);
} else if (_uniq_var_81.join !== undefined) {
if (_uniq_var_82 === undefined) {
return _uniq_var_81.join;
}
_uniq_var_81.join = _uniq_var_82;
}return _uniq_var_81;
};_uniq_var_83.__lix_func__ = true;return _uniq_var_83;})()(['"', expr[0], '"'], ''), '{atomic}'];
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
return moduleExpr;
};_uniq_var_84.__lix_func__ = true;return _uniq_var_84;})();
generateModule;
var generateOpTable = {
'{start}': generateStart,
'{seq}': generateSeq,
'{mono}': generateMono,
'{atomic}': generateAtomic,
'{.}': generateFieldAccess,
'{module}': generateModule,
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
var generateOp = (function () {var _uniq_var_85 = function (hint) {if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};
};_uniq_var_85.__lix_func__ = true;return _uniq_var_85;})();
generateOp;
var generate = (function () {var _uniq_var_86 = function (expr, env, ctx, def) {return generateOp(expr[1])(expr, env, ctx, def);
};_uniq_var_86.__lix_func__ = true;return _uniq_var_86;})();
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
var env_new = (function () {var _uniq_var_88 = function (env) {(env = (env || env0));
var Env = (function () {var _uniq_var_87 = function () {;
};_uniq_var_87.__lix_func__ = true;return _uniq_var_87;})();
Env;
(Env.prototype = env);
return _instance_(Env);
};_uniq_var_88.__lix_func__ = true;return _uniq_var_88;})();
env_new;
var flattenExpr = (function () {var _uniq_var_90 = function (expr, define) {return define(map(expr, (function () {var _uniq_var_89 = function (item) {return flatten(item, define);
};_uniq_var_89.__lix_func__ = true;return _uniq_var_89;})()));
};_uniq_var_90.__lix_func__ = true;return _uniq_var_90;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_91 = function (expr, define) {return expr;
};_uniq_var_91.__lix_func__ = true;return _uniq_var_91;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_96 = function (expr, define) {var whileDefine = call(statementFlattenGenerator);
whileDefine;
(expr[0] = flatten(expr[0], whileDefine));
(expr[2] = flatten(expr[2], define0));
(expr[2][0] = (function () {var _uniq_var_94 = function (_uniq_var_92, _uniq_var_93) {
if (typeof _uniq_var_92.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_92.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_92.concat.apply(_uniq_var_92, arguments);
} else if (_uniq_var_92.concat !== undefined) {
if (_uniq_var_93 === undefined) {
return _uniq_var_92.concat;
}
_uniq_var_92.concat = _uniq_var_93;
}return _uniq_var_92;
};_uniq_var_94.__lix_func__ = true;return _uniq_var_94;})()(expr[2][0], call(whileDefine)));
foreach(call(whileDefine), (function () {var _uniq_var_95 = function (i) {return define(i, true);
};_uniq_var_95.__lix_func__ = true;return _uniq_var_95;})());
define(expr, true);
return ['undefined', '{atomic}'];
};_uniq_var_96.__lix_func__ = true;return _uniq_var_96;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_101 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_100 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_99 = function (_uniq_var_97, _uniq_var_98) {
if (typeof _uniq_var_97.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_97.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_97.push.apply(_uniq_var_97, arguments);
} else if (_uniq_var_97.push !== undefined) {
if (_uniq_var_98 === undefined) {
return _uniq_var_97.push;
}
_uniq_var_97.push = _uniq_var_98;
}return _uniq_var_97;
};_uniq_var_99.__lix_func__ = true;return _uniq_var_99;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_100.__lix_func__ = true;return _uniq_var_100;})();
getAndOpSeq;
define([[[ret, [[], '{empty}']], [call(getAndOpSeq), 'else']], 'if'], true);
return ret;
};_uniq_var_101.__lix_func__ = true;return _uniq_var_101;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_106 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_105 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_104 = function (_uniq_var_102, _uniq_var_103) {
if (typeof _uniq_var_102.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_102.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_102.push.apply(_uniq_var_102, arguments);
} else if (_uniq_var_102.push !== undefined) {
if (_uniq_var_103 === undefined) {
return _uniq_var_102.push;
}
_uniq_var_102.push = _uniq_var_103;
}return _uniq_var_102;
};_uniq_var_104.__lix_func__ = true;return _uniq_var_104;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_105.__lix_func__ = true;return _uniq_var_105;})();
getAndOpSeq;
define([[[ret, call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_106.__lix_func__ = true;return _uniq_var_106;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_111 = function (expr, define, tmpVar, ctx) {return foreach(expr[0], (function () {var _uniq_var_110 = function (i) {if (__eq__(i[1], 'else')) {
var elseSeq = flatten(i[0], define0, ctx);
elseSeq;
return define([[[tmpVar, elseSeq]], 'if'], true);

} else if (__eq__(i[1], 'if')) {
return define(_flattenIf(i, define, tmpVar, ctx));

} else {
var ifSeq = flatten(i[1], define0, ctx);
ifSeq;
(function () {var _uniq_var_109 = function (_uniq_var_107, _uniq_var_108) {
if (typeof _uniq_var_107.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_107.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_107.unshift.apply(_uniq_var_107, arguments);
} else if (_uniq_var_107.unshift !== undefined) {
if (_uniq_var_108 === undefined) {
return _uniq_var_107.unshift;
}
_uniq_var_107.unshift = _uniq_var_108;
}return _uniq_var_107;
};_uniq_var_109.__lix_func__ = true;return _uniq_var_109;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
var cond = flatten(i[0], define);
cond;
var cond = [tmpVar, 'and', cond];
cond;
return define([[[cond, ifSeq]], 'if'], true);

};
};_uniq_var_110.__lix_func__ = true;return _uniq_var_110;})());
};_uniq_var_111.__lix_func__ = true;return _uniq_var_111;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_113 = function (expr, define) {var tmpVar = define(['true', '{atomic}']);
tmpVar;
var retVar = define(['null', '{atomic}']);
retVar;
var ctx = (function () {var _uniq_var_112 = function (i) {return [retVar, '=', i];
};_uniq_var_112.__lix_func__ = true;return _uniq_var_112;})();
ctx;
_flattenIf(expr, define, tmpVar, ctx);
return retVar;
};_uniq_var_113.__lix_func__ = true;return _uniq_var_113;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_114 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_114.__lix_func__ = true;return _uniq_var_114;})();
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_118 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
if (__gt__(expr.length, 3)) {
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
var i = 3;
i;
while (__lt__(i, expr.length)) {
(function () {var _uniq_var_117 = function (_uniq_var_115, _uniq_var_116) {
if (typeof _uniq_var_115.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_115.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_115.push.apply(_uniq_var_115, arguments);
} else if (_uniq_var_115.push !== undefined) {
if (_uniq_var_116 === undefined) {
return _uniq_var_115.push;
}
_uniq_var_115.push = _uniq_var_116;
}return _uniq_var_115;
};_uniq_var_117.__lix_func__ = true;return _uniq_var_117;})()(partialExpr, expr[i]);
(i = __add__(i, 1));
}
null;
(expr = [expr[0], expr[1], partialExpr]);

};
return flattenExpr(expr, define);
};_uniq_var_118.__lix_func__ = true;return _uniq_var_118;})();
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_119 = function (expr, define) {return flattenBasicOp(expr, '__bind__', define);
};_uniq_var_119.__lix_func__ = true;return _uniq_var_119;})();
flattenBind;
var flattenCompose = (function () {var _uniq_var_120 = function (expr, define) {return flattenBasicOp(expr, '__compose__', define);
};_uniq_var_120.__lix_func__ = true;return _uniq_var_120;})();
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_121 = function (expr, define) {return flattenBasicOp(expr, '__rcompose__', define);
};_uniq_var_121.__lix_func__ = true;return _uniq_var_121;})();
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_122 = function (expr, define) {return flattenBasicOp(expr, '__rvcompose__', define);
};_uniq_var_122.__lix_func__ = true;return _uniq_var_122;})();
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_123 = function (expr, define) {return flattenBasicOp(expr, '__vcompose__', define);
};_uniq_var_123.__lix_func__ = true;return _uniq_var_123;})();
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_124 = function (expr, define) {(expr[0] = flatten(expr[0], define));
return expr;
};_uniq_var_124.__lix_func__ = true;return _uniq_var_124;})();
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_125 = function (expr, define) {return expr;
};_uniq_var_125.__lix_func__ = true;return _uniq_var_125;})();
flattenPathItem;
var flattenPath = (function () {var _uniq_var_127 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_126 = function (i) {return flatten(i, define);
};_uniq_var_126.__lix_func__ = true;return _uniq_var_126;})()));
return expr;
};_uniq_var_127.__lix_func__ = true;return _uniq_var_127;})();
flattenPath;
var flattenEmpty = (function () {var _uniq_var_128 = function (expr, define) {return expr;
};_uniq_var_128.__lix_func__ = true;return _uniq_var_128;})();
flattenEmpty;
var flattenField = (function () {var _uniq_var_129 = function (expr, define) {if (__eq__(expr[1], '{index}')) {
(expr[0] = flatten(expr[0], define));

};
return expr;
};_uniq_var_129.__lix_func__ = true;return _uniq_var_129;})();
flattenField;
var flattenMethod = (function () {var _uniq_var_130 = function (expr, define) {(expr[0] = flattenField(expr[0], define));
return expr;
};_uniq_var_130.__lix_func__ = true;return _uniq_var_130;})();
flattenMethod;
var flattenProperty = (function () {var _uniq_var_131 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_131.__lix_func__ = true;return _uniq_var_131;})();
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_133 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_132 = function (i) {return flattenProperty(i, define);
};_uniq_var_132.__lix_func__ = true;return _uniq_var_132;})()));
return expr;
};_uniq_var_133.__lix_func__ = true;return _uniq_var_133;})();
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_135 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_134 = function (i) {return flatten(i, define);
};_uniq_var_134.__lix_func__ = true;return _uniq_var_134;})()));
return expr;
};_uniq_var_135.__lix_func__ = true;return _uniq_var_135;})();
flattenArray;
var flattenFunc = (function () {var _uniq_var_136 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_136.__lix_func__ = true;return _uniq_var_136;})();
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_137 = function (expr, define) {if (__eq__(expr[1], '{.}')) {
(expr[0] = flattenFieldAccess(expr[0], define));
(expr[2] = flattenField(expr[2], define));

} else {
(expr = flatten(expr, define));

};
return expr;
};_uniq_var_137.__lix_func__ = true;return _uniq_var_137;})();
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_138 = function (expr, define) {return expr;
};_uniq_var_138.__lix_func__ = true;return _uniq_var_138;})();
flattenAtomic;
var flattenMono = (function () {var _uniq_var_139 = function (expr, define) {return flatten(expr[0], define);
};_uniq_var_139.__lix_func__ = true;return _uniq_var_139;})();
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_150 = function () {var data = [];
data;
return (function () {var _uniq_var_149 = function (statement, tmpVarName) {if (__eq__(statement, undefined)) {
return data;

} else if (__eq__(tmpVarName, true)) {
return (function () {var _uniq_var_142 = function (_uniq_var_140, _uniq_var_141) {
if (typeof _uniq_var_140.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_140.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_140.push.apply(_uniq_var_140, arguments);
} else if (_uniq_var_140.push !== undefined) {
if (_uniq_var_141 === undefined) {
return _uniq_var_140.push;
}
_uniq_var_140.push = _uniq_var_141;
}return _uniq_var_140;
};_uniq_var_142.__lix_func__ = true;return _uniq_var_142;})()(data, statement);

} else if (__eq__(tmpVarName, undefined)) {
var varName = call(getUniqVarName);
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
(function () {var _uniq_var_145 = function (_uniq_var_143, _uniq_var_144) {
if (typeof _uniq_var_143.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_143.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_143.push.apply(_uniq_var_143, arguments);
} else if (_uniq_var_143.push !== undefined) {
if (_uniq_var_144 === undefined) {
return _uniq_var_143.push;
}
_uniq_var_143.push = _uniq_var_144;
}return _uniq_var_143;
};_uniq_var_145.__lix_func__ = true;return _uniq_var_145;})()(data, statement);
(function () {var _uniq_var_148 = function (_uniq_var_146, _uniq_var_147) {
if (typeof _uniq_var_146.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_146.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_146.push.apply(_uniq_var_146, arguments);
} else if (_uniq_var_146.push !== undefined) {
if (_uniq_var_147 === undefined) {
return _uniq_var_146.push;
}
_uniq_var_146.push = _uniq_var_147;
}return _uniq_var_146;
};_uniq_var_148.__lix_func__ = true;return _uniq_var_148;})()(data, [lixVar, ':=', tmpRet]);
return lixVar;

};
};_uniq_var_149.__lix_func__ = true;return _uniq_var_149;})();
};_uniq_var_150.__lix_func__ = true;return _uniq_var_150;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_162 = function (expr, define, seqCtx) {var ret = [];
ret;
var ctx = (function () {var _uniq_var_151 = function (stmt, index) {var ret = stmt;
ret;
if ((seqCtx && __eq__(parseInt(index), __sub__(expr[0].length, 1)))) {
var ret = seqCtx(stmt);
ret;

};
return ret;
};_uniq_var_151.__lix_func__ = true;return _uniq_var_151;})();
ctx;
foreach(expr[0], (function () {var _uniq_var_161 = function (item, index) {var exprDefine = call(statementFlattenGenerator);
exprDefine;
var itemRet = flatten(item, exprDefine);
itemRet;
(ret = (function () {var _uniq_var_154 = function (_uniq_var_152, _uniq_var_153) {
if (typeof _uniq_var_152.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_152.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_152.concat.apply(_uniq_var_152, arguments);
} else if (_uniq_var_152.concat !== undefined) {
if (_uniq_var_153 === undefined) {
return _uniq_var_152.concat;
}
_uniq_var_152.concat = _uniq_var_153;
}return _uniq_var_152;
};_uniq_var_154.__lix_func__ = true;return _uniq_var_154;})()(ret, call(exprDefine)));
var stmtRet = ctx(itemRet, index);
stmtRet;
var isTmpVar = (function () {var _uniq_var_155 = function (expr) {return (__eq__(expr[1], '{atomic}') && __ne__(expr[3], undefined));
};_uniq_var_155.__lix_func__ = true;return _uniq_var_155;})();
isTmpVar;
var isRealVar = (function () {var _uniq_var_156 = function (expr) {return (__eq__(expr[1], '{atomic}') && __eq__(expr[3], undefined));
};_uniq_var_156.__lix_func__ = true;return _uniq_var_156;})();
isRealVar;
var isRealExpr = (function () {var _uniq_var_157 = function (expr) {return (isRealVar(expr) || (__ne__(expr[1], 'if') && __ne__(expr[1], 'while')));
};_uniq_var_157.__lix_func__ = true;return _uniq_var_157;})();
isRealExpr;
if ((__ne__(stmtRet[1], '{empty}') && not(isTmpVar(stmtRet)))) {
if (isRealExpr(stmtRet)) {
(stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]);

};
return (function () {var _uniq_var_160 = function (_uniq_var_158, _uniq_var_159) {
if (typeof _uniq_var_158.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_158.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_158.push.apply(_uniq_var_158, arguments);
} else if (_uniq_var_158.push !== undefined) {
if (_uniq_var_159 === undefined) {
return _uniq_var_158.push;
}
_uniq_var_158.push = _uniq_var_159;
}return _uniq_var_158;
};_uniq_var_160.__lix_func__ = true;return _uniq_var_160;})()(ret, stmtRet);

};
};_uniq_var_161.__lix_func__ = true;return _uniq_var_161;})());
(expr[0] = ret);
return expr;
};_uniq_var_162.__lix_func__ = true;return _uniq_var_162;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_163 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
return [ret, '{start}'];
};_uniq_var_163.__lix_func__ = true;return _uniq_var_163;})();
flattenStart;
var flattenModule = (function () {var _uniq_var_167 = function (expr, define) {if (__eq__(expr[2], '{var}')) {
var name = [(function () {var _uniq_var_166 = function (_uniq_var_164, _uniq_var_165) {
if (typeof _uniq_var_164.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_164.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_164.join.apply(_uniq_var_164, arguments);
} else if (_uniq_var_164.join !== undefined) {
if (_uniq_var_165 === undefined) {
return _uniq_var_164.join;
}
_uniq_var_164.join = _uniq_var_165;
}return _uniq_var_164;
};_uniq_var_166.__lix_func__ = true;return _uniq_var_166;})()(['"', expr[0], '"'], ''), '{atomic}'];
name;

} else if (__eq__(expr[2], '{index}')) {
var name = flatten(expr[0], define);
name;

};
var jsName = define([name, ['__add__', '{atomic}', '{var}'], ['"-lix"', '{atomic}']]);
jsName;
var moduleExpr = [jsName, ['require', '{atomic}', '{var}']];
moduleExpr;
return define(moduleExpr);
};_uniq_var_167.__lix_func__ = true;return _uniq_var_167;})();
flattenModule;
var flattenDefer = (function () {var _uniq_var_168 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_168.__lix_func__ = true;return _uniq_var_168;})();
flattenDefer;
var flattenOpTable = {
'{start}': flattenStart,
'{seq}': flattenSeq,
'{mono}': flattenMono,
'{atomic}': flattenAtomic,
'{.}': flattenFieldAccess,
'{module}': flattenModule,
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
'>>=': flattenBind,
'>>>': flattenCPSCompose,
'<<<': flattenReverseCPSCompose,
'>>': flattenCompose,
'<<': flattenReverseCompose,
'if': flattenIf,
'and': flattenAnd,
'or': flattenOr,
'while': flattenWhile,
'break': flattenBreak,
'defer': flattenDefer
};
flattenOpTable;
var flattenOp = (function () {var _uniq_var_169 = function (hint) {if (flattenOpTable[hint]) {
return flattenOpTable[hint];

} else {
return flattenExpr;

};
};_uniq_var_169.__lix_func__ = true;return _uniq_var_169;})();
flattenOp;
var flatten = (function () {var _uniq_var_170 = function (expr, define, ctx) {return flattenOp(expr[1])(expr, define, ctx);
};_uniq_var_170.__lix_func__ = true;return _uniq_var_170;})();
flatten;
var define0 = (function () {var _uniq_var_171 = function (i) {return i;
};_uniq_var_171.__lix_func__ = true;return _uniq_var_171;})();
define0;
var def0 = {
defineVar: (function () {var _uniq_var_172 = function (i) {;
};_uniq_var_172.__lix_func__ = true;return _uniq_var_172;})(),
appendExpr: (function () {var _uniq_var_173 = function (i) {;
};_uniq_var_173.__lix_func__ = true;return _uniq_var_173;})()
};
def0;
var seqFuncParamsName = {
dynamicScope: 'd',
cb: '_cb',
step: '_step',
cont: '_cont',
ret: join(['s[', RET, ']']),
defer: 'cb_defer',
thisDefer: 'this_defer',
chainDefer: 'chain_defer'
};
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
var compile = (function () {var _uniq_var_180 = function (expr) {var libs = (function () {var _uniq_var_176 = function (_uniq_var_174, _uniq_var_175) {
if (typeof _uniq_var_174.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_174.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_174.join.apply(_uniq_var_174, arguments);
} else if (_uniq_var_174.join !== undefined) {
if (_uniq_var_175 === undefined) {
return _uniq_var_174.join;
}
_uniq_var_174.join = _uniq_var_175;
}return _uniq_var_174;
};_uniq_var_176.__lix_func__ = true;return _uniq_var_176;})()(map(env0, (function () {var _uniq_var_177 = function (i) {return i;
};_uniq_var_177.__lix_func__ = true;return _uniq_var_177;})()), "\n");
libs;
var flattenedExpr = flatten(expr, (function () {var _uniq_var_178 = function (i) {;
};_uniq_var_178.__lix_func__ = true;return _uniq_var_178;})(), (function () {var _uniq_var_179 = function (i) {return i;
};_uniq_var_179.__lix_func__ = true;return _uniq_var_179;})());
flattenedExpr;
var code = generateStart(flattenedExpr, call(env_new), ctx0, def0);
code;
return join([libs, "\n", code]);
};_uniq_var_180.__lix_func__ = true;return _uniq_var_180;})();
compile;
(exports.compile = compile);
compile;

