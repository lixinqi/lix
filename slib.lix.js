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
(function () {var _uniq_var_654 = function () {return 3;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})();
var join = (function () {var _uniq_var_658 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_657 = function (_uniq_var_655, _uniq_var_656) {
if (typeof _uniq_var_655.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_655.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_655.join.apply(_uniq_var_655, arguments);
} else if (_uniq_var_655.join !== undefined) {
if (_uniq_var_656 === undefined) {
return _uniq_var_655.join;
}
_uniq_var_655.join = _uniq_var_656;
}return _uniq_var_655;
};_uniq_var_657.__lix_func__ = true;return _uniq_var_657;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_658.__lix_func__ = true;return _uniq_var_658;})();
join;
join;
var map = (function () {var _uniq_var_663 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_662 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_661 = function (_uniq_var_659, _uniq_var_660) {
if (typeof _uniq_var_659.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_659.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_659.push.apply(_uniq_var_659, arguments);
} else if (_uniq_var_659.push !== undefined) {
if (_uniq_var_660 === undefined) {
return _uniq_var_659.push;
}
_uniq_var_659.push = _uniq_var_660;
}return _uniq_var_659;
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_662.__lix_func__ = true;return _uniq_var_662;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_663.__lix_func__ = true;return _uniq_var_663;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_665 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_664 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})();
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_666 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_666.__lix_func__ = true;return _uniq_var_666;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_671 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_667 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_667.__lix_func__ = true;return _uniq_var_667;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_670 = function (_uniq_var_668, _uniq_var_669) {
if (typeof _uniq_var_668.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_668.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_668.join.apply(_uniq_var_668, arguments);
} else if (_uniq_var_668.join !== undefined) {
if (_uniq_var_669 === undefined) {
return _uniq_var_668.join;
}
_uniq_var_668.join = _uniq_var_669;
}return _uniq_var_668;
};_uniq_var_670.__lix_func__ = true;return _uniq_var_670;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_671.__lix_func__ = true;return _uniq_var_671;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_672 = function (x) {return x;
};_uniq_var_672.__lix_func__ = true;return _uniq_var_672;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_682 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_674 = function (current) {return (function () {var _uniq_var_673 = function (v, loop) {var next = current;
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
};_uniq_var_673.__lix_func__ = true;return _uniq_var_673;})();
};_uniq_var_674.__lix_func__ = true;return _uniq_var_674;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_678 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_27 = (function () {var _uniq_var_677 = function (_uniq_var_675, _uniq_var_676) {
if (typeof _uniq_var_675.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_675.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_675.push.apply(_uniq_var_675, arguments);
} else if (_uniq_var_675.push !== undefined) {
if (_uniq_var_676 === undefined) {
return _uniq_var_675.push;
}
_uniq_var_675.push = _uniq_var_676;
}return _uniq_var_675;
};_uniq_var_677.__lix_func__ = true;return _uniq_var_677;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_678.__lix_func__ = true;return _uniq_var_678;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_681 = function (_uniq_var_679, _uniq_var_680) {
if (typeof _uniq_var_679.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_679.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_679.join.apply(_uniq_var_679, arguments);
} else if (_uniq_var_679.join !== undefined) {
if (_uniq_var_680 === undefined) {
return _uniq_var_679.join;
}
_uniq_var_679.join = _uniq_var_680;
}return _uniq_var_679;
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_682.__lix_func__ = true;return _uniq_var_682;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_683 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_683.__lix_func__ = true;return _uniq_var_683;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_684 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_684.__lix_func__ = true;return _uniq_var_684;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_689 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_685 = function (i) {var _uniq_var_38 = true;
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
};_uniq_var_685.__lix_func__ = true;return _uniq_var_685;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_688 = function (_uniq_var_686, _uniq_var_687) {
if (typeof _uniq_var_686.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_686.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_686.join.apply(_uniq_var_686, arguments);
} else if (_uniq_var_686.join !== undefined) {
if (_uniq_var_687 === undefined) {
return _uniq_var_686.join;
}
_uniq_var_686.join = _uniq_var_687;
}return _uniq_var_686;
};_uniq_var_688.__lix_func__ = true;return _uniq_var_688;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_689.__lix_func__ = true;return _uniq_var_689;})();
generateIf;
generateIf;
var operateFuncName = {
"<>": 'call',
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
var generateAtomic = (function () {var _uniq_var_690 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_691 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
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
};_uniq_var_691.__lix_func__ = true;return _uniq_var_691;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_692 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_692.__lix_func__ = true;return _uniq_var_692;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_697 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_693 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_693.__lix_func__ = true;return _uniq_var_693;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_696 = function (_uniq_var_694, _uniq_var_695) {
if (typeof _uniq_var_694.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_694.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_694.join.apply(_uniq_var_694, arguments);
} else if (_uniq_var_694.join !== undefined) {
if (_uniq_var_695 === undefined) {
return _uniq_var_694.join;
}
_uniq_var_694.join = _uniq_var_695;
}return _uniq_var_694;
};_uniq_var_696.__lix_func__ = true;return _uniq_var_696;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_698 = function (name) {var _uniq_var_73 = true;
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
};_uniq_var_698.__lix_func__ = true;return _uniq_var_698;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_699 = function (expr) {var _uniq_var_85 = true;
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
};_uniq_var_699.__lix_func__ = true;return _uniq_var_699;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_700 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
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
};_uniq_var_700.__lix_func__ = true;return _uniq_var_700;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_701 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
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
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_706 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_702 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_702.__lix_func__ = true;return _uniq_var_702;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_705 = function (_uniq_var_703, _uniq_var_704) {
if (typeof _uniq_var_703.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_703.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_703.join.apply(_uniq_var_703, arguments);
} else if (_uniq_var_703.join !== undefined) {
if (_uniq_var_704 === undefined) {
return _uniq_var_703.join;
}
_uniq_var_703.join = _uniq_var_704;
}return _uniq_var_703;
};_uniq_var_705.__lix_func__ = true;return _uniq_var_705;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_706.__lix_func__ = true;return _uniq_var_706;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_707 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
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
};_uniq_var_707.__lix_func__ = true;return _uniq_var_707;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_708 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_708.__lix_func__ = true;return _uniq_var_708;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_709 = function (expr, env, ctx) {return 'break';
};_uniq_var_709.__lix_func__ = true;return _uniq_var_709;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_710 = function (expr, env, ctx, def) {return "";
};_uniq_var_710.__lix_func__ = true;return _uniq_var_710;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_711 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
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
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_712 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_712.__lix_func__ = true;return _uniq_var_712;})();
generateAsterisk;
generateAsterisk;
var generateAmpersandObject = (function () {var _uniq_var_731 = function (expr, env, ctx, def) {var varnames = {

};
varnames;
varnames;
var _uniq_var_133 = foreach(expr[0], (function () {var _uniq_var_713 = function (item, index) {var _uniq_var_126 = getVarName(item);
_uniq_var_126;
var varname = _uniq_var_126;
varname;
varname;
(varnames[index] = varname);
var _uniq_var_127 = true;
_uniq_var_127;
var _uniq_var_128 = null;
_uniq_var_128;
var _uniq_var_130 = __eq__(env[varname], undefined);
_uniq_var_130;
var _uniq_var_131 = _uniq_var_130;
_uniq_var_131;
if (_uniq_var_131) {
var _uniq_var_132 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_132;
(_uniq_var_131 = _uniq_var_132);

};
if ((_uniq_var_127 && _uniq_var_131)) {
(_uniq_var_127 = false);
var _uniq_var_129 = generate([item, '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_129;
(_uniq_var_128 = _uniq_var_129);

};
return _uniq_var_128;
};_uniq_var_713.__lix_func__ = true;return _uniq_var_713;})());
_uniq_var_133;
_uniq_var_133;
var _uniq_var_135 = map(varnames, (function () {var _uniq_var_717 = function (item, index) {var _uniq_var_134 = (function () {var _uniq_var_716 = function (_uniq_var_714, _uniq_var_715) {
if (typeof _uniq_var_714.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_714.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_714.join.apply(_uniq_var_714, arguments);
} else if (_uniq_var_714.join !== undefined) {
if (_uniq_var_715 === undefined) {
return _uniq_var_714.join;
}
_uniq_var_714.join = _uniq_var_715;
}return _uniq_var_714;
};_uniq_var_716.__lix_func__ = true;return _uniq_var_716;})()([item, " = _x ? _x.", index, " : undefined\n"], "");
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_717.__lix_func__ = true;return _uniq_var_717;})());
_uniq_var_135;
var _uniq_var_136 = (function () {var _uniq_var_720 = function (_uniq_var_718, _uniq_var_719) {
if (typeof _uniq_var_718.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_718.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_718.join.apply(_uniq_var_718, arguments);
} else if (_uniq_var_718.join !== undefined) {
if (_uniq_var_719 === undefined) {
return _uniq_var_718.join;
}
_uniq_var_718.join = _uniq_var_719;
}return _uniq_var_718;
};_uniq_var_720.__lix_func__ = true;return _uniq_var_720;})()(_uniq_var_135, "");
_uniq_var_136;
var _uniq_var_138 = map(varnames, (function () {var _uniq_var_724 = function (item, index) {var _uniq_var_137 = (function () {var _uniq_var_723 = function (_uniq_var_721, _uniq_var_722) {
if (typeof _uniq_var_721.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_721.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_721.join.apply(_uniq_var_721, arguments);
} else if (_uniq_var_721.join !== undefined) {
if (_uniq_var_722 === undefined) {
return _uniq_var_721.join;
}
_uniq_var_721.join = _uniq_var_722;
}return _uniq_var_721;
};_uniq_var_723.__lix_func__ = true;return _uniq_var_723;})()([index, ": ", item], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_724.__lix_func__ = true;return _uniq_var_724;})());
_uniq_var_138;
var _uniq_var_139 = (function () {var _uniq_var_727 = function (_uniq_var_725, _uniq_var_726) {
if (typeof _uniq_var_725.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_725.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_725.join.apply(_uniq_var_725, arguments);
} else if (_uniq_var_725.join !== undefined) {
if (_uniq_var_726 === undefined) {
return _uniq_var_725.join;
}
_uniq_var_725.join = _uniq_var_726;
}return _uniq_var_725;
};_uniq_var_727.__lix_func__ = true;return _uniq_var_727;})()(_uniq_var_138, ", ");
_uniq_var_139;
var _uniq_var_140 = (function () {var _uniq_var_730 = function (_uniq_var_728, _uniq_var_729) {
if (typeof _uniq_var_728.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_728.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_728.join.apply(_uniq_var_728, arguments);
} else if (_uniq_var_728.join !== undefined) {
if (_uniq_var_729 === undefined) {
return _uniq_var_728.join;
}
_uniq_var_728.join = _uniq_var_729;
}return _uniq_var_728;
};_uniq_var_730.__lix_func__ = true;return _uniq_var_730;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", _uniq_var_136, "return _x\n", "}\n", "} else {\n", "return function () {\n", "return {", _uniq_var_139, "}\n", "}\n", "}\n", "})"], "");
_uniq_var_140;
return _uniq_var_140;
};_uniq_var_731.__lix_func__ = true;return _uniq_var_731;})();
generateAmpersandObject;
generateAmpersandObject;
var generateAmpersandBracket = (function () {var _uniq_var_749 = function (expr, env, ctx, def) {var varnames = [];
varnames;
varnames;
var _uniq_var_149 = foreach(expr[0], (function () {var _uniq_var_735 = function (item) {var _uniq_var_141 = getVarName(item);
_uniq_var_141;
var varname = _uniq_var_141;
varname;
varname;
var _uniq_var_142 = (function () {var _uniq_var_734 = function (_uniq_var_732, _uniq_var_733) {
if (typeof _uniq_var_732.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_732.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_732.push.apply(_uniq_var_732, arguments);
} else if (_uniq_var_732.push !== undefined) {
if (_uniq_var_733 === undefined) {
return _uniq_var_732.push;
}
_uniq_var_732.push = _uniq_var_733;
}return _uniq_var_732;
};_uniq_var_734.__lix_func__ = true;return _uniq_var_734;})()(varnames, varname);
_uniq_var_142;
_uniq_var_142;
var _uniq_var_143 = true;
_uniq_var_143;
var _uniq_var_144 = null;
_uniq_var_144;
var _uniq_var_146 = __eq__(env[varname], undefined);
_uniq_var_146;
var _uniq_var_147 = _uniq_var_146;
_uniq_var_147;
if (_uniq_var_147) {
var _uniq_var_148 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_148;
(_uniq_var_147 = _uniq_var_148);

};
if ((_uniq_var_143 && _uniq_var_147)) {
(_uniq_var_143 = false);
var _uniq_var_145 = generate([item, '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_145;
(_uniq_var_144 = _uniq_var_145);

};
return _uniq_var_144;
};_uniq_var_735.__lix_func__ = true;return _uniq_var_735;})());
_uniq_var_149;
_uniq_var_149;
var _uniq_var_151 = map(varnames, (function () {var _uniq_var_739 = function (item, index) {var _uniq_var_150 = (function () {var _uniq_var_738 = function (_uniq_var_736, _uniq_var_737) {
if (typeof _uniq_var_736.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_736.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_736.join.apply(_uniq_var_736, arguments);
} else if (_uniq_var_736.join !== undefined) {
if (_uniq_var_737 === undefined) {
return _uniq_var_736.join;
}
_uniq_var_736.join = _uniq_var_737;
}return _uniq_var_736;
};_uniq_var_738.__lix_func__ = true;return _uniq_var_738;})()([item, " = _x ? _x[", index, "] : undefined\n"], "");
_uniq_var_150;
return _uniq_var_150;
};_uniq_var_739.__lix_func__ = true;return _uniq_var_739;})());
_uniq_var_151;
var _uniq_var_152 = (function () {var _uniq_var_742 = function (_uniq_var_740, _uniq_var_741) {
if (typeof _uniq_var_740.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_740.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_740.join.apply(_uniq_var_740, arguments);
} else if (_uniq_var_740.join !== undefined) {
if (_uniq_var_741 === undefined) {
return _uniq_var_740.join;
}
_uniq_var_740.join = _uniq_var_741;
}return _uniq_var_740;
};_uniq_var_742.__lix_func__ = true;return _uniq_var_742;})()(_uniq_var_151, "");
_uniq_var_152;
var _uniq_var_153 = (function () {var _uniq_var_745 = function (_uniq_var_743, _uniq_var_744) {
if (typeof _uniq_var_743.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_743.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_743.join.apply(_uniq_var_743, arguments);
} else if (_uniq_var_743.join !== undefined) {
if (_uniq_var_744 === undefined) {
return _uniq_var_743.join;
}
_uniq_var_743.join = _uniq_var_744;
}return _uniq_var_743;
};_uniq_var_745.__lix_func__ = true;return _uniq_var_745;})()(varnames, ", ");
_uniq_var_153;
var _uniq_var_154 = (function () {var _uniq_var_748 = function (_uniq_var_746, _uniq_var_747) {
if (typeof _uniq_var_746.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_746.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_746.join.apply(_uniq_var_746, arguments);
} else if (_uniq_var_746.join !== undefined) {
if (_uniq_var_747 === undefined) {
return _uniq_var_746.join;
}
_uniq_var_746.join = _uniq_var_747;
}return _uniq_var_746;
};_uniq_var_748.__lix_func__ = true;return _uniq_var_748;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", _uniq_var_152, "return _x\n", "}\n", "} else {\n", "return function () {\n", "return [", _uniq_var_153, "]\n", "}\n", "}\n", "})"], "");
_uniq_var_154;
return _uniq_var_154;
};_uniq_var_749.__lix_func__ = true;return _uniq_var_749;})();
generateAmpersandBracket;
generateAmpersandBracket;
var generateAmpersand = (function () {var _uniq_var_753 = function (expr, env, ctx, def) {var _uniq_var_155 = true;
_uniq_var_155;
var _uniq_var_156 = null;
_uniq_var_156;
var _uniq_var_164 = __eq__(expr[0][1], '{atomic}');
_uniq_var_164;
if ((_uniq_var_155 && _uniq_var_164)) {
(_uniq_var_155 = false);
var _uniq_var_157 = getVarName(expr[0]);
_uniq_var_157;
var varname = _uniq_var_157;
varname;
varname;
var _uniq_var_158 = true;
_uniq_var_158;
var _uniq_var_159 = null;
_uniq_var_159;
var _uniq_var_161 = __eq__(env[varname], undefined);
_uniq_var_161;
var _uniq_var_162 = _uniq_var_161;
_uniq_var_162;
if (_uniq_var_162) {
var _uniq_var_163 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_163;
(_uniq_var_162 = _uniq_var_163);

};
if ((_uniq_var_158 && _uniq_var_162)) {
(_uniq_var_158 = false);
var _uniq_var_160 = generate([expr[0], '=', ['undefined', '{atomic}', '{var}']], env, ctx, def);
_uniq_var_160;
(_uniq_var_159 = _uniq_var_160);

};
(_uniq_var_156 = _uniq_var_159);

};
if (_uniq_var_155) {
var _uniq_var_165 = generate(expr[0], env, ctx, def);
_uniq_var_165;
var varname = _uniq_var_165;
varname;
(_uniq_var_156 = varname);

};
_uniq_var_156;
var _uniq_var_166 = (function () {var _uniq_var_752 = function (_uniq_var_750, _uniq_var_751) {
if (typeof _uniq_var_750.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_750.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_750.join.apply(_uniq_var_750, arguments);
} else if (_uniq_var_750.join !== undefined) {
if (_uniq_var_751 === undefined) {
return _uniq_var_750.join;
}
_uniq_var_750.join = _uniq_var_751;
}return _uniq_var_750;
};_uniq_var_752.__lix_func__ = true;return _uniq_var_752;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_166;
return _uniq_var_166;
};_uniq_var_753.__lix_func__ = true;return _uniq_var_753;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_754 = function (expr, env, ctx, def) {var _uniq_var_167 = generateFieldAccess(expr);
_uniq_var_167;
var varname = _uniq_var_167;
varname;
varname;
var ret = [];
ret;
ret;
var _uniq_var_168 = true;
_uniq_var_168;
var _uniq_var_169 = null;
_uniq_var_169;
var _uniq_var_171 = __eq__(expr[1], "{atomic}");
_uniq_var_171;
var _uniq_var_172 = _uniq_var_171;
_uniq_var_172;
if (_uniq_var_172) {
var _uniq_var_173 = __eq__(env[varname], undefined);
_uniq_var_173;
(_uniq_var_172 = _uniq_var_173);

};
var _uniq_var_174 = _uniq_var_172;
_uniq_var_174;
if (_uniq_var_174) {
var _uniq_var_175 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_175;
(_uniq_var_174 = _uniq_var_175);

};
if ((_uniq_var_168 && _uniq_var_174)) {
(_uniq_var_168 = false);
var _uniq_var_170 = generateDef(expr, env, ctx, def);
_uniq_var_170;
(_uniq_var_169 = (ret = _uniq_var_170));

};
if (_uniq_var_168) {
var _uniq_var_176 = generate(expr[0], env, ctx0, def);
_uniq_var_176;
var varname = _uniq_var_176;
varname;
varname;
var _uniq_var_177 = generate(expr[2], env, ctx, def);
_uniq_var_177;
var value = _uniq_var_177;
value;
value;
var _uniq_var_178 = true;
_uniq_var_178;
var _uniq_var_179 = null;
_uniq_var_179;
var _uniq_var_181 = __ne__(value, undefined);
_uniq_var_181;
if ((_uniq_var_178 && _uniq_var_181)) {
(_uniq_var_178 = false);
var _uniq_var_180 = join([varname, " = ", value]);
_uniq_var_180;
(_uniq_var_179 = (ret = _uniq_var_180));

};
if (_uniq_var_178) {
(_uniq_var_179 = (ret = undefined));

};
(_uniq_var_169 = _uniq_var_179);

};
_uniq_var_169;
return ret;
};_uniq_var_754.__lix_func__ = true;return _uniq_var_754;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_761 = function (expr, env, ctx, def) {var _uniq_var_182 = true;
_uniq_var_182;
var _uniq_var_183 = null;
_uniq_var_183;
var _uniq_var_184 = __eq__(expr[3], undefined);
_uniq_var_184;
if ((_uniq_var_182 && _uniq_var_184)) {
(_uniq_var_182 = false);
(_uniq_var_183 = (expr[3] = []));

};
_uniq_var_183;
var _uniq_var_185 = env_new(env);
_uniq_var_185;
var funcEnv = _uniq_var_185;
funcEnv;
funcEnv;
var _uniq_var_186 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_186;
var args = _uniq_var_186;
args;
args;
var _uniq_var_187 = call(getUniqVarName);
_uniq_var_187;
var tmpVar = _uniq_var_187;
tmpVar;
tmpVar;
var _uniq_var_188 = call(GenerateDefNew);
_uniq_var_188;
var def = _uniq_var_188;
def;
def;
var _uniq_var_189 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_189;
var body = _uniq_var_189;
body;
body;
var _uniq_var_190 = transformVarName('arguments');
_uniq_var_190;
var _uniq_var_191 = (function () {var _uniq_var_757 = function (_uniq_var_755, _uniq_var_756) {
if (typeof _uniq_var_755.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_755.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_755.join.apply(_uniq_var_755, arguments);
} else if (_uniq_var_755.join !== undefined) {
if (_uniq_var_756 === undefined) {
return _uniq_var_755.join;
}
_uniq_var_755.join = _uniq_var_756;
}return _uniq_var_755;
};_uniq_var_757.__lix_func__ = true;return _uniq_var_757;})()(expr[3], ";\n");
_uniq_var_191;
var _uniq_var_192 = call(def.defineVar);
_uniq_var_192;
var _uniq_var_193 = call(def.appendExpr);
_uniq_var_193;
var _uniq_var_194 = call(def.definedFns);
_uniq_var_194;
var _uniq_var_195 = (function () {var _uniq_var_760 = function (_uniq_var_758, _uniq_var_759) {
if (typeof _uniq_var_758.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_758.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_758.join.apply(_uniq_var_758, arguments);
} else if (_uniq_var_758.join !== undefined) {
if (_uniq_var_759 === undefined) {
return _uniq_var_758.join;
}
_uniq_var_758.join = _uniq_var_759;
}return _uniq_var_758;
};_uniq_var_760.__lix_func__ = true;return _uniq_var_760;})()(['(function (', args, ') {\n', 'var ', _uniq_var_190, ' = arguments;\n', _uniq_var_191, ";\n", _uniq_var_192, ";\n", _uniq_var_193, _uniq_var_194, 'return ', body, ";\n", '})'], '');
_uniq_var_195;
return _uniq_var_195;
};_uniq_var_761.__lix_func__ = true;return _uniq_var_761;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_768 = function (expr0, env, ctx, prevDef) {var _uniq_var_196 = call(getUniqVarName);
_uniq_var_196;
var funcName = _uniq_var_196;
funcName;
funcName;
var expr = expr0[2];
expr;
expr;
var _uniq_var_197 = true;
_uniq_var_197;
var _uniq_var_198 = null;
_uniq_var_198;
var _uniq_var_199 = __eq__(expr[3], undefined);
_uniq_var_199;
if ((_uniq_var_197 && _uniq_var_199)) {
(_uniq_var_197 = false);
(_uniq_var_198 = (expr[3] = []));

};
_uniq_var_198;
var _uniq_var_200 = env_new(env);
_uniq_var_200;
var funcEnv = _uniq_var_200;
funcEnv;
funcEnv;
var _uniq_var_201 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_201;
var args = _uniq_var_201;
args;
args;
var _uniq_var_202 = call(getUniqVarName);
_uniq_var_202;
var tmpVar = _uniq_var_202;
tmpVar;
tmpVar;
var _uniq_var_203 = call(GenerateDefNew);
_uniq_var_203;
var def = _uniq_var_203;
def;
def;
var _uniq_var_204 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_204;
var body = _uniq_var_204;
body;
body;
var _uniq_var_205 = transformVarName('arguments');
_uniq_var_205;
var _uniq_var_206 = (function () {var _uniq_var_764 = function (_uniq_var_762, _uniq_var_763) {
if (typeof _uniq_var_762.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_762.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_762.join.apply(_uniq_var_762, arguments);
} else if (_uniq_var_762.join !== undefined) {
if (_uniq_var_763 === undefined) {
return _uniq_var_762.join;
}
_uniq_var_762.join = _uniq_var_763;
}return _uniq_var_762;
};_uniq_var_764.__lix_func__ = true;return _uniq_var_764;})()(expr[3], ";\n");
_uniq_var_206;
var _uniq_var_207 = call(def.defineVar);
_uniq_var_207;
var _uniq_var_208 = call(def.appendExpr);
_uniq_var_208;
var _uniq_var_209 = call(def.definedFns);
_uniq_var_209;
var _uniq_var_210 = (function () {var _uniq_var_767 = function (_uniq_var_765, _uniq_var_766) {
if (typeof _uniq_var_765.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_765.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_765.join.apply(_uniq_var_765, arguments);
} else if (_uniq_var_765.join !== undefined) {
if (_uniq_var_766 === undefined) {
return _uniq_var_765.join;
}
_uniq_var_765.join = _uniq_var_766;
}return _uniq_var_765;
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_205, ' = arguments;\n', _uniq_var_206, ";\n", _uniq_var_207, ";\n", _uniq_var_208, ";\n", _uniq_var_209, ";\n", 'return ', body, ";\n", '}'], '');
_uniq_var_210;
var _uniq_var_211 = prevDef.appendExpr(_uniq_var_210);
_uniq_var_211;
_uniq_var_211;
var _uniq_var_212 = getAtomicExprVarName(expr0[0]);
_uniq_var_212;
var _uniq_var_213 = prevDef.defineFn(_uniq_var_212, funcName, expr0[3], expr[0].length);
_uniq_var_213;
_uniq_var_213;
return undefined;
};_uniq_var_768.__lix_func__ = true;return _uniq_var_768;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_770 = function (expr, env, ctx, def) {var _uniq_var_214 = generate(expr[1], env, ctx0, def);
_uniq_var_214;
var func = _uniq_var_214;
func;
func;
var _uniq_var_215 = generate(expr[0], env, ctx0, def);
_uniq_var_215;
var args = _uniq_var_215;
args;
args;
var _uniq_var_221 = foreach(expr, (function () {var _uniq_var_769 = function (item, index) {var _uniq_var_216 = true;
_uniq_var_216;
var _uniq_var_217 = null;
_uniq_var_217;
var _uniq_var_220 = __gt__(index, 1);
_uniq_var_220;
if ((_uniq_var_216 && _uniq_var_220)) {
(_uniq_var_216 = false);
var _uniq_var_218 = generate(item, env, ctx0, def);
_uniq_var_218;
var _uniq_var_219 = join([args, ', ', _uniq_var_218]);
_uniq_var_219;
(_uniq_var_217 = (args = _uniq_var_219));

};
return _uniq_var_217;
};_uniq_var_769.__lix_func__ = true;return _uniq_var_769;})());
_uniq_var_221;
_uniq_var_221;
var _uniq_var_222 = join([func, '(', args, ')']);
_uniq_var_222;
var _uniq_var_223 = ctx(_uniq_var_222);
_uniq_var_223;
return _uniq_var_223;
};_uniq_var_770.__lix_func__ = true;return _uniq_var_770;})();
generateExpr;
generateExpr;
var fnArgsTempVarDefine = (function () {var _uniq_var_786 = function () {var vars = [];
vars;
vars;
return {
newVar: (function () {var _uniq_var_777 = function () {var _uniq_var_224 = call(getUniqVarName);
_uniq_var_224;
var _uniq_var_225 = (function () {var _uniq_var_773 = function (_uniq_var_771, _uniq_var_772) {
if (typeof _uniq_var_771.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_771.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_771.join.apply(_uniq_var_771, arguments);
} else if (_uniq_var_771.join !== undefined) {
if (_uniq_var_772 === undefined) {
return _uniq_var_771.join;
}
_uniq_var_771.join = _uniq_var_772;
}return _uniq_var_771;
};_uniq_var_773.__lix_func__ = true;return _uniq_var_773;})()(['_at', _uniq_var_224], "");
_uniq_var_225;
var ret = _uniq_var_225;
ret;
ret;
var _uniq_var_226 = (function () {var _uniq_var_776 = function (_uniq_var_774, _uniq_var_775) {
if (typeof _uniq_var_774.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_774.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_774.push.apply(_uniq_var_774, arguments);
} else if (_uniq_var_774.push !== undefined) {
if (_uniq_var_775 === undefined) {
return _uniq_var_774.push;
}
_uniq_var_774.push = _uniq_var_775;
}return _uniq_var_774;
};_uniq_var_776.__lix_func__ = true;return _uniq_var_776;})()(vars, ret);
_uniq_var_226;
_uniq_var_226;
return ret;
};_uniq_var_777.__lix_func__ = true;return _uniq_var_777;})(),
vars: (function () {var _uniq_var_778 = function () {return vars;
};_uniq_var_778.__lix_func__ = true;return _uniq_var_778;})(),
varToStr: (function () {var _uniq_var_785 = function () {var ret = null;
ret;
ret;
var _uniq_var_227 = true;
_uniq_var_227;
var _uniq_var_228 = null;
_uniq_var_228;
if ((_uniq_var_227 && vars.length)) {
(_uniq_var_227 = false);
var _uniq_var_229 = (function () {var _uniq_var_781 = function (_uniq_var_779, _uniq_var_780) {
if (typeof _uniq_var_779.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_779.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_779.join.apply(_uniq_var_779, arguments);
} else if (_uniq_var_779.join !== undefined) {
if (_uniq_var_780 === undefined) {
return _uniq_var_779.join;
}
_uniq_var_779.join = _uniq_var_780;
}return _uniq_var_779;
};_uniq_var_781.__lix_func__ = true;return _uniq_var_781;})()(vars, ", ");
_uniq_var_229;
var _uniq_var_230 = (function () {var _uniq_var_784 = function (_uniq_var_782, _uniq_var_783) {
if (typeof _uniq_var_782.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_782.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_782.join.apply(_uniq_var_782, arguments);
} else if (_uniq_var_782.join !== undefined) {
if (_uniq_var_783 === undefined) {
return _uniq_var_782.join;
}
_uniq_var_782.join = _uniq_var_783;
}return _uniq_var_782;
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})()(['var ', _uniq_var_229, ";\n"], "");
_uniq_var_230;
(_uniq_var_228 = (ret = _uniq_var_230));

};
_uniq_var_228;
return ret;
};_uniq_var_785.__lix_func__ = true;return _uniq_var_785;})()
};
};_uniq_var_786.__lix_func__ = true;return _uniq_var_786;})();
fnArgsTempVarDefine;
fnArgsTempVarDefine;
var generatePtn = (function () {var _uniq_var_790 = function (expr, env, ctx, def) {var _uniq_var_231 = call(fnArgsTempVarDefine);
_uniq_var_231;
var argDef = _uniq_var_231;
argDef;
argDef;
var _uniq_var_232 = flattenCondition(expr[2], "x", argDef);
_uniq_var_232;
var condition = _uniq_var_232;
condition;
condition;
var _uniq_var_233 = generateAtomic(expr[0]);
_uniq_var_233;
var name = _uniq_var_233;
name;
name;
var _uniq_var_234 = (function () {var _uniq_var_789 = function (_uniq_var_787, _uniq_var_788) {
if (typeof _uniq_var_787.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_787.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_787.join.apply(_uniq_var_787, arguments);
} else if (_uniq_var_787.join !== undefined) {
if (_uniq_var_788 === undefined) {
return _uniq_var_787.join;
}
_uniq_var_787.join = _uniq_var_788;
}return _uniq_var_787;
};_uniq_var_789.__lix_func__ = true;return _uniq_var_789;})()(["function ", name, "(x) {\n", "return ", condition, ";\n", "};\n"], "");
_uniq_var_234;
var _uniq_var_235 = def.appendExpr(_uniq_var_234);
_uniq_var_235;
_uniq_var_235;
return name;
};_uniq_var_790.__lix_func__ = true;return _uniq_var_790;})();
generatePtn;
generatePtn;
var predefineFn = (function () {var _uniq_var_817 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_797 = function (n) {var ret = [];
ret;
ret;
var i = 0;
i;
i;
var _uniq_var_236 = __lt__(i, n);
_uniq_var_236;
while (_uniq_var_236) {
var _uniq_var_237 = __add__(prefix, i);
_uniq_var_237;
var _uniq_var_238 = (function () {var _uniq_var_793 = function (_uniq_var_791, _uniq_var_792) {
if (typeof _uniq_var_791.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_791.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_791.push.apply(_uniq_var_791, arguments);
} else if (_uniq_var_791.push !== undefined) {
if (_uniq_var_792 === undefined) {
return _uniq_var_791.push;
}
_uniq_var_791.push = _uniq_var_792;
}return _uniq_var_791;
};_uniq_var_793.__lix_func__ = true;return _uniq_var_793;})()(ret, _uniq_var_237);
_uniq_var_238;
_uniq_var_238;
var _uniq_var_239 = __add__(i, 1);
_uniq_var_239;
(i = _uniq_var_239);
var _uniq_var_236 = __lt__(i, n);
_uniq_var_236;
}
null;
var _uniq_var_240 = (function () {var _uniq_var_796 = function (_uniq_var_794, _uniq_var_795) {
if (typeof _uniq_var_794.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_794.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_794.join.apply(_uniq_var_794, arguments);
} else if (_uniq_var_794.join !== undefined) {
if (_uniq_var_795 === undefined) {
return _uniq_var_794.join;
}
_uniq_var_794.join = _uniq_var_795;
}return _uniq_var_794;
};_uniq_var_796.__lix_func__ = true;return _uniq_var_796;})()(ret, ", ");
_uniq_var_240;
return _uniq_var_240;
};_uniq_var_797.__lix_func__ = true;return _uniq_var_797;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_257 = foreach(candidates, (function () {var _uniq_var_810 = function (item) {var _uniq_var_241 = true;
_uniq_var_241;
var _uniq_var_242 = null;
_uniq_var_242;
var _uniq_var_243 = __gt__(item.narg, max_narg);
_uniq_var_243;
if ((_uniq_var_241 && _uniq_var_243)) {
(_uniq_var_241 = false);
(_uniq_var_242 = (max_narg = item.narg));

};
_uniq_var_242;
var _uniq_var_244 = call(fnArgsTempVarDefine);
_uniq_var_244;
var def = _uniq_var_244;
def;
def;
var _uniq_var_245 = flattenArgumentsCondition(item.condition, def);
_uniq_var_245;
var condition = _uniq_var_245;
condition;
condition;
var _uniq_var_246 = call(getArgListString, item.narg);
_uniq_var_246;
var _uniq_var_247 = (function () {var _uniq_var_800 = function (_uniq_var_798, _uniq_var_799) {
if (typeof _uniq_var_798.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_798.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_798.join.apply(_uniq_var_798, arguments);
} else if (_uniq_var_798.join !== undefined) {
if (_uniq_var_799 === undefined) {
return _uniq_var_798.join;
}
_uniq_var_798.join = _uniq_var_799;
}return _uniq_var_798;
};_uniq_var_800.__lix_func__ = true;return _uniq_var_800;})()(["return ", item.func, "(", _uniq_var_246, ");\n"], "");
_uniq_var_247;
var stmt = _uniq_var_247;
stmt;
stmt;
var _uniq_var_248 = true;
_uniq_var_248;
var _uniq_var_249 = null;
_uniq_var_249;
var _uniq_var_251 = __eq__(item.condition[1], "{va_args}");
_uniq_var_251;
if ((_uniq_var_248 && _uniq_var_251)) {
(_uniq_var_248 = false);
var _uniq_var_250 = (function () {var _uniq_var_803 = function (_uniq_var_801, _uniq_var_802) {
if (typeof _uniq_var_801.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_801.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_801.join.apply(_uniq_var_801, arguments);
} else if (_uniq_var_801.join !== undefined) {
if (_uniq_var_802 === undefined) {
return _uniq_var_801.join;
}
_uniq_var_801.join = _uniq_var_802;
}return _uniq_var_801;
};_uniq_var_803.__lix_func__ = true;return _uniq_var_803;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
_uniq_var_250;
var stmt = _uniq_var_250;
stmt;
(_uniq_var_249 = stmt);

};
_uniq_var_249;
var _uniq_var_252 = true;
_uniq_var_252;
var _uniq_var_253 = null;
_uniq_var_253;
if ((_uniq_var_252 && condition)) {
(_uniq_var_252 = false);
var _uniq_var_254 = call(def.varToStr);
_uniq_var_254;
var _uniq_var_255 = (function () {var _uniq_var_806 = function (_uniq_var_804, _uniq_var_805) {
if (typeof _uniq_var_804.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_804.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_804.join.apply(_uniq_var_804, arguments);
} else if (_uniq_var_804.join !== undefined) {
if (_uniq_var_805 === undefined) {
return _uniq_var_804.join;
}
_uniq_var_804.join = _uniq_var_805;
}return _uniq_var_804;
};_uniq_var_806.__lix_func__ = true;return _uniq_var_806;})()([_uniq_var_254, "if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_255;
(_uniq_var_253 = (stmt = _uniq_var_255));

};
_uniq_var_253;
var _uniq_var_256 = (function () {var _uniq_var_809 = function (_uniq_var_807, _uniq_var_808) {
if (typeof _uniq_var_807.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_807.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_807.push.apply(_uniq_var_807, arguments);
} else if (_uniq_var_807.push !== undefined) {
if (_uniq_var_808 === undefined) {
return _uniq_var_807.push;
}
_uniq_var_807.push = _uniq_var_808;
}return _uniq_var_807;
};_uniq_var_809.__lix_func__ = true;return _uniq_var_809;})()(body, stmt);
_uniq_var_256;
return _uniq_var_256;
};_uniq_var_810.__lix_func__ = true;return _uniq_var_810;})());
_uniq_var_257;
_uniq_var_257;
var _uniq_var_258 = (function () {var _uniq_var_813 = function (_uniq_var_811, _uniq_var_812) {
if (typeof _uniq_var_811.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_811.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_811.join.apply(_uniq_var_811, arguments);
} else if (_uniq_var_811.join !== undefined) {
if (_uniq_var_812 === undefined) {
return _uniq_var_811.join;
}
_uniq_var_811.join = _uniq_var_812;
}return _uniq_var_811;
};_uniq_var_813.__lix_func__ = true;return _uniq_var_813;})()(body, "");
_uniq_var_258;
(body = _uniq_var_258);
var _uniq_var_259 = call(getArgListString, max_narg);
_uniq_var_259;
var _uniq_var_260 = (function () {var _uniq_var_816 = function (_uniq_var_814, _uniq_var_815) {
if (typeof _uniq_var_814.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_814.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_814.join.apply(_uniq_var_814, arguments);
} else if (_uniq_var_814.join !== undefined) {
if (_uniq_var_815 === undefined) {
return _uniq_var_814.join;
}
_uniq_var_814.join = _uniq_var_815;
}return _uniq_var_814;
};_uniq_var_816.__lix_func__ = true;return _uniq_var_816;})()(["function ", name, "(", _uniq_var_259, ") {\n", body, "}\n"], "");
_uniq_var_260;
return _uniq_var_260;
};_uniq_var_817.__lix_func__ = true;return _uniq_var_817;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_847 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_818 = function (d) {return (destructed = d);
};_uniq_var_818.__lix_func__ = true;return _uniq_var_818;})(),
desctructedVars: (function () {var _uniq_var_822 = function () {var _uniq_var_261 = (function () {var _uniq_var_821 = function (_uniq_var_819, _uniq_var_820) {
if (typeof _uniq_var_819.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_819.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_819.join.apply(_uniq_var_819, arguments);
} else if (_uniq_var_819.join !== undefined) {
if (_uniq_var_820 === undefined) {
return _uniq_var_819.join;
}
_uniq_var_819.join = _uniq_var_820;
}return _uniq_var_819;
};_uniq_var_821.__lix_func__ = true;return _uniq_var_821;})()(destructed, ";\n");
_uniq_var_261;
return _uniq_var_261;
};_uniq_var_822.__lix_func__ = true;return _uniq_var_822;})(),
defineFn: (function () {var _uniq_var_826 = function (name, func, condition, narg) {var _uniq_var_262 = true;
_uniq_var_262;
var _uniq_var_263 = null;
_uniq_var_263;
var _uniq_var_264 = __eq__(fns[name], undefined);
_uniq_var_264;
if ((_uniq_var_262 && _uniq_var_264)) {
(_uniq_var_262 = false);
(_uniq_var_263 = (fns[name] = []));

};
_uniq_var_263;
var _uniq_var_265 = (function () {var _uniq_var_825 = function (_uniq_var_823, _uniq_var_824) {
if (typeof _uniq_var_823.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_823.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_823.push.apply(_uniq_var_823, arguments);
} else if (_uniq_var_823.push !== undefined) {
if (_uniq_var_824 === undefined) {
return _uniq_var_823.push;
}
_uniq_var_823.push = _uniq_var_824;
}return _uniq_var_823;
};_uniq_var_825.__lix_func__ = true;return _uniq_var_825;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_265;
return _uniq_var_265;
};_uniq_var_826.__lix_func__ = true;return _uniq_var_826;})(),
definedFns: (function () {var _uniq_var_834 = function () {var ret = [];
ret;
ret;
var _uniq_var_268 = foreach(fns, (function () {var _uniq_var_830 = function (item, name) {var _uniq_var_266 = predefineFn(name, item);
_uniq_var_266;
var _uniq_var_267 = (function () {var _uniq_var_829 = function (_uniq_var_827, _uniq_var_828) {
if (typeof _uniq_var_827.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_827.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_827.push.apply(_uniq_var_827, arguments);
} else if (_uniq_var_827.push !== undefined) {
if (_uniq_var_828 === undefined) {
return _uniq_var_827.push;
}
_uniq_var_827.push = _uniq_var_828;
}return _uniq_var_827;
};_uniq_var_829.__lix_func__ = true;return _uniq_var_829;})()(ret, _uniq_var_266);
_uniq_var_267;
return _uniq_var_267;
};_uniq_var_830.__lix_func__ = true;return _uniq_var_830;})());
_uniq_var_268;
_uniq_var_268;
var _uniq_var_269 = (function () {var _uniq_var_833 = function (_uniq_var_831, _uniq_var_832) {
if (typeof _uniq_var_831.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_831.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_831.join.apply(_uniq_var_831, arguments);
} else if (_uniq_var_831.join !== undefined) {
if (_uniq_var_832 === undefined) {
return _uniq_var_831.join;
}
_uniq_var_831.join = _uniq_var_832;
}return _uniq_var_831;
};_uniq_var_833.__lix_func__ = true;return _uniq_var_833;})()(ret, "\n");
_uniq_var_269;
return _uniq_var_269;
};_uniq_var_834.__lix_func__ = true;return _uniq_var_834;})(),
defineVar: (function () {var _uniq_var_839 = function (v) {var _uniq_var_270 = true;
_uniq_var_270;
var _uniq_var_271 = null;
_uniq_var_271;
if ((_uniq_var_270 && v)) {
(_uniq_var_270 = false);
(_uniq_var_271 = (vars[v] = v));

};
if (_uniq_var_270) {
var _uniq_var_272 = map(vars, (function () {var _uniq_var_835 = function (i) {return i;
};_uniq_var_835.__lix_func__ = true;return _uniq_var_835;})());
_uniq_var_272;
var vecs = _uniq_var_272;
vecs;
vecs;
var _uniq_var_273 = true;
_uniq_var_273;
var _uniq_var_274 = null;
_uniq_var_274;
var _uniq_var_277 = __gt__(vecs.length, 0);
_uniq_var_277;
if ((_uniq_var_273 && _uniq_var_277)) {
(_uniq_var_273 = false);
var _uniq_var_275 = (function () {var _uniq_var_838 = function (_uniq_var_836, _uniq_var_837) {
if (typeof _uniq_var_836.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_836.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_836.join.apply(_uniq_var_836, arguments);
} else if (_uniq_var_836.join !== undefined) {
if (_uniq_var_837 === undefined) {
return _uniq_var_836.join;
}
_uniq_var_836.join = _uniq_var_837;
}return _uniq_var_836;
};_uniq_var_838.__lix_func__ = true;return _uniq_var_838;})()(vecs, ', ');
_uniq_var_275;
var _uniq_var_276 = __add__('var ', _uniq_var_275);
_uniq_var_276;
(_uniq_var_274 = _uniq_var_276);

};
if (_uniq_var_273) {
(_uniq_var_274 = '');

};
(_uniq_var_271 = _uniq_var_274);

};
return _uniq_var_271;
};_uniq_var_839.__lix_func__ = true;return _uniq_var_839;})(),
appendExpr: (function () {var _uniq_var_846 = function (v) {var _uniq_var_278 = true;
_uniq_var_278;
var _uniq_var_279 = null;
_uniq_var_279;
if ((_uniq_var_278 && v)) {
(_uniq_var_278 = false);
var _uniq_var_280 = (function () {var _uniq_var_842 = function (_uniq_var_840, _uniq_var_841) {
if (typeof _uniq_var_840.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_840.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_840.push.apply(_uniq_var_840, arguments);
} else if (_uniq_var_840.push !== undefined) {
if (_uniq_var_841 === undefined) {
return _uniq_var_840.push;
}
_uniq_var_840.push = _uniq_var_841;
}return _uniq_var_840;
};_uniq_var_842.__lix_func__ = true;return _uniq_var_842;})()(funcs, v);
_uniq_var_280;
(_uniq_var_279 = _uniq_var_280);

};
if (_uniq_var_278) {
var _uniq_var_281 = (function () {var _uniq_var_845 = function (_uniq_var_843, _uniq_var_844) {
if (typeof _uniq_var_843.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_843.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_843.join.apply(_uniq_var_843, arguments);
} else if (_uniq_var_843.join !== undefined) {
if (_uniq_var_844 === undefined) {
return _uniq_var_843.join;
}
_uniq_var_843.join = _uniq_var_844;
}return _uniq_var_843;
};_uniq_var_845.__lix_func__ = true;return _uniq_var_845;})()(funcs, ';\n');
_uniq_var_281;
(_uniq_var_279 = _uniq_var_281);

};
return _uniq_var_279;
};_uniq_var_846.__lix_func__ = true;return _uniq_var_846;})()
};
};_uniq_var_847.__lix_func__ = true;return _uniq_var_847;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_848 = function (expr, env, ctx, def) {var _uniq_var_282 = call(GenerateDefNew);
_uniq_var_282;
var def = _uniq_var_282;
def;
def;
var _uniq_var_283 = generate(expr[0], env, ctx, def);
_uniq_var_283;
var body = _uniq_var_283;
body;
body;
var _uniq_var_284 = join(['module.exports = ', body, '\n']);
_uniq_var_284;
var body = _uniq_var_284;
body;
body;
var _uniq_var_285 = call(def.defineVar);
_uniq_var_285;
var _uniq_var_286 = call(def.appendExpr);
_uniq_var_286;
var _uniq_var_287 = call(def.definedFns);
_uniq_var_287;
var _uniq_var_288 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_285, ";\n", _uniq_var_286, ";\n", _uniq_var_287, ";\n", body]);
_uniq_var_288;
return _uniq_var_288;
};_uniq_var_848.__lix_func__ = true;return _uniq_var_848;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_849 = function (expr, env, ctx, def) {var _uniq_var_289 = generate(expr[0], env, ctx, def);
_uniq_var_289;
return _uniq_var_289;
};_uniq_var_849.__lix_func__ = true;return _uniq_var_849;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_850 = function (expr, env, ctx, def) {var _uniq_var_290 = join(['"', expr[0], '"']);
_uniq_var_290;
return _uniq_var_290;
};_uniq_var_850.__lix_func__ = true;return _uniq_var_850;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_851 = function (expr, env, ctx, def) {var _uniq_var_291 = generate(expr[0], env, ctx, def);
_uniq_var_291;
var _uniq_var_292 = join(['("', expr[2], '" + ', _uniq_var_291, ')']);
_uniq_var_292;
return _uniq_var_292;
};_uniq_var_851.__lix_func__ = true;return _uniq_var_851;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_856 = function (expr, env, ctx, def) {var _uniq_var_294 = map(expr[0], (function () {var _uniq_var_852 = function (i) {var _uniq_var_293 = generate(i, env, ctx, def);
_uniq_var_293;
return _uniq_var_293;
};_uniq_var_852.__lix_func__ = true;return _uniq_var_852;})());
_uniq_var_294;
var _uniq_var_295 = (function () {var _uniq_var_855 = function (_uniq_var_853, _uniq_var_854) {
if (typeof _uniq_var_853.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_853.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_853.join.apply(_uniq_var_853, arguments);
} else if (_uniq_var_853.join !== undefined) {
if (_uniq_var_854 === undefined) {
return _uniq_var_853.join;
}
_uniq_var_853.join = _uniq_var_854;
}return _uniq_var_853;
};_uniq_var_855.__lix_func__ = true;return _uniq_var_855;})()(_uniq_var_294, ',');
_uniq_var_295;
var path = _uniq_var_295;
path;
path;
var _uniq_var_296 = join(['[', path, '].join("/")']);
_uniq_var_296;
return _uniq_var_296;
};_uniq_var_856.__lix_func__ = true;return _uniq_var_856;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_860 = function (expr, env, ctx, def) {var _uniq_var_297 = (function () {var _uniq_var_859 = function (_uniq_var_857, _uniq_var_858) {
if (typeof _uniq_var_857.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_857.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_857.join.apply(_uniq_var_857, arguments);
} else if (_uniq_var_857.join !== undefined) {
if (_uniq_var_858 === undefined) {
return _uniq_var_857.join;
}
_uniq_var_857.join = _uniq_var_858;
}return _uniq_var_857;
};_uniq_var_859.__lix_func__ = true;return _uniq_var_859;})()(['"', expr[0], '"'], '');
_uniq_var_297;
var name = [_uniq_var_297, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_860.__lix_func__ = true;return _uniq_var_860;})();
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
'ptn': generatePtn,
'{ampersand}': generateAmpersand,
'{ampersand_bracket}': generateAmpersandBracket,
'{ampersand_object}': generateAmpersandObject,
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
var generateOp = (function () {var _uniq_var_861 = function (hint) {var _uniq_var_298 = true;
_uniq_var_298;
var _uniq_var_299 = null;
_uniq_var_299;
if ((_uniq_var_298 && generateOpTable[hint])) {
(_uniq_var_298 = false);
(_uniq_var_299 = generateOpTable[hint]);

};
if (_uniq_var_298) {
(_uniq_var_299 = generateExpr);

};
return _uniq_var_299;
};_uniq_var_861.__lix_func__ = true;return _uniq_var_861;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_862 = function (expr, env, ctx, def) {var _uniq_var_300 = generateOp(expr[1]);
_uniq_var_300;
var _uniq_var_301 = _uniq_var_300(expr, env, ctx, def);
_uniq_var_301;
return _uniq_var_301;
};_uniq_var_862.__lix_func__ = true;return _uniq_var_862;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_864 = function (env) {var _uniq_var_302 = env;
_uniq_var_302;
if (not(_uniq_var_302)) {
(_uniq_var_302 = env0);

};
(env = _uniq_var_302);
var Env = (function () {var _uniq_var_863 = function () {;
};_uniq_var_863.__lix_func__ = true;return _uniq_var_863;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_303 = _instance_(Env);
_uniq_var_303;
return _uniq_var_303;
};_uniq_var_864.__lix_func__ = true;return _uniq_var_864;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_866 = function (expr, define) {var _uniq_var_305 = map(expr, (function () {var _uniq_var_865 = function (item) {var _uniq_var_304 = flatten(item, define);
_uniq_var_304;
return _uniq_var_304;
};_uniq_var_865.__lix_func__ = true;return _uniq_var_865;})());
_uniq_var_305;
var _uniq_var_306 = define(_uniq_var_305);
_uniq_var_306;
return _uniq_var_306;
};_uniq_var_866.__lix_func__ = true;return _uniq_var_866;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_867 = function (expr, define) {return expr;
};_uniq_var_867.__lix_func__ = true;return _uniq_var_867;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_872 = function (expr, define) {var _uniq_var_307 = call(statementFlattenGenerator);
_uniq_var_307;
var whileDefine = _uniq_var_307;
whileDefine;
whileDefine;
var _uniq_var_308 = flatten(expr[0], whileDefine);
_uniq_var_308;
(expr[0] = _uniq_var_308);
var _uniq_var_309 = flatten(expr[2], define0);
_uniq_var_309;
(expr[2] = _uniq_var_309);
var _uniq_var_310 = call(whileDefine);
_uniq_var_310;
var _uniq_var_311 = (function () {var _uniq_var_870 = function (_uniq_var_868, _uniq_var_869) {
if (typeof _uniq_var_868.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_868.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_868.concat.apply(_uniq_var_868, arguments);
} else if (_uniq_var_868.concat !== undefined) {
if (_uniq_var_869 === undefined) {
return _uniq_var_868.concat;
}
_uniq_var_868.concat = _uniq_var_869;
}return _uniq_var_868;
};_uniq_var_870.__lix_func__ = true;return _uniq_var_870;})()(expr[2][0], _uniq_var_310);
_uniq_var_311;
(expr[2][0] = _uniq_var_311);
var _uniq_var_312 = call(whileDefine);
_uniq_var_312;
var _uniq_var_314 = foreach(_uniq_var_312, (function () {var _uniq_var_871 = function (i) {var _uniq_var_313 = define(i, true);
_uniq_var_313;
return _uniq_var_313;
};_uniq_var_871.__lix_func__ = true;return _uniq_var_871;})());
_uniq_var_314;
_uniq_var_314;
var _uniq_var_315 = define(expr, true);
_uniq_var_315;
_uniq_var_315;
return ['', '{empty}'];
};_uniq_var_872.__lix_func__ = true;return _uniq_var_872;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_877 = function (expr, define) {var _uniq_var_316 = flatten(expr[0], define);
_uniq_var_316;
var ret = _uniq_var_316;
ret;
ret;
var _uniq_var_317 = true;
_uniq_var_317;
var _uniq_var_318 = null;
_uniq_var_318;
var _uniq_var_320 = __ne__(ret[2], 'var');
_uniq_var_320;
if ((_uniq_var_317 && _uniq_var_320)) {
(_uniq_var_317 = false);
var _uniq_var_319 = define(ret);
_uniq_var_319;
var ret = _uniq_var_319;
ret;
(_uniq_var_318 = ret);

};
_uniq_var_318;
var getAndOpSeq = (function () {var _uniq_var_876 = function () {var _uniq_var_321 = call(statementFlattenGenerator);
_uniq_var_321;
var AndDefine = _uniq_var_321;
AndDefine;
AndDefine;
var _uniq_var_322 = flatten(expr[2], AndDefine);
_uniq_var_322;
var seqRet = _uniq_var_322;
seqRet;
seqRet;
var _uniq_var_323 = call(AndDefine);
_uniq_var_323;
var seq = _uniq_var_323;
seq;
seq;
var _uniq_var_324 = (function () {var _uniq_var_875 = function (_uniq_var_873, _uniq_var_874) {
if (typeof _uniq_var_873.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_873.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_873.push.apply(_uniq_var_873, arguments);
} else if (_uniq_var_873.push !== undefined) {
if (_uniq_var_874 === undefined) {
return _uniq_var_873.push;
}
_uniq_var_873.push = _uniq_var_874;
}return _uniq_var_873;
};_uniq_var_875.__lix_func__ = true;return _uniq_var_875;})()(seq, [ret, '=', seqRet]);
_uniq_var_324;
_uniq_var_324;
return [seq, '{seq}'];
};_uniq_var_876.__lix_func__ = true;return _uniq_var_876;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_325 = call(getAndOpSeq);
_uniq_var_325;
var _uniq_var_326 = define([[[ret, [[], '{empty}']], [_uniq_var_325, 'else']], 'if'], true);
_uniq_var_326;
_uniq_var_326;
return ret;
};_uniq_var_877.__lix_func__ = true;return _uniq_var_877;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_882 = function (expr, define) {var _uniq_var_327 = flatten(expr[0], define);
_uniq_var_327;
var ret = _uniq_var_327;
ret;
ret;
var _uniq_var_328 = true;
_uniq_var_328;
var _uniq_var_329 = null;
_uniq_var_329;
var _uniq_var_331 = __ne__(ret[2], 'var');
_uniq_var_331;
if ((_uniq_var_328 && _uniq_var_331)) {
(_uniq_var_328 = false);
var _uniq_var_330 = define(ret);
_uniq_var_330;
var ret = _uniq_var_330;
ret;
(_uniq_var_329 = ret);

};
_uniq_var_329;
var getAndOpSeq = (function () {var _uniq_var_881 = function () {var _uniq_var_332 = call(statementFlattenGenerator);
_uniq_var_332;
var AndDefine = _uniq_var_332;
AndDefine;
AndDefine;
var _uniq_var_333 = flatten(expr[2], AndDefine);
_uniq_var_333;
var seqRet = _uniq_var_333;
seqRet;
seqRet;
var _uniq_var_334 = call(AndDefine);
_uniq_var_334;
var seq = _uniq_var_334;
seq;
seq;
var _uniq_var_335 = (function () {var _uniq_var_880 = function (_uniq_var_878, _uniq_var_879) {
if (typeof _uniq_var_878.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_878.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_878.push.apply(_uniq_var_878, arguments);
} else if (_uniq_var_878.push !== undefined) {
if (_uniq_var_879 === undefined) {
return _uniq_var_878.push;
}
_uniq_var_878.push = _uniq_var_879;
}return _uniq_var_878;
};_uniq_var_880.__lix_func__ = true;return _uniq_var_880;})()(seq, [ret, '=', seqRet]);
_uniq_var_335;
_uniq_var_335;
return [seq, '{seq}'];
};_uniq_var_881.__lix_func__ = true;return _uniq_var_881;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_336 = call(getAndOpSeq);
_uniq_var_336;
var _uniq_var_337 = define([[[ret, _uniq_var_336]], 'if'], true);
_uniq_var_337;
_uniq_var_337;
return ret;
};_uniq_var_882.__lix_func__ = true;return _uniq_var_882;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_887 = function (expr, define, tmpVar, ctx) {var _uniq_var_350 = foreach(expr[0], (function () {var _uniq_var_886 = function (i) {var _uniq_var_338 = true;
_uniq_var_338;
var _uniq_var_339 = null;
_uniq_var_339;
var _uniq_var_342 = __eq__(i[1], 'else');
_uniq_var_342;
if ((_uniq_var_338 && _uniq_var_342)) {
(_uniq_var_338 = false);
var _uniq_var_340 = flatten(i[0], define0, ctx);
_uniq_var_340;
var elseSeq = _uniq_var_340;
elseSeq;
elseSeq;
var _uniq_var_341 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_341;
(_uniq_var_339 = _uniq_var_341);

};
var _uniq_var_345 = __eq__(i[1], 'if');
_uniq_var_345;
if ((_uniq_var_338 && _uniq_var_345)) {
(_uniq_var_338 = false);
var _uniq_var_343 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_343;
var _uniq_var_344 = define(_uniq_var_343);
_uniq_var_344;
(_uniq_var_339 = _uniq_var_344);

};
if (_uniq_var_338) {
var _uniq_var_346 = flatten(i[1], define0, ctx);
_uniq_var_346;
var ifSeq = _uniq_var_346;
ifSeq;
ifSeq;
var _uniq_var_347 = (function () {var _uniq_var_885 = function (_uniq_var_883, _uniq_var_884) {
if (typeof _uniq_var_883.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_883.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_883.unshift.apply(_uniq_var_883, arguments);
} else if (_uniq_var_883.unshift !== undefined) {
if (_uniq_var_884 === undefined) {
return _uniq_var_883.unshift;
}
_uniq_var_883.unshift = _uniq_var_884;
}return _uniq_var_883;
};_uniq_var_885.__lix_func__ = true;return _uniq_var_885;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_347;
_uniq_var_347;
var _uniq_var_348 = flatten(i[0], define);
_uniq_var_348;
var cond = _uniq_var_348;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_349 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_349;
(_uniq_var_339 = _uniq_var_349);

};
return _uniq_var_339;
};_uniq_var_886.__lix_func__ = true;return _uniq_var_886;})());
_uniq_var_350;
return _uniq_var_350;
};_uniq_var_887.__lix_func__ = true;return _uniq_var_887;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_888 = function (expr, define) {var _uniq_var_351 = define(['true', '{atomic}'], 'new');
_uniq_var_351;
var tmpVar = _uniq_var_351;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_352 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_352;
_uniq_var_352;
return retVar;
};_uniq_var_888.__lix_func__ = true;return _uniq_var_888;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_889 = function (expr, define) {var _uniq_var_353 = flatten(expr[0], define);
_uniq_var_353;
(expr[0] = _uniq_var_353);
var _uniq_var_354 = flatten(expr[2], define);
_uniq_var_354;
(expr[2] = _uniq_var_354);
return expr;
};_uniq_var_889.__lix_func__ = true;return _uniq_var_889;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_893 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_355 = true;
_uniq_var_355;
var _uniq_var_356 = null;
_uniq_var_356;
var _uniq_var_360 = __gt__(expr.length, 3);
_uniq_var_360;
if ((_uniq_var_355 && _uniq_var_360)) {
(_uniq_var_355 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_357 = __lt__(i, expr.length);
_uniq_var_357;
while (_uniq_var_357) {
var _uniq_var_358 = (function () {var _uniq_var_892 = function (_uniq_var_890, _uniq_var_891) {
if (typeof _uniq_var_890.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_890.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_890.push.apply(_uniq_var_890, arguments);
} else if (_uniq_var_890.push !== undefined) {
if (_uniq_var_891 === undefined) {
return _uniq_var_890.push;
}
_uniq_var_890.push = _uniq_var_891;
}return _uniq_var_890;
};_uniq_var_892.__lix_func__ = true;return _uniq_var_892;})()(partialExpr, expr[i]);
_uniq_var_358;
_uniq_var_358;
var _uniq_var_359 = __add__(i, 1);
_uniq_var_359;
(i = _uniq_var_359);
var _uniq_var_357 = __lt__(i, expr.length);
_uniq_var_357;
}
null;
(_uniq_var_356 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_356;
var _uniq_var_361 = flattenExpr(expr, define);
_uniq_var_361;
return _uniq_var_361;
};_uniq_var_893.__lix_func__ = true;return _uniq_var_893;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_894 = function (expr, define) {var _uniq_var_362 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_362;
return _uniq_var_362;
};_uniq_var_894.__lix_func__ = true;return _uniq_var_894;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_895 = function (expr, define) {var _uniq_var_363 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_363;
return _uniq_var_363;
};_uniq_var_895.__lix_func__ = true;return _uniq_var_895;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_896 = function (expr, define) {var _uniq_var_364 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_364;
return _uniq_var_364;
};_uniq_var_896.__lix_func__ = true;return _uniq_var_896;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_897 = function (expr, define) {var _uniq_var_365 = flattenBasicOp(expr, '__rxcompose__', define);
_uniq_var_365;
return _uniq_var_365;
};_uniq_var_897.__lix_func__ = true;return _uniq_var_897;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_898 = function (expr, define) {var _uniq_var_366 = flattenBasicOp(expr, '__xcompose__', define);
_uniq_var_366;
return _uniq_var_366;
};_uniq_var_898.__lix_func__ = true;return _uniq_var_898;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_899 = function (expr, define) {var _uniq_var_367 = flatten(expr[0], define);
_uniq_var_367;
(expr[0] = _uniq_var_367);
return expr;
};_uniq_var_899.__lix_func__ = true;return _uniq_var_899;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_900 = function (expr, define) {return expr;
};_uniq_var_900.__lix_func__ = true;return _uniq_var_900;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_902 = function (expr, define) {var _uniq_var_369 = map(expr[0], (function () {var _uniq_var_901 = function (i) {var _uniq_var_368 = flatten(i, define);
_uniq_var_368;
return _uniq_var_368;
};_uniq_var_901.__lix_func__ = true;return _uniq_var_901;})());
_uniq_var_369;
(expr[0] = _uniq_var_369);
return expr;
};_uniq_var_902.__lix_func__ = true;return _uniq_var_902;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_903 = function (expr, define) {return expr;
};_uniq_var_903.__lix_func__ = true;return _uniq_var_903;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_904 = function (expr, define) {var _uniq_var_370 = true;
_uniq_var_370;
var _uniq_var_371 = null;
_uniq_var_371;
var _uniq_var_373 = __eq__(expr[1], '{index}');
_uniq_var_373;
if ((_uniq_var_370 && _uniq_var_373)) {
(_uniq_var_370 = false);
var _uniq_var_372 = flatten(expr[0], define);
_uniq_var_372;
(_uniq_var_371 = (expr[0] = _uniq_var_372));

};
_uniq_var_371;
return expr;
};_uniq_var_904.__lix_func__ = true;return _uniq_var_904;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_909 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_908 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_374 = true;
_uniq_var_374;
var _uniq_var_375 = null;
_uniq_var_375;
var _uniq_var_381 = __eq__(arguments.length, 2);
_uniq_var_381;
if ((_uniq_var_374 && _uniq_var_381)) {
(_uniq_var_374 = false);
var _uniq_var_376 = true;
_uniq_var_376;
var _uniq_var_377 = null;
_uniq_var_377;
var _uniq_var_380 = __eq__(defined[name], undefined);
_uniq_var_380;
if ((_uniq_var_376 && _uniq_var_380)) {
(_uniq_var_376 = false);
var _uniq_var_378 = call(getUniqVarName);
_uniq_var_378;
var varName = _uniq_var_378;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_379 = (function () {var _uniq_var_907 = function (_uniq_var_905, _uniq_var_906) {
if (typeof _uniq_var_905.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_905.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_905.push.apply(_uniq_var_905, arguments);
} else if (_uniq_var_905.push !== undefined) {
if (_uniq_var_906 === undefined) {
return _uniq_var_905.push;
}
_uniq_var_905.push = _uniq_var_906;
}return _uniq_var_905;
};_uniq_var_907.__lix_func__ = true;return _uniq_var_907;})()(statements, [lixVar, ':=', value]);
_uniq_var_379;
_uniq_var_379;
(_uniq_var_377 = (defined[name] = lixVar));

};
_uniq_var_377;
(_uniq_var_375 = (ret = defined[name]));

};
if (_uniq_var_374) {
(_uniq_var_375 = (ret = statements));

};
_uniq_var_375;
return ret;
};_uniq_var_908.__lix_func__ = true;return _uniq_var_908;})();
};_uniq_var_909.__lix_func__ = true;return _uniq_var_909;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_382 = call(NewGlobalDefine);
_uniq_var_382;
var globalDefine = _uniq_var_382;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_910 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_383 = true;
_uniq_var_383;
var _uniq_var_384 = null;
_uniq_var_384;
var _uniq_var_386 = __eq__(expr[0][3], '{global}');
_uniq_var_386;
if ((_uniq_var_383 && _uniq_var_386)) {
(_uniq_var_383 = false);
var _uniq_var_385 = globalDefine(expr[0][0], expr);
_uniq_var_385;
(_uniq_var_384 = (ret = _uniq_var_385));

};
if (_uniq_var_383) {
var _uniq_var_387 = flattenField(expr[0], define);
_uniq_var_387;
(expr[0] = _uniq_var_387);
(_uniq_var_384 = (ret = expr));

};
_uniq_var_384;
return ret;
};_uniq_var_910.__lix_func__ = true;return _uniq_var_910;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_911 = function (expr, define) {var _uniq_var_388 = flatten(expr[2], define);
_uniq_var_388;
(expr[2] = _uniq_var_388);
return expr;
};_uniq_var_911.__lix_func__ = true;return _uniq_var_911;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_913 = function (expr, define) {var _uniq_var_390 = map(expr[0], (function () {var _uniq_var_912 = function (i) {var _uniq_var_389 = flattenProperty(i, define);
_uniq_var_389;
return _uniq_var_389;
};_uniq_var_912.__lix_func__ = true;return _uniq_var_912;})());
_uniq_var_390;
(expr[0] = _uniq_var_390);
return expr;
};_uniq_var_913.__lix_func__ = true;return _uniq_var_913;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_915 = function (expr, define) {var _uniq_var_392 = map(expr[0], (function () {var _uniq_var_914 = function (i) {var _uniq_var_391 = flatten(i, define);
_uniq_var_391;
return _uniq_var_391;
};_uniq_var_914.__lix_func__ = true;return _uniq_var_914;})());
_uniq_var_392;
(expr[0] = _uniq_var_392);
return expr;
};_uniq_var_915.__lix_func__ = true;return _uniq_var_915;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_916 = function (expr, define) {var _uniq_var_393 = flatten(expr[2], define);
_uniq_var_393;
(expr[2] = _uniq_var_393);
return expr;
};_uniq_var_916.__lix_func__ = true;return _uniq_var_916;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_917 = function (expr, define) {var _uniq_var_394 = true;
_uniq_var_394;
var _uniq_var_395 = null;
_uniq_var_395;
var _uniq_var_398 = __eq__(expr[1], '{.}');
_uniq_var_398;
if ((_uniq_var_394 && _uniq_var_398)) {
(_uniq_var_394 = false);
var _uniq_var_396 = flatten(expr[0], define);
_uniq_var_396;
(expr[0] = _uniq_var_396);
var _uniq_var_397 = flattenField(expr[2], define);
_uniq_var_397;
(_uniq_var_395 = (expr[2] = _uniq_var_397));

};
if (_uniq_var_394) {
var _uniq_var_399 = flatten(expr, define);
_uniq_var_399;
(_uniq_var_395 = (expr = _uniq_var_399));

};
_uniq_var_395;
return expr;
};_uniq_var_917.__lix_func__ = true;return _uniq_var_917;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_918 = function (expr, define) {return expr;
};_uniq_var_918.__lix_func__ = true;return _uniq_var_918;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_919 = function (expr, define) {var _uniq_var_400 = flatten(expr[0], define);
_uniq_var_400;
return _uniq_var_400;
};_uniq_var_919.__lix_func__ = true;return _uniq_var_919;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_933 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_932 = function (statement, tmpVarName) {var _uniq_var_401 = true;
_uniq_var_401;
var _uniq_var_402 = null;
_uniq_var_402;
var _uniq_var_403 = __eq__(statement, undefined);
_uniq_var_403;
if ((_uniq_var_401 && _uniq_var_403)) {
(_uniq_var_401 = false);
(_uniq_var_402 = data);

};
var _uniq_var_405 = __eq__(tmpVarName, true);
_uniq_var_405;
if ((_uniq_var_401 && _uniq_var_405)) {
(_uniq_var_401 = false);
var _uniq_var_404 = (function () {var _uniq_var_922 = function (_uniq_var_920, _uniq_var_921) {
if (typeof _uniq_var_920.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_920.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_920.push.apply(_uniq_var_920, arguments);
} else if (_uniq_var_920.push !== undefined) {
if (_uniq_var_921 === undefined) {
return _uniq_var_920.push;
}
_uniq_var_920.push = _uniq_var_921;
}return _uniq_var_920;
};_uniq_var_922.__lix_func__ = true;return _uniq_var_922;})()(data, statement);
_uniq_var_404;
(_uniq_var_402 = _uniq_var_404);

};
var _uniq_var_409 = __eq__(tmpVarName, undefined);
_uniq_var_409;
if ((_uniq_var_401 && _uniq_var_409)) {
(_uniq_var_401 = false);
var _uniq_var_406 = call(getUniqVarName);
_uniq_var_406;
var varName = _uniq_var_406;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_407 = (function () {var _uniq_var_925 = function (_uniq_var_923, _uniq_var_924) {
if (typeof _uniq_var_923.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_923.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_923.push.apply(_uniq_var_923, arguments);
} else if (_uniq_var_923.push !== undefined) {
if (_uniq_var_924 === undefined) {
return _uniq_var_923.push;
}
_uniq_var_923.push = _uniq_var_924;
}return _uniq_var_923;
};_uniq_var_925.__lix_func__ = true;return _uniq_var_925;})()(data, statement);
_uniq_var_407;
_uniq_var_407;
var _uniq_var_408 = (function () {var _uniq_var_928 = function (_uniq_var_926, _uniq_var_927) {
if (typeof _uniq_var_926.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_926.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_926.push.apply(_uniq_var_926, arguments);
} else if (_uniq_var_926.push !== undefined) {
if (_uniq_var_927 === undefined) {
return _uniq_var_926.push;
}
_uniq_var_926.push = _uniq_var_927;
}return _uniq_var_926;
};_uniq_var_928.__lix_func__ = true;return _uniq_var_928;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_408;
_uniq_var_408;
(_uniq_var_402 = lixVar);

};
var _uniq_var_412 = __eq__(tmpVarName, 'new');
_uniq_var_412;
if ((_uniq_var_401 && _uniq_var_412)) {
(_uniq_var_401 = false);
var _uniq_var_410 = call(getUniqVarName);
_uniq_var_410;
var varName = _uniq_var_410;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_411 = (function () {var _uniq_var_931 = function (_uniq_var_929, _uniq_var_930) {
if (typeof _uniq_var_929.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_929.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_929.push.apply(_uniq_var_929, arguments);
} else if (_uniq_var_929.push !== undefined) {
if (_uniq_var_930 === undefined) {
return _uniq_var_929.push;
}
_uniq_var_929.push = _uniq_var_930;
}return _uniq_var_929;
};_uniq_var_931.__lix_func__ = true;return _uniq_var_931;})()(data, [lixVar, ':=', statement]);
_uniq_var_411;
_uniq_var_411;
(_uniq_var_402 = lixVar);

};
return _uniq_var_402;
};_uniq_var_932.__lix_func__ = true;return _uniq_var_932;})();
};_uniq_var_933.__lix_func__ = true;return _uniq_var_933;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_945 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_934 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_413 = true;
_uniq_var_413;
var _uniq_var_414 = null;
_uniq_var_414;
var _uniq_var_416 = seqCtx;
_uniq_var_416;
if (_uniq_var_416) {
var _uniq_var_417 = parseInt(index);
_uniq_var_417;
var _uniq_var_418 = __sub__(expr[0].length, 1);
_uniq_var_418;
var _uniq_var_419 = __eq__(_uniq_var_417, _uniq_var_418);
_uniq_var_419;
(_uniq_var_416 = _uniq_var_419);

};
if ((_uniq_var_413 && _uniq_var_416)) {
(_uniq_var_413 = false);
var _uniq_var_415 = seqCtx(stmt);
_uniq_var_415;
var ret = _uniq_var_415;
ret;
(_uniq_var_414 = ret);

};
_uniq_var_414;
return ret;
};_uniq_var_934.__lix_func__ = true;return _uniq_var_934;})();
ctx;
ctx;
var _uniq_var_446 = foreach(expr[0], (function () {var _uniq_var_944 = function (item, index) {var _uniq_var_420 = call(statementFlattenGenerator);
_uniq_var_420;
var exprDefine = _uniq_var_420;
exprDefine;
exprDefine;
var _uniq_var_421 = flatten(item, exprDefine);
_uniq_var_421;
var itemRet = _uniq_var_421;
itemRet;
itemRet;
var _uniq_var_422 = call(exprDefine);
_uniq_var_422;
var _uniq_var_423 = (function () {var _uniq_var_937 = function (_uniq_var_935, _uniq_var_936) {
if (typeof _uniq_var_935.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_935.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_935.concat.apply(_uniq_var_935, arguments);
} else if (_uniq_var_935.concat !== undefined) {
if (_uniq_var_936 === undefined) {
return _uniq_var_935.concat;
}
_uniq_var_935.concat = _uniq_var_936;
}return _uniq_var_935;
};_uniq_var_937.__lix_func__ = true;return _uniq_var_937;})()(ret, _uniq_var_422);
_uniq_var_423;
(ret = _uniq_var_423);
var _uniq_var_424 = ctx(itemRet, index);
_uniq_var_424;
var stmtRet = _uniq_var_424;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_938 = function (expr) {var _uniq_var_425 = __eq__(expr[1], '{atomic}');
_uniq_var_425;
var _uniq_var_426 = _uniq_var_425;
_uniq_var_426;
if (_uniq_var_426) {
var _uniq_var_427 = __ne__(expr[3], undefined);
_uniq_var_427;
(_uniq_var_426 = _uniq_var_427);

};
return _uniq_var_426;
};_uniq_var_938.__lix_func__ = true;return _uniq_var_938;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_939 = function (expr) {var _uniq_var_428 = __eq__(expr[1], '{atomic}');
_uniq_var_428;
var _uniq_var_429 = _uniq_var_428;
_uniq_var_429;
if (_uniq_var_429) {
var _uniq_var_430 = __eq__(expr[3], undefined);
_uniq_var_430;
(_uniq_var_429 = _uniq_var_430);

};
return _uniq_var_429;
};_uniq_var_939.__lix_func__ = true;return _uniq_var_939;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_940 = function (expr) {var _uniq_var_431 = isRealVar(expr);
_uniq_var_431;
var _uniq_var_432 = _uniq_var_431;
_uniq_var_432;
if (not(_uniq_var_432)) {
var _uniq_var_433 = __ne__(expr[1], 'if');
_uniq_var_433;
var _uniq_var_434 = _uniq_var_433;
_uniq_var_434;
if (_uniq_var_434) {
var _uniq_var_435 = __ne__(expr[1], 'while');
_uniq_var_435;
(_uniq_var_434 = _uniq_var_435);

};
(_uniq_var_432 = _uniq_var_434);

};
return _uniq_var_432;
};_uniq_var_940.__lix_func__ = true;return _uniq_var_940;})();
isRealExpr;
isRealExpr;
var _uniq_var_436 = true;
_uniq_var_436;
var _uniq_var_437 = null;
_uniq_var_437;
var _uniq_var_442 = __ne__(stmtRet[1], '{empty}');
_uniq_var_442;
var _uniq_var_443 = _uniq_var_442;
_uniq_var_443;
if (_uniq_var_443) {
var _uniq_var_444 = isTmpVar(stmtRet);
_uniq_var_444;
var _uniq_var_445 = not(_uniq_var_444);
_uniq_var_445;
(_uniq_var_443 = _uniq_var_445);

};
if ((_uniq_var_436 && _uniq_var_443)) {
(_uniq_var_436 = false);
var _uniq_var_438 = true;
_uniq_var_438;
var _uniq_var_439 = null;
_uniq_var_439;
var _uniq_var_440 = isRealExpr(stmtRet);
_uniq_var_440;
if ((_uniq_var_438 && _uniq_var_440)) {
(_uniq_var_438 = false);
(_uniq_var_439 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_439;
var _uniq_var_441 = (function () {var _uniq_var_943 = function (_uniq_var_941, _uniq_var_942) {
if (typeof _uniq_var_941.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_941.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_941.push.apply(_uniq_var_941, arguments);
} else if (_uniq_var_941.push !== undefined) {
if (_uniq_var_942 === undefined) {
return _uniq_var_941.push;
}
_uniq_var_941.push = _uniq_var_942;
}return _uniq_var_941;
};_uniq_var_943.__lix_func__ = true;return _uniq_var_943;})()(ret, stmtRet);
_uniq_var_441;
(_uniq_var_437 = _uniq_var_441);

};
return _uniq_var_437;
};_uniq_var_944.__lix_func__ = true;return _uniq_var_944;})());
_uniq_var_446;
_uniq_var_446;
(expr[0] = ret);
return expr;
};_uniq_var_945.__lix_func__ = true;return _uniq_var_945;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_952 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_447 = flatten(expr[0], define);
_uniq_var_447;
var ret = _uniq_var_447;
ret;
ret;
var _uniq_var_448 = call(globalDefine);
_uniq_var_448;
var _uniq_var_449 = (function () {var _uniq_var_948 = function (_uniq_var_946, _uniq_var_947) {
if (typeof _uniq_var_946.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_946.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_946.concat.apply(_uniq_var_946, arguments);
} else if (_uniq_var_946.concat !== undefined) {
if (_uniq_var_947 === undefined) {
return _uniq_var_946.concat;
}
_uniq_var_946.concat = _uniq_var_947;
}return _uniq_var_946;
};_uniq_var_948.__lix_func__ = true;return _uniq_var_948;})()(trapExpr, _uniq_var_448);
_uniq_var_449;
var _uniq_var_450 = (function () {var _uniq_var_951 = function (_uniq_var_949, _uniq_var_950) {
if (typeof _uniq_var_949.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_949.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_949.concat.apply(_uniq_var_949, arguments);
} else if (_uniq_var_949.concat !== undefined) {
if (_uniq_var_950 === undefined) {
return _uniq_var_949.concat;
}
_uniq_var_949.concat = _uniq_var_950;
}return _uniq_var_949;
};_uniq_var_951.__lix_func__ = true;return _uniq_var_951;})()(_uniq_var_449, ret[0]);
_uniq_var_450;
(ret[0] = _uniq_var_450);
return [ret, '{start}'];
};_uniq_var_952.__lix_func__ = true;return _uniq_var_952;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_953 = function (expr, define) {var _uniq_var_451 = true;
_uniq_var_451;
var _uniq_var_452 = null;
_uniq_var_452;
var _uniq_var_453 = __eq__(expr[2], '{var}');
_uniq_var_453;
if ((_uniq_var_451 && _uniq_var_453)) {
(_uniq_var_451 = false);
var name = expr[0];
name;
(_uniq_var_452 = name);

};
var _uniq_var_455 = __eq__(expr[2], '{index}');
_uniq_var_455;
if ((_uniq_var_451 && _uniq_var_455)) {
(_uniq_var_451 = false);
var _uniq_var_454 = flatten(expr[0], define);
_uniq_var_454;
var name = _uniq_var_454;
name;
(_uniq_var_452 = name);

};
_uniq_var_452;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_456 = define(moduleExpr);
_uniq_var_456;
return _uniq_var_456;
};_uniq_var_953.__lix_func__ = true;return _uniq_var_953;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_954 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_954.__lix_func__ = true;return _uniq_var_954;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_955 = function (expr, define) {return expr;
};_uniq_var_955.__lix_func__ = true;return _uniq_var_955;})();
flattenAmpersand;
flattenAmpersand;
var flattenAmpersandObject = (function () {var _uniq_var_956 = function (expr, define) {return expr;
};_uniq_var_956.__lix_func__ = true;return _uniq_var_956;})();
flattenAmpersandObject;
flattenAmpersandObject;
var flattenAmpersandBracket = (function () {var _uniq_var_957 = function (expr, define) {return expr;
};_uniq_var_957.__lix_func__ = true;return _uniq_var_957;})();
flattenAmpersandBracket;
flattenAmpersandBracket;
var flattenAnyTypeDestructor = (function () {var _uniq_var_958 = function (arg) {return [];
};_uniq_var_958.__lix_func__ = true;return _uniq_var_958;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_959 = function (expr) {var _uniq_var_457 = transformVarName(expr[0]);
_uniq_var_457;
var varName = _uniq_var_457;
varName;
varName;
var _uniq_var_458 = true;
_uniq_var_458;
var _uniq_var_459 = null;
_uniq_var_459;
var _uniq_var_460 = __eq__(expr[3], "{tmp}");
_uniq_var_460;
if ((_uniq_var_458 && _uniq_var_460)) {
(_uniq_var_458 = false);
(_uniq_var_459 = (varName = expr[0]));

};
_uniq_var_459;
return varName;
};_uniq_var_959.__lix_func__ = true;return _uniq_var_959;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_969 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_461 = getAtomicExprVarName(args[2][0]);
_uniq_var_461;
var varName = _uniq_var_461;
varName;
varName;
var _uniq_var_462 = (function () {var _uniq_var_962 = function (_uniq_var_960, _uniq_var_961) {
if (typeof _uniq_var_960.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_960.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_960.join.apply(_uniq_var_960, arguments);
} else if (_uniq_var_960.join !== undefined) {
if (_uniq_var_961 === undefined) {
return _uniq_var_960.join;
}
_uniq_var_960.join = _uniq_var_961;
}return _uniq_var_960;
};_uniq_var_962.__lix_func__ = true;return _uniq_var_962;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_462;
var _uniq_var_463 = (function () {var _uniq_var_965 = function (_uniq_var_963, _uniq_var_964) {
if (typeof _uniq_var_963.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_963.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_963.push.apply(_uniq_var_963, arguments);
} else if (_uniq_var_963.push !== undefined) {
if (_uniq_var_964 === undefined) {
return _uniq_var_963.push;
}
_uniq_var_963.push = _uniq_var_964;
}return _uniq_var_963;
};_uniq_var_965.__lix_func__ = true;return _uniq_var_965;})()(ret, _uniq_var_462);
_uniq_var_463;
_uniq_var_463;
var _uniq_var_464 = flattenDestructor(args[2], varName);
_uniq_var_464;
var _uniq_var_465 = (function () {var _uniq_var_968 = function (_uniq_var_966, _uniq_var_967) {
if (typeof _uniq_var_966.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_966.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_966.concat.apply(_uniq_var_966, arguments);
} else if (_uniq_var_966.concat !== undefined) {
if (_uniq_var_967 === undefined) {
return _uniq_var_966.concat;
}
_uniq_var_966.concat = _uniq_var_967;
}return _uniq_var_966;
};_uniq_var_968.__lix_func__ = true;return _uniq_var_968;})()(ret, _uniq_var_464);
_uniq_var_465;
(ret = _uniq_var_465);
return ret;
};_uniq_var_969.__lix_func__ = true;return _uniq_var_969;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_979 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_466 = getAtomicExprVarName(args[2][0]);
_uniq_var_466;
var varName = _uniq_var_466;
varName;
varName;
var _uniq_var_467 = (function () {var _uniq_var_972 = function (_uniq_var_970, _uniq_var_971) {
if (typeof _uniq_var_970.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_970.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_970.join.apply(_uniq_var_970, arguments);
} else if (_uniq_var_970.join !== undefined) {
if (_uniq_var_971 === undefined) {
return _uniq_var_970.join;
}
_uniq_var_970.join = _uniq_var_971;
}return _uniq_var_970;
};_uniq_var_972.__lix_func__ = true;return _uniq_var_972;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_467;
var _uniq_var_468 = (function () {var _uniq_var_975 = function (_uniq_var_973, _uniq_var_974) {
if (typeof _uniq_var_973.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_973.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_973.push.apply(_uniq_var_973, arguments);
} else if (_uniq_var_973.push !== undefined) {
if (_uniq_var_974 === undefined) {
return _uniq_var_973.push;
}
_uniq_var_973.push = _uniq_var_974;
}return _uniq_var_973;
};_uniq_var_975.__lix_func__ = true;return _uniq_var_975;})()(ret, _uniq_var_467);
_uniq_var_468;
_uniq_var_468;
var _uniq_var_469 = flattenDestructor(args[2], varName);
_uniq_var_469;
var _uniq_var_470 = (function () {var _uniq_var_978 = function (_uniq_var_976, _uniq_var_977) {
if (typeof _uniq_var_976.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_976.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_976.concat.apply(_uniq_var_976, arguments);
} else if (_uniq_var_976.concat !== undefined) {
if (_uniq_var_977 === undefined) {
return _uniq_var_976.concat;
}
_uniq_var_976.concat = _uniq_var_977;
}return _uniq_var_976;
};_uniq_var_978.__lix_func__ = true;return _uniq_var_978;})()(ret, _uniq_var_469);
_uniq_var_470;
(ret = _uniq_var_470);
return ret;
};_uniq_var_979.__lix_func__ = true;return _uniq_var_979;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_984 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_473 = foreach(args[2], (function () {var _uniq_var_983 = function (item, index) {var _uniq_var_471 = flattenDestructor(item, objName);
_uniq_var_471;
var _uniq_var_472 = (function () {var _uniq_var_982 = function (_uniq_var_980, _uniq_var_981) {
if (typeof _uniq_var_980.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_980.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_980.concat.apply(_uniq_var_980, arguments);
} else if (_uniq_var_980.concat !== undefined) {
if (_uniq_var_981 === undefined) {
return _uniq_var_980.concat;
}
_uniq_var_980.concat = _uniq_var_981;
}return _uniq_var_980;
};_uniq_var_982.__lix_func__ = true;return _uniq_var_982;})()(ret, _uniq_var_471);
_uniq_var_472;
return (ret = _uniq_var_472);
};_uniq_var_983.__lix_func__ = true;return _uniq_var_983;})());
_uniq_var_473;
_uniq_var_473;
return ret;
};_uniq_var_984.__lix_func__ = true;return _uniq_var_984;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenNotDestructor = (function () {var _uniq_var_985 = function (args, varName) {var _uniq_var_474 = flattenDestructor(args[2], varName);
_uniq_var_474;
return _uniq_var_474;
};_uniq_var_985.__lix_func__ = true;return _uniq_var_985;})();
flattenNotDestructor;
flattenNotDestructor;
var flattenAndDestructor = (function () {var _uniq_var_992 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_475 = flattenDestructor(args[2], varName);
_uniq_var_475;
var _uniq_var_476 = (function () {var _uniq_var_988 = function (_uniq_var_986, _uniq_var_987) {
if (typeof _uniq_var_986.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_986.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_986.concat.apply(_uniq_var_986, arguments);
} else if (_uniq_var_986.concat !== undefined) {
if (_uniq_var_987 === undefined) {
return _uniq_var_986.concat;
}
_uniq_var_986.concat = _uniq_var_987;
}return _uniq_var_986;
};_uniq_var_988.__lix_func__ = true;return _uniq_var_988;})()(ret, _uniq_var_475);
_uniq_var_476;
(ret = _uniq_var_476);
var _uniq_var_477 = flattenDestructor(args[3], varName);
_uniq_var_477;
var _uniq_var_478 = (function () {var _uniq_var_991 = function (_uniq_var_989, _uniq_var_990) {
if (typeof _uniq_var_989.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_989.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_989.concat.apply(_uniq_var_989, arguments);
} else if (_uniq_var_989.concat !== undefined) {
if (_uniq_var_990 === undefined) {
return _uniq_var_989.concat;
}
_uniq_var_989.concat = _uniq_var_990;
}return _uniq_var_989;
};_uniq_var_991.__lix_func__ = true;return _uniq_var_991;})()(ret, _uniq_var_477);
_uniq_var_478;
(ret = _uniq_var_478);
return ret;
};_uniq_var_992.__lix_func__ = true;return _uniq_var_992;})();
flattenAndDestructor;
flattenAndDestructor;
var flattenOrDestructor = (function () {var _uniq_var_999 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_479 = flattenDestructor(args[2], varName);
_uniq_var_479;
var _uniq_var_480 = (function () {var _uniq_var_995 = function (_uniq_var_993, _uniq_var_994) {
if (typeof _uniq_var_993.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_993.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_993.concat.apply(_uniq_var_993, arguments);
} else if (_uniq_var_993.concat !== undefined) {
if (_uniq_var_994 === undefined) {
return _uniq_var_993.concat;
}
_uniq_var_993.concat = _uniq_var_994;
}return _uniq_var_993;
};_uniq_var_995.__lix_func__ = true;return _uniq_var_995;})()(ret, _uniq_var_479);
_uniq_var_480;
(ret = _uniq_var_480);
var _uniq_var_481 = flattenDestructor(args[3], varName);
_uniq_var_481;
var _uniq_var_482 = (function () {var _uniq_var_998 = function (_uniq_var_996, _uniq_var_997) {
if (typeof _uniq_var_996.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_996.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_996.concat.apply(_uniq_var_996, arguments);
} else if (_uniq_var_996.concat !== undefined) {
if (_uniq_var_997 === undefined) {
return _uniq_var_996.concat;
}
_uniq_var_996.concat = _uniq_var_997;
}return _uniq_var_996;
};_uniq_var_998.__lix_func__ = true;return _uniq_var_998;})()(ret, _uniq_var_481);
_uniq_var_482;
(ret = _uniq_var_482);
return ret;
};_uniq_var_999.__lix_func__ = true;return _uniq_var_999;})();
flattenOrDestructor;
flattenOrDestructor;
var flattenNamedDestructor = (function () {var _uniq_var_1009 = function (args, oldName) {var ret = [];
ret;
ret;
var _uniq_var_483 = getAtomicExprVarName(args[0]);
_uniq_var_483;
var varName = _uniq_var_483;
varName;
varName;
var _uniq_var_484 = true;
_uniq_var_484;
var _uniq_var_485 = null;
_uniq_var_485;
var _uniq_var_488 = __ne__(oldName, "arguments");
_uniq_var_488;
if ((_uniq_var_484 && _uniq_var_488)) {
(_uniq_var_484 = false);
var _uniq_var_486 = (function () {var _uniq_var_1002 = function (_uniq_var_1000, _uniq_var_1001) {
if (typeof _uniq_var_1000.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1000.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1000.join.apply(_uniq_var_1000, arguments);
} else if (_uniq_var_1000.join !== undefined) {
if (_uniq_var_1001 === undefined) {
return _uniq_var_1000.join;
}
_uniq_var_1000.join = _uniq_var_1001;
}return _uniq_var_1000;
};_uniq_var_1002.__lix_func__ = true;return _uniq_var_1002;})()(["var ", varName, " = ", oldName], "");
_uniq_var_486;
var _uniq_var_487 = (function () {var _uniq_var_1005 = function (_uniq_var_1003, _uniq_var_1004) {
if (typeof _uniq_var_1003.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1003.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1003.push.apply(_uniq_var_1003, arguments);
} else if (_uniq_var_1003.push !== undefined) {
if (_uniq_var_1004 === undefined) {
return _uniq_var_1003.push;
}
_uniq_var_1003.push = _uniq_var_1004;
}return _uniq_var_1003;
};_uniq_var_1005.__lix_func__ = true;return _uniq_var_1005;})()(ret, _uniq_var_486);
_uniq_var_487;
(_uniq_var_485 = _uniq_var_487);

};
_uniq_var_485;
var _uniq_var_489 = flattenDestructor(args[2], varName);
_uniq_var_489;
var _uniq_var_490 = (function () {var _uniq_var_1008 = function (_uniq_var_1006, _uniq_var_1007) {
if (typeof _uniq_var_1006.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1006.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1006.concat.apply(_uniq_var_1006, arguments);
} else if (_uniq_var_1006.concat !== undefined) {
if (_uniq_var_1007 === undefined) {
return _uniq_var_1006.concat;
}
_uniq_var_1006.concat = _uniq_var_1007;
}return _uniq_var_1006;
};_uniq_var_1008.__lix_func__ = true;return _uniq_var_1008;})()(ret, _uniq_var_489);
_uniq_var_490;
(ret = _uniq_var_490);
return ret;
};_uniq_var_1009.__lix_func__ = true;return _uniq_var_1009;})();
flattenNamedDestructor;
flattenNamedDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_1020 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_499 = foreach(args[2], (function () {var _uniq_var_1019 = function (item, index) {var _uniq_var_491 = getAtomicExprVarName(item[0]);
_uniq_var_491;
var varName = _uniq_var_491;
varName;
varName;
var _uniq_var_492 = true;
_uniq_var_492;
var _uniq_var_493 = null;
_uniq_var_493;
var _uniq_var_496 = __ne__(arrayName, 'arguments');
_uniq_var_496;
if ((_uniq_var_492 && _uniq_var_496)) {
(_uniq_var_492 = false);
var _uniq_var_494 = (function () {var _uniq_var_1012 = function (_uniq_var_1010, _uniq_var_1011) {
if (typeof _uniq_var_1010.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1010.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1010.join.apply(_uniq_var_1010, arguments);
} else if (_uniq_var_1010.join !== undefined) {
if (_uniq_var_1011 === undefined) {
return _uniq_var_1010.join;
}
_uniq_var_1010.join = _uniq_var_1011;
}return _uniq_var_1010;
};_uniq_var_1012.__lix_func__ = true;return _uniq_var_1012;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_494;
var _uniq_var_495 = (function () {var _uniq_var_1015 = function (_uniq_var_1013, _uniq_var_1014) {
if (typeof _uniq_var_1013.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1013.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1013.push.apply(_uniq_var_1013, arguments);
} else if (_uniq_var_1013.push !== undefined) {
if (_uniq_var_1014 === undefined) {
return _uniq_var_1013.push;
}
_uniq_var_1013.push = _uniq_var_1014;
}return _uniq_var_1013;
};_uniq_var_1015.__lix_func__ = true;return _uniq_var_1015;})()(ret, _uniq_var_494);
_uniq_var_495;
(_uniq_var_493 = _uniq_var_495);

};
_uniq_var_493;
var _uniq_var_497 = flattenDestructor(item, varName);
_uniq_var_497;
var _uniq_var_498 = (function () {var _uniq_var_1018 = function (_uniq_var_1016, _uniq_var_1017) {
if (typeof _uniq_var_1016.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1016.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1016.concat.apply(_uniq_var_1016, arguments);
} else if (_uniq_var_1016.concat !== undefined) {
if (_uniq_var_1017 === undefined) {
return _uniq_var_1016.concat;
}
_uniq_var_1016.concat = _uniq_var_1017;
}return _uniq_var_1016;
};_uniq_var_1018.__lix_func__ = true;return _uniq_var_1018;})()(ret, _uniq_var_497);
_uniq_var_498;
return (ret = _uniq_var_498);
};_uniq_var_1019.__lix_func__ = true;return _uniq_var_1019;})());
_uniq_var_499;
_uniq_var_499;
return ret;
};_uniq_var_1020.__lix_func__ = true;return _uniq_var_1020;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_1046 = function (args, arrayName, def) {var len = args[2].length;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_500 = true;
_uniq_var_500;
var _uniq_var_501 = null;
_uniq_var_501;
var _uniq_var_504 = __ne__(arrayName, "arguments");
_uniq_var_504;
if ((_uniq_var_500 && _uniq_var_504)) {
(_uniq_var_500 = false);
var _uniq_var_502 = (function () {var _uniq_var_1023 = function (_uniq_var_1021, _uniq_var_1022) {
if (typeof _uniq_var_1021.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1021.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1021.join.apply(_uniq_var_1021, arguments);
} else if (_uniq_var_1021.join !== undefined) {
if (_uniq_var_1022 === undefined) {
return _uniq_var_1021.join;
}
_uniq_var_1021.join = _uniq_var_1022;
}return _uniq_var_1021;
};_uniq_var_1023.__lix_func__ = true;return _uniq_var_1023;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_502;
var _uniq_var_503 = (function () {var _uniq_var_1026 = function (_uniq_var_1024, _uniq_var_1025) {
if (typeof _uniq_var_1024.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1024.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1024.push.apply(_uniq_var_1024, arguments);
} else if (_uniq_var_1024.push !== undefined) {
if (_uniq_var_1025 === undefined) {
return _uniq_var_1024.push;
}
_uniq_var_1024.push = _uniq_var_1025;
}return _uniq_var_1024;
};_uniq_var_1026.__lix_func__ = true;return _uniq_var_1026;})()(ret, _uniq_var_502);
_uniq_var_503;
(_uniq_var_501 = _uniq_var_503);

};
_uniq_var_501;
var _uniq_var_505 = (function () {var _uniq_var_1029 = function (_uniq_var_1027, _uniq_var_1028) {
if (typeof _uniq_var_1027.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1027.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1027.join.apply(_uniq_var_1027, arguments);
} else if (_uniq_var_1027.join !== undefined) {
if (_uniq_var_1028 === undefined) {
return _uniq_var_1027.join;
}
_uniq_var_1027.join = _uniq_var_1028;
}return _uniq_var_1027;
};_uniq_var_1029.__lix_func__ = true;return _uniq_var_1029;})()([arrayName, ".length == ", len], "");
_uniq_var_505;
var _uniq_var_506 = (function () {var _uniq_var_1032 = function (_uniq_var_1030, _uniq_var_1031) {
if (typeof _uniq_var_1030.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1030.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1030.push.apply(_uniq_var_1030, arguments);
} else if (_uniq_var_1030.push !== undefined) {
if (_uniq_var_1031 === undefined) {
return _uniq_var_1030.push;
}
_uniq_var_1030.push = _uniq_var_1031;
}return _uniq_var_1030;
};_uniq_var_1032.__lix_func__ = true;return _uniq_var_1032;})()(ret, _uniq_var_505);
_uniq_var_506;
_uniq_var_506;
var _uniq_var_514 = foreach(args[2], (function () {var _uniq_var_1042 = function (item, index) {var _uniq_var_507 = call(def.newVar);
_uniq_var_507;
var newVar = _uniq_var_507;
newVar;
newVar;
var _uniq_var_508 = (function () {var _uniq_var_1035 = function (_uniq_var_1033, _uniq_var_1034) {
if (typeof _uniq_var_1033.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1033.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1033.join.apply(_uniq_var_1033, arguments);
} else if (_uniq_var_1033.join !== undefined) {
if (_uniq_var_1034 === undefined) {
return _uniq_var_1033.join;
}
_uniq_var_1033.join = _uniq_var_1034;
}return _uniq_var_1033;
};_uniq_var_1035.__lix_func__ = true;return _uniq_var_1035;})()([arrayName, "[", index, "]"], "");
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
var _uniq_var_512 = (function () {var _uniq_var_1038 = function (_uniq_var_1036, _uniq_var_1037) {
if (typeof _uniq_var_1036.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1036.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1036.join.apply(_uniq_var_1036, arguments);
} else if (_uniq_var_1036.join !== undefined) {
if (_uniq_var_1037 === undefined) {
return _uniq_var_1036.join;
}
_uniq_var_1036.join = _uniq_var_1037;
}return _uniq_var_1036;
};_uniq_var_1038.__lix_func__ = true;return _uniq_var_1038;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_512;
var _uniq_var_513 = (function () {var _uniq_var_1041 = function (_uniq_var_1039, _uniq_var_1040) {
if (typeof _uniq_var_1039.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1039.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1039.push.apply(_uniq_var_1039, arguments);
} else if (_uniq_var_1039.push !== undefined) {
if (_uniq_var_1040 === undefined) {
return _uniq_var_1039.push;
}
_uniq_var_1039.push = _uniq_var_1040;
}return _uniq_var_1039;
};_uniq_var_1041.__lix_func__ = true;return _uniq_var_1041;})()(ret, _uniq_var_512);
_uniq_var_513;
(_uniq_var_511 = _uniq_var_513);

};
return _uniq_var_511;
};_uniq_var_1042.__lix_func__ = true;return _uniq_var_1042;})());
_uniq_var_514;
_uniq_var_514;
var _uniq_var_515 = (function () {var _uniq_var_1045 = function (_uniq_var_1043, _uniq_var_1044) {
if (typeof _uniq_var_1043.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1043.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1043.join.apply(_uniq_var_1043, arguments);
} else if (_uniq_var_1043.join !== undefined) {
if (_uniq_var_1044 === undefined) {
return _uniq_var_1043.join;
}
_uniq_var_1043.join = _uniq_var_1044;
}return _uniq_var_1043;
};_uniq_var_1045.__lix_func__ = true;return _uniq_var_1045;})()(ret, " && ");
_uniq_var_515;
return _uniq_var_515;
};_uniq_var_1046.__lix_func__ = true;return _uniq_var_1046;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenIndexCondition = (function () {var _uniq_var_1053 = function (args, objectName, def) {var _uniq_var_516 = call(def.newVar);
_uniq_var_516;
var newVar = _uniq_var_516;
newVar;
newVar;
var _uniq_var_517 = (function () {var _uniq_var_1049 = function (_uniq_var_1047, _uniq_var_1048) {
if (typeof _uniq_var_1047.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1047.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1047.join.apply(_uniq_var_1047, arguments);
} else if (_uniq_var_1047.join !== undefined) {
if (_uniq_var_1048 === undefined) {
return _uniq_var_1047.join;
}
_uniq_var_1047.join = _uniq_var_1048;
}return _uniq_var_1047;
};_uniq_var_1049.__lix_func__ = true;return _uniq_var_1049;})()([objectName, "[", args[0], "]"], "");
_uniq_var_517;
var expr = _uniq_var_517;
expr;
expr;
var _uniq_var_518 = flattenCondition(args[2], newVar, def);
_uniq_var_518;
var ret = _uniq_var_518;
ret;
ret;
var _uniq_var_519 = (function () {var _uniq_var_1052 = function (_uniq_var_1050, _uniq_var_1051) {
if (typeof _uniq_var_1050.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1050.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1050.join.apply(_uniq_var_1050, arguments);
} else if (_uniq_var_1050.join !== undefined) {
if (_uniq_var_1051 === undefined) {
return _uniq_var_1050.join;
}
_uniq_var_1050.join = _uniq_var_1051;
}return _uniq_var_1050;
};_uniq_var_1052.__lix_func__ = true;return _uniq_var_1052;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_519;
return _uniq_var_519;
};_uniq_var_1053.__lix_func__ = true;return _uniq_var_1053;})();
flattenIndexCondition;
flattenIndexCondition;
var flattenFieldCondition = (function () {var _uniq_var_1060 = function (args, objectName, def) {var _uniq_var_520 = call(def.newVar);
_uniq_var_520;
var newVar = _uniq_var_520;
newVar;
newVar;
var _uniq_var_521 = (function () {var _uniq_var_1056 = function (_uniq_var_1054, _uniq_var_1055) {
if (typeof _uniq_var_1054.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1054.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1054.join.apply(_uniq_var_1054, arguments);
} else if (_uniq_var_1054.join !== undefined) {
if (_uniq_var_1055 === undefined) {
return _uniq_var_1054.join;
}
_uniq_var_1054.join = _uniq_var_1055;
}return _uniq_var_1054;
};_uniq_var_1056.__lix_func__ = true;return _uniq_var_1056;})()([objectName, ".", args[0]], "");
_uniq_var_521;
var expr = _uniq_var_521;
expr;
expr;
var _uniq_var_522 = flattenCondition(args[2], newVar, def);
_uniq_var_522;
var ret = _uniq_var_522;
ret;
ret;
var _uniq_var_523 = (function () {var _uniq_var_1059 = function (_uniq_var_1057, _uniq_var_1058) {
if (typeof _uniq_var_1057.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1057.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1057.join.apply(_uniq_var_1057, arguments);
} else if (_uniq_var_1057.join !== undefined) {
if (_uniq_var_1058 === undefined) {
return _uniq_var_1057.join;
}
_uniq_var_1057.join = _uniq_var_1058;
}return _uniq_var_1057;
};_uniq_var_1059.__lix_func__ = true;return _uniq_var_1059;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_523;
return _uniq_var_523;
};_uniq_var_1060.__lix_func__ = true;return _uniq_var_1060;})();
flattenFieldCondition;
flattenFieldCondition;
var flattenObjectCondition = (function () {var _uniq_var_1074 = function (args, objectName, def) {var ret = [];
ret;
ret;
var _uniq_var_524 = true;
_uniq_var_524;
var _uniq_var_525 = null;
_uniq_var_525;
var _uniq_var_527 = __ne__(objectName, "arguments");
_uniq_var_527;
if ((_uniq_var_524 && _uniq_var_527)) {
(_uniq_var_524 = false);
var _uniq_var_526 = (function () {var _uniq_var_1063 = function (_uniq_var_1061, _uniq_var_1062) {
if (typeof _uniq_var_1061.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1061.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1061.push.apply(_uniq_var_1061, arguments);
} else if (_uniq_var_1061.push !== undefined) {
if (_uniq_var_1062 === undefined) {
return _uniq_var_1061.push;
}
_uniq_var_1061.push = _uniq_var_1062;
}return _uniq_var_1061;
};_uniq_var_1063.__lix_func__ = true;return _uniq_var_1063;})()(ret, objectName);
_uniq_var_526;
(_uniq_var_525 = _uniq_var_526);

};
_uniq_var_525;
var _uniq_var_533 = foreach(args[2], (function () {var _uniq_var_1070 = function (item, index) {var _uniq_var_528 = flattenCondition(item, objectName, def);
_uniq_var_528;
var cond = _uniq_var_528;
cond;
cond;
var _uniq_var_529 = true;
_uniq_var_529;
var _uniq_var_530 = null;
_uniq_var_530;
if ((_uniq_var_529 && cond)) {
(_uniq_var_529 = false);
var _uniq_var_531 = (function () {var _uniq_var_1066 = function (_uniq_var_1064, _uniq_var_1065) {
if (typeof _uniq_var_1064.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1064.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1064.join.apply(_uniq_var_1064, arguments);
} else if (_uniq_var_1064.join !== undefined) {
if (_uniq_var_1065 === undefined) {
return _uniq_var_1064.join;
}
_uniq_var_1064.join = _uniq_var_1065;
}return _uniq_var_1064;
};_uniq_var_1066.__lix_func__ = true;return _uniq_var_1066;})()(["(", cond, ")"], "");
_uniq_var_531;
var _uniq_var_532 = (function () {var _uniq_var_1069 = function (_uniq_var_1067, _uniq_var_1068) {
if (typeof _uniq_var_1067.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1067.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1067.push.apply(_uniq_var_1067, arguments);
} else if (_uniq_var_1067.push !== undefined) {
if (_uniq_var_1068 === undefined) {
return _uniq_var_1067.push;
}
_uniq_var_1067.push = _uniq_var_1068;
}return _uniq_var_1067;
};_uniq_var_1069.__lix_func__ = true;return _uniq_var_1069;})()(ret, _uniq_var_531);
_uniq_var_532;
(_uniq_var_530 = _uniq_var_532);

};
return _uniq_var_530;
};_uniq_var_1070.__lix_func__ = true;return _uniq_var_1070;})());
_uniq_var_533;
_uniq_var_533;
var _uniq_var_534 = (function () {var _uniq_var_1073 = function (_uniq_var_1071, _uniq_var_1072) {
if (typeof _uniq_var_1071.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1071.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1071.join.apply(_uniq_var_1071, arguments);
} else if (_uniq_var_1071.join !== undefined) {
if (_uniq_var_1072 === undefined) {
return _uniq_var_1071.join;
}
_uniq_var_1071.join = _uniq_var_1072;
}return _uniq_var_1071;
};_uniq_var_1073.__lix_func__ = true;return _uniq_var_1073;})()(ret, " && ");
_uniq_var_534;
return _uniq_var_534;
};_uniq_var_1074.__lix_func__ = true;return _uniq_var_1074;})();
flattenObjectCondition;
flattenObjectCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_1110 = function (args, arrayName, def) {var _uniq_var_535 = __add__(args[2].length, args[4].length);
_uniq_var_535;
var len = _uniq_var_535;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_536 = true;
_uniq_var_536;
var _uniq_var_537 = null;
_uniq_var_537;
var _uniq_var_540 = __ne__(arrayName, "arguments");
_uniq_var_540;
if ((_uniq_var_536 && _uniq_var_540)) {
(_uniq_var_536 = false);
var _uniq_var_538 = (function () {var _uniq_var_1077 = function (_uniq_var_1075, _uniq_var_1076) {
if (typeof _uniq_var_1075.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1075.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1075.join.apply(_uniq_var_1075, arguments);
} else if (_uniq_var_1075.join !== undefined) {
if (_uniq_var_1076 === undefined) {
return _uniq_var_1075.join;
}
_uniq_var_1075.join = _uniq_var_1076;
}return _uniq_var_1075;
};_uniq_var_1077.__lix_func__ = true;return _uniq_var_1077;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_538;
var _uniq_var_539 = (function () {var _uniq_var_1080 = function (_uniq_var_1078, _uniq_var_1079) {
if (typeof _uniq_var_1078.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1078.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1078.push.apply(_uniq_var_1078, arguments);
} else if (_uniq_var_1078.push !== undefined) {
if (_uniq_var_1079 === undefined) {
return _uniq_var_1078.push;
}
_uniq_var_1078.push = _uniq_var_1079;
}return _uniq_var_1078;
};_uniq_var_1080.__lix_func__ = true;return _uniq_var_1080;})()(ret, _uniq_var_538);
_uniq_var_539;
(_uniq_var_537 = _uniq_var_539);

};
_uniq_var_537;
var _uniq_var_541 = true;
_uniq_var_541;
var _uniq_var_542 = null;
_uniq_var_542;
var _uniq_var_545 = __gt__(len, 0);
_uniq_var_545;
if ((_uniq_var_541 && _uniq_var_545)) {
(_uniq_var_541 = false);
var _uniq_var_543 = (function () {var _uniq_var_1083 = function (_uniq_var_1081, _uniq_var_1082) {
if (typeof _uniq_var_1081.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1081.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1081.join.apply(_uniq_var_1081, arguments);
} else if (_uniq_var_1081.join !== undefined) {
if (_uniq_var_1082 === undefined) {
return _uniq_var_1081.join;
}
_uniq_var_1081.join = _uniq_var_1082;
}return _uniq_var_1081;
};_uniq_var_1083.__lix_func__ = true;return _uniq_var_1083;})()([arrayName, ".length >= ", len], "");
_uniq_var_543;
var _uniq_var_544 = (function () {var _uniq_var_1086 = function (_uniq_var_1084, _uniq_var_1085) {
if (typeof _uniq_var_1084.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1084.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1084.push.apply(_uniq_var_1084, arguments);
} else if (_uniq_var_1084.push !== undefined) {
if (_uniq_var_1085 === undefined) {
return _uniq_var_1084.push;
}
_uniq_var_1084.push = _uniq_var_1085;
}return _uniq_var_1084;
};_uniq_var_1086.__lix_func__ = true;return _uniq_var_1086;})()(ret, _uniq_var_543);
_uniq_var_544;
(_uniq_var_542 = _uniq_var_544);

};
_uniq_var_542;
var _uniq_var_553 = foreach(args[2], (function () {var _uniq_var_1096 = function (item, index) {var _uniq_var_546 = call(def.newVar);
_uniq_var_546;
var newVar = _uniq_var_546;
newVar;
newVar;
var _uniq_var_547 = (function () {var _uniq_var_1089 = function (_uniq_var_1087, _uniq_var_1088) {
if (typeof _uniq_var_1087.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1087.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1087.join.apply(_uniq_var_1087, arguments);
} else if (_uniq_var_1087.join !== undefined) {
if (_uniq_var_1088 === undefined) {
return _uniq_var_1087.join;
}
_uniq_var_1087.join = _uniq_var_1088;
}return _uniq_var_1087;
};_uniq_var_1089.__lix_func__ = true;return _uniq_var_1089;})()([arrayName, "[", index, "]"], "");
_uniq_var_547;
var expr = _uniq_var_547;
expr;
expr;
var _uniq_var_548 = flattenCondition(item, newVar, def);
_uniq_var_548;
var cond = _uniq_var_548;
cond;
cond;
var _uniq_var_549 = true;
_uniq_var_549;
var _uniq_var_550 = null;
_uniq_var_550;
if ((_uniq_var_549 && cond)) {
(_uniq_var_549 = false);
var _uniq_var_551 = (function () {var _uniq_var_1092 = function (_uniq_var_1090, _uniq_var_1091) {
if (typeof _uniq_var_1090.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1090.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1090.join.apply(_uniq_var_1090, arguments);
} else if (_uniq_var_1090.join !== undefined) {
if (_uniq_var_1091 === undefined) {
return _uniq_var_1090.join;
}
_uniq_var_1090.join = _uniq_var_1091;
}return _uniq_var_1090;
};_uniq_var_1092.__lix_func__ = true;return _uniq_var_1092;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_551;
var _uniq_var_552 = (function () {var _uniq_var_1095 = function (_uniq_var_1093, _uniq_var_1094) {
if (typeof _uniq_var_1093.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1093.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1093.push.apply(_uniq_var_1093, arguments);
} else if (_uniq_var_1093.push !== undefined) {
if (_uniq_var_1094 === undefined) {
return _uniq_var_1093.push;
}
_uniq_var_1093.push = _uniq_var_1094;
}return _uniq_var_1093;
};_uniq_var_1095.__lix_func__ = true;return _uniq_var_1095;})()(ret, _uniq_var_551);
_uniq_var_552;
(_uniq_var_550 = _uniq_var_552);

};
return _uniq_var_550;
};_uniq_var_1096.__lix_func__ = true;return _uniq_var_1096;})());
_uniq_var_553;
_uniq_var_553;
var _uniq_var_562 = foreach(args[4], (function () {var _uniq_var_1106 = function (item, index) {var _uniq_var_554 = call(def.newVar);
_uniq_var_554;
var newVar = _uniq_var_554;
newVar;
newVar;
var _uniq_var_555 = __sub__(args[4].length, index);
_uniq_var_555;
var _uniq_var_556 = (function () {var _uniq_var_1099 = function (_uniq_var_1097, _uniq_var_1098) {
if (typeof _uniq_var_1097.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1097.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1097.join.apply(_uniq_var_1097, arguments);
} else if (_uniq_var_1097.join !== undefined) {
if (_uniq_var_1098 === undefined) {
return _uniq_var_1097.join;
}
_uniq_var_1097.join = _uniq_var_1098;
}return _uniq_var_1097;
};_uniq_var_1099.__lix_func__ = true;return _uniq_var_1099;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_555, "]"], "");
_uniq_var_556;
var expr = _uniq_var_556;
expr;
expr;
var _uniq_var_557 = flattenCondition(item, newVar, def);
_uniq_var_557;
var cond = _uniq_var_557;
cond;
cond;
var _uniq_var_558 = true;
_uniq_var_558;
var _uniq_var_559 = null;
_uniq_var_559;
if ((_uniq_var_558 && cond)) {
(_uniq_var_558 = false);
var _uniq_var_560 = (function () {var _uniq_var_1102 = function (_uniq_var_1100, _uniq_var_1101) {
if (typeof _uniq_var_1100.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1100.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1100.join.apply(_uniq_var_1100, arguments);
} else if (_uniq_var_1100.join !== undefined) {
if (_uniq_var_1101 === undefined) {
return _uniq_var_1100.join;
}
_uniq_var_1100.join = _uniq_var_1101;
}return _uniq_var_1100;
};_uniq_var_1102.__lix_func__ = true;return _uniq_var_1102;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_560;
var _uniq_var_561 = (function () {var _uniq_var_1105 = function (_uniq_var_1103, _uniq_var_1104) {
if (typeof _uniq_var_1103.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1103.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1103.push.apply(_uniq_var_1103, arguments);
} else if (_uniq_var_1103.push !== undefined) {
if (_uniq_var_1104 === undefined) {
return _uniq_var_1103.push;
}
_uniq_var_1103.push = _uniq_var_1104;
}return _uniq_var_1103;
};_uniq_var_1105.__lix_func__ = true;return _uniq_var_1105;})()(ret, _uniq_var_560);
_uniq_var_561;
(_uniq_var_559 = _uniq_var_561);

};
return _uniq_var_559;
};_uniq_var_1106.__lix_func__ = true;return _uniq_var_1106;})());
_uniq_var_562;
_uniq_var_562;
var _uniq_var_563 = (function () {var _uniq_var_1109 = function (_uniq_var_1107, _uniq_var_1108) {
if (typeof _uniq_var_1107.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1107.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1107.join.apply(_uniq_var_1107, arguments);
} else if (_uniq_var_1107.join !== undefined) {
if (_uniq_var_1108 === undefined) {
return _uniq_var_1107.join;
}
_uniq_var_1107.join = _uniq_var_1108;
}return _uniq_var_1107;
};_uniq_var_1109.__lix_func__ = true;return _uniq_var_1109;})()(ret, " && ");
_uniq_var_563;
return _uniq_var_563;
};_uniq_var_1110.__lix_func__ = true;return _uniq_var_1110;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_1137 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_572 = foreach(args[2], (function () {var _uniq_var_1120 = function (item, index) {var _uniq_var_564 = getAtomicExprVarName(item[0]);
_uniq_var_564;
var varName = _uniq_var_564;
varName;
varName;
var _uniq_var_565 = true;
_uniq_var_565;
var _uniq_var_566 = null;
_uniq_var_566;
var _uniq_var_569 = __ne__(arrayName, "arguments");
_uniq_var_569;
if ((_uniq_var_565 && _uniq_var_569)) {
(_uniq_var_565 = false);
var _uniq_var_567 = (function () {var _uniq_var_1113 = function (_uniq_var_1111, _uniq_var_1112) {
if (typeof _uniq_var_1111.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1111.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1111.join.apply(_uniq_var_1111, arguments);
} else if (_uniq_var_1111.join !== undefined) {
if (_uniq_var_1112 === undefined) {
return _uniq_var_1111.join;
}
_uniq_var_1111.join = _uniq_var_1112;
}return _uniq_var_1111;
};_uniq_var_1113.__lix_func__ = true;return _uniq_var_1113;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_567;
var _uniq_var_568 = (function () {var _uniq_var_1116 = function (_uniq_var_1114, _uniq_var_1115) {
if (typeof _uniq_var_1114.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1114.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1114.push.apply(_uniq_var_1114, arguments);
} else if (_uniq_var_1114.push !== undefined) {
if (_uniq_var_1115 === undefined) {
return _uniq_var_1114.push;
}
_uniq_var_1114.push = _uniq_var_1115;
}return _uniq_var_1114;
};_uniq_var_1116.__lix_func__ = true;return _uniq_var_1116;})()(ret, _uniq_var_567);
_uniq_var_568;
(_uniq_var_566 = _uniq_var_568);

};
_uniq_var_566;
var _uniq_var_570 = flattenDestructor(item, varName);
_uniq_var_570;
var _uniq_var_571 = (function () {var _uniq_var_1119 = function (_uniq_var_1117, _uniq_var_1118) {
if (typeof _uniq_var_1117.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1117.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1117.concat.apply(_uniq_var_1117, arguments);
} else if (_uniq_var_1117.concat !== undefined) {
if (_uniq_var_1118 === undefined) {
return _uniq_var_1117.concat;
}
_uniq_var_1117.concat = _uniq_var_1118;
}return _uniq_var_1117;
};_uniq_var_1119.__lix_func__ = true;return _uniq_var_1119;})()(ret, _uniq_var_570);
_uniq_var_571;
return (ret = _uniq_var_571);
};_uniq_var_1120.__lix_func__ = true;return _uniq_var_1120;})());
_uniq_var_572;
_uniq_var_572;
var _uniq_var_573 = true;
_uniq_var_573;
var _uniq_var_574 = null;
_uniq_var_574;
var _uniq_var_578 = __eq__(args[3][1], "{va_arg}");
_uniq_var_578;
if ((_uniq_var_573 && _uniq_var_578)) {
(_uniq_var_573 = false);
var _uniq_var_575 = getAtomicExprVarName(args[3][0]);
_uniq_var_575;
var varName = _uniq_var_575;
varName;
varName;
var _uniq_var_576 = (function () {var _uniq_var_1123 = function (_uniq_var_1121, _uniq_var_1122) {
if (typeof _uniq_var_1121.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1121.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1121.join.apply(_uniq_var_1121, arguments);
} else if (_uniq_var_1121.join !== undefined) {
if (_uniq_var_1122 === undefined) {
return _uniq_var_1121.join;
}
_uniq_var_1121.join = _uniq_var_1122;
}return _uniq_var_1121;
};_uniq_var_1123.__lix_func__ = true;return _uniq_var_1123;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_576;
var _uniq_var_577 = (function () {var _uniq_var_1126 = function (_uniq_var_1124, _uniq_var_1125) {
if (typeof _uniq_var_1124.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1124.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1124.push.apply(_uniq_var_1124, arguments);
} else if (_uniq_var_1124.push !== undefined) {
if (_uniq_var_1125 === undefined) {
return _uniq_var_1124.push;
}
_uniq_var_1124.push = _uniq_var_1125;
}return _uniq_var_1124;
};_uniq_var_1126.__lix_func__ = true;return _uniq_var_1126;})()(ret, _uniq_var_576);
_uniq_var_577;
(_uniq_var_574 = _uniq_var_577);

};
_uniq_var_574;
var _uniq_var_585 = foreach(args[4], (function () {var _uniq_var_1136 = function (item, index) {var _uniq_var_579 = getAtomicExprVarName(item[0]);
_uniq_var_579;
var varName = _uniq_var_579;
varName;
varName;
var _uniq_var_580 = __sub__(tail_lenth, index);
_uniq_var_580;
var _uniq_var_581 = (function () {var _uniq_var_1129 = function (_uniq_var_1127, _uniq_var_1128) {
if (typeof _uniq_var_1127.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1127.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1127.join.apply(_uniq_var_1127, arguments);
} else if (_uniq_var_1127.join !== undefined) {
if (_uniq_var_1128 === undefined) {
return _uniq_var_1127.join;
}
_uniq_var_1127.join = _uniq_var_1128;
}return _uniq_var_1127;
};_uniq_var_1129.__lix_func__ = true;return _uniq_var_1129;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", arrayName, ".length - ", _uniq_var_580, "] : undefined"], "");
_uniq_var_581;
var _uniq_var_582 = (function () {var _uniq_var_1132 = function (_uniq_var_1130, _uniq_var_1131) {
if (typeof _uniq_var_1130.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1130.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1130.push.apply(_uniq_var_1130, arguments);
} else if (_uniq_var_1130.push !== undefined) {
if (_uniq_var_1131 === undefined) {
return _uniq_var_1130.push;
}
_uniq_var_1130.push = _uniq_var_1131;
}return _uniq_var_1130;
};_uniq_var_1132.__lix_func__ = true;return _uniq_var_1132;})()(ret, _uniq_var_581);
_uniq_var_582;
_uniq_var_582;
var _uniq_var_583 = flattenDestructor(item, varName);
_uniq_var_583;
var _uniq_var_584 = (function () {var _uniq_var_1135 = function (_uniq_var_1133, _uniq_var_1134) {
if (typeof _uniq_var_1133.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1133.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1133.concat.apply(_uniq_var_1133, arguments);
} else if (_uniq_var_1133.concat !== undefined) {
if (_uniq_var_1134 === undefined) {
return _uniq_var_1133.concat;
}
_uniq_var_1133.concat = _uniq_var_1134;
}return _uniq_var_1133;
};_uniq_var_1135.__lix_func__ = true;return _uniq_var_1135;})()(ret, _uniq_var_583);
_uniq_var_584;
return (ret = _uniq_var_584);
};_uniq_var_1136.__lix_func__ = true;return _uniq_var_1136;})());
_uniq_var_585;
_uniq_var_585;
return ret;
};_uniq_var_1137.__lix_func__ = true;return _uniq_var_1137;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_1138 = function (args, varName, def) {return 1;
};_uniq_var_1138.__lix_func__ = true;return _uniq_var_1138;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenLiteralArgCondition = (function () {var _uniq_var_1142 = function (args, varName, def) {var _uniq_var_586 = (function () {var _uniq_var_1141 = function (_uniq_var_1139, _uniq_var_1140) {
if (typeof _uniq_var_1139.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1139.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1139.join.apply(_uniq_var_1139, arguments);
} else if (_uniq_var_1139.join !== undefined) {
if (_uniq_var_1140 === undefined) {
return _uniq_var_1139.join;
}
_uniq_var_1139.join = _uniq_var_1140;
}return _uniq_var_1139;
};_uniq_var_1141.__lix_func__ = true;return _uniq_var_1141;})()([varName, " === ", args[2]], "");
_uniq_var_586;
return _uniq_var_586;
};_uniq_var_1142.__lix_func__ = true;return _uniq_var_1142;})();
flattenLiteralArgCondition;
flattenLiteralArgCondition;
var flattenLTArgCondition = (function () {var _uniq_var_1146 = function (args, varName, def) {var _uniq_var_587 = (function () {var _uniq_var_1145 = function (_uniq_var_1143, _uniq_var_1144) {
if (typeof _uniq_var_1143.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1143.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1143.join.apply(_uniq_var_1143, arguments);
} else if (_uniq_var_1143.join !== undefined) {
if (_uniq_var_1144 === undefined) {
return _uniq_var_1143.join;
}
_uniq_var_1143.join = _uniq_var_1144;
}return _uniq_var_1143;
};_uniq_var_1145.__lix_func__ = true;return _uniq_var_1145;})()(["typeof(", varName, ") == 'number' && ", varName, " < ", args[2]], "");
_uniq_var_587;
return _uniq_var_587;
};_uniq_var_1146.__lix_func__ = true;return _uniq_var_1146;})();
flattenLTArgCondition;
flattenLTArgCondition;
var flattenBetweenArgCondition = (function () {var _uniq_var_1150 = function (args, varName, def) {var _uniq_var_588 = (function () {var _uniq_var_1149 = function (_uniq_var_1147, _uniq_var_1148) {
if (typeof _uniq_var_1147.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1147.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1147.join.apply(_uniq_var_1147, arguments);
} else if (_uniq_var_1147.join !== undefined) {
if (_uniq_var_1148 === undefined) {
return _uniq_var_1147.join;
}
_uniq_var_1147.join = _uniq_var_1148;
}return _uniq_var_1147;
};_uniq_var_1149.__lix_func__ = true;return _uniq_var_1149;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2], " && ", varName, " < ", args[3]], "");
_uniq_var_588;
return _uniq_var_588;
};_uniq_var_1150.__lix_func__ = true;return _uniq_var_1150;})();
flattenBetweenArgCondition;
flattenBetweenArgCondition;
var flattenGEArgCondition = (function () {var _uniq_var_1154 = function (args, varName, def) {var _uniq_var_589 = (function () {var _uniq_var_1153 = function (_uniq_var_1151, _uniq_var_1152) {
if (typeof _uniq_var_1151.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1151.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1151.join.apply(_uniq_var_1151, arguments);
} else if (_uniq_var_1151.join !== undefined) {
if (_uniq_var_1152 === undefined) {
return _uniq_var_1151.join;
}
_uniq_var_1151.join = _uniq_var_1152;
}return _uniq_var_1151;
};_uniq_var_1153.__lix_func__ = true;return _uniq_var_1153;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2]], "");
_uniq_var_589;
return _uniq_var_589;
};_uniq_var_1154.__lix_func__ = true;return _uniq_var_1154;})();
flattenGEArgCondition;
flattenGEArgCondition;
var flattenNamedArgCondition = (function () {var _uniq_var_1155 = function (args, varName, def) {var _uniq_var_590 = flattenCondition(args[2], varName, def);
_uniq_var_590;
return _uniq_var_590;
};_uniq_var_1155.__lix_func__ = true;return _uniq_var_1155;})();
flattenNamedArgCondition;
flattenNamedArgCondition;
var flattenNotArgCondition = (function () {var _uniq_var_1159 = function (args, varName, def) {var _uniq_var_591 = flattenCondition(args[2], varName, def);
_uniq_var_591;
var cond0 = _uniq_var_591;
cond0;
cond0;
var _uniq_var_592 = (function () {var _uniq_var_1158 = function (_uniq_var_1156, _uniq_var_1157) {
if (typeof _uniq_var_1156.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1156.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1156.join.apply(_uniq_var_1156, arguments);
} else if (_uniq_var_1156.join !== undefined) {
if (_uniq_var_1157 === undefined) {
return _uniq_var_1156.join;
}
_uniq_var_1156.join = _uniq_var_1157;
}return _uniq_var_1156;
};_uniq_var_1158.__lix_func__ = true;return _uniq_var_1158;})()(["!(", cond0, ")"], "");
_uniq_var_592;
return _uniq_var_592;
};_uniq_var_1159.__lix_func__ = true;return _uniq_var_1159;})();
flattenNotArgCondition;
flattenNotArgCondition;
var flattenAndArgCondition = (function () {var _uniq_var_1163 = function (args, varName, def) {var _uniq_var_593 = flattenCondition(args[2], varName, def);
_uniq_var_593;
var cond0 = _uniq_var_593;
cond0;
cond0;
var _uniq_var_594 = flattenCondition(args[3], varName, def);
_uniq_var_594;
var cond1 = _uniq_var_594;
cond1;
cond1;
var _uniq_var_595 = (function () {var _uniq_var_1162 = function (_uniq_var_1160, _uniq_var_1161) {
if (typeof _uniq_var_1160.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1160.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1160.join.apply(_uniq_var_1160, arguments);
} else if (_uniq_var_1160.join !== undefined) {
if (_uniq_var_1161 === undefined) {
return _uniq_var_1160.join;
}
_uniq_var_1160.join = _uniq_var_1161;
}return _uniq_var_1160;
};_uniq_var_1162.__lix_func__ = true;return _uniq_var_1162;})()(["(", cond0, ") && (", cond1, ")"], "");
_uniq_var_595;
return _uniq_var_595;
};_uniq_var_1163.__lix_func__ = true;return _uniq_var_1163;})();
flattenAndArgCondition;
flattenAndArgCondition;
var flattenOrArgCondition = (function () {var _uniq_var_1167 = function (args, varName, def) {var _uniq_var_596 = flattenCondition(args[2], varName, def);
_uniq_var_596;
var cond0 = _uniq_var_596;
cond0;
cond0;
var _uniq_var_597 = flattenCondition(args[3], varName, def);
_uniq_var_597;
var cond1 = _uniq_var_597;
cond1;
cond1;
var _uniq_var_598 = (function () {var _uniq_var_1166 = function (_uniq_var_1164, _uniq_var_1165) {
if (typeof _uniq_var_1164.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1164.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1164.join.apply(_uniq_var_1164, arguments);
} else if (_uniq_var_1164.join !== undefined) {
if (_uniq_var_1165 === undefined) {
return _uniq_var_1164.join;
}
_uniq_var_1164.join = _uniq_var_1165;
}return _uniq_var_1164;
};_uniq_var_1166.__lix_func__ = true;return _uniq_var_1166;})()(["(", cond0, ") || (", cond1, ")"], "");
_uniq_var_598;
return _uniq_var_598;
};_uniq_var_1167.__lix_func__ = true;return _uniq_var_1167;})();
flattenOrArgCondition;
flattenOrArgCondition;
var flattenProtoCondition = (function () {var _uniq_var_1171 = function (args, varName, def) {var _uniq_var_599 = transformVarName(args[0]);
_uniq_var_599;
var _uniq_var_600 = (function () {var _uniq_var_1170 = function (_uniq_var_1168, _uniq_var_1169) {
if (typeof _uniq_var_1168.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1168.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1168.join.apply(_uniq_var_1168, arguments);
} else if (_uniq_var_1168.join !== undefined) {
if (_uniq_var_1169 === undefined) {
return _uniq_var_1168.join;
}
_uniq_var_1168.join = _uniq_var_1169;
}return _uniq_var_1168;
};_uniq_var_1170.__lix_func__ = true;return _uniq_var_1170;})()(["Object.getPrototypeOf(", varName, ") === ", _uniq_var_599], "");
_uniq_var_600;
return _uniq_var_600;
};_uniq_var_1171.__lix_func__ = true;return _uniq_var_1171;})();
flattenProtoCondition;
flattenProtoCondition;
var flattenPtnCondition = (function () {var _uniq_var_1175 = function (args, varName, def) {var _uniq_var_601 = transformVarName(args[2]);
_uniq_var_601;
var _uniq_var_602 = (function () {var _uniq_var_1174 = function (_uniq_var_1172, _uniq_var_1173) {
if (typeof _uniq_var_1172.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1172.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1172.join.apply(_uniq_var_1172, arguments);
} else if (_uniq_var_1172.join !== undefined) {
if (_uniq_var_1173 === undefined) {
return _uniq_var_1172.join;
}
_uniq_var_1172.join = _uniq_var_1173;
}return _uniq_var_1172;
};_uniq_var_1174.__lix_func__ = true;return _uniq_var_1174;})()([_uniq_var_601, "(", varName, ")"], "");
_uniq_var_602;
return _uniq_var_602;
};_uniq_var_1175.__lix_func__ = true;return _uniq_var_1175;})();
flattenPtnCondition;
flattenPtnCondition;
var flattenTypeCondition = (function () {var _uniq_var_1191 = function (args, varName, def) {var ret = null;
ret;
ret;
var _uniq_var_603 = true;
_uniq_var_603;
var _uniq_var_604 = null;
_uniq_var_604;
var _uniq_var_606 = __eq__(args[2], 'Number');
_uniq_var_606;
if ((_uniq_var_603 && _uniq_var_606)) {
(_uniq_var_603 = false);
var _uniq_var_605 = (function () {var _uniq_var_1178 = function (_uniq_var_1176, _uniq_var_1177) {
if (typeof _uniq_var_1176.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1176.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1176.join.apply(_uniq_var_1176, arguments);
} else if (_uniq_var_1176.join !== undefined) {
if (_uniq_var_1177 === undefined) {
return _uniq_var_1176.join;
}
_uniq_var_1176.join = _uniq_var_1177;
}return _uniq_var_1176;
};_uniq_var_1178.__lix_func__ = true;return _uniq_var_1178;})()(["typeof ", varName, " == 'number'"], "");
_uniq_var_605;
(_uniq_var_604 = (ret = _uniq_var_605));

};
var _uniq_var_608 = __eq__(args[2], 'String');
_uniq_var_608;
if ((_uniq_var_603 && _uniq_var_608)) {
(_uniq_var_603 = false);
var _uniq_var_607 = (function () {var _uniq_var_1181 = function (_uniq_var_1179, _uniq_var_1180) {
if (typeof _uniq_var_1179.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1179.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1179.join.apply(_uniq_var_1179, arguments);
} else if (_uniq_var_1179.join !== undefined) {
if (_uniq_var_1180 === undefined) {
return _uniq_var_1179.join;
}
_uniq_var_1179.join = _uniq_var_1180;
}return _uniq_var_1179;
};_uniq_var_1181.__lix_func__ = true;return _uniq_var_1181;})()(["typeof ", varName, " == 'string'"], "");
_uniq_var_607;
(_uniq_var_604 = (ret = _uniq_var_607));

};
var _uniq_var_610 = __eq__(args[2], 'Function');
_uniq_var_610;
if ((_uniq_var_603 && _uniq_var_610)) {
(_uniq_var_603 = false);
var _uniq_var_609 = (function () {var _uniq_var_1184 = function (_uniq_var_1182, _uniq_var_1183) {
if (typeof _uniq_var_1182.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1182.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1182.join.apply(_uniq_var_1182, arguments);
} else if (_uniq_var_1182.join !== undefined) {
if (_uniq_var_1183 === undefined) {
return _uniq_var_1182.join;
}
_uniq_var_1182.join = _uniq_var_1183;
}return _uniq_var_1182;
};_uniq_var_1184.__lix_func__ = true;return _uniq_var_1184;})()(["typeof ", varName, " == 'function'"], "");
_uniq_var_609;
(_uniq_var_604 = (ret = _uniq_var_609));

};
var _uniq_var_612 = __eq__(args[2], 'Boolean');
_uniq_var_612;
if ((_uniq_var_603 && _uniq_var_612)) {
(_uniq_var_603 = false);
var _uniq_var_611 = (function () {var _uniq_var_1187 = function (_uniq_var_1185, _uniq_var_1186) {
if (typeof _uniq_var_1185.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1185.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1185.join.apply(_uniq_var_1185, arguments);
} else if (_uniq_var_1185.join !== undefined) {
if (_uniq_var_1186 === undefined) {
return _uniq_var_1185.join;
}
_uniq_var_1185.join = _uniq_var_1186;
}return _uniq_var_1185;
};_uniq_var_1187.__lix_func__ = true;return _uniq_var_1187;})()(["typeof ", varName, " == 'boolean'"], "");
_uniq_var_611;
(_uniq_var_604 = (ret = _uniq_var_611));

};
if (_uniq_var_603) {
var _uniq_var_613 = transformVarName(args[2]);
_uniq_var_613;
var _uniq_var_614 = (function () {var _uniq_var_1190 = function (_uniq_var_1188, _uniq_var_1189) {
if (typeof _uniq_var_1188.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1188.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1188.join.apply(_uniq_var_1188, arguments);
} else if (_uniq_var_1188.join !== undefined) {
if (_uniq_var_1189 === undefined) {
return _uniq_var_1188.join;
}
_uniq_var_1188.join = _uniq_var_1189;
}return _uniq_var_1188;
};_uniq_var_1190.__lix_func__ = true;return _uniq_var_1190;})()([varName, " instanceof ", _uniq_var_613], "");
_uniq_var_614;
(_uniq_var_604 = _uniq_var_614);

};
return _uniq_var_604;
};_uniq_var_1191.__lix_func__ = true;return _uniq_var_1191;})();
flattenTypeCondition;
flattenTypeCondition;
var flattenVACondArgCondition = (function () {var _uniq_var_1192 = function (args, varName, def) {;
};_uniq_var_1192.__lix_func__ = true;return _uniq_var_1192;})();
flattenVACondArgCondition;
flattenVACondArgCondition;
var flattenConditionOp = {
"{any_type_arg}": flattenAnyTypeCondition,
"{ptn_arg}": flattenPtnCondition,
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
"{proto_arg}": flattenProtoCondition,
"{index_arg}": flattenIndexCondition,
"{field_arg}": flattenFieldCondition
};
flattenConditionOp;
flattenConditionOp;
var flattenDestructorOp = {
"{atomic}": flattenAnyTypeDestructor,
"{any_type_arg}": flattenAnyTypeDestructor,
"{ptn_arg}": flattenAnyTypeDestructor,
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
"{proto_arg}": flattenAnyTypeDestructor,
"{index_arg}": flattenIndexDestructor,
"{field_arg}": flattenFieldDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_1193 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_615 = true;
_uniq_var_615;
var _uniq_var_616 = null;
_uniq_var_616;
if ((_uniq_var_615 && flattenDestructorOp[hint])) {
(_uniq_var_615 = false);
(_uniq_var_616 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_616;
return ret;
};_uniq_var_1193.__lix_func__ = true;return _uniq_var_1193;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_1194 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_617 = true;
_uniq_var_617;
var _uniq_var_618 = null;
_uniq_var_618;
if ((_uniq_var_617 && flattenConditionOp[hint])) {
(_uniq_var_617 = false);
(_uniq_var_618 = (ret = flattenConditionOp[hint]));

};
_uniq_var_618;
return ret;
};_uniq_var_1194.__lix_func__ = true;return _uniq_var_1194;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_1195 = function (args, varName) {var _uniq_var_619 = getFlattenDestructorOp(args[1]);
_uniq_var_619;
var _uniq_var_620 = call(_uniq_var_619, args, varName);
_uniq_var_620;
return _uniq_var_620;
};_uniq_var_1195.__lix_func__ = true;return _uniq_var_1195;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_1196 = function (args, varName, def) {var _uniq_var_621 = getFlattenConditionOp(args[1]);
_uniq_var_621;
var _uniq_var_622 = call(_uniq_var_621, args, varName, def);
_uniq_var_622;
return _uniq_var_622;
};_uniq_var_1196.__lix_func__ = true;return _uniq_var_1196;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_1197 = function (args, def) {var _uniq_var_623 = flattenCondition(args, "arguments", def);
_uniq_var_623;
return _uniq_var_623;
};_uniq_var_1197.__lix_func__ = true;return _uniq_var_1197;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_1198 = function (args) {var _uniq_var_624 = flattenDestructor(args, "arguments");
_uniq_var_624;
return _uniq_var_624;
};_uniq_var_1198.__lix_func__ = true;return _uniq_var_1198;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_1206 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_630 = foreach(args[2], (function () {var _uniq_var_1205 = function (item) {var _uniq_var_625 = true;
_uniq_var_625;
var _uniq_var_626 = null;
_uniq_var_626;
var _uniq_var_628 = __eq__(item[1], '{atomic}');
_uniq_var_628;
if ((_uniq_var_625 && _uniq_var_628)) {
(_uniq_var_625 = false);
var _uniq_var_627 = (function () {var _uniq_var_1201 = function (_uniq_var_1199, _uniq_var_1200) {
if (typeof _uniq_var_1199.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1199.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1199.push.apply(_uniq_var_1199, arguments);
} else if (_uniq_var_1199.push !== undefined) {
if (_uniq_var_1200 === undefined) {
return _uniq_var_1199.push;
}
_uniq_var_1199.push = _uniq_var_1200;
}return _uniq_var_1199;
};_uniq_var_1201.__lix_func__ = true;return _uniq_var_1201;})()(ret, item);
_uniq_var_627;
(_uniq_var_626 = _uniq_var_627);

};
if (_uniq_var_625) {
var _uniq_var_629 = (function () {var _uniq_var_1204 = function (_uniq_var_1202, _uniq_var_1203) {
if (typeof _uniq_var_1202.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1202.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1202.push.apply(_uniq_var_1202, arguments);
} else if (_uniq_var_1202.push !== undefined) {
if (_uniq_var_1203 === undefined) {
return _uniq_var_1202.push;
}
_uniq_var_1202.push = _uniq_var_1203;
}return _uniq_var_1202;
};_uniq_var_1204.__lix_func__ = true;return _uniq_var_1204;})()(ret, item[0]);
_uniq_var_629;
(_uniq_var_626 = _uniq_var_629);

};
return _uniq_var_626;
};_uniq_var_1205.__lix_func__ = true;return _uniq_var_1205;})());
_uniq_var_630;
_uniq_var_630;
return ret;
};_uniq_var_1206.__lix_func__ = true;return _uniq_var_1206;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenLambda = (function () {var _uniq_var_1207 = function (expr, define) {var _uniq_var_631 = flattenArgumentsDestructor(expr[0]);
_uniq_var_631;
var destructor = _uniq_var_631;
destructor;
destructor;
var _uniq_var_632 = getFuncArgsNameList(expr[0]);
_uniq_var_632;
var funcArgsNameList = _uniq_var_632;
funcArgsNameList;
funcArgsNameList;
(expr[0] = funcArgsNameList);
(expr[1] = "{func}");
var _uniq_var_633 = flatten(expr[2], define);
_uniq_var_633;
(expr[2] = _uniq_var_633);
(expr[3] = destructor);
return expr;
};_uniq_var_1207.__lix_func__ = true;return _uniq_var_1207;})();
flattenLambda;
flattenLambda;
var flattenPtn = (function () {var _uniq_var_1208 = function (expr, define) {return expr;
};_uniq_var_1208.__lix_func__ = true;return _uniq_var_1208;})();
flattenPtn;
flattenPtn;
var flattenFn = (function () {var _uniq_var_1209 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_634 = flattenArgumentsDestructor(expr[2]);
_uniq_var_634;
var destructor = _uniq_var_634;
destructor;
destructor;
var _uniq_var_635 = getFuncArgsNameList(expr[2]);
_uniq_var_635;
var funcArgsNameList = _uniq_var_635;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_636 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_636;
var func = _uniq_var_636;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_1209.__lix_func__ = true;return _uniq_var_1209;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_1210 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_637 = flatten(expr, define);
_uniq_var_637;
return _uniq_var_637;
};_uniq_var_1210.__lix_func__ = true;return _uniq_var_1210;})();
flattenAsterisk;
flattenAsterisk;
var flattenMatch = (function () {var _uniq_var_1211 = function (expr, define) {var _uniq_var_638 = flatten(expr[0], define);
_uniq_var_638;
return _uniq_var_638;
};_uniq_var_1211.__lix_func__ = true;return _uniq_var_1211;})();
flattenMatch;
flattenMatch;
var flattenMatchCaseList = (function () {var _uniq_var_1213 = function (expr, define) {var _uniq_var_641 = foreach(expr[2], (function () {var _uniq_var_1212 = function (item) {var _uniq_var_639 = flatten(item, define);
_uniq_var_639;
var _uniq_var_640 = define(_uniq_var_639);
_uniq_var_640;
return _uniq_var_640;
};_uniq_var_1212.__lix_func__ = true;return _uniq_var_1212;})());
_uniq_var_641;
_uniq_var_641;
return expr[0];
};_uniq_var_1213.__lix_func__ = true;return _uniq_var_1213;})();
flattenMatchCaseList;
flattenMatchCaseList;
var identity = (function () {var _uniq_var_1214 = function (x) {return x;
};_uniq_var_1214.__lix_func__ = true;return _uniq_var_1214;})();
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
'{lambda}': flattenLambda,
'{fn}': flattenFn,
'ptn': flattenPtn,
'{ampersand}': flattenAmpersand,
'{ampersand_bracket}': flattenAmpersandBracket,
'{ampersand_object}': flattenAmpersandObject,
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
var flattenOp = (function () {var _uniq_var_1215 = function (hint) {var _uniq_var_642 = true;
_uniq_var_642;
var _uniq_var_643 = null;
_uniq_var_643;
if ((_uniq_var_642 && flattenOpTable[hint])) {
(_uniq_var_642 = false);
(_uniq_var_643 = flattenOpTable[hint]);

};
if (_uniq_var_642) {
(_uniq_var_643 = flattenExpr);

};
return _uniq_var_643;
};_uniq_var_1215.__lix_func__ = true;return _uniq_var_1215;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_1216 = function (expr, define, ctx) {var _uniq_var_644 = flattenOp(expr[1]);
_uniq_var_644;
var _uniq_var_645 = _uniq_var_644(expr, define, ctx);
_uniq_var_645;
return _uniq_var_645;
};_uniq_var_1216.__lix_func__ = true;return _uniq_var_1216;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_1217 = function (i) {return i;
};_uniq_var_1217.__lix_func__ = true;return _uniq_var_1217;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_1218 = function (i) {;
};_uniq_var_1218.__lix_func__ = true;return _uniq_var_1218;})(),
appendExpr: (function () {var _uniq_var_1219 = function (i) {;
};_uniq_var_1219.__lix_func__ = true;return _uniq_var_1219;})()
};
def0;
def0;
var _uniq_var_646 = join(['s[', STEP, ']']);
_uniq_var_646;
var _uniq_var_647 = join(['s[', RET, ']']);
_uniq_var_647;
var seqFuncParamsName = {
step: _uniq_var_646,
ret: _uniq_var_647
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_1226 = function (expr) {var _uniq_var_648 = map(env0, (function () {var _uniq_var_1220 = function (i) {return i;
};_uniq_var_1220.__lix_func__ = true;return _uniq_var_1220;})());
_uniq_var_648;
var _uniq_var_649 = (function () {var _uniq_var_1223 = function (_uniq_var_1221, _uniq_var_1222) {
if (typeof _uniq_var_1221.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1221.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1221.join.apply(_uniq_var_1221, arguments);
} else if (_uniq_var_1221.join !== undefined) {
if (_uniq_var_1222 === undefined) {
return _uniq_var_1221.join;
}
_uniq_var_1221.join = _uniq_var_1222;
}return _uniq_var_1221;
};_uniq_var_1223.__lix_func__ = true;return _uniq_var_1223;})()(_uniq_var_648, "\n");
_uniq_var_649;
var libs = _uniq_var_649;
libs;
libs;
var _uniq_var_650 = flatten(expr, (function () {var _uniq_var_1224 = function (i) {;
};_uniq_var_1224.__lix_func__ = true;return _uniq_var_1224;})(), (function () {var _uniq_var_1225 = function (i) {return i;
};_uniq_var_1225.__lix_func__ = true;return _uniq_var_1225;})());
_uniq_var_650;
var flattenedExpr = _uniq_var_650;
flattenedExpr;
flattenedExpr;
var _uniq_var_651 = call(env_new);
_uniq_var_651;
var _uniq_var_652 = generateStart(flattenedExpr, _uniq_var_651, ctx0, def0);
_uniq_var_652;
var code = _uniq_var_652;
code;
code;
var _uniq_var_653 = join([libs, "\n", code]);
_uniq_var_653;
return _uniq_var_653;
};_uniq_var_1226.__lix_func__ = true;return _uniq_var_1226;})();
compile;
compile;
(exports.compile = compile);
compile;

