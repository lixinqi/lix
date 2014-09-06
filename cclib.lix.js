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
var withSeqLayout = (function () {var _uniq_var_20 = function (statements, ctx) {var funcName = call(getUniqVarName);
funcName;
var suffix = (function () {var _uniq_var_18 = function (v) {return __add__(v, '()');
};_uniq_var_18.__lix_func__ = true;return _uniq_var_18;})();
suffix;
var body = map(statements, (function () {var _uniq_var_19 = function (stmtClosure, index) {var stmt = call(stmtClosure, suffix);
stmt;
if (__eq__(index, __sub__(statements.length, 1))) {
(stmt = __add__('return ', stmt));

};
return stmt;
};_uniq_var_19.__lix_func__ = true;return _uniq_var_19;})());
return body;
};_uniq_var_20.__lix_func__ = true;return _uniq_var_20;})();
withSeqLayout;
var generateSeq = (function () {var _uniq_var_27 = function (expr, env, ctx, def) {var funcName = call(getUniqVarName);
funcName;
var getCount = call(counterGenerator);
getCount;
var ctx = (function () {var _uniq_var_22 = function (current) {return (function () {var _uniq_var_21 = function (v) {return join([v, '(function (', seqFuncParamsName.ret, ') {\n', 'return ', funcName, '(', seqFuncParamsName.cb, ', ', __add__(current, 1), ', true, ', seqFuncParamsName.ret, ');\n', '}, 0)']);
};_uniq_var_21.__lix_func__ = true;return _uniq_var_21;})();
};_uniq_var_22.__lix_func__ = true;return _uniq_var_22;})();
ctx;
var body = (function () {var _uniq_var_25 = function (_uniq_var_23, _uniq_var_24) {
if (typeof _uniq_var_23.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_23.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_23.join.apply(_uniq_var_23, arguments);
} else if (_uniq_var_23.join !== undefined) {
if (_uniq_var_24 === undefined) {
return _uniq_var_23.join;
}
_uniq_var_23.join = _uniq_var_24;
}return _uniq_var_23;
};_uniq_var_25.__lix_func__ = true;return _uniq_var_25;})()(map(expr[0], (function () {var _uniq_var_26 = function (item, index) {var current = call(getCount);
current;
var stmt = generate(item, env, ctx(current), def);
stmt;
var stmt = join(['case ', current, ':\n', stmt]);
return stmt;
};_uniq_var_26.__lix_func__ = true;return _uniq_var_26;})()), ";\n");
body;
def.appendExpr(join(['function ', funcName, '(', seqFuncParamsName.cb, ', ', seqFuncParamsName.step, ', ', seqFuncParamsName.cont, ', ', seqFuncParamsName.ret, ') {\n', 'switch (', seqFuncParamsName.step, ') {\n', body, '\n', 'default:\n', '}\n', 'if (', seqFuncParamsName.cont, ') {\n', seqFuncParamsName.cb, '(', seqFuncParamsName.ret, ')\n', '} else {\n', 'return ', seqFuncParamsName.ret, '\n', '}\n', '}']));
return funcName;
};_uniq_var_27.__lix_func__ = true;return _uniq_var_27;})();
generateSeq;
var generateOr = (function () {var _uniq_var_28 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " || ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_28.__lix_func__ = true;return _uniq_var_28;})();
generateOr;
var generateAnd = (function () {var _uniq_var_29 = function (expr, env, ctx, def) {return join(['(', generate(expr[0], env, ctx, def), " && ", generate(expr[2], env, ctx, def), ')']);
};_uniq_var_29.__lix_func__ = true;return _uniq_var_29;})();
generateAnd;
var generateIf = (function () {var _uniq_var_34 = function (expr, env, ctx, def) {return (function () {var _uniq_var_32 = function (_uniq_var_30, _uniq_var_31) {
if (typeof _uniq_var_30.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_30.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_30.join.apply(_uniq_var_30, arguments);
} else if (_uniq_var_30.join !== undefined) {
if (_uniq_var_31 === undefined) {
return _uniq_var_30.join;
}
_uniq_var_30.join = _uniq_var_31;
}return _uniq_var_30;
};_uniq_var_32.__lix_func__ = true;return _uniq_var_32;})()(map(expr[0], (function () {var _uniq_var_33 = function (i) {if (__eq__(i[1], 'else')) {
return join(['{\n', generate(i[0], env, ctx, def), '\n}']);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx, def);

} else {
return join(['if (', generate(i[0], env, ctx, def), ') {\n', ctx(generate(i[1], env, ctx, def)), '\n}']);

};
};_uniq_var_33.__lix_func__ = true;return _uniq_var_33;})()), ' else ');
};_uniq_var_34.__lix_func__ = true;return _uniq_var_34;})();
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
var generateAtomic = (function () {var _uniq_var_35 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = operateFuncName[expr[0]]);

} else {
(ret = transformVarName(expr[0]));

};

};
return ret;
};_uniq_var_35.__lix_func__ = true;return _uniq_var_35;})();
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_36 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx, def);

} else if (__eq__(expr[1], '{index}')) {
return generateAtomic(expr[0], env, ctx, def);

};
};_uniq_var_36.__lix_func__ = true;return _uniq_var_36;})();
generatePropertyName;
var generateProperty = (function () {var _uniq_var_37 = function (expr, env, ctx, def) {var propertyName = generatePropertyName(expr[0], env, ctx0, def);
propertyName;
var propertyValue = generate(expr[2], env, ctx, def);
propertyValue;
return join([propertyName, ": ", propertyValue]);
};_uniq_var_37.__lix_func__ = true;return _uniq_var_37;})();
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_42 = function (expr, env, ctx, def) {var objectBody = (function () {var _uniq_var_40 = function (_uniq_var_38, _uniq_var_39) {
if (typeof _uniq_var_38.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_38.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_38.join.apply(_uniq_var_38, arguments);
} else if (_uniq_var_38.join !== undefined) {
if (_uniq_var_39 === undefined) {
return _uniq_var_38.join;
}
_uniq_var_38.join = _uniq_var_39;
}return _uniq_var_38;
};_uniq_var_40.__lix_func__ = true;return _uniq_var_40;})()(map(expr[0], (function () {var _uniq_var_41 = function (i) {return generateProperty(i, env, ctx, def);
};_uniq_var_41.__lix_func__ = true;return _uniq_var_41;})()), ",\n");
objectBody;
return join(["{\n", objectBody, "\n}"]);
};_uniq_var_42.__lix_func__ = true;return _uniq_var_42;})();
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_43 = function (name) {return name;
};_uniq_var_43.__lix_func__ = true;return _uniq_var_43;})();
transformVarName;
var getVarName = (function () {var _uniq_var_44 = function (expr) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, {

}, ctx0);

} else if (__eq__(expr[1], '{.}')) {
return getVarName(expr[0]);

};
};_uniq_var_44.__lix_func__ = true;return _uniq_var_44;})();
getVarName;
var generateField = (function () {var _uniq_var_45 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0, def));

} else if (__eq__(expr[1], '{index}')) {
return join(['[', generate(expr[0], env, ctx, def), ']']);

};
};_uniq_var_45.__lix_func__ = true;return _uniq_var_45;})();
generateField;
var generateFieldAccess = (function () {var _uniq_var_46 = function (expr, env, ctx, def) {if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx0, def);

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx, def);
obj;
var field = generateField(expr[2], env, ctx, def);
field;
return __add__(obj, field);

};
};_uniq_var_46.__lix_func__ = true;return _uniq_var_46;})();
generateFieldAccess;
var generateArray = (function () {var _uniq_var_51 = function (expr, env, ctx, def) {var arrayBody = (function () {var _uniq_var_49 = function (_uniq_var_47, _uniq_var_48) {
if (typeof _uniq_var_47.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_47.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_47.join.apply(_uniq_var_47, arguments);
} else if (_uniq_var_47.join !== undefined) {
if (_uniq_var_48 === undefined) {
return _uniq_var_47.join;
}
_uniq_var_47.join = _uniq_var_48;
}return _uniq_var_47;
};_uniq_var_49.__lix_func__ = true;return _uniq_var_49;})()(map(expr[0], (function () {var _uniq_var_50 = function (i) {return generate(i, env, ctx, def);
};_uniq_var_50.__lix_func__ = true;return _uniq_var_50;})()), ', ');
arrayBody;
return join(['[', arrayBody, ']']);
};_uniq_var_51.__lix_func__ = true;return _uniq_var_51;})();
generateArray;
var generateMethod = (function () {var _uniq_var_52 = function (expr, env, ctx) {var localVarName = call(getUniqVarName);
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
};_uniq_var_52.__lix_func__ = true;return _uniq_var_52;})();
generateMethod;
var generateWhile = (function () {var _uniq_var_53 = function (expr, env, ctx, def) {return join(['while (', generate(expr[0], env, ctx, def), ') {\n', ctx(generate(expr[2], env, ctx, def)), "\n}"]);
};_uniq_var_53.__lix_func__ = true;return _uniq_var_53;})();
generateWhile;
var generateBreak = (function () {var _uniq_var_54 = function (expr, env, ctx) {return 'break';
};_uniq_var_54.__lix_func__ = true;return _uniq_var_54;})();
generateBreak;
var generateEmpty = (function () {var _uniq_var_55 = function (expr, env, ctx, def) {return "";
};_uniq_var_55.__lix_func__ = true;return _uniq_var_55;})();
generateEmpty;
var generateDef = (function () {var _uniq_var_56 = function (expr, env, ctx, def) {var varname = expr[0][0];
varname;
def.defineVar(varname);
var ret = join([varname, ' = ', generate(expr[2], env, ctx, def)]);
ret;
(env[varname] = true);
return ret;
};_uniq_var_56.__lix_func__ = true;return _uniq_var_56;})();
generateDef;
var generateAssign = (function () {var _uniq_var_57 = function (expr, env, ctx, def) {var varname = getVarName(expr[0]);
varname;
if (__eq__(env[varname], undefined)) {
console.log(varname);
console.log("var undefined");

};
var varname = generate(expr[0], env, ctx0, def);
varname;
var value = generate(expr[2], env, ctx, def);
value;
return join([varname, " = ", value]);
};_uniq_var_57.__lix_func__ = true;return _uniq_var_57;})();
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
return join(['(function (', args, ') {\n', call(def.defineVar), ";\n", call(def.appendExpr), ";\n", 'return ', body, ";\n", '})']);
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
var body = join(['try {\n', body, '(function(x){return x;}, 0)\n', '} catch (e) {\n', '}']);
body;
return join([call(def.defineVar), ";\n", call(def.appendExpr), ";\n", body]);
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
var generateOp = (function () {var _uniq_var_83 = function (hint) {if (generateOpTable[hint]) {
return generateOpTable[hint];

} else {
return generateExpr;

};
};_uniq_var_83.__lix_func__ = true;return _uniq_var_83;})();
generateOp;
var generate = (function () {var _uniq_var_84 = function (expr, env, ctx, def) {return generateOp(expr[1])(expr, env, ctx, def);
};_uniq_var_84.__lix_func__ = true;return _uniq_var_84;})();
generate;
var env0 = {
exports: true,
array_join: (function () {var _uniq_var_87 = function (_uniq_var_85, _uniq_var_86) {
if (typeof _uniq_var_85.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_85.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_85.join.apply(_uniq_var_85, arguments);
} else if (_uniq_var_85.join !== undefined) {
if (_uniq_var_86 === undefined) {
return _uniq_var_85.join;
}
_uniq_var_85.join = _uniq_var_86;
}return _uniq_var_85;
};_uniq_var_87.__lix_func__ = true;return _uniq_var_87;})()(["function array_join(arr, glue) {\n", "return function () {\n", "return arr.join(glue)\n", "}\n", "}"], '\n'),
print: (function () {var _uniq_var_90 = function (_uniq_var_88, _uniq_var_89) {
if (typeof _uniq_var_88.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_88.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_88.join.apply(_uniq_var_88, arguments);
} else if (_uniq_var_88.join !== undefined) {
if (_uniq_var_89 === undefined) {
return _uniq_var_88.join;
}
_uniq_var_88.join = _uniq_var_89;
}return _uniq_var_88;
};_uniq_var_90.__lix_func__ = true;return _uniq_var_90;})()(["function print(x) {", "return function () {", "return console.log(x); ", "}", "}"], '\n'),
not: (function () {var _uniq_var_93 = function (_uniq_var_91, _uniq_var_92) {
if (typeof _uniq_var_91.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_91.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_91.join.apply(_uniq_var_91, arguments);
} else if (_uniq_var_91.join !== undefined) {
if (_uniq_var_92 === undefined) {
return _uniq_var_91.join;
}
_uniq_var_91.join = _uniq_var_92;
}return _uniq_var_91;
};_uniq_var_93.__lix_func__ = true;return _uniq_var_93;})()(["function not(x) {", "return function () {", "return !x; ", "}", "}"], '\n'),
_instance_: (function () {var _uniq_var_96 = function (_uniq_var_94, _uniq_var_95) {
if (typeof _uniq_var_94.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_94.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_94.join.apply(_uniq_var_94, arguments);
} else if (_uniq_var_94.join !== undefined) {
if (_uniq_var_95 === undefined) {
return _uniq_var_94.join;
}
_uniq_var_94.join = _uniq_var_95;
}return _uniq_var_94;
};_uniq_var_96.__lix_func__ = true;return _uniq_var_96;})()(["function _instance_(x) {", "return function () {", "return new x(); ", "}", "}"], '\n'),
__add__: (function () {var _uniq_var_99 = function (_uniq_var_97, _uniq_var_98) {
if (typeof _uniq_var_97.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_97.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_97.join.apply(_uniq_var_97, arguments);
} else if (_uniq_var_97.join !== undefined) {
if (_uniq_var_98 === undefined) {
return _uniq_var_97.join;
}
_uniq_var_97.join = _uniq_var_98;
}return _uniq_var_97;
};_uniq_var_99.__lix_func__ = true;return _uniq_var_99;})()(["function __add__(x, y) {", "return function () {", "return x + y;", "}", "}"], '\n'),
__sub__: (function () {var _uniq_var_102 = function (_uniq_var_100, _uniq_var_101) {
if (typeof _uniq_var_100.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_100.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_100.join.apply(_uniq_var_100, arguments);
} else if (_uniq_var_100.join !== undefined) {
if (_uniq_var_101 === undefined) {
return _uniq_var_100.join;
}
_uniq_var_100.join = _uniq_var_101;
}return _uniq_var_100;
};_uniq_var_102.__lix_func__ = true;return _uniq_var_102;})()(["function __sub__(x, y) {", "return function () {", "return x - y;", "}", "}"], '\n'),
__mul__: (function () {var _uniq_var_105 = function (_uniq_var_103, _uniq_var_104) {
if (typeof _uniq_var_103.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_103.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_103.join.apply(_uniq_var_103, arguments);
} else if (_uniq_var_103.join !== undefined) {
if (_uniq_var_104 === undefined) {
return _uniq_var_103.join;
}
_uniq_var_103.join = _uniq_var_104;
}return _uniq_var_103;
};_uniq_var_105.__lix_func__ = true;return _uniq_var_105;})()(["function __mul__(x, y) {", "return function () {", "return x * y;", "}", "}"], '\n'),
__div__: (function () {var _uniq_var_108 = function (_uniq_var_106, _uniq_var_107) {
if (typeof _uniq_var_106.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_106.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_106.join.apply(_uniq_var_106, arguments);
} else if (_uniq_var_106.join !== undefined) {
if (_uniq_var_107 === undefined) {
return _uniq_var_106.join;
}
_uniq_var_106.join = _uniq_var_107;
}return _uniq_var_106;
};_uniq_var_108.__lix_func__ = true;return _uniq_var_108;})()(["function __div__(x, y) {", "return function () {", "return x / y;", "}", "}"], '\n'),
__mod__: (function () {var _uniq_var_111 = function (_uniq_var_109, _uniq_var_110) {
if (typeof _uniq_var_109.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_109.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_109.join.apply(_uniq_var_109, arguments);
} else if (_uniq_var_109.join !== undefined) {
if (_uniq_var_110 === undefined) {
return _uniq_var_109.join;
}
_uniq_var_109.join = _uniq_var_110;
}return _uniq_var_109;
};_uniq_var_111.__lix_func__ = true;return _uniq_var_111;})()(["function __mod__(x, y) {", "return function () {", "return x % y;", "}", "}"], '\n'),
__gt__: (function () {var _uniq_var_114 = function (_uniq_var_112, _uniq_var_113) {
if (typeof _uniq_var_112.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_112.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_112.join.apply(_uniq_var_112, arguments);
} else if (_uniq_var_112.join !== undefined) {
if (_uniq_var_113 === undefined) {
return _uniq_var_112.join;
}
_uniq_var_112.join = _uniq_var_113;
}return _uniq_var_112;
};_uniq_var_114.__lix_func__ = true;return _uniq_var_114;})()(["function __gt__(x, y) {", "return function () {", "return x > y;", "}", "}"], '\n'),
__ge__: (function () {var _uniq_var_117 = function (_uniq_var_115, _uniq_var_116) {
if (typeof _uniq_var_115.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_115.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_115.join.apply(_uniq_var_115, arguments);
} else if (_uniq_var_115.join !== undefined) {
if (_uniq_var_116 === undefined) {
return _uniq_var_115.join;
}
_uniq_var_115.join = _uniq_var_116;
}return _uniq_var_115;
};_uniq_var_117.__lix_func__ = true;return _uniq_var_117;})()(["function __ge__(x, y) {", "return function () {", "return x >= y;", "}", "}"], '\n'),
__eq__: (function () {var _uniq_var_120 = function (_uniq_var_118, _uniq_var_119) {
if (typeof _uniq_var_118.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_118.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_118.join.apply(_uniq_var_118, arguments);
} else if (_uniq_var_118.join !== undefined) {
if (_uniq_var_119 === undefined) {
return _uniq_var_118.join;
}
_uniq_var_118.join = _uniq_var_119;
}return _uniq_var_118;
};_uniq_var_120.__lix_func__ = true;return _uniq_var_120;})()(["function __eq__(x, y) {", "return function () {", "return x == y;", "}", "}"], '\n'),
__ne__: (function () {var _uniq_var_123 = function (_uniq_var_121, _uniq_var_122) {
if (typeof _uniq_var_121.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_121.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_121.join.apply(_uniq_var_121, arguments);
} else if (_uniq_var_121.join !== undefined) {
if (_uniq_var_122 === undefined) {
return _uniq_var_121.join;
}
_uniq_var_121.join = _uniq_var_122;
}return _uniq_var_121;
};_uniq_var_123.__lix_func__ = true;return _uniq_var_123;})()(["function __ne__(x, y) {", "return function () {", "return x != y;", "}", "}"], '\n'),
__le__: (function () {var _uniq_var_126 = function (_uniq_var_124, _uniq_var_125) {
if (typeof _uniq_var_124.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_124.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_124.join.apply(_uniq_var_124, arguments);
} else if (_uniq_var_124.join !== undefined) {
if (_uniq_var_125 === undefined) {
return _uniq_var_124.join;
}
_uniq_var_124.join = _uniq_var_125;
}return _uniq_var_124;
};_uniq_var_126.__lix_func__ = true;return _uniq_var_126;})()(["function __le__(x, y) {", "return function () {", "return x <= y;", "}", "}"], '\n'),
__lt__: (function () {var _uniq_var_129 = function (_uniq_var_127, _uniq_var_128) {
if (typeof _uniq_var_127.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_127.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_127.join.apply(_uniq_var_127, arguments);
} else if (_uniq_var_127.join !== undefined) {
if (_uniq_var_128 === undefined) {
return _uniq_var_127.join;
}
_uniq_var_127.join = _uniq_var_128;
}return _uniq_var_127;
};_uniq_var_129.__lix_func__ = true;return _uniq_var_129;})()(["function __lt__(x, y) {", "return function () {", "return x < y;", "}", "}"], '\n'),
isFunction: (function () {var _uniq_var_132 = function (_uniq_var_130, _uniq_var_131) {
if (typeof _uniq_var_130.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_130.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_130.join.apply(_uniq_var_130, arguments);
} else if (_uniq_var_130.join !== undefined) {
if (_uniq_var_131 === undefined) {
return _uniq_var_130.join;
}
_uniq_var_130.join = _uniq_var_131;
}return _uniq_var_130;
};_uniq_var_132.__lix_func__ = true;return _uniq_var_132;})()(["function isFunction(x) {", "return function () {", "return typeof x === 'function';", "}", "}"], '\n'),
isArray: (function () {var _uniq_var_135 = function (_uniq_var_133, _uniq_var_134) {
if (typeof _uniq_var_133.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_133.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_133.join.apply(_uniq_var_133, arguments);
} else if (_uniq_var_133.join !== undefined) {
if (_uniq_var_134 === undefined) {
return _uniq_var_133.join;
}
_uniq_var_133.join = _uniq_var_134;
}return _uniq_var_133;
};_uniq_var_135.__lix_func__ = true;return _uniq_var_135;})()(["function isArray(x) {", "return function () {", "return x instanceof Array;", "}", "}"], '\n'),
foreach: (function () {var _uniq_var_138 = function (_uniq_var_136, _uniq_var_137) {
if (typeof _uniq_var_136.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_136.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_136.join.apply(_uniq_var_136, arguments);
} else if (_uniq_var_136.join !== undefined) {
if (_uniq_var_137 === undefined) {
return _uniq_var_136.join;
}
_uniq_var_136.join = _uniq_var_137;
}return _uniq_var_136;
};_uniq_var_138.__lix_func__ = true;return _uniq_var_138;})()(["function foreach(arr, cb) {", "return function () {", "for (var i in arr) {", "cb(arr[i], i)();", "}", "}", "}"], '\n'),
call: (function () {var _uniq_var_141 = function (_uniq_var_139, _uniq_var_140) {
if (typeof _uniq_var_139.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_139.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_139.join.apply(_uniq_var_139, arguments);
} else if (_uniq_var_139.join !== undefined) {
if (_uniq_var_140 === undefined) {
return _uniq_var_139.join;
}
_uniq_var_139.join = _uniq_var_140;
}return _uniq_var_139;
};_uniq_var_141.__lix_func__ = true;return _uniq_var_141;})()(["function call(fn) {", "var collect = []", "for (var i in arguments) {", "collect.push(arguments[i])", "}", "return fn.apply(fn, collect);", "}"], '\n'),
apply: (function () {var _uniq_var_144 = function (_uniq_var_142, _uniq_var_143) {
if (typeof _uniq_var_142.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_142.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_142.join.apply(_uniq_var_142, arguments);
} else if (_uniq_var_142.join !== undefined) {
if (_uniq_var_143 === undefined) {
return _uniq_var_142.join;
}
_uniq_var_142.join = _uniq_var_143;
}return _uniq_var_142;
};_uniq_var_144.__lix_func__ = true;return _uniq_var_144;})()(["function apply(fn) {", "var args = arguments[1]", "return function () {", "return fn.apply(fn, args)();", "}", "}"], '\n')
};
env0;
var env_new = (function () {var _uniq_var_146 = function (env) {(env = (env || env0));
var Env = (function () {var _uniq_var_145 = function () {;
};_uniq_var_145.__lix_func__ = true;return _uniq_var_145;})();
Env;
(Env.prototype = env);
return _instance_(Env);
};_uniq_var_146.__lix_func__ = true;return _uniq_var_146;})();
env_new;
var flattenExpr = (function () {var _uniq_var_148 = function (expr, define) {return define(map(expr, (function () {var _uniq_var_147 = function (item) {return flatten(item, define);
};_uniq_var_147.__lix_func__ = true;return _uniq_var_147;})()));
};_uniq_var_148.__lix_func__ = true;return _uniq_var_148;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_149 = function (expr, define) {return expr;
};_uniq_var_149.__lix_func__ = true;return _uniq_var_149;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_154 = function (expr, define) {var whileDefine = call(statementFlattenGenerator);
whileDefine;
(expr[0] = flatten(expr[0], whileDefine));
(expr[2] = flatten(expr[2], define0));
(expr[2][0] = (function () {var _uniq_var_152 = function (_uniq_var_150, _uniq_var_151) {
if (typeof _uniq_var_150.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_150.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_150.concat.apply(_uniq_var_150, arguments);
} else if (_uniq_var_150.concat !== undefined) {
if (_uniq_var_151 === undefined) {
return _uniq_var_150.concat;
}
_uniq_var_150.concat = _uniq_var_151;
}return _uniq_var_150;
};_uniq_var_152.__lix_func__ = true;return _uniq_var_152;})()(expr[2][0], call(whileDefine)));
foreach(call(whileDefine), (function () {var _uniq_var_153 = function (i) {return define(i, true);
};_uniq_var_153.__lix_func__ = true;return _uniq_var_153;})());
define(expr, true);
return ['', '{empty}'];
};_uniq_var_154.__lix_func__ = true;return _uniq_var_154;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_159 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_158 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_157 = function (_uniq_var_155, _uniq_var_156) {
if (typeof _uniq_var_155.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_155.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_155.push.apply(_uniq_var_155, arguments);
} else if (_uniq_var_155.push !== undefined) {
if (_uniq_var_156 === undefined) {
return _uniq_var_155.push;
}
_uniq_var_155.push = _uniq_var_156;
}return _uniq_var_155;
};_uniq_var_157.__lix_func__ = true;return _uniq_var_157;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_158.__lix_func__ = true;return _uniq_var_158;})();
getAndOpSeq;
define([[[[ret, ['not', '{atomic}', 'var']], call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_159.__lix_func__ = true;return _uniq_var_159;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_164 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
if (__ne__(ret[2], 'var')) {
var ret = define(ret);
ret;

};
var getAndOpSeq = (function () {var _uniq_var_163 = function () {var AndDefine = call(statementFlattenGenerator);
AndDefine;
var seqRet = flatten(expr[2], AndDefine);
seqRet;
var seq = call(AndDefine);
seq;
(function () {var _uniq_var_162 = function (_uniq_var_160, _uniq_var_161) {
if (typeof _uniq_var_160.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_160.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_160.push.apply(_uniq_var_160, arguments);
} else if (_uniq_var_160.push !== undefined) {
if (_uniq_var_161 === undefined) {
return _uniq_var_160.push;
}
_uniq_var_160.push = _uniq_var_161;
}return _uniq_var_160;
};_uniq_var_162.__lix_func__ = true;return _uniq_var_162;})()(seq, [ret, '=', seqRet]);
return [seq, '{seq}'];
};_uniq_var_163.__lix_func__ = true;return _uniq_var_163;})();
getAndOpSeq;
define([[[ret, call(getAndOpSeq)]], 'if'], true);
return ret;
};_uniq_var_164.__lix_func__ = true;return _uniq_var_164;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_169 = function (expr, define, tmpVar, ctx) {return foreach(expr[0], (function () {var _uniq_var_168 = function (i) {if (__eq__(i[1], 'else')) {
var elseSeq = flatten(i[0], define0, ctx);
elseSeq;
return define([[[tmpVar, elseSeq]], 'if'], true);

} else if (__eq__(i[1], 'if')) {
return define(_flattenIf(i, define, tmpVar, ctx));

} else {
var ifSeq = flatten(i[1], define0, ctx);
ifSeq;
(function () {var _uniq_var_167 = function (_uniq_var_165, _uniq_var_166) {
if (typeof _uniq_var_165.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_165.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_165.unshift.apply(_uniq_var_165, arguments);
} else if (_uniq_var_165.unshift !== undefined) {
if (_uniq_var_166 === undefined) {
return _uniq_var_165.unshift;
}
_uniq_var_165.unshift = _uniq_var_166;
}return _uniq_var_165;
};_uniq_var_167.__lix_func__ = true;return _uniq_var_167;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
var cond = flatten(i[0], define);
cond;
var cond = [tmpVar, 'and', cond];
cond;
return define([[[cond, ifSeq]], 'if'], true);

};
};_uniq_var_168.__lix_func__ = true;return _uniq_var_168;})());
};_uniq_var_169.__lix_func__ = true;return _uniq_var_169;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_171 = function (expr, define) {var tmpVar = define(['true', '{atomic}']);
tmpVar;
var retVar = define(['null', '{atomic}']);
retVar;
var ctx = (function () {var _uniq_var_170 = function (i) {return [retVar, '=', i];
};_uniq_var_170.__lix_func__ = true;return _uniq_var_170;})();
ctx;
_flattenIf(expr, define, tmpVar, ctx);
return retVar;
};_uniq_var_171.__lix_func__ = true;return _uniq_var_171;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_172 = function (expr, define) {(expr[2] = flatten(expr[2], define));
return expr;
};_uniq_var_172.__lix_func__ = true;return _uniq_var_172;})();
flattenAssign;
var flattenDef = flattenAssign;
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
var statementFlattenGenerator = (function () {var _uniq_var_199 = function () {var data = [];
data;
return (function () {var _uniq_var_198 = function (statement, tmpVarName) {if (__eq__(statement, undefined)) {
return data;

} else if (__eq__(tmpVarName, true)) {
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

} else if (__eq__(tmpVarName, undefined)) {
var varName = call(getUniqVarName);
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}'];
tmpRet;
(function () {var _uniq_var_194 = function (_uniq_var_192, _uniq_var_193) {
if (typeof _uniq_var_192.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_192.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_192.push.apply(_uniq_var_192, arguments);
} else if (_uniq_var_192.push !== undefined) {
if (_uniq_var_193 === undefined) {
return _uniq_var_192.push;
}
_uniq_var_192.push = _uniq_var_193;
}return _uniq_var_192;
};_uniq_var_194.__lix_func__ = true;return _uniq_var_194;})()(data, [tmpRet, ':=', statement]);
(function () {var _uniq_var_197 = function (_uniq_var_195, _uniq_var_196) {
if (typeof _uniq_var_195.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_195.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_195.push.apply(_uniq_var_195, arguments);
} else if (_uniq_var_195.push !== undefined) {
if (_uniq_var_196 === undefined) {
return _uniq_var_195.push;
}
_uniq_var_195.push = _uniq_var_196;
}return _uniq_var_195;
};_uniq_var_197.__lix_func__ = true;return _uniq_var_197;})()(data, [lixVar, ':=', tmpRet]);
return lixVar;

};
};_uniq_var_198.__lix_func__ = true;return _uniq_var_198;})();
};_uniq_var_199.__lix_func__ = true;return _uniq_var_199;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_208 = function (expr, define, seqCtx) {var ret = [];
ret;
var ctx = (function () {var _uniq_var_200 = function (stmt, index) {var ret = stmt;
ret;
if ((seqCtx && __eq__(parseInt(index), __sub__(expr[0].length, 1)))) {
var ret = seqCtx(stmt);
ret;

};
return ret;
};_uniq_var_200.__lix_func__ = true;return _uniq_var_200;})();
ctx;
foreach(expr[0], (function () {var _uniq_var_207 = function (item, index) {var exprDefine = call(statementFlattenGenerator);
exprDefine;
var itemRet = flatten(item, exprDefine);
itemRet;
(ret = (function () {var _uniq_var_203 = function (_uniq_var_201, _uniq_var_202) {
if (typeof _uniq_var_201.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_201.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_201.concat.apply(_uniq_var_201, arguments);
} else if (_uniq_var_201.concat !== undefined) {
if (_uniq_var_202 === undefined) {
return _uniq_var_201.concat;
}
_uniq_var_201.concat = _uniq_var_202;
}return _uniq_var_201;
};_uniq_var_203.__lix_func__ = true;return _uniq_var_203;})()(ret, call(exprDefine)));
var stmtRet = ctx(itemRet, index);
stmtRet;
if (((__ne__(stmtRet[1], '{atomic}') || __ne__(stmtRet[3], 'tmp')) || __ne__(stmtRet[1], '{empty}'))) {
return (function () {var _uniq_var_206 = function (_uniq_var_204, _uniq_var_205) {
if (typeof _uniq_var_204.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_204.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_204.push.apply(_uniq_var_204, arguments);
} else if (_uniq_var_204.push !== undefined) {
if (_uniq_var_205 === undefined) {
return _uniq_var_204.push;
}
_uniq_var_204.push = _uniq_var_205;
}return _uniq_var_204;
};_uniq_var_206.__lix_func__ = true;return _uniq_var_206;})()(ret, stmtRet);

};
};_uniq_var_207.__lix_func__ = true;return _uniq_var_207;})());
(expr[0] = ret);
return expr;
};_uniq_var_208.__lix_func__ = true;return _uniq_var_208;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_209 = function (expr, define) {var ret = flatten(expr[0], define);
ret;
return [ret, '{start}'];
};_uniq_var_209.__lix_func__ = true;return _uniq_var_209;})();
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
var flattenOp = (function () {var _uniq_var_210 = function (hint) {if (flattenOpTable[hint]) {
return flattenOpTable[hint];

} else {
return flattenExpr;

};
};_uniq_var_210.__lix_func__ = true;return _uniq_var_210;})();
flattenOp;
var flatten = (function () {var _uniq_var_211 = function (expr, define, ctx) {return flattenOp(expr[1])(expr, define, ctx);
};_uniq_var_211.__lix_func__ = true;return _uniq_var_211;})();
flatten;
var define0 = (function () {var _uniq_var_212 = function (i) {return i;
};_uniq_var_212.__lix_func__ = true;return _uniq_var_212;})();
define0;
var def0 = {
defineVar: (function () {var _uniq_var_213 = function (i) {;
};_uniq_var_213.__lix_func__ = true;return _uniq_var_213;})(),
appendExpr: (function () {var _uniq_var_214 = function (i) {;
};_uniq_var_214.__lix_func__ = true;return _uniq_var_214;})()
};
def0;
var seqFuncParamsName = {
cb: '_cb',
step: '_step',
cont: '_cont',
ret: '_ret'
};
seqFuncParamsName;
(exports.compile = (function () {var _uniq_var_221 = function (expr) {var libs = (function () {var _uniq_var_217 = function (_uniq_var_215, _uniq_var_216) {
if (typeof _uniq_var_215.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_215.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_215.join.apply(_uniq_var_215, arguments);
} else if (_uniq_var_215.join !== undefined) {
if (_uniq_var_216 === undefined) {
return _uniq_var_215.join;
}
_uniq_var_215.join = _uniq_var_216;
}return _uniq_var_215;
};_uniq_var_217.__lix_func__ = true;return _uniq_var_217;})()(map(env0, (function () {var _uniq_var_218 = function (i) {return i;
};_uniq_var_218.__lix_func__ = true;return _uniq_var_218;})()), "\n");
libs;
var code = generate(flatten(expr, (function () {var _uniq_var_219 = function (i) {;
};_uniq_var_219.__lix_func__ = true;return _uniq_var_219;})(), (function () {var _uniq_var_220 = function (i) {return i;
};_uniq_var_220.__lix_func__ = true;return _uniq_var_220;})()), call(env_new), ctx0, def0);
code;
return console.log(join([libs, "\n", code]));
};_uniq_var_221.__lix_func__ = true;return _uniq_var_221;})());

