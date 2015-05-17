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
var join = (function () {var _uniq_var_363 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_362 = function (_uniq_var_360, _uniq_var_361) {
if (typeof _uniq_var_360.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_360.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_360.join.apply(_uniq_var_360, arguments);
} else if (_uniq_var_360.join !== undefined) {
if (_uniq_var_361 === undefined) {
return _uniq_var_360.join;
}
_uniq_var_360.join = _uniq_var_361;
}return _uniq_var_360;
};_uniq_var_362.__lix_func__ = true;return _uniq_var_362;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_363.__lix_func__ = true;return _uniq_var_363;})();
join;
join;
var map = (function () {var _uniq_var_368 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_367 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_366 = function (_uniq_var_364, _uniq_var_365) {
if (typeof _uniq_var_364.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_364.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_364.push.apply(_uniq_var_364, arguments);
} else if (_uniq_var_364.push !== undefined) {
if (_uniq_var_365 === undefined) {
return _uniq_var_364.push;
}
_uniq_var_364.push = _uniq_var_365;
}return _uniq_var_364;
};_uniq_var_366.__lix_func__ = true;return _uniq_var_366;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_367.__lix_func__ = true;return _uniq_var_367;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_368.__lix_func__ = true;return _uniq_var_368;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_370 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_369 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_369.__lix_func__ = true;return _uniq_var_369;})();
};_uniq_var_370.__lix_func__ = true;return _uniq_var_370;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_371 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_371.__lix_func__ = true;return _uniq_var_371;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_376 = function (args, env, ctx) {var _uniq_var_9 = map(args, (function () {var _uniq_var_372 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
_uniq_var_8;
var varname = _uniq_var_8;
varname;
varname;
(env[varname] = true);
return varname;
};_uniq_var_372.__lix_func__ = true;return _uniq_var_372;})());
_uniq_var_9;
var _uniq_var_10 = (function () {var _uniq_var_375 = function (_uniq_var_373, _uniq_var_374) {
if (typeof _uniq_var_373.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_373.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_373.join.apply(_uniq_var_373, arguments);
} else if (_uniq_var_373.join !== undefined) {
if (_uniq_var_374 === undefined) {
return _uniq_var_373.join;
}
_uniq_var_373.join = _uniq_var_374;
}return _uniq_var_373;
};_uniq_var_375.__lix_func__ = true;return _uniq_var_375;})()(_uniq_var_9, ', ');
_uniq_var_10;
return _uniq_var_10;
};_uniq_var_376.__lix_func__ = true;return _uniq_var_376;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_377 = function (x) {return x;
};_uniq_var_377.__lix_func__ = true;return _uniq_var_377;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_384 = function (expr, env, ctx, def) {var _uniq_var_11 = call(getUniqVarName);
_uniq_var_11;
var funcName = _uniq_var_11;
funcName;
funcName;
var _uniq_var_12 = call(counterGenerator);
_uniq_var_12;
var getCount = _uniq_var_12;
getCount;
getCount;
var ctx = (function () {var _uniq_var_379 = function (current) {return (function () {var _uniq_var_378 = function (v, loop) {var next = current;
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
};_uniq_var_378.__lix_func__ = true;return _uniq_var_378;})();
};_uniq_var_379.__lix_func__ = true;return _uniq_var_379;})();
ctx;
ctx;
var _uniq_var_22 = map(expr[0], (function () {var _uniq_var_380 = function (item, index) {var _uniq_var_18 = call(getCount);
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
};_uniq_var_380.__lix_func__ = true;return _uniq_var_380;})());
_uniq_var_22;
var _uniq_var_23 = (function () {var _uniq_var_383 = function (_uniq_var_381, _uniq_var_382) {
if (typeof _uniq_var_381.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_381.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_381.join.apply(_uniq_var_381, arguments);
} else if (_uniq_var_381.join !== undefined) {
if (_uniq_var_382 === undefined) {
return _uniq_var_381.join;
}
_uniq_var_381.join = _uniq_var_382;
}return _uniq_var_381;
};_uniq_var_383.__lix_func__ = true;return _uniq_var_383;})()(_uniq_var_22, ";\n");
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
};_uniq_var_384.__lix_func__ = true;return _uniq_var_384;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_385 = function (expr, env, ctx, def) {var _uniq_var_26 = generate(expr[0], env, ctx, def);
_uniq_var_26;
var _uniq_var_27 = generate(expr[2], env, ctx, def);
_uniq_var_27;
var _uniq_var_28 = join(['(', _uniq_var_26, " || ", _uniq_var_27, ')']);
_uniq_var_28;
return _uniq_var_28;
};_uniq_var_385.__lix_func__ = true;return _uniq_var_385;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_386 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " && ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_386.__lix_func__ = true;return _uniq_var_386;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_391 = function (expr, env, ctx, def) {var _uniq_var_44 = map(expr[0], (function () {var _uniq_var_387 = function (i) {var _uniq_var_32 = true;
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
};_uniq_var_387.__lix_func__ = true;return _uniq_var_387;})());
_uniq_var_44;
var _uniq_var_45 = (function () {var _uniq_var_390 = function (_uniq_var_388, _uniq_var_389) {
if (typeof _uniq_var_388.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_388.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_388.join.apply(_uniq_var_388, arguments);
} else if (_uniq_var_388.join !== undefined) {
if (_uniq_var_389 === undefined) {
return _uniq_var_388.join;
}
_uniq_var_388.join = _uniq_var_389;
}return _uniq_var_388;
};_uniq_var_390.__lix_func__ = true;return _uniq_var_390;})()(_uniq_var_44, ' else ');
_uniq_var_45;
return _uniq_var_45;
};_uniq_var_391.__lix_func__ = true;return _uniq_var_391;})();
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
var generateAtomic = (function () {var _uniq_var_392 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_392.__lix_func__ = true;return _uniq_var_392;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_393 = function (expr, env, ctx, def) {var _uniq_var_54 = true;
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
};_uniq_var_393.__lix_func__ = true;return _uniq_var_393;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_394 = function (expr, env, ctx, def) {var _uniq_var_60 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_394.__lix_func__ = true;return _uniq_var_394;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_399 = function (expr, env, ctx, def) {var _uniq_var_64 = map(expr[0], (function () {var _uniq_var_395 = function (i) {var _uniq_var_63 = generateProperty(i, env, ctx, def);
_uniq_var_63;
return _uniq_var_63;
};_uniq_var_395.__lix_func__ = true;return _uniq_var_395;})());
_uniq_var_64;
var _uniq_var_65 = (function () {var _uniq_var_398 = function (_uniq_var_396, _uniq_var_397) {
if (typeof _uniq_var_396.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_396.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_396.join.apply(_uniq_var_396, arguments);
} else if (_uniq_var_396.join !== undefined) {
if (_uniq_var_397 === undefined) {
return _uniq_var_396.join;
}
_uniq_var_396.join = _uniq_var_397;
}return _uniq_var_396;
};_uniq_var_398.__lix_func__ = true;return _uniq_var_398;})()(_uniq_var_64, ",\n");
_uniq_var_65;
var objectBody = _uniq_var_65;
objectBody;
objectBody;
var _uniq_var_66 = join(["{\n", objectBody, "\n}"]);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_399.__lix_func__ = true;return _uniq_var_399;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_400 = function (name) {var _uniq_var_67 = true;
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
};_uniq_var_400.__lix_func__ = true;return _uniq_var_400;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_401 = function (expr) {var _uniq_var_79 = true;
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
};_uniq_var_401.__lix_func__ = true;return _uniq_var_401;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_402 = function (expr, env, ctx, def) {var _uniq_var_85 = true;
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
};_uniq_var_402.__lix_func__ = true;return _uniq_var_402;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_403 = function (expr, env, ctx, def) {var _uniq_var_93 = true;
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
};_uniq_var_403.__lix_func__ = true;return _uniq_var_403;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_408 = function (expr, env, ctx, def) {var _uniq_var_102 = map(expr[0], (function () {var _uniq_var_404 = function (i) {var _uniq_var_101 = generate(i, env, ctx, def);
_uniq_var_101;
return _uniq_var_101;
};_uniq_var_404.__lix_func__ = true;return _uniq_var_404;})());
_uniq_var_102;
var _uniq_var_103 = (function () {var _uniq_var_407 = function (_uniq_var_405, _uniq_var_406) {
if (typeof _uniq_var_405.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_405.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_405.join.apply(_uniq_var_405, arguments);
} else if (_uniq_var_405.join !== undefined) {
if (_uniq_var_406 === undefined) {
return _uniq_var_405.join;
}
_uniq_var_405.join = _uniq_var_406;
}return _uniq_var_405;
};_uniq_var_407.__lix_func__ = true;return _uniq_var_407;})()(_uniq_var_102, ', ');
_uniq_var_103;
var arrayBody = _uniq_var_103;
arrayBody;
arrayBody;
var _uniq_var_104 = join(['[', arrayBody, ']']);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_408.__lix_func__ = true;return _uniq_var_408;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_409 = function (expr, env, ctx) {var _uniq_var_105 = call(getUniqVarName);
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
};_uniq_var_409.__lix_func__ = true;return _uniq_var_409;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_410 = function (expr, env, ctx, def) {var _uniq_var_111 = generate(expr[0], env, ctx, def);
_uniq_var_111;
var _uniq_var_112 = generate(expr[2], env, ctx, def);
_uniq_var_112;
var _uniq_var_113 = ctx(_uniq_var_112, true);
_uniq_var_113;
var _uniq_var_114 = join(['while (', _uniq_var_111, ') {\n', _uniq_var_113, "\n}"]);
_uniq_var_114;
return _uniq_var_114;
};_uniq_var_410.__lix_func__ = true;return _uniq_var_410;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_411 = function (expr, env, ctx) {return 'break';
};_uniq_var_411.__lix_func__ = true;return _uniq_var_411;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_412 = function (expr, env, ctx, def) {return "";
};_uniq_var_412.__lix_func__ = true;return _uniq_var_412;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_413 = function (expr, env, ctx, def) {var _uniq_var_115 = getVarName(expr[0]);
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
};_uniq_var_413.__lix_func__ = true;return _uniq_var_413;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_414 = function (expr, env, ctx, def) {var _uniq_var_119 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_119;
return _uniq_var_119;
};_uniq_var_414.__lix_func__ = true;return _uniq_var_414;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_418 = function (expr, env, ctx, def) {var _uniq_var_120 = true;
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
var _uniq_var_131 = (function () {var _uniq_var_417 = function (_uniq_var_415, _uniq_var_416) {
if (typeof _uniq_var_415.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_415.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_415.join.apply(_uniq_var_415, arguments);
} else if (_uniq_var_415.join !== undefined) {
if (_uniq_var_416 === undefined) {
return _uniq_var_415.join;
}
_uniq_var_415.join = _uniq_var_416;
}return _uniq_var_415;
};_uniq_var_417.__lix_func__ = true;return _uniq_var_417;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_131;
return _uniq_var_131;
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_419 = function (expr, env, ctx, def) {var _uniq_var_132 = getVarName(expr[0]);
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
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_423 = function (expr, env, ctx, def) {var _uniq_var_142 = env_new(env);
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
var _uniq_var_150 = (function () {var _uniq_var_422 = function (_uniq_var_420, _uniq_var_421) {
if (typeof _uniq_var_420.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_420.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_420.join.apply(_uniq_var_420, arguments);
} else if (_uniq_var_420.join !== undefined) {
if (_uniq_var_421 === undefined) {
return _uniq_var_420.join;
}
_uniq_var_420.join = _uniq_var_421;
}return _uniq_var_420;
};_uniq_var_422.__lix_func__ = true;return _uniq_var_422;})()(['(function (', args, ') {\n', 'var ', _uniq_var_147, ' = arguments\n', _uniq_var_148, ";\n", _uniq_var_149, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_150;
return _uniq_var_150;
};_uniq_var_423.__lix_func__ = true;return _uniq_var_423;})();
generateFunc;
generateFunc;
var generateExpr = (function () {var _uniq_var_425 = function (expr, env, ctx, def) {var _uniq_var_151 = generate(expr[1], env, ctx0, def);
_uniq_var_151;
var func = _uniq_var_151;
func;
func;
var _uniq_var_152 = generate(expr[0], env, ctx0, def);
_uniq_var_152;
var args = _uniq_var_152;
args;
args;
var _uniq_var_158 = foreach(expr, (function () {var _uniq_var_424 = function (item, index) {var _uniq_var_153 = true;
_uniq_var_153;
var _uniq_var_154 = null;
_uniq_var_154;
var _uniq_var_157 = __gt__(index, 1);
_uniq_var_157;
if ((_uniq_var_153 && _uniq_var_157)) {
(_uniq_var_153 = false);
var _uniq_var_155 = generate(item, env, ctx0, def);
_uniq_var_155;
var _uniq_var_156 = join([args, ', ', _uniq_var_155]);
_uniq_var_156;
(_uniq_var_154 = (args = _uniq_var_156));

};
return _uniq_var_154;
};_uniq_var_424.__lix_func__ = true;return _uniq_var_424;})());
_uniq_var_158;
_uniq_var_158;
var _uniq_var_159 = join([func, '(', args, ')']);
_uniq_var_159;
var _uniq_var_160 = ctx(_uniq_var_159);
_uniq_var_160;
return _uniq_var_160;
};_uniq_var_425.__lix_func__ = true;return _uniq_var_425;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_438 = function () {var vars = {

};
vars;
vars;
var funcs = [];
funcs;
funcs;
return {
defineVar: (function () {var _uniq_var_430 = function (v) {var _uniq_var_161 = true;
_uniq_var_161;
var _uniq_var_162 = null;
_uniq_var_162;
if ((_uniq_var_161 && v)) {
(_uniq_var_161 = false);
(_uniq_var_162 = (vars[v] = v));

};
if (_uniq_var_161) {
var _uniq_var_163 = map(vars, (function () {var _uniq_var_426 = function (i) {return i;
};_uniq_var_426.__lix_func__ = true;return _uniq_var_426;})());
_uniq_var_163;
var vecs = _uniq_var_163;
vecs;
vecs;
var _uniq_var_164 = true;
_uniq_var_164;
var _uniq_var_165 = null;
_uniq_var_165;
var _uniq_var_168 = __gt__(vecs.length, 0);
_uniq_var_168;
if ((_uniq_var_164 && _uniq_var_168)) {
(_uniq_var_164 = false);
var _uniq_var_166 = (function () {var _uniq_var_429 = function (_uniq_var_427, _uniq_var_428) {
if (typeof _uniq_var_427.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_427.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_427.join.apply(_uniq_var_427, arguments);
} else if (_uniq_var_427.join !== undefined) {
if (_uniq_var_428 === undefined) {
return _uniq_var_427.join;
}
_uniq_var_427.join = _uniq_var_428;
}return _uniq_var_427;
};_uniq_var_429.__lix_func__ = true;return _uniq_var_429;})()(vecs, ', ');
_uniq_var_166;
var _uniq_var_167 = __add__('var ', _uniq_var_166);
_uniq_var_167;
(_uniq_var_165 = _uniq_var_167);

};
if (_uniq_var_164) {
(_uniq_var_165 = '');

};
(_uniq_var_162 = _uniq_var_165);

};
return _uniq_var_162;
};_uniq_var_430.__lix_func__ = true;return _uniq_var_430;})(),
appendExpr: (function () {var _uniq_var_437 = function (v) {var _uniq_var_169 = true;
_uniq_var_169;
var _uniq_var_170 = null;
_uniq_var_170;
if ((_uniq_var_169 && v)) {
(_uniq_var_169 = false);
var _uniq_var_171 = (function () {var _uniq_var_433 = function (_uniq_var_431, _uniq_var_432) {
if (typeof _uniq_var_431.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_431.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_431.push.apply(_uniq_var_431, arguments);
} else if (_uniq_var_431.push !== undefined) {
if (_uniq_var_432 === undefined) {
return _uniq_var_431.push;
}
_uniq_var_431.push = _uniq_var_432;
}return _uniq_var_431;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})()(funcs, v);
_uniq_var_171;
(_uniq_var_170 = _uniq_var_171);

};
if (_uniq_var_169) {
var _uniq_var_172 = (function () {var _uniq_var_436 = function (_uniq_var_434, _uniq_var_435) {
if (typeof _uniq_var_434.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_434.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_434.join.apply(_uniq_var_434, arguments);
} else if (_uniq_var_434.join !== undefined) {
if (_uniq_var_435 === undefined) {
return _uniq_var_434.join;
}
_uniq_var_434.join = _uniq_var_435;
}return _uniq_var_434;
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})()(funcs, ';\n');
_uniq_var_172;
(_uniq_var_170 = _uniq_var_172);

};
return _uniq_var_170;
};_uniq_var_437.__lix_func__ = true;return _uniq_var_437;})()
};
};_uniq_var_438.__lix_func__ = true;return _uniq_var_438;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_439 = function (expr, env, ctx, def) {var _uniq_var_173 = call(GenerateDefNew);
_uniq_var_173;
var def = _uniq_var_173;
def;
def;
var _uniq_var_174 = generate(expr[0], env, ctx, def);
_uniq_var_174;
var body = _uniq_var_174;
body;
body;
var _uniq_var_175 = join(['module.exports = ', body, '\n']);
_uniq_var_175;
var body = _uniq_var_175;
body;
body;
var _uniq_var_176 = call(def.defineVar);
_uniq_var_176;
var _uniq_var_177 = call(def.appendExpr);
_uniq_var_177;
var _uniq_var_178 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_176, ";\n", _uniq_var_177, ";\n", body]);
_uniq_var_178;
return _uniq_var_178;
};_uniq_var_439.__lix_func__ = true;return _uniq_var_439;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_440 = function (expr, env, ctx, def) {var _uniq_var_179 = generate(expr[0], env, ctx, def);
_uniq_var_179;
return _uniq_var_179;
};_uniq_var_440.__lix_func__ = true;return _uniq_var_440;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_441 = function (expr, env, ctx, def) {var _uniq_var_180 = join(['"', expr[0], '"']);
_uniq_var_180;
return _uniq_var_180;
};_uniq_var_441.__lix_func__ = true;return _uniq_var_441;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_442 = function (expr, env, ctx, def) {var _uniq_var_181 = generate(expr[0], env, ctx, def);
_uniq_var_181;
var _uniq_var_182 = join(['("', expr[2], '" + ', _uniq_var_181, ')']);
_uniq_var_182;
return _uniq_var_182;
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_447 = function (expr, env, ctx, def) {var _uniq_var_184 = map(expr[0], (function () {var _uniq_var_443 = function (i) {var _uniq_var_183 = generate(i, env, ctx, def);
_uniq_var_183;
return _uniq_var_183;
};_uniq_var_443.__lix_func__ = true;return _uniq_var_443;})());
_uniq_var_184;
var _uniq_var_185 = (function () {var _uniq_var_446 = function (_uniq_var_444, _uniq_var_445) {
if (typeof _uniq_var_444.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_444.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_444.join.apply(_uniq_var_444, arguments);
} else if (_uniq_var_444.join !== undefined) {
if (_uniq_var_445 === undefined) {
return _uniq_var_444.join;
}
_uniq_var_444.join = _uniq_var_445;
}return _uniq_var_444;
};_uniq_var_446.__lix_func__ = true;return _uniq_var_446;})()(_uniq_var_184, ',');
_uniq_var_185;
var path = _uniq_var_185;
path;
path;
var _uniq_var_186 = join(['[', path, '].join("/")']);
_uniq_var_186;
return _uniq_var_186;
};_uniq_var_447.__lix_func__ = true;return _uniq_var_447;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_451 = function (expr, env, ctx, def) {var _uniq_var_187 = (function () {var _uniq_var_450 = function (_uniq_var_448, _uniq_var_449) {
if (typeof _uniq_var_448.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_448.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_448.join.apply(_uniq_var_448, arguments);
} else if (_uniq_var_448.join !== undefined) {
if (_uniq_var_449 === undefined) {
return _uniq_var_448.join;
}
_uniq_var_448.join = _uniq_var_449;
}return _uniq_var_448;
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})()(['"', expr[0], '"'], '');
_uniq_var_187;
var name = [_uniq_var_187, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_451.__lix_func__ = true;return _uniq_var_451;})();
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
var generateOp = (function () {var _uniq_var_452 = function (hint) {var _uniq_var_188 = true;
_uniq_var_188;
var _uniq_var_189 = null;
_uniq_var_189;
if ((_uniq_var_188 && generateOpTable[hint])) {
(_uniq_var_188 = false);
(_uniq_var_189 = generateOpTable[hint]);

};
if (_uniq_var_188) {
(_uniq_var_189 = generateExpr);

};
return _uniq_var_189;
};_uniq_var_452.__lix_func__ = true;return _uniq_var_452;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_453 = function (expr, env, ctx, def) {var _uniq_var_190 = generateOp(expr[1]);
_uniq_var_190;
var _uniq_var_191 = _uniq_var_190(expr, env, ctx, def);
_uniq_var_191;
return _uniq_var_191;
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_455 = function (env) {var _uniq_var_192 = env;
_uniq_var_192;
if (not(_uniq_var_192)) {
(_uniq_var_192 = env0);

};
(env = _uniq_var_192);
var Env = (function () {var _uniq_var_454 = function () {;
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_193 = _instance_(Env);
_uniq_var_193;
return _uniq_var_193;
};_uniq_var_455.__lix_func__ = true;return _uniq_var_455;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_457 = function (expr, define) {var _uniq_var_195 = map(expr, (function () {var _uniq_var_456 = function (item) {var _uniq_var_194 = flatten(item, define);
_uniq_var_194;
return _uniq_var_194;
};_uniq_var_456.__lix_func__ = true;return _uniq_var_456;})());
_uniq_var_195;
var _uniq_var_196 = define(_uniq_var_195);
_uniq_var_196;
return _uniq_var_196;
};_uniq_var_457.__lix_func__ = true;return _uniq_var_457;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_458 = function (expr, define) {return expr;
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_463 = function (expr, define) {var _uniq_var_197 = call(statementFlattenGenerator);
_uniq_var_197;
var whileDefine = _uniq_var_197;
whileDefine;
whileDefine;
var _uniq_var_198 = flatten(expr[0], whileDefine);
_uniq_var_198;
(expr[0] = _uniq_var_198);
var _uniq_var_199 = flatten(expr[2], define0);
_uniq_var_199;
(expr[2] = _uniq_var_199);
var _uniq_var_200 = call(whileDefine);
_uniq_var_200;
var _uniq_var_201 = (function () {var _uniq_var_461 = function (_uniq_var_459, _uniq_var_460) {
if (typeof _uniq_var_459.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_459.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_459.concat.apply(_uniq_var_459, arguments);
} else if (_uniq_var_459.concat !== undefined) {
if (_uniq_var_460 === undefined) {
return _uniq_var_459.concat;
}
_uniq_var_459.concat = _uniq_var_460;
}return _uniq_var_459;
};_uniq_var_461.__lix_func__ = true;return _uniq_var_461;})()(expr[2][0], _uniq_var_200);
_uniq_var_201;
(expr[2][0] = _uniq_var_201);
var _uniq_var_202 = call(whileDefine);
_uniq_var_202;
var _uniq_var_204 = foreach(_uniq_var_202, (function () {var _uniq_var_462 = function (i) {var _uniq_var_203 = define(i, true);
_uniq_var_203;
return _uniq_var_203;
};_uniq_var_462.__lix_func__ = true;return _uniq_var_462;})());
_uniq_var_204;
_uniq_var_204;
var _uniq_var_205 = define(expr, true);
_uniq_var_205;
_uniq_var_205;
return ['', '{empty}'];
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_468 = function (expr, define) {var _uniq_var_206 = flatten(expr[0], define);
_uniq_var_206;
var ret = _uniq_var_206;
ret;
ret;
var _uniq_var_207 = true;
_uniq_var_207;
var _uniq_var_208 = null;
_uniq_var_208;
var _uniq_var_210 = __ne__(ret[2], 'var');
_uniq_var_210;
if ((_uniq_var_207 && _uniq_var_210)) {
(_uniq_var_207 = false);
var _uniq_var_209 = define(ret);
_uniq_var_209;
var ret = _uniq_var_209;
ret;
(_uniq_var_208 = ret);

};
_uniq_var_208;
var getAndOpSeq = (function () {var _uniq_var_467 = function () {var _uniq_var_211 = call(statementFlattenGenerator);
_uniq_var_211;
var AndDefine = _uniq_var_211;
AndDefine;
AndDefine;
var _uniq_var_212 = flatten(expr[2], AndDefine);
_uniq_var_212;
var seqRet = _uniq_var_212;
seqRet;
seqRet;
var _uniq_var_213 = call(AndDefine);
_uniq_var_213;
var seq = _uniq_var_213;
seq;
seq;
var _uniq_var_214 = (function () {var _uniq_var_466 = function (_uniq_var_464, _uniq_var_465) {
if (typeof _uniq_var_464.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_464.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_464.push.apply(_uniq_var_464, arguments);
} else if (_uniq_var_464.push !== undefined) {
if (_uniq_var_465 === undefined) {
return _uniq_var_464.push;
}
_uniq_var_464.push = _uniq_var_465;
}return _uniq_var_464;
};_uniq_var_466.__lix_func__ = true;return _uniq_var_466;})()(seq, [ret, '=', seqRet]);
_uniq_var_214;
_uniq_var_214;
return [seq, '{seq}'];
};_uniq_var_467.__lix_func__ = true;return _uniq_var_467;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_215 = call(getAndOpSeq);
_uniq_var_215;
var _uniq_var_216 = define([[[ret, [[], '{empty}']], [_uniq_var_215, 'else']], 'if'], true);
_uniq_var_216;
_uniq_var_216;
return ret;
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_473 = function (expr, define) {var _uniq_var_217 = flatten(expr[0], define);
_uniq_var_217;
var ret = _uniq_var_217;
ret;
ret;
var _uniq_var_218 = true;
_uniq_var_218;
var _uniq_var_219 = null;
_uniq_var_219;
var _uniq_var_221 = __ne__(ret[2], 'var');
_uniq_var_221;
if ((_uniq_var_218 && _uniq_var_221)) {
(_uniq_var_218 = false);
var _uniq_var_220 = define(ret);
_uniq_var_220;
var ret = _uniq_var_220;
ret;
(_uniq_var_219 = ret);

};
_uniq_var_219;
var getAndOpSeq = (function () {var _uniq_var_472 = function () {var _uniq_var_222 = call(statementFlattenGenerator);
_uniq_var_222;
var AndDefine = _uniq_var_222;
AndDefine;
AndDefine;
var _uniq_var_223 = flatten(expr[2], AndDefine);
_uniq_var_223;
var seqRet = _uniq_var_223;
seqRet;
seqRet;
var _uniq_var_224 = call(AndDefine);
_uniq_var_224;
var seq = _uniq_var_224;
seq;
seq;
var _uniq_var_225 = (function () {var _uniq_var_471 = function (_uniq_var_469, _uniq_var_470) {
if (typeof _uniq_var_469.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_469.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_469.push.apply(_uniq_var_469, arguments);
} else if (_uniq_var_469.push !== undefined) {
if (_uniq_var_470 === undefined) {
return _uniq_var_469.push;
}
_uniq_var_469.push = _uniq_var_470;
}return _uniq_var_469;
};_uniq_var_471.__lix_func__ = true;return _uniq_var_471;})()(seq, [ret, '=', seqRet]);
_uniq_var_225;
_uniq_var_225;
return [seq, '{seq}'];
};_uniq_var_472.__lix_func__ = true;return _uniq_var_472;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_226 = call(getAndOpSeq);
_uniq_var_226;
var _uniq_var_227 = define([[[ret, _uniq_var_226]], 'if'], true);
_uniq_var_227;
_uniq_var_227;
return ret;
};_uniq_var_473.__lix_func__ = true;return _uniq_var_473;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_478 = function (expr, define, tmpVar, ctx) {var _uniq_var_240 = foreach(expr[0], (function () {var _uniq_var_477 = function (i) {var _uniq_var_228 = true;
_uniq_var_228;
var _uniq_var_229 = null;
_uniq_var_229;
var _uniq_var_232 = __eq__(i[1], 'else');
_uniq_var_232;
if ((_uniq_var_228 && _uniq_var_232)) {
(_uniq_var_228 = false);
var _uniq_var_230 = flatten(i[0], define0, ctx);
_uniq_var_230;
var elseSeq = _uniq_var_230;
elseSeq;
elseSeq;
var _uniq_var_231 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_231;
(_uniq_var_229 = _uniq_var_231);

};
var _uniq_var_235 = __eq__(i[1], 'if');
_uniq_var_235;
if ((_uniq_var_228 && _uniq_var_235)) {
(_uniq_var_228 = false);
var _uniq_var_233 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_233;
var _uniq_var_234 = define(_uniq_var_233);
_uniq_var_234;
(_uniq_var_229 = _uniq_var_234);

};
if (_uniq_var_228) {
var _uniq_var_236 = flatten(i[1], define0, ctx);
_uniq_var_236;
var ifSeq = _uniq_var_236;
ifSeq;
ifSeq;
var _uniq_var_237 = (function () {var _uniq_var_476 = function (_uniq_var_474, _uniq_var_475) {
if (typeof _uniq_var_474.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_474.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_474.unshift.apply(_uniq_var_474, arguments);
} else if (_uniq_var_474.unshift !== undefined) {
if (_uniq_var_475 === undefined) {
return _uniq_var_474.unshift;
}
_uniq_var_474.unshift = _uniq_var_475;
}return _uniq_var_474;
};_uniq_var_476.__lix_func__ = true;return _uniq_var_476;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_237;
_uniq_var_237;
var _uniq_var_238 = flatten(i[0], define);
_uniq_var_238;
var cond = _uniq_var_238;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_239 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_239;
(_uniq_var_229 = _uniq_var_239);

};
return _uniq_var_229;
};_uniq_var_477.__lix_func__ = true;return _uniq_var_477;})());
_uniq_var_240;
return _uniq_var_240;
};_uniq_var_478.__lix_func__ = true;return _uniq_var_478;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_479 = function (expr, define) {var _uniq_var_241 = define(['true', '{atomic}'], 'new');
_uniq_var_241;
var tmpVar = _uniq_var_241;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_242 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_242;
_uniq_var_242;
return retVar;
};_uniq_var_479.__lix_func__ = true;return _uniq_var_479;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_480 = function (expr, define) {var _uniq_var_243 = flatten(expr[2], define);
_uniq_var_243;
(expr[2] = _uniq_var_243);
return expr;
};_uniq_var_480.__lix_func__ = true;return _uniq_var_480;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_484 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_244 = true;
_uniq_var_244;
var _uniq_var_245 = null;
_uniq_var_245;
var _uniq_var_249 = __gt__(expr.length, 3);
_uniq_var_249;
if ((_uniq_var_244 && _uniq_var_249)) {
(_uniq_var_244 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_246 = __lt__(i, expr.length);
_uniq_var_246;
while (_uniq_var_246) {
var _uniq_var_247 = (function () {var _uniq_var_483 = function (_uniq_var_481, _uniq_var_482) {
if (typeof _uniq_var_481.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_481.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_481.push.apply(_uniq_var_481, arguments);
} else if (_uniq_var_481.push !== undefined) {
if (_uniq_var_482 === undefined) {
return _uniq_var_481.push;
}
_uniq_var_481.push = _uniq_var_482;
}return _uniq_var_481;
};_uniq_var_483.__lix_func__ = true;return _uniq_var_483;})()(partialExpr, expr[i]);
_uniq_var_247;
_uniq_var_247;
var _uniq_var_248 = __add__(i, 1);
_uniq_var_248;
(i = _uniq_var_248);
var _uniq_var_246 = __lt__(i, expr.length);
_uniq_var_246;
}
null;
(_uniq_var_245 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_245;
var _uniq_var_250 = flattenExpr(expr, define);
_uniq_var_250;
return _uniq_var_250;
};_uniq_var_484.__lix_func__ = true;return _uniq_var_484;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_485 = function (expr, define) {var _uniq_var_251 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_251;
return _uniq_var_251;
};_uniq_var_485.__lix_func__ = true;return _uniq_var_485;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_486 = function (expr, define) {var _uniq_var_252 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_252;
return _uniq_var_252;
};_uniq_var_486.__lix_func__ = true;return _uniq_var_486;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_487 = function (expr, define) {var _uniq_var_253 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_253;
return _uniq_var_253;
};_uniq_var_487.__lix_func__ = true;return _uniq_var_487;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_488 = function (expr, define) {var _uniq_var_254 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_254;
return _uniq_var_254;
};_uniq_var_488.__lix_func__ = true;return _uniq_var_488;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_489 = function (expr, define) {var _uniq_var_255 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_255;
return _uniq_var_255;
};_uniq_var_489.__lix_func__ = true;return _uniq_var_489;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_490 = function (expr, define) {var _uniq_var_256 = flatten(expr[0], define);
_uniq_var_256;
(expr[0] = _uniq_var_256);
return expr;
};_uniq_var_490.__lix_func__ = true;return _uniq_var_490;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_491 = function (expr, define) {return expr;
};_uniq_var_491.__lix_func__ = true;return _uniq_var_491;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_493 = function (expr, define) {var _uniq_var_258 = map(expr[0], (function () {var _uniq_var_492 = function (i) {var _uniq_var_257 = flatten(i, define);
_uniq_var_257;
return _uniq_var_257;
};_uniq_var_492.__lix_func__ = true;return _uniq_var_492;})());
_uniq_var_258;
(expr[0] = _uniq_var_258);
return expr;
};_uniq_var_493.__lix_func__ = true;return _uniq_var_493;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_494 = function (expr, define) {return expr;
};_uniq_var_494.__lix_func__ = true;return _uniq_var_494;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_495 = function (expr, define) {var _uniq_var_259 = true;
_uniq_var_259;
var _uniq_var_260 = null;
_uniq_var_260;
var _uniq_var_262 = __eq__(expr[1], '{index}');
_uniq_var_262;
if ((_uniq_var_259 && _uniq_var_262)) {
(_uniq_var_259 = false);
var _uniq_var_261 = flatten(expr[0], define);
_uniq_var_261;
(_uniq_var_260 = (expr[0] = _uniq_var_261));

};
_uniq_var_260;
return expr;
};_uniq_var_495.__lix_func__ = true;return _uniq_var_495;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_500 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_499 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_263 = true;
_uniq_var_263;
var _uniq_var_264 = null;
_uniq_var_264;
var _uniq_var_270 = __eq__(arguments.length, 2);
_uniq_var_270;
if ((_uniq_var_263 && _uniq_var_270)) {
(_uniq_var_263 = false);
var _uniq_var_265 = true;
_uniq_var_265;
var _uniq_var_266 = null;
_uniq_var_266;
var _uniq_var_269 = __eq__(defined[name], undefined);
_uniq_var_269;
if ((_uniq_var_265 && _uniq_var_269)) {
(_uniq_var_265 = false);
var _uniq_var_267 = call(getUniqVarName);
_uniq_var_267;
var varName = _uniq_var_267;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_268 = (function () {var _uniq_var_498 = function (_uniq_var_496, _uniq_var_497) {
if (typeof _uniq_var_496.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_496.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_496.push.apply(_uniq_var_496, arguments);
} else if (_uniq_var_496.push !== undefined) {
if (_uniq_var_497 === undefined) {
return _uniq_var_496.push;
}
_uniq_var_496.push = _uniq_var_497;
}return _uniq_var_496;
};_uniq_var_498.__lix_func__ = true;return _uniq_var_498;})()(statements, [lixVar, ':=', value]);
_uniq_var_268;
_uniq_var_268;
(_uniq_var_266 = (defined[name] = lixVar));

};
_uniq_var_266;
(_uniq_var_264 = (ret = defined[name]));

};
if (_uniq_var_263) {
(_uniq_var_264 = (ret = statements));

};
_uniq_var_264;
return ret;
};_uniq_var_499.__lix_func__ = true;return _uniq_var_499;})();
};_uniq_var_500.__lix_func__ = true;return _uniq_var_500;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_271 = call(NewGlobalDefine);
_uniq_var_271;
var globalDefine = _uniq_var_271;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_501 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_272 = true;
_uniq_var_272;
var _uniq_var_273 = null;
_uniq_var_273;
var _uniq_var_275 = __eq__(expr[0][3], '{global}');
_uniq_var_275;
if ((_uniq_var_272 && _uniq_var_275)) {
(_uniq_var_272 = false);
var _uniq_var_274 = globalDefine(expr[0][0], expr);
_uniq_var_274;
(_uniq_var_273 = (ret = _uniq_var_274));

};
if (_uniq_var_272) {
var _uniq_var_276 = flattenField(expr[0], define);
_uniq_var_276;
(expr[0] = _uniq_var_276);
(_uniq_var_273 = (ret = expr));

};
_uniq_var_273;
return ret;
};_uniq_var_501.__lix_func__ = true;return _uniq_var_501;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_502 = function (expr, define) {var _uniq_var_277 = flatten(expr[2], define);
_uniq_var_277;
(expr[2] = _uniq_var_277);
return expr;
};_uniq_var_502.__lix_func__ = true;return _uniq_var_502;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_504 = function (expr, define) {var _uniq_var_279 = map(expr[0], (function () {var _uniq_var_503 = function (i) {var _uniq_var_278 = flattenProperty(i, define);
_uniq_var_278;
return _uniq_var_278;
};_uniq_var_503.__lix_func__ = true;return _uniq_var_503;})());
_uniq_var_279;
(expr[0] = _uniq_var_279);
return expr;
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_506 = function (expr, define) {var _uniq_var_281 = map(expr[0], (function () {var _uniq_var_505 = function (i) {var _uniq_var_280 = flatten(i, define);
_uniq_var_280;
return _uniq_var_280;
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})());
_uniq_var_281;
(expr[0] = _uniq_var_281);
return expr;
};_uniq_var_506.__lix_func__ = true;return _uniq_var_506;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_507 = function (expr, define) {var _uniq_var_282 = flatten(expr[2], define);
_uniq_var_282;
(expr[2] = _uniq_var_282);
return expr;
};_uniq_var_507.__lix_func__ = true;return _uniq_var_507;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_508 = function (expr, define) {var _uniq_var_283 = true;
_uniq_var_283;
var _uniq_var_284 = null;
_uniq_var_284;
var _uniq_var_287 = __eq__(expr[1], '{.}');
_uniq_var_287;
if ((_uniq_var_283 && _uniq_var_287)) {
(_uniq_var_283 = false);
var _uniq_var_285 = flattenFieldAccess(expr[0], define);
_uniq_var_285;
(expr[0] = _uniq_var_285);
var _uniq_var_286 = flattenField(expr[2], define);
_uniq_var_286;
(_uniq_var_284 = (expr[2] = _uniq_var_286));

};
if (_uniq_var_283) {
var _uniq_var_288 = flatten(expr, define);
_uniq_var_288;
(_uniq_var_284 = (expr = _uniq_var_288));

};
_uniq_var_284;
return expr;
};_uniq_var_508.__lix_func__ = true;return _uniq_var_508;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_509 = function (expr, define) {return expr;
};_uniq_var_509.__lix_func__ = true;return _uniq_var_509;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_510 = function (expr, define) {var _uniq_var_289 = flatten(expr[0], define);
_uniq_var_289;
return _uniq_var_289;
};_uniq_var_510.__lix_func__ = true;return _uniq_var_510;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_524 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_523 = function (statement, tmpVarName) {var _uniq_var_290 = true;
_uniq_var_290;
var _uniq_var_291 = null;
_uniq_var_291;
var _uniq_var_292 = __eq__(statement, undefined);
_uniq_var_292;
if ((_uniq_var_290 && _uniq_var_292)) {
(_uniq_var_290 = false);
(_uniq_var_291 = data);

};
var _uniq_var_294 = __eq__(tmpVarName, true);
_uniq_var_294;
if ((_uniq_var_290 && _uniq_var_294)) {
(_uniq_var_290 = false);
var _uniq_var_293 = (function () {var _uniq_var_513 = function (_uniq_var_511, _uniq_var_512) {
if (typeof _uniq_var_511.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_511.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_511.push.apply(_uniq_var_511, arguments);
} else if (_uniq_var_511.push !== undefined) {
if (_uniq_var_512 === undefined) {
return _uniq_var_511.push;
}
_uniq_var_511.push = _uniq_var_512;
}return _uniq_var_511;
};_uniq_var_513.__lix_func__ = true;return _uniq_var_513;})()(data, statement);
_uniq_var_293;
(_uniq_var_291 = _uniq_var_293);

};
var _uniq_var_298 = __eq__(tmpVarName, undefined);
_uniq_var_298;
if ((_uniq_var_290 && _uniq_var_298)) {
(_uniq_var_290 = false);
var _uniq_var_295 = call(getUniqVarName);
_uniq_var_295;
var varName = _uniq_var_295;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_296 = (function () {var _uniq_var_516 = function (_uniq_var_514, _uniq_var_515) {
if (typeof _uniq_var_514.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_514.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_514.push.apply(_uniq_var_514, arguments);
} else if (_uniq_var_514.push !== undefined) {
if (_uniq_var_515 === undefined) {
return _uniq_var_514.push;
}
_uniq_var_514.push = _uniq_var_515;
}return _uniq_var_514;
};_uniq_var_516.__lix_func__ = true;return _uniq_var_516;})()(data, statement);
_uniq_var_296;
_uniq_var_296;
var _uniq_var_297 = (function () {var _uniq_var_519 = function (_uniq_var_517, _uniq_var_518) {
if (typeof _uniq_var_517.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_517.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_517.push.apply(_uniq_var_517, arguments);
} else if (_uniq_var_517.push !== undefined) {
if (_uniq_var_518 === undefined) {
return _uniq_var_517.push;
}
_uniq_var_517.push = _uniq_var_518;
}return _uniq_var_517;
};_uniq_var_519.__lix_func__ = true;return _uniq_var_519;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_297;
_uniq_var_297;
(_uniq_var_291 = lixVar);

};
var _uniq_var_301 = __eq__(tmpVarName, 'new');
_uniq_var_301;
if ((_uniq_var_290 && _uniq_var_301)) {
(_uniq_var_290 = false);
var _uniq_var_299 = call(getUniqVarName);
_uniq_var_299;
var varName = _uniq_var_299;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_300 = (function () {var _uniq_var_522 = function (_uniq_var_520, _uniq_var_521) {
if (typeof _uniq_var_520.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_520.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_520.push.apply(_uniq_var_520, arguments);
} else if (_uniq_var_520.push !== undefined) {
if (_uniq_var_521 === undefined) {
return _uniq_var_520.push;
}
_uniq_var_520.push = _uniq_var_521;
}return _uniq_var_520;
};_uniq_var_522.__lix_func__ = true;return _uniq_var_522;})()(data, [lixVar, ':=', statement]);
_uniq_var_300;
_uniq_var_300;
(_uniq_var_291 = lixVar);

};
return _uniq_var_291;
};_uniq_var_523.__lix_func__ = true;return _uniq_var_523;})();
};_uniq_var_524.__lix_func__ = true;return _uniq_var_524;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_536 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_525 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_302 = true;
_uniq_var_302;
var _uniq_var_303 = null;
_uniq_var_303;
var _uniq_var_305 = seqCtx;
_uniq_var_305;
if (_uniq_var_305) {
var _uniq_var_306 = parseInt(index);
_uniq_var_306;
var _uniq_var_307 = __sub__(expr[0].length, 1);
_uniq_var_307;
var _uniq_var_308 = __eq__(_uniq_var_306, _uniq_var_307);
_uniq_var_308;
(_uniq_var_305 = _uniq_var_308);

};
if ((_uniq_var_302 && _uniq_var_305)) {
(_uniq_var_302 = false);
var _uniq_var_304 = seqCtx(stmt);
_uniq_var_304;
var ret = _uniq_var_304;
ret;
(_uniq_var_303 = ret);

};
_uniq_var_303;
return ret;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})();
ctx;
ctx;
var _uniq_var_335 = foreach(expr[0], (function () {var _uniq_var_535 = function (item, index) {var _uniq_var_309 = call(statementFlattenGenerator);
_uniq_var_309;
var exprDefine = _uniq_var_309;
exprDefine;
exprDefine;
var _uniq_var_310 = flatten(item, exprDefine);
_uniq_var_310;
var itemRet = _uniq_var_310;
itemRet;
itemRet;
var _uniq_var_311 = call(exprDefine);
_uniq_var_311;
var _uniq_var_312 = (function () {var _uniq_var_528 = function (_uniq_var_526, _uniq_var_527) {
if (typeof _uniq_var_526.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_526.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_526.concat.apply(_uniq_var_526, arguments);
} else if (_uniq_var_526.concat !== undefined) {
if (_uniq_var_527 === undefined) {
return _uniq_var_526.concat;
}
_uniq_var_526.concat = _uniq_var_527;
}return _uniq_var_526;
};_uniq_var_528.__lix_func__ = true;return _uniq_var_528;})()(ret, _uniq_var_311);
_uniq_var_312;
(ret = _uniq_var_312);
var _uniq_var_313 = ctx(itemRet, index);
_uniq_var_313;
var stmtRet = _uniq_var_313;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_529 = function (expr) {var _uniq_var_314 = __eq__(expr[1], '{atomic}');
_uniq_var_314;
var _uniq_var_315 = _uniq_var_314;
_uniq_var_315;
if (_uniq_var_315) {
var _uniq_var_316 = __ne__(expr[3], undefined);
_uniq_var_316;
(_uniq_var_315 = _uniq_var_316);

};
return _uniq_var_315;
};_uniq_var_529.__lix_func__ = true;return _uniq_var_529;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_530 = function (expr) {var _uniq_var_317 = __eq__(expr[1], '{atomic}');
_uniq_var_317;
var _uniq_var_318 = _uniq_var_317;
_uniq_var_318;
if (_uniq_var_318) {
var _uniq_var_319 = __eq__(expr[3], undefined);
_uniq_var_319;
(_uniq_var_318 = _uniq_var_319);

};
return _uniq_var_318;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_531 = function (expr) {var _uniq_var_320 = isRealVar(expr);
_uniq_var_320;
var _uniq_var_321 = _uniq_var_320;
_uniq_var_321;
if (not(_uniq_var_321)) {
var _uniq_var_322 = __ne__(expr[1], 'if');
_uniq_var_322;
var _uniq_var_323 = _uniq_var_322;
_uniq_var_323;
if (_uniq_var_323) {
var _uniq_var_324 = __ne__(expr[1], 'while');
_uniq_var_324;
(_uniq_var_323 = _uniq_var_324);

};
(_uniq_var_321 = _uniq_var_323);

};
return _uniq_var_321;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})();
isRealExpr;
isRealExpr;
var _uniq_var_325 = true;
_uniq_var_325;
var _uniq_var_326 = null;
_uniq_var_326;
var _uniq_var_331 = __ne__(stmtRet[1], '{empty}');
_uniq_var_331;
var _uniq_var_332 = _uniq_var_331;
_uniq_var_332;
if (_uniq_var_332) {
var _uniq_var_333 = isTmpVar(stmtRet);
_uniq_var_333;
var _uniq_var_334 = not(_uniq_var_333);
_uniq_var_334;
(_uniq_var_332 = _uniq_var_334);

};
if ((_uniq_var_325 && _uniq_var_332)) {
(_uniq_var_325 = false);
var _uniq_var_327 = true;
_uniq_var_327;
var _uniq_var_328 = null;
_uniq_var_328;
var _uniq_var_329 = isRealExpr(stmtRet);
_uniq_var_329;
if ((_uniq_var_327 && _uniq_var_329)) {
(_uniq_var_327 = false);
(_uniq_var_328 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_328;
var _uniq_var_330 = (function () {var _uniq_var_534 = function (_uniq_var_532, _uniq_var_533) {
if (typeof _uniq_var_532.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_532.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_532.push.apply(_uniq_var_532, arguments);
} else if (_uniq_var_532.push !== undefined) {
if (_uniq_var_533 === undefined) {
return _uniq_var_532.push;
}
_uniq_var_532.push = _uniq_var_533;
}return _uniq_var_532;
};_uniq_var_534.__lix_func__ = true;return _uniq_var_534;})()(ret, stmtRet);
_uniq_var_330;
(_uniq_var_326 = _uniq_var_330);

};
return _uniq_var_326;
};_uniq_var_535.__lix_func__ = true;return _uniq_var_535;})());
_uniq_var_335;
_uniq_var_335;
(expr[0] = ret);
return expr;
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_543 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_336 = flatten(expr[0], define);
_uniq_var_336;
var ret = _uniq_var_336;
ret;
ret;
var _uniq_var_337 = call(globalDefine);
_uniq_var_337;
var _uniq_var_338 = (function () {var _uniq_var_539 = function (_uniq_var_537, _uniq_var_538) {
if (typeof _uniq_var_537.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_537.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_537.concat.apply(_uniq_var_537, arguments);
} else if (_uniq_var_537.concat !== undefined) {
if (_uniq_var_538 === undefined) {
return _uniq_var_537.concat;
}
_uniq_var_537.concat = _uniq_var_538;
}return _uniq_var_537;
};_uniq_var_539.__lix_func__ = true;return _uniq_var_539;})()(trapExpr, _uniq_var_337);
_uniq_var_338;
var _uniq_var_339 = (function () {var _uniq_var_542 = function (_uniq_var_540, _uniq_var_541) {
if (typeof _uniq_var_540.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_540.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_540.concat.apply(_uniq_var_540, arguments);
} else if (_uniq_var_540.concat !== undefined) {
if (_uniq_var_541 === undefined) {
return _uniq_var_540.concat;
}
_uniq_var_540.concat = _uniq_var_541;
}return _uniq_var_540;
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})()(_uniq_var_338, ret[0]);
_uniq_var_339;
(ret[0] = _uniq_var_339);
return [ret, '{start}'];
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_547 = function (expr, define) {var _uniq_var_340 = true;
_uniq_var_340;
var _uniq_var_341 = null;
_uniq_var_341;
var _uniq_var_343 = __eq__(expr[2], '{var}');
_uniq_var_343;
if ((_uniq_var_340 && _uniq_var_343)) {
(_uniq_var_340 = false);
var _uniq_var_342 = (function () {var _uniq_var_546 = function (_uniq_var_544, _uniq_var_545) {
if (typeof _uniq_var_544.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_544.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_544.join.apply(_uniq_var_544, arguments);
} else if (_uniq_var_544.join !== undefined) {
if (_uniq_var_545 === undefined) {
return _uniq_var_544.join;
}
_uniq_var_544.join = _uniq_var_545;
}return _uniq_var_544;
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})()(['"', expr[0], '"'], '');
_uniq_var_342;
var name = [_uniq_var_342, '{atomic}'];
name;
(_uniq_var_341 = name);

};
var _uniq_var_345 = __eq__(expr[2], '{index}');
_uniq_var_345;
if ((_uniq_var_340 && _uniq_var_345)) {
(_uniq_var_340 = false);
var _uniq_var_344 = flatten(expr[0], define);
_uniq_var_344;
var name = _uniq_var_344;
name;
(_uniq_var_341 = name);

};
_uniq_var_341;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_346 = define(moduleExpr);
_uniq_var_346;
return _uniq_var_346;
};_uniq_var_547.__lix_func__ = true;return _uniq_var_547;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_548 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_548.__lix_func__ = true;return _uniq_var_548;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_549 = function (expr, define) {return expr;
};_uniq_var_549.__lix_func__ = true;return _uniq_var_549;})();
flattenAmpersand;
flattenAmpersand;
var flattenAsterisk = (function () {var _uniq_var_550 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_347 = flatten(expr, define);
_uniq_var_347;
return _uniq_var_347;
};_uniq_var_550.__lix_func__ = true;return _uniq_var_550;})();
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
var flattenOp = (function () {var _uniq_var_551 = function (hint) {var _uniq_var_348 = true;
_uniq_var_348;
var _uniq_var_349 = null;
_uniq_var_349;
if ((_uniq_var_348 && flattenOpTable[hint])) {
(_uniq_var_348 = false);
(_uniq_var_349 = flattenOpTable[hint]);

};
if (_uniq_var_348) {
(_uniq_var_349 = flattenExpr);

};
return _uniq_var_349;
};_uniq_var_551.__lix_func__ = true;return _uniq_var_551;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_552 = function (expr, define, ctx) {var _uniq_var_350 = flattenOp(expr[1]);
_uniq_var_350;
var _uniq_var_351 = _uniq_var_350(expr, define, ctx);
_uniq_var_351;
return _uniq_var_351;
};_uniq_var_552.__lix_func__ = true;return _uniq_var_552;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_553 = function (i) {return i;
};_uniq_var_553.__lix_func__ = true;return _uniq_var_553;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_554 = function (i) {;
};_uniq_var_554.__lix_func__ = true;return _uniq_var_554;})(),
appendExpr: (function () {var _uniq_var_555 = function (i) {;
};_uniq_var_555.__lix_func__ = true;return _uniq_var_555;})()
};
def0;
def0;
var _uniq_var_352 = join(['s[', STEP, ']']);
_uniq_var_352;
var _uniq_var_353 = join(['s[', RET, ']']);
_uniq_var_353;
var seqFuncParamsName = {
step: _uniq_var_352,
ret: _uniq_var_353
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_562 = function (expr) {var _uniq_var_354 = map(env0, (function () {var _uniq_var_556 = function (i) {return i;
};_uniq_var_556.__lix_func__ = true;return _uniq_var_556;})());
_uniq_var_354;
var _uniq_var_355 = (function () {var _uniq_var_559 = function (_uniq_var_557, _uniq_var_558) {
if (typeof _uniq_var_557.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_557.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_557.join.apply(_uniq_var_557, arguments);
} else if (_uniq_var_557.join !== undefined) {
if (_uniq_var_558 === undefined) {
return _uniq_var_557.join;
}
_uniq_var_557.join = _uniq_var_558;
}return _uniq_var_557;
};_uniq_var_559.__lix_func__ = true;return _uniq_var_559;})()(_uniq_var_354, "\n");
_uniq_var_355;
var libs = _uniq_var_355;
libs;
libs;
var _uniq_var_356 = flatten(expr, (function () {var _uniq_var_560 = function (i) {;
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})(), (function () {var _uniq_var_561 = function (i) {return i;
};_uniq_var_561.__lix_func__ = true;return _uniq_var_561;})());
_uniq_var_356;
var flattenedExpr = _uniq_var_356;
flattenedExpr;
flattenedExpr;
var _uniq_var_357 = call(env_new);
_uniq_var_357;
var _uniq_var_358 = generateStart(flattenedExpr, _uniq_var_357, ctx0, def0);
_uniq_var_358;
var code = _uniq_var_358;
code;
code;
var _uniq_var_359 = join([libs, "\n", code]);
_uniq_var_359;
return _uniq_var_359;
};_uniq_var_562.__lix_func__ = true;return _uniq_var_562;})();
compile;
compile;
(exports.compile = compile);
compile;

