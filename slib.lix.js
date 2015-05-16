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
var join = (function () {var _uniq_var_360 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_359 = function (_uniq_var_357, _uniq_var_358) {
if (typeof _uniq_var_357.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_357.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_357.join.apply(_uniq_var_357, arguments);
} else if (_uniq_var_357.join !== undefined) {
if (_uniq_var_358 === undefined) {
return _uniq_var_357.join;
}
_uniq_var_357.join = _uniq_var_358;
}return _uniq_var_357;
};_uniq_var_359.__lix_func__ = true;return _uniq_var_359;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_360.__lix_func__ = true;return _uniq_var_360;})();
join;
join;
var map = (function () {var _uniq_var_365 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_364 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_363 = function (_uniq_var_361, _uniq_var_362) {
if (typeof _uniq_var_361.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_361.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_361.push.apply(_uniq_var_361, arguments);
} else if (_uniq_var_361.push !== undefined) {
if (_uniq_var_362 === undefined) {
return _uniq_var_361.push;
}
_uniq_var_361.push = _uniq_var_362;
}return _uniq_var_361;
};_uniq_var_363.__lix_func__ = true;return _uniq_var_363;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_364.__lix_func__ = true;return _uniq_var_364;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_365.__lix_func__ = true;return _uniq_var_365;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_367 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_366 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_366.__lix_func__ = true;return _uniq_var_366;})();
};_uniq_var_367.__lix_func__ = true;return _uniq_var_367;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_368 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_368.__lix_func__ = true;return _uniq_var_368;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_373 = function (args, env, ctx) {var _uniq_var_9 = map(args, (function () {var _uniq_var_369 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
_uniq_var_8;
var varname = _uniq_var_8;
varname;
varname;
(env[varname] = true);
return varname;
};_uniq_var_369.__lix_func__ = true;return _uniq_var_369;})());
_uniq_var_9;
var _uniq_var_10 = (function () {var _uniq_var_372 = function (_uniq_var_370, _uniq_var_371) {
if (typeof _uniq_var_370.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_370.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_370.join.apply(_uniq_var_370, arguments);
} else if (_uniq_var_370.join !== undefined) {
if (_uniq_var_371 === undefined) {
return _uniq_var_370.join;
}
_uniq_var_370.join = _uniq_var_371;
}return _uniq_var_370;
};_uniq_var_372.__lix_func__ = true;return _uniq_var_372;})()(_uniq_var_9, ', ');
_uniq_var_10;
return _uniq_var_10;
};_uniq_var_373.__lix_func__ = true;return _uniq_var_373;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_374 = function (x) {return x;
};_uniq_var_374.__lix_func__ = true;return _uniq_var_374;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_381 = function (expr, env, ctx, def) {var _uniq_var_11 = call(getUniqVarName);
_uniq_var_11;
var funcName = _uniq_var_11;
funcName;
funcName;
var _uniq_var_12 = call(counterGenerator);
_uniq_var_12;
var getCount = _uniq_var_12;
getCount;
getCount;
var ctx = (function () {var _uniq_var_376 = function (current) {return (function () {var _uniq_var_375 = function (v, loop) {var next = current;
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
};_uniq_var_375.__lix_func__ = true;return _uniq_var_375;})();
};_uniq_var_376.__lix_func__ = true;return _uniq_var_376;})();
ctx;
ctx;
var _uniq_var_22 = map(expr[0], (function () {var _uniq_var_377 = function (item, index) {var _uniq_var_18 = call(getCount);
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
};_uniq_var_377.__lix_func__ = true;return _uniq_var_377;})());
_uniq_var_22;
var _uniq_var_23 = (function () {var _uniq_var_380 = function (_uniq_var_378, _uniq_var_379) {
if (typeof _uniq_var_378.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_378.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_378.join.apply(_uniq_var_378, arguments);
} else if (_uniq_var_378.join !== undefined) {
if (_uniq_var_379 === undefined) {
return _uniq_var_378.join;
}
_uniq_var_378.join = _uniq_var_379;
}return _uniq_var_378;
};_uniq_var_380.__lix_func__ = true;return _uniq_var_380;})()(_uniq_var_22, ";\n");
_uniq_var_23;
var body = _uniq_var_23;
body;
body;
var _uniq_var_24 = join(['function ', funcName, '(s) {\n', "var Lraise = raise(s);\n", 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_24;
var _uniq_var_25 = def.appendExpr(_uniq_var_24);
_uniq_var_25;
_uniq_var_25;
return funcName;
};_uniq_var_381.__lix_func__ = true;return _uniq_var_381;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_382 = function (expr, env, ctx, def) {var _uniq_var_26 = generate(expr[0], env, ctx, def);
_uniq_var_26;
var _uniq_var_27 = generate(expr[2], env, ctx, def);
_uniq_var_27;
var _uniq_var_28 = join(['(', _uniq_var_26, " || ", _uniq_var_27, ')']);
_uniq_var_28;
return _uniq_var_28;
};_uniq_var_382.__lix_func__ = true;return _uniq_var_382;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_383 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " && ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_383.__lix_func__ = true;return _uniq_var_383;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_388 = function (expr, env, ctx, def) {var _uniq_var_44 = map(expr[0], (function () {var _uniq_var_384 = function (i) {var _uniq_var_32 = true;
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
};_uniq_var_384.__lix_func__ = true;return _uniq_var_384;})());
_uniq_var_44;
var _uniq_var_45 = (function () {var _uniq_var_387 = function (_uniq_var_385, _uniq_var_386) {
if (typeof _uniq_var_385.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_385.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_385.join.apply(_uniq_var_385, arguments);
} else if (_uniq_var_385.join !== undefined) {
if (_uniq_var_386 === undefined) {
return _uniq_var_385.join;
}
_uniq_var_385.join = _uniq_var_386;
}return _uniq_var_385;
};_uniq_var_387.__lix_func__ = true;return _uniq_var_387;})()(_uniq_var_44, ' else ');
_uniq_var_45;
return _uniq_var_45;
};_uniq_var_388.__lix_func__ = true;return _uniq_var_388;})();
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
var generateAtomic = (function () {var _uniq_var_389 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_389.__lix_func__ = true;return _uniq_var_389;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_390 = function (expr, env, ctx, def) {var _uniq_var_54 = true;
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
};_uniq_var_390.__lix_func__ = true;return _uniq_var_390;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_391 = function (expr, env, ctx, def) {var _uniq_var_60 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_391.__lix_func__ = true;return _uniq_var_391;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_396 = function (expr, env, ctx, def) {var _uniq_var_64 = map(expr[0], (function () {var _uniq_var_392 = function (i) {var _uniq_var_63 = generateProperty(i, env, ctx, def);
_uniq_var_63;
return _uniq_var_63;
};_uniq_var_392.__lix_func__ = true;return _uniq_var_392;})());
_uniq_var_64;
var _uniq_var_65 = (function () {var _uniq_var_395 = function (_uniq_var_393, _uniq_var_394) {
if (typeof _uniq_var_393.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_393.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_393.join.apply(_uniq_var_393, arguments);
} else if (_uniq_var_393.join !== undefined) {
if (_uniq_var_394 === undefined) {
return _uniq_var_393.join;
}
_uniq_var_393.join = _uniq_var_394;
}return _uniq_var_393;
};_uniq_var_395.__lix_func__ = true;return _uniq_var_395;})()(_uniq_var_64, ",\n");
_uniq_var_65;
var objectBody = _uniq_var_65;
objectBody;
objectBody;
var _uniq_var_66 = join(["{\n", objectBody, "\n}"]);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_396.__lix_func__ = true;return _uniq_var_396;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_397 = function (name) {var _uniq_var_67 = true;
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
};_uniq_var_397.__lix_func__ = true;return _uniq_var_397;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_398 = function (expr) {var _uniq_var_79 = true;
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
};_uniq_var_398.__lix_func__ = true;return _uniq_var_398;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_399 = function (expr, env, ctx, def) {var _uniq_var_85 = true;
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
};_uniq_var_399.__lix_func__ = true;return _uniq_var_399;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_400 = function (expr, env, ctx, def) {var _uniq_var_93 = true;
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
};_uniq_var_400.__lix_func__ = true;return _uniq_var_400;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_405 = function (expr, env, ctx, def) {var _uniq_var_102 = map(expr[0], (function () {var _uniq_var_401 = function (i) {var _uniq_var_101 = generate(i, env, ctx, def);
_uniq_var_101;
return _uniq_var_101;
};_uniq_var_401.__lix_func__ = true;return _uniq_var_401;})());
_uniq_var_102;
var _uniq_var_103 = (function () {var _uniq_var_404 = function (_uniq_var_402, _uniq_var_403) {
if (typeof _uniq_var_402.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_402.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_402.join.apply(_uniq_var_402, arguments);
} else if (_uniq_var_402.join !== undefined) {
if (_uniq_var_403 === undefined) {
return _uniq_var_402.join;
}
_uniq_var_402.join = _uniq_var_403;
}return _uniq_var_402;
};_uniq_var_404.__lix_func__ = true;return _uniq_var_404;})()(_uniq_var_102, ', ');
_uniq_var_103;
var arrayBody = _uniq_var_103;
arrayBody;
arrayBody;
var _uniq_var_104 = join(['[', arrayBody, ']']);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_405.__lix_func__ = true;return _uniq_var_405;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_406 = function (expr, env, ctx) {var _uniq_var_105 = call(getUniqVarName);
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
};_uniq_var_406.__lix_func__ = true;return _uniq_var_406;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_407 = function (expr, env, ctx, def) {var _uniq_var_111 = generate(expr[0], env, ctx, def);
_uniq_var_111;
var _uniq_var_112 = generate(expr[2], env, ctx, def);
_uniq_var_112;
var _uniq_var_113 = ctx(_uniq_var_112, true);
_uniq_var_113;
var _uniq_var_114 = join(['while (', _uniq_var_111, ') {\n', _uniq_var_113, "\n}"]);
_uniq_var_114;
return _uniq_var_114;
};_uniq_var_407.__lix_func__ = true;return _uniq_var_407;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_408 = function (expr, env, ctx) {return 'break';
};_uniq_var_408.__lix_func__ = true;return _uniq_var_408;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_409 = function (expr, env, ctx, def) {return "";
};_uniq_var_409.__lix_func__ = true;return _uniq_var_409;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_410 = function (expr, env, ctx, def) {var _uniq_var_115 = getVarName(expr[0]);
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
};_uniq_var_410.__lix_func__ = true;return _uniq_var_410;})();
generateDef;
generateDef;
var generateAmpersand = (function () {var _uniq_var_414 = function (expr, env, ctx, def) {var _uniq_var_119 = true;
_uniq_var_119;
var _uniq_var_120 = null;
_uniq_var_120;
var _uniq_var_128 = __eq__(expr[0][1], '{atomic}');
_uniq_var_128;
if ((_uniq_var_119 && _uniq_var_128)) {
(_uniq_var_119 = false);
var _uniq_var_121 = getVarName(expr[0]);
_uniq_var_121;
var varname = _uniq_var_121;
varname;
varname;
var _uniq_var_122 = true;
_uniq_var_122;
var _uniq_var_123 = null;
_uniq_var_123;
var _uniq_var_125 = __eq__(env[varname], undefined);
_uniq_var_125;
var _uniq_var_126 = _uniq_var_125;
_uniq_var_126;
if (_uniq_var_126) {
var _uniq_var_127 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_127;
(_uniq_var_126 = _uniq_var_127);

};
if ((_uniq_var_122 && _uniq_var_126)) {
(_uniq_var_122 = false);
var _uniq_var_124 = generate([expr[0], '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_124;
(_uniq_var_123 = _uniq_var_124);

};
(_uniq_var_120 = _uniq_var_123);

};
if (_uniq_var_119) {
var _uniq_var_129 = generate(expr[0], env, ctx, def);
_uniq_var_129;
var varname = _uniq_var_129;
varname;
(_uniq_var_120 = varname);

};
_uniq_var_120;
var _uniq_var_130 = (function () {var _uniq_var_413 = function (_uniq_var_411, _uniq_var_412) {
if (typeof _uniq_var_411.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_411.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_411.join.apply(_uniq_var_411, arguments);
} else if (_uniq_var_411.join !== undefined) {
if (_uniq_var_412 === undefined) {
return _uniq_var_411.join;
}
_uniq_var_411.join = _uniq_var_412;
}return _uniq_var_411;
};_uniq_var_413.__lix_func__ = true;return _uniq_var_413;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_130;
return _uniq_var_130;
};_uniq_var_414.__lix_func__ = true;return _uniq_var_414;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_415 = function (expr, env, ctx, def) {var _uniq_var_131 = getVarName(expr[0]);
_uniq_var_131;
var varname = _uniq_var_131;
varname;
varname;
var ret = [];
ret;
ret;
var _uniq_var_132 = true;
_uniq_var_132;
var _uniq_var_133 = null;
_uniq_var_133;
var _uniq_var_135 = __eq__(env[varname], undefined);
_uniq_var_135;
var _uniq_var_136 = _uniq_var_135;
_uniq_var_136;
if (_uniq_var_136) {
var _uniq_var_137 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_137;
(_uniq_var_136 = _uniq_var_137);

};
if ((_uniq_var_132 && _uniq_var_136)) {
(_uniq_var_132 = false);
var _uniq_var_134 = generateDef(expr, env, ctx, def);
_uniq_var_134;
(_uniq_var_133 = (ret = _uniq_var_134));

};
if (_uniq_var_132) {
var _uniq_var_138 = generate(expr[0], env, ctx0, def);
_uniq_var_138;
var varname = _uniq_var_138;
varname;
varname;
var _uniq_var_139 = generate(expr[2], env, ctx, def);
_uniq_var_139;
var value = _uniq_var_139;
value;
value;
var _uniq_var_140 = join([varname, " = ", value]);
_uniq_var_140;
(_uniq_var_133 = (ret = _uniq_var_140));

};
_uniq_var_133;
return ret;
};_uniq_var_415.__lix_func__ = true;return _uniq_var_415;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_419 = function (expr, env, ctx, def) {var _uniq_var_141 = env_new(env);
_uniq_var_141;
var funcEnv = _uniq_var_141;
funcEnv;
funcEnv;
var _uniq_var_142 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_142;
var args = _uniq_var_142;
args;
args;
var _uniq_var_143 = call(getUniqVarName);
_uniq_var_143;
var tmpVar = _uniq_var_143;
tmpVar;
tmpVar;
var _uniq_var_144 = call(GenerateDefNew);
_uniq_var_144;
var def = _uniq_var_144;
def;
def;
var _uniq_var_145 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_145;
var body = _uniq_var_145;
body;
body;
var _uniq_var_146 = transformVarName('arguments');
_uniq_var_146;
var _uniq_var_147 = call(def.defineVar);
_uniq_var_147;
var _uniq_var_148 = call(def.appendExpr);
_uniq_var_148;
var _uniq_var_149 = (function () {var _uniq_var_418 = function (_uniq_var_416, _uniq_var_417) {
if (typeof _uniq_var_416.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_416.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_416.join.apply(_uniq_var_416, arguments);
} else if (_uniq_var_416.join !== undefined) {
if (_uniq_var_417 === undefined) {
return _uniq_var_416.join;
}
_uniq_var_416.join = _uniq_var_417;
}return _uniq_var_416;
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})()(['(function (', args, ') {\n', 'var ', _uniq_var_146, ' = arguments\n', _uniq_var_147, ";\n", _uniq_var_148, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_149;
return _uniq_var_149;
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
generateFunc;
generateFunc;
var generateExpr = (function () {var _uniq_var_421 = function (expr, env, ctx, def) {var _uniq_var_150 = generate(expr[1], env, ctx0, def);
_uniq_var_150;
var func = _uniq_var_150;
func;
func;
var _uniq_var_151 = generate(expr[0], env, ctx0, def);
_uniq_var_151;
var args = _uniq_var_151;
args;
args;
var _uniq_var_157 = foreach(expr, (function () {var _uniq_var_420 = function (item, index) {var _uniq_var_152 = true;
_uniq_var_152;
var _uniq_var_153 = null;
_uniq_var_153;
var _uniq_var_156 = __gt__(index, 1);
_uniq_var_156;
if ((_uniq_var_152 && _uniq_var_156)) {
(_uniq_var_152 = false);
var _uniq_var_154 = generate(item, env, ctx0, def);
_uniq_var_154;
var _uniq_var_155 = join([args, ', ', _uniq_var_154]);
_uniq_var_155;
(_uniq_var_153 = (args = _uniq_var_155));

};
return _uniq_var_153;
};_uniq_var_420.__lix_func__ = true;return _uniq_var_420;})());
_uniq_var_157;
_uniq_var_157;
var _uniq_var_158 = join([func, '(', args, ')']);
_uniq_var_158;
var _uniq_var_159 = ctx(_uniq_var_158);
_uniq_var_159;
return _uniq_var_159;
};_uniq_var_421.__lix_func__ = true;return _uniq_var_421;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_434 = function () {var vars = {

};
vars;
vars;
var funcs = [];
funcs;
funcs;
return {
defineVar: (function () {var _uniq_var_426 = function (v) {var _uniq_var_160 = true;
_uniq_var_160;
var _uniq_var_161 = null;
_uniq_var_161;
if ((_uniq_var_160 && v)) {
(_uniq_var_160 = false);
(_uniq_var_161 = (vars[v] = v));

};
if (_uniq_var_160) {
var _uniq_var_162 = map(vars, (function () {var _uniq_var_422 = function (i) {return i;
};_uniq_var_422.__lix_func__ = true;return _uniq_var_422;})());
_uniq_var_162;
var vecs = _uniq_var_162;
vecs;
vecs;
var _uniq_var_163 = true;
_uniq_var_163;
var _uniq_var_164 = null;
_uniq_var_164;
var _uniq_var_167 = __gt__(vecs.length, 0);
_uniq_var_167;
if ((_uniq_var_163 && _uniq_var_167)) {
(_uniq_var_163 = false);
var _uniq_var_165 = (function () {var _uniq_var_425 = function (_uniq_var_423, _uniq_var_424) {
if (typeof _uniq_var_423.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_423.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_423.join.apply(_uniq_var_423, arguments);
} else if (_uniq_var_423.join !== undefined) {
if (_uniq_var_424 === undefined) {
return _uniq_var_423.join;
}
_uniq_var_423.join = _uniq_var_424;
}return _uniq_var_423;
};_uniq_var_425.__lix_func__ = true;return _uniq_var_425;})()(vecs, ', ');
_uniq_var_165;
var _uniq_var_166 = __add__('var ', _uniq_var_165);
_uniq_var_166;
(_uniq_var_164 = _uniq_var_166);

};
if (_uniq_var_163) {
(_uniq_var_164 = '');

};
(_uniq_var_161 = _uniq_var_164);

};
return _uniq_var_161;
};_uniq_var_426.__lix_func__ = true;return _uniq_var_426;})(),
appendExpr: (function () {var _uniq_var_433 = function (v) {var _uniq_var_168 = true;
_uniq_var_168;
var _uniq_var_169 = null;
_uniq_var_169;
if ((_uniq_var_168 && v)) {
(_uniq_var_168 = false);
var _uniq_var_170 = (function () {var _uniq_var_429 = function (_uniq_var_427, _uniq_var_428) {
if (typeof _uniq_var_427.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_427.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_427.push.apply(_uniq_var_427, arguments);
} else if (_uniq_var_427.push !== undefined) {
if (_uniq_var_428 === undefined) {
return _uniq_var_427.push;
}
_uniq_var_427.push = _uniq_var_428;
}return _uniq_var_427;
};_uniq_var_429.__lix_func__ = true;return _uniq_var_429;})()(funcs, v);
_uniq_var_170;
(_uniq_var_169 = _uniq_var_170);

};
if (_uniq_var_168) {
var _uniq_var_171 = (function () {var _uniq_var_432 = function (_uniq_var_430, _uniq_var_431) {
if (typeof _uniq_var_430.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_430.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_430.join.apply(_uniq_var_430, arguments);
} else if (_uniq_var_430.join !== undefined) {
if (_uniq_var_431 === undefined) {
return _uniq_var_430.join;
}
_uniq_var_430.join = _uniq_var_431;
}return _uniq_var_430;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})()(funcs, ';\n');
_uniq_var_171;
(_uniq_var_169 = _uniq_var_171);

};
return _uniq_var_169;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})()
};
};_uniq_var_434.__lix_func__ = true;return _uniq_var_434;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_435 = function (expr, env, ctx, def) {var _uniq_var_172 = call(GenerateDefNew);
_uniq_var_172;
var def = _uniq_var_172;
def;
def;
var _uniq_var_173 = generate(expr[0], env, ctx, def);
_uniq_var_173;
var body = _uniq_var_173;
body;
body;
var _uniq_var_174 = join(['module.exports = ', body, '\n']);
_uniq_var_174;
var body = _uniq_var_174;
body;
body;
var _uniq_var_175 = call(def.defineVar);
_uniq_var_175;
var _uniq_var_176 = call(def.appendExpr);
_uniq_var_176;
var _uniq_var_177 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_175, ";\n", _uniq_var_176, ";\n", body]);
_uniq_var_177;
return _uniq_var_177;
};_uniq_var_435.__lix_func__ = true;return _uniq_var_435;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_436 = function (expr, env, ctx, def) {var _uniq_var_178 = generate(expr[0], env, ctx, def);
_uniq_var_178;
return _uniq_var_178;
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_437 = function (expr, env, ctx, def) {var _uniq_var_179 = join(['"', expr[0], '"']);
_uniq_var_179;
return _uniq_var_179;
};_uniq_var_437.__lix_func__ = true;return _uniq_var_437;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_438 = function (expr, env, ctx, def) {var _uniq_var_180 = generate(expr[0], env, ctx, def);
_uniq_var_180;
var _uniq_var_181 = join(['("', expr[2], '" + ', _uniq_var_180, ')']);
_uniq_var_181;
return _uniq_var_181;
};_uniq_var_438.__lix_func__ = true;return _uniq_var_438;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_443 = function (expr, env, ctx, def) {var _uniq_var_183 = map(expr[0], (function () {var _uniq_var_439 = function (i) {var _uniq_var_182 = generate(i, env, ctx, def);
_uniq_var_182;
return _uniq_var_182;
};_uniq_var_439.__lix_func__ = true;return _uniq_var_439;})());
_uniq_var_183;
var _uniq_var_184 = (function () {var _uniq_var_442 = function (_uniq_var_440, _uniq_var_441) {
if (typeof _uniq_var_440.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_440.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_440.join.apply(_uniq_var_440, arguments);
} else if (_uniq_var_440.join !== undefined) {
if (_uniq_var_441 === undefined) {
return _uniq_var_440.join;
}
_uniq_var_440.join = _uniq_var_441;
}return _uniq_var_440;
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})()(_uniq_var_183, ',');
_uniq_var_184;
var path = _uniq_var_184;
path;
path;
var _uniq_var_185 = join(['[', path, '].join("/")']);
_uniq_var_185;
return _uniq_var_185;
};_uniq_var_443.__lix_func__ = true;return _uniq_var_443;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_447 = function (expr, env, ctx, def) {var _uniq_var_186 = (function () {var _uniq_var_446 = function (_uniq_var_444, _uniq_var_445) {
if (typeof _uniq_var_444.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_444.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_444.join.apply(_uniq_var_444, arguments);
} else if (_uniq_var_444.join !== undefined) {
if (_uniq_var_445 === undefined) {
return _uniq_var_444.join;
}
_uniq_var_444.join = _uniq_var_445;
}return _uniq_var_444;
};_uniq_var_446.__lix_func__ = true;return _uniq_var_446;})()(['"', expr[0], '"'], '');
_uniq_var_186;
var name = [_uniq_var_186, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_447.__lix_func__ = true;return _uniq_var_447;})();
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
var generateOp = (function () {var _uniq_var_448 = function (hint) {var _uniq_var_187 = true;
_uniq_var_187;
var _uniq_var_188 = null;
_uniq_var_188;
if ((_uniq_var_187 && generateOpTable[hint])) {
(_uniq_var_187 = false);
(_uniq_var_188 = generateOpTable[hint]);

};
if (_uniq_var_187) {
(_uniq_var_188 = generateExpr);

};
return _uniq_var_188;
};_uniq_var_448.__lix_func__ = true;return _uniq_var_448;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_449 = function (expr, env, ctx, def) {var _uniq_var_189 = generateOp(expr[1]);
_uniq_var_189;
var _uniq_var_190 = _uniq_var_189(expr, env, ctx, def);
_uniq_var_190;
return _uniq_var_190;
};_uniq_var_449.__lix_func__ = true;return _uniq_var_449;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_451 = function (env) {var _uniq_var_191 = env;
_uniq_var_191;
if (not(_uniq_var_191)) {
(_uniq_var_191 = env0);

};
(env = _uniq_var_191);
var Env = (function () {var _uniq_var_450 = function () {;
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_192 = _instance_(Env);
_uniq_var_192;
return _uniq_var_192;
};_uniq_var_451.__lix_func__ = true;return _uniq_var_451;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_453 = function (expr, define) {var _uniq_var_194 = map(expr, (function () {var _uniq_var_452 = function (item) {var _uniq_var_193 = flatten(item, define);
_uniq_var_193;
return _uniq_var_193;
};_uniq_var_452.__lix_func__ = true;return _uniq_var_452;})());
_uniq_var_194;
var _uniq_var_195 = define(_uniq_var_194);
_uniq_var_195;
return _uniq_var_195;
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_454 = function (expr, define) {return expr;
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_459 = function (expr, define) {var _uniq_var_196 = call(statementFlattenGenerator);
_uniq_var_196;
var whileDefine = _uniq_var_196;
whileDefine;
whileDefine;
var _uniq_var_197 = flatten(expr[0], whileDefine);
_uniq_var_197;
(expr[0] = _uniq_var_197);
var _uniq_var_198 = flatten(expr[2], define0);
_uniq_var_198;
(expr[2] = _uniq_var_198);
var _uniq_var_199 = call(whileDefine);
_uniq_var_199;
var _uniq_var_200 = (function () {var _uniq_var_457 = function (_uniq_var_455, _uniq_var_456) {
if (typeof _uniq_var_455.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_455.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_455.concat.apply(_uniq_var_455, arguments);
} else if (_uniq_var_455.concat !== undefined) {
if (_uniq_var_456 === undefined) {
return _uniq_var_455.concat;
}
_uniq_var_455.concat = _uniq_var_456;
}return _uniq_var_455;
};_uniq_var_457.__lix_func__ = true;return _uniq_var_457;})()(expr[2][0], _uniq_var_199);
_uniq_var_200;
(expr[2][0] = _uniq_var_200);
var _uniq_var_201 = call(whileDefine);
_uniq_var_201;
var _uniq_var_203 = foreach(_uniq_var_201, (function () {var _uniq_var_458 = function (i) {var _uniq_var_202 = define(i, true);
_uniq_var_202;
return _uniq_var_202;
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})());
_uniq_var_203;
_uniq_var_203;
var _uniq_var_204 = define(expr, true);
_uniq_var_204;
_uniq_var_204;
return ['', '{empty}'];
};_uniq_var_459.__lix_func__ = true;return _uniq_var_459;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_464 = function (expr, define) {var _uniq_var_205 = flatten(expr[0], define);
_uniq_var_205;
var ret = _uniq_var_205;
ret;
ret;
var _uniq_var_206 = true;
_uniq_var_206;
var _uniq_var_207 = null;
_uniq_var_207;
var _uniq_var_209 = __ne__(ret[2], 'var');
_uniq_var_209;
if ((_uniq_var_206 && _uniq_var_209)) {
(_uniq_var_206 = false);
var _uniq_var_208 = define(ret);
_uniq_var_208;
var ret = _uniq_var_208;
ret;
(_uniq_var_207 = ret);

};
_uniq_var_207;
var getAndOpSeq = (function () {var _uniq_var_463 = function () {var _uniq_var_210 = call(statementFlattenGenerator);
_uniq_var_210;
var AndDefine = _uniq_var_210;
AndDefine;
AndDefine;
var _uniq_var_211 = flatten(expr[2], AndDefine);
_uniq_var_211;
var seqRet = _uniq_var_211;
seqRet;
seqRet;
var _uniq_var_212 = call(AndDefine);
_uniq_var_212;
var seq = _uniq_var_212;
seq;
seq;
var _uniq_var_213 = (function () {var _uniq_var_462 = function (_uniq_var_460, _uniq_var_461) {
if (typeof _uniq_var_460.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_460.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_460.push.apply(_uniq_var_460, arguments);
} else if (_uniq_var_460.push !== undefined) {
if (_uniq_var_461 === undefined) {
return _uniq_var_460.push;
}
_uniq_var_460.push = _uniq_var_461;
}return _uniq_var_460;
};_uniq_var_462.__lix_func__ = true;return _uniq_var_462;})()(seq, [ret, '=', seqRet]);
_uniq_var_213;
_uniq_var_213;
return [seq, '{seq}'];
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_214 = call(getAndOpSeq);
_uniq_var_214;
var _uniq_var_215 = define([[[ret, [[], '{empty}']], [_uniq_var_214, 'else']], 'if'], true);
_uniq_var_215;
_uniq_var_215;
return ret;
};_uniq_var_464.__lix_func__ = true;return _uniq_var_464;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_469 = function (expr, define) {var _uniq_var_216 = flatten(expr[0], define);
_uniq_var_216;
var ret = _uniq_var_216;
ret;
ret;
var _uniq_var_217 = true;
_uniq_var_217;
var _uniq_var_218 = null;
_uniq_var_218;
var _uniq_var_220 = __ne__(ret[2], 'var');
_uniq_var_220;
if ((_uniq_var_217 && _uniq_var_220)) {
(_uniq_var_217 = false);
var _uniq_var_219 = define(ret);
_uniq_var_219;
var ret = _uniq_var_219;
ret;
(_uniq_var_218 = ret);

};
_uniq_var_218;
var getAndOpSeq = (function () {var _uniq_var_468 = function () {var _uniq_var_221 = call(statementFlattenGenerator);
_uniq_var_221;
var AndDefine = _uniq_var_221;
AndDefine;
AndDefine;
var _uniq_var_222 = flatten(expr[2], AndDefine);
_uniq_var_222;
var seqRet = _uniq_var_222;
seqRet;
seqRet;
var _uniq_var_223 = call(AndDefine);
_uniq_var_223;
var seq = _uniq_var_223;
seq;
seq;
var _uniq_var_224 = (function () {var _uniq_var_467 = function (_uniq_var_465, _uniq_var_466) {
if (typeof _uniq_var_465.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_465.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_465.push.apply(_uniq_var_465, arguments);
} else if (_uniq_var_465.push !== undefined) {
if (_uniq_var_466 === undefined) {
return _uniq_var_465.push;
}
_uniq_var_465.push = _uniq_var_466;
}return _uniq_var_465;
};_uniq_var_467.__lix_func__ = true;return _uniq_var_467;})()(seq, [ret, '=', seqRet]);
_uniq_var_224;
_uniq_var_224;
return [seq, '{seq}'];
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_225 = call(getAndOpSeq);
_uniq_var_225;
var _uniq_var_226 = define([[[ret, _uniq_var_225]], 'if'], true);
_uniq_var_226;
_uniq_var_226;
return ret;
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_474 = function (expr, define, tmpVar, ctx) {var _uniq_var_239 = foreach(expr[0], (function () {var _uniq_var_473 = function (i) {var _uniq_var_227 = true;
_uniq_var_227;
var _uniq_var_228 = null;
_uniq_var_228;
var _uniq_var_231 = __eq__(i[1], 'else');
_uniq_var_231;
if ((_uniq_var_227 && _uniq_var_231)) {
(_uniq_var_227 = false);
var _uniq_var_229 = flatten(i[0], define0, ctx);
_uniq_var_229;
var elseSeq = _uniq_var_229;
elseSeq;
elseSeq;
var _uniq_var_230 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_230;
(_uniq_var_228 = _uniq_var_230);

};
var _uniq_var_234 = __eq__(i[1], 'if');
_uniq_var_234;
if ((_uniq_var_227 && _uniq_var_234)) {
(_uniq_var_227 = false);
var _uniq_var_232 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_232;
var _uniq_var_233 = define(_uniq_var_232);
_uniq_var_233;
(_uniq_var_228 = _uniq_var_233);

};
if (_uniq_var_227) {
var _uniq_var_235 = flatten(i[1], define0, ctx);
_uniq_var_235;
var ifSeq = _uniq_var_235;
ifSeq;
ifSeq;
var _uniq_var_236 = (function () {var _uniq_var_472 = function (_uniq_var_470, _uniq_var_471) {
if (typeof _uniq_var_470.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_470.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_470.unshift.apply(_uniq_var_470, arguments);
} else if (_uniq_var_470.unshift !== undefined) {
if (_uniq_var_471 === undefined) {
return _uniq_var_470.unshift;
}
_uniq_var_470.unshift = _uniq_var_471;
}return _uniq_var_470;
};_uniq_var_472.__lix_func__ = true;return _uniq_var_472;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_236;
_uniq_var_236;
var _uniq_var_237 = flatten(i[0], define);
_uniq_var_237;
var cond = _uniq_var_237;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_238 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_238;
(_uniq_var_228 = _uniq_var_238);

};
return _uniq_var_228;
};_uniq_var_473.__lix_func__ = true;return _uniq_var_473;})());
_uniq_var_239;
return _uniq_var_239;
};_uniq_var_474.__lix_func__ = true;return _uniq_var_474;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_475 = function (expr, define) {var _uniq_var_240 = define(['true', '{atomic}'], 'new');
_uniq_var_240;
var tmpVar = _uniq_var_240;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_241 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_241;
_uniq_var_241;
return retVar;
};_uniq_var_475.__lix_func__ = true;return _uniq_var_475;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_476 = function (expr, define) {var _uniq_var_242 = flatten(expr[2], define);
_uniq_var_242;
(expr[2] = _uniq_var_242);
return expr;
};_uniq_var_476.__lix_func__ = true;return _uniq_var_476;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_480 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_243 = true;
_uniq_var_243;
var _uniq_var_244 = null;
_uniq_var_244;
var _uniq_var_248 = __gt__(expr.length, 3);
_uniq_var_248;
if ((_uniq_var_243 && _uniq_var_248)) {
(_uniq_var_243 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_245 = __lt__(i, expr.length);
_uniq_var_245;
while (_uniq_var_245) {
var _uniq_var_246 = (function () {var _uniq_var_479 = function (_uniq_var_477, _uniq_var_478) {
if (typeof _uniq_var_477.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_477.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_477.push.apply(_uniq_var_477, arguments);
} else if (_uniq_var_477.push !== undefined) {
if (_uniq_var_478 === undefined) {
return _uniq_var_477.push;
}
_uniq_var_477.push = _uniq_var_478;
}return _uniq_var_477;
};_uniq_var_479.__lix_func__ = true;return _uniq_var_479;})()(partialExpr, expr[i]);
_uniq_var_246;
_uniq_var_246;
var _uniq_var_247 = __add__(i, 1);
_uniq_var_247;
(i = _uniq_var_247);
var _uniq_var_245 = __lt__(i, expr.length);
_uniq_var_245;
}
null;
(_uniq_var_244 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_244;
var _uniq_var_249 = flattenExpr(expr, define);
_uniq_var_249;
return _uniq_var_249;
};_uniq_var_480.__lix_func__ = true;return _uniq_var_480;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_481 = function (expr, define) {var _uniq_var_250 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_250;
return _uniq_var_250;
};_uniq_var_481.__lix_func__ = true;return _uniq_var_481;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_482 = function (expr, define) {var _uniq_var_251 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_251;
return _uniq_var_251;
};_uniq_var_482.__lix_func__ = true;return _uniq_var_482;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_483 = function (expr, define) {var _uniq_var_252 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_252;
return _uniq_var_252;
};_uniq_var_483.__lix_func__ = true;return _uniq_var_483;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_484 = function (expr, define) {var _uniq_var_253 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_253;
return _uniq_var_253;
};_uniq_var_484.__lix_func__ = true;return _uniq_var_484;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_485 = function (expr, define) {var _uniq_var_254 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_254;
return _uniq_var_254;
};_uniq_var_485.__lix_func__ = true;return _uniq_var_485;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_486 = function (expr, define) {var _uniq_var_255 = flatten(expr[0], define);
_uniq_var_255;
(expr[0] = _uniq_var_255);
return expr;
};_uniq_var_486.__lix_func__ = true;return _uniq_var_486;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_487 = function (expr, define) {return expr;
};_uniq_var_487.__lix_func__ = true;return _uniq_var_487;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_489 = function (expr, define) {var _uniq_var_257 = map(expr[0], (function () {var _uniq_var_488 = function (i) {var _uniq_var_256 = flatten(i, define);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_488.__lix_func__ = true;return _uniq_var_488;})());
_uniq_var_257;
(expr[0] = _uniq_var_257);
return expr;
};_uniq_var_489.__lix_func__ = true;return _uniq_var_489;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_490 = function (expr, define) {return expr;
};_uniq_var_490.__lix_func__ = true;return _uniq_var_490;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_491 = function (expr, define) {var _uniq_var_258 = true;
_uniq_var_258;
var _uniq_var_259 = null;
_uniq_var_259;
var _uniq_var_261 = __eq__(expr[1], '{index}');
_uniq_var_261;
if ((_uniq_var_258 && _uniq_var_261)) {
(_uniq_var_258 = false);
var _uniq_var_260 = flatten(expr[0], define);
_uniq_var_260;
(_uniq_var_259 = (expr[0] = _uniq_var_260));

};
_uniq_var_259;
return expr;
};_uniq_var_491.__lix_func__ = true;return _uniq_var_491;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_496 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_495 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_262 = true;
_uniq_var_262;
var _uniq_var_263 = null;
_uniq_var_263;
var _uniq_var_269 = __eq__(arguments.length, 2);
_uniq_var_269;
if ((_uniq_var_262 && _uniq_var_269)) {
(_uniq_var_262 = false);
var _uniq_var_264 = true;
_uniq_var_264;
var _uniq_var_265 = null;
_uniq_var_265;
var _uniq_var_268 = __eq__(defined[name], undefined);
_uniq_var_268;
if ((_uniq_var_264 && _uniq_var_268)) {
(_uniq_var_264 = false);
var _uniq_var_266 = call(getUniqVarName);
_uniq_var_266;
var varName = _uniq_var_266;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_267 = (function () {var _uniq_var_494 = function (_uniq_var_492, _uniq_var_493) {
if (typeof _uniq_var_492.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_492.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_492.push.apply(_uniq_var_492, arguments);
} else if (_uniq_var_492.push !== undefined) {
if (_uniq_var_493 === undefined) {
return _uniq_var_492.push;
}
_uniq_var_492.push = _uniq_var_493;
}return _uniq_var_492;
};_uniq_var_494.__lix_func__ = true;return _uniq_var_494;})()(statements, [lixVar, ':=', value]);
_uniq_var_267;
_uniq_var_267;
(_uniq_var_265 = (defined[name] = lixVar));

};
_uniq_var_265;
(_uniq_var_263 = (ret = defined[name]));

};
if (_uniq_var_262) {
(_uniq_var_263 = (ret = statements));

};
_uniq_var_263;
return ret;
};_uniq_var_495.__lix_func__ = true;return _uniq_var_495;})();
};_uniq_var_496.__lix_func__ = true;return _uniq_var_496;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_270 = call(NewGlobalDefine);
_uniq_var_270;
var globalDefine = _uniq_var_270;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_497 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_271 = true;
_uniq_var_271;
var _uniq_var_272 = null;
_uniq_var_272;
var _uniq_var_274 = __eq__(expr[0][3], '{global}');
_uniq_var_274;
if ((_uniq_var_271 && _uniq_var_274)) {
(_uniq_var_271 = false);
var _uniq_var_273 = globalDefine(expr[0][0], expr);
_uniq_var_273;
(_uniq_var_272 = (ret = _uniq_var_273));

};
if (_uniq_var_271) {
var _uniq_var_275 = flattenField(expr[0], define);
_uniq_var_275;
(expr[0] = _uniq_var_275);
(_uniq_var_272 = (ret = expr));

};
_uniq_var_272;
return ret;
};_uniq_var_497.__lix_func__ = true;return _uniq_var_497;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_498 = function (expr, define) {var _uniq_var_276 = flatten(expr[2], define);
_uniq_var_276;
(expr[2] = _uniq_var_276);
return expr;
};_uniq_var_498.__lix_func__ = true;return _uniq_var_498;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_500 = function (expr, define) {var _uniq_var_278 = map(expr[0], (function () {var _uniq_var_499 = function (i) {var _uniq_var_277 = flattenProperty(i, define);
_uniq_var_277;
return _uniq_var_277;
};_uniq_var_499.__lix_func__ = true;return _uniq_var_499;})());
_uniq_var_278;
(expr[0] = _uniq_var_278);
return expr;
};_uniq_var_500.__lix_func__ = true;return _uniq_var_500;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_502 = function (expr, define) {var _uniq_var_280 = map(expr[0], (function () {var _uniq_var_501 = function (i) {var _uniq_var_279 = flatten(i, define);
_uniq_var_279;
return _uniq_var_279;
};_uniq_var_501.__lix_func__ = true;return _uniq_var_501;})());
_uniq_var_280;
(expr[0] = _uniq_var_280);
return expr;
};_uniq_var_502.__lix_func__ = true;return _uniq_var_502;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_503 = function (expr, define) {var _uniq_var_281 = flatten(expr[2], define);
_uniq_var_281;
(expr[2] = _uniq_var_281);
return expr;
};_uniq_var_503.__lix_func__ = true;return _uniq_var_503;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_504 = function (expr, define) {var _uniq_var_282 = true;
_uniq_var_282;
var _uniq_var_283 = null;
_uniq_var_283;
var _uniq_var_286 = __eq__(expr[1], '{.}');
_uniq_var_286;
if ((_uniq_var_282 && _uniq_var_286)) {
(_uniq_var_282 = false);
var _uniq_var_284 = flattenFieldAccess(expr[0], define);
_uniq_var_284;
(expr[0] = _uniq_var_284);
var _uniq_var_285 = flattenField(expr[2], define);
_uniq_var_285;
(_uniq_var_283 = (expr[2] = _uniq_var_285));

};
if (_uniq_var_282) {
var _uniq_var_287 = flatten(expr, define);
_uniq_var_287;
(_uniq_var_283 = (expr = _uniq_var_287));

};
_uniq_var_283;
return expr;
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_505 = function (expr, define) {return expr;
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_506 = function (expr, define) {var _uniq_var_288 = flatten(expr[0], define);
_uniq_var_288;
return _uniq_var_288;
};_uniq_var_506.__lix_func__ = true;return _uniq_var_506;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_520 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_519 = function (statement, tmpVarName) {var _uniq_var_289 = true;
_uniq_var_289;
var _uniq_var_290 = null;
_uniq_var_290;
var _uniq_var_291 = __eq__(statement, undefined);
_uniq_var_291;
if ((_uniq_var_289 && _uniq_var_291)) {
(_uniq_var_289 = false);
(_uniq_var_290 = data);

};
var _uniq_var_293 = __eq__(tmpVarName, true);
_uniq_var_293;
if ((_uniq_var_289 && _uniq_var_293)) {
(_uniq_var_289 = false);
var _uniq_var_292 = (function () {var _uniq_var_509 = function (_uniq_var_507, _uniq_var_508) {
if (typeof _uniq_var_507.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_507.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_507.push.apply(_uniq_var_507, arguments);
} else if (_uniq_var_507.push !== undefined) {
if (_uniq_var_508 === undefined) {
return _uniq_var_507.push;
}
_uniq_var_507.push = _uniq_var_508;
}return _uniq_var_507;
};_uniq_var_509.__lix_func__ = true;return _uniq_var_509;})()(data, statement);
_uniq_var_292;
(_uniq_var_290 = _uniq_var_292);

};
var _uniq_var_297 = __eq__(tmpVarName, undefined);
_uniq_var_297;
if ((_uniq_var_289 && _uniq_var_297)) {
(_uniq_var_289 = false);
var _uniq_var_294 = call(getUniqVarName);
_uniq_var_294;
var varName = _uniq_var_294;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_295 = (function () {var _uniq_var_512 = function (_uniq_var_510, _uniq_var_511) {
if (typeof _uniq_var_510.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_510.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_510.push.apply(_uniq_var_510, arguments);
} else if (_uniq_var_510.push !== undefined) {
if (_uniq_var_511 === undefined) {
return _uniq_var_510.push;
}
_uniq_var_510.push = _uniq_var_511;
}return _uniq_var_510;
};_uniq_var_512.__lix_func__ = true;return _uniq_var_512;})()(data, statement);
_uniq_var_295;
_uniq_var_295;
var _uniq_var_296 = (function () {var _uniq_var_515 = function (_uniq_var_513, _uniq_var_514) {
if (typeof _uniq_var_513.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_513.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_513.push.apply(_uniq_var_513, arguments);
} else if (_uniq_var_513.push !== undefined) {
if (_uniq_var_514 === undefined) {
return _uniq_var_513.push;
}
_uniq_var_513.push = _uniq_var_514;
}return _uniq_var_513;
};_uniq_var_515.__lix_func__ = true;return _uniq_var_515;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_296;
_uniq_var_296;
(_uniq_var_290 = lixVar);

};
var _uniq_var_300 = __eq__(tmpVarName, 'new');
_uniq_var_300;
if ((_uniq_var_289 && _uniq_var_300)) {
(_uniq_var_289 = false);
var _uniq_var_298 = call(getUniqVarName);
_uniq_var_298;
var varName = _uniq_var_298;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_299 = (function () {var _uniq_var_518 = function (_uniq_var_516, _uniq_var_517) {
if (typeof _uniq_var_516.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_516.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_516.push.apply(_uniq_var_516, arguments);
} else if (_uniq_var_516.push !== undefined) {
if (_uniq_var_517 === undefined) {
return _uniq_var_516.push;
}
_uniq_var_516.push = _uniq_var_517;
}return _uniq_var_516;
};_uniq_var_518.__lix_func__ = true;return _uniq_var_518;})()(data, [lixVar, ':=', statement]);
_uniq_var_299;
_uniq_var_299;
(_uniq_var_290 = lixVar);

};
return _uniq_var_290;
};_uniq_var_519.__lix_func__ = true;return _uniq_var_519;})();
};_uniq_var_520.__lix_func__ = true;return _uniq_var_520;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_532 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_521 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_301 = true;
_uniq_var_301;
var _uniq_var_302 = null;
_uniq_var_302;
var _uniq_var_304 = seqCtx;
_uniq_var_304;
if (_uniq_var_304) {
var _uniq_var_305 = parseInt(index);
_uniq_var_305;
var _uniq_var_306 = __sub__(expr[0].length, 1);
_uniq_var_306;
var _uniq_var_307 = __eq__(_uniq_var_305, _uniq_var_306);
_uniq_var_307;
(_uniq_var_304 = _uniq_var_307);

};
if ((_uniq_var_301 && _uniq_var_304)) {
(_uniq_var_301 = false);
var _uniq_var_303 = seqCtx(stmt);
_uniq_var_303;
var ret = _uniq_var_303;
ret;
(_uniq_var_302 = ret);

};
_uniq_var_302;
return ret;
};_uniq_var_521.__lix_func__ = true;return _uniq_var_521;})();
ctx;
ctx;
var _uniq_var_334 = foreach(expr[0], (function () {var _uniq_var_531 = function (item, index) {var _uniq_var_308 = call(statementFlattenGenerator);
_uniq_var_308;
var exprDefine = _uniq_var_308;
exprDefine;
exprDefine;
var _uniq_var_309 = flatten(item, exprDefine);
_uniq_var_309;
var itemRet = _uniq_var_309;
itemRet;
itemRet;
var _uniq_var_310 = call(exprDefine);
_uniq_var_310;
var _uniq_var_311 = (function () {var _uniq_var_524 = function (_uniq_var_522, _uniq_var_523) {
if (typeof _uniq_var_522.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_522.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_522.concat.apply(_uniq_var_522, arguments);
} else if (_uniq_var_522.concat !== undefined) {
if (_uniq_var_523 === undefined) {
return _uniq_var_522.concat;
}
_uniq_var_522.concat = _uniq_var_523;
}return _uniq_var_522;
};_uniq_var_524.__lix_func__ = true;return _uniq_var_524;})()(ret, _uniq_var_310);
_uniq_var_311;
(ret = _uniq_var_311);
var _uniq_var_312 = ctx(itemRet, index);
_uniq_var_312;
var stmtRet = _uniq_var_312;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_525 = function (expr) {var _uniq_var_313 = __eq__(expr[1], '{atomic}');
_uniq_var_313;
var _uniq_var_314 = _uniq_var_313;
_uniq_var_314;
if (_uniq_var_314) {
var _uniq_var_315 = __ne__(expr[3], undefined);
_uniq_var_315;
(_uniq_var_314 = _uniq_var_315);

};
return _uniq_var_314;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_526 = function (expr) {var _uniq_var_316 = __eq__(expr[1], '{atomic}');
_uniq_var_316;
var _uniq_var_317 = _uniq_var_316;
_uniq_var_317;
if (_uniq_var_317) {
var _uniq_var_318 = __eq__(expr[3], undefined);
_uniq_var_318;
(_uniq_var_317 = _uniq_var_318);

};
return _uniq_var_317;
};_uniq_var_526.__lix_func__ = true;return _uniq_var_526;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_527 = function (expr) {var _uniq_var_319 = isRealVar(expr);
_uniq_var_319;
var _uniq_var_320 = _uniq_var_319;
_uniq_var_320;
if (not(_uniq_var_320)) {
var _uniq_var_321 = __ne__(expr[1], 'if');
_uniq_var_321;
var _uniq_var_322 = _uniq_var_321;
_uniq_var_322;
if (_uniq_var_322) {
var _uniq_var_323 = __ne__(expr[1], 'while');
_uniq_var_323;
(_uniq_var_322 = _uniq_var_323);

};
(_uniq_var_320 = _uniq_var_322);

};
return _uniq_var_320;
};_uniq_var_527.__lix_func__ = true;return _uniq_var_527;})();
isRealExpr;
isRealExpr;
var _uniq_var_324 = true;
_uniq_var_324;
var _uniq_var_325 = null;
_uniq_var_325;
var _uniq_var_330 = __ne__(stmtRet[1], '{empty}');
_uniq_var_330;
var _uniq_var_331 = _uniq_var_330;
_uniq_var_331;
if (_uniq_var_331) {
var _uniq_var_332 = isTmpVar(stmtRet);
_uniq_var_332;
var _uniq_var_333 = not(_uniq_var_332);
_uniq_var_333;
(_uniq_var_331 = _uniq_var_333);

};
if ((_uniq_var_324 && _uniq_var_331)) {
(_uniq_var_324 = false);
var _uniq_var_326 = true;
_uniq_var_326;
var _uniq_var_327 = null;
_uniq_var_327;
var _uniq_var_328 = isRealExpr(stmtRet);
_uniq_var_328;
if ((_uniq_var_326 && _uniq_var_328)) {
(_uniq_var_326 = false);
(_uniq_var_327 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_327;
var _uniq_var_329 = (function () {var _uniq_var_530 = function (_uniq_var_528, _uniq_var_529) {
if (typeof _uniq_var_528.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_528.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_528.push.apply(_uniq_var_528, arguments);
} else if (_uniq_var_528.push !== undefined) {
if (_uniq_var_529 === undefined) {
return _uniq_var_528.push;
}
_uniq_var_528.push = _uniq_var_529;
}return _uniq_var_528;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})()(ret, stmtRet);
_uniq_var_329;
(_uniq_var_325 = _uniq_var_329);

};
return _uniq_var_325;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})());
_uniq_var_334;
_uniq_var_334;
(expr[0] = ret);
return expr;
};_uniq_var_532.__lix_func__ = true;return _uniq_var_532;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_536 = function (expr, define) {var _uniq_var_335 = flatten(expr[0], define);
_uniq_var_335;
var ret = _uniq_var_335;
ret;
ret;
var _uniq_var_336 = call(globalDefine);
_uniq_var_336;
var _uniq_var_337 = (function () {var _uniq_var_535 = function (_uniq_var_533, _uniq_var_534) {
if (typeof _uniq_var_533.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_533.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_533.concat.apply(_uniq_var_533, arguments);
} else if (_uniq_var_533.concat !== undefined) {
if (_uniq_var_534 === undefined) {
return _uniq_var_533.concat;
}
_uniq_var_533.concat = _uniq_var_534;
}return _uniq_var_533;
};_uniq_var_535.__lix_func__ = true;return _uniq_var_535;})()(_uniq_var_336, ret[0]);
_uniq_var_337;
(ret[0] = _uniq_var_337);
return [ret, '{start}'];
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_540 = function (expr, define) {var _uniq_var_338 = true;
_uniq_var_338;
var _uniq_var_339 = null;
_uniq_var_339;
var _uniq_var_341 = __eq__(expr[2], '{var}');
_uniq_var_341;
if ((_uniq_var_338 && _uniq_var_341)) {
(_uniq_var_338 = false);
var _uniq_var_340 = (function () {var _uniq_var_539 = function (_uniq_var_537, _uniq_var_538) {
if (typeof _uniq_var_537.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_537.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_537.join.apply(_uniq_var_537, arguments);
} else if (_uniq_var_537.join !== undefined) {
if (_uniq_var_538 === undefined) {
return _uniq_var_537.join;
}
_uniq_var_537.join = _uniq_var_538;
}return _uniq_var_537;
};_uniq_var_539.__lix_func__ = true;return _uniq_var_539;})()(['"', expr[0], '"'], '');
_uniq_var_340;
var name = [_uniq_var_340, '{atomic}'];
name;
(_uniq_var_339 = name);

};
var _uniq_var_343 = __eq__(expr[2], '{index}');
_uniq_var_343;
if ((_uniq_var_338 && _uniq_var_343)) {
(_uniq_var_338 = false);
var _uniq_var_342 = flatten(expr[0], define);
_uniq_var_342;
var name = _uniq_var_342;
name;
(_uniq_var_339 = name);

};
_uniq_var_339;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_344 = define(moduleExpr);
_uniq_var_344;
return _uniq_var_344;
};_uniq_var_540.__lix_func__ = true;return _uniq_var_540;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_541 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_541.__lix_func__ = true;return _uniq_var_541;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_542 = function (expr, define) {return expr;
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})();
flattenAmpersand;
flattenAmpersand;
var flattenOpTable = {
'{start}': flattenStart,
'{seq}': flattenSeq,
'{mono}': flattenMono,
'{atomic}': flattenAtomic,
'{.}': flattenFieldAccess,
'{module}': flattenModule,
'{func}': flattenFunc,
'{ampersand}': flattenAmpersand,
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
var flattenOp = (function () {var _uniq_var_543 = function (hint) {var _uniq_var_345 = true;
_uniq_var_345;
var _uniq_var_346 = null;
_uniq_var_346;
if ((_uniq_var_345 && flattenOpTable[hint])) {
(_uniq_var_345 = false);
(_uniq_var_346 = flattenOpTable[hint]);

};
if (_uniq_var_345) {
(_uniq_var_346 = flattenExpr);

};
return _uniq_var_346;
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_544 = function (expr, define, ctx) {var _uniq_var_347 = flattenOp(expr[1]);
_uniq_var_347;
var _uniq_var_348 = _uniq_var_347(expr, define, ctx);
_uniq_var_348;
return _uniq_var_348;
};_uniq_var_544.__lix_func__ = true;return _uniq_var_544;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_545 = function (i) {return i;
};_uniq_var_545.__lix_func__ = true;return _uniq_var_545;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_546 = function (i) {;
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})(),
appendExpr: (function () {var _uniq_var_547 = function (i) {;
};_uniq_var_547.__lix_func__ = true;return _uniq_var_547;})()
};
def0;
def0;
var _uniq_var_349 = join(['s[', STEP, ']']);
_uniq_var_349;
var _uniq_var_350 = join(['s[', RET, ']']);
_uniq_var_350;
var seqFuncParamsName = {
step: _uniq_var_349,
ret: _uniq_var_350
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_554 = function (expr) {var _uniq_var_351 = map(env0, (function () {var _uniq_var_548 = function (i) {return i;
};_uniq_var_548.__lix_func__ = true;return _uniq_var_548;})());
_uniq_var_351;
var _uniq_var_352 = (function () {var _uniq_var_551 = function (_uniq_var_549, _uniq_var_550) {
if (typeof _uniq_var_549.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_549.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_549.join.apply(_uniq_var_549, arguments);
} else if (_uniq_var_549.join !== undefined) {
if (_uniq_var_550 === undefined) {
return _uniq_var_549.join;
}
_uniq_var_549.join = _uniq_var_550;
}return _uniq_var_549;
};_uniq_var_551.__lix_func__ = true;return _uniq_var_551;})()(_uniq_var_351, "\n");
_uniq_var_352;
var libs = _uniq_var_352;
libs;
libs;
var _uniq_var_353 = flatten(expr, (function () {var _uniq_var_552 = function (i) {;
};_uniq_var_552.__lix_func__ = true;return _uniq_var_552;})(), (function () {var _uniq_var_553 = function (i) {return i;
};_uniq_var_553.__lix_func__ = true;return _uniq_var_553;})());
_uniq_var_353;
var flattenedExpr = _uniq_var_353;
flattenedExpr;
flattenedExpr;
var _uniq_var_354 = call(env_new);
_uniq_var_354;
var _uniq_var_355 = generateStart(flattenedExpr, _uniq_var_354, ctx0, def0);
_uniq_var_355;
var code = _uniq_var_355;
code;
code;
var _uniq_var_356 = join([libs, "\n", code]);
_uniq_var_356;
return _uniq_var_356;
};_uniq_var_554.__lix_func__ = true;return _uniq_var_554;})();
compile;
compile;
(exports.compile = compile);
compile;

