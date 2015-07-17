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
(function () {var _uniq_var_652 = function () {return 3;
};_uniq_var_652.__lix_func__ = true;return _uniq_var_652;})();
var join = (function () {var _uniq_var_656 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_655 = function (_uniq_var_653, _uniq_var_654) {
if (typeof _uniq_var_653.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_653.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_653.join.apply(_uniq_var_653, arguments);
} else if (_uniq_var_653.join !== undefined) {
if (_uniq_var_654 === undefined) {
return _uniq_var_653.join;
}
_uniq_var_653.join = _uniq_var_654;
}return _uniq_var_653;
};_uniq_var_655.__lix_func__ = true;return _uniq_var_655;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_656.__lix_func__ = true;return _uniq_var_656;})();
join;
join;
var map = (function () {var _uniq_var_661 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_660 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_659 = function (_uniq_var_657, _uniq_var_658) {
if (typeof _uniq_var_657.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_657.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_657.push.apply(_uniq_var_657, arguments);
} else if (_uniq_var_657.push !== undefined) {
if (_uniq_var_658 === undefined) {
return _uniq_var_657.push;
}
_uniq_var_657.push = _uniq_var_658;
}return _uniq_var_657;
};_uniq_var_659.__lix_func__ = true;return _uniq_var_659;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_660.__lix_func__ = true;return _uniq_var_660;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_663 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_662 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_662.__lix_func__ = true;return _uniq_var_662;})();
};_uniq_var_663.__lix_func__ = true;return _uniq_var_663;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_664 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_669 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_665 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_668 = function (_uniq_var_666, _uniq_var_667) {
if (typeof _uniq_var_666.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_666.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_666.join.apply(_uniq_var_666, arguments);
} else if (_uniq_var_666.join !== undefined) {
if (_uniq_var_667 === undefined) {
return _uniq_var_666.join;
}
_uniq_var_666.join = _uniq_var_667;
}return _uniq_var_666;
};_uniq_var_668.__lix_func__ = true;return _uniq_var_668;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_669.__lix_func__ = true;return _uniq_var_669;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_670 = function (x) {return x;
};_uniq_var_670.__lix_func__ = true;return _uniq_var_670;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_680 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_672 = function (current) {return (function () {var _uniq_var_671 = function (v, loop) {var next = current;
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
};_uniq_var_671.__lix_func__ = true;return _uniq_var_671;})();
};_uniq_var_672.__lix_func__ = true;return _uniq_var_672;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_676 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_27 = (function () {var _uniq_var_675 = function (_uniq_var_673, _uniq_var_674) {
if (typeof _uniq_var_673.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_673.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_673.push.apply(_uniq_var_673, arguments);
} else if (_uniq_var_673.push !== undefined) {
if (_uniq_var_674 === undefined) {
return _uniq_var_673.push;
}
_uniq_var_673.push = _uniq_var_674;
}return _uniq_var_673;
};_uniq_var_675.__lix_func__ = true;return _uniq_var_675;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_676.__lix_func__ = true;return _uniq_var_676;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_679 = function (_uniq_var_677, _uniq_var_678) {
if (typeof _uniq_var_677.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_677.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_677.join.apply(_uniq_var_677, arguments);
} else if (_uniq_var_677.join !== undefined) {
if (_uniq_var_678 === undefined) {
return _uniq_var_677.join;
}
_uniq_var_677.join = _uniq_var_678;
}return _uniq_var_677;
};_uniq_var_679.__lix_func__ = true;return _uniq_var_679;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_680.__lix_func__ = true;return _uniq_var_680;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_681 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_682 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_682.__lix_func__ = true;return _uniq_var_682;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_687 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_683 = function (i) {var _uniq_var_38 = true;
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
};_uniq_var_683.__lix_func__ = true;return _uniq_var_683;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_686 = function (_uniq_var_684, _uniq_var_685) {
if (typeof _uniq_var_684.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_684.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_684.join.apply(_uniq_var_684, arguments);
} else if (_uniq_var_684.join !== undefined) {
if (_uniq_var_685 === undefined) {
return _uniq_var_684.join;
}
_uniq_var_684.join = _uniq_var_685;
}return _uniq_var_684;
};_uniq_var_686.__lix_func__ = true;return _uniq_var_686;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_687.__lix_func__ = true;return _uniq_var_687;})();
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
var generateAtomic = (function () {var _uniq_var_688 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_688.__lix_func__ = true;return _uniq_var_688;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_689 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
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
};_uniq_var_689.__lix_func__ = true;return _uniq_var_689;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_690 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_695 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_691 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_691.__lix_func__ = true;return _uniq_var_691;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_694 = function (_uniq_var_692, _uniq_var_693) {
if (typeof _uniq_var_692.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_692.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_692.join.apply(_uniq_var_692, arguments);
} else if (_uniq_var_692.join !== undefined) {
if (_uniq_var_693 === undefined) {
return _uniq_var_692.join;
}
_uniq_var_692.join = _uniq_var_693;
}return _uniq_var_692;
};_uniq_var_694.__lix_func__ = true;return _uniq_var_694;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_695.__lix_func__ = true;return _uniq_var_695;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_696 = function (name) {var _uniq_var_73 = true;
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
};_uniq_var_696.__lix_func__ = true;return _uniq_var_696;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_697 = function (expr) {var _uniq_var_85 = true;
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
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_698 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
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
};_uniq_var_698.__lix_func__ = true;return _uniq_var_698;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_699 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
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
};_uniq_var_699.__lix_func__ = true;return _uniq_var_699;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_704 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_700 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_700.__lix_func__ = true;return _uniq_var_700;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_703 = function (_uniq_var_701, _uniq_var_702) {
if (typeof _uniq_var_701.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_701.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_701.join.apply(_uniq_var_701, arguments);
} else if (_uniq_var_701.join !== undefined) {
if (_uniq_var_702 === undefined) {
return _uniq_var_701.join;
}
_uniq_var_701.join = _uniq_var_702;
}return _uniq_var_701;
};_uniq_var_703.__lix_func__ = true;return _uniq_var_703;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_704.__lix_func__ = true;return _uniq_var_704;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_705 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
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
};_uniq_var_705.__lix_func__ = true;return _uniq_var_705;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_706 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_706.__lix_func__ = true;return _uniq_var_706;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_707 = function (expr, env, ctx) {return 'break';
};_uniq_var_707.__lix_func__ = true;return _uniq_var_707;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_708 = function (expr, env, ctx, def) {return "";
};_uniq_var_708.__lix_func__ = true;return _uniq_var_708;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_709 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
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
};_uniq_var_709.__lix_func__ = true;return _uniq_var_709;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_710 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_710.__lix_func__ = true;return _uniq_var_710;})();
generateAsterisk;
generateAsterisk;
var generateAmpersandObject = (function () {var _uniq_var_729 = function (expr, env, ctx, def) {var varnames = {

};
varnames;
varnames;
var _uniq_var_133 = foreach(expr[0], (function () {var _uniq_var_711 = function (item, index) {var _uniq_var_126 = getVarName(item);
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
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})());
_uniq_var_133;
_uniq_var_133;
var _uniq_var_135 = map(varnames, (function () {var _uniq_var_715 = function (item, index) {var _uniq_var_134 = (function () {var _uniq_var_714 = function (_uniq_var_712, _uniq_var_713) {
if (typeof _uniq_var_712.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_712.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_712.join.apply(_uniq_var_712, arguments);
} else if (_uniq_var_712.join !== undefined) {
if (_uniq_var_713 === undefined) {
return _uniq_var_712.join;
}
_uniq_var_712.join = _uniq_var_713;
}return _uniq_var_712;
};_uniq_var_714.__lix_func__ = true;return _uniq_var_714;})()([item, " = _x ? _x.", index, " : undefined\n"], "");
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_715.__lix_func__ = true;return _uniq_var_715;})());
_uniq_var_135;
var _uniq_var_136 = (function () {var _uniq_var_718 = function (_uniq_var_716, _uniq_var_717) {
if (typeof _uniq_var_716.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_716.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_716.join.apply(_uniq_var_716, arguments);
} else if (_uniq_var_716.join !== undefined) {
if (_uniq_var_717 === undefined) {
return _uniq_var_716.join;
}
_uniq_var_716.join = _uniq_var_717;
}return _uniq_var_716;
};_uniq_var_718.__lix_func__ = true;return _uniq_var_718;})()(_uniq_var_135, "");
_uniq_var_136;
var _uniq_var_138 = map(varnames, (function () {var _uniq_var_722 = function (item, index) {var _uniq_var_137 = (function () {var _uniq_var_721 = function (_uniq_var_719, _uniq_var_720) {
if (typeof _uniq_var_719.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_719.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_719.join.apply(_uniq_var_719, arguments);
} else if (_uniq_var_719.join !== undefined) {
if (_uniq_var_720 === undefined) {
return _uniq_var_719.join;
}
_uniq_var_719.join = _uniq_var_720;
}return _uniq_var_719;
};_uniq_var_721.__lix_func__ = true;return _uniq_var_721;})()([index, ": ", item], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_722.__lix_func__ = true;return _uniq_var_722;})());
_uniq_var_138;
var _uniq_var_139 = (function () {var _uniq_var_725 = function (_uniq_var_723, _uniq_var_724) {
if (typeof _uniq_var_723.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_723.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_723.join.apply(_uniq_var_723, arguments);
} else if (_uniq_var_723.join !== undefined) {
if (_uniq_var_724 === undefined) {
return _uniq_var_723.join;
}
_uniq_var_723.join = _uniq_var_724;
}return _uniq_var_723;
};_uniq_var_725.__lix_func__ = true;return _uniq_var_725;})()(_uniq_var_138, ", ");
_uniq_var_139;
var _uniq_var_140 = (function () {var _uniq_var_728 = function (_uniq_var_726, _uniq_var_727) {
if (typeof _uniq_var_726.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_726.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_726.join.apply(_uniq_var_726, arguments);
} else if (_uniq_var_726.join !== undefined) {
if (_uniq_var_727 === undefined) {
return _uniq_var_726.join;
}
_uniq_var_726.join = _uniq_var_727;
}return _uniq_var_726;
};_uniq_var_728.__lix_func__ = true;return _uniq_var_728;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", _uniq_var_136, "return _x\n", "}\n", "} else {\n", "return function () {\n", "return {", _uniq_var_139, "}\n", "}\n", "}\n", "})"], "");
_uniq_var_140;
return _uniq_var_140;
};_uniq_var_729.__lix_func__ = true;return _uniq_var_729;})();
generateAmpersandObject;
generateAmpersandObject;
var generateAmpersandBracket = (function () {var _uniq_var_747 = function (expr, env, ctx, def) {var varnames = [];
varnames;
varnames;
var _uniq_var_149 = foreach(expr[0], (function () {var _uniq_var_733 = function (item) {var _uniq_var_141 = getVarName(item);
_uniq_var_141;
var varname = _uniq_var_141;
varname;
varname;
var _uniq_var_142 = (function () {var _uniq_var_732 = function (_uniq_var_730, _uniq_var_731) {
if (typeof _uniq_var_730.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_730.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_730.push.apply(_uniq_var_730, arguments);
} else if (_uniq_var_730.push !== undefined) {
if (_uniq_var_731 === undefined) {
return _uniq_var_730.push;
}
_uniq_var_730.push = _uniq_var_731;
}return _uniq_var_730;
};_uniq_var_732.__lix_func__ = true;return _uniq_var_732;})()(varnames, varname);
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
};_uniq_var_733.__lix_func__ = true;return _uniq_var_733;})());
_uniq_var_149;
_uniq_var_149;
var _uniq_var_151 = map(varnames, (function () {var _uniq_var_737 = function (item, index) {var _uniq_var_150 = (function () {var _uniq_var_736 = function (_uniq_var_734, _uniq_var_735) {
if (typeof _uniq_var_734.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_734.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_734.join.apply(_uniq_var_734, arguments);
} else if (_uniq_var_734.join !== undefined) {
if (_uniq_var_735 === undefined) {
return _uniq_var_734.join;
}
_uniq_var_734.join = _uniq_var_735;
}return _uniq_var_734;
};_uniq_var_736.__lix_func__ = true;return _uniq_var_736;})()([item, " = _x ? _x[", index, "] : undefined\n"], "");
_uniq_var_150;
return _uniq_var_150;
};_uniq_var_737.__lix_func__ = true;return _uniq_var_737;})());
_uniq_var_151;
var _uniq_var_152 = (function () {var _uniq_var_740 = function (_uniq_var_738, _uniq_var_739) {
if (typeof _uniq_var_738.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_738.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_738.join.apply(_uniq_var_738, arguments);
} else if (_uniq_var_738.join !== undefined) {
if (_uniq_var_739 === undefined) {
return _uniq_var_738.join;
}
_uniq_var_738.join = _uniq_var_739;
}return _uniq_var_738;
};_uniq_var_740.__lix_func__ = true;return _uniq_var_740;})()(_uniq_var_151, "");
_uniq_var_152;
var _uniq_var_153 = (function () {var _uniq_var_743 = function (_uniq_var_741, _uniq_var_742) {
if (typeof _uniq_var_741.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_741.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_741.join.apply(_uniq_var_741, arguments);
} else if (_uniq_var_741.join !== undefined) {
if (_uniq_var_742 === undefined) {
return _uniq_var_741.join;
}
_uniq_var_741.join = _uniq_var_742;
}return _uniq_var_741;
};_uniq_var_743.__lix_func__ = true;return _uniq_var_743;})()(varnames, ", ");
_uniq_var_153;
var _uniq_var_154 = (function () {var _uniq_var_746 = function (_uniq_var_744, _uniq_var_745) {
if (typeof _uniq_var_744.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_744.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_744.join.apply(_uniq_var_744, arguments);
} else if (_uniq_var_744.join !== undefined) {
if (_uniq_var_745 === undefined) {
return _uniq_var_744.join;
}
_uniq_var_744.join = _uniq_var_745;
}return _uniq_var_744;
};_uniq_var_746.__lix_func__ = true;return _uniq_var_746;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", _uniq_var_152, "return _x\n", "}\n", "} else {\n", "return function () {\n", "return [", _uniq_var_153, "]\n", "}\n", "}\n", "})"], "");
_uniq_var_154;
return _uniq_var_154;
};_uniq_var_747.__lix_func__ = true;return _uniq_var_747;})();
generateAmpersandBracket;
generateAmpersandBracket;
var generateAmpersand = (function () {var _uniq_var_751 = function (expr, env, ctx, def) {var _uniq_var_155 = true;
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
var _uniq_var_166 = (function () {var _uniq_var_750 = function (_uniq_var_748, _uniq_var_749) {
if (typeof _uniq_var_748.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_748.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_748.join.apply(_uniq_var_748, arguments);
} else if (_uniq_var_748.join !== undefined) {
if (_uniq_var_749 === undefined) {
return _uniq_var_748.join;
}
_uniq_var_748.join = _uniq_var_749;
}return _uniq_var_748;
};_uniq_var_750.__lix_func__ = true;return _uniq_var_750;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_166;
return _uniq_var_166;
};_uniq_var_751.__lix_func__ = true;return _uniq_var_751;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_752 = function (expr, env, ctx, def) {var _uniq_var_167 = getVarName(expr[0]);
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
var _uniq_var_171 = __eq__(env[varname], undefined);
_uniq_var_171;
var _uniq_var_172 = _uniq_var_171;
_uniq_var_172;
if (_uniq_var_172) {
var _uniq_var_173 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_173;
(_uniq_var_172 = _uniq_var_173);

};
if ((_uniq_var_168 && _uniq_var_172)) {
(_uniq_var_168 = false);
var _uniq_var_170 = generateDef(expr, env, ctx, def);
_uniq_var_170;
(_uniq_var_169 = (ret = _uniq_var_170));

};
if (_uniq_var_168) {
var _uniq_var_174 = generate(expr[0], env, ctx0, def);
_uniq_var_174;
var varname = _uniq_var_174;
varname;
varname;
var _uniq_var_175 = generate(expr[2], env, ctx, def);
_uniq_var_175;
var value = _uniq_var_175;
value;
value;
var _uniq_var_176 = true;
_uniq_var_176;
var _uniq_var_177 = null;
_uniq_var_177;
var _uniq_var_179 = __ne__(value, undefined);
_uniq_var_179;
if ((_uniq_var_176 && _uniq_var_179)) {
(_uniq_var_176 = false);
var _uniq_var_178 = join([varname, " = ", value]);
_uniq_var_178;
(_uniq_var_177 = (ret = _uniq_var_178));

};
if (_uniq_var_176) {
(_uniq_var_177 = (ret = undefined));

};
(_uniq_var_169 = _uniq_var_177);

};
_uniq_var_169;
return ret;
};_uniq_var_752.__lix_func__ = true;return _uniq_var_752;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_759 = function (expr, env, ctx, def) {var _uniq_var_180 = true;
_uniq_var_180;
var _uniq_var_181 = null;
_uniq_var_181;
var _uniq_var_182 = __eq__(expr[3], undefined);
_uniq_var_182;
if ((_uniq_var_180 && _uniq_var_182)) {
(_uniq_var_180 = false);
(_uniq_var_181 = (expr[3] = []));

};
_uniq_var_181;
var _uniq_var_183 = env_new(env);
_uniq_var_183;
var funcEnv = _uniq_var_183;
funcEnv;
funcEnv;
var _uniq_var_184 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_184;
var args = _uniq_var_184;
args;
args;
var _uniq_var_185 = call(getUniqVarName);
_uniq_var_185;
var tmpVar = _uniq_var_185;
tmpVar;
tmpVar;
var _uniq_var_186 = call(GenerateDefNew);
_uniq_var_186;
var def = _uniq_var_186;
def;
def;
var _uniq_var_187 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_187;
var body = _uniq_var_187;
body;
body;
var _uniq_var_188 = transformVarName('arguments');
_uniq_var_188;
var _uniq_var_189 = (function () {var _uniq_var_755 = function (_uniq_var_753, _uniq_var_754) {
if (typeof _uniq_var_753.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_753.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_753.join.apply(_uniq_var_753, arguments);
} else if (_uniq_var_753.join !== undefined) {
if (_uniq_var_754 === undefined) {
return _uniq_var_753.join;
}
_uniq_var_753.join = _uniq_var_754;
}return _uniq_var_753;
};_uniq_var_755.__lix_func__ = true;return _uniq_var_755;})()(expr[3], ";\n");
_uniq_var_189;
var _uniq_var_190 = call(def.defineVar);
_uniq_var_190;
var _uniq_var_191 = call(def.appendExpr);
_uniq_var_191;
var _uniq_var_192 = call(def.definedFns);
_uniq_var_192;
var _uniq_var_193 = (function () {var _uniq_var_758 = function (_uniq_var_756, _uniq_var_757) {
if (typeof _uniq_var_756.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_756.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_756.join.apply(_uniq_var_756, arguments);
} else if (_uniq_var_756.join !== undefined) {
if (_uniq_var_757 === undefined) {
return _uniq_var_756.join;
}
_uniq_var_756.join = _uniq_var_757;
}return _uniq_var_756;
};_uniq_var_758.__lix_func__ = true;return _uniq_var_758;})()(['(function (', args, ') {\n', 'var ', _uniq_var_188, ' = arguments;\n', _uniq_var_189, ";\n", _uniq_var_190, ";\n", _uniq_var_191, _uniq_var_192, 'return ', body, ";\n", '})'], '');
_uniq_var_193;
return _uniq_var_193;
};_uniq_var_759.__lix_func__ = true;return _uniq_var_759;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_766 = function (expr0, env, ctx, prevDef) {var _uniq_var_194 = call(getUniqVarName);
_uniq_var_194;
var funcName = _uniq_var_194;
funcName;
funcName;
var expr = expr0[2];
expr;
expr;
var _uniq_var_195 = true;
_uniq_var_195;
var _uniq_var_196 = null;
_uniq_var_196;
var _uniq_var_197 = __eq__(expr[3], undefined);
_uniq_var_197;
if ((_uniq_var_195 && _uniq_var_197)) {
(_uniq_var_195 = false);
(_uniq_var_196 = (expr[3] = []));

};
_uniq_var_196;
var _uniq_var_198 = env_new(env);
_uniq_var_198;
var funcEnv = _uniq_var_198;
funcEnv;
funcEnv;
var _uniq_var_199 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_199;
var args = _uniq_var_199;
args;
args;
var _uniq_var_200 = call(getUniqVarName);
_uniq_var_200;
var tmpVar = _uniq_var_200;
tmpVar;
tmpVar;
var _uniq_var_201 = call(GenerateDefNew);
_uniq_var_201;
var def = _uniq_var_201;
def;
def;
var _uniq_var_202 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_202;
var body = _uniq_var_202;
body;
body;
var _uniq_var_203 = transformVarName('arguments');
_uniq_var_203;
var _uniq_var_204 = (function () {var _uniq_var_762 = function (_uniq_var_760, _uniq_var_761) {
if (typeof _uniq_var_760.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_760.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_760.join.apply(_uniq_var_760, arguments);
} else if (_uniq_var_760.join !== undefined) {
if (_uniq_var_761 === undefined) {
return _uniq_var_760.join;
}
_uniq_var_760.join = _uniq_var_761;
}return _uniq_var_760;
};_uniq_var_762.__lix_func__ = true;return _uniq_var_762;})()(expr[3], ";\n");
_uniq_var_204;
var _uniq_var_205 = call(def.defineVar);
_uniq_var_205;
var _uniq_var_206 = call(def.appendExpr);
_uniq_var_206;
var _uniq_var_207 = call(def.definedFns);
_uniq_var_207;
var _uniq_var_208 = (function () {var _uniq_var_765 = function (_uniq_var_763, _uniq_var_764) {
if (typeof _uniq_var_763.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_763.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_763.join.apply(_uniq_var_763, arguments);
} else if (_uniq_var_763.join !== undefined) {
if (_uniq_var_764 === undefined) {
return _uniq_var_763.join;
}
_uniq_var_763.join = _uniq_var_764;
}return _uniq_var_763;
};_uniq_var_765.__lix_func__ = true;return _uniq_var_765;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_203, ' = arguments;\n', _uniq_var_204, ";\n", _uniq_var_205, ";\n", _uniq_var_206, ";\n", _uniq_var_207, ";\n", 'return ', body, ";\n", '}'], '');
_uniq_var_208;
var _uniq_var_209 = prevDef.appendExpr(_uniq_var_208);
_uniq_var_209;
_uniq_var_209;
var _uniq_var_210 = getAtomicExprVarName(expr0[0]);
_uniq_var_210;
var _uniq_var_211 = prevDef.defineFn(_uniq_var_210, funcName, expr0[3], expr[0].length);
_uniq_var_211;
_uniq_var_211;
return undefined;
};_uniq_var_766.__lix_func__ = true;return _uniq_var_766;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_768 = function (expr, env, ctx, def) {var _uniq_var_212 = generate(expr[1], env, ctx0, def);
_uniq_var_212;
var func = _uniq_var_212;
func;
func;
var _uniq_var_213 = generate(expr[0], env, ctx0, def);
_uniq_var_213;
var args = _uniq_var_213;
args;
args;
var _uniq_var_219 = foreach(expr, (function () {var _uniq_var_767 = function (item, index) {var _uniq_var_214 = true;
_uniq_var_214;
var _uniq_var_215 = null;
_uniq_var_215;
var _uniq_var_218 = __gt__(index, 1);
_uniq_var_218;
if ((_uniq_var_214 && _uniq_var_218)) {
(_uniq_var_214 = false);
var _uniq_var_216 = generate(item, env, ctx0, def);
_uniq_var_216;
var _uniq_var_217 = join([args, ', ', _uniq_var_216]);
_uniq_var_217;
(_uniq_var_215 = (args = _uniq_var_217));

};
return _uniq_var_215;
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})());
_uniq_var_219;
_uniq_var_219;
var _uniq_var_220 = join([func, '(', args, ')']);
_uniq_var_220;
var _uniq_var_221 = ctx(_uniq_var_220);
_uniq_var_221;
return _uniq_var_221;
};_uniq_var_768.__lix_func__ = true;return _uniq_var_768;})();
generateExpr;
generateExpr;
var fnArgsTempVarDefine = (function () {var _uniq_var_784 = function () {var vars = [];
vars;
vars;
return {
newVar: (function () {var _uniq_var_775 = function () {var _uniq_var_222 = call(getUniqVarName);
_uniq_var_222;
var _uniq_var_223 = (function () {var _uniq_var_771 = function (_uniq_var_769, _uniq_var_770) {
if (typeof _uniq_var_769.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_769.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_769.join.apply(_uniq_var_769, arguments);
} else if (_uniq_var_769.join !== undefined) {
if (_uniq_var_770 === undefined) {
return _uniq_var_769.join;
}
_uniq_var_769.join = _uniq_var_770;
}return _uniq_var_769;
};_uniq_var_771.__lix_func__ = true;return _uniq_var_771;})()(['_at', _uniq_var_222], "");
_uniq_var_223;
var ret = _uniq_var_223;
ret;
ret;
var _uniq_var_224 = (function () {var _uniq_var_774 = function (_uniq_var_772, _uniq_var_773) {
if (typeof _uniq_var_772.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_772.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_772.push.apply(_uniq_var_772, arguments);
} else if (_uniq_var_772.push !== undefined) {
if (_uniq_var_773 === undefined) {
return _uniq_var_772.push;
}
_uniq_var_772.push = _uniq_var_773;
}return _uniq_var_772;
};_uniq_var_774.__lix_func__ = true;return _uniq_var_774;})()(vars, ret);
_uniq_var_224;
_uniq_var_224;
return ret;
};_uniq_var_775.__lix_func__ = true;return _uniq_var_775;})(),
vars: (function () {var _uniq_var_776 = function () {return vars;
};_uniq_var_776.__lix_func__ = true;return _uniq_var_776;})(),
varToStr: (function () {var _uniq_var_783 = function () {var ret = null;
ret;
ret;
var _uniq_var_225 = true;
_uniq_var_225;
var _uniq_var_226 = null;
_uniq_var_226;
if ((_uniq_var_225 && vars.length)) {
(_uniq_var_225 = false);
var _uniq_var_227 = (function () {var _uniq_var_779 = function (_uniq_var_777, _uniq_var_778) {
if (typeof _uniq_var_777.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_777.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_777.join.apply(_uniq_var_777, arguments);
} else if (_uniq_var_777.join !== undefined) {
if (_uniq_var_778 === undefined) {
return _uniq_var_777.join;
}
_uniq_var_777.join = _uniq_var_778;
}return _uniq_var_777;
};_uniq_var_779.__lix_func__ = true;return _uniq_var_779;})()(vars, ", ");
_uniq_var_227;
var _uniq_var_228 = (function () {var _uniq_var_782 = function (_uniq_var_780, _uniq_var_781) {
if (typeof _uniq_var_780.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_780.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_780.join.apply(_uniq_var_780, arguments);
} else if (_uniq_var_780.join !== undefined) {
if (_uniq_var_781 === undefined) {
return _uniq_var_780.join;
}
_uniq_var_780.join = _uniq_var_781;
}return _uniq_var_780;
};_uniq_var_782.__lix_func__ = true;return _uniq_var_782;})()(['var ', _uniq_var_227, ";\n"], "");
_uniq_var_228;
(_uniq_var_226 = (ret = _uniq_var_228));

};
_uniq_var_226;
return ret;
};_uniq_var_783.__lix_func__ = true;return _uniq_var_783;})()
};
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})();
fnArgsTempVarDefine;
fnArgsTempVarDefine;
var generatePtn = (function () {var _uniq_var_788 = function (expr, env, ctx, def) {var _uniq_var_229 = call(fnArgsTempVarDefine);
_uniq_var_229;
var argDef = _uniq_var_229;
argDef;
argDef;
var _uniq_var_230 = flattenCondition(expr[2], "x", argDef);
_uniq_var_230;
var condition = _uniq_var_230;
condition;
condition;
var _uniq_var_231 = generateAtomic(expr[0]);
_uniq_var_231;
var name = _uniq_var_231;
name;
name;
var _uniq_var_232 = (function () {var _uniq_var_787 = function (_uniq_var_785, _uniq_var_786) {
if (typeof _uniq_var_785.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_785.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_785.join.apply(_uniq_var_785, arguments);
} else if (_uniq_var_785.join !== undefined) {
if (_uniq_var_786 === undefined) {
return _uniq_var_785.join;
}
_uniq_var_785.join = _uniq_var_786;
}return _uniq_var_785;
};_uniq_var_787.__lix_func__ = true;return _uniq_var_787;})()(["function ", name, "(x) {\n", "return ", condition, ";\n", "};\n"], "");
_uniq_var_232;
var _uniq_var_233 = def.appendExpr(_uniq_var_232);
_uniq_var_233;
_uniq_var_233;
return name;
};_uniq_var_788.__lix_func__ = true;return _uniq_var_788;})();
generatePtn;
generatePtn;
var predefineFn = (function () {var _uniq_var_815 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_795 = function (n) {var ret = [];
ret;
ret;
var i = 0;
i;
i;
var _uniq_var_234 = __lt__(i, n);
_uniq_var_234;
while (_uniq_var_234) {
var _uniq_var_235 = __add__(prefix, i);
_uniq_var_235;
var _uniq_var_236 = (function () {var _uniq_var_791 = function (_uniq_var_789, _uniq_var_790) {
if (typeof _uniq_var_789.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_789.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_789.push.apply(_uniq_var_789, arguments);
} else if (_uniq_var_789.push !== undefined) {
if (_uniq_var_790 === undefined) {
return _uniq_var_789.push;
}
_uniq_var_789.push = _uniq_var_790;
}return _uniq_var_789;
};_uniq_var_791.__lix_func__ = true;return _uniq_var_791;})()(ret, _uniq_var_235);
_uniq_var_236;
_uniq_var_236;
var _uniq_var_237 = __add__(i, 1);
_uniq_var_237;
(i = _uniq_var_237);
var _uniq_var_234 = __lt__(i, n);
_uniq_var_234;
}
null;
var _uniq_var_238 = (function () {var _uniq_var_794 = function (_uniq_var_792, _uniq_var_793) {
if (typeof _uniq_var_792.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_792.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_792.join.apply(_uniq_var_792, arguments);
} else if (_uniq_var_792.join !== undefined) {
if (_uniq_var_793 === undefined) {
return _uniq_var_792.join;
}
_uniq_var_792.join = _uniq_var_793;
}return _uniq_var_792;
};_uniq_var_794.__lix_func__ = true;return _uniq_var_794;})()(ret, ", ");
_uniq_var_238;
return _uniq_var_238;
};_uniq_var_795.__lix_func__ = true;return _uniq_var_795;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_255 = foreach(candidates, (function () {var _uniq_var_808 = function (item) {var _uniq_var_239 = true;
_uniq_var_239;
var _uniq_var_240 = null;
_uniq_var_240;
var _uniq_var_241 = __gt__(item.narg, max_narg);
_uniq_var_241;
if ((_uniq_var_239 && _uniq_var_241)) {
(_uniq_var_239 = false);
(_uniq_var_240 = (max_narg = item.narg));

};
_uniq_var_240;
var _uniq_var_242 = call(fnArgsTempVarDefine);
_uniq_var_242;
var def = _uniq_var_242;
def;
def;
var _uniq_var_243 = flattenArgumentsCondition(item.condition, def);
_uniq_var_243;
var condition = _uniq_var_243;
condition;
condition;
var _uniq_var_244 = call(getArgListString, item.narg);
_uniq_var_244;
var _uniq_var_245 = (function () {var _uniq_var_798 = function (_uniq_var_796, _uniq_var_797) {
if (typeof _uniq_var_796.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_796.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_796.join.apply(_uniq_var_796, arguments);
} else if (_uniq_var_796.join !== undefined) {
if (_uniq_var_797 === undefined) {
return _uniq_var_796.join;
}
_uniq_var_796.join = _uniq_var_797;
}return _uniq_var_796;
};_uniq_var_798.__lix_func__ = true;return _uniq_var_798;})()(["return ", item.func, "(", _uniq_var_244, ");\n"], "");
_uniq_var_245;
var stmt = _uniq_var_245;
stmt;
stmt;
var _uniq_var_246 = true;
_uniq_var_246;
var _uniq_var_247 = null;
_uniq_var_247;
var _uniq_var_249 = __eq__(item.condition[1], "{va_args}");
_uniq_var_249;
if ((_uniq_var_246 && _uniq_var_249)) {
(_uniq_var_246 = false);
var _uniq_var_248 = (function () {var _uniq_var_801 = function (_uniq_var_799, _uniq_var_800) {
if (typeof _uniq_var_799.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_799.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_799.join.apply(_uniq_var_799, arguments);
} else if (_uniq_var_799.join !== undefined) {
if (_uniq_var_800 === undefined) {
return _uniq_var_799.join;
}
_uniq_var_799.join = _uniq_var_800;
}return _uniq_var_799;
};_uniq_var_801.__lix_func__ = true;return _uniq_var_801;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
_uniq_var_248;
var stmt = _uniq_var_248;
stmt;
(_uniq_var_247 = stmt);

};
_uniq_var_247;
var _uniq_var_250 = true;
_uniq_var_250;
var _uniq_var_251 = null;
_uniq_var_251;
if ((_uniq_var_250 && condition)) {
(_uniq_var_250 = false);
var _uniq_var_252 = call(def.varToStr);
_uniq_var_252;
var _uniq_var_253 = (function () {var _uniq_var_804 = function (_uniq_var_802, _uniq_var_803) {
if (typeof _uniq_var_802.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_802.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_802.join.apply(_uniq_var_802, arguments);
} else if (_uniq_var_802.join !== undefined) {
if (_uniq_var_803 === undefined) {
return _uniq_var_802.join;
}
_uniq_var_802.join = _uniq_var_803;
}return _uniq_var_802;
};_uniq_var_804.__lix_func__ = true;return _uniq_var_804;})()([_uniq_var_252, "if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_253;
(_uniq_var_251 = (stmt = _uniq_var_253));

};
_uniq_var_251;
var _uniq_var_254 = (function () {var _uniq_var_807 = function (_uniq_var_805, _uniq_var_806) {
if (typeof _uniq_var_805.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_805.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_805.push.apply(_uniq_var_805, arguments);
} else if (_uniq_var_805.push !== undefined) {
if (_uniq_var_806 === undefined) {
return _uniq_var_805.push;
}
_uniq_var_805.push = _uniq_var_806;
}return _uniq_var_805;
};_uniq_var_807.__lix_func__ = true;return _uniq_var_807;})()(body, stmt);
_uniq_var_254;
return _uniq_var_254;
};_uniq_var_808.__lix_func__ = true;return _uniq_var_808;})());
_uniq_var_255;
_uniq_var_255;
var _uniq_var_256 = (function () {var _uniq_var_811 = function (_uniq_var_809, _uniq_var_810) {
if (typeof _uniq_var_809.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_809.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_809.join.apply(_uniq_var_809, arguments);
} else if (_uniq_var_809.join !== undefined) {
if (_uniq_var_810 === undefined) {
return _uniq_var_809.join;
}
_uniq_var_809.join = _uniq_var_810;
}return _uniq_var_809;
};_uniq_var_811.__lix_func__ = true;return _uniq_var_811;})()(body, "");
_uniq_var_256;
(body = _uniq_var_256);
var _uniq_var_257 = call(getArgListString, max_narg);
_uniq_var_257;
var _uniq_var_258 = (function () {var _uniq_var_814 = function (_uniq_var_812, _uniq_var_813) {
if (typeof _uniq_var_812.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_812.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_812.join.apply(_uniq_var_812, arguments);
} else if (_uniq_var_812.join !== undefined) {
if (_uniq_var_813 === undefined) {
return _uniq_var_812.join;
}
_uniq_var_812.join = _uniq_var_813;
}return _uniq_var_812;
};_uniq_var_814.__lix_func__ = true;return _uniq_var_814;})()(["function ", name, "(", _uniq_var_257, ") {\n", body, "}\n"], "");
_uniq_var_258;
return _uniq_var_258;
};_uniq_var_815.__lix_func__ = true;return _uniq_var_815;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_845 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_816 = function (d) {return (destructed = d);
};_uniq_var_816.__lix_func__ = true;return _uniq_var_816;})(),
desctructedVars: (function () {var _uniq_var_820 = function () {var _uniq_var_259 = (function () {var _uniq_var_819 = function (_uniq_var_817, _uniq_var_818) {
if (typeof _uniq_var_817.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_817.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_817.join.apply(_uniq_var_817, arguments);
} else if (_uniq_var_817.join !== undefined) {
if (_uniq_var_818 === undefined) {
return _uniq_var_817.join;
}
_uniq_var_817.join = _uniq_var_818;
}return _uniq_var_817;
};_uniq_var_819.__lix_func__ = true;return _uniq_var_819;})()(destructed, ";\n");
_uniq_var_259;
return _uniq_var_259;
};_uniq_var_820.__lix_func__ = true;return _uniq_var_820;})(),
defineFn: (function () {var _uniq_var_824 = function (name, func, condition, narg) {var _uniq_var_260 = true;
_uniq_var_260;
var _uniq_var_261 = null;
_uniq_var_261;
var _uniq_var_262 = __eq__(fns[name], undefined);
_uniq_var_262;
if ((_uniq_var_260 && _uniq_var_262)) {
(_uniq_var_260 = false);
(_uniq_var_261 = (fns[name] = []));

};
_uniq_var_261;
var _uniq_var_263 = (function () {var _uniq_var_823 = function (_uniq_var_821, _uniq_var_822) {
if (typeof _uniq_var_821.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_821.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_821.push.apply(_uniq_var_821, arguments);
} else if (_uniq_var_821.push !== undefined) {
if (_uniq_var_822 === undefined) {
return _uniq_var_821.push;
}
_uniq_var_821.push = _uniq_var_822;
}return _uniq_var_821;
};_uniq_var_823.__lix_func__ = true;return _uniq_var_823;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_263;
return _uniq_var_263;
};_uniq_var_824.__lix_func__ = true;return _uniq_var_824;})(),
definedFns: (function () {var _uniq_var_832 = function () {var ret = [];
ret;
ret;
var _uniq_var_266 = foreach(fns, (function () {var _uniq_var_828 = function (item, name) {var _uniq_var_264 = predefineFn(name, item);
_uniq_var_264;
var _uniq_var_265 = (function () {var _uniq_var_827 = function (_uniq_var_825, _uniq_var_826) {
if (typeof _uniq_var_825.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_825.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_825.push.apply(_uniq_var_825, arguments);
} else if (_uniq_var_825.push !== undefined) {
if (_uniq_var_826 === undefined) {
return _uniq_var_825.push;
}
_uniq_var_825.push = _uniq_var_826;
}return _uniq_var_825;
};_uniq_var_827.__lix_func__ = true;return _uniq_var_827;})()(ret, _uniq_var_264);
_uniq_var_265;
return _uniq_var_265;
};_uniq_var_828.__lix_func__ = true;return _uniq_var_828;})());
_uniq_var_266;
_uniq_var_266;
var _uniq_var_267 = (function () {var _uniq_var_831 = function (_uniq_var_829, _uniq_var_830) {
if (typeof _uniq_var_829.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_829.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_829.join.apply(_uniq_var_829, arguments);
} else if (_uniq_var_829.join !== undefined) {
if (_uniq_var_830 === undefined) {
return _uniq_var_829.join;
}
_uniq_var_829.join = _uniq_var_830;
}return _uniq_var_829;
};_uniq_var_831.__lix_func__ = true;return _uniq_var_831;})()(ret, "\n");
_uniq_var_267;
return _uniq_var_267;
};_uniq_var_832.__lix_func__ = true;return _uniq_var_832;})(),
defineVar: (function () {var _uniq_var_837 = function (v) {var _uniq_var_268 = true;
_uniq_var_268;
var _uniq_var_269 = null;
_uniq_var_269;
if ((_uniq_var_268 && v)) {
(_uniq_var_268 = false);
(_uniq_var_269 = (vars[v] = v));

};
if (_uniq_var_268) {
var _uniq_var_270 = map(vars, (function () {var _uniq_var_833 = function (i) {return i;
};_uniq_var_833.__lix_func__ = true;return _uniq_var_833;})());
_uniq_var_270;
var vecs = _uniq_var_270;
vecs;
vecs;
var _uniq_var_271 = true;
_uniq_var_271;
var _uniq_var_272 = null;
_uniq_var_272;
var _uniq_var_275 = __gt__(vecs.length, 0);
_uniq_var_275;
if ((_uniq_var_271 && _uniq_var_275)) {
(_uniq_var_271 = false);
var _uniq_var_273 = (function () {var _uniq_var_836 = function (_uniq_var_834, _uniq_var_835) {
if (typeof _uniq_var_834.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_834.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_834.join.apply(_uniq_var_834, arguments);
} else if (_uniq_var_834.join !== undefined) {
if (_uniq_var_835 === undefined) {
return _uniq_var_834.join;
}
_uniq_var_834.join = _uniq_var_835;
}return _uniq_var_834;
};_uniq_var_836.__lix_func__ = true;return _uniq_var_836;})()(vecs, ', ');
_uniq_var_273;
var _uniq_var_274 = __add__('var ', _uniq_var_273);
_uniq_var_274;
(_uniq_var_272 = _uniq_var_274);

};
if (_uniq_var_271) {
(_uniq_var_272 = '');

};
(_uniq_var_269 = _uniq_var_272);

};
return _uniq_var_269;
};_uniq_var_837.__lix_func__ = true;return _uniq_var_837;})(),
appendExpr: (function () {var _uniq_var_844 = function (v) {var _uniq_var_276 = true;
_uniq_var_276;
var _uniq_var_277 = null;
_uniq_var_277;
if ((_uniq_var_276 && v)) {
(_uniq_var_276 = false);
var _uniq_var_278 = (function () {var _uniq_var_840 = function (_uniq_var_838, _uniq_var_839) {
if (typeof _uniq_var_838.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_838.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_838.push.apply(_uniq_var_838, arguments);
} else if (_uniq_var_838.push !== undefined) {
if (_uniq_var_839 === undefined) {
return _uniq_var_838.push;
}
_uniq_var_838.push = _uniq_var_839;
}return _uniq_var_838;
};_uniq_var_840.__lix_func__ = true;return _uniq_var_840;})()(funcs, v);
_uniq_var_278;
(_uniq_var_277 = _uniq_var_278);

};
if (_uniq_var_276) {
var _uniq_var_279 = (function () {var _uniq_var_843 = function (_uniq_var_841, _uniq_var_842) {
if (typeof _uniq_var_841.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_841.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_841.join.apply(_uniq_var_841, arguments);
} else if (_uniq_var_841.join !== undefined) {
if (_uniq_var_842 === undefined) {
return _uniq_var_841.join;
}
_uniq_var_841.join = _uniq_var_842;
}return _uniq_var_841;
};_uniq_var_843.__lix_func__ = true;return _uniq_var_843;})()(funcs, ';\n');
_uniq_var_279;
(_uniq_var_277 = _uniq_var_279);

};
return _uniq_var_277;
};_uniq_var_844.__lix_func__ = true;return _uniq_var_844;})()
};
};_uniq_var_845.__lix_func__ = true;return _uniq_var_845;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_846 = function (expr, env, ctx, def) {var _uniq_var_280 = call(GenerateDefNew);
_uniq_var_280;
var def = _uniq_var_280;
def;
def;
var _uniq_var_281 = generate(expr[0], env, ctx, def);
_uniq_var_281;
var body = _uniq_var_281;
body;
body;
var _uniq_var_282 = join(['module.exports = ', body, '\n']);
_uniq_var_282;
var body = _uniq_var_282;
body;
body;
var _uniq_var_283 = call(def.defineVar);
_uniq_var_283;
var _uniq_var_284 = call(def.appendExpr);
_uniq_var_284;
var _uniq_var_285 = call(def.definedFns);
_uniq_var_285;
var _uniq_var_286 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_283, ";\n", _uniq_var_284, ";\n", _uniq_var_285, ";\n", body]);
_uniq_var_286;
return _uniq_var_286;
};_uniq_var_846.__lix_func__ = true;return _uniq_var_846;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_847 = function (expr, env, ctx, def) {var _uniq_var_287 = generate(expr[0], env, ctx, def);
_uniq_var_287;
return _uniq_var_287;
};_uniq_var_847.__lix_func__ = true;return _uniq_var_847;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_848 = function (expr, env, ctx, def) {var _uniq_var_288 = join(['"', expr[0], '"']);
_uniq_var_288;
return _uniq_var_288;
};_uniq_var_848.__lix_func__ = true;return _uniq_var_848;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_849 = function (expr, env, ctx, def) {var _uniq_var_289 = generate(expr[0], env, ctx, def);
_uniq_var_289;
var _uniq_var_290 = join(['("', expr[2], '" + ', _uniq_var_289, ')']);
_uniq_var_290;
return _uniq_var_290;
};_uniq_var_849.__lix_func__ = true;return _uniq_var_849;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_854 = function (expr, env, ctx, def) {var _uniq_var_292 = map(expr[0], (function () {var _uniq_var_850 = function (i) {var _uniq_var_291 = generate(i, env, ctx, def);
_uniq_var_291;
return _uniq_var_291;
};_uniq_var_850.__lix_func__ = true;return _uniq_var_850;})());
_uniq_var_292;
var _uniq_var_293 = (function () {var _uniq_var_853 = function (_uniq_var_851, _uniq_var_852) {
if (typeof _uniq_var_851.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_851.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_851.join.apply(_uniq_var_851, arguments);
} else if (_uniq_var_851.join !== undefined) {
if (_uniq_var_852 === undefined) {
return _uniq_var_851.join;
}
_uniq_var_851.join = _uniq_var_852;
}return _uniq_var_851;
};_uniq_var_853.__lix_func__ = true;return _uniq_var_853;})()(_uniq_var_292, ',');
_uniq_var_293;
var path = _uniq_var_293;
path;
path;
var _uniq_var_294 = join(['[', path, '].join("/")']);
_uniq_var_294;
return _uniq_var_294;
};_uniq_var_854.__lix_func__ = true;return _uniq_var_854;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_858 = function (expr, env, ctx, def) {var _uniq_var_295 = (function () {var _uniq_var_857 = function (_uniq_var_855, _uniq_var_856) {
if (typeof _uniq_var_855.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_855.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_855.join.apply(_uniq_var_855, arguments);
} else if (_uniq_var_855.join !== undefined) {
if (_uniq_var_856 === undefined) {
return _uniq_var_855.join;
}
_uniq_var_855.join = _uniq_var_856;
}return _uniq_var_855;
};_uniq_var_857.__lix_func__ = true;return _uniq_var_857;})()(['"', expr[0], '"'], '');
_uniq_var_295;
var name = [_uniq_var_295, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_858.__lix_func__ = true;return _uniq_var_858;})();
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
var generateOp = (function () {var _uniq_var_859 = function (hint) {var _uniq_var_296 = true;
_uniq_var_296;
var _uniq_var_297 = null;
_uniq_var_297;
if ((_uniq_var_296 && generateOpTable[hint])) {
(_uniq_var_296 = false);
(_uniq_var_297 = generateOpTable[hint]);

};
if (_uniq_var_296) {
(_uniq_var_297 = generateExpr);

};
return _uniq_var_297;
};_uniq_var_859.__lix_func__ = true;return _uniq_var_859;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_860 = function (expr, env, ctx, def) {var _uniq_var_298 = generateOp(expr[1]);
_uniq_var_298;
var _uniq_var_299 = _uniq_var_298(expr, env, ctx, def);
_uniq_var_299;
return _uniq_var_299;
};_uniq_var_860.__lix_func__ = true;return _uniq_var_860;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_862 = function (env) {var _uniq_var_300 = env;
_uniq_var_300;
if (not(_uniq_var_300)) {
(_uniq_var_300 = env0);

};
(env = _uniq_var_300);
var Env = (function () {var _uniq_var_861 = function () {;
};_uniq_var_861.__lix_func__ = true;return _uniq_var_861;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_301 = _instance_(Env);
_uniq_var_301;
return _uniq_var_301;
};_uniq_var_862.__lix_func__ = true;return _uniq_var_862;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_864 = function (expr, define) {var _uniq_var_303 = map(expr, (function () {var _uniq_var_863 = function (item) {var _uniq_var_302 = flatten(item, define);
_uniq_var_302;
return _uniq_var_302;
};_uniq_var_863.__lix_func__ = true;return _uniq_var_863;})());
_uniq_var_303;
var _uniq_var_304 = define(_uniq_var_303);
_uniq_var_304;
return _uniq_var_304;
};_uniq_var_864.__lix_func__ = true;return _uniq_var_864;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_865 = function (expr, define) {return expr;
};_uniq_var_865.__lix_func__ = true;return _uniq_var_865;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_870 = function (expr, define) {var _uniq_var_305 = call(statementFlattenGenerator);
_uniq_var_305;
var whileDefine = _uniq_var_305;
whileDefine;
whileDefine;
var _uniq_var_306 = flatten(expr[0], whileDefine);
_uniq_var_306;
(expr[0] = _uniq_var_306);
var _uniq_var_307 = flatten(expr[2], define0);
_uniq_var_307;
(expr[2] = _uniq_var_307);
var _uniq_var_308 = call(whileDefine);
_uniq_var_308;
var _uniq_var_309 = (function () {var _uniq_var_868 = function (_uniq_var_866, _uniq_var_867) {
if (typeof _uniq_var_866.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_866.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_866.concat.apply(_uniq_var_866, arguments);
} else if (_uniq_var_866.concat !== undefined) {
if (_uniq_var_867 === undefined) {
return _uniq_var_866.concat;
}
_uniq_var_866.concat = _uniq_var_867;
}return _uniq_var_866;
};_uniq_var_868.__lix_func__ = true;return _uniq_var_868;})()(expr[2][0], _uniq_var_308);
_uniq_var_309;
(expr[2][0] = _uniq_var_309);
var _uniq_var_310 = call(whileDefine);
_uniq_var_310;
var _uniq_var_312 = foreach(_uniq_var_310, (function () {var _uniq_var_869 = function (i) {var _uniq_var_311 = define(i, true);
_uniq_var_311;
return _uniq_var_311;
};_uniq_var_869.__lix_func__ = true;return _uniq_var_869;})());
_uniq_var_312;
_uniq_var_312;
var _uniq_var_313 = define(expr, true);
_uniq_var_313;
_uniq_var_313;
return ['', '{empty}'];
};_uniq_var_870.__lix_func__ = true;return _uniq_var_870;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_875 = function (expr, define) {var _uniq_var_314 = flatten(expr[0], define);
_uniq_var_314;
var ret = _uniq_var_314;
ret;
ret;
var _uniq_var_315 = true;
_uniq_var_315;
var _uniq_var_316 = null;
_uniq_var_316;
var _uniq_var_318 = __ne__(ret[2], 'var');
_uniq_var_318;
if ((_uniq_var_315 && _uniq_var_318)) {
(_uniq_var_315 = false);
var _uniq_var_317 = define(ret);
_uniq_var_317;
var ret = _uniq_var_317;
ret;
(_uniq_var_316 = ret);

};
_uniq_var_316;
var getAndOpSeq = (function () {var _uniq_var_874 = function () {var _uniq_var_319 = call(statementFlattenGenerator);
_uniq_var_319;
var AndDefine = _uniq_var_319;
AndDefine;
AndDefine;
var _uniq_var_320 = flatten(expr[2], AndDefine);
_uniq_var_320;
var seqRet = _uniq_var_320;
seqRet;
seqRet;
var _uniq_var_321 = call(AndDefine);
_uniq_var_321;
var seq = _uniq_var_321;
seq;
seq;
var _uniq_var_322 = (function () {var _uniq_var_873 = function (_uniq_var_871, _uniq_var_872) {
if (typeof _uniq_var_871.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_871.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_871.push.apply(_uniq_var_871, arguments);
} else if (_uniq_var_871.push !== undefined) {
if (_uniq_var_872 === undefined) {
return _uniq_var_871.push;
}
_uniq_var_871.push = _uniq_var_872;
}return _uniq_var_871;
};_uniq_var_873.__lix_func__ = true;return _uniq_var_873;})()(seq, [ret, '=', seqRet]);
_uniq_var_322;
_uniq_var_322;
return [seq, '{seq}'];
};_uniq_var_874.__lix_func__ = true;return _uniq_var_874;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_323 = call(getAndOpSeq);
_uniq_var_323;
var _uniq_var_324 = define([[[ret, [[], '{empty}']], [_uniq_var_323, 'else']], 'if'], true);
_uniq_var_324;
_uniq_var_324;
return ret;
};_uniq_var_875.__lix_func__ = true;return _uniq_var_875;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_880 = function (expr, define) {var _uniq_var_325 = flatten(expr[0], define);
_uniq_var_325;
var ret = _uniq_var_325;
ret;
ret;
var _uniq_var_326 = true;
_uniq_var_326;
var _uniq_var_327 = null;
_uniq_var_327;
var _uniq_var_329 = __ne__(ret[2], 'var');
_uniq_var_329;
if ((_uniq_var_326 && _uniq_var_329)) {
(_uniq_var_326 = false);
var _uniq_var_328 = define(ret);
_uniq_var_328;
var ret = _uniq_var_328;
ret;
(_uniq_var_327 = ret);

};
_uniq_var_327;
var getAndOpSeq = (function () {var _uniq_var_879 = function () {var _uniq_var_330 = call(statementFlattenGenerator);
_uniq_var_330;
var AndDefine = _uniq_var_330;
AndDefine;
AndDefine;
var _uniq_var_331 = flatten(expr[2], AndDefine);
_uniq_var_331;
var seqRet = _uniq_var_331;
seqRet;
seqRet;
var _uniq_var_332 = call(AndDefine);
_uniq_var_332;
var seq = _uniq_var_332;
seq;
seq;
var _uniq_var_333 = (function () {var _uniq_var_878 = function (_uniq_var_876, _uniq_var_877) {
if (typeof _uniq_var_876.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_876.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_876.push.apply(_uniq_var_876, arguments);
} else if (_uniq_var_876.push !== undefined) {
if (_uniq_var_877 === undefined) {
return _uniq_var_876.push;
}
_uniq_var_876.push = _uniq_var_877;
}return _uniq_var_876;
};_uniq_var_878.__lix_func__ = true;return _uniq_var_878;})()(seq, [ret, '=', seqRet]);
_uniq_var_333;
_uniq_var_333;
return [seq, '{seq}'];
};_uniq_var_879.__lix_func__ = true;return _uniq_var_879;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_334 = call(getAndOpSeq);
_uniq_var_334;
var _uniq_var_335 = define([[[ret, _uniq_var_334]], 'if'], true);
_uniq_var_335;
_uniq_var_335;
return ret;
};_uniq_var_880.__lix_func__ = true;return _uniq_var_880;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_885 = function (expr, define, tmpVar, ctx) {var _uniq_var_348 = foreach(expr[0], (function () {var _uniq_var_884 = function (i) {var _uniq_var_336 = true;
_uniq_var_336;
var _uniq_var_337 = null;
_uniq_var_337;
var _uniq_var_340 = __eq__(i[1], 'else');
_uniq_var_340;
if ((_uniq_var_336 && _uniq_var_340)) {
(_uniq_var_336 = false);
var _uniq_var_338 = flatten(i[0], define0, ctx);
_uniq_var_338;
var elseSeq = _uniq_var_338;
elseSeq;
elseSeq;
var _uniq_var_339 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_339;
(_uniq_var_337 = _uniq_var_339);

};
var _uniq_var_343 = __eq__(i[1], 'if');
_uniq_var_343;
if ((_uniq_var_336 && _uniq_var_343)) {
(_uniq_var_336 = false);
var _uniq_var_341 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_341;
var _uniq_var_342 = define(_uniq_var_341);
_uniq_var_342;
(_uniq_var_337 = _uniq_var_342);

};
if (_uniq_var_336) {
var _uniq_var_344 = flatten(i[1], define0, ctx);
_uniq_var_344;
var ifSeq = _uniq_var_344;
ifSeq;
ifSeq;
var _uniq_var_345 = (function () {var _uniq_var_883 = function (_uniq_var_881, _uniq_var_882) {
if (typeof _uniq_var_881.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_881.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_881.unshift.apply(_uniq_var_881, arguments);
} else if (_uniq_var_881.unshift !== undefined) {
if (_uniq_var_882 === undefined) {
return _uniq_var_881.unshift;
}
_uniq_var_881.unshift = _uniq_var_882;
}return _uniq_var_881;
};_uniq_var_883.__lix_func__ = true;return _uniq_var_883;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_345;
_uniq_var_345;
var _uniq_var_346 = flatten(i[0], define);
_uniq_var_346;
var cond = _uniq_var_346;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_347 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_347;
(_uniq_var_337 = _uniq_var_347);

};
return _uniq_var_337;
};_uniq_var_884.__lix_func__ = true;return _uniq_var_884;})());
_uniq_var_348;
return _uniq_var_348;
};_uniq_var_885.__lix_func__ = true;return _uniq_var_885;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_886 = function (expr, define) {var _uniq_var_349 = define(['true', '{atomic}'], 'new');
_uniq_var_349;
var tmpVar = _uniq_var_349;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_350 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_350;
_uniq_var_350;
return retVar;
};_uniq_var_886.__lix_func__ = true;return _uniq_var_886;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_887 = function (expr, define) {var _uniq_var_351 = flatten(expr[2], define);
_uniq_var_351;
(expr[2] = _uniq_var_351);
return expr;
};_uniq_var_887.__lix_func__ = true;return _uniq_var_887;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_891 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_352 = true;
_uniq_var_352;
var _uniq_var_353 = null;
_uniq_var_353;
var _uniq_var_357 = __gt__(expr.length, 3);
_uniq_var_357;
if ((_uniq_var_352 && _uniq_var_357)) {
(_uniq_var_352 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_354 = __lt__(i, expr.length);
_uniq_var_354;
while (_uniq_var_354) {
var _uniq_var_355 = (function () {var _uniq_var_890 = function (_uniq_var_888, _uniq_var_889) {
if (typeof _uniq_var_888.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_888.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_888.push.apply(_uniq_var_888, arguments);
} else if (_uniq_var_888.push !== undefined) {
if (_uniq_var_889 === undefined) {
return _uniq_var_888.push;
}
_uniq_var_888.push = _uniq_var_889;
}return _uniq_var_888;
};_uniq_var_890.__lix_func__ = true;return _uniq_var_890;})()(partialExpr, expr[i]);
_uniq_var_355;
_uniq_var_355;
var _uniq_var_356 = __add__(i, 1);
_uniq_var_356;
(i = _uniq_var_356);
var _uniq_var_354 = __lt__(i, expr.length);
_uniq_var_354;
}
null;
(_uniq_var_353 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_353;
var _uniq_var_358 = flattenExpr(expr, define);
_uniq_var_358;
return _uniq_var_358;
};_uniq_var_891.__lix_func__ = true;return _uniq_var_891;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_892 = function (expr, define) {var _uniq_var_359 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_359;
return _uniq_var_359;
};_uniq_var_892.__lix_func__ = true;return _uniq_var_892;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_893 = function (expr, define) {var _uniq_var_360 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_360;
return _uniq_var_360;
};_uniq_var_893.__lix_func__ = true;return _uniq_var_893;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_894 = function (expr, define) {var _uniq_var_361 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_361;
return _uniq_var_361;
};_uniq_var_894.__lix_func__ = true;return _uniq_var_894;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_895 = function (expr, define) {var _uniq_var_362 = flattenBasicOp(expr, '__rxcompose__', define);
_uniq_var_362;
return _uniq_var_362;
};_uniq_var_895.__lix_func__ = true;return _uniq_var_895;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_896 = function (expr, define) {var _uniq_var_363 = flattenBasicOp(expr, '__xcompose__', define);
_uniq_var_363;
return _uniq_var_363;
};_uniq_var_896.__lix_func__ = true;return _uniq_var_896;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_897 = function (expr, define) {var _uniq_var_364 = flatten(expr[0], define);
_uniq_var_364;
(expr[0] = _uniq_var_364);
return expr;
};_uniq_var_897.__lix_func__ = true;return _uniq_var_897;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_898 = function (expr, define) {return expr;
};_uniq_var_898.__lix_func__ = true;return _uniq_var_898;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_900 = function (expr, define) {var _uniq_var_366 = map(expr[0], (function () {var _uniq_var_899 = function (i) {var _uniq_var_365 = flatten(i, define);
_uniq_var_365;
return _uniq_var_365;
};_uniq_var_899.__lix_func__ = true;return _uniq_var_899;})());
_uniq_var_366;
(expr[0] = _uniq_var_366);
return expr;
};_uniq_var_900.__lix_func__ = true;return _uniq_var_900;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_901 = function (expr, define) {return expr;
};_uniq_var_901.__lix_func__ = true;return _uniq_var_901;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_902 = function (expr, define) {var _uniq_var_367 = true;
_uniq_var_367;
var _uniq_var_368 = null;
_uniq_var_368;
var _uniq_var_370 = __eq__(expr[1], '{index}');
_uniq_var_370;
if ((_uniq_var_367 && _uniq_var_370)) {
(_uniq_var_367 = false);
var _uniq_var_369 = flatten(expr[0], define);
_uniq_var_369;
(_uniq_var_368 = (expr[0] = _uniq_var_369));

};
_uniq_var_368;
return expr;
};_uniq_var_902.__lix_func__ = true;return _uniq_var_902;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_907 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_906 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_371 = true;
_uniq_var_371;
var _uniq_var_372 = null;
_uniq_var_372;
var _uniq_var_378 = __eq__(arguments.length, 2);
_uniq_var_378;
if ((_uniq_var_371 && _uniq_var_378)) {
(_uniq_var_371 = false);
var _uniq_var_373 = true;
_uniq_var_373;
var _uniq_var_374 = null;
_uniq_var_374;
var _uniq_var_377 = __eq__(defined[name], undefined);
_uniq_var_377;
if ((_uniq_var_373 && _uniq_var_377)) {
(_uniq_var_373 = false);
var _uniq_var_375 = call(getUniqVarName);
_uniq_var_375;
var varName = _uniq_var_375;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_376 = (function () {var _uniq_var_905 = function (_uniq_var_903, _uniq_var_904) {
if (typeof _uniq_var_903.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_903.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_903.push.apply(_uniq_var_903, arguments);
} else if (_uniq_var_903.push !== undefined) {
if (_uniq_var_904 === undefined) {
return _uniq_var_903.push;
}
_uniq_var_903.push = _uniq_var_904;
}return _uniq_var_903;
};_uniq_var_905.__lix_func__ = true;return _uniq_var_905;})()(statements, [lixVar, ':=', value]);
_uniq_var_376;
_uniq_var_376;
(_uniq_var_374 = (defined[name] = lixVar));

};
_uniq_var_374;
(_uniq_var_372 = (ret = defined[name]));

};
if (_uniq_var_371) {
(_uniq_var_372 = (ret = statements));

};
_uniq_var_372;
return ret;
};_uniq_var_906.__lix_func__ = true;return _uniq_var_906;})();
};_uniq_var_907.__lix_func__ = true;return _uniq_var_907;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_379 = call(NewGlobalDefine);
_uniq_var_379;
var globalDefine = _uniq_var_379;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_908 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_380 = true;
_uniq_var_380;
var _uniq_var_381 = null;
_uniq_var_381;
var _uniq_var_383 = __eq__(expr[0][3], '{global}');
_uniq_var_383;
if ((_uniq_var_380 && _uniq_var_383)) {
(_uniq_var_380 = false);
var _uniq_var_382 = globalDefine(expr[0][0], expr);
_uniq_var_382;
(_uniq_var_381 = (ret = _uniq_var_382));

};
if (_uniq_var_380) {
var _uniq_var_384 = flattenField(expr[0], define);
_uniq_var_384;
(expr[0] = _uniq_var_384);
(_uniq_var_381 = (ret = expr));

};
_uniq_var_381;
return ret;
};_uniq_var_908.__lix_func__ = true;return _uniq_var_908;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_909 = function (expr, define) {var _uniq_var_385 = flatten(expr[2], define);
_uniq_var_385;
(expr[2] = _uniq_var_385);
return expr;
};_uniq_var_909.__lix_func__ = true;return _uniq_var_909;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_911 = function (expr, define) {var _uniq_var_387 = map(expr[0], (function () {var _uniq_var_910 = function (i) {var _uniq_var_386 = flattenProperty(i, define);
_uniq_var_386;
return _uniq_var_386;
};_uniq_var_910.__lix_func__ = true;return _uniq_var_910;})());
_uniq_var_387;
(expr[0] = _uniq_var_387);
return expr;
};_uniq_var_911.__lix_func__ = true;return _uniq_var_911;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_913 = function (expr, define) {var _uniq_var_389 = map(expr[0], (function () {var _uniq_var_912 = function (i) {var _uniq_var_388 = flatten(i, define);
_uniq_var_388;
return _uniq_var_388;
};_uniq_var_912.__lix_func__ = true;return _uniq_var_912;})());
_uniq_var_389;
(expr[0] = _uniq_var_389);
return expr;
};_uniq_var_913.__lix_func__ = true;return _uniq_var_913;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_914 = function (expr, define) {var _uniq_var_390 = flatten(expr[2], define);
_uniq_var_390;
(expr[2] = _uniq_var_390);
return expr;
};_uniq_var_914.__lix_func__ = true;return _uniq_var_914;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_915 = function (expr, define) {var _uniq_var_391 = true;
_uniq_var_391;
var _uniq_var_392 = null;
_uniq_var_392;
var _uniq_var_395 = __eq__(expr[1], '{.}');
_uniq_var_395;
if ((_uniq_var_391 && _uniq_var_395)) {
(_uniq_var_391 = false);
var _uniq_var_393 = flattenFieldAccess(expr[0], define);
_uniq_var_393;
(expr[0] = _uniq_var_393);
var _uniq_var_394 = flattenField(expr[2], define);
_uniq_var_394;
(_uniq_var_392 = (expr[2] = _uniq_var_394));

};
if (_uniq_var_391) {
var _uniq_var_396 = flatten(expr, define);
_uniq_var_396;
(_uniq_var_392 = (expr = _uniq_var_396));

};
_uniq_var_392;
return expr;
};_uniq_var_915.__lix_func__ = true;return _uniq_var_915;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_916 = function (expr, define) {return expr;
};_uniq_var_916.__lix_func__ = true;return _uniq_var_916;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_917 = function (expr, define) {var _uniq_var_397 = flatten(expr[0], define);
_uniq_var_397;
return _uniq_var_397;
};_uniq_var_917.__lix_func__ = true;return _uniq_var_917;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_931 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_930 = function (statement, tmpVarName) {var _uniq_var_398 = true;
_uniq_var_398;
var _uniq_var_399 = null;
_uniq_var_399;
var _uniq_var_400 = __eq__(statement, undefined);
_uniq_var_400;
if ((_uniq_var_398 && _uniq_var_400)) {
(_uniq_var_398 = false);
(_uniq_var_399 = data);

};
var _uniq_var_402 = __eq__(tmpVarName, true);
_uniq_var_402;
if ((_uniq_var_398 && _uniq_var_402)) {
(_uniq_var_398 = false);
var _uniq_var_401 = (function () {var _uniq_var_920 = function (_uniq_var_918, _uniq_var_919) {
if (typeof _uniq_var_918.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_918.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_918.push.apply(_uniq_var_918, arguments);
} else if (_uniq_var_918.push !== undefined) {
if (_uniq_var_919 === undefined) {
return _uniq_var_918.push;
}
_uniq_var_918.push = _uniq_var_919;
}return _uniq_var_918;
};_uniq_var_920.__lix_func__ = true;return _uniq_var_920;})()(data, statement);
_uniq_var_401;
(_uniq_var_399 = _uniq_var_401);

};
var _uniq_var_406 = __eq__(tmpVarName, undefined);
_uniq_var_406;
if ((_uniq_var_398 && _uniq_var_406)) {
(_uniq_var_398 = false);
var _uniq_var_403 = call(getUniqVarName);
_uniq_var_403;
var varName = _uniq_var_403;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_404 = (function () {var _uniq_var_923 = function (_uniq_var_921, _uniq_var_922) {
if (typeof _uniq_var_921.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_921.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_921.push.apply(_uniq_var_921, arguments);
} else if (_uniq_var_921.push !== undefined) {
if (_uniq_var_922 === undefined) {
return _uniq_var_921.push;
}
_uniq_var_921.push = _uniq_var_922;
}return _uniq_var_921;
};_uniq_var_923.__lix_func__ = true;return _uniq_var_923;})()(data, statement);
_uniq_var_404;
_uniq_var_404;
var _uniq_var_405 = (function () {var _uniq_var_926 = function (_uniq_var_924, _uniq_var_925) {
if (typeof _uniq_var_924.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_924.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_924.push.apply(_uniq_var_924, arguments);
} else if (_uniq_var_924.push !== undefined) {
if (_uniq_var_925 === undefined) {
return _uniq_var_924.push;
}
_uniq_var_924.push = _uniq_var_925;
}return _uniq_var_924;
};_uniq_var_926.__lix_func__ = true;return _uniq_var_926;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_405;
_uniq_var_405;
(_uniq_var_399 = lixVar);

};
var _uniq_var_409 = __eq__(tmpVarName, 'new');
_uniq_var_409;
if ((_uniq_var_398 && _uniq_var_409)) {
(_uniq_var_398 = false);
var _uniq_var_407 = call(getUniqVarName);
_uniq_var_407;
var varName = _uniq_var_407;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_408 = (function () {var _uniq_var_929 = function (_uniq_var_927, _uniq_var_928) {
if (typeof _uniq_var_927.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_927.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_927.push.apply(_uniq_var_927, arguments);
} else if (_uniq_var_927.push !== undefined) {
if (_uniq_var_928 === undefined) {
return _uniq_var_927.push;
}
_uniq_var_927.push = _uniq_var_928;
}return _uniq_var_927;
};_uniq_var_929.__lix_func__ = true;return _uniq_var_929;})()(data, [lixVar, ':=', statement]);
_uniq_var_408;
_uniq_var_408;
(_uniq_var_399 = lixVar);

};
return _uniq_var_399;
};_uniq_var_930.__lix_func__ = true;return _uniq_var_930;})();
};_uniq_var_931.__lix_func__ = true;return _uniq_var_931;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_943 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_932 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_410 = true;
_uniq_var_410;
var _uniq_var_411 = null;
_uniq_var_411;
var _uniq_var_413 = seqCtx;
_uniq_var_413;
if (_uniq_var_413) {
var _uniq_var_414 = parseInt(index);
_uniq_var_414;
var _uniq_var_415 = __sub__(expr[0].length, 1);
_uniq_var_415;
var _uniq_var_416 = __eq__(_uniq_var_414, _uniq_var_415);
_uniq_var_416;
(_uniq_var_413 = _uniq_var_416);

};
if ((_uniq_var_410 && _uniq_var_413)) {
(_uniq_var_410 = false);
var _uniq_var_412 = seqCtx(stmt);
_uniq_var_412;
var ret = _uniq_var_412;
ret;
(_uniq_var_411 = ret);

};
_uniq_var_411;
return ret;
};_uniq_var_932.__lix_func__ = true;return _uniq_var_932;})();
ctx;
ctx;
var _uniq_var_443 = foreach(expr[0], (function () {var _uniq_var_942 = function (item, index) {var _uniq_var_417 = call(statementFlattenGenerator);
_uniq_var_417;
var exprDefine = _uniq_var_417;
exprDefine;
exprDefine;
var _uniq_var_418 = flatten(item, exprDefine);
_uniq_var_418;
var itemRet = _uniq_var_418;
itemRet;
itemRet;
var _uniq_var_419 = call(exprDefine);
_uniq_var_419;
var _uniq_var_420 = (function () {var _uniq_var_935 = function (_uniq_var_933, _uniq_var_934) {
if (typeof _uniq_var_933.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_933.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_933.concat.apply(_uniq_var_933, arguments);
} else if (_uniq_var_933.concat !== undefined) {
if (_uniq_var_934 === undefined) {
return _uniq_var_933.concat;
}
_uniq_var_933.concat = _uniq_var_934;
}return _uniq_var_933;
};_uniq_var_935.__lix_func__ = true;return _uniq_var_935;})()(ret, _uniq_var_419);
_uniq_var_420;
(ret = _uniq_var_420);
var _uniq_var_421 = ctx(itemRet, index);
_uniq_var_421;
var stmtRet = _uniq_var_421;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_936 = function (expr) {var _uniq_var_422 = __eq__(expr[1], '{atomic}');
_uniq_var_422;
var _uniq_var_423 = _uniq_var_422;
_uniq_var_423;
if (_uniq_var_423) {
var _uniq_var_424 = __ne__(expr[3], undefined);
_uniq_var_424;
(_uniq_var_423 = _uniq_var_424);

};
return _uniq_var_423;
};_uniq_var_936.__lix_func__ = true;return _uniq_var_936;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_937 = function (expr) {var _uniq_var_425 = __eq__(expr[1], '{atomic}');
_uniq_var_425;
var _uniq_var_426 = _uniq_var_425;
_uniq_var_426;
if (_uniq_var_426) {
var _uniq_var_427 = __eq__(expr[3], undefined);
_uniq_var_427;
(_uniq_var_426 = _uniq_var_427);

};
return _uniq_var_426;
};_uniq_var_937.__lix_func__ = true;return _uniq_var_937;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_938 = function (expr) {var _uniq_var_428 = isRealVar(expr);
_uniq_var_428;
var _uniq_var_429 = _uniq_var_428;
_uniq_var_429;
if (not(_uniq_var_429)) {
var _uniq_var_430 = __ne__(expr[1], 'if');
_uniq_var_430;
var _uniq_var_431 = _uniq_var_430;
_uniq_var_431;
if (_uniq_var_431) {
var _uniq_var_432 = __ne__(expr[1], 'while');
_uniq_var_432;
(_uniq_var_431 = _uniq_var_432);

};
(_uniq_var_429 = _uniq_var_431);

};
return _uniq_var_429;
};_uniq_var_938.__lix_func__ = true;return _uniq_var_938;})();
isRealExpr;
isRealExpr;
var _uniq_var_433 = true;
_uniq_var_433;
var _uniq_var_434 = null;
_uniq_var_434;
var _uniq_var_439 = __ne__(stmtRet[1], '{empty}');
_uniq_var_439;
var _uniq_var_440 = _uniq_var_439;
_uniq_var_440;
if (_uniq_var_440) {
var _uniq_var_441 = isTmpVar(stmtRet);
_uniq_var_441;
var _uniq_var_442 = not(_uniq_var_441);
_uniq_var_442;
(_uniq_var_440 = _uniq_var_442);

};
if ((_uniq_var_433 && _uniq_var_440)) {
(_uniq_var_433 = false);
var _uniq_var_435 = true;
_uniq_var_435;
var _uniq_var_436 = null;
_uniq_var_436;
var _uniq_var_437 = isRealExpr(stmtRet);
_uniq_var_437;
if ((_uniq_var_435 && _uniq_var_437)) {
(_uniq_var_435 = false);
(_uniq_var_436 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_436;
var _uniq_var_438 = (function () {var _uniq_var_941 = function (_uniq_var_939, _uniq_var_940) {
if (typeof _uniq_var_939.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_939.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_939.push.apply(_uniq_var_939, arguments);
} else if (_uniq_var_939.push !== undefined) {
if (_uniq_var_940 === undefined) {
return _uniq_var_939.push;
}
_uniq_var_939.push = _uniq_var_940;
}return _uniq_var_939;
};_uniq_var_941.__lix_func__ = true;return _uniq_var_941;})()(ret, stmtRet);
_uniq_var_438;
(_uniq_var_434 = _uniq_var_438);

};
return _uniq_var_434;
};_uniq_var_942.__lix_func__ = true;return _uniq_var_942;})());
_uniq_var_443;
_uniq_var_443;
(expr[0] = ret);
return expr;
};_uniq_var_943.__lix_func__ = true;return _uniq_var_943;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_950 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_444 = flatten(expr[0], define);
_uniq_var_444;
var ret = _uniq_var_444;
ret;
ret;
var _uniq_var_445 = call(globalDefine);
_uniq_var_445;
var _uniq_var_446 = (function () {var _uniq_var_946 = function (_uniq_var_944, _uniq_var_945) {
if (typeof _uniq_var_944.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_944.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_944.concat.apply(_uniq_var_944, arguments);
} else if (_uniq_var_944.concat !== undefined) {
if (_uniq_var_945 === undefined) {
return _uniq_var_944.concat;
}
_uniq_var_944.concat = _uniq_var_945;
}return _uniq_var_944;
};_uniq_var_946.__lix_func__ = true;return _uniq_var_946;})()(trapExpr, _uniq_var_445);
_uniq_var_446;
var _uniq_var_447 = (function () {var _uniq_var_949 = function (_uniq_var_947, _uniq_var_948) {
if (typeof _uniq_var_947.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_947.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_947.concat.apply(_uniq_var_947, arguments);
} else if (_uniq_var_947.concat !== undefined) {
if (_uniq_var_948 === undefined) {
return _uniq_var_947.concat;
}
_uniq_var_947.concat = _uniq_var_948;
}return _uniq_var_947;
};_uniq_var_949.__lix_func__ = true;return _uniq_var_949;})()(_uniq_var_446, ret[0]);
_uniq_var_447;
(ret[0] = _uniq_var_447);
return [ret, '{start}'];
};_uniq_var_950.__lix_func__ = true;return _uniq_var_950;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_954 = function (expr, define) {var _uniq_var_448 = true;
_uniq_var_448;
var _uniq_var_449 = null;
_uniq_var_449;
var _uniq_var_451 = __eq__(expr[2], '{var}');
_uniq_var_451;
if ((_uniq_var_448 && _uniq_var_451)) {
(_uniq_var_448 = false);
var _uniq_var_450 = (function () {var _uniq_var_953 = function (_uniq_var_951, _uniq_var_952) {
if (typeof _uniq_var_951.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_951.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_951.join.apply(_uniq_var_951, arguments);
} else if (_uniq_var_951.join !== undefined) {
if (_uniq_var_952 === undefined) {
return _uniq_var_951.join;
}
_uniq_var_951.join = _uniq_var_952;
}return _uniq_var_951;
};_uniq_var_953.__lix_func__ = true;return _uniq_var_953;})()(['"', expr[0], '"'], '');
_uniq_var_450;
var name = [_uniq_var_450, '{atomic}'];
name;
(_uniq_var_449 = name);

};
var _uniq_var_453 = __eq__(expr[2], '{index}');
_uniq_var_453;
if ((_uniq_var_448 && _uniq_var_453)) {
(_uniq_var_448 = false);
var _uniq_var_452 = flatten(expr[0], define);
_uniq_var_452;
var name = _uniq_var_452;
name;
(_uniq_var_449 = name);

};
_uniq_var_449;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_454 = define(moduleExpr);
_uniq_var_454;
return _uniq_var_454;
};_uniq_var_954.__lix_func__ = true;return _uniq_var_954;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_955 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_955.__lix_func__ = true;return _uniq_var_955;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_956 = function (expr, define) {return expr;
};_uniq_var_956.__lix_func__ = true;return _uniq_var_956;})();
flattenAmpersand;
flattenAmpersand;
var flattenAmpersandObject = (function () {var _uniq_var_957 = function (expr, define) {return expr;
};_uniq_var_957.__lix_func__ = true;return _uniq_var_957;})();
flattenAmpersandObject;
flattenAmpersandObject;
var flattenAmpersandBracket = (function () {var _uniq_var_958 = function (expr, define) {return expr;
};_uniq_var_958.__lix_func__ = true;return _uniq_var_958;})();
flattenAmpersandBracket;
flattenAmpersandBracket;
var flattenAnyTypeDestructor = (function () {var _uniq_var_959 = function (arg) {return [];
};_uniq_var_959.__lix_func__ = true;return _uniq_var_959;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_960 = function (expr) {var _uniq_var_455 = transformVarName(expr[0]);
_uniq_var_455;
var varName = _uniq_var_455;
varName;
varName;
var _uniq_var_456 = true;
_uniq_var_456;
var _uniq_var_457 = null;
_uniq_var_457;
var _uniq_var_458 = __eq__(expr[3], "{tmp}");
_uniq_var_458;
if ((_uniq_var_456 && _uniq_var_458)) {
(_uniq_var_456 = false);
(_uniq_var_457 = (varName = expr[0]));

};
_uniq_var_457;
return varName;
};_uniq_var_960.__lix_func__ = true;return _uniq_var_960;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_970 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_459 = getAtomicExprVarName(args[2][0]);
_uniq_var_459;
var varName = _uniq_var_459;
varName;
varName;
var _uniq_var_460 = (function () {var _uniq_var_963 = function (_uniq_var_961, _uniq_var_962) {
if (typeof _uniq_var_961.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_961.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_961.join.apply(_uniq_var_961, arguments);
} else if (_uniq_var_961.join !== undefined) {
if (_uniq_var_962 === undefined) {
return _uniq_var_961.join;
}
_uniq_var_961.join = _uniq_var_962;
}return _uniq_var_961;
};_uniq_var_963.__lix_func__ = true;return _uniq_var_963;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_460;
var _uniq_var_461 = (function () {var _uniq_var_966 = function (_uniq_var_964, _uniq_var_965) {
if (typeof _uniq_var_964.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_964.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_964.push.apply(_uniq_var_964, arguments);
} else if (_uniq_var_964.push !== undefined) {
if (_uniq_var_965 === undefined) {
return _uniq_var_964.push;
}
_uniq_var_964.push = _uniq_var_965;
}return _uniq_var_964;
};_uniq_var_966.__lix_func__ = true;return _uniq_var_966;})()(ret, _uniq_var_460);
_uniq_var_461;
_uniq_var_461;
var _uniq_var_462 = flattenDestructor(args[2], varName);
_uniq_var_462;
var _uniq_var_463 = (function () {var _uniq_var_969 = function (_uniq_var_967, _uniq_var_968) {
if (typeof _uniq_var_967.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_967.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_967.concat.apply(_uniq_var_967, arguments);
} else if (_uniq_var_967.concat !== undefined) {
if (_uniq_var_968 === undefined) {
return _uniq_var_967.concat;
}
_uniq_var_967.concat = _uniq_var_968;
}return _uniq_var_967;
};_uniq_var_969.__lix_func__ = true;return _uniq_var_969;})()(ret, _uniq_var_462);
_uniq_var_463;
(ret = _uniq_var_463);
return ret;
};_uniq_var_970.__lix_func__ = true;return _uniq_var_970;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_980 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_464 = getAtomicExprVarName(args[2][0]);
_uniq_var_464;
var varName = _uniq_var_464;
varName;
varName;
var _uniq_var_465 = (function () {var _uniq_var_973 = function (_uniq_var_971, _uniq_var_972) {
if (typeof _uniq_var_971.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_971.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_971.join.apply(_uniq_var_971, arguments);
} else if (_uniq_var_971.join !== undefined) {
if (_uniq_var_972 === undefined) {
return _uniq_var_971.join;
}
_uniq_var_971.join = _uniq_var_972;
}return _uniq_var_971;
};_uniq_var_973.__lix_func__ = true;return _uniq_var_973;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_465;
var _uniq_var_466 = (function () {var _uniq_var_976 = function (_uniq_var_974, _uniq_var_975) {
if (typeof _uniq_var_974.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_974.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_974.push.apply(_uniq_var_974, arguments);
} else if (_uniq_var_974.push !== undefined) {
if (_uniq_var_975 === undefined) {
return _uniq_var_974.push;
}
_uniq_var_974.push = _uniq_var_975;
}return _uniq_var_974;
};_uniq_var_976.__lix_func__ = true;return _uniq_var_976;})()(ret, _uniq_var_465);
_uniq_var_466;
_uniq_var_466;
var _uniq_var_467 = flattenDestructor(args[2], varName);
_uniq_var_467;
var _uniq_var_468 = (function () {var _uniq_var_979 = function (_uniq_var_977, _uniq_var_978) {
if (typeof _uniq_var_977.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_977.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_977.concat.apply(_uniq_var_977, arguments);
} else if (_uniq_var_977.concat !== undefined) {
if (_uniq_var_978 === undefined) {
return _uniq_var_977.concat;
}
_uniq_var_977.concat = _uniq_var_978;
}return _uniq_var_977;
};_uniq_var_979.__lix_func__ = true;return _uniq_var_979;})()(ret, _uniq_var_467);
_uniq_var_468;
(ret = _uniq_var_468);
return ret;
};_uniq_var_980.__lix_func__ = true;return _uniq_var_980;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_985 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_471 = foreach(args[2], (function () {var _uniq_var_984 = function (item, index) {var _uniq_var_469 = flattenDestructor(item, objName);
_uniq_var_469;
var _uniq_var_470 = (function () {var _uniq_var_983 = function (_uniq_var_981, _uniq_var_982) {
if (typeof _uniq_var_981.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_981.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_981.concat.apply(_uniq_var_981, arguments);
} else if (_uniq_var_981.concat !== undefined) {
if (_uniq_var_982 === undefined) {
return _uniq_var_981.concat;
}
_uniq_var_981.concat = _uniq_var_982;
}return _uniq_var_981;
};_uniq_var_983.__lix_func__ = true;return _uniq_var_983;})()(ret, _uniq_var_469);
_uniq_var_470;
return (ret = _uniq_var_470);
};_uniq_var_984.__lix_func__ = true;return _uniq_var_984;})());
_uniq_var_471;
_uniq_var_471;
return ret;
};_uniq_var_985.__lix_func__ = true;return _uniq_var_985;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenNotDestructor = (function () {var _uniq_var_986 = function (args, varName) {var _uniq_var_472 = flattenDestructor(args[2], varName);
_uniq_var_472;
return _uniq_var_472;
};_uniq_var_986.__lix_func__ = true;return _uniq_var_986;})();
flattenNotDestructor;
flattenNotDestructor;
var flattenAndDestructor = (function () {var _uniq_var_993 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_473 = flattenDestructor(args[2], varName);
_uniq_var_473;
var _uniq_var_474 = (function () {var _uniq_var_989 = function (_uniq_var_987, _uniq_var_988) {
if (typeof _uniq_var_987.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_987.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_987.concat.apply(_uniq_var_987, arguments);
} else if (_uniq_var_987.concat !== undefined) {
if (_uniq_var_988 === undefined) {
return _uniq_var_987.concat;
}
_uniq_var_987.concat = _uniq_var_988;
}return _uniq_var_987;
};_uniq_var_989.__lix_func__ = true;return _uniq_var_989;})()(ret, _uniq_var_473);
_uniq_var_474;
(ret = _uniq_var_474);
var _uniq_var_475 = flattenDestructor(args[3], varName);
_uniq_var_475;
var _uniq_var_476 = (function () {var _uniq_var_992 = function (_uniq_var_990, _uniq_var_991) {
if (typeof _uniq_var_990.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_990.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_990.concat.apply(_uniq_var_990, arguments);
} else if (_uniq_var_990.concat !== undefined) {
if (_uniq_var_991 === undefined) {
return _uniq_var_990.concat;
}
_uniq_var_990.concat = _uniq_var_991;
}return _uniq_var_990;
};_uniq_var_992.__lix_func__ = true;return _uniq_var_992;})()(ret, _uniq_var_475);
_uniq_var_476;
(ret = _uniq_var_476);
return ret;
};_uniq_var_993.__lix_func__ = true;return _uniq_var_993;})();
flattenAndDestructor;
flattenAndDestructor;
var flattenOrDestructor = (function () {var _uniq_var_1000 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_477 = flattenDestructor(args[2], varName);
_uniq_var_477;
var _uniq_var_478 = (function () {var _uniq_var_996 = function (_uniq_var_994, _uniq_var_995) {
if (typeof _uniq_var_994.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_994.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_994.concat.apply(_uniq_var_994, arguments);
} else if (_uniq_var_994.concat !== undefined) {
if (_uniq_var_995 === undefined) {
return _uniq_var_994.concat;
}
_uniq_var_994.concat = _uniq_var_995;
}return _uniq_var_994;
};_uniq_var_996.__lix_func__ = true;return _uniq_var_996;})()(ret, _uniq_var_477);
_uniq_var_478;
(ret = _uniq_var_478);
var _uniq_var_479 = flattenDestructor(args[3], varName);
_uniq_var_479;
var _uniq_var_480 = (function () {var _uniq_var_999 = function (_uniq_var_997, _uniq_var_998) {
if (typeof _uniq_var_997.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_997.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_997.concat.apply(_uniq_var_997, arguments);
} else if (_uniq_var_997.concat !== undefined) {
if (_uniq_var_998 === undefined) {
return _uniq_var_997.concat;
}
_uniq_var_997.concat = _uniq_var_998;
}return _uniq_var_997;
};_uniq_var_999.__lix_func__ = true;return _uniq_var_999;})()(ret, _uniq_var_479);
_uniq_var_480;
(ret = _uniq_var_480);
return ret;
};_uniq_var_1000.__lix_func__ = true;return _uniq_var_1000;})();
flattenOrDestructor;
flattenOrDestructor;
var flattenNamedDestructor = (function () {var _uniq_var_1010 = function (args, oldName) {var ret = [];
ret;
ret;
var _uniq_var_481 = getAtomicExprVarName(args[0]);
_uniq_var_481;
var varName = _uniq_var_481;
varName;
varName;
var _uniq_var_482 = true;
_uniq_var_482;
var _uniq_var_483 = null;
_uniq_var_483;
var _uniq_var_486 = __ne__(oldName, "arguments");
_uniq_var_486;
if ((_uniq_var_482 && _uniq_var_486)) {
(_uniq_var_482 = false);
var _uniq_var_484 = (function () {var _uniq_var_1003 = function (_uniq_var_1001, _uniq_var_1002) {
if (typeof _uniq_var_1001.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1001.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1001.join.apply(_uniq_var_1001, arguments);
} else if (_uniq_var_1001.join !== undefined) {
if (_uniq_var_1002 === undefined) {
return _uniq_var_1001.join;
}
_uniq_var_1001.join = _uniq_var_1002;
}return _uniq_var_1001;
};_uniq_var_1003.__lix_func__ = true;return _uniq_var_1003;})()(["var ", varName, " = ", oldName], "");
_uniq_var_484;
var _uniq_var_485 = (function () {var _uniq_var_1006 = function (_uniq_var_1004, _uniq_var_1005) {
if (typeof _uniq_var_1004.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1004.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1004.push.apply(_uniq_var_1004, arguments);
} else if (_uniq_var_1004.push !== undefined) {
if (_uniq_var_1005 === undefined) {
return _uniq_var_1004.push;
}
_uniq_var_1004.push = _uniq_var_1005;
}return _uniq_var_1004;
};_uniq_var_1006.__lix_func__ = true;return _uniq_var_1006;})()(ret, _uniq_var_484);
_uniq_var_485;
(_uniq_var_483 = _uniq_var_485);

};
_uniq_var_483;
var _uniq_var_487 = flattenDestructor(args[2], varName);
_uniq_var_487;
var _uniq_var_488 = (function () {var _uniq_var_1009 = function (_uniq_var_1007, _uniq_var_1008) {
if (typeof _uniq_var_1007.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1007.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1007.concat.apply(_uniq_var_1007, arguments);
} else if (_uniq_var_1007.concat !== undefined) {
if (_uniq_var_1008 === undefined) {
return _uniq_var_1007.concat;
}
_uniq_var_1007.concat = _uniq_var_1008;
}return _uniq_var_1007;
};_uniq_var_1009.__lix_func__ = true;return _uniq_var_1009;})()(ret, _uniq_var_487);
_uniq_var_488;
(ret = _uniq_var_488);
return ret;
};_uniq_var_1010.__lix_func__ = true;return _uniq_var_1010;})();
flattenNamedDestructor;
flattenNamedDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_1021 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_497 = foreach(args[2], (function () {var _uniq_var_1020 = function (item, index) {var _uniq_var_489 = getAtomicExprVarName(item[0]);
_uniq_var_489;
var varName = _uniq_var_489;
varName;
varName;
var _uniq_var_490 = true;
_uniq_var_490;
var _uniq_var_491 = null;
_uniq_var_491;
var _uniq_var_494 = __ne__(arrayName, 'arguments');
_uniq_var_494;
if ((_uniq_var_490 && _uniq_var_494)) {
(_uniq_var_490 = false);
var _uniq_var_492 = (function () {var _uniq_var_1013 = function (_uniq_var_1011, _uniq_var_1012) {
if (typeof _uniq_var_1011.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1011.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1011.join.apply(_uniq_var_1011, arguments);
} else if (_uniq_var_1011.join !== undefined) {
if (_uniq_var_1012 === undefined) {
return _uniq_var_1011.join;
}
_uniq_var_1011.join = _uniq_var_1012;
}return _uniq_var_1011;
};_uniq_var_1013.__lix_func__ = true;return _uniq_var_1013;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_492;
var _uniq_var_493 = (function () {var _uniq_var_1016 = function (_uniq_var_1014, _uniq_var_1015) {
if (typeof _uniq_var_1014.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1014.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1014.push.apply(_uniq_var_1014, arguments);
} else if (_uniq_var_1014.push !== undefined) {
if (_uniq_var_1015 === undefined) {
return _uniq_var_1014.push;
}
_uniq_var_1014.push = _uniq_var_1015;
}return _uniq_var_1014;
};_uniq_var_1016.__lix_func__ = true;return _uniq_var_1016;})()(ret, _uniq_var_492);
_uniq_var_493;
(_uniq_var_491 = _uniq_var_493);

};
_uniq_var_491;
var _uniq_var_495 = flattenDestructor(item, varName);
_uniq_var_495;
var _uniq_var_496 = (function () {var _uniq_var_1019 = function (_uniq_var_1017, _uniq_var_1018) {
if (typeof _uniq_var_1017.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1017.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1017.concat.apply(_uniq_var_1017, arguments);
} else if (_uniq_var_1017.concat !== undefined) {
if (_uniq_var_1018 === undefined) {
return _uniq_var_1017.concat;
}
_uniq_var_1017.concat = _uniq_var_1018;
}return _uniq_var_1017;
};_uniq_var_1019.__lix_func__ = true;return _uniq_var_1019;})()(ret, _uniq_var_495);
_uniq_var_496;
return (ret = _uniq_var_496);
};_uniq_var_1020.__lix_func__ = true;return _uniq_var_1020;})());
_uniq_var_497;
_uniq_var_497;
return ret;
};_uniq_var_1021.__lix_func__ = true;return _uniq_var_1021;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_1047 = function (args, arrayName, def) {var len = args[2].length;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_498 = true;
_uniq_var_498;
var _uniq_var_499 = null;
_uniq_var_499;
var _uniq_var_502 = __ne__(arrayName, "arguments");
_uniq_var_502;
if ((_uniq_var_498 && _uniq_var_502)) {
(_uniq_var_498 = false);
var _uniq_var_500 = (function () {var _uniq_var_1024 = function (_uniq_var_1022, _uniq_var_1023) {
if (typeof _uniq_var_1022.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1022.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1022.join.apply(_uniq_var_1022, arguments);
} else if (_uniq_var_1022.join !== undefined) {
if (_uniq_var_1023 === undefined) {
return _uniq_var_1022.join;
}
_uniq_var_1022.join = _uniq_var_1023;
}return _uniq_var_1022;
};_uniq_var_1024.__lix_func__ = true;return _uniq_var_1024;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_500;
var _uniq_var_501 = (function () {var _uniq_var_1027 = function (_uniq_var_1025, _uniq_var_1026) {
if (typeof _uniq_var_1025.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1025.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1025.push.apply(_uniq_var_1025, arguments);
} else if (_uniq_var_1025.push !== undefined) {
if (_uniq_var_1026 === undefined) {
return _uniq_var_1025.push;
}
_uniq_var_1025.push = _uniq_var_1026;
}return _uniq_var_1025;
};_uniq_var_1027.__lix_func__ = true;return _uniq_var_1027;})()(ret, _uniq_var_500);
_uniq_var_501;
(_uniq_var_499 = _uniq_var_501);

};
_uniq_var_499;
var _uniq_var_503 = (function () {var _uniq_var_1030 = function (_uniq_var_1028, _uniq_var_1029) {
if (typeof _uniq_var_1028.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1028.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1028.join.apply(_uniq_var_1028, arguments);
} else if (_uniq_var_1028.join !== undefined) {
if (_uniq_var_1029 === undefined) {
return _uniq_var_1028.join;
}
_uniq_var_1028.join = _uniq_var_1029;
}return _uniq_var_1028;
};_uniq_var_1030.__lix_func__ = true;return _uniq_var_1030;})()([arrayName, ".length == ", len], "");
_uniq_var_503;
var _uniq_var_504 = (function () {var _uniq_var_1033 = function (_uniq_var_1031, _uniq_var_1032) {
if (typeof _uniq_var_1031.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1031.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1031.push.apply(_uniq_var_1031, arguments);
} else if (_uniq_var_1031.push !== undefined) {
if (_uniq_var_1032 === undefined) {
return _uniq_var_1031.push;
}
_uniq_var_1031.push = _uniq_var_1032;
}return _uniq_var_1031;
};_uniq_var_1033.__lix_func__ = true;return _uniq_var_1033;})()(ret, _uniq_var_503);
_uniq_var_504;
_uniq_var_504;
var _uniq_var_512 = foreach(args[2], (function () {var _uniq_var_1043 = function (item, index) {var _uniq_var_505 = call(def.newVar);
_uniq_var_505;
var newVar = _uniq_var_505;
newVar;
newVar;
var _uniq_var_506 = (function () {var _uniq_var_1036 = function (_uniq_var_1034, _uniq_var_1035) {
if (typeof _uniq_var_1034.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1034.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1034.join.apply(_uniq_var_1034, arguments);
} else if (_uniq_var_1034.join !== undefined) {
if (_uniq_var_1035 === undefined) {
return _uniq_var_1034.join;
}
_uniq_var_1034.join = _uniq_var_1035;
}return _uniq_var_1034;
};_uniq_var_1036.__lix_func__ = true;return _uniq_var_1036;})()([arrayName, "[", index, "]"], "");
_uniq_var_506;
var expr = _uniq_var_506;
expr;
expr;
var _uniq_var_507 = flattenCondition(item, newVar, def);
_uniq_var_507;
var cond = _uniq_var_507;
cond;
cond;
var _uniq_var_508 = true;
_uniq_var_508;
var _uniq_var_509 = null;
_uniq_var_509;
if ((_uniq_var_508 && cond)) {
(_uniq_var_508 = false);
var _uniq_var_510 = (function () {var _uniq_var_1039 = function (_uniq_var_1037, _uniq_var_1038) {
if (typeof _uniq_var_1037.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1037.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1037.join.apply(_uniq_var_1037, arguments);
} else if (_uniq_var_1037.join !== undefined) {
if (_uniq_var_1038 === undefined) {
return _uniq_var_1037.join;
}
_uniq_var_1037.join = _uniq_var_1038;
}return _uniq_var_1037;
};_uniq_var_1039.__lix_func__ = true;return _uniq_var_1039;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_510;
var _uniq_var_511 = (function () {var _uniq_var_1042 = function (_uniq_var_1040, _uniq_var_1041) {
if (typeof _uniq_var_1040.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1040.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1040.push.apply(_uniq_var_1040, arguments);
} else if (_uniq_var_1040.push !== undefined) {
if (_uniq_var_1041 === undefined) {
return _uniq_var_1040.push;
}
_uniq_var_1040.push = _uniq_var_1041;
}return _uniq_var_1040;
};_uniq_var_1042.__lix_func__ = true;return _uniq_var_1042;})()(ret, _uniq_var_510);
_uniq_var_511;
(_uniq_var_509 = _uniq_var_511);

};
return _uniq_var_509;
};_uniq_var_1043.__lix_func__ = true;return _uniq_var_1043;})());
_uniq_var_512;
_uniq_var_512;
var _uniq_var_513 = (function () {var _uniq_var_1046 = function (_uniq_var_1044, _uniq_var_1045) {
if (typeof _uniq_var_1044.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1044.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1044.join.apply(_uniq_var_1044, arguments);
} else if (_uniq_var_1044.join !== undefined) {
if (_uniq_var_1045 === undefined) {
return _uniq_var_1044.join;
}
_uniq_var_1044.join = _uniq_var_1045;
}return _uniq_var_1044;
};_uniq_var_1046.__lix_func__ = true;return _uniq_var_1046;})()(ret, " && ");
_uniq_var_513;
return _uniq_var_513;
};_uniq_var_1047.__lix_func__ = true;return _uniq_var_1047;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenIndexCondition = (function () {var _uniq_var_1054 = function (args, objectName, def) {var _uniq_var_514 = call(def.newVar);
_uniq_var_514;
var newVar = _uniq_var_514;
newVar;
newVar;
var _uniq_var_515 = (function () {var _uniq_var_1050 = function (_uniq_var_1048, _uniq_var_1049) {
if (typeof _uniq_var_1048.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1048.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1048.join.apply(_uniq_var_1048, arguments);
} else if (_uniq_var_1048.join !== undefined) {
if (_uniq_var_1049 === undefined) {
return _uniq_var_1048.join;
}
_uniq_var_1048.join = _uniq_var_1049;
}return _uniq_var_1048;
};_uniq_var_1050.__lix_func__ = true;return _uniq_var_1050;})()([objectName, "[", args[0], "]"], "");
_uniq_var_515;
var expr = _uniq_var_515;
expr;
expr;
var _uniq_var_516 = flattenCondition(args[2], newVar, def);
_uniq_var_516;
var ret = _uniq_var_516;
ret;
ret;
var _uniq_var_517 = (function () {var _uniq_var_1053 = function (_uniq_var_1051, _uniq_var_1052) {
if (typeof _uniq_var_1051.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1051.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1051.join.apply(_uniq_var_1051, arguments);
} else if (_uniq_var_1051.join !== undefined) {
if (_uniq_var_1052 === undefined) {
return _uniq_var_1051.join;
}
_uniq_var_1051.join = _uniq_var_1052;
}return _uniq_var_1051;
};_uniq_var_1053.__lix_func__ = true;return _uniq_var_1053;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_517;
return _uniq_var_517;
};_uniq_var_1054.__lix_func__ = true;return _uniq_var_1054;})();
flattenIndexCondition;
flattenIndexCondition;
var flattenFieldCondition = (function () {var _uniq_var_1061 = function (args, objectName, def) {var _uniq_var_518 = call(def.newVar);
_uniq_var_518;
var newVar = _uniq_var_518;
newVar;
newVar;
var _uniq_var_519 = (function () {var _uniq_var_1057 = function (_uniq_var_1055, _uniq_var_1056) {
if (typeof _uniq_var_1055.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1055.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1055.join.apply(_uniq_var_1055, arguments);
} else if (_uniq_var_1055.join !== undefined) {
if (_uniq_var_1056 === undefined) {
return _uniq_var_1055.join;
}
_uniq_var_1055.join = _uniq_var_1056;
}return _uniq_var_1055;
};_uniq_var_1057.__lix_func__ = true;return _uniq_var_1057;})()([objectName, ".", args[0]], "");
_uniq_var_519;
var expr = _uniq_var_519;
expr;
expr;
var _uniq_var_520 = flattenCondition(args[2], newVar, def);
_uniq_var_520;
var ret = _uniq_var_520;
ret;
ret;
var _uniq_var_521 = (function () {var _uniq_var_1060 = function (_uniq_var_1058, _uniq_var_1059) {
if (typeof _uniq_var_1058.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1058.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1058.join.apply(_uniq_var_1058, arguments);
} else if (_uniq_var_1058.join !== undefined) {
if (_uniq_var_1059 === undefined) {
return _uniq_var_1058.join;
}
_uniq_var_1058.join = _uniq_var_1059;
}return _uniq_var_1058;
};_uniq_var_1060.__lix_func__ = true;return _uniq_var_1060;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_521;
return _uniq_var_521;
};_uniq_var_1061.__lix_func__ = true;return _uniq_var_1061;})();
flattenFieldCondition;
flattenFieldCondition;
var flattenObjectCondition = (function () {var _uniq_var_1075 = function (args, objectName, def) {var ret = [];
ret;
ret;
var _uniq_var_522 = true;
_uniq_var_522;
var _uniq_var_523 = null;
_uniq_var_523;
var _uniq_var_525 = __ne__(objectName, "arguments");
_uniq_var_525;
if ((_uniq_var_522 && _uniq_var_525)) {
(_uniq_var_522 = false);
var _uniq_var_524 = (function () {var _uniq_var_1064 = function (_uniq_var_1062, _uniq_var_1063) {
if (typeof _uniq_var_1062.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1062.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1062.push.apply(_uniq_var_1062, arguments);
} else if (_uniq_var_1062.push !== undefined) {
if (_uniq_var_1063 === undefined) {
return _uniq_var_1062.push;
}
_uniq_var_1062.push = _uniq_var_1063;
}return _uniq_var_1062;
};_uniq_var_1064.__lix_func__ = true;return _uniq_var_1064;})()(ret, objectName);
_uniq_var_524;
(_uniq_var_523 = _uniq_var_524);

};
_uniq_var_523;
var _uniq_var_531 = foreach(args[2], (function () {var _uniq_var_1071 = function (item, index) {var _uniq_var_526 = flattenCondition(item, objectName, def);
_uniq_var_526;
var cond = _uniq_var_526;
cond;
cond;
var _uniq_var_527 = true;
_uniq_var_527;
var _uniq_var_528 = null;
_uniq_var_528;
if ((_uniq_var_527 && cond)) {
(_uniq_var_527 = false);
var _uniq_var_529 = (function () {var _uniq_var_1067 = function (_uniq_var_1065, _uniq_var_1066) {
if (typeof _uniq_var_1065.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1065.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1065.join.apply(_uniq_var_1065, arguments);
} else if (_uniq_var_1065.join !== undefined) {
if (_uniq_var_1066 === undefined) {
return _uniq_var_1065.join;
}
_uniq_var_1065.join = _uniq_var_1066;
}return _uniq_var_1065;
};_uniq_var_1067.__lix_func__ = true;return _uniq_var_1067;})()(["(", cond, ")"], "");
_uniq_var_529;
var _uniq_var_530 = (function () {var _uniq_var_1070 = function (_uniq_var_1068, _uniq_var_1069) {
if (typeof _uniq_var_1068.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1068.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1068.push.apply(_uniq_var_1068, arguments);
} else if (_uniq_var_1068.push !== undefined) {
if (_uniq_var_1069 === undefined) {
return _uniq_var_1068.push;
}
_uniq_var_1068.push = _uniq_var_1069;
}return _uniq_var_1068;
};_uniq_var_1070.__lix_func__ = true;return _uniq_var_1070;})()(ret, _uniq_var_529);
_uniq_var_530;
(_uniq_var_528 = _uniq_var_530);

};
return _uniq_var_528;
};_uniq_var_1071.__lix_func__ = true;return _uniq_var_1071;})());
_uniq_var_531;
_uniq_var_531;
var _uniq_var_532 = (function () {var _uniq_var_1074 = function (_uniq_var_1072, _uniq_var_1073) {
if (typeof _uniq_var_1072.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1072.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1072.join.apply(_uniq_var_1072, arguments);
} else if (_uniq_var_1072.join !== undefined) {
if (_uniq_var_1073 === undefined) {
return _uniq_var_1072.join;
}
_uniq_var_1072.join = _uniq_var_1073;
}return _uniq_var_1072;
};_uniq_var_1074.__lix_func__ = true;return _uniq_var_1074;})()(ret, " && ");
_uniq_var_532;
return _uniq_var_532;
};_uniq_var_1075.__lix_func__ = true;return _uniq_var_1075;})();
flattenObjectCondition;
flattenObjectCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_1111 = function (args, arrayName, def) {var _uniq_var_533 = __add__(args[2].length, args[4].length);
_uniq_var_533;
var len = _uniq_var_533;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_534 = true;
_uniq_var_534;
var _uniq_var_535 = null;
_uniq_var_535;
var _uniq_var_538 = __ne__(arrayName, "arguments");
_uniq_var_538;
if ((_uniq_var_534 && _uniq_var_538)) {
(_uniq_var_534 = false);
var _uniq_var_536 = (function () {var _uniq_var_1078 = function (_uniq_var_1076, _uniq_var_1077) {
if (typeof _uniq_var_1076.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1076.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1076.join.apply(_uniq_var_1076, arguments);
} else if (_uniq_var_1076.join !== undefined) {
if (_uniq_var_1077 === undefined) {
return _uniq_var_1076.join;
}
_uniq_var_1076.join = _uniq_var_1077;
}return _uniq_var_1076;
};_uniq_var_1078.__lix_func__ = true;return _uniq_var_1078;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_536;
var _uniq_var_537 = (function () {var _uniq_var_1081 = function (_uniq_var_1079, _uniq_var_1080) {
if (typeof _uniq_var_1079.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1079.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1079.push.apply(_uniq_var_1079, arguments);
} else if (_uniq_var_1079.push !== undefined) {
if (_uniq_var_1080 === undefined) {
return _uniq_var_1079.push;
}
_uniq_var_1079.push = _uniq_var_1080;
}return _uniq_var_1079;
};_uniq_var_1081.__lix_func__ = true;return _uniq_var_1081;})()(ret, _uniq_var_536);
_uniq_var_537;
(_uniq_var_535 = _uniq_var_537);

};
_uniq_var_535;
var _uniq_var_539 = true;
_uniq_var_539;
var _uniq_var_540 = null;
_uniq_var_540;
var _uniq_var_543 = __gt__(len, 0);
_uniq_var_543;
if ((_uniq_var_539 && _uniq_var_543)) {
(_uniq_var_539 = false);
var _uniq_var_541 = (function () {var _uniq_var_1084 = function (_uniq_var_1082, _uniq_var_1083) {
if (typeof _uniq_var_1082.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1082.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1082.join.apply(_uniq_var_1082, arguments);
} else if (_uniq_var_1082.join !== undefined) {
if (_uniq_var_1083 === undefined) {
return _uniq_var_1082.join;
}
_uniq_var_1082.join = _uniq_var_1083;
}return _uniq_var_1082;
};_uniq_var_1084.__lix_func__ = true;return _uniq_var_1084;})()([arrayName, ".length >= ", len], "");
_uniq_var_541;
var _uniq_var_542 = (function () {var _uniq_var_1087 = function (_uniq_var_1085, _uniq_var_1086) {
if (typeof _uniq_var_1085.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1085.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1085.push.apply(_uniq_var_1085, arguments);
} else if (_uniq_var_1085.push !== undefined) {
if (_uniq_var_1086 === undefined) {
return _uniq_var_1085.push;
}
_uniq_var_1085.push = _uniq_var_1086;
}return _uniq_var_1085;
};_uniq_var_1087.__lix_func__ = true;return _uniq_var_1087;})()(ret, _uniq_var_541);
_uniq_var_542;
(_uniq_var_540 = _uniq_var_542);

};
_uniq_var_540;
var _uniq_var_551 = foreach(args[2], (function () {var _uniq_var_1097 = function (item, index) {var _uniq_var_544 = call(def.newVar);
_uniq_var_544;
var newVar = _uniq_var_544;
newVar;
newVar;
var _uniq_var_545 = (function () {var _uniq_var_1090 = function (_uniq_var_1088, _uniq_var_1089) {
if (typeof _uniq_var_1088.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1088.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1088.join.apply(_uniq_var_1088, arguments);
} else if (_uniq_var_1088.join !== undefined) {
if (_uniq_var_1089 === undefined) {
return _uniq_var_1088.join;
}
_uniq_var_1088.join = _uniq_var_1089;
}return _uniq_var_1088;
};_uniq_var_1090.__lix_func__ = true;return _uniq_var_1090;})()([arrayName, "[", index, "]"], "");
_uniq_var_545;
var expr = _uniq_var_545;
expr;
expr;
var _uniq_var_546 = flattenCondition(item, newVar, def);
_uniq_var_546;
var cond = _uniq_var_546;
cond;
cond;
var _uniq_var_547 = true;
_uniq_var_547;
var _uniq_var_548 = null;
_uniq_var_548;
if ((_uniq_var_547 && cond)) {
(_uniq_var_547 = false);
var _uniq_var_549 = (function () {var _uniq_var_1093 = function (_uniq_var_1091, _uniq_var_1092) {
if (typeof _uniq_var_1091.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1091.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1091.join.apply(_uniq_var_1091, arguments);
} else if (_uniq_var_1091.join !== undefined) {
if (_uniq_var_1092 === undefined) {
return _uniq_var_1091.join;
}
_uniq_var_1091.join = _uniq_var_1092;
}return _uniq_var_1091;
};_uniq_var_1093.__lix_func__ = true;return _uniq_var_1093;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_549;
var _uniq_var_550 = (function () {var _uniq_var_1096 = function (_uniq_var_1094, _uniq_var_1095) {
if (typeof _uniq_var_1094.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1094.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1094.push.apply(_uniq_var_1094, arguments);
} else if (_uniq_var_1094.push !== undefined) {
if (_uniq_var_1095 === undefined) {
return _uniq_var_1094.push;
}
_uniq_var_1094.push = _uniq_var_1095;
}return _uniq_var_1094;
};_uniq_var_1096.__lix_func__ = true;return _uniq_var_1096;})()(ret, _uniq_var_549);
_uniq_var_550;
(_uniq_var_548 = _uniq_var_550);

};
return _uniq_var_548;
};_uniq_var_1097.__lix_func__ = true;return _uniq_var_1097;})());
_uniq_var_551;
_uniq_var_551;
var _uniq_var_560 = foreach(args[4], (function () {var _uniq_var_1107 = function (item, index) {var _uniq_var_552 = call(def.newVar);
_uniq_var_552;
var newVar = _uniq_var_552;
newVar;
newVar;
var _uniq_var_553 = __sub__(args[4].length, index);
_uniq_var_553;
var _uniq_var_554 = (function () {var _uniq_var_1100 = function (_uniq_var_1098, _uniq_var_1099) {
if (typeof _uniq_var_1098.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1098.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1098.join.apply(_uniq_var_1098, arguments);
} else if (_uniq_var_1098.join !== undefined) {
if (_uniq_var_1099 === undefined) {
return _uniq_var_1098.join;
}
_uniq_var_1098.join = _uniq_var_1099;
}return _uniq_var_1098;
};_uniq_var_1100.__lix_func__ = true;return _uniq_var_1100;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_553, "]"], "");
_uniq_var_554;
var expr = _uniq_var_554;
expr;
expr;
var _uniq_var_555 = flattenCondition(item, newVar, def);
_uniq_var_555;
var cond = _uniq_var_555;
cond;
cond;
var _uniq_var_556 = true;
_uniq_var_556;
var _uniq_var_557 = null;
_uniq_var_557;
if ((_uniq_var_556 && cond)) {
(_uniq_var_556 = false);
var _uniq_var_558 = (function () {var _uniq_var_1103 = function (_uniq_var_1101, _uniq_var_1102) {
if (typeof _uniq_var_1101.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1101.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1101.join.apply(_uniq_var_1101, arguments);
} else if (_uniq_var_1101.join !== undefined) {
if (_uniq_var_1102 === undefined) {
return _uniq_var_1101.join;
}
_uniq_var_1101.join = _uniq_var_1102;
}return _uniq_var_1101;
};_uniq_var_1103.__lix_func__ = true;return _uniq_var_1103;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_558;
var _uniq_var_559 = (function () {var _uniq_var_1106 = function (_uniq_var_1104, _uniq_var_1105) {
if (typeof _uniq_var_1104.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1104.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1104.push.apply(_uniq_var_1104, arguments);
} else if (_uniq_var_1104.push !== undefined) {
if (_uniq_var_1105 === undefined) {
return _uniq_var_1104.push;
}
_uniq_var_1104.push = _uniq_var_1105;
}return _uniq_var_1104;
};_uniq_var_1106.__lix_func__ = true;return _uniq_var_1106;})()(ret, _uniq_var_558);
_uniq_var_559;
(_uniq_var_557 = _uniq_var_559);

};
return _uniq_var_557;
};_uniq_var_1107.__lix_func__ = true;return _uniq_var_1107;})());
_uniq_var_560;
_uniq_var_560;
var _uniq_var_561 = (function () {var _uniq_var_1110 = function (_uniq_var_1108, _uniq_var_1109) {
if (typeof _uniq_var_1108.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1108.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1108.join.apply(_uniq_var_1108, arguments);
} else if (_uniq_var_1108.join !== undefined) {
if (_uniq_var_1109 === undefined) {
return _uniq_var_1108.join;
}
_uniq_var_1108.join = _uniq_var_1109;
}return _uniq_var_1108;
};_uniq_var_1110.__lix_func__ = true;return _uniq_var_1110;})()(ret, " && ");
_uniq_var_561;
return _uniq_var_561;
};_uniq_var_1111.__lix_func__ = true;return _uniq_var_1111;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_1138 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_570 = foreach(args[2], (function () {var _uniq_var_1121 = function (item, index) {var _uniq_var_562 = getAtomicExprVarName(item[0]);
_uniq_var_562;
var varName = _uniq_var_562;
varName;
varName;
var _uniq_var_563 = true;
_uniq_var_563;
var _uniq_var_564 = null;
_uniq_var_564;
var _uniq_var_567 = __ne__(arrayName, "arguments");
_uniq_var_567;
if ((_uniq_var_563 && _uniq_var_567)) {
(_uniq_var_563 = false);
var _uniq_var_565 = (function () {var _uniq_var_1114 = function (_uniq_var_1112, _uniq_var_1113) {
if (typeof _uniq_var_1112.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1112.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1112.join.apply(_uniq_var_1112, arguments);
} else if (_uniq_var_1112.join !== undefined) {
if (_uniq_var_1113 === undefined) {
return _uniq_var_1112.join;
}
_uniq_var_1112.join = _uniq_var_1113;
}return _uniq_var_1112;
};_uniq_var_1114.__lix_func__ = true;return _uniq_var_1114;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_565;
var _uniq_var_566 = (function () {var _uniq_var_1117 = function (_uniq_var_1115, _uniq_var_1116) {
if (typeof _uniq_var_1115.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1115.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1115.push.apply(_uniq_var_1115, arguments);
} else if (_uniq_var_1115.push !== undefined) {
if (_uniq_var_1116 === undefined) {
return _uniq_var_1115.push;
}
_uniq_var_1115.push = _uniq_var_1116;
}return _uniq_var_1115;
};_uniq_var_1117.__lix_func__ = true;return _uniq_var_1117;})()(ret, _uniq_var_565);
_uniq_var_566;
(_uniq_var_564 = _uniq_var_566);

};
_uniq_var_564;
var _uniq_var_568 = flattenDestructor(item, varName);
_uniq_var_568;
var _uniq_var_569 = (function () {var _uniq_var_1120 = function (_uniq_var_1118, _uniq_var_1119) {
if (typeof _uniq_var_1118.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1118.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1118.concat.apply(_uniq_var_1118, arguments);
} else if (_uniq_var_1118.concat !== undefined) {
if (_uniq_var_1119 === undefined) {
return _uniq_var_1118.concat;
}
_uniq_var_1118.concat = _uniq_var_1119;
}return _uniq_var_1118;
};_uniq_var_1120.__lix_func__ = true;return _uniq_var_1120;})()(ret, _uniq_var_568);
_uniq_var_569;
return (ret = _uniq_var_569);
};_uniq_var_1121.__lix_func__ = true;return _uniq_var_1121;})());
_uniq_var_570;
_uniq_var_570;
var _uniq_var_571 = true;
_uniq_var_571;
var _uniq_var_572 = null;
_uniq_var_572;
var _uniq_var_576 = __eq__(args[3][1], "{va_arg}");
_uniq_var_576;
if ((_uniq_var_571 && _uniq_var_576)) {
(_uniq_var_571 = false);
var _uniq_var_573 = getAtomicExprVarName(args[3][0]);
_uniq_var_573;
var varName = _uniq_var_573;
varName;
varName;
var _uniq_var_574 = (function () {var _uniq_var_1124 = function (_uniq_var_1122, _uniq_var_1123) {
if (typeof _uniq_var_1122.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1122.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1122.join.apply(_uniq_var_1122, arguments);
} else if (_uniq_var_1122.join !== undefined) {
if (_uniq_var_1123 === undefined) {
return _uniq_var_1122.join;
}
_uniq_var_1122.join = _uniq_var_1123;
}return _uniq_var_1122;
};_uniq_var_1124.__lix_func__ = true;return _uniq_var_1124;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_574;
var _uniq_var_575 = (function () {var _uniq_var_1127 = function (_uniq_var_1125, _uniq_var_1126) {
if (typeof _uniq_var_1125.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1125.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1125.push.apply(_uniq_var_1125, arguments);
} else if (_uniq_var_1125.push !== undefined) {
if (_uniq_var_1126 === undefined) {
return _uniq_var_1125.push;
}
_uniq_var_1125.push = _uniq_var_1126;
}return _uniq_var_1125;
};_uniq_var_1127.__lix_func__ = true;return _uniq_var_1127;})()(ret, _uniq_var_574);
_uniq_var_575;
(_uniq_var_572 = _uniq_var_575);

};
_uniq_var_572;
var _uniq_var_583 = foreach(args[4], (function () {var _uniq_var_1137 = function (item, index) {var _uniq_var_577 = getAtomicExprVarName(item[0]);
_uniq_var_577;
var varName = _uniq_var_577;
varName;
varName;
var _uniq_var_578 = __sub__(tail_lenth, index);
_uniq_var_578;
var _uniq_var_579 = (function () {var _uniq_var_1130 = function (_uniq_var_1128, _uniq_var_1129) {
if (typeof _uniq_var_1128.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1128.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1128.join.apply(_uniq_var_1128, arguments);
} else if (_uniq_var_1128.join !== undefined) {
if (_uniq_var_1129 === undefined) {
return _uniq_var_1128.join;
}
_uniq_var_1128.join = _uniq_var_1129;
}return _uniq_var_1128;
};_uniq_var_1130.__lix_func__ = true;return _uniq_var_1130;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", arrayName, ".length - ", _uniq_var_578, "] : undefined"], "");
_uniq_var_579;
var _uniq_var_580 = (function () {var _uniq_var_1133 = function (_uniq_var_1131, _uniq_var_1132) {
if (typeof _uniq_var_1131.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1131.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1131.push.apply(_uniq_var_1131, arguments);
} else if (_uniq_var_1131.push !== undefined) {
if (_uniq_var_1132 === undefined) {
return _uniq_var_1131.push;
}
_uniq_var_1131.push = _uniq_var_1132;
}return _uniq_var_1131;
};_uniq_var_1133.__lix_func__ = true;return _uniq_var_1133;})()(ret, _uniq_var_579);
_uniq_var_580;
_uniq_var_580;
var _uniq_var_581 = flattenDestructor(item, varName);
_uniq_var_581;
var _uniq_var_582 = (function () {var _uniq_var_1136 = function (_uniq_var_1134, _uniq_var_1135) {
if (typeof _uniq_var_1134.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1134.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1134.concat.apply(_uniq_var_1134, arguments);
} else if (_uniq_var_1134.concat !== undefined) {
if (_uniq_var_1135 === undefined) {
return _uniq_var_1134.concat;
}
_uniq_var_1134.concat = _uniq_var_1135;
}return _uniq_var_1134;
};_uniq_var_1136.__lix_func__ = true;return _uniq_var_1136;})()(ret, _uniq_var_581);
_uniq_var_582;
return (ret = _uniq_var_582);
};_uniq_var_1137.__lix_func__ = true;return _uniq_var_1137;})());
_uniq_var_583;
_uniq_var_583;
return ret;
};_uniq_var_1138.__lix_func__ = true;return _uniq_var_1138;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_1139 = function (args, varName, def) {return 1;
};_uniq_var_1139.__lix_func__ = true;return _uniq_var_1139;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenLiteralArgCondition = (function () {var _uniq_var_1143 = function (args, varName, def) {var _uniq_var_584 = (function () {var _uniq_var_1142 = function (_uniq_var_1140, _uniq_var_1141) {
if (typeof _uniq_var_1140.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1140.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1140.join.apply(_uniq_var_1140, arguments);
} else if (_uniq_var_1140.join !== undefined) {
if (_uniq_var_1141 === undefined) {
return _uniq_var_1140.join;
}
_uniq_var_1140.join = _uniq_var_1141;
}return _uniq_var_1140;
};_uniq_var_1142.__lix_func__ = true;return _uniq_var_1142;})()([varName, " === ", args[2]], "");
_uniq_var_584;
return _uniq_var_584;
};_uniq_var_1143.__lix_func__ = true;return _uniq_var_1143;})();
flattenLiteralArgCondition;
flattenLiteralArgCondition;
var flattenLTArgCondition = (function () {var _uniq_var_1147 = function (args, varName, def) {var _uniq_var_585 = (function () {var _uniq_var_1146 = function (_uniq_var_1144, _uniq_var_1145) {
if (typeof _uniq_var_1144.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1144.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1144.join.apply(_uniq_var_1144, arguments);
} else if (_uniq_var_1144.join !== undefined) {
if (_uniq_var_1145 === undefined) {
return _uniq_var_1144.join;
}
_uniq_var_1144.join = _uniq_var_1145;
}return _uniq_var_1144;
};_uniq_var_1146.__lix_func__ = true;return _uniq_var_1146;})()(["typeof(", varName, ") == 'number' && ", varName, " < ", args[2]], "");
_uniq_var_585;
return _uniq_var_585;
};_uniq_var_1147.__lix_func__ = true;return _uniq_var_1147;})();
flattenLTArgCondition;
flattenLTArgCondition;
var flattenBetweenArgCondition = (function () {var _uniq_var_1151 = function (args, varName, def) {var _uniq_var_586 = (function () {var _uniq_var_1150 = function (_uniq_var_1148, _uniq_var_1149) {
if (typeof _uniq_var_1148.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1148.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1148.join.apply(_uniq_var_1148, arguments);
} else if (_uniq_var_1148.join !== undefined) {
if (_uniq_var_1149 === undefined) {
return _uniq_var_1148.join;
}
_uniq_var_1148.join = _uniq_var_1149;
}return _uniq_var_1148;
};_uniq_var_1150.__lix_func__ = true;return _uniq_var_1150;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2], " && ", varName, " < ", args[3]], "");
_uniq_var_586;
return _uniq_var_586;
};_uniq_var_1151.__lix_func__ = true;return _uniq_var_1151;})();
flattenBetweenArgCondition;
flattenBetweenArgCondition;
var flattenGEArgCondition = (function () {var _uniq_var_1155 = function (args, varName, def) {var _uniq_var_587 = (function () {var _uniq_var_1154 = function (_uniq_var_1152, _uniq_var_1153) {
if (typeof _uniq_var_1152.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1152.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1152.join.apply(_uniq_var_1152, arguments);
} else if (_uniq_var_1152.join !== undefined) {
if (_uniq_var_1153 === undefined) {
return _uniq_var_1152.join;
}
_uniq_var_1152.join = _uniq_var_1153;
}return _uniq_var_1152;
};_uniq_var_1154.__lix_func__ = true;return _uniq_var_1154;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2]], "");
_uniq_var_587;
return _uniq_var_587;
};_uniq_var_1155.__lix_func__ = true;return _uniq_var_1155;})();
flattenGEArgCondition;
flattenGEArgCondition;
var flattenNamedArgCondition = (function () {var _uniq_var_1156 = function (args, varName, def) {var _uniq_var_588 = flattenCondition(args[2], varName, def);
_uniq_var_588;
return _uniq_var_588;
};_uniq_var_1156.__lix_func__ = true;return _uniq_var_1156;})();
flattenNamedArgCondition;
flattenNamedArgCondition;
var flattenNotArgCondition = (function () {var _uniq_var_1160 = function (args, varName, def) {var _uniq_var_589 = flattenCondition(args[2], varName, def);
_uniq_var_589;
var cond0 = _uniq_var_589;
cond0;
cond0;
var _uniq_var_590 = (function () {var _uniq_var_1159 = function (_uniq_var_1157, _uniq_var_1158) {
if (typeof _uniq_var_1157.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1157.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1157.join.apply(_uniq_var_1157, arguments);
} else if (_uniq_var_1157.join !== undefined) {
if (_uniq_var_1158 === undefined) {
return _uniq_var_1157.join;
}
_uniq_var_1157.join = _uniq_var_1158;
}return _uniq_var_1157;
};_uniq_var_1159.__lix_func__ = true;return _uniq_var_1159;})()(["!(", cond0, ")"], "");
_uniq_var_590;
return _uniq_var_590;
};_uniq_var_1160.__lix_func__ = true;return _uniq_var_1160;})();
flattenNotArgCondition;
flattenNotArgCondition;
var flattenAndArgCondition = (function () {var _uniq_var_1164 = function (args, varName, def) {var _uniq_var_591 = flattenCondition(args[2], varName, def);
_uniq_var_591;
var cond0 = _uniq_var_591;
cond0;
cond0;
var _uniq_var_592 = flattenCondition(args[3], varName, def);
_uniq_var_592;
var cond1 = _uniq_var_592;
cond1;
cond1;
var _uniq_var_593 = (function () {var _uniq_var_1163 = function (_uniq_var_1161, _uniq_var_1162) {
if (typeof _uniq_var_1161.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1161.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1161.join.apply(_uniq_var_1161, arguments);
} else if (_uniq_var_1161.join !== undefined) {
if (_uniq_var_1162 === undefined) {
return _uniq_var_1161.join;
}
_uniq_var_1161.join = _uniq_var_1162;
}return _uniq_var_1161;
};_uniq_var_1163.__lix_func__ = true;return _uniq_var_1163;})()(["(", cond0, ") && (", cond1, ")"], "");
_uniq_var_593;
return _uniq_var_593;
};_uniq_var_1164.__lix_func__ = true;return _uniq_var_1164;})();
flattenAndArgCondition;
flattenAndArgCondition;
var flattenOrArgCondition = (function () {var _uniq_var_1168 = function (args, varName, def) {var _uniq_var_594 = flattenCondition(args[2], varName, def);
_uniq_var_594;
var cond0 = _uniq_var_594;
cond0;
cond0;
var _uniq_var_595 = flattenCondition(args[3], varName, def);
_uniq_var_595;
var cond1 = _uniq_var_595;
cond1;
cond1;
var _uniq_var_596 = (function () {var _uniq_var_1167 = function (_uniq_var_1165, _uniq_var_1166) {
if (typeof _uniq_var_1165.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1165.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1165.join.apply(_uniq_var_1165, arguments);
} else if (_uniq_var_1165.join !== undefined) {
if (_uniq_var_1166 === undefined) {
return _uniq_var_1165.join;
}
_uniq_var_1165.join = _uniq_var_1166;
}return _uniq_var_1165;
};_uniq_var_1167.__lix_func__ = true;return _uniq_var_1167;})()(["(", cond0, ") || (", cond1, ")"], "");
_uniq_var_596;
return _uniq_var_596;
};_uniq_var_1168.__lix_func__ = true;return _uniq_var_1168;})();
flattenOrArgCondition;
flattenOrArgCondition;
var flattenProtoCondition = (function () {var _uniq_var_1172 = function (args, varName, def) {var _uniq_var_597 = transformVarName(args[0]);
_uniq_var_597;
var _uniq_var_598 = (function () {var _uniq_var_1171 = function (_uniq_var_1169, _uniq_var_1170) {
if (typeof _uniq_var_1169.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1169.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1169.join.apply(_uniq_var_1169, arguments);
} else if (_uniq_var_1169.join !== undefined) {
if (_uniq_var_1170 === undefined) {
return _uniq_var_1169.join;
}
_uniq_var_1169.join = _uniq_var_1170;
}return _uniq_var_1169;
};_uniq_var_1171.__lix_func__ = true;return _uniq_var_1171;})()(["Object.getPrototypeOf(", varName, ") === ", _uniq_var_597], "");
_uniq_var_598;
return _uniq_var_598;
};_uniq_var_1172.__lix_func__ = true;return _uniq_var_1172;})();
flattenProtoCondition;
flattenProtoCondition;
var flattenPtnCondition = (function () {var _uniq_var_1176 = function (args, varName, def) {var _uniq_var_599 = transformVarName(args[0]);
_uniq_var_599;
var _uniq_var_600 = (function () {var _uniq_var_1175 = function (_uniq_var_1173, _uniq_var_1174) {
if (typeof _uniq_var_1173.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1173.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1173.join.apply(_uniq_var_1173, arguments);
} else if (_uniq_var_1173.join !== undefined) {
if (_uniq_var_1174 === undefined) {
return _uniq_var_1173.join;
}
_uniq_var_1173.join = _uniq_var_1174;
}return _uniq_var_1173;
};_uniq_var_1175.__lix_func__ = true;return _uniq_var_1175;})()([_uniq_var_599, "(", varName, ")"], "");
_uniq_var_600;
return _uniq_var_600;
};_uniq_var_1176.__lix_func__ = true;return _uniq_var_1176;})();
flattenPtnCondition;
flattenPtnCondition;
var flattenTypeCondition = (function () {var _uniq_var_1192 = function (args, varName, def) {var ret = null;
ret;
ret;
var _uniq_var_601 = true;
_uniq_var_601;
var _uniq_var_602 = null;
_uniq_var_602;
var _uniq_var_604 = __eq__(args[0], 'Number');
_uniq_var_604;
if ((_uniq_var_601 && _uniq_var_604)) {
(_uniq_var_601 = false);
var _uniq_var_603 = (function () {var _uniq_var_1179 = function (_uniq_var_1177, _uniq_var_1178) {
if (typeof _uniq_var_1177.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1177.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1177.join.apply(_uniq_var_1177, arguments);
} else if (_uniq_var_1177.join !== undefined) {
if (_uniq_var_1178 === undefined) {
return _uniq_var_1177.join;
}
_uniq_var_1177.join = _uniq_var_1178;
}return _uniq_var_1177;
};_uniq_var_1179.__lix_func__ = true;return _uniq_var_1179;})()(["typeof ", varName, " == 'number'"], "");
_uniq_var_603;
(_uniq_var_602 = (ret = _uniq_var_603));

};
var _uniq_var_606 = __eq__(args[0], 'String');
_uniq_var_606;
if ((_uniq_var_601 && _uniq_var_606)) {
(_uniq_var_601 = false);
var _uniq_var_605 = (function () {var _uniq_var_1182 = function (_uniq_var_1180, _uniq_var_1181) {
if (typeof _uniq_var_1180.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1180.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1180.join.apply(_uniq_var_1180, arguments);
} else if (_uniq_var_1180.join !== undefined) {
if (_uniq_var_1181 === undefined) {
return _uniq_var_1180.join;
}
_uniq_var_1180.join = _uniq_var_1181;
}return _uniq_var_1180;
};_uniq_var_1182.__lix_func__ = true;return _uniq_var_1182;})()(["typeof ", varName, " == 'string'"], "");
_uniq_var_605;
(_uniq_var_602 = (ret = _uniq_var_605));

};
var _uniq_var_608 = __eq__(args[0], 'Function');
_uniq_var_608;
if ((_uniq_var_601 && _uniq_var_608)) {
(_uniq_var_601 = false);
var _uniq_var_607 = (function () {var _uniq_var_1185 = function (_uniq_var_1183, _uniq_var_1184) {
if (typeof _uniq_var_1183.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1183.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1183.join.apply(_uniq_var_1183, arguments);
} else if (_uniq_var_1183.join !== undefined) {
if (_uniq_var_1184 === undefined) {
return _uniq_var_1183.join;
}
_uniq_var_1183.join = _uniq_var_1184;
}return _uniq_var_1183;
};_uniq_var_1185.__lix_func__ = true;return _uniq_var_1185;})()(["typeof ", varName, " == 'function'"], "");
_uniq_var_607;
(_uniq_var_602 = (ret = _uniq_var_607));

};
var _uniq_var_610 = __eq__(args[0], 'Boolean');
_uniq_var_610;
if ((_uniq_var_601 && _uniq_var_610)) {
(_uniq_var_601 = false);
var _uniq_var_609 = (function () {var _uniq_var_1188 = function (_uniq_var_1186, _uniq_var_1187) {
if (typeof _uniq_var_1186.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1186.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1186.join.apply(_uniq_var_1186, arguments);
} else if (_uniq_var_1186.join !== undefined) {
if (_uniq_var_1187 === undefined) {
return _uniq_var_1186.join;
}
_uniq_var_1186.join = _uniq_var_1187;
}return _uniq_var_1186;
};_uniq_var_1188.__lix_func__ = true;return _uniq_var_1188;})()(["typeof ", varName, " == 'boolean'"], "");
_uniq_var_609;
(_uniq_var_602 = (ret = _uniq_var_609));

};
if (_uniq_var_601) {
var _uniq_var_611 = transformVarName(args[0]);
_uniq_var_611;
var _uniq_var_612 = (function () {var _uniq_var_1191 = function (_uniq_var_1189, _uniq_var_1190) {
if (typeof _uniq_var_1189.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1189.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1189.join.apply(_uniq_var_1189, arguments);
} else if (_uniq_var_1189.join !== undefined) {
if (_uniq_var_1190 === undefined) {
return _uniq_var_1189.join;
}
_uniq_var_1189.join = _uniq_var_1190;
}return _uniq_var_1189;
};_uniq_var_1191.__lix_func__ = true;return _uniq_var_1191;})()([varName, " instanceof ", _uniq_var_611], "");
_uniq_var_612;
(_uniq_var_602 = _uniq_var_612);

};
return _uniq_var_602;
};_uniq_var_1192.__lix_func__ = true;return _uniq_var_1192;})();
flattenTypeCondition;
flattenTypeCondition;
var flattenVACondArgCondition = (function () {var _uniq_var_1193 = function (args, varName, def) {;
};_uniq_var_1193.__lix_func__ = true;return _uniq_var_1193;})();
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
var getFlattenDestructorOp = (function () {var _uniq_var_1194 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_613 = true;
_uniq_var_613;
var _uniq_var_614 = null;
_uniq_var_614;
if ((_uniq_var_613 && flattenDestructorOp[hint])) {
(_uniq_var_613 = false);
(_uniq_var_614 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_614;
return ret;
};_uniq_var_1194.__lix_func__ = true;return _uniq_var_1194;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_1195 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_615 = true;
_uniq_var_615;
var _uniq_var_616 = null;
_uniq_var_616;
if ((_uniq_var_615 && flattenConditionOp[hint])) {
(_uniq_var_615 = false);
(_uniq_var_616 = (ret = flattenConditionOp[hint]));

};
_uniq_var_616;
return ret;
};_uniq_var_1195.__lix_func__ = true;return _uniq_var_1195;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_1196 = function (args, varName) {var _uniq_var_617 = getFlattenDestructorOp(args[1]);
_uniq_var_617;
var _uniq_var_618 = call(_uniq_var_617, args, varName);
_uniq_var_618;
return _uniq_var_618;
};_uniq_var_1196.__lix_func__ = true;return _uniq_var_1196;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_1197 = function (args, varName, def) {var _uniq_var_619 = getFlattenConditionOp(args[1]);
_uniq_var_619;
var _uniq_var_620 = call(_uniq_var_619, args, varName, def);
_uniq_var_620;
return _uniq_var_620;
};_uniq_var_1197.__lix_func__ = true;return _uniq_var_1197;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_1198 = function (args, def) {var _uniq_var_621 = flattenCondition(args, "arguments", def);
_uniq_var_621;
return _uniq_var_621;
};_uniq_var_1198.__lix_func__ = true;return _uniq_var_1198;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_1199 = function (args) {var _uniq_var_622 = flattenDestructor(args, "arguments");
_uniq_var_622;
return _uniq_var_622;
};_uniq_var_1199.__lix_func__ = true;return _uniq_var_1199;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_1207 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_628 = foreach(args[2], (function () {var _uniq_var_1206 = function (item) {var _uniq_var_623 = true;
_uniq_var_623;
var _uniq_var_624 = null;
_uniq_var_624;
var _uniq_var_626 = __eq__(item[1], '{atomic}');
_uniq_var_626;
if ((_uniq_var_623 && _uniq_var_626)) {
(_uniq_var_623 = false);
var _uniq_var_625 = (function () {var _uniq_var_1202 = function (_uniq_var_1200, _uniq_var_1201) {
if (typeof _uniq_var_1200.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1200.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1200.push.apply(_uniq_var_1200, arguments);
} else if (_uniq_var_1200.push !== undefined) {
if (_uniq_var_1201 === undefined) {
return _uniq_var_1200.push;
}
_uniq_var_1200.push = _uniq_var_1201;
}return _uniq_var_1200;
};_uniq_var_1202.__lix_func__ = true;return _uniq_var_1202;})()(ret, item);
_uniq_var_625;
(_uniq_var_624 = _uniq_var_625);

};
if (_uniq_var_623) {
var _uniq_var_627 = (function () {var _uniq_var_1205 = function (_uniq_var_1203, _uniq_var_1204) {
if (typeof _uniq_var_1203.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1203.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1203.push.apply(_uniq_var_1203, arguments);
} else if (_uniq_var_1203.push !== undefined) {
if (_uniq_var_1204 === undefined) {
return _uniq_var_1203.push;
}
_uniq_var_1203.push = _uniq_var_1204;
}return _uniq_var_1203;
};_uniq_var_1205.__lix_func__ = true;return _uniq_var_1205;})()(ret, item[0]);
_uniq_var_627;
(_uniq_var_624 = _uniq_var_627);

};
return _uniq_var_624;
};_uniq_var_1206.__lix_func__ = true;return _uniq_var_1206;})());
_uniq_var_628;
_uniq_var_628;
return ret;
};_uniq_var_1207.__lix_func__ = true;return _uniq_var_1207;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenLambda = (function () {var _uniq_var_1208 = function (expr, define) {var _uniq_var_629 = flattenArgumentsDestructor(expr[0]);
_uniq_var_629;
var destructor = _uniq_var_629;
destructor;
destructor;
var _uniq_var_630 = getFuncArgsNameList(expr[0]);
_uniq_var_630;
var funcArgsNameList = _uniq_var_630;
funcArgsNameList;
funcArgsNameList;
(expr[0] = funcArgsNameList);
(expr[1] = "{func}");
var _uniq_var_631 = flatten(expr[2], define);
_uniq_var_631;
(expr[2] = _uniq_var_631);
(expr[3] = destructor);
return expr;
};_uniq_var_1208.__lix_func__ = true;return _uniq_var_1208;})();
flattenLambda;
flattenLambda;
var flattenPtn = (function () {var _uniq_var_1209 = function (expr, define) {return expr;
};_uniq_var_1209.__lix_func__ = true;return _uniq_var_1209;})();
flattenPtn;
flattenPtn;
var flattenFn = (function () {var _uniq_var_1210 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_632 = flattenArgumentsDestructor(expr[2]);
_uniq_var_632;
var destructor = _uniq_var_632;
destructor;
destructor;
var _uniq_var_633 = getFuncArgsNameList(expr[2]);
_uniq_var_633;
var funcArgsNameList = _uniq_var_633;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_634 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_634;
var func = _uniq_var_634;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_1210.__lix_func__ = true;return _uniq_var_1210;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_1211 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_635 = flatten(expr, define);
_uniq_var_635;
return _uniq_var_635;
};_uniq_var_1211.__lix_func__ = true;return _uniq_var_1211;})();
flattenAsterisk;
flattenAsterisk;
var flattenMatch = (function () {var _uniq_var_1212 = function (expr, define) {var _uniq_var_636 = flatten(expr[0], define);
_uniq_var_636;
return _uniq_var_636;
};_uniq_var_1212.__lix_func__ = true;return _uniq_var_1212;})();
flattenMatch;
flattenMatch;
var flattenMatchCaseList = (function () {var _uniq_var_1214 = function (expr, define) {var _uniq_var_639 = foreach(expr[2], (function () {var _uniq_var_1213 = function (item) {var _uniq_var_637 = flatten(item, define);
_uniq_var_637;
var _uniq_var_638 = define(_uniq_var_637);
_uniq_var_638;
return _uniq_var_638;
};_uniq_var_1213.__lix_func__ = true;return _uniq_var_1213;})());
_uniq_var_639;
_uniq_var_639;
return expr[0];
};_uniq_var_1214.__lix_func__ = true;return _uniq_var_1214;})();
flattenMatchCaseList;
flattenMatchCaseList;
var identity = (function () {var _uniq_var_1215 = function (x) {return x;
};_uniq_var_1215.__lix_func__ = true;return _uniq_var_1215;})();
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
var flattenOp = (function () {var _uniq_var_1216 = function (hint) {var _uniq_var_640 = true;
_uniq_var_640;
var _uniq_var_641 = null;
_uniq_var_641;
if ((_uniq_var_640 && flattenOpTable[hint])) {
(_uniq_var_640 = false);
(_uniq_var_641 = flattenOpTable[hint]);

};
if (_uniq_var_640) {
(_uniq_var_641 = flattenExpr);

};
return _uniq_var_641;
};_uniq_var_1216.__lix_func__ = true;return _uniq_var_1216;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_1217 = function (expr, define, ctx) {var _uniq_var_642 = flattenOp(expr[1]);
_uniq_var_642;
var _uniq_var_643 = _uniq_var_642(expr, define, ctx);
_uniq_var_643;
return _uniq_var_643;
};_uniq_var_1217.__lix_func__ = true;return _uniq_var_1217;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_1218 = function (i) {return i;
};_uniq_var_1218.__lix_func__ = true;return _uniq_var_1218;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_1219 = function (i) {;
};_uniq_var_1219.__lix_func__ = true;return _uniq_var_1219;})(),
appendExpr: (function () {var _uniq_var_1220 = function (i) {;
};_uniq_var_1220.__lix_func__ = true;return _uniq_var_1220;})()
};
def0;
def0;
var _uniq_var_644 = join(['s[', STEP, ']']);
_uniq_var_644;
var _uniq_var_645 = join(['s[', RET, ']']);
_uniq_var_645;
var seqFuncParamsName = {
step: _uniq_var_644,
ret: _uniq_var_645
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_1227 = function (expr) {var _uniq_var_646 = map(env0, (function () {var _uniq_var_1221 = function (i) {return i;
};_uniq_var_1221.__lix_func__ = true;return _uniq_var_1221;})());
_uniq_var_646;
var _uniq_var_647 = (function () {var _uniq_var_1224 = function (_uniq_var_1222, _uniq_var_1223) {
if (typeof _uniq_var_1222.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1222.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1222.join.apply(_uniq_var_1222, arguments);
} else if (_uniq_var_1222.join !== undefined) {
if (_uniq_var_1223 === undefined) {
return _uniq_var_1222.join;
}
_uniq_var_1222.join = _uniq_var_1223;
}return _uniq_var_1222;
};_uniq_var_1224.__lix_func__ = true;return _uniq_var_1224;})()(_uniq_var_646, "\n");
_uniq_var_647;
var libs = _uniq_var_647;
libs;
libs;
var _uniq_var_648 = flatten(expr, (function () {var _uniq_var_1225 = function (i) {;
};_uniq_var_1225.__lix_func__ = true;return _uniq_var_1225;})(), (function () {var _uniq_var_1226 = function (i) {return i;
};_uniq_var_1226.__lix_func__ = true;return _uniq_var_1226;})());
_uniq_var_648;
var flattenedExpr = _uniq_var_648;
flattenedExpr;
flattenedExpr;
var _uniq_var_649 = call(env_new);
_uniq_var_649;
var _uniq_var_650 = generateStart(flattenedExpr, _uniq_var_649, ctx0, def0);
_uniq_var_650;
var code = _uniq_var_650;
code;
code;
var _uniq_var_651 = join([libs, "\n", code]);
_uniq_var_651;
return _uniq_var_651;
};_uniq_var_1227.__lix_func__ = true;return _uniq_var_1227;})();
compile;
compile;
(exports.compile = compile);
compile;

