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
var join = (function () {var _uniq_var_587 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_586 = function (_uniq_var_584, _uniq_var_585) {
if (typeof _uniq_var_584.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_584.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_584.join.apply(_uniq_var_584, arguments);
} else if (_uniq_var_584.join !== undefined) {
if (_uniq_var_585 === undefined) {
return _uniq_var_584.join;
}
_uniq_var_584.join = _uniq_var_585;
}return _uniq_var_584;
};_uniq_var_586.__lix_func__ = true;return _uniq_var_586;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_587.__lix_func__ = true;return _uniq_var_587;})();
join;
join;
var map = (function () {var _uniq_var_592 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_591 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_590 = function (_uniq_var_588, _uniq_var_589) {
if (typeof _uniq_var_588.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_588.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_588.push.apply(_uniq_var_588, arguments);
} else if (_uniq_var_588.push !== undefined) {
if (_uniq_var_589 === undefined) {
return _uniq_var_588.push;
}
_uniq_var_588.push = _uniq_var_589;
}return _uniq_var_588;
};_uniq_var_590.__lix_func__ = true;return _uniq_var_590;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_591.__lix_func__ = true;return _uniq_var_591;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_592.__lix_func__ = true;return _uniq_var_592;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_594 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_593 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_593.__lix_func__ = true;return _uniq_var_593;})();
};_uniq_var_594.__lix_func__ = true;return _uniq_var_594;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_595 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_595.__lix_func__ = true;return _uniq_var_595;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_600 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_596 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_596.__lix_func__ = true;return _uniq_var_596;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_599 = function (_uniq_var_597, _uniq_var_598) {
if (typeof _uniq_var_597.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_597.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_597.join.apply(_uniq_var_597, arguments);
} else if (_uniq_var_597.join !== undefined) {
if (_uniq_var_598 === undefined) {
return _uniq_var_597.join;
}
_uniq_var_597.join = _uniq_var_598;
}return _uniq_var_597;
};_uniq_var_599.__lix_func__ = true;return _uniq_var_599;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_600.__lix_func__ = true;return _uniq_var_600;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_601 = function (x) {return x;
};_uniq_var_601.__lix_func__ = true;return _uniq_var_601;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_611 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_603 = function (current) {return (function () {var _uniq_var_602 = function (v, loop) {var next = current;
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
};_uniq_var_602.__lix_func__ = true;return _uniq_var_602;})();
};_uniq_var_603.__lix_func__ = true;return _uniq_var_603;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_607 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_27 = (function () {var _uniq_var_606 = function (_uniq_var_604, _uniq_var_605) {
if (typeof _uniq_var_604.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_604.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_604.push.apply(_uniq_var_604, arguments);
} else if (_uniq_var_604.push !== undefined) {
if (_uniq_var_605 === undefined) {
return _uniq_var_604.push;
}
_uniq_var_604.push = _uniq_var_605;
}return _uniq_var_604;
};_uniq_var_606.__lix_func__ = true;return _uniq_var_606;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_607.__lix_func__ = true;return _uniq_var_607;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_610 = function (_uniq_var_608, _uniq_var_609) {
if (typeof _uniq_var_608.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_608.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_608.join.apply(_uniq_var_608, arguments);
} else if (_uniq_var_608.join !== undefined) {
if (_uniq_var_609 === undefined) {
return _uniq_var_608.join;
}
_uniq_var_608.join = _uniq_var_609;
}return _uniq_var_608;
};_uniq_var_610.__lix_func__ = true;return _uniq_var_610;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_612 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_612.__lix_func__ = true;return _uniq_var_612;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_613 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_613.__lix_func__ = true;return _uniq_var_613;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_618 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_614 = function (i) {var _uniq_var_38 = true;
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
};_uniq_var_614.__lix_func__ = true;return _uniq_var_614;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_617 = function (_uniq_var_615, _uniq_var_616) {
if (typeof _uniq_var_615.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_615.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_615.join.apply(_uniq_var_615, arguments);
} else if (_uniq_var_615.join !== undefined) {
if (_uniq_var_616 === undefined) {
return _uniq_var_615.join;
}
_uniq_var_615.join = _uniq_var_616;
}return _uniq_var_615;
};_uniq_var_617.__lix_func__ = true;return _uniq_var_617;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_618.__lix_func__ = true;return _uniq_var_618;})();
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
var generateAtomic = (function () {var _uniq_var_619 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_619.__lix_func__ = true;return _uniq_var_619;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_620 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
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
};_uniq_var_620.__lix_func__ = true;return _uniq_var_620;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_621 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_621.__lix_func__ = true;return _uniq_var_621;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_626 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_622 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_622.__lix_func__ = true;return _uniq_var_622;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_625 = function (_uniq_var_623, _uniq_var_624) {
if (typeof _uniq_var_623.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_623.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_623.join.apply(_uniq_var_623, arguments);
} else if (_uniq_var_623.join !== undefined) {
if (_uniq_var_624 === undefined) {
return _uniq_var_623.join;
}
_uniq_var_623.join = _uniq_var_624;
}return _uniq_var_623;
};_uniq_var_625.__lix_func__ = true;return _uniq_var_625;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_626.__lix_func__ = true;return _uniq_var_626;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_627 = function (name) {var _uniq_var_73 = true;
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
};_uniq_var_627.__lix_func__ = true;return _uniq_var_627;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_628 = function (expr) {var _uniq_var_85 = true;
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
};_uniq_var_628.__lix_func__ = true;return _uniq_var_628;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_629 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
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
};_uniq_var_629.__lix_func__ = true;return _uniq_var_629;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_630 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
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
};_uniq_var_630.__lix_func__ = true;return _uniq_var_630;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_635 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_631 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_631.__lix_func__ = true;return _uniq_var_631;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_634 = function (_uniq_var_632, _uniq_var_633) {
if (typeof _uniq_var_632.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_632.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_632.join.apply(_uniq_var_632, arguments);
} else if (_uniq_var_632.join !== undefined) {
if (_uniq_var_633 === undefined) {
return _uniq_var_632.join;
}
_uniq_var_632.join = _uniq_var_633;
}return _uniq_var_632;
};_uniq_var_634.__lix_func__ = true;return _uniq_var_634;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_635.__lix_func__ = true;return _uniq_var_635;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_636 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
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
};_uniq_var_636.__lix_func__ = true;return _uniq_var_636;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_637 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_637.__lix_func__ = true;return _uniq_var_637;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_638 = function (expr, env, ctx) {return 'break';
};_uniq_var_638.__lix_func__ = true;return _uniq_var_638;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_639 = function (expr, env, ctx, def) {return "";
};_uniq_var_639.__lix_func__ = true;return _uniq_var_639;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_640 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
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
};_uniq_var_640.__lix_func__ = true;return _uniq_var_640;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_641 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_641.__lix_func__ = true;return _uniq_var_641;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_645 = function (expr, env, ctx, def) {var _uniq_var_126 = true;
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
var _uniq_var_137 = (function () {var _uniq_var_644 = function (_uniq_var_642, _uniq_var_643) {
if (typeof _uniq_var_642.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_642.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_642.join.apply(_uniq_var_642, arguments);
} else if (_uniq_var_642.join !== undefined) {
if (_uniq_var_643 === undefined) {
return _uniq_var_642.join;
}
_uniq_var_642.join = _uniq_var_643;
}return _uniq_var_642;
};_uniq_var_644.__lix_func__ = true;return _uniq_var_644;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_646 = function (expr, env, ctx, def) {var _uniq_var_138 = getVarName(expr[0]);
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
};_uniq_var_646.__lix_func__ = true;return _uniq_var_646;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_653 = function (expr, env, ctx, def) {var _uniq_var_151 = true;
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
var _uniq_var_160 = (function () {var _uniq_var_649 = function (_uniq_var_647, _uniq_var_648) {
if (typeof _uniq_var_647.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_647.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_647.join.apply(_uniq_var_647, arguments);
} else if (_uniq_var_647.join !== undefined) {
if (_uniq_var_648 === undefined) {
return _uniq_var_647.join;
}
_uniq_var_647.join = _uniq_var_648;
}return _uniq_var_647;
};_uniq_var_649.__lix_func__ = true;return _uniq_var_649;})()(expr[3], ";\n");
_uniq_var_160;
var _uniq_var_161 = call(def.defineVar);
_uniq_var_161;
var _uniq_var_162 = call(def.appendExpr);
_uniq_var_162;
var _uniq_var_163 = call(def.definedFns);
_uniq_var_163;
var _uniq_var_164 = (function () {var _uniq_var_652 = function (_uniq_var_650, _uniq_var_651) {
if (typeof _uniq_var_650.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_650.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_650.join.apply(_uniq_var_650, arguments);
} else if (_uniq_var_650.join !== undefined) {
if (_uniq_var_651 === undefined) {
return _uniq_var_650.join;
}
_uniq_var_650.join = _uniq_var_651;
}return _uniq_var_650;
};_uniq_var_652.__lix_func__ = true;return _uniq_var_652;})()(['(function (', args, ') {\n', 'var ', _uniq_var_159, ' = arguments;\n', _uniq_var_160, ";\n", _uniq_var_161, ";\n", _uniq_var_162, _uniq_var_163, 'return ', body, ";\n", '})'], '');
_uniq_var_164;
return _uniq_var_164;
};_uniq_var_653.__lix_func__ = true;return _uniq_var_653;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_660 = function (expr0, env, ctx, prevDef) {var _uniq_var_165 = call(getUniqVarName);
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
var _uniq_var_175 = (function () {var _uniq_var_656 = function (_uniq_var_654, _uniq_var_655) {
if (typeof _uniq_var_654.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_654.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_654.join.apply(_uniq_var_654, arguments);
} else if (_uniq_var_654.join !== undefined) {
if (_uniq_var_655 === undefined) {
return _uniq_var_654.join;
}
_uniq_var_654.join = _uniq_var_655;
}return _uniq_var_654;
};_uniq_var_656.__lix_func__ = true;return _uniq_var_656;})()(expr[3], ";\n");
_uniq_var_175;
var _uniq_var_176 = call(def.defineVar);
_uniq_var_176;
var _uniq_var_177 = call(def.appendExpr);
_uniq_var_177;
var _uniq_var_178 = call(def.definedFns);
_uniq_var_178;
var _uniq_var_179 = (function () {var _uniq_var_659 = function (_uniq_var_657, _uniq_var_658) {
if (typeof _uniq_var_657.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_657.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_657.join.apply(_uniq_var_657, arguments);
} else if (_uniq_var_657.join !== undefined) {
if (_uniq_var_658 === undefined) {
return _uniq_var_657.join;
}
_uniq_var_657.join = _uniq_var_658;
}return _uniq_var_657;
};_uniq_var_659.__lix_func__ = true;return _uniq_var_659;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_174, ' = arguments;\n', _uniq_var_175, ";\n", _uniq_var_176, ";\n", _uniq_var_177, ";\n", _uniq_var_178, ";\n", 'return ', body, ";\n", '}'], '');
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
};_uniq_var_660.__lix_func__ = true;return _uniq_var_660;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_662 = function (expr, env, ctx, def) {var _uniq_var_183 = generate(expr[1], env, ctx0, def);
_uniq_var_183;
var func = _uniq_var_183;
func;
func;
var _uniq_var_184 = generate(expr[0], env, ctx0, def);
_uniq_var_184;
var args = _uniq_var_184;
args;
args;
var _uniq_var_190 = foreach(expr, (function () {var _uniq_var_661 = function (item, index) {var _uniq_var_185 = true;
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
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})());
_uniq_var_190;
_uniq_var_190;
var _uniq_var_191 = join([func, '(', args, ')']);
_uniq_var_191;
var _uniq_var_192 = ctx(_uniq_var_191);
_uniq_var_192;
return _uniq_var_192;
};_uniq_var_662.__lix_func__ = true;return _uniq_var_662;})();
generateExpr;
generateExpr;
var predefineFn = (function () {var _uniq_var_689 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_669 = function (n) {var ret = [];
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
var _uniq_var_195 = (function () {var _uniq_var_665 = function (_uniq_var_663, _uniq_var_664) {
if (typeof _uniq_var_663.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_663.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_663.push.apply(_uniq_var_663, arguments);
} else if (_uniq_var_663.push !== undefined) {
if (_uniq_var_664 === undefined) {
return _uniq_var_663.push;
}
_uniq_var_663.push = _uniq_var_664;
}return _uniq_var_663;
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})()(ret, _uniq_var_194);
_uniq_var_195;
_uniq_var_195;
var _uniq_var_196 = __add__(i, 1);
_uniq_var_196;
(i = _uniq_var_196);
var _uniq_var_193 = __lt__(i, n);
_uniq_var_193;
}
null;
var _uniq_var_197 = (function () {var _uniq_var_668 = function (_uniq_var_666, _uniq_var_667) {
if (typeof _uniq_var_666.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_666.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_666.join.apply(_uniq_var_666, arguments);
} else if (_uniq_var_666.join !== undefined) {
if (_uniq_var_667 === undefined) {
return _uniq_var_666.join;
}
_uniq_var_666.join = _uniq_var_667;
}return _uniq_var_666;
};_uniq_var_668.__lix_func__ = true;return _uniq_var_668;})()(ret, ", ");
_uniq_var_197;
return _uniq_var_197;
};_uniq_var_669.__lix_func__ = true;return _uniq_var_669;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_212 = foreach(candidates, (function () {var _uniq_var_682 = function (item) {var _uniq_var_198 = true;
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
var _uniq_var_203 = (function () {var _uniq_var_672 = function (_uniq_var_670, _uniq_var_671) {
if (typeof _uniq_var_670.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_670.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_670.join.apply(_uniq_var_670, arguments);
} else if (_uniq_var_670.join !== undefined) {
if (_uniq_var_671 === undefined) {
return _uniq_var_670.join;
}
_uniq_var_670.join = _uniq_var_671;
}return _uniq_var_670;
};_uniq_var_672.__lix_func__ = true;return _uniq_var_672;})()(["return ", item.func, "(", _uniq_var_202, ");\n"], "");
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
var _uniq_var_206 = (function () {var _uniq_var_675 = function (_uniq_var_673, _uniq_var_674) {
if (typeof _uniq_var_673.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_673.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_673.join.apply(_uniq_var_673, arguments);
} else if (_uniq_var_673.join !== undefined) {
if (_uniq_var_674 === undefined) {
return _uniq_var_673.join;
}
_uniq_var_673.join = _uniq_var_674;
}return _uniq_var_673;
};_uniq_var_675.__lix_func__ = true;return _uniq_var_675;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
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
var _uniq_var_210 = (function () {var _uniq_var_678 = function (_uniq_var_676, _uniq_var_677) {
if (typeof _uniq_var_676.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_676.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_676.join.apply(_uniq_var_676, arguments);
} else if (_uniq_var_676.join !== undefined) {
if (_uniq_var_677 === undefined) {
return _uniq_var_676.join;
}
_uniq_var_676.join = _uniq_var_677;
}return _uniq_var_676;
};_uniq_var_678.__lix_func__ = true;return _uniq_var_678;})()(["if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_210;
(_uniq_var_209 = (stmt = _uniq_var_210));

};
_uniq_var_209;
var _uniq_var_211 = (function () {var _uniq_var_681 = function (_uniq_var_679, _uniq_var_680) {
if (typeof _uniq_var_679.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_679.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_679.push.apply(_uniq_var_679, arguments);
} else if (_uniq_var_679.push !== undefined) {
if (_uniq_var_680 === undefined) {
return _uniq_var_679.push;
}
_uniq_var_679.push = _uniq_var_680;
}return _uniq_var_679;
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})()(body, stmt);
_uniq_var_211;
return _uniq_var_211;
};_uniq_var_682.__lix_func__ = true;return _uniq_var_682;})());
_uniq_var_212;
_uniq_var_212;
var _uniq_var_213 = (function () {var _uniq_var_685 = function (_uniq_var_683, _uniq_var_684) {
if (typeof _uniq_var_683.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_683.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_683.join.apply(_uniq_var_683, arguments);
} else if (_uniq_var_683.join !== undefined) {
if (_uniq_var_684 === undefined) {
return _uniq_var_683.join;
}
_uniq_var_683.join = _uniq_var_684;
}return _uniq_var_683;
};_uniq_var_685.__lix_func__ = true;return _uniq_var_685;})()(body, "");
_uniq_var_213;
(body = _uniq_var_213);
var _uniq_var_214 = call(getArgListString, max_narg);
_uniq_var_214;
var _uniq_var_215 = (function () {var _uniq_var_688 = function (_uniq_var_686, _uniq_var_687) {
if (typeof _uniq_var_686.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_686.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_686.join.apply(_uniq_var_686, arguments);
} else if (_uniq_var_686.join !== undefined) {
if (_uniq_var_687 === undefined) {
return _uniq_var_686.join;
}
_uniq_var_686.join = _uniq_var_687;
}return _uniq_var_686;
};_uniq_var_688.__lix_func__ = true;return _uniq_var_688;})()(["function ", name, "(", _uniq_var_214, ") {\n", body, "}\n"], "");
_uniq_var_215;
return _uniq_var_215;
};_uniq_var_689.__lix_func__ = true;return _uniq_var_689;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_719 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_690 = function (d) {return (destructed = d);
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})(),
desctructedVars: (function () {var _uniq_var_694 = function () {var _uniq_var_216 = (function () {var _uniq_var_693 = function (_uniq_var_691, _uniq_var_692) {
if (typeof _uniq_var_691.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_691.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_691.join.apply(_uniq_var_691, arguments);
} else if (_uniq_var_691.join !== undefined) {
if (_uniq_var_692 === undefined) {
return _uniq_var_691.join;
}
_uniq_var_691.join = _uniq_var_692;
}return _uniq_var_691;
};_uniq_var_693.__lix_func__ = true;return _uniq_var_693;})()(destructed, ";\n");
_uniq_var_216;
return _uniq_var_216;
};_uniq_var_694.__lix_func__ = true;return _uniq_var_694;})(),
defineFn: (function () {var _uniq_var_698 = function (name, func, condition, narg) {var _uniq_var_217 = true;
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
var _uniq_var_220 = (function () {var _uniq_var_697 = function (_uniq_var_695, _uniq_var_696) {
if (typeof _uniq_var_695.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_695.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_695.push.apply(_uniq_var_695, arguments);
} else if (_uniq_var_695.push !== undefined) {
if (_uniq_var_696 === undefined) {
return _uniq_var_695.push;
}
_uniq_var_695.push = _uniq_var_696;
}return _uniq_var_695;
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_220;
return _uniq_var_220;
};_uniq_var_698.__lix_func__ = true;return _uniq_var_698;})(),
definedFns: (function () {var _uniq_var_706 = function () {var ret = [];
ret;
ret;
var _uniq_var_223 = foreach(fns, (function () {var _uniq_var_702 = function (item, name) {var _uniq_var_221 = predefineFn(name, item);
_uniq_var_221;
var _uniq_var_222 = (function () {var _uniq_var_701 = function (_uniq_var_699, _uniq_var_700) {
if (typeof _uniq_var_699.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_699.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_699.push.apply(_uniq_var_699, arguments);
} else if (_uniq_var_699.push !== undefined) {
if (_uniq_var_700 === undefined) {
return _uniq_var_699.push;
}
_uniq_var_699.push = _uniq_var_700;
}return _uniq_var_699;
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})()(ret, _uniq_var_221);
_uniq_var_222;
return _uniq_var_222;
};_uniq_var_702.__lix_func__ = true;return _uniq_var_702;})());
_uniq_var_223;
_uniq_var_223;
var _uniq_var_224 = (function () {var _uniq_var_705 = function (_uniq_var_703, _uniq_var_704) {
if (typeof _uniq_var_703.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_703.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_703.join.apply(_uniq_var_703, arguments);
} else if (_uniq_var_703.join !== undefined) {
if (_uniq_var_704 === undefined) {
return _uniq_var_703.join;
}
_uniq_var_703.join = _uniq_var_704;
}return _uniq_var_703;
};_uniq_var_705.__lix_func__ = true;return _uniq_var_705;})()(ret, "\n");
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_706.__lix_func__ = true;return _uniq_var_706;})(),
defineVar: (function () {var _uniq_var_711 = function (v) {var _uniq_var_225 = true;
_uniq_var_225;
var _uniq_var_226 = null;
_uniq_var_226;
if ((_uniq_var_225 && v)) {
(_uniq_var_225 = false);
(_uniq_var_226 = (vars[v] = v));

};
if (_uniq_var_225) {
var _uniq_var_227 = map(vars, (function () {var _uniq_var_707 = function (i) {return i;
};_uniq_var_707.__lix_func__ = true;return _uniq_var_707;})());
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
var _uniq_var_230 = (function () {var _uniq_var_710 = function (_uniq_var_708, _uniq_var_709) {
if (typeof _uniq_var_708.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_708.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_708.join.apply(_uniq_var_708, arguments);
} else if (_uniq_var_708.join !== undefined) {
if (_uniq_var_709 === undefined) {
return _uniq_var_708.join;
}
_uniq_var_708.join = _uniq_var_709;
}return _uniq_var_708;
};_uniq_var_710.__lix_func__ = true;return _uniq_var_710;})()(vecs, ', ');
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
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})(),
appendExpr: (function () {var _uniq_var_718 = function (v) {var _uniq_var_233 = true;
_uniq_var_233;
var _uniq_var_234 = null;
_uniq_var_234;
if ((_uniq_var_233 && v)) {
(_uniq_var_233 = false);
var _uniq_var_235 = (function () {var _uniq_var_714 = function (_uniq_var_712, _uniq_var_713) {
if (typeof _uniq_var_712.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_712.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_712.push.apply(_uniq_var_712, arguments);
} else if (_uniq_var_712.push !== undefined) {
if (_uniq_var_713 === undefined) {
return _uniq_var_712.push;
}
_uniq_var_712.push = _uniq_var_713;
}return _uniq_var_712;
};_uniq_var_714.__lix_func__ = true;return _uniq_var_714;})()(funcs, v);
_uniq_var_235;
(_uniq_var_234 = _uniq_var_235);

};
if (_uniq_var_233) {
var _uniq_var_236 = (function () {var _uniq_var_717 = function (_uniq_var_715, _uniq_var_716) {
if (typeof _uniq_var_715.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_715.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_715.join.apply(_uniq_var_715, arguments);
} else if (_uniq_var_715.join !== undefined) {
if (_uniq_var_716 === undefined) {
return _uniq_var_715.join;
}
_uniq_var_715.join = _uniq_var_716;
}return _uniq_var_715;
};_uniq_var_717.__lix_func__ = true;return _uniq_var_717;})()(funcs, ';\n');
_uniq_var_236;
(_uniq_var_234 = _uniq_var_236);

};
return _uniq_var_234;
};_uniq_var_718.__lix_func__ = true;return _uniq_var_718;})()
};
};_uniq_var_719.__lix_func__ = true;return _uniq_var_719;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_720 = function (expr, env, ctx, def) {var _uniq_var_237 = call(GenerateDefNew);
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
};_uniq_var_720.__lix_func__ = true;return _uniq_var_720;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_721 = function (expr, env, ctx, def) {var _uniq_var_244 = generate(expr[0], env, ctx, def);
_uniq_var_244;
return _uniq_var_244;
};_uniq_var_721.__lix_func__ = true;return _uniq_var_721;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_722 = function (expr, env, ctx, def) {var _uniq_var_245 = join(['"', expr[0], '"']);
_uniq_var_245;
return _uniq_var_245;
};_uniq_var_722.__lix_func__ = true;return _uniq_var_722;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_723 = function (expr, env, ctx, def) {var _uniq_var_246 = generate(expr[0], env, ctx, def);
_uniq_var_246;
var _uniq_var_247 = join(['("', expr[2], '" + ', _uniq_var_246, ')']);
_uniq_var_247;
return _uniq_var_247;
};_uniq_var_723.__lix_func__ = true;return _uniq_var_723;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_728 = function (expr, env, ctx, def) {var _uniq_var_249 = map(expr[0], (function () {var _uniq_var_724 = function (i) {var _uniq_var_248 = generate(i, env, ctx, def);
_uniq_var_248;
return _uniq_var_248;
};_uniq_var_724.__lix_func__ = true;return _uniq_var_724;})());
_uniq_var_249;
var _uniq_var_250 = (function () {var _uniq_var_727 = function (_uniq_var_725, _uniq_var_726) {
if (typeof _uniq_var_725.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_725.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_725.join.apply(_uniq_var_725, arguments);
} else if (_uniq_var_725.join !== undefined) {
if (_uniq_var_726 === undefined) {
return _uniq_var_725.join;
}
_uniq_var_725.join = _uniq_var_726;
}return _uniq_var_725;
};_uniq_var_727.__lix_func__ = true;return _uniq_var_727;})()(_uniq_var_249, ',');
_uniq_var_250;
var path = _uniq_var_250;
path;
path;
var _uniq_var_251 = join(['[', path, '].join("/")']);
_uniq_var_251;
return _uniq_var_251;
};_uniq_var_728.__lix_func__ = true;return _uniq_var_728;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_732 = function (expr, env, ctx, def) {var _uniq_var_252 = (function () {var _uniq_var_731 = function (_uniq_var_729, _uniq_var_730) {
if (typeof _uniq_var_729.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_729.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_729.join.apply(_uniq_var_729, arguments);
} else if (_uniq_var_729.join !== undefined) {
if (_uniq_var_730 === undefined) {
return _uniq_var_729.join;
}
_uniq_var_729.join = _uniq_var_730;
}return _uniq_var_729;
};_uniq_var_731.__lix_func__ = true;return _uniq_var_731;})()(['"', expr[0], '"'], '');
_uniq_var_252;
var name = [_uniq_var_252, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_732.__lix_func__ = true;return _uniq_var_732;})();
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
var generateOp = (function () {var _uniq_var_733 = function (hint) {var _uniq_var_253 = true;
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
};_uniq_var_733.__lix_func__ = true;return _uniq_var_733;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_734 = function (expr, env, ctx, def) {var _uniq_var_255 = generateOp(expr[1]);
_uniq_var_255;
var _uniq_var_256 = _uniq_var_255(expr, env, ctx, def);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_734.__lix_func__ = true;return _uniq_var_734;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_736 = function (env) {var _uniq_var_257 = env;
_uniq_var_257;
if (not(_uniq_var_257)) {
(_uniq_var_257 = env0);

};
(env = _uniq_var_257);
var Env = (function () {var _uniq_var_735 = function () {;
};_uniq_var_735.__lix_func__ = true;return _uniq_var_735;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_258 = _instance_(Env);
_uniq_var_258;
return _uniq_var_258;
};_uniq_var_736.__lix_func__ = true;return _uniq_var_736;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_738 = function (expr, define) {var _uniq_var_260 = map(expr, (function () {var _uniq_var_737 = function (item) {var _uniq_var_259 = flatten(item, define);
_uniq_var_259;
return _uniq_var_259;
};_uniq_var_737.__lix_func__ = true;return _uniq_var_737;})());
_uniq_var_260;
var _uniq_var_261 = define(_uniq_var_260);
_uniq_var_261;
return _uniq_var_261;
};_uniq_var_738.__lix_func__ = true;return _uniq_var_738;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_739 = function (expr, define) {return expr;
};_uniq_var_739.__lix_func__ = true;return _uniq_var_739;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_744 = function (expr, define) {var _uniq_var_262 = call(statementFlattenGenerator);
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
var _uniq_var_266 = (function () {var _uniq_var_742 = function (_uniq_var_740, _uniq_var_741) {
if (typeof _uniq_var_740.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_740.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_740.concat.apply(_uniq_var_740, arguments);
} else if (_uniq_var_740.concat !== undefined) {
if (_uniq_var_741 === undefined) {
return _uniq_var_740.concat;
}
_uniq_var_740.concat = _uniq_var_741;
}return _uniq_var_740;
};_uniq_var_742.__lix_func__ = true;return _uniq_var_742;})()(expr[2][0], _uniq_var_265);
_uniq_var_266;
(expr[2][0] = _uniq_var_266);
var _uniq_var_267 = call(whileDefine);
_uniq_var_267;
var _uniq_var_269 = foreach(_uniq_var_267, (function () {var _uniq_var_743 = function (i) {var _uniq_var_268 = define(i, true);
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_743.__lix_func__ = true;return _uniq_var_743;})());
_uniq_var_269;
_uniq_var_269;
var _uniq_var_270 = define(expr, true);
_uniq_var_270;
_uniq_var_270;
return ['', '{empty}'];
};_uniq_var_744.__lix_func__ = true;return _uniq_var_744;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_749 = function (expr, define) {var _uniq_var_271 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_748 = function () {var _uniq_var_276 = call(statementFlattenGenerator);
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
var _uniq_var_279 = (function () {var _uniq_var_747 = function (_uniq_var_745, _uniq_var_746) {
if (typeof _uniq_var_745.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_745.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_745.push.apply(_uniq_var_745, arguments);
} else if (_uniq_var_745.push !== undefined) {
if (_uniq_var_746 === undefined) {
return _uniq_var_745.push;
}
_uniq_var_745.push = _uniq_var_746;
}return _uniq_var_745;
};_uniq_var_747.__lix_func__ = true;return _uniq_var_747;})()(seq, [ret, '=', seqRet]);
_uniq_var_279;
_uniq_var_279;
return [seq, '{seq}'];
};_uniq_var_748.__lix_func__ = true;return _uniq_var_748;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_280 = call(getAndOpSeq);
_uniq_var_280;
var _uniq_var_281 = define([[[ret, [[], '{empty}']], [_uniq_var_280, 'else']], 'if'], true);
_uniq_var_281;
_uniq_var_281;
return ret;
};_uniq_var_749.__lix_func__ = true;return _uniq_var_749;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_754 = function (expr, define) {var _uniq_var_282 = flatten(expr[0], define);
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
var getAndOpSeq = (function () {var _uniq_var_753 = function () {var _uniq_var_287 = call(statementFlattenGenerator);
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
var _uniq_var_290 = (function () {var _uniq_var_752 = function (_uniq_var_750, _uniq_var_751) {
if (typeof _uniq_var_750.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_750.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_750.push.apply(_uniq_var_750, arguments);
} else if (_uniq_var_750.push !== undefined) {
if (_uniq_var_751 === undefined) {
return _uniq_var_750.push;
}
_uniq_var_750.push = _uniq_var_751;
}return _uniq_var_750;
};_uniq_var_752.__lix_func__ = true;return _uniq_var_752;})()(seq, [ret, '=', seqRet]);
_uniq_var_290;
_uniq_var_290;
return [seq, '{seq}'];
};_uniq_var_753.__lix_func__ = true;return _uniq_var_753;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_291 = call(getAndOpSeq);
_uniq_var_291;
var _uniq_var_292 = define([[[ret, _uniq_var_291]], 'if'], true);
_uniq_var_292;
_uniq_var_292;
return ret;
};_uniq_var_754.__lix_func__ = true;return _uniq_var_754;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_759 = function (expr, define, tmpVar, ctx) {var _uniq_var_305 = foreach(expr[0], (function () {var _uniq_var_758 = function (i) {var _uniq_var_293 = true;
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
var _uniq_var_302 = (function () {var _uniq_var_757 = function (_uniq_var_755, _uniq_var_756) {
if (typeof _uniq_var_755.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_755.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_755.unshift.apply(_uniq_var_755, arguments);
} else if (_uniq_var_755.unshift !== undefined) {
if (_uniq_var_756 === undefined) {
return _uniq_var_755.unshift;
}
_uniq_var_755.unshift = _uniq_var_756;
}return _uniq_var_755;
};_uniq_var_757.__lix_func__ = true;return _uniq_var_757;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
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
};_uniq_var_758.__lix_func__ = true;return _uniq_var_758;})());
_uniq_var_305;
return _uniq_var_305;
};_uniq_var_759.__lix_func__ = true;return _uniq_var_759;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_760 = function (expr, define) {var _uniq_var_306 = define(['true', '{atomic}'], 'new');
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
};_uniq_var_760.__lix_func__ = true;return _uniq_var_760;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_761 = function (expr, define) {var _uniq_var_308 = flatten(expr[2], define);
_uniq_var_308;
(expr[2] = _uniq_var_308);
return expr;
};_uniq_var_761.__lix_func__ = true;return _uniq_var_761;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_765 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
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
var _uniq_var_312 = (function () {var _uniq_var_764 = function (_uniq_var_762, _uniq_var_763) {
if (typeof _uniq_var_762.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_762.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_762.push.apply(_uniq_var_762, arguments);
} else if (_uniq_var_762.push !== undefined) {
if (_uniq_var_763 === undefined) {
return _uniq_var_762.push;
}
_uniq_var_762.push = _uniq_var_763;
}return _uniq_var_762;
};_uniq_var_764.__lix_func__ = true;return _uniq_var_764;})()(partialExpr, expr[i]);
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
};_uniq_var_765.__lix_func__ = true;return _uniq_var_765;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_766 = function (expr, define) {var _uniq_var_316 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_316;
return _uniq_var_316;
};_uniq_var_766.__lix_func__ = true;return _uniq_var_766;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_767 = function (expr, define) {var _uniq_var_317 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_317;
return _uniq_var_317;
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_768 = function (expr, define) {var _uniq_var_318 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_318;
return _uniq_var_318;
};_uniq_var_768.__lix_func__ = true;return _uniq_var_768;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_769 = function (expr, define) {var _uniq_var_319 = flattenBasicOp(expr, '__rvcompose__', define);
_uniq_var_319;
return _uniq_var_319;
};_uniq_var_769.__lix_func__ = true;return _uniq_var_769;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_770 = function (expr, define) {var _uniq_var_320 = flattenBasicOp(expr, '__vcompose__', define);
_uniq_var_320;
return _uniq_var_320;
};_uniq_var_770.__lix_func__ = true;return _uniq_var_770;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_771 = function (expr, define) {var _uniq_var_321 = flatten(expr[0], define);
_uniq_var_321;
(expr[0] = _uniq_var_321);
return expr;
};_uniq_var_771.__lix_func__ = true;return _uniq_var_771;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_772 = function (expr, define) {return expr;
};_uniq_var_772.__lix_func__ = true;return _uniq_var_772;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_774 = function (expr, define) {var _uniq_var_323 = map(expr[0], (function () {var _uniq_var_773 = function (i) {var _uniq_var_322 = flatten(i, define);
_uniq_var_322;
return _uniq_var_322;
};_uniq_var_773.__lix_func__ = true;return _uniq_var_773;})());
_uniq_var_323;
(expr[0] = _uniq_var_323);
return expr;
};_uniq_var_774.__lix_func__ = true;return _uniq_var_774;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_775 = function (expr, define) {return expr;
};_uniq_var_775.__lix_func__ = true;return _uniq_var_775;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_776 = function (expr, define) {var _uniq_var_324 = true;
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
};_uniq_var_776.__lix_func__ = true;return _uniq_var_776;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_781 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_780 = function (name, value) {var ret = undefined;
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
var _uniq_var_333 = (function () {var _uniq_var_779 = function (_uniq_var_777, _uniq_var_778) {
if (typeof _uniq_var_777.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_777.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_777.push.apply(_uniq_var_777, arguments);
} else if (_uniq_var_777.push !== undefined) {
if (_uniq_var_778 === undefined) {
return _uniq_var_777.push;
}
_uniq_var_777.push = _uniq_var_778;
}return _uniq_var_777;
};_uniq_var_779.__lix_func__ = true;return _uniq_var_779;})()(statements, [lixVar, ':=', value]);
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
};_uniq_var_780.__lix_func__ = true;return _uniq_var_780;})();
};_uniq_var_781.__lix_func__ = true;return _uniq_var_781;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_336 = call(NewGlobalDefine);
_uniq_var_336;
var globalDefine = _uniq_var_336;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_782 = function (expr, define) {var ret = ['', '{empty}'];
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
};_uniq_var_782.__lix_func__ = true;return _uniq_var_782;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_783 = function (expr, define) {var _uniq_var_342 = flatten(expr[2], define);
_uniq_var_342;
(expr[2] = _uniq_var_342);
return expr;
};_uniq_var_783.__lix_func__ = true;return _uniq_var_783;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_785 = function (expr, define) {var _uniq_var_344 = map(expr[0], (function () {var _uniq_var_784 = function (i) {var _uniq_var_343 = flattenProperty(i, define);
_uniq_var_343;
return _uniq_var_343;
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})());
_uniq_var_344;
(expr[0] = _uniq_var_344);
return expr;
};_uniq_var_785.__lix_func__ = true;return _uniq_var_785;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_787 = function (expr, define) {var _uniq_var_346 = map(expr[0], (function () {var _uniq_var_786 = function (i) {var _uniq_var_345 = flatten(i, define);
_uniq_var_345;
return _uniq_var_345;
};_uniq_var_786.__lix_func__ = true;return _uniq_var_786;})());
_uniq_var_346;
(expr[0] = _uniq_var_346);
return expr;
};_uniq_var_787.__lix_func__ = true;return _uniq_var_787;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_788 = function (expr, define) {var _uniq_var_347 = flatten(expr[2], define);
_uniq_var_347;
(expr[2] = _uniq_var_347);
return expr;
};_uniq_var_788.__lix_func__ = true;return _uniq_var_788;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_789 = function (expr, define) {var _uniq_var_348 = true;
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
};_uniq_var_789.__lix_func__ = true;return _uniq_var_789;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_790 = function (expr, define) {return expr;
};_uniq_var_790.__lix_func__ = true;return _uniq_var_790;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_791 = function (expr, define) {var _uniq_var_354 = flatten(expr[0], define);
_uniq_var_354;
return _uniq_var_354;
};_uniq_var_791.__lix_func__ = true;return _uniq_var_791;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_805 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_804 = function (statement, tmpVarName) {var _uniq_var_355 = true;
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
var _uniq_var_358 = (function () {var _uniq_var_794 = function (_uniq_var_792, _uniq_var_793) {
if (typeof _uniq_var_792.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_792.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_792.push.apply(_uniq_var_792, arguments);
} else if (_uniq_var_792.push !== undefined) {
if (_uniq_var_793 === undefined) {
return _uniq_var_792.push;
}
_uniq_var_792.push = _uniq_var_793;
}return _uniq_var_792;
};_uniq_var_794.__lix_func__ = true;return _uniq_var_794;})()(data, statement);
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
var _uniq_var_361 = (function () {var _uniq_var_797 = function (_uniq_var_795, _uniq_var_796) {
if (typeof _uniq_var_795.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_795.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_795.push.apply(_uniq_var_795, arguments);
} else if (_uniq_var_795.push !== undefined) {
if (_uniq_var_796 === undefined) {
return _uniq_var_795.push;
}
_uniq_var_795.push = _uniq_var_796;
}return _uniq_var_795;
};_uniq_var_797.__lix_func__ = true;return _uniq_var_797;})()(data, statement);
_uniq_var_361;
_uniq_var_361;
var _uniq_var_362 = (function () {var _uniq_var_800 = function (_uniq_var_798, _uniq_var_799) {
if (typeof _uniq_var_798.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_798.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_798.push.apply(_uniq_var_798, arguments);
} else if (_uniq_var_798.push !== undefined) {
if (_uniq_var_799 === undefined) {
return _uniq_var_798.push;
}
_uniq_var_798.push = _uniq_var_799;
}return _uniq_var_798;
};_uniq_var_800.__lix_func__ = true;return _uniq_var_800;})()(data, [lixVar, ':=', tmpRet]);
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
var _uniq_var_365 = (function () {var _uniq_var_803 = function (_uniq_var_801, _uniq_var_802) {
if (typeof _uniq_var_801.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_801.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_801.push.apply(_uniq_var_801, arguments);
} else if (_uniq_var_801.push !== undefined) {
if (_uniq_var_802 === undefined) {
return _uniq_var_801.push;
}
_uniq_var_801.push = _uniq_var_802;
}return _uniq_var_801;
};_uniq_var_803.__lix_func__ = true;return _uniq_var_803;})()(data, [lixVar, ':=', statement]);
_uniq_var_365;
_uniq_var_365;
(_uniq_var_356 = lixVar);

};
return _uniq_var_356;
};_uniq_var_804.__lix_func__ = true;return _uniq_var_804;})();
};_uniq_var_805.__lix_func__ = true;return _uniq_var_805;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_817 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_806 = function (stmt, index) {var ret = stmt;
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
};_uniq_var_806.__lix_func__ = true;return _uniq_var_806;})();
ctx;
ctx;
var _uniq_var_400 = foreach(expr[0], (function () {var _uniq_var_816 = function (item, index) {var _uniq_var_374 = call(statementFlattenGenerator);
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
var _uniq_var_377 = (function () {var _uniq_var_809 = function (_uniq_var_807, _uniq_var_808) {
if (typeof _uniq_var_807.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_807.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_807.concat.apply(_uniq_var_807, arguments);
} else if (_uniq_var_807.concat !== undefined) {
if (_uniq_var_808 === undefined) {
return _uniq_var_807.concat;
}
_uniq_var_807.concat = _uniq_var_808;
}return _uniq_var_807;
};_uniq_var_809.__lix_func__ = true;return _uniq_var_809;})()(ret, _uniq_var_376);
_uniq_var_377;
(ret = _uniq_var_377);
var _uniq_var_378 = ctx(itemRet, index);
_uniq_var_378;
var stmtRet = _uniq_var_378;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_810 = function (expr) {var _uniq_var_379 = __eq__(expr[1], '{atomic}');
_uniq_var_379;
var _uniq_var_380 = _uniq_var_379;
_uniq_var_380;
if (_uniq_var_380) {
var _uniq_var_381 = __ne__(expr[3], undefined);
_uniq_var_381;
(_uniq_var_380 = _uniq_var_381);

};
return _uniq_var_380;
};_uniq_var_810.__lix_func__ = true;return _uniq_var_810;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_811 = function (expr) {var _uniq_var_382 = __eq__(expr[1], '{atomic}');
_uniq_var_382;
var _uniq_var_383 = _uniq_var_382;
_uniq_var_383;
if (_uniq_var_383) {
var _uniq_var_384 = __eq__(expr[3], undefined);
_uniq_var_384;
(_uniq_var_383 = _uniq_var_384);

};
return _uniq_var_383;
};_uniq_var_811.__lix_func__ = true;return _uniq_var_811;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_812 = function (expr) {var _uniq_var_385 = isRealVar(expr);
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
};_uniq_var_812.__lix_func__ = true;return _uniq_var_812;})();
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
var _uniq_var_395 = (function () {var _uniq_var_815 = function (_uniq_var_813, _uniq_var_814) {
if (typeof _uniq_var_813.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_813.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_813.push.apply(_uniq_var_813, arguments);
} else if (_uniq_var_813.push !== undefined) {
if (_uniq_var_814 === undefined) {
return _uniq_var_813.push;
}
_uniq_var_813.push = _uniq_var_814;
}return _uniq_var_813;
};_uniq_var_815.__lix_func__ = true;return _uniq_var_815;})()(ret, stmtRet);
_uniq_var_395;
(_uniq_var_391 = _uniq_var_395);

};
return _uniq_var_391;
};_uniq_var_816.__lix_func__ = true;return _uniq_var_816;})());
_uniq_var_400;
_uniq_var_400;
(expr[0] = ret);
return expr;
};_uniq_var_817.__lix_func__ = true;return _uniq_var_817;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_824 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_401 = flatten(expr[0], define);
_uniq_var_401;
var ret = _uniq_var_401;
ret;
ret;
var _uniq_var_402 = call(globalDefine);
_uniq_var_402;
var _uniq_var_403 = (function () {var _uniq_var_820 = function (_uniq_var_818, _uniq_var_819) {
if (typeof _uniq_var_818.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_818.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_818.concat.apply(_uniq_var_818, arguments);
} else if (_uniq_var_818.concat !== undefined) {
if (_uniq_var_819 === undefined) {
return _uniq_var_818.concat;
}
_uniq_var_818.concat = _uniq_var_819;
}return _uniq_var_818;
};_uniq_var_820.__lix_func__ = true;return _uniq_var_820;})()(trapExpr, _uniq_var_402);
_uniq_var_403;
var _uniq_var_404 = (function () {var _uniq_var_823 = function (_uniq_var_821, _uniq_var_822) {
if (typeof _uniq_var_821.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_821.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_821.concat.apply(_uniq_var_821, arguments);
} else if (_uniq_var_821.concat !== undefined) {
if (_uniq_var_822 === undefined) {
return _uniq_var_821.concat;
}
_uniq_var_821.concat = _uniq_var_822;
}return _uniq_var_821;
};_uniq_var_823.__lix_func__ = true;return _uniq_var_823;})()(_uniq_var_403, ret[0]);
_uniq_var_404;
(ret[0] = _uniq_var_404);
return [ret, '{start}'];
};_uniq_var_824.__lix_func__ = true;return _uniq_var_824;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_828 = function (expr, define) {var _uniq_var_405 = true;
_uniq_var_405;
var _uniq_var_406 = null;
_uniq_var_406;
var _uniq_var_408 = __eq__(expr[2], '{var}');
_uniq_var_408;
if ((_uniq_var_405 && _uniq_var_408)) {
(_uniq_var_405 = false);
var _uniq_var_407 = (function () {var _uniq_var_827 = function (_uniq_var_825, _uniq_var_826) {
if (typeof _uniq_var_825.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_825.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_825.join.apply(_uniq_var_825, arguments);
} else if (_uniq_var_825.join !== undefined) {
if (_uniq_var_826 === undefined) {
return _uniq_var_825.join;
}
_uniq_var_825.join = _uniq_var_826;
}return _uniq_var_825;
};_uniq_var_827.__lix_func__ = true;return _uniq_var_827;})()(['"', expr[0], '"'], '');
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
};_uniq_var_828.__lix_func__ = true;return _uniq_var_828;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_829 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_829.__lix_func__ = true;return _uniq_var_829;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_830 = function (expr, define) {return expr;
};_uniq_var_830.__lix_func__ = true;return _uniq_var_830;})();
flattenAmpersand;
flattenAmpersand;
var flattenAnyTypeDestructor = (function () {var _uniq_var_831 = function (arg) {return [];
};_uniq_var_831.__lix_func__ = true;return _uniq_var_831;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_832 = function (expr) {var _uniq_var_412 = transformVarName(expr[0]);
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
};_uniq_var_832.__lix_func__ = true;return _uniq_var_832;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_842 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_416 = getAtomicExprVarName(args[2][0]);
_uniq_var_416;
var varName = _uniq_var_416;
varName;
varName;
var _uniq_var_417 = (function () {var _uniq_var_835 = function (_uniq_var_833, _uniq_var_834) {
if (typeof _uniq_var_833.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_833.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_833.join.apply(_uniq_var_833, arguments);
} else if (_uniq_var_833.join !== undefined) {
if (_uniq_var_834 === undefined) {
return _uniq_var_833.join;
}
_uniq_var_833.join = _uniq_var_834;
}return _uniq_var_833;
};_uniq_var_835.__lix_func__ = true;return _uniq_var_835;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_417;
var _uniq_var_418 = (function () {var _uniq_var_838 = function (_uniq_var_836, _uniq_var_837) {
if (typeof _uniq_var_836.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_836.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_836.push.apply(_uniq_var_836, arguments);
} else if (_uniq_var_836.push !== undefined) {
if (_uniq_var_837 === undefined) {
return _uniq_var_836.push;
}
_uniq_var_836.push = _uniq_var_837;
}return _uniq_var_836;
};_uniq_var_838.__lix_func__ = true;return _uniq_var_838;})()(ret, _uniq_var_417);
_uniq_var_418;
_uniq_var_418;
var _uniq_var_419 = flattenDestructor(args[2], varName);
_uniq_var_419;
var _uniq_var_420 = (function () {var _uniq_var_841 = function (_uniq_var_839, _uniq_var_840) {
if (typeof _uniq_var_839.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_839.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_839.concat.apply(_uniq_var_839, arguments);
} else if (_uniq_var_839.concat !== undefined) {
if (_uniq_var_840 === undefined) {
return _uniq_var_839.concat;
}
_uniq_var_839.concat = _uniq_var_840;
}return _uniq_var_839;
};_uniq_var_841.__lix_func__ = true;return _uniq_var_841;})()(ret, _uniq_var_419);
_uniq_var_420;
(ret = _uniq_var_420);
return ret;
};_uniq_var_842.__lix_func__ = true;return _uniq_var_842;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_852 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_421 = getAtomicExprVarName(args[2][0]);
_uniq_var_421;
var varName = _uniq_var_421;
varName;
varName;
var _uniq_var_422 = (function () {var _uniq_var_845 = function (_uniq_var_843, _uniq_var_844) {
if (typeof _uniq_var_843.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_843.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_843.join.apply(_uniq_var_843, arguments);
} else if (_uniq_var_843.join !== undefined) {
if (_uniq_var_844 === undefined) {
return _uniq_var_843.join;
}
_uniq_var_843.join = _uniq_var_844;
}return _uniq_var_843;
};_uniq_var_845.__lix_func__ = true;return _uniq_var_845;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_422;
var _uniq_var_423 = (function () {var _uniq_var_848 = function (_uniq_var_846, _uniq_var_847) {
if (typeof _uniq_var_846.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_846.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_846.push.apply(_uniq_var_846, arguments);
} else if (_uniq_var_846.push !== undefined) {
if (_uniq_var_847 === undefined) {
return _uniq_var_846.push;
}
_uniq_var_846.push = _uniq_var_847;
}return _uniq_var_846;
};_uniq_var_848.__lix_func__ = true;return _uniq_var_848;})()(ret, _uniq_var_422);
_uniq_var_423;
_uniq_var_423;
var _uniq_var_424 = flattenDestructor(args[2], varName);
_uniq_var_424;
var _uniq_var_425 = (function () {var _uniq_var_851 = function (_uniq_var_849, _uniq_var_850) {
if (typeof _uniq_var_849.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_849.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_849.concat.apply(_uniq_var_849, arguments);
} else if (_uniq_var_849.concat !== undefined) {
if (_uniq_var_850 === undefined) {
return _uniq_var_849.concat;
}
_uniq_var_849.concat = _uniq_var_850;
}return _uniq_var_849;
};_uniq_var_851.__lix_func__ = true;return _uniq_var_851;})()(ret, _uniq_var_424);
_uniq_var_425;
(ret = _uniq_var_425);
return ret;
};_uniq_var_852.__lix_func__ = true;return _uniq_var_852;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_857 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_428 = foreach(args[2], (function () {var _uniq_var_856 = function (item, index) {var _uniq_var_426 = flattenDestructor(item, objName);
_uniq_var_426;
var _uniq_var_427 = (function () {var _uniq_var_855 = function (_uniq_var_853, _uniq_var_854) {
if (typeof _uniq_var_853.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_853.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_853.concat.apply(_uniq_var_853, arguments);
} else if (_uniq_var_853.concat !== undefined) {
if (_uniq_var_854 === undefined) {
return _uniq_var_853.concat;
}
_uniq_var_853.concat = _uniq_var_854;
}return _uniq_var_853;
};_uniq_var_855.__lix_func__ = true;return _uniq_var_855;})()(ret, _uniq_var_426);
_uniq_var_427;
return (ret = _uniq_var_427);
};_uniq_var_856.__lix_func__ = true;return _uniq_var_856;})());
_uniq_var_428;
_uniq_var_428;
return ret;
};_uniq_var_857.__lix_func__ = true;return _uniq_var_857;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenNotDestructor = (function () {var _uniq_var_858 = function (args, varName) {var _uniq_var_429 = flattenDestructor(args[2], varName);
_uniq_var_429;
return _uniq_var_429;
};_uniq_var_858.__lix_func__ = true;return _uniq_var_858;})();
flattenNotDestructor;
flattenNotDestructor;
var flattenAndDestructor = (function () {var _uniq_var_865 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_430 = flattenDestructor(args[2], varName);
_uniq_var_430;
var _uniq_var_431 = (function () {var _uniq_var_861 = function (_uniq_var_859, _uniq_var_860) {
if (typeof _uniq_var_859.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_859.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_859.concat.apply(_uniq_var_859, arguments);
} else if (_uniq_var_859.concat !== undefined) {
if (_uniq_var_860 === undefined) {
return _uniq_var_859.concat;
}
_uniq_var_859.concat = _uniq_var_860;
}return _uniq_var_859;
};_uniq_var_861.__lix_func__ = true;return _uniq_var_861;})()(ret, _uniq_var_430);
_uniq_var_431;
(ret = _uniq_var_431);
var _uniq_var_432 = flattenDestructor(args[3], varName);
_uniq_var_432;
var _uniq_var_433 = (function () {var _uniq_var_864 = function (_uniq_var_862, _uniq_var_863) {
if (typeof _uniq_var_862.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_862.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_862.concat.apply(_uniq_var_862, arguments);
} else if (_uniq_var_862.concat !== undefined) {
if (_uniq_var_863 === undefined) {
return _uniq_var_862.concat;
}
_uniq_var_862.concat = _uniq_var_863;
}return _uniq_var_862;
};_uniq_var_864.__lix_func__ = true;return _uniq_var_864;})()(ret, _uniq_var_432);
_uniq_var_433;
(ret = _uniq_var_433);
return ret;
};_uniq_var_865.__lix_func__ = true;return _uniq_var_865;})();
flattenAndDestructor;
flattenAndDestructor;
var flattenOrDestructor = (function () {var _uniq_var_872 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_434 = flattenDestructor(args[2], varName);
_uniq_var_434;
var _uniq_var_435 = (function () {var _uniq_var_868 = function (_uniq_var_866, _uniq_var_867) {
if (typeof _uniq_var_866.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_866.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_866.concat.apply(_uniq_var_866, arguments);
} else if (_uniq_var_866.concat !== undefined) {
if (_uniq_var_867 === undefined) {
return _uniq_var_866.concat;
}
_uniq_var_866.concat = _uniq_var_867;
}return _uniq_var_866;
};_uniq_var_868.__lix_func__ = true;return _uniq_var_868;})()(ret, _uniq_var_434);
_uniq_var_435;
(ret = _uniq_var_435);
var _uniq_var_436 = flattenDestructor(args[3], varName);
_uniq_var_436;
var _uniq_var_437 = (function () {var _uniq_var_871 = function (_uniq_var_869, _uniq_var_870) {
if (typeof _uniq_var_869.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_869.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_869.concat.apply(_uniq_var_869, arguments);
} else if (_uniq_var_869.concat !== undefined) {
if (_uniq_var_870 === undefined) {
return _uniq_var_869.concat;
}
_uniq_var_869.concat = _uniq_var_870;
}return _uniq_var_869;
};_uniq_var_871.__lix_func__ = true;return _uniq_var_871;})()(ret, _uniq_var_436);
_uniq_var_437;
(ret = _uniq_var_437);
return ret;
};_uniq_var_872.__lix_func__ = true;return _uniq_var_872;})();
flattenOrDestructor;
flattenOrDestructor;
var flattenNamedDestructor = (function () {var _uniq_var_882 = function (args, oldName) {var ret = [];
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
var _uniq_var_441 = (function () {var _uniq_var_875 = function (_uniq_var_873, _uniq_var_874) {
if (typeof _uniq_var_873.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_873.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_873.join.apply(_uniq_var_873, arguments);
} else if (_uniq_var_873.join !== undefined) {
if (_uniq_var_874 === undefined) {
return _uniq_var_873.join;
}
_uniq_var_873.join = _uniq_var_874;
}return _uniq_var_873;
};_uniq_var_875.__lix_func__ = true;return _uniq_var_875;})()(["var ", varName, " = ", oldName], "");
_uniq_var_441;
var _uniq_var_442 = (function () {var _uniq_var_878 = function (_uniq_var_876, _uniq_var_877) {
if (typeof _uniq_var_876.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_876.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_876.push.apply(_uniq_var_876, arguments);
} else if (_uniq_var_876.push !== undefined) {
if (_uniq_var_877 === undefined) {
return _uniq_var_876.push;
}
_uniq_var_876.push = _uniq_var_877;
}return _uniq_var_876;
};_uniq_var_878.__lix_func__ = true;return _uniq_var_878;})()(ret, _uniq_var_441);
_uniq_var_442;
(_uniq_var_440 = _uniq_var_442);

};
_uniq_var_440;
var _uniq_var_444 = flattenDestructor(args[2], varName);
_uniq_var_444;
var _uniq_var_445 = (function () {var _uniq_var_881 = function (_uniq_var_879, _uniq_var_880) {
if (typeof _uniq_var_879.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_879.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_879.concat.apply(_uniq_var_879, arguments);
} else if (_uniq_var_879.concat !== undefined) {
if (_uniq_var_880 === undefined) {
return _uniq_var_879.concat;
}
_uniq_var_879.concat = _uniq_var_880;
}return _uniq_var_879;
};_uniq_var_881.__lix_func__ = true;return _uniq_var_881;})()(ret, _uniq_var_444);
_uniq_var_445;
(ret = _uniq_var_445);
return ret;
};_uniq_var_882.__lix_func__ = true;return _uniq_var_882;})();
flattenNamedDestructor;
flattenNamedDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_893 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_451 = foreach(args[2], (function () {var _uniq_var_892 = function (item, index) {var _uniq_var_446 = getAtomicExprVarName(item[0]);
_uniq_var_446;
var varName = _uniq_var_446;
varName;
varName;
var _uniq_var_447 = (function () {var _uniq_var_885 = function (_uniq_var_883, _uniq_var_884) {
if (typeof _uniq_var_883.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_883.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_883.join.apply(_uniq_var_883, arguments);
} else if (_uniq_var_883.join !== undefined) {
if (_uniq_var_884 === undefined) {
return _uniq_var_883.join;
}
_uniq_var_883.join = _uniq_var_884;
}return _uniq_var_883;
};_uniq_var_885.__lix_func__ = true;return _uniq_var_885;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_447;
var _uniq_var_448 = (function () {var _uniq_var_888 = function (_uniq_var_886, _uniq_var_887) {
if (typeof _uniq_var_886.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_886.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_886.push.apply(_uniq_var_886, arguments);
} else if (_uniq_var_886.push !== undefined) {
if (_uniq_var_887 === undefined) {
return _uniq_var_886.push;
}
_uniq_var_886.push = _uniq_var_887;
}return _uniq_var_886;
};_uniq_var_888.__lix_func__ = true;return _uniq_var_888;})()(ret, _uniq_var_447);
_uniq_var_448;
_uniq_var_448;
var _uniq_var_449 = flattenDestructor(item, varName);
_uniq_var_449;
var _uniq_var_450 = (function () {var _uniq_var_891 = function (_uniq_var_889, _uniq_var_890) {
if (typeof _uniq_var_889.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_889.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_889.concat.apply(_uniq_var_889, arguments);
} else if (_uniq_var_889.concat !== undefined) {
if (_uniq_var_890 === undefined) {
return _uniq_var_889.concat;
}
_uniq_var_889.concat = _uniq_var_890;
}return _uniq_var_889;
};_uniq_var_891.__lix_func__ = true;return _uniq_var_891;})()(ret, _uniq_var_449);
_uniq_var_450;
return (ret = _uniq_var_450);
};_uniq_var_892.__lix_func__ = true;return _uniq_var_892;})());
_uniq_var_451;
_uniq_var_451;
return ret;
};_uniq_var_893.__lix_func__ = true;return _uniq_var_893;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_919 = function (args, arrayName) {var len = args[2].length;
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
var _uniq_var_454 = (function () {var _uniq_var_896 = function (_uniq_var_894, _uniq_var_895) {
if (typeof _uniq_var_894.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_894.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_894.join.apply(_uniq_var_894, arguments);
} else if (_uniq_var_894.join !== undefined) {
if (_uniq_var_895 === undefined) {
return _uniq_var_894.join;
}
_uniq_var_894.join = _uniq_var_895;
}return _uniq_var_894;
};_uniq_var_896.__lix_func__ = true;return _uniq_var_896;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_454;
var _uniq_var_455 = (function () {var _uniq_var_899 = function (_uniq_var_897, _uniq_var_898) {
if (typeof _uniq_var_897.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_897.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_897.push.apply(_uniq_var_897, arguments);
} else if (_uniq_var_897.push !== undefined) {
if (_uniq_var_898 === undefined) {
return _uniq_var_897.push;
}
_uniq_var_897.push = _uniq_var_898;
}return _uniq_var_897;
};_uniq_var_899.__lix_func__ = true;return _uniq_var_899;})()(ret, _uniq_var_454);
_uniq_var_455;
(_uniq_var_453 = _uniq_var_455);

};
_uniq_var_453;
var _uniq_var_457 = (function () {var _uniq_var_902 = function (_uniq_var_900, _uniq_var_901) {
if (typeof _uniq_var_900.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_900.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_900.join.apply(_uniq_var_900, arguments);
} else if (_uniq_var_900.join !== undefined) {
if (_uniq_var_901 === undefined) {
return _uniq_var_900.join;
}
_uniq_var_900.join = _uniq_var_901;
}return _uniq_var_900;
};_uniq_var_902.__lix_func__ = true;return _uniq_var_902;})()([arrayName, ".length == ", len], "");
_uniq_var_457;
var _uniq_var_458 = (function () {var _uniq_var_905 = function (_uniq_var_903, _uniq_var_904) {
if (typeof _uniq_var_903.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_903.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_903.push.apply(_uniq_var_903, arguments);
} else if (_uniq_var_903.push !== undefined) {
if (_uniq_var_904 === undefined) {
return _uniq_var_903.push;
}
_uniq_var_903.push = _uniq_var_904;
}return _uniq_var_903;
};_uniq_var_905.__lix_func__ = true;return _uniq_var_905;})()(ret, _uniq_var_457);
_uniq_var_458;
_uniq_var_458;
var _uniq_var_465 = foreach(args[2], (function () {var _uniq_var_915 = function (item, index) {var _uniq_var_459 = (function () {var _uniq_var_908 = function (_uniq_var_906, _uniq_var_907) {
if (typeof _uniq_var_906.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_906.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_906.join.apply(_uniq_var_906, arguments);
} else if (_uniq_var_906.join !== undefined) {
if (_uniq_var_907 === undefined) {
return _uniq_var_906.join;
}
_uniq_var_906.join = _uniq_var_907;
}return _uniq_var_906;
};_uniq_var_908.__lix_func__ = true;return _uniq_var_908;})()([arrayName, "[", index, "]"], "");
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
var _uniq_var_463 = (function () {var _uniq_var_911 = function (_uniq_var_909, _uniq_var_910) {
if (typeof _uniq_var_909.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_909.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_909.join.apply(_uniq_var_909, arguments);
} else if (_uniq_var_909.join !== undefined) {
if (_uniq_var_910 === undefined) {
return _uniq_var_909.join;
}
_uniq_var_909.join = _uniq_var_910;
}return _uniq_var_909;
};_uniq_var_911.__lix_func__ = true;return _uniq_var_911;})()(["(", cond, ")"], "");
_uniq_var_463;
var _uniq_var_464 = (function () {var _uniq_var_914 = function (_uniq_var_912, _uniq_var_913) {
if (typeof _uniq_var_912.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_912.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_912.push.apply(_uniq_var_912, arguments);
} else if (_uniq_var_912.push !== undefined) {
if (_uniq_var_913 === undefined) {
return _uniq_var_912.push;
}
_uniq_var_912.push = _uniq_var_913;
}return _uniq_var_912;
};_uniq_var_914.__lix_func__ = true;return _uniq_var_914;})()(ret, _uniq_var_463);
_uniq_var_464;
(_uniq_var_462 = _uniq_var_464);

};
return _uniq_var_462;
};_uniq_var_915.__lix_func__ = true;return _uniq_var_915;})());
_uniq_var_465;
_uniq_var_465;
var _uniq_var_466 = (function () {var _uniq_var_918 = function (_uniq_var_916, _uniq_var_917) {
if (typeof _uniq_var_916.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_916.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_916.join.apply(_uniq_var_916, arguments);
} else if (_uniq_var_916.join !== undefined) {
if (_uniq_var_917 === undefined) {
return _uniq_var_916.join;
}
_uniq_var_916.join = _uniq_var_917;
}return _uniq_var_916;
};_uniq_var_918.__lix_func__ = true;return _uniq_var_918;})()(ret, " && ");
_uniq_var_466;
return _uniq_var_466;
};_uniq_var_919.__lix_func__ = true;return _uniq_var_919;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenIndexCondition = (function () {var _uniq_var_923 = function (args, objectName) {var _uniq_var_467 = (function () {var _uniq_var_922 = function (_uniq_var_920, _uniq_var_921) {
if (typeof _uniq_var_920.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_920.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_920.join.apply(_uniq_var_920, arguments);
} else if (_uniq_var_920.join !== undefined) {
if (_uniq_var_921 === undefined) {
return _uniq_var_920.join;
}
_uniq_var_920.join = _uniq_var_921;
}return _uniq_var_920;
};_uniq_var_922.__lix_func__ = true;return _uniq_var_922;})()([objectName, "[", args[0], "]"], "");
_uniq_var_467;
var _uniq_var_468 = flattenCondition(args[2], _uniq_var_467);
_uniq_var_468;
return _uniq_var_468;
};_uniq_var_923.__lix_func__ = true;return _uniq_var_923;})();
flattenIndexCondition;
flattenIndexCondition;
var flattenFieldCondition = (function () {var _uniq_var_927 = function (args, objectName) {var _uniq_var_469 = (function () {var _uniq_var_926 = function (_uniq_var_924, _uniq_var_925) {
if (typeof _uniq_var_924.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_924.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_924.join.apply(_uniq_var_924, arguments);
} else if (_uniq_var_924.join !== undefined) {
if (_uniq_var_925 === undefined) {
return _uniq_var_924.join;
}
_uniq_var_924.join = _uniq_var_925;
}return _uniq_var_924;
};_uniq_var_926.__lix_func__ = true;return _uniq_var_926;})()([objectName, ".", args[0]], "");
_uniq_var_469;
var _uniq_var_470 = flattenCondition(args[2], _uniq_var_469);
_uniq_var_470;
return _uniq_var_470;
};_uniq_var_927.__lix_func__ = true;return _uniq_var_927;})();
flattenFieldCondition;
flattenFieldCondition;
var flattenObjectCondition = (function () {var _uniq_var_941 = function (args, objectName) {var ret = [];
ret;
ret;
var _uniq_var_471 = true;
_uniq_var_471;
var _uniq_var_472 = null;
_uniq_var_472;
var _uniq_var_474 = __ne__(objectName, "arguments");
_uniq_var_474;
if ((_uniq_var_471 && _uniq_var_474)) {
(_uniq_var_471 = false);
var _uniq_var_473 = (function () {var _uniq_var_930 = function (_uniq_var_928, _uniq_var_929) {
if (typeof _uniq_var_928.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_928.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_928.push.apply(_uniq_var_928, arguments);
} else if (_uniq_var_928.push !== undefined) {
if (_uniq_var_929 === undefined) {
return _uniq_var_928.push;
}
_uniq_var_928.push = _uniq_var_929;
}return _uniq_var_928;
};_uniq_var_930.__lix_func__ = true;return _uniq_var_930;})()(ret, objectName);
_uniq_var_473;
(_uniq_var_472 = _uniq_var_473);

};
_uniq_var_472;
var _uniq_var_480 = foreach(args[2], (function () {var _uniq_var_937 = function (item, index) {var _uniq_var_475 = flattenCondition(item, objectName);
_uniq_var_475;
var cond = _uniq_var_475;
cond;
cond;
var _uniq_var_476 = true;
_uniq_var_476;
var _uniq_var_477 = null;
_uniq_var_477;
if ((_uniq_var_476 && cond)) {
(_uniq_var_476 = false);
var _uniq_var_478 = (function () {var _uniq_var_933 = function (_uniq_var_931, _uniq_var_932) {
if (typeof _uniq_var_931.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_931.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_931.join.apply(_uniq_var_931, arguments);
} else if (_uniq_var_931.join !== undefined) {
if (_uniq_var_932 === undefined) {
return _uniq_var_931.join;
}
_uniq_var_931.join = _uniq_var_932;
}return _uniq_var_931;
};_uniq_var_933.__lix_func__ = true;return _uniq_var_933;})()(["(", cond, ")"], "");
_uniq_var_478;
var _uniq_var_479 = (function () {var _uniq_var_936 = function (_uniq_var_934, _uniq_var_935) {
if (typeof _uniq_var_934.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_934.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_934.push.apply(_uniq_var_934, arguments);
} else if (_uniq_var_934.push !== undefined) {
if (_uniq_var_935 === undefined) {
return _uniq_var_934.push;
}
_uniq_var_934.push = _uniq_var_935;
}return _uniq_var_934;
};_uniq_var_936.__lix_func__ = true;return _uniq_var_936;})()(ret, _uniq_var_478);
_uniq_var_479;
(_uniq_var_477 = _uniq_var_479);

};
return _uniq_var_477;
};_uniq_var_937.__lix_func__ = true;return _uniq_var_937;})());
_uniq_var_480;
_uniq_var_480;
var _uniq_var_481 = (function () {var _uniq_var_940 = function (_uniq_var_938, _uniq_var_939) {
if (typeof _uniq_var_938.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_938.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_938.join.apply(_uniq_var_938, arguments);
} else if (_uniq_var_938.join !== undefined) {
if (_uniq_var_939 === undefined) {
return _uniq_var_938.join;
}
_uniq_var_938.join = _uniq_var_939;
}return _uniq_var_938;
};_uniq_var_940.__lix_func__ = true;return _uniq_var_940;})()(ret, " && ");
_uniq_var_481;
return _uniq_var_481;
};_uniq_var_941.__lix_func__ = true;return _uniq_var_941;})();
flattenObjectCondition;
flattenObjectCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_977 = function (args, arrayName) {var _uniq_var_482 = __add__(args[2].length, args[4].length);
_uniq_var_482;
var len = _uniq_var_482;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_483 = true;
_uniq_var_483;
var _uniq_var_484 = null;
_uniq_var_484;
var _uniq_var_487 = __ne__(arrayName, "arguments");
_uniq_var_487;
if ((_uniq_var_483 && _uniq_var_487)) {
(_uniq_var_483 = false);
var _uniq_var_485 = (function () {var _uniq_var_944 = function (_uniq_var_942, _uniq_var_943) {
if (typeof _uniq_var_942.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_942.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_942.join.apply(_uniq_var_942, arguments);
} else if (_uniq_var_942.join !== undefined) {
if (_uniq_var_943 === undefined) {
return _uniq_var_942.join;
}
_uniq_var_942.join = _uniq_var_943;
}return _uniq_var_942;
};_uniq_var_944.__lix_func__ = true;return _uniq_var_944;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_485;
var _uniq_var_486 = (function () {var _uniq_var_947 = function (_uniq_var_945, _uniq_var_946) {
if (typeof _uniq_var_945.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_945.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_945.push.apply(_uniq_var_945, arguments);
} else if (_uniq_var_945.push !== undefined) {
if (_uniq_var_946 === undefined) {
return _uniq_var_945.push;
}
_uniq_var_945.push = _uniq_var_946;
}return _uniq_var_945;
};_uniq_var_947.__lix_func__ = true;return _uniq_var_947;})()(ret, _uniq_var_485);
_uniq_var_486;
(_uniq_var_484 = _uniq_var_486);

};
_uniq_var_484;
var _uniq_var_488 = true;
_uniq_var_488;
var _uniq_var_489 = null;
_uniq_var_489;
var _uniq_var_492 = __gt__(len, 0);
_uniq_var_492;
if ((_uniq_var_488 && _uniq_var_492)) {
(_uniq_var_488 = false);
var _uniq_var_490 = (function () {var _uniq_var_950 = function (_uniq_var_948, _uniq_var_949) {
if (typeof _uniq_var_948.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_948.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_948.join.apply(_uniq_var_948, arguments);
} else if (_uniq_var_948.join !== undefined) {
if (_uniq_var_949 === undefined) {
return _uniq_var_948.join;
}
_uniq_var_948.join = _uniq_var_949;
}return _uniq_var_948;
};_uniq_var_950.__lix_func__ = true;return _uniq_var_950;})()([arrayName, ".length >= ", len], "");
_uniq_var_490;
var _uniq_var_491 = (function () {var _uniq_var_953 = function (_uniq_var_951, _uniq_var_952) {
if (typeof _uniq_var_951.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_951.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_951.push.apply(_uniq_var_951, arguments);
} else if (_uniq_var_951.push !== undefined) {
if (_uniq_var_952 === undefined) {
return _uniq_var_951.push;
}
_uniq_var_951.push = _uniq_var_952;
}return _uniq_var_951;
};_uniq_var_953.__lix_func__ = true;return _uniq_var_953;})()(ret, _uniq_var_490);
_uniq_var_491;
(_uniq_var_489 = _uniq_var_491);

};
_uniq_var_489;
var _uniq_var_499 = foreach(args[2], (function () {var _uniq_var_963 = function (item, index) {var _uniq_var_493 = (function () {var _uniq_var_956 = function (_uniq_var_954, _uniq_var_955) {
if (typeof _uniq_var_954.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_954.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_954.join.apply(_uniq_var_954, arguments);
} else if (_uniq_var_954.join !== undefined) {
if (_uniq_var_955 === undefined) {
return _uniq_var_954.join;
}
_uniq_var_954.join = _uniq_var_955;
}return _uniq_var_954;
};_uniq_var_956.__lix_func__ = true;return _uniq_var_956;})()([arrayName, "[", index, "]"], "");
_uniq_var_493;
var _uniq_var_494 = flattenCondition(item, _uniq_var_493);
_uniq_var_494;
var cond = _uniq_var_494;
cond;
cond;
var _uniq_var_495 = true;
_uniq_var_495;
var _uniq_var_496 = null;
_uniq_var_496;
if ((_uniq_var_495 && cond)) {
(_uniq_var_495 = false);
var _uniq_var_497 = (function () {var _uniq_var_959 = function (_uniq_var_957, _uniq_var_958) {
if (typeof _uniq_var_957.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_957.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_957.join.apply(_uniq_var_957, arguments);
} else if (_uniq_var_957.join !== undefined) {
if (_uniq_var_958 === undefined) {
return _uniq_var_957.join;
}
_uniq_var_957.join = _uniq_var_958;
}return _uniq_var_957;
};_uniq_var_959.__lix_func__ = true;return _uniq_var_959;})()(["(", cond, ")"], "");
_uniq_var_497;
var _uniq_var_498 = (function () {var _uniq_var_962 = function (_uniq_var_960, _uniq_var_961) {
if (typeof _uniq_var_960.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_960.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_960.push.apply(_uniq_var_960, arguments);
} else if (_uniq_var_960.push !== undefined) {
if (_uniq_var_961 === undefined) {
return _uniq_var_960.push;
}
_uniq_var_960.push = _uniq_var_961;
}return _uniq_var_960;
};_uniq_var_962.__lix_func__ = true;return _uniq_var_962;})()(ret, _uniq_var_497);
_uniq_var_498;
(_uniq_var_496 = _uniq_var_498);

};
return _uniq_var_496;
};_uniq_var_963.__lix_func__ = true;return _uniq_var_963;})());
_uniq_var_499;
_uniq_var_499;
var _uniq_var_507 = foreach(args[4], (function () {var _uniq_var_973 = function (item, index) {var _uniq_var_500 = __sub__(args[4].length, index);
_uniq_var_500;
var _uniq_var_501 = (function () {var _uniq_var_966 = function (_uniq_var_964, _uniq_var_965) {
if (typeof _uniq_var_964.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_964.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_964.join.apply(_uniq_var_964, arguments);
} else if (_uniq_var_964.join !== undefined) {
if (_uniq_var_965 === undefined) {
return _uniq_var_964.join;
}
_uniq_var_964.join = _uniq_var_965;
}return _uniq_var_964;
};_uniq_var_966.__lix_func__ = true;return _uniq_var_966;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_500, "]"], "");
_uniq_var_501;
var _uniq_var_502 = flattenCondition(item, _uniq_var_501);
_uniq_var_502;
var cond = _uniq_var_502;
cond;
cond;
var _uniq_var_503 = true;
_uniq_var_503;
var _uniq_var_504 = null;
_uniq_var_504;
if ((_uniq_var_503 && cond)) {
(_uniq_var_503 = false);
var _uniq_var_505 = (function () {var _uniq_var_969 = function (_uniq_var_967, _uniq_var_968) {
if (typeof _uniq_var_967.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_967.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_967.join.apply(_uniq_var_967, arguments);
} else if (_uniq_var_967.join !== undefined) {
if (_uniq_var_968 === undefined) {
return _uniq_var_967.join;
}
_uniq_var_967.join = _uniq_var_968;
}return _uniq_var_967;
};_uniq_var_969.__lix_func__ = true;return _uniq_var_969;})()(["(", cond, ")"], "");
_uniq_var_505;
var _uniq_var_506 = (function () {var _uniq_var_972 = function (_uniq_var_970, _uniq_var_971) {
if (typeof _uniq_var_970.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_970.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_970.push.apply(_uniq_var_970, arguments);
} else if (_uniq_var_970.push !== undefined) {
if (_uniq_var_971 === undefined) {
return _uniq_var_970.push;
}
_uniq_var_970.push = _uniq_var_971;
}return _uniq_var_970;
};_uniq_var_972.__lix_func__ = true;return _uniq_var_972;})()(ret, _uniq_var_505);
_uniq_var_506;
(_uniq_var_504 = _uniq_var_506);

};
return _uniq_var_504;
};_uniq_var_973.__lix_func__ = true;return _uniq_var_973;})());
_uniq_var_507;
_uniq_var_507;
var _uniq_var_508 = (function () {var _uniq_var_976 = function (_uniq_var_974, _uniq_var_975) {
if (typeof _uniq_var_974.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_974.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_974.join.apply(_uniq_var_974, arguments);
} else if (_uniq_var_974.join !== undefined) {
if (_uniq_var_975 === undefined) {
return _uniq_var_974.join;
}
_uniq_var_974.join = _uniq_var_975;
}return _uniq_var_974;
};_uniq_var_976.__lix_func__ = true;return _uniq_var_976;})()(ret, " && ");
_uniq_var_508;
return _uniq_var_508;
};_uniq_var_977.__lix_func__ = true;return _uniq_var_977;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_1004 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_517 = foreach(args[2], (function () {var _uniq_var_987 = function (item, index) {var _uniq_var_509 = getAtomicExprVarName(item[0]);
_uniq_var_509;
var varName = _uniq_var_509;
varName;
varName;
var _uniq_var_510 = true;
_uniq_var_510;
var _uniq_var_511 = null;
_uniq_var_511;
var _uniq_var_514 = __ne__(arrayName, "arguments");
_uniq_var_514;
if ((_uniq_var_510 && _uniq_var_514)) {
(_uniq_var_510 = false);
var _uniq_var_512 = (function () {var _uniq_var_980 = function (_uniq_var_978, _uniq_var_979) {
if (typeof _uniq_var_978.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_978.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_978.join.apply(_uniq_var_978, arguments);
} else if (_uniq_var_978.join !== undefined) {
if (_uniq_var_979 === undefined) {
return _uniq_var_978.join;
}
_uniq_var_978.join = _uniq_var_979;
}return _uniq_var_978;
};_uniq_var_980.__lix_func__ = true;return _uniq_var_980;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_512;
var _uniq_var_513 = (function () {var _uniq_var_983 = function (_uniq_var_981, _uniq_var_982) {
if (typeof _uniq_var_981.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_981.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_981.push.apply(_uniq_var_981, arguments);
} else if (_uniq_var_981.push !== undefined) {
if (_uniq_var_982 === undefined) {
return _uniq_var_981.push;
}
_uniq_var_981.push = _uniq_var_982;
}return _uniq_var_981;
};_uniq_var_983.__lix_func__ = true;return _uniq_var_983;})()(ret, _uniq_var_512);
_uniq_var_513;
(_uniq_var_511 = _uniq_var_513);

};
_uniq_var_511;
var _uniq_var_515 = flattenDestructor(item, varName);
_uniq_var_515;
var _uniq_var_516 = (function () {var _uniq_var_986 = function (_uniq_var_984, _uniq_var_985) {
if (typeof _uniq_var_984.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_984.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_984.concat.apply(_uniq_var_984, arguments);
} else if (_uniq_var_984.concat !== undefined) {
if (_uniq_var_985 === undefined) {
return _uniq_var_984.concat;
}
_uniq_var_984.concat = _uniq_var_985;
}return _uniq_var_984;
};_uniq_var_986.__lix_func__ = true;return _uniq_var_986;})()(ret, _uniq_var_515);
_uniq_var_516;
return (ret = _uniq_var_516);
};_uniq_var_987.__lix_func__ = true;return _uniq_var_987;})());
_uniq_var_517;
_uniq_var_517;
var _uniq_var_518 = true;
_uniq_var_518;
var _uniq_var_519 = null;
_uniq_var_519;
var _uniq_var_523 = __eq__(args[3][1], "{va_arg}");
_uniq_var_523;
if ((_uniq_var_518 && _uniq_var_523)) {
(_uniq_var_518 = false);
var _uniq_var_520 = getAtomicExprVarName(args[3][0]);
_uniq_var_520;
var varName = _uniq_var_520;
varName;
varName;
var _uniq_var_521 = (function () {var _uniq_var_990 = function (_uniq_var_988, _uniq_var_989) {
if (typeof _uniq_var_988.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_988.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_988.join.apply(_uniq_var_988, arguments);
} else if (_uniq_var_988.join !== undefined) {
if (_uniq_var_989 === undefined) {
return _uniq_var_988.join;
}
_uniq_var_988.join = _uniq_var_989;
}return _uniq_var_988;
};_uniq_var_990.__lix_func__ = true;return _uniq_var_990;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_521;
var _uniq_var_522 = (function () {var _uniq_var_993 = function (_uniq_var_991, _uniq_var_992) {
if (typeof _uniq_var_991.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_991.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_991.push.apply(_uniq_var_991, arguments);
} else if (_uniq_var_991.push !== undefined) {
if (_uniq_var_992 === undefined) {
return _uniq_var_991.push;
}
_uniq_var_991.push = _uniq_var_992;
}return _uniq_var_991;
};_uniq_var_993.__lix_func__ = true;return _uniq_var_993;})()(ret, _uniq_var_521);
_uniq_var_522;
(_uniq_var_519 = _uniq_var_522);

};
_uniq_var_519;
var _uniq_var_530 = foreach(args[4], (function () {var _uniq_var_1003 = function (item, index) {var _uniq_var_524 = getAtomicExprVarName(item[0]);
_uniq_var_524;
var varName = _uniq_var_524;
varName;
varName;
var _uniq_var_525 = __sub__(tail_lenth, index);
_uniq_var_525;
var _uniq_var_526 = (function () {var _uniq_var_996 = function (_uniq_var_994, _uniq_var_995) {
if (typeof _uniq_var_994.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_994.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_994.join.apply(_uniq_var_994, arguments);
} else if (_uniq_var_994.join !== undefined) {
if (_uniq_var_995 === undefined) {
return _uniq_var_994.join;
}
_uniq_var_994.join = _uniq_var_995;
}return _uniq_var_994;
};_uniq_var_996.__lix_func__ = true;return _uniq_var_996;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", arrayName, ".length - ", _uniq_var_525, "] : undefined"], "");
_uniq_var_526;
var _uniq_var_527 = (function () {var _uniq_var_999 = function (_uniq_var_997, _uniq_var_998) {
if (typeof _uniq_var_997.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_997.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_997.push.apply(_uniq_var_997, arguments);
} else if (_uniq_var_997.push !== undefined) {
if (_uniq_var_998 === undefined) {
return _uniq_var_997.push;
}
_uniq_var_997.push = _uniq_var_998;
}return _uniq_var_997;
};_uniq_var_999.__lix_func__ = true;return _uniq_var_999;})()(ret, _uniq_var_526);
_uniq_var_527;
_uniq_var_527;
var _uniq_var_528 = flattenDestructor(item, varName);
_uniq_var_528;
var _uniq_var_529 = (function () {var _uniq_var_1002 = function (_uniq_var_1000, _uniq_var_1001) {
if (typeof _uniq_var_1000.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1000.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1000.concat.apply(_uniq_var_1000, arguments);
} else if (_uniq_var_1000.concat !== undefined) {
if (_uniq_var_1001 === undefined) {
return _uniq_var_1000.concat;
}
_uniq_var_1000.concat = _uniq_var_1001;
}return _uniq_var_1000;
};_uniq_var_1002.__lix_func__ = true;return _uniq_var_1002;})()(ret, _uniq_var_528);
_uniq_var_529;
return (ret = _uniq_var_529);
};_uniq_var_1003.__lix_func__ = true;return _uniq_var_1003;})());
_uniq_var_530;
_uniq_var_530;
return ret;
};_uniq_var_1004.__lix_func__ = true;return _uniq_var_1004;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_1005 = function (args, varName) {return null;
};_uniq_var_1005.__lix_func__ = true;return _uniq_var_1005;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenLiteralArgCondition = (function () {var _uniq_var_1009 = function (args, varName) {var _uniq_var_531 = (function () {var _uniq_var_1008 = function (_uniq_var_1006, _uniq_var_1007) {
if (typeof _uniq_var_1006.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1006.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1006.join.apply(_uniq_var_1006, arguments);
} else if (_uniq_var_1006.join !== undefined) {
if (_uniq_var_1007 === undefined) {
return _uniq_var_1006.join;
}
_uniq_var_1006.join = _uniq_var_1007;
}return _uniq_var_1006;
};_uniq_var_1008.__lix_func__ = true;return _uniq_var_1008;})()([varName, " === ", args[2]], "");
_uniq_var_531;
return _uniq_var_531;
};_uniq_var_1009.__lix_func__ = true;return _uniq_var_1009;})();
flattenLiteralArgCondition;
flattenLiteralArgCondition;
var flattenLTArgCondition = (function () {var _uniq_var_1013 = function (args, varName) {var _uniq_var_532 = (function () {var _uniq_var_1012 = function (_uniq_var_1010, _uniq_var_1011) {
if (typeof _uniq_var_1010.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1010.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1010.join.apply(_uniq_var_1010, arguments);
} else if (_uniq_var_1010.join !== undefined) {
if (_uniq_var_1011 === undefined) {
return _uniq_var_1010.join;
}
_uniq_var_1010.join = _uniq_var_1011;
}return _uniq_var_1010;
};_uniq_var_1012.__lix_func__ = true;return _uniq_var_1012;})()([varName, " < ", args[2]], "");
_uniq_var_532;
return _uniq_var_532;
};_uniq_var_1013.__lix_func__ = true;return _uniq_var_1013;})();
flattenLTArgCondition;
flattenLTArgCondition;
var flattenBetweenArgCondition = (function () {var _uniq_var_1017 = function (args, varName) {var _uniq_var_533 = (function () {var _uniq_var_1016 = function (_uniq_var_1014, _uniq_var_1015) {
if (typeof _uniq_var_1014.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1014.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1014.join.apply(_uniq_var_1014, arguments);
} else if (_uniq_var_1014.join !== undefined) {
if (_uniq_var_1015 === undefined) {
return _uniq_var_1014.join;
}
_uniq_var_1014.join = _uniq_var_1015;
}return _uniq_var_1014;
};_uniq_var_1016.__lix_func__ = true;return _uniq_var_1016;})()([varName, " >= ", args[2], " && ", varName, " < ", args[3]], "");
_uniq_var_533;
return _uniq_var_533;
};_uniq_var_1017.__lix_func__ = true;return _uniq_var_1017;})();
flattenBetweenArgCondition;
flattenBetweenArgCondition;
var flattenGEArgCondition = (function () {var _uniq_var_1021 = function (args, varName) {var _uniq_var_534 = (function () {var _uniq_var_1020 = function (_uniq_var_1018, _uniq_var_1019) {
if (typeof _uniq_var_1018.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1018.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1018.join.apply(_uniq_var_1018, arguments);
} else if (_uniq_var_1018.join !== undefined) {
if (_uniq_var_1019 === undefined) {
return _uniq_var_1018.join;
}
_uniq_var_1018.join = _uniq_var_1019;
}return _uniq_var_1018;
};_uniq_var_1020.__lix_func__ = true;return _uniq_var_1020;})()([varName, " >= ", args[2]], "");
_uniq_var_534;
return _uniq_var_534;
};_uniq_var_1021.__lix_func__ = true;return _uniq_var_1021;})();
flattenGEArgCondition;
flattenGEArgCondition;
var flattenNamedArgCondition = (function () {var _uniq_var_1022 = function (args, varName) {var _uniq_var_535 = flattenCondition(args[2], varName);
_uniq_var_535;
return _uniq_var_535;
};_uniq_var_1022.__lix_func__ = true;return _uniq_var_1022;})();
flattenNamedArgCondition;
flattenNamedArgCondition;
var flattenNotArgCondition = (function () {var _uniq_var_1026 = function (args, varName) {var _uniq_var_536 = flattenCondition(args[2], varName);
_uniq_var_536;
var cond0 = _uniq_var_536;
cond0;
cond0;
var _uniq_var_537 = (function () {var _uniq_var_1025 = function (_uniq_var_1023, _uniq_var_1024) {
if (typeof _uniq_var_1023.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1023.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1023.join.apply(_uniq_var_1023, arguments);
} else if (_uniq_var_1023.join !== undefined) {
if (_uniq_var_1024 === undefined) {
return _uniq_var_1023.join;
}
_uniq_var_1023.join = _uniq_var_1024;
}return _uniq_var_1023;
};_uniq_var_1025.__lix_func__ = true;return _uniq_var_1025;})()(["!(", cond0, ")"], "");
_uniq_var_537;
return _uniq_var_537;
};_uniq_var_1026.__lix_func__ = true;return _uniq_var_1026;})();
flattenNotArgCondition;
flattenNotArgCondition;
var flattenAndArgCondition = (function () {var _uniq_var_1030 = function (args, varName) {var _uniq_var_538 = flattenCondition(args[2], varName);
_uniq_var_538;
var cond0 = _uniq_var_538;
cond0;
cond0;
var _uniq_var_539 = flattenCondition(args[3], varName);
_uniq_var_539;
var cond1 = _uniq_var_539;
cond1;
cond1;
var _uniq_var_540 = (function () {var _uniq_var_1029 = function (_uniq_var_1027, _uniq_var_1028) {
if (typeof _uniq_var_1027.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1027.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1027.join.apply(_uniq_var_1027, arguments);
} else if (_uniq_var_1027.join !== undefined) {
if (_uniq_var_1028 === undefined) {
return _uniq_var_1027.join;
}
_uniq_var_1027.join = _uniq_var_1028;
}return _uniq_var_1027;
};_uniq_var_1029.__lix_func__ = true;return _uniq_var_1029;})()(["(", cond0, ") && (", cond1, ")"], "");
_uniq_var_540;
return _uniq_var_540;
};_uniq_var_1030.__lix_func__ = true;return _uniq_var_1030;})();
flattenAndArgCondition;
flattenAndArgCondition;
var flattenOrArgCondition = (function () {var _uniq_var_1034 = function (args, varName) {var _uniq_var_541 = flattenCondition(args[2], varName);
_uniq_var_541;
var cond0 = _uniq_var_541;
cond0;
cond0;
var _uniq_var_542 = flattenCondition(args[3], varName);
_uniq_var_542;
var cond1 = _uniq_var_542;
cond1;
cond1;
var _uniq_var_543 = (function () {var _uniq_var_1033 = function (_uniq_var_1031, _uniq_var_1032) {
if (typeof _uniq_var_1031.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1031.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1031.join.apply(_uniq_var_1031, arguments);
} else if (_uniq_var_1031.join !== undefined) {
if (_uniq_var_1032 === undefined) {
return _uniq_var_1031.join;
}
_uniq_var_1031.join = _uniq_var_1032;
}return _uniq_var_1031;
};_uniq_var_1033.__lix_func__ = true;return _uniq_var_1033;})()(["(", cond0, ") || (", cond1, ")"], "");
_uniq_var_543;
return _uniq_var_543;
};_uniq_var_1034.__lix_func__ = true;return _uniq_var_1034;})();
flattenOrArgCondition;
flattenOrArgCondition;
var flattenTypeCondition = (function () {var _uniq_var_1050 = function (args, varName) {var ret = null;
ret;
ret;
var _uniq_var_544 = true;
_uniq_var_544;
var _uniq_var_545 = null;
_uniq_var_545;
var _uniq_var_547 = __eq__(args[0], 'Number');
_uniq_var_547;
if ((_uniq_var_544 && _uniq_var_547)) {
(_uniq_var_544 = false);
var _uniq_var_546 = (function () {var _uniq_var_1037 = function (_uniq_var_1035, _uniq_var_1036) {
if (typeof _uniq_var_1035.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1035.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1035.join.apply(_uniq_var_1035, arguments);
} else if (_uniq_var_1035.join !== undefined) {
if (_uniq_var_1036 === undefined) {
return _uniq_var_1035.join;
}
_uniq_var_1035.join = _uniq_var_1036;
}return _uniq_var_1035;
};_uniq_var_1037.__lix_func__ = true;return _uniq_var_1037;})()(["typeof ", varName, " == 'number'"], "");
_uniq_var_546;
(_uniq_var_545 = (ret = _uniq_var_546));

};
var _uniq_var_549 = __eq__(args[0], 'String');
_uniq_var_549;
if ((_uniq_var_544 && _uniq_var_549)) {
(_uniq_var_544 = false);
var _uniq_var_548 = (function () {var _uniq_var_1040 = function (_uniq_var_1038, _uniq_var_1039) {
if (typeof _uniq_var_1038.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1038.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1038.join.apply(_uniq_var_1038, arguments);
} else if (_uniq_var_1038.join !== undefined) {
if (_uniq_var_1039 === undefined) {
return _uniq_var_1038.join;
}
_uniq_var_1038.join = _uniq_var_1039;
}return _uniq_var_1038;
};_uniq_var_1040.__lix_func__ = true;return _uniq_var_1040;})()(["typeof ", varName, " == 'string'"], "");
_uniq_var_548;
(_uniq_var_545 = (ret = _uniq_var_548));

};
var _uniq_var_551 = __eq__(args[0], 'Function');
_uniq_var_551;
if ((_uniq_var_544 && _uniq_var_551)) {
(_uniq_var_544 = false);
var _uniq_var_550 = (function () {var _uniq_var_1043 = function (_uniq_var_1041, _uniq_var_1042) {
if (typeof _uniq_var_1041.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1041.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1041.join.apply(_uniq_var_1041, arguments);
} else if (_uniq_var_1041.join !== undefined) {
if (_uniq_var_1042 === undefined) {
return _uniq_var_1041.join;
}
_uniq_var_1041.join = _uniq_var_1042;
}return _uniq_var_1041;
};_uniq_var_1043.__lix_func__ = true;return _uniq_var_1043;})()(["typeof ", varName, " == 'function'"], "");
_uniq_var_550;
(_uniq_var_545 = (ret = _uniq_var_550));

};
var _uniq_var_553 = __eq__(args[0], 'Boolean');
_uniq_var_553;
if ((_uniq_var_544 && _uniq_var_553)) {
(_uniq_var_544 = false);
var _uniq_var_552 = (function () {var _uniq_var_1046 = function (_uniq_var_1044, _uniq_var_1045) {
if (typeof _uniq_var_1044.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1044.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1044.join.apply(_uniq_var_1044, arguments);
} else if (_uniq_var_1044.join !== undefined) {
if (_uniq_var_1045 === undefined) {
return _uniq_var_1044.join;
}
_uniq_var_1044.join = _uniq_var_1045;
}return _uniq_var_1044;
};_uniq_var_1046.__lix_func__ = true;return _uniq_var_1046;})()(["typeof ", varName, " == 'boolean'"], "");
_uniq_var_552;
(_uniq_var_545 = (ret = _uniq_var_552));

};
if (_uniq_var_544) {
var _uniq_var_554 = transformVarName(args[0]);
_uniq_var_554;
var _uniq_var_555 = (function () {var _uniq_var_1049 = function (_uniq_var_1047, _uniq_var_1048) {
if (typeof _uniq_var_1047.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1047.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1047.join.apply(_uniq_var_1047, arguments);
} else if (_uniq_var_1047.join !== undefined) {
if (_uniq_var_1048 === undefined) {
return _uniq_var_1047.join;
}
_uniq_var_1047.join = _uniq_var_1048;
}return _uniq_var_1047;
};_uniq_var_1049.__lix_func__ = true;return _uniq_var_1049;})()([varName, " instanceof ", _uniq_var_554], "");
_uniq_var_555;
(_uniq_var_545 = _uniq_var_555);

};
return _uniq_var_545;
};_uniq_var_1050.__lix_func__ = true;return _uniq_var_1050;})();
flattenTypeCondition;
flattenTypeCondition;
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
"{not_arg}": flattenNotArgCondition,
"{object_arg}": flattenObjectCondition,
"{type_arg}": flattenTypeCondition,
"{index_arg}": flattenIndexCondition,
"{field_arg}": flattenFieldCondition
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
"{type_arg}": flattenAnyTypeDestructor,
"{index_arg}": flattenIndexDestructor,
"{field_arg}": flattenFieldDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_1051 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_556 = true;
_uniq_var_556;
var _uniq_var_557 = null;
_uniq_var_557;
if ((_uniq_var_556 && flattenDestructorOp[hint])) {
(_uniq_var_556 = false);
(_uniq_var_557 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_557;
return ret;
};_uniq_var_1051.__lix_func__ = true;return _uniq_var_1051;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_1052 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_558 = true;
_uniq_var_558;
var _uniq_var_559 = null;
_uniq_var_559;
if ((_uniq_var_558 && flattenConditionOp[hint])) {
(_uniq_var_558 = false);
(_uniq_var_559 = (ret = flattenConditionOp[hint]));

};
_uniq_var_559;
return ret;
};_uniq_var_1052.__lix_func__ = true;return _uniq_var_1052;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_1053 = function (args, varName) {var _uniq_var_560 = getFlattenDestructorOp(args[1]);
_uniq_var_560;
var _uniq_var_561 = call(_uniq_var_560, args, varName);
_uniq_var_561;
return _uniq_var_561;
};_uniq_var_1053.__lix_func__ = true;return _uniq_var_1053;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_1054 = function (args, varName) {var _uniq_var_562 = getFlattenConditionOp(args[1]);
_uniq_var_562;
var _uniq_var_563 = call(_uniq_var_562, args, varName);
_uniq_var_563;
return _uniq_var_563;
};_uniq_var_1054.__lix_func__ = true;return _uniq_var_1054;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_1055 = function (args) {var _uniq_var_564 = flattenCondition(args, "arguments");
_uniq_var_564;
return _uniq_var_564;
};_uniq_var_1055.__lix_func__ = true;return _uniq_var_1055;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_1056 = function (args) {var _uniq_var_565 = flattenDestructor(args, "arguments");
_uniq_var_565;
return _uniq_var_565;
};_uniq_var_1056.__lix_func__ = true;return _uniq_var_1056;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_1061 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_567 = foreach(args[2], (function () {var _uniq_var_1060 = function (item) {var _uniq_var_566 = (function () {var _uniq_var_1059 = function (_uniq_var_1057, _uniq_var_1058) {
if (typeof _uniq_var_1057.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1057.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1057.push.apply(_uniq_var_1057, arguments);
} else if (_uniq_var_1057.push !== undefined) {
if (_uniq_var_1058 === undefined) {
return _uniq_var_1057.push;
}
_uniq_var_1057.push = _uniq_var_1058;
}return _uniq_var_1057;
};_uniq_var_1059.__lix_func__ = true;return _uniq_var_1059;})()(ret, item[0]);
_uniq_var_566;
return _uniq_var_566;
};_uniq_var_1060.__lix_func__ = true;return _uniq_var_1060;})());
_uniq_var_567;
_uniq_var_567;
return ret;
};_uniq_var_1061.__lix_func__ = true;return _uniq_var_1061;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_1062 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_568 = flattenArgumentsDestructor(expr[2]);
_uniq_var_568;
var destructor = _uniq_var_568;
destructor;
destructor;
var _uniq_var_569 = getFuncArgsNameList(expr[2]);
_uniq_var_569;
var funcArgsNameList = _uniq_var_569;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_570 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_570;
var func = _uniq_var_570;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_1062.__lix_func__ = true;return _uniq_var_1062;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_1063 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_571 = flatten(expr, define);
_uniq_var_571;
return _uniq_var_571;
};_uniq_var_1063.__lix_func__ = true;return _uniq_var_1063;})();
flattenAsterisk;
flattenAsterisk;
var identity = (function () {var _uniq_var_1064 = function (x) {return x;
};_uniq_var_1064.__lix_func__ = true;return _uniq_var_1064;})();
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
var flattenOp = (function () {var _uniq_var_1065 = function (hint) {var _uniq_var_572 = true;
_uniq_var_572;
var _uniq_var_573 = null;
_uniq_var_573;
if ((_uniq_var_572 && flattenOpTable[hint])) {
(_uniq_var_572 = false);
(_uniq_var_573 = flattenOpTable[hint]);

};
if (_uniq_var_572) {
(_uniq_var_573 = flattenExpr);

};
return _uniq_var_573;
};_uniq_var_1065.__lix_func__ = true;return _uniq_var_1065;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_1066 = function (expr, define, ctx) {var _uniq_var_574 = flattenOp(expr[1]);
_uniq_var_574;
var _uniq_var_575 = _uniq_var_574(expr, define, ctx);
_uniq_var_575;
return _uniq_var_575;
};_uniq_var_1066.__lix_func__ = true;return _uniq_var_1066;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_1067 = function (i) {return i;
};_uniq_var_1067.__lix_func__ = true;return _uniq_var_1067;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_1068 = function (i) {;
};_uniq_var_1068.__lix_func__ = true;return _uniq_var_1068;})(),
appendExpr: (function () {var _uniq_var_1069 = function (i) {;
};_uniq_var_1069.__lix_func__ = true;return _uniq_var_1069;})()
};
def0;
def0;
var _uniq_var_576 = join(['s[', STEP, ']']);
_uniq_var_576;
var _uniq_var_577 = join(['s[', RET, ']']);
_uniq_var_577;
var seqFuncParamsName = {
step: _uniq_var_576,
ret: _uniq_var_577
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_1076 = function (expr) {var _uniq_var_578 = map(env0, (function () {var _uniq_var_1070 = function (i) {return i;
};_uniq_var_1070.__lix_func__ = true;return _uniq_var_1070;})());
_uniq_var_578;
var _uniq_var_579 = (function () {var _uniq_var_1073 = function (_uniq_var_1071, _uniq_var_1072) {
if (typeof _uniq_var_1071.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1071.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1071.join.apply(_uniq_var_1071, arguments);
} else if (_uniq_var_1071.join !== undefined) {
if (_uniq_var_1072 === undefined) {
return _uniq_var_1071.join;
}
_uniq_var_1071.join = _uniq_var_1072;
}return _uniq_var_1071;
};_uniq_var_1073.__lix_func__ = true;return _uniq_var_1073;})()(_uniq_var_578, "\n");
_uniq_var_579;
var libs = _uniq_var_579;
libs;
libs;
var _uniq_var_580 = flatten(expr, (function () {var _uniq_var_1074 = function (i) {;
};_uniq_var_1074.__lix_func__ = true;return _uniq_var_1074;})(), (function () {var _uniq_var_1075 = function (i) {return i;
};_uniq_var_1075.__lix_func__ = true;return _uniq_var_1075;})());
_uniq_var_580;
var flattenedExpr = _uniq_var_580;
flattenedExpr;
flattenedExpr;
var _uniq_var_581 = call(env_new);
_uniq_var_581;
var _uniq_var_582 = generateStart(flattenedExpr, _uniq_var_581, ctx0, def0);
_uniq_var_582;
var code = _uniq_var_582;
code;
code;
var _uniq_var_583 = join([libs, "\n", code]);
_uniq_var_583;
return _uniq_var_583;
};_uniq_var_1076.__lix_func__ = true;return _uniq_var_1076;})();
compile;
compile;
(exports.compile = compile);
compile;

