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
var join = (function () {var _uniq_var_607 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_606 = function (_uniq_var_604, _uniq_var_605) {
if (typeof _uniq_var_604.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_604.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_604.join.apply(_uniq_var_604, arguments);
} else if (_uniq_var_604.join !== undefined) {
if (_uniq_var_605 === undefined) {
return _uniq_var_604.join;
}
_uniq_var_604.join = _uniq_var_605;
}return _uniq_var_604;
};_uniq_var_606.__lix_func__ = true;return _uniq_var_606;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_607.__lix_func__ = true;return _uniq_var_607;})();
join;
join;
var map = (function () {var _uniq_var_612 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_611 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_610 = function (_uniq_var_608, _uniq_var_609) {
if (typeof _uniq_var_608.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_608.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_608.push.apply(_uniq_var_608, arguments);
} else if (_uniq_var_608.push !== undefined) {
if (_uniq_var_609 === undefined) {
return _uniq_var_608.push;
}
_uniq_var_608.push = _uniq_var_609;
}return _uniq_var_608;
};_uniq_var_610.__lix_func__ = true;return _uniq_var_610;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_611.__lix_func__ = true;return _uniq_var_611;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_612.__lix_func__ = true;return _uniq_var_612;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_614 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_613 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_613.__lix_func__ = true;return _uniq_var_613;})();
};_uniq_var_614.__lix_func__ = true;return _uniq_var_614;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_615 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_615.__lix_func__ = true;return _uniq_var_615;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_620 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_616 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_616.__lix_func__ = true;return _uniq_var_616;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_619 = function (_uniq_var_617, _uniq_var_618) {
if (typeof _uniq_var_617.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_617.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_617.join.apply(_uniq_var_617, arguments);
} else if (_uniq_var_617.join !== undefined) {
if (_uniq_var_618 === undefined) {
return _uniq_var_617.join;
}
_uniq_var_617.join = _uniq_var_618;
}return _uniq_var_617;
};_uniq_var_619.__lix_func__ = true;return _uniq_var_619;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_620.__lix_func__ = true;return _uniq_var_620;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_621 = function (x) {return x;
};_uniq_var_621.__lix_func__ = true;return _uniq_var_621;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_631 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_623 = function (current) {return (function () {var _uniq_var_622 = function (v, loop) {var next = current;
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
};_uniq_var_622.__lix_func__ = true;return _uniq_var_622;})();
};_uniq_var_623.__lix_func__ = true;return _uniq_var_623;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_627 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_27 = (function () {var _uniq_var_626 = function (_uniq_var_624, _uniq_var_625) {
if (typeof _uniq_var_624.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_624.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_624.push.apply(_uniq_var_624, arguments);
} else if (_uniq_var_624.push !== undefined) {
if (_uniq_var_625 === undefined) {
return _uniq_var_624.push;
}
_uniq_var_624.push = _uniq_var_625;
}return _uniq_var_624;
};_uniq_var_626.__lix_func__ = true;return _uniq_var_626;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_627.__lix_func__ = true;return _uniq_var_627;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_630 = function (_uniq_var_628, _uniq_var_629) {
if (typeof _uniq_var_628.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_628.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_628.join.apply(_uniq_var_628, arguments);
} else if (_uniq_var_628.join !== undefined) {
if (_uniq_var_629 === undefined) {
return _uniq_var_628.join;
}
_uniq_var_628.join = _uniq_var_629;
}return _uniq_var_628;
};_uniq_var_630.__lix_func__ = true;return _uniq_var_630;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_631.__lix_func__ = true;return _uniq_var_631;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_632 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_632.__lix_func__ = true;return _uniq_var_632;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_633 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_633.__lix_func__ = true;return _uniq_var_633;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_638 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_634 = function (i) {var _uniq_var_38 = true;
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
};_uniq_var_634.__lix_func__ = true;return _uniq_var_634;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_637 = function (_uniq_var_635, _uniq_var_636) {
if (typeof _uniq_var_635.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_635.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_635.join.apply(_uniq_var_635, arguments);
} else if (_uniq_var_635.join !== undefined) {
if (_uniq_var_636 === undefined) {
return _uniq_var_635.join;
}
_uniq_var_635.join = _uniq_var_636;
}return _uniq_var_635;
};_uniq_var_637.__lix_func__ = true;return _uniq_var_637;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_638.__lix_func__ = true;return _uniq_var_638;})();
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
var generateAtomic = (function () {var _uniq_var_639 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_639.__lix_func__ = true;return _uniq_var_639;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_640 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
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
};_uniq_var_640.__lix_func__ = true;return _uniq_var_640;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_641 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_641.__lix_func__ = true;return _uniq_var_641;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_646 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_642 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_642.__lix_func__ = true;return _uniq_var_642;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_645 = function (_uniq_var_643, _uniq_var_644) {
if (typeof _uniq_var_643.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_643.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_643.join.apply(_uniq_var_643, arguments);
} else if (_uniq_var_643.join !== undefined) {
if (_uniq_var_644 === undefined) {
return _uniq_var_643.join;
}
_uniq_var_643.join = _uniq_var_644;
}return _uniq_var_643;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_646.__lix_func__ = true;return _uniq_var_646;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_647 = function (name) {var _uniq_var_73 = true;
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
};_uniq_var_647.__lix_func__ = true;return _uniq_var_647;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_648 = function (expr) {var _uniq_var_85 = true;
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
};_uniq_var_648.__lix_func__ = true;return _uniq_var_648;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_649 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
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
};_uniq_var_649.__lix_func__ = true;return _uniq_var_649;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_650 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
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
};_uniq_var_650.__lix_func__ = true;return _uniq_var_650;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_655 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_651 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_651.__lix_func__ = true;return _uniq_var_651;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_654 = function (_uniq_var_652, _uniq_var_653) {
if (typeof _uniq_var_652.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_652.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_652.join.apply(_uniq_var_652, arguments);
} else if (_uniq_var_652.join !== undefined) {
if (_uniq_var_653 === undefined) {
return _uniq_var_652.join;
}
_uniq_var_652.join = _uniq_var_653;
}return _uniq_var_652;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_655.__lix_func__ = true;return _uniq_var_655;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_656 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
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
};_uniq_var_656.__lix_func__ = true;return _uniq_var_656;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_657 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_657.__lix_func__ = true;return _uniq_var_657;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_658 = function (expr, env, ctx) {return 'break';
};_uniq_var_658.__lix_func__ = true;return _uniq_var_658;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_659 = function (expr, env, ctx, def) {return "";
};_uniq_var_659.__lix_func__ = true;return _uniq_var_659;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_660 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
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
};_uniq_var_660.__lix_func__ = true;return _uniq_var_660;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_661 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})();
generateAsterisk;
generateAsterisk;
var generateAmpersand = (function () {var _uniq_var_665 = function (expr, env, ctx, def) {var _uniq_var_126 = true;
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
var _uniq_var_137 = (function () {var _uniq_var_664 = function (_uniq_var_662, _uniq_var_663) {
if (typeof _uniq_var_662.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_662.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_662.join.apply(_uniq_var_662, arguments);
} else if (_uniq_var_662.join !== undefined) {
if (_uniq_var_663 === undefined) {
return _uniq_var_662.join;
}
_uniq_var_662.join = _uniq_var_663;
}return _uniq_var_662;
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_666 = function (expr, env, ctx, def) {var _uniq_var_138 = getVarName(expr[0]);
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
};_uniq_var_666.__lix_func__ = true;return _uniq_var_666;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_673 = function (expr, env, ctx, def) {var _uniq_var_151 = true;
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
var _uniq_var_160 = (function () {var _uniq_var_669 = function (_uniq_var_667, _uniq_var_668) {
if (typeof _uniq_var_667.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_667.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_667.join.apply(_uniq_var_667, arguments);
} else if (_uniq_var_667.join !== undefined) {
if (_uniq_var_668 === undefined) {
return _uniq_var_667.join;
}
_uniq_var_667.join = _uniq_var_668;
}return _uniq_var_667;
};_uniq_var_669.__lix_func__ = true;return _uniq_var_669;})()(expr[3], ";\n");
_uniq_var_160;
var _uniq_var_161 = call(def.defineVar);
_uniq_var_161;
var _uniq_var_162 = call(def.appendExpr);
_uniq_var_162;
var _uniq_var_163 = call(def.definedFns);
_uniq_var_163;
var _uniq_var_164 = (function () {var _uniq_var_672 = function (_uniq_var_670, _uniq_var_671) {
if (typeof _uniq_var_670.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_670.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_670.join.apply(_uniq_var_670, arguments);
} else if (_uniq_var_670.join !== undefined) {
if (_uniq_var_671 === undefined) {
return _uniq_var_670.join;
}
_uniq_var_670.join = _uniq_var_671;
}return _uniq_var_670;
};_uniq_var_672.__lix_func__ = true;return _uniq_var_672;})()(['(function (', args, ') {\n', 'var ', _uniq_var_159, ' = arguments;\n', _uniq_var_160, ";\n", _uniq_var_161, ";\n", _uniq_var_162, _uniq_var_163, 'return ', body, ";\n", '})'], '');
_uniq_var_164;
return _uniq_var_164;
};_uniq_var_673.__lix_func__ = true;return _uniq_var_673;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_680 = function (expr0, env, ctx, prevDef) {var _uniq_var_165 = call(getUniqVarName);
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
var _uniq_var_175 = (function () {var _uniq_var_676 = function (_uniq_var_674, _uniq_var_675) {
if (typeof _uniq_var_674.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_674.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_674.join.apply(_uniq_var_674, arguments);
} else if (_uniq_var_674.join !== undefined) {
if (_uniq_var_675 === undefined) {
return _uniq_var_674.join;
}
_uniq_var_674.join = _uniq_var_675;
}return _uniq_var_674;
};_uniq_var_676.__lix_func__ = true;return _uniq_var_676;})()(expr[3], ";\n");
_uniq_var_175;
var _uniq_var_176 = call(def.defineVar);
_uniq_var_176;
var _uniq_var_177 = call(def.appendExpr);
_uniq_var_177;
var _uniq_var_178 = call(def.definedFns);
_uniq_var_178;
var _uniq_var_179 = (function () {var _uniq_var_679 = function (_uniq_var_677, _uniq_var_678) {
if (typeof _uniq_var_677.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_677.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_677.join.apply(_uniq_var_677, arguments);
} else if (_uniq_var_677.join !== undefined) {
if (_uniq_var_678 === undefined) {
return _uniq_var_677.join;
}
_uniq_var_677.join = _uniq_var_678;
}return _uniq_var_677;
};_uniq_var_679.__lix_func__ = true;return _uniq_var_679;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_174, ' = arguments;\n', _uniq_var_175, ";\n", _uniq_var_176, ";\n", _uniq_var_177, ";\n", _uniq_var_178, ";\n", 'return ', body, ";\n", '}'], '');
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
};_uniq_var_680.__lix_func__ = true;return _uniq_var_680;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_682 = function (expr, env, ctx, def) {var _uniq_var_183 = generate(expr[1], env, ctx0, def);
_uniq_var_183;
var func = _uniq_var_183;
func;
func;
var _uniq_var_184 = generate(expr[0], env, ctx0, def);
_uniq_var_184;
var args = _uniq_var_184;
args;
args;
var _uniq_var_190 = foreach(expr, (function () {var _uniq_var_681 = function (item, index) {var _uniq_var_185 = true;
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
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})());
_uniq_var_190;
_uniq_var_190;
var _uniq_var_191 = join([func, '(', args, ')']);
_uniq_var_191;
var _uniq_var_192 = ctx(_uniq_var_191);
_uniq_var_192;
return _uniq_var_192;
};_uniq_var_682.__lix_func__ = true;return _uniq_var_682;})();
generateExpr;
generateExpr;
var fnArgsTempVarDefine = (function () {var _uniq_var_698 = function () {var vars = [];
vars;
vars;
return {
newVar: (function () {var _uniq_var_689 = function () {var _uniq_var_193 = call(getUniqVarName);
_uniq_var_193;
var _uniq_var_194 = (function () {var _uniq_var_685 = function (_uniq_var_683, _uniq_var_684) {
if (typeof _uniq_var_683.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_683.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_683.join.apply(_uniq_var_683, arguments);
} else if (_uniq_var_683.join !== undefined) {
if (_uniq_var_684 === undefined) {
return _uniq_var_683.join;
}
_uniq_var_683.join = _uniq_var_684;
}return _uniq_var_683;
};_uniq_var_685.__lix_func__ = true;return _uniq_var_685;})()(['_at', _uniq_var_193], "");
_uniq_var_194;
var ret = _uniq_var_194;
ret;
ret;
var _uniq_var_195 = (function () {var _uniq_var_688 = function (_uniq_var_686, _uniq_var_687) {
if (typeof _uniq_var_686.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_686.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_686.push.apply(_uniq_var_686, arguments);
} else if (_uniq_var_686.push !== undefined) {
if (_uniq_var_687 === undefined) {
return _uniq_var_686.push;
}
_uniq_var_686.push = _uniq_var_687;
}return _uniq_var_686;
};_uniq_var_688.__lix_func__ = true;return _uniq_var_688;})()(vars, ret);
_uniq_var_195;
_uniq_var_195;
return ret;
};_uniq_var_689.__lix_func__ = true;return _uniq_var_689;})(),
vars: (function () {var _uniq_var_690 = function () {return vars;
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})(),
varToStr: (function () {var _uniq_var_697 = function () {var ret = null;
ret;
ret;
var _uniq_var_196 = true;
_uniq_var_196;
var _uniq_var_197 = null;
_uniq_var_197;
if ((_uniq_var_196 && vars.length)) {
(_uniq_var_196 = false);
var _uniq_var_198 = (function () {var _uniq_var_693 = function (_uniq_var_691, _uniq_var_692) {
if (typeof _uniq_var_691.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_691.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_691.join.apply(_uniq_var_691, arguments);
} else if (_uniq_var_691.join !== undefined) {
if (_uniq_var_692 === undefined) {
return _uniq_var_691.join;
}
_uniq_var_691.join = _uniq_var_692;
}return _uniq_var_691;
};_uniq_var_693.__lix_func__ = true;return _uniq_var_693;})()(vars, ", ");
_uniq_var_198;
var _uniq_var_199 = (function () {var _uniq_var_696 = function (_uniq_var_694, _uniq_var_695) {
if (typeof _uniq_var_694.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_694.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_694.join.apply(_uniq_var_694, arguments);
} else if (_uniq_var_694.join !== undefined) {
if (_uniq_var_695 === undefined) {
return _uniq_var_694.join;
}
_uniq_var_694.join = _uniq_var_695;
}return _uniq_var_694;
};_uniq_var_696.__lix_func__ = true;return _uniq_var_696;})()(['var ', _uniq_var_198, ";\n"], "");
_uniq_var_199;
(_uniq_var_197 = (ret = _uniq_var_199));

};
_uniq_var_197;
return ret;
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})()
};
};_uniq_var_698.__lix_func__ = true;return _uniq_var_698;})();
fnArgsTempVarDefine;
fnArgsTempVarDefine;
var predefineFn = (function () {var _uniq_var_725 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_705 = function (n) {var ret = [];
ret;
ret;
var i = 0;
i;
i;
var _uniq_var_200 = __lt__(i, n);
_uniq_var_200;
while (_uniq_var_200) {
var _uniq_var_201 = __add__(prefix, i);
_uniq_var_201;
var _uniq_var_202 = (function () {var _uniq_var_701 = function (_uniq_var_699, _uniq_var_700) {
if (typeof _uniq_var_699.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_699.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_699.push.apply(_uniq_var_699, arguments);
} else if (_uniq_var_699.push !== undefined) {
if (_uniq_var_700 === undefined) {
return _uniq_var_699.push;
}
_uniq_var_699.push = _uniq_var_700;
}return _uniq_var_699;
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})()(ret, _uniq_var_201);
_uniq_var_202;
_uniq_var_202;
var _uniq_var_203 = __add__(i, 1);
_uniq_var_203;
(i = _uniq_var_203);
var _uniq_var_200 = __lt__(i, n);
_uniq_var_200;
}
null;
var _uniq_var_204 = (function () {var _uniq_var_704 = function (_uniq_var_702, _uniq_var_703) {
if (typeof _uniq_var_702.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_702.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_702.join.apply(_uniq_var_702, arguments);
} else if (_uniq_var_702.join !== undefined) {
if (_uniq_var_703 === undefined) {
return _uniq_var_702.join;
}
_uniq_var_702.join = _uniq_var_703;
}return _uniq_var_702;
};_uniq_var_704.__lix_func__ = true;return _uniq_var_704;})()(ret, ", ");
_uniq_var_204;
return _uniq_var_204;
};_uniq_var_705.__lix_func__ = true;return _uniq_var_705;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_221 = foreach(candidates, (function () {var _uniq_var_718 = function (item) {var _uniq_var_205 = true;
_uniq_var_205;
var _uniq_var_206 = null;
_uniq_var_206;
var _uniq_var_207 = __gt__(item.narg, max_narg);
_uniq_var_207;
if ((_uniq_var_205 && _uniq_var_207)) {
(_uniq_var_205 = false);
(_uniq_var_206 = (max_narg = item.narg));

};
_uniq_var_206;
var _uniq_var_208 = call(fnArgsTempVarDefine);
_uniq_var_208;
var def = _uniq_var_208;
def;
def;
var _uniq_var_209 = flattenArgumentsCondition(item.condition, def);
_uniq_var_209;
var condition = _uniq_var_209;
condition;
condition;
var _uniq_var_210 = call(getArgListString, item.narg);
_uniq_var_210;
var _uniq_var_211 = (function () {var _uniq_var_708 = function (_uniq_var_706, _uniq_var_707) {
if (typeof _uniq_var_706.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_706.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_706.join.apply(_uniq_var_706, arguments);
} else if (_uniq_var_706.join !== undefined) {
if (_uniq_var_707 === undefined) {
return _uniq_var_706.join;
}
_uniq_var_706.join = _uniq_var_707;
}return _uniq_var_706;
};_uniq_var_708.__lix_func__ = true;return _uniq_var_708;})()(["return ", item.func, "(", _uniq_var_210, ");\n"], "");
_uniq_var_211;
var stmt = _uniq_var_211;
stmt;
stmt;
var _uniq_var_212 = true;
_uniq_var_212;
var _uniq_var_213 = null;
_uniq_var_213;
var _uniq_var_215 = __eq__(item.condition[1], "{va_args}");
_uniq_var_215;
if ((_uniq_var_212 && _uniq_var_215)) {
(_uniq_var_212 = false);
var _uniq_var_214 = (function () {var _uniq_var_711 = function (_uniq_var_709, _uniq_var_710) {
if (typeof _uniq_var_709.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_709.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_709.join.apply(_uniq_var_709, arguments);
} else if (_uniq_var_709.join !== undefined) {
if (_uniq_var_710 === undefined) {
return _uniq_var_709.join;
}
_uniq_var_709.join = _uniq_var_710;
}return _uniq_var_709;
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
_uniq_var_214;
var stmt = _uniq_var_214;
stmt;
(_uniq_var_213 = stmt);

};
_uniq_var_213;
var _uniq_var_216 = true;
_uniq_var_216;
var _uniq_var_217 = null;
_uniq_var_217;
if ((_uniq_var_216 && condition)) {
(_uniq_var_216 = false);
var _uniq_var_218 = call(def.varToStr);
_uniq_var_218;
var _uniq_var_219 = (function () {var _uniq_var_714 = function (_uniq_var_712, _uniq_var_713) {
if (typeof _uniq_var_712.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_712.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_712.join.apply(_uniq_var_712, arguments);
} else if (_uniq_var_712.join !== undefined) {
if (_uniq_var_713 === undefined) {
return _uniq_var_712.join;
}
_uniq_var_712.join = _uniq_var_713;
}return _uniq_var_712;
};_uniq_var_714.__lix_func__ = true;return _uniq_var_714;})()([_uniq_var_218, "if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_219;
(_uniq_var_217 = (stmt = _uniq_var_219));

};
_uniq_var_217;
var _uniq_var_220 = (function () {var _uniq_var_717 = function (_uniq_var_715, _uniq_var_716) {
if (typeof _uniq_var_715.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_715.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_715.push.apply(_uniq_var_715, arguments);
} else if (_uniq_var_715.push !== undefined) {
if (_uniq_var_716 === undefined) {
return _uniq_var_715.push;
}
_uniq_var_715.push = _uniq_var_716;
}return _uniq_var_715;
};_uniq_var_717.__lix_func__ = true;return _uniq_var_717;})()(body, stmt);
_uniq_var_220;
return _uniq_var_220;
};_uniq_var_718.__lix_func__ = true;return _uniq_var_718;})());
_uniq_var_221;
_uniq_var_221;
var _uniq_var_222 = (function () {var _uniq_var_721 = function (_uniq_var_719, _uniq_var_720) {
if (typeof _uniq_var_719.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_719.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_719.join.apply(_uniq_var_719, arguments);
} else if (_uniq_var_719.join !== undefined) {
if (_uniq_var_720 === undefined) {
return _uniq_var_719.join;
}
_uniq_var_719.join = _uniq_var_720;
}return _uniq_var_719;
};_uniq_var_721.__lix_func__ = true;return _uniq_var_721;})()(body, "");
_uniq_var_222;
(body = _uniq_var_222);
var _uniq_var_223 = call(getArgListString, max_narg);
_uniq_var_223;
var _uniq_var_224 = (function () {var _uniq_var_724 = function (_uniq_var_722, _uniq_var_723) {
if (typeof _uniq_var_722.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_722.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_722.join.apply(_uniq_var_722, arguments);
} else if (_uniq_var_722.join !== undefined) {
if (_uniq_var_723 === undefined) {
return _uniq_var_722.join;
}
_uniq_var_722.join = _uniq_var_723;
}return _uniq_var_722;
};_uniq_var_724.__lix_func__ = true;return _uniq_var_724;})()(["function ", name, "(", _uniq_var_223, ") {\n", body, "}\n"], "");
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_725.__lix_func__ = true;return _uniq_var_725;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_755 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_726 = function (d) {return (destructed = d);
};_uniq_var_726.__lix_func__ = true;return _uniq_var_726;})(),
desctructedVars: (function () {var _uniq_var_730 = function () {var _uniq_var_225 = (function () {var _uniq_var_729 = function (_uniq_var_727, _uniq_var_728) {
if (typeof _uniq_var_727.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_727.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_727.join.apply(_uniq_var_727, arguments);
} else if (_uniq_var_727.join !== undefined) {
if (_uniq_var_728 === undefined) {
return _uniq_var_727.join;
}
_uniq_var_727.join = _uniq_var_728;
}return _uniq_var_727;
};_uniq_var_729.__lix_func__ = true;return _uniq_var_729;})()(destructed, ";\n");
_uniq_var_225;
return _uniq_var_225;
};_uniq_var_730.__lix_func__ = true;return _uniq_var_730;})(),
defineFn: (function () {var _uniq_var_734 = function (name, func, condition, narg) {var _uniq_var_226 = true;
_uniq_var_226;
var _uniq_var_227 = null;
_uniq_var_227;
var _uniq_var_228 = __eq__(fns[name], undefined);
_uniq_var_228;
if ((_uniq_var_226 && _uniq_var_228)) {
(_uniq_var_226 = false);
(_uniq_var_227 = (fns[name] = []));

};
_uniq_var_227;
var _uniq_var_229 = (function () {var _uniq_var_733 = function (_uniq_var_731, _uniq_var_732) {
if (typeof _uniq_var_731.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_731.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_731.push.apply(_uniq_var_731, arguments);
} else if (_uniq_var_731.push !== undefined) {
if (_uniq_var_732 === undefined) {
return _uniq_var_731.push;
}
_uniq_var_731.push = _uniq_var_732;
}return _uniq_var_731;
};_uniq_var_733.__lix_func__ = true;return _uniq_var_733;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_229;
return _uniq_var_229;
};_uniq_var_734.__lix_func__ = true;return _uniq_var_734;})(),
definedFns: (function () {var _uniq_var_742 = function () {var ret = [];
ret;
ret;
var _uniq_var_232 = foreach(fns, (function () {var _uniq_var_738 = function (item, name) {var _uniq_var_230 = predefineFn(name, item);
_uniq_var_230;
var _uniq_var_231 = (function () {var _uniq_var_737 = function (_uniq_var_735, _uniq_var_736) {
if (typeof _uniq_var_735.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_735.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_735.push.apply(_uniq_var_735, arguments);
} else if (_uniq_var_735.push !== undefined) {
if (_uniq_var_736 === undefined) {
return _uniq_var_735.push;
}
_uniq_var_735.push = _uniq_var_736;
}return _uniq_var_735;
};_uniq_var_737.__lix_func__ = true;return _uniq_var_737;})()(ret, _uniq_var_230);
_uniq_var_231;
return _uniq_var_231;
};_uniq_var_738.__lix_func__ = true;return _uniq_var_738;})());
_uniq_var_232;
_uniq_var_232;
var _uniq_var_233 = (function () {var _uniq_var_741 = function (_uniq_var_739, _uniq_var_740) {
if (typeof _uniq_var_739.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_739.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_739.join.apply(_uniq_var_739, arguments);
} else if (_uniq_var_739.join !== undefined) {
if (_uniq_var_740 === undefined) {
return _uniq_var_739.join;
}
_uniq_var_739.join = _uniq_var_740;
}return _uniq_var_739;
};_uniq_var_741.__lix_func__ = true;return _uniq_var_741;})()(ret, "\n");
_uniq_var_233;
return _uniq_var_233;
};_uniq_var_742.__lix_func__ = true;return _uniq_var_742;})(),
defineVar: (function () {var _uniq_var_747 = function (v) {var _uniq_var_234 = true;
_uniq_var_234;
var _uniq_var_235 = null;
_uniq_var_235;
if ((_uniq_var_234 && v)) {
(_uniq_var_234 = false);
(_uniq_var_235 = (vars[v] = v));

};
if (_uniq_var_234) {
var _uniq_var_236 = map(vars, (function () {var _uniq_var_743 = function (i) {return i;
};_uniq_var_743.__lix_func__ = true;return _uniq_var_743;})());
_uniq_var_236;
var vecs = _uniq_var_236;
vecs;
vecs;
var _uniq_var_237 = true;
_uniq_var_237;
var _uniq_var_238 = null;
_uniq_var_238;
var _uniq_var_241 = __gt__(vecs.length, 0);
_uniq_var_241;
if ((_uniq_var_237 && _uniq_var_241)) {
(_uniq_var_237 = false);
var _uniq_var_239 = (function () {var _uniq_var_746 = function (_uniq_var_744, _uniq_var_745) {
if (typeof _uniq_var_744.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_744.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_744.join.apply(_uniq_var_744, arguments);
} else if (_uniq_var_744.join !== undefined) {
if (_uniq_var_745 === undefined) {
return _uniq_var_744.join;
}
_uniq_var_744.join = _uniq_var_745;
}return _uniq_var_744;
};_uniq_var_746.__lix_func__ = true;return _uniq_var_746;})()(vecs, ', ');
_uniq_var_239;
var _uniq_var_240 = __add__('var ', _uniq_var_239);
_uniq_var_240;
(_uniq_var_238 = _uniq_var_240);

};
if (_uniq_var_237) {
(_uniq_var_238 = '');

};
(_uniq_var_235 = _uniq_var_238);

};
return _uniq_var_235;
};_uniq_var_747.__lix_func__ = true;return _uniq_var_747;})(),
appendExpr: (function () {var _uniq_var_754 = function (v) {var _uniq_var_242 = true;
_uniq_var_242;
var _uniq_var_243 = null;
_uniq_var_243;
if ((_uniq_var_242 && v)) {
(_uniq_var_242 = false);
var _uniq_var_244 = (function () {var _uniq_var_750 = function (_uniq_var_748, _uniq_var_749) {
if (typeof _uniq_var_748.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_748.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_748.push.apply(_uniq_var_748, arguments);
} else if (_uniq_var_748.push !== undefined) {
if (_uniq_var_749 === undefined) {
return _uniq_var_748.push;
}
_uniq_var_748.push = _uniq_var_749;
}return _uniq_var_748;
};_uniq_var_750.__lix_func__ = true;return _uniq_var_750;})()(funcs, v);
_uniq_var_244;
(_uniq_var_243 = _uniq_var_244);

};
if (_uniq_var_242) {
var _uniq_var_245 = (function () {var _uniq_var_753 = function (_uniq_var_751, _uniq_var_752) {
if (typeof _uniq_var_751.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_751.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_751.join.apply(_uniq_var_751, arguments);
} else if (_uniq_var_751.join !== undefined) {
if (_uniq_var_752 === undefined) {
return _uniq_var_751.join;
}
_uniq_var_751.join = _uniq_var_752;
}return _uniq_var_751;
};_uniq_var_753.__lix_func__ = true;return _uniq_var_753;})()(funcs, ';\n');
_uniq_var_245;
(_uniq_var_243 = _uniq_var_245);

};
return _uniq_var_243;
};_uniq_var_754.__lix_func__ = true;return _uniq_var_754;})()
};
};_uniq_var_755.__lix_func__ = true;return _uniq_var_755;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_756 = function (expr, env, ctx, def) {var _uniq_var_246 = call(GenerateDefNew);
_uniq_var_246;
var def = _uniq_var_246;
def;
def;
var _uniq_var_247 = generate(expr[0], env, ctx, def);
_uniq_var_247;
var body = _uniq_var_247;
body;
body;
var _uniq_var_248 = join(['module.exports = ', body, '\n']);
_uniq_var_248;
var body = _uniq_var_248;
body;
body;
var _uniq_var_249 = call(def.defineVar);
_uniq_var_249;
var _uniq_var_250 = call(def.appendExpr);
_uniq_var_250;
var _uniq_var_251 = call(def.definedFns);
_uniq_var_251;
var _uniq_var_252 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_249, ";\n", _uniq_var_250, ";\n", _uniq_var_251, ";\n", body]);
_uniq_var_252;
return _uniq_var_252;
};_uniq_var_756.__lix_func__ = true;return _uniq_var_756;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_757 = function (expr, env, ctx, def) {var _uniq_var_253 = generate(expr[0], env, ctx, def);
_uniq_var_253;
return _uniq_var_253;
};_uniq_var_757.__lix_func__ = true;return _uniq_var_757;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_758 = function (expr, env, ctx, def) {var _uniq_var_254 = join(['"', expr[0], '"']);
_uniq_var_254;
return _uniq_var_254;
};_uniq_var_758.__lix_func__ = true;return _uniq_var_758;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_759 = function (expr, env, ctx, def) {var _uniq_var_255 = generate(expr[0], env, ctx, def);
_uniq_var_255;
var _uniq_var_256 = join(['("', expr[2], '" + ', _uniq_var_255, ')']);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_759.__lix_func__ = true;return _uniq_var_759;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_764 = function (expr, env, ctx, def) {var _uniq_var_258 = map(expr[0], (function () {var _uniq_var_760 = function (i) {var _uniq_var_257 = generate(i, env, ctx, def);
_uniq_var_257;
return _uniq_var_257;
};_uniq_var_760.__lix_func__ = true;return _uniq_var_760;})());
_uniq_var_258;
var _uniq_var_259 = (function () {var _uniq_var_763 = function (_uniq_var_761, _uniq_var_762) {
if (typeof _uniq_var_761.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_761.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_761.join.apply(_uniq_var_761, arguments);
} else if (_uniq_var_761.join !== undefined) {
if (_uniq_var_762 === undefined) {
return _uniq_var_761.join;
}
_uniq_var_761.join = _uniq_var_762;
}return _uniq_var_761;
};_uniq_var_763.__lix_func__ = true;return _uniq_var_763;})()(_uniq_var_258, ',');
_uniq_var_259;
var path = _uniq_var_259;
path;
path;
var _uniq_var_260 = join(['[', path, '].join("/")']);
_uniq_var_260;
return _uniq_var_260;
};_uniq_var_764.__lix_func__ = true;return _uniq_var_764;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_768 = function (expr, env, ctx, def) {var _uniq_var_261 = (function () {var _uniq_var_767 = function (_uniq_var_765, _uniq_var_766) {
if (typeof _uniq_var_765.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_765.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_765.join.apply(_uniq_var_765, arguments);
} else if (_uniq_var_765.join !== undefined) {
if (_uniq_var_766 === undefined) {
return _uniq_var_765.join;
}
_uniq_var_765.join = _uniq_var_766;
}return _uniq_var_765;
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})()(['"', expr[0], '"'], '');
_uniq_var_261;
var name = [_uniq_var_261, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_768.__lix_func__ = true;return _uniq_var_768;})();
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
var generateOp = (function () {var _uniq_var_769 = function (hint) {var _uniq_var_262 = true;
_uniq_var_262;
var _uniq_var_263 = null;
_uniq_var_263;
if ((_uniq_var_262 && generateOpTable[hint])) {
(_uniq_var_262 = false);
(_uniq_var_263 = generateOpTable[hint]);

};
if (_uniq_var_262) {
(_uniq_var_263 = generateExpr);

};
return _uniq_var_263;
};_uniq_var_769.__lix_func__ = true;return _uniq_var_769;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_770 = function (expr, env, ctx, def) {var _uniq_var_264 = generateOp(expr[1]);
_uniq_var_264;
var _uniq_var_265 = _uniq_var_264(expr, env, ctx, def);
_uniq_var_265;
return _uniq_var_265;
};_uniq_var_770.__lix_func__ = true;return _uniq_var_770;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_772 = function (env) {var _uniq_var_266 = env;
_uniq_var_266;
if (not(_uniq_var_266)) {
(_uniq_var_266 = env0);

};
(env = _uniq_var_266);
var Env = (function () {var _uniq_var_771 = function () {;
};_uniq_var_771.__lix_func__ = true;return _uniq_var_771;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_267 = _instance_(Env);
_uniq_var_267;
return _uniq_var_267;
};_uniq_var_772.__lix_func__ = true;return _uniq_var_772;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_774 = function (expr, define) {var _uniq_var_269 = map(expr, (function () {var _uniq_var_773 = function (item) {var _uniq_var_268 = flatten(item, define);
_uniq_var_268;
return _uniq_var_268;
};_uniq_var_773.__lix_func__ = true;return _uniq_var_773;})());
_uniq_var_269;
var _uniq_var_270 = define(_uniq_var_269);
_uniq_var_270;
return _uniq_var_270;
};_uniq_var_774.__lix_func__ = true;return _uniq_var_774;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_775 = function (expr, define) {return expr;
};_uniq_var_775.__lix_func__ = true;return _uniq_var_775;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_780 = function (expr, define) {var _uniq_var_271 = call(statementFlattenGenerator);
_uniq_var_271;
var whileDefine = _uniq_var_271;
whileDefine;
whileDefine;
var _uniq_var_272 = flatten(expr[0], whileDefine);
_uniq_var_272;
(expr[0] = _uniq_var_272);
var _uniq_var_273 = flatten(expr[2], define0);
_uniq_var_273;
(expr[2] = _uniq_var_273);
var _uniq_var_274 = call(whileDefine);
_uniq_var_274;
var _uniq_var_275 = (function () {var _uniq_var_778 = function (_uniq_var_776, _uniq_var_777) {
if (typeof _uniq_var_776.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_776.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_776.concat.apply(_uniq_var_776, arguments);
} else if (_uniq_var_776.concat !== undefined) {
if (_uniq_var_777 === undefined) {
return _uniq_var_776.concat;
}
_uniq_var_776.concat = _uniq_var_777;
}return _uniq_var_776;
};_uniq_var_778.__lix_func__ = true;return _uniq_var_778;})()(expr[2][0], _uniq_var_274);
_uniq_var_275;
(expr[2][0] = _uniq_var_275);
var _uniq_var_276 = call(whileDefine);
_uniq_var_276;
var _uniq_var_278 = foreach(_uniq_var_276, (function () {var _uniq_var_779 = function (i) {var _uniq_var_277 = define(i, true);
_uniq_var_277;
return _uniq_var_277;
};_uniq_var_779.__lix_func__ = true;return _uniq_var_779;})());
_uniq_var_278;
_uniq_var_278;
var _uniq_var_279 = define(expr, true);
_uniq_var_279;
_uniq_var_279;
return ['', '{empty}'];
};_uniq_var_780.__lix_func__ = true;return _uniq_var_780;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_785 = function (expr, define) {var _uniq_var_280 = flatten(expr[0], define);
_uniq_var_280;
var ret = _uniq_var_280;
ret;
ret;
var _uniq_var_281 = true;
_uniq_var_281;
var _uniq_var_282 = null;
_uniq_var_282;
var _uniq_var_284 = __ne__(ret[2], 'var');
_uniq_var_284;
if ((_uniq_var_281 && _uniq_var_284)) {
(_uniq_var_281 = false);
var _uniq_var_283 = define(ret);
_uniq_var_283;
var ret = _uniq_var_283;
ret;
(_uniq_var_282 = ret);

};
_uniq_var_282;
var getAndOpSeq = (function () {var _uniq_var_784 = function () {var _uniq_var_285 = call(statementFlattenGenerator);
_uniq_var_285;
var AndDefine = _uniq_var_285;
AndDefine;
AndDefine;
var _uniq_var_286 = flatten(expr[2], AndDefine);
_uniq_var_286;
var seqRet = _uniq_var_286;
seqRet;
seqRet;
var _uniq_var_287 = call(AndDefine);
_uniq_var_287;
var seq = _uniq_var_287;
seq;
seq;
var _uniq_var_288 = (function () {var _uniq_var_783 = function (_uniq_var_781, _uniq_var_782) {
if (typeof _uniq_var_781.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_781.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_781.push.apply(_uniq_var_781, arguments);
} else if (_uniq_var_781.push !== undefined) {
if (_uniq_var_782 === undefined) {
return _uniq_var_781.push;
}
_uniq_var_781.push = _uniq_var_782;
}return _uniq_var_781;
};_uniq_var_783.__lix_func__ = true;return _uniq_var_783;})()(seq, [ret, '=', seqRet]);
_uniq_var_288;
_uniq_var_288;
return [seq, '{seq}'];
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_289 = call(getAndOpSeq);
_uniq_var_289;
var _uniq_var_290 = define([[[ret, [[], '{empty}']], [_uniq_var_289, 'else']], 'if'], true);
_uniq_var_290;
_uniq_var_290;
return ret;
};_uniq_var_785.__lix_func__ = true;return _uniq_var_785;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_790 = function (expr, define) {var _uniq_var_291 = flatten(expr[0], define);
_uniq_var_291;
var ret = _uniq_var_291;
ret;
ret;
var _uniq_var_292 = true;
_uniq_var_292;
var _uniq_var_293 = null;
_uniq_var_293;
var _uniq_var_295 = __ne__(ret[2], 'var');
_uniq_var_295;
if ((_uniq_var_292 && _uniq_var_295)) {
(_uniq_var_292 = false);
var _uniq_var_294 = define(ret);
_uniq_var_294;
var ret = _uniq_var_294;
ret;
(_uniq_var_293 = ret);

};
_uniq_var_293;
var getAndOpSeq = (function () {var _uniq_var_789 = function () {var _uniq_var_296 = call(statementFlattenGenerator);
_uniq_var_296;
var AndDefine = _uniq_var_296;
AndDefine;
AndDefine;
var _uniq_var_297 = flatten(expr[2], AndDefine);
_uniq_var_297;
var seqRet = _uniq_var_297;
seqRet;
seqRet;
var _uniq_var_298 = call(AndDefine);
_uniq_var_298;
var seq = _uniq_var_298;
seq;
seq;
var _uniq_var_299 = (function () {var _uniq_var_788 = function (_uniq_var_786, _uniq_var_787) {
if (typeof _uniq_var_786.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_786.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_786.push.apply(_uniq_var_786, arguments);
} else if (_uniq_var_786.push !== undefined) {
if (_uniq_var_787 === undefined) {
return _uniq_var_786.push;
}
_uniq_var_786.push = _uniq_var_787;
}return _uniq_var_786;
};_uniq_var_788.__lix_func__ = true;return _uniq_var_788;})()(seq, [ret, '=', seqRet]);
_uniq_var_299;
_uniq_var_299;
return [seq, '{seq}'];
};_uniq_var_789.__lix_func__ = true;return _uniq_var_789;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_300 = call(getAndOpSeq);
_uniq_var_300;
var _uniq_var_301 = define([[[ret, _uniq_var_300]], 'if'], true);
_uniq_var_301;
_uniq_var_301;
return ret;
};_uniq_var_790.__lix_func__ = true;return _uniq_var_790;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_795 = function (expr, define, tmpVar, ctx) {var _uniq_var_314 = foreach(expr[0], (function () {var _uniq_var_794 = function (i) {var _uniq_var_302 = true;
_uniq_var_302;
var _uniq_var_303 = null;
_uniq_var_303;
var _uniq_var_306 = __eq__(i[1], 'else');
_uniq_var_306;
if ((_uniq_var_302 && _uniq_var_306)) {
(_uniq_var_302 = false);
var _uniq_var_304 = flatten(i[0], define0, ctx);
_uniq_var_304;
var elseSeq = _uniq_var_304;
elseSeq;
elseSeq;
var _uniq_var_305 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_305;
(_uniq_var_303 = _uniq_var_305);

};
var _uniq_var_309 = __eq__(i[1], 'if');
_uniq_var_309;
if ((_uniq_var_302 && _uniq_var_309)) {
(_uniq_var_302 = false);
var _uniq_var_307 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_307;
var _uniq_var_308 = define(_uniq_var_307);
_uniq_var_308;
(_uniq_var_303 = _uniq_var_308);

};
if (_uniq_var_302) {
var _uniq_var_310 = flatten(i[1], define0, ctx);
_uniq_var_310;
var ifSeq = _uniq_var_310;
ifSeq;
ifSeq;
var _uniq_var_311 = (function () {var _uniq_var_793 = function (_uniq_var_791, _uniq_var_792) {
if (typeof _uniq_var_791.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_791.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_791.unshift.apply(_uniq_var_791, arguments);
} else if (_uniq_var_791.unshift !== undefined) {
if (_uniq_var_792 === undefined) {
return _uniq_var_791.unshift;
}
_uniq_var_791.unshift = _uniq_var_792;
}return _uniq_var_791;
};_uniq_var_793.__lix_func__ = true;return _uniq_var_793;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_311;
_uniq_var_311;
var _uniq_var_312 = flatten(i[0], define);
_uniq_var_312;
var cond = _uniq_var_312;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_313 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_313;
(_uniq_var_303 = _uniq_var_313);

};
return _uniq_var_303;
};_uniq_var_794.__lix_func__ = true;return _uniq_var_794;})());
_uniq_var_314;
return _uniq_var_314;
};_uniq_var_795.__lix_func__ = true;return _uniq_var_795;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_796 = function (expr, define) {var _uniq_var_315 = define(['true', '{atomic}'], 'new');
_uniq_var_315;
var tmpVar = _uniq_var_315;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_316 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_316;
_uniq_var_316;
return retVar;
};_uniq_var_796.__lix_func__ = true;return _uniq_var_796;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_797 = function (expr, define) {var _uniq_var_317 = flatten(expr[2], define);
_uniq_var_317;
(expr[2] = _uniq_var_317);
return expr;
};_uniq_var_797.__lix_func__ = true;return _uniq_var_797;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_801 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_318 = true;
_uniq_var_318;
var _uniq_var_319 = null;
_uniq_var_319;
var _uniq_var_323 = __gt__(expr.length, 3);
_uniq_var_323;
if ((_uniq_var_318 && _uniq_var_323)) {
(_uniq_var_318 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_320 = __lt__(i, expr.length);
_uniq_var_320;
while (_uniq_var_320) {
var _uniq_var_321 = (function () {var _uniq_var_800 = function (_uniq_var_798, _uniq_var_799) {
if (typeof _uniq_var_798.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_798.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_798.push.apply(_uniq_var_798, arguments);
} else if (_uniq_var_798.push !== undefined) {
if (_uniq_var_799 === undefined) {
return _uniq_var_798.push;
}
_uniq_var_798.push = _uniq_var_799;
}return _uniq_var_798;
};_uniq_var_800.__lix_func__ = true;return _uniq_var_800;})()(partialExpr, expr[i]);
_uniq_var_321;
_uniq_var_321;
var _uniq_var_322 = __add__(i, 1);
_uniq_var_322;
(i = _uniq_var_322);
var _uniq_var_320 = __lt__(i, expr.length);
_uniq_var_320;
}
null;
(_uniq_var_319 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_319;
var _uniq_var_324 = flattenExpr(expr, define);
_uniq_var_324;
return _uniq_var_324;
};_uniq_var_801.__lix_func__ = true;return _uniq_var_801;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_802 = function (expr, define) {var _uniq_var_325 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_325;
return _uniq_var_325;
};_uniq_var_802.__lix_func__ = true;return _uniq_var_802;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_803 = function (expr, define) {var _uniq_var_326 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_326;
return _uniq_var_326;
};_uniq_var_803.__lix_func__ = true;return _uniq_var_803;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_804 = function (expr, define) {var _uniq_var_327 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_327;
return _uniq_var_327;
};_uniq_var_804.__lix_func__ = true;return _uniq_var_804;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_805 = function (expr, define) {var _uniq_var_328 = flattenBasicOp(expr, '__rxcompose__', define);
_uniq_var_328;
return _uniq_var_328;
};_uniq_var_805.__lix_func__ = true;return _uniq_var_805;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_806 = function (expr, define) {var _uniq_var_329 = flattenBasicOp(expr, '__xcompose__', define);
_uniq_var_329;
return _uniq_var_329;
};_uniq_var_806.__lix_func__ = true;return _uniq_var_806;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_807 = function (expr, define) {var _uniq_var_330 = flatten(expr[0], define);
_uniq_var_330;
(expr[0] = _uniq_var_330);
return expr;
};_uniq_var_807.__lix_func__ = true;return _uniq_var_807;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_808 = function (expr, define) {return expr;
};_uniq_var_808.__lix_func__ = true;return _uniq_var_808;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_810 = function (expr, define) {var _uniq_var_332 = map(expr[0], (function () {var _uniq_var_809 = function (i) {var _uniq_var_331 = flatten(i, define);
_uniq_var_331;
return _uniq_var_331;
};_uniq_var_809.__lix_func__ = true;return _uniq_var_809;})());
_uniq_var_332;
(expr[0] = _uniq_var_332);
return expr;
};_uniq_var_810.__lix_func__ = true;return _uniq_var_810;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_811 = function (expr, define) {return expr;
};_uniq_var_811.__lix_func__ = true;return _uniq_var_811;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_812 = function (expr, define) {var _uniq_var_333 = true;
_uniq_var_333;
var _uniq_var_334 = null;
_uniq_var_334;
var _uniq_var_336 = __eq__(expr[1], '{index}');
_uniq_var_336;
if ((_uniq_var_333 && _uniq_var_336)) {
(_uniq_var_333 = false);
var _uniq_var_335 = flatten(expr[0], define);
_uniq_var_335;
(_uniq_var_334 = (expr[0] = _uniq_var_335));

};
_uniq_var_334;
return expr;
};_uniq_var_812.__lix_func__ = true;return _uniq_var_812;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_817 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_816 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_337 = true;
_uniq_var_337;
var _uniq_var_338 = null;
_uniq_var_338;
var _uniq_var_344 = __eq__(arguments.length, 2);
_uniq_var_344;
if ((_uniq_var_337 && _uniq_var_344)) {
(_uniq_var_337 = false);
var _uniq_var_339 = true;
_uniq_var_339;
var _uniq_var_340 = null;
_uniq_var_340;
var _uniq_var_343 = __eq__(defined[name], undefined);
_uniq_var_343;
if ((_uniq_var_339 && _uniq_var_343)) {
(_uniq_var_339 = false);
var _uniq_var_341 = call(getUniqVarName);
_uniq_var_341;
var varName = _uniq_var_341;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_342 = (function () {var _uniq_var_815 = function (_uniq_var_813, _uniq_var_814) {
if (typeof _uniq_var_813.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_813.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_813.push.apply(_uniq_var_813, arguments);
} else if (_uniq_var_813.push !== undefined) {
if (_uniq_var_814 === undefined) {
return _uniq_var_813.push;
}
_uniq_var_813.push = _uniq_var_814;
}return _uniq_var_813;
};_uniq_var_815.__lix_func__ = true;return _uniq_var_815;})()(statements, [lixVar, ':=', value]);
_uniq_var_342;
_uniq_var_342;
(_uniq_var_340 = (defined[name] = lixVar));

};
_uniq_var_340;
(_uniq_var_338 = (ret = defined[name]));

};
if (_uniq_var_337) {
(_uniq_var_338 = (ret = statements));

};
_uniq_var_338;
return ret;
};_uniq_var_816.__lix_func__ = true;return _uniq_var_816;})();
};_uniq_var_817.__lix_func__ = true;return _uniq_var_817;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_345 = call(NewGlobalDefine);
_uniq_var_345;
var globalDefine = _uniq_var_345;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_818 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_346 = true;
_uniq_var_346;
var _uniq_var_347 = null;
_uniq_var_347;
var _uniq_var_349 = __eq__(expr[0][3], '{global}');
_uniq_var_349;
if ((_uniq_var_346 && _uniq_var_349)) {
(_uniq_var_346 = false);
var _uniq_var_348 = globalDefine(expr[0][0], expr);
_uniq_var_348;
(_uniq_var_347 = (ret = _uniq_var_348));

};
if (_uniq_var_346) {
var _uniq_var_350 = flattenField(expr[0], define);
_uniq_var_350;
(expr[0] = _uniq_var_350);
(_uniq_var_347 = (ret = expr));

};
_uniq_var_347;
return ret;
};_uniq_var_818.__lix_func__ = true;return _uniq_var_818;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_819 = function (expr, define) {var _uniq_var_351 = flatten(expr[2], define);
_uniq_var_351;
(expr[2] = _uniq_var_351);
return expr;
};_uniq_var_819.__lix_func__ = true;return _uniq_var_819;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_821 = function (expr, define) {var _uniq_var_353 = map(expr[0], (function () {var _uniq_var_820 = function (i) {var _uniq_var_352 = flattenProperty(i, define);
_uniq_var_352;
return _uniq_var_352;
};_uniq_var_820.__lix_func__ = true;return _uniq_var_820;})());
_uniq_var_353;
(expr[0] = _uniq_var_353);
return expr;
};_uniq_var_821.__lix_func__ = true;return _uniq_var_821;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_823 = function (expr, define) {var _uniq_var_355 = map(expr[0], (function () {var _uniq_var_822 = function (i) {var _uniq_var_354 = flatten(i, define);
_uniq_var_354;
return _uniq_var_354;
};_uniq_var_822.__lix_func__ = true;return _uniq_var_822;})());
_uniq_var_355;
(expr[0] = _uniq_var_355);
return expr;
};_uniq_var_823.__lix_func__ = true;return _uniq_var_823;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_824 = function (expr, define) {var _uniq_var_356 = flatten(expr[2], define);
_uniq_var_356;
(expr[2] = _uniq_var_356);
return expr;
};_uniq_var_824.__lix_func__ = true;return _uniq_var_824;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_825 = function (expr, define) {var _uniq_var_357 = true;
_uniq_var_357;
var _uniq_var_358 = null;
_uniq_var_358;
var _uniq_var_361 = __eq__(expr[1], '{.}');
_uniq_var_361;
if ((_uniq_var_357 && _uniq_var_361)) {
(_uniq_var_357 = false);
var _uniq_var_359 = flattenFieldAccess(expr[0], define);
_uniq_var_359;
(expr[0] = _uniq_var_359);
var _uniq_var_360 = flattenField(expr[2], define);
_uniq_var_360;
(_uniq_var_358 = (expr[2] = _uniq_var_360));

};
if (_uniq_var_357) {
var _uniq_var_362 = flatten(expr, define);
_uniq_var_362;
(_uniq_var_358 = (expr = _uniq_var_362));

};
_uniq_var_358;
return expr;
};_uniq_var_825.__lix_func__ = true;return _uniq_var_825;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_826 = function (expr, define) {return expr;
};_uniq_var_826.__lix_func__ = true;return _uniq_var_826;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_827 = function (expr, define) {var _uniq_var_363 = flatten(expr[0], define);
_uniq_var_363;
return _uniq_var_363;
};_uniq_var_827.__lix_func__ = true;return _uniq_var_827;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_841 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_840 = function (statement, tmpVarName) {var _uniq_var_364 = true;
_uniq_var_364;
var _uniq_var_365 = null;
_uniq_var_365;
var _uniq_var_366 = __eq__(statement, undefined);
_uniq_var_366;
if ((_uniq_var_364 && _uniq_var_366)) {
(_uniq_var_364 = false);
(_uniq_var_365 = data);

};
var _uniq_var_368 = __eq__(tmpVarName, true);
_uniq_var_368;
if ((_uniq_var_364 && _uniq_var_368)) {
(_uniq_var_364 = false);
var _uniq_var_367 = (function () {var _uniq_var_830 = function (_uniq_var_828, _uniq_var_829) {
if (typeof _uniq_var_828.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_828.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_828.push.apply(_uniq_var_828, arguments);
} else if (_uniq_var_828.push !== undefined) {
if (_uniq_var_829 === undefined) {
return _uniq_var_828.push;
}
_uniq_var_828.push = _uniq_var_829;
}return _uniq_var_828;
};_uniq_var_830.__lix_func__ = true;return _uniq_var_830;})()(data, statement);
_uniq_var_367;
(_uniq_var_365 = _uniq_var_367);

};
var _uniq_var_372 = __eq__(tmpVarName, undefined);
_uniq_var_372;
if ((_uniq_var_364 && _uniq_var_372)) {
(_uniq_var_364 = false);
var _uniq_var_369 = call(getUniqVarName);
_uniq_var_369;
var varName = _uniq_var_369;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_370 = (function () {var _uniq_var_833 = function (_uniq_var_831, _uniq_var_832) {
if (typeof _uniq_var_831.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_831.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_831.push.apply(_uniq_var_831, arguments);
} else if (_uniq_var_831.push !== undefined) {
if (_uniq_var_832 === undefined) {
return _uniq_var_831.push;
}
_uniq_var_831.push = _uniq_var_832;
}return _uniq_var_831;
};_uniq_var_833.__lix_func__ = true;return _uniq_var_833;})()(data, statement);
_uniq_var_370;
_uniq_var_370;
var _uniq_var_371 = (function () {var _uniq_var_836 = function (_uniq_var_834, _uniq_var_835) {
if (typeof _uniq_var_834.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_834.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_834.push.apply(_uniq_var_834, arguments);
} else if (_uniq_var_834.push !== undefined) {
if (_uniq_var_835 === undefined) {
return _uniq_var_834.push;
}
_uniq_var_834.push = _uniq_var_835;
}return _uniq_var_834;
};_uniq_var_836.__lix_func__ = true;return _uniq_var_836;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_371;
_uniq_var_371;
(_uniq_var_365 = lixVar);

};
var _uniq_var_375 = __eq__(tmpVarName, 'new');
_uniq_var_375;
if ((_uniq_var_364 && _uniq_var_375)) {
(_uniq_var_364 = false);
var _uniq_var_373 = call(getUniqVarName);
_uniq_var_373;
var varName = _uniq_var_373;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_374 = (function () {var _uniq_var_839 = function (_uniq_var_837, _uniq_var_838) {
if (typeof _uniq_var_837.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_837.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_837.push.apply(_uniq_var_837, arguments);
} else if (_uniq_var_837.push !== undefined) {
if (_uniq_var_838 === undefined) {
return _uniq_var_837.push;
}
_uniq_var_837.push = _uniq_var_838;
}return _uniq_var_837;
};_uniq_var_839.__lix_func__ = true;return _uniq_var_839;})()(data, [lixVar, ':=', statement]);
_uniq_var_374;
_uniq_var_374;
(_uniq_var_365 = lixVar);

};
return _uniq_var_365;
};_uniq_var_840.__lix_func__ = true;return _uniq_var_840;})();
};_uniq_var_841.__lix_func__ = true;return _uniq_var_841;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_853 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_842 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_376 = true;
_uniq_var_376;
var _uniq_var_377 = null;
_uniq_var_377;
var _uniq_var_379 = seqCtx;
_uniq_var_379;
if (_uniq_var_379) {
var _uniq_var_380 = parseInt(index);
_uniq_var_380;
var _uniq_var_381 = __sub__(expr[0].length, 1);
_uniq_var_381;
var _uniq_var_382 = __eq__(_uniq_var_380, _uniq_var_381);
_uniq_var_382;
(_uniq_var_379 = _uniq_var_382);

};
if ((_uniq_var_376 && _uniq_var_379)) {
(_uniq_var_376 = false);
var _uniq_var_378 = seqCtx(stmt);
_uniq_var_378;
var ret = _uniq_var_378;
ret;
(_uniq_var_377 = ret);

};
_uniq_var_377;
return ret;
};_uniq_var_842.__lix_func__ = true;return _uniq_var_842;})();
ctx;
ctx;
var _uniq_var_409 = foreach(expr[0], (function () {var _uniq_var_852 = function (item, index) {var _uniq_var_383 = call(statementFlattenGenerator);
_uniq_var_383;
var exprDefine = _uniq_var_383;
exprDefine;
exprDefine;
var _uniq_var_384 = flatten(item, exprDefine);
_uniq_var_384;
var itemRet = _uniq_var_384;
itemRet;
itemRet;
var _uniq_var_385 = call(exprDefine);
_uniq_var_385;
var _uniq_var_386 = (function () {var _uniq_var_845 = function (_uniq_var_843, _uniq_var_844) {
if (typeof _uniq_var_843.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_843.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_843.concat.apply(_uniq_var_843, arguments);
} else if (_uniq_var_843.concat !== undefined) {
if (_uniq_var_844 === undefined) {
return _uniq_var_843.concat;
}
_uniq_var_843.concat = _uniq_var_844;
}return _uniq_var_843;
};_uniq_var_845.__lix_func__ = true;return _uniq_var_845;})()(ret, _uniq_var_385);
_uniq_var_386;
(ret = _uniq_var_386);
var _uniq_var_387 = ctx(itemRet, index);
_uniq_var_387;
var stmtRet = _uniq_var_387;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_846 = function (expr) {var _uniq_var_388 = __eq__(expr[1], '{atomic}');
_uniq_var_388;
var _uniq_var_389 = _uniq_var_388;
_uniq_var_389;
if (_uniq_var_389) {
var _uniq_var_390 = __ne__(expr[3], undefined);
_uniq_var_390;
(_uniq_var_389 = _uniq_var_390);

};
return _uniq_var_389;
};_uniq_var_846.__lix_func__ = true;return _uniq_var_846;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_847 = function (expr) {var _uniq_var_391 = __eq__(expr[1], '{atomic}');
_uniq_var_391;
var _uniq_var_392 = _uniq_var_391;
_uniq_var_392;
if (_uniq_var_392) {
var _uniq_var_393 = __eq__(expr[3], undefined);
_uniq_var_393;
(_uniq_var_392 = _uniq_var_393);

};
return _uniq_var_392;
};_uniq_var_847.__lix_func__ = true;return _uniq_var_847;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_848 = function (expr) {var _uniq_var_394 = isRealVar(expr);
_uniq_var_394;
var _uniq_var_395 = _uniq_var_394;
_uniq_var_395;
if (not(_uniq_var_395)) {
var _uniq_var_396 = __ne__(expr[1], 'if');
_uniq_var_396;
var _uniq_var_397 = _uniq_var_396;
_uniq_var_397;
if (_uniq_var_397) {
var _uniq_var_398 = __ne__(expr[1], 'while');
_uniq_var_398;
(_uniq_var_397 = _uniq_var_398);

};
(_uniq_var_395 = _uniq_var_397);

};
return _uniq_var_395;
};_uniq_var_848.__lix_func__ = true;return _uniq_var_848;})();
isRealExpr;
isRealExpr;
var _uniq_var_399 = true;
_uniq_var_399;
var _uniq_var_400 = null;
_uniq_var_400;
var _uniq_var_405 = __ne__(stmtRet[1], '{empty}');
_uniq_var_405;
var _uniq_var_406 = _uniq_var_405;
_uniq_var_406;
if (_uniq_var_406) {
var _uniq_var_407 = isTmpVar(stmtRet);
_uniq_var_407;
var _uniq_var_408 = not(_uniq_var_407);
_uniq_var_408;
(_uniq_var_406 = _uniq_var_408);

};
if ((_uniq_var_399 && _uniq_var_406)) {
(_uniq_var_399 = false);
var _uniq_var_401 = true;
_uniq_var_401;
var _uniq_var_402 = null;
_uniq_var_402;
var _uniq_var_403 = isRealExpr(stmtRet);
_uniq_var_403;
if ((_uniq_var_401 && _uniq_var_403)) {
(_uniq_var_401 = false);
(_uniq_var_402 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_402;
var _uniq_var_404 = (function () {var _uniq_var_851 = function (_uniq_var_849, _uniq_var_850) {
if (typeof _uniq_var_849.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_849.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_849.push.apply(_uniq_var_849, arguments);
} else if (_uniq_var_849.push !== undefined) {
if (_uniq_var_850 === undefined) {
return _uniq_var_849.push;
}
_uniq_var_849.push = _uniq_var_850;
}return _uniq_var_849;
};_uniq_var_851.__lix_func__ = true;return _uniq_var_851;})()(ret, stmtRet);
_uniq_var_404;
(_uniq_var_400 = _uniq_var_404);

};
return _uniq_var_400;
};_uniq_var_852.__lix_func__ = true;return _uniq_var_852;})());
_uniq_var_409;
_uniq_var_409;
(expr[0] = ret);
return expr;
};_uniq_var_853.__lix_func__ = true;return _uniq_var_853;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_860 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_410 = flatten(expr[0], define);
_uniq_var_410;
var ret = _uniq_var_410;
ret;
ret;
var _uniq_var_411 = call(globalDefine);
_uniq_var_411;
var _uniq_var_412 = (function () {var _uniq_var_856 = function (_uniq_var_854, _uniq_var_855) {
if (typeof _uniq_var_854.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_854.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_854.concat.apply(_uniq_var_854, arguments);
} else if (_uniq_var_854.concat !== undefined) {
if (_uniq_var_855 === undefined) {
return _uniq_var_854.concat;
}
_uniq_var_854.concat = _uniq_var_855;
}return _uniq_var_854;
};_uniq_var_856.__lix_func__ = true;return _uniq_var_856;})()(trapExpr, _uniq_var_411);
_uniq_var_412;
var _uniq_var_413 = (function () {var _uniq_var_859 = function (_uniq_var_857, _uniq_var_858) {
if (typeof _uniq_var_857.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_857.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_857.concat.apply(_uniq_var_857, arguments);
} else if (_uniq_var_857.concat !== undefined) {
if (_uniq_var_858 === undefined) {
return _uniq_var_857.concat;
}
_uniq_var_857.concat = _uniq_var_858;
}return _uniq_var_857;
};_uniq_var_859.__lix_func__ = true;return _uniq_var_859;})()(_uniq_var_412, ret[0]);
_uniq_var_413;
(ret[0] = _uniq_var_413);
return [ret, '{start}'];
};_uniq_var_860.__lix_func__ = true;return _uniq_var_860;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_864 = function (expr, define) {var _uniq_var_414 = true;
_uniq_var_414;
var _uniq_var_415 = null;
_uniq_var_415;
var _uniq_var_417 = __eq__(expr[2], '{var}');
_uniq_var_417;
if ((_uniq_var_414 && _uniq_var_417)) {
(_uniq_var_414 = false);
var _uniq_var_416 = (function () {var _uniq_var_863 = function (_uniq_var_861, _uniq_var_862) {
if (typeof _uniq_var_861.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_861.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_861.join.apply(_uniq_var_861, arguments);
} else if (_uniq_var_861.join !== undefined) {
if (_uniq_var_862 === undefined) {
return _uniq_var_861.join;
}
_uniq_var_861.join = _uniq_var_862;
}return _uniq_var_861;
};_uniq_var_863.__lix_func__ = true;return _uniq_var_863;})()(['"', expr[0], '"'], '');
_uniq_var_416;
var name = [_uniq_var_416, '{atomic}'];
name;
(_uniq_var_415 = name);

};
var _uniq_var_419 = __eq__(expr[2], '{index}');
_uniq_var_419;
if ((_uniq_var_414 && _uniq_var_419)) {
(_uniq_var_414 = false);
var _uniq_var_418 = flatten(expr[0], define);
_uniq_var_418;
var name = _uniq_var_418;
name;
(_uniq_var_415 = name);

};
_uniq_var_415;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_420 = define(moduleExpr);
_uniq_var_420;
return _uniq_var_420;
};_uniq_var_864.__lix_func__ = true;return _uniq_var_864;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_865 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_865.__lix_func__ = true;return _uniq_var_865;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_866 = function (expr, define) {return expr;
};_uniq_var_866.__lix_func__ = true;return _uniq_var_866;})();
flattenAmpersand;
flattenAmpersand;
var flattenAnyTypeDestructor = (function () {var _uniq_var_867 = function (arg) {return [];
};_uniq_var_867.__lix_func__ = true;return _uniq_var_867;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_868 = function (expr) {var _uniq_var_421 = transformVarName(expr[0]);
_uniq_var_421;
var varName = _uniq_var_421;
varName;
varName;
var _uniq_var_422 = true;
_uniq_var_422;
var _uniq_var_423 = null;
_uniq_var_423;
var _uniq_var_424 = __eq__(expr[3], "{tmp}");
_uniq_var_424;
if ((_uniq_var_422 && _uniq_var_424)) {
(_uniq_var_422 = false);
(_uniq_var_423 = (varName = expr[0]));

};
_uniq_var_423;
return varName;
};_uniq_var_868.__lix_func__ = true;return _uniq_var_868;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_878 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_425 = getAtomicExprVarName(args[2][0]);
_uniq_var_425;
var varName = _uniq_var_425;
varName;
varName;
var _uniq_var_426 = (function () {var _uniq_var_871 = function (_uniq_var_869, _uniq_var_870) {
if (typeof _uniq_var_869.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_869.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_869.join.apply(_uniq_var_869, arguments);
} else if (_uniq_var_869.join !== undefined) {
if (_uniq_var_870 === undefined) {
return _uniq_var_869.join;
}
_uniq_var_869.join = _uniq_var_870;
}return _uniq_var_869;
};_uniq_var_871.__lix_func__ = true;return _uniq_var_871;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_426;
var _uniq_var_427 = (function () {var _uniq_var_874 = function (_uniq_var_872, _uniq_var_873) {
if (typeof _uniq_var_872.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_872.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_872.push.apply(_uniq_var_872, arguments);
} else if (_uniq_var_872.push !== undefined) {
if (_uniq_var_873 === undefined) {
return _uniq_var_872.push;
}
_uniq_var_872.push = _uniq_var_873;
}return _uniq_var_872;
};_uniq_var_874.__lix_func__ = true;return _uniq_var_874;})()(ret, _uniq_var_426);
_uniq_var_427;
_uniq_var_427;
var _uniq_var_428 = flattenDestructor(args[2], varName);
_uniq_var_428;
var _uniq_var_429 = (function () {var _uniq_var_877 = function (_uniq_var_875, _uniq_var_876) {
if (typeof _uniq_var_875.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_875.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_875.concat.apply(_uniq_var_875, arguments);
} else if (_uniq_var_875.concat !== undefined) {
if (_uniq_var_876 === undefined) {
return _uniq_var_875.concat;
}
_uniq_var_875.concat = _uniq_var_876;
}return _uniq_var_875;
};_uniq_var_877.__lix_func__ = true;return _uniq_var_877;})()(ret, _uniq_var_428);
_uniq_var_429;
(ret = _uniq_var_429);
return ret;
};_uniq_var_878.__lix_func__ = true;return _uniq_var_878;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_888 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_430 = getAtomicExprVarName(args[2][0]);
_uniq_var_430;
var varName = _uniq_var_430;
varName;
varName;
var _uniq_var_431 = (function () {var _uniq_var_881 = function (_uniq_var_879, _uniq_var_880) {
if (typeof _uniq_var_879.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_879.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_879.join.apply(_uniq_var_879, arguments);
} else if (_uniq_var_879.join !== undefined) {
if (_uniq_var_880 === undefined) {
return _uniq_var_879.join;
}
_uniq_var_879.join = _uniq_var_880;
}return _uniq_var_879;
};_uniq_var_881.__lix_func__ = true;return _uniq_var_881;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_431;
var _uniq_var_432 = (function () {var _uniq_var_884 = function (_uniq_var_882, _uniq_var_883) {
if (typeof _uniq_var_882.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_882.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_882.push.apply(_uniq_var_882, arguments);
} else if (_uniq_var_882.push !== undefined) {
if (_uniq_var_883 === undefined) {
return _uniq_var_882.push;
}
_uniq_var_882.push = _uniq_var_883;
}return _uniq_var_882;
};_uniq_var_884.__lix_func__ = true;return _uniq_var_884;})()(ret, _uniq_var_431);
_uniq_var_432;
_uniq_var_432;
var _uniq_var_433 = flattenDestructor(args[2], varName);
_uniq_var_433;
var _uniq_var_434 = (function () {var _uniq_var_887 = function (_uniq_var_885, _uniq_var_886) {
if (typeof _uniq_var_885.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_885.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_885.concat.apply(_uniq_var_885, arguments);
} else if (_uniq_var_885.concat !== undefined) {
if (_uniq_var_886 === undefined) {
return _uniq_var_885.concat;
}
_uniq_var_885.concat = _uniq_var_886;
}return _uniq_var_885;
};_uniq_var_887.__lix_func__ = true;return _uniq_var_887;})()(ret, _uniq_var_433);
_uniq_var_434;
(ret = _uniq_var_434);
return ret;
};_uniq_var_888.__lix_func__ = true;return _uniq_var_888;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_893 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_437 = foreach(args[2], (function () {var _uniq_var_892 = function (item, index) {var _uniq_var_435 = flattenDestructor(item, objName);
_uniq_var_435;
var _uniq_var_436 = (function () {var _uniq_var_891 = function (_uniq_var_889, _uniq_var_890) {
if (typeof _uniq_var_889.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_889.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_889.concat.apply(_uniq_var_889, arguments);
} else if (_uniq_var_889.concat !== undefined) {
if (_uniq_var_890 === undefined) {
return _uniq_var_889.concat;
}
_uniq_var_889.concat = _uniq_var_890;
}return _uniq_var_889;
};_uniq_var_891.__lix_func__ = true;return _uniq_var_891;})()(ret, _uniq_var_435);
_uniq_var_436;
return (ret = _uniq_var_436);
};_uniq_var_892.__lix_func__ = true;return _uniq_var_892;})());
_uniq_var_437;
_uniq_var_437;
return ret;
};_uniq_var_893.__lix_func__ = true;return _uniq_var_893;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenNotDestructor = (function () {var _uniq_var_894 = function (args, varName) {var _uniq_var_438 = flattenDestructor(args[2], varName);
_uniq_var_438;
return _uniq_var_438;
};_uniq_var_894.__lix_func__ = true;return _uniq_var_894;})();
flattenNotDestructor;
flattenNotDestructor;
var flattenAndDestructor = (function () {var _uniq_var_901 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_439 = flattenDestructor(args[2], varName);
_uniq_var_439;
var _uniq_var_440 = (function () {var _uniq_var_897 = function (_uniq_var_895, _uniq_var_896) {
if (typeof _uniq_var_895.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_895.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_895.concat.apply(_uniq_var_895, arguments);
} else if (_uniq_var_895.concat !== undefined) {
if (_uniq_var_896 === undefined) {
return _uniq_var_895.concat;
}
_uniq_var_895.concat = _uniq_var_896;
}return _uniq_var_895;
};_uniq_var_897.__lix_func__ = true;return _uniq_var_897;})()(ret, _uniq_var_439);
_uniq_var_440;
(ret = _uniq_var_440);
var _uniq_var_441 = flattenDestructor(args[3], varName);
_uniq_var_441;
var _uniq_var_442 = (function () {var _uniq_var_900 = function (_uniq_var_898, _uniq_var_899) {
if (typeof _uniq_var_898.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_898.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_898.concat.apply(_uniq_var_898, arguments);
} else if (_uniq_var_898.concat !== undefined) {
if (_uniq_var_899 === undefined) {
return _uniq_var_898.concat;
}
_uniq_var_898.concat = _uniq_var_899;
}return _uniq_var_898;
};_uniq_var_900.__lix_func__ = true;return _uniq_var_900;})()(ret, _uniq_var_441);
_uniq_var_442;
(ret = _uniq_var_442);
return ret;
};_uniq_var_901.__lix_func__ = true;return _uniq_var_901;})();
flattenAndDestructor;
flattenAndDestructor;
var flattenOrDestructor = (function () {var _uniq_var_908 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_443 = flattenDestructor(args[2], varName);
_uniq_var_443;
var _uniq_var_444 = (function () {var _uniq_var_904 = function (_uniq_var_902, _uniq_var_903) {
if (typeof _uniq_var_902.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_902.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_902.concat.apply(_uniq_var_902, arguments);
} else if (_uniq_var_902.concat !== undefined) {
if (_uniq_var_903 === undefined) {
return _uniq_var_902.concat;
}
_uniq_var_902.concat = _uniq_var_903;
}return _uniq_var_902;
};_uniq_var_904.__lix_func__ = true;return _uniq_var_904;})()(ret, _uniq_var_443);
_uniq_var_444;
(ret = _uniq_var_444);
var _uniq_var_445 = flattenDestructor(args[3], varName);
_uniq_var_445;
var _uniq_var_446 = (function () {var _uniq_var_907 = function (_uniq_var_905, _uniq_var_906) {
if (typeof _uniq_var_905.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_905.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_905.concat.apply(_uniq_var_905, arguments);
} else if (_uniq_var_905.concat !== undefined) {
if (_uniq_var_906 === undefined) {
return _uniq_var_905.concat;
}
_uniq_var_905.concat = _uniq_var_906;
}return _uniq_var_905;
};_uniq_var_907.__lix_func__ = true;return _uniq_var_907;})()(ret, _uniq_var_445);
_uniq_var_446;
(ret = _uniq_var_446);
return ret;
};_uniq_var_908.__lix_func__ = true;return _uniq_var_908;})();
flattenOrDestructor;
flattenOrDestructor;
var flattenNamedDestructor = (function () {var _uniq_var_918 = function (args, oldName) {var ret = [];
ret;
ret;
var _uniq_var_447 = getAtomicExprVarName(args[0]);
_uniq_var_447;
var varName = _uniq_var_447;
varName;
varName;
var _uniq_var_448 = true;
_uniq_var_448;
var _uniq_var_449 = null;
_uniq_var_449;
var _uniq_var_452 = __ne__(oldName, "arguments");
_uniq_var_452;
if ((_uniq_var_448 && _uniq_var_452)) {
(_uniq_var_448 = false);
var _uniq_var_450 = (function () {var _uniq_var_911 = function (_uniq_var_909, _uniq_var_910) {
if (typeof _uniq_var_909.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_909.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_909.join.apply(_uniq_var_909, arguments);
} else if (_uniq_var_909.join !== undefined) {
if (_uniq_var_910 === undefined) {
return _uniq_var_909.join;
}
_uniq_var_909.join = _uniq_var_910;
}return _uniq_var_909;
};_uniq_var_911.__lix_func__ = true;return _uniq_var_911;})()(["var ", varName, " = ", oldName], "");
_uniq_var_450;
var _uniq_var_451 = (function () {var _uniq_var_914 = function (_uniq_var_912, _uniq_var_913) {
if (typeof _uniq_var_912.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_912.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_912.push.apply(_uniq_var_912, arguments);
} else if (_uniq_var_912.push !== undefined) {
if (_uniq_var_913 === undefined) {
return _uniq_var_912.push;
}
_uniq_var_912.push = _uniq_var_913;
}return _uniq_var_912;
};_uniq_var_914.__lix_func__ = true;return _uniq_var_914;})()(ret, _uniq_var_450);
_uniq_var_451;
(_uniq_var_449 = _uniq_var_451);

};
_uniq_var_449;
var _uniq_var_453 = flattenDestructor(args[2], varName);
_uniq_var_453;
var _uniq_var_454 = (function () {var _uniq_var_917 = function (_uniq_var_915, _uniq_var_916) {
if (typeof _uniq_var_915.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_915.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_915.concat.apply(_uniq_var_915, arguments);
} else if (_uniq_var_915.concat !== undefined) {
if (_uniq_var_916 === undefined) {
return _uniq_var_915.concat;
}
_uniq_var_915.concat = _uniq_var_916;
}return _uniq_var_915;
};_uniq_var_917.__lix_func__ = true;return _uniq_var_917;})()(ret, _uniq_var_453);
_uniq_var_454;
(ret = _uniq_var_454);
return ret;
};_uniq_var_918.__lix_func__ = true;return _uniq_var_918;})();
flattenNamedDestructor;
flattenNamedDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_929 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_460 = foreach(args[2], (function () {var _uniq_var_928 = function (item, index) {var _uniq_var_455 = getAtomicExprVarName(item[0]);
_uniq_var_455;
var varName = _uniq_var_455;
varName;
varName;
var _uniq_var_456 = (function () {var _uniq_var_921 = function (_uniq_var_919, _uniq_var_920) {
if (typeof _uniq_var_919.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_919.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_919.join.apply(_uniq_var_919, arguments);
} else if (_uniq_var_919.join !== undefined) {
if (_uniq_var_920 === undefined) {
return _uniq_var_919.join;
}
_uniq_var_919.join = _uniq_var_920;
}return _uniq_var_919;
};_uniq_var_921.__lix_func__ = true;return _uniq_var_921;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_456;
var _uniq_var_457 = (function () {var _uniq_var_924 = function (_uniq_var_922, _uniq_var_923) {
if (typeof _uniq_var_922.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_922.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_922.push.apply(_uniq_var_922, arguments);
} else if (_uniq_var_922.push !== undefined) {
if (_uniq_var_923 === undefined) {
return _uniq_var_922.push;
}
_uniq_var_922.push = _uniq_var_923;
}return _uniq_var_922;
};_uniq_var_924.__lix_func__ = true;return _uniq_var_924;})()(ret, _uniq_var_456);
_uniq_var_457;
_uniq_var_457;
var _uniq_var_458 = flattenDestructor(item, varName);
_uniq_var_458;
var _uniq_var_459 = (function () {var _uniq_var_927 = function (_uniq_var_925, _uniq_var_926) {
if (typeof _uniq_var_925.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_925.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_925.concat.apply(_uniq_var_925, arguments);
} else if (_uniq_var_925.concat !== undefined) {
if (_uniq_var_926 === undefined) {
return _uniq_var_925.concat;
}
_uniq_var_925.concat = _uniq_var_926;
}return _uniq_var_925;
};_uniq_var_927.__lix_func__ = true;return _uniq_var_927;})()(ret, _uniq_var_458);
_uniq_var_459;
return (ret = _uniq_var_459);
};_uniq_var_928.__lix_func__ = true;return _uniq_var_928;})());
_uniq_var_460;
_uniq_var_460;
return ret;
};_uniq_var_929.__lix_func__ = true;return _uniq_var_929;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_955 = function (args, arrayName, def) {var len = args[2].length;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_461 = true;
_uniq_var_461;
var _uniq_var_462 = null;
_uniq_var_462;
var _uniq_var_465 = __ne__(arrayName, "arguments");
_uniq_var_465;
if ((_uniq_var_461 && _uniq_var_465)) {
(_uniq_var_461 = false);
var _uniq_var_463 = (function () {var _uniq_var_932 = function (_uniq_var_930, _uniq_var_931) {
if (typeof _uniq_var_930.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_930.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_930.join.apply(_uniq_var_930, arguments);
} else if (_uniq_var_930.join !== undefined) {
if (_uniq_var_931 === undefined) {
return _uniq_var_930.join;
}
_uniq_var_930.join = _uniq_var_931;
}return _uniq_var_930;
};_uniq_var_932.__lix_func__ = true;return _uniq_var_932;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_463;
var _uniq_var_464 = (function () {var _uniq_var_935 = function (_uniq_var_933, _uniq_var_934) {
if (typeof _uniq_var_933.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_933.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_933.push.apply(_uniq_var_933, arguments);
} else if (_uniq_var_933.push !== undefined) {
if (_uniq_var_934 === undefined) {
return _uniq_var_933.push;
}
_uniq_var_933.push = _uniq_var_934;
}return _uniq_var_933;
};_uniq_var_935.__lix_func__ = true;return _uniq_var_935;})()(ret, _uniq_var_463);
_uniq_var_464;
(_uniq_var_462 = _uniq_var_464);

};
_uniq_var_462;
var _uniq_var_466 = (function () {var _uniq_var_938 = function (_uniq_var_936, _uniq_var_937) {
if (typeof _uniq_var_936.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_936.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_936.join.apply(_uniq_var_936, arguments);
} else if (_uniq_var_936.join !== undefined) {
if (_uniq_var_937 === undefined) {
return _uniq_var_936.join;
}
_uniq_var_936.join = _uniq_var_937;
}return _uniq_var_936;
};_uniq_var_938.__lix_func__ = true;return _uniq_var_938;})()([arrayName, ".length == ", len], "");
_uniq_var_466;
var _uniq_var_467 = (function () {var _uniq_var_941 = function (_uniq_var_939, _uniq_var_940) {
if (typeof _uniq_var_939.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_939.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_939.push.apply(_uniq_var_939, arguments);
} else if (_uniq_var_939.push !== undefined) {
if (_uniq_var_940 === undefined) {
return _uniq_var_939.push;
}
_uniq_var_939.push = _uniq_var_940;
}return _uniq_var_939;
};_uniq_var_941.__lix_func__ = true;return _uniq_var_941;})()(ret, _uniq_var_466);
_uniq_var_467;
_uniq_var_467;
var _uniq_var_475 = foreach(args[2], (function () {var _uniq_var_951 = function (item, index) {var _uniq_var_468 = call(def.newVar);
_uniq_var_468;
var newVar = _uniq_var_468;
newVar;
newVar;
var _uniq_var_469 = (function () {var _uniq_var_944 = function (_uniq_var_942, _uniq_var_943) {
if (typeof _uniq_var_942.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_942.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_942.join.apply(_uniq_var_942, arguments);
} else if (_uniq_var_942.join !== undefined) {
if (_uniq_var_943 === undefined) {
return _uniq_var_942.join;
}
_uniq_var_942.join = _uniq_var_943;
}return _uniq_var_942;
};_uniq_var_944.__lix_func__ = true;return _uniq_var_944;})()([arrayName, "[", index, "]"], "");
_uniq_var_469;
var expr = _uniq_var_469;
expr;
expr;
var _uniq_var_470 = flattenCondition(item, newVar, def);
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
var _uniq_var_473 = (function () {var _uniq_var_947 = function (_uniq_var_945, _uniq_var_946) {
if (typeof _uniq_var_945.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_945.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_945.join.apply(_uniq_var_945, arguments);
} else if (_uniq_var_945.join !== undefined) {
if (_uniq_var_946 === undefined) {
return _uniq_var_945.join;
}
_uniq_var_945.join = _uniq_var_946;
}return _uniq_var_945;
};_uniq_var_947.__lix_func__ = true;return _uniq_var_947;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_473;
var _uniq_var_474 = (function () {var _uniq_var_950 = function (_uniq_var_948, _uniq_var_949) {
if (typeof _uniq_var_948.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_948.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_948.push.apply(_uniq_var_948, arguments);
} else if (_uniq_var_948.push !== undefined) {
if (_uniq_var_949 === undefined) {
return _uniq_var_948.push;
}
_uniq_var_948.push = _uniq_var_949;
}return _uniq_var_948;
};_uniq_var_950.__lix_func__ = true;return _uniq_var_950;})()(ret, _uniq_var_473);
_uniq_var_474;
(_uniq_var_472 = _uniq_var_474);

};
return _uniq_var_472;
};_uniq_var_951.__lix_func__ = true;return _uniq_var_951;})());
_uniq_var_475;
_uniq_var_475;
var _uniq_var_476 = (function () {var _uniq_var_954 = function (_uniq_var_952, _uniq_var_953) {
if (typeof _uniq_var_952.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_952.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_952.join.apply(_uniq_var_952, arguments);
} else if (_uniq_var_952.join !== undefined) {
if (_uniq_var_953 === undefined) {
return _uniq_var_952.join;
}
_uniq_var_952.join = _uniq_var_953;
}return _uniq_var_952;
};_uniq_var_954.__lix_func__ = true;return _uniq_var_954;})()(ret, " && ");
_uniq_var_476;
return _uniq_var_476;
};_uniq_var_955.__lix_func__ = true;return _uniq_var_955;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenIndexCondition = (function () {var _uniq_var_962 = function (args, objectName, def) {var _uniq_var_477 = call(def.newVar);
_uniq_var_477;
var newVar = _uniq_var_477;
newVar;
newVar;
var _uniq_var_478 = (function () {var _uniq_var_958 = function (_uniq_var_956, _uniq_var_957) {
if (typeof _uniq_var_956.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_956.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_956.join.apply(_uniq_var_956, arguments);
} else if (_uniq_var_956.join !== undefined) {
if (_uniq_var_957 === undefined) {
return _uniq_var_956.join;
}
_uniq_var_956.join = _uniq_var_957;
}return _uniq_var_956;
};_uniq_var_958.__lix_func__ = true;return _uniq_var_958;})()([objectName, "[", args[0], "]"], "");
_uniq_var_478;
var expr = _uniq_var_478;
expr;
expr;
var _uniq_var_479 = flattenCondition(args[2], newVar, def);
_uniq_var_479;
var ret = _uniq_var_479;
ret;
ret;
var _uniq_var_480 = (function () {var _uniq_var_961 = function (_uniq_var_959, _uniq_var_960) {
if (typeof _uniq_var_959.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_959.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_959.join.apply(_uniq_var_959, arguments);
} else if (_uniq_var_959.join !== undefined) {
if (_uniq_var_960 === undefined) {
return _uniq_var_959.join;
}
_uniq_var_959.join = _uniq_var_960;
}return _uniq_var_959;
};_uniq_var_961.__lix_func__ = true;return _uniq_var_961;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_480;
return _uniq_var_480;
};_uniq_var_962.__lix_func__ = true;return _uniq_var_962;})();
flattenIndexCondition;
flattenIndexCondition;
var flattenFieldCondition = (function () {var _uniq_var_969 = function (args, objectName, def) {var _uniq_var_481 = call(def.newVar);
_uniq_var_481;
var newVar = _uniq_var_481;
newVar;
newVar;
var _uniq_var_482 = (function () {var _uniq_var_965 = function (_uniq_var_963, _uniq_var_964) {
if (typeof _uniq_var_963.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_963.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_963.join.apply(_uniq_var_963, arguments);
} else if (_uniq_var_963.join !== undefined) {
if (_uniq_var_964 === undefined) {
return _uniq_var_963.join;
}
_uniq_var_963.join = _uniq_var_964;
}return _uniq_var_963;
};_uniq_var_965.__lix_func__ = true;return _uniq_var_965;})()([objectName, ".", args[0]], "");
_uniq_var_482;
var expr = _uniq_var_482;
expr;
expr;
var _uniq_var_483 = flattenCondition(args[2], newVar, def);
_uniq_var_483;
var ret = _uniq_var_483;
ret;
ret;
var _uniq_var_484 = (function () {var _uniq_var_968 = function (_uniq_var_966, _uniq_var_967) {
if (typeof _uniq_var_966.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_966.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_966.join.apply(_uniq_var_966, arguments);
} else if (_uniq_var_966.join !== undefined) {
if (_uniq_var_967 === undefined) {
return _uniq_var_966.join;
}
_uniq_var_966.join = _uniq_var_967;
}return _uniq_var_966;
};_uniq_var_968.__lix_func__ = true;return _uniq_var_968;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_484;
return _uniq_var_484;
};_uniq_var_969.__lix_func__ = true;return _uniq_var_969;})();
flattenFieldCondition;
flattenFieldCondition;
var flattenObjectCondition = (function () {var _uniq_var_983 = function (args, objectName, def) {var ret = [];
ret;
ret;
var _uniq_var_485 = true;
_uniq_var_485;
var _uniq_var_486 = null;
_uniq_var_486;
var _uniq_var_488 = __ne__(objectName, "arguments");
_uniq_var_488;
if ((_uniq_var_485 && _uniq_var_488)) {
(_uniq_var_485 = false);
var _uniq_var_487 = (function () {var _uniq_var_972 = function (_uniq_var_970, _uniq_var_971) {
if (typeof _uniq_var_970.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_970.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_970.push.apply(_uniq_var_970, arguments);
} else if (_uniq_var_970.push !== undefined) {
if (_uniq_var_971 === undefined) {
return _uniq_var_970.push;
}
_uniq_var_970.push = _uniq_var_971;
}return _uniq_var_970;
};_uniq_var_972.__lix_func__ = true;return _uniq_var_972;})()(ret, objectName);
_uniq_var_487;
(_uniq_var_486 = _uniq_var_487);

};
_uniq_var_486;
var _uniq_var_494 = foreach(args[2], (function () {var _uniq_var_979 = function (item, index) {var _uniq_var_489 = flattenCondition(item, objectName, def);
_uniq_var_489;
var cond = _uniq_var_489;
cond;
cond;
var _uniq_var_490 = true;
_uniq_var_490;
var _uniq_var_491 = null;
_uniq_var_491;
if ((_uniq_var_490 && cond)) {
(_uniq_var_490 = false);
var _uniq_var_492 = (function () {var _uniq_var_975 = function (_uniq_var_973, _uniq_var_974) {
if (typeof _uniq_var_973.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_973.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_973.join.apply(_uniq_var_973, arguments);
} else if (_uniq_var_973.join !== undefined) {
if (_uniq_var_974 === undefined) {
return _uniq_var_973.join;
}
_uniq_var_973.join = _uniq_var_974;
}return _uniq_var_973;
};_uniq_var_975.__lix_func__ = true;return _uniq_var_975;})()(["(", cond, ")"], "");
_uniq_var_492;
var _uniq_var_493 = (function () {var _uniq_var_978 = function (_uniq_var_976, _uniq_var_977) {
if (typeof _uniq_var_976.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_976.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_976.push.apply(_uniq_var_976, arguments);
} else if (_uniq_var_976.push !== undefined) {
if (_uniq_var_977 === undefined) {
return _uniq_var_976.push;
}
_uniq_var_976.push = _uniq_var_977;
}return _uniq_var_976;
};_uniq_var_978.__lix_func__ = true;return _uniq_var_978;})()(ret, _uniq_var_492);
_uniq_var_493;
(_uniq_var_491 = _uniq_var_493);

};
return _uniq_var_491;
};_uniq_var_979.__lix_func__ = true;return _uniq_var_979;})());
_uniq_var_494;
_uniq_var_494;
var _uniq_var_495 = (function () {var _uniq_var_982 = function (_uniq_var_980, _uniq_var_981) {
if (typeof _uniq_var_980.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_980.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_980.join.apply(_uniq_var_980, arguments);
} else if (_uniq_var_980.join !== undefined) {
if (_uniq_var_981 === undefined) {
return _uniq_var_980.join;
}
_uniq_var_980.join = _uniq_var_981;
}return _uniq_var_980;
};_uniq_var_982.__lix_func__ = true;return _uniq_var_982;})()(ret, " && ");
_uniq_var_495;
return _uniq_var_495;
};_uniq_var_983.__lix_func__ = true;return _uniq_var_983;})();
flattenObjectCondition;
flattenObjectCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_1019 = function (args, arrayName, def) {var _uniq_var_496 = __add__(args[2].length, args[4].length);
_uniq_var_496;
var len = _uniq_var_496;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_497 = true;
_uniq_var_497;
var _uniq_var_498 = null;
_uniq_var_498;
var _uniq_var_501 = __ne__(arrayName, "arguments");
_uniq_var_501;
if ((_uniq_var_497 && _uniq_var_501)) {
(_uniq_var_497 = false);
var _uniq_var_499 = (function () {var _uniq_var_986 = function (_uniq_var_984, _uniq_var_985) {
if (typeof _uniq_var_984.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_984.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_984.join.apply(_uniq_var_984, arguments);
} else if (_uniq_var_984.join !== undefined) {
if (_uniq_var_985 === undefined) {
return _uniq_var_984.join;
}
_uniq_var_984.join = _uniq_var_985;
}return _uniq_var_984;
};_uniq_var_986.__lix_func__ = true;return _uniq_var_986;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_499;
var _uniq_var_500 = (function () {var _uniq_var_989 = function (_uniq_var_987, _uniq_var_988) {
if (typeof _uniq_var_987.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_987.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_987.push.apply(_uniq_var_987, arguments);
} else if (_uniq_var_987.push !== undefined) {
if (_uniq_var_988 === undefined) {
return _uniq_var_987.push;
}
_uniq_var_987.push = _uniq_var_988;
}return _uniq_var_987;
};_uniq_var_989.__lix_func__ = true;return _uniq_var_989;})()(ret, _uniq_var_499);
_uniq_var_500;
(_uniq_var_498 = _uniq_var_500);

};
_uniq_var_498;
var _uniq_var_502 = true;
_uniq_var_502;
var _uniq_var_503 = null;
_uniq_var_503;
var _uniq_var_506 = __gt__(len, 0);
_uniq_var_506;
if ((_uniq_var_502 && _uniq_var_506)) {
(_uniq_var_502 = false);
var _uniq_var_504 = (function () {var _uniq_var_992 = function (_uniq_var_990, _uniq_var_991) {
if (typeof _uniq_var_990.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_990.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_990.join.apply(_uniq_var_990, arguments);
} else if (_uniq_var_990.join !== undefined) {
if (_uniq_var_991 === undefined) {
return _uniq_var_990.join;
}
_uniq_var_990.join = _uniq_var_991;
}return _uniq_var_990;
};_uniq_var_992.__lix_func__ = true;return _uniq_var_992;})()([arrayName, ".length >= ", len], "");
_uniq_var_504;
var _uniq_var_505 = (function () {var _uniq_var_995 = function (_uniq_var_993, _uniq_var_994) {
if (typeof _uniq_var_993.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_993.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_993.push.apply(_uniq_var_993, arguments);
} else if (_uniq_var_993.push !== undefined) {
if (_uniq_var_994 === undefined) {
return _uniq_var_993.push;
}
_uniq_var_993.push = _uniq_var_994;
}return _uniq_var_993;
};_uniq_var_995.__lix_func__ = true;return _uniq_var_995;})()(ret, _uniq_var_504);
_uniq_var_505;
(_uniq_var_503 = _uniq_var_505);

};
_uniq_var_503;
var _uniq_var_514 = foreach(args[2], (function () {var _uniq_var_1005 = function (item, index) {var _uniq_var_507 = call(def.newVar);
_uniq_var_507;
var newVar = _uniq_var_507;
newVar;
newVar;
var _uniq_var_508 = (function () {var _uniq_var_998 = function (_uniq_var_996, _uniq_var_997) {
if (typeof _uniq_var_996.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_996.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_996.join.apply(_uniq_var_996, arguments);
} else if (_uniq_var_996.join !== undefined) {
if (_uniq_var_997 === undefined) {
return _uniq_var_996.join;
}
_uniq_var_996.join = _uniq_var_997;
}return _uniq_var_996;
};_uniq_var_998.__lix_func__ = true;return _uniq_var_998;})()([arrayName, "[", index, "]"], "");
_uniq_var_508;
var expr = _uniq_var_508;
expr;
expr;
var _uniq_var_509 = flattenCondition(item, newVar, def);
_uniq_var_509;
var cond = _uniq_var_509;
cond;
cond;
var _uniq_var_510 = true;
_uniq_var_510;
var _uniq_var_511 = null;
_uniq_var_511;
if ((_uniq_var_510 && cond)) {
(_uniq_var_510 = false);
var _uniq_var_512 = (function () {var _uniq_var_1001 = function (_uniq_var_999, _uniq_var_1000) {
if (typeof _uniq_var_999.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_999.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_999.join.apply(_uniq_var_999, arguments);
} else if (_uniq_var_999.join !== undefined) {
if (_uniq_var_1000 === undefined) {
return _uniq_var_999.join;
}
_uniq_var_999.join = _uniq_var_1000;
}return _uniq_var_999;
};_uniq_var_1001.__lix_func__ = true;return _uniq_var_1001;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_512;
var _uniq_var_513 = (function () {var _uniq_var_1004 = function (_uniq_var_1002, _uniq_var_1003) {
if (typeof _uniq_var_1002.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1002.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1002.push.apply(_uniq_var_1002, arguments);
} else if (_uniq_var_1002.push !== undefined) {
if (_uniq_var_1003 === undefined) {
return _uniq_var_1002.push;
}
_uniq_var_1002.push = _uniq_var_1003;
}return _uniq_var_1002;
};_uniq_var_1004.__lix_func__ = true;return _uniq_var_1004;})()(ret, _uniq_var_512);
_uniq_var_513;
(_uniq_var_511 = _uniq_var_513);

};
return _uniq_var_511;
};_uniq_var_1005.__lix_func__ = true;return _uniq_var_1005;})());
_uniq_var_514;
_uniq_var_514;
var _uniq_var_523 = foreach(args[4], (function () {var _uniq_var_1015 = function (item, index) {var _uniq_var_515 = call(def.newVar);
_uniq_var_515;
var newVar = _uniq_var_515;
newVar;
newVar;
var _uniq_var_516 = __sub__(args[4].length, index);
_uniq_var_516;
var _uniq_var_517 = (function () {var _uniq_var_1008 = function (_uniq_var_1006, _uniq_var_1007) {
if (typeof _uniq_var_1006.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1006.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1006.join.apply(_uniq_var_1006, arguments);
} else if (_uniq_var_1006.join !== undefined) {
if (_uniq_var_1007 === undefined) {
return _uniq_var_1006.join;
}
_uniq_var_1006.join = _uniq_var_1007;
}return _uniq_var_1006;
};_uniq_var_1008.__lix_func__ = true;return _uniq_var_1008;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_516, "]"], "");
_uniq_var_517;
var expr = _uniq_var_517;
expr;
expr;
var _uniq_var_518 = flattenCondition(item, newVar, def);
_uniq_var_518;
var cond = _uniq_var_518;
cond;
cond;
var _uniq_var_519 = true;
_uniq_var_519;
var _uniq_var_520 = null;
_uniq_var_520;
if ((_uniq_var_519 && cond)) {
(_uniq_var_519 = false);
var _uniq_var_521 = (function () {var _uniq_var_1011 = function (_uniq_var_1009, _uniq_var_1010) {
if (typeof _uniq_var_1009.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1009.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1009.join.apply(_uniq_var_1009, arguments);
} else if (_uniq_var_1009.join !== undefined) {
if (_uniq_var_1010 === undefined) {
return _uniq_var_1009.join;
}
_uniq_var_1009.join = _uniq_var_1010;
}return _uniq_var_1009;
};_uniq_var_1011.__lix_func__ = true;return _uniq_var_1011;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_521;
var _uniq_var_522 = (function () {var _uniq_var_1014 = function (_uniq_var_1012, _uniq_var_1013) {
if (typeof _uniq_var_1012.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1012.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1012.push.apply(_uniq_var_1012, arguments);
} else if (_uniq_var_1012.push !== undefined) {
if (_uniq_var_1013 === undefined) {
return _uniq_var_1012.push;
}
_uniq_var_1012.push = _uniq_var_1013;
}return _uniq_var_1012;
};_uniq_var_1014.__lix_func__ = true;return _uniq_var_1014;})()(ret, _uniq_var_521);
_uniq_var_522;
(_uniq_var_520 = _uniq_var_522);

};
return _uniq_var_520;
};_uniq_var_1015.__lix_func__ = true;return _uniq_var_1015;})());
_uniq_var_523;
_uniq_var_523;
var _uniq_var_524 = (function () {var _uniq_var_1018 = function (_uniq_var_1016, _uniq_var_1017) {
if (typeof _uniq_var_1016.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1016.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1016.join.apply(_uniq_var_1016, arguments);
} else if (_uniq_var_1016.join !== undefined) {
if (_uniq_var_1017 === undefined) {
return _uniq_var_1016.join;
}
_uniq_var_1016.join = _uniq_var_1017;
}return _uniq_var_1016;
};_uniq_var_1018.__lix_func__ = true;return _uniq_var_1018;})()(ret, " && ");
_uniq_var_524;
return _uniq_var_524;
};_uniq_var_1019.__lix_func__ = true;return _uniq_var_1019;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_1046 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_533 = foreach(args[2], (function () {var _uniq_var_1029 = function (item, index) {var _uniq_var_525 = getAtomicExprVarName(item[0]);
_uniq_var_525;
var varName = _uniq_var_525;
varName;
varName;
var _uniq_var_526 = true;
_uniq_var_526;
var _uniq_var_527 = null;
_uniq_var_527;
var _uniq_var_530 = __ne__(arrayName, "arguments");
_uniq_var_530;
if ((_uniq_var_526 && _uniq_var_530)) {
(_uniq_var_526 = false);
var _uniq_var_528 = (function () {var _uniq_var_1022 = function (_uniq_var_1020, _uniq_var_1021) {
if (typeof _uniq_var_1020.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1020.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1020.join.apply(_uniq_var_1020, arguments);
} else if (_uniq_var_1020.join !== undefined) {
if (_uniq_var_1021 === undefined) {
return _uniq_var_1020.join;
}
_uniq_var_1020.join = _uniq_var_1021;
}return _uniq_var_1020;
};_uniq_var_1022.__lix_func__ = true;return _uniq_var_1022;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_528;
var _uniq_var_529 = (function () {var _uniq_var_1025 = function (_uniq_var_1023, _uniq_var_1024) {
if (typeof _uniq_var_1023.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1023.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1023.push.apply(_uniq_var_1023, arguments);
} else if (_uniq_var_1023.push !== undefined) {
if (_uniq_var_1024 === undefined) {
return _uniq_var_1023.push;
}
_uniq_var_1023.push = _uniq_var_1024;
}return _uniq_var_1023;
};_uniq_var_1025.__lix_func__ = true;return _uniq_var_1025;})()(ret, _uniq_var_528);
_uniq_var_529;
(_uniq_var_527 = _uniq_var_529);

};
_uniq_var_527;
var _uniq_var_531 = flattenDestructor(item, varName);
_uniq_var_531;
var _uniq_var_532 = (function () {var _uniq_var_1028 = function (_uniq_var_1026, _uniq_var_1027) {
if (typeof _uniq_var_1026.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1026.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1026.concat.apply(_uniq_var_1026, arguments);
} else if (_uniq_var_1026.concat !== undefined) {
if (_uniq_var_1027 === undefined) {
return _uniq_var_1026.concat;
}
_uniq_var_1026.concat = _uniq_var_1027;
}return _uniq_var_1026;
};_uniq_var_1028.__lix_func__ = true;return _uniq_var_1028;})()(ret, _uniq_var_531);
_uniq_var_532;
return (ret = _uniq_var_532);
};_uniq_var_1029.__lix_func__ = true;return _uniq_var_1029;})());
_uniq_var_533;
_uniq_var_533;
var _uniq_var_534 = true;
_uniq_var_534;
var _uniq_var_535 = null;
_uniq_var_535;
var _uniq_var_539 = __eq__(args[3][1], "{va_arg}");
_uniq_var_539;
if ((_uniq_var_534 && _uniq_var_539)) {
(_uniq_var_534 = false);
var _uniq_var_536 = getAtomicExprVarName(args[3][0]);
_uniq_var_536;
var varName = _uniq_var_536;
varName;
varName;
var _uniq_var_537 = (function () {var _uniq_var_1032 = function (_uniq_var_1030, _uniq_var_1031) {
if (typeof _uniq_var_1030.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1030.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1030.join.apply(_uniq_var_1030, arguments);
} else if (_uniq_var_1030.join !== undefined) {
if (_uniq_var_1031 === undefined) {
return _uniq_var_1030.join;
}
_uniq_var_1030.join = _uniq_var_1031;
}return _uniq_var_1030;
};_uniq_var_1032.__lix_func__ = true;return _uniq_var_1032;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_537;
var _uniq_var_538 = (function () {var _uniq_var_1035 = function (_uniq_var_1033, _uniq_var_1034) {
if (typeof _uniq_var_1033.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1033.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1033.push.apply(_uniq_var_1033, arguments);
} else if (_uniq_var_1033.push !== undefined) {
if (_uniq_var_1034 === undefined) {
return _uniq_var_1033.push;
}
_uniq_var_1033.push = _uniq_var_1034;
}return _uniq_var_1033;
};_uniq_var_1035.__lix_func__ = true;return _uniq_var_1035;})()(ret, _uniq_var_537);
_uniq_var_538;
(_uniq_var_535 = _uniq_var_538);

};
_uniq_var_535;
var _uniq_var_546 = foreach(args[4], (function () {var _uniq_var_1045 = function (item, index) {var _uniq_var_540 = getAtomicExprVarName(item[0]);
_uniq_var_540;
var varName = _uniq_var_540;
varName;
varName;
var _uniq_var_541 = __sub__(tail_lenth, index);
_uniq_var_541;
var _uniq_var_542 = (function () {var _uniq_var_1038 = function (_uniq_var_1036, _uniq_var_1037) {
if (typeof _uniq_var_1036.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1036.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1036.join.apply(_uniq_var_1036, arguments);
} else if (_uniq_var_1036.join !== undefined) {
if (_uniq_var_1037 === undefined) {
return _uniq_var_1036.join;
}
_uniq_var_1036.join = _uniq_var_1037;
}return _uniq_var_1036;
};_uniq_var_1038.__lix_func__ = true;return _uniq_var_1038;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", arrayName, ".length - ", _uniq_var_541, "] : undefined"], "");
_uniq_var_542;
var _uniq_var_543 = (function () {var _uniq_var_1041 = function (_uniq_var_1039, _uniq_var_1040) {
if (typeof _uniq_var_1039.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1039.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1039.push.apply(_uniq_var_1039, arguments);
} else if (_uniq_var_1039.push !== undefined) {
if (_uniq_var_1040 === undefined) {
return _uniq_var_1039.push;
}
_uniq_var_1039.push = _uniq_var_1040;
}return _uniq_var_1039;
};_uniq_var_1041.__lix_func__ = true;return _uniq_var_1041;})()(ret, _uniq_var_542);
_uniq_var_543;
_uniq_var_543;
var _uniq_var_544 = flattenDestructor(item, varName);
_uniq_var_544;
var _uniq_var_545 = (function () {var _uniq_var_1044 = function (_uniq_var_1042, _uniq_var_1043) {
if (typeof _uniq_var_1042.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1042.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1042.concat.apply(_uniq_var_1042, arguments);
} else if (_uniq_var_1042.concat !== undefined) {
if (_uniq_var_1043 === undefined) {
return _uniq_var_1042.concat;
}
_uniq_var_1042.concat = _uniq_var_1043;
}return _uniq_var_1042;
};_uniq_var_1044.__lix_func__ = true;return _uniq_var_1044;})()(ret, _uniq_var_544);
_uniq_var_545;
return (ret = _uniq_var_545);
};_uniq_var_1045.__lix_func__ = true;return _uniq_var_1045;})());
_uniq_var_546;
_uniq_var_546;
return ret;
};_uniq_var_1046.__lix_func__ = true;return _uniq_var_1046;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_1047 = function (args, varName, def) {return null;
};_uniq_var_1047.__lix_func__ = true;return _uniq_var_1047;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenLiteralArgCondition = (function () {var _uniq_var_1051 = function (args, varName, def) {var _uniq_var_547 = (function () {var _uniq_var_1050 = function (_uniq_var_1048, _uniq_var_1049) {
if (typeof _uniq_var_1048.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1048.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1048.join.apply(_uniq_var_1048, arguments);
} else if (_uniq_var_1048.join !== undefined) {
if (_uniq_var_1049 === undefined) {
return _uniq_var_1048.join;
}
_uniq_var_1048.join = _uniq_var_1049;
}return _uniq_var_1048;
};_uniq_var_1050.__lix_func__ = true;return _uniq_var_1050;})()([varName, " === ", args[2]], "");
_uniq_var_547;
return _uniq_var_547;
};_uniq_var_1051.__lix_func__ = true;return _uniq_var_1051;})();
flattenLiteralArgCondition;
flattenLiteralArgCondition;
var flattenLTArgCondition = (function () {var _uniq_var_1055 = function (args, varName, def) {var _uniq_var_548 = (function () {var _uniq_var_1054 = function (_uniq_var_1052, _uniq_var_1053) {
if (typeof _uniq_var_1052.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1052.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1052.join.apply(_uniq_var_1052, arguments);
} else if (_uniq_var_1052.join !== undefined) {
if (_uniq_var_1053 === undefined) {
return _uniq_var_1052.join;
}
_uniq_var_1052.join = _uniq_var_1053;
}return _uniq_var_1052;
};_uniq_var_1054.__lix_func__ = true;return _uniq_var_1054;})()(["typeof(", varName, ") == 'number' && ", varName, " < ", args[2]], "");
_uniq_var_548;
return _uniq_var_548;
};_uniq_var_1055.__lix_func__ = true;return _uniq_var_1055;})();
flattenLTArgCondition;
flattenLTArgCondition;
var flattenBetweenArgCondition = (function () {var _uniq_var_1059 = function (args, varName, def) {var _uniq_var_549 = (function () {var _uniq_var_1058 = function (_uniq_var_1056, _uniq_var_1057) {
if (typeof _uniq_var_1056.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1056.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1056.join.apply(_uniq_var_1056, arguments);
} else if (_uniq_var_1056.join !== undefined) {
if (_uniq_var_1057 === undefined) {
return _uniq_var_1056.join;
}
_uniq_var_1056.join = _uniq_var_1057;
}return _uniq_var_1056;
};_uniq_var_1058.__lix_func__ = true;return _uniq_var_1058;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2], " && ", varName, " < ", args[3]], "");
_uniq_var_549;
return _uniq_var_549;
};_uniq_var_1059.__lix_func__ = true;return _uniq_var_1059;})();
flattenBetweenArgCondition;
flattenBetweenArgCondition;
var flattenGEArgCondition = (function () {var _uniq_var_1063 = function (args, varName, def) {var _uniq_var_550 = (function () {var _uniq_var_1062 = function (_uniq_var_1060, _uniq_var_1061) {
if (typeof _uniq_var_1060.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1060.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1060.join.apply(_uniq_var_1060, arguments);
} else if (_uniq_var_1060.join !== undefined) {
if (_uniq_var_1061 === undefined) {
return _uniq_var_1060.join;
}
_uniq_var_1060.join = _uniq_var_1061;
}return _uniq_var_1060;
};_uniq_var_1062.__lix_func__ = true;return _uniq_var_1062;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2]], "");
_uniq_var_550;
return _uniq_var_550;
};_uniq_var_1063.__lix_func__ = true;return _uniq_var_1063;})();
flattenGEArgCondition;
flattenGEArgCondition;
var flattenNamedArgCondition = (function () {var _uniq_var_1064 = function (args, varName, def) {var _uniq_var_551 = flattenCondition(args[2], varName, def);
_uniq_var_551;
return _uniq_var_551;
};_uniq_var_1064.__lix_func__ = true;return _uniq_var_1064;})();
flattenNamedArgCondition;
flattenNamedArgCondition;
var flattenNotArgCondition = (function () {var _uniq_var_1068 = function (args, varName, def) {var _uniq_var_552 = flattenCondition(args[2], varName, def);
_uniq_var_552;
var cond0 = _uniq_var_552;
cond0;
cond0;
var _uniq_var_553 = (function () {var _uniq_var_1067 = function (_uniq_var_1065, _uniq_var_1066) {
if (typeof _uniq_var_1065.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1065.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1065.join.apply(_uniq_var_1065, arguments);
} else if (_uniq_var_1065.join !== undefined) {
if (_uniq_var_1066 === undefined) {
return _uniq_var_1065.join;
}
_uniq_var_1065.join = _uniq_var_1066;
}return _uniq_var_1065;
};_uniq_var_1067.__lix_func__ = true;return _uniq_var_1067;})()(["!(", cond0, ")"], "");
_uniq_var_553;
return _uniq_var_553;
};_uniq_var_1068.__lix_func__ = true;return _uniq_var_1068;})();
flattenNotArgCondition;
flattenNotArgCondition;
var flattenAndArgCondition = (function () {var _uniq_var_1072 = function (args, varName, def) {var _uniq_var_554 = flattenCondition(args[2], varName, def);
_uniq_var_554;
var cond0 = _uniq_var_554;
cond0;
cond0;
var _uniq_var_555 = flattenCondition(args[3], varName, def);
_uniq_var_555;
var cond1 = _uniq_var_555;
cond1;
cond1;
var _uniq_var_556 = (function () {var _uniq_var_1071 = function (_uniq_var_1069, _uniq_var_1070) {
if (typeof _uniq_var_1069.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1069.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1069.join.apply(_uniq_var_1069, arguments);
} else if (_uniq_var_1069.join !== undefined) {
if (_uniq_var_1070 === undefined) {
return _uniq_var_1069.join;
}
_uniq_var_1069.join = _uniq_var_1070;
}return _uniq_var_1069;
};_uniq_var_1071.__lix_func__ = true;return _uniq_var_1071;})()(["(", cond0, ") && (", cond1, ")"], "");
_uniq_var_556;
return _uniq_var_556;
};_uniq_var_1072.__lix_func__ = true;return _uniq_var_1072;})();
flattenAndArgCondition;
flattenAndArgCondition;
var flattenOrArgCondition = (function () {var _uniq_var_1076 = function (args, varName, def) {var _uniq_var_557 = flattenCondition(args[2], varName, def);
_uniq_var_557;
var cond0 = _uniq_var_557;
cond0;
cond0;
var _uniq_var_558 = flattenCondition(args[3], varName, def);
_uniq_var_558;
var cond1 = _uniq_var_558;
cond1;
cond1;
var _uniq_var_559 = (function () {var _uniq_var_1075 = function (_uniq_var_1073, _uniq_var_1074) {
if (typeof _uniq_var_1073.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1073.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1073.join.apply(_uniq_var_1073, arguments);
} else if (_uniq_var_1073.join !== undefined) {
if (_uniq_var_1074 === undefined) {
return _uniq_var_1073.join;
}
_uniq_var_1073.join = _uniq_var_1074;
}return _uniq_var_1073;
};_uniq_var_1075.__lix_func__ = true;return _uniq_var_1075;})()(["(", cond0, ") || (", cond1, ")"], "");
_uniq_var_559;
return _uniq_var_559;
};_uniq_var_1076.__lix_func__ = true;return _uniq_var_1076;})();
flattenOrArgCondition;
flattenOrArgCondition;
var flattenTypeCondition = (function () {var _uniq_var_1092 = function (args, varName, def) {var ret = null;
ret;
ret;
var _uniq_var_560 = true;
_uniq_var_560;
var _uniq_var_561 = null;
_uniq_var_561;
var _uniq_var_563 = __eq__(args[0], 'Number');
_uniq_var_563;
if ((_uniq_var_560 && _uniq_var_563)) {
(_uniq_var_560 = false);
var _uniq_var_562 = (function () {var _uniq_var_1079 = function (_uniq_var_1077, _uniq_var_1078) {
if (typeof _uniq_var_1077.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1077.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1077.join.apply(_uniq_var_1077, arguments);
} else if (_uniq_var_1077.join !== undefined) {
if (_uniq_var_1078 === undefined) {
return _uniq_var_1077.join;
}
_uniq_var_1077.join = _uniq_var_1078;
}return _uniq_var_1077;
};_uniq_var_1079.__lix_func__ = true;return _uniq_var_1079;})()(["typeof ", varName, " == 'number'"], "");
_uniq_var_562;
(_uniq_var_561 = (ret = _uniq_var_562));

};
var _uniq_var_565 = __eq__(args[0], 'String');
_uniq_var_565;
if ((_uniq_var_560 && _uniq_var_565)) {
(_uniq_var_560 = false);
var _uniq_var_564 = (function () {var _uniq_var_1082 = function (_uniq_var_1080, _uniq_var_1081) {
if (typeof _uniq_var_1080.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1080.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1080.join.apply(_uniq_var_1080, arguments);
} else if (_uniq_var_1080.join !== undefined) {
if (_uniq_var_1081 === undefined) {
return _uniq_var_1080.join;
}
_uniq_var_1080.join = _uniq_var_1081;
}return _uniq_var_1080;
};_uniq_var_1082.__lix_func__ = true;return _uniq_var_1082;})()(["typeof ", varName, " == 'string'"], "");
_uniq_var_564;
(_uniq_var_561 = (ret = _uniq_var_564));

};
var _uniq_var_567 = __eq__(args[0], 'Function');
_uniq_var_567;
if ((_uniq_var_560 && _uniq_var_567)) {
(_uniq_var_560 = false);
var _uniq_var_566 = (function () {var _uniq_var_1085 = function (_uniq_var_1083, _uniq_var_1084) {
if (typeof _uniq_var_1083.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1083.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1083.join.apply(_uniq_var_1083, arguments);
} else if (_uniq_var_1083.join !== undefined) {
if (_uniq_var_1084 === undefined) {
return _uniq_var_1083.join;
}
_uniq_var_1083.join = _uniq_var_1084;
}return _uniq_var_1083;
};_uniq_var_1085.__lix_func__ = true;return _uniq_var_1085;})()(["typeof ", varName, " == 'function'"], "");
_uniq_var_566;
(_uniq_var_561 = (ret = _uniq_var_566));

};
var _uniq_var_569 = __eq__(args[0], 'Boolean');
_uniq_var_569;
if ((_uniq_var_560 && _uniq_var_569)) {
(_uniq_var_560 = false);
var _uniq_var_568 = (function () {var _uniq_var_1088 = function (_uniq_var_1086, _uniq_var_1087) {
if (typeof _uniq_var_1086.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1086.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1086.join.apply(_uniq_var_1086, arguments);
} else if (_uniq_var_1086.join !== undefined) {
if (_uniq_var_1087 === undefined) {
return _uniq_var_1086.join;
}
_uniq_var_1086.join = _uniq_var_1087;
}return _uniq_var_1086;
};_uniq_var_1088.__lix_func__ = true;return _uniq_var_1088;})()(["typeof ", varName, " == 'boolean'"], "");
_uniq_var_568;
(_uniq_var_561 = (ret = _uniq_var_568));

};
if (_uniq_var_560) {
var _uniq_var_570 = transformVarName(args[0]);
_uniq_var_570;
var _uniq_var_571 = (function () {var _uniq_var_1091 = function (_uniq_var_1089, _uniq_var_1090) {
if (typeof _uniq_var_1089.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1089.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1089.join.apply(_uniq_var_1089, arguments);
} else if (_uniq_var_1089.join !== undefined) {
if (_uniq_var_1090 === undefined) {
return _uniq_var_1089.join;
}
_uniq_var_1089.join = _uniq_var_1090;
}return _uniq_var_1089;
};_uniq_var_1091.__lix_func__ = true;return _uniq_var_1091;})()([varName, " instanceof ", _uniq_var_570], "");
_uniq_var_571;
(_uniq_var_561 = _uniq_var_571);

};
return _uniq_var_561;
};_uniq_var_1092.__lix_func__ = true;return _uniq_var_1092;})();
flattenTypeCondition;
flattenTypeCondition;
var flattenVACondArgCondition = (function () {var _uniq_var_1093 = function (args, varName, def) {;
};_uniq_var_1093.__lix_func__ = true;return _uniq_var_1093;})();
flattenVACondArgCondition;
flattenVACondArgCondition;
var flattenConditionOp = {
"{any_type_arg}": flattenAnyTypeCondition,
"{anonymous_va_arg}": flattenAnyTypeCondition,
"{array_arg}": flattenArrayCondition,
"{va_args}": flattenVAArgsCondition,
"{va_cond_arg}": flattenVACondArgCondition,
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
var getFlattenDestructorOp = (function () {var _uniq_var_1094 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_572 = true;
_uniq_var_572;
var _uniq_var_573 = null;
_uniq_var_573;
if ((_uniq_var_572 && flattenDestructorOp[hint])) {
(_uniq_var_572 = false);
(_uniq_var_573 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_573;
return ret;
};_uniq_var_1094.__lix_func__ = true;return _uniq_var_1094;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_1095 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_574 = true;
_uniq_var_574;
var _uniq_var_575 = null;
_uniq_var_575;
if ((_uniq_var_574 && flattenConditionOp[hint])) {
(_uniq_var_574 = false);
(_uniq_var_575 = (ret = flattenConditionOp[hint]));

};
_uniq_var_575;
return ret;
};_uniq_var_1095.__lix_func__ = true;return _uniq_var_1095;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_1096 = function (args, varName) {var _uniq_var_576 = getFlattenDestructorOp(args[1]);
_uniq_var_576;
var _uniq_var_577 = call(_uniq_var_576, args, varName);
_uniq_var_577;
return _uniq_var_577;
};_uniq_var_1096.__lix_func__ = true;return _uniq_var_1096;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_1097 = function (args, varName, def) {var _uniq_var_578 = getFlattenConditionOp(args[1]);
_uniq_var_578;
var _uniq_var_579 = call(_uniq_var_578, args, varName, def);
_uniq_var_579;
return _uniq_var_579;
};_uniq_var_1097.__lix_func__ = true;return _uniq_var_1097;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_1098 = function (args, def) {var _uniq_var_580 = flattenCondition(args, "arguments", def);
_uniq_var_580;
return _uniq_var_580;
};_uniq_var_1098.__lix_func__ = true;return _uniq_var_1098;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_1099 = function (args) {var _uniq_var_581 = flattenDestructor(args, "arguments");
_uniq_var_581;
return _uniq_var_581;
};_uniq_var_1099.__lix_func__ = true;return _uniq_var_1099;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_1104 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_583 = foreach(args[2], (function () {var _uniq_var_1103 = function (item) {var _uniq_var_582 = (function () {var _uniq_var_1102 = function (_uniq_var_1100, _uniq_var_1101) {
if (typeof _uniq_var_1100.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1100.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1100.push.apply(_uniq_var_1100, arguments);
} else if (_uniq_var_1100.push !== undefined) {
if (_uniq_var_1101 === undefined) {
return _uniq_var_1100.push;
}
_uniq_var_1100.push = _uniq_var_1101;
}return _uniq_var_1100;
};_uniq_var_1102.__lix_func__ = true;return _uniq_var_1102;})()(ret, item[0]);
_uniq_var_582;
return _uniq_var_582;
};_uniq_var_1103.__lix_func__ = true;return _uniq_var_1103;})());
_uniq_var_583;
_uniq_var_583;
return ret;
};_uniq_var_1104.__lix_func__ = true;return _uniq_var_1104;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenFn = (function () {var _uniq_var_1105 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_584 = flattenArgumentsDestructor(expr[2]);
_uniq_var_584;
var destructor = _uniq_var_584;
destructor;
destructor;
var _uniq_var_585 = getFuncArgsNameList(expr[2]);
_uniq_var_585;
var funcArgsNameList = _uniq_var_585;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_586 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_586;
var func = _uniq_var_586;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_1105.__lix_func__ = true;return _uniq_var_1105;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_1106 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_587 = flatten(expr, define);
_uniq_var_587;
return _uniq_var_587;
};_uniq_var_1106.__lix_func__ = true;return _uniq_var_1106;})();
flattenAsterisk;
flattenAsterisk;
var flattenMatch = (function () {var _uniq_var_1107 = function (expr, define) {var _uniq_var_588 = flatten(expr[2], define);
_uniq_var_588;
var f = _uniq_var_588;
f;
f;
return [expr[0], f];
};_uniq_var_1107.__lix_func__ = true;return _uniq_var_1107;})();
flattenMatch;
flattenMatch;
var flattenMatchCaseList = (function () {var _uniq_var_1109 = function (expr, define) {var _uniq_var_591 = foreach(expr[2], (function () {var _uniq_var_1108 = function (item) {var _uniq_var_589 = flatten(item, define);
_uniq_var_589;
var _uniq_var_590 = define(_uniq_var_589);
_uniq_var_590;
return _uniq_var_590;
};_uniq_var_1108.__lix_func__ = true;return _uniq_var_1108;})());
_uniq_var_591;
_uniq_var_591;
return expr[0];
};_uniq_var_1109.__lix_func__ = true;return _uniq_var_1109;})();
flattenMatchCaseList;
flattenMatchCaseList;
var identity = (function () {var _uniq_var_1110 = function (x) {return x;
};_uniq_var_1110.__lix_func__ = true;return _uniq_var_1110;})();
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
'defer': flattenDefer,
'match': flattenMatch,
"{matchCaseList}": flattenMatchCaseList
};
flattenOpTable;
flattenOpTable;
var flattenOp = (function () {var _uniq_var_1111 = function (hint) {var _uniq_var_592 = true;
_uniq_var_592;
var _uniq_var_593 = null;
_uniq_var_593;
if ((_uniq_var_592 && flattenOpTable[hint])) {
(_uniq_var_592 = false);
(_uniq_var_593 = flattenOpTable[hint]);

};
if (_uniq_var_592) {
(_uniq_var_593 = flattenExpr);

};
return _uniq_var_593;
};_uniq_var_1111.__lix_func__ = true;return _uniq_var_1111;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_1112 = function (expr, define, ctx) {var _uniq_var_594 = flattenOp(expr[1]);
_uniq_var_594;
var _uniq_var_595 = _uniq_var_594(expr, define, ctx);
_uniq_var_595;
return _uniq_var_595;
};_uniq_var_1112.__lix_func__ = true;return _uniq_var_1112;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_1113 = function (i) {return i;
};_uniq_var_1113.__lix_func__ = true;return _uniq_var_1113;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_1114 = function (i) {;
};_uniq_var_1114.__lix_func__ = true;return _uniq_var_1114;})(),
appendExpr: (function () {var _uniq_var_1115 = function (i) {;
};_uniq_var_1115.__lix_func__ = true;return _uniq_var_1115;})()
};
def0;
def0;
var _uniq_var_596 = join(['s[', STEP, ']']);
_uniq_var_596;
var _uniq_var_597 = join(['s[', RET, ']']);
_uniq_var_597;
var seqFuncParamsName = {
step: _uniq_var_596,
ret: _uniq_var_597
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_1122 = function (expr) {var _uniq_var_598 = map(env0, (function () {var _uniq_var_1116 = function (i) {return i;
};_uniq_var_1116.__lix_func__ = true;return _uniq_var_1116;})());
_uniq_var_598;
var _uniq_var_599 = (function () {var _uniq_var_1119 = function (_uniq_var_1117, _uniq_var_1118) {
if (typeof _uniq_var_1117.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1117.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1117.join.apply(_uniq_var_1117, arguments);
} else if (_uniq_var_1117.join !== undefined) {
if (_uniq_var_1118 === undefined) {
return _uniq_var_1117.join;
}
_uniq_var_1117.join = _uniq_var_1118;
}return _uniq_var_1117;
};_uniq_var_1119.__lix_func__ = true;return _uniq_var_1119;})()(_uniq_var_598, "\n");
_uniq_var_599;
var libs = _uniq_var_599;
libs;
libs;
var _uniq_var_600 = flatten(expr, (function () {var _uniq_var_1120 = function (i) {;
};_uniq_var_1120.__lix_func__ = true;return _uniq_var_1120;})(), (function () {var _uniq_var_1121 = function (i) {return i;
};_uniq_var_1121.__lix_func__ = true;return _uniq_var_1121;})());
_uniq_var_600;
var flattenedExpr = _uniq_var_600;
flattenedExpr;
flattenedExpr;
var _uniq_var_601 = call(env_new);
_uniq_var_601;
var _uniq_var_602 = generateStart(flattenedExpr, _uniq_var_601, ctx0, def0);
_uniq_var_602;
var code = _uniq_var_602;
code;
code;
var _uniq_var_603 = join([libs, "\n", code]);
_uniq_var_603;
return _uniq_var_603;
};_uniq_var_1122.__lix_func__ = true;return _uniq_var_1122;})();
compile;
compile;
(exports.compile = compile);
compile;

