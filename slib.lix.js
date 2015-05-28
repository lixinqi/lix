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
PREV;
var F = '1';
F;
F;
var STEP = '2';
STEP;
STEP;
var RET = '3';
RET;
RET;
var DEFER = '4';
DEFER;
DEFER;
var TRAP = '5';
TRAP;
TRAP;
var join = (function () {var _uniq_var_369 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_368 = function (_uniq_var_366, _uniq_var_367) {
if (typeof _uniq_var_366.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_366.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_366.join.apply(_uniq_var_366, arguments);
} else if (_uniq_var_366.join !== undefined) {
if (_uniq_var_367 === undefined) {
return _uniq_var_366.join;
}
_uniq_var_366.join = _uniq_var_367;
}return _uniq_var_366;
};_uniq_var_368.__lix_func__ = true;return _uniq_var_368;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_369.__lix_func__ = true;return _uniq_var_369;})();
join;
join;
var map = (function () {var _uniq_var_374 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_373 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_372 = function (_uniq_var_370, _uniq_var_371) {
if (typeof _uniq_var_370.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_370.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_370.push.apply(_uniq_var_370, arguments);
} else if (_uniq_var_370.push !== undefined) {
if (_uniq_var_371 === undefined) {
return _uniq_var_370.push;
}
_uniq_var_370.push = _uniq_var_371;
}return _uniq_var_370;
};_uniq_var_372.__lix_func__ = true;return _uniq_var_372;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_373.__lix_func__ = true;return _uniq_var_373;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_374.__lix_func__ = true;return _uniq_var_374;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_376 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_375 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_375.__lix_func__ = true;return _uniq_var_375;})();
};_uniq_var_376.__lix_func__ = true;return _uniq_var_376;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_377 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_377.__lix_func__ = true;return _uniq_var_377;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_382 = function (args, env, ctx) {var _uniq_var_9 = map(args, (function () {var _uniq_var_378 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
_uniq_var_8;
var varname = _uniq_var_8;
varname;
varname;
(env[varname] = true);
return varname;
};_uniq_var_378.__lix_func__ = true;return _uniq_var_378;})());
_uniq_var_9;
var _uniq_var_10 = (function () {var _uniq_var_381 = function (_uniq_var_379, _uniq_var_380) {
if (typeof _uniq_var_379.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_379.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_379.join.apply(_uniq_var_379, arguments);
} else if (_uniq_var_379.join !== undefined) {
if (_uniq_var_380 === undefined) {
return _uniq_var_379.join;
}
_uniq_var_379.join = _uniq_var_380;
}return _uniq_var_379;
};_uniq_var_381.__lix_func__ = true;return _uniq_var_381;})()(_uniq_var_9, ', ');
_uniq_var_10;
return _uniq_var_10;
};_uniq_var_382.__lix_func__ = true;return _uniq_var_382;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_383 = function (x) {return x;
};_uniq_var_383.__lix_func__ = true;return _uniq_var_383;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_390 = function (expr, env, ctx, def) {var _uniq_var_11 = call(getUniqVarName);
_uniq_var_11;
var funcName = _uniq_var_11;
funcName;
funcName;
var _uniq_var_12 = call(counterGenerator);
_uniq_var_12;
var getCount = _uniq_var_12;
getCount;
getCount;
var ctx = (function () {var _uniq_var_385 = function (current) {return (function () {var _uniq_var_384 = function (v, loop) {var next = current;
next;
next;
var _uniq_var_13 = true;
_uniq_var_13;
var _uniq_var_14 = null;
_uniq_var_14;
var _uniq_var_16 = __eq__(loop, undefined);
_uniq_var_16;
if ((_uniq_var_13 && _uniq_var_16)) {
(_uniq_var_13 = false);
var _uniq_var_15 = __add__(next, 1);
_uniq_var_15;
(_uniq_var_14 = (next = _uniq_var_15));

};
_uniq_var_14;
var _uniq_var_17 = join([seqFuncParamsName.step, ' = ', next, ';\n', 'lix(s, ', v, ')']);
_uniq_var_17;
return _uniq_var_17;
};_uniq_var_384.__lix_func__ = true;return _uniq_var_384;})();
};_uniq_var_385.__lix_func__ = true;return _uniq_var_385;})();
ctx;
ctx;
var _uniq_var_22 = map(expr[0], (function () {var _uniq_var_386 = function (item, index) {var _uniq_var_18 = call(getCount);
_uniq_var_18;
var current = _uniq_var_18;
current;
current;
var _uniq_var_19 = ctx(current);
_uniq_var_19;
var _uniq_var_20 = generate(item, env, _uniq_var_19, def);
_uniq_var_20;
var stmt = _uniq_var_20;
stmt;
stmt;
var _uniq_var_21 = join(['case ', current, ':\n', stmt]);
_uniq_var_21;
var stmt = _uniq_var_21;
stmt;
return stmt;
};_uniq_var_386.__lix_func__ = true;return _uniq_var_386;})());
_uniq_var_22;
var _uniq_var_23 = (function () {var _uniq_var_389 = function (_uniq_var_387, _uniq_var_388) {
if (typeof _uniq_var_387.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_387.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_387.join.apply(_uniq_var_387, arguments);
} else if (_uniq_var_387.join !== undefined) {
if (_uniq_var_388 === undefined) {
return _uniq_var_387.join;
}
_uniq_var_387.join = _uniq_var_388;
}return _uniq_var_387;
};_uniq_var_389.__lix_func__ = true;return _uniq_var_389;})()(_uniq_var_22, ";\n");
_uniq_var_23;
var body = _uniq_var_23;
body;
body;
var _uniq_var_24 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_24;
var _uniq_var_25 = def.appendExpr(_uniq_var_24);
_uniq_var_25;
_uniq_var_25;
return funcName;
};_uniq_var_390.__lix_func__ = true;return _uniq_var_390;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_391 = function (expr, env, ctx, def) {var _uniq_var_26 = generate(expr[0], env, ctx, def);
_uniq_var_26;
var _uniq_var_27 = generate(expr[2], env, ctx, def);
_uniq_var_27;
var _uniq_var_28 = join(['(', _uniq_var_26, " || ", _uniq_var_27, ')']);
_uniq_var_28;
return _uniq_var_28;
};_uniq_var_391.__lix_func__ = true;return _uniq_var_391;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_392 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " && ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_392.__lix_func__ = true;return _uniq_var_392;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_397 = function (expr, env, ctx, def) {var _uniq_var_44 = map(expr[0], (function () {var _uniq_var_393 = function (i) {var _uniq_var_32 = true;
_uniq_var_32;
var _uniq_var_33 = null;
_uniq_var_33;
var _uniq_var_37 = __eq__(i[1], 'else');
_uniq_var_37;
if ((_uniq_var_32 && _uniq_var_37)) {
(_uniq_var_32 = false);
var _uniq_var_34 = generate(i[0], env, ctx, def);
_uniq_var_34;
var _uniq_var_35 = ctx(_uniq_var_34);
_uniq_var_35;
var _uniq_var_36 = join(['{\n', _uniq_var_35, '\n}']);
_uniq_var_36;
(_uniq_var_33 = _uniq_var_36);

};
var _uniq_var_39 = __eq__(i[1], 'if');
_uniq_var_39;
if ((_uniq_var_32 && _uniq_var_39)) {
(_uniq_var_32 = false);
var _uniq_var_38 = generateIf(i, env, ctx, def);
_uniq_var_38;
(_uniq_var_33 = _uniq_var_38);

};
if (_uniq_var_32) {
var _uniq_var_40 = generate(i[0], env, ctx, def);
_uniq_var_40;
var _uniq_var_41 = generate(i[1], env, ctx, def);
_uniq_var_41;
var _uniq_var_42 = ctx(_uniq_var_41);
_uniq_var_42;
var _uniq_var_43 = join(['if (', _uniq_var_40, ') {\n', _uniq_var_42, '\n}']);
_uniq_var_43;
(_uniq_var_33 = _uniq_var_43);

};
return _uniq_var_33;
};_uniq_var_393.__lix_func__ = true;return _uniq_var_393;})());
_uniq_var_44;
var _uniq_var_45 = (function () {var _uniq_var_396 = function (_uniq_var_394, _uniq_var_395) {
if (typeof _uniq_var_394.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_394.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_394.join.apply(_uniq_var_394, arguments);
} else if (_uniq_var_394.join !== undefined) {
if (_uniq_var_395 === undefined) {
return _uniq_var_394.join;
}
_uniq_var_394.join = _uniq_var_395;
}return _uniq_var_394;
};_uniq_var_396.__lix_func__ = true;return _uniq_var_396;})()(_uniq_var_44, ' else ');
_uniq_var_45;
return _uniq_var_45;
};_uniq_var_397.__lix_func__ = true;return _uniq_var_397;})();
generateIf;
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
operateFuncName;
var generateAtomic = (function () {var _uniq_var_398 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
ret;
var _uniq_var_46 = true;
_uniq_var_46;
var _uniq_var_47 = null;
_uniq_var_47;
var _uniq_var_53 = __eq__(expr[2], '{var}');
_uniq_var_53;
if ((_uniq_var_46 && _uniq_var_53)) {
(_uniq_var_46 = false);
var _uniq_var_48 = true;
_uniq_var_48;
var _uniq_var_49 = null;
_uniq_var_49;
if ((_uniq_var_48 && operateFuncName[expr[0]])) {
(_uniq_var_48 = false);
var _uniq_var_50 = transformVarName(operateFuncName[expr[0]]);
_uniq_var_50;
(_uniq_var_49 = (ret = _uniq_var_50));

};
var _uniq_var_52 = __eq__(expr[3], undefined);
_uniq_var_52;
if ((_uniq_var_48 && _uniq_var_52)) {
(_uniq_var_48 = false);
var _uniq_var_51 = transformVarName(expr[0]);
_uniq_var_51;
(_uniq_var_49 = (ret = _uniq_var_51));

};
(_uniq_var_47 = _uniq_var_49);

};
_uniq_var_47;
return ret;
};_uniq_var_398.__lix_func__ = true;return _uniq_var_398;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_399 = function (expr, env, ctx, def) {var _uniq_var_54 = true;
_uniq_var_54;
var _uniq_var_55 = null;
_uniq_var_55;
var _uniq_var_57 = __eq__(expr[1], '{atomic}');
_uniq_var_57;
if ((_uniq_var_54 && _uniq_var_57)) {
(_uniq_var_54 = false);
var _uniq_var_56 = generateAtomic(expr, env, ctx, def);
_uniq_var_56;
(_uniq_var_55 = _uniq_var_56);

};
var _uniq_var_59 = __eq__(expr[1], '{index}');
_uniq_var_59;
if ((_uniq_var_54 && _uniq_var_59)) {
(_uniq_var_54 = false);
var _uniq_var_58 = generateAtomic(expr[0], env, ctx, def);
_uniq_var_58;
(_uniq_var_55 = _uniq_var_58);

};
return _uniq_var_55;
};_uniq_var_399.__lix_func__ = true;return _uniq_var_399;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_400 = function (expr, env, ctx, def) {var _uniq_var_60 = generatePropertyName(expr[0], env, ctx0, def);
_uniq_var_60;
var propertyName = _uniq_var_60;
propertyName;
propertyName;
var _uniq_var_61 = generate(expr[2], env, ctx, def);
_uniq_var_61;
var propertyValue = _uniq_var_61;
propertyValue;
propertyValue;
var _uniq_var_62 = join([propertyName, ": ", propertyValue]);
_uniq_var_62;
return _uniq_var_62;
};_uniq_var_400.__lix_func__ = true;return _uniq_var_400;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_405 = function (expr, env, ctx, def) {var _uniq_var_64 = map(expr[0], (function () {var _uniq_var_401 = function (i) {var _uniq_var_63 = generateProperty(i, env, ctx, def);
_uniq_var_63;
return _uniq_var_63;
};_uniq_var_401.__lix_func__ = true;return _uniq_var_401;})());
_uniq_var_64;
var _uniq_var_65 = (function () {var _uniq_var_404 = function (_uniq_var_402, _uniq_var_403) {
if (typeof _uniq_var_402.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_402.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_402.join.apply(_uniq_var_402, arguments);
} else if (_uniq_var_402.join !== undefined) {
if (_uniq_var_403 === undefined) {
return _uniq_var_402.join;
}
_uniq_var_402.join = _uniq_var_403;
}return _uniq_var_402;
};_uniq_var_404.__lix_func__ = true;return _uniq_var_404;})()(_uniq_var_64, ",\n");
_uniq_var_65;
var objectBody = _uniq_var_65;
objectBody;
objectBody;
var _uniq_var_66 = join(["{\n", objectBody, "\n}"]);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_405.__lix_func__ = true;return _uniq_var_405;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_406 = function (name) {var _uniq_var_67 = true;
_uniq_var_67;
var _uniq_var_68 = null;
_uniq_var_68;
var _uniq_var_70 = __ne__(name, 'exports');
_uniq_var_70;
var _uniq_var_71 = _uniq_var_70;
_uniq_var_71;
if (_uniq_var_71) {
var _uniq_var_72 = __ne__(name, 'undefined');
_uniq_var_72;
(_uniq_var_71 = _uniq_var_72);

};
var _uniq_var_73 = _uniq_var_71;
_uniq_var_73;
if (_uniq_var_73) {
var _uniq_var_74 = __ne__(name, 'null');
_uniq_var_74;
(_uniq_var_73 = _uniq_var_74);

};
var _uniq_var_75 = _uniq_var_73;
_uniq_var_75;
if (_uniq_var_75) {
var _uniq_var_76 = __ne__(name, 'true');
_uniq_var_76;
(_uniq_var_75 = _uniq_var_76);

};
var _uniq_var_77 = _uniq_var_75;
_uniq_var_77;
if (_uniq_var_77) {
var _uniq_var_78 = __ne__(name, 'false');
_uniq_var_78;
(_uniq_var_77 = _uniq_var_78);

};
if ((_uniq_var_67 && _uniq_var_77)) {
(_uniq_var_67 = false);
var _uniq_var_69 = __add__('L', name);
_uniq_var_69;
(_uniq_var_68 = (name = _uniq_var_69));

};
_uniq_var_68;
return name;
};_uniq_var_406.__lix_func__ = true;return _uniq_var_406;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_407 = function (expr) {var _uniq_var_79 = true;
_uniq_var_79;
var _uniq_var_80 = null;
_uniq_var_80;
var _uniq_var_82 = __eq__(expr[1], '{atomic}');
_uniq_var_82;
if ((_uniq_var_79 && _uniq_var_82)) {
(_uniq_var_79 = false);
var _uniq_var_81 = generateAtomic(expr, {

}, ctx0);
_uniq_var_81;
(_uniq_var_80 = _uniq_var_81);

};
var _uniq_var_84 = __eq__(expr[1], '{.}');
_uniq_var_84;
if ((_uniq_var_79 && _uniq_var_84)) {
(_uniq_var_79 = false);
var _uniq_var_83 = getVarName(expr[0]);
_uniq_var_83;
(_uniq_var_80 = _uniq_var_83);

};
return _uniq_var_80;
};_uniq_var_407.__lix_func__ = true;return _uniq_var_407;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_408 = function (expr, env, ctx, def) {var _uniq_var_85 = true;
_uniq_var_85;
var _uniq_var_86 = null;
_uniq_var_86;
var _uniq_var_89 = __eq__(expr[2], '{dot}');
_uniq_var_89;
if ((_uniq_var_85 && _uniq_var_89)) {
(_uniq_var_85 = false);
var _uniq_var_87 = generateAtomic(expr, env, ctx0, def);
_uniq_var_87;
var _uniq_var_88 = __add__('.', _uniq_var_87);
_uniq_var_88;
(_uniq_var_86 = _uniq_var_88);

};
var _uniq_var_92 = __eq__(expr[2], '{index}');
_uniq_var_92;
if ((_uniq_var_85 && _uniq_var_92)) {
(_uniq_var_85 = false);
var _uniq_var_90 = generate(expr[0], env, ctx, def);
_uniq_var_90;
var _uniq_var_91 = join(['[', _uniq_var_90, ']']);
_uniq_var_91;
(_uniq_var_86 = _uniq_var_91);

};
return _uniq_var_86;
};_uniq_var_408.__lix_func__ = true;return _uniq_var_408;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_409 = function (expr, env, ctx, def) {var _uniq_var_93 = true;
_uniq_var_93;
var _uniq_var_94 = null;
_uniq_var_94;
var _uniq_var_96 = __eq__(expr[1], '{atomic}');
_uniq_var_96;
if ((_uniq_var_93 && _uniq_var_96)) {
(_uniq_var_93 = false);
var _uniq_var_95 = generateAtomic(expr, env, ctx0, def);
_uniq_var_95;
(_uniq_var_94 = _uniq_var_95);

};
var _uniq_var_100 = __eq__(expr[1], '{.}');
_uniq_var_100;
if ((_uniq_var_93 && _uniq_var_100)) {
(_uniq_var_93 = false);
var _uniq_var_97 = generateFieldAccess(expr[0], env, ctx, def);
_uniq_var_97;
var obj = _uniq_var_97;
obj;
obj;
var _uniq_var_98 = generateField(expr[2], env, ctx, def);
_uniq_var_98;
var field = _uniq_var_98;
field;
field;
var _uniq_var_99 = __add__(obj, field);
_uniq_var_99;
(_uniq_var_94 = _uniq_var_99);

};
return _uniq_var_94;
};_uniq_var_409.__lix_func__ = true;return _uniq_var_409;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_414 = function (expr, env, ctx, def) {var _uniq_var_102 = map(expr[0], (function () {var _uniq_var_410 = function (i) {var _uniq_var_101 = generate(i, env, ctx, def);
_uniq_var_101;
return _uniq_var_101;
};_uniq_var_410.__lix_func__ = true;return _uniq_var_410;})());
_uniq_var_102;
var _uniq_var_103 = (function () {var _uniq_var_413 = function (_uniq_var_411, _uniq_var_412) {
if (typeof _uniq_var_411.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_411.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_411.join.apply(_uniq_var_411, arguments);
} else if (_uniq_var_411.join !== undefined) {
if (_uniq_var_412 === undefined) {
return _uniq_var_411.join;
}
_uniq_var_411.join = _uniq_var_412;
}return _uniq_var_411;
};_uniq_var_413.__lix_func__ = true;return _uniq_var_413;})()(_uniq_var_102, ', ');
_uniq_var_103;
var arrayBody = _uniq_var_103;
arrayBody;
arrayBody;
var _uniq_var_104 = join(['[', arrayBody, ']']);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_414.__lix_func__ = true;return _uniq_var_414;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_415 = function (expr, env, ctx) {var _uniq_var_105 = call(getUniqVarName);
_uniq_var_105;
var localVarName = _uniq_var_105;
localVarName;
localVarName;
var _uniq_var_106 = call(getUniqVarName);
_uniq_var_106;
var localValueName = _uniq_var_106;
localValueName;
localValueName;
var _uniq_var_107 = generateField(expr[0], env, ctx0);
_uniq_var_107;
var methodName = _uniq_var_107;
methodName;
methodName;
var _uniq_var_108 = __add__(localVarName, methodName);
_uniq_var_108;
var method = _uniq_var_108;
method;
method;
var _uniq_var_109 = call(getUniqVarName);
_uniq_var_109;
var tmpVar = _uniq_var_109;
tmpVar;
tmpVar;
var _uniq_var_110 = join(["(function (", localVarName, ", ", localValueName, ") {\n", "if (", localVarName, " == undefined || ", localVarName, " == null ) {\n", "return function () {\n", "return ", localVarName, ";\n", "}\n", "}\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else {\n", "if (arguments.length > 1) {\n", "return function () {\n", method, " = ", localValueName, ";\n", "return ", localVarName, ";\n", "}\n", "}\n", "return function () {\n", "return ", method, ';\n', "}\n", "}", "})"]);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_415.__lix_func__ = true;return _uniq_var_415;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_416 = function (expr, env, ctx, def) {var _uniq_var_111 = generate(expr[0], env, ctx, def);
_uniq_var_111;
var _uniq_var_112 = generate(expr[2], env, ctx, def);
_uniq_var_112;
var _uniq_var_113 = ctx(_uniq_var_112, true);
_uniq_var_113;
var _uniq_var_114 = join(['while (', _uniq_var_111, ') {\n', _uniq_var_113, "\n}"]);
_uniq_var_114;
return _uniq_var_114;
};_uniq_var_416.__lix_func__ = true;return _uniq_var_416;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_417 = function (expr, env, ctx) {return 'break';
};_uniq_var_417.__lix_func__ = true;return _uniq_var_417;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_418 = function (expr, env, ctx, def) {return "";
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_419 = function (expr, env, ctx, def) {var _uniq_var_115 = getVarName(expr[0]);
_uniq_var_115;
var varname = _uniq_var_115;
varname;
varname;
var _uniq_var_116 = def.defineVar(varname);
_uniq_var_116;
_uniq_var_116;
var _uniq_var_117 = generate(expr[2], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = join([varname, ' = ', _uniq_var_117]);
_uniq_var_118;
var ret = _uniq_var_118;
ret;
ret;
(env[varname] = true);
return ret;
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_420 = function (expr, env, ctx, def) {var _uniq_var_119 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_119;
return _uniq_var_119;
};_uniq_var_420.__lix_func__ = true;return _uniq_var_420;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_424 = function (expr, env, ctx, def) {var _uniq_var_120 = true;
_uniq_var_120;
var _uniq_var_121 = null;
_uniq_var_121;
var _uniq_var_129 = __eq__(expr[0][1], '{atomic}');
_uniq_var_129;
if ((_uniq_var_120 && _uniq_var_129)) {
(_uniq_var_120 = false);
var _uniq_var_122 = getVarName(expr[0]);
_uniq_var_122;
var varname = _uniq_var_122;
varname;
varname;
var _uniq_var_123 = true;
_uniq_var_123;
var _uniq_var_124 = null;
_uniq_var_124;
var _uniq_var_126 = __eq__(env[varname], undefined);
_uniq_var_126;
var _uniq_var_127 = _uniq_var_126;
_uniq_var_127;
if (_uniq_var_127) {
var _uniq_var_128 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_128;
(_uniq_var_127 = _uniq_var_128);

};
if ((_uniq_var_123 && _uniq_var_127)) {
(_uniq_var_123 = false);
var _uniq_var_125 = generate([expr[0], '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_125;
(_uniq_var_124 = _uniq_var_125);

};
(_uniq_var_121 = _uniq_var_124);

};
if (_uniq_var_120) {
var _uniq_var_130 = generate(expr[0], env, ctx, def);
_uniq_var_130;
var varname = _uniq_var_130;
varname;
(_uniq_var_121 = varname);

};
_uniq_var_121;
var _uniq_var_131 = (function () {var _uniq_var_423 = function (_uniq_var_421, _uniq_var_422) {
if (typeof _uniq_var_421.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_421.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_421.join.apply(_uniq_var_421, arguments);
} else if (_uniq_var_421.join !== undefined) {
if (_uniq_var_422 === undefined) {
return _uniq_var_421.join;
}
_uniq_var_421.join = _uniq_var_422;
}return _uniq_var_421;
};_uniq_var_423.__lix_func__ = true;return _uniq_var_423;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_131;
return _uniq_var_131;
};_uniq_var_424.__lix_func__ = true;return _uniq_var_424;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_425 = function (expr, env, ctx, def) {var _uniq_var_132 = getVarName(expr[0]);
_uniq_var_132;
var varname = _uniq_var_132;
varname;
varname;
var ret = [];
ret;
ret;
var _uniq_var_133 = true;
_uniq_var_133;
var _uniq_var_134 = null;
_uniq_var_134;
var _uniq_var_136 = __eq__(env[varname], undefined);
_uniq_var_136;
var _uniq_var_137 = _uniq_var_136;
_uniq_var_137;
if (_uniq_var_137) {
var _uniq_var_138 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_138;
(_uniq_var_137 = _uniq_var_138);

};
if ((_uniq_var_133 && _uniq_var_137)) {
(_uniq_var_133 = false);
var _uniq_var_135 = generateDef(expr, env, ctx, def);
_uniq_var_135;
(_uniq_var_134 = (ret = _uniq_var_135));

};
if (_uniq_var_133) {
var _uniq_var_139 = generate(expr[0], env, ctx0, def);
_uniq_var_139;
var varname = _uniq_var_139;
varname;
varname;
var _uniq_var_140 = generate(expr[2], env, ctx, def);
_uniq_var_140;
var value = _uniq_var_140;
value;
value;
var _uniq_var_141 = join([varname, " = ", value]);
_uniq_var_141;
(_uniq_var_134 = (ret = _uniq_var_141));

};
_uniq_var_134;
return ret;
};_uniq_var_425.__lix_func__ = true;return _uniq_var_425;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_429 = function (expr, env, ctx, def) {var _uniq_var_142 = env_new(env);
_uniq_var_142;
var funcEnv = _uniq_var_142;
funcEnv;
funcEnv;
var _uniq_var_143 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_143;
var args = _uniq_var_143;
args;
args;
var _uniq_var_144 = call(getUniqVarName);
_uniq_var_144;
var tmpVar = _uniq_var_144;
tmpVar;
tmpVar;
var _uniq_var_145 = call(GenerateDefNew);
_uniq_var_145;
var def = _uniq_var_145;
def;
def;
var _uniq_var_146 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_146;
var body = _uniq_var_146;
body;
body;
var _uniq_var_147 = transformVarName('arguments');
_uniq_var_147;
var _uniq_var_148 = call(def.defineVar);
_uniq_var_148;
var _uniq_var_149 = call(def.appendExpr);
_uniq_var_149;
var _uniq_var_150 = (function () {var _uniq_var_428 = function (_uniq_var_426, _uniq_var_427) {
if (typeof _uniq_var_426.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_426.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_426.join.apply(_uniq_var_426, arguments);
} else if (_uniq_var_426.join !== undefined) {
if (_uniq_var_427 === undefined) {
return _uniq_var_426.join;
}
_uniq_var_426.join = _uniq_var_427;
}return _uniq_var_426;
};_uniq_var_428.__lix_func__ = true;return _uniq_var_428;})()(['(function (', args, ') {\n', 'var ', _uniq_var_147, ' = arguments\n', _uniq_var_148, ";\n", _uniq_var_149, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_150;
return _uniq_var_150;
};_uniq_var_429.__lix_func__ = true;return _uniq_var_429;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_430 = function (expr, env, ctx, def) {(expr[1] = ":=");
var _uniq_var_151 = generate(expr, env, ctx, def);
_uniq_var_151;
return _uniq_var_151;
};_uniq_var_430.__lix_func__ = true;return _uniq_var_430;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_432 = function (expr, env, ctx, def) {var _uniq_var_152 = generate(expr[1], env, ctx0, def);
_uniq_var_152;
var func = _uniq_var_152;
func;
func;
var _uniq_var_153 = generate(expr[0], env, ctx0, def);
_uniq_var_153;
var args = _uniq_var_153;
args;
args;
var _uniq_var_159 = foreach(expr, (function () {var _uniq_var_431 = function (item, index) {var _uniq_var_154 = true;
_uniq_var_154;
var _uniq_var_155 = null;
_uniq_var_155;
var _uniq_var_158 = __gt__(index, 1);
_uniq_var_158;
if ((_uniq_var_154 && _uniq_var_158)) {
(_uniq_var_154 = false);
var _uniq_var_156 = generate(item, env, ctx0, def);
_uniq_var_156;
var _uniq_var_157 = join([args, ', ', _uniq_var_156]);
_uniq_var_157;
(_uniq_var_155 = (args = _uniq_var_157));

};
return _uniq_var_155;
};_uniq_var_431.__lix_func__ = true;return _uniq_var_431;})());
_uniq_var_159;
_uniq_var_159;
var _uniq_var_160 = join([func, '(', args, ')']);
_uniq_var_160;
var _uniq_var_161 = ctx(_uniq_var_160);
_uniq_var_161;
return _uniq_var_161;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_450 = function () {var vars = {

};
vars;
vars;
var fns = {

};
fns;
fns;
var funcs = [];
funcs;
funcs;
return {
generateFn: (function () {var _uniq_var_433 = function () {;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})(),
defineFn: (function () {var _uniq_var_437 = function (name, func, condition) {var _uniq_var_162 = true;
_uniq_var_162;
var _uniq_var_163 = null;
_uniq_var_163;
var _uniq_var_164 = __eq__(fns[name], undefined);
_uniq_var_164;
if ((_uniq_var_162 && _uniq_var_164)) {
(_uniq_var_162 = false);
(_uniq_var_163 = (fns[name] = []));

};
_uniq_var_163;
var _uniq_var_165 = (function () {var _uniq_var_436 = function (_uniq_var_434, _uniq_var_435) {
if (typeof _uniq_var_434.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_434.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_434.push.apply(_uniq_var_434, arguments);
} else if (_uniq_var_434.push !== undefined) {
if (_uniq_var_435 === undefined) {
return _uniq_var_434.push;
}
_uniq_var_434.push = _uniq_var_435;
}return _uniq_var_434;
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})()(fns[name], {
func: func,
condition: condition
});
_uniq_var_165;
return _uniq_var_165;
};_uniq_var_437.__lix_func__ = true;return _uniq_var_437;})(),
defineVar: (function () {var _uniq_var_442 = function (v) {var _uniq_var_166 = true;
_uniq_var_166;
var _uniq_var_167 = null;
_uniq_var_167;
if ((_uniq_var_166 && v)) {
(_uniq_var_166 = false);
(_uniq_var_167 = (vars[v] = v));

};
if (_uniq_var_166) {
var _uniq_var_168 = map(vars, (function () {var _uniq_var_438 = function (i) {return i;
};_uniq_var_438.__lix_func__ = true;return _uniq_var_438;})());
_uniq_var_168;
var vecs = _uniq_var_168;
vecs;
vecs;
var _uniq_var_169 = true;
_uniq_var_169;
var _uniq_var_170 = null;
_uniq_var_170;
var _uniq_var_173 = __gt__(vecs.length, 0);
_uniq_var_173;
if ((_uniq_var_169 && _uniq_var_173)) {
(_uniq_var_169 = false);
var _uniq_var_171 = (function () {var _uniq_var_441 = function (_uniq_var_439, _uniq_var_440) {
if (typeof _uniq_var_439.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_439.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_439.join.apply(_uniq_var_439, arguments);
} else if (_uniq_var_439.join !== undefined) {
if (_uniq_var_440 === undefined) {
return _uniq_var_439.join;
}
_uniq_var_439.join = _uniq_var_440;
}return _uniq_var_439;
};_uniq_var_441.__lix_func__ = true;return _uniq_var_441;})()(vecs, ', ');
_uniq_var_171;
var _uniq_var_172 = __add__('var ', _uniq_var_171);
_uniq_var_172;
(_uniq_var_170 = _uniq_var_172);

};
if (_uniq_var_169) {
(_uniq_var_170 = '');

};
(_uniq_var_167 = _uniq_var_170);

};
return _uniq_var_167;
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})(),
appendExpr: (function () {var _uniq_var_449 = function (v) {var _uniq_var_174 = true;
_uniq_var_174;
var _uniq_var_175 = null;
_uniq_var_175;
if ((_uniq_var_174 && v)) {
(_uniq_var_174 = false);
var _uniq_var_176 = (function () {var _uniq_var_445 = function (_uniq_var_443, _uniq_var_444) {
if (typeof _uniq_var_443.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_443.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_443.push.apply(_uniq_var_443, arguments);
} else if (_uniq_var_443.push !== undefined) {
if (_uniq_var_444 === undefined) {
return _uniq_var_443.push;
}
_uniq_var_443.push = _uniq_var_444;
}return _uniq_var_443;
};_uniq_var_445.__lix_func__ = true;return _uniq_var_445;})()(funcs, v);
_uniq_var_176;
(_uniq_var_175 = _uniq_var_176);

};
if (_uniq_var_174) {
var _uniq_var_177 = (function () {var _uniq_var_448 = function (_uniq_var_446, _uniq_var_447) {
if (typeof _uniq_var_446.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_446.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_446.join.apply(_uniq_var_446, arguments);
} else if (_uniq_var_446.join !== undefined) {
if (_uniq_var_447 === undefined) {
return _uniq_var_446.join;
}
_uniq_var_446.join = _uniq_var_447;
}return _uniq_var_446;
};_uniq_var_448.__lix_func__ = true;return _uniq_var_448;})()(funcs, ';\n');
_uniq_var_177;
(_uniq_var_175 = _uniq_var_177);

};
return _uniq_var_175;
};_uniq_var_449.__lix_func__ = true;return _uniq_var_449;})()
};
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_451 = function (expr, env, ctx, def) {var _uniq_var_178 = call(GenerateDefNew);
_uniq_var_178;
var def = _uniq_var_178;
def;
def;
var _uniq_var_179 = generate(expr[0], env, ctx, def);
_uniq_var_179;
var body = _uniq_var_179;
body;
body;
var _uniq_var_180 = join(['module.exports = ', body, '\n']);
_uniq_var_180;
var body = _uniq_var_180;
body;
body;
var _uniq_var_181 = call(def.defineVar);
_uniq_var_181;
var _uniq_var_182 = call(def.appendExpr);
_uniq_var_182;
var _uniq_var_183 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_181, ";\n", _uniq_var_182, ";\n", body]);
_uniq_var_183;
return _uniq_var_183;
};_uniq_var_451.__lix_func__ = true;return _uniq_var_451;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_452 = function (expr, env, ctx, def) {var _uniq_var_184 = generate(expr[0], env, ctx, def);
_uniq_var_184;
return _uniq_var_184;
};_uniq_var_452.__lix_func__ = true;return _uniq_var_452;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_453 = function (expr, env, ctx, def) {var _uniq_var_185 = join(['"', expr[0], '"']);
_uniq_var_185;
return _uniq_var_185;
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_454 = function (expr, env, ctx, def) {var _uniq_var_186 = generate(expr[0], env, ctx, def);
_uniq_var_186;
var _uniq_var_187 = join(['("', expr[2], '" + ', _uniq_var_186, ')']);
_uniq_var_187;
return _uniq_var_187;
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_459 = function (expr, env, ctx, def) {var _uniq_var_189 = map(expr[0], (function () {var _uniq_var_455 = function (i) {var _uniq_var_188 = generate(i, env, ctx, def);
_uniq_var_188;
return _uniq_var_188;
};_uniq_var_455.__lix_func__ = true;return _uniq_var_455;})());
_uniq_var_189;
var _uniq_var_190 = (function () {var _uniq_var_458 = function (_uniq_var_456, _uniq_var_457) {
if (typeof _uniq_var_456.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_456.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_456.join.apply(_uniq_var_456, arguments);
} else if (_uniq_var_456.join !== undefined) {
if (_uniq_var_457 === undefined) {
return _uniq_var_456.join;
}
_uniq_var_456.join = _uniq_var_457;
}return _uniq_var_456;
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})()(_uniq_var_189, ',');
_uniq_var_190;
var path = _uniq_var_190;
path;
path;
var _uniq_var_191 = join(['[', path, '].join("/")']);
_uniq_var_191;
return _uniq_var_191;
};_uniq_var_459.__lix_func__ = true;return _uniq_var_459;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_463 = function (expr, env, ctx, def) {var _uniq_var_192 = (function () {var _uniq_var_462 = function (_uniq_var_460, _uniq_var_461) {
if (typeof _uniq_var_460.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_460.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_460.join.apply(_uniq_var_460, arguments);
} else if (_uniq_var_460.join !== undefined) {
if (_uniq_var_461 === undefined) {
return _uniq_var_460.join;
}
_uniq_var_460.join = _uniq_var_461;
}return _uniq_var_460;
};_uniq_var_462.__lix_func__ = true;return _uniq_var_462;})()(['"', expr[0], '"'], '');
_uniq_var_192;
var name = [_uniq_var_192, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})();
generateModule;
generateModule;
var generateOpTable = {
'{start}': generateStart,
'{seq}': generateSeq,
'{mono}': generateMono,
'{atomic}': generateAtomic,
'{.}': generateFieldAccess,
'{module}': generateModule,
'{func}': generateFunc,
'{fn}': generateFn,
'{ampersand}': generateAmpersand,
'{asterisk}': generateAsterisk,
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
generateOpTable;
var generateOp = (function () {var _uniq_var_464 = function (hint) {var _uniq_var_193 = true;
_uniq_var_193;
var _uniq_var_194 = null;
_uniq_var_194;
if ((_uniq_var_193 && generateOpTable[hint])) {
(_uniq_var_193 = false);
(_uniq_var_194 = generateOpTable[hint]);

};
if (_uniq_var_193) {
(_uniq_var_194 = generateExpr);

};
return _uniq_var_194;
};_uniq_var_464.__lix_func__ = true;return _uniq_var_464;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_465 = function (expr, env, ctx, def) {var _uniq_var_195 = generateOp(expr[1]);
_uniq_var_195;
var _uniq_var_196 = _uniq_var_195(expr, env, ctx, def);
_uniq_var_196;
return _uniq_var_196;
};_uniq_var_465.__lix_func__ = true;return _uniq_var_465;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_467 = function (env) {var _uniq_var_197 = env;
_uniq_var_197;
if (not(_uniq_var_197)) {
(_uniq_var_197 = env0);

};
(env = _uniq_var_197);
var Env = (function () {var _uniq_var_466 = function () {;
};_uniq_var_466.__lix_func__ = true;return _uniq_var_466;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_198 = _instance_(Env);
_uniq_var_198;
return _uniq_var_198;
};_uniq_var_467.__lix_func__ = true;return _uniq_var_467;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_469 = function (expr, define) {var _uniq_var_200 = map(expr, (function () {var _uniq_var_468 = function (item) {var _uniq_var_199 = flatten(item, define);
_uniq_var_199;
return _uniq_var_199;
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})());
_uniq_var_200;
var _uniq_var_201 = define(_uniq_var_200);
_uniq_var_201;
return _uniq_var_201;
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_470 = function (expr, define) {return expr;
};_uniq_var_470.__lix_func__ = true;return _uniq_var_470;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_475 = function (expr, define) {var _uniq_var_202 = call(statementFlattenGenerator);
_uniq_var_202;
var whileDefine = _uniq_var_202;
whileDefine;
whileDefine;
var _uniq_var_203 = flatten(expr[0], whileDefine);
_uniq_var_203;
(expr[0] = _uniq_var_203);
var _uniq_var_204 = flatten(expr[2], define0);
_uniq_var_204;
(expr[2] = _uniq_var_204);
var _uniq_var_205 = call(whileDefine);
_uniq_var_205;
var _uniq_var_206 = (function () {var _uniq_var_473 = function (_uniq_var_471, _uniq_var_472) {
if (typeof _uniq_var_471.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_471.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_471.concat.apply(_uniq_var_471, arguments);
} else if (_uniq_var_471.concat !== undefined) {
if (_uniq_var_472 === undefined) {
return _uniq_var_471.concat;
}
_uniq_var_471.concat = _uniq_var_472;
}return _uniq_var_471;
};_uniq_var_473.__lix_func__ = true;return _uniq_var_473;})()(expr[2][0], _uniq_var_205);
_uniq_var_206;
(expr[2][0] = _uniq_var_206);
var _uniq_var_207 = call(whileDefine);
_uniq_var_207;
var _uniq_var_209 = foreach(_uniq_var_207, (function () {var _uniq_var_474 = function (i) {var _uniq_var_208 = define(i, true);
_uniq_var_208;
return _uniq_var_208;
};_uniq_var_474.__lix_func__ = true;return _uniq_var_474;})());
_uniq_var_209;
_uniq_var_209;
var _uniq_var_210 = define(expr, true);
_uniq_var_210;
_uniq_var_210;
return ['', '{empty}'];
};_uniq_var_475.__lix_func__ = true;return _uniq_var_475;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_480 = function (expr, define) {var _uniq_var_211 = flatten(expr[0], define);
_uniq_var_211;
var ret = _uniq_var_211;
ret;
ret;
var _uniq_var_212 = true;
_uniq_var_212;
var _uniq_var_213 = null;
_uniq_var_213;
var _uniq_var_215 = __ne__(ret[2], 'var');
_uniq_var_215;
if ((_uniq_var_212 && _uniq_var_215)) {
(_uniq_var_212 = false);
var _uniq_var_214 = define(ret);
_uniq_var_214;
var ret = _uniq_var_214;
ret;
(_uniq_var_213 = ret);

};
_uniq_var_213;
var getAndOpSeq = (function () {var _uniq_var_479 = function () {var _uniq_var_216 = call(statementFlattenGenerator);
_uniq_var_216;
var AndDefine = _uniq_var_216;
AndDefine;
AndDefine;
var _uniq_var_217 = flatten(expr[2], AndDefine);
_uniq_var_217;
var seqRet = _uniq_var_217;
seqRet;
seqRet;
var _uniq_var_218 = call(AndDefine);
_uniq_var_218;
var seq = _uniq_var_218;
seq;
seq;
var _uniq_var_219 = (function () {var _uniq_var_478 = function (_uniq_var_476, _uniq_var_477) {
if (typeof _uniq_var_476.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_476.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_476.push.apply(_uniq_var_476, arguments);
} else if (_uniq_var_476.push !== undefined) {
if (_uniq_var_477 === undefined) {
return _uniq_var_476.push;
}
_uniq_var_476.push = _uniq_var_477;
}return _uniq_var_476;
};_uniq_var_478.__lix_func__ = true;return _uniq_var_478;})()(seq, [ret, '=', seqRet]);
_uniq_var_219;
_uniq_var_219;
return [seq, '{seq}'];
};_uniq_var_479.__lix_func__ = true;return _uniq_var_479;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_220 = call(getAndOpSeq);
_uniq_var_220;
var _uniq_var_221 = define([[[ret, [[], '{empty}']], [_uniq_var_220, 'else']], 'if'], true);
_uniq_var_221;
_uniq_var_221;
return ret;
};_uniq_var_480.__lix_func__ = true;return _uniq_var_480;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_485 = function (expr, define) {var _uniq_var_222 = flatten(expr[0], define);
_uniq_var_222;
var ret = _uniq_var_222;
ret;
ret;
var _uniq_var_223 = true;
_uniq_var_223;
var _uniq_var_224 = null;
_uniq_var_224;
var _uniq_var_226 = __ne__(ret[2], 'var');
_uniq_var_226;
if ((_uniq_var_223 && _uniq_var_226)) {
(_uniq_var_223 = false);
var _uniq_var_225 = define(ret);
_uniq_var_225;
var ret = _uniq_var_225;
ret;
(_uniq_var_224 = ret);

};
_uniq_var_224;
var getAndOpSeq = (function () {var _uniq_var_484 = function () {var _uniq_var_227 = call(statementFlattenGenerator);
_uniq_var_227;
var AndDefine = _uniq_var_227;
AndDefine;
AndDefine;
var _uniq_var_228 = flatten(expr[2], AndDefine);
_uniq_var_228;
var seqRet = _uniq_var_228;
seqRet;
seqRet;
var _uniq_var_229 = call(AndDefine);
_uniq_var_229;
var seq = _uniq_var_229;
seq;
seq;
var _uniq_var_230 = (function () {var _uniq_var_483 = function (_uniq_var_481, _uniq_var_482) {
if (typeof _uniq_var_481.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_481.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_481.push.apply(_uniq_var_481, arguments);
} else if (_uniq_var_481.push !== undefined) {
if (_uniq_var_482 === undefined) {
return _uniq_var_481.push;
}
_uniq_var_481.push = _uniq_var_482;
}return _uniq_var_481;
};_uniq_var_483.__lix_func__ = true;return _uniq_var_483;})()(seq, [ret, '=', seqRet]);
_uniq_var_230;
_uniq_var_230;
return [seq, '{seq}'];
};_uniq_var_484.__lix_func__ = true;return _uniq_var_484;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_231 = call(getAndOpSeq);
_uniq_var_231;
var _uniq_var_232 = define([[[ret, _uniq_var_231]], 'if'], true);
_uniq_var_232;
_uniq_var_232;
return ret;
};_uniq_var_485.__lix_func__ = true;return _uniq_var_485;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_490 = function (expr, define, tmpVar, ctx) {var _uniq_var_245 = foreach(expr[0], (function () {var _uniq_var_489 = function (i) {var _uniq_var_233 = true;
_uniq_var_233;
var _uniq_var_234 = null;
_uniq_var_234;
var _uniq_var_237 = __eq__(i[1], 'else');
_uniq_var_237;
if ((_uniq_var_233 && _uniq_var_237)) {
(_uniq_var_233 = false);
var _uniq_var_235 = flatten(i[0], define0, ctx);
_uniq_var_235;
var elseSeq = _uniq_var_235;
elseSeq;
elseSeq;
var _uniq_var_236 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_236;
(_uniq_var_234 = _uniq_var_236);

};
var _uniq_var_240 = __eq__(i[1], 'if');
_uniq_var_240;
if ((_uniq_var_233 && _uniq_var_240)) {
(_uniq_var_233 = false);
var _uniq_var_238 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_238;
var _uniq_var_239 = define(_uniq_var_238);
_uniq_var_239;
(_uniq_var_234 = _uniq_var_239);

};
if (_uniq_var_233) {
var _uniq_var_241 = flatten(i[1], define0, ctx);
_uniq_var_241;
var ifSeq = _uniq_var_241;
ifSeq;
ifSeq;
var _uniq_var_242 = (function () {var _uniq_var_488 = function (_uniq_var_486, _uniq_var_487) {
if (typeof _uniq_var_486.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_486.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_486.unshift.apply(_uniq_var_486, arguments);
} else if (_uniq_var_486.unshift !== undefined) {
if (_uniq_var_487 === undefined) {
return _uniq_var_486.unshift;
}
_uniq_var_486.unshift = _uniq_var_487;
}return _uniq_var_486;
};_uniq_var_488.__lix_func__ = true;return _uniq_var_488;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_242;
_uniq_var_242;
var _uniq_var_243 = flatten(i[0], define);
_uniq_var_243;
var cond = _uniq_var_243;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_244 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_244;
(_uniq_var_234 = _uniq_var_244);

};
return _uniq_var_234;
};_uniq_var_489.__lix_func__ = true;return _uniq_var_489;})());
_uniq_var_245;
return _uniq_var_245;
};_uniq_var_490.__lix_func__ = true;return _uniq_var_490;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_491 = function (expr, define) {var _uniq_var_246 = define(['true', '{atomic}'], 'new');
_uniq_var_246;
var tmpVar = _uniq_var_246;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_247 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_247;
_uniq_var_247;
return retVar;
};_uniq_var_491.__lix_func__ = true;return _uniq_var_491;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_492 = function (expr, define) {var _uniq_var_248 = flatten(expr[2], define);
_uniq_var_248;
(expr[2] = _uniq_var_248);
return expr;
};_uniq_var_492.__lix_func__ = true;return _uniq_var_492;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_496 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_249 = true;
_uniq_var_249;
var _uniq_var_250 = null;
_uniq_var_250;
var _uniq_var_254 = __gt__(expr.length, 3);
_uniq_var_254;
if ((_uniq_var_249 && _uniq_var_254)) {
(_uniq_var_249 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_251 = __lt__(i, expr.length);
_uniq_var_251;
while (_uniq_var_251) {
var _uniq_var_252 = (function () {var _uniq_var_495 = function (_uniq_var_493, _uniq_var_494) {
if (typeof _uniq_var_493.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_493.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_493.push.apply(_uniq_var_493, arguments);
} else if (_uniq_var_493.push !== undefined) {
if (_uniq_var_494 === undefined) {
return _uniq_var_493.push;
}
_uniq_var_493.push = _uniq_var_494;
}return _uniq_var_493;
};_uniq_var_495.__lix_func__ = true;return _uniq_var_495;})()(partialExpr, expr[i]);
_uniq_var_252;
_uniq_var_252;
var _uniq_var_253 = __add__(i, 1);
_uniq_var_253;
(i = _uniq_var_253);
var _uniq_var_251 = __lt__(i, expr.length);
_uniq_var_251;
}
null;
(_uniq_var_250 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_250;
var _uniq_var_255 = flattenExpr(expr, define);
_uniq_var_255;
return _uniq_var_255;
};_uniq_var_496.__lix_func__ = true;return _uniq_var_496;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_497 = function (expr, define) {var _uniq_var_256 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_497.__lix_func__ = true;return _uniq_var_497;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_498 = function (expr, define) {var _uniq_var_257 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_257;
return _uniq_var_257;
};_uniq_var_498.__lix_func__ = true;return _uniq_var_498;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_499 = function (expr, define) {var _uniq_var_258 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_258;
return _uniq_var_258;
};_uniq_var_499.__lix_func__ = true;return _uniq_var_499;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_500 = function (expr, define) {var _uniq_var_259 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_259;
return _uniq_var_259;
};_uniq_var_500.__lix_func__ = true;return _uniq_var_500;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_501 = function (expr, define) {var _uniq_var_260 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_260;
return _uniq_var_260;
};_uniq_var_501.__lix_func__ = true;return _uniq_var_501;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_502 = function (expr, define) {var _uniq_var_261 = flatten(expr[0], define);
_uniq_var_261;
(expr[0] = _uniq_var_261);
return expr;
};_uniq_var_502.__lix_func__ = true;return _uniq_var_502;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_503 = function (expr, define) {return expr;
};_uniq_var_503.__lix_func__ = true;return _uniq_var_503;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_505 = function (expr, define) {var _uniq_var_263 = map(expr[0], (function () {var _uniq_var_504 = function (i) {var _uniq_var_262 = flatten(i, define);
_uniq_var_262;
return _uniq_var_262;
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})());
_uniq_var_263;
(expr[0] = _uniq_var_263);
return expr;
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_506 = function (expr, define) {return expr;
};_uniq_var_506.__lix_func__ = true;return _uniq_var_506;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_507 = function (expr, define) {var _uniq_var_264 = true;
_uniq_var_264;
var _uniq_var_265 = null;
_uniq_var_265;
var _uniq_var_267 = __eq__(expr[1], '{index}');
_uniq_var_267;
if ((_uniq_var_264 && _uniq_var_267)) {
(_uniq_var_264 = false);
var _uniq_var_266 = flatten(expr[0], define);
_uniq_var_266;
(_uniq_var_265 = (expr[0] = _uniq_var_266));

};
_uniq_var_265;
return expr;
};_uniq_var_507.__lix_func__ = true;return _uniq_var_507;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_512 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_511 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_268 = true;
_uniq_var_268;
var _uniq_var_269 = null;
_uniq_var_269;
var _uniq_var_275 = __eq__(arguments.length, 2);
_uniq_var_275;
if ((_uniq_var_268 && _uniq_var_275)) {
(_uniq_var_268 = false);
var _uniq_var_270 = true;
_uniq_var_270;
var _uniq_var_271 = null;
_uniq_var_271;
var _uniq_var_274 = __eq__(defined[name], undefined);
_uniq_var_274;
if ((_uniq_var_270 && _uniq_var_274)) {
(_uniq_var_270 = false);
var _uniq_var_272 = call(getUniqVarName);
_uniq_var_272;
var varName = _uniq_var_272;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_273 = (function () {var _uniq_var_510 = function (_uniq_var_508, _uniq_var_509) {
if (typeof _uniq_var_508.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_508.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_508.push.apply(_uniq_var_508, arguments);
} else if (_uniq_var_508.push !== undefined) {
if (_uniq_var_509 === undefined) {
return _uniq_var_508.push;
}
_uniq_var_508.push = _uniq_var_509;
}return _uniq_var_508;
};_uniq_var_510.__lix_func__ = true;return _uniq_var_510;})()(statements, [lixVar, ':=', value]);
_uniq_var_273;
_uniq_var_273;
(_uniq_var_271 = (defined[name] = lixVar));

};
_uniq_var_271;
(_uniq_var_269 = (ret = defined[name]));

};
if (_uniq_var_268) {
(_uniq_var_269 = (ret = statements));

};
_uniq_var_269;
return ret;
};_uniq_var_511.__lix_func__ = true;return _uniq_var_511;})();
};_uniq_var_512.__lix_func__ = true;return _uniq_var_512;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_276 = call(NewGlobalDefine);
_uniq_var_276;
var globalDefine = _uniq_var_276;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_513 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_277 = true;
_uniq_var_277;
var _uniq_var_278 = null;
_uniq_var_278;
var _uniq_var_280 = __eq__(expr[0][3], '{global}');
_uniq_var_280;
if ((_uniq_var_277 && _uniq_var_280)) {
(_uniq_var_277 = false);
var _uniq_var_279 = globalDefine(expr[0][0], expr);
_uniq_var_279;
(_uniq_var_278 = (ret = _uniq_var_279));

};
if (_uniq_var_277) {
var _uniq_var_281 = flattenField(expr[0], define);
_uniq_var_281;
(expr[0] = _uniq_var_281);
(_uniq_var_278 = (ret = expr));

};
_uniq_var_278;
return ret;
};_uniq_var_513.__lix_func__ = true;return _uniq_var_513;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_514 = function (expr, define) {var _uniq_var_282 = flatten(expr[2], define);
_uniq_var_282;
(expr[2] = _uniq_var_282);
return expr;
};_uniq_var_514.__lix_func__ = true;return _uniq_var_514;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_516 = function (expr, define) {var _uniq_var_284 = map(expr[0], (function () {var _uniq_var_515 = function (i) {var _uniq_var_283 = flattenProperty(i, define);
_uniq_var_283;
return _uniq_var_283;
};_uniq_var_515.__lix_func__ = true;return _uniq_var_515;})());
_uniq_var_284;
(expr[0] = _uniq_var_284);
return expr;
};_uniq_var_516.__lix_func__ = true;return _uniq_var_516;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_518 = function (expr, define) {var _uniq_var_286 = map(expr[0], (function () {var _uniq_var_517 = function (i) {var _uniq_var_285 = flatten(i, define);
_uniq_var_285;
return _uniq_var_285;
};_uniq_var_517.__lix_func__ = true;return _uniq_var_517;})());
_uniq_var_286;
(expr[0] = _uniq_var_286);
return expr;
};_uniq_var_518.__lix_func__ = true;return _uniq_var_518;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_519 = function (expr, define) {var _uniq_var_287 = flatten(expr[2], define);
_uniq_var_287;
(expr[2] = _uniq_var_287);
return expr;
};_uniq_var_519.__lix_func__ = true;return _uniq_var_519;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_520 = function (expr, define) {var _uniq_var_288 = true;
_uniq_var_288;
var _uniq_var_289 = null;
_uniq_var_289;
var _uniq_var_292 = __eq__(expr[1], '{.}');
_uniq_var_292;
if ((_uniq_var_288 && _uniq_var_292)) {
(_uniq_var_288 = false);
var _uniq_var_290 = flattenFieldAccess(expr[0], define);
_uniq_var_290;
(expr[0] = _uniq_var_290);
var _uniq_var_291 = flattenField(expr[2], define);
_uniq_var_291;
(_uniq_var_289 = (expr[2] = _uniq_var_291));

};
if (_uniq_var_288) {
var _uniq_var_293 = flatten(expr, define);
_uniq_var_293;
(_uniq_var_289 = (expr = _uniq_var_293));

};
_uniq_var_289;
return expr;
};_uniq_var_520.__lix_func__ = true;return _uniq_var_520;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_521 = function (expr, define) {return expr;
};_uniq_var_521.__lix_func__ = true;return _uniq_var_521;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_522 = function (expr, define) {var _uniq_var_294 = flatten(expr[0], define);
_uniq_var_294;
return _uniq_var_294;
};_uniq_var_522.__lix_func__ = true;return _uniq_var_522;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_536 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_535 = function (statement, tmpVarName) {var _uniq_var_295 = true;
_uniq_var_295;
var _uniq_var_296 = null;
_uniq_var_296;
var _uniq_var_297 = __eq__(statement, undefined);
_uniq_var_297;
if ((_uniq_var_295 && _uniq_var_297)) {
(_uniq_var_295 = false);
(_uniq_var_296 = data);

};
var _uniq_var_299 = __eq__(tmpVarName, true);
_uniq_var_299;
if ((_uniq_var_295 && _uniq_var_299)) {
(_uniq_var_295 = false);
var _uniq_var_298 = (function () {var _uniq_var_525 = function (_uniq_var_523, _uniq_var_524) {
if (typeof _uniq_var_523.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_523.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_523.push.apply(_uniq_var_523, arguments);
} else if (_uniq_var_523.push !== undefined) {
if (_uniq_var_524 === undefined) {
return _uniq_var_523.push;
}
_uniq_var_523.push = _uniq_var_524;
}return _uniq_var_523;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})()(data, statement);
_uniq_var_298;
(_uniq_var_296 = _uniq_var_298);

};
var _uniq_var_303 = __eq__(tmpVarName, undefined);
_uniq_var_303;
if ((_uniq_var_295 && _uniq_var_303)) {
(_uniq_var_295 = false);
var _uniq_var_300 = call(getUniqVarName);
_uniq_var_300;
var varName = _uniq_var_300;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_301 = (function () {var _uniq_var_528 = function (_uniq_var_526, _uniq_var_527) {
if (typeof _uniq_var_526.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_526.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_526.push.apply(_uniq_var_526, arguments);
} else if (_uniq_var_526.push !== undefined) {
if (_uniq_var_527 === undefined) {
return _uniq_var_526.push;
}
_uniq_var_526.push = _uniq_var_527;
}return _uniq_var_526;
};_uniq_var_528.__lix_func__ = true;return _uniq_var_528;})()(data, statement);
_uniq_var_301;
_uniq_var_301;
var _uniq_var_302 = (function () {var _uniq_var_531 = function (_uniq_var_529, _uniq_var_530) {
if (typeof _uniq_var_529.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_529.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_529.push.apply(_uniq_var_529, arguments);
} else if (_uniq_var_529.push !== undefined) {
if (_uniq_var_530 === undefined) {
return _uniq_var_529.push;
}
_uniq_var_529.push = _uniq_var_530;
}return _uniq_var_529;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_302;
_uniq_var_302;
(_uniq_var_296 = lixVar);

};
var _uniq_var_306 = __eq__(tmpVarName, 'new');
_uniq_var_306;
if ((_uniq_var_295 && _uniq_var_306)) {
(_uniq_var_295 = false);
var _uniq_var_304 = call(getUniqVarName);
_uniq_var_304;
var varName = _uniq_var_304;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_305 = (function () {var _uniq_var_534 = function (_uniq_var_532, _uniq_var_533) {
if (typeof _uniq_var_532.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_532.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_532.push.apply(_uniq_var_532, arguments);
} else if (_uniq_var_532.push !== undefined) {
if (_uniq_var_533 === undefined) {
return _uniq_var_532.push;
}
_uniq_var_532.push = _uniq_var_533;
}return _uniq_var_532;
};_uniq_var_534.__lix_func__ = true;return _uniq_var_534;})()(data, [lixVar, ':=', statement]);
_uniq_var_305;
_uniq_var_305;
(_uniq_var_296 = lixVar);

};
return _uniq_var_296;
};_uniq_var_535.__lix_func__ = true;return _uniq_var_535;})();
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_548 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_537 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_307 = true;
_uniq_var_307;
var _uniq_var_308 = null;
_uniq_var_308;
var _uniq_var_310 = seqCtx;
_uniq_var_310;
if (_uniq_var_310) {
var _uniq_var_311 = parseInt(index);
_uniq_var_311;
var _uniq_var_312 = __sub__(expr[0].length, 1);
_uniq_var_312;
var _uniq_var_313 = __eq__(_uniq_var_311, _uniq_var_312);
_uniq_var_313;
(_uniq_var_310 = _uniq_var_313);

};
if ((_uniq_var_307 && _uniq_var_310)) {
(_uniq_var_307 = false);
var _uniq_var_309 = seqCtx(stmt);
_uniq_var_309;
var ret = _uniq_var_309;
ret;
(_uniq_var_308 = ret);

};
_uniq_var_308;
return ret;
};_uniq_var_537.__lix_func__ = true;return _uniq_var_537;})();
ctx;
ctx;
var _uniq_var_340 = foreach(expr[0], (function () {var _uniq_var_547 = function (item, index) {var _uniq_var_314 = call(statementFlattenGenerator);
_uniq_var_314;
var exprDefine = _uniq_var_314;
exprDefine;
exprDefine;
var _uniq_var_315 = flatten(item, exprDefine);
_uniq_var_315;
var itemRet = _uniq_var_315;
itemRet;
itemRet;
var _uniq_var_316 = call(exprDefine);
_uniq_var_316;
var _uniq_var_317 = (function () {var _uniq_var_540 = function (_uniq_var_538, _uniq_var_539) {
if (typeof _uniq_var_538.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_538.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_538.concat.apply(_uniq_var_538, arguments);
} else if (_uniq_var_538.concat !== undefined) {
if (_uniq_var_539 === undefined) {
return _uniq_var_538.concat;
}
_uniq_var_538.concat = _uniq_var_539;
}return _uniq_var_538;
};_uniq_var_540.__lix_func__ = true;return _uniq_var_540;})()(ret, _uniq_var_316);
_uniq_var_317;
(ret = _uniq_var_317);
var _uniq_var_318 = ctx(itemRet, index);
_uniq_var_318;
var stmtRet = _uniq_var_318;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_541 = function (expr) {var _uniq_var_319 = __eq__(expr[1], '{atomic}');
_uniq_var_319;
var _uniq_var_320 = _uniq_var_319;
_uniq_var_320;
if (_uniq_var_320) {
var _uniq_var_321 = __ne__(expr[3], undefined);
_uniq_var_321;
(_uniq_var_320 = _uniq_var_321);

};
return _uniq_var_320;
};_uniq_var_541.__lix_func__ = true;return _uniq_var_541;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_542 = function (expr) {var _uniq_var_322 = __eq__(expr[1], '{atomic}');
_uniq_var_322;
var _uniq_var_323 = _uniq_var_322;
_uniq_var_323;
if (_uniq_var_323) {
var _uniq_var_324 = __eq__(expr[3], undefined);
_uniq_var_324;
(_uniq_var_323 = _uniq_var_324);

};
return _uniq_var_323;
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_543 = function (expr) {var _uniq_var_325 = isRealVar(expr);
_uniq_var_325;
var _uniq_var_326 = _uniq_var_325;
_uniq_var_326;
if (not(_uniq_var_326)) {
var _uniq_var_327 = __ne__(expr[1], 'if');
_uniq_var_327;
var _uniq_var_328 = _uniq_var_327;
_uniq_var_328;
if (_uniq_var_328) {
var _uniq_var_329 = __ne__(expr[1], 'while');
_uniq_var_329;
(_uniq_var_328 = _uniq_var_329);

};
(_uniq_var_326 = _uniq_var_328);

};
return _uniq_var_326;
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
isRealExpr;
isRealExpr;
var _uniq_var_330 = true;
_uniq_var_330;
var _uniq_var_331 = null;
_uniq_var_331;
var _uniq_var_336 = __ne__(stmtRet[1], '{empty}');
_uniq_var_336;
var _uniq_var_337 = _uniq_var_336;
_uniq_var_337;
if (_uniq_var_337) {
var _uniq_var_338 = isTmpVar(stmtRet);
_uniq_var_338;
var _uniq_var_339 = not(_uniq_var_338);
_uniq_var_339;
(_uniq_var_337 = _uniq_var_339);

};
if ((_uniq_var_330 && _uniq_var_337)) {
(_uniq_var_330 = false);
var _uniq_var_332 = true;
_uniq_var_332;
var _uniq_var_333 = null;
_uniq_var_333;
var _uniq_var_334 = isRealExpr(stmtRet);
_uniq_var_334;
if ((_uniq_var_332 && _uniq_var_334)) {
(_uniq_var_332 = false);
(_uniq_var_333 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_333;
var _uniq_var_335 = (function () {var _uniq_var_546 = function (_uniq_var_544, _uniq_var_545) {
if (typeof _uniq_var_544.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_544.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_544.push.apply(_uniq_var_544, arguments);
} else if (_uniq_var_544.push !== undefined) {
if (_uniq_var_545 === undefined) {
return _uniq_var_544.push;
}
_uniq_var_544.push = _uniq_var_545;
}return _uniq_var_544;
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})()(ret, stmtRet);
_uniq_var_335;
(_uniq_var_331 = _uniq_var_335);

};
return _uniq_var_331;
};_uniq_var_547.__lix_func__ = true;return _uniq_var_547;})());
_uniq_var_340;
_uniq_var_340;
(expr[0] = ret);
return expr;
};_uniq_var_548.__lix_func__ = true;return _uniq_var_548;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_555 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_341 = flatten(expr[0], define);
_uniq_var_341;
var ret = _uniq_var_341;
ret;
ret;
var _uniq_var_342 = call(globalDefine);
_uniq_var_342;
var _uniq_var_343 = (function () {var _uniq_var_551 = function (_uniq_var_549, _uniq_var_550) {
if (typeof _uniq_var_549.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_549.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_549.concat.apply(_uniq_var_549, arguments);
} else if (_uniq_var_549.concat !== undefined) {
if (_uniq_var_550 === undefined) {
return _uniq_var_549.concat;
}
_uniq_var_549.concat = _uniq_var_550;
}return _uniq_var_549;
};_uniq_var_551.__lix_func__ = true;return _uniq_var_551;})()(trapExpr, _uniq_var_342);
_uniq_var_343;
var _uniq_var_344 = (function () {var _uniq_var_554 = function (_uniq_var_552, _uniq_var_553) {
if (typeof _uniq_var_552.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_552.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_552.concat.apply(_uniq_var_552, arguments);
} else if (_uniq_var_552.concat !== undefined) {
if (_uniq_var_553 === undefined) {
return _uniq_var_552.concat;
}
_uniq_var_552.concat = _uniq_var_553;
}return _uniq_var_552;
};_uniq_var_554.__lix_func__ = true;return _uniq_var_554;})()(_uniq_var_343, ret[0]);
_uniq_var_344;
(ret[0] = _uniq_var_344);
return [ret, '{start}'];
};_uniq_var_555.__lix_func__ = true;return _uniq_var_555;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_559 = function (expr, define) {var _uniq_var_345 = true;
_uniq_var_345;
var _uniq_var_346 = null;
_uniq_var_346;
var _uniq_var_348 = __eq__(expr[2], '{var}');
_uniq_var_348;
if ((_uniq_var_345 && _uniq_var_348)) {
(_uniq_var_345 = false);
var _uniq_var_347 = (function () {var _uniq_var_558 = function (_uniq_var_556, _uniq_var_557) {
if (typeof _uniq_var_556.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_556.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_556.join.apply(_uniq_var_556, arguments);
} else if (_uniq_var_556.join !== undefined) {
if (_uniq_var_557 === undefined) {
return _uniq_var_556.join;
}
_uniq_var_556.join = _uniq_var_557;
}return _uniq_var_556;
};_uniq_var_558.__lix_func__ = true;return _uniq_var_558;})()(['"', expr[0], '"'], '');
_uniq_var_347;
var name = [_uniq_var_347, '{atomic}'];
name;
(_uniq_var_346 = name);

};
var _uniq_var_350 = __eq__(expr[2], '{index}');
_uniq_var_350;
if ((_uniq_var_345 && _uniq_var_350)) {
(_uniq_var_345 = false);
var _uniq_var_349 = flatten(expr[0], define);
_uniq_var_349;
var name = _uniq_var_349;
name;
(_uniq_var_346 = name);

};
_uniq_var_346;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_351 = define(moduleExpr);
_uniq_var_351;
return _uniq_var_351;
};_uniq_var_559.__lix_func__ = true;return _uniq_var_559;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_560 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_561 = function (expr, define) {return expr;
};_uniq_var_561.__lix_func__ = true;return _uniq_var_561;})();
flattenAmpersand;
flattenAmpersand;
var flattenFn = (function () {var _uniq_var_562 = function (expr, define) {var _uniq_var_352 = flatten([expr[2], "{func}", expr[3]], define);
_uniq_var_352;
var func = _uniq_var_352;
func;
func;
return [expr[0], "{fn}", func];
};_uniq_var_562.__lix_func__ = true;return _uniq_var_562;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_563 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_353 = flatten(expr, define);
_uniq_var_353;
return _uniq_var_353;
};_uniq_var_563.__lix_func__ = true;return _uniq_var_563;})();
flattenAsterisk;
flattenAsterisk;
var flattenOpTable = {
'{start}': flattenStart,
'{seq}': flattenSeq,
'{mono}': flattenMono,
'{atomic}': flattenAtomic,
'{.}': flattenFieldAccess,
'{module}': flattenModule,
'{func}': flattenFunc,
'{fn}': flattenFn,
'{ampersand}': flattenAmpersand,
'{asterisk}': flattenAsterisk,
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
flattenOpTable;
var flattenOp = (function () {var _uniq_var_564 = function (hint) {var _uniq_var_354 = true;
_uniq_var_354;
var _uniq_var_355 = null;
_uniq_var_355;
if ((_uniq_var_354 && flattenOpTable[hint])) {
(_uniq_var_354 = false);
(_uniq_var_355 = flattenOpTable[hint]);

};
if (_uniq_var_354) {
(_uniq_var_355 = flattenExpr);

};
return _uniq_var_355;
};_uniq_var_564.__lix_func__ = true;return _uniq_var_564;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_565 = function (expr, define, ctx) {var _uniq_var_356 = flattenOp(expr[1]);
_uniq_var_356;
var _uniq_var_357 = _uniq_var_356(expr, define, ctx);
_uniq_var_357;
return _uniq_var_357;
};_uniq_var_565.__lix_func__ = true;return _uniq_var_565;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_566 = function (i) {return i;
};_uniq_var_566.__lix_func__ = true;return _uniq_var_566;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_567 = function (i) {;
};_uniq_var_567.__lix_func__ = true;return _uniq_var_567;})(),
appendExpr: (function () {var _uniq_var_568 = function (i) {;
};_uniq_var_568.__lix_func__ = true;return _uniq_var_568;})()
};
def0;
def0;
var _uniq_var_358 = join(['s[', STEP, ']']);
_uniq_var_358;
var _uniq_var_359 = join(['s[', RET, ']']);
_uniq_var_359;
var seqFuncParamsName = {
step: _uniq_var_358,
ret: _uniq_var_359
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_575 = function (expr) {var _uniq_var_360 = map(env0, (function () {var _uniq_var_569 = function (i) {return i;
};_uniq_var_569.__lix_func__ = true;return _uniq_var_569;})());
_uniq_var_360;
var _uniq_var_361 = (function () {var _uniq_var_572 = function (_uniq_var_570, _uniq_var_571) {
if (typeof _uniq_var_570.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_570.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_570.join.apply(_uniq_var_570, arguments);
} else if (_uniq_var_570.join !== undefined) {
if (_uniq_var_571 === undefined) {
return _uniq_var_570.join;
}
_uniq_var_570.join = _uniq_var_571;
}return _uniq_var_570;
};_uniq_var_572.__lix_func__ = true;return _uniq_var_572;})()(_uniq_var_360, "\n");
_uniq_var_361;
var libs = _uniq_var_361;
libs;
libs;
var _uniq_var_362 = flatten(expr, (function () {var _uniq_var_573 = function (i) {;
};_uniq_var_573.__lix_func__ = true;return _uniq_var_573;})(), (function () {var _uniq_var_574 = function (i) {return i;
};_uniq_var_574.__lix_func__ = true;return _uniq_var_574;})());
_uniq_var_362;
var flattenedExpr = _uniq_var_362;
flattenedExpr;
flattenedExpr;
var _uniq_var_363 = call(env_new);
_uniq_var_363;
var _uniq_var_364 = generateStart(flattenedExpr, _uniq_var_363, ctx0, def0);
_uniq_var_364;
var code = _uniq_var_364;
code;
code;
var _uniq_var_365 = join([libs, "\n", code]);
_uniq_var_365;
return _uniq_var_365;
};_uniq_var_575.__lix_func__ = true;return _uniq_var_575;})();
compile;
compile;
(exports.compile = compile);
compile;

