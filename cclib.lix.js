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
var generateSeq = (function () {var _uniq_var_24 = function (expr, env, ctx, def) {var funcName = call(getUniqVarName);
funcName;
var getCount = call(counterGenerator);
getCount;
var chainDefer = join(['function () {\n', 'thisDefer(defer_stack, true)(function (', ') {', seqFuncParamsName.defer, ' && ', seqFuncParamsName.defer, '();', '}, 0);\n', seqFuncParamsName.defer, ' && ', seqFuncParamsName.defer, '();\n', '}\n']);
chainDefer;
var ctx = (function () {var _uniq_var_19 = function (current) {return (function () {var _uniq_var_18 = function (v, loop) {var next = current;
next;
if (__eq__(loop, undefined)) {
(next = __add__(next, 1));

};
return join([v, '(function (', seqFuncParamsName.ret, ') {\n', 'return ', funcName, '(', seqFuncParamsName.cb, ', ', next, ', true, ', seqFuncParamsName.ret, ', ', chainDefer, ');\n', '}, 0, false, undefined, ', chainDefer, ')']);
};_uniq_var_18.__lix_func__ = true;return _uniq_var_18;})();
};_uniq_var_19.__lix_func__ = true;return _uniq_var_19;})();
ctx;
var body = (function () {var _uniq_var_22 = function (_uniq_var_20, _uniq_var_21) {
if (typeof _uniq_var_20.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_20.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_20.join.apply(_uniq_var_20, arguments);
} else if (_uniq_var_20.join !== undefined) {
if (_uniq_var_21 === undefined) {
return _uniq_var_20.join;
}
_uniq_var_20.join = _uniq_var_21;
}return _uniq_var_20;
};_uniq_var_22.__lix_func__ = true;return _uniq_var_22;})()(map(expr[0], (function () {var _uniq_var_23 = function (item, index) {var current = call(getCount);
current;
var stmt = generate(item, env, ctx(current), def);
stmt;
var stmt = join(['case ', current, ':\n', stmt]);
return stmt;
};_uniq_var_23.__lix_func__ = true;return _uniq_var_23;})()), ";\n");
body;
def.appendExpr(join(['function ', funcName, '(', seqFuncParamsName.cb, ', ', seqFuncParamsName.step, ', ', seqFuncParamsName.cont, ', ', seqFuncParamsName.ret, ', ', seqFuncParamsName.defer, ') {\n', 'switch (', seqFuncParamsName.step, ') {\n', body, '\n', 'default:\n', '}\n', 'thisDefer(defer_stack, false)(function () {\n', seqFuncParamsName.cb, '(', seqFuncParamsName.ret, ');\n', '}, 0);\n', 'if (', seqFuncParamsName.cont, ') {\n', seqFuncParamsName.cb, '(', seqFuncParamsName.ret, ');\n', '} else {\n', 'return ', seqFuncParamsName.ret, ';\n', '}\n', '}']));
return funcName;
};_uniq_var_24.__lix_func__ = true;return _uniq_var_24;})();
generateSeq;
var generateOr = (function () {var _uniq_var_25 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " || ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_25.__lix_func__ = true;return _uniq_var_25;})();
generateOr;
var generateAnd = (function () {var _uniq_var_26 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " && ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_26.__lix_func__ = true;return _uniq_var_26;})();
generateAnd;
var generateIf = (function () {var _uniq_var_31 = function (expr, env, ctx, def) {return (function () {var _uniq_var_29 = function (_uniq_var_27, _uniq_var_28) {
if (typeof _uniq_var_27.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_27.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_27.join.apply(_uniq_var_27, arguments);
} else if (_uniq_var_27.join !== undefined) {
if (_uniq_var_28 === undefined) {
return _uniq_var_27.join;
}
_uniq_var_27.join = _uniq_var_28;
}return _uniq_var_27;
};_uniq_var_29.__lix_func__ = true;return _uniq_var_29;})()(map(expr[0], (function () {var _uniq_var_30 = function (i) {if (__eq__(i[1], 'else')) {
return join(['{\n', ctx(generate(i[0], env, ctx, def)), '\n}']);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx, def);

} else {
return join(['if (', generate(i[0], env, ctx, def), ') {\n', ctx(generate(i[1], env, ctx, def)), '\n}']);

};
};_uniq_var_30.__lix_func__ = true;return _uniq_var_30;})()), ' else ');
};_uniq_var_31.__lix_func__ = true;return _uniq_var_31;})();
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
var generateAtomic = (function () {var _uniq_var_32 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = transformVarName(operateFuncName[expr[0]]));

} else if (__eq__(expr[3], undefined)) {
(ret = transformVarName(expr[0]));

};

};
return ret;
};_uniq_var_32.__lix_func__ = true;return _uniq_var_32;})();
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_33 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx, def);

} else if (__eq__(expr[1], '{index}')) {
return generateAtomic(expr[0], env, ctx, def);

};
};_uniq_var_33.__lix_func__ = true;return _uniq_var_33;})();
generatePropertyName;
var generateProperty = (function () {var _uniq_var_34 = function (expr, env, ctx, def) {var propertyName = generatePropertyName(expr[0], env, ctx0, def);
propertyName;
var propertyValue = generate(expr[2], env, ctx, def);
propertyValue;
return join([propertyName, ": ", propertyValue]);
};_uniq_var_34.__lix_func__ = true;return _uniq_var_34;})();
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_39 = function (expr, env, ctx, def) {var objectBody = (function () {var _uniq_var_37 = function (_uniq_var_35, _uniq_var_36) {
if (typeof _uniq_var_35.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_35.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_35.join.apply(_uniq_var_35, arguments);
} else if (_uniq_var_35.join !== undefined) {
if (_uniq_var_36 === undefined) {
return _uniq_var_35.join;
}
_uniq_var_35.join = _uniq_var_36;
}return _uniq_var_35;
};_uniq_var_37.__lix_func__ = true;return _uniq_var_37;})()(map(expr[0], (function () {var _uniq_var_38 = function (i) {return generateProperty(i, env, ctx, def);
};_uniq_var_38.__lix_func__ = true;return _uniq_var_38;})()), ",\n");
objectBody;
return join(["{\n", objectBody, "\n}"]);
};_uniq_var_39.__lix_func__ = true;return _uniq_var_39;})();
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_40 = function (name) {if (__eq__(name, 'require')) {
(name = '_require(require)');

} else if (__eq__(name, 'defer')) {
(name = '_defer(defer_stack)');

} else if (((((__ne__(name, 'exports') && __ne__(name, 'undefined')) && __ne__(name, 'null')) && __ne__(name, 'true')) && __ne__(name, 'false'))) {
(name = __add__('L', name));

};
return name;
};_uniq_var_40.__lix_func__ = true;return _uniq_var_40;})();
transformVarName;
var getVarName = (function () {var _uniq_var_41 = function (expr) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, {

}, ctx0);

} else if (__eq__(expr[1], '{.}')) {
return getVarName(expr[0]);

};
};_uniq_var_41.__lix_func__ = true;return _uniq_var_41;})();
getVarName;
var generateField = (function () {var _uniq_var_42 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0, def));

} else if (__eq__(expr[1], '{index}')) {
return join(['[', generate(expr[0], env, ctx, def), ']']);

};
};_uniq_var_42.__lix_func__ = true;return _uniq_var_42;})();
generateField;
var generateFieldAccess = (function () {var _uniq_var_43 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx0, def);

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx, def);
obj;
var field = generateField(expr[2], env, ctx, def);
field;
return __add__(obj, field);

};
};_uniq_var_43.__lix_func__ = true;return _uniq_var_43;})();
generateFieldAccess;
var generateArray = (function () {var _uniq_var_48 = function (expr, env, ctx, def) {var arrayBody = (function () {var _uniq_var_46 = function (_uniq_var_44, _uniq_var_45) {
if (typeof _uniq_var_44.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_44.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_44.join.apply(_uniq_var_44, arguments);
} else if (_uniq_var_44.join !== undefined) {
if (_uniq_var_45 === undefined) {
return _uniq_var_44.join;
}
_uniq_var_44.join = _uniq_var_45;
}return _uniq_var_44;
};_uniq_var_46.__lix_func__ = true;return _uniq_var_46;})()(map(expr[0], (function () {var _uniq_var_47 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_47.__lix_func__ = true;return _uniq_var_47;})()), ', ');
arrayBody;
return join(['[', arrayBody, ']']);
};_uniq_var_48.__lix_func__ = true;return _uniq_var_48;})();
generateArray;
var generateMethod = (function () {var _uniq_var_49 = function (expr, env, ctx) {var localVarName = call(getUniqVarName);
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
};_uniq_var_49.__lix_func__ = true;return _uniq_var_49;})();
generateMethod;
var generateWhile = (function () {var _uniq_var_50 = function (expr, env, ctx, def) {return join(['while (', generate(expr[0], env, ctx, def), ') {\n', ctx(generate(expr[2], env, ctx, def), true), "\n}"]);
};_uniq_var_50.__lix_func__ = true;return _uniq_var_50;})();
generateWhile;
var generateBreak = (function () {var _uniq_var_51 = function (expr, env, ctx) {return 'break';
};_uniq_var_51.__lix_func__ = true;return _uniq_var_51;})();
generateBreak;
var generateEmpty = (function () {var _uniq_var_52 = function (expr, env, ctx, def) {return "";
};_uniq_var_52.__lix_func__ = true;return _uniq_var_52;})();
generateEmpty;
var generateDef = (function () {var _uniq_var_53 = function (expr, env, ctx, def) {var varname = getVarName(expr[0]);
varname;
def.defineVar(varname);
var ret = join([varname, ' = ', generate(expr[2], env, ctx, def)]);
ret;
(env[varname] = true);
return ret;
};_uniq_var_53.__lix_func__ = true;return _uniq_var_53;})();
generateDef;
var generateAssign = (function () {var _uniq_var_54 = function (expr, env, ctx, def) {var varname = getVarName(expr[0]);
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
};_uniq_var_54.__lix_func__ = true;return _uniq_var_54;})();
generateAssign;
var generateFunc = (function () {var _uniq_var_58 = function (expr, env, ctx, def) {var funcEnv = env_new(env);
funcEnv;
var args = generateFuncArgs(expr[0], funcEnv, ctx0);
args;
var tmpVar = call(getUniqVarName);
tmpVar;
var def = call(GenerateDefNew);
def;
var body = generate(expr[2], funcEnv, ctx0, def);
body;
return (function () {var _uniq_var_57 = function (_uniq_var_55, _uniq_var_56) {
if (typeof _uniq_var_55.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_55.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_55.join.apply(_uniq_var_55, arguments);
} else if (_uniq_var_55.join !== undefined) {
if (_uniq_var_56 === undefined) {
return _uniq_var_55.join;
}
_uniq_var_55.join = _uniq_var_56;
}return _uniq_var_55;
};_uniq_var_57.__lix_func__ = true;return _uniq_var_57;})()(['(function (', args, ') {\n', 'var ', transformVarName('arguments'), ' = arguments, defer_stack = [];\n', call(def.defineVar), ";\n", call(def.appendExpr), ";\n", 'return ', body, ";\n", '})'], '');
};_uniq_var_58.__lix_func__ = true;return _uniq_var_58;})();
generateFunc;
var generateExpr = (function () {var _uniq_var_60 = function (expr, env, ctx, def) {var func = generate(expr[1], env, ctx0, def);
func;
var args = generate(expr[0], env, ctx0, def);
args;
foreach(expr, (function () {var _uniq_var_59 = function (item, index) {if (__gt__(index, 1)) {
return (args = join([args, ', ', generate(item, env, ctx0, def)]));

};
};_uniq_var_59.__lix_func__ = true;return _uniq_var_59;})());
return ctx(join([func, '(', args, ')']));
};_uniq_var_60.__lix_func__ = true;return _uniq_var_60;})();
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_73 = function () {var vars = {

};
vars;
var funcs = [];
funcs;
return {
defineVar: (function () {var _uniq_var_65 = function (v) {if (v) {
return (vars[v] = v);

} else {
var vecs = map(vars, (function () {var _uniq_var_61 = function (i) {return i;
};_uniq_var_61.__lix_func__ = true;return _uniq_var_61;})());
vecs;
if (__gt__(vecs.length, 0)) {
return __add__('var ', (function () {var _uniq_var_64 = function (_uniq_var_62, _uniq_var_63) {
if (typeof _uniq_var_62.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_62.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_62.join.apply(_uniq_var_62, arguments);
} else if (_uniq_var_62.join !== undefined) {
if (_uniq_var_63 === undefined) {
return _uniq_var_62.join;
}
_uniq_var_62.join = _uniq_var_63;
}return _uniq_var_62;
};_uniq_var_64.__lix_func__ = true;return _uniq_var_64;})()(vecs, ', '));

} else {
return '';

};

};
};_uniq_var_65.__lix_func__ = true;return _uniq_var_65;})(),
appendExpr: (function () {var _uniq_var_72 = function (v) {if (v) {
return (function () {var _uniq_var_68 = function (_uniq_var_66, _uniq_var_67) {
if (typeof _uniq_var_66.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_66.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_66.push.apply(_uniq_var_66, arguments);
} else if (_uniq_var_66.push !== undefined) {
if (_uniq_var_67 === undefined) {
return _uniq_var_66.push;
}
_uniq_var_66.push = _uniq_var_67;
}return _uniq_var_66;
};_uniq_var_68.__lix_func__ = true;return _uniq_var_68;})()(funcs, v);

} else {
return (function () {var _uniq_var_71 = function (_uniq_var_69, _uniq_var_70) {
if (typeof _uniq_var_69.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_69.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_69.join.apply(_uniq_var_69, arguments);
} else if (_uniq_var_69.join !== undefined) {
if (_uniq_var_70 === undefined) {
return _uniq_var_69.join;
}
_uniq_var_69.join = _uniq_var_70;
}return _uniq_var_69;
};_uniq_var_71.__lix_func__ = true;return _uniq_var_71;})()(funcs, ';\n');

};
};_uniq_var_72.__lix_func__ = true;return _uniq_var_72;})()
};
};_uniq_var_73.__lix_func__ = true;return _uniq_var_73;})();
GenerateDefNew;
var generateStart = (function () {var _uniq_var_74 = function (expr, env, ctx, def) {var def = call(GenerateDefNew);
def;
var body = generate(expr[0], env, ctx, def);
body;
var body = join(['module.exports = ', body, '\n']);
body;
return join(['var defer_stack = [];\n', 'function ', seqFuncParamsName.chainDefer, '() {\n', 'thisDefer(defer_stack)(function(){return;}, 0);\n', '}\n', call(def.defineVar), ";\n", call(def.appendExpr), ";\n", body]);
};_uniq_var_74.__lix_func__ = true;return _uniq_var_74;})();
generateStart;
var generateMono = (function () {var _uniq_var_75 = function (expr, env, ctx, def) {return generate(expr[0], env, ctx, def);
};_uniq_var_75.__lix_func__ = true;return _uniq_var_75;})();
generateMono;
var generatePathItem = (function () {var _uniq_var_76 = function (expr, env, ctx, def) {return join(['"', expr[0], '"']);
};_uniq_var_76.__lix_func__ = true;return _uniq_var_76;})();
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_77 = function (expr, env, ctx, def) {return join(['("', expr[2], '" + ', generate(expr[0], env, ctx, def), ')']);
};_uniq_var_77.__lix_func__ = true;return _uniq_var_77;})();
generatePathArgItem;
var generatePath = (function () {var _uniq_var_82 = function (expr, env, ctx, def) {var path = (function () {var _uniq_var_80 = function (_uniq_var_78, _uniq_var_79) {
if (typeof _uniq_var_78.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_78.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_78.join.apply(_uniq_var_78, arguments);
} else if (_uniq_var_78.join !== undefined) {
if (_uniq_var_79 === undefined) {
return _uniq_var_78.join;
}
_uniq_var_78.join = _uniq_var_79;
}return _uniq_var_78;
};_uniq_var_80.__lix_func__ = true;return _uniq_var_80;})()(map(expr[0], (function () {var _uniq_var_81 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_81.__lix_func__ = true;return _uniq_var_81;})()), ',');
path;
return join(['[', path, '].join("/")']);
};_uniq_var_82.__lix_func__ = true;return _uniq_var_82;})();
generatePath;
var generateModule = (function () {var _uniq_var_86 = function (expr, env, ctx, def) {var name = [(function () {var _uniq_var_85 = function (_uniq_var_83, _uniq_var_84) {
if (typeof _uniq_var_83.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_83.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_83.join.apply(_uniq_var_83, arguments);
} else if (_uniq_var_83.join !== undefined) {
if (_uniq_var_84 === undefined) {
return _uniq_var_83.join;
}
_uniq_var_83.join = _uniq_var_84;
}return _uniq_var_83;
};_uniq_var_85.__lix_func__ = true;return _uniq_var_85;})()(['"', expr[0], '"'], ''), '{atomic}'];
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
return moduleExpr;
};_uniq_var_86.__lix_func__ = true;return _uniq_var_86;})();
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
var generateOp = (function () {var _uniq_var_87 = function (hint) {if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};
};_uniq_var_87.__lix_func__ = true;return _uniq_var_87;})();
generateOp;
var generate = (function () {var _uniq_var_88 = function (expr, env, ctx, def) {return generateOp(expr[1])(expr, env, ctx, def);
};_uniq_var_88.__lix_func__ = true;return _uniq_var_88;})();
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/__builtin__.js');"
};
env0;
var env_new = (function () {var _uniq_var_90 = function (env) {(env = (env || env0));
var Env = (function () {var _uniq_var_89 = function () {;
};_uniq_var_89.__lix_func__ = true;return _uniq_var_89;})();
Env;
(Env.prototype = env);
return _instance_(Env);
};_uniq_var_90.__lix_func__ = true;return _uniq_var_90;})();
env_new;
var flattenExpr = (function () {var _uniq_var_92 = function (expr, define) {return define(map(expr, (function () {var _uniq_var_91 = function (item) {return flatten(item, define);
};_uniq_var_91.__lix_func__ = true;return _uniq_var_91;})()));
};_uniq_var_92.__lix_func__ = true;return _uniq_var_92;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_93 = function (expr, define) {return expr;
};_uniq_var_93.__lix_func__ = true;return _uniq_var_93;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_98 = function (expr, define) {var whileDefine = call(statementFlattenGenerator);
whileDefine;
(expr[0] = flatten(expr[0], whileDefine));
(expr[2] = flatten(expr[2], define0));
(expr[2][0] = (function () {var _uniq_var_96 = function (_uniq_var_94, _uniq_var_95) {
if (typeof _uniq_var_94.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_94.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_94.concat.apply(_uniq_var_94, arguments);
} else if (_uniq_var_94.concat !== undefined) {
if (_uniq_var_95 === undefined) {
return _uniq_var_94.concat;
}
_uniq_var_94.concat = _uniq_var_95;
}return _uniq_var_94;
};_uniq_var_96.__lix_func__ = true;return _uniq_var_96;})()(expr[2][0], call(whileDefine)));
foreach(call(whileDefine), (function () {var _uniq_var_97 = function (i) {return define(i, true);
};_uniq_var_97.__lix_func__ = true;return _uniq_var_97;})());
define(expr, true);
return ['undefined', '{atomic}'];
};_uniq_var_98.__lix_func__ = true;return _uniq_var_98;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_103 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_102 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_101 = function (_uniq_var_99, _uniq_var_100) {
if (typeof _uniq_var_99.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_99.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_99.push.apply(_uniq_var_99, arguments);
} else if (_uniq_var_99.push !== undefined) {
if (_uniq_var_100 === undefined) {
return _uniq_var_99.push;
}
_uniq_var_99.push = _uniq_var_100;
}return _uniq_var_99;
};_uniq_var_101.__lix_func__ = true;return _uniq_var_101;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_102.__lix_func__ = true;return _uniq_var_102;})();
getAndOpSeq;
define([[[ret, [[], '{empty}']], [call(getAndOpSeq), 'else']], 'if'], true);
return ret;
};_uniq_var_103.__lix_func__ = true;return _uniq_var_103;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_108 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_107 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_106 = function (_uniq_var_104, _uniq_var_105) {
if (typeof _uniq_var_104.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_104.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_104.push.apply(_uniq_var_104, arguments);
} else if (_uniq_var_104.push !== undefined) {
if (_uniq_var_105 === undefined) {
return _uniq_var_104.push;
}
_uniq_var_104.push = _uniq_var_105;
}return _uniq_var_104;
};_uniq_var_106.__lix_func__ = true;return _uniq_var_106;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_107.__lix_func__ = true;return _uniq_var_107;})();
getAndOpSeq;
define([[[ret, call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_108.__lix_func__ = true;return _uniq_var_108;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_113 = function (expr, define, tmpVar, ctx) {return foreach(expr[0], (function () {var _uniq_var_112 = function (i) {if (__eq__(i[1], 'else')) {
var elseSeq = flatten(i[0], define0, ctx);
elseSeq;
return define([[[tmpVar, elseSeq]], 'if'], true);

} else if (__eq__(i[1], 'if')) {
return define(_flattenIf(i, define, tmpVar, ctx));

} else {
var ifSeq = flatten(i[1], define0, ctx);
ifSeq;
(function () {var _uniq_var_111 = function (_uniq_var_109, _uniq_var_110) {
if (typeof _uniq_var_109.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_109.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_109.unshift.apply(_uniq_var_109, arguments);
} else if (_uniq_var_109.unshift !== undefined) {
if (_uniq_var_110 === undefined) {
return _uniq_var_109.unshift;
}
_uniq_var_109.unshift = _uniq_var_110;
}return _uniq_var_109;
};_uniq_var_111.__lix_func__ = true;return _uniq_var_111;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
var cond = flatten(i[0], define);
cond;
var cond = [tmpVar, 'and', cond];
cond;
return define([[[cond, ifSeq]], 'if'], true);

};
};_uniq_var_112.__lix_func__ = true;return _uniq_var_112;})());
};_uniq_var_113.__lix_func__ = true;return _uniq_var_113;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_115 = function (expr, define) {var tmpVar = define(['true', '{atomic}']);
tmpVar;
var retVar = define(['null', '{atomic}']);
retVar;
var ctx = (function () {var _uniq_var_114 = function (i) {return [retVar, '=', i];
};_uniq_var_114.__lix_func__ = true;return _uniq_var_114;})();
ctx;
_flattenIf(expr, define, tmpVar, ctx);
return retVar;
};_uniq_var_115.__lix_func__ = true;return _uniq_var_115;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_116 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_116.__lix_func__ = true;return _uniq_var_116;})();
flattenAssign;
var flattenDef = flattenAssign;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_117 = function (expr, define) {(expr[0] = flatten(expr[0], define));
return expr;
};_uniq_var_117.__lix_func__ = true;return _uniq_var_117;})();
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_118 = function (expr, define) {return expr;
};_uniq_var_118.__lix_func__ = true;return _uniq_var_118;})();
flattenPathItem;
var flattenPath = (function () {var _uniq_var_120 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_119 = function (i) {return flatten(i, define);
};_uniq_var_119.__lix_func__ = true;return _uniq_var_119;})()));
return expr;
};_uniq_var_120.__lix_func__ = true;return _uniq_var_120;})();
flattenPath;
var flattenEmpty = (function () {var _uniq_var_121 = function (expr, define) {return expr;
};_uniq_var_121.__lix_func__ = true;return _uniq_var_121;})();
flattenEmpty;
var flattenField = (function () {var _uniq_var_122 = function (expr, define) {if (__eq__(expr[1], '{index}')) {
(expr[0] = flatten(expr[0], define));

};
return expr;
};_uniq_var_122.__lix_func__ = true;return _uniq_var_122;})();
flattenField;
var flattenMethod = (function () {var _uniq_var_123 = function (expr, define) {(expr[0] = flattenField(expr[0], define));
return expr;
};_uniq_var_123.__lix_func__ = true;return _uniq_var_123;})();
flattenMethod;
var flattenProperty = (function () {var _uniq_var_124 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_124.__lix_func__ = true;return _uniq_var_124;})();
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_126 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_125 = function (i) {return flattenProperty(i, define);
};_uniq_var_125.__lix_func__ = true;return _uniq_var_125;})()));
return expr;
};_uniq_var_126.__lix_func__ = true;return _uniq_var_126;})();
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_128 = function (expr, define) {(expr[0] = map(expr[0], (function () {var _uniq_var_127 = function (i) {return flatten(i, define);
};_uniq_var_127.__lix_func__ = true;return _uniq_var_127;})()));
return expr;
};_uniq_var_128.__lix_func__ = true;return _uniq_var_128;})();
flattenArray;
var flattenFunc = (function () {var _uniq_var_129 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_129.__lix_func__ = true;return _uniq_var_129;})();
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_130 = function (expr, define) {if (__eq__(expr[1], '{.}')) {
(expr[0] = flattenFieldAccess(expr[0], define));
(expr[2] = flattenField(expr[2], define));

} else {
(expr = flatten(expr, define));

};
return expr;
};_uniq_var_130.__lix_func__ = true;return _uniq_var_130;})();
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_131 = function (expr, define) {return expr;
};_uniq_var_131.__lix_func__ = true;return _uniq_var_131;})();
flattenAtomic;
var flattenMono = (function () {var _uniq_var_132 = function (expr, define) {return flatten(expr[0], define);
};_uniq_var_132.__lix_func__ = true;return _uniq_var_132;})();
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_143 = function () {var data = [];
data;
return (function () {var _uniq_var_142 = function (statement, tmpVarName) {if (__eq__(statement, undefined)) {
return data;

} else if (__eq__(tmpVarName, true)) {
return (function () {var _uniq_var_135 = function (_uniq_var_133, _uniq_var_134) {
if (typeof _uniq_var_133.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_133.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_133.push.apply(_uniq_var_133, arguments);
} else if (_uniq_var_133.push !== undefined) {
if (_uniq_var_134 === undefined) {
return _uniq_var_133.push;
}
_uniq_var_133.push = _uniq_var_134;
}return _uniq_var_133;
};_uniq_var_135.__lix_func__ = true;return _uniq_var_135;})()(data, statement);

} else if (__eq__(tmpVarName, undefined)) {
var varName = call(getUniqVarName);
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
(function () {var _uniq_var_138 = function (_uniq_var_136, _uniq_var_137) {
if (typeof _uniq_var_136.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_136.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_136.push.apply(_uniq_var_136, arguments);
} else if (_uniq_var_136.push !== undefined) {
if (_uniq_var_137 === undefined) {
return _uniq_var_136.push;
}
_uniq_var_136.push = _uniq_var_137;
}return _uniq_var_136;
};_uniq_var_138.__lix_func__ = true;return _uniq_var_138;})()(data, [tmpRet, ':=', statement]);
(function () {var _uniq_var_141 = function (_uniq_var_139, _uniq_var_140) {
if (typeof _uniq_var_139.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_139.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_139.push.apply(_uniq_var_139, arguments);
} else if (_uniq_var_139.push !== undefined) {
if (_uniq_var_140 === undefined) {
return _uniq_var_139.push;
}
_uniq_var_139.push = _uniq_var_140;
}return _uniq_var_139;
};_uniq_var_141.__lix_func__ = true;return _uniq_var_141;})()(data, [lixVar, ':=', tmpRet]);
return lixVar;

};
};_uniq_var_142.__lix_func__ = true;return _uniq_var_142;})();
};_uniq_var_143.__lix_func__ = true;return _uniq_var_143;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_155 = function (expr, define, seqCtx) {var ret = [];
ret;
var ctx = (function () {var _uniq_var_144 = function (stmt, index) {var ret = stmt;
ret;
if ((seqCtx && __eq__(parseInt(index), __sub__(expr[0].length, 1)))) {
var ret = seqCtx(stmt);
ret;

};
return ret;
};_uniq_var_144.__lix_func__ = true;return _uniq_var_144;})();
ctx;
foreach(expr[0], (function () {var _uniq_var_154 = function (item, index) {var exprDefine = call(statementFlattenGenerator);
exprDefine;
var itemRet = flatten(item, exprDefine);
itemRet;
(ret = (function () {var _uniq_var_147 = function (_uniq_var_145, _uniq_var_146) {
if (typeof _uniq_var_145.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_145.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_145.concat.apply(_uniq_var_145, arguments);
} else if (_uniq_var_145.concat !== undefined) {
if (_uniq_var_146 === undefined) {
return _uniq_var_145.concat;
}
_uniq_var_145.concat = _uniq_var_146;
}return _uniq_var_145;
};_uniq_var_147.__lix_func__ = true;return _uniq_var_147;})()(ret, call(exprDefine)));
var stmtRet = ctx(itemRet, index);
stmtRet;
var isTmpVar = (function () {var _uniq_var_148 = function (expr) {return (__eq__(expr[1], '{atomic}') && __ne__(expr[3], undefined));
};_uniq_var_148.__lix_func__ = true;return _uniq_var_148;})();
isTmpVar;
var isRealVar = (function () {var _uniq_var_149 = function (expr) {return (__eq__(expr[1], '{atomic}') && __eq__(expr[3], undefined));
};_uniq_var_149.__lix_func__ = true;return _uniq_var_149;})();
isRealVar;
var isRealExpr = (function () {var _uniq_var_150 = function (expr) {return (isRealVar(expr) || (__ne__(expr[1], 'if') && __ne__(expr[1], 'while')));
};_uniq_var_150.__lix_func__ = true;return _uniq_var_150;})();
isRealExpr;
if ((__ne__(stmtRet[1], '{empty}') && not(isTmpVar(stmtRet)))) {
if (isRealExpr(stmtRet)) {
(stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]);

};
return (function () {var _uniq_var_153 = function (_uniq_var_151, _uniq_var_152) {
if (typeof _uniq_var_151.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_151.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_151.push.apply(_uniq_var_151, arguments);
} else if (_uniq_var_151.push !== undefined) {
if (_uniq_var_152 === undefined) {
return _uniq_var_151.push;
}
_uniq_var_151.push = _uniq_var_152;
}return _uniq_var_151;
};_uniq_var_153.__lix_func__ = true;return _uniq_var_153;})()(ret, stmtRet);

};
};_uniq_var_154.__lix_func__ = true;return _uniq_var_154;})());
(expr[0] = ret);
return expr;
};_uniq_var_155.__lix_func__ = true;return _uniq_var_155;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_156 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
return [ret, '{start}'];
};_uniq_var_156.__lix_func__ = true;return _uniq_var_156;})();
flattenStart;
var flattenModule = (function () {var _uniq_var_160 = function (expr, define) {if (__eq__(expr[2], '{var}')) {
var name = [(function () {var _uniq_var_159 = function (_uniq_var_157, _uniq_var_158) {
if (typeof _uniq_var_157.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_157.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_157.join.apply(_uniq_var_157, arguments);
} else if (_uniq_var_157.join !== undefined) {
if (_uniq_var_158 === undefined) {
return _uniq_var_157.join;
}
_uniq_var_157.join = _uniq_var_158;
}return _uniq_var_157;
};_uniq_var_159.__lix_func__ = true;return _uniq_var_159;})()(['"', expr[0], '"'], ''), '{atomic}'];
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
};_uniq_var_160.__lix_func__ = true;return _uniq_var_160;})();
flattenModule;
var flattenDefer = (function () {var _uniq_var_161 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_161.__lix_func__ = true;return _uniq_var_161;})();
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
'if': flattenIf,
'and': flattenAnd,
'or': flattenOr,
'while': flattenWhile,
'break': flattenBreak,
'defer': flattenDefer
};
flattenOpTable;
var flattenOp = (function () {var _uniq_var_162 = function (hint) {if (flattenOpTable[hint]) {
return flattenOpTable[hint];

} else {
return flattenExpr;

};
};_uniq_var_162.__lix_func__ = true;return _uniq_var_162;})();
flattenOp;
var flatten = (function () {var _uniq_var_163 = function (expr, define, ctx) {return flattenOp(expr[1])(expr, define, ctx);
};_uniq_var_163.__lix_func__ = true;return _uniq_var_163;})();
flatten;
var define0 = (function () {var _uniq_var_164 = function (i) {return i;
};_uniq_var_164.__lix_func__ = true;return _uniq_var_164;})();
define0;
var def0 = {
defineVar: (function () {var _uniq_var_165 = function (i) {;
};_uniq_var_165.__lix_func__ = true;return _uniq_var_165;})(),
appendExpr: (function () {var _uniq_var_166 = function (i) {;
};_uniq_var_166.__lix_func__ = true;return _uniq_var_166;})()
};
def0;
var seqFuncParamsName = {
cb: '_cb',
step: '_step',
cont: '_cont',
ret: '_ret',
defer: 'cb_defer',
thisDefer: 'this_defer',
chainDefer: 'chain_defer'
};
seqFuncParamsName;
var compile = (function () {var _uniq_var_173 = function (expr) {var libs = (function () {var _uniq_var_169 = function (_uniq_var_167, _uniq_var_168) {
if (typeof _uniq_var_167.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_167.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_167.join.apply(_uniq_var_167, arguments);
} else if (_uniq_var_167.join !== undefined) {
if (_uniq_var_168 === undefined) {
return _uniq_var_167.join;
}
_uniq_var_167.join = _uniq_var_168;
}return _uniq_var_167;
};_uniq_var_169.__lix_func__ = true;return _uniq_var_169;})()(map(env0, (function () {var _uniq_var_170 = function (i) {return i;
};_uniq_var_170.__lix_func__ = true;return _uniq_var_170;})()), "\n");
libs;
var flattenedExpr = flatten(expr, (function () {var _uniq_var_171 = function (i) {;
};_uniq_var_171.__lix_func__ = true;return _uniq_var_171;})(), (function () {var _uniq_var_172 = function (i) {return i;
};_uniq_var_172.__lix_func__ = true;return _uniq_var_172;})());
flattenedExpr;
var code = generateStart(flattenedExpr, call(env_new), ctx0, def0);
code;
return join([libs, "\n", code]);
};_uniq_var_173.__lix_func__ = true;return _uniq_var_173;})();
compile;
(exports.compile = compile);
compile;

