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
var join = (function () {var _uniq_var_530 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_529 = function (_uniq_var_527, _uniq_var_528) {
if (typeof _uniq_var_527.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_527.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_527.join.apply(_uniq_var_527, arguments);
} else if (_uniq_var_527.join !== undefined) {
if (_uniq_var_528 === undefined) {
return _uniq_var_527.join;
}
_uniq_var_527.join = _uniq_var_528;
}return _uniq_var_527;
};_uniq_var_529.__lix_func__ = true;return _uniq_var_529;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_530.__lix_func__ = true;return _uniq_var_530;})();
join;
join;
var map = (function () {var _uniq_var_535 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_534 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_533 = function (_uniq_var_531, _uniq_var_532) {
if (typeof _uniq_var_531.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_531.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_531.push.apply(_uniq_var_531, arguments);
} else if (_uniq_var_531.push !== undefined) {
if (_uniq_var_532 === undefined) {
return _uniq_var_531.push;
}
_uniq_var_531.push = _uniq_var_532;
}return _uniq_var_531;
};_uniq_var_533.__lix_func__ = true;return _uniq_var_533;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_534.__lix_func__ = true;return _uniq_var_534;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_535.__lix_func__ = true;return _uniq_var_535;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_537 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_536 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_536.__lix_func__ = true;return _uniq_var_536;})();
};_uniq_var_537.__lix_func__ = true;return _uniq_var_537;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_538 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_538.__lix_func__ = true;return _uniq_var_538;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_543 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_539 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_539.__lix_func__ = true;return _uniq_var_539;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_542 = function (_uniq_var_540, _uniq_var_541) {
if (typeof _uniq_var_540.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_540.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_540.join.apply(_uniq_var_540, arguments);
} else if (_uniq_var_540.join !== undefined) {
if (_uniq_var_541 === undefined) {
return _uniq_var_540.join;
}
_uniq_var_540.join = _uniq_var_541;
}return _uniq_var_540;
};_uniq_var_542.__lix_func__ = true;return _uniq_var_542;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_543.__lix_func__ = true;return _uniq_var_543;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_544 = function (x) {return x;
};_uniq_var_544.__lix_func__ = true;return _uniq_var_544;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_554 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_546 = function (current) {return (function () {var _uniq_var_545 = function (v, loop) {var next = current;
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
};_uniq_var_545.__lix_func__ = true;return _uniq_var_545;})();
};_uniq_var_546.__lix_func__ = true;return _uniq_var_546;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_550 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_24 = true;
_uniq_var_24;
var _uniq_var_25 = null;
_uniq_var_25;
if ((_uniq_var_24 && stmt)) {
(_uniq_var_24 = false);
var _uniq_var_26 = join(['case ', current, ':\n', stmt]);
_uniq_var_26;
var _uniq_var_27 = (function () {var _uniq_var_549 = function (_uniq_var_547, _uniq_var_548) {
if (typeof _uniq_var_547.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_547.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_547.push.apply(_uniq_var_547, arguments);
} else if (_uniq_var_547.push !== undefined) {
if (_uniq_var_548 === undefined) {
return _uniq_var_547.push;
}
_uniq_var_547.push = _uniq_var_548;
}return _uniq_var_547;
};_uniq_var_549.__lix_func__ = true;return _uniq_var_549;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_550.__lix_func__ = true;return _uniq_var_550;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_553 = function (_uniq_var_551, _uniq_var_552) {
if (typeof _uniq_var_551.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_551.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_551.join.apply(_uniq_var_551, arguments);
} else if (_uniq_var_551.join !== undefined) {
if (_uniq_var_552 === undefined) {
return _uniq_var_551.join;
}
_uniq_var_551.join = _uniq_var_552;
}return _uniq_var_551;
};_uniq_var_553.__lix_func__ = true;return _uniq_var_553;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_554.__lix_func__ = true;return _uniq_var_554;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_555 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_555.__lix_func__ = true;return _uniq_var_555;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_556 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_556.__lix_func__ = true;return _uniq_var_556;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_561 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_557 = function (i) {var _uniq_var_38 = true;
_uniq_var_38;
var _uniq_var_39 = null;
_uniq_var_39;
var _uniq_var_43 = __eq__(i[1], 'else');
_uniq_var_43;
if ((_uniq_var_38 && _uniq_var_43)) {
(_uniq_var_38 = false);
var _uniq_var_40 = generate(i[0], env, ctx, def);
_uniq_var_40;
var _uniq_var_41 = ctx(_uniq_var_40);
_uniq_var_41;
var _uniq_var_42 = join(['{\n', _uniq_var_41, '\n}']);
_uniq_var_42;
(_uniq_var_39 = _uniq_var_42);

};
var _uniq_var_45 = __eq__(i[1], 'if');
_uniq_var_45;
if ((_uniq_var_38 && _uniq_var_45)) {
(_uniq_var_38 = false);
var _uniq_var_44 = generateIf(i, env, ctx, def);
_uniq_var_44;
(_uniq_var_39 = _uniq_var_44);

};
if (_uniq_var_38) {
var _uniq_var_46 = generate(i[0], env, ctx, def);
_uniq_var_46;
var _uniq_var_47 = generate(i[1], env, ctx, def);
_uniq_var_47;
var _uniq_var_48 = ctx(_uniq_var_47);
_uniq_var_48;
var _uniq_var_49 = join(['if (', _uniq_var_46, ') {\n', _uniq_var_48, '\n}']);
_uniq_var_49;
(_uniq_var_39 = _uniq_var_49);

};
return _uniq_var_39;
};_uniq_var_557.__lix_func__ = true;return _uniq_var_557;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_560 = function (_uniq_var_558, _uniq_var_559) {
if (typeof _uniq_var_558.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_558.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_558.join.apply(_uniq_var_558, arguments);
} else if (_uniq_var_558.join !== undefined) {
if (_uniq_var_559 === undefined) {
return _uniq_var_558.join;
}
_uniq_var_558.join = _uniq_var_559;
}return _uniq_var_558;
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_561.__lix_func__ = true;return _uniq_var_561;})();
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
var generateAtomic = (function () {var _uniq_var_562 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
ret;
var _uniq_var_52 = true;
_uniq_var_52;
var _uniq_var_53 = null;
_uniq_var_53;
var _uniq_var_59 = __eq__(expr[2], '{var}');
_uniq_var_59;
if ((_uniq_var_52 && _uniq_var_59)) {
(_uniq_var_52 = false);
var _uniq_var_54 = true;
_uniq_var_54;
var _uniq_var_55 = null;
_uniq_var_55;
if ((_uniq_var_54 && operateFuncName[expr[0]])) {
(_uniq_var_54 = false);
var _uniq_var_56 = transformVarName(operateFuncName[expr[0]]);
_uniq_var_56;
(_uniq_var_55 = (ret = _uniq_var_56));

};
var _uniq_var_58 = __eq__(expr[3], undefined);
_uniq_var_58;
if ((_uniq_var_54 && _uniq_var_58)) {
(_uniq_var_54 = false);
var _uniq_var_57 = transformVarName(expr[0]);
_uniq_var_57;
(_uniq_var_55 = (ret = _uniq_var_57));

};
(_uniq_var_53 = _uniq_var_55);

};
_uniq_var_53;
return ret;
};_uniq_var_562.__lix_func__ = true;return _uniq_var_562;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_563 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
_uniq_var_60;
var _uniq_var_61 = null;
_uniq_var_61;
var _uniq_var_63 = __eq__(expr[1], '{atomic}');
_uniq_var_63;
if ((_uniq_var_60 && _uniq_var_63)) {
(_uniq_var_60 = false);
var _uniq_var_62 = generateAtomic(expr, env, ctx, def);
_uniq_var_62;
(_uniq_var_61 = _uniq_var_62);

};
var _uniq_var_65 = __eq__(expr[1], '{index}');
_uniq_var_65;
if ((_uniq_var_60 && _uniq_var_65)) {
(_uniq_var_60 = false);
var _uniq_var_64 = generateAtomic(expr[0], env, ctx, def);
_uniq_var_64;
(_uniq_var_61 = _uniq_var_64);

};
return _uniq_var_61;
};_uniq_var_563.__lix_func__ = true;return _uniq_var_563;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_564 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
_uniq_var_66;
var propertyName = _uniq_var_66;
propertyName;
propertyName;
var _uniq_var_67 = generate(expr[2], env, ctx, def);
_uniq_var_67;
var propertyValue = _uniq_var_67;
propertyValue;
propertyValue;
var _uniq_var_68 = join([propertyName, ": ", propertyValue]);
_uniq_var_68;
return _uniq_var_68;
};_uniq_var_564.__lix_func__ = true;return _uniq_var_564;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_569 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_565 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_565.__lix_func__ = true;return _uniq_var_565;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_568 = function (_uniq_var_566, _uniq_var_567) {
if (typeof _uniq_var_566.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_566.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_566.join.apply(_uniq_var_566, arguments);
} else if (_uniq_var_566.join !== undefined) {
if (_uniq_var_567 === undefined) {
return _uniq_var_566.join;
}
_uniq_var_566.join = _uniq_var_567;
}return _uniq_var_566;
};_uniq_var_568.__lix_func__ = true;return _uniq_var_568;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_569.__lix_func__ = true;return _uniq_var_569;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_570 = function (name) {var _uniq_var_73 = true;
_uniq_var_73;
var _uniq_var_74 = null;
_uniq_var_74;
var _uniq_var_76 = __ne__(name, 'exports');
_uniq_var_76;
var _uniq_var_77 = _uniq_var_76;
_uniq_var_77;
if (_uniq_var_77) {
var _uniq_var_78 = __ne__(name, 'undefined');
_uniq_var_78;
(_uniq_var_77 = _uniq_var_78);

};
var _uniq_var_79 = _uniq_var_77;
_uniq_var_79;
if (_uniq_var_79) {
var _uniq_var_80 = __ne__(name, 'null');
_uniq_var_80;
(_uniq_var_79 = _uniq_var_80);

};
var _uniq_var_81 = _uniq_var_79;
_uniq_var_81;
if (_uniq_var_81) {
var _uniq_var_82 = __ne__(name, 'true');
_uniq_var_82;
(_uniq_var_81 = _uniq_var_82);

};
var _uniq_var_83 = _uniq_var_81;
_uniq_var_83;
if (_uniq_var_83) {
var _uniq_var_84 = __ne__(name, 'false');
_uniq_var_84;
(_uniq_var_83 = _uniq_var_84);

};
if ((_uniq_var_73 && _uniq_var_83)) {
(_uniq_var_73 = false);
var _uniq_var_75 = __add__('L', name);
_uniq_var_75;
(_uniq_var_74 = (name = _uniq_var_75));

};
_uniq_var_74;
return name;
};_uniq_var_570.__lix_func__ = true;return _uniq_var_570;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_571 = function (expr) {var _uniq_var_85 = true;
_uniq_var_85;
var _uniq_var_86 = null;
_uniq_var_86;
var _uniq_var_88 = __eq__(expr[1], '{atomic}');
_uniq_var_88;
if ((_uniq_var_85 && _uniq_var_88)) {
(_uniq_var_85 = false);
var _uniq_var_87 = generateAtomic(expr, {

}, ctx0);
_uniq_var_87;
(_uniq_var_86 = _uniq_var_87);

};
var _uniq_var_90 = __eq__(expr[1], '{.}');
_uniq_var_90;
if ((_uniq_var_85 && _uniq_var_90)) {
(_uniq_var_85 = false);
var _uniq_var_89 = getVarName(expr[0]);
_uniq_var_89;
(_uniq_var_86 = _uniq_var_89);

};
return _uniq_var_86;
};_uniq_var_571.__lix_func__ = true;return _uniq_var_571;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_572 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
_uniq_var_91;
var _uniq_var_92 = null;
_uniq_var_92;
var _uniq_var_95 = __eq__(expr[2], '{dot}');
_uniq_var_95;
if ((_uniq_var_91 && _uniq_var_95)) {
(_uniq_var_91 = false);
var _uniq_var_93 = generateAtomic(expr, env, ctx0, def);
_uniq_var_93;
var _uniq_var_94 = __add__('.', _uniq_var_93);
_uniq_var_94;
(_uniq_var_92 = _uniq_var_94);

};
var _uniq_var_98 = __eq__(expr[2], '{index}');
_uniq_var_98;
if ((_uniq_var_91 && _uniq_var_98)) {
(_uniq_var_91 = false);
var _uniq_var_96 = generate(expr[0], env, ctx, def);
_uniq_var_96;
var _uniq_var_97 = join(['[', _uniq_var_96, ']']);
_uniq_var_97;
(_uniq_var_92 = _uniq_var_97);

};
return _uniq_var_92;
};_uniq_var_572.__lix_func__ = true;return _uniq_var_572;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_573 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
_uniq_var_99;
var _uniq_var_100 = null;
_uniq_var_100;
var _uniq_var_102 = __eq__(expr[1], '{atomic}');
_uniq_var_102;
if ((_uniq_var_99 && _uniq_var_102)) {
(_uniq_var_99 = false);
var _uniq_var_101 = generateAtomic(expr, env, ctx0, def);
_uniq_var_101;
(_uniq_var_100 = _uniq_var_101);

};
var _uniq_var_106 = __eq__(expr[1], '{.}');
_uniq_var_106;
if ((_uniq_var_99 && _uniq_var_106)) {
(_uniq_var_99 = false);
var _uniq_var_103 = generateFieldAccess(expr[0], env, ctx, def);
_uniq_var_103;
var obj = _uniq_var_103;
obj;
obj;
var _uniq_var_104 = generateField(expr[2], env, ctx, def);
_uniq_var_104;
var field = _uniq_var_104;
field;
field;
var _uniq_var_105 = __add__(obj, field);
_uniq_var_105;
(_uniq_var_100 = _uniq_var_105);

};
return _uniq_var_100;
};_uniq_var_573.__lix_func__ = true;return _uniq_var_573;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_578 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_574 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_574.__lix_func__ = true;return _uniq_var_574;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_577 = function (_uniq_var_575, _uniq_var_576) {
if (typeof _uniq_var_575.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_575.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_575.join.apply(_uniq_var_575, arguments);
} else if (_uniq_var_575.join !== undefined) {
if (_uniq_var_576 === undefined) {
return _uniq_var_575.join;
}
_uniq_var_575.join = _uniq_var_576;
}return _uniq_var_575;
};_uniq_var_577.__lix_func__ = true;return _uniq_var_577;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_578.__lix_func__ = true;return _uniq_var_578;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_579 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
_uniq_var_111;
var localVarName = _uniq_var_111;
localVarName;
localVarName;
var _uniq_var_112 = call(getUniqVarName);
_uniq_var_112;
var localValueName = _uniq_var_112;
localValueName;
localValueName;
var _uniq_var_113 = generateField(expr[0], env, ctx0);
_uniq_var_113;
var methodName = _uniq_var_113;
methodName;
methodName;
var _uniq_var_114 = __add__(localVarName, methodName);
_uniq_var_114;
var method = _uniq_var_114;
method;
method;
var _uniq_var_115 = call(getUniqVarName);
_uniq_var_115;
var tmpVar = _uniq_var_115;
tmpVar;
tmpVar;
var _uniq_var_116 = join(["(function (", localVarName, ", ", localValueName, ") {\n", "if (", localVarName, " == undefined || ", localVarName, " == null ) {\n", "return function () {\n", "return ", localVarName, ";\n", "}\n", "}\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else {\n", "if (arguments.length > 1) {\n", "return function () {\n", method, " = ", localValueName, ";\n", "return ", localVarName, ";\n", "}\n", "}\n", "return function () {\n", "return ", method, ';\n', "}\n", "}", "})"]);
_uniq_var_116;
return _uniq_var_116;
};_uniq_var_579.__lix_func__ = true;return _uniq_var_579;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_580 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_580.__lix_func__ = true;return _uniq_var_580;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_581 = function (expr, env, ctx) {return 'break';
};_uniq_var_581.__lix_func__ = true;return _uniq_var_581;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_582 = function (expr, env, ctx, def) {return "";
};_uniq_var_582.__lix_func__ = true;return _uniq_var_582;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_583 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
_uniq_var_121;
var varname = _uniq_var_121;
varname;
varname;
var _uniq_var_122 = def.defineVar(varname);
_uniq_var_122;
_uniq_var_122;
var _uniq_var_123 = generate(expr[2], env, ctx, def);
_uniq_var_123;
var _uniq_var_124 = join([varname, ' = ', _uniq_var_123]);
_uniq_var_124;
var ret = _uniq_var_124;
ret;
ret;
(env[varname] = true);
return ret;
};_uniq_var_583.__lix_func__ = true;return _uniq_var_583;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_584 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_584.__lix_func__ = true;return _uniq_var_584;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_588 = function (expr, env, ctx, def) {var _uniq_var_126 = true;
_uniq_var_126;
var _uniq_var_127 = null;
_uniq_var_127;
var _uniq_var_135 = __eq__(expr[0][1], '{atomic}');
_uniq_var_135;
if ((_uniq_var_126 && _uniq_var_135)) {
(_uniq_var_126 = false);
var _uniq_var_128 = getVarName(expr[0]);
_uniq_var_128;
var varname = _uniq_var_128;
varname;
varname;
var _uniq_var_129 = true;
_uniq_var_129;
var _uniq_var_130 = null;
_uniq_var_130;
var _uniq_var_132 = __eq__(env[varname], undefined);
_uniq_var_132;
var _uniq_var_133 = _uniq_var_132;
_uniq_var_133;
if (_uniq_var_133) {
var _uniq_var_134 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_134;
(_uniq_var_133 = _uniq_var_134);

};
if ((_uniq_var_129 && _uniq_var_133)) {
(_uniq_var_129 = false);
var _uniq_var_131 = generate([expr[0], '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_131;
(_uniq_var_130 = _uniq_var_131);

};
(_uniq_var_127 = _uniq_var_130);

};
if (_uniq_var_126) {
var _uniq_var_136 = generate(expr[0], env, ctx, def);
_uniq_var_136;
var varname = _uniq_var_136;
varname;
(_uniq_var_127 = varname);

};
_uniq_var_127;
var _uniq_var_137 = (function () {var _uniq_var_587 = function (_uniq_var_585, _uniq_var_586) {
if (typeof _uniq_var_585.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_585.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_585.join.apply(_uniq_var_585, arguments);
} else if (_uniq_var_585.join !== undefined) {
if (_uniq_var_586 === undefined) {
return _uniq_var_585.join;
}
_uniq_var_585.join = _uniq_var_586;
}return _uniq_var_585;
};_uniq_var_587.__lix_func__ = true;return _uniq_var_587;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_588.__lix_func__ = true;return _uniq_var_588;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_589 = function (expr, env, ctx, def) {var _uniq_var_138 = getVarName(expr[0]);
_uniq_var_138;
var varname = _uniq_var_138;
varname;
varname;
var ret = [];
ret;
ret;
var _uniq_var_139 = true;
_uniq_var_139;
var _uniq_var_140 = null;
_uniq_var_140;
var _uniq_var_142 = __eq__(env[varname], undefined);
_uniq_var_142;
var _uniq_var_143 = _uniq_var_142;
_uniq_var_143;
if (_uniq_var_143) {
var _uniq_var_144 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_144;
(_uniq_var_143 = _uniq_var_144);

};
if ((_uniq_var_139 && _uniq_var_143)) {
(_uniq_var_139 = false);
var _uniq_var_141 = generateDef(expr, env, ctx, def);
_uniq_var_141;
(_uniq_var_140 = (ret = _uniq_var_141));

};
if (_uniq_var_139) {
var _uniq_var_145 = generate(expr[0], env, ctx0, def);
_uniq_var_145;
var varname = _uniq_var_145;
varname;
varname;
var _uniq_var_146 = generate(expr[2], env, ctx, def);
_uniq_var_146;
var value = _uniq_var_146;
value;
value;
var _uniq_var_147 = true;
_uniq_var_147;
var _uniq_var_148 = null;
_uniq_var_148;
var _uniq_var_150 = __ne__(value, undefined);
_uniq_var_150;
if ((_uniq_var_147 && _uniq_var_150)) {
(_uniq_var_147 = false);
var _uniq_var_149 = join([varname, " = ", value]);
_uniq_var_149;
(_uniq_var_148 = (ret = _uniq_var_149));

};
if (_uniq_var_147) {
(_uniq_var_148 = (ret = undefined));

};
(_uniq_var_140 = _uniq_var_148);

};
_uniq_var_140;
return ret;
};_uniq_var_589.__lix_func__ = true;return _uniq_var_589;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_596 = function (expr, env, ctx, def) {var _uniq_var_151 = true;
_uniq_var_151;
var _uniq_var_152 = null;
_uniq_var_152;
var _uniq_var_153 = __eq__(expr[3], undefined);
_uniq_var_153;
if ((_uniq_var_151 && _uniq_var_153)) {
(_uniq_var_151 = false);
(_uniq_var_152 = (expr[3] = []));

};
_uniq_var_152;
var _uniq_var_154 = env_new(env);
_uniq_var_154;
var funcEnv = _uniq_var_154;
funcEnv;
funcEnv;
var _uniq_var_155 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_155;
var args = _uniq_var_155;
args;
args;
var _uniq_var_156 = call(getUniqVarName);
_uniq_var_156;
var tmpVar = _uniq_var_156;
tmpVar;
tmpVar;
var _uniq_var_157 = call(GenerateDefNew);
_uniq_var_157;
var def = _uniq_var_157;
def;
def;
var _uniq_var_158 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_158;
var body = _uniq_var_158;
body;
body;
var _uniq_var_159 = transformVarName('arguments');
_uniq_var_159;
var _uniq_var_160 = (function () {var _uniq_var_592 = function (_uniq_var_590, _uniq_var_591) {
if (typeof _uniq_var_590.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_590.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_590.join.apply(_uniq_var_590, arguments);
} else if (_uniq_var_590.join !== undefined) {
if (_uniq_var_591 === undefined) {
return _uniq_var_590.join;
}
_uniq_var_590.join = _uniq_var_591;
}return _uniq_var_590;
};_uniq_var_592.__lix_func__ = true;return _uniq_var_592;})()(expr[3], ";\n");
_uniq_var_160;
var _uniq_var_161 = call(def.defineVar);
_uniq_var_161;
var _uniq_var_162 = call(def.appendExpr);
_uniq_var_162;
var _uniq_var_163 = call(def.definedFns);
_uniq_var_163;
var _uniq_var_164 = (function () {var _uniq_var_595 = function (_uniq_var_593, _uniq_var_594) {
if (typeof _uniq_var_593.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_593.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_593.join.apply(_uniq_var_593, arguments);
} else if (_uniq_var_593.join !== undefined) {
if (_uniq_var_594 === undefined) {
return _uniq_var_593.join;
}
_uniq_var_593.join = _uniq_var_594;
}return _uniq_var_593;
};_uniq_var_595.__lix_func__ = true;return _uniq_var_595;})()(['(function (', args, ') {\n', 'var ', _uniq_var_159, ' = arguments;\n', _uniq_var_160, ";\n", _uniq_var_161, ";\n", _uniq_var_162, _uniq_var_163, 'return ', body, ";\n", '})'], '');
_uniq_var_164;
return _uniq_var_164;
};_uniq_var_596.__lix_func__ = true;return _uniq_var_596;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_603 = function (expr0, env, ctx, prevDef) {var _uniq_var_165 = call(getUniqVarName);
_uniq_var_165;
var funcName = _uniq_var_165;
funcName;
funcName;
var expr = expr0[2];
expr;
expr;
var _uniq_var_166 = true;
_uniq_var_166;
var _uniq_var_167 = null;
_uniq_var_167;
var _uniq_var_168 = __eq__(expr[3], undefined);
_uniq_var_168;
if ((_uniq_var_166 && _uniq_var_168)) {
(_uniq_var_166 = false);
(_uniq_var_167 = (expr[3] = []));

};
_uniq_var_167;
var _uniq_var_169 = env_new(env);
_uniq_var_169;
var funcEnv = _uniq_var_169;
funcEnv;
funcEnv;
var _uniq_var_170 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_170;
var args = _uniq_var_170;
args;
args;
var _uniq_var_171 = call(getUniqVarName);
_uniq_var_171;
var tmpVar = _uniq_var_171;
tmpVar;
tmpVar;
var _uniq_var_172 = call(GenerateDefNew);
_uniq_var_172;
var def = _uniq_var_172;
def;
def;
var _uniq_var_173 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_173;
var body = _uniq_var_173;
body;
body;
var _uniq_var_174 = transformVarName('arguments');
_uniq_var_174;
var _uniq_var_175 = (function () {var _uniq_var_599 = function (_uniq_var_597, _uniq_var_598) {
if (typeof _uniq_var_597.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_597.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_597.join.apply(_uniq_var_597, arguments);
} else if (_uniq_var_597.join !== undefined) {
if (_uniq_var_598 === undefined) {
return _uniq_var_597.join;
}
_uniq_var_597.join = _uniq_var_598;
}return _uniq_var_597;
};_uniq_var_599.__lix_func__ = true;return _uniq_var_599;})()(expr[3], ";\n");
_uniq_var_175;
var _uniq_var_176 = call(def.defineVar);
_uniq_var_176;
var _uniq_var_177 = call(def.appendExpr);
_uniq_var_177;
var _uniq_var_178 = call(def.definedFns);
_uniq_var_178;
var _uniq_var_179 = (function () {var _uniq_var_602 = function (_uniq_var_600, _uniq_var_601) {
if (typeof _uniq_var_600.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_600.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_600.join.apply(_uniq_var_600, arguments);
} else if (_uniq_var_600.join !== undefined) {
if (_uniq_var_601 === undefined) {
return _uniq_var_600.join;
}
_uniq_var_600.join = _uniq_var_601;
}return _uniq_var_600;
};_uniq_var_602.__lix_func__ = true;return _uniq_var_602;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_174, ' = arguments;\n', _uniq_var_175, ";\n", _uniq_var_176, ";\n", _uniq_var_177, ";\n", _uniq_var_178, ";\n", 'return ', body, ";\n", '}'], '');
_uniq_var_179;
var _uniq_var_180 = prevDef.appendExpr(_uniq_var_179);
_uniq_var_180;
_uniq_var_180;
var _uniq_var_181 = getAtomicExprVarName(expr0[0]);
_uniq_var_181;
var _uniq_var_182 = prevDef.defineFn(_uniq_var_181, funcName, expr0[3], expr[0].length);
_uniq_var_182;
_uniq_var_182;
return undefined;
};_uniq_var_603.__lix_func__ = true;return _uniq_var_603;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_605 = function (expr, env, ctx, def) {var _uniq_var_183 = generate(expr[1], env, ctx0, def);
_uniq_var_183;
var func = _uniq_var_183;
func;
func;
var _uniq_var_184 = generate(expr[0], env, ctx0, def);
_uniq_var_184;
var args = _uniq_var_184;
args;
args;
var _uniq_var_190 = foreach(expr, (function () {var _uniq_var_604 = function (item, index) {var _uniq_var_185 = true;
_uniq_var_185;
var _uniq_var_186 = null;
_uniq_var_186;
var _uniq_var_189 = __gt__(index, 1);
_uniq_var_189;
if ((_uniq_var_185 && _uniq_var_189)) {
(_uniq_var_185 = false);
var _uniq_var_187 = generate(item, env, ctx0, def);
_uniq_var_187;
var _uniq_var_188 = join([args, ', ', _uniq_var_187]);
_uniq_var_188;
(_uniq_var_186 = (args = _uniq_var_188));

};
return _uniq_var_186;
};_uniq_var_604.__lix_func__ = true;return _uniq_var_604;})());
_uniq_var_190;
_uniq_var_190;
var _uniq_var_191 = join([func, '(', args, ')']);
_uniq_var_191;
var _uniq_var_192 = ctx(_uniq_var_191);
_uniq_var_192;
return _uniq_var_192;
};_uniq_var_605.__lix_func__ = true;return _uniq_var_605;})();
generateExpr;
generateExpr;
var predefineFn = (function () {var _uniq_var_632 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_612 = function (n) {var ret = [];
ret;
ret;
var i = 0;
i;
i;
var _uniq_var_193 = __lt__(i, n);
_uniq_var_193;
while (_uniq_var_193) {
var _uniq_var_194 = __add__(prefix, i);
_uniq_var_194;
var _uniq_var_195 = (function () {var _uniq_var_608 = function (_uniq_var_606, _uniq_var_607) {
if (typeof _uniq_var_606.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_606.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_606.push.apply(_uniq_var_606, arguments);
} else if (_uniq_var_606.push !== undefined) {
if (_uniq_var_607 === undefined) {
return _uniq_var_606.push;
}
_uniq_var_606.push = _uniq_var_607;
}return _uniq_var_606;
};_uniq_var_608.__lix_func__ = true;return _uniq_var_608;})()(ret, _uniq_var_194);
_uniq_var_195;
_uniq_var_195;
var _uniq_var_196 = __add__(i, 1);
_uniq_var_196;
(i = _uniq_var_196);
var _uniq_var_193 = __lt__(i, n);
_uniq_var_193;
}
null;
var _uniq_var_197 = (function () {var _uniq_var_611 = function (_uniq_var_609, _uniq_var_610) {
if (typeof _uniq_var_609.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_609.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_609.join.apply(_uniq_var_609, arguments);
} else if (_uniq_var_609.join !== undefined) {
if (_uniq_var_610 === undefined) {
return _uniq_var_609.join;
}
_uniq_var_609.join = _uniq_var_610;
}return _uniq_var_609;
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})()(ret, ", ");
_uniq_var_197;
return _uniq_var_197;
};_uniq_var_612.__lix_func__ = true;return _uniq_var_612;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_212 = foreach(candidates, (function () {var _uniq_var_625 = function (item) {var _uniq_var_198 = true;
_uniq_var_198;
var _uniq_var_199 = null;
_uniq_var_199;
var _uniq_var_200 = __gt__(item.narg, max_narg);
_uniq_var_200;
if ((_uniq_var_198 && _uniq_var_200)) {
(_uniq_var_198 = false);
(_uniq_var_199 = (max_narg = item.narg));

};
_uniq_var_199;
var _uniq_var_201 = flattenArgumentsCondition(item.condition);
_uniq_var_201;
var condition = _uniq_var_201;
condition;
condition;
var _uniq_var_202 = call(getArgListString, item.narg);
_uniq_var_202;
var _uniq_var_203 = (function () {var _uniq_var_615 = function (_uniq_var_613, _uniq_var_614) {
if (typeof _uniq_var_613.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_613.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_613.join.apply(_uniq_var_613, arguments);
} else if (_uniq_var_613.join !== undefined) {
if (_uniq_var_614 === undefined) {
return _uniq_var_613.join;
}
_uniq_var_613.join = _uniq_var_614;
}return _uniq_var_613;
};_uniq_var_615.__lix_func__ = true;return _uniq_var_615;})()(["return ", item.func, "(", _uniq_var_202, ");\n"], "");
_uniq_var_203;
var stmt = _uniq_var_203;
stmt;
stmt;
var _uniq_var_204 = true;
_uniq_var_204;
var _uniq_var_205 = null;
_uniq_var_205;
var _uniq_var_207 = __eq__(item.condition[1], "{va_args}");
_uniq_var_207;
if ((_uniq_var_204 && _uniq_var_207)) {
(_uniq_var_204 = false);
var _uniq_var_206 = (function () {var _uniq_var_618 = function (_uniq_var_616, _uniq_var_617) {
if (typeof _uniq_var_616.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_616.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_616.join.apply(_uniq_var_616, arguments);
} else if (_uniq_var_616.join !== undefined) {
if (_uniq_var_617 === undefined) {
return _uniq_var_616.join;
}
_uniq_var_616.join = _uniq_var_617;
}return _uniq_var_616;
};_uniq_var_618.__lix_func__ = true;return _uniq_var_618;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
_uniq_var_206;
var stmt = _uniq_var_206;
stmt;
(_uniq_var_205 = stmt);

};
_uniq_var_205;
var _uniq_var_208 = true;
_uniq_var_208;
var _uniq_var_209 = null;
_uniq_var_209;
if ((_uniq_var_208 && condition)) {
(_uniq_var_208 = false);
var _uniq_var_210 = (function () {var _uniq_var_621 = function (_uniq_var_619, _uniq_var_620) {
if (typeof _uniq_var_619.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_619.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_619.join.apply(_uniq_var_619, arguments);
} else if (_uniq_var_619.join !== undefined) {
if (_uniq_var_620 === undefined) {
return _uniq_var_619.join;
}
_uniq_var_619.join = _uniq_var_620;
}return _uniq_var_619;
};_uniq_var_621.__lix_func__ = true;return _uniq_var_621;})()(["if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_210;
(_uniq_var_209 = (stmt = _uniq_var_210));

};
_uniq_var_209;
var _uniq_var_211 = (function () {var _uniq_var_624 = function (_uniq_var_622, _uniq_var_623) {
if (typeof _uniq_var_622.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_622.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_622.push.apply(_uniq_var_622, arguments);
} else if (_uniq_var_622.push !== undefined) {
if (_uniq_var_623 === undefined) {
return _uniq_var_622.push;
}
_uniq_var_622.push = _uniq_var_623;
}return _uniq_var_622;
};_uniq_var_624.__lix_func__ = true;return _uniq_var_624;})()(body, stmt);
_uniq_var_211;
return _uniq_var_211;
};_uniq_var_625.__lix_func__ = true;return _uniq_var_625;})());
_uniq_var_212;
_uniq_var_212;
var _uniq_var_213 = (function () {var _uniq_var_628 = function (_uniq_var_626, _uniq_var_627) {
if (typeof _uniq_var_626.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_626.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_626.join.apply(_uniq_var_626, arguments);
} else if (_uniq_var_626.join !== undefined) {
if (_uniq_var_627 === undefined) {
return _uniq_var_626.join;
}
_uniq_var_626.join = _uniq_var_627;
}return _uniq_var_626;
};_uniq_var_628.__lix_func__ = true;return _uniq_var_628;})()(body, "");
_uniq_var_213;
(body = _uniq_var_213);
var _uniq_var_214 = call(getArgListString, max_narg);
_uniq_var_214;
var _uniq_var_215 = (function () {var _uniq_var_631 = function (_uniq_var_629, _uniq_var_630) {
if (typeof _uniq_var_629.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_629.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_629.join.apply(_uniq_var_629, arguments);
} else if (_uniq_var_629.join !== undefined) {
if (_uniq_var_630 === undefined) {
return _uniq_var_629.join;
}
_uniq_var_629.join = _uniq_var_630;
}return _uniq_var_629;
};_uniq_var_631.__lix_func__ = true;return _uniq_var_631;})()(["function ", name, "(", _uniq_var_214, ") {\n", body, "}\n"], "");
_uniq_var_215;
return _uniq_var_215;
};_uniq_var_632.__lix_func__ = true;return _uniq_var_632;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_662 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_633 = function (d) {return (destructed = d);
};_uniq_var_633.__lix_func__ = true;return _uniq_var_633;})(),
desctructedVars: (function () {var _uniq_var_637 = function () {var _uniq_var_216 = (function () {var _uniq_var_636 = function (_uniq_var_634, _uniq_var_635) {
if (typeof _uniq_var_634.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_634.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_634.join.apply(_uniq_var_634, arguments);
} else if (_uniq_var_634.join !== undefined) {
if (_uniq_var_635 === undefined) {
return _uniq_var_634.join;
}
_uniq_var_634.join = _uniq_var_635;
}return _uniq_var_634;
};_uniq_var_636.__lix_func__ = true;return _uniq_var_636;})()(destructed, ";\n");
_uniq_var_216;
return _uniq_var_216;
};_uniq_var_637.__lix_func__ = true;return _uniq_var_637;})(),
defineFn: (function () {var _uniq_var_641 = function (name, func, condition, narg) {var _uniq_var_217 = true;
_uniq_var_217;
var _uniq_var_218 = null;
_uniq_var_218;
var _uniq_var_219 = __eq__(fns[name], undefined);
_uniq_var_219;
if ((_uniq_var_217 && _uniq_var_219)) {
(_uniq_var_217 = false);
(_uniq_var_218 = (fns[name] = []));

};
_uniq_var_218;
var _uniq_var_220 = (function () {var _uniq_var_640 = function (_uniq_var_638, _uniq_var_639) {
if (typeof _uniq_var_638.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_638.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_638.push.apply(_uniq_var_638, arguments);
} else if (_uniq_var_638.push !== undefined) {
if (_uniq_var_639 === undefined) {
return _uniq_var_638.push;
}
_uniq_var_638.push = _uniq_var_639;
}return _uniq_var_638;
};_uniq_var_640.__lix_func__ = true;return _uniq_var_640;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_220;
return _uniq_var_220;
};_uniq_var_641.__lix_func__ = true;return _uniq_var_641;})(),
definedFns: (function () {var _uniq_var_649 = function () {var ret = [];
ret;
ret;
var _uniq_var_223 = foreach(fns, (function () {var _uniq_var_645 = function (item, name) {var _uniq_var_221 = predefineFn(name, item);
_uniq_var_221;
var _uniq_var_222 = (function () {var _uniq_var_644 = function (_uniq_var_642, _uniq_var_643) {
if (typeof _uniq_var_642.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_642.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_642.push.apply(_uniq_var_642, arguments);
} else if (_uniq_var_642.push !== undefined) {
if (_uniq_var_643 === undefined) {
return _uniq_var_642.push;
}
_uniq_var_642.push = _uniq_var_643;
}return _uniq_var_642;
};_uniq_var_644.__lix_func__ = true;return _uniq_var_644;})()(ret, _uniq_var_221);
_uniq_var_222;
return _uniq_var_222;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})());
_uniq_var_223;
_uniq_var_223;
var _uniq_var_224 = (function () {var _uniq_var_648 = function (_uniq_var_646, _uniq_var_647) {
if (typeof _uniq_var_646.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_646.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_646.join.apply(_uniq_var_646, arguments);
} else if (_uniq_var_646.join !== undefined) {
if (_uniq_var_647 === undefined) {
return _uniq_var_646.join;
}
_uniq_var_646.join = _uniq_var_647;
}return _uniq_var_646;
};_uniq_var_648.__lix_func__ = true;return _uniq_var_648;})()(ret, "\n");
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_649.__lix_func__ = true;return _uniq_var_649;})(),
defineVar: (function () {var _uniq_var_654 = function (v) {var _uniq_var_225 = true;
_uniq_var_225;
var _uniq_var_226 = null;
_uniq_var_226;
if ((_uniq_var_225 && v)) {
(_uniq_var_225 = false);
(_uniq_var_226 = (vars[v] = v));

};
if (_uniq_var_225) {
var _uniq_var_227 = map(vars, (function () {var _uniq_var_650 = function (i) {return i;
};_uniq_var_650.__lix_func__ = true;return _uniq_var_650;})());
_uniq_var_227;
var vecs = _uniq_var_227;
vecs;
vecs;
var _uniq_var_228 = true;
_uniq_var_228;
var _uniq_var_229 = null;
_uniq_var_229;
var _uniq_var_232 = __gt__(vecs.length, 0);
_uniq_var_232;
if ((_uniq_var_228 && _uniq_var_232)) {
(_uniq_var_228 = false);
var _uniq_var_230 = (function () {var _uniq_var_653 = function (_uniq_var_651, _uniq_var_652) {
if (typeof _uniq_var_651.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_651.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_651.join.apply(_uniq_var_651, arguments);
} else if (_uniq_var_651.join !== undefined) {
if (_uniq_var_652 === undefined) {
return _uniq_var_651.join;
}
_uniq_var_651.join = _uniq_var_652;
}return _uniq_var_651;
};_uniq_var_653.__lix_func__ = true;return _uniq_var_653;})()(vecs, ', ');
_uniq_var_230;
var _uniq_var_231 = __add__('var ', _uniq_var_230);
_uniq_var_231;
(_uniq_var_229 = _uniq_var_231);

};
if (_uniq_var_228) {
(_uniq_var_229 = '');

};
(_uniq_var_226 = _uniq_var_229);

};
return _uniq_var_226;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})(),
appendExpr: (function () {var _uniq_var_661 = function (v) {var _uniq_var_233 = true;
_uniq_var_233;
var _uniq_var_234 = null;
_uniq_var_234;
if ((_uniq_var_233 && v)) {
(_uniq_var_233 = false);
var _uniq_var_235 = (function () {var _uniq_var_657 = function (_uniq_var_655, _uniq_var_656) {
if (typeof _uniq_var_655.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_655.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_655.push.apply(_uniq_var_655, arguments);
} else if (_uniq_var_655.push !== undefined) {
if (_uniq_var_656 === undefined) {
return _uniq_var_655.push;
}
_uniq_var_655.push = _uniq_var_656;
}return _uniq_var_655;
};_uniq_var_657.__lix_func__ = true;return _uniq_var_657;})()(funcs, v);
_uniq_var_235;
(_uniq_var_234 = _uniq_var_235);

};
if (_uniq_var_233) {
var _uniq_var_236 = (function () {var _uniq_var_660 = function (_uniq_var_658, _uniq_var_659) {
if (typeof _uniq_var_658.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_658.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_658.join.apply(_uniq_var_658, arguments);
} else if (_uniq_var_658.join !== undefined) {
if (_uniq_var_659 === undefined) {
return _uniq_var_658.join;
}
_uniq_var_658.join = _uniq_var_659;
}return _uniq_var_658;
};_uniq_var_660.__lix_func__ = true;return _uniq_var_660;})()(funcs, ';\n');
_uniq_var_236;
(_uniq_var_234 = _uniq_var_236);

};
return _uniq_var_234;
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})()
};
};_uniq_var_662.__lix_func__ = true;return _uniq_var_662;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_663 = function (expr, env, ctx, def) {var _uniq_var_237 = call(GenerateDefNew);
_uniq_var_237;
var def = _uniq_var_237;
def;
def;
var _uniq_var_238 = generate(expr[0], env, ctx, def);
_uniq_var_238;
var body = _uniq_var_238;
body;
body;
var _uniq_var_239 = join(['module.exports = ', body, '\n']);
_uniq_var_239;
var body = _uniq_var_239;
body;
body;
var _uniq_var_240 = call(def.defineVar);
_uniq_var_240;
var _uniq_var_241 = call(def.appendExpr);
_uniq_var_241;
var _uniq_var_242 = call(def.definedFns);
_uniq_var_242;
var _uniq_var_243 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_240, ";\n", _uniq_var_241, ";\n", _uniq_var_242, ";\n", body]);
_uniq_var_243;
return _uniq_var_243;
};_uniq_var_663.__lix_func__ = true;return _uniq_var_663;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_664 = function (expr, env, ctx, def) {var _uniq_var_244 = generate(expr[0], env, ctx, def);
_uniq_var_244;
return _uniq_var_244;
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_665 = function (expr, env, ctx, def) {var _uniq_var_245 = join(['"', expr[0], '"']);
_uniq_var_245;
return _uniq_var_245;
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_666 = function (expr, env, ctx, def) {var _uniq_var_246 = generate(expr[0], env, ctx, def);
_uniq_var_246;
var _uniq_var_247 = join(['("', expr[2], '" + ', _uniq_var_246, ')']);
_uniq_var_247;
return _uniq_var_247;
};_uniq_var_666.__lix_func__ = true;return _uniq_var_666;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_671 = function (expr, env, ctx, def) {var _uniq_var_249 = map(expr[0], (function () {var _uniq_var_667 = function (i) {var _uniq_var_248 = generate(i, env, ctx, def);
_uniq_var_248;
return _uniq_var_248;
};_uniq_var_667.__lix_func__ = true;return _uniq_var_667;})());
_uniq_var_249;
var _uniq_var_250 = (function () {var _uniq_var_670 = function (_uniq_var_668, _uniq_var_669) {
if (typeof _uniq_var_668.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_668.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_668.join.apply(_uniq_var_668, arguments);
} else if (_uniq_var_668.join !== undefined) {
if (_uniq_var_669 === undefined) {
return _uniq_var_668.join;
}
_uniq_var_668.join = _uniq_var_669;
}return _uniq_var_668;
};_uniq_var_670.__lix_func__ = true;return _uniq_var_670;})()(_uniq_var_249, ',');
_uniq_var_250;
var path = _uniq_var_250;
path;
path;
var _uniq_var_251 = join(['[', path, '].join("/")']);
_uniq_var_251;
return _uniq_var_251;
};_uniq_var_671.__lix_func__ = true;return _uniq_var_671;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_675 = function (expr, env, ctx, def) {var _uniq_var_252 = (function () {var _uniq_var_674 = function (_uniq_var_672, _uniq_var_673) {
if (typeof _uniq_var_672.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_672.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_672.join.apply(_uniq_var_672, arguments);
} else if (_uniq_var_672.join !== undefined) {
if (_uniq_var_673 === undefined) {
return _uniq_var_672.join;
}
_uniq_var_672.join = _uniq_var_673;
}return _uniq_var_672;
};_uniq_var_674.__lix_func__ = true;return _uniq_var_674;})()(['"', expr[0], '"'], '');
_uniq_var_252;
var name = [_uniq_var_252, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_675.__lix_func__ = true;return _uniq_var_675;})();
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
var generateOp = (function () {var _uniq_var_676 = function (hint) {var _uniq_var_253 = true;
_uniq_var_253;
var _uniq_var_254 = null;
_uniq_var_254;
if ((_uniq_var_253 && generateOpTable[hint])) {
(_uniq_var_253 = false);
(_uniq_var_254 = generateOpTable[hint]);

};
if (_uniq_var_253) {
(_uniq_var_254 = generateExpr);

};
return _uniq_var_254;
};_uniq_var_676.__lix_func__ = true;return _uniq_var_676;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_677 = function (expr, env, ctx, def) {var _uniq_var_255 = generateOp(expr[1]);
_uniq_var_255;
var _uniq_var_256 = _uniq_var_255(expr, env, ctx, def);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_677.__lix_func__ = true;return _uniq_var_677;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_679 = function (env) {var _uniq_var_257 = env;
_uniq_var_257;
if (not(_uniq_var_257)) {
(_uniq_var_257 = env0);

};
(env = _uniq_var_257);
var Env = (function () {var _uniq_var_678 = function () {;
};_uniq_var_678.__lix_func__ = true;return _uniq_var_678;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_258 = _instance_(Env);
_uniq_var_258;
return _uniq_var_258;
};_uniq_var_679.__lix_func__ = true;return _uniq_var_679;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_681 = function (expr, define) {var _uniq_var_260 = map(expr, (function () {var _uniq_var_680 = function (item) {var _uniq_var_259 = flatten(item, define);
_uniq_var_259;
return _uniq_var_259;
};_uniq_var_680.__lix_func__ = true;return _uniq_var_680;})());
_uniq_var_260;
var _uniq_var_261 = define(_uniq_var_260);
_uniq_var_261;
return _uniq_var_261;
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_682 = function (expr, define) {return expr;
};_uniq_var_682.__lix_func__ = true;return _uniq_var_682;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_687 = function (expr, define) {var _uniq_var_262 = call(statementFlattenGenerator);
_uniq_var_262;
var whileDefine = _uniq_var_262;
whileDefine;
whileDefine;
var _uniq_var_263 = flatten(expr[0], whileDefine);
_uniq_var_263;
(expr[0] = _uniq_var_263);
var _uniq_var_264 = flatten(expr[2], define0);
_uniq_var_264;
(expr[2] = _uniq_var_264);
var _uniq_var_265 = call(whileDefine);
_uniq_var_265;
var _uniq_var_266 = (function () {var _uniq_var_685 = function (_uniq_var_683, _uniq_var_684) {
if (typeof _uniq_var_683.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_683.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_683.concat.apply(_uniq_var_683, arguments);
} else if (_uniq_var_683.concat !== undefined) {
if (_uniq_var_684 === undefined) {
return _uniq_var_683.concat;
}
_uniq_var_683.concat = _uniq_var_684;
}return _uniq_var_683;
};_uniq_var_685.__lix_func__ = true;return _uniq_var_685;})()(expr[2][0], _uniq_var_265);
_uniq_var_266;
(expr[2][0] = _uniq_var_266);
var _uniq_var_267 = call(whileDefine);
_uniq_var_267;
var _uniq_var_269 = foreach(_uniq_var_267, (function () {var _uniq_var_686 = function (i) {var _uniq_var_268 = define(i, true);
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_686.__lix_func__ = true;return _uniq_var_686;})());
_uniq_var_269;
_uniq_var_269;
var _uniq_var_270 = define(expr, true);
_uniq_var_270;
_uniq_var_270;
return ['', '{empty}'];
};_uniq_var_687.__lix_func__ = true;return _uniq_var_687;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_692 = function (expr, define) {var _uniq_var_271 = flatten(expr[0], define);
_uniq_var_271;
var ret = _uniq_var_271;
ret;
ret;
var _uniq_var_272 = true;
_uniq_var_272;
var _uniq_var_273 = null;
_uniq_var_273;
var _uniq_var_275 = __ne__(ret[2], 'var');
_uniq_var_275;
if ((_uniq_var_272 && _uniq_var_275)) {
(_uniq_var_272 = false);
var _uniq_var_274 = define(ret);
_uniq_var_274;
var ret = _uniq_var_274;
ret;
(_uniq_var_273 = ret);

};
_uniq_var_273;
var getAndOpSeq = (function () {var _uniq_var_691 = function () {var _uniq_var_276 = call(statementFlattenGenerator);
_uniq_var_276;
var AndDefine = _uniq_var_276;
AndDefine;
AndDefine;
var _uniq_var_277 = flatten(expr[2], AndDefine);
_uniq_var_277;
var seqRet = _uniq_var_277;
seqRet;
seqRet;
var _uniq_var_278 = call(AndDefine);
_uniq_var_278;
var seq = _uniq_var_278;
seq;
seq;
var _uniq_var_279 = (function () {var _uniq_var_690 = function (_uniq_var_688, _uniq_var_689) {
if (typeof _uniq_var_688.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_688.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_688.push.apply(_uniq_var_688, arguments);
} else if (_uniq_var_688.push !== undefined) {
if (_uniq_var_689 === undefined) {
return _uniq_var_688.push;
}
_uniq_var_688.push = _uniq_var_689;
}return _uniq_var_688;
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})()(seq, [ret, '=', seqRet]);
_uniq_var_279;
_uniq_var_279;
return [seq, '{seq}'];
};_uniq_var_691.__lix_func__ = true;return _uniq_var_691;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_280 = call(getAndOpSeq);
_uniq_var_280;
var _uniq_var_281 = define([[[ret, [[], '{empty}']], [_uniq_var_280, 'else']], 'if'], true);
_uniq_var_281;
_uniq_var_281;
return ret;
};_uniq_var_692.__lix_func__ = true;return _uniq_var_692;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_697 = function (expr, define) {var _uniq_var_282 = flatten(expr[0], define);
_uniq_var_282;
var ret = _uniq_var_282;
ret;
ret;
var _uniq_var_283 = true;
_uniq_var_283;
var _uniq_var_284 = null;
_uniq_var_284;
var _uniq_var_286 = __ne__(ret[2], 'var');
_uniq_var_286;
if ((_uniq_var_283 && _uniq_var_286)) {
(_uniq_var_283 = false);
var _uniq_var_285 = define(ret);
_uniq_var_285;
var ret = _uniq_var_285;
ret;
(_uniq_var_284 = ret);

};
_uniq_var_284;
var getAndOpSeq = (function () {var _uniq_var_696 = function () {var _uniq_var_287 = call(statementFlattenGenerator);
_uniq_var_287;
var AndDefine = _uniq_var_287;
AndDefine;
AndDefine;
var _uniq_var_288 = flatten(expr[2], AndDefine);
_uniq_var_288;
var seqRet = _uniq_var_288;
seqRet;
seqRet;
var _uniq_var_289 = call(AndDefine);
_uniq_var_289;
var seq = _uniq_var_289;
seq;
seq;
var _uniq_var_290 = (function () {var _uniq_var_695 = function (_uniq_var_693, _uniq_var_694) {
if (typeof _uniq_var_693.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_693.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_693.push.apply(_uniq_var_693, arguments);
} else if (_uniq_var_693.push !== undefined) {
if (_uniq_var_694 === undefined) {
return _uniq_var_693.push;
}
_uniq_var_693.push = _uniq_var_694;
}return _uniq_var_693;
};_uniq_var_695.__lix_func__ = true;return _uniq_var_695;})()(seq, [ret, '=', seqRet]);
_uniq_var_290;
_uniq_var_290;
return [seq, '{seq}'];
};_uniq_var_696.__lix_func__ = true;return _uniq_var_696;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_291 = call(getAndOpSeq);
_uniq_var_291;
var _uniq_var_292 = define([[[ret, _uniq_var_291]], 'if'], true);
_uniq_var_292;
_uniq_var_292;
return ret;
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_702 = function (expr, define, tmpVar, ctx) {var _uniq_var_305 = foreach(expr[0], (function () {var _uniq_var_701 = function (i) {var _uniq_var_293 = true;
_uniq_var_293;
var _uniq_var_294 = null;
_uniq_var_294;
var _uniq_var_297 = __eq__(i[1], 'else');
_uniq_var_297;
if ((_uniq_var_293 && _uniq_var_297)) {
(_uniq_var_293 = false);
var _uniq_var_295 = flatten(i[0], define0, ctx);
_uniq_var_295;
var elseSeq = _uniq_var_295;
elseSeq;
elseSeq;
var _uniq_var_296 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_296;
(_uniq_var_294 = _uniq_var_296);

};
var _uniq_var_300 = __eq__(i[1], 'if');
_uniq_var_300;
if ((_uniq_var_293 && _uniq_var_300)) {
(_uniq_var_293 = false);
var _uniq_var_298 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_298;
var _uniq_var_299 = define(_uniq_var_298);
_uniq_var_299;
(_uniq_var_294 = _uniq_var_299);

};
if (_uniq_var_293) {
var _uniq_var_301 = flatten(i[1], define0, ctx);
_uniq_var_301;
var ifSeq = _uniq_var_301;
ifSeq;
ifSeq;
var _uniq_var_302 = (function () {var _uniq_var_700 = function (_uniq_var_698, _uniq_var_699) {
if (typeof _uniq_var_698.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_698.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_698.unshift.apply(_uniq_var_698, arguments);
} else if (_uniq_var_698.unshift !== undefined) {
if (_uniq_var_699 === undefined) {
return _uniq_var_698.unshift;
}
_uniq_var_698.unshift = _uniq_var_699;
}return _uniq_var_698;
};_uniq_var_700.__lix_func__ = true;return _uniq_var_700;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_302;
_uniq_var_302;
var _uniq_var_303 = flatten(i[0], define);
_uniq_var_303;
var cond = _uniq_var_303;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_304 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_304;
(_uniq_var_294 = _uniq_var_304);

};
return _uniq_var_294;
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})());
_uniq_var_305;
return _uniq_var_305;
};_uniq_var_702.__lix_func__ = true;return _uniq_var_702;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_703 = function (expr, define) {var _uniq_var_306 = define(['true', '{atomic}'], 'new');
_uniq_var_306;
var tmpVar = _uniq_var_306;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_307 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_307;
_uniq_var_307;
return retVar;
};_uniq_var_703.__lix_func__ = true;return _uniq_var_703;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_704 = function (expr, define) {var _uniq_var_308 = flatten(expr[2], define);
_uniq_var_308;
(expr[2] = _uniq_var_308);
return expr;
};_uniq_var_704.__lix_func__ = true;return _uniq_var_704;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_708 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_309 = true;
_uniq_var_309;
var _uniq_var_310 = null;
_uniq_var_310;
var _uniq_var_314 = __gt__(expr.length, 3);
_uniq_var_314;
if ((_uniq_var_309 && _uniq_var_314)) {
(_uniq_var_309 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_311 = __lt__(i, expr.length);
_uniq_var_311;
while (_uniq_var_311) {
var _uniq_var_312 = (function () {var _uniq_var_707 = function (_uniq_var_705, _uniq_var_706) {
if (typeof _uniq_var_705.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_705.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_705.push.apply(_uniq_var_705, arguments);
} else if (_uniq_var_705.push !== undefined) {
if (_uniq_var_706 === undefined) {
return _uniq_var_705.push;
}
_uniq_var_705.push = _uniq_var_706;
}return _uniq_var_705;
};_uniq_var_707.__lix_func__ = true;return _uniq_var_707;})()(partialExpr, expr[i]);
_uniq_var_312;
_uniq_var_312;
var _uniq_var_313 = __add__(i, 1);
_uniq_var_313;
(i = _uniq_var_313);
var _uniq_var_311 = __lt__(i, expr.length);
_uniq_var_311;
}
null;
(_uniq_var_310 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_310;
var _uniq_var_315 = flattenExpr(expr, define);
_uniq_var_315;
return _uniq_var_315;
};_uniq_var_708.__lix_func__ = true;return _uniq_var_708;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_709 = function (expr, define) {var _uniq_var_316 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_316;
return _uniq_var_316;
};_uniq_var_709.__lix_func__ = true;return _uniq_var_709;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_710 = function (expr, define) {var _uniq_var_317 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_317;
return _uniq_var_317;
};_uniq_var_710.__lix_func__ = true;return _uniq_var_710;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_711 = function (expr, define) {var _uniq_var_318 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_318;
return _uniq_var_318;
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_712 = function (expr, define) {var _uniq_var_319 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_319;
return _uniq_var_319;
};_uniq_var_712.__lix_func__ = true;return _uniq_var_712;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_713 = function (expr, define) {var _uniq_var_320 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_320;
return _uniq_var_320;
};_uniq_var_713.__lix_func__ = true;return _uniq_var_713;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_714 = function (expr, define) {var _uniq_var_321 = flatten(expr[0], define);
_uniq_var_321;
(expr[0] = _uniq_var_321);
return expr;
};_uniq_var_714.__lix_func__ = true;return _uniq_var_714;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_715 = function (expr, define) {return expr;
};_uniq_var_715.__lix_func__ = true;return _uniq_var_715;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_717 = function (expr, define) {var _uniq_var_323 = map(expr[0], (function () {var _uniq_var_716 = function (i) {var _uniq_var_322 = flatten(i, define);
_uniq_var_322;
return _uniq_var_322;
};_uniq_var_716.__lix_func__ = true;return _uniq_var_716;})());
_uniq_var_323;
(expr[0] = _uniq_var_323);
return expr;
};_uniq_var_717.__lix_func__ = true;return _uniq_var_717;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_718 = function (expr, define) {return expr;
};_uniq_var_718.__lix_func__ = true;return _uniq_var_718;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_719 = function (expr, define) {var _uniq_var_324 = true;
_uniq_var_324;
var _uniq_var_325 = null;
_uniq_var_325;
var _uniq_var_327 = __eq__(expr[1], '{index}');
_uniq_var_327;
if ((_uniq_var_324 && _uniq_var_327)) {
(_uniq_var_324 = false);
var _uniq_var_326 = flatten(expr[0], define);
_uniq_var_326;
(_uniq_var_325 = (expr[0] = _uniq_var_326));

};
_uniq_var_325;
return expr;
};_uniq_var_719.__lix_func__ = true;return _uniq_var_719;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_724 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_723 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_328 = true;
_uniq_var_328;
var _uniq_var_329 = null;
_uniq_var_329;
var _uniq_var_335 = __eq__(arguments.length, 2);
_uniq_var_335;
if ((_uniq_var_328 && _uniq_var_335)) {
(_uniq_var_328 = false);
var _uniq_var_330 = true;
_uniq_var_330;
var _uniq_var_331 = null;
_uniq_var_331;
var _uniq_var_334 = __eq__(defined[name], undefined);
_uniq_var_334;
if ((_uniq_var_330 && _uniq_var_334)) {
(_uniq_var_330 = false);
var _uniq_var_332 = call(getUniqVarName);
_uniq_var_332;
var varName = _uniq_var_332;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_333 = (function () {var _uniq_var_722 = function (_uniq_var_720, _uniq_var_721) {
if (typeof _uniq_var_720.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_720.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_720.push.apply(_uniq_var_720, arguments);
} else if (_uniq_var_720.push !== undefined) {
if (_uniq_var_721 === undefined) {
return _uniq_var_720.push;
}
_uniq_var_720.push = _uniq_var_721;
}return _uniq_var_720;
};_uniq_var_722.__lix_func__ = true;return _uniq_var_722;})()(statements, [lixVar, ':=', value]);
_uniq_var_333;
_uniq_var_333;
(_uniq_var_331 = (defined[name] = lixVar));

};
_uniq_var_331;
(_uniq_var_329 = (ret = defined[name]));

};
if (_uniq_var_328) {
(_uniq_var_329 = (ret = statements));

};
_uniq_var_329;
return ret;
};_uniq_var_723.__lix_func__ = true;return _uniq_var_723;})();
};_uniq_var_724.__lix_func__ = true;return _uniq_var_724;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_336 = call(NewGlobalDefine);
_uniq_var_336;
var globalDefine = _uniq_var_336;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_725 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_337 = true;
_uniq_var_337;
var _uniq_var_338 = null;
_uniq_var_338;
var _uniq_var_340 = __eq__(expr[0][3], '{global}');
_uniq_var_340;
if ((_uniq_var_337 && _uniq_var_340)) {
(_uniq_var_337 = false);
var _uniq_var_339 = globalDefine(expr[0][0], expr);
_uniq_var_339;
(_uniq_var_338 = (ret = _uniq_var_339));

};
if (_uniq_var_337) {
var _uniq_var_341 = flattenField(expr[0], define);
_uniq_var_341;
(expr[0] = _uniq_var_341);
(_uniq_var_338 = (ret = expr));

};
_uniq_var_338;
return ret;
};_uniq_var_725.__lix_func__ = true;return _uniq_var_725;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_726 = function (expr, define) {var _uniq_var_342 = flatten(expr[2], define);
_uniq_var_342;
(expr[2] = _uniq_var_342);
return expr;
};_uniq_var_726.__lix_func__ = true;return _uniq_var_726;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_728 = function (expr, define) {var _uniq_var_344 = map(expr[0], (function () {var _uniq_var_727 = function (i) {var _uniq_var_343 = flattenProperty(i, define);
_uniq_var_343;
return _uniq_var_343;
};_uniq_var_727.__lix_func__ = true;return _uniq_var_727;})());
_uniq_var_344;
(expr[0] = _uniq_var_344);
return expr;
};_uniq_var_728.__lix_func__ = true;return _uniq_var_728;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_730 = function (expr, define) {var _uniq_var_346 = map(expr[0], (function () {var _uniq_var_729 = function (i) {var _uniq_var_345 = flatten(i, define);
_uniq_var_345;
return _uniq_var_345;
};_uniq_var_729.__lix_func__ = true;return _uniq_var_729;})());
_uniq_var_346;
(expr[0] = _uniq_var_346);
return expr;
};_uniq_var_730.__lix_func__ = true;return _uniq_var_730;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_731 = function (expr, define) {var _uniq_var_347 = flatten(expr[2], define);
_uniq_var_347;
(expr[2] = _uniq_var_347);
return expr;
};_uniq_var_731.__lix_func__ = true;return _uniq_var_731;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_732 = function (expr, define) {var _uniq_var_348 = true;
_uniq_var_348;
var _uniq_var_349 = null;
_uniq_var_349;
var _uniq_var_352 = __eq__(expr[1], '{.}');
_uniq_var_352;
if ((_uniq_var_348 && _uniq_var_352)) {
(_uniq_var_348 = false);
var _uniq_var_350 = flattenFieldAccess(expr[0], define);
_uniq_var_350;
(expr[0] = _uniq_var_350);
var _uniq_var_351 = flattenField(expr[2], define);
_uniq_var_351;
(_uniq_var_349 = (expr[2] = _uniq_var_351));

};
if (_uniq_var_348) {
var _uniq_var_353 = flatten(expr, define);
_uniq_var_353;
(_uniq_var_349 = (expr = _uniq_var_353));

};
_uniq_var_349;
return expr;
};_uniq_var_732.__lix_func__ = true;return _uniq_var_732;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_733 = function (expr, define) {return expr;
};_uniq_var_733.__lix_func__ = true;return _uniq_var_733;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_734 = function (expr, define) {var _uniq_var_354 = flatten(expr[0], define);
_uniq_var_354;
return _uniq_var_354;
};_uniq_var_734.__lix_func__ = true;return _uniq_var_734;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_748 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_747 = function (statement, tmpVarName) {var _uniq_var_355 = true;
_uniq_var_355;
var _uniq_var_356 = null;
_uniq_var_356;
var _uniq_var_357 = __eq__(statement, undefined);
_uniq_var_357;
if ((_uniq_var_355 && _uniq_var_357)) {
(_uniq_var_355 = false);
(_uniq_var_356 = data);

};
var _uniq_var_359 = __eq__(tmpVarName, true);
_uniq_var_359;
if ((_uniq_var_355 && _uniq_var_359)) {
(_uniq_var_355 = false);
var _uniq_var_358 = (function () {var _uniq_var_737 = function (_uniq_var_735, _uniq_var_736) {
if (typeof _uniq_var_735.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_735.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_735.push.apply(_uniq_var_735, arguments);
} else if (_uniq_var_735.push !== undefined) {
if (_uniq_var_736 === undefined) {
return _uniq_var_735.push;
}
_uniq_var_735.push = _uniq_var_736;
}return _uniq_var_735;
};_uniq_var_737.__lix_func__ = true;return _uniq_var_737;})()(data, statement);
_uniq_var_358;
(_uniq_var_356 = _uniq_var_358);

};
var _uniq_var_363 = __eq__(tmpVarName, undefined);
_uniq_var_363;
if ((_uniq_var_355 && _uniq_var_363)) {
(_uniq_var_355 = false);
var _uniq_var_360 = call(getUniqVarName);
_uniq_var_360;
var varName = _uniq_var_360;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_361 = (function () {var _uniq_var_740 = function (_uniq_var_738, _uniq_var_739) {
if (typeof _uniq_var_738.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_738.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_738.push.apply(_uniq_var_738, arguments);
} else if (_uniq_var_738.push !== undefined) {
if (_uniq_var_739 === undefined) {
return _uniq_var_738.push;
}
_uniq_var_738.push = _uniq_var_739;
}return _uniq_var_738;
};_uniq_var_740.__lix_func__ = true;return _uniq_var_740;})()(data, statement);
_uniq_var_361;
_uniq_var_361;
var _uniq_var_362 = (function () {var _uniq_var_743 = function (_uniq_var_741, _uniq_var_742) {
if (typeof _uniq_var_741.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_741.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_741.push.apply(_uniq_var_741, arguments);
} else if (_uniq_var_741.push !== undefined) {
if (_uniq_var_742 === undefined) {
return _uniq_var_741.push;
}
_uniq_var_741.push = _uniq_var_742;
}return _uniq_var_741;
};_uniq_var_743.__lix_func__ = true;return _uniq_var_743;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_362;
_uniq_var_362;
(_uniq_var_356 = lixVar);

};
var _uniq_var_366 = __eq__(tmpVarName, 'new');
_uniq_var_366;
if ((_uniq_var_355 && _uniq_var_366)) {
(_uniq_var_355 = false);
var _uniq_var_364 = call(getUniqVarName);
_uniq_var_364;
var varName = _uniq_var_364;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_365 = (function () {var _uniq_var_746 = function (_uniq_var_744, _uniq_var_745) {
if (typeof _uniq_var_744.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_744.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_744.push.apply(_uniq_var_744, arguments);
} else if (_uniq_var_744.push !== undefined) {
if (_uniq_var_745 === undefined) {
return _uniq_var_744.push;
}
_uniq_var_744.push = _uniq_var_745;
}return _uniq_var_744;
};_uniq_var_746.__lix_func__ = true;return _uniq_var_746;})()(data, [lixVar, ':=', statement]);
_uniq_var_365;
_uniq_var_365;
(_uniq_var_356 = lixVar);

};
return _uniq_var_356;
};_uniq_var_747.__lix_func__ = true;return _uniq_var_747;})();
};_uniq_var_748.__lix_func__ = true;return _uniq_var_748;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_760 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_749 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_367 = true;
_uniq_var_367;
var _uniq_var_368 = null;
_uniq_var_368;
var _uniq_var_370 = seqCtx;
_uniq_var_370;
if (_uniq_var_370) {
var _uniq_var_371 = parseInt(index);
_uniq_var_371;
var _uniq_var_372 = __sub__(expr[0].length, 1);
_uniq_var_372;
var _uniq_var_373 = __eq__(_uniq_var_371, _uniq_var_372);
_uniq_var_373;
(_uniq_var_370 = _uniq_var_373);

};
if ((_uniq_var_367 && _uniq_var_370)) {
(_uniq_var_367 = false);
var _uniq_var_369 = seqCtx(stmt);
_uniq_var_369;
var ret = _uniq_var_369;
ret;
(_uniq_var_368 = ret);

};
_uniq_var_368;
return ret;
};_uniq_var_749.__lix_func__ = true;return _uniq_var_749;})();
ctx;
ctx;
var _uniq_var_400 = foreach(expr[0], (function () {var _uniq_var_759 = function (item, index) {var _uniq_var_374 = call(statementFlattenGenerator);
_uniq_var_374;
var exprDefine = _uniq_var_374;
exprDefine;
exprDefine;
var _uniq_var_375 = flatten(item, exprDefine);
_uniq_var_375;
var itemRet = _uniq_var_375;
itemRet;
itemRet;
var _uniq_var_376 = call(exprDefine);
_uniq_var_376;
var _uniq_var_377 = (function () {var _uniq_var_752 = function (_uniq_var_750, _uniq_var_751) {
if (typeof _uniq_var_750.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_750.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_750.concat.apply(_uniq_var_750, arguments);
} else if (_uniq_var_750.concat !== undefined) {
if (_uniq_var_751 === undefined) {
return _uniq_var_750.concat;
}
_uniq_var_750.concat = _uniq_var_751;
}return _uniq_var_750;
};_uniq_var_752.__lix_func__ = true;return _uniq_var_752;})()(ret, _uniq_var_376);
_uniq_var_377;
(ret = _uniq_var_377);
var _uniq_var_378 = ctx(itemRet, index);
_uniq_var_378;
var stmtRet = _uniq_var_378;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_753 = function (expr) {var _uniq_var_379 = __eq__(expr[1], '{atomic}');
_uniq_var_379;
var _uniq_var_380 = _uniq_var_379;
_uniq_var_380;
if (_uniq_var_380) {
var _uniq_var_381 = __ne__(expr[3], undefined);
_uniq_var_381;
(_uniq_var_380 = _uniq_var_381);

};
return _uniq_var_380;
};_uniq_var_753.__lix_func__ = true;return _uniq_var_753;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_754 = function (expr) {var _uniq_var_382 = __eq__(expr[1], '{atomic}');
_uniq_var_382;
var _uniq_var_383 = _uniq_var_382;
_uniq_var_383;
if (_uniq_var_383) {
var _uniq_var_384 = __eq__(expr[3], undefined);
_uniq_var_384;
(_uniq_var_383 = _uniq_var_384);

};
return _uniq_var_383;
};_uniq_var_754.__lix_func__ = true;return _uniq_var_754;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_755 = function (expr) {var _uniq_var_385 = isRealVar(expr);
_uniq_var_385;
var _uniq_var_386 = _uniq_var_385;
_uniq_var_386;
if (not(_uniq_var_386)) {
var _uniq_var_387 = __ne__(expr[1], 'if');
_uniq_var_387;
var _uniq_var_388 = _uniq_var_387;
_uniq_var_388;
if (_uniq_var_388) {
var _uniq_var_389 = __ne__(expr[1], 'while');
_uniq_var_389;
(_uniq_var_388 = _uniq_var_389);

};
(_uniq_var_386 = _uniq_var_388);

};
return _uniq_var_386;
};_uniq_var_755.__lix_func__ = true;return _uniq_var_755;})();
isRealExpr;
isRealExpr;
var _uniq_var_390 = true;
_uniq_var_390;
var _uniq_var_391 = null;
_uniq_var_391;
var _uniq_var_396 = __ne__(stmtRet[1], '{empty}');
_uniq_var_396;
var _uniq_var_397 = _uniq_var_396;
_uniq_var_397;
if (_uniq_var_397) {
var _uniq_var_398 = isTmpVar(stmtRet);
_uniq_var_398;
var _uniq_var_399 = not(_uniq_var_398);
_uniq_var_399;
(_uniq_var_397 = _uniq_var_399);

};
if ((_uniq_var_390 && _uniq_var_397)) {
(_uniq_var_390 = false);
var _uniq_var_392 = true;
_uniq_var_392;
var _uniq_var_393 = null;
_uniq_var_393;
var _uniq_var_394 = isRealExpr(stmtRet);
_uniq_var_394;
if ((_uniq_var_392 && _uniq_var_394)) {
(_uniq_var_392 = false);
(_uniq_var_393 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_393;
var _uniq_var_395 = (function () {var _uniq_var_758 = function (_uniq_var_756, _uniq_var_757) {
if (typeof _uniq_var_756.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_756.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_756.push.apply(_uniq_var_756, arguments);
} else if (_uniq_var_756.push !== undefined) {
if (_uniq_var_757 === undefined) {
return _uniq_var_756.push;
}
_uniq_var_756.push = _uniq_var_757;
}return _uniq_var_756;
};_uniq_var_758.__lix_func__ = true;return _uniq_var_758;})()(ret, stmtRet);
_uniq_var_395;
(_uniq_var_391 = _uniq_var_395);

};
return _uniq_var_391;
};_uniq_var_759.__lix_func__ = true;return _uniq_var_759;})());
_uniq_var_400;
_uniq_var_400;
(expr[0] = ret);
return expr;
};_uniq_var_760.__lix_func__ = true;return _uniq_var_760;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_767 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_401 = flatten(expr[0], define);
_uniq_var_401;
var ret = _uniq_var_401;
ret;
ret;
var _uniq_var_402 = call(globalDefine);
_uniq_var_402;
var _uniq_var_403 = (function () {var _uniq_var_763 = function (_uniq_var_761, _uniq_var_762) {
if (typeof _uniq_var_761.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_761.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_761.concat.apply(_uniq_var_761, arguments);
} else if (_uniq_var_761.concat !== undefined) {
if (_uniq_var_762 === undefined) {
return _uniq_var_761.concat;
}
_uniq_var_761.concat = _uniq_var_762;
}return _uniq_var_761;
};_uniq_var_763.__lix_func__ = true;return _uniq_var_763;})()(trapExpr, _uniq_var_402);
_uniq_var_403;
var _uniq_var_404 = (function () {var _uniq_var_766 = function (_uniq_var_764, _uniq_var_765) {
if (typeof _uniq_var_764.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_764.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_764.concat.apply(_uniq_var_764, arguments);
} else if (_uniq_var_764.concat !== undefined) {
if (_uniq_var_765 === undefined) {
return _uniq_var_764.concat;
}
_uniq_var_764.concat = _uniq_var_765;
}return _uniq_var_764;
};_uniq_var_766.__lix_func__ = true;return _uniq_var_766;})()(_uniq_var_403, ret[0]);
_uniq_var_404;
(ret[0] = _uniq_var_404);
return [ret, '{start}'];
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_771 = function (expr, define) {var _uniq_var_405 = true;
_uniq_var_405;
var _uniq_var_406 = null;
_uniq_var_406;
var _uniq_var_408 = __eq__(expr[2], '{var}');
_uniq_var_408;
if ((_uniq_var_405 && _uniq_var_408)) {
(_uniq_var_405 = false);
var _uniq_var_407 = (function () {var _uniq_var_770 = function (_uniq_var_768, _uniq_var_769) {
if (typeof _uniq_var_768.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_768.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_768.join.apply(_uniq_var_768, arguments);
} else if (_uniq_var_768.join !== undefined) {
if (_uniq_var_769 === undefined) {
return _uniq_var_768.join;
}
_uniq_var_768.join = _uniq_var_769;
}return _uniq_var_768;
};_uniq_var_770.__lix_func__ = true;return _uniq_var_770;})()(['"', expr[0], '"'], '');
_uniq_var_407;
var name = [_uniq_var_407, '{atomic}'];
name;
(_uniq_var_406 = name);

};
var _uniq_var_410 = __eq__(expr[2], '{index}');
_uniq_var_410;
if ((_uniq_var_405 && _uniq_var_410)) {
(_uniq_var_405 = false);
var _uniq_var_409 = flatten(expr[0], define);
_uniq_var_409;
var name = _uniq_var_409;
name;
(_uniq_var_406 = name);

};
_uniq_var_406;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_411 = define(moduleExpr);
_uniq_var_411;
return _uniq_var_411;
};_uniq_var_771.__lix_func__ = true;return _uniq_var_771;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_772 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_772.__lix_func__ = true;return _uniq_var_772;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_773 = function (expr, define) {return expr;
};_uniq_var_773.__lix_func__ = true;return _uniq_var_773;})();
flattenAmpersand;
flattenAmpersand;
var flattenAnyTypeDestructor = (function () {var _uniq_var_774 = function (arg) {return [];
};_uniq_var_774.__lix_func__ = true;return _uniq_var_774;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_775 = function (expr) {var _uniq_var_412 = transformVarName(expr[0]);
_uniq_var_412;
var varName = _uniq_var_412;
varName;
varName;
var _uniq_var_413 = true;
_uniq_var_413;
var _uniq_var_414 = null;
_uniq_var_414;
var _uniq_var_415 = __eq__(expr[3], "{tmp}");
_uniq_var_415;
if ((_uniq_var_413 && _uniq_var_415)) {
(_uniq_var_413 = false);
(_uniq_var_414 = (varName = expr[0]));

};
_uniq_var_414;
return varName;
};_uniq_var_775.__lix_func__ = true;return _uniq_var_775;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_785 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_416 = getAtomicExprVarName(args[2][0]);
_uniq_var_416;
var varName = _uniq_var_416;
varName;
varName;
var _uniq_var_417 = (function () {var _uniq_var_778 = function (_uniq_var_776, _uniq_var_777) {
if (typeof _uniq_var_776.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_776.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_776.join.apply(_uniq_var_776, arguments);
} else if (_uniq_var_776.join !== undefined) {
if (_uniq_var_777 === undefined) {
return _uniq_var_776.join;
}
_uniq_var_776.join = _uniq_var_777;
}return _uniq_var_776;
};_uniq_var_778.__lix_func__ = true;return _uniq_var_778;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_417;
var _uniq_var_418 = (function () {var _uniq_var_781 = function (_uniq_var_779, _uniq_var_780) {
if (typeof _uniq_var_779.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_779.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_779.push.apply(_uniq_var_779, arguments);
} else if (_uniq_var_779.push !== undefined) {
if (_uniq_var_780 === undefined) {
return _uniq_var_779.push;
}
_uniq_var_779.push = _uniq_var_780;
}return _uniq_var_779;
};_uniq_var_781.__lix_func__ = true;return _uniq_var_781;})()(ret, _uniq_var_417);
_uniq_var_418;
_uniq_var_418;
var _uniq_var_419 = flattenDestructor(args[2], varName);
_uniq_var_419;
var _uniq_var_420 = (function () {var _uniq_var_784 = function (_uniq_var_782, _uniq_var_783) {
if (typeof _uniq_var_782.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_782.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_782.concat.apply(_uniq_var_782, arguments);
} else if (_uniq_var_782.concat !== undefined) {
if (_uniq_var_783 === undefined) {
return _uniq_var_782.concat;
}
_uniq_var_782.concat = _uniq_var_783;
}return _uniq_var_782;
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})()(ret, _uniq_var_419);
_uniq_var_420;
(ret = _uniq_var_420);
return ret;
};_uniq_var_785.__lix_func__ = true;return _uniq_var_785;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_795 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_421 = getAtomicExprVarName(args[2][0]);
_uniq_var_421;
var varName = _uniq_var_421;
varName;
varName;
var _uniq_var_422 = (function () {var _uniq_var_788 = function (_uniq_var_786, _uniq_var_787) {
if (typeof _uniq_var_786.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_786.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_786.join.apply(_uniq_var_786, arguments);
} else if (_uniq_var_786.join !== undefined) {
if (_uniq_var_787 === undefined) {
return _uniq_var_786.join;
}
_uniq_var_786.join = _uniq_var_787;
}return _uniq_var_786;
};_uniq_var_788.__lix_func__ = true;return _uniq_var_788;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_422;
var _uniq_var_423 = (function () {var _uniq_var_791 = function (_uniq_var_789, _uniq_var_790) {
if (typeof _uniq_var_789.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_789.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_789.push.apply(_uniq_var_789, arguments);
} else if (_uniq_var_789.push !== undefined) {
if (_uniq_var_790 === undefined) {
return _uniq_var_789.push;
}
_uniq_var_789.push = _uniq_var_790;
}return _uniq_var_789;
};_uniq_var_791.__lix_func__ = true;return _uniq_var_791;})()(ret, _uniq_var_422);
_uniq_var_423;
_uniq_var_423;
var _uniq_var_424 = flattenDestructor(args[2], varName);
_uniq_var_424;
var _uniq_var_425 = (function () {var _uniq_var_794 = function (_uniq_var_792, _uniq_var_793) {
if (typeof _uniq_var_792.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_792.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_792.concat.apply(_uniq_var_792, arguments);
} else if (_uniq_var_792.concat !== undefined) {
if (_uniq_var_793 === undefined) {
return _uniq_var_792.concat;
}
_uniq_var_792.concat = _uniq_var_793;
}return _uniq_var_792;
};_uniq_var_794.__lix_func__ = true;return _uniq_var_794;})()(ret, _uniq_var_424);
_uniq_var_425;
(ret = _uniq_var_425);
return ret;
};_uniq_var_795.__lix_func__ = true;return _uniq_var_795;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_800 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_428 = foreach(args[2], (function () {var _uniq_var_799 = function (item, index) {var _uniq_var_426 = flattenDestructor(item, objName);
_uniq_var_426;
var _uniq_var_427 = (function () {var _uniq_var_798 = function (_uniq_var_796, _uniq_var_797) {
if (typeof _uniq_var_796.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_796.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_796.concat.apply(_uniq_var_796, arguments);
} else if (_uniq_var_796.concat !== undefined) {
if (_uniq_var_797 === undefined) {
return _uniq_var_796.concat;
}
_uniq_var_796.concat = _uniq_var_797;
}return _uniq_var_796;
};_uniq_var_798.__lix_func__ = true;return _uniq_var_798;})()(ret, _uniq_var_426);
_uniq_var_427;
return (ret = _uniq_var_427);
};_uniq_var_799.__lix_func__ = true;return _uniq_var_799;})());
_uniq_var_428;
_uniq_var_428;
return ret;
};_uniq_var_800.__lix_func__ = true;return _uniq_var_800;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_811 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_434 = foreach(args[2], (function () {var _uniq_var_810 = function (item, index) {var _uniq_var_429 = getAtomicExprVarName(item[0]);
_uniq_var_429;
var varName = _uniq_var_429;
varName;
varName;
var _uniq_var_430 = (function () {var _uniq_var_803 = function (_uniq_var_801, _uniq_var_802) {
if (typeof _uniq_var_801.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_801.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_801.join.apply(_uniq_var_801, arguments);
} else if (_uniq_var_801.join !== undefined) {
if (_uniq_var_802 === undefined) {
return _uniq_var_801.join;
}
_uniq_var_801.join = _uniq_var_802;
}return _uniq_var_801;
};_uniq_var_803.__lix_func__ = true;return _uniq_var_803;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_430;
var _uniq_var_431 = (function () {var _uniq_var_806 = function (_uniq_var_804, _uniq_var_805) {
if (typeof _uniq_var_804.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_804.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_804.push.apply(_uniq_var_804, arguments);
} else if (_uniq_var_804.push !== undefined) {
if (_uniq_var_805 === undefined) {
return _uniq_var_804.push;
}
_uniq_var_804.push = _uniq_var_805;
}return _uniq_var_804;
};_uniq_var_806.__lix_func__ = true;return _uniq_var_806;})()(ret, _uniq_var_430);
_uniq_var_431;
_uniq_var_431;
var _uniq_var_432 = flattenDestructor(item, varName);
_uniq_var_432;
var _uniq_var_433 = (function () {var _uniq_var_809 = function (_uniq_var_807, _uniq_var_808) {
if (typeof _uniq_var_807.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_807.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_807.concat.apply(_uniq_var_807, arguments);
} else if (_uniq_var_807.concat !== undefined) {
if (_uniq_var_808 === undefined) {
return _uniq_var_807.concat;
}
_uniq_var_807.concat = _uniq_var_808;
}return _uniq_var_807;
};_uniq_var_809.__lix_func__ = true;return _uniq_var_809;})()(ret, _uniq_var_432);
_uniq_var_433;
return (ret = _uniq_var_433);
};_uniq_var_810.__lix_func__ = true;return _uniq_var_810;})());
_uniq_var_434;
_uniq_var_434;
return ret;
};_uniq_var_811.__lix_func__ = true;return _uniq_var_811;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_837 = function (args, arrayName) {var len = args[2].length;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_435 = true;
_uniq_var_435;
var _uniq_var_436 = null;
_uniq_var_436;
var _uniq_var_439 = __ne__(arrayName, "arguments");
_uniq_var_439;
if ((_uniq_var_435 && _uniq_var_439)) {
(_uniq_var_435 = false);
var _uniq_var_437 = (function () {var _uniq_var_814 = function (_uniq_var_812, _uniq_var_813) {
if (typeof _uniq_var_812.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_812.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_812.join.apply(_uniq_var_812, arguments);
} else if (_uniq_var_812.join !== undefined) {
if (_uniq_var_813 === undefined) {
return _uniq_var_812.join;
}
_uniq_var_812.join = _uniq_var_813;
}return _uniq_var_812;
};_uniq_var_814.__lix_func__ = true;return _uniq_var_814;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_437;
var _uniq_var_438 = (function () {var _uniq_var_817 = function (_uniq_var_815, _uniq_var_816) {
if (typeof _uniq_var_815.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_815.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_815.push.apply(_uniq_var_815, arguments);
} else if (_uniq_var_815.push !== undefined) {
if (_uniq_var_816 === undefined) {
return _uniq_var_815.push;
}
_uniq_var_815.push = _uniq_var_816;
}return _uniq_var_815;
};_uniq_var_817.__lix_func__ = true;return _uniq_var_817;})()(ret, _uniq_var_437);
_uniq_var_438;
(_uniq_var_436 = _uniq_var_438);

};
_uniq_var_436;
var _uniq_var_440 = (function () {var _uniq_var_820 = function (_uniq_var_818, _uniq_var_819) {
if (typeof _uniq_var_818.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_818.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_818.join.apply(_uniq_var_818, arguments);
} else if (_uniq_var_818.join !== undefined) {
if (_uniq_var_819 === undefined) {
return _uniq_var_818.join;
}
_uniq_var_818.join = _uniq_var_819;
}return _uniq_var_818;
};_uniq_var_820.__lix_func__ = true;return _uniq_var_820;})()([arrayName, ".length == ", len], "");
_uniq_var_440;
var _uniq_var_441 = (function () {var _uniq_var_823 = function (_uniq_var_821, _uniq_var_822) {
if (typeof _uniq_var_821.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_821.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_821.push.apply(_uniq_var_821, arguments);
} else if (_uniq_var_821.push !== undefined) {
if (_uniq_var_822 === undefined) {
return _uniq_var_821.push;
}
_uniq_var_821.push = _uniq_var_822;
}return _uniq_var_821;
};_uniq_var_823.__lix_func__ = true;return _uniq_var_823;})()(ret, _uniq_var_440);
_uniq_var_441;
_uniq_var_441;
var _uniq_var_448 = foreach(args[2], (function () {var _uniq_var_833 = function (item, index) {var _uniq_var_442 = (function () {var _uniq_var_826 = function (_uniq_var_824, _uniq_var_825) {
if (typeof _uniq_var_824.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_824.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_824.join.apply(_uniq_var_824, arguments);
} else if (_uniq_var_824.join !== undefined) {
if (_uniq_var_825 === undefined) {
return _uniq_var_824.join;
}
_uniq_var_824.join = _uniq_var_825;
}return _uniq_var_824;
};_uniq_var_826.__lix_func__ = true;return _uniq_var_826;})()([arrayName, "[", index, "]"], "");
_uniq_var_442;
var _uniq_var_443 = flattenCondition(item, _uniq_var_442);
_uniq_var_443;
var cond = _uniq_var_443;
cond;
cond;
var _uniq_var_444 = true;
_uniq_var_444;
var _uniq_var_445 = null;
_uniq_var_445;
if ((_uniq_var_444 && cond)) {
(_uniq_var_444 = false);
var _uniq_var_446 = (function () {var _uniq_var_829 = function (_uniq_var_827, _uniq_var_828) {
if (typeof _uniq_var_827.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_827.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_827.join.apply(_uniq_var_827, arguments);
} else if (_uniq_var_827.join !== undefined) {
if (_uniq_var_828 === undefined) {
return _uniq_var_827.join;
}
_uniq_var_827.join = _uniq_var_828;
}return _uniq_var_827;
};_uniq_var_829.__lix_func__ = true;return _uniq_var_829;})()(["(", cond, ")"], "");
_uniq_var_446;
var _uniq_var_447 = (function () {var _uniq_var_832 = function (_uniq_var_830, _uniq_var_831) {
if (typeof _uniq_var_830.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_830.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_830.push.apply(_uniq_var_830, arguments);
} else if (_uniq_var_830.push !== undefined) {
if (_uniq_var_831 === undefined) {
return _uniq_var_830.push;
}
_uniq_var_830.push = _uniq_var_831;
}return _uniq_var_830;
};_uniq_var_832.__lix_func__ = true;return _uniq_var_832;})()(ret, _uniq_var_446);
_uniq_var_447;
(_uniq_var_445 = _uniq_var_447);

};
return _uniq_var_445;
};_uniq_var_833.__lix_func__ = true;return _uniq_var_833;})());
_uniq_var_448;
_uniq_var_448;
var _uniq_var_449 = (function () {var _uniq_var_836 = function (_uniq_var_834, _uniq_var_835) {
if (typeof _uniq_var_834.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_834.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_834.join.apply(_uniq_var_834, arguments);
} else if (_uniq_var_834.join !== undefined) {
if (_uniq_var_835 === undefined) {
return _uniq_var_834.join;
}
_uniq_var_834.join = _uniq_var_835;
}return _uniq_var_834;
};_uniq_var_836.__lix_func__ = true;return _uniq_var_836;})()(ret, " && ");
_uniq_var_449;
return _uniq_var_449;
};_uniq_var_837.__lix_func__ = true;return _uniq_var_837;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_873 = function (args, arrayName) {var _uniq_var_450 = __add__(args[2].length, args[4].length);
_uniq_var_450;
var len = _uniq_var_450;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_451 = true;
_uniq_var_451;
var _uniq_var_452 = null;
_uniq_var_452;
var _uniq_var_455 = __ne__(arrayName, "arguments");
_uniq_var_455;
if ((_uniq_var_451 && _uniq_var_455)) {
(_uniq_var_451 = false);
var _uniq_var_453 = (function () {var _uniq_var_840 = function (_uniq_var_838, _uniq_var_839) {
if (typeof _uniq_var_838.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_838.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_838.join.apply(_uniq_var_838, arguments);
} else if (_uniq_var_838.join !== undefined) {
if (_uniq_var_839 === undefined) {
return _uniq_var_838.join;
}
_uniq_var_838.join = _uniq_var_839;
}return _uniq_var_838;
};_uniq_var_840.__lix_func__ = true;return _uniq_var_840;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_453;
var _uniq_var_454 = (function () {var _uniq_var_843 = function (_uniq_var_841, _uniq_var_842) {
if (typeof _uniq_var_841.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_841.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_841.push.apply(_uniq_var_841, arguments);
} else if (_uniq_var_841.push !== undefined) {
if (_uniq_var_842 === undefined) {
return _uniq_var_841.push;
}
_uniq_var_841.push = _uniq_var_842;
}return _uniq_var_841;
};_uniq_var_843.__lix_func__ = true;return _uniq_var_843;})()(ret, _uniq_var_453);
_uniq_var_454;
(_uniq_var_452 = _uniq_var_454);

};
_uniq_var_452;
var _uniq_var_456 = true;
_uniq_var_456;
var _uniq_var_457 = null;
_uniq_var_457;
var _uniq_var_460 = __gt__(len, 0);
_uniq_var_460;
if ((_uniq_var_456 && _uniq_var_460)) {
(_uniq_var_456 = false);
var _uniq_var_458 = (function () {var _uniq_var_846 = function (_uniq_var_844, _uniq_var_845) {
if (typeof _uniq_var_844.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_844.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_844.join.apply(_uniq_var_844, arguments);
} else if (_uniq_var_844.join !== undefined) {
if (_uniq_var_845 === undefined) {
return _uniq_var_844.join;
}
_uniq_var_844.join = _uniq_var_845;
}return _uniq_var_844;
};_uniq_var_846.__lix_func__ = true;return _uniq_var_846;})()([arrayName, ".length >= ", len], "");
_uniq_var_458;
var _uniq_var_459 = (function () {var _uniq_var_849 = function (_uniq_var_847, _uniq_var_848) {
if (typeof _uniq_var_847.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_847.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_847.push.apply(_uniq_var_847, arguments);
} else if (_uniq_var_847.push !== undefined) {
if (_uniq_var_848 === undefined) {
return _uniq_var_847.push;
}
_uniq_var_847.push = _uniq_var_848;
}return _uniq_var_847;
};_uniq_var_849.__lix_func__ = true;return _uniq_var_849;})()(ret, _uniq_var_458);
_uniq_var_459;
(_uniq_var_457 = _uniq_var_459);

};
_uniq_var_457;
var _uniq_var_467 = foreach(args[2], (function () {var _uniq_var_859 = function (item, index) {var _uniq_var_461 = (function () {var _uniq_var_852 = function (_uniq_var_850, _uniq_var_851) {
if (typeof _uniq_var_850.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_850.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_850.join.apply(_uniq_var_850, arguments);
} else if (_uniq_var_850.join !== undefined) {
if (_uniq_var_851 === undefined) {
return _uniq_var_850.join;
}
_uniq_var_850.join = _uniq_var_851;
}return _uniq_var_850;
};_uniq_var_852.__lix_func__ = true;return _uniq_var_852;})()([arrayName, "[", index, "]"], "");
_uniq_var_461;
var _uniq_var_462 = flattenCondition(item, _uniq_var_461);
_uniq_var_462;
var cond = _uniq_var_462;
cond;
cond;
var _uniq_var_463 = true;
_uniq_var_463;
var _uniq_var_464 = null;
_uniq_var_464;
if ((_uniq_var_463 && cond)) {
(_uniq_var_463 = false);
var _uniq_var_465 = (function () {var _uniq_var_855 = function (_uniq_var_853, _uniq_var_854) {
if (typeof _uniq_var_853.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_853.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_853.join.apply(_uniq_var_853, arguments);
} else if (_uniq_var_853.join !== undefined) {
if (_uniq_var_854 === undefined) {
return _uniq_var_853.join;
}
_uniq_var_853.join = _uniq_var_854;
}return _uniq_var_853;
};_uniq_var_855.__lix_func__ = true;return _uniq_var_855;})()(["(", cond, ")"], "");
_uniq_var_465;
var _uniq_var_466 = (function () {var _uniq_var_858 = function (_uniq_var_856, _uniq_var_857) {
if (typeof _uniq_var_856.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_856.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_856.push.apply(_uniq_var_856, arguments);
} else if (_uniq_var_856.push !== undefined) {
if (_uniq_var_857 === undefined) {
return _uniq_var_856.push;
}
_uniq_var_856.push = _uniq_var_857;
}return _uniq_var_856;
};_uniq_var_858.__lix_func__ = true;return _uniq_var_858;})()(ret, _uniq_var_465);
_uniq_var_466;
(_uniq_var_464 = _uniq_var_466);

};
return _uniq_var_464;
};_uniq_var_859.__lix_func__ = true;return _uniq_var_859;})());
_uniq_var_467;
_uniq_var_467;
var _uniq_var_475 = foreach(args[4], (function () {var _uniq_var_869 = function (item, index) {var _uniq_var_468 = __sub__(args[4].length, index);
_uniq_var_468;
var _uniq_var_469 = (function () {var _uniq_var_862 = function (_uniq_var_860, _uniq_var_861) {
if (typeof _uniq_var_860.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_860.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_860.join.apply(_uniq_var_860, arguments);
} else if (_uniq_var_860.join !== undefined) {
if (_uniq_var_861 === undefined) {
return _uniq_var_860.join;
}
_uniq_var_860.join = _uniq_var_861;
}return _uniq_var_860;
};_uniq_var_862.__lix_func__ = true;return _uniq_var_862;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_468, "]"], "");
_uniq_var_469;
var _uniq_var_470 = flattenCondition(item, _uniq_var_469);
_uniq_var_470;
var cond = _uniq_var_470;
cond;
cond;
var _uniq_var_471 = true;
_uniq_var_471;
var _uniq_var_472 = null;
_uniq_var_472;
if ((_uniq_var_471 && cond)) {
(_uniq_var_471 = false);
var _uniq_var_473 = (function () {var _uniq_var_865 = function (_uniq_var_863, _uniq_var_864) {
if (typeof _uniq_var_863.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_863.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_863.join.apply(_uniq_var_863, arguments);
} else if (_uniq_var_863.join !== undefined) {
if (_uniq_var_864 === undefined) {
return _uniq_var_863.join;
}
_uniq_var_863.join = _uniq_var_864;
}return _uniq_var_863;
};_uniq_var_865.__lix_func__ = true;return _uniq_var_865;})()(["(", cond, ")"], "");
_uniq_var_473;
var _uniq_var_474 = (function () {var _uniq_var_868 = function (_uniq_var_866, _uniq_var_867) {
if (typeof _uniq_var_866.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_866.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_866.push.apply(_uniq_var_866, arguments);
} else if (_uniq_var_866.push !== undefined) {
if (_uniq_var_867 === undefined) {
return _uniq_var_866.push;
}
_uniq_var_866.push = _uniq_var_867;
}return _uniq_var_866;
};_uniq_var_868.__lix_func__ = true;return _uniq_var_868;})()(ret, _uniq_var_473);
_uniq_var_474;
(_uniq_var_472 = _uniq_var_474);

};
return _uniq_var_472;
};_uniq_var_869.__lix_func__ = true;return _uniq_var_869;})());
_uniq_var_475;
_uniq_var_475;
var _uniq_var_476 = (function () {var _uniq_var_872 = function (_uniq_var_870, _uniq_var_871) {
if (typeof _uniq_var_870.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_870.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_870.join.apply(_uniq_var_870, arguments);
} else if (_uniq_var_870.join !== undefined) {
if (_uniq_var_871 === undefined) {
return _uniq_var_870.join;
}
_uniq_var_870.join = _uniq_var_871;
}return _uniq_var_870;
};_uniq_var_872.__lix_func__ = true;return _uniq_var_872;})()(ret, " && ");
_uniq_var_476;
return _uniq_var_476;
};_uniq_var_873.__lix_func__ = true;return _uniq_var_873;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_900 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_485 = foreach(args[2], (function () {var _uniq_var_883 = function (item, index) {var _uniq_var_477 = getAtomicExprVarName(item[0]);
_uniq_var_477;
var varName = _uniq_var_477;
varName;
varName;
var _uniq_var_478 = true;
_uniq_var_478;
var _uniq_var_479 = null;
_uniq_var_479;
var _uniq_var_482 = __ne__(arrayName, "arguments");
_uniq_var_482;
if ((_uniq_var_478 && _uniq_var_482)) {
(_uniq_var_478 = false);
var _uniq_var_480 = (function () {var _uniq_var_876 = function (_uniq_var_874, _uniq_var_875) {
if (typeof _uniq_var_874.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_874.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_874.join.apply(_uniq_var_874, arguments);
} else if (_uniq_var_874.join !== undefined) {
if (_uniq_var_875 === undefined) {
return _uniq_var_874.join;
}
_uniq_var_874.join = _uniq_var_875;
}return _uniq_var_874;
};_uniq_var_876.__lix_func__ = true;return _uniq_var_876;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_480;
var _uniq_var_481 = (function () {var _uniq_var_879 = function (_uniq_var_877, _uniq_var_878) {
if (typeof _uniq_var_877.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_877.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_877.push.apply(_uniq_var_877, arguments);
} else if (_uniq_var_877.push !== undefined) {
if (_uniq_var_878 === undefined) {
return _uniq_var_877.push;
}
_uniq_var_877.push = _uniq_var_878;
}return _uniq_var_877;
};_uniq_var_879.__lix_func__ = true;return _uniq_var_879;})()(ret, _uniq_var_480);
_uniq_var_481;
(_uniq_var_479 = _uniq_var_481);

};
_uniq_var_479;
var _uniq_var_483 = flattenDestructor(item, varName);
_uniq_var_483;
var _uniq_var_484 = (function () {var _uniq_var_882 = function (_uniq_var_880, _uniq_var_881) {
if (typeof _uniq_var_880.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_880.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_880.concat.apply(_uniq_var_880, arguments);
} else if (_uniq_var_880.concat !== undefined) {
if (_uniq_var_881 === undefined) {
return _uniq_var_880.concat;
}
_uniq_var_880.concat = _uniq_var_881;
}return _uniq_var_880;
};_uniq_var_882.__lix_func__ = true;return _uniq_var_882;})()(ret, _uniq_var_483);
_uniq_var_484;
return (ret = _uniq_var_484);
};_uniq_var_883.__lix_func__ = true;return _uniq_var_883;})());
_uniq_var_485;
_uniq_var_485;
var _uniq_var_486 = true;
_uniq_var_486;
var _uniq_var_487 = null;
_uniq_var_487;
var _uniq_var_491 = __eq__(args[3][1], "{va_arg}");
_uniq_var_491;
if ((_uniq_var_486 && _uniq_var_491)) {
(_uniq_var_486 = false);
var _uniq_var_488 = getAtomicExprVarName(args[3][0]);
_uniq_var_488;
var varName = _uniq_var_488;
varName;
varName;
var _uniq_var_489 = (function () {var _uniq_var_886 = function (_uniq_var_884, _uniq_var_885) {
if (typeof _uniq_var_884.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_884.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_884.join.apply(_uniq_var_884, arguments);
} else if (_uniq_var_884.join !== undefined) {
if (_uniq_var_885 === undefined) {
return _uniq_var_884.join;
}
_uniq_var_884.join = _uniq_var_885;
}return _uniq_var_884;
};_uniq_var_886.__lix_func__ = true;return _uniq_var_886;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_489;
var _uniq_var_490 = (function () {var _uniq_var_889 = function (_uniq_var_887, _uniq_var_888) {
if (typeof _uniq_var_887.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_887.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_887.push.apply(_uniq_var_887, arguments);
} else if (_uniq_var_887.push !== undefined) {
if (_uniq_var_888 === undefined) {
return _uniq_var_887.push;
}
_uniq_var_887.push = _uniq_var_888;
}return _uniq_var_887;
};_uniq_var_889.__lix_func__ = true;return _uniq_var_889;})()(ret, _uniq_var_489);
_uniq_var_490;
(_uniq_var_487 = _uniq_var_490);

};
_uniq_var_487;
var _uniq_var_498 = foreach(args[4], (function () {var _uniq_var_899 = function (item, index) {var _uniq_var_492 = getAtomicExprVarName(item[0]);
_uniq_var_492;
var varName = _uniq_var_492;
varName;
varName;
var _uniq_var_493 = __sub__(tail_lenth, index);
_uniq_var_493;
var _uniq_var_494 = (function () {var _uniq_var_892 = function (_uniq_var_890, _uniq_var_891) {
if (typeof _uniq_var_890.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_890.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_890.join.apply(_uniq_var_890, arguments);
} else if (_uniq_var_890.join !== undefined) {
if (_uniq_var_891 === undefined) {
return _uniq_var_890.join;
}
_uniq_var_890.join = _uniq_var_891;
}return _uniq_var_890;
};_uniq_var_892.__lix_func__ = true;return _uniq_var_892;})()(["var ", varName, " = ", arrayName, "[", arrayName, ".length - ", _uniq_var_493, "]"], "");
_uniq_var_494;
var _uniq_var_495 = (function () {var _uniq_var_895 = function (_uniq_var_893, _uniq_var_894) {
if (typeof _uniq_var_893.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_893.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_893.push.apply(_uniq_var_893, arguments);
} else if (_uniq_var_893.push !== undefined) {
if (_uniq_var_894 === undefined) {
return _uniq_var_893.push;
}
_uniq_var_893.push = _uniq_var_894;
}return _uniq_var_893;
};_uniq_var_895.__lix_func__ = true;return _uniq_var_895;})()(ret, _uniq_var_494);
_uniq_var_495;
_uniq_var_495;
var _uniq_var_496 = flattenDestructor(item, varName);
_uniq_var_496;
var _uniq_var_497 = (function () {var _uniq_var_898 = function (_uniq_var_896, _uniq_var_897) {
if (typeof _uniq_var_896.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_896.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_896.concat.apply(_uniq_var_896, arguments);
} else if (_uniq_var_896.concat !== undefined) {
if (_uniq_var_897 === undefined) {
return _uniq_var_896.concat;
}
_uniq_var_896.concat = _uniq_var_897;
}return _uniq_var_896;
};_uniq_var_898.__lix_func__ = true;return _uniq_var_898;})()(ret, _uniq_var_496);
_uniq_var_497;
return (ret = _uniq_var_497);
};_uniq_var_899.__lix_func__ = true;return _uniq_var_899;})());
_uniq_var_498;
_uniq_var_498;
return ret;
};_uniq_var_900.__lix_func__ = true;return _uniq_var_900;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_901 = function (args, varName) {return null;
};_uniq_var_901.__lix_func__ = true;return _uniq_var_901;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenConditionOp = {
"{any_type_arg}": flattenAnyTypeCondition,
"{anonymous_va_arg}": flattenAnyTypeCondition,
"{array_arg}": flattenArrayCondition,
"{va_args}": flattenVAArgsCondition
};
flattenConditionOp;
flattenConditionOp;
var flattenDestructorOp = {
"{any_type_arg}": flattenAnyTypeDestructor,
"{anonymous_va_arg}": flattenAnyTypeDestructor,
"{array_arg}": flattenArrayDestructor,
"{va_args}": flattenVAArgsDestructor,
"{object_arg}": flattenObjectDestructor,
"{index_arg}": flattenIndexDestructor,
"{field_arg}": flattenFieldDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_902 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_499 = true;
_uniq_var_499;
var _uniq_var_500 = null;
_uniq_var_500;
if ((_uniq_var_499 && flattenDestructorOp[hint])) {
(_uniq_var_499 = false);
(_uniq_var_500 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_500;
return ret;
};_uniq_var_902.__lix_func__ = true;return _uniq_var_902;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_903 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_501 = true;
_uniq_var_501;
var _uniq_var_502 = null;
_uniq_var_502;
if ((_uniq_var_501 && flattenConditionOp[hint])) {
(_uniq_var_501 = false);
(_uniq_var_502 = (ret = flattenConditionOp[hint]));

};
_uniq_var_502;
return ret;
};_uniq_var_903.__lix_func__ = true;return _uniq_var_903;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_904 = function (args, varName) {var _uniq_var_503 = getFlattenDestructorOp(args[1]);
_uniq_var_503;
var _uniq_var_504 = call(_uniq_var_503, args, varName);
_uniq_var_504;
return _uniq_var_504;
};_uniq_var_904.__lix_func__ = true;return _uniq_var_904;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_905 = function (args, varName) {var _uniq_var_505 = getFlattenConditionOp(args[1]);
_uniq_var_505;
var _uniq_var_506 = call(_uniq_var_505, args, varName);
_uniq_var_506;
return _uniq_var_506;
};_uniq_var_905.__lix_func__ = true;return _uniq_var_905;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_906 = function (args) {var _uniq_var_507 = flattenCondition(args, "arguments");
_uniq_var_507;
return _uniq_var_507;
};_uniq_var_906.__lix_func__ = true;return _uniq_var_906;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_907 = function (args) {var _uniq_var_508 = flattenDestructor(args, "arguments");
_uniq_var_508;
return _uniq_var_508;
};_uniq_var_907.__lix_func__ = true;return _uniq_var_907;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_912 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_510 = foreach(args[2], (function () {var _uniq_var_911 = function (item) {var _uniq_var_509 = (function () {var _uniq_var_910 = function (_uniq_var_908, _uniq_var_909) {
if (typeof _uniq_var_908.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_908.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_908.push.apply(_uniq_var_908, arguments);
} else if (_uniq_var_908.push !== undefined) {
if (_uniq_var_909 === undefined) {
return _uniq_var_908.push;
}
_uniq_var_908.push = _uniq_var_909;
}return _uniq_var_908;
};_uniq_var_910.__lix_func__ = true;return _uniq_var_910;})()(ret, item[0]);
_uniq_var_509;
return _uniq_var_509;
};_uniq_var_911.__lix_func__ = true;return _uniq_var_911;})());
_uniq_var_510;
_uniq_var_510;
return ret;
};_uniq_var_912.__lix_func__ = true;return _uniq_var_912;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_913 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_511 = flattenArgumentsDestructor(expr[2]);
_uniq_var_511;
var destructor = _uniq_var_511;
destructor;
destructor;
var _uniq_var_512 = getFuncArgsNameList(expr[2]);
_uniq_var_512;
var funcArgsNameList = _uniq_var_512;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_513 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_513;
var func = _uniq_var_513;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_913.__lix_func__ = true;return _uniq_var_913;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_914 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_514 = flatten(expr, define);
_uniq_var_514;
return _uniq_var_514;
};_uniq_var_914.__lix_func__ = true;return _uniq_var_914;})();
flattenAsterisk;
flattenAsterisk;
var identity = (function () {var _uniq_var_915 = function (x) {return x;
};_uniq_var_915.__lix_func__ = true;return _uniq_var_915;})();
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
var flattenOp = (function () {var _uniq_var_916 = function (hint) {var _uniq_var_515 = true;
_uniq_var_515;
var _uniq_var_516 = null;
_uniq_var_516;
if ((_uniq_var_515 && flattenOpTable[hint])) {
(_uniq_var_515 = false);
(_uniq_var_516 = flattenOpTable[hint]);

};
if (_uniq_var_515) {
(_uniq_var_516 = flattenExpr);

};
return _uniq_var_516;
};_uniq_var_916.__lix_func__ = true;return _uniq_var_916;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_917 = function (expr, define, ctx) {var _uniq_var_517 = flattenOp(expr[1]);
_uniq_var_517;
var _uniq_var_518 = _uniq_var_517(expr, define, ctx);
_uniq_var_518;
return _uniq_var_518;
};_uniq_var_917.__lix_func__ = true;return _uniq_var_917;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_918 = function (i) {return i;
};_uniq_var_918.__lix_func__ = true;return _uniq_var_918;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_919 = function (i) {;
};_uniq_var_919.__lix_func__ = true;return _uniq_var_919;})(),
appendExpr: (function () {var _uniq_var_920 = function (i) {;
};_uniq_var_920.__lix_func__ = true;return _uniq_var_920;})()
};
def0;
def0;
var _uniq_var_519 = join(['s[', STEP, ']']);
_uniq_var_519;
var _uniq_var_520 = join(['s[', RET, ']']);
_uniq_var_520;
var seqFuncParamsName = {
step: _uniq_var_519,
ret: _uniq_var_520
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_927 = function (expr) {var _uniq_var_521 = map(env0, (function () {var _uniq_var_921 = function (i) {return i;
};_uniq_var_921.__lix_func__ = true;return _uniq_var_921;})());
_uniq_var_521;
var _uniq_var_522 = (function () {var _uniq_var_924 = function (_uniq_var_922, _uniq_var_923) {
if (typeof _uniq_var_922.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_922.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_922.join.apply(_uniq_var_922, arguments);
} else if (_uniq_var_922.join !== undefined) {
if (_uniq_var_923 === undefined) {
return _uniq_var_922.join;
}
_uniq_var_922.join = _uniq_var_923;
}return _uniq_var_922;
};_uniq_var_924.__lix_func__ = true;return _uniq_var_924;})()(_uniq_var_521, "\n");
_uniq_var_522;
var libs = _uniq_var_522;
libs;
libs;
var _uniq_var_523 = flatten(expr, (function () {var _uniq_var_925 = function (i) {;
};_uniq_var_925.__lix_func__ = true;return _uniq_var_925;})(), (function () {var _uniq_var_926 = function (i) {return i;
};_uniq_var_926.__lix_func__ = true;return _uniq_var_926;})());
_uniq_var_523;
var flattenedExpr = _uniq_var_523;
flattenedExpr;
flattenedExpr;
var _uniq_var_524 = call(env_new);
_uniq_var_524;
var _uniq_var_525 = generateStart(flattenedExpr, _uniq_var_524, ctx0, def0);
_uniq_var_525;
var code = _uniq_var_525;
code;
code;
var _uniq_var_526 = join([libs, "\n", code]);
_uniq_var_526;
return _uniq_var_526;
};_uniq_var_927.__lix_func__ = true;return _uniq_var_927;})();
compile;
compile;
(exports.compile = compile);
compile;

