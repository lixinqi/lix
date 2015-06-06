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
var join = (function () {var _uniq_var_433 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_432 = function (_uniq_var_430, _uniq_var_431) {
if (typeof _uniq_var_430.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_430.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_430.join.apply(_uniq_var_430, arguments);
} else if (_uniq_var_430.join !== undefined) {
if (_uniq_var_431 === undefined) {
return _uniq_var_430.join;
}
_uniq_var_430.join = _uniq_var_431;
}return _uniq_var_430;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})();
join;
join;
var map = (function () {var _uniq_var_438 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_437 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_436 = function (_uniq_var_434, _uniq_var_435) {
if (typeof _uniq_var_434.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_434.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_434.push.apply(_uniq_var_434, arguments);
} else if (_uniq_var_434.push !== undefined) {
if (_uniq_var_435 === undefined) {
return _uniq_var_434.push;
}
_uniq_var_434.push = _uniq_var_435;
}return _uniq_var_434;
};_uniq_var_436.__lix_func__ = true;return _uniq_var_436;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_437.__lix_func__ = true;return _uniq_var_437;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_438.__lix_func__ = true;return _uniq_var_438;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_440 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_439 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_439.__lix_func__ = true;return _uniq_var_439;})();
};_uniq_var_440.__lix_func__ = true;return _uniq_var_440;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_441 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_441.__lix_func__ = true;return _uniq_var_441;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_446 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_442 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_442.__lix_func__ = true;return _uniq_var_442;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_445 = function (_uniq_var_443, _uniq_var_444) {
if (typeof _uniq_var_443.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_443.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_443.join.apply(_uniq_var_443, arguments);
} else if (_uniq_var_443.join !== undefined) {
if (_uniq_var_444 === undefined) {
return _uniq_var_443.join;
}
_uniq_var_443.join = _uniq_var_444;
}return _uniq_var_443;
};_uniq_var_445.__lix_func__ = true;return _uniq_var_445;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_446.__lix_func__ = true;return _uniq_var_446;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_447 = function (x) {return x;
};_uniq_var_447.__lix_func__ = true;return _uniq_var_447;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_454 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_449 = function (current) {return (function () {var _uniq_var_448 = function (v, loop) {var next = current;
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
};_uniq_var_448.__lix_func__ = true;return _uniq_var_448;})();
};_uniq_var_449.__lix_func__ = true;return _uniq_var_449;})();
ctx;
ctx;
var _uniq_var_25 = map(expr[0], (function () {var _uniq_var_450 = function (item, index) {var _uniq_var_21 = call(getCount);
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
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})());
_uniq_var_25;
var _uniq_var_26 = (function () {var _uniq_var_453 = function (_uniq_var_451, _uniq_var_452) {
if (typeof _uniq_var_451.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_451.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_451.join.apply(_uniq_var_451, arguments);
} else if (_uniq_var_451.join !== undefined) {
if (_uniq_var_452 === undefined) {
return _uniq_var_451.join;
}
_uniq_var_451.join = _uniq_var_452;
}return _uniq_var_451;
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})()(_uniq_var_25, ";\n");
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
};_uniq_var_454.__lix_func__ = true;return _uniq_var_454;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_455 = function (expr, env, ctx, def) {var _uniq_var_29 = generate(expr[0], env, ctx, def);
_uniq_var_29;
var _uniq_var_30 = generate(expr[2], env, ctx, def);
_uniq_var_30;
var _uniq_var_31 = join(['(', _uniq_var_29, " || ", _uniq_var_30, ')']);
_uniq_var_31;
return _uniq_var_31;
};_uniq_var_455.__lix_func__ = true;return _uniq_var_455;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_456 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " && ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_456.__lix_func__ = true;return _uniq_var_456;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_461 = function (expr, env, ctx, def) {var _uniq_var_47 = map(expr[0], (function () {var _uniq_var_457 = function (i) {var _uniq_var_35 = true;
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
};_uniq_var_457.__lix_func__ = true;return _uniq_var_457;})());
_uniq_var_47;
var _uniq_var_48 = (function () {var _uniq_var_460 = function (_uniq_var_458, _uniq_var_459) {
if (typeof _uniq_var_458.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_458.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_458.join.apply(_uniq_var_458, arguments);
} else if (_uniq_var_458.join !== undefined) {
if (_uniq_var_459 === undefined) {
return _uniq_var_458.join;
}
_uniq_var_458.join = _uniq_var_459;
}return _uniq_var_458;
};_uniq_var_460.__lix_func__ = true;return _uniq_var_460;})()(_uniq_var_47, ' else ');
_uniq_var_48;
return _uniq_var_48;
};_uniq_var_461.__lix_func__ = true;return _uniq_var_461;})();
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
var generateAtomic = (function () {var _uniq_var_462 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_462.__lix_func__ = true;return _uniq_var_462;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_463 = function (expr, env, ctx, def) {var _uniq_var_57 = true;
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
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_464 = function (expr, env, ctx, def) {var _uniq_var_63 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_464.__lix_func__ = true;return _uniq_var_464;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_469 = function (expr, env, ctx, def) {var _uniq_var_67 = map(expr[0], (function () {var _uniq_var_465 = function (i) {var _uniq_var_66 = generateProperty(i, env, ctx, def);
_uniq_var_66;
return _uniq_var_66;
};_uniq_var_465.__lix_func__ = true;return _uniq_var_465;})());
_uniq_var_67;
var _uniq_var_68 = (function () {var _uniq_var_468 = function (_uniq_var_466, _uniq_var_467) {
if (typeof _uniq_var_466.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_466.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_466.join.apply(_uniq_var_466, arguments);
} else if (_uniq_var_466.join !== undefined) {
if (_uniq_var_467 === undefined) {
return _uniq_var_466.join;
}
_uniq_var_466.join = _uniq_var_467;
}return _uniq_var_466;
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})()(_uniq_var_67, ",\n");
_uniq_var_68;
var objectBody = _uniq_var_68;
objectBody;
objectBody;
var _uniq_var_69 = join(["{\n", objectBody, "\n}"]);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_470 = function (name) {var _uniq_var_70 = true;
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
};_uniq_var_470.__lix_func__ = true;return _uniq_var_470;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_471 = function (expr) {var _uniq_var_82 = true;
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
};_uniq_var_471.__lix_func__ = true;return _uniq_var_471;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_472 = function (expr, env, ctx, def) {var _uniq_var_88 = true;
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
};_uniq_var_472.__lix_func__ = true;return _uniq_var_472;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_473 = function (expr, env, ctx, def) {var _uniq_var_96 = true;
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
};_uniq_var_473.__lix_func__ = true;return _uniq_var_473;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_478 = function (expr, env, ctx, def) {var _uniq_var_105 = map(expr[0], (function () {var _uniq_var_474 = function (i) {var _uniq_var_104 = generate(i, env, ctx, def);
_uniq_var_104;
return _uniq_var_104;
};_uniq_var_474.__lix_func__ = true;return _uniq_var_474;})());
_uniq_var_105;
var _uniq_var_106 = (function () {var _uniq_var_477 = function (_uniq_var_475, _uniq_var_476) {
if (typeof _uniq_var_475.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_475.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_475.join.apply(_uniq_var_475, arguments);
} else if (_uniq_var_475.join !== undefined) {
if (_uniq_var_476 === undefined) {
return _uniq_var_475.join;
}
_uniq_var_475.join = _uniq_var_476;
}return _uniq_var_475;
};_uniq_var_477.__lix_func__ = true;return _uniq_var_477;})()(_uniq_var_105, ', ');
_uniq_var_106;
var arrayBody = _uniq_var_106;
arrayBody;
arrayBody;
var _uniq_var_107 = join(['[', arrayBody, ']']);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_478.__lix_func__ = true;return _uniq_var_478;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_479 = function (expr, env, ctx) {var _uniq_var_108 = call(getUniqVarName);
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
};_uniq_var_479.__lix_func__ = true;return _uniq_var_479;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_480 = function (expr, env, ctx, def) {var _uniq_var_114 = generate(expr[0], env, ctx, def);
_uniq_var_114;
var _uniq_var_115 = generate(expr[2], env, ctx, def);
_uniq_var_115;
var _uniq_var_116 = ctx(_uniq_var_115, true);
_uniq_var_116;
var _uniq_var_117 = join(['while (', _uniq_var_114, ') {\n', _uniq_var_116, "\n}"]);
_uniq_var_117;
return _uniq_var_117;
};_uniq_var_480.__lix_func__ = true;return _uniq_var_480;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_481 = function (expr, env, ctx) {return 'break';
};_uniq_var_481.__lix_func__ = true;return _uniq_var_481;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_482 = function (expr, env, ctx, def) {return "";
};_uniq_var_482.__lix_func__ = true;return _uniq_var_482;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_483 = function (expr, env, ctx, def) {var _uniq_var_118 = getVarName(expr[0]);
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
};_uniq_var_483.__lix_func__ = true;return _uniq_var_483;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_484 = function (expr, env, ctx, def) {var _uniq_var_122 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_122;
return _uniq_var_122;
};_uniq_var_484.__lix_func__ = true;return _uniq_var_484;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_488 = function (expr, env, ctx, def) {var _uniq_var_123 = true;
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
var _uniq_var_134 = (function () {var _uniq_var_487 = function (_uniq_var_485, _uniq_var_486) {
if (typeof _uniq_var_485.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_485.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_485.join.apply(_uniq_var_485, arguments);
} else if (_uniq_var_485.join !== undefined) {
if (_uniq_var_486 === undefined) {
return _uniq_var_485.join;
}
_uniq_var_485.join = _uniq_var_486;
}return _uniq_var_485;
};_uniq_var_487.__lix_func__ = true;return _uniq_var_487;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_488.__lix_func__ = true;return _uniq_var_488;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_489 = function (expr, env, ctx, def) {var _uniq_var_135 = getVarName(expr[0]);
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
};_uniq_var_489.__lix_func__ = true;return _uniq_var_489;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_496 = function (expr, env, ctx, def) {var _uniq_var_145 = true;
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
var _uniq_var_154 = (function () {var _uniq_var_492 = function (_uniq_var_490, _uniq_var_491) {
if (typeof _uniq_var_490.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_490.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_490.join.apply(_uniq_var_490, arguments);
} else if (_uniq_var_490.join !== undefined) {
if (_uniq_var_491 === undefined) {
return _uniq_var_490.join;
}
_uniq_var_490.join = _uniq_var_491;
}return _uniq_var_490;
};_uniq_var_492.__lix_func__ = true;return _uniq_var_492;})()(expr[3], ";\n");
_uniq_var_154;
var _uniq_var_155 = call(def.defineVar);
_uniq_var_155;
var _uniq_var_156 = call(def.appendExpr);
_uniq_var_156;
var _uniq_var_157 = (function () {var _uniq_var_495 = function (_uniq_var_493, _uniq_var_494) {
if (typeof _uniq_var_493.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_493.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_493.join.apply(_uniq_var_493, arguments);
} else if (_uniq_var_493.join !== undefined) {
if (_uniq_var_494 === undefined) {
return _uniq_var_493.join;
}
_uniq_var_493.join = _uniq_var_494;
}return _uniq_var_493;
};_uniq_var_495.__lix_func__ = true;return _uniq_var_495;})()(['(function (', args, ') {\n', 'var ', _uniq_var_153, ' = arguments;\n', _uniq_var_154, ";\n", _uniq_var_155, ";\n", _uniq_var_156, ";\n", 'return ', body, ";\n", '})'], '');
_uniq_var_157;
return _uniq_var_157;
};_uniq_var_496.__lix_func__ = true;return _uniq_var_496;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_503 = function (expr0, env, ctx, prevDef) {var _uniq_var_158 = call(getUniqVarName);
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
var _uniq_var_168 = (function () {var _uniq_var_499 = function (_uniq_var_497, _uniq_var_498) {
if (typeof _uniq_var_497.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_497.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_497.join.apply(_uniq_var_497, arguments);
} else if (_uniq_var_497.join !== undefined) {
if (_uniq_var_498 === undefined) {
return _uniq_var_497.join;
}
_uniq_var_497.join = _uniq_var_498;
}return _uniq_var_497;
};_uniq_var_499.__lix_func__ = true;return _uniq_var_499;})()(expr[3], ";\n");
_uniq_var_168;
var _uniq_var_169 = call(def.defineVar);
_uniq_var_169;
var _uniq_var_170 = call(def.appendExpr);
_uniq_var_170;
var _uniq_var_171 = (function () {var _uniq_var_502 = function (_uniq_var_500, _uniq_var_501) {
if (typeof _uniq_var_500.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_500.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_500.join.apply(_uniq_var_500, arguments);
} else if (_uniq_var_500.join !== undefined) {
if (_uniq_var_501 === undefined) {
return _uniq_var_500.join;
}
_uniq_var_500.join = _uniq_var_501;
}return _uniq_var_500;
};_uniq_var_502.__lix_func__ = true;return _uniq_var_502;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_167, ' = arguments;\n', _uniq_var_168, ";\n", _uniq_var_169, ";\n", _uniq_var_170, ";\n", 'return ', body, ";\n", '}'], '');
_uniq_var_171;
var _uniq_var_172 = prevDef.appendExpr(_uniq_var_171);
_uniq_var_172;
_uniq_var_172;
var _uniq_var_173 = generate([expr0[0], ":=", [funcName, "{atomic}", "{var}", "{tmp}"]], env, ctx, prevDef);
_uniq_var_173;
return _uniq_var_173;
};_uniq_var_503.__lix_func__ = true;return _uniq_var_503;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_505 = function (expr, env, ctx, def) {var _uniq_var_174 = generate(expr[1], env, ctx0, def);
_uniq_var_174;
var func = _uniq_var_174;
func;
func;
var _uniq_var_175 = generate(expr[0], env, ctx0, def);
_uniq_var_175;
var args = _uniq_var_175;
args;
args;
var _uniq_var_181 = foreach(expr, (function () {var _uniq_var_504 = function (item, index) {var _uniq_var_176 = true;
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
};_uniq_var_504.__lix_func__ = true;return _uniq_var_504;})());
_uniq_var_181;
_uniq_var_181;
var _uniq_var_182 = join([func, '(', args, ')']);
_uniq_var_182;
var _uniq_var_183 = ctx(_uniq_var_182);
_uniq_var_183;
return _uniq_var_183;
};_uniq_var_505.__lix_func__ = true;return _uniq_var_505;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_527 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_506 = function (d) {return (destructed = d);
};_uniq_var_506.__lix_func__ = true;return _uniq_var_506;})(),
desctructedVars: (function () {var _uniq_var_510 = function () {var _uniq_var_184 = (function () {var _uniq_var_509 = function (_uniq_var_507, _uniq_var_508) {
if (typeof _uniq_var_507.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_507.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_507.join.apply(_uniq_var_507, arguments);
} else if (_uniq_var_507.join !== undefined) {
if (_uniq_var_508 === undefined) {
return _uniq_var_507.join;
}
_uniq_var_507.join = _uniq_var_508;
}return _uniq_var_507;
};_uniq_var_509.__lix_func__ = true;return _uniq_var_509;})()(destructed, ";\n");
_uniq_var_184;
return _uniq_var_184;
};_uniq_var_510.__lix_func__ = true;return _uniq_var_510;})(),
defineFn: (function () {var _uniq_var_514 = function (name, func, condition) {var _uniq_var_185 = true;
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
var _uniq_var_188 = (function () {var _uniq_var_513 = function (_uniq_var_511, _uniq_var_512) {
if (typeof _uniq_var_511.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_511.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_511.push.apply(_uniq_var_511, arguments);
} else if (_uniq_var_511.push !== undefined) {
if (_uniq_var_512 === undefined) {
return _uniq_var_511.push;
}
_uniq_var_511.push = _uniq_var_512;
}return _uniq_var_511;
};_uniq_var_513.__lix_func__ = true;return _uniq_var_513;})()(fns[name], {
func: func,
condition: condition
});
_uniq_var_188;
return _uniq_var_188;
};_uniq_var_514.__lix_func__ = true;return _uniq_var_514;})(),
defineVar: (function () {var _uniq_var_519 = function (v) {var _uniq_var_189 = true;
_uniq_var_189;
var _uniq_var_190 = null;
_uniq_var_190;
if ((_uniq_var_189 && v)) {
(_uniq_var_189 = false);
(_uniq_var_190 = (vars[v] = v));

};
if (_uniq_var_189) {
var _uniq_var_191 = map(vars, (function () {var _uniq_var_515 = function (i) {return i;
};_uniq_var_515.__lix_func__ = true;return _uniq_var_515;})());
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
var _uniq_var_194 = (function () {var _uniq_var_518 = function (_uniq_var_516, _uniq_var_517) {
if (typeof _uniq_var_516.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_516.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_516.join.apply(_uniq_var_516, arguments);
} else if (_uniq_var_516.join !== undefined) {
if (_uniq_var_517 === undefined) {
return _uniq_var_516.join;
}
_uniq_var_516.join = _uniq_var_517;
}return _uniq_var_516;
};_uniq_var_518.__lix_func__ = true;return _uniq_var_518;})()(vecs, ', ');
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
};_uniq_var_519.__lix_func__ = true;return _uniq_var_519;})(),
appendExpr: (function () {var _uniq_var_526 = function (v) {var _uniq_var_197 = true;
_uniq_var_197;
var _uniq_var_198 = null;
_uniq_var_198;
if ((_uniq_var_197 && v)) {
(_uniq_var_197 = false);
var _uniq_var_199 = (function () {var _uniq_var_522 = function (_uniq_var_520, _uniq_var_521) {
if (typeof _uniq_var_520.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_520.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_520.push.apply(_uniq_var_520, arguments);
} else if (_uniq_var_520.push !== undefined) {
if (_uniq_var_521 === undefined) {
return _uniq_var_520.push;
}
_uniq_var_520.push = _uniq_var_521;
}return _uniq_var_520;
};_uniq_var_522.__lix_func__ = true;return _uniq_var_522;})()(funcs, v);
_uniq_var_199;
(_uniq_var_198 = _uniq_var_199);

};
if (_uniq_var_197) {
var _uniq_var_200 = (function () {var _uniq_var_525 = function (_uniq_var_523, _uniq_var_524) {
if (typeof _uniq_var_523.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_523.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_523.join.apply(_uniq_var_523, arguments);
} else if (_uniq_var_523.join !== undefined) {
if (_uniq_var_524 === undefined) {
return _uniq_var_523.join;
}
_uniq_var_523.join = _uniq_var_524;
}return _uniq_var_523;
};_uniq_var_525.__lix_func__ = true;return _uniq_var_525;})()(funcs, ';\n');
_uniq_var_200;
(_uniq_var_198 = _uniq_var_200);

};
return _uniq_var_198;
};_uniq_var_526.__lix_func__ = true;return _uniq_var_526;})()
};
};_uniq_var_527.__lix_func__ = true;return _uniq_var_527;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_528 = function (expr, env, ctx, def) {var _uniq_var_201 = call(GenerateDefNew);
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
};_uniq_var_528.__lix_func__ = true;return _uniq_var_528;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_529 = function (expr, env, ctx, def) {var _uniq_var_207 = generate(expr[0], env, ctx, def);
_uniq_var_207;
return _uniq_var_207;
};_uniq_var_529.__lix_func__ = true;return _uniq_var_529;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_530 = function (expr, env, ctx, def) {var _uniq_var_208 = join(['"', expr[0], '"']);
_uniq_var_208;
return _uniq_var_208;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_531 = function (expr, env, ctx, def) {var _uniq_var_209 = generate(expr[0], env, ctx, def);
_uniq_var_209;
var _uniq_var_210 = join(['("', expr[2], '" + ', _uniq_var_209, ')']);
_uniq_var_210;
return _uniq_var_210;
};_uniq_var_531.__lix_func__ = true;return _uniq_var_531;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_536 = function (expr, env, ctx, def) {var _uniq_var_212 = map(expr[0], (function () {var _uniq_var_532 = function (i) {var _uniq_var_211 = generate(i, env, ctx, def);
_uniq_var_211;
return _uniq_var_211;
};_uniq_var_532.__lix_func__ = true;return _uniq_var_532;})());
_uniq_var_212;
var _uniq_var_213 = (function () {var _uniq_var_535 = function (_uniq_var_533, _uniq_var_534) {
if (typeof _uniq_var_533.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_533.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_533.join.apply(_uniq_var_533, arguments);
} else if (_uniq_var_533.join !== undefined) {
if (_uniq_var_534 === undefined) {
return _uniq_var_533.join;
}
_uniq_var_533.join = _uniq_var_534;
}return _uniq_var_533;
};_uniq_var_535.__lix_func__ = true;return _uniq_var_535;})()(_uniq_var_212, ',');
_uniq_var_213;
var path = _uniq_var_213;
path;
path;
var _uniq_var_214 = join(['[', path, '].join("/")']);
_uniq_var_214;
return _uniq_var_214;
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_540 = function (expr, env, ctx, def) {var _uniq_var_215 = (function () {var _uniq_var_539 = function (_uniq_var_537, _uniq_var_538) {
if (typeof _uniq_var_537.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_537.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_537.join.apply(_uniq_var_537, arguments);
} else if (_uniq_var_537.join !== undefined) {
if (_uniq_var_538 === undefined) {
return _uniq_var_537.join;
}
_uniq_var_537.join = _uniq_var_538;
}return _uniq_var_537;
};_uniq_var_539.__lix_func__ = true;return _uniq_var_539;})()(['"', expr[0], '"'], '');
_uniq_var_215;
var name = [_uniq_var_215, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_540.__lix_func__ = true;return _uniq_var_540;})();
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
var generateOp = (function () {var _uniq_var_541 = function (hint) {var _uniq_var_216 = true;
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
};_uniq_var_541.__lix_func__ = true;return _uniq_var_541;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_542 = function (expr, env, ctx, def) {var _uniq_var_218 = generateOp(expr[1]);
_uniq_var_218;
var _uniq_var_219 = _uniq_var_218(expr, env, ctx, def);
_uniq_var_219;
return _uniq_var_219;
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_544 = function (env) {var _uniq_var_220 = env;
_uniq_var_220;
if (not(_uniq_var_220)) {
(_uniq_var_220 = env0);

};
(env = _uniq_var_220);
var Env = (function () {var _uniq_var_543 = function () {;
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_221 = _instance_(Env);
_uniq_var_221;
return _uniq_var_221;
};_uniq_var_544.__lix_func__ = true;return _uniq_var_544;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_546 = function (expr, define) {var _uniq_var_223 = map(expr, (function () {var _uniq_var_545 = function (item) {var _uniq_var_222 = flatten(item, define);
_uniq_var_222;
return _uniq_var_222;
};_uniq_var_545.__lix_func__ = true;return _uniq_var_545;})());
_uniq_var_223;
var _uniq_var_224 = define(_uniq_var_223);
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_547 = function (expr, define) {return expr;
};_uniq_var_547.__lix_func__ = true;return _uniq_var_547;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_552 = function (expr, define) {var _uniq_var_225 = call(statementFlattenGenerator);
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
var _uniq_var_229 = (function () {var _uniq_var_550 = function (_uniq_var_548, _uniq_var_549) {
if (typeof _uniq_var_548.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_548.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_548.concat.apply(_uniq_var_548, arguments);
} else if (_uniq_var_548.concat !== undefined) {
if (_uniq_var_549 === undefined) {
return _uniq_var_548.concat;
}
_uniq_var_548.concat = _uniq_var_549;
}return _uniq_var_548;
};_uniq_var_550.__lix_func__ = true;return _uniq_var_550;})()(expr[2][0], _uniq_var_228);
_uniq_var_229;
(expr[2][0] = _uniq_var_229);
var _uniq_var_230 = call(whileDefine);
_uniq_var_230;
var _uniq_var_232 = foreach(_uniq_var_230, (function () {var _uniq_var_551 = function (i) {var _uniq_var_231 = define(i, true);
_uniq_var_231;
return _uniq_var_231;
};_uniq_var_551.__lix_func__ = true;return _uniq_var_551;})());
_uniq_var_232;
_uniq_var_232;
var _uniq_var_233 = define(expr, true);
_uniq_var_233;
_uniq_var_233;
return ['', '{empty}'];
};_uniq_var_552.__lix_func__ = true;return _uniq_var_552;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_557 = function (expr, define) {var _uniq_var_234 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_556 = function () {var _uniq_var_239 = call(statementFlattenGenerator);
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
var _uniq_var_242 = (function () {var _uniq_var_555 = function (_uniq_var_553, _uniq_var_554) {
if (typeof _uniq_var_553.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_553.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_553.push.apply(_uniq_var_553, arguments);
} else if (_uniq_var_553.push !== undefined) {
if (_uniq_var_554 === undefined) {
return _uniq_var_553.push;
}
_uniq_var_553.push = _uniq_var_554;
}return _uniq_var_553;
};_uniq_var_555.__lix_func__ = true;return _uniq_var_555;})()(seq, [ret, '=', seqRet]);
_uniq_var_242;
_uniq_var_242;
return [seq, '{seq}'];
};_uniq_var_556.__lix_func__ = true;return _uniq_var_556;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_243 = call(getAndOpSeq);
_uniq_var_243;
var _uniq_var_244 = define([[[ret, [[], '{empty}']], [_uniq_var_243, 'else']], 'if'], true);
_uniq_var_244;
_uniq_var_244;
return ret;
};_uniq_var_557.__lix_func__ = true;return _uniq_var_557;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_562 = function (expr, define) {var _uniq_var_245 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_561 = function () {var _uniq_var_250 = call(statementFlattenGenerator);
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
var _uniq_var_253 = (function () {var _uniq_var_560 = function (_uniq_var_558, _uniq_var_559) {
if (typeof _uniq_var_558.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_558.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_558.push.apply(_uniq_var_558, arguments);
} else if (_uniq_var_558.push !== undefined) {
if (_uniq_var_559 === undefined) {
return _uniq_var_558.push;
}
_uniq_var_558.push = _uniq_var_559;
}return _uniq_var_558;
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})()(seq, [ret, '=', seqRet]);
_uniq_var_253;
_uniq_var_253;
return [seq, '{seq}'];
};_uniq_var_561.__lix_func__ = true;return _uniq_var_561;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_254 = call(getAndOpSeq);
_uniq_var_254;
var _uniq_var_255 = define([[[ret, _uniq_var_254]], 'if'], true);
_uniq_var_255;
_uniq_var_255;
return ret;
};_uniq_var_562.__lix_func__ = true;return _uniq_var_562;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_567 = function (expr, define, tmpVar, ctx) {var _uniq_var_268 = foreach(expr[0], (function () {var _uniq_var_566 = function (i) {var _uniq_var_256 = true;
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
var _uniq_var_265 = (function () {var _uniq_var_565 = function (_uniq_var_563, _uniq_var_564) {
if (typeof _uniq_var_563.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_563.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_563.unshift.apply(_uniq_var_563, arguments);
} else if (_uniq_var_563.unshift !== undefined) {
if (_uniq_var_564 === undefined) {
return _uniq_var_563.unshift;
}
_uniq_var_563.unshift = _uniq_var_564;
}return _uniq_var_563;
};_uniq_var_565.__lix_func__ = true;return _uniq_var_565;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
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
};_uniq_var_566.__lix_func__ = true;return _uniq_var_566;})());
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_567.__lix_func__ = true;return _uniq_var_567;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_568 = function (expr, define) {var _uniq_var_269 = define(['true', '{atomic}'], 'new');
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
};_uniq_var_568.__lix_func__ = true;return _uniq_var_568;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_569 = function (expr, define) {var _uniq_var_271 = flatten(expr[2], define);
_uniq_var_271;
(expr[2] = _uniq_var_271);
return expr;
};_uniq_var_569.__lix_func__ = true;return _uniq_var_569;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_573 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
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
var _uniq_var_275 = (function () {var _uniq_var_572 = function (_uniq_var_570, _uniq_var_571) {
if (typeof _uniq_var_570.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_570.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_570.push.apply(_uniq_var_570, arguments);
} else if (_uniq_var_570.push !== undefined) {
if (_uniq_var_571 === undefined) {
return _uniq_var_570.push;
}
_uniq_var_570.push = _uniq_var_571;
}return _uniq_var_570;
};_uniq_var_572.__lix_func__ = true;return _uniq_var_572;})()(partialExpr, expr[i]);
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
};_uniq_var_573.__lix_func__ = true;return _uniq_var_573;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_574 = function (expr, define) {var _uniq_var_279 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_279;
return _uniq_var_279;
};_uniq_var_574.__lix_func__ = true;return _uniq_var_574;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_575 = function (expr, define) {var _uniq_var_280 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_280;
return _uniq_var_280;
};_uniq_var_575.__lix_func__ = true;return _uniq_var_575;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_576 = function (expr, define) {var _uniq_var_281 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_281;
return _uniq_var_281;
};_uniq_var_576.__lix_func__ = true;return _uniq_var_576;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_577 = function (expr, define) {var _uniq_var_282 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_282;
return _uniq_var_282;
};_uniq_var_577.__lix_func__ = true;return _uniq_var_577;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_578 = function (expr, define) {var _uniq_var_283 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_283;
return _uniq_var_283;
};_uniq_var_578.__lix_func__ = true;return _uniq_var_578;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_579 = function (expr, define) {var _uniq_var_284 = flatten(expr[0], define);
_uniq_var_284;
(expr[0] = _uniq_var_284);
return expr;
};_uniq_var_579.__lix_func__ = true;return _uniq_var_579;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_580 = function (expr, define) {return expr;
};_uniq_var_580.__lix_func__ = true;return _uniq_var_580;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_582 = function (expr, define) {var _uniq_var_286 = map(expr[0], (function () {var _uniq_var_581 = function (i) {var _uniq_var_285 = flatten(i, define);
_uniq_var_285;
return _uniq_var_285;
};_uniq_var_581.__lix_func__ = true;return _uniq_var_581;})());
_uniq_var_286;
(expr[0] = _uniq_var_286);
return expr;
};_uniq_var_582.__lix_func__ = true;return _uniq_var_582;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_583 = function (expr, define) {return expr;
};_uniq_var_583.__lix_func__ = true;return _uniq_var_583;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_584 = function (expr, define) {var _uniq_var_287 = true;
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
};_uniq_var_584.__lix_func__ = true;return _uniq_var_584;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_589 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_588 = function (name, value) {var ret = undefined;
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
var _uniq_var_296 = (function () {var _uniq_var_587 = function (_uniq_var_585, _uniq_var_586) {
if (typeof _uniq_var_585.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_585.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_585.push.apply(_uniq_var_585, arguments);
} else if (_uniq_var_585.push !== undefined) {
if (_uniq_var_586 === undefined) {
return _uniq_var_585.push;
}
_uniq_var_585.push = _uniq_var_586;
}return _uniq_var_585;
};_uniq_var_587.__lix_func__ = true;return _uniq_var_587;})()(statements, [lixVar, ':=', value]);
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
};_uniq_var_588.__lix_func__ = true;return _uniq_var_588;})();
};_uniq_var_589.__lix_func__ = true;return _uniq_var_589;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_299 = call(NewGlobalDefine);
_uniq_var_299;
var globalDefine = _uniq_var_299;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_590 = function (expr, define) {var ret = ['', '{empty}'];
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
};_uniq_var_590.__lix_func__ = true;return _uniq_var_590;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_591 = function (expr, define) {var _uniq_var_305 = flatten(expr[2], define);
_uniq_var_305;
(expr[2] = _uniq_var_305);
return expr;
};_uniq_var_591.__lix_func__ = true;return _uniq_var_591;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_593 = function (expr, define) {var _uniq_var_307 = map(expr[0], (function () {var _uniq_var_592 = function (i) {var _uniq_var_306 = flattenProperty(i, define);
_uniq_var_306;
return _uniq_var_306;
};_uniq_var_592.__lix_func__ = true;return _uniq_var_592;})());
_uniq_var_307;
(expr[0] = _uniq_var_307);
return expr;
};_uniq_var_593.__lix_func__ = true;return _uniq_var_593;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_595 = function (expr, define) {var _uniq_var_309 = map(expr[0], (function () {var _uniq_var_594 = function (i) {var _uniq_var_308 = flatten(i, define);
_uniq_var_308;
return _uniq_var_308;
};_uniq_var_594.__lix_func__ = true;return _uniq_var_594;})());
_uniq_var_309;
(expr[0] = _uniq_var_309);
return expr;
};_uniq_var_595.__lix_func__ = true;return _uniq_var_595;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_596 = function (expr, define) {var _uniq_var_310 = flatten(expr[2], define);
_uniq_var_310;
(expr[2] = _uniq_var_310);
return expr;
};_uniq_var_596.__lix_func__ = true;return _uniq_var_596;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_597 = function (expr, define) {var _uniq_var_311 = true;
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
};_uniq_var_597.__lix_func__ = true;return _uniq_var_597;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_598 = function (expr, define) {return expr;
};_uniq_var_598.__lix_func__ = true;return _uniq_var_598;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_599 = function (expr, define) {var _uniq_var_317 = flatten(expr[0], define);
_uniq_var_317;
return _uniq_var_317;
};_uniq_var_599.__lix_func__ = true;return _uniq_var_599;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_613 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_612 = function (statement, tmpVarName) {var _uniq_var_318 = true;
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
var _uniq_var_321 = (function () {var _uniq_var_602 = function (_uniq_var_600, _uniq_var_601) {
if (typeof _uniq_var_600.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_600.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_600.push.apply(_uniq_var_600, arguments);
} else if (_uniq_var_600.push !== undefined) {
if (_uniq_var_601 === undefined) {
return _uniq_var_600.push;
}
_uniq_var_600.push = _uniq_var_601;
}return _uniq_var_600;
};_uniq_var_602.__lix_func__ = true;return _uniq_var_602;})()(data, statement);
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
var _uniq_var_324 = (function () {var _uniq_var_605 = function (_uniq_var_603, _uniq_var_604) {
if (typeof _uniq_var_603.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_603.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_603.push.apply(_uniq_var_603, arguments);
} else if (_uniq_var_603.push !== undefined) {
if (_uniq_var_604 === undefined) {
return _uniq_var_603.push;
}
_uniq_var_603.push = _uniq_var_604;
}return _uniq_var_603;
};_uniq_var_605.__lix_func__ = true;return _uniq_var_605;})()(data, statement);
_uniq_var_324;
_uniq_var_324;
var _uniq_var_325 = (function () {var _uniq_var_608 = function (_uniq_var_606, _uniq_var_607) {
if (typeof _uniq_var_606.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_606.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_606.push.apply(_uniq_var_606, arguments);
} else if (_uniq_var_606.push !== undefined) {
if (_uniq_var_607 === undefined) {
return _uniq_var_606.push;
}
_uniq_var_606.push = _uniq_var_607;
}return _uniq_var_606;
};_uniq_var_608.__lix_func__ = true;return _uniq_var_608;})()(data, [lixVar, ':=', tmpRet]);
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
var _uniq_var_328 = (function () {var _uniq_var_611 = function (_uniq_var_609, _uniq_var_610) {
if (typeof _uniq_var_609.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_609.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_609.push.apply(_uniq_var_609, arguments);
} else if (_uniq_var_609.push !== undefined) {
if (_uniq_var_610 === undefined) {
return _uniq_var_609.push;
}
_uniq_var_609.push = _uniq_var_610;
}return _uniq_var_609;
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})()(data, [lixVar, ':=', statement]);
_uniq_var_328;
_uniq_var_328;
(_uniq_var_319 = lixVar);

};
return _uniq_var_319;
};_uniq_var_612.__lix_func__ = true;return _uniq_var_612;})();
};_uniq_var_613.__lix_func__ = true;return _uniq_var_613;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_625 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_614 = function (stmt, index) {var ret = stmt;
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
};_uniq_var_614.__lix_func__ = true;return _uniq_var_614;})();
ctx;
ctx;
var _uniq_var_363 = foreach(expr[0], (function () {var _uniq_var_624 = function (item, index) {var _uniq_var_337 = call(statementFlattenGenerator);
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
var _uniq_var_340 = (function () {var _uniq_var_617 = function (_uniq_var_615, _uniq_var_616) {
if (typeof _uniq_var_615.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_615.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_615.concat.apply(_uniq_var_615, arguments);
} else if (_uniq_var_615.concat !== undefined) {
if (_uniq_var_616 === undefined) {
return _uniq_var_615.concat;
}
_uniq_var_615.concat = _uniq_var_616;
}return _uniq_var_615;
};_uniq_var_617.__lix_func__ = true;return _uniq_var_617;})()(ret, _uniq_var_339);
_uniq_var_340;
(ret = _uniq_var_340);
var _uniq_var_341 = ctx(itemRet, index);
_uniq_var_341;
var stmtRet = _uniq_var_341;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_618 = function (expr) {var _uniq_var_342 = __eq__(expr[1], '{atomic}');
_uniq_var_342;
var _uniq_var_343 = _uniq_var_342;
_uniq_var_343;
if (_uniq_var_343) {
var _uniq_var_344 = __ne__(expr[3], undefined);
_uniq_var_344;
(_uniq_var_343 = _uniq_var_344);

};
return _uniq_var_343;
};_uniq_var_618.__lix_func__ = true;return _uniq_var_618;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_619 = function (expr) {var _uniq_var_345 = __eq__(expr[1], '{atomic}');
_uniq_var_345;
var _uniq_var_346 = _uniq_var_345;
_uniq_var_346;
if (_uniq_var_346) {
var _uniq_var_347 = __eq__(expr[3], undefined);
_uniq_var_347;
(_uniq_var_346 = _uniq_var_347);

};
return _uniq_var_346;
};_uniq_var_619.__lix_func__ = true;return _uniq_var_619;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_620 = function (expr) {var _uniq_var_348 = isRealVar(expr);
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
};_uniq_var_620.__lix_func__ = true;return _uniq_var_620;})();
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
var _uniq_var_358 = (function () {var _uniq_var_623 = function (_uniq_var_621, _uniq_var_622) {
if (typeof _uniq_var_621.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_621.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_621.push.apply(_uniq_var_621, arguments);
} else if (_uniq_var_621.push !== undefined) {
if (_uniq_var_622 === undefined) {
return _uniq_var_621.push;
}
_uniq_var_621.push = _uniq_var_622;
}return _uniq_var_621;
};_uniq_var_623.__lix_func__ = true;return _uniq_var_623;})()(ret, stmtRet);
_uniq_var_358;
(_uniq_var_354 = _uniq_var_358);

};
return _uniq_var_354;
};_uniq_var_624.__lix_func__ = true;return _uniq_var_624;})());
_uniq_var_363;
_uniq_var_363;
(expr[0] = ret);
return expr;
};_uniq_var_625.__lix_func__ = true;return _uniq_var_625;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_632 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_364 = flatten(expr[0], define);
_uniq_var_364;
var ret = _uniq_var_364;
ret;
ret;
var _uniq_var_365 = call(globalDefine);
_uniq_var_365;
var _uniq_var_366 = (function () {var _uniq_var_628 = function (_uniq_var_626, _uniq_var_627) {
if (typeof _uniq_var_626.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_626.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_626.concat.apply(_uniq_var_626, arguments);
} else if (_uniq_var_626.concat !== undefined) {
if (_uniq_var_627 === undefined) {
return _uniq_var_626.concat;
}
_uniq_var_626.concat = _uniq_var_627;
}return _uniq_var_626;
};_uniq_var_628.__lix_func__ = true;return _uniq_var_628;})()(trapExpr, _uniq_var_365);
_uniq_var_366;
var _uniq_var_367 = (function () {var _uniq_var_631 = function (_uniq_var_629, _uniq_var_630) {
if (typeof _uniq_var_629.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_629.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_629.concat.apply(_uniq_var_629, arguments);
} else if (_uniq_var_629.concat !== undefined) {
if (_uniq_var_630 === undefined) {
return _uniq_var_629.concat;
}
_uniq_var_629.concat = _uniq_var_630;
}return _uniq_var_629;
};_uniq_var_631.__lix_func__ = true;return _uniq_var_631;})()(_uniq_var_366, ret[0]);
_uniq_var_367;
(ret[0] = _uniq_var_367);
return [ret, '{start}'];
};_uniq_var_632.__lix_func__ = true;return _uniq_var_632;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_636 = function (expr, define) {var _uniq_var_368 = true;
_uniq_var_368;
var _uniq_var_369 = null;
_uniq_var_369;
var _uniq_var_371 = __eq__(expr[2], '{var}');
_uniq_var_371;
if ((_uniq_var_368 && _uniq_var_371)) {
(_uniq_var_368 = false);
var _uniq_var_370 = (function () {var _uniq_var_635 = function (_uniq_var_633, _uniq_var_634) {
if (typeof _uniq_var_633.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_633.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_633.join.apply(_uniq_var_633, arguments);
} else if (_uniq_var_633.join !== undefined) {
if (_uniq_var_634 === undefined) {
return _uniq_var_633.join;
}
_uniq_var_633.join = _uniq_var_634;
}return _uniq_var_633;
};_uniq_var_635.__lix_func__ = true;return _uniq_var_635;})()(['"', expr[0], '"'], '');
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
};_uniq_var_636.__lix_func__ = true;return _uniq_var_636;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_637 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_637.__lix_func__ = true;return _uniq_var_637;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_638 = function (expr, define) {return expr;
};_uniq_var_638.__lix_func__ = true;return _uniq_var_638;})();
flattenAmpersand;
flattenAmpersand;
var flattenAnyTypeDestructor = (function () {var _uniq_var_639 = function (arg) {return [];
};_uniq_var_639.__lix_func__ = true;return _uniq_var_639;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_640 = function (expr) {var _uniq_var_375 = transformVarName(expr[0]);
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
};_uniq_var_640.__lix_func__ = true;return _uniq_var_640;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenArrayDestructor = (function () {var _uniq_var_651 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_384 = foreach(args[2], (function () {var _uniq_var_650 = function (item, index) {var _uniq_var_379 = getAtomicExprVarName(item[0]);
_uniq_var_379;
var varName = _uniq_var_379;
varName;
varName;
var _uniq_var_380 = (function () {var _uniq_var_643 = function (_uniq_var_641, _uniq_var_642) {
if (typeof _uniq_var_641.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_641.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_641.join.apply(_uniq_var_641, arguments);
} else if (_uniq_var_641.join !== undefined) {
if (_uniq_var_642 === undefined) {
return _uniq_var_641.join;
}
_uniq_var_641.join = _uniq_var_642;
}return _uniq_var_641;
};_uniq_var_643.__lix_func__ = true;return _uniq_var_643;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_380;
var _uniq_var_381 = (function () {var _uniq_var_646 = function (_uniq_var_644, _uniq_var_645) {
if (typeof _uniq_var_644.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_644.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_644.push.apply(_uniq_var_644, arguments);
} else if (_uniq_var_644.push !== undefined) {
if (_uniq_var_645 === undefined) {
return _uniq_var_644.push;
}
_uniq_var_644.push = _uniq_var_645;
}return _uniq_var_644;
};_uniq_var_646.__lix_func__ = true;return _uniq_var_646;})()(ret, _uniq_var_380);
_uniq_var_381;
_uniq_var_381;
var _uniq_var_382 = flattenDestructor(item, varName);
_uniq_var_382;
var _uniq_var_383 = (function () {var _uniq_var_649 = function (_uniq_var_647, _uniq_var_648) {
if (typeof _uniq_var_647.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_647.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_647.concat.apply(_uniq_var_647, arguments);
} else if (_uniq_var_647.concat !== undefined) {
if (_uniq_var_648 === undefined) {
return _uniq_var_647.concat;
}
_uniq_var_647.concat = _uniq_var_648;
}return _uniq_var_647;
};_uniq_var_649.__lix_func__ = true;return _uniq_var_649;})()(ret, _uniq_var_382);
_uniq_var_383;
return (ret = _uniq_var_383);
};_uniq_var_650.__lix_func__ = true;return _uniq_var_650;})());
_uniq_var_384;
_uniq_var_384;
return ret;
};_uniq_var_651.__lix_func__ = true;return _uniq_var_651;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenVAArgsDestructor = (function () {var _uniq_var_678 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_393 = foreach(args[2], (function () {var _uniq_var_661 = function (item, index) {var _uniq_var_385 = getAtomicExprVarName(item[0]);
_uniq_var_385;
var varName = _uniq_var_385;
varName;
varName;
var _uniq_var_386 = true;
_uniq_var_386;
var _uniq_var_387 = null;
_uniq_var_387;
var _uniq_var_390 = __ne__(arrayName, "arguments");
_uniq_var_390;
if ((_uniq_var_386 && _uniq_var_390)) {
(_uniq_var_386 = false);
var _uniq_var_388 = (function () {var _uniq_var_654 = function (_uniq_var_652, _uniq_var_653) {
if (typeof _uniq_var_652.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_652.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_652.join.apply(_uniq_var_652, arguments);
} else if (_uniq_var_652.join !== undefined) {
if (_uniq_var_653 === undefined) {
return _uniq_var_652.join;
}
_uniq_var_652.join = _uniq_var_653;
}return _uniq_var_652;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_388;
var _uniq_var_389 = (function () {var _uniq_var_657 = function (_uniq_var_655, _uniq_var_656) {
if (typeof _uniq_var_655.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_655.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_655.push.apply(_uniq_var_655, arguments);
} else if (_uniq_var_655.push !== undefined) {
if (_uniq_var_656 === undefined) {
return _uniq_var_655.push;
}
_uniq_var_655.push = _uniq_var_656;
}return _uniq_var_655;
};_uniq_var_657.__lix_func__ = true;return _uniq_var_657;})()(ret, _uniq_var_388);
_uniq_var_389;
(_uniq_var_387 = _uniq_var_389);

};
_uniq_var_387;
var _uniq_var_391 = flattenDestructor(item, varName);
_uniq_var_391;
var _uniq_var_392 = (function () {var _uniq_var_660 = function (_uniq_var_658, _uniq_var_659) {
if (typeof _uniq_var_658.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_658.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_658.concat.apply(_uniq_var_658, arguments);
} else if (_uniq_var_658.concat !== undefined) {
if (_uniq_var_659 === undefined) {
return _uniq_var_658.concat;
}
_uniq_var_658.concat = _uniq_var_659;
}return _uniq_var_658;
};_uniq_var_660.__lix_func__ = true;return _uniq_var_660;})()(ret, _uniq_var_391);
_uniq_var_392;
return (ret = _uniq_var_392);
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})());
_uniq_var_393;
_uniq_var_393;
var _uniq_var_394 = true;
_uniq_var_394;
var _uniq_var_395 = null;
_uniq_var_395;
var _uniq_var_399 = __eq__(args[3][1], "{va_arg}");
_uniq_var_399;
if ((_uniq_var_394 && _uniq_var_399)) {
(_uniq_var_394 = false);
var _uniq_var_396 = getAtomicExprVarName(args[3][0]);
_uniq_var_396;
var varName = _uniq_var_396;
varName;
varName;
var _uniq_var_397 = (function () {var _uniq_var_664 = function (_uniq_var_662, _uniq_var_663) {
if (typeof _uniq_var_662.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_662.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_662.join.apply(_uniq_var_662, arguments);
} else if (_uniq_var_662.join !== undefined) {
if (_uniq_var_663 === undefined) {
return _uniq_var_662.join;
}
_uniq_var_662.join = _uniq_var_663;
}return _uniq_var_662;
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_397;
var _uniq_var_398 = (function () {var _uniq_var_667 = function (_uniq_var_665, _uniq_var_666) {
if (typeof _uniq_var_665.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_665.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_665.push.apply(_uniq_var_665, arguments);
} else if (_uniq_var_665.push !== undefined) {
if (_uniq_var_666 === undefined) {
return _uniq_var_665.push;
}
_uniq_var_665.push = _uniq_var_666;
}return _uniq_var_665;
};_uniq_var_667.__lix_func__ = true;return _uniq_var_667;})()(ret, _uniq_var_397);
_uniq_var_398;
(_uniq_var_395 = _uniq_var_398);

};
_uniq_var_395;
var _uniq_var_406 = foreach(args[4], (function () {var _uniq_var_677 = function (item, index) {var _uniq_var_400 = getAtomicExprVarName(item[0]);
_uniq_var_400;
var varName = _uniq_var_400;
varName;
varName;
var _uniq_var_401 = __sub__(tail_lenth, index);
_uniq_var_401;
var _uniq_var_402 = (function () {var _uniq_var_670 = function (_uniq_var_668, _uniq_var_669) {
if (typeof _uniq_var_668.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_668.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_668.join.apply(_uniq_var_668, arguments);
} else if (_uniq_var_668.join !== undefined) {
if (_uniq_var_669 === undefined) {
return _uniq_var_668.join;
}
_uniq_var_668.join = _uniq_var_669;
}return _uniq_var_668;
};_uniq_var_670.__lix_func__ = true;return _uniq_var_670;})()(["var ", varName, " = ", arrayName, "[", arrayName, ".length - ", _uniq_var_401, "]"], "");
_uniq_var_402;
var _uniq_var_403 = (function () {var _uniq_var_673 = function (_uniq_var_671, _uniq_var_672) {
if (typeof _uniq_var_671.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_671.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_671.push.apply(_uniq_var_671, arguments);
} else if (_uniq_var_671.push !== undefined) {
if (_uniq_var_672 === undefined) {
return _uniq_var_671.push;
}
_uniq_var_671.push = _uniq_var_672;
}return _uniq_var_671;
};_uniq_var_673.__lix_func__ = true;return _uniq_var_673;})()(ret, _uniq_var_402);
_uniq_var_403;
_uniq_var_403;
var _uniq_var_404 = flattenDestructor(item, varName);
_uniq_var_404;
var _uniq_var_405 = (function () {var _uniq_var_676 = function (_uniq_var_674, _uniq_var_675) {
if (typeof _uniq_var_674.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_674.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_674.concat.apply(_uniq_var_674, arguments);
} else if (_uniq_var_674.concat !== undefined) {
if (_uniq_var_675 === undefined) {
return _uniq_var_674.concat;
}
_uniq_var_674.concat = _uniq_var_675;
}return _uniq_var_674;
};_uniq_var_676.__lix_func__ = true;return _uniq_var_676;})()(ret, _uniq_var_404);
_uniq_var_405;
return (ret = _uniq_var_405);
};_uniq_var_677.__lix_func__ = true;return _uniq_var_677;})());
_uniq_var_406;
_uniq_var_406;
return ret;
};_uniq_var_678.__lix_func__ = true;return _uniq_var_678;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenDestructorOp = {
"{any_type_arg}": flattenAnyTypeDestructor,
"{anonymous_va_arg}": flattenAnyTypeDestructor,
"{array_arg}": flattenArrayDestructor,
"{va_args}": flattenVAArgsDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_679 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_407 = true;
_uniq_var_407;
var _uniq_var_408 = null;
_uniq_var_408;
if ((_uniq_var_407 && flattenDestructorOp[hint])) {
(_uniq_var_407 = false);
(_uniq_var_408 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_408;
return ret;
};_uniq_var_679.__lix_func__ = true;return _uniq_var_679;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var flattenDestructor = (function () {var _uniq_var_680 = function (args, varName) {var _uniq_var_409 = getFlattenDestructorOp(args[1]);
_uniq_var_409;
var _uniq_var_410 = call(_uniq_var_409, args, varName);
_uniq_var_410;
return _uniq_var_410;
};_uniq_var_680.__lix_func__ = true;return _uniq_var_680;})();
flattenDestructor;
flattenDestructor;
var flattenArgumentsDestructor = (function () {var _uniq_var_681 = function (args) {var _uniq_var_411 = flattenDestructor(args, "arguments");
_uniq_var_411;
return _uniq_var_411;
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_686 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_413 = foreach(args[2], (function () {var _uniq_var_685 = function (item) {var _uniq_var_412 = (function () {var _uniq_var_684 = function (_uniq_var_682, _uniq_var_683) {
if (typeof _uniq_var_682.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_682.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_682.push.apply(_uniq_var_682, arguments);
} else if (_uniq_var_682.push !== undefined) {
if (_uniq_var_683 === undefined) {
return _uniq_var_682.push;
}
_uniq_var_682.push = _uniq_var_683;
}return _uniq_var_682;
};_uniq_var_684.__lix_func__ = true;return _uniq_var_684;})()(ret, item[0]);
_uniq_var_412;
return _uniq_var_412;
};_uniq_var_685.__lix_func__ = true;return _uniq_var_685;})());
_uniq_var_413;
_uniq_var_413;
return ret;
};_uniq_var_686.__lix_func__ = true;return _uniq_var_686;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_687 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_414 = flattenArgumentsDestructor(expr[2]);
_uniq_var_414;
var destructor = _uniq_var_414;
destructor;
destructor;
var _uniq_var_415 = getFuncArgsNameList(expr[2]);
_uniq_var_415;
var funcArgsNameList = _uniq_var_415;
funcArgsNameList;
funcArgsNameList;
var _uniq_var_416 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_416;
var func = _uniq_var_416;
func;
func;
return [expr[0], "{fn}", func];
};_uniq_var_687.__lix_func__ = true;return _uniq_var_687;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_688 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_417 = flatten(expr, define);
_uniq_var_417;
return _uniq_var_417;
};_uniq_var_688.__lix_func__ = true;return _uniq_var_688;})();
flattenAsterisk;
flattenAsterisk;
var identity = (function () {var _uniq_var_689 = function (x) {return x;
};_uniq_var_689.__lix_func__ = true;return _uniq_var_689;})();
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
var flattenOp = (function () {var _uniq_var_690 = function (hint) {var _uniq_var_418 = true;
_uniq_var_418;
var _uniq_var_419 = null;
_uniq_var_419;
if ((_uniq_var_418 && flattenOpTable[hint])) {
(_uniq_var_418 = false);
(_uniq_var_419 = flattenOpTable[hint]);

};
if (_uniq_var_418) {
(_uniq_var_419 = flattenExpr);

};
return _uniq_var_419;
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_691 = function (expr, define, ctx) {var _uniq_var_420 = flattenOp(expr[1]);
_uniq_var_420;
var _uniq_var_421 = _uniq_var_420(expr, define, ctx);
_uniq_var_421;
return _uniq_var_421;
};_uniq_var_691.__lix_func__ = true;return _uniq_var_691;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_692 = function (i) {return i;
};_uniq_var_692.__lix_func__ = true;return _uniq_var_692;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_693 = function (i) {;
};_uniq_var_693.__lix_func__ = true;return _uniq_var_693;})(),
appendExpr: (function () {var _uniq_var_694 = function (i) {;
};_uniq_var_694.__lix_func__ = true;return _uniq_var_694;})()
};
def0;
def0;
var _uniq_var_422 = join(['s[', STEP, ']']);
_uniq_var_422;
var _uniq_var_423 = join(['s[', RET, ']']);
_uniq_var_423;
var seqFuncParamsName = {
step: _uniq_var_422,
ret: _uniq_var_423
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_701 = function (expr) {var _uniq_var_424 = map(env0, (function () {var _uniq_var_695 = function (i) {return i;
};_uniq_var_695.__lix_func__ = true;return _uniq_var_695;})());
_uniq_var_424;
var _uniq_var_425 = (function () {var _uniq_var_698 = function (_uniq_var_696, _uniq_var_697) {
if (typeof _uniq_var_696.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_696.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_696.join.apply(_uniq_var_696, arguments);
} else if (_uniq_var_696.join !== undefined) {
if (_uniq_var_697 === undefined) {
return _uniq_var_696.join;
}
_uniq_var_696.join = _uniq_var_697;
}return _uniq_var_696;
};_uniq_var_698.__lix_func__ = true;return _uniq_var_698;})()(_uniq_var_424, "\n");
_uniq_var_425;
var libs = _uniq_var_425;
libs;
libs;
var _uniq_var_426 = flatten(expr, (function () {var _uniq_var_699 = function (i) {;
};_uniq_var_699.__lix_func__ = true;return _uniq_var_699;})(), (function () {var _uniq_var_700 = function (i) {return i;
};_uniq_var_700.__lix_func__ = true;return _uniq_var_700;})());
_uniq_var_426;
var flattenedExpr = _uniq_var_426;
flattenedExpr;
flattenedExpr;
var _uniq_var_427 = call(env_new);
_uniq_var_427;
var _uniq_var_428 = generateStart(flattenedExpr, _uniq_var_427, ctx0, def0);
_uniq_var_428;
var code = _uniq_var_428;
code;
code;
var _uniq_var_429 = join([libs, "\n", code]);
_uniq_var_429;
return _uniq_var_429;
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})();
compile;
compile;
(exports.compile = compile);
compile;

