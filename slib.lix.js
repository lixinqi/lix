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
var join = (function () {var _uniq_var_349 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_348 = function (_uniq_var_346, _uniq_var_347) {
if (typeof _uniq_var_346.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_346.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_346.join.apply(_uniq_var_346, arguments);
} else if (_uniq_var_346.join !== undefined) {
if (_uniq_var_347 === undefined) {
return _uniq_var_346.join;
}
_uniq_var_346.join = _uniq_var_347;
}return _uniq_var_346;
};_uniq_var_348.__lix_func__ = true;return _uniq_var_348;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_349.__lix_func__ = true;return _uniq_var_349;})();
join;
join;
var map = (function () {var _uniq_var_354 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_353 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_352 = function (_uniq_var_350, _uniq_var_351) {
if (typeof _uniq_var_350.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_350.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_350.push.apply(_uniq_var_350, arguments);
} else if (_uniq_var_350.push !== undefined) {
if (_uniq_var_351 === undefined) {
return _uniq_var_350.push;
}
_uniq_var_350.push = _uniq_var_351;
}return _uniq_var_350;
};_uniq_var_352.__lix_func__ = true;return _uniq_var_352;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_353.__lix_func__ = true;return _uniq_var_353;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_354.__lix_func__ = true;return _uniq_var_354;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_356 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_355 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_355.__lix_func__ = true;return _uniq_var_355;})();
};_uniq_var_356.__lix_func__ = true;return _uniq_var_356;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_357 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_357.__lix_func__ = true;return _uniq_var_357;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_362 = function (args, env, ctx) {var _uniq_var_9 = map(args, (function () {var _uniq_var_358 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
_uniq_var_8;
var varname = _uniq_var_8;
varname;
varname;
(env[varname] = true);
return varname;
};_uniq_var_358.__lix_func__ = true;return _uniq_var_358;})());
_uniq_var_9;
var _uniq_var_10 = (function () {var _uniq_var_361 = function (_uniq_var_359, _uniq_var_360) {
if (typeof _uniq_var_359.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_359.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_359.join.apply(_uniq_var_359, arguments);
} else if (_uniq_var_359.join !== undefined) {
if (_uniq_var_360 === undefined) {
return _uniq_var_359.join;
}
_uniq_var_359.join = _uniq_var_360;
}return _uniq_var_359;
};_uniq_var_361.__lix_func__ = true;return _uniq_var_361;})()(_uniq_var_9, ', ');
_uniq_var_10;
return _uniq_var_10;
};_uniq_var_362.__lix_func__ = true;return _uniq_var_362;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_363 = function (x) {return x;
};_uniq_var_363.__lix_func__ = true;return _uniq_var_363;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_370 = function (expr, env, ctx, def) {var _uniq_var_11 = call(getUniqVarName);
_uniq_var_11;
var funcName = _uniq_var_11;
funcName;
funcName;
var _uniq_var_12 = call(counterGenerator);
_uniq_var_12;
var getCount = _uniq_var_12;
getCount;
getCount;
var ctx = (function () {var _uniq_var_365 = function (current) {return (function () {var _uniq_var_364 = function (v, loop) {var next = current;
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
};_uniq_var_364.__lix_func__ = true;return _uniq_var_364;})();
};_uniq_var_365.__lix_func__ = true;return _uniq_var_365;})();
ctx;
ctx;
var _uniq_var_22 = map(expr[0], (function () {var _uniq_var_366 = function (item, index) {var _uniq_var_18 = call(getCount);
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
};_uniq_var_366.__lix_func__ = true;return _uniq_var_366;})());
_uniq_var_22;
var _uniq_var_23 = (function () {var _uniq_var_369 = function (_uniq_var_367, _uniq_var_368) {
if (typeof _uniq_var_367.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_367.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_367.join.apply(_uniq_var_367, arguments);
} else if (_uniq_var_367.join !== undefined) {
if (_uniq_var_368 === undefined) {
return _uniq_var_367.join;
}
_uniq_var_367.join = _uniq_var_368;
}return _uniq_var_367;
};_uniq_var_369.__lix_func__ = true;return _uniq_var_369;})()(_uniq_var_22, ";\n");
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
};_uniq_var_370.__lix_func__ = true;return _uniq_var_370;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_371 = function (expr, env, ctx, def) {var _uniq_var_26 = generate(expr[0], env, ctx, def);
_uniq_var_26;
var _uniq_var_27 = generate(expr[2], env, ctx, def);
_uniq_var_27;
var _uniq_var_28 = join(['(', _uniq_var_26, " || ", _uniq_var_27, ')']);
_uniq_var_28;
return _uniq_var_28;
};_uniq_var_371.__lix_func__ = true;return _uniq_var_371;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_372 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " && ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_372.__lix_func__ = true;return _uniq_var_372;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_377 = function (expr, env, ctx, def) {var _uniq_var_44 = map(expr[0], (function () {var _uniq_var_373 = function (i) {var _uniq_var_32 = true;
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
};_uniq_var_373.__lix_func__ = true;return _uniq_var_373;})());
_uniq_var_44;
var _uniq_var_45 = (function () {var _uniq_var_376 = function (_uniq_var_374, _uniq_var_375) {
if (typeof _uniq_var_374.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_374.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_374.join.apply(_uniq_var_374, arguments);
} else if (_uniq_var_374.join !== undefined) {
if (_uniq_var_375 === undefined) {
return _uniq_var_374.join;
}
_uniq_var_374.join = _uniq_var_375;
}return _uniq_var_374;
};_uniq_var_376.__lix_func__ = true;return _uniq_var_376;})()(_uniq_var_44, ' else ');
_uniq_var_45;
return _uniq_var_45;
};_uniq_var_377.__lix_func__ = true;return _uniq_var_377;})();
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
var generateAtomic = (function () {var _uniq_var_378 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_378.__lix_func__ = true;return _uniq_var_378;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_379 = function (expr, env, ctx, def) {var _uniq_var_54 = true;
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
};_uniq_var_379.__lix_func__ = true;return _uniq_var_379;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_380 = function (expr, env, ctx, def) {var _uniq_var_60 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_380.__lix_func__ = true;return _uniq_var_380;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_385 = function (expr, env, ctx, def) {var _uniq_var_64 = map(expr[0], (function () {var _uniq_var_381 = function (i) {var _uniq_var_63 = generateProperty(i, env, ctx, def);
_uniq_var_63;
return _uniq_var_63;
};_uniq_var_381.__lix_func__ = true;return _uniq_var_381;})());
_uniq_var_64;
var _uniq_var_65 = (function () {var _uniq_var_384 = function (_uniq_var_382, _uniq_var_383) {
if (typeof _uniq_var_382.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_382.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_382.join.apply(_uniq_var_382, arguments);
} else if (_uniq_var_382.join !== undefined) {
if (_uniq_var_383 === undefined) {
return _uniq_var_382.join;
}
_uniq_var_382.join = _uniq_var_383;
}return _uniq_var_382;
};_uniq_var_384.__lix_func__ = true;return _uniq_var_384;})()(_uniq_var_64, ",\n");
_uniq_var_65;
var objectBody = _uniq_var_65;
objectBody;
objectBody;
var _uniq_var_66 = join(["{\n", objectBody, "\n}"]);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_385.__lix_func__ = true;return _uniq_var_385;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_386 = function (name) {var _uniq_var_67 = true;
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
};_uniq_var_386.__lix_func__ = true;return _uniq_var_386;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_387 = function (expr) {var _uniq_var_79 = true;
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
};_uniq_var_387.__lix_func__ = true;return _uniq_var_387;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_388 = function (expr, env, ctx, def) {var _uniq_var_85 = true;
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
};_uniq_var_388.__lix_func__ = true;return _uniq_var_388;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_389 = function (expr, env, ctx, def) {var _uniq_var_93 = true;
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
};_uniq_var_389.__lix_func__ = true;return _uniq_var_389;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_394 = function (expr, env, ctx, def) {var _uniq_var_102 = map(expr[0], (function () {var _uniq_var_390 = function (i) {var _uniq_var_101 = generate(i, env, ctx, def);
_uniq_var_101;
return _uniq_var_101;
};_uniq_var_390.__lix_func__ = true;return _uniq_var_390;})());
_uniq_var_102;
var _uniq_var_103 = (function () {var _uniq_var_393 = function (_uniq_var_391, _uniq_var_392) {
if (typeof _uniq_var_391.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_391.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_391.join.apply(_uniq_var_391, arguments);
} else if (_uniq_var_391.join !== undefined) {
if (_uniq_var_392 === undefined) {
return _uniq_var_391.join;
}
_uniq_var_391.join = _uniq_var_392;
}return _uniq_var_391;
};_uniq_var_393.__lix_func__ = true;return _uniq_var_393;})()(_uniq_var_102, ', ');
_uniq_var_103;
var arrayBody = _uniq_var_103;
arrayBody;
arrayBody;
var _uniq_var_104 = join(['[', arrayBody, ']']);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_394.__lix_func__ = true;return _uniq_var_394;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_395 = function (expr, env, ctx) {var _uniq_var_105 = call(getUniqVarName);
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
};_uniq_var_395.__lix_func__ = true;return _uniq_var_395;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_396 = function (expr, env, ctx, def) {var _uniq_var_111 = generate(expr[0], env, ctx, def);
_uniq_var_111;
var _uniq_var_112 = generate(expr[2], env, ctx, def);
_uniq_var_112;
var _uniq_var_113 = ctx(_uniq_var_112, true);
_uniq_var_113;
var _uniq_var_114 = join(['while (', _uniq_var_111, ') {\n', _uniq_var_113, "\n}"]);
_uniq_var_114;
return _uniq_var_114;
};_uniq_var_396.__lix_func__ = true;return _uniq_var_396;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_397 = function (expr, env, ctx) {return 'break';
};_uniq_var_397.__lix_func__ = true;return _uniq_var_397;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_398 = function (expr, env, ctx, def) {return "";
};_uniq_var_398.__lix_func__ = true;return _uniq_var_398;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_399 = function (expr, env, ctx, def) {var _uniq_var_115 = getVarName(expr[0]);
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
};_uniq_var_399.__lix_func__ = true;return _uniq_var_399;})();
generateDef;
generateDef;
var generateAssign = (function () {var _uniq_var_400 = function (expr, env, ctx, def) {var _uniq_var_119 = getVarName(expr[0]);
_uniq_var_119;
var varname = _uniq_var_119;
varname;
varname;
var _uniq_var_120 = true;
_uniq_var_120;
var _uniq_var_121 = null;
_uniq_var_121;
var _uniq_var_124 = __eq__(env[varname], undefined);
_uniq_var_124;
var _uniq_var_125 = _uniq_var_124;
_uniq_var_125;
if (_uniq_var_125) {
var _uniq_var_126 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_126;
(_uniq_var_125 = _uniq_var_126);

};
if ((_uniq_var_120 && _uniq_var_125)) {
(_uniq_var_120 = false);
var _uniq_var_122 = console.log(varname);
_uniq_var_122;
_uniq_var_122;
var _uniq_var_123 = console.log("this var is undefined");
_uniq_var_123;
(_uniq_var_121 = _uniq_var_123);

};
_uniq_var_121;
var _uniq_var_127 = generate(expr[0], env, ctx0, def);
_uniq_var_127;
var varname = _uniq_var_127;
varname;
varname;
var _uniq_var_128 = generate(expr[2], env, ctx, def);
_uniq_var_128;
var value = _uniq_var_128;
value;
value;
var _uniq_var_129 = join([varname, " = ", value]);
_uniq_var_129;
return _uniq_var_129;
};_uniq_var_400.__lix_func__ = true;return _uniq_var_400;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_404 = function (expr, env, ctx, def) {var _uniq_var_130 = env_new(env);
_uniq_var_130;
var funcEnv = _uniq_var_130;
funcEnv;
funcEnv;
var _uniq_var_131 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_131;
var args = _uniq_var_131;
args;
args;
var _uniq_var_132 = call(getUniqVarName);
_uniq_var_132;
var tmpVar = _uniq_var_132;
tmpVar;
tmpVar;
var _uniq_var_133 = call(GenerateDefNew);
_uniq_var_133;
var def = _uniq_var_133;
def;
def;
var _uniq_var_134 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_134;
var body = _uniq_var_134;
body;
body;
var _uniq_var_135 = transformVarName('arguments');
_uniq_var_135;
var _uniq_var_136 = call(def.defineVar);
_uniq_var_136;
var _uniq_var_137 = call(def.appendExpr);
_uniq_var_137;
var _uniq_var_138 = (function () {var _uniq_var_403 = function (_uniq_var_401, _uniq_var_402) {
if (typeof _uniq_var_401.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_401.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_401.join.apply(_uniq_var_401, arguments);
} else if (_uniq_var_401.join !== undefined) {
if (_uniq_var_402 === undefined) {
return _uniq_var_401.join;
}
_uniq_var_401.join = _uniq_var_402;
}return _uniq_var_401;
};_uniq_var_403.__lix_func__ = true;return _uniq_var_403;})()(['(function (', args, ') {\n', 'var ', _uniq_var_135, ' = arguments\n', _uniq_var_136, ";\n", _uniq_var_137, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_138;
return _uniq_var_138;
};_uniq_var_404.__lix_func__ = true;return _uniq_var_404;})();
generateFunc;
generateFunc;
var generateExpr = (function () {var _uniq_var_406 = function (expr, env, ctx, def) {var _uniq_var_139 = generate(expr[1], env, ctx0, def);
_uniq_var_139;
var func = _uniq_var_139;
func;
func;
var _uniq_var_140 = generate(expr[0], env, ctx0, def);
_uniq_var_140;
var args = _uniq_var_140;
args;
args;
var _uniq_var_146 = foreach(expr, (function () {var _uniq_var_405 = function (item, index) {var _uniq_var_141 = true;
_uniq_var_141;
var _uniq_var_142 = null;
_uniq_var_142;
var _uniq_var_145 = __gt__(index, 1);
_uniq_var_145;
if ((_uniq_var_141 && _uniq_var_145)) {
(_uniq_var_141 = false);
var _uniq_var_143 = generate(item, env, ctx0, def);
_uniq_var_143;
var _uniq_var_144 = join([args, ', ', _uniq_var_143]);
_uniq_var_144;
(_uniq_var_142 = (args = _uniq_var_144));

};
return _uniq_var_142;
};_uniq_var_405.__lix_func__ = true;return _uniq_var_405;})());
_uniq_var_146;
_uniq_var_146;
var _uniq_var_147 = join([func, '(', args, ')']);
_uniq_var_147;
var _uniq_var_148 = ctx(_uniq_var_147);
_uniq_var_148;
return _uniq_var_148;
};_uniq_var_406.__lix_func__ = true;return _uniq_var_406;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_419 = function () {var vars = {

};
vars;
vars;
var funcs = [];
funcs;
funcs;
return {
defineVar: (function () {var _uniq_var_411 = function (v) {var _uniq_var_149 = true;
_uniq_var_149;
var _uniq_var_150 = null;
_uniq_var_150;
if ((_uniq_var_149 && v)) {
(_uniq_var_149 = false);
(_uniq_var_150 = (vars[v] = v));

};
if (_uniq_var_149) {
var _uniq_var_151 = map(vars, (function () {var _uniq_var_407 = function (i) {return i;
};_uniq_var_407.__lix_func__ = true;return _uniq_var_407;})());
_uniq_var_151;
var vecs = _uniq_var_151;
vecs;
vecs;
var _uniq_var_152 = true;
_uniq_var_152;
var _uniq_var_153 = null;
_uniq_var_153;
var _uniq_var_156 = __gt__(vecs.length, 0);
_uniq_var_156;
if ((_uniq_var_152 && _uniq_var_156)) {
(_uniq_var_152 = false);
var _uniq_var_154 = (function () {var _uniq_var_410 = function (_uniq_var_408, _uniq_var_409) {
if (typeof _uniq_var_408.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_408.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_408.join.apply(_uniq_var_408, arguments);
} else if (_uniq_var_408.join !== undefined) {
if (_uniq_var_409 === undefined) {
return _uniq_var_408.join;
}
_uniq_var_408.join = _uniq_var_409;
}return _uniq_var_408;
};_uniq_var_410.__lix_func__ = true;return _uniq_var_410;})()(vecs, ', ');
_uniq_var_154;
var _uniq_var_155 = __add__('var ', _uniq_var_154);
_uniq_var_155;
(_uniq_var_153 = _uniq_var_155);

};
if (_uniq_var_152) {
(_uniq_var_153 = '');

};
(_uniq_var_150 = _uniq_var_153);

};
return _uniq_var_150;
};_uniq_var_411.__lix_func__ = true;return _uniq_var_411;})(),
appendExpr: (function () {var _uniq_var_418 = function (v) {var _uniq_var_157 = true;
_uniq_var_157;
var _uniq_var_158 = null;
_uniq_var_158;
if ((_uniq_var_157 && v)) {
(_uniq_var_157 = false);
var _uniq_var_159 = (function () {var _uniq_var_414 = function (_uniq_var_412, _uniq_var_413) {
if (typeof _uniq_var_412.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_412.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_412.push.apply(_uniq_var_412, arguments);
} else if (_uniq_var_412.push !== undefined) {
if (_uniq_var_413 === undefined) {
return _uniq_var_412.push;
}
_uniq_var_412.push = _uniq_var_413;
}return _uniq_var_412;
};_uniq_var_414.__lix_func__ = true;return _uniq_var_414;})()(funcs, v);
_uniq_var_159;
(_uniq_var_158 = _uniq_var_159);

};
if (_uniq_var_157) {
var _uniq_var_160 = (function () {var _uniq_var_417 = function (_uniq_var_415, _uniq_var_416) {
if (typeof _uniq_var_415.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_415.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_415.join.apply(_uniq_var_415, arguments);
} else if (_uniq_var_415.join !== undefined) {
if (_uniq_var_416 === undefined) {
return _uniq_var_415.join;
}
_uniq_var_415.join = _uniq_var_416;
}return _uniq_var_415;
};_uniq_var_417.__lix_func__ = true;return _uniq_var_417;})()(funcs, ';\n');
_uniq_var_160;
(_uniq_var_158 = _uniq_var_160);

};
return _uniq_var_158;
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})()
};
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_420 = function (expr, env, ctx, def) {var _uniq_var_161 = call(GenerateDefNew);
_uniq_var_161;
var def = _uniq_var_161;
def;
def;
var _uniq_var_162 = generate(expr[0], env, ctx, def);
_uniq_var_162;
var body = _uniq_var_162;
body;
body;
var _uniq_var_163 = join(['module.exports = ', body, '\n']);
_uniq_var_163;
var body = _uniq_var_163;
body;
body;
var _uniq_var_164 = call(def.defineVar);
_uniq_var_164;
var _uniq_var_165 = call(def.appendExpr);
_uniq_var_165;
var _uniq_var_166 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_164, ";\n", _uniq_var_165, ";\n", body]);
_uniq_var_166;
return _uniq_var_166;
};_uniq_var_420.__lix_func__ = true;return _uniq_var_420;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_421 = function (expr, env, ctx, def) {var _uniq_var_167 = generate(expr[0], env, ctx, def);
_uniq_var_167;
return _uniq_var_167;
};_uniq_var_421.__lix_func__ = true;return _uniq_var_421;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_422 = function (expr, env, ctx, def) {var _uniq_var_168 = join(['"', expr[0], '"']);
_uniq_var_168;
return _uniq_var_168;
};_uniq_var_422.__lix_func__ = true;return _uniq_var_422;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_423 = function (expr, env, ctx, def) {var _uniq_var_169 = generate(expr[0], env, ctx, def);
_uniq_var_169;
var _uniq_var_170 = join(['("', expr[2], '" + ', _uniq_var_169, ')']);
_uniq_var_170;
return _uniq_var_170;
};_uniq_var_423.__lix_func__ = true;return _uniq_var_423;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_428 = function (expr, env, ctx, def) {var _uniq_var_172 = map(expr[0], (function () {var _uniq_var_424 = function (i) {var _uniq_var_171 = generate(i, env, ctx, def);
_uniq_var_171;
return _uniq_var_171;
};_uniq_var_424.__lix_func__ = true;return _uniq_var_424;})());
_uniq_var_172;
var _uniq_var_173 = (function () {var _uniq_var_427 = function (_uniq_var_425, _uniq_var_426) {
if (typeof _uniq_var_425.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_425.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_425.join.apply(_uniq_var_425, arguments);
} else if (_uniq_var_425.join !== undefined) {
if (_uniq_var_426 === undefined) {
return _uniq_var_425.join;
}
_uniq_var_425.join = _uniq_var_426;
}return _uniq_var_425;
};_uniq_var_427.__lix_func__ = true;return _uniq_var_427;})()(_uniq_var_172, ',');
_uniq_var_173;
var path = _uniq_var_173;
path;
path;
var _uniq_var_174 = join(['[', path, '].join("/")']);
_uniq_var_174;
return _uniq_var_174;
};_uniq_var_428.__lix_func__ = true;return _uniq_var_428;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_432 = function (expr, env, ctx, def) {var _uniq_var_175 = (function () {var _uniq_var_431 = function (_uniq_var_429, _uniq_var_430) {
if (typeof _uniq_var_429.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_429.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_429.join.apply(_uniq_var_429, arguments);
} else if (_uniq_var_429.join !== undefined) {
if (_uniq_var_430 === undefined) {
return _uniq_var_429.join;
}
_uniq_var_429.join = _uniq_var_430;
}return _uniq_var_429;
};_uniq_var_431.__lix_func__ = true;return _uniq_var_431;})()(['"', expr[0], '"'], '');
_uniq_var_175;
var name = [_uniq_var_175, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})();
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
var generateOp = (function () {var _uniq_var_433 = function (hint) {var _uniq_var_176 = true;
_uniq_var_176;
var _uniq_var_177 = null;
_uniq_var_177;
if ((_uniq_var_176 && generateOpTable[hint])) {
(_uniq_var_176 = false);
(_uniq_var_177 = generateOpTable[hint]);

};
if (_uniq_var_176) {
(_uniq_var_177 = generateExpr);

};
return _uniq_var_177;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_434 = function (expr, env, ctx, def) {var _uniq_var_178 = generateOp(expr[1]);
_uniq_var_178;
var _uniq_var_179 = _uniq_var_178(expr, env, ctx, def);
_uniq_var_179;
return _uniq_var_179;
};_uniq_var_434.__lix_func__ = true;return _uniq_var_434;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_436 = function (env) {var _uniq_var_180 = env;
_uniq_var_180;
if (not(_uniq_var_180)) {
(_uniq_var_180 = env0);

};
(env = _uniq_var_180);
var Env = (function () {var _uniq_var_435 = function () {;
};_uniq_var_435.__lix_func__ = true;return _uniq_var_435;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_181 = _instance_(Env);
_uniq_var_181;
return _uniq_var_181;
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_438 = function (expr, define) {var _uniq_var_183 = map(expr, (function () {var _uniq_var_437 = function (item) {var _uniq_var_182 = flatten(item, define);
_uniq_var_182;
return _uniq_var_182;
};_uniq_var_437.__lix_func__ = true;return _uniq_var_437;})());
_uniq_var_183;
var _uniq_var_184 = define(_uniq_var_183);
_uniq_var_184;
return _uniq_var_184;
};_uniq_var_438.__lix_func__ = true;return _uniq_var_438;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_439 = function (expr, define) {return expr;
};_uniq_var_439.__lix_func__ = true;return _uniq_var_439;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_444 = function (expr, define) {var _uniq_var_185 = call(statementFlattenGenerator);
_uniq_var_185;
var whileDefine = _uniq_var_185;
whileDefine;
whileDefine;
var _uniq_var_186 = flatten(expr[0], whileDefine);
_uniq_var_186;
(expr[0] = _uniq_var_186);
var _uniq_var_187 = flatten(expr[2], define0);
_uniq_var_187;
(expr[2] = _uniq_var_187);
var _uniq_var_188 = call(whileDefine);
_uniq_var_188;
var _uniq_var_189 = (function () {var _uniq_var_442 = function (_uniq_var_440, _uniq_var_441) {
if (typeof _uniq_var_440.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_440.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_440.concat.apply(_uniq_var_440, arguments);
} else if (_uniq_var_440.concat !== undefined) {
if (_uniq_var_441 === undefined) {
return _uniq_var_440.concat;
}
_uniq_var_440.concat = _uniq_var_441;
}return _uniq_var_440;
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})()(expr[2][0], _uniq_var_188);
_uniq_var_189;
(expr[2][0] = _uniq_var_189);
var _uniq_var_190 = call(whileDefine);
_uniq_var_190;
var _uniq_var_192 = foreach(_uniq_var_190, (function () {var _uniq_var_443 = function (i) {var _uniq_var_191 = define(i, true);
_uniq_var_191;
return _uniq_var_191;
};_uniq_var_443.__lix_func__ = true;return _uniq_var_443;})());
_uniq_var_192;
_uniq_var_192;
var _uniq_var_193 = define(expr, true);
_uniq_var_193;
_uniq_var_193;
return ['', '{empty}'];
};_uniq_var_444.__lix_func__ = true;return _uniq_var_444;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_449 = function (expr, define) {var _uniq_var_194 = flatten(expr[0], define);
_uniq_var_194;
var ret = _uniq_var_194;
ret;
ret;
var _uniq_var_195 = true;
_uniq_var_195;
var _uniq_var_196 = null;
_uniq_var_196;
var _uniq_var_198 = __ne__(ret[2], 'var');
_uniq_var_198;
if ((_uniq_var_195 && _uniq_var_198)) {
(_uniq_var_195 = false);
var _uniq_var_197 = define(ret);
_uniq_var_197;
var ret = _uniq_var_197;
ret;
(_uniq_var_196 = ret);

};
_uniq_var_196;
var getAndOpSeq = (function () {var _uniq_var_448 = function () {var _uniq_var_199 = call(statementFlattenGenerator);
_uniq_var_199;
var AndDefine = _uniq_var_199;
AndDefine;
AndDefine;
var _uniq_var_200 = flatten(expr[2], AndDefine);
_uniq_var_200;
var seqRet = _uniq_var_200;
seqRet;
seqRet;
var _uniq_var_201 = call(AndDefine);
_uniq_var_201;
var seq = _uniq_var_201;
seq;
seq;
var _uniq_var_202 = (function () {var _uniq_var_447 = function (_uniq_var_445, _uniq_var_446) {
if (typeof _uniq_var_445.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_445.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_445.push.apply(_uniq_var_445, arguments);
} else if (_uniq_var_445.push !== undefined) {
if (_uniq_var_446 === undefined) {
return _uniq_var_445.push;
}
_uniq_var_445.push = _uniq_var_446;
}return _uniq_var_445;
};_uniq_var_447.__lix_func__ = true;return _uniq_var_447;})()(seq, [ret, '=', seqRet]);
_uniq_var_202;
_uniq_var_202;
return [seq, '{seq}'];
};_uniq_var_448.__lix_func__ = true;return _uniq_var_448;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_203 = call(getAndOpSeq);
_uniq_var_203;
var _uniq_var_204 = define([[[ret, [[], '{empty}']], [_uniq_var_203, 'else']], 'if'], true);
_uniq_var_204;
_uniq_var_204;
return ret;
};_uniq_var_449.__lix_func__ = true;return _uniq_var_449;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_454 = function (expr, define) {var _uniq_var_205 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_453 = function () {var _uniq_var_210 = call(statementFlattenGenerator);
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
var _uniq_var_213 = (function () {var _uniq_var_452 = function (_uniq_var_450, _uniq_var_451) {
if (typeof _uniq_var_450.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_450.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_450.push.apply(_uniq_var_450, arguments);
} else if (_uniq_var_450.push !== undefined) {
if (_uniq_var_451 === undefined) {
return _uniq_var_450.push;
}
_uniq_var_450.push = _uniq_var_451;
}return _uniq_var_450;
};_uniq_var_452.__lix_func__ = true;return _uniq_var_452;})()(seq, [ret, '=', seqRet]);
_uniq_var_213;
_uniq_var_213;
return [seq, '{seq}'];
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_214 = call(getAndOpSeq);
_uniq_var_214;
var _uniq_var_215 = define([[[ret, _uniq_var_214]], 'if'], true);
_uniq_var_215;
_uniq_var_215;
return ret;
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_459 = function (expr, define, tmpVar, ctx) {var _uniq_var_228 = foreach(expr[0], (function () {var _uniq_var_458 = function (i) {var _uniq_var_216 = true;
_uniq_var_216;
var _uniq_var_217 = null;
_uniq_var_217;
var _uniq_var_220 = __eq__(i[1], 'else');
_uniq_var_220;
if ((_uniq_var_216 && _uniq_var_220)) {
(_uniq_var_216 = false);
var _uniq_var_218 = flatten(i[0], define0, ctx);
_uniq_var_218;
var elseSeq = _uniq_var_218;
elseSeq;
elseSeq;
var _uniq_var_219 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_219;
(_uniq_var_217 = _uniq_var_219);

};
var _uniq_var_223 = __eq__(i[1], 'if');
_uniq_var_223;
if ((_uniq_var_216 && _uniq_var_223)) {
(_uniq_var_216 = false);
var _uniq_var_221 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_221;
var _uniq_var_222 = define(_uniq_var_221);
_uniq_var_222;
(_uniq_var_217 = _uniq_var_222);

};
if (_uniq_var_216) {
var _uniq_var_224 = flatten(i[1], define0, ctx);
_uniq_var_224;
var ifSeq = _uniq_var_224;
ifSeq;
ifSeq;
var _uniq_var_225 = (function () {var _uniq_var_457 = function (_uniq_var_455, _uniq_var_456) {
if (typeof _uniq_var_455.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_455.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_455.unshift.apply(_uniq_var_455, arguments);
} else if (_uniq_var_455.unshift !== undefined) {
if (_uniq_var_456 === undefined) {
return _uniq_var_455.unshift;
}
_uniq_var_455.unshift = _uniq_var_456;
}return _uniq_var_455;
};_uniq_var_457.__lix_func__ = true;return _uniq_var_457;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_225;
_uniq_var_225;
var _uniq_var_226 = flatten(i[0], define);
_uniq_var_226;
var cond = _uniq_var_226;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_227 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_227;
(_uniq_var_217 = _uniq_var_227);

};
return _uniq_var_217;
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})());
_uniq_var_228;
return _uniq_var_228;
};_uniq_var_459.__lix_func__ = true;return _uniq_var_459;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_460 = function (expr, define) {var _uniq_var_229 = define(['true', '{atomic}'], 'new');
_uniq_var_229;
var tmpVar = _uniq_var_229;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_230 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_230;
_uniq_var_230;
return retVar;
};_uniq_var_460.__lix_func__ = true;return _uniq_var_460;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_461 = function (expr, define) {var _uniq_var_231 = flatten(expr[2], define);
_uniq_var_231;
(expr[2] = _uniq_var_231);
return expr;
};_uniq_var_461.__lix_func__ = true;return _uniq_var_461;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_465 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_232 = true;
_uniq_var_232;
var _uniq_var_233 = null;
_uniq_var_233;
var _uniq_var_237 = __gt__(expr.length, 3);
_uniq_var_237;
if ((_uniq_var_232 && _uniq_var_237)) {
(_uniq_var_232 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_234 = __lt__(i, expr.length);
_uniq_var_234;
while (_uniq_var_234) {
var _uniq_var_235 = (function () {var _uniq_var_464 = function (_uniq_var_462, _uniq_var_463) {
if (typeof _uniq_var_462.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_462.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_462.push.apply(_uniq_var_462, arguments);
} else if (_uniq_var_462.push !== undefined) {
if (_uniq_var_463 === undefined) {
return _uniq_var_462.push;
}
_uniq_var_462.push = _uniq_var_463;
}return _uniq_var_462;
};_uniq_var_464.__lix_func__ = true;return _uniq_var_464;})()(partialExpr, expr[i]);
_uniq_var_235;
_uniq_var_235;
var _uniq_var_236 = __add__(i, 1);
_uniq_var_236;
(i = _uniq_var_236);
var _uniq_var_234 = __lt__(i, expr.length);
_uniq_var_234;
}
null;
(_uniq_var_233 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_233;
var _uniq_var_238 = flattenExpr(expr, define);
_uniq_var_238;
return _uniq_var_238;
};_uniq_var_465.__lix_func__ = true;return _uniq_var_465;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_466 = function (expr, define) {var _uniq_var_239 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_239;
return _uniq_var_239;
};_uniq_var_466.__lix_func__ = true;return _uniq_var_466;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_467 = function (expr, define) {var _uniq_var_240 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_240;
return _uniq_var_240;
};_uniq_var_467.__lix_func__ = true;return _uniq_var_467;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_468 = function (expr, define) {var _uniq_var_241 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_241;
return _uniq_var_241;
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_469 = function (expr, define) {var _uniq_var_242 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_242;
return _uniq_var_242;
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_470 = function (expr, define) {var _uniq_var_243 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_243;
return _uniq_var_243;
};_uniq_var_470.__lix_func__ = true;return _uniq_var_470;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_471 = function (expr, define) {var _uniq_var_244 = flatten(expr[0], define);
_uniq_var_244;
(expr[0] = _uniq_var_244);
return expr;
};_uniq_var_471.__lix_func__ = true;return _uniq_var_471;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_472 = function (expr, define) {return expr;
};_uniq_var_472.__lix_func__ = true;return _uniq_var_472;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_474 = function (expr, define) {var _uniq_var_246 = map(expr[0], (function () {var _uniq_var_473 = function (i) {var _uniq_var_245 = flatten(i, define);
_uniq_var_245;
return _uniq_var_245;
};_uniq_var_473.__lix_func__ = true;return _uniq_var_473;})());
_uniq_var_246;
(expr[0] = _uniq_var_246);
return expr;
};_uniq_var_474.__lix_func__ = true;return _uniq_var_474;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_475 = function (expr, define) {return expr;
};_uniq_var_475.__lix_func__ = true;return _uniq_var_475;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_476 = function (expr, define) {var _uniq_var_247 = true;
_uniq_var_247;
var _uniq_var_248 = null;
_uniq_var_248;
var _uniq_var_250 = __eq__(expr[1], '{index}');
_uniq_var_250;
if ((_uniq_var_247 && _uniq_var_250)) {
(_uniq_var_247 = false);
var _uniq_var_249 = flatten(expr[0], define);
_uniq_var_249;
(_uniq_var_248 = (expr[0] = _uniq_var_249));

};
_uniq_var_248;
return expr;
};_uniq_var_476.__lix_func__ = true;return _uniq_var_476;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_481 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_480 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_251 = true;
_uniq_var_251;
var _uniq_var_252 = null;
_uniq_var_252;
var _uniq_var_258 = __eq__(arguments.length, 2);
_uniq_var_258;
if ((_uniq_var_251 && _uniq_var_258)) {
(_uniq_var_251 = false);
var _uniq_var_253 = true;
_uniq_var_253;
var _uniq_var_254 = null;
_uniq_var_254;
var _uniq_var_257 = __eq__(defined[name], undefined);
_uniq_var_257;
if ((_uniq_var_253 && _uniq_var_257)) {
(_uniq_var_253 = false);
var _uniq_var_255 = call(getUniqVarName);
_uniq_var_255;
var varName = _uniq_var_255;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_256 = (function () {var _uniq_var_479 = function (_uniq_var_477, _uniq_var_478) {
if (typeof _uniq_var_477.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_477.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_477.push.apply(_uniq_var_477, arguments);
} else if (_uniq_var_477.push !== undefined) {
if (_uniq_var_478 === undefined) {
return _uniq_var_477.push;
}
_uniq_var_477.push = _uniq_var_478;
}return _uniq_var_477;
};_uniq_var_479.__lix_func__ = true;return _uniq_var_479;})()(statements, [lixVar, ':=', value]);
_uniq_var_256;
_uniq_var_256;
(_uniq_var_254 = (defined[name] = lixVar));

};
_uniq_var_254;
(_uniq_var_252 = (ret = defined[name]));

};
if (_uniq_var_251) {
(_uniq_var_252 = (ret = statements));

};
_uniq_var_252;
return ret;
};_uniq_var_480.__lix_func__ = true;return _uniq_var_480;})();
};_uniq_var_481.__lix_func__ = true;return _uniq_var_481;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_259 = call(NewGlobalDefine);
_uniq_var_259;
var globalDefine = _uniq_var_259;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_482 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_260 = true;
_uniq_var_260;
var _uniq_var_261 = null;
_uniq_var_261;
var _uniq_var_263 = __eq__(expr[0][3], '{global}');
_uniq_var_263;
if ((_uniq_var_260 && _uniq_var_263)) {
(_uniq_var_260 = false);
var _uniq_var_262 = globalDefine(expr[0][0], expr);
_uniq_var_262;
(_uniq_var_261 = (ret = _uniq_var_262));

};
if (_uniq_var_260) {
var _uniq_var_264 = flattenField(expr[0], define);
_uniq_var_264;
(expr[0] = _uniq_var_264);
(_uniq_var_261 = (ret = expr));

};
_uniq_var_261;
return ret;
};_uniq_var_482.__lix_func__ = true;return _uniq_var_482;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_483 = function (expr, define) {var _uniq_var_265 = flatten(expr[2], define);
_uniq_var_265;
(expr[2] = _uniq_var_265);
return expr;
};_uniq_var_483.__lix_func__ = true;return _uniq_var_483;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_485 = function (expr, define) {var _uniq_var_267 = map(expr[0], (function () {var _uniq_var_484 = function (i) {var _uniq_var_266 = flattenProperty(i, define);
_uniq_var_266;
return _uniq_var_266;
};_uniq_var_484.__lix_func__ = true;return _uniq_var_484;})());
_uniq_var_267;
(expr[0] = _uniq_var_267);
return expr;
};_uniq_var_485.__lix_func__ = true;return _uniq_var_485;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_487 = function (expr, define) {var _uniq_var_269 = map(expr[0], (function () {var _uniq_var_486 = function (i) {var _uniq_var_268 = flatten(i, define);
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_486.__lix_func__ = true;return _uniq_var_486;})());
_uniq_var_269;
(expr[0] = _uniq_var_269);
return expr;
};_uniq_var_487.__lix_func__ = true;return _uniq_var_487;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_488 = function (expr, define) {var _uniq_var_270 = flatten(expr[2], define);
_uniq_var_270;
(expr[2] = _uniq_var_270);
return expr;
};_uniq_var_488.__lix_func__ = true;return _uniq_var_488;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_489 = function (expr, define) {var _uniq_var_271 = true;
_uniq_var_271;
var _uniq_var_272 = null;
_uniq_var_272;
var _uniq_var_275 = __eq__(expr[1], '{.}');
_uniq_var_275;
if ((_uniq_var_271 && _uniq_var_275)) {
(_uniq_var_271 = false);
var _uniq_var_273 = flattenFieldAccess(expr[0], define);
_uniq_var_273;
(expr[0] = _uniq_var_273);
var _uniq_var_274 = flattenField(expr[2], define);
_uniq_var_274;
(_uniq_var_272 = (expr[2] = _uniq_var_274));

};
if (_uniq_var_271) {
var _uniq_var_276 = flatten(expr, define);
_uniq_var_276;
(_uniq_var_272 = (expr = _uniq_var_276));

};
_uniq_var_272;
return expr;
};_uniq_var_489.__lix_func__ = true;return _uniq_var_489;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_490 = function (expr, define) {return expr;
};_uniq_var_490.__lix_func__ = true;return _uniq_var_490;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_491 = function (expr, define) {var _uniq_var_277 = flatten(expr[0], define);
_uniq_var_277;
return _uniq_var_277;
};_uniq_var_491.__lix_func__ = true;return _uniq_var_491;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_505 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_504 = function (statement, tmpVarName) {var _uniq_var_278 = true;
_uniq_var_278;
var _uniq_var_279 = null;
_uniq_var_279;
var _uniq_var_280 = __eq__(statement, undefined);
_uniq_var_280;
if ((_uniq_var_278 && _uniq_var_280)) {
(_uniq_var_278 = false);
(_uniq_var_279 = data);

};
var _uniq_var_282 = __eq__(tmpVarName, true);
_uniq_var_282;
if ((_uniq_var_278 && _uniq_var_282)) {
(_uniq_var_278 = false);
var _uniq_var_281 = (function () {var _uniq_var_494 = function (_uniq_var_492, _uniq_var_493) {
if (typeof _uniq_var_492.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_492.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_492.push.apply(_uniq_var_492, arguments);
} else if (_uniq_var_492.push !== undefined) {
if (_uniq_var_493 === undefined) {
return _uniq_var_492.push;
}
_uniq_var_492.push = _uniq_var_493;
}return _uniq_var_492;
};_uniq_var_494.__lix_func__ = true;return _uniq_var_494;})()(data, statement);
_uniq_var_281;
(_uniq_var_279 = _uniq_var_281);

};
var _uniq_var_286 = __eq__(tmpVarName, undefined);
_uniq_var_286;
if ((_uniq_var_278 && _uniq_var_286)) {
(_uniq_var_278 = false);
var _uniq_var_283 = call(getUniqVarName);
_uniq_var_283;
var varName = _uniq_var_283;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_284 = (function () {var _uniq_var_497 = function (_uniq_var_495, _uniq_var_496) {
if (typeof _uniq_var_495.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_495.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_495.push.apply(_uniq_var_495, arguments);
} else if (_uniq_var_495.push !== undefined) {
if (_uniq_var_496 === undefined) {
return _uniq_var_495.push;
}
_uniq_var_495.push = _uniq_var_496;
}return _uniq_var_495;
};_uniq_var_497.__lix_func__ = true;return _uniq_var_497;})()(data, statement);
_uniq_var_284;
_uniq_var_284;
var _uniq_var_285 = (function () {var _uniq_var_500 = function (_uniq_var_498, _uniq_var_499) {
if (typeof _uniq_var_498.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_498.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_498.push.apply(_uniq_var_498, arguments);
} else if (_uniq_var_498.push !== undefined) {
if (_uniq_var_499 === undefined) {
return _uniq_var_498.push;
}
_uniq_var_498.push = _uniq_var_499;
}return _uniq_var_498;
};_uniq_var_500.__lix_func__ = true;return _uniq_var_500;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_285;
_uniq_var_285;
(_uniq_var_279 = lixVar);

};
var _uniq_var_289 = __eq__(tmpVarName, 'new');
_uniq_var_289;
if ((_uniq_var_278 && _uniq_var_289)) {
(_uniq_var_278 = false);
var _uniq_var_287 = call(getUniqVarName);
_uniq_var_287;
var varName = _uniq_var_287;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_288 = (function () {var _uniq_var_503 = function (_uniq_var_501, _uniq_var_502) {
if (typeof _uniq_var_501.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_501.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_501.push.apply(_uniq_var_501, arguments);
} else if (_uniq_var_501.push !== undefined) {
if (_uniq_var_502 === undefined) {
return _uniq_var_501.push;
}
_uniq_var_501.push = _uniq_var_502;
}return _uniq_var_501;
};_uniq_var_503.__lix_func__ = true;return _uniq_var_503;})()(data, [lixVar, ':=', statement]);
_uniq_var_288;
_uniq_var_288;
(_uniq_var_279 = lixVar);

};
return _uniq_var_279;
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})();
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_517 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_506 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_290 = true;
_uniq_var_290;
var _uniq_var_291 = null;
_uniq_var_291;
var _uniq_var_293 = seqCtx;
_uniq_var_293;
if (_uniq_var_293) {
var _uniq_var_294 = parseInt(index);
_uniq_var_294;
var _uniq_var_295 = __sub__(expr[0].length, 1);
_uniq_var_295;
var _uniq_var_296 = __eq__(_uniq_var_294, _uniq_var_295);
_uniq_var_296;
(_uniq_var_293 = _uniq_var_296);

};
if ((_uniq_var_290 && _uniq_var_293)) {
(_uniq_var_290 = false);
var _uniq_var_292 = seqCtx(stmt);
_uniq_var_292;
var ret = _uniq_var_292;
ret;
(_uniq_var_291 = ret);

};
_uniq_var_291;
return ret;
};_uniq_var_506.__lix_func__ = true;return _uniq_var_506;})();
ctx;
ctx;
var _uniq_var_323 = foreach(expr[0], (function () {var _uniq_var_516 = function (item, index) {var _uniq_var_297 = call(statementFlattenGenerator);
_uniq_var_297;
var exprDefine = _uniq_var_297;
exprDefine;
exprDefine;
var _uniq_var_298 = flatten(item, exprDefine);
_uniq_var_298;
var itemRet = _uniq_var_298;
itemRet;
itemRet;
var _uniq_var_299 = call(exprDefine);
_uniq_var_299;
var _uniq_var_300 = (function () {var _uniq_var_509 = function (_uniq_var_507, _uniq_var_508) {
if (typeof _uniq_var_507.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_507.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_507.concat.apply(_uniq_var_507, arguments);
} else if (_uniq_var_507.concat !== undefined) {
if (_uniq_var_508 === undefined) {
return _uniq_var_507.concat;
}
_uniq_var_507.concat = _uniq_var_508;
}return _uniq_var_507;
};_uniq_var_509.__lix_func__ = true;return _uniq_var_509;})()(ret, _uniq_var_299);
_uniq_var_300;
(ret = _uniq_var_300);
var _uniq_var_301 = ctx(itemRet, index);
_uniq_var_301;
var stmtRet = _uniq_var_301;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_510 = function (expr) {var _uniq_var_302 = __eq__(expr[1], '{atomic}');
_uniq_var_302;
var _uniq_var_303 = _uniq_var_302;
_uniq_var_303;
if (_uniq_var_303) {
var _uniq_var_304 = __ne__(expr[3], undefined);
_uniq_var_304;
(_uniq_var_303 = _uniq_var_304);

};
return _uniq_var_303;
};_uniq_var_510.__lix_func__ = true;return _uniq_var_510;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_511 = function (expr) {var _uniq_var_305 = __eq__(expr[1], '{atomic}');
_uniq_var_305;
var _uniq_var_306 = _uniq_var_305;
_uniq_var_306;
if (_uniq_var_306) {
var _uniq_var_307 = __eq__(expr[3], undefined);
_uniq_var_307;
(_uniq_var_306 = _uniq_var_307);

};
return _uniq_var_306;
};_uniq_var_511.__lix_func__ = true;return _uniq_var_511;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_512 = function (expr) {var _uniq_var_308 = isRealVar(expr);
_uniq_var_308;
var _uniq_var_309 = _uniq_var_308;
_uniq_var_309;
if (not(_uniq_var_309)) {
var _uniq_var_310 = __ne__(expr[1], 'if');
_uniq_var_310;
var _uniq_var_311 = _uniq_var_310;
_uniq_var_311;
if (_uniq_var_311) {
var _uniq_var_312 = __ne__(expr[1], 'while');
_uniq_var_312;
(_uniq_var_311 = _uniq_var_312);

};
(_uniq_var_309 = _uniq_var_311);

};
return _uniq_var_309;
};_uniq_var_512.__lix_func__ = true;return _uniq_var_512;})();
isRealExpr;
isRealExpr;
var _uniq_var_313 = true;
_uniq_var_313;
var _uniq_var_314 = null;
_uniq_var_314;
var _uniq_var_319 = __ne__(stmtRet[1], '{empty}');
_uniq_var_319;
var _uniq_var_320 = _uniq_var_319;
_uniq_var_320;
if (_uniq_var_320) {
var _uniq_var_321 = isTmpVar(stmtRet);
_uniq_var_321;
var _uniq_var_322 = not(_uniq_var_321);
_uniq_var_322;
(_uniq_var_320 = _uniq_var_322);

};
if ((_uniq_var_313 && _uniq_var_320)) {
(_uniq_var_313 = false);
var _uniq_var_315 = true;
_uniq_var_315;
var _uniq_var_316 = null;
_uniq_var_316;
var _uniq_var_317 = isRealExpr(stmtRet);
_uniq_var_317;
if ((_uniq_var_315 && _uniq_var_317)) {
(_uniq_var_315 = false);
(_uniq_var_316 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_316;
var _uniq_var_318 = (function () {var _uniq_var_515 = function (_uniq_var_513, _uniq_var_514) {
if (typeof _uniq_var_513.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_513.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_513.push.apply(_uniq_var_513, arguments);
} else if (_uniq_var_513.push !== undefined) {
if (_uniq_var_514 === undefined) {
return _uniq_var_513.push;
}
_uniq_var_513.push = _uniq_var_514;
}return _uniq_var_513;
};_uniq_var_515.__lix_func__ = true;return _uniq_var_515;})()(ret, stmtRet);
_uniq_var_318;
(_uniq_var_314 = _uniq_var_318);

};
return _uniq_var_314;
};_uniq_var_516.__lix_func__ = true;return _uniq_var_516;})());
_uniq_var_323;
_uniq_var_323;
(expr[0] = ret);
return expr;
};_uniq_var_517.__lix_func__ = true;return _uniq_var_517;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_521 = function (expr, define) {var _uniq_var_324 = flatten(expr[0], define);
_uniq_var_324;
var ret = _uniq_var_324;
ret;
ret;
var _uniq_var_325 = call(globalDefine);
_uniq_var_325;
var _uniq_var_326 = (function () {var _uniq_var_520 = function (_uniq_var_518, _uniq_var_519) {
if (typeof _uniq_var_518.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_518.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_518.concat.apply(_uniq_var_518, arguments);
} else if (_uniq_var_518.concat !== undefined) {
if (_uniq_var_519 === undefined) {
return _uniq_var_518.concat;
}
_uniq_var_518.concat = _uniq_var_519;
}return _uniq_var_518;
};_uniq_var_520.__lix_func__ = true;return _uniq_var_520;})()(_uniq_var_325, ret[0]);
_uniq_var_326;
(ret[0] = _uniq_var_326);
return [ret, '{start}'];
};_uniq_var_521.__lix_func__ = true;return _uniq_var_521;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_525 = function (expr, define) {var _uniq_var_327 = true;
_uniq_var_327;
var _uniq_var_328 = null;
_uniq_var_328;
var _uniq_var_330 = __eq__(expr[2], '{var}');
_uniq_var_330;
if ((_uniq_var_327 && _uniq_var_330)) {
(_uniq_var_327 = false);
var _uniq_var_329 = (function () {var _uniq_var_524 = function (_uniq_var_522, _uniq_var_523) {
if (typeof _uniq_var_522.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_522.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_522.join.apply(_uniq_var_522, arguments);
} else if (_uniq_var_522.join !== undefined) {
if (_uniq_var_523 === undefined) {
return _uniq_var_522.join;
}
_uniq_var_522.join = _uniq_var_523;
}return _uniq_var_522;
};_uniq_var_524.__lix_func__ = true;return _uniq_var_524;})()(['"', expr[0], '"'], '');
_uniq_var_329;
var name = [_uniq_var_329, '{atomic}'];
name;
(_uniq_var_328 = name);

};
var _uniq_var_332 = __eq__(expr[2], '{index}');
_uniq_var_332;
if ((_uniq_var_327 && _uniq_var_332)) {
(_uniq_var_327 = false);
var _uniq_var_331 = flatten(expr[0], define);
_uniq_var_331;
var name = _uniq_var_331;
name;
(_uniq_var_328 = name);

};
_uniq_var_328;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_333 = define(moduleExpr);
_uniq_var_333;
return _uniq_var_333;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_526 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_526.__lix_func__ = true;return _uniq_var_526;})();
flattenDefer;
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
flattenOpTable;
var flattenOp = (function () {var _uniq_var_527 = function (hint) {var _uniq_var_334 = true;
_uniq_var_334;
var _uniq_var_335 = null;
_uniq_var_335;
if ((_uniq_var_334 && flattenOpTable[hint])) {
(_uniq_var_334 = false);
(_uniq_var_335 = flattenOpTable[hint]);

};
if (_uniq_var_334) {
(_uniq_var_335 = flattenExpr);

};
return _uniq_var_335;
};_uniq_var_527.__lix_func__ = true;return _uniq_var_527;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_528 = function (expr, define, ctx) {var _uniq_var_336 = flattenOp(expr[1]);
_uniq_var_336;
var _uniq_var_337 = _uniq_var_336(expr, define, ctx);
_uniq_var_337;
return _uniq_var_337;
};_uniq_var_528.__lix_func__ = true;return _uniq_var_528;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_529 = function (i) {return i;
};_uniq_var_529.__lix_func__ = true;return _uniq_var_529;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_530 = function (i) {;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})(),
appendExpr: (function () {var _uniq_var_531 = function (i) {;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})()
};
def0;
def0;
var _uniq_var_338 = join(['s[', STEP, ']']);
_uniq_var_338;
var _uniq_var_339 = join(['s[', RET, ']']);
_uniq_var_339;
var seqFuncParamsName = {
step: _uniq_var_338,
ret: _uniq_var_339
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_538 = function (expr) {var _uniq_var_340 = map(env0, (function () {var _uniq_var_532 = function (i) {return i;
};_uniq_var_532.__lix_func__ = true;return _uniq_var_532;})());
_uniq_var_340;
var _uniq_var_341 = (function () {var _uniq_var_535 = function (_uniq_var_533, _uniq_var_534) {
if (typeof _uniq_var_533.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_533.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_533.join.apply(_uniq_var_533, arguments);
} else if (_uniq_var_533.join !== undefined) {
if (_uniq_var_534 === undefined) {
return _uniq_var_533.join;
}
_uniq_var_533.join = _uniq_var_534;
}return _uniq_var_533;
};_uniq_var_535.__lix_func__ = true;return _uniq_var_535;})()(_uniq_var_340, "\n");
_uniq_var_341;
var libs = _uniq_var_341;
libs;
libs;
var _uniq_var_342 = flatten(expr, (function () {var _uniq_var_536 = function (i) {;
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})(), (function () {var _uniq_var_537 = function (i) {return i;
};_uniq_var_537.__lix_func__ = true;return _uniq_var_537;})());
_uniq_var_342;
var flattenedExpr = _uniq_var_342;
flattenedExpr;
flattenedExpr;
var _uniq_var_343 = call(env_new);
_uniq_var_343;
var _uniq_var_344 = generateStart(flattenedExpr, _uniq_var_343, ctx0, def0);
_uniq_var_344;
var code = _uniq_var_344;
code;
code;
var _uniq_var_345 = join([libs, "\n", code]);
_uniq_var_345;
return _uniq_var_345;
};_uniq_var_538.__lix_func__ = true;return _uniq_var_538;})();
compile;
compile;
(exports.compile = compile);
compile;

