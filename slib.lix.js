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
var join = (function () {var _uniq_var_419 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_418 = function (_uniq_var_416, _uniq_var_417) {
if (typeof _uniq_var_416.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_416.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_416.join.apply(_uniq_var_416, arguments);
} else if (_uniq_var_416.join !== undefined) {
if (_uniq_var_417 === undefined) {
return _uniq_var_416.join;
}
_uniq_var_416.join = _uniq_var_417;
}return _uniq_var_416;
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
join;
join;
var map = (function () {var _uniq_var_424 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_423 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_422 = function (_uniq_var_420, _uniq_var_421) {
if (typeof _uniq_var_420.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_420.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_420.push.apply(_uniq_var_420, arguments);
} else if (_uniq_var_420.push !== undefined) {
if (_uniq_var_421 === undefined) {
return _uniq_var_420.push;
}
_uniq_var_420.push = _uniq_var_421;
}return _uniq_var_420;
};_uniq_var_422.__lix_func__ = true;return _uniq_var_422;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_423.__lix_func__ = true;return _uniq_var_423;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_424.__lix_func__ = true;return _uniq_var_424;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_426 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_425 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_425.__lix_func__ = true;return _uniq_var_425;})();
};_uniq_var_426.__lix_func__ = true;return _uniq_var_426;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_427 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_427.__lix_func__ = true;return _uniq_var_427;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_432 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_428 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_428.__lix_func__ = true;return _uniq_var_428;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_431 = function (_uniq_var_429, _uniq_var_430) {
if (typeof _uniq_var_429.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_429.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_429.join.apply(_uniq_var_429, arguments);
} else if (_uniq_var_429.join !== undefined) {
if (_uniq_var_430 === undefined) {
return _uniq_var_429.join;
}
_uniq_var_429.join = _uniq_var_430;
}return _uniq_var_429;
};_uniq_var_431.__lix_func__ = true;return _uniq_var_431;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_433 = function (x) {return x;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_440 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_435 = function (current) {return (function () {var _uniq_var_434 = function (v, loop) {var next = current;
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
};_uniq_var_434.__lix_func__ = true;return _uniq_var_434;})();
};_uniq_var_435.__lix_func__ = true;return _uniq_var_435;})();
ctx;
ctx;
var _uniq_var_25 = map(expr[0], (function () {var _uniq_var_436 = function (item, index) {var _uniq_var_21 = call(getCount);
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
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})());
_uniq_var_25;
var _uniq_var_26 = (function () {var _uniq_var_439 = function (_uniq_var_437, _uniq_var_438) {
if (typeof _uniq_var_437.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_437.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_437.join.apply(_uniq_var_437, arguments);
} else if (_uniq_var_437.join !== undefined) {
if (_uniq_var_438 === undefined) {
return _uniq_var_437.join;
}
_uniq_var_437.join = _uniq_var_438;
}return _uniq_var_437;
};_uniq_var_439.__lix_func__ = true;return _uniq_var_439;})()(_uniq_var_25, ";\n");
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
};_uniq_var_440.__lix_func__ = true;return _uniq_var_440;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_441 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " || ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_441.__lix_func__ = true;return _uniq_var_441;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_442 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " && ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_447 = function (expr, env, ctx, def) {var _uniq_var_47 = map(expr[0], (function () {var _uniq_var_443 = function (i) {var _uniq_var_35 = true;
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
};_uniq_var_443.__lix_func__ = true;return _uniq_var_443;})());
_uniq_var_47;
var _uniq_var_48 = (function () {var _uniq_var_446 = function (_uniq_var_444, _uniq_var_445) {
if (typeof _uniq_var_444.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_444.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_444.join.apply(_uniq_var_444, arguments);
} else if (_uniq_var_444.join !== undefined) {
if (_uniq_var_445 === undefined) {
return _uniq_var_444.join;
}
_uniq_var_444.join = _uniq_var_445;
}return _uniq_var_444;
};_uniq_var_446.__lix_func__ = true;return _uniq_var_446;})()(_uniq_var_47, ' else ');
_uniq_var_48;
return _uniq_var_48;
};_uniq_var_447.__lix_func__ = true;return _uniq_var_447;})();
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
var generateAtomic = (function () {var _uniq_var_448 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_448.__lix_func__ = true;return _uniq_var_448;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_449 = function (expr, env, ctx, def) {var _uniq_var_57 = true;
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
};_uniq_var_449.__lix_func__ = true;return _uniq_var_449;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_450 = function (expr, env, ctx, def) {var _uniq_var_63 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_455 = function (expr, env, ctx, def) {var _uniq_var_67 = map(expr[0], (function () {var _uniq_var_451 = function (i) {var _uniq_var_66 = generateProperty(i, env, ctx, def);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_451.__lix_func__ = true;return _uniq_var_451;})());
_uniq_var_67;
var _uniq_var_68 = (function () {var _uniq_var_454 = function (_uniq_var_452, _uniq_var_453) {
if (typeof _uniq_var_452.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_452.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_452.join.apply(_uniq_var_452, arguments);
} else if (_uniq_var_452.join !== undefined) {
if (_uniq_var_453 === undefined) {
return _uniq_var_452.join;
}
_uniq_var_452.join = _uniq_var_453;
}return _uniq_var_452;
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})()(_uniq_var_67, ",\n");
_uniq_var_68;
var objectBody = _uniq_var_68;
objectBody;
objectBody;
var _uniq_var_69 = join(["{\n", objectBody, "\n}"]);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_455.__lix_func__ = true;return _uniq_var_455;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_456 = function (name) {var _uniq_var_70 = true;
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
};_uniq_var_456.__lix_func__ = true;return _uniq_var_456;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_457 = function (expr) {var _uniq_var_82 = true;
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
};_uniq_var_457.__lix_func__ = true;return _uniq_var_457;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_458 = function (expr, env, ctx, def) {var _uniq_var_88 = true;
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
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_459 = function (expr, env, ctx, def) {var _uniq_var_96 = true;
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
};_uniq_var_459.__lix_func__ = true;return _uniq_var_459;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_464 = function (expr, env, ctx, def) {var _uniq_var_105 = map(expr[0], (function () {var _uniq_var_460 = function (i) {var _uniq_var_104 = generate(i, env, ctx, def);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_460.__lix_func__ = true;return _uniq_var_460;})());
_uniq_var_105;
var _uniq_var_106 = (function () {var _uniq_var_463 = function (_uniq_var_461, _uniq_var_462) {
if (typeof _uniq_var_461.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_461.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_461.join.apply(_uniq_var_461, arguments);
} else if (_uniq_var_461.join !== undefined) {
if (_uniq_var_462 === undefined) {
return _uniq_var_461.join;
}
_uniq_var_461.join = _uniq_var_462;
}return _uniq_var_461;
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})()(_uniq_var_105, ', ');
_uniq_var_106;
var arrayBody = _uniq_var_106;
arrayBody;
arrayBody;
var _uniq_var_107 = join(['[', arrayBody, ']']);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_464.__lix_func__ = true;return _uniq_var_464;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_465 = function (expr, env, ctx) {var _uniq_var_108 = call(getUniqVarName);
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
};_uniq_var_465.__lix_func__ = true;return _uniq_var_465;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_466 = function (expr, env, ctx, def) {var _uniq_var_114 = generate(expr[0], env, ctx, def);
_uniq_var_114;
var _uniq_var_115 = generate(expr[2], env, ctx, def);
_uniq_var_115;
var _uniq_var_116 = ctx(_uniq_var_115, true);
_uniq_var_116;
var _uniq_var_117 = join(['while (', _uniq_var_114, ') {\n', _uniq_var_116, "\n}"]);
_uniq_var_117;
return _uniq_var_117;
};_uniq_var_466.__lix_func__ = true;return _uniq_var_466;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_467 = function (expr, env, ctx) {return 'break';
};_uniq_var_467.__lix_func__ = true;return _uniq_var_467;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_468 = function (expr, env, ctx, def) {return "";
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_469 = function (expr, env, ctx, def) {var _uniq_var_118 = getVarName(expr[0]);
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
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_470 = function (expr, env, ctx, def) {var _uniq_var_122 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_122;
return _uniq_var_122;
};_uniq_var_470.__lix_func__ = true;return _uniq_var_470;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_474 = function (expr, env, ctx, def) {var _uniq_var_123 = true;
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
var _uniq_var_134 = (function () {var _uniq_var_473 = function (_uniq_var_471, _uniq_var_472) {
if (typeof _uniq_var_471.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_471.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_471.join.apply(_uniq_var_471, arguments);
} else if (_uniq_var_471.join !== undefined) {
if (_uniq_var_472 === undefined) {
return _uniq_var_471.join;
}
_uniq_var_471.join = _uniq_var_472;
}return _uniq_var_471;
};_uniq_var_473.__lix_func__ = true;return _uniq_var_473;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_474.__lix_func__ = true;return _uniq_var_474;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_475 = function (expr, env, ctx, def) {var _uniq_var_135 = getVarName(expr[0]);
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
};_uniq_var_475.__lix_func__ = true;return _uniq_var_475;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_482 = function (expr, env, ctx, def) {var _uniq_var_145 = true;
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
var _uniq_var_154 = (function () {var _uniq_var_478 = function (_uniq_var_476, _uniq_var_477) {
if (typeof _uniq_var_476.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_476.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_476.join.apply(_uniq_var_476, arguments);
} else if (_uniq_var_476.join !== undefined) {
if (_uniq_var_477 === undefined) {
return _uniq_var_476.join;
}
_uniq_var_476.join = _uniq_var_477;
}return _uniq_var_476;
};_uniq_var_478.__lix_func__ = true;return _uniq_var_478;})()(expr[3], ";\n");
_uniq_var_154;
var _uniq_var_155 = call(def.defineVar);
_uniq_var_155;
var _uniq_var_156 = call(def.appendExpr);
_uniq_var_156;
var _uniq_var_157 = (function () {var _uniq_var_481 = function (_uniq_var_479, _uniq_var_480) {
if (typeof _uniq_var_479.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_479.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_479.join.apply(_uniq_var_479, arguments);
} else if (_uniq_var_479.join !== undefined) {
if (_uniq_var_480 === undefined) {
return _uniq_var_479.join;
}
_uniq_var_479.join = _uniq_var_480;
}return _uniq_var_479;
};_uniq_var_481.__lix_func__ = true;return _uniq_var_481;})()(['(function (', args, ') {\n', 'var ', _uniq_var_153, ' = arguments;\n', _uniq_var_154, ";\n", _uniq_var_155, ";\n", _uniq_var_156, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_157;
return _uniq_var_157;
};_uniq_var_482.__lix_func__ = true;return _uniq_var_482;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_489 = function (expr0, env, ctx, prevDef) {var _uniq_var_158 = call(getUniqVarName);
_uniq_var_158;
var funcName = _uniq_var_158;
funcName;
funcName;
var expr = expr0[2];
expr;
expr;
var _uniq_var_159 = true;
_uniq_var_159;
var _uniq_var_160 = null;
_uniq_var_160;
var _uniq_var_161 = __eq__(expr[3], undefined);
_uniq_var_161;
if ((_uniq_var_159 && _uniq_var_161)) {
(_uniq_var_159 = false);
(_uniq_var_160 = (expr[3] = []));

};
_uniq_var_160;
var _uniq_var_162 = env_new(env);
_uniq_var_162;
var funcEnv = _uniq_var_162;
funcEnv;
funcEnv;
var _uniq_var_163 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_163;
var args = _uniq_var_163;
args;
args;
var _uniq_var_164 = call(getUniqVarName);
_uniq_var_164;
var tmpVar = _uniq_var_164;
tmpVar;
tmpVar;
var _uniq_var_165 = call(GenerateDefNew);
_uniq_var_165;
var def = _uniq_var_165;
def;
def;
var _uniq_var_166 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_166;
var body = _uniq_var_166;
body;
body;
var _uniq_var_167 = transformVarName('arguments');
_uniq_var_167;
var _uniq_var_168 = (function () {var _uniq_var_485 = function (_uniq_var_483, _uniq_var_484) {
if (typeof _uniq_var_483.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_483.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_483.join.apply(_uniq_var_483, arguments);
} else if (_uniq_var_483.join !== undefined) {
if (_uniq_var_484 === undefined) {
return _uniq_var_483.join;
}
_uniq_var_483.join = _uniq_var_484;
}return _uniq_var_483;
};_uniq_var_485.__lix_func__ = true;return _uniq_var_485;})()(expr[3], ";\n");
_uniq_var_168;
var _uniq_var_169 = call(def.defineVar);
_uniq_var_169;
var _uniq_var_170 = call(def.appendExpr);
_uniq_var_170;
var _uniq_var_171 = (function () {var _uniq_var_488 = function (_uniq_var_486, _uniq_var_487) {
if (typeof _uniq_var_486.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_486.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_486.join.apply(_uniq_var_486, arguments);
} else if (_uniq_var_486.join !== undefined) {
if (_uniq_var_487 === undefined) {
return _uniq_var_486.join;
}
_uniq_var_486.join = _uniq_var_487;
}return _uniq_var_486;
};_uniq_var_488.__lix_func__ = true;return _uniq_var_488;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_167, ' = arguments;\n', _uniq_var_168, ";\n", _uniq_var_169, ";\n", _uniq_var_170, ";\n", 'return ', body, ";\n", '}'], '');
_uniq_var_171;
var _uniq_var_172 = prevDef.appendExpr(_uniq_var_171);
_uniq_var_172;
_uniq_var_172;
var _uniq_var_173 = generate([expr0[0], ":=", [funcName, "{atomic}", "{var}", "{tmp}"]], env, ctx, prevDef);
_uniq_var_173;
return _uniq_var_173;
};_uniq_var_489.__lix_func__ = true;return _uniq_var_489;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_491 = function (expr, env, ctx, def) {var _uniq_var_174 = generate(expr[1], env, ctx0, def);
_uniq_var_174;
var func = _uniq_var_174;
func;
func;
var _uniq_var_175 = generate(expr[0], env, ctx0, def);
_uniq_var_175;
var args = _uniq_var_175;
args;
args;
var _uniq_var_181 = foreach(expr, (function () {var _uniq_var_490 = function (item, index) {var _uniq_var_176 = true;
_uniq_var_176;
var _uniq_var_177 = null;
_uniq_var_177;
var _uniq_var_180 = __gt__(index, 1);
_uniq_var_180;
if ((_uniq_var_176 && _uniq_var_180)) {
(_uniq_var_176 = false);
var _uniq_var_178 = generate(item, env, ctx0, def);
_uniq_var_178;
var _uniq_var_179 = join([args, ', ', _uniq_var_178]);
_uniq_var_179;
(_uniq_var_177 = (args = _uniq_var_179));

};
return _uniq_var_177;
};_uniq_var_490.__lix_func__ = true;return _uniq_var_490;})());
_uniq_var_181;
_uniq_var_181;
var _uniq_var_182 = join([func, '(', args, ')']);
_uniq_var_182;
var _uniq_var_183 = ctx(_uniq_var_182);
_uniq_var_183;
return _uniq_var_183;
};_uniq_var_491.__lix_func__ = true;return _uniq_var_491;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_513 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_492 = function (d) {return (destructed = d);
};_uniq_var_492.__lix_func__ = true;return _uniq_var_492;})(),
desctructedVars: (function () {var _uniq_var_496 = function () {var _uniq_var_184 = (function () {var _uniq_var_495 = function (_uniq_var_493, _uniq_var_494) {
if (typeof _uniq_var_493.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_493.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_493.join.apply(_uniq_var_493, arguments);
} else if (_uniq_var_493.join !== undefined) {
if (_uniq_var_494 === undefined) {
return _uniq_var_493.join;
}
_uniq_var_493.join = _uniq_var_494;
}return _uniq_var_493;
};_uniq_var_495.__lix_func__ = true;return _uniq_var_495;})()(destructed, ";\n");
_uniq_var_184;
return _uniq_var_184;
};_uniq_var_496.__lix_func__ = true;return _uniq_var_496;})(),
defineFn: (function () {var _uniq_var_500 = function (name, func, condition) {var _uniq_var_185 = true;
_uniq_var_185;
var _uniq_var_186 = null;
_uniq_var_186;
var _uniq_var_187 = __eq__(fns[name], undefined);
_uniq_var_187;
if ((_uniq_var_185 && _uniq_var_187)) {
(_uniq_var_185 = false);
(_uniq_var_186 = (fns[name] = []));

};
_uniq_var_186;
var _uniq_var_188 = (function () {var _uniq_var_499 = function (_uniq_var_497, _uniq_var_498) {
if (typeof _uniq_var_497.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_497.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_497.push.apply(_uniq_var_497, arguments);
} else if (_uniq_var_497.push !== undefined) {
if (_uniq_var_498 === undefined) {
return _uniq_var_497.push;
}
_uniq_var_497.push = _uniq_var_498;
}return _uniq_var_497;
};_uniq_var_499.__lix_func__ = true;return _uniq_var_499;})()(fns[name], {
func: func,
condition: condition
});
_uniq_var_188;
return _uniq_var_188;
};_uniq_var_500.__lix_func__ = true;return _uniq_var_500;})(),
defineVar: (function () {var _uniq_var_505 = function (v) {var _uniq_var_189 = true;
_uniq_var_189;
var _uniq_var_190 = null;
_uniq_var_190;
if ((_uniq_var_189 && v)) {
(_uniq_var_189 = false);
(_uniq_var_190 = (vars[v] = v));

};
if (_uniq_var_189) {
var _uniq_var_191 = map(vars, (function () {var _uniq_var_501 = function (i) {return i;
};_uniq_var_501.__lix_func__ = true;return _uniq_var_501;})());
_uniq_var_191;
var vecs = _uniq_var_191;
vecs;
vecs;
var _uniq_var_192 = true;
_uniq_var_192;
var _uniq_var_193 = null;
_uniq_var_193;
var _uniq_var_196 = __gt__(vecs.length, 0);
_uniq_var_196;
if ((_uniq_var_192 && _uniq_var_196)) {
(_uniq_var_192 = false);
var _uniq_var_194 = (function () {var _uniq_var_504 = function (_uniq_var_502, _uniq_var_503) {
if (typeof _uniq_var_502.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_502.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_502.join.apply(_uniq_var_502, arguments);
} else if (_uniq_var_502.join !== undefined) {
if (_uniq_var_503 === undefined) {
return _uniq_var_502.join;
}
_uniq_var_502.join = _uniq_var_503;
}return _uniq_var_502;
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})()(vecs, ', ');
_uniq_var_194;
var _uniq_var_195 = __add__('var ', _uniq_var_194);
_uniq_var_195;
(_uniq_var_193 = _uniq_var_195);

};
if (_uniq_var_192) {
(_uniq_var_193 = '');

};
(_uniq_var_190 = _uniq_var_193);

};
return _uniq_var_190;
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})(),
appendExpr: (function () {var _uniq_var_512 = function (v) {var _uniq_var_197 = true;
_uniq_var_197;
var _uniq_var_198 = null;
_uniq_var_198;
if ((_uniq_var_197 && v)) {
(_uniq_var_197 = false);
var _uniq_var_199 = (function () {var _uniq_var_508 = function (_uniq_var_506, _uniq_var_507) {
if (typeof _uniq_var_506.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_506.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_506.push.apply(_uniq_var_506, arguments);
} else if (_uniq_var_506.push !== undefined) {
if (_uniq_var_507 === undefined) {
return _uniq_var_506.push;
}
_uniq_var_506.push = _uniq_var_507;
}return _uniq_var_506;
};_uniq_var_508.__lix_func__ = true;return _uniq_var_508;})()(funcs, v);
_uniq_var_199;
(_uniq_var_198 = _uniq_var_199);

};
if (_uniq_var_197) {
var _uniq_var_200 = (function () {var _uniq_var_511 = function (_uniq_var_509, _uniq_var_510) {
if (typeof _uniq_var_509.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_509.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_509.join.apply(_uniq_var_509, arguments);
} else if (_uniq_var_509.join !== undefined) {
if (_uniq_var_510 === undefined) {
return _uniq_var_509.join;
}
_uniq_var_509.join = _uniq_var_510;
}return _uniq_var_509;
};_uniq_var_511.__lix_func__ = true;return _uniq_var_511;})()(funcs, ';\n');
_uniq_var_200;
(_uniq_var_198 = _uniq_var_200);

};
return _uniq_var_198;
};_uniq_var_512.__lix_func__ = true;return _uniq_var_512;})()
};
};_uniq_var_513.__lix_func__ = true;return _uniq_var_513;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_514 = function (expr, env, ctx, def) {var _uniq_var_201 = call(GenerateDefNew);
_uniq_var_201;
var def = _uniq_var_201;
def;
def;
var _uniq_var_202 = generate(expr[0], env, ctx, def);
_uniq_var_202;
var body = _uniq_var_202;
body;
body;
var _uniq_var_203 = join(['module.exports = ', body, '\n']);
_uniq_var_203;
var body = _uniq_var_203;
body;
body;
var _uniq_var_204 = call(def.defineVar);
_uniq_var_204;
var _uniq_var_205 = call(def.appendExpr);
_uniq_var_205;
var _uniq_var_206 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_204, ";\n", _uniq_var_205, ";\n", body]);
_uniq_var_206;
return _uniq_var_206;
};_uniq_var_514.__lix_func__ = true;return _uniq_var_514;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_515 = function (expr, env, ctx, def) {var _uniq_var_207 = generate(expr[0], env, ctx, def);
_uniq_var_207;
return _uniq_var_207;
};_uniq_var_515.__lix_func__ = true;return _uniq_var_515;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_516 = function (expr, env, ctx, def) {var _uniq_var_208 = join(['"', expr[0], '"']);
_uniq_var_208;
return _uniq_var_208;
};_uniq_var_516.__lix_func__ = true;return _uniq_var_516;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_517 = function (expr, env, ctx, def) {var _uniq_var_209 = generate(expr[0], env, ctx, def);
_uniq_var_209;
var _uniq_var_210 = join(['("', expr[2], '" + ', _uniq_var_209, ')']);
_uniq_var_210;
return _uniq_var_210;
};_uniq_var_517.__lix_func__ = true;return _uniq_var_517;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_522 = function (expr, env, ctx, def) {var _uniq_var_212 = map(expr[0], (function () {var _uniq_var_518 = function (i) {var _uniq_var_211 = generate(i, env, ctx, def);
_uniq_var_211;
return _uniq_var_211;
};_uniq_var_518.__lix_func__ = true;return _uniq_var_518;})());
_uniq_var_212;
var _uniq_var_213 = (function () {var _uniq_var_521 = function (_uniq_var_519, _uniq_var_520) {
if (typeof _uniq_var_519.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_519.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_519.join.apply(_uniq_var_519, arguments);
} else if (_uniq_var_519.join !== undefined) {
if (_uniq_var_520 === undefined) {
return _uniq_var_519.join;
}
_uniq_var_519.join = _uniq_var_520;
}return _uniq_var_519;
};_uniq_var_521.__lix_func__ = true;return _uniq_var_521;})()(_uniq_var_212, ',');
_uniq_var_213;
var path = _uniq_var_213;
path;
path;
var _uniq_var_214 = join(['[', path, '].join("/")']);
_uniq_var_214;
return _uniq_var_214;
};_uniq_var_522.__lix_func__ = true;return _uniq_var_522;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_526 = function (expr, env, ctx, def) {var _uniq_var_215 = (function () {var _uniq_var_525 = function (_uniq_var_523, _uniq_var_524) {
if (typeof _uniq_var_523.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_523.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_523.join.apply(_uniq_var_523, arguments);
} else if (_uniq_var_523.join !== undefined) {
if (_uniq_var_524 === undefined) {
return _uniq_var_523.join;
}
_uniq_var_523.join = _uniq_var_524;
}return _uniq_var_523;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})()(['"', expr[0], '"'], '');
_uniq_var_215;
var name = [_uniq_var_215, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_526.__lix_func__ = true;return _uniq_var_526;})();
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
var generateOp = (function () {var _uniq_var_527 = function (hint) {var _uniq_var_216 = true;
_uniq_var_216;
var _uniq_var_217 = null;
_uniq_var_217;
if ((_uniq_var_216 && generateOpTable[hint])) {
(_uniq_var_216 = false);
(_uniq_var_217 = generateOpTable[hint]);

};
if (_uniq_var_216) {
(_uniq_var_217 = generateExpr);

};
return _uniq_var_217;
};_uniq_var_527.__lix_func__ = true;return _uniq_var_527;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_528 = function (expr, env, ctx, def) {var _uniq_var_218 = generateOp(expr[1]);
_uniq_var_218;
var _uniq_var_219 = _uniq_var_218(expr, env, ctx, def);
_uniq_var_219;
return _uniq_var_219;
};_uniq_var_528.__lix_func__ = true;return _uniq_var_528;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_530 = function (env) {var _uniq_var_220 = env;
_uniq_var_220;
if (not(_uniq_var_220)) {
(_uniq_var_220 = env0);

};
(env = _uniq_var_220);
var Env = (function () {var _uniq_var_529 = function () {;
};_uniq_var_529.__lix_func__ = true;return _uniq_var_529;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_221 = _instance_(Env);
_uniq_var_221;
return _uniq_var_221;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_532 = function (expr, define) {var _uniq_var_223 = map(expr, (function () {var _uniq_var_531 = function (item) {var _uniq_var_222 = flatten(item, define);
_uniq_var_222;
return _uniq_var_222;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})());
_uniq_var_223;
var _uniq_var_224 = define(_uniq_var_223);
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_532.__lix_func__ = true;return _uniq_var_532;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_533 = function (expr, define) {return expr;
};_uniq_var_533.__lix_func__ = true;return _uniq_var_533;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_538 = function (expr, define) {var _uniq_var_225 = call(statementFlattenGenerator);
_uniq_var_225;
var whileDefine = _uniq_var_225;
whileDefine;
whileDefine;
var _uniq_var_226 = flatten(expr[0], whileDefine);
_uniq_var_226;
(expr[0] = _uniq_var_226);
var _uniq_var_227 = flatten(expr[2], define0);
_uniq_var_227;
(expr[2] = _uniq_var_227);
var _uniq_var_228 = call(whileDefine);
_uniq_var_228;
var _uniq_var_229 = (function () {var _uniq_var_536 = function (_uniq_var_534, _uniq_var_535) {
if (typeof _uniq_var_534.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_534.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_534.concat.apply(_uniq_var_534, arguments);
} else if (_uniq_var_534.concat !== undefined) {
if (_uniq_var_535 === undefined) {
return _uniq_var_534.concat;
}
_uniq_var_534.concat = _uniq_var_535;
}return _uniq_var_534;
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})()(expr[2][0], _uniq_var_228);
_uniq_var_229;
(expr[2][0] = _uniq_var_229);
var _uniq_var_230 = call(whileDefine);
_uniq_var_230;
var _uniq_var_232 = foreach(_uniq_var_230, (function () {var _uniq_var_537 = function (i) {var _uniq_var_231 = define(i, true);
_uniq_var_231;
return _uniq_var_231;
};_uniq_var_537.__lix_func__ = true;return _uniq_var_537;})());
_uniq_var_232;
_uniq_var_232;
var _uniq_var_233 = define(expr, true);
_uniq_var_233;
_uniq_var_233;
return ['', '{empty}'];
};_uniq_var_538.__lix_func__ = true;return _uniq_var_538;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_543 = function (expr, define) {var _uniq_var_234 = flatten(expr[0], define);
_uniq_var_234;
var ret = _uniq_var_234;
ret;
ret;
var _uniq_var_235 = true;
_uniq_var_235;
var _uniq_var_236 = null;
_uniq_var_236;
var _uniq_var_238 = __ne__(ret[2], 'var');
_uniq_var_238;
if ((_uniq_var_235 && _uniq_var_238)) {
(_uniq_var_235 = false);
var _uniq_var_237 = define(ret);
_uniq_var_237;
var ret = _uniq_var_237;
ret;
(_uniq_var_236 = ret);

};
_uniq_var_236;
var getAndOpSeq = (function () {var _uniq_var_542 = function () {var _uniq_var_239 = call(statementFlattenGenerator);
_uniq_var_239;
var AndDefine = _uniq_var_239;
AndDefine;
AndDefine;
var _uniq_var_240 = flatten(expr[2], AndDefine);
_uniq_var_240;
var seqRet = _uniq_var_240;
seqRet;
seqRet;
var _uniq_var_241 = call(AndDefine);
_uniq_var_241;
var seq = _uniq_var_241;
seq;
seq;
var _uniq_var_242 = (function () {var _uniq_var_541 = function (_uniq_var_539, _uniq_var_540) {
if (typeof _uniq_var_539.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_539.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_539.push.apply(_uniq_var_539, arguments);
} else if (_uniq_var_539.push !== undefined) {
if (_uniq_var_540 === undefined) {
return _uniq_var_539.push;
}
_uniq_var_539.push = _uniq_var_540;
}return _uniq_var_539;
};_uniq_var_541.__lix_func__ = true;return _uniq_var_541;})()(seq, [ret, '=', seqRet]);
_uniq_var_242;
_uniq_var_242;
return [seq, '{seq}'];
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_243 = call(getAndOpSeq);
_uniq_var_243;
var _uniq_var_244 = define([[[ret, [[], '{empty}']], [_uniq_var_243, 'else']], 'if'], true);
_uniq_var_244;
_uniq_var_244;
return ret;
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_548 = function (expr, define) {var _uniq_var_245 = flatten(expr[0], define);
_uniq_var_245;
var ret = _uniq_var_245;
ret;
ret;
var _uniq_var_246 = true;
_uniq_var_246;
var _uniq_var_247 = null;
_uniq_var_247;
var _uniq_var_249 = __ne__(ret[2], 'var');
_uniq_var_249;
if ((_uniq_var_246 && _uniq_var_249)) {
(_uniq_var_246 = false);
var _uniq_var_248 = define(ret);
_uniq_var_248;
var ret = _uniq_var_248;
ret;
(_uniq_var_247 = ret);

};
_uniq_var_247;
var getAndOpSeq = (function () {var _uniq_var_547 = function () {var _uniq_var_250 = call(statementFlattenGenerator);
_uniq_var_250;
var AndDefine = _uniq_var_250;
AndDefine;
AndDefine;
var _uniq_var_251 = flatten(expr[2], AndDefine);
_uniq_var_251;
var seqRet = _uniq_var_251;
seqRet;
seqRet;
var _uniq_var_252 = call(AndDefine);
_uniq_var_252;
var seq = _uniq_var_252;
seq;
seq;
var _uniq_var_253 = (function () {var _uniq_var_546 = function (_uniq_var_544, _uniq_var_545) {
if (typeof _uniq_var_544.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_544.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_544.push.apply(_uniq_var_544, arguments);
} else if (_uniq_var_544.push !== undefined) {
if (_uniq_var_545 === undefined) {
return _uniq_var_544.push;
}
_uniq_var_544.push = _uniq_var_545;
}return _uniq_var_544;
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})()(seq, [ret, '=', seqRet]);
_uniq_var_253;
_uniq_var_253;
return [seq, '{seq}'];
};_uniq_var_547.__lix_func__ = true;return _uniq_var_547;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_254 = call(getAndOpSeq);
_uniq_var_254;
var _uniq_var_255 = define([[[ret, _uniq_var_254]], 'if'], true);
_uniq_var_255;
_uniq_var_255;
return ret;
};_uniq_var_548.__lix_func__ = true;return _uniq_var_548;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_553 = function (expr, define, tmpVar, ctx) {var _uniq_var_268 = foreach(expr[0], (function () {var _uniq_var_552 = function (i) {var _uniq_var_256 = true;
_uniq_var_256;
var _uniq_var_257 = null;
_uniq_var_257;
var _uniq_var_260 = __eq__(i[1], 'else');
_uniq_var_260;
if ((_uniq_var_256 && _uniq_var_260)) {
(_uniq_var_256 = false);
var _uniq_var_258 = flatten(i[0], define0, ctx);
_uniq_var_258;
var elseSeq = _uniq_var_258;
elseSeq;
elseSeq;
var _uniq_var_259 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_259;
(_uniq_var_257 = _uniq_var_259);

};
var _uniq_var_263 = __eq__(i[1], 'if');
_uniq_var_263;
if ((_uniq_var_256 && _uniq_var_263)) {
(_uniq_var_256 = false);
var _uniq_var_261 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_261;
var _uniq_var_262 = define(_uniq_var_261);
_uniq_var_262;
(_uniq_var_257 = _uniq_var_262);

};
if (_uniq_var_256) {
var _uniq_var_264 = flatten(i[1], define0, ctx);
_uniq_var_264;
var ifSeq = _uniq_var_264;
ifSeq;
ifSeq;
var _uniq_var_265 = (function () {var _uniq_var_551 = function (_uniq_var_549, _uniq_var_550) {
if (typeof _uniq_var_549.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_549.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_549.unshift.apply(_uniq_var_549, arguments);
} else if (_uniq_var_549.unshift !== undefined) {
if (_uniq_var_550 === undefined) {
return _uniq_var_549.unshift;
}
_uniq_var_549.unshift = _uniq_var_550;
}return _uniq_var_549;
};_uniq_var_551.__lix_func__ = true;return _uniq_var_551;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_265;
_uniq_var_265;
var _uniq_var_266 = flatten(i[0], define);
_uniq_var_266;
var cond = _uniq_var_266;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_267 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_267;
(_uniq_var_257 = _uniq_var_267);

};
return _uniq_var_257;
};_uniq_var_552.__lix_func__ = true;return _uniq_var_552;})());
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_553.__lix_func__ = true;return _uniq_var_553;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_554 = function (expr, define) {var _uniq_var_269 = define(['true', '{atomic}'], 'new');
_uniq_var_269;
var tmpVar = _uniq_var_269;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_270 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_270;
_uniq_var_270;
return retVar;
};_uniq_var_554.__lix_func__ = true;return _uniq_var_554;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_555 = function (expr, define) {var _uniq_var_271 = flatten(expr[2], define);
_uniq_var_271;
(expr[2] = _uniq_var_271);
return expr;
};_uniq_var_555.__lix_func__ = true;return _uniq_var_555;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_559 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_272 = true;
_uniq_var_272;
var _uniq_var_273 = null;
_uniq_var_273;
var _uniq_var_277 = __gt__(expr.length, 3);
_uniq_var_277;
if ((_uniq_var_272 && _uniq_var_277)) {
(_uniq_var_272 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_274 = __lt__(i, expr.length);
_uniq_var_274;
while (_uniq_var_274) {
var _uniq_var_275 = (function () {var _uniq_var_558 = function (_uniq_var_556, _uniq_var_557) {
if (typeof _uniq_var_556.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_556.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_556.push.apply(_uniq_var_556, arguments);
} else if (_uniq_var_556.push !== undefined) {
if (_uniq_var_557 === undefined) {
return _uniq_var_556.push;
}
_uniq_var_556.push = _uniq_var_557;
}return _uniq_var_556;
};_uniq_var_558.__lix_func__ = true;return _uniq_var_558;})()(partialExpr, expr[i]);
_uniq_var_275;
_uniq_var_275;
var _uniq_var_276 = __add__(i, 1);
_uniq_var_276;
(i = _uniq_var_276);
var _uniq_var_274 = __lt__(i, expr.length);
_uniq_var_274;
}
null;
(_uniq_var_273 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_273;
var _uniq_var_278 = flattenExpr(expr, define);
_uniq_var_278;
return _uniq_var_278;
};_uniq_var_559.__lix_func__ = true;return _uniq_var_559;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_560 = function (expr, define) {var _uniq_var_279 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_279;
return _uniq_var_279;
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_561 = function (expr, define) {var _uniq_var_280 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_280;
return _uniq_var_280;
};_uniq_var_561.__lix_func__ = true;return _uniq_var_561;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_562 = function (expr, define) {var _uniq_var_281 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_281;
return _uniq_var_281;
};_uniq_var_562.__lix_func__ = true;return _uniq_var_562;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_563 = function (expr, define) {var _uniq_var_282 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_282;
return _uniq_var_282;
};_uniq_var_563.__lix_func__ = true;return _uniq_var_563;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_564 = function (expr, define) {var _uniq_var_283 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_283;
return _uniq_var_283;
};_uniq_var_564.__lix_func__ = true;return _uniq_var_564;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_565 = function (expr, define) {var _uniq_var_284 = flatten(expr[0], define);
_uniq_var_284;
(expr[0] = _uniq_var_284);
return expr;
};_uniq_var_565.__lix_func__ = true;return _uniq_var_565;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_566 = function (expr, define) {return expr;
};_uniq_var_566.__lix_func__ = true;return _uniq_var_566;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_568 = function (expr, define) {var _uniq_var_286 = map(expr[0], (function () {var _uniq_var_567 = function (i) {var _uniq_var_285 = flatten(i, define);
_uniq_var_285;
return _uniq_var_285;
};_uniq_var_567.__lix_func__ = true;return _uniq_var_567;})());
_uniq_var_286;
(expr[0] = _uniq_var_286);
return expr;
};_uniq_var_568.__lix_func__ = true;return _uniq_var_568;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_569 = function (expr, define) {return expr;
};_uniq_var_569.__lix_func__ = true;return _uniq_var_569;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_570 = function (expr, define) {var _uniq_var_287 = true;
_uniq_var_287;
var _uniq_var_288 = null;
_uniq_var_288;
var _uniq_var_290 = __eq__(expr[1], '{index}');
_uniq_var_290;
if ((_uniq_var_287 && _uniq_var_290)) {
(_uniq_var_287 = false);
var _uniq_var_289 = flatten(expr[0], define);
_uniq_var_289;
(_uniq_var_288 = (expr[0] = _uniq_var_289));

};
_uniq_var_288;
return expr;
};_uniq_var_570.__lix_func__ = true;return _uniq_var_570;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_575 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_574 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_291 = true;
_uniq_var_291;
var _uniq_var_292 = null;
_uniq_var_292;
var _uniq_var_298 = __eq__(arguments.length, 2);
_uniq_var_298;
if ((_uniq_var_291 && _uniq_var_298)) {
(_uniq_var_291 = false);
var _uniq_var_293 = true;
_uniq_var_293;
var _uniq_var_294 = null;
_uniq_var_294;
var _uniq_var_297 = __eq__(defined[name], undefined);
_uniq_var_297;
if ((_uniq_var_293 && _uniq_var_297)) {
(_uniq_var_293 = false);
var _uniq_var_295 = call(getUniqVarName);
_uniq_var_295;
var varName = _uniq_var_295;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_296 = (function () {var _uniq_var_573 = function (_uniq_var_571, _uniq_var_572) {
if (typeof _uniq_var_571.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_571.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_571.push.apply(_uniq_var_571, arguments);
} else if (_uniq_var_571.push !== undefined) {
if (_uniq_var_572 === undefined) {
return _uniq_var_571.push;
}
_uniq_var_571.push = _uniq_var_572;
}return _uniq_var_571;
};_uniq_var_573.__lix_func__ = true;return _uniq_var_573;})()(statements, [lixVar, ':=', value]);
_uniq_var_296;
_uniq_var_296;
(_uniq_var_294 = (defined[name] = lixVar));

};
_uniq_var_294;
(_uniq_var_292 = (ret = defined[name]));

};
if (_uniq_var_291) {
(_uniq_var_292 = (ret = statements));

};
_uniq_var_292;
return ret;
};_uniq_var_574.__lix_func__ = true;return _uniq_var_574;})();
};_uniq_var_575.__lix_func__ = true;return _uniq_var_575;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_299 = call(NewGlobalDefine);
_uniq_var_299;
var globalDefine = _uniq_var_299;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_576 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_300 = true;
_uniq_var_300;
var _uniq_var_301 = null;
_uniq_var_301;
var _uniq_var_303 = __eq__(expr[0][3], '{global}');
_uniq_var_303;
if ((_uniq_var_300 && _uniq_var_303)) {
(_uniq_var_300 = false);
var _uniq_var_302 = globalDefine(expr[0][0], expr);
_uniq_var_302;
(_uniq_var_301 = (ret = _uniq_var_302));

};
if (_uniq_var_300) {
var _uniq_var_304 = flattenField(expr[0], define);
_uniq_var_304;
(expr[0] = _uniq_var_304);
(_uniq_var_301 = (ret = expr));

};
_uniq_var_301;
return ret;
};_uniq_var_576.__lix_func__ = true;return _uniq_var_576;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_577 = function (expr, define) {var _uniq_var_305 = flatten(expr[2], define);
_uniq_var_305;
(expr[2] = _uniq_var_305);
return expr;
};_uniq_var_577.__lix_func__ = true;return _uniq_var_577;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_579 = function (expr, define) {var _uniq_var_307 = map(expr[0], (function () {var _uniq_var_578 = function (i) {var _uniq_var_306 = flattenProperty(i, define);
_uniq_var_306;
return _uniq_var_306;
};_uniq_var_578.__lix_func__ = true;return _uniq_var_578;})());
_uniq_var_307;
(expr[0] = _uniq_var_307);
return expr;
};_uniq_var_579.__lix_func__ = true;return _uniq_var_579;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_581 = function (expr, define) {var _uniq_var_309 = map(expr[0], (function () {var _uniq_var_580 = function (i) {var _uniq_var_308 = flatten(i, define);
_uniq_var_308;
return _uniq_var_308;
};_uniq_var_580.__lix_func__ = true;return _uniq_var_580;})());
_uniq_var_309;
(expr[0] = _uniq_var_309);
return expr;
};_uniq_var_581.__lix_func__ = true;return _uniq_var_581;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_582 = function (expr, define) {var _uniq_var_310 = flatten(expr[2], define);
_uniq_var_310;
(expr[2] = _uniq_var_310);
return expr;
};_uniq_var_582.__lix_func__ = true;return _uniq_var_582;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_583 = function (expr, define) {var _uniq_var_311 = true;
_uniq_var_311;
var _uniq_var_312 = null;
_uniq_var_312;
var _uniq_var_315 = __eq__(expr[1], '{.}');
_uniq_var_315;
if ((_uniq_var_311 && _uniq_var_315)) {
(_uniq_var_311 = false);
var _uniq_var_313 = flattenFieldAccess(expr[0], define);
_uniq_var_313;
(expr[0] = _uniq_var_313);
var _uniq_var_314 = flattenField(expr[2], define);
_uniq_var_314;
(_uniq_var_312 = (expr[2] = _uniq_var_314));

};
if (_uniq_var_311) {
var _uniq_var_316 = flatten(expr, define);
_uniq_var_316;
(_uniq_var_312 = (expr = _uniq_var_316));

};
_uniq_var_312;
return expr;
};_uniq_var_583.__lix_func__ = true;return _uniq_var_583;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_584 = function (expr, define) {return expr;
};_uniq_var_584.__lix_func__ = true;return _uniq_var_584;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_585 = function (expr, define) {var _uniq_var_317 = flatten(expr[0], define);
_uniq_var_317;
return _uniq_var_317;
};_uniq_var_585.__lix_func__ = true;return _uniq_var_585;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_599 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_598 = function (statement, tmpVarName) {var _uniq_var_318 = true;
_uniq_var_318;
var _uniq_var_319 = null;
_uniq_var_319;
var _uniq_var_320 = __eq__(statement, undefined);
_uniq_var_320;
if ((_uniq_var_318 && _uniq_var_320)) {
(_uniq_var_318 = false);
(_uniq_var_319 = data);

};
var _uniq_var_322 = __eq__(tmpVarName, true);
_uniq_var_322;
if ((_uniq_var_318 && _uniq_var_322)) {
(_uniq_var_318 = false);
var _uniq_var_321 = (function () {var _uniq_var_588 = function (_uniq_var_586, _uniq_var_587) {
if (typeof _uniq_var_586.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_586.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_586.push.apply(_uniq_var_586, arguments);
} else if (_uniq_var_586.push !== undefined) {
if (_uniq_var_587 === undefined) {
return _uniq_var_586.push;
}
_uniq_var_586.push = _uniq_var_587;
}return _uniq_var_586;
};_uniq_var_588.__lix_func__ = true;return _uniq_var_588;})()(data, statement);
_uniq_var_321;
(_uniq_var_319 = _uniq_var_321);

};
var _uniq_var_326 = __eq__(tmpVarName, undefined);
_uniq_var_326;
if ((_uniq_var_318 && _uniq_var_326)) {
(_uniq_var_318 = false);
var _uniq_var_323 = call(getUniqVarName);
_uniq_var_323;
var varName = _uniq_var_323;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_324 = (function () {var _uniq_var_591 = function (_uniq_var_589, _uniq_var_590) {
if (typeof _uniq_var_589.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_589.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_589.push.apply(_uniq_var_589, arguments);
} else if (_uniq_var_589.push !== undefined) {
if (_uniq_var_590 === undefined) {
return _uniq_var_589.push;
}
_uniq_var_589.push = _uniq_var_590;
}return _uniq_var_589;
};_uniq_var_591.__lix_func__ = true;return _uniq_var_591;})()(data, statement);
_uniq_var_324;
_uniq_var_324;
var _uniq_var_325 = (function () {var _uniq_var_594 = function (_uniq_var_592, _uniq_var_593) {
if (typeof _uniq_var_592.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_592.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_592.push.apply(_uniq_var_592, arguments);
} else if (_uniq_var_592.push !== undefined) {
if (_uniq_var_593 === undefined) {
return _uniq_var_592.push;
}
_uniq_var_592.push = _uniq_var_593;
}return _uniq_var_592;
};_uniq_var_594.__lix_func__ = true;return _uniq_var_594;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_325;
_uniq_var_325;
(_uniq_var_319 = lixVar);

};
var _uniq_var_329 = __eq__(tmpVarName, 'new');
_uniq_var_329;
if ((_uniq_var_318 && _uniq_var_329)) {
(_uniq_var_318 = false);
var _uniq_var_327 = call(getUniqVarName);
_uniq_var_327;
var varName = _uniq_var_327;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_328 = (function () {var _uniq_var_597 = function (_uniq_var_595, _uniq_var_596) {
if (typeof _uniq_var_595.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_595.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_595.push.apply(_uniq_var_595, arguments);
} else if (_uniq_var_595.push !== undefined) {
if (_uniq_var_596 === undefined) {
return _uniq_var_595.push;
}
_uniq_var_595.push = _uniq_var_596;
}return _uniq_var_595;
};_uniq_var_597.__lix_func__ = true;return _uniq_var_597;})()(data, [lixVar, ':=', statement]);
_uniq_var_328;
_uniq_var_328;
(_uniq_var_319 = lixVar);

};
return _uniq_var_319;
};_uniq_var_598.__lix_func__ = true;return _uniq_var_598;})();
};_uniq_var_599.__lix_func__ = true;return _uniq_var_599;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_611 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_600 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_330 = true;
_uniq_var_330;
var _uniq_var_331 = null;
_uniq_var_331;
var _uniq_var_333 = seqCtx;
_uniq_var_333;
if (_uniq_var_333) {
var _uniq_var_334 = parseInt(index);
_uniq_var_334;
var _uniq_var_335 = __sub__(expr[0].length, 1);
_uniq_var_335;
var _uniq_var_336 = __eq__(_uniq_var_334, _uniq_var_335);
_uniq_var_336;
(_uniq_var_333 = _uniq_var_336);

};
if ((_uniq_var_330 && _uniq_var_333)) {
(_uniq_var_330 = false);
var _uniq_var_332 = seqCtx(stmt);
_uniq_var_332;
var ret = _uniq_var_332;
ret;
(_uniq_var_331 = ret);

};
_uniq_var_331;
return ret;
};_uniq_var_600.__lix_func__ = true;return _uniq_var_600;})();
ctx;
ctx;
var _uniq_var_363 = foreach(expr[0], (function () {var _uniq_var_610 = function (item, index) {var _uniq_var_337 = call(statementFlattenGenerator);
_uniq_var_337;
var exprDefine = _uniq_var_337;
exprDefine;
exprDefine;
var _uniq_var_338 = flatten(item, exprDefine);
_uniq_var_338;
var itemRet = _uniq_var_338;
itemRet;
itemRet;
var _uniq_var_339 = call(exprDefine);
_uniq_var_339;
var _uniq_var_340 = (function () {var _uniq_var_603 = function (_uniq_var_601, _uniq_var_602) {
if (typeof _uniq_var_601.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_601.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_601.concat.apply(_uniq_var_601, arguments);
} else if (_uniq_var_601.concat !== undefined) {
if (_uniq_var_602 === undefined) {
return _uniq_var_601.concat;
}
_uniq_var_601.concat = _uniq_var_602;
}return _uniq_var_601;
};_uniq_var_603.__lix_func__ = true;return _uniq_var_603;})()(ret, _uniq_var_339);
_uniq_var_340;
(ret = _uniq_var_340);
var _uniq_var_341 = ctx(itemRet, index);
_uniq_var_341;
var stmtRet = _uniq_var_341;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_604 = function (expr) {var _uniq_var_342 = __eq__(expr[1], '{atomic}');
_uniq_var_342;
var _uniq_var_343 = _uniq_var_342;
_uniq_var_343;
if (_uniq_var_343) {
var _uniq_var_344 = __ne__(expr[3], undefined);
_uniq_var_344;
(_uniq_var_343 = _uniq_var_344);

};
return _uniq_var_343;
};_uniq_var_604.__lix_func__ = true;return _uniq_var_604;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_605 = function (expr) {var _uniq_var_345 = __eq__(expr[1], '{atomic}');
_uniq_var_345;
var _uniq_var_346 = _uniq_var_345;
_uniq_var_346;
if (_uniq_var_346) {
var _uniq_var_347 = __eq__(expr[3], undefined);
_uniq_var_347;
(_uniq_var_346 = _uniq_var_347);

};
return _uniq_var_346;
};_uniq_var_605.__lix_func__ = true;return _uniq_var_605;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_606 = function (expr) {var _uniq_var_348 = isRealVar(expr);
_uniq_var_348;
var _uniq_var_349 = _uniq_var_348;
_uniq_var_349;
if (not(_uniq_var_349)) {
var _uniq_var_350 = __ne__(expr[1], 'if');
_uniq_var_350;
var _uniq_var_351 = _uniq_var_350;
_uniq_var_351;
if (_uniq_var_351) {
var _uniq_var_352 = __ne__(expr[1], 'while');
_uniq_var_352;
(_uniq_var_351 = _uniq_var_352);

};
(_uniq_var_349 = _uniq_var_351);

};
return _uniq_var_349;
};_uniq_var_606.__lix_func__ = true;return _uniq_var_606;})();
isRealExpr;
isRealExpr;
var _uniq_var_353 = true;
_uniq_var_353;
var _uniq_var_354 = null;
_uniq_var_354;
var _uniq_var_359 = __ne__(stmtRet[1], '{empty}');
_uniq_var_359;
var _uniq_var_360 = _uniq_var_359;
_uniq_var_360;
if (_uniq_var_360) {
var _uniq_var_361 = isTmpVar(stmtRet);
_uniq_var_361;
var _uniq_var_362 = not(_uniq_var_361);
_uniq_var_362;
(_uniq_var_360 = _uniq_var_362);

};
if ((_uniq_var_353 && _uniq_var_360)) {
(_uniq_var_353 = false);
var _uniq_var_355 = true;
_uniq_var_355;
var _uniq_var_356 = null;
_uniq_var_356;
var _uniq_var_357 = isRealExpr(stmtRet);
_uniq_var_357;
if ((_uniq_var_355 && _uniq_var_357)) {
(_uniq_var_355 = false);
(_uniq_var_356 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_356;
var _uniq_var_358 = (function () {var _uniq_var_609 = function (_uniq_var_607, _uniq_var_608) {
if (typeof _uniq_var_607.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_607.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_607.push.apply(_uniq_var_607, arguments);
} else if (_uniq_var_607.push !== undefined) {
if (_uniq_var_608 === undefined) {
return _uniq_var_607.push;
}
_uniq_var_607.push = _uniq_var_608;
}return _uniq_var_607;
};_uniq_var_609.__lix_func__ = true;return _uniq_var_609;})()(ret, stmtRet);
_uniq_var_358;
(_uniq_var_354 = _uniq_var_358);

};
return _uniq_var_354;
};_uniq_var_610.__lix_func__ = true;return _uniq_var_610;})());
_uniq_var_363;
_uniq_var_363;
(expr[0] = ret);
return expr;
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_618 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_364 = flatten(expr[0], define);
_uniq_var_364;
var ret = _uniq_var_364;
ret;
ret;
var _uniq_var_365 = call(globalDefine);
_uniq_var_365;
var _uniq_var_366 = (function () {var _uniq_var_614 = function (_uniq_var_612, _uniq_var_613) {
if (typeof _uniq_var_612.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_612.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_612.concat.apply(_uniq_var_612, arguments);
} else if (_uniq_var_612.concat !== undefined) {
if (_uniq_var_613 === undefined) {
return _uniq_var_612.concat;
}
_uniq_var_612.concat = _uniq_var_613;
}return _uniq_var_612;
};_uniq_var_614.__lix_func__ = true;return _uniq_var_614;})()(trapExpr, _uniq_var_365);
_uniq_var_366;
var _uniq_var_367 = (function () {var _uniq_var_617 = function (_uniq_var_615, _uniq_var_616) {
if (typeof _uniq_var_615.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_615.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_615.concat.apply(_uniq_var_615, arguments);
} else if (_uniq_var_615.concat !== undefined) {
if (_uniq_var_616 === undefined) {
return _uniq_var_615.concat;
}
_uniq_var_615.concat = _uniq_var_616;
}return _uniq_var_615;
};_uniq_var_617.__lix_func__ = true;return _uniq_var_617;})()(_uniq_var_366, ret[0]);
_uniq_var_367;
(ret[0] = _uniq_var_367);
return [ret, '{start}'];
};_uniq_var_618.__lix_func__ = true;return _uniq_var_618;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_622 = function (expr, define) {var _uniq_var_368 = true;
_uniq_var_368;
var _uniq_var_369 = null;
_uniq_var_369;
var _uniq_var_371 = __eq__(expr[2], '{var}');
_uniq_var_371;
if ((_uniq_var_368 && _uniq_var_371)) {
(_uniq_var_368 = false);
var _uniq_var_370 = (function () {var _uniq_var_621 = function (_uniq_var_619, _uniq_var_620) {
if (typeof _uniq_var_619.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_619.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_619.join.apply(_uniq_var_619, arguments);
} else if (_uniq_var_619.join !== undefined) {
if (_uniq_var_620 === undefined) {
return _uniq_var_619.join;
}
_uniq_var_619.join = _uniq_var_620;
}return _uniq_var_619;
};_uniq_var_621.__lix_func__ = true;return _uniq_var_621;})()(['"', expr[0], '"'], '');
_uniq_var_370;
var name = [_uniq_var_370, '{atomic}'];
name;
(_uniq_var_369 = name);

};
var _uniq_var_373 = __eq__(expr[2], '{index}');
_uniq_var_373;
if ((_uniq_var_368 && _uniq_var_373)) {
(_uniq_var_368 = false);
var _uniq_var_372 = flatten(expr[0], define);
_uniq_var_372;
var name = _uniq_var_372;
name;
(_uniq_var_369 = name);

};
_uniq_var_369;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_374 = define(moduleExpr);
_uniq_var_374;
return _uniq_var_374;
};_uniq_var_622.__lix_func__ = true;return _uniq_var_622;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_623 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_623.__lix_func__ = true;return _uniq_var_623;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_624 = function (expr, define) {return expr;
};_uniq_var_624.__lix_func__ = true;return _uniq_var_624;})();
flattenAmpersand;
flattenAmpersand;
var flattenAtomicDestructor = (function () {var _uniq_var_625 = function (arg) {return [];
};_uniq_var_625.__lix_func__ = true;return _uniq_var_625;})();
flattenAtomicDestructor;
flattenAtomicDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_626 = function (expr) {var _uniq_var_375 = transformVarName(expr[0]);
_uniq_var_375;
var varName = _uniq_var_375;
varName;
varName;
var _uniq_var_376 = true;
_uniq_var_376;
var _uniq_var_377 = null;
_uniq_var_377;
var _uniq_var_378 = __eq__(expr[3], "{tmp}");
_uniq_var_378;
if ((_uniq_var_376 && _uniq_var_378)) {
(_uniq_var_376 = false);
(_uniq_var_377 = (varName = expr[0]));

};
_uniq_var_377;
return varName;
};_uniq_var_626.__lix_func__ = true;return _uniq_var_626;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flatternArrayDestructor = (function () {var _uniq_var_637 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_385 = foreach(args, (function () {var _uniq_var_636 = function (item, index) {var _uniq_var_379 = getFnArgExpr(item[0]);
_uniq_var_379;
var _uniq_var_380 = getAtomicExprVarName(_uniq_var_379);
_uniq_var_380;
var varName = _uniq_var_380;
varName;
varName;
var _uniq_var_381 = (function () {var _uniq_var_629 = function (_uniq_var_627, _uniq_var_628) {
if (typeof _uniq_var_627.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_627.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_627.join.apply(_uniq_var_627, arguments);
} else if (_uniq_var_627.join !== undefined) {
if (_uniq_var_628 === undefined) {
return _uniq_var_627.join;
}
_uniq_var_627.join = _uniq_var_628;
}return _uniq_var_627;
};_uniq_var_629.__lix_func__ = true;return _uniq_var_629;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_381;
var _uniq_var_382 = (function () {var _uniq_var_632 = function (_uniq_var_630, _uniq_var_631) {
if (typeof _uniq_var_630.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_630.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_630.push.apply(_uniq_var_630, arguments);
} else if (_uniq_var_630.push !== undefined) {
if (_uniq_var_631 === undefined) {
return _uniq_var_630.push;
}
_uniq_var_630.push = _uniq_var_631;
}return _uniq_var_630;
};_uniq_var_632.__lix_func__ = true;return _uniq_var_632;})()(ret, _uniq_var_381);
_uniq_var_382;
_uniq_var_382;
var _uniq_var_383 = flattenDestructor(item, item[0]);
_uniq_var_383;
var _uniq_var_384 = (function () {var _uniq_var_635 = function (_uniq_var_633, _uniq_var_634) {
if (typeof _uniq_var_633.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_633.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_633.concat.apply(_uniq_var_633, arguments);
} else if (_uniq_var_633.concat !== undefined) {
if (_uniq_var_634 === undefined) {
return _uniq_var_633.concat;
}
_uniq_var_633.concat = _uniq_var_634;
}return _uniq_var_633;
};_uniq_var_635.__lix_func__ = true;return _uniq_var_635;})()(ret, _uniq_var_383);
_uniq_var_384;
return (ret = _uniq_var_384);
};_uniq_var_636.__lix_func__ = true;return _uniq_var_636;})());
_uniq_var_385;
_uniq_var_385;
return ret;
};_uniq_var_637.__lix_func__ = true;return _uniq_var_637;})();
flatternArrayDestructor;
flatternArrayDestructor;
var flattenListDestructor = (function () {var _uniq_var_638 = function (args, varName) {var _uniq_var_386 = flatternArrayDestructor(args[2], args[0][0]);
_uniq_var_386;
return _uniq_var_386;
};_uniq_var_638.__lix_func__ = true;return _uniq_var_638;})();
flattenListDestructor;
flattenListDestructor;
var flattenDestructorOp = {
"{atomic}": flattenAtomicDestructor,
"{list}": flattenListDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_639 = function (hint) {var ret = flatternArrayDestructor;
ret;
ret;
var _uniq_var_387 = true;
_uniq_var_387;
var _uniq_var_388 = null;
_uniq_var_388;
if ((_uniq_var_387 && flattenDestructorOp[hint])) {
(_uniq_var_387 = false);
(_uniq_var_388 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_388;
return ret;
};_uniq_var_639.__lix_func__ = true;return _uniq_var_639;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var flattenDestructor = (function () {var _uniq_var_640 = function (args, varName) {var _uniq_var_389 = getFlattenDestructorOp(args[1]);
_uniq_var_389;
var _uniq_var_390 = call(_uniq_var_389, args, varName);
_uniq_var_390;
return _uniq_var_390;
};_uniq_var_640.__lix_func__ = true;return _uniq_var_640;})();
flattenDestructor;
flattenDestructor;
var flattenArgumentsDestructor = (function () {var _uniq_var_645 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_393 = foreach(args, (function () {var _uniq_var_644 = function (item) {var _uniq_var_391 = flattenDestructor(item, item[0]);
_uniq_var_391;
var _uniq_var_392 = (function () {var _uniq_var_643 = function (_uniq_var_641, _uniq_var_642) {
if (typeof _uniq_var_641.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_641.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_641.concat.apply(_uniq_var_641, arguments);
} else if (_uniq_var_641.concat !== undefined) {
if (_uniq_var_642 === undefined) {
return _uniq_var_641.concat;
}
_uniq_var_641.concat = _uniq_var_642;
}return _uniq_var_641;
};_uniq_var_643.__lix_func__ = true;return _uniq_var_643;})()(ret, _uniq_var_391);
_uniq_var_392;
return (ret = _uniq_var_392);
};_uniq_var_644.__lix_func__ = true;return _uniq_var_644;})());
_uniq_var_393;
_uniq_var_393;
return ret;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFnArgExpr = (function () {var _uniq_var_646 = function (expr) {var _uniq_var_394 = true;
_uniq_var_394;
var _uniq_var_395 = null;
_uniq_var_395;
var _uniq_var_396 = __eq__(expr[1], "{atomic}");
_uniq_var_396;
if ((_uniq_var_394 && _uniq_var_396)) {
(_uniq_var_394 = false);
(_uniq_var_395 = expr);

};
if (_uniq_var_394) {
(_uniq_var_395 = expr[0]);

};
return _uniq_var_395;
};_uniq_var_646.__lix_func__ = true;return _uniq_var_646;})();
getFnArgExpr;
getFnArgExpr;
var getFuncArgsNameList = (function () {var _uniq_var_651 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_399 = foreach(args, (function () {var _uniq_var_650 = function (item) {var _uniq_var_397 = getFnArgExpr(item);
_uniq_var_397;
var _uniq_var_398 = (function () {var _uniq_var_649 = function (_uniq_var_647, _uniq_var_648) {
if (typeof _uniq_var_647.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_647.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_647.push.apply(_uniq_var_647, arguments);
} else if (_uniq_var_647.push !== undefined) {
if (_uniq_var_648 === undefined) {
return _uniq_var_647.push;
}
_uniq_var_647.push = _uniq_var_648;
}return _uniq_var_647;
};_uniq_var_649.__lix_func__ = true;return _uniq_var_649;})()(ret, _uniq_var_397);
_uniq_var_398;
return _uniq_var_398;
};_uniq_var_650.__lix_func__ = true;return _uniq_var_650;})());
_uniq_var_399;
_uniq_var_399;
return ret;
};_uniq_var_651.__lix_func__ = true;return _uniq_var_651;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_652 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_400 = flattenArgumentsDestructor(expr[2]);
_uniq_var_400;
var destructor = _uniq_var_400;
destructor;
destructor;
var _uniq_var_401 = getFuncArgsNameList(expr[2]);
_uniq_var_401;
var funcArgsNameList = _uniq_var_401;
funcArgsNameList;
funcArgsNameList;
var _uniq_var_402 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_402;
var func = _uniq_var_402;
func;
func;
return [expr[0], "{fn}", func];
};_uniq_var_652.__lix_func__ = true;return _uniq_var_652;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_653 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_403 = flatten(expr, define);
_uniq_var_403;
return _uniq_var_403;
};_uniq_var_653.__lix_func__ = true;return _uniq_var_653;})();
flattenAsterisk;
flattenAsterisk;
var identity = (function () {var _uniq_var_654 = function (x) {return x;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})();
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
var flattenOp = (function () {var _uniq_var_655 = function (hint) {var _uniq_var_404 = true;
_uniq_var_404;
var _uniq_var_405 = null;
_uniq_var_405;
if ((_uniq_var_404 && flattenOpTable[hint])) {
(_uniq_var_404 = false);
(_uniq_var_405 = flattenOpTable[hint]);

};
if (_uniq_var_404) {
(_uniq_var_405 = flattenExpr);

};
return _uniq_var_405;
};_uniq_var_655.__lix_func__ = true;return _uniq_var_655;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_656 = function (expr, define, ctx) {var _uniq_var_406 = flattenOp(expr[1]);
_uniq_var_406;
var _uniq_var_407 = _uniq_var_406(expr, define, ctx);
_uniq_var_407;
return _uniq_var_407;
};_uniq_var_656.__lix_func__ = true;return _uniq_var_656;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_657 = function (i) {return i;
};_uniq_var_657.__lix_func__ = true;return _uniq_var_657;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_658 = function (i) {;
};_uniq_var_658.__lix_func__ = true;return _uniq_var_658;})(),
appendExpr: (function () {var _uniq_var_659 = function (i) {;
};_uniq_var_659.__lix_func__ = true;return _uniq_var_659;})()
};
def0;
def0;
var _uniq_var_408 = join(['s[', STEP, ']']);
_uniq_var_408;
var _uniq_var_409 = join(['s[', RET, ']']);
_uniq_var_409;
var seqFuncParamsName = {
step: _uniq_var_408,
ret: _uniq_var_409
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_666 = function (expr) {var _uniq_var_410 = map(env0, (function () {var _uniq_var_660 = function (i) {return i;
};_uniq_var_660.__lix_func__ = true;return _uniq_var_660;})());
_uniq_var_410;
var _uniq_var_411 = (function () {var _uniq_var_663 = function (_uniq_var_661, _uniq_var_662) {
if (typeof _uniq_var_661.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_661.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_661.join.apply(_uniq_var_661, arguments);
} else if (_uniq_var_661.join !== undefined) {
if (_uniq_var_662 === undefined) {
return _uniq_var_661.join;
}
_uniq_var_661.join = _uniq_var_662;
}return _uniq_var_661;
};_uniq_var_663.__lix_func__ = true;return _uniq_var_663;})()(_uniq_var_410, "\n");
_uniq_var_411;
var libs = _uniq_var_411;
libs;
libs;
var _uniq_var_412 = flatten(expr, (function () {var _uniq_var_664 = function (i) {;
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})(), (function () {var _uniq_var_665 = function (i) {return i;
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})());
_uniq_var_412;
var flattenedExpr = _uniq_var_412;
flattenedExpr;
flattenedExpr;
var _uniq_var_413 = call(env_new);
_uniq_var_413;
var _uniq_var_414 = generateStart(flattenedExpr, _uniq_var_413, ctx0, def0);
_uniq_var_414;
var code = _uniq_var_414;
code;
code;
var _uniq_var_415 = join([libs, "\n", code]);
_uniq_var_415;
return _uniq_var_415;
};_uniq_var_666.__lix_func__ = true;return _uniq_var_666;})();
compile;
compile;
(exports.compile = compile);
compile;

