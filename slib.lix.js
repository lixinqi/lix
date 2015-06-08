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
var join = (function () {var _uniq_var_560 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_559 = function (_uniq_var_557, _uniq_var_558) {
if (typeof _uniq_var_557.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_557.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_557.join.apply(_uniq_var_557, arguments);
} else if (_uniq_var_557.join !== undefined) {
if (_uniq_var_558 === undefined) {
return _uniq_var_557.join;
}
_uniq_var_557.join = _uniq_var_558;
}return _uniq_var_557;
};_uniq_var_559.__lix_func__ = true;return _uniq_var_559;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_560.__lix_func__ = true;return _uniq_var_560;})();
join;
join;
var map = (function () {var _uniq_var_565 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_564 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_563 = function (_uniq_var_561, _uniq_var_562) {
if (typeof _uniq_var_561.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_561.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_561.push.apply(_uniq_var_561, arguments);
} else if (_uniq_var_561.push !== undefined) {
if (_uniq_var_562 === undefined) {
return _uniq_var_561.push;
}
_uniq_var_561.push = _uniq_var_562;
}return _uniq_var_561;
};_uniq_var_563.__lix_func__ = true;return _uniq_var_563;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_564.__lix_func__ = true;return _uniq_var_564;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_565.__lix_func__ = true;return _uniq_var_565;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_567 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_566 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_566.__lix_func__ = true;return _uniq_var_566;})();
};_uniq_var_567.__lix_func__ = true;return _uniq_var_567;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_568 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_568.__lix_func__ = true;return _uniq_var_568;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_573 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_569 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_569.__lix_func__ = true;return _uniq_var_569;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_572 = function (_uniq_var_570, _uniq_var_571) {
if (typeof _uniq_var_570.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_570.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_570.join.apply(_uniq_var_570, arguments);
} else if (_uniq_var_570.join !== undefined) {
if (_uniq_var_571 === undefined) {
return _uniq_var_570.join;
}
_uniq_var_570.join = _uniq_var_571;
}return _uniq_var_570;
};_uniq_var_572.__lix_func__ = true;return _uniq_var_572;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_573.__lix_func__ = true;return _uniq_var_573;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_574 = function (x) {return x;
};_uniq_var_574.__lix_func__ = true;return _uniq_var_574;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_584 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_576 = function (current) {return (function () {var _uniq_var_575 = function (v, loop) {var next = current;
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
};_uniq_var_575.__lix_func__ = true;return _uniq_var_575;})();
};_uniq_var_576.__lix_func__ = true;return _uniq_var_576;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_580 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_27 = (function () {var _uniq_var_579 = function (_uniq_var_577, _uniq_var_578) {
if (typeof _uniq_var_577.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_577.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_577.push.apply(_uniq_var_577, arguments);
} else if (_uniq_var_577.push !== undefined) {
if (_uniq_var_578 === undefined) {
return _uniq_var_577.push;
}
_uniq_var_577.push = _uniq_var_578;
}return _uniq_var_577;
};_uniq_var_579.__lix_func__ = true;return _uniq_var_579;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_580.__lix_func__ = true;return _uniq_var_580;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_583 = function (_uniq_var_581, _uniq_var_582) {
if (typeof _uniq_var_581.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_581.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_581.join.apply(_uniq_var_581, arguments);
} else if (_uniq_var_581.join !== undefined) {
if (_uniq_var_582 === undefined) {
return _uniq_var_581.join;
}
_uniq_var_581.join = _uniq_var_582;
}return _uniq_var_581;
};_uniq_var_583.__lix_func__ = true;return _uniq_var_583;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_584.__lix_func__ = true;return _uniq_var_584;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_585 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_585.__lix_func__ = true;return _uniq_var_585;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_586 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_586.__lix_func__ = true;return _uniq_var_586;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_591 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_587 = function (i) {var _uniq_var_38 = true;
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
};_uniq_var_587.__lix_func__ = true;return _uniq_var_587;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_590 = function (_uniq_var_588, _uniq_var_589) {
if (typeof _uniq_var_588.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_588.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_588.join.apply(_uniq_var_588, arguments);
} else if (_uniq_var_588.join !== undefined) {
if (_uniq_var_589 === undefined) {
return _uniq_var_588.join;
}
_uniq_var_588.join = _uniq_var_589;
}return _uniq_var_588;
};_uniq_var_590.__lix_func__ = true;return _uniq_var_590;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_591.__lix_func__ = true;return _uniq_var_591;})();
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
var generateAtomic = (function () {var _uniq_var_592 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_592.__lix_func__ = true;return _uniq_var_592;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_593 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
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
};_uniq_var_593.__lix_func__ = true;return _uniq_var_593;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_594 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_594.__lix_func__ = true;return _uniq_var_594;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_599 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_595 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_595.__lix_func__ = true;return _uniq_var_595;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_598 = function (_uniq_var_596, _uniq_var_597) {
if (typeof _uniq_var_596.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_596.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_596.join.apply(_uniq_var_596, arguments);
} else if (_uniq_var_596.join !== undefined) {
if (_uniq_var_597 === undefined) {
return _uniq_var_596.join;
}
_uniq_var_596.join = _uniq_var_597;
}return _uniq_var_596;
};_uniq_var_598.__lix_func__ = true;return _uniq_var_598;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_599.__lix_func__ = true;return _uniq_var_599;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_600 = function (name) {var _uniq_var_73 = true;
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
};_uniq_var_600.__lix_func__ = true;return _uniq_var_600;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_601 = function (expr) {var _uniq_var_85 = true;
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
};_uniq_var_601.__lix_func__ = true;return _uniq_var_601;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_602 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
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
};_uniq_var_602.__lix_func__ = true;return _uniq_var_602;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_603 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
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
};_uniq_var_603.__lix_func__ = true;return _uniq_var_603;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_608 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_604 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_604.__lix_func__ = true;return _uniq_var_604;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_607 = function (_uniq_var_605, _uniq_var_606) {
if (typeof _uniq_var_605.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_605.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_605.join.apply(_uniq_var_605, arguments);
} else if (_uniq_var_605.join !== undefined) {
if (_uniq_var_606 === undefined) {
return _uniq_var_605.join;
}
_uniq_var_605.join = _uniq_var_606;
}return _uniq_var_605;
};_uniq_var_607.__lix_func__ = true;return _uniq_var_607;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_608.__lix_func__ = true;return _uniq_var_608;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_609 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
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
};_uniq_var_609.__lix_func__ = true;return _uniq_var_609;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_610 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_610.__lix_func__ = true;return _uniq_var_610;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_611 = function (expr, env, ctx) {return 'break';
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_612 = function (expr, env, ctx, def) {return "";
};_uniq_var_612.__lix_func__ = true;return _uniq_var_612;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_613 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
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
};_uniq_var_613.__lix_func__ = true;return _uniq_var_613;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_614 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_614.__lix_func__ = true;return _uniq_var_614;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_618 = function (expr, env, ctx, def) {var _uniq_var_126 = true;
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
var _uniq_var_137 = (function () {var _uniq_var_617 = function (_uniq_var_615, _uniq_var_616) {
if (typeof _uniq_var_615.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_615.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_615.join.apply(_uniq_var_615, arguments);
} else if (_uniq_var_615.join !== undefined) {
if (_uniq_var_616 === undefined) {
return _uniq_var_615.join;
}
_uniq_var_615.join = _uniq_var_616;
}return _uniq_var_615;
};_uniq_var_617.__lix_func__ = true;return _uniq_var_617;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_618.__lix_func__ = true;return _uniq_var_618;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_619 = function (expr, env, ctx, def) {var _uniq_var_138 = getVarName(expr[0]);
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
};_uniq_var_619.__lix_func__ = true;return _uniq_var_619;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_626 = function (expr, env, ctx, def) {var _uniq_var_151 = true;
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
var _uniq_var_160 = (function () {var _uniq_var_622 = function (_uniq_var_620, _uniq_var_621) {
if (typeof _uniq_var_620.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_620.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_620.join.apply(_uniq_var_620, arguments);
} else if (_uniq_var_620.join !== undefined) {
if (_uniq_var_621 === undefined) {
return _uniq_var_620.join;
}
_uniq_var_620.join = _uniq_var_621;
}return _uniq_var_620;
};_uniq_var_622.__lix_func__ = true;return _uniq_var_622;})()(expr[3], ";\n");
_uniq_var_160;
var _uniq_var_161 = call(def.defineVar);
_uniq_var_161;
var _uniq_var_162 = call(def.appendExpr);
_uniq_var_162;
var _uniq_var_163 = call(def.definedFns);
_uniq_var_163;
var _uniq_var_164 = (function () {var _uniq_var_625 = function (_uniq_var_623, _uniq_var_624) {
if (typeof _uniq_var_623.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_623.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_623.join.apply(_uniq_var_623, arguments);
} else if (_uniq_var_623.join !== undefined) {
if (_uniq_var_624 === undefined) {
return _uniq_var_623.join;
}
_uniq_var_623.join = _uniq_var_624;
}return _uniq_var_623;
};_uniq_var_625.__lix_func__ = true;return _uniq_var_625;})()(['(function (', args, ') {\n', 'var ', _uniq_var_159, ' = arguments;\n', _uniq_var_160, ";\n", _uniq_var_161, ";\n", _uniq_var_162, _uniq_var_163, 'return ', body, ";\n", '})'], '');
_uniq_var_164;
return _uniq_var_164;
};_uniq_var_626.__lix_func__ = true;return _uniq_var_626;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_633 = function (expr0, env, ctx, prevDef) {var _uniq_var_165 = call(getUniqVarName);
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
var _uniq_var_175 = (function () {var _uniq_var_629 = function (_uniq_var_627, _uniq_var_628) {
if (typeof _uniq_var_627.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_627.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_627.join.apply(_uniq_var_627, arguments);
} else if (_uniq_var_627.join !== undefined) {
if (_uniq_var_628 === undefined) {
return _uniq_var_627.join;
}
_uniq_var_627.join = _uniq_var_628;
}return _uniq_var_627;
};_uniq_var_629.__lix_func__ = true;return _uniq_var_629;})()(expr[3], ";\n");
_uniq_var_175;
var _uniq_var_176 = call(def.defineVar);
_uniq_var_176;
var _uniq_var_177 = call(def.appendExpr);
_uniq_var_177;
var _uniq_var_178 = call(def.definedFns);
_uniq_var_178;
var _uniq_var_179 = (function () {var _uniq_var_632 = function (_uniq_var_630, _uniq_var_631) {
if (typeof _uniq_var_630.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_630.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_630.join.apply(_uniq_var_630, arguments);
} else if (_uniq_var_630.join !== undefined) {
if (_uniq_var_631 === undefined) {
return _uniq_var_630.join;
}
_uniq_var_630.join = _uniq_var_631;
}return _uniq_var_630;
};_uniq_var_632.__lix_func__ = true;return _uniq_var_632;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_174, ' = arguments;\n', _uniq_var_175, ";\n", _uniq_var_176, ";\n", _uniq_var_177, ";\n", _uniq_var_178, ";\n", 'return ', body, ";\n", '}'], '');
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
};_uniq_var_633.__lix_func__ = true;return _uniq_var_633;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_635 = function (expr, env, ctx, def) {var _uniq_var_183 = generate(expr[1], env, ctx0, def);
_uniq_var_183;
var func = _uniq_var_183;
func;
func;
var _uniq_var_184 = generate(expr[0], env, ctx0, def);
_uniq_var_184;
var args = _uniq_var_184;
args;
args;
var _uniq_var_190 = foreach(expr, (function () {var _uniq_var_634 = function (item, index) {var _uniq_var_185 = true;
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
};_uniq_var_634.__lix_func__ = true;return _uniq_var_634;})());
_uniq_var_190;
_uniq_var_190;
var _uniq_var_191 = join([func, '(', args, ')']);
_uniq_var_191;
var _uniq_var_192 = ctx(_uniq_var_191);
_uniq_var_192;
return _uniq_var_192;
};_uniq_var_635.__lix_func__ = true;return _uniq_var_635;})();
generateExpr;
generateExpr;
var predefineFn = (function () {var _uniq_var_662 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_642 = function (n) {var ret = [];
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
var _uniq_var_195 = (function () {var _uniq_var_638 = function (_uniq_var_636, _uniq_var_637) {
if (typeof _uniq_var_636.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_636.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_636.push.apply(_uniq_var_636, arguments);
} else if (_uniq_var_636.push !== undefined) {
if (_uniq_var_637 === undefined) {
return _uniq_var_636.push;
}
_uniq_var_636.push = _uniq_var_637;
}return _uniq_var_636;
};_uniq_var_638.__lix_func__ = true;return _uniq_var_638;})()(ret, _uniq_var_194);
_uniq_var_195;
_uniq_var_195;
var _uniq_var_196 = __add__(i, 1);
_uniq_var_196;
(i = _uniq_var_196);
var _uniq_var_193 = __lt__(i, n);
_uniq_var_193;
}
null;
var _uniq_var_197 = (function () {var _uniq_var_641 = function (_uniq_var_639, _uniq_var_640) {
if (typeof _uniq_var_639.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_639.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_639.join.apply(_uniq_var_639, arguments);
} else if (_uniq_var_639.join !== undefined) {
if (_uniq_var_640 === undefined) {
return _uniq_var_639.join;
}
_uniq_var_639.join = _uniq_var_640;
}return _uniq_var_639;
};_uniq_var_641.__lix_func__ = true;return _uniq_var_641;})()(ret, ", ");
_uniq_var_197;
return _uniq_var_197;
};_uniq_var_642.__lix_func__ = true;return _uniq_var_642;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_212 = foreach(candidates, (function () {var _uniq_var_655 = function (item) {var _uniq_var_198 = true;
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
var _uniq_var_203 = (function () {var _uniq_var_645 = function (_uniq_var_643, _uniq_var_644) {
if (typeof _uniq_var_643.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_643.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_643.join.apply(_uniq_var_643, arguments);
} else if (_uniq_var_643.join !== undefined) {
if (_uniq_var_644 === undefined) {
return _uniq_var_643.join;
}
_uniq_var_643.join = _uniq_var_644;
}return _uniq_var_643;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})()(["return ", item.func, "(", _uniq_var_202, ");\n"], "");
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
var _uniq_var_206 = (function () {var _uniq_var_648 = function (_uniq_var_646, _uniq_var_647) {
if (typeof _uniq_var_646.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_646.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_646.join.apply(_uniq_var_646, arguments);
} else if (_uniq_var_646.join !== undefined) {
if (_uniq_var_647 === undefined) {
return _uniq_var_646.join;
}
_uniq_var_646.join = _uniq_var_647;
}return _uniq_var_646;
};_uniq_var_648.__lix_func__ = true;return _uniq_var_648;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
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
var _uniq_var_210 = (function () {var _uniq_var_651 = function (_uniq_var_649, _uniq_var_650) {
if (typeof _uniq_var_649.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_649.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_649.join.apply(_uniq_var_649, arguments);
} else if (_uniq_var_649.join !== undefined) {
if (_uniq_var_650 === undefined) {
return _uniq_var_649.join;
}
_uniq_var_649.join = _uniq_var_650;
}return _uniq_var_649;
};_uniq_var_651.__lix_func__ = true;return _uniq_var_651;})()(["if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_210;
(_uniq_var_209 = (stmt = _uniq_var_210));

};
_uniq_var_209;
var _uniq_var_211 = (function () {var _uniq_var_654 = function (_uniq_var_652, _uniq_var_653) {
if (typeof _uniq_var_652.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_652.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_652.push.apply(_uniq_var_652, arguments);
} else if (_uniq_var_652.push !== undefined) {
if (_uniq_var_653 === undefined) {
return _uniq_var_652.push;
}
_uniq_var_652.push = _uniq_var_653;
}return _uniq_var_652;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})()(body, stmt);
_uniq_var_211;
return _uniq_var_211;
};_uniq_var_655.__lix_func__ = true;return _uniq_var_655;})());
_uniq_var_212;
_uniq_var_212;
var _uniq_var_213 = (function () {var _uniq_var_658 = function (_uniq_var_656, _uniq_var_657) {
if (typeof _uniq_var_656.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_656.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_656.join.apply(_uniq_var_656, arguments);
} else if (_uniq_var_656.join !== undefined) {
if (_uniq_var_657 === undefined) {
return _uniq_var_656.join;
}
_uniq_var_656.join = _uniq_var_657;
}return _uniq_var_656;
};_uniq_var_658.__lix_func__ = true;return _uniq_var_658;})()(body, "");
_uniq_var_213;
(body = _uniq_var_213);
var _uniq_var_214 = call(getArgListString, max_narg);
_uniq_var_214;
var _uniq_var_215 = (function () {var _uniq_var_661 = function (_uniq_var_659, _uniq_var_660) {
if (typeof _uniq_var_659.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_659.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_659.join.apply(_uniq_var_659, arguments);
} else if (_uniq_var_659.join !== undefined) {
if (_uniq_var_660 === undefined) {
return _uniq_var_659.join;
}
_uniq_var_659.join = _uniq_var_660;
}return _uniq_var_659;
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})()(["function ", name, "(", _uniq_var_214, ") {\n", body, "}\n"], "");
_uniq_var_215;
return _uniq_var_215;
};_uniq_var_662.__lix_func__ = true;return _uniq_var_662;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_692 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_663 = function (d) {return (destructed = d);
};_uniq_var_663.__lix_func__ = true;return _uniq_var_663;})(),
desctructedVars: (function () {var _uniq_var_667 = function () {var _uniq_var_216 = (function () {var _uniq_var_666 = function (_uniq_var_664, _uniq_var_665) {
if (typeof _uniq_var_664.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_664.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_664.join.apply(_uniq_var_664, arguments);
} else if (_uniq_var_664.join !== undefined) {
if (_uniq_var_665 === undefined) {
return _uniq_var_664.join;
}
_uniq_var_664.join = _uniq_var_665;
}return _uniq_var_664;
};_uniq_var_666.__lix_func__ = true;return _uniq_var_666;})()(destructed, ";\n");
_uniq_var_216;
return _uniq_var_216;
};_uniq_var_667.__lix_func__ = true;return _uniq_var_667;})(),
defineFn: (function () {var _uniq_var_671 = function (name, func, condition, narg) {var _uniq_var_217 = true;
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
var _uniq_var_220 = (function () {var _uniq_var_670 = function (_uniq_var_668, _uniq_var_669) {
if (typeof _uniq_var_668.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_668.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_668.push.apply(_uniq_var_668, arguments);
} else if (_uniq_var_668.push !== undefined) {
if (_uniq_var_669 === undefined) {
return _uniq_var_668.push;
}
_uniq_var_668.push = _uniq_var_669;
}return _uniq_var_668;
};_uniq_var_670.__lix_func__ = true;return _uniq_var_670;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_220;
return _uniq_var_220;
};_uniq_var_671.__lix_func__ = true;return _uniq_var_671;})(),
definedFns: (function () {var _uniq_var_679 = function () {var ret = [];
ret;
ret;
var _uniq_var_223 = foreach(fns, (function () {var _uniq_var_675 = function (item, name) {var _uniq_var_221 = predefineFn(name, item);
_uniq_var_221;
var _uniq_var_222 = (function () {var _uniq_var_674 = function (_uniq_var_672, _uniq_var_673) {
if (typeof _uniq_var_672.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_672.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_672.push.apply(_uniq_var_672, arguments);
} else if (_uniq_var_672.push !== undefined) {
if (_uniq_var_673 === undefined) {
return _uniq_var_672.push;
}
_uniq_var_672.push = _uniq_var_673;
}return _uniq_var_672;
};_uniq_var_674.__lix_func__ = true;return _uniq_var_674;})()(ret, _uniq_var_221);
_uniq_var_222;
return _uniq_var_222;
};_uniq_var_675.__lix_func__ = true;return _uniq_var_675;})());
_uniq_var_223;
_uniq_var_223;
var _uniq_var_224 = (function () {var _uniq_var_678 = function (_uniq_var_676, _uniq_var_677) {
if (typeof _uniq_var_676.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_676.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_676.join.apply(_uniq_var_676, arguments);
} else if (_uniq_var_676.join !== undefined) {
if (_uniq_var_677 === undefined) {
return _uniq_var_676.join;
}
_uniq_var_676.join = _uniq_var_677;
}return _uniq_var_676;
};_uniq_var_678.__lix_func__ = true;return _uniq_var_678;})()(ret, "\n");
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_679.__lix_func__ = true;return _uniq_var_679;})(),
defineVar: (function () {var _uniq_var_684 = function (v) {var _uniq_var_225 = true;
_uniq_var_225;
var _uniq_var_226 = null;
_uniq_var_226;
if ((_uniq_var_225 && v)) {
(_uniq_var_225 = false);
(_uniq_var_226 = (vars[v] = v));

};
if (_uniq_var_225) {
var _uniq_var_227 = map(vars, (function () {var _uniq_var_680 = function (i) {return i;
};_uniq_var_680.__lix_func__ = true;return _uniq_var_680;})());
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
var _uniq_var_230 = (function () {var _uniq_var_683 = function (_uniq_var_681, _uniq_var_682) {
if (typeof _uniq_var_681.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_681.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_681.join.apply(_uniq_var_681, arguments);
} else if (_uniq_var_681.join !== undefined) {
if (_uniq_var_682 === undefined) {
return _uniq_var_681.join;
}
_uniq_var_681.join = _uniq_var_682;
}return _uniq_var_681;
};_uniq_var_683.__lix_func__ = true;return _uniq_var_683;})()(vecs, ', ');
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
};_uniq_var_684.__lix_func__ = true;return _uniq_var_684;})(),
appendExpr: (function () {var _uniq_var_691 = function (v) {var _uniq_var_233 = true;
_uniq_var_233;
var _uniq_var_234 = null;
_uniq_var_234;
if ((_uniq_var_233 && v)) {
(_uniq_var_233 = false);
var _uniq_var_235 = (function () {var _uniq_var_687 = function (_uniq_var_685, _uniq_var_686) {
if (typeof _uniq_var_685.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_685.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_685.push.apply(_uniq_var_685, arguments);
} else if (_uniq_var_685.push !== undefined) {
if (_uniq_var_686 === undefined) {
return _uniq_var_685.push;
}
_uniq_var_685.push = _uniq_var_686;
}return _uniq_var_685;
};_uniq_var_687.__lix_func__ = true;return _uniq_var_687;})()(funcs, v);
_uniq_var_235;
(_uniq_var_234 = _uniq_var_235);

};
if (_uniq_var_233) {
var _uniq_var_236 = (function () {var _uniq_var_690 = function (_uniq_var_688, _uniq_var_689) {
if (typeof _uniq_var_688.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_688.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_688.join.apply(_uniq_var_688, arguments);
} else if (_uniq_var_688.join !== undefined) {
if (_uniq_var_689 === undefined) {
return _uniq_var_688.join;
}
_uniq_var_688.join = _uniq_var_689;
}return _uniq_var_688;
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})()(funcs, ';\n');
_uniq_var_236;
(_uniq_var_234 = _uniq_var_236);

};
return _uniq_var_234;
};_uniq_var_691.__lix_func__ = true;return _uniq_var_691;})()
};
};_uniq_var_692.__lix_func__ = true;return _uniq_var_692;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_693 = function (expr, env, ctx, def) {var _uniq_var_237 = call(GenerateDefNew);
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
};_uniq_var_693.__lix_func__ = true;return _uniq_var_693;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_694 = function (expr, env, ctx, def) {var _uniq_var_244 = generate(expr[0], env, ctx, def);
_uniq_var_244;
return _uniq_var_244;
};_uniq_var_694.__lix_func__ = true;return _uniq_var_694;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_695 = function (expr, env, ctx, def) {var _uniq_var_245 = join(['"', expr[0], '"']);
_uniq_var_245;
return _uniq_var_245;
};_uniq_var_695.__lix_func__ = true;return _uniq_var_695;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_696 = function (expr, env, ctx, def) {var _uniq_var_246 = generate(expr[0], env, ctx, def);
_uniq_var_246;
var _uniq_var_247 = join(['("', expr[2], '" + ', _uniq_var_246, ')']);
_uniq_var_247;
return _uniq_var_247;
};_uniq_var_696.__lix_func__ = true;return _uniq_var_696;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_701 = function (expr, env, ctx, def) {var _uniq_var_249 = map(expr[0], (function () {var _uniq_var_697 = function (i) {var _uniq_var_248 = generate(i, env, ctx, def);
_uniq_var_248;
return _uniq_var_248;
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})());
_uniq_var_249;
var _uniq_var_250 = (function () {var _uniq_var_700 = function (_uniq_var_698, _uniq_var_699) {
if (typeof _uniq_var_698.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_698.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_698.join.apply(_uniq_var_698, arguments);
} else if (_uniq_var_698.join !== undefined) {
if (_uniq_var_699 === undefined) {
return _uniq_var_698.join;
}
_uniq_var_698.join = _uniq_var_699;
}return _uniq_var_698;
};_uniq_var_700.__lix_func__ = true;return _uniq_var_700;})()(_uniq_var_249, ',');
_uniq_var_250;
var path = _uniq_var_250;
path;
path;
var _uniq_var_251 = join(['[', path, '].join("/")']);
_uniq_var_251;
return _uniq_var_251;
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_705 = function (expr, env, ctx, def) {var _uniq_var_252 = (function () {var _uniq_var_704 = function (_uniq_var_702, _uniq_var_703) {
if (typeof _uniq_var_702.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_702.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_702.join.apply(_uniq_var_702, arguments);
} else if (_uniq_var_702.join !== undefined) {
if (_uniq_var_703 === undefined) {
return _uniq_var_702.join;
}
_uniq_var_702.join = _uniq_var_703;
}return _uniq_var_702;
};_uniq_var_704.__lix_func__ = true;return _uniq_var_704;})()(['"', expr[0], '"'], '');
_uniq_var_252;
var name = [_uniq_var_252, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_705.__lix_func__ = true;return _uniq_var_705;})();
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
var generateOp = (function () {var _uniq_var_706 = function (hint) {var _uniq_var_253 = true;
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
};_uniq_var_706.__lix_func__ = true;return _uniq_var_706;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_707 = function (expr, env, ctx, def) {var _uniq_var_255 = generateOp(expr[1]);
_uniq_var_255;
var _uniq_var_256 = _uniq_var_255(expr, env, ctx, def);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_707.__lix_func__ = true;return _uniq_var_707;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_709 = function (env) {var _uniq_var_257 = env;
_uniq_var_257;
if (not(_uniq_var_257)) {
(_uniq_var_257 = env0);

};
(env = _uniq_var_257);
var Env = (function () {var _uniq_var_708 = function () {;
};_uniq_var_708.__lix_func__ = true;return _uniq_var_708;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_258 = _instance_(Env);
_uniq_var_258;
return _uniq_var_258;
};_uniq_var_709.__lix_func__ = true;return _uniq_var_709;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_711 = function (expr, define) {var _uniq_var_260 = map(expr, (function () {var _uniq_var_710 = function (item) {var _uniq_var_259 = flatten(item, define);
_uniq_var_259;
return _uniq_var_259;
};_uniq_var_710.__lix_func__ = true;return _uniq_var_710;})());
_uniq_var_260;
var _uniq_var_261 = define(_uniq_var_260);
_uniq_var_261;
return _uniq_var_261;
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_712 = function (expr, define) {return expr;
};_uniq_var_712.__lix_func__ = true;return _uniq_var_712;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_717 = function (expr, define) {var _uniq_var_262 = call(statementFlattenGenerator);
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
var _uniq_var_266 = (function () {var _uniq_var_715 = function (_uniq_var_713, _uniq_var_714) {
if (typeof _uniq_var_713.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_713.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_713.concat.apply(_uniq_var_713, arguments);
} else if (_uniq_var_713.concat !== undefined) {
if (_uniq_var_714 === undefined) {
return _uniq_var_713.concat;
}
_uniq_var_713.concat = _uniq_var_714;
}return _uniq_var_713;
};_uniq_var_715.__lix_func__ = true;return _uniq_var_715;})()(expr[2][0], _uniq_var_265);
_uniq_var_266;
(expr[2][0] = _uniq_var_266);
var _uniq_var_267 = call(whileDefine);
_uniq_var_267;
var _uniq_var_269 = foreach(_uniq_var_267, (function () {var _uniq_var_716 = function (i) {var _uniq_var_268 = define(i, true);
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_716.__lix_func__ = true;return _uniq_var_716;})());
_uniq_var_269;
_uniq_var_269;
var _uniq_var_270 = define(expr, true);
_uniq_var_270;
_uniq_var_270;
return ['', '{empty}'];
};_uniq_var_717.__lix_func__ = true;return _uniq_var_717;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_722 = function (expr, define) {var _uniq_var_271 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_721 = function () {var _uniq_var_276 = call(statementFlattenGenerator);
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
var _uniq_var_279 = (function () {var _uniq_var_720 = function (_uniq_var_718, _uniq_var_719) {
if (typeof _uniq_var_718.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_718.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_718.push.apply(_uniq_var_718, arguments);
} else if (_uniq_var_718.push !== undefined) {
if (_uniq_var_719 === undefined) {
return _uniq_var_718.push;
}
_uniq_var_718.push = _uniq_var_719;
}return _uniq_var_718;
};_uniq_var_720.__lix_func__ = true;return _uniq_var_720;})()(seq, [ret, '=', seqRet]);
_uniq_var_279;
_uniq_var_279;
return [seq, '{seq}'];
};_uniq_var_721.__lix_func__ = true;return _uniq_var_721;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_280 = call(getAndOpSeq);
_uniq_var_280;
var _uniq_var_281 = define([[[ret, [[], '{empty}']], [_uniq_var_280, 'else']], 'if'], true);
_uniq_var_281;
_uniq_var_281;
return ret;
};_uniq_var_722.__lix_func__ = true;return _uniq_var_722;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_727 = function (expr, define) {var _uniq_var_282 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_726 = function () {var _uniq_var_287 = call(statementFlattenGenerator);
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
var _uniq_var_290 = (function () {var _uniq_var_725 = function (_uniq_var_723, _uniq_var_724) {
if (typeof _uniq_var_723.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_723.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_723.push.apply(_uniq_var_723, arguments);
} else if (_uniq_var_723.push !== undefined) {
if (_uniq_var_724 === undefined) {
return _uniq_var_723.push;
}
_uniq_var_723.push = _uniq_var_724;
}return _uniq_var_723;
};_uniq_var_725.__lix_func__ = true;return _uniq_var_725;})()(seq, [ret, '=', seqRet]);
_uniq_var_290;
_uniq_var_290;
return [seq, '{seq}'];
};_uniq_var_726.__lix_func__ = true;return _uniq_var_726;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_291 = call(getAndOpSeq);
_uniq_var_291;
var _uniq_var_292 = define([[[ret, _uniq_var_291]], 'if'], true);
_uniq_var_292;
_uniq_var_292;
return ret;
};_uniq_var_727.__lix_func__ = true;return _uniq_var_727;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_732 = function (expr, define, tmpVar, ctx) {var _uniq_var_305 = foreach(expr[0], (function () {var _uniq_var_731 = function (i) {var _uniq_var_293 = true;
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
var _uniq_var_302 = (function () {var _uniq_var_730 = function (_uniq_var_728, _uniq_var_729) {
if (typeof _uniq_var_728.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_728.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_728.unshift.apply(_uniq_var_728, arguments);
} else if (_uniq_var_728.unshift !== undefined) {
if (_uniq_var_729 === undefined) {
return _uniq_var_728.unshift;
}
_uniq_var_728.unshift = _uniq_var_729;
}return _uniq_var_728;
};_uniq_var_730.__lix_func__ = true;return _uniq_var_730;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
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
};_uniq_var_731.__lix_func__ = true;return _uniq_var_731;})());
_uniq_var_305;
return _uniq_var_305;
};_uniq_var_732.__lix_func__ = true;return _uniq_var_732;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_733 = function (expr, define) {var _uniq_var_306 = define(['true', '{atomic}'], 'new');
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
};_uniq_var_733.__lix_func__ = true;return _uniq_var_733;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_734 = function (expr, define) {var _uniq_var_308 = flatten(expr[2], define);
_uniq_var_308;
(expr[2] = _uniq_var_308);
return expr;
};_uniq_var_734.__lix_func__ = true;return _uniq_var_734;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_738 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
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
var _uniq_var_312 = (function () {var _uniq_var_737 = function (_uniq_var_735, _uniq_var_736) {
if (typeof _uniq_var_735.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_735.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_735.push.apply(_uniq_var_735, arguments);
} else if (_uniq_var_735.push !== undefined) {
if (_uniq_var_736 === undefined) {
return _uniq_var_735.push;
}
_uniq_var_735.push = _uniq_var_736;
}return _uniq_var_735;
};_uniq_var_737.__lix_func__ = true;return _uniq_var_737;})()(partialExpr, expr[i]);
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
};_uniq_var_738.__lix_func__ = true;return _uniq_var_738;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_739 = function (expr, define) {var _uniq_var_316 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_316;
return _uniq_var_316;
};_uniq_var_739.__lix_func__ = true;return _uniq_var_739;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_740 = function (expr, define) {var _uniq_var_317 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_317;
return _uniq_var_317;
};_uniq_var_740.__lix_func__ = true;return _uniq_var_740;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_741 = function (expr, define) {var _uniq_var_318 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_318;
return _uniq_var_318;
};_uniq_var_741.__lix_func__ = true;return _uniq_var_741;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_742 = function (expr, define) {var _uniq_var_319 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_319;
return _uniq_var_319;
};_uniq_var_742.__lix_func__ = true;return _uniq_var_742;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_743 = function (expr, define) {var _uniq_var_320 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_320;
return _uniq_var_320;
};_uniq_var_743.__lix_func__ = true;return _uniq_var_743;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_744 = function (expr, define) {var _uniq_var_321 = flatten(expr[0], define);
_uniq_var_321;
(expr[0] = _uniq_var_321);
return expr;
};_uniq_var_744.__lix_func__ = true;return _uniq_var_744;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_745 = function (expr, define) {return expr;
};_uniq_var_745.__lix_func__ = true;return _uniq_var_745;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_747 = function (expr, define) {var _uniq_var_323 = map(expr[0], (function () {var _uniq_var_746 = function (i) {var _uniq_var_322 = flatten(i, define);
_uniq_var_322;
return _uniq_var_322;
};_uniq_var_746.__lix_func__ = true;return _uniq_var_746;})());
_uniq_var_323;
(expr[0] = _uniq_var_323);
return expr;
};_uniq_var_747.__lix_func__ = true;return _uniq_var_747;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_748 = function (expr, define) {return expr;
};_uniq_var_748.__lix_func__ = true;return _uniq_var_748;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_749 = function (expr, define) {var _uniq_var_324 = true;
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
};_uniq_var_749.__lix_func__ = true;return _uniq_var_749;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_754 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_753 = function (name, value) {var ret = undefined;
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
var _uniq_var_333 = (function () {var _uniq_var_752 = function (_uniq_var_750, _uniq_var_751) {
if (typeof _uniq_var_750.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_750.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_750.push.apply(_uniq_var_750, arguments);
} else if (_uniq_var_750.push !== undefined) {
if (_uniq_var_751 === undefined) {
return _uniq_var_750.push;
}
_uniq_var_750.push = _uniq_var_751;
}return _uniq_var_750;
};_uniq_var_752.__lix_func__ = true;return _uniq_var_752;})()(statements, [lixVar, ':=', value]);
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
};_uniq_var_753.__lix_func__ = true;return _uniq_var_753;})();
};_uniq_var_754.__lix_func__ = true;return _uniq_var_754;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_336 = call(NewGlobalDefine);
_uniq_var_336;
var globalDefine = _uniq_var_336;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_755 = function (expr, define) {var ret = ['', '{empty}'];
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
};_uniq_var_755.__lix_func__ = true;return _uniq_var_755;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_756 = function (expr, define) {var _uniq_var_342 = flatten(expr[2], define);
_uniq_var_342;
(expr[2] = _uniq_var_342);
return expr;
};_uniq_var_756.__lix_func__ = true;return _uniq_var_756;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_758 = function (expr, define) {var _uniq_var_344 = map(expr[0], (function () {var _uniq_var_757 = function (i) {var _uniq_var_343 = flattenProperty(i, define);
_uniq_var_343;
return _uniq_var_343;
};_uniq_var_757.__lix_func__ = true;return _uniq_var_757;})());
_uniq_var_344;
(expr[0] = _uniq_var_344);
return expr;
};_uniq_var_758.__lix_func__ = true;return _uniq_var_758;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_760 = function (expr, define) {var _uniq_var_346 = map(expr[0], (function () {var _uniq_var_759 = function (i) {var _uniq_var_345 = flatten(i, define);
_uniq_var_345;
return _uniq_var_345;
};_uniq_var_759.__lix_func__ = true;return _uniq_var_759;})());
_uniq_var_346;
(expr[0] = _uniq_var_346);
return expr;
};_uniq_var_760.__lix_func__ = true;return _uniq_var_760;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_761 = function (expr, define) {var _uniq_var_347 = flatten(expr[2], define);
_uniq_var_347;
(expr[2] = _uniq_var_347);
return expr;
};_uniq_var_761.__lix_func__ = true;return _uniq_var_761;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_762 = function (expr, define) {var _uniq_var_348 = true;
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
};_uniq_var_762.__lix_func__ = true;return _uniq_var_762;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_763 = function (expr, define) {return expr;
};_uniq_var_763.__lix_func__ = true;return _uniq_var_763;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_764 = function (expr, define) {var _uniq_var_354 = flatten(expr[0], define);
_uniq_var_354;
return _uniq_var_354;
};_uniq_var_764.__lix_func__ = true;return _uniq_var_764;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_778 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_777 = function (statement, tmpVarName) {var _uniq_var_355 = true;
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
var _uniq_var_358 = (function () {var _uniq_var_767 = function (_uniq_var_765, _uniq_var_766) {
if (typeof _uniq_var_765.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_765.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_765.push.apply(_uniq_var_765, arguments);
} else if (_uniq_var_765.push !== undefined) {
if (_uniq_var_766 === undefined) {
return _uniq_var_765.push;
}
_uniq_var_765.push = _uniq_var_766;
}return _uniq_var_765;
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})()(data, statement);
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
var _uniq_var_361 = (function () {var _uniq_var_770 = function (_uniq_var_768, _uniq_var_769) {
if (typeof _uniq_var_768.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_768.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_768.push.apply(_uniq_var_768, arguments);
} else if (_uniq_var_768.push !== undefined) {
if (_uniq_var_769 === undefined) {
return _uniq_var_768.push;
}
_uniq_var_768.push = _uniq_var_769;
}return _uniq_var_768;
};_uniq_var_770.__lix_func__ = true;return _uniq_var_770;})()(data, statement);
_uniq_var_361;
_uniq_var_361;
var _uniq_var_362 = (function () {var _uniq_var_773 = function (_uniq_var_771, _uniq_var_772) {
if (typeof _uniq_var_771.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_771.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_771.push.apply(_uniq_var_771, arguments);
} else if (_uniq_var_771.push !== undefined) {
if (_uniq_var_772 === undefined) {
return _uniq_var_771.push;
}
_uniq_var_771.push = _uniq_var_772;
}return _uniq_var_771;
};_uniq_var_773.__lix_func__ = true;return _uniq_var_773;})()(data, [lixVar, ':=', tmpRet]);
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
var _uniq_var_365 = (function () {var _uniq_var_776 = function (_uniq_var_774, _uniq_var_775) {
if (typeof _uniq_var_774.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_774.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_774.push.apply(_uniq_var_774, arguments);
} else if (_uniq_var_774.push !== undefined) {
if (_uniq_var_775 === undefined) {
return _uniq_var_774.push;
}
_uniq_var_774.push = _uniq_var_775;
}return _uniq_var_774;
};_uniq_var_776.__lix_func__ = true;return _uniq_var_776;})()(data, [lixVar, ':=', statement]);
_uniq_var_365;
_uniq_var_365;
(_uniq_var_356 = lixVar);

};
return _uniq_var_356;
};_uniq_var_777.__lix_func__ = true;return _uniq_var_777;})();
};_uniq_var_778.__lix_func__ = true;return _uniq_var_778;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_790 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_779 = function (stmt, index) {var ret = stmt;
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
};_uniq_var_779.__lix_func__ = true;return _uniq_var_779;})();
ctx;
ctx;
var _uniq_var_400 = foreach(expr[0], (function () {var _uniq_var_789 = function (item, index) {var _uniq_var_374 = call(statementFlattenGenerator);
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
var _uniq_var_377 = (function () {var _uniq_var_782 = function (_uniq_var_780, _uniq_var_781) {
if (typeof _uniq_var_780.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_780.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_780.concat.apply(_uniq_var_780, arguments);
} else if (_uniq_var_780.concat !== undefined) {
if (_uniq_var_781 === undefined) {
return _uniq_var_780.concat;
}
_uniq_var_780.concat = _uniq_var_781;
}return _uniq_var_780;
};_uniq_var_782.__lix_func__ = true;return _uniq_var_782;})()(ret, _uniq_var_376);
_uniq_var_377;
(ret = _uniq_var_377);
var _uniq_var_378 = ctx(itemRet, index);
_uniq_var_378;
var stmtRet = _uniq_var_378;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_783 = function (expr) {var _uniq_var_379 = __eq__(expr[1], '{atomic}');
_uniq_var_379;
var _uniq_var_380 = _uniq_var_379;
_uniq_var_380;
if (_uniq_var_380) {
var _uniq_var_381 = __ne__(expr[3], undefined);
_uniq_var_381;
(_uniq_var_380 = _uniq_var_381);

};
return _uniq_var_380;
};_uniq_var_783.__lix_func__ = true;return _uniq_var_783;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_784 = function (expr) {var _uniq_var_382 = __eq__(expr[1], '{atomic}');
_uniq_var_382;
var _uniq_var_383 = _uniq_var_382;
_uniq_var_383;
if (_uniq_var_383) {
var _uniq_var_384 = __eq__(expr[3], undefined);
_uniq_var_384;
(_uniq_var_383 = _uniq_var_384);

};
return _uniq_var_383;
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_785 = function (expr) {var _uniq_var_385 = isRealVar(expr);
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
};_uniq_var_785.__lix_func__ = true;return _uniq_var_785;})();
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
var _uniq_var_395 = (function () {var _uniq_var_788 = function (_uniq_var_786, _uniq_var_787) {
if (typeof _uniq_var_786.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_786.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_786.push.apply(_uniq_var_786, arguments);
} else if (_uniq_var_786.push !== undefined) {
if (_uniq_var_787 === undefined) {
return _uniq_var_786.push;
}
_uniq_var_786.push = _uniq_var_787;
}return _uniq_var_786;
};_uniq_var_788.__lix_func__ = true;return _uniq_var_788;})()(ret, stmtRet);
_uniq_var_395;
(_uniq_var_391 = _uniq_var_395);

};
return _uniq_var_391;
};_uniq_var_789.__lix_func__ = true;return _uniq_var_789;})());
_uniq_var_400;
_uniq_var_400;
(expr[0] = ret);
return expr;
};_uniq_var_790.__lix_func__ = true;return _uniq_var_790;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_797 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_401 = flatten(expr[0], define);
_uniq_var_401;
var ret = _uniq_var_401;
ret;
ret;
var _uniq_var_402 = call(globalDefine);
_uniq_var_402;
var _uniq_var_403 = (function () {var _uniq_var_793 = function (_uniq_var_791, _uniq_var_792) {
if (typeof _uniq_var_791.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_791.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_791.concat.apply(_uniq_var_791, arguments);
} else if (_uniq_var_791.concat !== undefined) {
if (_uniq_var_792 === undefined) {
return _uniq_var_791.concat;
}
_uniq_var_791.concat = _uniq_var_792;
}return _uniq_var_791;
};_uniq_var_793.__lix_func__ = true;return _uniq_var_793;})()(trapExpr, _uniq_var_402);
_uniq_var_403;
var _uniq_var_404 = (function () {var _uniq_var_796 = function (_uniq_var_794, _uniq_var_795) {
if (typeof _uniq_var_794.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_794.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_794.concat.apply(_uniq_var_794, arguments);
} else if (_uniq_var_794.concat !== undefined) {
if (_uniq_var_795 === undefined) {
return _uniq_var_794.concat;
}
_uniq_var_794.concat = _uniq_var_795;
}return _uniq_var_794;
};_uniq_var_796.__lix_func__ = true;return _uniq_var_796;})()(_uniq_var_403, ret[0]);
_uniq_var_404;
(ret[0] = _uniq_var_404);
return [ret, '{start}'];
};_uniq_var_797.__lix_func__ = true;return _uniq_var_797;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_801 = function (expr, define) {var _uniq_var_405 = true;
_uniq_var_405;
var _uniq_var_406 = null;
_uniq_var_406;
var _uniq_var_408 = __eq__(expr[2], '{var}');
_uniq_var_408;
if ((_uniq_var_405 && _uniq_var_408)) {
(_uniq_var_405 = false);
var _uniq_var_407 = (function () {var _uniq_var_800 = function (_uniq_var_798, _uniq_var_799) {
if (typeof _uniq_var_798.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_798.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_798.join.apply(_uniq_var_798, arguments);
} else if (_uniq_var_798.join !== undefined) {
if (_uniq_var_799 === undefined) {
return _uniq_var_798.join;
}
_uniq_var_798.join = _uniq_var_799;
}return _uniq_var_798;
};_uniq_var_800.__lix_func__ = true;return _uniq_var_800;})()(['"', expr[0], '"'], '');
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
};_uniq_var_801.__lix_func__ = true;return _uniq_var_801;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_802 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_802.__lix_func__ = true;return _uniq_var_802;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_803 = function (expr, define) {return expr;
};_uniq_var_803.__lix_func__ = true;return _uniq_var_803;})();
flattenAmpersand;
flattenAmpersand;
var flattenAnyTypeDestructor = (function () {var _uniq_var_804 = function (arg) {return [];
};_uniq_var_804.__lix_func__ = true;return _uniq_var_804;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_805 = function (expr) {var _uniq_var_412 = transformVarName(expr[0]);
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
};_uniq_var_805.__lix_func__ = true;return _uniq_var_805;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_815 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_416 = getAtomicExprVarName(args[2][0]);
_uniq_var_416;
var varName = _uniq_var_416;
varName;
varName;
var _uniq_var_417 = (function () {var _uniq_var_808 = function (_uniq_var_806, _uniq_var_807) {
if (typeof _uniq_var_806.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_806.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_806.join.apply(_uniq_var_806, arguments);
} else if (_uniq_var_806.join !== undefined) {
if (_uniq_var_807 === undefined) {
return _uniq_var_806.join;
}
_uniq_var_806.join = _uniq_var_807;
}return _uniq_var_806;
};_uniq_var_808.__lix_func__ = true;return _uniq_var_808;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_417;
var _uniq_var_418 = (function () {var _uniq_var_811 = function (_uniq_var_809, _uniq_var_810) {
if (typeof _uniq_var_809.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_809.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_809.push.apply(_uniq_var_809, arguments);
} else if (_uniq_var_809.push !== undefined) {
if (_uniq_var_810 === undefined) {
return _uniq_var_809.push;
}
_uniq_var_809.push = _uniq_var_810;
}return _uniq_var_809;
};_uniq_var_811.__lix_func__ = true;return _uniq_var_811;})()(ret, _uniq_var_417);
_uniq_var_418;
_uniq_var_418;
var _uniq_var_419 = flattenDestructor(args[2], varName);
_uniq_var_419;
var _uniq_var_420 = (function () {var _uniq_var_814 = function (_uniq_var_812, _uniq_var_813) {
if (typeof _uniq_var_812.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_812.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_812.concat.apply(_uniq_var_812, arguments);
} else if (_uniq_var_812.concat !== undefined) {
if (_uniq_var_813 === undefined) {
return _uniq_var_812.concat;
}
_uniq_var_812.concat = _uniq_var_813;
}return _uniq_var_812;
};_uniq_var_814.__lix_func__ = true;return _uniq_var_814;})()(ret, _uniq_var_419);
_uniq_var_420;
(ret = _uniq_var_420);
return ret;
};_uniq_var_815.__lix_func__ = true;return _uniq_var_815;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_825 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_421 = getAtomicExprVarName(args[2][0]);
_uniq_var_421;
var varName = _uniq_var_421;
varName;
varName;
var _uniq_var_422 = (function () {var _uniq_var_818 = function (_uniq_var_816, _uniq_var_817) {
if (typeof _uniq_var_816.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_816.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_816.join.apply(_uniq_var_816, arguments);
} else if (_uniq_var_816.join !== undefined) {
if (_uniq_var_817 === undefined) {
return _uniq_var_816.join;
}
_uniq_var_816.join = _uniq_var_817;
}return _uniq_var_816;
};_uniq_var_818.__lix_func__ = true;return _uniq_var_818;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_422;
var _uniq_var_423 = (function () {var _uniq_var_821 = function (_uniq_var_819, _uniq_var_820) {
if (typeof _uniq_var_819.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_819.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_819.push.apply(_uniq_var_819, arguments);
} else if (_uniq_var_819.push !== undefined) {
if (_uniq_var_820 === undefined) {
return _uniq_var_819.push;
}
_uniq_var_819.push = _uniq_var_820;
}return _uniq_var_819;
};_uniq_var_821.__lix_func__ = true;return _uniq_var_821;})()(ret, _uniq_var_422);
_uniq_var_423;
_uniq_var_423;
var _uniq_var_424 = flattenDestructor(args[2], varName);
_uniq_var_424;
var _uniq_var_425 = (function () {var _uniq_var_824 = function (_uniq_var_822, _uniq_var_823) {
if (typeof _uniq_var_822.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_822.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_822.concat.apply(_uniq_var_822, arguments);
} else if (_uniq_var_822.concat !== undefined) {
if (_uniq_var_823 === undefined) {
return _uniq_var_822.concat;
}
_uniq_var_822.concat = _uniq_var_823;
}return _uniq_var_822;
};_uniq_var_824.__lix_func__ = true;return _uniq_var_824;})()(ret, _uniq_var_424);
_uniq_var_425;
(ret = _uniq_var_425);
return ret;
};_uniq_var_825.__lix_func__ = true;return _uniq_var_825;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_830 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_428 = foreach(args[2], (function () {var _uniq_var_829 = function (item, index) {var _uniq_var_426 = flattenDestructor(item, objName);
_uniq_var_426;
var _uniq_var_427 = (function () {var _uniq_var_828 = function (_uniq_var_826, _uniq_var_827) {
if (typeof _uniq_var_826.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_826.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_826.concat.apply(_uniq_var_826, arguments);
} else if (_uniq_var_826.concat !== undefined) {
if (_uniq_var_827 === undefined) {
return _uniq_var_826.concat;
}
_uniq_var_826.concat = _uniq_var_827;
}return _uniq_var_826;
};_uniq_var_828.__lix_func__ = true;return _uniq_var_828;})()(ret, _uniq_var_426);
_uniq_var_427;
return (ret = _uniq_var_427);
};_uniq_var_829.__lix_func__ = true;return _uniq_var_829;})());
_uniq_var_428;
_uniq_var_428;
return ret;
};_uniq_var_830.__lix_func__ = true;return _uniq_var_830;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenNotDestructor = (function () {var _uniq_var_831 = function (args, varName) {var _uniq_var_429 = flattenDestructor(args[2], varName);
_uniq_var_429;
return _uniq_var_429;
};_uniq_var_831.__lix_func__ = true;return _uniq_var_831;})();
flattenNotDestructor;
flattenNotDestructor;
var flattenAndDestructor = (function () {var _uniq_var_838 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_430 = flattenDestructor(args[2], varName);
_uniq_var_430;
var _uniq_var_431 = (function () {var _uniq_var_834 = function (_uniq_var_832, _uniq_var_833) {
if (typeof _uniq_var_832.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_832.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_832.concat.apply(_uniq_var_832, arguments);
} else if (_uniq_var_832.concat !== undefined) {
if (_uniq_var_833 === undefined) {
return _uniq_var_832.concat;
}
_uniq_var_832.concat = _uniq_var_833;
}return _uniq_var_832;
};_uniq_var_834.__lix_func__ = true;return _uniq_var_834;})()(ret, _uniq_var_430);
_uniq_var_431;
(ret = _uniq_var_431);
var _uniq_var_432 = flattenDestructor(args[3], varName);
_uniq_var_432;
var _uniq_var_433 = (function () {var _uniq_var_837 = function (_uniq_var_835, _uniq_var_836) {
if (typeof _uniq_var_835.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_835.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_835.concat.apply(_uniq_var_835, arguments);
} else if (_uniq_var_835.concat !== undefined) {
if (_uniq_var_836 === undefined) {
return _uniq_var_835.concat;
}
_uniq_var_835.concat = _uniq_var_836;
}return _uniq_var_835;
};_uniq_var_837.__lix_func__ = true;return _uniq_var_837;})()(ret, _uniq_var_432);
_uniq_var_433;
(ret = _uniq_var_433);
return ret;
};_uniq_var_838.__lix_func__ = true;return _uniq_var_838;})();
flattenAndDestructor;
flattenAndDestructor;
var flattenOrDestructor = (function () {var _uniq_var_845 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_434 = flattenDestructor(args[2], varName);
_uniq_var_434;
var _uniq_var_435 = (function () {var _uniq_var_841 = function (_uniq_var_839, _uniq_var_840) {
if (typeof _uniq_var_839.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_839.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_839.concat.apply(_uniq_var_839, arguments);
} else if (_uniq_var_839.concat !== undefined) {
if (_uniq_var_840 === undefined) {
return _uniq_var_839.concat;
}
_uniq_var_839.concat = _uniq_var_840;
}return _uniq_var_839;
};_uniq_var_841.__lix_func__ = true;return _uniq_var_841;})()(ret, _uniq_var_434);
_uniq_var_435;
(ret = _uniq_var_435);
var _uniq_var_436 = flattenDestructor(args[3], varName);
_uniq_var_436;
var _uniq_var_437 = (function () {var _uniq_var_844 = function (_uniq_var_842, _uniq_var_843) {
if (typeof _uniq_var_842.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_842.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_842.concat.apply(_uniq_var_842, arguments);
} else if (_uniq_var_842.concat !== undefined) {
if (_uniq_var_843 === undefined) {
return _uniq_var_842.concat;
}
_uniq_var_842.concat = _uniq_var_843;
}return _uniq_var_842;
};_uniq_var_844.__lix_func__ = true;return _uniq_var_844;})()(ret, _uniq_var_436);
_uniq_var_437;
(ret = _uniq_var_437);
return ret;
};_uniq_var_845.__lix_func__ = true;return _uniq_var_845;})();
flattenOrDestructor;
flattenOrDestructor;
var flattenNamedDestructor = (function () {var _uniq_var_855 = function (args, oldName) {var ret = [];
ret;
ret;
var _uniq_var_438 = getAtomicExprVarName(args[0]);
_uniq_var_438;
var varName = _uniq_var_438;
varName;
varName;
var _uniq_var_439 = true;
_uniq_var_439;
var _uniq_var_440 = null;
_uniq_var_440;
var _uniq_var_443 = __ne__(oldName, "arguments");
_uniq_var_443;
if ((_uniq_var_439 && _uniq_var_443)) {
(_uniq_var_439 = false);
var _uniq_var_441 = (function () {var _uniq_var_848 = function (_uniq_var_846, _uniq_var_847) {
if (typeof _uniq_var_846.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_846.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_846.join.apply(_uniq_var_846, arguments);
} else if (_uniq_var_846.join !== undefined) {
if (_uniq_var_847 === undefined) {
return _uniq_var_846.join;
}
_uniq_var_846.join = _uniq_var_847;
}return _uniq_var_846;
};_uniq_var_848.__lix_func__ = true;return _uniq_var_848;})()(["var ", varName, " = ", oldName], "");
_uniq_var_441;
var _uniq_var_442 = (function () {var _uniq_var_851 = function (_uniq_var_849, _uniq_var_850) {
if (typeof _uniq_var_849.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_849.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_849.push.apply(_uniq_var_849, arguments);
} else if (_uniq_var_849.push !== undefined) {
if (_uniq_var_850 === undefined) {
return _uniq_var_849.push;
}
_uniq_var_849.push = _uniq_var_850;
}return _uniq_var_849;
};_uniq_var_851.__lix_func__ = true;return _uniq_var_851;})()(ret, _uniq_var_441);
_uniq_var_442;
(_uniq_var_440 = _uniq_var_442);

};
_uniq_var_440;
var _uniq_var_444 = flattenDestructor(args[2], varName);
_uniq_var_444;
var _uniq_var_445 = (function () {var _uniq_var_854 = function (_uniq_var_852, _uniq_var_853) {
if (typeof _uniq_var_852.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_852.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_852.concat.apply(_uniq_var_852, arguments);
} else if (_uniq_var_852.concat !== undefined) {
if (_uniq_var_853 === undefined) {
return _uniq_var_852.concat;
}
_uniq_var_852.concat = _uniq_var_853;
}return _uniq_var_852;
};_uniq_var_854.__lix_func__ = true;return _uniq_var_854;})()(ret, _uniq_var_444);
_uniq_var_445;
(ret = _uniq_var_445);
return ret;
};_uniq_var_855.__lix_func__ = true;return _uniq_var_855;})();
flattenNamedDestructor;
flattenNamedDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_866 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_451 = foreach(args[2], (function () {var _uniq_var_865 = function (item, index) {var _uniq_var_446 = getAtomicExprVarName(item[0]);
_uniq_var_446;
var varName = _uniq_var_446;
varName;
varName;
var _uniq_var_447 = (function () {var _uniq_var_858 = function (_uniq_var_856, _uniq_var_857) {
if (typeof _uniq_var_856.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_856.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_856.join.apply(_uniq_var_856, arguments);
} else if (_uniq_var_856.join !== undefined) {
if (_uniq_var_857 === undefined) {
return _uniq_var_856.join;
}
_uniq_var_856.join = _uniq_var_857;
}return _uniq_var_856;
};_uniq_var_858.__lix_func__ = true;return _uniq_var_858;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_447;
var _uniq_var_448 = (function () {var _uniq_var_861 = function (_uniq_var_859, _uniq_var_860) {
if (typeof _uniq_var_859.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_859.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_859.push.apply(_uniq_var_859, arguments);
} else if (_uniq_var_859.push !== undefined) {
if (_uniq_var_860 === undefined) {
return _uniq_var_859.push;
}
_uniq_var_859.push = _uniq_var_860;
}return _uniq_var_859;
};_uniq_var_861.__lix_func__ = true;return _uniq_var_861;})()(ret, _uniq_var_447);
_uniq_var_448;
_uniq_var_448;
var _uniq_var_449 = flattenDestructor(item, varName);
_uniq_var_449;
var _uniq_var_450 = (function () {var _uniq_var_864 = function (_uniq_var_862, _uniq_var_863) {
if (typeof _uniq_var_862.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_862.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_862.concat.apply(_uniq_var_862, arguments);
} else if (_uniq_var_862.concat !== undefined) {
if (_uniq_var_863 === undefined) {
return _uniq_var_862.concat;
}
_uniq_var_862.concat = _uniq_var_863;
}return _uniq_var_862;
};_uniq_var_864.__lix_func__ = true;return _uniq_var_864;})()(ret, _uniq_var_449);
_uniq_var_450;
return (ret = _uniq_var_450);
};_uniq_var_865.__lix_func__ = true;return _uniq_var_865;})());
_uniq_var_451;
_uniq_var_451;
return ret;
};_uniq_var_866.__lix_func__ = true;return _uniq_var_866;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_892 = function (args, arrayName) {var len = args[2].length;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_452 = true;
_uniq_var_452;
var _uniq_var_453 = null;
_uniq_var_453;
var _uniq_var_456 = __ne__(arrayName, "arguments");
_uniq_var_456;
if ((_uniq_var_452 && _uniq_var_456)) {
(_uniq_var_452 = false);
var _uniq_var_454 = (function () {var _uniq_var_869 = function (_uniq_var_867, _uniq_var_868) {
if (typeof _uniq_var_867.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_867.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_867.join.apply(_uniq_var_867, arguments);
} else if (_uniq_var_867.join !== undefined) {
if (_uniq_var_868 === undefined) {
return _uniq_var_867.join;
}
_uniq_var_867.join = _uniq_var_868;
}return _uniq_var_867;
};_uniq_var_869.__lix_func__ = true;return _uniq_var_869;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_454;
var _uniq_var_455 = (function () {var _uniq_var_872 = function (_uniq_var_870, _uniq_var_871) {
if (typeof _uniq_var_870.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_870.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_870.push.apply(_uniq_var_870, arguments);
} else if (_uniq_var_870.push !== undefined) {
if (_uniq_var_871 === undefined) {
return _uniq_var_870.push;
}
_uniq_var_870.push = _uniq_var_871;
}return _uniq_var_870;
};_uniq_var_872.__lix_func__ = true;return _uniq_var_872;})()(ret, _uniq_var_454);
_uniq_var_455;
(_uniq_var_453 = _uniq_var_455);

};
_uniq_var_453;
var _uniq_var_457 = (function () {var _uniq_var_875 = function (_uniq_var_873, _uniq_var_874) {
if (typeof _uniq_var_873.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_873.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_873.join.apply(_uniq_var_873, arguments);
} else if (_uniq_var_873.join !== undefined) {
if (_uniq_var_874 === undefined) {
return _uniq_var_873.join;
}
_uniq_var_873.join = _uniq_var_874;
}return _uniq_var_873;
};_uniq_var_875.__lix_func__ = true;return _uniq_var_875;})()([arrayName, ".length == ", len], "");
_uniq_var_457;
var _uniq_var_458 = (function () {var _uniq_var_878 = function (_uniq_var_876, _uniq_var_877) {
if (typeof _uniq_var_876.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_876.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_876.push.apply(_uniq_var_876, arguments);
} else if (_uniq_var_876.push !== undefined) {
if (_uniq_var_877 === undefined) {
return _uniq_var_876.push;
}
_uniq_var_876.push = _uniq_var_877;
}return _uniq_var_876;
};_uniq_var_878.__lix_func__ = true;return _uniq_var_878;})()(ret, _uniq_var_457);
_uniq_var_458;
_uniq_var_458;
var _uniq_var_465 = foreach(args[2], (function () {var _uniq_var_888 = function (item, index) {var _uniq_var_459 = (function () {var _uniq_var_881 = function (_uniq_var_879, _uniq_var_880) {
if (typeof _uniq_var_879.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_879.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_879.join.apply(_uniq_var_879, arguments);
} else if (_uniq_var_879.join !== undefined) {
if (_uniq_var_880 === undefined) {
return _uniq_var_879.join;
}
_uniq_var_879.join = _uniq_var_880;
}return _uniq_var_879;
};_uniq_var_881.__lix_func__ = true;return _uniq_var_881;})()([arrayName, "[", index, "]"], "");
_uniq_var_459;
var _uniq_var_460 = flattenCondition(item, _uniq_var_459);
_uniq_var_460;
var cond = _uniq_var_460;
cond;
cond;
var _uniq_var_461 = true;
_uniq_var_461;
var _uniq_var_462 = null;
_uniq_var_462;
if ((_uniq_var_461 && cond)) {
(_uniq_var_461 = false);
var _uniq_var_463 = (function () {var _uniq_var_884 = function (_uniq_var_882, _uniq_var_883) {
if (typeof _uniq_var_882.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_882.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_882.join.apply(_uniq_var_882, arguments);
} else if (_uniq_var_882.join !== undefined) {
if (_uniq_var_883 === undefined) {
return _uniq_var_882.join;
}
_uniq_var_882.join = _uniq_var_883;
}return _uniq_var_882;
};_uniq_var_884.__lix_func__ = true;return _uniq_var_884;})()(["(", cond, ")"], "");
_uniq_var_463;
var _uniq_var_464 = (function () {var _uniq_var_887 = function (_uniq_var_885, _uniq_var_886) {
if (typeof _uniq_var_885.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_885.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_885.push.apply(_uniq_var_885, arguments);
} else if (_uniq_var_885.push !== undefined) {
if (_uniq_var_886 === undefined) {
return _uniq_var_885.push;
}
_uniq_var_885.push = _uniq_var_886;
}return _uniq_var_885;
};_uniq_var_887.__lix_func__ = true;return _uniq_var_887;})()(ret, _uniq_var_463);
_uniq_var_464;
(_uniq_var_462 = _uniq_var_464);

};
return _uniq_var_462;
};_uniq_var_888.__lix_func__ = true;return _uniq_var_888;})());
_uniq_var_465;
_uniq_var_465;
var _uniq_var_466 = (function () {var _uniq_var_891 = function (_uniq_var_889, _uniq_var_890) {
if (typeof _uniq_var_889.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_889.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_889.join.apply(_uniq_var_889, arguments);
} else if (_uniq_var_889.join !== undefined) {
if (_uniq_var_890 === undefined) {
return _uniq_var_889.join;
}
_uniq_var_889.join = _uniq_var_890;
}return _uniq_var_889;
};_uniq_var_891.__lix_func__ = true;return _uniq_var_891;})()(ret, " && ");
_uniq_var_466;
return _uniq_var_466;
};_uniq_var_892.__lix_func__ = true;return _uniq_var_892;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_928 = function (args, arrayName) {var _uniq_var_467 = __add__(args[2].length, args[4].length);
_uniq_var_467;
var len = _uniq_var_467;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_468 = true;
_uniq_var_468;
var _uniq_var_469 = null;
_uniq_var_469;
var _uniq_var_472 = __ne__(arrayName, "arguments");
_uniq_var_472;
if ((_uniq_var_468 && _uniq_var_472)) {
(_uniq_var_468 = false);
var _uniq_var_470 = (function () {var _uniq_var_895 = function (_uniq_var_893, _uniq_var_894) {
if (typeof _uniq_var_893.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_893.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_893.join.apply(_uniq_var_893, arguments);
} else if (_uniq_var_893.join !== undefined) {
if (_uniq_var_894 === undefined) {
return _uniq_var_893.join;
}
_uniq_var_893.join = _uniq_var_894;
}return _uniq_var_893;
};_uniq_var_895.__lix_func__ = true;return _uniq_var_895;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_470;
var _uniq_var_471 = (function () {var _uniq_var_898 = function (_uniq_var_896, _uniq_var_897) {
if (typeof _uniq_var_896.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_896.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_896.push.apply(_uniq_var_896, arguments);
} else if (_uniq_var_896.push !== undefined) {
if (_uniq_var_897 === undefined) {
return _uniq_var_896.push;
}
_uniq_var_896.push = _uniq_var_897;
}return _uniq_var_896;
};_uniq_var_898.__lix_func__ = true;return _uniq_var_898;})()(ret, _uniq_var_470);
_uniq_var_471;
(_uniq_var_469 = _uniq_var_471);

};
_uniq_var_469;
var _uniq_var_473 = true;
_uniq_var_473;
var _uniq_var_474 = null;
_uniq_var_474;
var _uniq_var_477 = __gt__(len, 0);
_uniq_var_477;
if ((_uniq_var_473 && _uniq_var_477)) {
(_uniq_var_473 = false);
var _uniq_var_475 = (function () {var _uniq_var_901 = function (_uniq_var_899, _uniq_var_900) {
if (typeof _uniq_var_899.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_899.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_899.join.apply(_uniq_var_899, arguments);
} else if (_uniq_var_899.join !== undefined) {
if (_uniq_var_900 === undefined) {
return _uniq_var_899.join;
}
_uniq_var_899.join = _uniq_var_900;
}return _uniq_var_899;
};_uniq_var_901.__lix_func__ = true;return _uniq_var_901;})()([arrayName, ".length >= ", len], "");
_uniq_var_475;
var _uniq_var_476 = (function () {var _uniq_var_904 = function (_uniq_var_902, _uniq_var_903) {
if (typeof _uniq_var_902.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_902.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_902.push.apply(_uniq_var_902, arguments);
} else if (_uniq_var_902.push !== undefined) {
if (_uniq_var_903 === undefined) {
return _uniq_var_902.push;
}
_uniq_var_902.push = _uniq_var_903;
}return _uniq_var_902;
};_uniq_var_904.__lix_func__ = true;return _uniq_var_904;})()(ret, _uniq_var_475);
_uniq_var_476;
(_uniq_var_474 = _uniq_var_476);

};
_uniq_var_474;
var _uniq_var_484 = foreach(args[2], (function () {var _uniq_var_914 = function (item, index) {var _uniq_var_478 = (function () {var _uniq_var_907 = function (_uniq_var_905, _uniq_var_906) {
if (typeof _uniq_var_905.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_905.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_905.join.apply(_uniq_var_905, arguments);
} else if (_uniq_var_905.join !== undefined) {
if (_uniq_var_906 === undefined) {
return _uniq_var_905.join;
}
_uniq_var_905.join = _uniq_var_906;
}return _uniq_var_905;
};_uniq_var_907.__lix_func__ = true;return _uniq_var_907;})()([arrayName, "[", index, "]"], "");
_uniq_var_478;
var _uniq_var_479 = flattenCondition(item, _uniq_var_478);
_uniq_var_479;
var cond = _uniq_var_479;
cond;
cond;
var _uniq_var_480 = true;
_uniq_var_480;
var _uniq_var_481 = null;
_uniq_var_481;
if ((_uniq_var_480 && cond)) {
(_uniq_var_480 = false);
var _uniq_var_482 = (function () {var _uniq_var_910 = function (_uniq_var_908, _uniq_var_909) {
if (typeof _uniq_var_908.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_908.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_908.join.apply(_uniq_var_908, arguments);
} else if (_uniq_var_908.join !== undefined) {
if (_uniq_var_909 === undefined) {
return _uniq_var_908.join;
}
_uniq_var_908.join = _uniq_var_909;
}return _uniq_var_908;
};_uniq_var_910.__lix_func__ = true;return _uniq_var_910;})()(["(", cond, ")"], "");
_uniq_var_482;
var _uniq_var_483 = (function () {var _uniq_var_913 = function (_uniq_var_911, _uniq_var_912) {
if (typeof _uniq_var_911.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_911.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_911.push.apply(_uniq_var_911, arguments);
} else if (_uniq_var_911.push !== undefined) {
if (_uniq_var_912 === undefined) {
return _uniq_var_911.push;
}
_uniq_var_911.push = _uniq_var_912;
}return _uniq_var_911;
};_uniq_var_913.__lix_func__ = true;return _uniq_var_913;})()(ret, _uniq_var_482);
_uniq_var_483;
(_uniq_var_481 = _uniq_var_483);

};
return _uniq_var_481;
};_uniq_var_914.__lix_func__ = true;return _uniq_var_914;})());
_uniq_var_484;
_uniq_var_484;
var _uniq_var_492 = foreach(args[4], (function () {var _uniq_var_924 = function (item, index) {var _uniq_var_485 = __sub__(args[4].length, index);
_uniq_var_485;
var _uniq_var_486 = (function () {var _uniq_var_917 = function (_uniq_var_915, _uniq_var_916) {
if (typeof _uniq_var_915.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_915.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_915.join.apply(_uniq_var_915, arguments);
} else if (_uniq_var_915.join !== undefined) {
if (_uniq_var_916 === undefined) {
return _uniq_var_915.join;
}
_uniq_var_915.join = _uniq_var_916;
}return _uniq_var_915;
};_uniq_var_917.__lix_func__ = true;return _uniq_var_917;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_485, "]"], "");
_uniq_var_486;
var _uniq_var_487 = flattenCondition(item, _uniq_var_486);
_uniq_var_487;
var cond = _uniq_var_487;
cond;
cond;
var _uniq_var_488 = true;
_uniq_var_488;
var _uniq_var_489 = null;
_uniq_var_489;
if ((_uniq_var_488 && cond)) {
(_uniq_var_488 = false);
var _uniq_var_490 = (function () {var _uniq_var_920 = function (_uniq_var_918, _uniq_var_919) {
if (typeof _uniq_var_918.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_918.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_918.join.apply(_uniq_var_918, arguments);
} else if (_uniq_var_918.join !== undefined) {
if (_uniq_var_919 === undefined) {
return _uniq_var_918.join;
}
_uniq_var_918.join = _uniq_var_919;
}return _uniq_var_918;
};_uniq_var_920.__lix_func__ = true;return _uniq_var_920;})()(["(", cond, ")"], "");
_uniq_var_490;
var _uniq_var_491 = (function () {var _uniq_var_923 = function (_uniq_var_921, _uniq_var_922) {
if (typeof _uniq_var_921.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_921.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_921.push.apply(_uniq_var_921, arguments);
} else if (_uniq_var_921.push !== undefined) {
if (_uniq_var_922 === undefined) {
return _uniq_var_921.push;
}
_uniq_var_921.push = _uniq_var_922;
}return _uniq_var_921;
};_uniq_var_923.__lix_func__ = true;return _uniq_var_923;})()(ret, _uniq_var_490);
_uniq_var_491;
(_uniq_var_489 = _uniq_var_491);

};
return _uniq_var_489;
};_uniq_var_924.__lix_func__ = true;return _uniq_var_924;})());
_uniq_var_492;
_uniq_var_492;
var _uniq_var_493 = (function () {var _uniq_var_927 = function (_uniq_var_925, _uniq_var_926) {
if (typeof _uniq_var_925.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_925.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_925.join.apply(_uniq_var_925, arguments);
} else if (_uniq_var_925.join !== undefined) {
if (_uniq_var_926 === undefined) {
return _uniq_var_925.join;
}
_uniq_var_925.join = _uniq_var_926;
}return _uniq_var_925;
};_uniq_var_927.__lix_func__ = true;return _uniq_var_927;})()(ret, " && ");
_uniq_var_493;
return _uniq_var_493;
};_uniq_var_928.__lix_func__ = true;return _uniq_var_928;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_955 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_502 = foreach(args[2], (function () {var _uniq_var_938 = function (item, index) {var _uniq_var_494 = getAtomicExprVarName(item[0]);
_uniq_var_494;
var varName = _uniq_var_494;
varName;
varName;
var _uniq_var_495 = true;
_uniq_var_495;
var _uniq_var_496 = null;
_uniq_var_496;
var _uniq_var_499 = __ne__(arrayName, "arguments");
_uniq_var_499;
if ((_uniq_var_495 && _uniq_var_499)) {
(_uniq_var_495 = false);
var _uniq_var_497 = (function () {var _uniq_var_931 = function (_uniq_var_929, _uniq_var_930) {
if (typeof _uniq_var_929.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_929.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_929.join.apply(_uniq_var_929, arguments);
} else if (_uniq_var_929.join !== undefined) {
if (_uniq_var_930 === undefined) {
return _uniq_var_929.join;
}
_uniq_var_929.join = _uniq_var_930;
}return _uniq_var_929;
};_uniq_var_931.__lix_func__ = true;return _uniq_var_931;})()(["var ", varName, " = ", arrayName, "[", index, "]"], "");
_uniq_var_497;
var _uniq_var_498 = (function () {var _uniq_var_934 = function (_uniq_var_932, _uniq_var_933) {
if (typeof _uniq_var_932.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_932.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_932.push.apply(_uniq_var_932, arguments);
} else if (_uniq_var_932.push !== undefined) {
if (_uniq_var_933 === undefined) {
return _uniq_var_932.push;
}
_uniq_var_932.push = _uniq_var_933;
}return _uniq_var_932;
};_uniq_var_934.__lix_func__ = true;return _uniq_var_934;})()(ret, _uniq_var_497);
_uniq_var_498;
(_uniq_var_496 = _uniq_var_498);

};
_uniq_var_496;
var _uniq_var_500 = flattenDestructor(item, varName);
_uniq_var_500;
var _uniq_var_501 = (function () {var _uniq_var_937 = function (_uniq_var_935, _uniq_var_936) {
if (typeof _uniq_var_935.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_935.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_935.concat.apply(_uniq_var_935, arguments);
} else if (_uniq_var_935.concat !== undefined) {
if (_uniq_var_936 === undefined) {
return _uniq_var_935.concat;
}
_uniq_var_935.concat = _uniq_var_936;
}return _uniq_var_935;
};_uniq_var_937.__lix_func__ = true;return _uniq_var_937;})()(ret, _uniq_var_500);
_uniq_var_501;
return (ret = _uniq_var_501);
};_uniq_var_938.__lix_func__ = true;return _uniq_var_938;})());
_uniq_var_502;
_uniq_var_502;
var _uniq_var_503 = true;
_uniq_var_503;
var _uniq_var_504 = null;
_uniq_var_504;
var _uniq_var_508 = __eq__(args[3][1], "{va_arg}");
_uniq_var_508;
if ((_uniq_var_503 && _uniq_var_508)) {
(_uniq_var_503 = false);
var _uniq_var_505 = getAtomicExprVarName(args[3][0]);
_uniq_var_505;
var varName = _uniq_var_505;
varName;
varName;
var _uniq_var_506 = (function () {var _uniq_var_941 = function (_uniq_var_939, _uniq_var_940) {
if (typeof _uniq_var_939.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_939.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_939.join.apply(_uniq_var_939, arguments);
} else if (_uniq_var_939.join !== undefined) {
if (_uniq_var_940 === undefined) {
return _uniq_var_939.join;
}
_uniq_var_939.join = _uniq_var_940;
}return _uniq_var_939;
};_uniq_var_941.__lix_func__ = true;return _uniq_var_941;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_506;
var _uniq_var_507 = (function () {var _uniq_var_944 = function (_uniq_var_942, _uniq_var_943) {
if (typeof _uniq_var_942.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_942.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_942.push.apply(_uniq_var_942, arguments);
} else if (_uniq_var_942.push !== undefined) {
if (_uniq_var_943 === undefined) {
return _uniq_var_942.push;
}
_uniq_var_942.push = _uniq_var_943;
}return _uniq_var_942;
};_uniq_var_944.__lix_func__ = true;return _uniq_var_944;})()(ret, _uniq_var_506);
_uniq_var_507;
(_uniq_var_504 = _uniq_var_507);

};
_uniq_var_504;
var _uniq_var_515 = foreach(args[4], (function () {var _uniq_var_954 = function (item, index) {var _uniq_var_509 = getAtomicExprVarName(item[0]);
_uniq_var_509;
var varName = _uniq_var_509;
varName;
varName;
var _uniq_var_510 = __sub__(tail_lenth, index);
_uniq_var_510;
var _uniq_var_511 = (function () {var _uniq_var_947 = function (_uniq_var_945, _uniq_var_946) {
if (typeof _uniq_var_945.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_945.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_945.join.apply(_uniq_var_945, arguments);
} else if (_uniq_var_945.join !== undefined) {
if (_uniq_var_946 === undefined) {
return _uniq_var_945.join;
}
_uniq_var_945.join = _uniq_var_946;
}return _uniq_var_945;
};_uniq_var_947.__lix_func__ = true;return _uniq_var_947;})()(["var ", varName, " = ", arrayName, "[", arrayName, ".length - ", _uniq_var_510, "]"], "");
_uniq_var_511;
var _uniq_var_512 = (function () {var _uniq_var_950 = function (_uniq_var_948, _uniq_var_949) {
if (typeof _uniq_var_948.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_948.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_948.push.apply(_uniq_var_948, arguments);
} else if (_uniq_var_948.push !== undefined) {
if (_uniq_var_949 === undefined) {
return _uniq_var_948.push;
}
_uniq_var_948.push = _uniq_var_949;
}return _uniq_var_948;
};_uniq_var_950.__lix_func__ = true;return _uniq_var_950;})()(ret, _uniq_var_511);
_uniq_var_512;
_uniq_var_512;
var _uniq_var_513 = flattenDestructor(item, varName);
_uniq_var_513;
var _uniq_var_514 = (function () {var _uniq_var_953 = function (_uniq_var_951, _uniq_var_952) {
if (typeof _uniq_var_951.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_951.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_951.concat.apply(_uniq_var_951, arguments);
} else if (_uniq_var_951.concat !== undefined) {
if (_uniq_var_952 === undefined) {
return _uniq_var_951.concat;
}
_uniq_var_951.concat = _uniq_var_952;
}return _uniq_var_951;
};_uniq_var_953.__lix_func__ = true;return _uniq_var_953;})()(ret, _uniq_var_513);
_uniq_var_514;
return (ret = _uniq_var_514);
};_uniq_var_954.__lix_func__ = true;return _uniq_var_954;})());
_uniq_var_515;
_uniq_var_515;
return ret;
};_uniq_var_955.__lix_func__ = true;return _uniq_var_955;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_956 = function (args, varName) {return null;
};_uniq_var_956.__lix_func__ = true;return _uniq_var_956;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenLiteralArgCondition = (function () {var _uniq_var_960 = function (args, varName) {var _uniq_var_516 = (function () {var _uniq_var_959 = function (_uniq_var_957, _uniq_var_958) {
if (typeof _uniq_var_957.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_957.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_957.join.apply(_uniq_var_957, arguments);
} else if (_uniq_var_957.join !== undefined) {
if (_uniq_var_958 === undefined) {
return _uniq_var_957.join;
}
_uniq_var_957.join = _uniq_var_958;
}return _uniq_var_957;
};_uniq_var_959.__lix_func__ = true;return _uniq_var_959;})()([varName, " === ", args[2]], "");
_uniq_var_516;
return _uniq_var_516;
};_uniq_var_960.__lix_func__ = true;return _uniq_var_960;})();
flattenLiteralArgCondition;
flattenLiteralArgCondition;
var flattenLTArgCondition = (function () {var _uniq_var_964 = function (args, varName) {var _uniq_var_517 = (function () {var _uniq_var_963 = function (_uniq_var_961, _uniq_var_962) {
if (typeof _uniq_var_961.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_961.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_961.join.apply(_uniq_var_961, arguments);
} else if (_uniq_var_961.join !== undefined) {
if (_uniq_var_962 === undefined) {
return _uniq_var_961.join;
}
_uniq_var_961.join = _uniq_var_962;
}return _uniq_var_961;
};_uniq_var_963.__lix_func__ = true;return _uniq_var_963;})()([varName, " < ", args[2]], "");
_uniq_var_517;
return _uniq_var_517;
};_uniq_var_964.__lix_func__ = true;return _uniq_var_964;})();
flattenLTArgCondition;
flattenLTArgCondition;
var flattenBetweenArgCondition = (function () {var _uniq_var_968 = function (args, varName) {var _uniq_var_518 = (function () {var _uniq_var_967 = function (_uniq_var_965, _uniq_var_966) {
if (typeof _uniq_var_965.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_965.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_965.join.apply(_uniq_var_965, arguments);
} else if (_uniq_var_965.join !== undefined) {
if (_uniq_var_966 === undefined) {
return _uniq_var_965.join;
}
_uniq_var_965.join = _uniq_var_966;
}return _uniq_var_965;
};_uniq_var_967.__lix_func__ = true;return _uniq_var_967;})()([varName, " >= ", args[2], " && ", varName, " < ", args[3]], "");
_uniq_var_518;
return _uniq_var_518;
};_uniq_var_968.__lix_func__ = true;return _uniq_var_968;})();
flattenBetweenArgCondition;
flattenBetweenArgCondition;
var flattenGEArgCondition = (function () {var _uniq_var_972 = function (args, varName) {var _uniq_var_519 = (function () {var _uniq_var_971 = function (_uniq_var_969, _uniq_var_970) {
if (typeof _uniq_var_969.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_969.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_969.join.apply(_uniq_var_969, arguments);
} else if (_uniq_var_969.join !== undefined) {
if (_uniq_var_970 === undefined) {
return _uniq_var_969.join;
}
_uniq_var_969.join = _uniq_var_970;
}return _uniq_var_969;
};_uniq_var_971.__lix_func__ = true;return _uniq_var_971;})()([varName, " >= ", args[2]], "");
_uniq_var_519;
return _uniq_var_519;
};_uniq_var_972.__lix_func__ = true;return _uniq_var_972;})();
flattenGEArgCondition;
flattenGEArgCondition;
var flattenNamedArgCondition = (function () {var _uniq_var_973 = function (args, varName) {var _uniq_var_520 = flattenCondition(args[2], varName);
_uniq_var_520;
return _uniq_var_520;
};_uniq_var_973.__lix_func__ = true;return _uniq_var_973;})();
flattenNamedArgCondition;
flattenNamedArgCondition;
var flattenNotArgCondition = (function () {var _uniq_var_977 = function (args, varName) {var _uniq_var_521 = flattenCondition(args[2], varName);
_uniq_var_521;
var cond0 = _uniq_var_521;
cond0;
cond0;
var _uniq_var_522 = (function () {var _uniq_var_976 = function (_uniq_var_974, _uniq_var_975) {
if (typeof _uniq_var_974.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_974.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_974.join.apply(_uniq_var_974, arguments);
} else if (_uniq_var_974.join !== undefined) {
if (_uniq_var_975 === undefined) {
return _uniq_var_974.join;
}
_uniq_var_974.join = _uniq_var_975;
}return _uniq_var_974;
};_uniq_var_976.__lix_func__ = true;return _uniq_var_976;})()(["!(", cond0, ")"], "");
_uniq_var_522;
return _uniq_var_522;
};_uniq_var_977.__lix_func__ = true;return _uniq_var_977;})();
flattenNotArgCondition;
flattenNotArgCondition;
var flattenAndArgCondition = (function () {var _uniq_var_981 = function (args, varName) {var _uniq_var_523 = flattenCondition(args[2], varName);
_uniq_var_523;
var cond0 = _uniq_var_523;
cond0;
cond0;
var _uniq_var_524 = flattenCondition(args[3], varName);
_uniq_var_524;
var cond1 = _uniq_var_524;
cond1;
cond1;
var _uniq_var_525 = (function () {var _uniq_var_980 = function (_uniq_var_978, _uniq_var_979) {
if (typeof _uniq_var_978.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_978.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_978.join.apply(_uniq_var_978, arguments);
} else if (_uniq_var_978.join !== undefined) {
if (_uniq_var_979 === undefined) {
return _uniq_var_978.join;
}
_uniq_var_978.join = _uniq_var_979;
}return _uniq_var_978;
};_uniq_var_980.__lix_func__ = true;return _uniq_var_980;})()(["(", cond0, ") && (", cond1, ")"], "");
_uniq_var_525;
return _uniq_var_525;
};_uniq_var_981.__lix_func__ = true;return _uniq_var_981;})();
flattenAndArgCondition;
flattenAndArgCondition;
var flattenOrArgCondition = (function () {var _uniq_var_985 = function (args, varName) {var _uniq_var_526 = flattenCondition(args[2], varName);
_uniq_var_526;
var cond0 = _uniq_var_526;
cond0;
cond0;
var _uniq_var_527 = flattenCondition(args[3], varName);
_uniq_var_527;
var cond1 = _uniq_var_527;
cond1;
cond1;
var _uniq_var_528 = (function () {var _uniq_var_984 = function (_uniq_var_982, _uniq_var_983) {
if (typeof _uniq_var_982.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_982.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_982.join.apply(_uniq_var_982, arguments);
} else if (_uniq_var_982.join !== undefined) {
if (_uniq_var_983 === undefined) {
return _uniq_var_982.join;
}
_uniq_var_982.join = _uniq_var_983;
}return _uniq_var_982;
};_uniq_var_984.__lix_func__ = true;return _uniq_var_984;})()(["(", cond0, ") || (", cond1, ")"], "");
_uniq_var_528;
return _uniq_var_528;
};_uniq_var_985.__lix_func__ = true;return _uniq_var_985;})();
flattenOrArgCondition;
flattenOrArgCondition;
var flattenConditionOp = {
"{any_type_arg}": flattenAnyTypeCondition,
"{anonymous_va_arg}": flattenAnyTypeCondition,
"{array_arg}": flattenArrayCondition,
"{va_args}": flattenVAArgsCondition,
"{literal_arg}": flattenLiteralArgCondition,
"{lt_arg}": flattenLTArgCondition,
"{between_arg}": flattenBetweenArgCondition,
"{ge_arg}": flattenGEArgCondition,
"{named_arg}": flattenNamedArgCondition,
"{or_arg}": flattenOrArgCondition,
"{and_arg}": flattenAndArgCondition,
"{not_arg}": flattenNotArgCondition
};
flattenConditionOp;
flattenConditionOp;
var flattenDestructorOp = {
"{any_type_arg}": flattenAnyTypeDestructor,
"{anonymous_va_arg}": flattenAnyTypeDestructor,
"{array_arg}": flattenArrayDestructor,
"{va_args}": flattenVAArgsDestructor,
"{literal_arg}": flattenAnyTypeDestructor,
"{lt_arg}": flattenAnyTypeDestructor,
"{between_arg}": flattenAnyTypeDestructor,
"{ge_arg}": flattenAnyTypeDestructor,
"{named_arg}": flattenNamedDestructor,
"{not_arg}": flattenNotDestructor,
"{and_arg}": flattenAndDestructor,
"{or_arg}": flattenOrDestructor,
"{object_arg}": flattenObjectDestructor,
"{index_arg}": flattenIndexDestructor,
"{field_arg}": flattenFieldDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_986 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_529 = true;
_uniq_var_529;
var _uniq_var_530 = null;
_uniq_var_530;
if ((_uniq_var_529 && flattenDestructorOp[hint])) {
(_uniq_var_529 = false);
(_uniq_var_530 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_530;
return ret;
};_uniq_var_986.__lix_func__ = true;return _uniq_var_986;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_987 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_531 = true;
_uniq_var_531;
var _uniq_var_532 = null;
_uniq_var_532;
if ((_uniq_var_531 && flattenConditionOp[hint])) {
(_uniq_var_531 = false);
(_uniq_var_532 = (ret = flattenConditionOp[hint]));

};
_uniq_var_532;
return ret;
};_uniq_var_987.__lix_func__ = true;return _uniq_var_987;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_988 = function (args, varName) {var _uniq_var_533 = getFlattenDestructorOp(args[1]);
_uniq_var_533;
var _uniq_var_534 = call(_uniq_var_533, args, varName);
_uniq_var_534;
return _uniq_var_534;
};_uniq_var_988.__lix_func__ = true;return _uniq_var_988;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_989 = function (args, varName) {var _uniq_var_535 = getFlattenConditionOp(args[1]);
_uniq_var_535;
var _uniq_var_536 = call(_uniq_var_535, args, varName);
_uniq_var_536;
return _uniq_var_536;
};_uniq_var_989.__lix_func__ = true;return _uniq_var_989;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_990 = function (args) {var _uniq_var_537 = flattenCondition(args, "arguments");
_uniq_var_537;
return _uniq_var_537;
};_uniq_var_990.__lix_func__ = true;return _uniq_var_990;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_991 = function (args) {var _uniq_var_538 = flattenDestructor(args, "arguments");
_uniq_var_538;
return _uniq_var_538;
};_uniq_var_991.__lix_func__ = true;return _uniq_var_991;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_996 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_540 = foreach(args[2], (function () {var _uniq_var_995 = function (item) {var _uniq_var_539 = (function () {var _uniq_var_994 = function (_uniq_var_992, _uniq_var_993) {
if (typeof _uniq_var_992.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_992.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_992.push.apply(_uniq_var_992, arguments);
} else if (_uniq_var_992.push !== undefined) {
if (_uniq_var_993 === undefined) {
return _uniq_var_992.push;
}
_uniq_var_992.push = _uniq_var_993;
}return _uniq_var_992;
};_uniq_var_994.__lix_func__ = true;return _uniq_var_994;})()(ret, item[0]);
_uniq_var_539;
return _uniq_var_539;
};_uniq_var_995.__lix_func__ = true;return _uniq_var_995;})());
_uniq_var_540;
_uniq_var_540;
return ret;
};_uniq_var_996.__lix_func__ = true;return _uniq_var_996;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_997 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_541 = flattenArgumentsDestructor(expr[2]);
_uniq_var_541;
var destructor = _uniq_var_541;
destructor;
destructor;
var _uniq_var_542 = getFuncArgsNameList(expr[2]);
_uniq_var_542;
var funcArgsNameList = _uniq_var_542;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_543 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_543;
var func = _uniq_var_543;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_997.__lix_func__ = true;return _uniq_var_997;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_998 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_544 = flatten(expr, define);
_uniq_var_544;
return _uniq_var_544;
};_uniq_var_998.__lix_func__ = true;return _uniq_var_998;})();
flattenAsterisk;
flattenAsterisk;
var identity = (function () {var _uniq_var_999 = function (x) {return x;
};_uniq_var_999.__lix_func__ = true;return _uniq_var_999;})();
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
var flattenOp = (function () {var _uniq_var_1000 = function (hint) {var _uniq_var_545 = true;
_uniq_var_545;
var _uniq_var_546 = null;
_uniq_var_546;
if ((_uniq_var_545 && flattenOpTable[hint])) {
(_uniq_var_545 = false);
(_uniq_var_546 = flattenOpTable[hint]);

};
if (_uniq_var_545) {
(_uniq_var_546 = flattenExpr);

};
return _uniq_var_546;
};_uniq_var_1000.__lix_func__ = true;return _uniq_var_1000;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_1001 = function (expr, define, ctx) {var _uniq_var_547 = flattenOp(expr[1]);
_uniq_var_547;
var _uniq_var_548 = _uniq_var_547(expr, define, ctx);
_uniq_var_548;
return _uniq_var_548;
};_uniq_var_1001.__lix_func__ = true;return _uniq_var_1001;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_1002 = function (i) {return i;
};_uniq_var_1002.__lix_func__ = true;return _uniq_var_1002;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_1003 = function (i) {;
};_uniq_var_1003.__lix_func__ = true;return _uniq_var_1003;})(),
appendExpr: (function () {var _uniq_var_1004 = function (i) {;
};_uniq_var_1004.__lix_func__ = true;return _uniq_var_1004;})()
};
def0;
def0;
var _uniq_var_549 = join(['s[', STEP, ']']);
_uniq_var_549;
var _uniq_var_550 = join(['s[', RET, ']']);
_uniq_var_550;
var seqFuncParamsName = {
step: _uniq_var_549,
ret: _uniq_var_550
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_1011 = function (expr) {var _uniq_var_551 = map(env0, (function () {var _uniq_var_1005 = function (i) {return i;
};_uniq_var_1005.__lix_func__ = true;return _uniq_var_1005;})());
_uniq_var_551;
var _uniq_var_552 = (function () {var _uniq_var_1008 = function (_uniq_var_1006, _uniq_var_1007) {
if (typeof _uniq_var_1006.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1006.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1006.join.apply(_uniq_var_1006, arguments);
} else if (_uniq_var_1006.join !== undefined) {
if (_uniq_var_1007 === undefined) {
return _uniq_var_1006.join;
}
_uniq_var_1006.join = _uniq_var_1007;
}return _uniq_var_1006;
};_uniq_var_1008.__lix_func__ = true;return _uniq_var_1008;})()(_uniq_var_551, "\n");
_uniq_var_552;
var libs = _uniq_var_552;
libs;
libs;
var _uniq_var_553 = flatten(expr, (function () {var _uniq_var_1009 = function (i) {;
};_uniq_var_1009.__lix_func__ = true;return _uniq_var_1009;})(), (function () {var _uniq_var_1010 = function (i) {return i;
};_uniq_var_1010.__lix_func__ = true;return _uniq_var_1010;})());
_uniq_var_553;
var flattenedExpr = _uniq_var_553;
flattenedExpr;
flattenedExpr;
var _uniq_var_554 = call(env_new);
_uniq_var_554;
var _uniq_var_555 = generateStart(flattenedExpr, _uniq_var_554, ctx0, def0);
_uniq_var_555;
var code = _uniq_var_555;
code;
code;
var _uniq_var_556 = join([libs, "\n", code]);
_uniq_var_556;
return _uniq_var_556;
};_uniq_var_1011.__lix_func__ = true;return _uniq_var_1011;})();
compile;
compile;
(exports.compile = compile);
compile;

