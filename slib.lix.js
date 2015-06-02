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
var join = (function () {var _uniq_var_404 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_403 = function (_uniq_var_401, _uniq_var_402) {
if (typeof _uniq_var_401.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_401.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_401.join.apply(_uniq_var_401, arguments);
} else if (_uniq_var_401.join !== undefined) {
if (_uniq_var_402 === undefined) {
return _uniq_var_401.join;
}
_uniq_var_401.join = _uniq_var_402;
}return _uniq_var_401;
};_uniq_var_403.__lix_func__ = true;return _uniq_var_403;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_404.__lix_func__ = true;return _uniq_var_404;})();
join;
join;
var map = (function () {var _uniq_var_409 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_408 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_407 = function (_uniq_var_405, _uniq_var_406) {
if (typeof _uniq_var_405.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_405.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_405.push.apply(_uniq_var_405, arguments);
} else if (_uniq_var_405.push !== undefined) {
if (_uniq_var_406 === undefined) {
return _uniq_var_405.push;
}
_uniq_var_405.push = _uniq_var_406;
}return _uniq_var_405;
};_uniq_var_407.__lix_func__ = true;return _uniq_var_407;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_408.__lix_func__ = true;return _uniq_var_408;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_409.__lix_func__ = true;return _uniq_var_409;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_411 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_410 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_410.__lix_func__ = true;return _uniq_var_410;})();
};_uniq_var_411.__lix_func__ = true;return _uniq_var_411;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_412 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_412.__lix_func__ = true;return _uniq_var_412;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_417 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_413 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
_uniq_var_8;
var varname = _uniq_var_8;
varname;
varname;
var _uniq_var_9 = true;
_uniq_var_9;
var _uniq_var_10 = null;
_uniq_var_10;
var _uniq_var_11 = __eq__(i[3], "{tmp}");
_uniq_var_11;
if ((_uniq_var_9 && _uniq_var_11)) {
(_uniq_var_9 = false);
(_uniq_var_10 = (varname = i[0]));

};
_uniq_var_10;
(env[varname] = true);
return varname;
};_uniq_var_413.__lix_func__ = true;return _uniq_var_413;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_416 = function (_uniq_var_414, _uniq_var_415) {
if (typeof _uniq_var_414.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_414.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_414.join.apply(_uniq_var_414, arguments);
} else if (_uniq_var_414.join !== undefined) {
if (_uniq_var_415 === undefined) {
return _uniq_var_414.join;
}
_uniq_var_414.join = _uniq_var_415;
}return _uniq_var_414;
};_uniq_var_416.__lix_func__ = true;return _uniq_var_416;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_417.__lix_func__ = true;return _uniq_var_417;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_418 = function (x) {return x;
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_425 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_420 = function (current) {return (function () {var _uniq_var_419 = function (v, loop) {var next = current;
next;
next;
var _uniq_var_16 = true;
_uniq_var_16;
var _uniq_var_17 = null;
_uniq_var_17;
var _uniq_var_19 = __eq__(loop, undefined);
_uniq_var_19;
if ((_uniq_var_16 && _uniq_var_19)) {
(_uniq_var_16 = false);
var _uniq_var_18 = __add__(next, 1);
_uniq_var_18;
(_uniq_var_17 = (next = _uniq_var_18));

};
_uniq_var_17;
var _uniq_var_20 = join([seqFuncParamsName.step, ' = ', next, ';\n', 'lix(s, ', v, ')']);
_uniq_var_20;
return _uniq_var_20;
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
};_uniq_var_420.__lix_func__ = true;return _uniq_var_420;})();
ctx;
ctx;
var _uniq_var_25 = map(expr[0], (function () {var _uniq_var_421 = function (item, index) {var _uniq_var_21 = call(getCount);
_uniq_var_21;
var current = _uniq_var_21;
current;
current;
var _uniq_var_22 = ctx(current);
_uniq_var_22;
var _uniq_var_23 = generate(item, env, _uniq_var_22, def);
_uniq_var_23;
var stmt = _uniq_var_23;
stmt;
stmt;
var _uniq_var_24 = join(['case ', current, ':\n', stmt]);
_uniq_var_24;
var stmt = _uniq_var_24;
stmt;
return stmt;
};_uniq_var_421.__lix_func__ = true;return _uniq_var_421;})());
_uniq_var_25;
var _uniq_var_26 = (function () {var _uniq_var_424 = function (_uniq_var_422, _uniq_var_423) {
if (typeof _uniq_var_422.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_422.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_422.join.apply(_uniq_var_422, arguments);
} else if (_uniq_var_422.join !== undefined) {
if (_uniq_var_423 === undefined) {
return _uniq_var_422.join;
}
_uniq_var_422.join = _uniq_var_423;
}return _uniq_var_422;
};_uniq_var_424.__lix_func__ = true;return _uniq_var_424;})()(_uniq_var_25, ";\n");
_uniq_var_26;
var body = _uniq_var_26;
body;
body;
var _uniq_var_27 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_27;
var _uniq_var_28 = def.appendExpr(_uniq_var_27);
_uniq_var_28;
_uniq_var_28;
return funcName;
};_uniq_var_425.__lix_func__ = true;return _uniq_var_425;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_426 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " || ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_426.__lix_func__ = true;return _uniq_var_426;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_427 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " && ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_427.__lix_func__ = true;return _uniq_var_427;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_432 = function (expr, env, ctx, def) {var _uniq_var_47 = map(expr[0], (function () {var _uniq_var_428 = function (i) {var _uniq_var_35 = true;
_uniq_var_35;
var _uniq_var_36 = null;
_uniq_var_36;
var _uniq_var_40 = __eq__(i[1], 'else');
_uniq_var_40;
if ((_uniq_var_35 && _uniq_var_40)) {
(_uniq_var_35 = false);
var _uniq_var_37 = generate(i[0], env, ctx, def);
_uniq_var_37;
var _uniq_var_38 = ctx(_uniq_var_37);
_uniq_var_38;
var _uniq_var_39 = join(['{\n', _uniq_var_38, '\n}']);
_uniq_var_39;
(_uniq_var_36 = _uniq_var_39);

};
var _uniq_var_42 = __eq__(i[1], 'if');
_uniq_var_42;
if ((_uniq_var_35 && _uniq_var_42)) {
(_uniq_var_35 = false);
var _uniq_var_41 = generateIf(i, env, ctx, def);
_uniq_var_41;
(_uniq_var_36 = _uniq_var_41);

};
if (_uniq_var_35) {
var _uniq_var_43 = generate(i[0], env, ctx, def);
_uniq_var_43;
var _uniq_var_44 = generate(i[1], env, ctx, def);
_uniq_var_44;
var _uniq_var_45 = ctx(_uniq_var_44);
_uniq_var_45;
var _uniq_var_46 = join(['if (', _uniq_var_43, ') {\n', _uniq_var_45, '\n}']);
_uniq_var_46;
(_uniq_var_36 = _uniq_var_46);

};
return _uniq_var_36;
};_uniq_var_428.__lix_func__ = true;return _uniq_var_428;})());
_uniq_var_47;
var _uniq_var_48 = (function () {var _uniq_var_431 = function (_uniq_var_429, _uniq_var_430) {
if (typeof _uniq_var_429.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_429.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_429.join.apply(_uniq_var_429, arguments);
} else if (_uniq_var_429.join !== undefined) {
if (_uniq_var_430 === undefined) {
return _uniq_var_429.join;
}
_uniq_var_429.join = _uniq_var_430;
}return _uniq_var_429;
};_uniq_var_431.__lix_func__ = true;return _uniq_var_431;})()(_uniq_var_47, ' else ');
_uniq_var_48;
return _uniq_var_48;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})();
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
var generateAtomic = (function () {var _uniq_var_433 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
ret;
var _uniq_var_49 = true;
_uniq_var_49;
var _uniq_var_50 = null;
_uniq_var_50;
var _uniq_var_56 = __eq__(expr[2], '{var}');
_uniq_var_56;
if ((_uniq_var_49 && _uniq_var_56)) {
(_uniq_var_49 = false);
var _uniq_var_51 = true;
_uniq_var_51;
var _uniq_var_52 = null;
_uniq_var_52;
if ((_uniq_var_51 && operateFuncName[expr[0]])) {
(_uniq_var_51 = false);
var _uniq_var_53 = transformVarName(operateFuncName[expr[0]]);
_uniq_var_53;
(_uniq_var_52 = (ret = _uniq_var_53));

};
var _uniq_var_55 = __eq__(expr[3], undefined);
_uniq_var_55;
if ((_uniq_var_51 && _uniq_var_55)) {
(_uniq_var_51 = false);
var _uniq_var_54 = transformVarName(expr[0]);
_uniq_var_54;
(_uniq_var_52 = (ret = _uniq_var_54));

};
(_uniq_var_50 = _uniq_var_52);

};
_uniq_var_50;
return ret;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_434 = function (expr, env, ctx, def) {var _uniq_var_57 = true;
_uniq_var_57;
var _uniq_var_58 = null;
_uniq_var_58;
var _uniq_var_60 = __eq__(expr[1], '{atomic}');
_uniq_var_60;
if ((_uniq_var_57 && _uniq_var_60)) {
(_uniq_var_57 = false);
var _uniq_var_59 = generateAtomic(expr, env, ctx, def);
_uniq_var_59;
(_uniq_var_58 = _uniq_var_59);

};
var _uniq_var_62 = __eq__(expr[1], '{index}');
_uniq_var_62;
if ((_uniq_var_57 && _uniq_var_62)) {
(_uniq_var_57 = false);
var _uniq_var_61 = generateAtomic(expr[0], env, ctx, def);
_uniq_var_61;
(_uniq_var_58 = _uniq_var_61);

};
return _uniq_var_58;
};_uniq_var_434.__lix_func__ = true;return _uniq_var_434;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_435 = function (expr, env, ctx, def) {var _uniq_var_63 = generatePropertyName(expr[0], env, ctx0, def);
_uniq_var_63;
var propertyName = _uniq_var_63;
propertyName;
propertyName;
var _uniq_var_64 = generate(expr[2], env, ctx, def);
_uniq_var_64;
var propertyValue = _uniq_var_64;
propertyValue;
propertyValue;
var _uniq_var_65 = join([propertyName, ": ", propertyValue]);
_uniq_var_65;
return _uniq_var_65;
};_uniq_var_435.__lix_func__ = true;return _uniq_var_435;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_440 = function (expr, env, ctx, def) {var _uniq_var_67 = map(expr[0], (function () {var _uniq_var_436 = function (i) {var _uniq_var_66 = generateProperty(i, env, ctx, def);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})());
_uniq_var_67;
var _uniq_var_68 = (function () {var _uniq_var_439 = function (_uniq_var_437, _uniq_var_438) {
if (typeof _uniq_var_437.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_437.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_437.join.apply(_uniq_var_437, arguments);
} else if (_uniq_var_437.join !== undefined) {
if (_uniq_var_438 === undefined) {
return _uniq_var_437.join;
}
_uniq_var_437.join = _uniq_var_438;
}return _uniq_var_437;
};_uniq_var_439.__lix_func__ = true;return _uniq_var_439;})()(_uniq_var_67, ",\n");
_uniq_var_68;
var objectBody = _uniq_var_68;
objectBody;
objectBody;
var _uniq_var_69 = join(["{\n", objectBody, "\n}"]);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_440.__lix_func__ = true;return _uniq_var_440;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_441 = function (name) {var _uniq_var_70 = true;
_uniq_var_70;
var _uniq_var_71 = null;
_uniq_var_71;
var _uniq_var_73 = __ne__(name, 'exports');
_uniq_var_73;
var _uniq_var_74 = _uniq_var_73;
_uniq_var_74;
if (_uniq_var_74) {
var _uniq_var_75 = __ne__(name, 'undefined');
_uniq_var_75;
(_uniq_var_74 = _uniq_var_75);

};
var _uniq_var_76 = _uniq_var_74;
_uniq_var_76;
if (_uniq_var_76) {
var _uniq_var_77 = __ne__(name, 'null');
_uniq_var_77;
(_uniq_var_76 = _uniq_var_77);

};
var _uniq_var_78 = _uniq_var_76;
_uniq_var_78;
if (_uniq_var_78) {
var _uniq_var_79 = __ne__(name, 'true');
_uniq_var_79;
(_uniq_var_78 = _uniq_var_79);

};
var _uniq_var_80 = _uniq_var_78;
_uniq_var_80;
if (_uniq_var_80) {
var _uniq_var_81 = __ne__(name, 'false');
_uniq_var_81;
(_uniq_var_80 = _uniq_var_81);

};
if ((_uniq_var_70 && _uniq_var_80)) {
(_uniq_var_70 = false);
var _uniq_var_72 = __add__('L', name);
_uniq_var_72;
(_uniq_var_71 = (name = _uniq_var_72));

};
_uniq_var_71;
return name;
};_uniq_var_441.__lix_func__ = true;return _uniq_var_441;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_442 = function (expr) {var _uniq_var_82 = true;
_uniq_var_82;
var _uniq_var_83 = null;
_uniq_var_83;
var _uniq_var_85 = __eq__(expr[1], '{atomic}');
_uniq_var_85;
if ((_uniq_var_82 && _uniq_var_85)) {
(_uniq_var_82 = false);
var _uniq_var_84 = generateAtomic(expr, {

}, ctx0);
_uniq_var_84;
(_uniq_var_83 = _uniq_var_84);

};
var _uniq_var_87 = __eq__(expr[1], '{.}');
_uniq_var_87;
if ((_uniq_var_82 && _uniq_var_87)) {
(_uniq_var_82 = false);
var _uniq_var_86 = getVarName(expr[0]);
_uniq_var_86;
(_uniq_var_83 = _uniq_var_86);

};
return _uniq_var_83;
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_443 = function (expr, env, ctx, def) {var _uniq_var_88 = true;
_uniq_var_88;
var _uniq_var_89 = null;
_uniq_var_89;
var _uniq_var_92 = __eq__(expr[2], '{dot}');
_uniq_var_92;
if ((_uniq_var_88 && _uniq_var_92)) {
(_uniq_var_88 = false);
var _uniq_var_90 = generateAtomic(expr, env, ctx0, def);
_uniq_var_90;
var _uniq_var_91 = __add__('.', _uniq_var_90);
_uniq_var_91;
(_uniq_var_89 = _uniq_var_91);

};
var _uniq_var_95 = __eq__(expr[2], '{index}');
_uniq_var_95;
if ((_uniq_var_88 && _uniq_var_95)) {
(_uniq_var_88 = false);
var _uniq_var_93 = generate(expr[0], env, ctx, def);
_uniq_var_93;
var _uniq_var_94 = join(['[', _uniq_var_93, ']']);
_uniq_var_94;
(_uniq_var_89 = _uniq_var_94);

};
return _uniq_var_89;
};_uniq_var_443.__lix_func__ = true;return _uniq_var_443;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_444 = function (expr, env, ctx, def) {var _uniq_var_96 = true;
_uniq_var_96;
var _uniq_var_97 = null;
_uniq_var_97;
var _uniq_var_99 = __eq__(expr[1], '{atomic}');
_uniq_var_99;
if ((_uniq_var_96 && _uniq_var_99)) {
(_uniq_var_96 = false);
var _uniq_var_98 = generateAtomic(expr, env, ctx0, def);
_uniq_var_98;
(_uniq_var_97 = _uniq_var_98);

};
var _uniq_var_103 = __eq__(expr[1], '{.}');
_uniq_var_103;
if ((_uniq_var_96 && _uniq_var_103)) {
(_uniq_var_96 = false);
var _uniq_var_100 = generateFieldAccess(expr[0], env, ctx, def);
_uniq_var_100;
var obj = _uniq_var_100;
obj;
obj;
var _uniq_var_101 = generateField(expr[2], env, ctx, def);
_uniq_var_101;
var field = _uniq_var_101;
field;
field;
var _uniq_var_102 = __add__(obj, field);
_uniq_var_102;
(_uniq_var_97 = _uniq_var_102);

};
return _uniq_var_97;
};_uniq_var_444.__lix_func__ = true;return _uniq_var_444;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_449 = function (expr, env, ctx, def) {var _uniq_var_105 = map(expr[0], (function () {var _uniq_var_445 = function (i) {var _uniq_var_104 = generate(i, env, ctx, def);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_445.__lix_func__ = true;return _uniq_var_445;})());
_uniq_var_105;
var _uniq_var_106 = (function () {var _uniq_var_448 = function (_uniq_var_446, _uniq_var_447) {
if (typeof _uniq_var_446.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_446.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_446.join.apply(_uniq_var_446, arguments);
} else if (_uniq_var_446.join !== undefined) {
if (_uniq_var_447 === undefined) {
return _uniq_var_446.join;
}
_uniq_var_446.join = _uniq_var_447;
}return _uniq_var_446;
};_uniq_var_448.__lix_func__ = true;return _uniq_var_448;})()(_uniq_var_105, ', ');
_uniq_var_106;
var arrayBody = _uniq_var_106;
arrayBody;
arrayBody;
var _uniq_var_107 = join(['[', arrayBody, ']']);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_449.__lix_func__ = true;return _uniq_var_449;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_450 = function (expr, env, ctx) {var _uniq_var_108 = call(getUniqVarName);
_uniq_var_108;
var localVarName = _uniq_var_108;
localVarName;
localVarName;
var _uniq_var_109 = call(getUniqVarName);
_uniq_var_109;
var localValueName = _uniq_var_109;
localValueName;
localValueName;
var _uniq_var_110 = generateField(expr[0], env, ctx0);
_uniq_var_110;
var methodName = _uniq_var_110;
methodName;
methodName;
var _uniq_var_111 = __add__(localVarName, methodName);
_uniq_var_111;
var method = _uniq_var_111;
method;
method;
var _uniq_var_112 = call(getUniqVarName);
_uniq_var_112;
var tmpVar = _uniq_var_112;
tmpVar;
tmpVar;
var _uniq_var_113 = join(["(function (", localVarName, ", ", localValueName, ") {\n", "if (", localVarName, " == undefined || ", localVarName, " == null ) {\n", "return function () {\n", "return ", localVarName, ";\n", "}\n", "}\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else {\n", "if (arguments.length > 1) {\n", "return function () {\n", method, " = ", localValueName, ";\n", "return ", localVarName, ";\n", "}\n", "}\n", "return function () {\n", "return ", method, ';\n', "}\n", "}", "})"]);
_uniq_var_113;
return _uniq_var_113;
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_451 = function (expr, env, ctx, def) {var _uniq_var_114 = generate(expr[0], env, ctx, def);
_uniq_var_114;
var _uniq_var_115 = generate(expr[2], env, ctx, def);
_uniq_var_115;
var _uniq_var_116 = ctx(_uniq_var_115, true);
_uniq_var_116;
var _uniq_var_117 = join(['while (', _uniq_var_114, ') {\n', _uniq_var_116, "\n}"]);
_uniq_var_117;
return _uniq_var_117;
};_uniq_var_451.__lix_func__ = true;return _uniq_var_451;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_452 = function (expr, env, ctx) {return 'break';
};_uniq_var_452.__lix_func__ = true;return _uniq_var_452;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_453 = function (expr, env, ctx, def) {return "";
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_454 = function (expr, env, ctx, def) {var _uniq_var_118 = getVarName(expr[0]);
_uniq_var_118;
var varname = _uniq_var_118;
varname;
varname;
var _uniq_var_119 = def.defineVar(varname);
_uniq_var_119;
_uniq_var_119;
var _uniq_var_120 = generate(expr[2], env, ctx, def);
_uniq_var_120;
var _uniq_var_121 = join([varname, ' = ', _uniq_var_120]);
_uniq_var_121;
var ret = _uniq_var_121;
ret;
ret;
(env[varname] = true);
return ret;
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_455 = function (expr, env, ctx, def) {var _uniq_var_122 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_122;
return _uniq_var_122;
};_uniq_var_455.__lix_func__ = true;return _uniq_var_455;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_459 = function (expr, env, ctx, def) {var _uniq_var_123 = true;
_uniq_var_123;
var _uniq_var_124 = null;
_uniq_var_124;
var _uniq_var_132 = __eq__(expr[0][1], '{atomic}');
_uniq_var_132;
if ((_uniq_var_123 && _uniq_var_132)) {
(_uniq_var_123 = false);
var _uniq_var_125 = getVarName(expr[0]);
_uniq_var_125;
var varname = _uniq_var_125;
varname;
varname;
var _uniq_var_126 = true;
_uniq_var_126;
var _uniq_var_127 = null;
_uniq_var_127;
var _uniq_var_129 = __eq__(env[varname], undefined);
_uniq_var_129;
var _uniq_var_130 = _uniq_var_129;
_uniq_var_130;
if (_uniq_var_130) {
var _uniq_var_131 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_131;
(_uniq_var_130 = _uniq_var_131);

};
if ((_uniq_var_126 && _uniq_var_130)) {
(_uniq_var_126 = false);
var _uniq_var_128 = generate([expr[0], '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_128;
(_uniq_var_127 = _uniq_var_128);

};
(_uniq_var_124 = _uniq_var_127);

};
if (_uniq_var_123) {
var _uniq_var_133 = generate(expr[0], env, ctx, def);
_uniq_var_133;
var varname = _uniq_var_133;
varname;
(_uniq_var_124 = varname);

};
_uniq_var_124;
var _uniq_var_134 = (function () {var _uniq_var_458 = function (_uniq_var_456, _uniq_var_457) {
if (typeof _uniq_var_456.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_456.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_456.join.apply(_uniq_var_456, arguments);
} else if (_uniq_var_456.join !== undefined) {
if (_uniq_var_457 === undefined) {
return _uniq_var_456.join;
}
_uniq_var_456.join = _uniq_var_457;
}return _uniq_var_456;
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_459.__lix_func__ = true;return _uniq_var_459;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_460 = function (expr, env, ctx, def) {var _uniq_var_135 = getVarName(expr[0]);
_uniq_var_135;
var varname = _uniq_var_135;
varname;
varname;
var ret = [];
ret;
ret;
var _uniq_var_136 = true;
_uniq_var_136;
var _uniq_var_137 = null;
_uniq_var_137;
var _uniq_var_139 = __eq__(env[varname], undefined);
_uniq_var_139;
var _uniq_var_140 = _uniq_var_139;
_uniq_var_140;
if (_uniq_var_140) {
var _uniq_var_141 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_141;
(_uniq_var_140 = _uniq_var_141);

};
if ((_uniq_var_136 && _uniq_var_140)) {
(_uniq_var_136 = false);
var _uniq_var_138 = generateDef(expr, env, ctx, def);
_uniq_var_138;
(_uniq_var_137 = (ret = _uniq_var_138));

};
if (_uniq_var_136) {
var _uniq_var_142 = generate(expr[0], env, ctx0, def);
_uniq_var_142;
var varname = _uniq_var_142;
varname;
varname;
var _uniq_var_143 = generate(expr[2], env, ctx, def);
_uniq_var_143;
var value = _uniq_var_143;
value;
value;
var _uniq_var_144 = join([varname, " = ", value]);
_uniq_var_144;
(_uniq_var_137 = (ret = _uniq_var_144));

};
_uniq_var_137;
return ret;
};_uniq_var_460.__lix_func__ = true;return _uniq_var_460;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_467 = function (expr, env, ctx, def) {var _uniq_var_145 = true;
_uniq_var_145;
var _uniq_var_146 = null;
_uniq_var_146;
var _uniq_var_147 = __eq__(expr[3], undefined);
_uniq_var_147;
if ((_uniq_var_145 && _uniq_var_147)) {
(_uniq_var_145 = false);
(_uniq_var_146 = (expr[3] = []));

};
_uniq_var_146;
var _uniq_var_148 = env_new(env);
_uniq_var_148;
var funcEnv = _uniq_var_148;
funcEnv;
funcEnv;
var _uniq_var_149 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_149;
var args = _uniq_var_149;
args;
args;
var _uniq_var_150 = call(getUniqVarName);
_uniq_var_150;
var tmpVar = _uniq_var_150;
tmpVar;
tmpVar;
var _uniq_var_151 = call(GenerateDefNew);
_uniq_var_151;
var def = _uniq_var_151;
def;
def;
var _uniq_var_152 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_152;
var body = _uniq_var_152;
body;
body;
var _uniq_var_153 = transformVarName('arguments');
_uniq_var_153;
var _uniq_var_154 = (function () {var _uniq_var_463 = function (_uniq_var_461, _uniq_var_462) {
if (typeof _uniq_var_461.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_461.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_461.join.apply(_uniq_var_461, arguments);
} else if (_uniq_var_461.join !== undefined) {
if (_uniq_var_462 === undefined) {
return _uniq_var_461.join;
}
_uniq_var_461.join = _uniq_var_462;
}return _uniq_var_461;
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})()(expr[3], ";\n");
_uniq_var_154;
var _uniq_var_155 = call(def.defineVar);
_uniq_var_155;
var _uniq_var_156 = call(def.appendExpr);
_uniq_var_156;
var _uniq_var_157 = (function () {var _uniq_var_466 = function (_uniq_var_464, _uniq_var_465) {
if (typeof _uniq_var_464.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_464.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_464.join.apply(_uniq_var_464, arguments);
} else if (_uniq_var_464.join !== undefined) {
if (_uniq_var_465 === undefined) {
return _uniq_var_464.join;
}
_uniq_var_464.join = _uniq_var_465;
}return _uniq_var_464;
};_uniq_var_466.__lix_func__ = true;return _uniq_var_466;})()(['(function (', args, ') {\n', 'var ', _uniq_var_153, ' = arguments;\n', _uniq_var_154, ";\n", _uniq_var_155, ";\n", _uniq_var_156, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_157;
return _uniq_var_157;
};_uniq_var_467.__lix_func__ = true;return _uniq_var_467;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_468 = function (expr, env, ctx, def) {(expr[1] = ":=");
var _uniq_var_158 = generate(expr, env, ctx, def);
_uniq_var_158;
return _uniq_var_158;
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_470 = function (expr, env, ctx, def) {var _uniq_var_159 = generate(expr[1], env, ctx0, def);
_uniq_var_159;
var func = _uniq_var_159;
func;
func;
var _uniq_var_160 = generate(expr[0], env, ctx0, def);
_uniq_var_160;
var args = _uniq_var_160;
args;
args;
var _uniq_var_166 = foreach(expr, (function () {var _uniq_var_469 = function (item, index) {var _uniq_var_161 = true;
_uniq_var_161;
var _uniq_var_162 = null;
_uniq_var_162;
var _uniq_var_165 = __gt__(index, 1);
_uniq_var_165;
if ((_uniq_var_161 && _uniq_var_165)) {
(_uniq_var_161 = false);
var _uniq_var_163 = generate(item, env, ctx0, def);
_uniq_var_163;
var _uniq_var_164 = join([args, ', ', _uniq_var_163]);
_uniq_var_164;
(_uniq_var_162 = (args = _uniq_var_164));

};
return _uniq_var_162;
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})());
_uniq_var_166;
_uniq_var_166;
var _uniq_var_167 = join([func, '(', args, ')']);
_uniq_var_167;
var _uniq_var_168 = ctx(_uniq_var_167);
_uniq_var_168;
return _uniq_var_168;
};_uniq_var_470.__lix_func__ = true;return _uniq_var_470;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_492 = function () {var vars = {

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
var destructed = null;
destructed;
destructed;
return {
defineDestructed: (function () {var _uniq_var_471 = function (d) {return (destructed = d);
};_uniq_var_471.__lix_func__ = true;return _uniq_var_471;})(),
desctructedVars: (function () {var _uniq_var_475 = function () {var _uniq_var_169 = (function () {var _uniq_var_474 = function (_uniq_var_472, _uniq_var_473) {
if (typeof _uniq_var_472.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_472.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_472.join.apply(_uniq_var_472, arguments);
} else if (_uniq_var_472.join !== undefined) {
if (_uniq_var_473 === undefined) {
return _uniq_var_472.join;
}
_uniq_var_472.join = _uniq_var_473;
}return _uniq_var_472;
};_uniq_var_474.__lix_func__ = true;return _uniq_var_474;})()(destructed, ";\n");
_uniq_var_169;
return _uniq_var_169;
};_uniq_var_475.__lix_func__ = true;return _uniq_var_475;})(),
defineFn: (function () {var _uniq_var_479 = function (name, func, condition) {var _uniq_var_170 = true;
_uniq_var_170;
var _uniq_var_171 = null;
_uniq_var_171;
var _uniq_var_172 = __eq__(fns[name], undefined);
_uniq_var_172;
if ((_uniq_var_170 && _uniq_var_172)) {
(_uniq_var_170 = false);
(_uniq_var_171 = (fns[name] = []));

};
_uniq_var_171;
var _uniq_var_173 = (function () {var _uniq_var_478 = function (_uniq_var_476, _uniq_var_477) {
if (typeof _uniq_var_476.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_476.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_476.push.apply(_uniq_var_476, arguments);
} else if (_uniq_var_476.push !== undefined) {
if (_uniq_var_477 === undefined) {
return _uniq_var_476.push;
}
_uniq_var_476.push = _uniq_var_477;
}return _uniq_var_476;
};_uniq_var_478.__lix_func__ = true;return _uniq_var_478;})()(fns[name], {
func: func,
condition: condition
});
_uniq_var_173;
return _uniq_var_173;
};_uniq_var_479.__lix_func__ = true;return _uniq_var_479;})(),
defineVar: (function () {var _uniq_var_484 = function (v) {var _uniq_var_174 = true;
_uniq_var_174;
var _uniq_var_175 = null;
_uniq_var_175;
if ((_uniq_var_174 && v)) {
(_uniq_var_174 = false);
(_uniq_var_175 = (vars[v] = v));

};
if (_uniq_var_174) {
var _uniq_var_176 = map(vars, (function () {var _uniq_var_480 = function (i) {return i;
};_uniq_var_480.__lix_func__ = true;return _uniq_var_480;})());
_uniq_var_176;
var vecs = _uniq_var_176;
vecs;
vecs;
var _uniq_var_177 = true;
_uniq_var_177;
var _uniq_var_178 = null;
_uniq_var_178;
var _uniq_var_181 = __gt__(vecs.length, 0);
_uniq_var_181;
if ((_uniq_var_177 && _uniq_var_181)) {
(_uniq_var_177 = false);
var _uniq_var_179 = (function () {var _uniq_var_483 = function (_uniq_var_481, _uniq_var_482) {
if (typeof _uniq_var_481.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_481.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_481.join.apply(_uniq_var_481, arguments);
} else if (_uniq_var_481.join !== undefined) {
if (_uniq_var_482 === undefined) {
return _uniq_var_481.join;
}
_uniq_var_481.join = _uniq_var_482;
}return _uniq_var_481;
};_uniq_var_483.__lix_func__ = true;return _uniq_var_483;})()(vecs, ', ');
_uniq_var_179;
var _uniq_var_180 = __add__('var ', _uniq_var_179);
_uniq_var_180;
(_uniq_var_178 = _uniq_var_180);

};
if (_uniq_var_177) {
(_uniq_var_178 = '');

};
(_uniq_var_175 = _uniq_var_178);

};
return _uniq_var_175;
};_uniq_var_484.__lix_func__ = true;return _uniq_var_484;})(),
appendExpr: (function () {var _uniq_var_491 = function (v) {var _uniq_var_182 = true;
_uniq_var_182;
var _uniq_var_183 = null;
_uniq_var_183;
if ((_uniq_var_182 && v)) {
(_uniq_var_182 = false);
var _uniq_var_184 = (function () {var _uniq_var_487 = function (_uniq_var_485, _uniq_var_486) {
if (typeof _uniq_var_485.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_485.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_485.push.apply(_uniq_var_485, arguments);
} else if (_uniq_var_485.push !== undefined) {
if (_uniq_var_486 === undefined) {
return _uniq_var_485.push;
}
_uniq_var_485.push = _uniq_var_486;
}return _uniq_var_485;
};_uniq_var_487.__lix_func__ = true;return _uniq_var_487;})()(funcs, v);
_uniq_var_184;
(_uniq_var_183 = _uniq_var_184);

};
if (_uniq_var_182) {
var _uniq_var_185 = (function () {var _uniq_var_490 = function (_uniq_var_488, _uniq_var_489) {
if (typeof _uniq_var_488.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_488.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_488.join.apply(_uniq_var_488, arguments);
} else if (_uniq_var_488.join !== undefined) {
if (_uniq_var_489 === undefined) {
return _uniq_var_488.join;
}
_uniq_var_488.join = _uniq_var_489;
}return _uniq_var_488;
};_uniq_var_490.__lix_func__ = true;return _uniq_var_490;})()(funcs, ';\n');
_uniq_var_185;
(_uniq_var_183 = _uniq_var_185);

};
return _uniq_var_183;
};_uniq_var_491.__lix_func__ = true;return _uniq_var_491;})()
};
};_uniq_var_492.__lix_func__ = true;return _uniq_var_492;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_493 = function (expr, env, ctx, def) {var _uniq_var_186 = call(GenerateDefNew);
_uniq_var_186;
var def = _uniq_var_186;
def;
def;
var _uniq_var_187 = generate(expr[0], env, ctx, def);
_uniq_var_187;
var body = _uniq_var_187;
body;
body;
var _uniq_var_188 = join(['module.exports = ', body, '\n']);
_uniq_var_188;
var body = _uniq_var_188;
body;
body;
var _uniq_var_189 = call(def.defineVar);
_uniq_var_189;
var _uniq_var_190 = call(def.appendExpr);
_uniq_var_190;
var _uniq_var_191 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_189, ";\n", _uniq_var_190, ";\n", body]);
_uniq_var_191;
return _uniq_var_191;
};_uniq_var_493.__lix_func__ = true;return _uniq_var_493;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_494 = function (expr, env, ctx, def) {var _uniq_var_192 = generate(expr[0], env, ctx, def);
_uniq_var_192;
return _uniq_var_192;
};_uniq_var_494.__lix_func__ = true;return _uniq_var_494;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_495 = function (expr, env, ctx, def) {var _uniq_var_193 = join(['"', expr[0], '"']);
_uniq_var_193;
return _uniq_var_193;
};_uniq_var_495.__lix_func__ = true;return _uniq_var_495;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_496 = function (expr, env, ctx, def) {var _uniq_var_194 = generate(expr[0], env, ctx, def);
_uniq_var_194;
var _uniq_var_195 = join(['("', expr[2], '" + ', _uniq_var_194, ')']);
_uniq_var_195;
return _uniq_var_195;
};_uniq_var_496.__lix_func__ = true;return _uniq_var_496;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_501 = function (expr, env, ctx, def) {var _uniq_var_197 = map(expr[0], (function () {var _uniq_var_497 = function (i) {var _uniq_var_196 = generate(i, env, ctx, def);
_uniq_var_196;
return _uniq_var_196;
};_uniq_var_497.__lix_func__ = true;return _uniq_var_497;})());
_uniq_var_197;
var _uniq_var_198 = (function () {var _uniq_var_500 = function (_uniq_var_498, _uniq_var_499) {
if (typeof _uniq_var_498.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_498.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_498.join.apply(_uniq_var_498, arguments);
} else if (_uniq_var_498.join !== undefined) {
if (_uniq_var_499 === undefined) {
return _uniq_var_498.join;
}
_uniq_var_498.join = _uniq_var_499;
}return _uniq_var_498;
};_uniq_var_500.__lix_func__ = true;return _uniq_var_500;})()(_uniq_var_197, ',');
_uniq_var_198;
var path = _uniq_var_198;
path;
path;
var _uniq_var_199 = join(['[', path, '].join("/")']);
_uniq_var_199;
return _uniq_var_199;
};_uniq_var_501.__lix_func__ = true;return _uniq_var_501;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_505 = function (expr, env, ctx, def) {var _uniq_var_200 = (function () {var _uniq_var_504 = function (_uniq_var_502, _uniq_var_503) {
if (typeof _uniq_var_502.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_502.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_502.join.apply(_uniq_var_502, arguments);
} else if (_uniq_var_502.join !== undefined) {
if (_uniq_var_503 === undefined) {
return _uniq_var_502.join;
}
_uniq_var_502.join = _uniq_var_503;
}return _uniq_var_502;
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})()(['"', expr[0], '"'], '');
_uniq_var_200;
var name = [_uniq_var_200, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})();
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
var generateOp = (function () {var _uniq_var_506 = function (hint) {var _uniq_var_201 = true;
_uniq_var_201;
var _uniq_var_202 = null;
_uniq_var_202;
if ((_uniq_var_201 && generateOpTable[hint])) {
(_uniq_var_201 = false);
(_uniq_var_202 = generateOpTable[hint]);

};
if (_uniq_var_201) {
(_uniq_var_202 = generateExpr);

};
return _uniq_var_202;
};_uniq_var_506.__lix_func__ = true;return _uniq_var_506;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_507 = function (expr, env, ctx, def) {var _uniq_var_203 = generateOp(expr[1]);
_uniq_var_203;
var _uniq_var_204 = _uniq_var_203(expr, env, ctx, def);
_uniq_var_204;
return _uniq_var_204;
};_uniq_var_507.__lix_func__ = true;return _uniq_var_507;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_509 = function (env) {var _uniq_var_205 = env;
_uniq_var_205;
if (not(_uniq_var_205)) {
(_uniq_var_205 = env0);

};
(env = _uniq_var_205);
var Env = (function () {var _uniq_var_508 = function () {;
};_uniq_var_508.__lix_func__ = true;return _uniq_var_508;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_206 = _instance_(Env);
_uniq_var_206;
return _uniq_var_206;
};_uniq_var_509.__lix_func__ = true;return _uniq_var_509;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_511 = function (expr, define) {var _uniq_var_208 = map(expr, (function () {var _uniq_var_510 = function (item) {var _uniq_var_207 = flatten(item, define);
_uniq_var_207;
return _uniq_var_207;
};_uniq_var_510.__lix_func__ = true;return _uniq_var_510;})());
_uniq_var_208;
var _uniq_var_209 = define(_uniq_var_208);
_uniq_var_209;
return _uniq_var_209;
};_uniq_var_511.__lix_func__ = true;return _uniq_var_511;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_512 = function (expr, define) {return expr;
};_uniq_var_512.__lix_func__ = true;return _uniq_var_512;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_517 = function (expr, define) {var _uniq_var_210 = call(statementFlattenGenerator);
_uniq_var_210;
var whileDefine = _uniq_var_210;
whileDefine;
whileDefine;
var _uniq_var_211 = flatten(expr[0], whileDefine);
_uniq_var_211;
(expr[0] = _uniq_var_211);
var _uniq_var_212 = flatten(expr[2], define0);
_uniq_var_212;
(expr[2] = _uniq_var_212);
var _uniq_var_213 = call(whileDefine);
_uniq_var_213;
var _uniq_var_214 = (function () {var _uniq_var_515 = function (_uniq_var_513, _uniq_var_514) {
if (typeof _uniq_var_513.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_513.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_513.concat.apply(_uniq_var_513, arguments);
} else if (_uniq_var_513.concat !== undefined) {
if (_uniq_var_514 === undefined) {
return _uniq_var_513.concat;
}
_uniq_var_513.concat = _uniq_var_514;
}return _uniq_var_513;
};_uniq_var_515.__lix_func__ = true;return _uniq_var_515;})()(expr[2][0], _uniq_var_213);
_uniq_var_214;
(expr[2][0] = _uniq_var_214);
var _uniq_var_215 = call(whileDefine);
_uniq_var_215;
var _uniq_var_217 = foreach(_uniq_var_215, (function () {var _uniq_var_516 = function (i) {var _uniq_var_216 = define(i, true);
_uniq_var_216;
return _uniq_var_216;
};_uniq_var_516.__lix_func__ = true;return _uniq_var_516;})());
_uniq_var_217;
_uniq_var_217;
var _uniq_var_218 = define(expr, true);
_uniq_var_218;
_uniq_var_218;
return ['', '{empty}'];
};_uniq_var_517.__lix_func__ = true;return _uniq_var_517;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_522 = function (expr, define) {var _uniq_var_219 = flatten(expr[0], define);
_uniq_var_219;
var ret = _uniq_var_219;
ret;
ret;
var _uniq_var_220 = true;
_uniq_var_220;
var _uniq_var_221 = null;
_uniq_var_221;
var _uniq_var_223 = __ne__(ret[2], 'var');
_uniq_var_223;
if ((_uniq_var_220 && _uniq_var_223)) {
(_uniq_var_220 = false);
var _uniq_var_222 = define(ret);
_uniq_var_222;
var ret = _uniq_var_222;
ret;
(_uniq_var_221 = ret);

};
_uniq_var_221;
var getAndOpSeq = (function () {var _uniq_var_521 = function () {var _uniq_var_224 = call(statementFlattenGenerator);
_uniq_var_224;
var AndDefine = _uniq_var_224;
AndDefine;
AndDefine;
var _uniq_var_225 = flatten(expr[2], AndDefine);
_uniq_var_225;
var seqRet = _uniq_var_225;
seqRet;
seqRet;
var _uniq_var_226 = call(AndDefine);
_uniq_var_226;
var seq = _uniq_var_226;
seq;
seq;
var _uniq_var_227 = (function () {var _uniq_var_520 = function (_uniq_var_518, _uniq_var_519) {
if (typeof _uniq_var_518.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_518.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_518.push.apply(_uniq_var_518, arguments);
} else if (_uniq_var_518.push !== undefined) {
if (_uniq_var_519 === undefined) {
return _uniq_var_518.push;
}
_uniq_var_518.push = _uniq_var_519;
}return _uniq_var_518;
};_uniq_var_520.__lix_func__ = true;return _uniq_var_520;})()(seq, [ret, '=', seqRet]);
_uniq_var_227;
_uniq_var_227;
return [seq, '{seq}'];
};_uniq_var_521.__lix_func__ = true;return _uniq_var_521;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_228 = call(getAndOpSeq);
_uniq_var_228;
var _uniq_var_229 = define([[[ret, [[], '{empty}']], [_uniq_var_228, 'else']], 'if'], true);
_uniq_var_229;
_uniq_var_229;
return ret;
};_uniq_var_522.__lix_func__ = true;return _uniq_var_522;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_527 = function (expr, define) {var _uniq_var_230 = flatten(expr[0], define);
_uniq_var_230;
var ret = _uniq_var_230;
ret;
ret;
var _uniq_var_231 = true;
_uniq_var_231;
var _uniq_var_232 = null;
_uniq_var_232;
var _uniq_var_234 = __ne__(ret[2], 'var');
_uniq_var_234;
if ((_uniq_var_231 && _uniq_var_234)) {
(_uniq_var_231 = false);
var _uniq_var_233 = define(ret);
_uniq_var_233;
var ret = _uniq_var_233;
ret;
(_uniq_var_232 = ret);

};
_uniq_var_232;
var getAndOpSeq = (function () {var _uniq_var_526 = function () {var _uniq_var_235 = call(statementFlattenGenerator);
_uniq_var_235;
var AndDefine = _uniq_var_235;
AndDefine;
AndDefine;
var _uniq_var_236 = flatten(expr[2], AndDefine);
_uniq_var_236;
var seqRet = _uniq_var_236;
seqRet;
seqRet;
var _uniq_var_237 = call(AndDefine);
_uniq_var_237;
var seq = _uniq_var_237;
seq;
seq;
var _uniq_var_238 = (function () {var _uniq_var_525 = function (_uniq_var_523, _uniq_var_524) {
if (typeof _uniq_var_523.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_523.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_523.push.apply(_uniq_var_523, arguments);
} else if (_uniq_var_523.push !== undefined) {
if (_uniq_var_524 === undefined) {
return _uniq_var_523.push;
}
_uniq_var_523.push = _uniq_var_524;
}return _uniq_var_523;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})()(seq, [ret, '=', seqRet]);
_uniq_var_238;
_uniq_var_238;
return [seq, '{seq}'];
};_uniq_var_526.__lix_func__ = true;return _uniq_var_526;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_239 = call(getAndOpSeq);
_uniq_var_239;
var _uniq_var_240 = define([[[ret, _uniq_var_239]], 'if'], true);
_uniq_var_240;
_uniq_var_240;
return ret;
};_uniq_var_527.__lix_func__ = true;return _uniq_var_527;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_532 = function (expr, define, tmpVar, ctx) {var _uniq_var_253 = foreach(expr[0], (function () {var _uniq_var_531 = function (i) {var _uniq_var_241 = true;
_uniq_var_241;
var _uniq_var_242 = null;
_uniq_var_242;
var _uniq_var_245 = __eq__(i[1], 'else');
_uniq_var_245;
if ((_uniq_var_241 && _uniq_var_245)) {
(_uniq_var_241 = false);
var _uniq_var_243 = flatten(i[0], define0, ctx);
_uniq_var_243;
var elseSeq = _uniq_var_243;
elseSeq;
elseSeq;
var _uniq_var_244 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_244;
(_uniq_var_242 = _uniq_var_244);

};
var _uniq_var_248 = __eq__(i[1], 'if');
_uniq_var_248;
if ((_uniq_var_241 && _uniq_var_248)) {
(_uniq_var_241 = false);
var _uniq_var_246 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_246;
var _uniq_var_247 = define(_uniq_var_246);
_uniq_var_247;
(_uniq_var_242 = _uniq_var_247);

};
if (_uniq_var_241) {
var _uniq_var_249 = flatten(i[1], define0, ctx);
_uniq_var_249;
var ifSeq = _uniq_var_249;
ifSeq;
ifSeq;
var _uniq_var_250 = (function () {var _uniq_var_530 = function (_uniq_var_528, _uniq_var_529) {
if (typeof _uniq_var_528.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_528.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_528.unshift.apply(_uniq_var_528, arguments);
} else if (_uniq_var_528.unshift !== undefined) {
if (_uniq_var_529 === undefined) {
return _uniq_var_528.unshift;
}
_uniq_var_528.unshift = _uniq_var_529;
}return _uniq_var_528;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_250;
_uniq_var_250;
var _uniq_var_251 = flatten(i[0], define);
_uniq_var_251;
var cond = _uniq_var_251;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_252 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_252;
(_uniq_var_242 = _uniq_var_252);

};
return _uniq_var_242;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})());
_uniq_var_253;
return _uniq_var_253;
};_uniq_var_532.__lix_func__ = true;return _uniq_var_532;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_533 = function (expr, define) {var _uniq_var_254 = define(['true', '{atomic}'], 'new');
_uniq_var_254;
var tmpVar = _uniq_var_254;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_255 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_255;
_uniq_var_255;
return retVar;
};_uniq_var_533.__lix_func__ = true;return _uniq_var_533;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_534 = function (expr, define) {var _uniq_var_256 = flatten(expr[2], define);
_uniq_var_256;
(expr[2] = _uniq_var_256);
return expr;
};_uniq_var_534.__lix_func__ = true;return _uniq_var_534;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_538 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_257 = true;
_uniq_var_257;
var _uniq_var_258 = null;
_uniq_var_258;
var _uniq_var_262 = __gt__(expr.length, 3);
_uniq_var_262;
if ((_uniq_var_257 && _uniq_var_262)) {
(_uniq_var_257 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_259 = __lt__(i, expr.length);
_uniq_var_259;
while (_uniq_var_259) {
var _uniq_var_260 = (function () {var _uniq_var_537 = function (_uniq_var_535, _uniq_var_536) {
if (typeof _uniq_var_535.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_535.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_535.push.apply(_uniq_var_535, arguments);
} else if (_uniq_var_535.push !== undefined) {
if (_uniq_var_536 === undefined) {
return _uniq_var_535.push;
}
_uniq_var_535.push = _uniq_var_536;
}return _uniq_var_535;
};_uniq_var_537.__lix_func__ = true;return _uniq_var_537;})()(partialExpr, expr[i]);
_uniq_var_260;
_uniq_var_260;
var _uniq_var_261 = __add__(i, 1);
_uniq_var_261;
(i = _uniq_var_261);
var _uniq_var_259 = __lt__(i, expr.length);
_uniq_var_259;
}
null;
(_uniq_var_258 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_258;
var _uniq_var_263 = flattenExpr(expr, define);
_uniq_var_263;
return _uniq_var_263;
};_uniq_var_538.__lix_func__ = true;return _uniq_var_538;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_539 = function (expr, define) {var _uniq_var_264 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_264;
return _uniq_var_264;
};_uniq_var_539.__lix_func__ = true;return _uniq_var_539;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_540 = function (expr, define) {var _uniq_var_265 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_265;
return _uniq_var_265;
};_uniq_var_540.__lix_func__ = true;return _uniq_var_540;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_541 = function (expr, define) {var _uniq_var_266 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_266;
return _uniq_var_266;
};_uniq_var_541.__lix_func__ = true;return _uniq_var_541;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_542 = function (expr, define) {var _uniq_var_267 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_267;
return _uniq_var_267;
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_543 = function (expr, define) {var _uniq_var_268 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_544 = function (expr, define) {var _uniq_var_269 = flatten(expr[0], define);
_uniq_var_269;
(expr[0] = _uniq_var_269);
return expr;
};_uniq_var_544.__lix_func__ = true;return _uniq_var_544;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_545 = function (expr, define) {return expr;
};_uniq_var_545.__lix_func__ = true;return _uniq_var_545;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_547 = function (expr, define) {var _uniq_var_271 = map(expr[0], (function () {var _uniq_var_546 = function (i) {var _uniq_var_270 = flatten(i, define);
_uniq_var_270;
return _uniq_var_270;
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})());
_uniq_var_271;
(expr[0] = _uniq_var_271);
return expr;
};_uniq_var_547.__lix_func__ = true;return _uniq_var_547;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_548 = function (expr, define) {return expr;
};_uniq_var_548.__lix_func__ = true;return _uniq_var_548;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_549 = function (expr, define) {var _uniq_var_272 = true;
_uniq_var_272;
var _uniq_var_273 = null;
_uniq_var_273;
var _uniq_var_275 = __eq__(expr[1], '{index}');
_uniq_var_275;
if ((_uniq_var_272 && _uniq_var_275)) {
(_uniq_var_272 = false);
var _uniq_var_274 = flatten(expr[0], define);
_uniq_var_274;
(_uniq_var_273 = (expr[0] = _uniq_var_274));

};
_uniq_var_273;
return expr;
};_uniq_var_549.__lix_func__ = true;return _uniq_var_549;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_554 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_553 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_276 = true;
_uniq_var_276;
var _uniq_var_277 = null;
_uniq_var_277;
var _uniq_var_283 = __eq__(arguments.length, 2);
_uniq_var_283;
if ((_uniq_var_276 && _uniq_var_283)) {
(_uniq_var_276 = false);
var _uniq_var_278 = true;
_uniq_var_278;
var _uniq_var_279 = null;
_uniq_var_279;
var _uniq_var_282 = __eq__(defined[name], undefined);
_uniq_var_282;
if ((_uniq_var_278 && _uniq_var_282)) {
(_uniq_var_278 = false);
var _uniq_var_280 = call(getUniqVarName);
_uniq_var_280;
var varName = _uniq_var_280;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_281 = (function () {var _uniq_var_552 = function (_uniq_var_550, _uniq_var_551) {
if (typeof _uniq_var_550.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_550.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_550.push.apply(_uniq_var_550, arguments);
} else if (_uniq_var_550.push !== undefined) {
if (_uniq_var_551 === undefined) {
return _uniq_var_550.push;
}
_uniq_var_550.push = _uniq_var_551;
}return _uniq_var_550;
};_uniq_var_552.__lix_func__ = true;return _uniq_var_552;})()(statements, [lixVar, ':=', value]);
_uniq_var_281;
_uniq_var_281;
(_uniq_var_279 = (defined[name] = lixVar));

};
_uniq_var_279;
(_uniq_var_277 = (ret = defined[name]));

};
if (_uniq_var_276) {
(_uniq_var_277 = (ret = statements));

};
_uniq_var_277;
return ret;
};_uniq_var_553.__lix_func__ = true;return _uniq_var_553;})();
};_uniq_var_554.__lix_func__ = true;return _uniq_var_554;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_284 = call(NewGlobalDefine);
_uniq_var_284;
var globalDefine = _uniq_var_284;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_555 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_285 = true;
_uniq_var_285;
var _uniq_var_286 = null;
_uniq_var_286;
var _uniq_var_288 = __eq__(expr[0][3], '{global}');
_uniq_var_288;
if ((_uniq_var_285 && _uniq_var_288)) {
(_uniq_var_285 = false);
var _uniq_var_287 = globalDefine(expr[0][0], expr);
_uniq_var_287;
(_uniq_var_286 = (ret = _uniq_var_287));

};
if (_uniq_var_285) {
var _uniq_var_289 = flattenField(expr[0], define);
_uniq_var_289;
(expr[0] = _uniq_var_289);
(_uniq_var_286 = (ret = expr));

};
_uniq_var_286;
return ret;
};_uniq_var_555.__lix_func__ = true;return _uniq_var_555;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_556 = function (expr, define) {var _uniq_var_290 = flatten(expr[2], define);
_uniq_var_290;
(expr[2] = _uniq_var_290);
return expr;
};_uniq_var_556.__lix_func__ = true;return _uniq_var_556;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_558 = function (expr, define) {var _uniq_var_292 = map(expr[0], (function () {var _uniq_var_557 = function (i) {var _uniq_var_291 = flattenProperty(i, define);
_uniq_var_291;
return _uniq_var_291;
};_uniq_var_557.__lix_func__ = true;return _uniq_var_557;})());
_uniq_var_292;
(expr[0] = _uniq_var_292);
return expr;
};_uniq_var_558.__lix_func__ = true;return _uniq_var_558;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_560 = function (expr, define) {var _uniq_var_294 = map(expr[0], (function () {var _uniq_var_559 = function (i) {var _uniq_var_293 = flatten(i, define);
_uniq_var_293;
return _uniq_var_293;
};_uniq_var_559.__lix_func__ = true;return _uniq_var_559;})());
_uniq_var_294;
(expr[0] = _uniq_var_294);
return expr;
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_561 = function (expr, define) {var _uniq_var_295 = flatten(expr[2], define);
_uniq_var_295;
(expr[2] = _uniq_var_295);
return expr;
};_uniq_var_561.__lix_func__ = true;return _uniq_var_561;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_562 = function (expr, define) {var _uniq_var_296 = true;
_uniq_var_296;
var _uniq_var_297 = null;
_uniq_var_297;
var _uniq_var_300 = __eq__(expr[1], '{.}');
_uniq_var_300;
if ((_uniq_var_296 && _uniq_var_300)) {
(_uniq_var_296 = false);
var _uniq_var_298 = flattenFieldAccess(expr[0], define);
_uniq_var_298;
(expr[0] = _uniq_var_298);
var _uniq_var_299 = flattenField(expr[2], define);
_uniq_var_299;
(_uniq_var_297 = (expr[2] = _uniq_var_299));

};
if (_uniq_var_296) {
var _uniq_var_301 = flatten(expr, define);
_uniq_var_301;
(_uniq_var_297 = (expr = _uniq_var_301));

};
_uniq_var_297;
return expr;
};_uniq_var_562.__lix_func__ = true;return _uniq_var_562;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_563 = function (expr, define) {return expr;
};_uniq_var_563.__lix_func__ = true;return _uniq_var_563;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_564 = function (expr, define) {var _uniq_var_302 = flatten(expr[0], define);
_uniq_var_302;
return _uniq_var_302;
};_uniq_var_564.__lix_func__ = true;return _uniq_var_564;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_578 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_577 = function (statement, tmpVarName) {var _uniq_var_303 = true;
_uniq_var_303;
var _uniq_var_304 = null;
_uniq_var_304;
var _uniq_var_305 = __eq__(statement, undefined);
_uniq_var_305;
if ((_uniq_var_303 && _uniq_var_305)) {
(_uniq_var_303 = false);
(_uniq_var_304 = data);

};
var _uniq_var_307 = __eq__(tmpVarName, true);
_uniq_var_307;
if ((_uniq_var_303 && _uniq_var_307)) {
(_uniq_var_303 = false);
var _uniq_var_306 = (function () {var _uniq_var_567 = function (_uniq_var_565, _uniq_var_566) {
if (typeof _uniq_var_565.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_565.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_565.push.apply(_uniq_var_565, arguments);
} else if (_uniq_var_565.push !== undefined) {
if (_uniq_var_566 === undefined) {
return _uniq_var_565.push;
}
_uniq_var_565.push = _uniq_var_566;
}return _uniq_var_565;
};_uniq_var_567.__lix_func__ = true;return _uniq_var_567;})()(data, statement);
_uniq_var_306;
(_uniq_var_304 = _uniq_var_306);

};
var _uniq_var_311 = __eq__(tmpVarName, undefined);
_uniq_var_311;
if ((_uniq_var_303 && _uniq_var_311)) {
(_uniq_var_303 = false);
var _uniq_var_308 = call(getUniqVarName);
_uniq_var_308;
var varName = _uniq_var_308;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_309 = (function () {var _uniq_var_570 = function (_uniq_var_568, _uniq_var_569) {
if (typeof _uniq_var_568.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_568.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_568.push.apply(_uniq_var_568, arguments);
} else if (_uniq_var_568.push !== undefined) {
if (_uniq_var_569 === undefined) {
return _uniq_var_568.push;
}
_uniq_var_568.push = _uniq_var_569;
}return _uniq_var_568;
};_uniq_var_570.__lix_func__ = true;return _uniq_var_570;})()(data, statement);
_uniq_var_309;
_uniq_var_309;
var _uniq_var_310 = (function () {var _uniq_var_573 = function (_uniq_var_571, _uniq_var_572) {
if (typeof _uniq_var_571.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_571.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_571.push.apply(_uniq_var_571, arguments);
} else if (_uniq_var_571.push !== undefined) {
if (_uniq_var_572 === undefined) {
return _uniq_var_571.push;
}
_uniq_var_571.push = _uniq_var_572;
}return _uniq_var_571;
};_uniq_var_573.__lix_func__ = true;return _uniq_var_573;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_310;
_uniq_var_310;
(_uniq_var_304 = lixVar);

};
var _uniq_var_314 = __eq__(tmpVarName, 'new');
_uniq_var_314;
if ((_uniq_var_303 && _uniq_var_314)) {
(_uniq_var_303 = false);
var _uniq_var_312 = call(getUniqVarName);
_uniq_var_312;
var varName = _uniq_var_312;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_313 = (function () {var _uniq_var_576 = function (_uniq_var_574, _uniq_var_575) {
if (typeof _uniq_var_574.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_574.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_574.push.apply(_uniq_var_574, arguments);
} else if (_uniq_var_574.push !== undefined) {
if (_uniq_var_575 === undefined) {
return _uniq_var_574.push;
}
_uniq_var_574.push = _uniq_var_575;
}return _uniq_var_574;
};_uniq_var_576.__lix_func__ = true;return _uniq_var_576;})()(data, [lixVar, ':=', statement]);
_uniq_var_313;
_uniq_var_313;
(_uniq_var_304 = lixVar);

};
return _uniq_var_304;
};_uniq_var_577.__lix_func__ = true;return _uniq_var_577;})();
};_uniq_var_578.__lix_func__ = true;return _uniq_var_578;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_590 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_579 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_315 = true;
_uniq_var_315;
var _uniq_var_316 = null;
_uniq_var_316;
var _uniq_var_318 = seqCtx;
_uniq_var_318;
if (_uniq_var_318) {
var _uniq_var_319 = parseInt(index);
_uniq_var_319;
var _uniq_var_320 = __sub__(expr[0].length, 1);
_uniq_var_320;
var _uniq_var_321 = __eq__(_uniq_var_319, _uniq_var_320);
_uniq_var_321;
(_uniq_var_318 = _uniq_var_321);

};
if ((_uniq_var_315 && _uniq_var_318)) {
(_uniq_var_315 = false);
var _uniq_var_317 = seqCtx(stmt);
_uniq_var_317;
var ret = _uniq_var_317;
ret;
(_uniq_var_316 = ret);

};
_uniq_var_316;
return ret;
};_uniq_var_579.__lix_func__ = true;return _uniq_var_579;})();
ctx;
ctx;
var _uniq_var_348 = foreach(expr[0], (function () {var _uniq_var_589 = function (item, index) {var _uniq_var_322 = call(statementFlattenGenerator);
_uniq_var_322;
var exprDefine = _uniq_var_322;
exprDefine;
exprDefine;
var _uniq_var_323 = flatten(item, exprDefine);
_uniq_var_323;
var itemRet = _uniq_var_323;
itemRet;
itemRet;
var _uniq_var_324 = call(exprDefine);
_uniq_var_324;
var _uniq_var_325 = (function () {var _uniq_var_582 = function (_uniq_var_580, _uniq_var_581) {
if (typeof _uniq_var_580.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_580.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_580.concat.apply(_uniq_var_580, arguments);
} else if (_uniq_var_580.concat !== undefined) {
if (_uniq_var_581 === undefined) {
return _uniq_var_580.concat;
}
_uniq_var_580.concat = _uniq_var_581;
}return _uniq_var_580;
};_uniq_var_582.__lix_func__ = true;return _uniq_var_582;})()(ret, _uniq_var_324);
_uniq_var_325;
(ret = _uniq_var_325);
var _uniq_var_326 = ctx(itemRet, index);
_uniq_var_326;
var stmtRet = _uniq_var_326;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_583 = function (expr) {var _uniq_var_327 = __eq__(expr[1], '{atomic}');
_uniq_var_327;
var _uniq_var_328 = _uniq_var_327;
_uniq_var_328;
if (_uniq_var_328) {
var _uniq_var_329 = __ne__(expr[3], undefined);
_uniq_var_329;
(_uniq_var_328 = _uniq_var_329);

};
return _uniq_var_328;
};_uniq_var_583.__lix_func__ = true;return _uniq_var_583;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_584 = function (expr) {var _uniq_var_330 = __eq__(expr[1], '{atomic}');
_uniq_var_330;
var _uniq_var_331 = _uniq_var_330;
_uniq_var_331;
if (_uniq_var_331) {
var _uniq_var_332 = __eq__(expr[3], undefined);
_uniq_var_332;
(_uniq_var_331 = _uniq_var_332);

};
return _uniq_var_331;
};_uniq_var_584.__lix_func__ = true;return _uniq_var_584;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_585 = function (expr) {var _uniq_var_333 = isRealVar(expr);
_uniq_var_333;
var _uniq_var_334 = _uniq_var_333;
_uniq_var_334;
if (not(_uniq_var_334)) {
var _uniq_var_335 = __ne__(expr[1], 'if');
_uniq_var_335;
var _uniq_var_336 = _uniq_var_335;
_uniq_var_336;
if (_uniq_var_336) {
var _uniq_var_337 = __ne__(expr[1], 'while');
_uniq_var_337;
(_uniq_var_336 = _uniq_var_337);

};
(_uniq_var_334 = _uniq_var_336);

};
return _uniq_var_334;
};_uniq_var_585.__lix_func__ = true;return _uniq_var_585;})();
isRealExpr;
isRealExpr;
var _uniq_var_338 = true;
_uniq_var_338;
var _uniq_var_339 = null;
_uniq_var_339;
var _uniq_var_344 = __ne__(stmtRet[1], '{empty}');
_uniq_var_344;
var _uniq_var_345 = _uniq_var_344;
_uniq_var_345;
if (_uniq_var_345) {
var _uniq_var_346 = isTmpVar(stmtRet);
_uniq_var_346;
var _uniq_var_347 = not(_uniq_var_346);
_uniq_var_347;
(_uniq_var_345 = _uniq_var_347);

};
if ((_uniq_var_338 && _uniq_var_345)) {
(_uniq_var_338 = false);
var _uniq_var_340 = true;
_uniq_var_340;
var _uniq_var_341 = null;
_uniq_var_341;
var _uniq_var_342 = isRealExpr(stmtRet);
_uniq_var_342;
if ((_uniq_var_340 && _uniq_var_342)) {
(_uniq_var_340 = false);
(_uniq_var_341 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_341;
var _uniq_var_343 = (function () {var _uniq_var_588 = function (_uniq_var_586, _uniq_var_587) {
if (typeof _uniq_var_586.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_586.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_586.push.apply(_uniq_var_586, arguments);
} else if (_uniq_var_586.push !== undefined) {
if (_uniq_var_587 === undefined) {
return _uniq_var_586.push;
}
_uniq_var_586.push = _uniq_var_587;
}return _uniq_var_586;
};_uniq_var_588.__lix_func__ = true;return _uniq_var_588;})()(ret, stmtRet);
_uniq_var_343;
(_uniq_var_339 = _uniq_var_343);

};
return _uniq_var_339;
};_uniq_var_589.__lix_func__ = true;return _uniq_var_589;})());
_uniq_var_348;
_uniq_var_348;
(expr[0] = ret);
return expr;
};_uniq_var_590.__lix_func__ = true;return _uniq_var_590;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_597 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_349 = flatten(expr[0], define);
_uniq_var_349;
var ret = _uniq_var_349;
ret;
ret;
var _uniq_var_350 = call(globalDefine);
_uniq_var_350;
var _uniq_var_351 = (function () {var _uniq_var_593 = function (_uniq_var_591, _uniq_var_592) {
if (typeof _uniq_var_591.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_591.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_591.concat.apply(_uniq_var_591, arguments);
} else if (_uniq_var_591.concat !== undefined) {
if (_uniq_var_592 === undefined) {
return _uniq_var_591.concat;
}
_uniq_var_591.concat = _uniq_var_592;
}return _uniq_var_591;
};_uniq_var_593.__lix_func__ = true;return _uniq_var_593;})()(trapExpr, _uniq_var_350);
_uniq_var_351;
var _uniq_var_352 = (function () {var _uniq_var_596 = function (_uniq_var_594, _uniq_var_595) {
if (typeof _uniq_var_594.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_594.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_594.concat.apply(_uniq_var_594, arguments);
} else if (_uniq_var_594.concat !== undefined) {
if (_uniq_var_595 === undefined) {
return _uniq_var_594.concat;
}
_uniq_var_594.concat = _uniq_var_595;
}return _uniq_var_594;
};_uniq_var_596.__lix_func__ = true;return _uniq_var_596;})()(_uniq_var_351, ret[0]);
_uniq_var_352;
(ret[0] = _uniq_var_352);
return [ret, '{start}'];
};_uniq_var_597.__lix_func__ = true;return _uniq_var_597;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_601 = function (expr, define) {var _uniq_var_353 = true;
_uniq_var_353;
var _uniq_var_354 = null;
_uniq_var_354;
var _uniq_var_356 = __eq__(expr[2], '{var}');
_uniq_var_356;
if ((_uniq_var_353 && _uniq_var_356)) {
(_uniq_var_353 = false);
var _uniq_var_355 = (function () {var _uniq_var_600 = function (_uniq_var_598, _uniq_var_599) {
if (typeof _uniq_var_598.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_598.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_598.join.apply(_uniq_var_598, arguments);
} else if (_uniq_var_598.join !== undefined) {
if (_uniq_var_599 === undefined) {
return _uniq_var_598.join;
}
_uniq_var_598.join = _uniq_var_599;
}return _uniq_var_598;
};_uniq_var_600.__lix_func__ = true;return _uniq_var_600;})()(['"', expr[0], '"'], '');
_uniq_var_355;
var name = [_uniq_var_355, '{atomic}'];
name;
(_uniq_var_354 = name);

};
var _uniq_var_358 = __eq__(expr[2], '{index}');
_uniq_var_358;
if ((_uniq_var_353 && _uniq_var_358)) {
(_uniq_var_353 = false);
var _uniq_var_357 = flatten(expr[0], define);
_uniq_var_357;
var name = _uniq_var_357;
name;
(_uniq_var_354 = name);

};
_uniq_var_354;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_359 = define(moduleExpr);
_uniq_var_359;
return _uniq_var_359;
};_uniq_var_601.__lix_func__ = true;return _uniq_var_601;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_602 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_602.__lix_func__ = true;return _uniq_var_602;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_603 = function (expr, define) {return expr;
};_uniq_var_603.__lix_func__ = true;return _uniq_var_603;})();
flattenAmpersand;
flattenAmpersand;
var flattenAtomicDestructor = (function () {var _uniq_var_604 = function (arg) {return [];
};_uniq_var_604.__lix_func__ = true;return _uniq_var_604;})();
flattenAtomicDestructor;
flattenAtomicDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_605 = function (expr) {var _uniq_var_360 = transformVarName(expr[0]);
_uniq_var_360;
var varName = _uniq_var_360;
varName;
varName;
var _uniq_var_361 = true;
_uniq_var_361;
var _uniq_var_362 = null;
_uniq_var_362;
var _uniq_var_363 = __eq__(expr[3], "{tmp}");
_uniq_var_363;
if ((_uniq_var_361 && _uniq_var_363)) {
(_uniq_var_361 = false);
(_uniq_var_362 = (varName = expr[0]));

};
_uniq_var_362;
return varName;
};_uniq_var_605.__lix_func__ = true;return _uniq_var_605;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flatternArrayDestructor = (function () {var _uniq_var_616 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_370 = foreach(args, (function () {var _uniq_var_615 = function (item, index) {var _uniq_var_364 = getFnArgExpr(item[0]);
_uniq_var_364;
var _uniq_var_365 = getAtomicExprVarName(_uniq_var_364);
_uniq_var_365;
var varName = _uniq_var_365;
varName;
varName;
var _uniq_var_366 = (function () {var _uniq_var_608 = function (_uniq_var_606, _uniq_var_607) {
if (typeof _uniq_var_606.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_606.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_606.join.apply(_uniq_var_606, arguments);
} else if (_uniq_var_606.join !== undefined) {
if (_uniq_var_607 === undefined) {
return _uniq_var_606.join;
}
_uniq_var_606.join = _uniq_var_607;
}return _uniq_var_606;
};_uniq_var_608.__lix_func__ = true;return _uniq_var_608;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_366;
var _uniq_var_367 = (function () {var _uniq_var_611 = function (_uniq_var_609, _uniq_var_610) {
if (typeof _uniq_var_609.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_609.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_609.push.apply(_uniq_var_609, arguments);
} else if (_uniq_var_609.push !== undefined) {
if (_uniq_var_610 === undefined) {
return _uniq_var_609.push;
}
_uniq_var_609.push = _uniq_var_610;
}return _uniq_var_609;
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})()(ret, _uniq_var_366);
_uniq_var_367;
_uniq_var_367;
var _uniq_var_368 = flattenDestructor(item, item[0]);
_uniq_var_368;
var _uniq_var_369 = (function () {var _uniq_var_614 = function (_uniq_var_612, _uniq_var_613) {
if (typeof _uniq_var_612.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_612.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_612.concat.apply(_uniq_var_612, arguments);
} else if (_uniq_var_612.concat !== undefined) {
if (_uniq_var_613 === undefined) {
return _uniq_var_612.concat;
}
_uniq_var_612.concat = _uniq_var_613;
}return _uniq_var_612;
};_uniq_var_614.__lix_func__ = true;return _uniq_var_614;})()(ret, _uniq_var_368);
_uniq_var_369;
return (ret = _uniq_var_369);
};_uniq_var_615.__lix_func__ = true;return _uniq_var_615;})());
_uniq_var_370;
_uniq_var_370;
return ret;
};_uniq_var_616.__lix_func__ = true;return _uniq_var_616;})();
flatternArrayDestructor;
flatternArrayDestructor;
var flattenListDestructor = (function () {var _uniq_var_617 = function (args, varName) {var _uniq_var_371 = flatternArrayDestructor(args[2], args[0][0]);
_uniq_var_371;
return _uniq_var_371;
};_uniq_var_617.__lix_func__ = true;return _uniq_var_617;})();
flattenListDestructor;
flattenListDestructor;
var flattenDestructorOp = {
"{atomic}": flattenAtomicDestructor,
"{list}": flattenListDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_618 = function (hint) {var ret = flatternArrayDestructor;
ret;
ret;
var _uniq_var_372 = true;
_uniq_var_372;
var _uniq_var_373 = null;
_uniq_var_373;
if ((_uniq_var_372 && flattenDestructorOp[hint])) {
(_uniq_var_372 = false);
(_uniq_var_373 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_373;
return ret;
};_uniq_var_618.__lix_func__ = true;return _uniq_var_618;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var flattenDestructor = (function () {var _uniq_var_619 = function (args, varName) {var _uniq_var_374 = getFlattenDestructorOp(args[1]);
_uniq_var_374;
var _uniq_var_375 = call(_uniq_var_374, args, varName);
_uniq_var_375;
return _uniq_var_375;
};_uniq_var_619.__lix_func__ = true;return _uniq_var_619;})();
flattenDestructor;
flattenDestructor;
var flattenArgumentsDestructor = (function () {var _uniq_var_624 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_378 = foreach(args, (function () {var _uniq_var_623 = function (item) {var _uniq_var_376 = flattenDestructor(item, item[0]);
_uniq_var_376;
var _uniq_var_377 = (function () {var _uniq_var_622 = function (_uniq_var_620, _uniq_var_621) {
if (typeof _uniq_var_620.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_620.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_620.concat.apply(_uniq_var_620, arguments);
} else if (_uniq_var_620.concat !== undefined) {
if (_uniq_var_621 === undefined) {
return _uniq_var_620.concat;
}
_uniq_var_620.concat = _uniq_var_621;
}return _uniq_var_620;
};_uniq_var_622.__lix_func__ = true;return _uniq_var_622;})()(ret, _uniq_var_376);
_uniq_var_377;
return (ret = _uniq_var_377);
};_uniq_var_623.__lix_func__ = true;return _uniq_var_623;})());
_uniq_var_378;
_uniq_var_378;
return ret;
};_uniq_var_624.__lix_func__ = true;return _uniq_var_624;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFnArgExpr = (function () {var _uniq_var_625 = function (expr) {var _uniq_var_379 = true;
_uniq_var_379;
var _uniq_var_380 = null;
_uniq_var_380;
var _uniq_var_381 = __eq__(expr[1], "{atomic}");
_uniq_var_381;
if ((_uniq_var_379 && _uniq_var_381)) {
(_uniq_var_379 = false);
(_uniq_var_380 = expr);

};
if (_uniq_var_379) {
(_uniq_var_380 = expr[0]);

};
return _uniq_var_380;
};_uniq_var_625.__lix_func__ = true;return _uniq_var_625;})();
getFnArgExpr;
getFnArgExpr;
var getFuncArgsNameList = (function () {var _uniq_var_630 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_384 = foreach(args, (function () {var _uniq_var_629 = function (item) {var _uniq_var_382 = getFnArgExpr(item);
_uniq_var_382;
var _uniq_var_383 = (function () {var _uniq_var_628 = function (_uniq_var_626, _uniq_var_627) {
if (typeof _uniq_var_626.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_626.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_626.push.apply(_uniq_var_626, arguments);
} else if (_uniq_var_626.push !== undefined) {
if (_uniq_var_627 === undefined) {
return _uniq_var_626.push;
}
_uniq_var_626.push = _uniq_var_627;
}return _uniq_var_626;
};_uniq_var_628.__lix_func__ = true;return _uniq_var_628;})()(ret, _uniq_var_382);
_uniq_var_383;
return _uniq_var_383;
};_uniq_var_629.__lix_func__ = true;return _uniq_var_629;})());
_uniq_var_384;
_uniq_var_384;
return ret;
};_uniq_var_630.__lix_func__ = true;return _uniq_var_630;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_631 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_385 = flattenArgumentsDestructor(expr[2]);
_uniq_var_385;
var destructor = _uniq_var_385;
destructor;
destructor;
var _uniq_var_386 = getFuncArgsNameList(expr[2]);
_uniq_var_386;
var funcArgsNameList = _uniq_var_386;
funcArgsNameList;
funcArgsNameList;
var _uniq_var_387 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_387;
var func = _uniq_var_387;
func;
func;
return [expr[0], "{fn}", func];
};_uniq_var_631.__lix_func__ = true;return _uniq_var_631;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_632 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_388 = flatten(expr, define);
_uniq_var_388;
return _uniq_var_388;
};_uniq_var_632.__lix_func__ = true;return _uniq_var_632;})();
flattenAsterisk;
flattenAsterisk;
var identity = (function () {var _uniq_var_633 = function (x) {return x;
};_uniq_var_633.__lix_func__ = true;return _uniq_var_633;})();
identity;
identity;
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
var flattenOp = (function () {var _uniq_var_634 = function (hint) {var _uniq_var_389 = true;
_uniq_var_389;
var _uniq_var_390 = null;
_uniq_var_390;
if ((_uniq_var_389 && flattenOpTable[hint])) {
(_uniq_var_389 = false);
(_uniq_var_390 = flattenOpTable[hint]);

};
if (_uniq_var_389) {
(_uniq_var_390 = flattenExpr);

};
return _uniq_var_390;
};_uniq_var_634.__lix_func__ = true;return _uniq_var_634;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_635 = function (expr, define, ctx) {var _uniq_var_391 = flattenOp(expr[1]);
_uniq_var_391;
var _uniq_var_392 = _uniq_var_391(expr, define, ctx);
_uniq_var_392;
return _uniq_var_392;
};_uniq_var_635.__lix_func__ = true;return _uniq_var_635;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_636 = function (i) {return i;
};_uniq_var_636.__lix_func__ = true;return _uniq_var_636;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_637 = function (i) {;
};_uniq_var_637.__lix_func__ = true;return _uniq_var_637;})(),
appendExpr: (function () {var _uniq_var_638 = function (i) {;
};_uniq_var_638.__lix_func__ = true;return _uniq_var_638;})()
};
def0;
def0;
var _uniq_var_393 = join(['s[', STEP, ']']);
_uniq_var_393;
var _uniq_var_394 = join(['s[', RET, ']']);
_uniq_var_394;
var seqFuncParamsName = {
step: _uniq_var_393,
ret: _uniq_var_394
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_645 = function (expr) {var _uniq_var_395 = map(env0, (function () {var _uniq_var_639 = function (i) {return i;
};_uniq_var_639.__lix_func__ = true;return _uniq_var_639;})());
_uniq_var_395;
var _uniq_var_396 = (function () {var _uniq_var_642 = function (_uniq_var_640, _uniq_var_641) {
if (typeof _uniq_var_640.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_640.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_640.join.apply(_uniq_var_640, arguments);
} else if (_uniq_var_640.join !== undefined) {
if (_uniq_var_641 === undefined) {
return _uniq_var_640.join;
}
_uniq_var_640.join = _uniq_var_641;
}return _uniq_var_640;
};_uniq_var_642.__lix_func__ = true;return _uniq_var_642;})()(_uniq_var_395, "\n");
_uniq_var_396;
var libs = _uniq_var_396;
libs;
libs;
var _uniq_var_397 = flatten(expr, (function () {var _uniq_var_643 = function (i) {;
};_uniq_var_643.__lix_func__ = true;return _uniq_var_643;})(), (function () {var _uniq_var_644 = function (i) {return i;
};_uniq_var_644.__lix_func__ = true;return _uniq_var_644;})());
_uniq_var_397;
var flattenedExpr = _uniq_var_397;
flattenedExpr;
flattenedExpr;
var _uniq_var_398 = call(env_new);
_uniq_var_398;
var _uniq_var_399 = generateStart(flattenedExpr, _uniq_var_398, ctx0, def0);
_uniq_var_399;
var code = _uniq_var_399;
code;
code;
var _uniq_var_400 = join([libs, "\n", code]);
_uniq_var_400;
return _uniq_var_400;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})();
compile;
compile;
(exports.compile = compile);
compile;

