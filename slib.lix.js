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
(function () {var _uniq_var_645 = function () {return 3;
};_uniq_var_645.__lix_func__ = true;return _uniq_var_645;})();
var join = (function () {var _uniq_var_649 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_648 = function (_uniq_var_646, _uniq_var_647) {
if (typeof _uniq_var_646.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_646.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_646.join.apply(_uniq_var_646, arguments);
} else if (_uniq_var_646.join !== undefined) {
if (_uniq_var_647 === undefined) {
return _uniq_var_646.join;
}
_uniq_var_646.join = _uniq_var_647;
}return _uniq_var_646;
};_uniq_var_648.__lix_func__ = true;return _uniq_var_648;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_649.__lix_func__ = true;return _uniq_var_649;})();
join;
join;
var map = (function () {var _uniq_var_654 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_653 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_652 = function (_uniq_var_650, _uniq_var_651) {
if (typeof _uniq_var_650.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_650.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_650.push.apply(_uniq_var_650, arguments);
} else if (_uniq_var_650.push !== undefined) {
if (_uniq_var_651 === undefined) {
return _uniq_var_650.push;
}
_uniq_var_650.push = _uniq_var_651;
}return _uniq_var_650;
};_uniq_var_652.__lix_func__ = true;return _uniq_var_652;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_653.__lix_func__ = true;return _uniq_var_653;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_654.__lix_func__ = true;return _uniq_var_654;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_656 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_655 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_655.__lix_func__ = true;return _uniq_var_655;})();
};_uniq_var_656.__lix_func__ = true;return _uniq_var_656;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_657 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_657.__lix_func__ = true;return _uniq_var_657;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_662 = function (args, env, ctx) {var _uniq_var_12 = map(args, (function () {var _uniq_var_658 = function (i) {var _uniq_var_8 = transformVarName(i[0]);
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
};_uniq_var_658.__lix_func__ = true;return _uniq_var_658;})());
_uniq_var_12;
var _uniq_var_13 = (function () {var _uniq_var_661 = function (_uniq_var_659, _uniq_var_660) {
if (typeof _uniq_var_659.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_659.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_659.join.apply(_uniq_var_659, arguments);
} else if (_uniq_var_659.join !== undefined) {
if (_uniq_var_660 === undefined) {
return _uniq_var_659.join;
}
_uniq_var_659.join = _uniq_var_660;
}return _uniq_var_659;
};_uniq_var_661.__lix_func__ = true;return _uniq_var_661;})()(_uniq_var_12, ', ');
_uniq_var_13;
return _uniq_var_13;
};_uniq_var_662.__lix_func__ = true;return _uniq_var_662;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_663 = function (x) {return x;
};_uniq_var_663.__lix_func__ = true;return _uniq_var_663;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_673 = function (expr, env, ctx, def) {var _uniq_var_14 = call(getUniqVarName);
_uniq_var_14;
var funcName = _uniq_var_14;
funcName;
funcName;
var _uniq_var_15 = call(counterGenerator);
_uniq_var_15;
var getCount = _uniq_var_15;
getCount;
getCount;
var ctx = (function () {var _uniq_var_665 = function (current) {return (function () {var _uniq_var_664 = function (v, loop) {var next = current;
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
};_uniq_var_664.__lix_func__ = true;return _uniq_var_664;})();
};_uniq_var_665.__lix_func__ = true;return _uniq_var_665;})();
ctx;
ctx;
var body = [];
body;
body;
var _uniq_var_28 = foreach(expr[0], (function () {var _uniq_var_669 = function (item, index) {var _uniq_var_21 = call(getCount);
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
var _uniq_var_27 = (function () {var _uniq_var_668 = function (_uniq_var_666, _uniq_var_667) {
if (typeof _uniq_var_666.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_666.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_666.push.apply(_uniq_var_666, arguments);
} else if (_uniq_var_666.push !== undefined) {
if (_uniq_var_667 === undefined) {
return _uniq_var_666.push;
}
_uniq_var_666.push = _uniq_var_667;
}return _uniq_var_666;
};_uniq_var_668.__lix_func__ = true;return _uniq_var_668;})()(body, _uniq_var_26);
_uniq_var_27;
(_uniq_var_25 = _uniq_var_27);

};
_uniq_var_25;
return stmt;
};_uniq_var_669.__lix_func__ = true;return _uniq_var_669;})());
_uniq_var_28;
_uniq_var_28;
var _uniq_var_29 = (function () {var _uniq_var_672 = function (_uniq_var_670, _uniq_var_671) {
if (typeof _uniq_var_670.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_670.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_670.join.apply(_uniq_var_670, arguments);
} else if (_uniq_var_670.join !== undefined) {
if (_uniq_var_671 === undefined) {
return _uniq_var_670.join;
}
_uniq_var_670.join = _uniq_var_671;
}return _uniq_var_670;
};_uniq_var_672.__lix_func__ = true;return _uniq_var_672;})()(body, ";\n");
_uniq_var_29;
(body = _uniq_var_29);
var _uniq_var_30 = join(['function ', funcName, '(s) {\n', 'switch (s[', STEP, ']) {\n', body, '\n', 'default:\n', '}\n', 'return s[', RET, ']\n', '}\n']);
_uniq_var_30;
var _uniq_var_31 = def.appendExpr(_uniq_var_30);
_uniq_var_31;
_uniq_var_31;
return funcName;
};_uniq_var_673.__lix_func__ = true;return _uniq_var_673;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_674 = function (expr, env, ctx, def) {var _uniq_var_32 = generate(expr[0], env, ctx, def);
_uniq_var_32;
var _uniq_var_33 = generate(expr[2], env, ctx, def);
_uniq_var_33;
var _uniq_var_34 = join(['(', _uniq_var_32, " || ", _uniq_var_33, ')']);
_uniq_var_34;
return _uniq_var_34;
};_uniq_var_674.__lix_func__ = true;return _uniq_var_674;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_675 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " && ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_675.__lix_func__ = true;return _uniq_var_675;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_680 = function (expr, env, ctx, def) {var _uniq_var_50 = map(expr[0], (function () {var _uniq_var_676 = function (i) {var _uniq_var_38 = true;
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
};_uniq_var_676.__lix_func__ = true;return _uniq_var_676;})());
_uniq_var_50;
var _uniq_var_51 = (function () {var _uniq_var_679 = function (_uniq_var_677, _uniq_var_678) {
if (typeof _uniq_var_677.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_677.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_677.join.apply(_uniq_var_677, arguments);
} else if (_uniq_var_677.join !== undefined) {
if (_uniq_var_678 === undefined) {
return _uniq_var_677.join;
}
_uniq_var_677.join = _uniq_var_678;
}return _uniq_var_677;
};_uniq_var_679.__lix_func__ = true;return _uniq_var_679;})()(_uniq_var_50, ' else ');
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_680.__lix_func__ = true;return _uniq_var_680;})();
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
var generateAtomic = (function () {var _uniq_var_681 = function (expr, env, ctx, def) {var ret = expr[0];
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
};_uniq_var_681.__lix_func__ = true;return _uniq_var_681;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_682 = function (expr, env, ctx, def) {var _uniq_var_60 = true;
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
};_uniq_var_682.__lix_func__ = true;return _uniq_var_682;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_683 = function (expr, env, ctx, def) {var _uniq_var_66 = generatePropertyName(expr[0], env, ctx0, def);
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
};_uniq_var_683.__lix_func__ = true;return _uniq_var_683;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_688 = function (expr, env, ctx, def) {var _uniq_var_70 = map(expr[0], (function () {var _uniq_var_684 = function (i) {var _uniq_var_69 = generateProperty(i, env, ctx, def);
_uniq_var_69;
return _uniq_var_69;
};_uniq_var_684.__lix_func__ = true;return _uniq_var_684;})());
_uniq_var_70;
var _uniq_var_71 = (function () {var _uniq_var_687 = function (_uniq_var_685, _uniq_var_686) {
if (typeof _uniq_var_685.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_685.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_685.join.apply(_uniq_var_685, arguments);
} else if (_uniq_var_685.join !== undefined) {
if (_uniq_var_686 === undefined) {
return _uniq_var_685.join;
}
_uniq_var_685.join = _uniq_var_686;
}return _uniq_var_685;
};_uniq_var_687.__lix_func__ = true;return _uniq_var_687;})()(_uniq_var_70, ",\n");
_uniq_var_71;
var objectBody = _uniq_var_71;
objectBody;
objectBody;
var _uniq_var_72 = join(["{\n", objectBody, "\n}"]);
_uniq_var_72;
return _uniq_var_72;
};_uniq_var_688.__lix_func__ = true;return _uniq_var_688;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_689 = function (name) {var _uniq_var_73 = true;
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
};_uniq_var_689.__lix_func__ = true;return _uniq_var_689;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_690 = function (expr) {var _uniq_var_85 = true;
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
};_uniq_var_690.__lix_func__ = true;return _uniq_var_690;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_691 = function (expr, env, ctx, def) {var _uniq_var_91 = true;
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
};_uniq_var_691.__lix_func__ = true;return _uniq_var_691;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_692 = function (expr, env, ctx, def) {var _uniq_var_99 = true;
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
};_uniq_var_692.__lix_func__ = true;return _uniq_var_692;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_697 = function (expr, env, ctx, def) {var _uniq_var_108 = map(expr[0], (function () {var _uniq_var_693 = function (i) {var _uniq_var_107 = generate(i, env, ctx, def);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_693.__lix_func__ = true;return _uniq_var_693;})());
_uniq_var_108;
var _uniq_var_109 = (function () {var _uniq_var_696 = function (_uniq_var_694, _uniq_var_695) {
if (typeof _uniq_var_694.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_694.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_694.join.apply(_uniq_var_694, arguments);
} else if (_uniq_var_694.join !== undefined) {
if (_uniq_var_695 === undefined) {
return _uniq_var_694.join;
}
_uniq_var_694.join = _uniq_var_695;
}return _uniq_var_694;
};_uniq_var_696.__lix_func__ = true;return _uniq_var_696;})()(_uniq_var_108, ', ');
_uniq_var_109;
var arrayBody = _uniq_var_109;
arrayBody;
arrayBody;
var _uniq_var_110 = join(['[', arrayBody, ']']);
_uniq_var_110;
return _uniq_var_110;
};_uniq_var_697.__lix_func__ = true;return _uniq_var_697;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_698 = function (expr, env, ctx) {var _uniq_var_111 = call(getUniqVarName);
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
};_uniq_var_698.__lix_func__ = true;return _uniq_var_698;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_699 = function (expr, env, ctx, def) {var _uniq_var_117 = generate(expr[0], env, ctx, def);
_uniq_var_117;
var _uniq_var_118 = generate(expr[2], env, ctx, def);
_uniq_var_118;
var _uniq_var_119 = ctx(_uniq_var_118, true);
_uniq_var_119;
var _uniq_var_120 = join(['while (', _uniq_var_117, ') {\n', _uniq_var_119, "\n}"]);
_uniq_var_120;
return _uniq_var_120;
};_uniq_var_699.__lix_func__ = true;return _uniq_var_699;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_700 = function (expr, env, ctx) {return 'break';
};_uniq_var_700.__lix_func__ = true;return _uniq_var_700;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_701 = function (expr, env, ctx, def) {return "";
};_uniq_var_701.__lix_func__ = true;return _uniq_var_701;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_702 = function (expr, env, ctx, def) {var _uniq_var_121 = getVarName(expr[0]);
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
};_uniq_var_702.__lix_func__ = true;return _uniq_var_702;})();
generateDef;
generateDef;
var generateAsterisk = (function () {var _uniq_var_703 = function (expr, env, ctx, def) {var _uniq_var_125 = generateExpr([['undefined', '{atomic}', '{var}'], expr[0]], env, ctx, def);
_uniq_var_125;
return _uniq_var_125;
};_uniq_var_703.__lix_func__ = true;return _uniq_var_703;})();
generateAsterisk;
generateAsterisk;
var generateAmpersandObject = (function () {var _uniq_var_722 = function (expr, env, ctx, def) {var varnames = {

};
varnames;
varnames;
var _uniq_var_133 = foreach(expr[0], (function () {var _uniq_var_704 = function (item, index) {var _uniq_var_126 = getVarName(item);
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
};_uniq_var_704.__lix_func__ = true;return _uniq_var_704;})());
_uniq_var_133;
_uniq_var_133;
var _uniq_var_135 = map(varnames, (function () {var _uniq_var_708 = function (item, index) {var _uniq_var_134 = (function () {var _uniq_var_707 = function (_uniq_var_705, _uniq_var_706) {
if (typeof _uniq_var_705.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_705.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_705.join.apply(_uniq_var_705, arguments);
} else if (_uniq_var_705.join !== undefined) {
if (_uniq_var_706 === undefined) {
return _uniq_var_705.join;
}
_uniq_var_705.join = _uniq_var_706;
}return _uniq_var_705;
};_uniq_var_707.__lix_func__ = true;return _uniq_var_707;})()([item, " = _x.", index, "\n"], "");
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_708.__lix_func__ = true;return _uniq_var_708;})());
_uniq_var_135;
var _uniq_var_136 = (function () {var _uniq_var_711 = function (_uniq_var_709, _uniq_var_710) {
if (typeof _uniq_var_709.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_709.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_709.join.apply(_uniq_var_709, arguments);
} else if (_uniq_var_709.join !== undefined) {
if (_uniq_var_710 === undefined) {
return _uniq_var_709.join;
}
_uniq_var_709.join = _uniq_var_710;
}return _uniq_var_709;
};_uniq_var_711.__lix_func__ = true;return _uniq_var_711;})()(_uniq_var_135, "");
_uniq_var_136;
var _uniq_var_138 = map(varnames, (function () {var _uniq_var_715 = function (item, index) {var _uniq_var_137 = (function () {var _uniq_var_714 = function (_uniq_var_712, _uniq_var_713) {
if (typeof _uniq_var_712.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_712.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_712.join.apply(_uniq_var_712, arguments);
} else if (_uniq_var_712.join !== undefined) {
if (_uniq_var_713 === undefined) {
return _uniq_var_712.join;
}
_uniq_var_712.join = _uniq_var_713;
}return _uniq_var_712;
};_uniq_var_714.__lix_func__ = true;return _uniq_var_714;})()([index, ": ", item], "");
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_715.__lix_func__ = true;return _uniq_var_715;})());
_uniq_var_138;
var _uniq_var_139 = (function () {var _uniq_var_718 = function (_uniq_var_716, _uniq_var_717) {
if (typeof _uniq_var_716.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_716.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_716.join.apply(_uniq_var_716, arguments);
} else if (_uniq_var_716.join !== undefined) {
if (_uniq_var_717 === undefined) {
return _uniq_var_716.join;
}
_uniq_var_716.join = _uniq_var_717;
}return _uniq_var_716;
};_uniq_var_718.__lix_func__ = true;return _uniq_var_718;})()(_uniq_var_138, ", ");
_uniq_var_139;
var _uniq_var_140 = (function () {var _uniq_var_721 = function (_uniq_var_719, _uniq_var_720) {
if (typeof _uniq_var_719.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_719.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_719.join.apply(_uniq_var_719, arguments);
} else if (_uniq_var_719.join !== undefined) {
if (_uniq_var_720 === undefined) {
return _uniq_var_719.join;
}
_uniq_var_719.join = _uniq_var_720;
}return _uniq_var_719;
};_uniq_var_721.__lix_func__ = true;return _uniq_var_721;})()(["(function (_x) {\n", "if (arguments.length && _x) {\n", "return function () {\n", _uniq_var_136, "return _x\n", "}\n", "} else {\n", "return function () {\n", "return {", _uniq_var_139, "}\n", "}\n", "}\n", "})"], "");
_uniq_var_140;
return _uniq_var_140;
};_uniq_var_722.__lix_func__ = true;return _uniq_var_722;})();
generateAmpersandObject;
generateAmpersandObject;
var generateAmpersandBracket = (function () {var _uniq_var_740 = function (expr, env, ctx, def) {var varnames = [];
varnames;
varnames;
var _uniq_var_149 = foreach(expr[0], (function () {var _uniq_var_726 = function (item) {var _uniq_var_141 = getVarName(item);
_uniq_var_141;
var varname = _uniq_var_141;
varname;
varname;
var _uniq_var_142 = (function () {var _uniq_var_725 = function (_uniq_var_723, _uniq_var_724) {
if (typeof _uniq_var_723.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_723.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_723.push.apply(_uniq_var_723, arguments);
} else if (_uniq_var_723.push !== undefined) {
if (_uniq_var_724 === undefined) {
return _uniq_var_723.push;
}
_uniq_var_723.push = _uniq_var_724;
}return _uniq_var_723;
};_uniq_var_725.__lix_func__ = true;return _uniq_var_725;})()(varnames, varname);
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
};_uniq_var_726.__lix_func__ = true;return _uniq_var_726;})());
_uniq_var_149;
_uniq_var_149;
var _uniq_var_151 = map(varnames, (function () {var _uniq_var_730 = function (item, index) {var _uniq_var_150 = (function () {var _uniq_var_729 = function (_uniq_var_727, _uniq_var_728) {
if (typeof _uniq_var_727.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_727.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_727.join.apply(_uniq_var_727, arguments);
} else if (_uniq_var_727.join !== undefined) {
if (_uniq_var_728 === undefined) {
return _uniq_var_727.join;
}
_uniq_var_727.join = _uniq_var_728;
}return _uniq_var_727;
};_uniq_var_729.__lix_func__ = true;return _uniq_var_729;})()([item, " = _x[", index, "]\n"], "");
_uniq_var_150;
return _uniq_var_150;
};_uniq_var_730.__lix_func__ = true;return _uniq_var_730;})());
_uniq_var_151;
var _uniq_var_152 = (function () {var _uniq_var_733 = function (_uniq_var_731, _uniq_var_732) {
if (typeof _uniq_var_731.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_731.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_731.join.apply(_uniq_var_731, arguments);
} else if (_uniq_var_731.join !== undefined) {
if (_uniq_var_732 === undefined) {
return _uniq_var_731.join;
}
_uniq_var_731.join = _uniq_var_732;
}return _uniq_var_731;
};_uniq_var_733.__lix_func__ = true;return _uniq_var_733;})()(_uniq_var_151, "");
_uniq_var_152;
var _uniq_var_153 = (function () {var _uniq_var_736 = function (_uniq_var_734, _uniq_var_735) {
if (typeof _uniq_var_734.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_734.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_734.join.apply(_uniq_var_734, arguments);
} else if (_uniq_var_734.join !== undefined) {
if (_uniq_var_735 === undefined) {
return _uniq_var_734.join;
}
_uniq_var_734.join = _uniq_var_735;
}return _uniq_var_734;
};_uniq_var_736.__lix_func__ = true;return _uniq_var_736;})()(varnames, ", ");
_uniq_var_153;
var _uniq_var_154 = (function () {var _uniq_var_739 = function (_uniq_var_737, _uniq_var_738) {
if (typeof _uniq_var_737.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_737.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_737.join.apply(_uniq_var_737, arguments);
} else if (_uniq_var_737.join !== undefined) {
if (_uniq_var_738 === undefined) {
return _uniq_var_737.join;
}
_uniq_var_737.join = _uniq_var_738;
}return _uniq_var_737;
};_uniq_var_739.__lix_func__ = true;return _uniq_var_739;})()(["(function (_x) {\n", "if (arguments.length && _x) {\n", "return function () {\n", _uniq_var_152, "return _x\n", "}\n", "} else {\n", "return function () {\n", "return [", _uniq_var_153, "]\n", "}\n", "}\n", "})"], "");
_uniq_var_154;
return _uniq_var_154;
};_uniq_var_740.__lix_func__ = true;return _uniq_var_740;})();
generateAmpersandBracket;
generateAmpersandBracket;
var generateAmpersand = (function () {var _uniq_var_744 = function (expr, env, ctx, def) {var _uniq_var_155 = true;
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
var _uniq_var_166 = (function () {var _uniq_var_743 = function (_uniq_var_741, _uniq_var_742) {
if (typeof _uniq_var_741.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_741.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_741.join.apply(_uniq_var_741, arguments);
} else if (_uniq_var_741.join !== undefined) {
if (_uniq_var_742 === undefined) {
return _uniq_var_741.join;
}
_uniq_var_741.join = _uniq_var_742;
}return _uniq_var_741;
};_uniq_var_743.__lix_func__ = true;return _uniq_var_743;})()(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", varname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", varname, "\n", "}\n", "}\n", "})"], "");
_uniq_var_166;
return _uniq_var_166;
};_uniq_var_744.__lix_func__ = true;return _uniq_var_744;})();
generateAmpersand;
generateAmpersand;
var generateAssign = (function () {var _uniq_var_745 = function (expr, env, ctx, def) {var _uniq_var_167 = getVarName(expr[0]);
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
};_uniq_var_745.__lix_func__ = true;return _uniq_var_745;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_752 = function (expr, env, ctx, def) {var _uniq_var_180 = true;
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
var _uniq_var_189 = (function () {var _uniq_var_748 = function (_uniq_var_746, _uniq_var_747) {
if (typeof _uniq_var_746.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_746.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_746.join.apply(_uniq_var_746, arguments);
} else if (_uniq_var_746.join !== undefined) {
if (_uniq_var_747 === undefined) {
return _uniq_var_746.join;
}
_uniq_var_746.join = _uniq_var_747;
}return _uniq_var_746;
};_uniq_var_748.__lix_func__ = true;return _uniq_var_748;})()(expr[3], ";\n");
_uniq_var_189;
var _uniq_var_190 = call(def.defineVar);
_uniq_var_190;
var _uniq_var_191 = call(def.appendExpr);
_uniq_var_191;
var _uniq_var_192 = call(def.definedFns);
_uniq_var_192;
var _uniq_var_193 = (function () {var _uniq_var_751 = function (_uniq_var_749, _uniq_var_750) {
if (typeof _uniq_var_749.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_749.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_749.join.apply(_uniq_var_749, arguments);
} else if (_uniq_var_749.join !== undefined) {
if (_uniq_var_750 === undefined) {
return _uniq_var_749.join;
}
_uniq_var_749.join = _uniq_var_750;
}return _uniq_var_749;
};_uniq_var_751.__lix_func__ = true;return _uniq_var_751;})()(['(function (', args, ') {\n', 'var ', _uniq_var_188, ' = arguments;\n', _uniq_var_189, ";\n", _uniq_var_190, ";\n", _uniq_var_191, _uniq_var_192, 'return ', body, ";\n", '})'], '');
_uniq_var_193;
return _uniq_var_193;
};_uniq_var_752.__lix_func__ = true;return _uniq_var_752;})();
generateFunc;
generateFunc;
var generateFn = (function () {var _uniq_var_759 = function (expr0, env, ctx, prevDef) {var _uniq_var_194 = call(getUniqVarName);
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
var _uniq_var_204 = (function () {var _uniq_var_755 = function (_uniq_var_753, _uniq_var_754) {
if (typeof _uniq_var_753.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_753.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_753.join.apply(_uniq_var_753, arguments);
} else if (_uniq_var_753.join !== undefined) {
if (_uniq_var_754 === undefined) {
return _uniq_var_753.join;
}
_uniq_var_753.join = _uniq_var_754;
}return _uniq_var_753;
};_uniq_var_755.__lix_func__ = true;return _uniq_var_755;})()(expr[3], ";\n");
_uniq_var_204;
var _uniq_var_205 = call(def.defineVar);
_uniq_var_205;
var _uniq_var_206 = call(def.appendExpr);
_uniq_var_206;
var _uniq_var_207 = call(def.definedFns);
_uniq_var_207;
var _uniq_var_208 = (function () {var _uniq_var_758 = function (_uniq_var_756, _uniq_var_757) {
if (typeof _uniq_var_756.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_756.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_756.join.apply(_uniq_var_756, arguments);
} else if (_uniq_var_756.join !== undefined) {
if (_uniq_var_757 === undefined) {
return _uniq_var_756.join;
}
_uniq_var_756.join = _uniq_var_757;
}return _uniq_var_756;
};_uniq_var_758.__lix_func__ = true;return _uniq_var_758;})()(['function ', funcName, '(', args, ') {\n', 'var ', _uniq_var_203, ' = arguments;\n', _uniq_var_204, ";\n", _uniq_var_205, ";\n", _uniq_var_206, ";\n", _uniq_var_207, ";\n", 'return ', body, ";\n", '}'], '');
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
};_uniq_var_759.__lix_func__ = true;return _uniq_var_759;})();
generateFn;
generateFn;
var generateExpr = (function () {var _uniq_var_761 = function (expr, env, ctx, def) {var _uniq_var_212 = generate(expr[1], env, ctx0, def);
_uniq_var_212;
var func = _uniq_var_212;
func;
func;
var _uniq_var_213 = generate(expr[0], env, ctx0, def);
_uniq_var_213;
var args = _uniq_var_213;
args;
args;
var _uniq_var_219 = foreach(expr, (function () {var _uniq_var_760 = function (item, index) {var _uniq_var_214 = true;
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
};_uniq_var_760.__lix_func__ = true;return _uniq_var_760;})());
_uniq_var_219;
_uniq_var_219;
var _uniq_var_220 = join([func, '(', args, ')']);
_uniq_var_220;
var _uniq_var_221 = ctx(_uniq_var_220);
_uniq_var_221;
return _uniq_var_221;
};_uniq_var_761.__lix_func__ = true;return _uniq_var_761;})();
generateExpr;
generateExpr;
var fnArgsTempVarDefine = (function () {var _uniq_var_777 = function () {var vars = [];
vars;
vars;
return {
newVar: (function () {var _uniq_var_768 = function () {var _uniq_var_222 = call(getUniqVarName);
_uniq_var_222;
var _uniq_var_223 = (function () {var _uniq_var_764 = function (_uniq_var_762, _uniq_var_763) {
if (typeof _uniq_var_762.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_762.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_762.join.apply(_uniq_var_762, arguments);
} else if (_uniq_var_762.join !== undefined) {
if (_uniq_var_763 === undefined) {
return _uniq_var_762.join;
}
_uniq_var_762.join = _uniq_var_763;
}return _uniq_var_762;
};_uniq_var_764.__lix_func__ = true;return _uniq_var_764;})()(['_at', _uniq_var_222], "");
_uniq_var_223;
var ret = _uniq_var_223;
ret;
ret;
var _uniq_var_224 = (function () {var _uniq_var_767 = function (_uniq_var_765, _uniq_var_766) {
if (typeof _uniq_var_765.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_765.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_765.push.apply(_uniq_var_765, arguments);
} else if (_uniq_var_765.push !== undefined) {
if (_uniq_var_766 === undefined) {
return _uniq_var_765.push;
}
_uniq_var_765.push = _uniq_var_766;
}return _uniq_var_765;
};_uniq_var_767.__lix_func__ = true;return _uniq_var_767;})()(vars, ret);
_uniq_var_224;
_uniq_var_224;
return ret;
};_uniq_var_768.__lix_func__ = true;return _uniq_var_768;})(),
vars: (function () {var _uniq_var_769 = function () {return vars;
};_uniq_var_769.__lix_func__ = true;return _uniq_var_769;})(),
varToStr: (function () {var _uniq_var_776 = function () {var ret = null;
ret;
ret;
var _uniq_var_225 = true;
_uniq_var_225;
var _uniq_var_226 = null;
_uniq_var_226;
if ((_uniq_var_225 && vars.length)) {
(_uniq_var_225 = false);
var _uniq_var_227 = (function () {var _uniq_var_772 = function (_uniq_var_770, _uniq_var_771) {
if (typeof _uniq_var_770.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_770.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_770.join.apply(_uniq_var_770, arguments);
} else if (_uniq_var_770.join !== undefined) {
if (_uniq_var_771 === undefined) {
return _uniq_var_770.join;
}
_uniq_var_770.join = _uniq_var_771;
}return _uniq_var_770;
};_uniq_var_772.__lix_func__ = true;return _uniq_var_772;})()(vars, ", ");
_uniq_var_227;
var _uniq_var_228 = (function () {var _uniq_var_775 = function (_uniq_var_773, _uniq_var_774) {
if (typeof _uniq_var_773.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_773.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_773.join.apply(_uniq_var_773, arguments);
} else if (_uniq_var_773.join !== undefined) {
if (_uniq_var_774 === undefined) {
return _uniq_var_773.join;
}
_uniq_var_773.join = _uniq_var_774;
}return _uniq_var_773;
};_uniq_var_775.__lix_func__ = true;return _uniq_var_775;})()(['var ', _uniq_var_227, ";\n"], "");
_uniq_var_228;
(_uniq_var_226 = (ret = _uniq_var_228));

};
_uniq_var_226;
return ret;
};_uniq_var_776.__lix_func__ = true;return _uniq_var_776;})()
};
};_uniq_var_777.__lix_func__ = true;return _uniq_var_777;})();
fnArgsTempVarDefine;
fnArgsTempVarDefine;
var predefineFn = (function () {var _uniq_var_804 = function (name, candidates) {var body = [];
body;
body;
var prefix = "_fn_";
prefix;
prefix;
var getArgListString = (function () {var _uniq_var_784 = function (n) {var ret = [];
ret;
ret;
var i = 0;
i;
i;
var _uniq_var_229 = __lt__(i, n);
_uniq_var_229;
while (_uniq_var_229) {
var _uniq_var_230 = __add__(prefix, i);
_uniq_var_230;
var _uniq_var_231 = (function () {var _uniq_var_780 = function (_uniq_var_778, _uniq_var_779) {
if (typeof _uniq_var_778.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_778.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_778.push.apply(_uniq_var_778, arguments);
} else if (_uniq_var_778.push !== undefined) {
if (_uniq_var_779 === undefined) {
return _uniq_var_778.push;
}
_uniq_var_778.push = _uniq_var_779;
}return _uniq_var_778;
};_uniq_var_780.__lix_func__ = true;return _uniq_var_780;})()(ret, _uniq_var_230);
_uniq_var_231;
_uniq_var_231;
var _uniq_var_232 = __add__(i, 1);
_uniq_var_232;
(i = _uniq_var_232);
var _uniq_var_229 = __lt__(i, n);
_uniq_var_229;
}
null;
var _uniq_var_233 = (function () {var _uniq_var_783 = function (_uniq_var_781, _uniq_var_782) {
if (typeof _uniq_var_781.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_781.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_781.join.apply(_uniq_var_781, arguments);
} else if (_uniq_var_781.join !== undefined) {
if (_uniq_var_782 === undefined) {
return _uniq_var_781.join;
}
_uniq_var_781.join = _uniq_var_782;
}return _uniq_var_781;
};_uniq_var_783.__lix_func__ = true;return _uniq_var_783;})()(ret, ", ");
_uniq_var_233;
return _uniq_var_233;
};_uniq_var_784.__lix_func__ = true;return _uniq_var_784;})();
getArgListString;
getArgListString;
var max_narg = 0;
max_narg;
max_narg;
var _uniq_var_250 = foreach(candidates, (function () {var _uniq_var_797 = function (item) {var _uniq_var_234 = true;
_uniq_var_234;
var _uniq_var_235 = null;
_uniq_var_235;
var _uniq_var_236 = __gt__(item.narg, max_narg);
_uniq_var_236;
if ((_uniq_var_234 && _uniq_var_236)) {
(_uniq_var_234 = false);
(_uniq_var_235 = (max_narg = item.narg));

};
_uniq_var_235;
var _uniq_var_237 = call(fnArgsTempVarDefine);
_uniq_var_237;
var def = _uniq_var_237;
def;
def;
var _uniq_var_238 = flattenArgumentsCondition(item.condition, def);
_uniq_var_238;
var condition = _uniq_var_238;
condition;
condition;
var _uniq_var_239 = call(getArgListString, item.narg);
_uniq_var_239;
var _uniq_var_240 = (function () {var _uniq_var_787 = function (_uniq_var_785, _uniq_var_786) {
if (typeof _uniq_var_785.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_785.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_785.join.apply(_uniq_var_785, arguments);
} else if (_uniq_var_785.join !== undefined) {
if (_uniq_var_786 === undefined) {
return _uniq_var_785.join;
}
_uniq_var_785.join = _uniq_var_786;
}return _uniq_var_785;
};_uniq_var_787.__lix_func__ = true;return _uniq_var_787;})()(["return ", item.func, "(", _uniq_var_239, ");\n"], "");
_uniq_var_240;
var stmt = _uniq_var_240;
stmt;
stmt;
var _uniq_var_241 = true;
_uniq_var_241;
var _uniq_var_242 = null;
_uniq_var_242;
var _uniq_var_244 = __eq__(item.condition[1], "{va_args}");
_uniq_var_244;
if ((_uniq_var_241 && _uniq_var_244)) {
(_uniq_var_241 = false);
var _uniq_var_243 = (function () {var _uniq_var_790 = function (_uniq_var_788, _uniq_var_789) {
if (typeof _uniq_var_788.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_788.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_788.join.apply(_uniq_var_788, arguments);
} else if (_uniq_var_788.join !== undefined) {
if (_uniq_var_789 === undefined) {
return _uniq_var_788.join;
}
_uniq_var_788.join = _uniq_var_789;
}return _uniq_var_788;
};_uniq_var_790.__lix_func__ = true;return _uniq_var_790;})()(["return ", item.func, ".apply(", item.func, ", arguments);\n"], "");
_uniq_var_243;
var stmt = _uniq_var_243;
stmt;
(_uniq_var_242 = stmt);

};
_uniq_var_242;
var _uniq_var_245 = true;
_uniq_var_245;
var _uniq_var_246 = null;
_uniq_var_246;
if ((_uniq_var_245 && condition)) {
(_uniq_var_245 = false);
var _uniq_var_247 = call(def.varToStr);
_uniq_var_247;
var _uniq_var_248 = (function () {var _uniq_var_793 = function (_uniq_var_791, _uniq_var_792) {
if (typeof _uniq_var_791.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_791.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_791.join.apply(_uniq_var_791, arguments);
} else if (_uniq_var_791.join !== undefined) {
if (_uniq_var_792 === undefined) {
return _uniq_var_791.join;
}
_uniq_var_791.join = _uniq_var_792;
}return _uniq_var_791;
};_uniq_var_793.__lix_func__ = true;return _uniq_var_793;})()([_uniq_var_247, "if (", condition, ") {\n", stmt, "}\n"], "");
_uniq_var_248;
(_uniq_var_246 = (stmt = _uniq_var_248));

};
_uniq_var_246;
var _uniq_var_249 = (function () {var _uniq_var_796 = function (_uniq_var_794, _uniq_var_795) {
if (typeof _uniq_var_794.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_794.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_794.push.apply(_uniq_var_794, arguments);
} else if (_uniq_var_794.push !== undefined) {
if (_uniq_var_795 === undefined) {
return _uniq_var_794.push;
}
_uniq_var_794.push = _uniq_var_795;
}return _uniq_var_794;
};_uniq_var_796.__lix_func__ = true;return _uniq_var_796;})()(body, stmt);
_uniq_var_249;
return _uniq_var_249;
};_uniq_var_797.__lix_func__ = true;return _uniq_var_797;})());
_uniq_var_250;
_uniq_var_250;
var _uniq_var_251 = (function () {var _uniq_var_800 = function (_uniq_var_798, _uniq_var_799) {
if (typeof _uniq_var_798.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_798.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_798.join.apply(_uniq_var_798, arguments);
} else if (_uniq_var_798.join !== undefined) {
if (_uniq_var_799 === undefined) {
return _uniq_var_798.join;
}
_uniq_var_798.join = _uniq_var_799;
}return _uniq_var_798;
};_uniq_var_800.__lix_func__ = true;return _uniq_var_800;})()(body, "");
_uniq_var_251;
(body = _uniq_var_251);
var _uniq_var_252 = call(getArgListString, max_narg);
_uniq_var_252;
var _uniq_var_253 = (function () {var _uniq_var_803 = function (_uniq_var_801, _uniq_var_802) {
if (typeof _uniq_var_801.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_801.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_801.join.apply(_uniq_var_801, arguments);
} else if (_uniq_var_801.join !== undefined) {
if (_uniq_var_802 === undefined) {
return _uniq_var_801.join;
}
_uniq_var_801.join = _uniq_var_802;
}return _uniq_var_801;
};_uniq_var_803.__lix_func__ = true;return _uniq_var_803;})()(["function ", name, "(", _uniq_var_252, ") {\n", body, "}\n"], "");
_uniq_var_253;
return _uniq_var_253;
};_uniq_var_804.__lix_func__ = true;return _uniq_var_804;})();
predefineFn;
predefineFn;
var GenerateDefNew = (function () {var _uniq_var_834 = function () {var vars = {

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
defineDestructed: (function () {var _uniq_var_805 = function (d) {return (destructed = d);
};_uniq_var_805.__lix_func__ = true;return _uniq_var_805;})(),
desctructedVars: (function () {var _uniq_var_809 = function () {var _uniq_var_254 = (function () {var _uniq_var_808 = function (_uniq_var_806, _uniq_var_807) {
if (typeof _uniq_var_806.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_806.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_806.join.apply(_uniq_var_806, arguments);
} else if (_uniq_var_806.join !== undefined) {
if (_uniq_var_807 === undefined) {
return _uniq_var_806.join;
}
_uniq_var_806.join = _uniq_var_807;
}return _uniq_var_806;
};_uniq_var_808.__lix_func__ = true;return _uniq_var_808;})()(destructed, ";\n");
_uniq_var_254;
return _uniq_var_254;
};_uniq_var_809.__lix_func__ = true;return _uniq_var_809;})(),
defineFn: (function () {var _uniq_var_813 = function (name, func, condition, narg) {var _uniq_var_255 = true;
_uniq_var_255;
var _uniq_var_256 = null;
_uniq_var_256;
var _uniq_var_257 = __eq__(fns[name], undefined);
_uniq_var_257;
if ((_uniq_var_255 && _uniq_var_257)) {
(_uniq_var_255 = false);
(_uniq_var_256 = (fns[name] = []));

};
_uniq_var_256;
var _uniq_var_258 = (function () {var _uniq_var_812 = function (_uniq_var_810, _uniq_var_811) {
if (typeof _uniq_var_810.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_810.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_810.push.apply(_uniq_var_810, arguments);
} else if (_uniq_var_810.push !== undefined) {
if (_uniq_var_811 === undefined) {
return _uniq_var_810.push;
}
_uniq_var_810.push = _uniq_var_811;
}return _uniq_var_810;
};_uniq_var_812.__lix_func__ = true;return _uniq_var_812;})()(fns[name], {
func: func,
condition: condition,
narg: narg
});
_uniq_var_258;
return _uniq_var_258;
};_uniq_var_813.__lix_func__ = true;return _uniq_var_813;})(),
definedFns: (function () {var _uniq_var_821 = function () {var ret = [];
ret;
ret;
var _uniq_var_261 = foreach(fns, (function () {var _uniq_var_817 = function (item, name) {var _uniq_var_259 = predefineFn(name, item);
_uniq_var_259;
var _uniq_var_260 = (function () {var _uniq_var_816 = function (_uniq_var_814, _uniq_var_815) {
if (typeof _uniq_var_814.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_814.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_814.push.apply(_uniq_var_814, arguments);
} else if (_uniq_var_814.push !== undefined) {
if (_uniq_var_815 === undefined) {
return _uniq_var_814.push;
}
_uniq_var_814.push = _uniq_var_815;
}return _uniq_var_814;
};_uniq_var_816.__lix_func__ = true;return _uniq_var_816;})()(ret, _uniq_var_259);
_uniq_var_260;
return _uniq_var_260;
};_uniq_var_817.__lix_func__ = true;return _uniq_var_817;})());
_uniq_var_261;
_uniq_var_261;
var _uniq_var_262 = (function () {var _uniq_var_820 = function (_uniq_var_818, _uniq_var_819) {
if (typeof _uniq_var_818.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_818.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_818.join.apply(_uniq_var_818, arguments);
} else if (_uniq_var_818.join !== undefined) {
if (_uniq_var_819 === undefined) {
return _uniq_var_818.join;
}
_uniq_var_818.join = _uniq_var_819;
}return _uniq_var_818;
};_uniq_var_820.__lix_func__ = true;return _uniq_var_820;})()(ret, "\n");
_uniq_var_262;
return _uniq_var_262;
};_uniq_var_821.__lix_func__ = true;return _uniq_var_821;})(),
defineVar: (function () {var _uniq_var_826 = function (v) {var _uniq_var_263 = true;
_uniq_var_263;
var _uniq_var_264 = null;
_uniq_var_264;
if ((_uniq_var_263 && v)) {
(_uniq_var_263 = false);
(_uniq_var_264 = (vars[v] = v));

};
if (_uniq_var_263) {
var _uniq_var_265 = map(vars, (function () {var _uniq_var_822 = function (i) {return i;
};_uniq_var_822.__lix_func__ = true;return _uniq_var_822;})());
_uniq_var_265;
var vecs = _uniq_var_265;
vecs;
vecs;
var _uniq_var_266 = true;
_uniq_var_266;
var _uniq_var_267 = null;
_uniq_var_267;
var _uniq_var_270 = __gt__(vecs.length, 0);
_uniq_var_270;
if ((_uniq_var_266 && _uniq_var_270)) {
(_uniq_var_266 = false);
var _uniq_var_268 = (function () {var _uniq_var_825 = function (_uniq_var_823, _uniq_var_824) {
if (typeof _uniq_var_823.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_823.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_823.join.apply(_uniq_var_823, arguments);
} else if (_uniq_var_823.join !== undefined) {
if (_uniq_var_824 === undefined) {
return _uniq_var_823.join;
}
_uniq_var_823.join = _uniq_var_824;
}return _uniq_var_823;
};_uniq_var_825.__lix_func__ = true;return _uniq_var_825;})()(vecs, ', ');
_uniq_var_268;
var _uniq_var_269 = __add__('var ', _uniq_var_268);
_uniq_var_269;
(_uniq_var_267 = _uniq_var_269);

};
if (_uniq_var_266) {
(_uniq_var_267 = '');

};
(_uniq_var_264 = _uniq_var_267);

};
return _uniq_var_264;
};_uniq_var_826.__lix_func__ = true;return _uniq_var_826;})(),
appendExpr: (function () {var _uniq_var_833 = function (v) {var _uniq_var_271 = true;
_uniq_var_271;
var _uniq_var_272 = null;
_uniq_var_272;
if ((_uniq_var_271 && v)) {
(_uniq_var_271 = false);
var _uniq_var_273 = (function () {var _uniq_var_829 = function (_uniq_var_827, _uniq_var_828) {
if (typeof _uniq_var_827.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_827.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_827.push.apply(_uniq_var_827, arguments);
} else if (_uniq_var_827.push !== undefined) {
if (_uniq_var_828 === undefined) {
return _uniq_var_827.push;
}
_uniq_var_827.push = _uniq_var_828;
}return _uniq_var_827;
};_uniq_var_829.__lix_func__ = true;return _uniq_var_829;})()(funcs, v);
_uniq_var_273;
(_uniq_var_272 = _uniq_var_273);

};
if (_uniq_var_271) {
var _uniq_var_274 = (function () {var _uniq_var_832 = function (_uniq_var_830, _uniq_var_831) {
if (typeof _uniq_var_830.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_830.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_830.join.apply(_uniq_var_830, arguments);
} else if (_uniq_var_830.join !== undefined) {
if (_uniq_var_831 === undefined) {
return _uniq_var_830.join;
}
_uniq_var_830.join = _uniq_var_831;
}return _uniq_var_830;
};_uniq_var_832.__lix_func__ = true;return _uniq_var_832;})()(funcs, ';\n');
_uniq_var_274;
(_uniq_var_272 = _uniq_var_274);

};
return _uniq_var_272;
};_uniq_var_833.__lix_func__ = true;return _uniq_var_833;})()
};
};_uniq_var_834.__lix_func__ = true;return _uniq_var_834;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_835 = function (expr, env, ctx, def) {var _uniq_var_275 = call(GenerateDefNew);
_uniq_var_275;
var def = _uniq_var_275;
def;
def;
var _uniq_var_276 = generate(expr[0], env, ctx, def);
_uniq_var_276;
var body = _uniq_var_276;
body;
body;
var _uniq_var_277 = join(['module.exports = ', body, '\n']);
_uniq_var_277;
var body = _uniq_var_277;
body;
body;
var _uniq_var_278 = call(def.defineVar);
_uniq_var_278;
var _uniq_var_279 = call(def.appendExpr);
_uniq_var_279;
var _uniq_var_280 = call(def.definedFns);
_uniq_var_280;
var _uniq_var_281 = join(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _uniq_var_278, ";\n", _uniq_var_279, ";\n", _uniq_var_280, ";\n", body]);
_uniq_var_281;
return _uniq_var_281;
};_uniq_var_835.__lix_func__ = true;return _uniq_var_835;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_836 = function (expr, env, ctx, def) {var _uniq_var_282 = generate(expr[0], env, ctx, def);
_uniq_var_282;
return _uniq_var_282;
};_uniq_var_836.__lix_func__ = true;return _uniq_var_836;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_837 = function (expr, env, ctx, def) {var _uniq_var_283 = join(['"', expr[0], '"']);
_uniq_var_283;
return _uniq_var_283;
};_uniq_var_837.__lix_func__ = true;return _uniq_var_837;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_838 = function (expr, env, ctx, def) {var _uniq_var_284 = generate(expr[0], env, ctx, def);
_uniq_var_284;
var _uniq_var_285 = join(['("', expr[2], '" + ', _uniq_var_284, ')']);
_uniq_var_285;
return _uniq_var_285;
};_uniq_var_838.__lix_func__ = true;return _uniq_var_838;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_843 = function (expr, env, ctx, def) {var _uniq_var_287 = map(expr[0], (function () {var _uniq_var_839 = function (i) {var _uniq_var_286 = generate(i, env, ctx, def);
_uniq_var_286;
return _uniq_var_286;
};_uniq_var_839.__lix_func__ = true;return _uniq_var_839;})());
_uniq_var_287;
var _uniq_var_288 = (function () {var _uniq_var_842 = function (_uniq_var_840, _uniq_var_841) {
if (typeof _uniq_var_840.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_840.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_840.join.apply(_uniq_var_840, arguments);
} else if (_uniq_var_840.join !== undefined) {
if (_uniq_var_841 === undefined) {
return _uniq_var_840.join;
}
_uniq_var_840.join = _uniq_var_841;
}return _uniq_var_840;
};_uniq_var_842.__lix_func__ = true;return _uniq_var_842;})()(_uniq_var_287, ',');
_uniq_var_288;
var path = _uniq_var_288;
path;
path;
var _uniq_var_289 = join(['[', path, '].join("/")']);
_uniq_var_289;
return _uniq_var_289;
};_uniq_var_843.__lix_func__ = true;return _uniq_var_843;})();
generatePath;
generatePath;
var generateModule = (function () {var _uniq_var_847 = function (expr, env, ctx, def) {var _uniq_var_290 = (function () {var _uniq_var_846 = function (_uniq_var_844, _uniq_var_845) {
if (typeof _uniq_var_844.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_844.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_844.join.apply(_uniq_var_844, arguments);
} else if (_uniq_var_844.join !== undefined) {
if (_uniq_var_845 === undefined) {
return _uniq_var_844.join;
}
_uniq_var_844.join = _uniq_var_845;
}return _uniq_var_844;
};_uniq_var_846.__lix_func__ = true;return _uniq_var_846;})()(['"', expr[0], '"'], '');
_uniq_var_290;
var name = [_uniq_var_290, '{atomic}'];
name;
name;
var moduleExpr = [name, ['module', '{atomic}', '{var}']];
moduleExpr;
return moduleExpr;
};_uniq_var_847.__lix_func__ = true;return _uniq_var_847;})();
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
var generateOp = (function () {var _uniq_var_848 = function (hint) {var _uniq_var_291 = true;
_uniq_var_291;
var _uniq_var_292 = null;
_uniq_var_292;
if ((_uniq_var_291 && generateOpTable[hint])) {
(_uniq_var_291 = false);
(_uniq_var_292 = generateOpTable[hint]);

};
if (_uniq_var_291) {
(_uniq_var_292 = generateExpr);

};
return _uniq_var_292;
};_uniq_var_848.__lix_func__ = true;return _uniq_var_848;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_849 = function (expr, env, ctx, def) {var _uniq_var_293 = generateOp(expr[1]);
_uniq_var_293;
var _uniq_var_294 = _uniq_var_293(expr, env, ctx, def);
_uniq_var_294;
return _uniq_var_294;
};_uniq_var_849.__lix_func__ = true;return _uniq_var_849;})();
generate;
generate;
var env0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
env0;
env0;
var env_new = (function () {var _uniq_var_851 = function (env) {var _uniq_var_295 = env;
_uniq_var_295;
if (not(_uniq_var_295)) {
(_uniq_var_295 = env0);

};
(env = _uniq_var_295);
var Env = (function () {var _uniq_var_850 = function () {;
};_uniq_var_850.__lix_func__ = true;return _uniq_var_850;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_296 = _instance_(Env);
_uniq_var_296;
return _uniq_var_296;
};_uniq_var_851.__lix_func__ = true;return _uniq_var_851;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_853 = function (expr, define) {var _uniq_var_298 = map(expr, (function () {var _uniq_var_852 = function (item) {var _uniq_var_297 = flatten(item, define);
_uniq_var_297;
return _uniq_var_297;
};_uniq_var_852.__lix_func__ = true;return _uniq_var_852;})());
_uniq_var_298;
var _uniq_var_299 = define(_uniq_var_298);
_uniq_var_299;
return _uniq_var_299;
};_uniq_var_853.__lix_func__ = true;return _uniq_var_853;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_854 = function (expr, define) {return expr;
};_uniq_var_854.__lix_func__ = true;return _uniq_var_854;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_859 = function (expr, define) {var _uniq_var_300 = call(statementFlattenGenerator);
_uniq_var_300;
var whileDefine = _uniq_var_300;
whileDefine;
whileDefine;
var _uniq_var_301 = flatten(expr[0], whileDefine);
_uniq_var_301;
(expr[0] = _uniq_var_301);
var _uniq_var_302 = flatten(expr[2], define0);
_uniq_var_302;
(expr[2] = _uniq_var_302);
var _uniq_var_303 = call(whileDefine);
_uniq_var_303;
var _uniq_var_304 = (function () {var _uniq_var_857 = function (_uniq_var_855, _uniq_var_856) {
if (typeof _uniq_var_855.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_855.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_855.concat.apply(_uniq_var_855, arguments);
} else if (_uniq_var_855.concat !== undefined) {
if (_uniq_var_856 === undefined) {
return _uniq_var_855.concat;
}
_uniq_var_855.concat = _uniq_var_856;
}return _uniq_var_855;
};_uniq_var_857.__lix_func__ = true;return _uniq_var_857;})()(expr[2][0], _uniq_var_303);
_uniq_var_304;
(expr[2][0] = _uniq_var_304);
var _uniq_var_305 = call(whileDefine);
_uniq_var_305;
var _uniq_var_307 = foreach(_uniq_var_305, (function () {var _uniq_var_858 = function (i) {var _uniq_var_306 = define(i, true);
_uniq_var_306;
return _uniq_var_306;
};_uniq_var_858.__lix_func__ = true;return _uniq_var_858;})());
_uniq_var_307;
_uniq_var_307;
var _uniq_var_308 = define(expr, true);
_uniq_var_308;
_uniq_var_308;
return ['', '{empty}'];
};_uniq_var_859.__lix_func__ = true;return _uniq_var_859;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_864 = function (expr, define) {var _uniq_var_309 = flatten(expr[0], define);
_uniq_var_309;
var ret = _uniq_var_309;
ret;
ret;
var _uniq_var_310 = true;
_uniq_var_310;
var _uniq_var_311 = null;
_uniq_var_311;
var _uniq_var_313 = __ne__(ret[2], 'var');
_uniq_var_313;
if ((_uniq_var_310 && _uniq_var_313)) {
(_uniq_var_310 = false);
var _uniq_var_312 = define(ret);
_uniq_var_312;
var ret = _uniq_var_312;
ret;
(_uniq_var_311 = ret);

};
_uniq_var_311;
var getAndOpSeq = (function () {var _uniq_var_863 = function () {var _uniq_var_314 = call(statementFlattenGenerator);
_uniq_var_314;
var AndDefine = _uniq_var_314;
AndDefine;
AndDefine;
var _uniq_var_315 = flatten(expr[2], AndDefine);
_uniq_var_315;
var seqRet = _uniq_var_315;
seqRet;
seqRet;
var _uniq_var_316 = call(AndDefine);
_uniq_var_316;
var seq = _uniq_var_316;
seq;
seq;
var _uniq_var_317 = (function () {var _uniq_var_862 = function (_uniq_var_860, _uniq_var_861) {
if (typeof _uniq_var_860.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_860.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_860.push.apply(_uniq_var_860, arguments);
} else if (_uniq_var_860.push !== undefined) {
if (_uniq_var_861 === undefined) {
return _uniq_var_860.push;
}
_uniq_var_860.push = _uniq_var_861;
}return _uniq_var_860;
};_uniq_var_862.__lix_func__ = true;return _uniq_var_862;})()(seq, [ret, '=', seqRet]);
_uniq_var_317;
_uniq_var_317;
return [seq, '{seq}'];
};_uniq_var_863.__lix_func__ = true;return _uniq_var_863;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_318 = call(getAndOpSeq);
_uniq_var_318;
var _uniq_var_319 = define([[[ret, [[], '{empty}']], [_uniq_var_318, 'else']], 'if'], true);
_uniq_var_319;
_uniq_var_319;
return ret;
};_uniq_var_864.__lix_func__ = true;return _uniq_var_864;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_869 = function (expr, define) {var _uniq_var_320 = flatten(expr[0], define);
_uniq_var_320;
var ret = _uniq_var_320;
ret;
ret;
var _uniq_var_321 = true;
_uniq_var_321;
var _uniq_var_322 = null;
_uniq_var_322;
var _uniq_var_324 = __ne__(ret[2], 'var');
_uniq_var_324;
if ((_uniq_var_321 && _uniq_var_324)) {
(_uniq_var_321 = false);
var _uniq_var_323 = define(ret);
_uniq_var_323;
var ret = _uniq_var_323;
ret;
(_uniq_var_322 = ret);

};
_uniq_var_322;
var getAndOpSeq = (function () {var _uniq_var_868 = function () {var _uniq_var_325 = call(statementFlattenGenerator);
_uniq_var_325;
var AndDefine = _uniq_var_325;
AndDefine;
AndDefine;
var _uniq_var_326 = flatten(expr[2], AndDefine);
_uniq_var_326;
var seqRet = _uniq_var_326;
seqRet;
seqRet;
var _uniq_var_327 = call(AndDefine);
_uniq_var_327;
var seq = _uniq_var_327;
seq;
seq;
var _uniq_var_328 = (function () {var _uniq_var_867 = function (_uniq_var_865, _uniq_var_866) {
if (typeof _uniq_var_865.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_865.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_865.push.apply(_uniq_var_865, arguments);
} else if (_uniq_var_865.push !== undefined) {
if (_uniq_var_866 === undefined) {
return _uniq_var_865.push;
}
_uniq_var_865.push = _uniq_var_866;
}return _uniq_var_865;
};_uniq_var_867.__lix_func__ = true;return _uniq_var_867;})()(seq, [ret, '=', seqRet]);
_uniq_var_328;
_uniq_var_328;
return [seq, '{seq}'];
};_uniq_var_868.__lix_func__ = true;return _uniq_var_868;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_329 = call(getAndOpSeq);
_uniq_var_329;
var _uniq_var_330 = define([[[ret, _uniq_var_329]], 'if'], true);
_uniq_var_330;
_uniq_var_330;
return ret;
};_uniq_var_869.__lix_func__ = true;return _uniq_var_869;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_874 = function (expr, define, tmpVar, ctx) {var _uniq_var_343 = foreach(expr[0], (function () {var _uniq_var_873 = function (i) {var _uniq_var_331 = true;
_uniq_var_331;
var _uniq_var_332 = null;
_uniq_var_332;
var _uniq_var_335 = __eq__(i[1], 'else');
_uniq_var_335;
if ((_uniq_var_331 && _uniq_var_335)) {
(_uniq_var_331 = false);
var _uniq_var_333 = flatten(i[0], define0, ctx);
_uniq_var_333;
var elseSeq = _uniq_var_333;
elseSeq;
elseSeq;
var _uniq_var_334 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_334;
(_uniq_var_332 = _uniq_var_334);

};
var _uniq_var_338 = __eq__(i[1], 'if');
_uniq_var_338;
if ((_uniq_var_331 && _uniq_var_338)) {
(_uniq_var_331 = false);
var _uniq_var_336 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_336;
var _uniq_var_337 = define(_uniq_var_336);
_uniq_var_337;
(_uniq_var_332 = _uniq_var_337);

};
if (_uniq_var_331) {
var _uniq_var_339 = flatten(i[1], define0, ctx);
_uniq_var_339;
var ifSeq = _uniq_var_339;
ifSeq;
ifSeq;
var _uniq_var_340 = (function () {var _uniq_var_872 = function (_uniq_var_870, _uniq_var_871) {
if (typeof _uniq_var_870.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_870.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_870.unshift.apply(_uniq_var_870, arguments);
} else if (_uniq_var_870.unshift !== undefined) {
if (_uniq_var_871 === undefined) {
return _uniq_var_870.unshift;
}
_uniq_var_870.unshift = _uniq_var_871;
}return _uniq_var_870;
};_uniq_var_872.__lix_func__ = true;return _uniq_var_872;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_340;
_uniq_var_340;
var _uniq_var_341 = flatten(i[0], define);
_uniq_var_341;
var cond = _uniq_var_341;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_342 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_342;
(_uniq_var_332 = _uniq_var_342);

};
return _uniq_var_332;
};_uniq_var_873.__lix_func__ = true;return _uniq_var_873;})());
_uniq_var_343;
return _uniq_var_343;
};_uniq_var_874.__lix_func__ = true;return _uniq_var_874;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_875 = function (expr, define) {var _uniq_var_344 = define(['true', '{atomic}'], 'new');
_uniq_var_344;
var tmpVar = _uniq_var_344;
tmpVar;
tmpVar;
var retVar = ['null', '{atomic}'];
retVar;
retVar;
var retVar = ['', '{empty}'];
retVar;
retVar;
var _uniq_var_345 = _flattenIf(expr, define, tmpVar, ctx0);
_uniq_var_345;
_uniq_var_345;
return retVar;
};_uniq_var_875.__lix_func__ = true;return _uniq_var_875;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_876 = function (expr, define) {var _uniq_var_346 = flatten(expr[2], define);
_uniq_var_346;
(expr[2] = _uniq_var_346);
return expr;
};_uniq_var_876.__lix_func__ = true;return _uniq_var_876;})();
flattenAssign;
flattenAssign;
var flattenBasicOp = (function () {var _uniq_var_880 = function (expr, builtinOpName, define) {(expr[1] = [builtinOpName, '{atomic}', '{var}']);
var _uniq_var_347 = true;
_uniq_var_347;
var _uniq_var_348 = null;
_uniq_var_348;
var _uniq_var_352 = __gt__(expr.length, 3);
_uniq_var_352;
if ((_uniq_var_347 && _uniq_var_352)) {
(_uniq_var_347 = false);
var partialExpr = [expr[2], ['__', '{atomic}', '{var}']];
partialExpr;
partialExpr;
var i = 3;
i;
i;
var _uniq_var_349 = __lt__(i, expr.length);
_uniq_var_349;
while (_uniq_var_349) {
var _uniq_var_350 = (function () {var _uniq_var_879 = function (_uniq_var_877, _uniq_var_878) {
if (typeof _uniq_var_877.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_877.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_877.push.apply(_uniq_var_877, arguments);
} else if (_uniq_var_877.push !== undefined) {
if (_uniq_var_878 === undefined) {
return _uniq_var_877.push;
}
_uniq_var_877.push = _uniq_var_878;
}return _uniq_var_877;
};_uniq_var_879.__lix_func__ = true;return _uniq_var_879;})()(partialExpr, expr[i]);
_uniq_var_350;
_uniq_var_350;
var _uniq_var_351 = __add__(i, 1);
_uniq_var_351;
(i = _uniq_var_351);
var _uniq_var_349 = __lt__(i, expr.length);
_uniq_var_349;
}
null;
(_uniq_var_348 = (expr = [expr[0], expr[1], partialExpr]));

};
_uniq_var_348;
var _uniq_var_353 = flattenExpr(expr, define);
_uniq_var_353;
return _uniq_var_353;
};_uniq_var_880.__lix_func__ = true;return _uniq_var_880;})();
flattenBasicOp;
flattenBasicOp;
var flattenBind = (function () {var _uniq_var_881 = function (expr, define) {var _uniq_var_354 = flattenBasicOp(expr, '__bind__', define);
_uniq_var_354;
return _uniq_var_354;
};_uniq_var_881.__lix_func__ = true;return _uniq_var_881;})();
flattenBind;
flattenBind;
var flattenCompose = (function () {var _uniq_var_882 = function (expr, define) {var _uniq_var_355 = flattenBasicOp(expr, '__compose__', define);
_uniq_var_355;
return _uniq_var_355;
};_uniq_var_882.__lix_func__ = true;return _uniq_var_882;})();
flattenCompose;
flattenCompose;
var flattenReverseCompose = (function () {var _uniq_var_883 = function (expr, define) {var _uniq_var_356 = flattenBasicOp(expr, '__rcompose__', define);
_uniq_var_356;
return _uniq_var_356;
};_uniq_var_883.__lix_func__ = true;return _uniq_var_883;})();
flattenReverseCompose;
flattenReverseCompose;
var flattenReverseCPSCompose = (function () {var _uniq_var_884 = function (expr, define) {var _uniq_var_357 = flattenBasicOp(expr, '__rxcompose__', define);
_uniq_var_357;
return _uniq_var_357;
};_uniq_var_884.__lix_func__ = true;return _uniq_var_884;})();
flattenReverseCPSCompose;
flattenReverseCPSCompose;
var flattenCPSCompose = (function () {var _uniq_var_885 = function (expr, define) {var _uniq_var_358 = flattenBasicOp(expr, '__xcompose__', define);
_uniq_var_358;
return _uniq_var_358;
};_uniq_var_885.__lix_func__ = true;return _uniq_var_885;})();
flattenCPSCompose;
flattenCPSCompose;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_886 = function (expr, define) {var _uniq_var_359 = flatten(expr[0], define);
_uniq_var_359;
(expr[0] = _uniq_var_359);
return expr;
};_uniq_var_886.__lix_func__ = true;return _uniq_var_886;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_887 = function (expr, define) {return expr;
};_uniq_var_887.__lix_func__ = true;return _uniq_var_887;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_889 = function (expr, define) {var _uniq_var_361 = map(expr[0], (function () {var _uniq_var_888 = function (i) {var _uniq_var_360 = flatten(i, define);
_uniq_var_360;
return _uniq_var_360;
};_uniq_var_888.__lix_func__ = true;return _uniq_var_888;})());
_uniq_var_361;
(expr[0] = _uniq_var_361);
return expr;
};_uniq_var_889.__lix_func__ = true;return _uniq_var_889;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_890 = function (expr, define) {return expr;
};_uniq_var_890.__lix_func__ = true;return _uniq_var_890;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_891 = function (expr, define) {var _uniq_var_362 = true;
_uniq_var_362;
var _uniq_var_363 = null;
_uniq_var_363;
var _uniq_var_365 = __eq__(expr[1], '{index}');
_uniq_var_365;
if ((_uniq_var_362 && _uniq_var_365)) {
(_uniq_var_362 = false);
var _uniq_var_364 = flatten(expr[0], define);
_uniq_var_364;
(_uniq_var_363 = (expr[0] = _uniq_var_364));

};
_uniq_var_363;
return expr;
};_uniq_var_891.__lix_func__ = true;return _uniq_var_891;})();
flattenField;
flattenField;
var NewGlobalDefine = (function () {var _uniq_var_896 = function () {var defined = {

};
defined;
defined;
var statements = [];
statements;
statements;
return (function () {var _uniq_var_895 = function (name, value) {var ret = undefined;
ret;
ret;
var _uniq_var_366 = true;
_uniq_var_366;
var _uniq_var_367 = null;
_uniq_var_367;
var _uniq_var_373 = __eq__(arguments.length, 2);
_uniq_var_373;
if ((_uniq_var_366 && _uniq_var_373)) {
(_uniq_var_366 = false);
var _uniq_var_368 = true;
_uniq_var_368;
var _uniq_var_369 = null;
_uniq_var_369;
var _uniq_var_372 = __eq__(defined[name], undefined);
_uniq_var_372;
if ((_uniq_var_368 && _uniq_var_372)) {
(_uniq_var_368 = false);
var _uniq_var_370 = call(getUniqVarName);
_uniq_var_370;
var varName = _uniq_var_370;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_371 = (function () {var _uniq_var_894 = function (_uniq_var_892, _uniq_var_893) {
if (typeof _uniq_var_892.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_892.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_892.push.apply(_uniq_var_892, arguments);
} else if (_uniq_var_892.push !== undefined) {
if (_uniq_var_893 === undefined) {
return _uniq_var_892.push;
}
_uniq_var_892.push = _uniq_var_893;
}return _uniq_var_892;
};_uniq_var_894.__lix_func__ = true;return _uniq_var_894;})()(statements, [lixVar, ':=', value]);
_uniq_var_371;
_uniq_var_371;
(_uniq_var_369 = (defined[name] = lixVar));

};
_uniq_var_369;
(_uniq_var_367 = (ret = defined[name]));

};
if (_uniq_var_366) {
(_uniq_var_367 = (ret = statements));

};
_uniq_var_367;
return ret;
};_uniq_var_895.__lix_func__ = true;return _uniq_var_895;})();
};_uniq_var_896.__lix_func__ = true;return _uniq_var_896;})();
NewGlobalDefine;
NewGlobalDefine;
var _uniq_var_374 = call(NewGlobalDefine);
_uniq_var_374;
var globalDefine = _uniq_var_374;
globalDefine;
globalDefine;
var flattenMethod = (function () {var _uniq_var_897 = function (expr, define) {var ret = ['', '{empty}'];
ret;
ret;
var _uniq_var_375 = true;
_uniq_var_375;
var _uniq_var_376 = null;
_uniq_var_376;
var _uniq_var_378 = __eq__(expr[0][3], '{global}');
_uniq_var_378;
if ((_uniq_var_375 && _uniq_var_378)) {
(_uniq_var_375 = false);
var _uniq_var_377 = globalDefine(expr[0][0], expr);
_uniq_var_377;
(_uniq_var_376 = (ret = _uniq_var_377));

};
if (_uniq_var_375) {
var _uniq_var_379 = flattenField(expr[0], define);
_uniq_var_379;
(expr[0] = _uniq_var_379);
(_uniq_var_376 = (ret = expr));

};
_uniq_var_376;
return ret;
};_uniq_var_897.__lix_func__ = true;return _uniq_var_897;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_898 = function (expr, define) {var _uniq_var_380 = flatten(expr[2], define);
_uniq_var_380;
(expr[2] = _uniq_var_380);
return expr;
};_uniq_var_898.__lix_func__ = true;return _uniq_var_898;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_900 = function (expr, define) {var _uniq_var_382 = map(expr[0], (function () {var _uniq_var_899 = function (i) {var _uniq_var_381 = flattenProperty(i, define);
_uniq_var_381;
return _uniq_var_381;
};_uniq_var_899.__lix_func__ = true;return _uniq_var_899;})());
_uniq_var_382;
(expr[0] = _uniq_var_382);
return expr;
};_uniq_var_900.__lix_func__ = true;return _uniq_var_900;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_902 = function (expr, define) {var _uniq_var_384 = map(expr[0], (function () {var _uniq_var_901 = function (i) {var _uniq_var_383 = flatten(i, define);
_uniq_var_383;
return _uniq_var_383;
};_uniq_var_901.__lix_func__ = true;return _uniq_var_901;})());
_uniq_var_384;
(expr[0] = _uniq_var_384);
return expr;
};_uniq_var_902.__lix_func__ = true;return _uniq_var_902;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_903 = function (expr, define) {var _uniq_var_385 = flatten(expr[2], define);
_uniq_var_385;
(expr[2] = _uniq_var_385);
return expr;
};_uniq_var_903.__lix_func__ = true;return _uniq_var_903;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_904 = function (expr, define) {var _uniq_var_386 = true;
_uniq_var_386;
var _uniq_var_387 = null;
_uniq_var_387;
var _uniq_var_390 = __eq__(expr[1], '{.}');
_uniq_var_390;
if ((_uniq_var_386 && _uniq_var_390)) {
(_uniq_var_386 = false);
var _uniq_var_388 = flattenFieldAccess(expr[0], define);
_uniq_var_388;
(expr[0] = _uniq_var_388);
var _uniq_var_389 = flattenField(expr[2], define);
_uniq_var_389;
(_uniq_var_387 = (expr[2] = _uniq_var_389));

};
if (_uniq_var_386) {
var _uniq_var_391 = flatten(expr, define);
_uniq_var_391;
(_uniq_var_387 = (expr = _uniq_var_391));

};
_uniq_var_387;
return expr;
};_uniq_var_904.__lix_func__ = true;return _uniq_var_904;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_905 = function (expr, define) {return expr;
};_uniq_var_905.__lix_func__ = true;return _uniq_var_905;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_906 = function (expr, define) {var _uniq_var_392 = flatten(expr[0], define);
_uniq_var_392;
return _uniq_var_392;
};_uniq_var_906.__lix_func__ = true;return _uniq_var_906;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_920 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_919 = function (statement, tmpVarName) {var _uniq_var_393 = true;
_uniq_var_393;
var _uniq_var_394 = null;
_uniq_var_394;
var _uniq_var_395 = __eq__(statement, undefined);
_uniq_var_395;
if ((_uniq_var_393 && _uniq_var_395)) {
(_uniq_var_393 = false);
(_uniq_var_394 = data);

};
var _uniq_var_397 = __eq__(tmpVarName, true);
_uniq_var_397;
if ((_uniq_var_393 && _uniq_var_397)) {
(_uniq_var_393 = false);
var _uniq_var_396 = (function () {var _uniq_var_909 = function (_uniq_var_907, _uniq_var_908) {
if (typeof _uniq_var_907.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_907.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_907.push.apply(_uniq_var_907, arguments);
} else if (_uniq_var_907.push !== undefined) {
if (_uniq_var_908 === undefined) {
return _uniq_var_907.push;
}
_uniq_var_907.push = _uniq_var_908;
}return _uniq_var_907;
};_uniq_var_909.__lix_func__ = true;return _uniq_var_909;})()(data, statement);
_uniq_var_396;
(_uniq_var_394 = _uniq_var_396);

};
var _uniq_var_401 = __eq__(tmpVarName, undefined);
_uniq_var_401;
if ((_uniq_var_393 && _uniq_var_401)) {
(_uniq_var_393 = false);
var _uniq_var_398 = call(getUniqVarName);
_uniq_var_398;
var varName = _uniq_var_398;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_399 = (function () {var _uniq_var_912 = function (_uniq_var_910, _uniq_var_911) {
if (typeof _uniq_var_910.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_910.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_910.push.apply(_uniq_var_910, arguments);
} else if (_uniq_var_910.push !== undefined) {
if (_uniq_var_911 === undefined) {
return _uniq_var_910.push;
}
_uniq_var_910.push = _uniq_var_911;
}return _uniq_var_910;
};_uniq_var_912.__lix_func__ = true;return _uniq_var_912;})()(data, statement);
_uniq_var_399;
_uniq_var_399;
var _uniq_var_400 = (function () {var _uniq_var_915 = function (_uniq_var_913, _uniq_var_914) {
if (typeof _uniq_var_913.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_913.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_913.push.apply(_uniq_var_913, arguments);
} else if (_uniq_var_913.push !== undefined) {
if (_uniq_var_914 === undefined) {
return _uniq_var_913.push;
}
_uniq_var_913.push = _uniq_var_914;
}return _uniq_var_913;
};_uniq_var_915.__lix_func__ = true;return _uniq_var_915;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_400;
_uniq_var_400;
(_uniq_var_394 = lixVar);

};
var _uniq_var_404 = __eq__(tmpVarName, 'new');
_uniq_var_404;
if ((_uniq_var_393 && _uniq_var_404)) {
(_uniq_var_393 = false);
var _uniq_var_402 = call(getUniqVarName);
_uniq_var_402;
var varName = _uniq_var_402;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var _uniq_var_403 = (function () {var _uniq_var_918 = function (_uniq_var_916, _uniq_var_917) {
if (typeof _uniq_var_916.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_916.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_916.push.apply(_uniq_var_916, arguments);
} else if (_uniq_var_916.push !== undefined) {
if (_uniq_var_917 === undefined) {
return _uniq_var_916.push;
}
_uniq_var_916.push = _uniq_var_917;
}return _uniq_var_916;
};_uniq_var_918.__lix_func__ = true;return _uniq_var_918;})()(data, [lixVar, ':=', statement]);
_uniq_var_403;
_uniq_var_403;
(_uniq_var_394 = lixVar);

};
return _uniq_var_394;
};_uniq_var_919.__lix_func__ = true;return _uniq_var_919;})();
};_uniq_var_920.__lix_func__ = true;return _uniq_var_920;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_932 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_921 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_405 = true;
_uniq_var_405;
var _uniq_var_406 = null;
_uniq_var_406;
var _uniq_var_408 = seqCtx;
_uniq_var_408;
if (_uniq_var_408) {
var _uniq_var_409 = parseInt(index);
_uniq_var_409;
var _uniq_var_410 = __sub__(expr[0].length, 1);
_uniq_var_410;
var _uniq_var_411 = __eq__(_uniq_var_409, _uniq_var_410);
_uniq_var_411;
(_uniq_var_408 = _uniq_var_411);

};
if ((_uniq_var_405 && _uniq_var_408)) {
(_uniq_var_405 = false);
var _uniq_var_407 = seqCtx(stmt);
_uniq_var_407;
var ret = _uniq_var_407;
ret;
(_uniq_var_406 = ret);

};
_uniq_var_406;
return ret;
};_uniq_var_921.__lix_func__ = true;return _uniq_var_921;})();
ctx;
ctx;
var _uniq_var_438 = foreach(expr[0], (function () {var _uniq_var_931 = function (item, index) {var _uniq_var_412 = call(statementFlattenGenerator);
_uniq_var_412;
var exprDefine = _uniq_var_412;
exprDefine;
exprDefine;
var _uniq_var_413 = flatten(item, exprDefine);
_uniq_var_413;
var itemRet = _uniq_var_413;
itemRet;
itemRet;
var _uniq_var_414 = call(exprDefine);
_uniq_var_414;
var _uniq_var_415 = (function () {var _uniq_var_924 = function (_uniq_var_922, _uniq_var_923) {
if (typeof _uniq_var_922.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_922.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_922.concat.apply(_uniq_var_922, arguments);
} else if (_uniq_var_922.concat !== undefined) {
if (_uniq_var_923 === undefined) {
return _uniq_var_922.concat;
}
_uniq_var_922.concat = _uniq_var_923;
}return _uniq_var_922;
};_uniq_var_924.__lix_func__ = true;return _uniq_var_924;})()(ret, _uniq_var_414);
_uniq_var_415;
(ret = _uniq_var_415);
var _uniq_var_416 = ctx(itemRet, index);
_uniq_var_416;
var stmtRet = _uniq_var_416;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_925 = function (expr) {var _uniq_var_417 = __eq__(expr[1], '{atomic}');
_uniq_var_417;
var _uniq_var_418 = _uniq_var_417;
_uniq_var_418;
if (_uniq_var_418) {
var _uniq_var_419 = __ne__(expr[3], undefined);
_uniq_var_419;
(_uniq_var_418 = _uniq_var_419);

};
return _uniq_var_418;
};_uniq_var_925.__lix_func__ = true;return _uniq_var_925;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_926 = function (expr) {var _uniq_var_420 = __eq__(expr[1], '{atomic}');
_uniq_var_420;
var _uniq_var_421 = _uniq_var_420;
_uniq_var_421;
if (_uniq_var_421) {
var _uniq_var_422 = __eq__(expr[3], undefined);
_uniq_var_422;
(_uniq_var_421 = _uniq_var_422);

};
return _uniq_var_421;
};_uniq_var_926.__lix_func__ = true;return _uniq_var_926;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_927 = function (expr) {var _uniq_var_423 = isRealVar(expr);
_uniq_var_423;
var _uniq_var_424 = _uniq_var_423;
_uniq_var_424;
if (not(_uniq_var_424)) {
var _uniq_var_425 = __ne__(expr[1], 'if');
_uniq_var_425;
var _uniq_var_426 = _uniq_var_425;
_uniq_var_426;
if (_uniq_var_426) {
var _uniq_var_427 = __ne__(expr[1], 'while');
_uniq_var_427;
(_uniq_var_426 = _uniq_var_427);

};
(_uniq_var_424 = _uniq_var_426);

};
return _uniq_var_424;
};_uniq_var_927.__lix_func__ = true;return _uniq_var_927;})();
isRealExpr;
isRealExpr;
var _uniq_var_428 = true;
_uniq_var_428;
var _uniq_var_429 = null;
_uniq_var_429;
var _uniq_var_434 = __ne__(stmtRet[1], '{empty}');
_uniq_var_434;
var _uniq_var_435 = _uniq_var_434;
_uniq_var_435;
if (_uniq_var_435) {
var _uniq_var_436 = isTmpVar(stmtRet);
_uniq_var_436;
var _uniq_var_437 = not(_uniq_var_436);
_uniq_var_437;
(_uniq_var_435 = _uniq_var_437);

};
if ((_uniq_var_428 && _uniq_var_435)) {
(_uniq_var_428 = false);
var _uniq_var_430 = true;
_uniq_var_430;
var _uniq_var_431 = null;
_uniq_var_431;
var _uniq_var_432 = isRealExpr(stmtRet);
_uniq_var_432;
if ((_uniq_var_430 && _uniq_var_432)) {
(_uniq_var_430 = false);
(_uniq_var_431 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_431;
var _uniq_var_433 = (function () {var _uniq_var_930 = function (_uniq_var_928, _uniq_var_929) {
if (typeof _uniq_var_928.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_928.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_928.push.apply(_uniq_var_928, arguments);
} else if (_uniq_var_928.push !== undefined) {
if (_uniq_var_929 === undefined) {
return _uniq_var_928.push;
}
_uniq_var_928.push = _uniq_var_929;
}return _uniq_var_928;
};_uniq_var_930.__lix_func__ = true;return _uniq_var_930;})()(ret, stmtRet);
_uniq_var_433;
(_uniq_var_429 = _uniq_var_433);

};
return _uniq_var_429;
};_uniq_var_931.__lix_func__ = true;return _uniq_var_931;})());
_uniq_var_438;
_uniq_var_438;
(expr[0] = ret);
return expr;
};_uniq_var_932.__lix_func__ = true;return _uniq_var_932;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_939 = function (expr, define) {var trapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
trapExpr;
trapExpr;
var _uniq_var_439 = flatten(expr[0], define);
_uniq_var_439;
var ret = _uniq_var_439;
ret;
ret;
var _uniq_var_440 = call(globalDefine);
_uniq_var_440;
var _uniq_var_441 = (function () {var _uniq_var_935 = function (_uniq_var_933, _uniq_var_934) {
if (typeof _uniq_var_933.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_933.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_933.concat.apply(_uniq_var_933, arguments);
} else if (_uniq_var_933.concat !== undefined) {
if (_uniq_var_934 === undefined) {
return _uniq_var_933.concat;
}
_uniq_var_933.concat = _uniq_var_934;
}return _uniq_var_933;
};_uniq_var_935.__lix_func__ = true;return _uniq_var_935;})()(trapExpr, _uniq_var_440);
_uniq_var_441;
var _uniq_var_442 = (function () {var _uniq_var_938 = function (_uniq_var_936, _uniq_var_937) {
if (typeof _uniq_var_936.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_936.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_936.concat.apply(_uniq_var_936, arguments);
} else if (_uniq_var_936.concat !== undefined) {
if (_uniq_var_937 === undefined) {
return _uniq_var_936.concat;
}
_uniq_var_936.concat = _uniq_var_937;
}return _uniq_var_936;
};_uniq_var_938.__lix_func__ = true;return _uniq_var_938;})()(_uniq_var_441, ret[0]);
_uniq_var_442;
(ret[0] = _uniq_var_442);
return [ret, '{start}'];
};_uniq_var_939.__lix_func__ = true;return _uniq_var_939;})();
flattenStart;
flattenStart;
var flattenModule = (function () {var _uniq_var_943 = function (expr, define) {var _uniq_var_443 = true;
_uniq_var_443;
var _uniq_var_444 = null;
_uniq_var_444;
var _uniq_var_446 = __eq__(expr[2], '{var}');
_uniq_var_446;
if ((_uniq_var_443 && _uniq_var_446)) {
(_uniq_var_443 = false);
var _uniq_var_445 = (function () {var _uniq_var_942 = function (_uniq_var_940, _uniq_var_941) {
if (typeof _uniq_var_940.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_940.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_940.join.apply(_uniq_var_940, arguments);
} else if (_uniq_var_940.join !== undefined) {
if (_uniq_var_941 === undefined) {
return _uniq_var_940.join;
}
_uniq_var_940.join = _uniq_var_941;
}return _uniq_var_940;
};_uniq_var_942.__lix_func__ = true;return _uniq_var_942;})()(['"', expr[0], '"'], '');
_uniq_var_445;
var name = [_uniq_var_445, '{atomic}'];
name;
(_uniq_var_444 = name);

};
var _uniq_var_448 = __eq__(expr[2], '{index}');
_uniq_var_448;
if ((_uniq_var_443 && _uniq_var_448)) {
(_uniq_var_443 = false);
var _uniq_var_447 = flatten(expr[0], define);
_uniq_var_447;
var name = _uniq_var_447;
name;
(_uniq_var_444 = name);

};
_uniq_var_444;
var moduleExpr = [name, ['require', '{atomic}', '{var}']];
moduleExpr;
moduleExpr;
var _uniq_var_449 = define(moduleExpr);
_uniq_var_449;
return _uniq_var_449;
};_uniq_var_943.__lix_func__ = true;return _uniq_var_943;})();
flattenModule;
flattenModule;
var flattenDefer = (function () {var _uniq_var_944 = function (expr, define) {return ['undefined', '{atomic}'];
};_uniq_var_944.__lix_func__ = true;return _uniq_var_944;})();
flattenDefer;
flattenDefer;
var flattenAmpersand = (function () {var _uniq_var_945 = function (expr, define) {return expr;
};_uniq_var_945.__lix_func__ = true;return _uniq_var_945;})();
flattenAmpersand;
flattenAmpersand;
var flattenAmpersandObject = (function () {var _uniq_var_946 = function (expr, define) {return expr;
};_uniq_var_946.__lix_func__ = true;return _uniq_var_946;})();
flattenAmpersandObject;
flattenAmpersandObject;
var flattenAmpersandBracket = (function () {var _uniq_var_947 = function (expr, define) {return expr;
};_uniq_var_947.__lix_func__ = true;return _uniq_var_947;})();
flattenAmpersandBracket;
flattenAmpersandBracket;
var flattenAnyTypeDestructor = (function () {var _uniq_var_948 = function (arg) {return [];
};_uniq_var_948.__lix_func__ = true;return _uniq_var_948;})();
flattenAnyTypeDestructor;
flattenAnyTypeDestructor;
var getAtomicExprVarName = (function () {var _uniq_var_949 = function (expr) {var _uniq_var_450 = transformVarName(expr[0]);
_uniq_var_450;
var varName = _uniq_var_450;
varName;
varName;
var _uniq_var_451 = true;
_uniq_var_451;
var _uniq_var_452 = null;
_uniq_var_452;
var _uniq_var_453 = __eq__(expr[3], "{tmp}");
_uniq_var_453;
if ((_uniq_var_451 && _uniq_var_453)) {
(_uniq_var_451 = false);
(_uniq_var_452 = (varName = expr[0]));

};
_uniq_var_452;
return varName;
};_uniq_var_949.__lix_func__ = true;return _uniq_var_949;})();
getAtomicExprVarName;
getAtomicExprVarName;
var flattenIndexDestructor = (function () {var _uniq_var_959 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_454 = getAtomicExprVarName(args[2][0]);
_uniq_var_454;
var varName = _uniq_var_454;
varName;
varName;
var _uniq_var_455 = (function () {var _uniq_var_952 = function (_uniq_var_950, _uniq_var_951) {
if (typeof _uniq_var_950.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_950.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_950.join.apply(_uniq_var_950, arguments);
} else if (_uniq_var_950.join !== undefined) {
if (_uniq_var_951 === undefined) {
return _uniq_var_950.join;
}
_uniq_var_950.join = _uniq_var_951;
}return _uniq_var_950;
};_uniq_var_952.__lix_func__ = true;return _uniq_var_952;})()(["var ", varName, " = ", objName, "[", args[0], "]"], "");
_uniq_var_455;
var _uniq_var_456 = (function () {var _uniq_var_955 = function (_uniq_var_953, _uniq_var_954) {
if (typeof _uniq_var_953.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_953.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_953.push.apply(_uniq_var_953, arguments);
} else if (_uniq_var_953.push !== undefined) {
if (_uniq_var_954 === undefined) {
return _uniq_var_953.push;
}
_uniq_var_953.push = _uniq_var_954;
}return _uniq_var_953;
};_uniq_var_955.__lix_func__ = true;return _uniq_var_955;})()(ret, _uniq_var_455);
_uniq_var_456;
_uniq_var_456;
var _uniq_var_457 = flattenDestructor(args[2], varName);
_uniq_var_457;
var _uniq_var_458 = (function () {var _uniq_var_958 = function (_uniq_var_956, _uniq_var_957) {
if (typeof _uniq_var_956.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_956.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_956.concat.apply(_uniq_var_956, arguments);
} else if (_uniq_var_956.concat !== undefined) {
if (_uniq_var_957 === undefined) {
return _uniq_var_956.concat;
}
_uniq_var_956.concat = _uniq_var_957;
}return _uniq_var_956;
};_uniq_var_958.__lix_func__ = true;return _uniq_var_958;})()(ret, _uniq_var_457);
_uniq_var_458;
(ret = _uniq_var_458);
return ret;
};_uniq_var_959.__lix_func__ = true;return _uniq_var_959;})();
flattenIndexDestructor;
flattenIndexDestructor;
var flattenFieldDestructor = (function () {var _uniq_var_969 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_459 = getAtomicExprVarName(args[2][0]);
_uniq_var_459;
var varName = _uniq_var_459;
varName;
varName;
var _uniq_var_460 = (function () {var _uniq_var_962 = function (_uniq_var_960, _uniq_var_961) {
if (typeof _uniq_var_960.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_960.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_960.join.apply(_uniq_var_960, arguments);
} else if (_uniq_var_960.join !== undefined) {
if (_uniq_var_961 === undefined) {
return _uniq_var_960.join;
}
_uniq_var_960.join = _uniq_var_961;
}return _uniq_var_960;
};_uniq_var_962.__lix_func__ = true;return _uniq_var_962;})()(["var ", varName, " = ", objName, ".", args[0]], "");
_uniq_var_460;
var _uniq_var_461 = (function () {var _uniq_var_965 = function (_uniq_var_963, _uniq_var_964) {
if (typeof _uniq_var_963.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_963.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_963.push.apply(_uniq_var_963, arguments);
} else if (_uniq_var_963.push !== undefined) {
if (_uniq_var_964 === undefined) {
return _uniq_var_963.push;
}
_uniq_var_963.push = _uniq_var_964;
}return _uniq_var_963;
};_uniq_var_965.__lix_func__ = true;return _uniq_var_965;})()(ret, _uniq_var_460);
_uniq_var_461;
_uniq_var_461;
var _uniq_var_462 = flattenDestructor(args[2], varName);
_uniq_var_462;
var _uniq_var_463 = (function () {var _uniq_var_968 = function (_uniq_var_966, _uniq_var_967) {
if (typeof _uniq_var_966.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_966.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_966.concat.apply(_uniq_var_966, arguments);
} else if (_uniq_var_966.concat !== undefined) {
if (_uniq_var_967 === undefined) {
return _uniq_var_966.concat;
}
_uniq_var_966.concat = _uniq_var_967;
}return _uniq_var_966;
};_uniq_var_968.__lix_func__ = true;return _uniq_var_968;})()(ret, _uniq_var_462);
_uniq_var_463;
(ret = _uniq_var_463);
return ret;
};_uniq_var_969.__lix_func__ = true;return _uniq_var_969;})();
flattenFieldDestructor;
flattenFieldDestructor;
var flattenObjectDestructor = (function () {var _uniq_var_974 = function (args, objName) {var ret = [];
ret;
ret;
var _uniq_var_466 = foreach(args[2], (function () {var _uniq_var_973 = function (item, index) {var _uniq_var_464 = flattenDestructor(item, objName);
_uniq_var_464;
var _uniq_var_465 = (function () {var _uniq_var_972 = function (_uniq_var_970, _uniq_var_971) {
if (typeof _uniq_var_970.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_970.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_970.concat.apply(_uniq_var_970, arguments);
} else if (_uniq_var_970.concat !== undefined) {
if (_uniq_var_971 === undefined) {
return _uniq_var_970.concat;
}
_uniq_var_970.concat = _uniq_var_971;
}return _uniq_var_970;
};_uniq_var_972.__lix_func__ = true;return _uniq_var_972;})()(ret, _uniq_var_464);
_uniq_var_465;
return (ret = _uniq_var_465);
};_uniq_var_973.__lix_func__ = true;return _uniq_var_973;})());
_uniq_var_466;
_uniq_var_466;
return ret;
};_uniq_var_974.__lix_func__ = true;return _uniq_var_974;})();
flattenObjectDestructor;
flattenObjectDestructor;
var flattenNotDestructor = (function () {var _uniq_var_975 = function (args, varName) {var _uniq_var_467 = flattenDestructor(args[2], varName);
_uniq_var_467;
return _uniq_var_467;
};_uniq_var_975.__lix_func__ = true;return _uniq_var_975;})();
flattenNotDestructor;
flattenNotDestructor;
var flattenAndDestructor = (function () {var _uniq_var_982 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_468 = flattenDestructor(args[2], varName);
_uniq_var_468;
var _uniq_var_469 = (function () {var _uniq_var_978 = function (_uniq_var_976, _uniq_var_977) {
if (typeof _uniq_var_976.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_976.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_976.concat.apply(_uniq_var_976, arguments);
} else if (_uniq_var_976.concat !== undefined) {
if (_uniq_var_977 === undefined) {
return _uniq_var_976.concat;
}
_uniq_var_976.concat = _uniq_var_977;
}return _uniq_var_976;
};_uniq_var_978.__lix_func__ = true;return _uniq_var_978;})()(ret, _uniq_var_468);
_uniq_var_469;
(ret = _uniq_var_469);
var _uniq_var_470 = flattenDestructor(args[3], varName);
_uniq_var_470;
var _uniq_var_471 = (function () {var _uniq_var_981 = function (_uniq_var_979, _uniq_var_980) {
if (typeof _uniq_var_979.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_979.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_979.concat.apply(_uniq_var_979, arguments);
} else if (_uniq_var_979.concat !== undefined) {
if (_uniq_var_980 === undefined) {
return _uniq_var_979.concat;
}
_uniq_var_979.concat = _uniq_var_980;
}return _uniq_var_979;
};_uniq_var_981.__lix_func__ = true;return _uniq_var_981;})()(ret, _uniq_var_470);
_uniq_var_471;
(ret = _uniq_var_471);
return ret;
};_uniq_var_982.__lix_func__ = true;return _uniq_var_982;})();
flattenAndDestructor;
flattenAndDestructor;
var flattenOrDestructor = (function () {var _uniq_var_989 = function (args, varName) {var ret = [];
ret;
ret;
var _uniq_var_472 = flattenDestructor(args[2], varName);
_uniq_var_472;
var _uniq_var_473 = (function () {var _uniq_var_985 = function (_uniq_var_983, _uniq_var_984) {
if (typeof _uniq_var_983.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_983.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_983.concat.apply(_uniq_var_983, arguments);
} else if (_uniq_var_983.concat !== undefined) {
if (_uniq_var_984 === undefined) {
return _uniq_var_983.concat;
}
_uniq_var_983.concat = _uniq_var_984;
}return _uniq_var_983;
};_uniq_var_985.__lix_func__ = true;return _uniq_var_985;})()(ret, _uniq_var_472);
_uniq_var_473;
(ret = _uniq_var_473);
var _uniq_var_474 = flattenDestructor(args[3], varName);
_uniq_var_474;
var _uniq_var_475 = (function () {var _uniq_var_988 = function (_uniq_var_986, _uniq_var_987) {
if (typeof _uniq_var_986.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_986.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_986.concat.apply(_uniq_var_986, arguments);
} else if (_uniq_var_986.concat !== undefined) {
if (_uniq_var_987 === undefined) {
return _uniq_var_986.concat;
}
_uniq_var_986.concat = _uniq_var_987;
}return _uniq_var_986;
};_uniq_var_988.__lix_func__ = true;return _uniq_var_988;})()(ret, _uniq_var_474);
_uniq_var_475;
(ret = _uniq_var_475);
return ret;
};_uniq_var_989.__lix_func__ = true;return _uniq_var_989;})();
flattenOrDestructor;
flattenOrDestructor;
var flattenNamedDestructor = (function () {var _uniq_var_999 = function (args, oldName) {var ret = [];
ret;
ret;
var _uniq_var_476 = getAtomicExprVarName(args[0]);
_uniq_var_476;
var varName = _uniq_var_476;
varName;
varName;
var _uniq_var_477 = true;
_uniq_var_477;
var _uniq_var_478 = null;
_uniq_var_478;
var _uniq_var_481 = __ne__(oldName, "arguments");
_uniq_var_481;
if ((_uniq_var_477 && _uniq_var_481)) {
(_uniq_var_477 = false);
var _uniq_var_479 = (function () {var _uniq_var_992 = function (_uniq_var_990, _uniq_var_991) {
if (typeof _uniq_var_990.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_990.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_990.join.apply(_uniq_var_990, arguments);
} else if (_uniq_var_990.join !== undefined) {
if (_uniq_var_991 === undefined) {
return _uniq_var_990.join;
}
_uniq_var_990.join = _uniq_var_991;
}return _uniq_var_990;
};_uniq_var_992.__lix_func__ = true;return _uniq_var_992;})()(["var ", varName, " = ", oldName], "");
_uniq_var_479;
var _uniq_var_480 = (function () {var _uniq_var_995 = function (_uniq_var_993, _uniq_var_994) {
if (typeof _uniq_var_993.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_993.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_993.push.apply(_uniq_var_993, arguments);
} else if (_uniq_var_993.push !== undefined) {
if (_uniq_var_994 === undefined) {
return _uniq_var_993.push;
}
_uniq_var_993.push = _uniq_var_994;
}return _uniq_var_993;
};_uniq_var_995.__lix_func__ = true;return _uniq_var_995;})()(ret, _uniq_var_479);
_uniq_var_480;
(_uniq_var_478 = _uniq_var_480);

};
_uniq_var_478;
var _uniq_var_482 = flattenDestructor(args[2], varName);
_uniq_var_482;
var _uniq_var_483 = (function () {var _uniq_var_998 = function (_uniq_var_996, _uniq_var_997) {
if (typeof _uniq_var_996.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_996.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_996.concat.apply(_uniq_var_996, arguments);
} else if (_uniq_var_996.concat !== undefined) {
if (_uniq_var_997 === undefined) {
return _uniq_var_996.concat;
}
_uniq_var_996.concat = _uniq_var_997;
}return _uniq_var_996;
};_uniq_var_998.__lix_func__ = true;return _uniq_var_998;})()(ret, _uniq_var_482);
_uniq_var_483;
(ret = _uniq_var_483);
return ret;
};_uniq_var_999.__lix_func__ = true;return _uniq_var_999;})();
flattenNamedDestructor;
flattenNamedDestructor;
var flattenArrayDestructor = (function () {var _uniq_var_1010 = function (args, arrayName) {var ret = [];
ret;
ret;
var _uniq_var_492 = foreach(args[2], (function () {var _uniq_var_1009 = function (item, index) {var _uniq_var_484 = getAtomicExprVarName(item[0]);
_uniq_var_484;
var varName = _uniq_var_484;
varName;
varName;
var _uniq_var_485 = true;
_uniq_var_485;
var _uniq_var_486 = null;
_uniq_var_486;
var _uniq_var_489 = __ne__(arrayName, 'arguments');
_uniq_var_489;
if ((_uniq_var_485 && _uniq_var_489)) {
(_uniq_var_485 = false);
var _uniq_var_487 = (function () {var _uniq_var_1002 = function (_uniq_var_1000, _uniq_var_1001) {
if (typeof _uniq_var_1000.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1000.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1000.join.apply(_uniq_var_1000, arguments);
} else if (_uniq_var_1000.join !== undefined) {
if (_uniq_var_1001 === undefined) {
return _uniq_var_1000.join;
}
_uniq_var_1000.join = _uniq_var_1001;
}return _uniq_var_1000;
};_uniq_var_1002.__lix_func__ = true;return _uniq_var_1002;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_487;
var _uniq_var_488 = (function () {var _uniq_var_1005 = function (_uniq_var_1003, _uniq_var_1004) {
if (typeof _uniq_var_1003.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1003.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1003.push.apply(_uniq_var_1003, arguments);
} else if (_uniq_var_1003.push !== undefined) {
if (_uniq_var_1004 === undefined) {
return _uniq_var_1003.push;
}
_uniq_var_1003.push = _uniq_var_1004;
}return _uniq_var_1003;
};_uniq_var_1005.__lix_func__ = true;return _uniq_var_1005;})()(ret, _uniq_var_487);
_uniq_var_488;
(_uniq_var_486 = _uniq_var_488);

};
_uniq_var_486;
var _uniq_var_490 = flattenDestructor(item, varName);
_uniq_var_490;
var _uniq_var_491 = (function () {var _uniq_var_1008 = function (_uniq_var_1006, _uniq_var_1007) {
if (typeof _uniq_var_1006.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1006.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1006.concat.apply(_uniq_var_1006, arguments);
} else if (_uniq_var_1006.concat !== undefined) {
if (_uniq_var_1007 === undefined) {
return _uniq_var_1006.concat;
}
_uniq_var_1006.concat = _uniq_var_1007;
}return _uniq_var_1006;
};_uniq_var_1008.__lix_func__ = true;return _uniq_var_1008;})()(ret, _uniq_var_490);
_uniq_var_491;
return (ret = _uniq_var_491);
};_uniq_var_1009.__lix_func__ = true;return _uniq_var_1009;})());
_uniq_var_492;
_uniq_var_492;
return ret;
};_uniq_var_1010.__lix_func__ = true;return _uniq_var_1010;})();
flattenArrayDestructor;
flattenArrayDestructor;
var flattenArrayCondition = (function () {var _uniq_var_1036 = function (args, arrayName, def) {var len = args[2].length;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_493 = true;
_uniq_var_493;
var _uniq_var_494 = null;
_uniq_var_494;
var _uniq_var_497 = __ne__(arrayName, "arguments");
_uniq_var_497;
if ((_uniq_var_493 && _uniq_var_497)) {
(_uniq_var_493 = false);
var _uniq_var_495 = (function () {var _uniq_var_1013 = function (_uniq_var_1011, _uniq_var_1012) {
if (typeof _uniq_var_1011.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1011.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1011.join.apply(_uniq_var_1011, arguments);
} else if (_uniq_var_1011.join !== undefined) {
if (_uniq_var_1012 === undefined) {
return _uniq_var_1011.join;
}
_uniq_var_1011.join = _uniq_var_1012;
}return _uniq_var_1011;
};_uniq_var_1013.__lix_func__ = true;return _uniq_var_1013;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_495;
var _uniq_var_496 = (function () {var _uniq_var_1016 = function (_uniq_var_1014, _uniq_var_1015) {
if (typeof _uniq_var_1014.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1014.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1014.push.apply(_uniq_var_1014, arguments);
} else if (_uniq_var_1014.push !== undefined) {
if (_uniq_var_1015 === undefined) {
return _uniq_var_1014.push;
}
_uniq_var_1014.push = _uniq_var_1015;
}return _uniq_var_1014;
};_uniq_var_1016.__lix_func__ = true;return _uniq_var_1016;})()(ret, _uniq_var_495);
_uniq_var_496;
(_uniq_var_494 = _uniq_var_496);

};
_uniq_var_494;
var _uniq_var_498 = (function () {var _uniq_var_1019 = function (_uniq_var_1017, _uniq_var_1018) {
if (typeof _uniq_var_1017.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1017.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1017.join.apply(_uniq_var_1017, arguments);
} else if (_uniq_var_1017.join !== undefined) {
if (_uniq_var_1018 === undefined) {
return _uniq_var_1017.join;
}
_uniq_var_1017.join = _uniq_var_1018;
}return _uniq_var_1017;
};_uniq_var_1019.__lix_func__ = true;return _uniq_var_1019;})()([arrayName, ".length == ", len], "");
_uniq_var_498;
var _uniq_var_499 = (function () {var _uniq_var_1022 = function (_uniq_var_1020, _uniq_var_1021) {
if (typeof _uniq_var_1020.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1020.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1020.push.apply(_uniq_var_1020, arguments);
} else if (_uniq_var_1020.push !== undefined) {
if (_uniq_var_1021 === undefined) {
return _uniq_var_1020.push;
}
_uniq_var_1020.push = _uniq_var_1021;
}return _uniq_var_1020;
};_uniq_var_1022.__lix_func__ = true;return _uniq_var_1022;})()(ret, _uniq_var_498);
_uniq_var_499;
_uniq_var_499;
var _uniq_var_507 = foreach(args[2], (function () {var _uniq_var_1032 = function (item, index) {var _uniq_var_500 = call(def.newVar);
_uniq_var_500;
var newVar = _uniq_var_500;
newVar;
newVar;
var _uniq_var_501 = (function () {var _uniq_var_1025 = function (_uniq_var_1023, _uniq_var_1024) {
if (typeof _uniq_var_1023.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1023.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1023.join.apply(_uniq_var_1023, arguments);
} else if (_uniq_var_1023.join !== undefined) {
if (_uniq_var_1024 === undefined) {
return _uniq_var_1023.join;
}
_uniq_var_1023.join = _uniq_var_1024;
}return _uniq_var_1023;
};_uniq_var_1025.__lix_func__ = true;return _uniq_var_1025;})()([arrayName, "[", index, "]"], "");
_uniq_var_501;
var expr = _uniq_var_501;
expr;
expr;
var _uniq_var_502 = flattenCondition(item, newVar, def);
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
var _uniq_var_505 = (function () {var _uniq_var_1028 = function (_uniq_var_1026, _uniq_var_1027) {
if (typeof _uniq_var_1026.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1026.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1026.join.apply(_uniq_var_1026, arguments);
} else if (_uniq_var_1026.join !== undefined) {
if (_uniq_var_1027 === undefined) {
return _uniq_var_1026.join;
}
_uniq_var_1026.join = _uniq_var_1027;
}return _uniq_var_1026;
};_uniq_var_1028.__lix_func__ = true;return _uniq_var_1028;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_505;
var _uniq_var_506 = (function () {var _uniq_var_1031 = function (_uniq_var_1029, _uniq_var_1030) {
if (typeof _uniq_var_1029.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1029.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1029.push.apply(_uniq_var_1029, arguments);
} else if (_uniq_var_1029.push !== undefined) {
if (_uniq_var_1030 === undefined) {
return _uniq_var_1029.push;
}
_uniq_var_1029.push = _uniq_var_1030;
}return _uniq_var_1029;
};_uniq_var_1031.__lix_func__ = true;return _uniq_var_1031;})()(ret, _uniq_var_505);
_uniq_var_506;
(_uniq_var_504 = _uniq_var_506);

};
return _uniq_var_504;
};_uniq_var_1032.__lix_func__ = true;return _uniq_var_1032;})());
_uniq_var_507;
_uniq_var_507;
var _uniq_var_508 = (function () {var _uniq_var_1035 = function (_uniq_var_1033, _uniq_var_1034) {
if (typeof _uniq_var_1033.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1033.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1033.join.apply(_uniq_var_1033, arguments);
} else if (_uniq_var_1033.join !== undefined) {
if (_uniq_var_1034 === undefined) {
return _uniq_var_1033.join;
}
_uniq_var_1033.join = _uniq_var_1034;
}return _uniq_var_1033;
};_uniq_var_1035.__lix_func__ = true;return _uniq_var_1035;})()(ret, " && ");
_uniq_var_508;
return _uniq_var_508;
};_uniq_var_1036.__lix_func__ = true;return _uniq_var_1036;})();
flattenArrayCondition;
flattenArrayCondition;
var flattenIndexCondition = (function () {var _uniq_var_1043 = function (args, objectName, def) {var _uniq_var_509 = call(def.newVar);
_uniq_var_509;
var newVar = _uniq_var_509;
newVar;
newVar;
var _uniq_var_510 = (function () {var _uniq_var_1039 = function (_uniq_var_1037, _uniq_var_1038) {
if (typeof _uniq_var_1037.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1037.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1037.join.apply(_uniq_var_1037, arguments);
} else if (_uniq_var_1037.join !== undefined) {
if (_uniq_var_1038 === undefined) {
return _uniq_var_1037.join;
}
_uniq_var_1037.join = _uniq_var_1038;
}return _uniq_var_1037;
};_uniq_var_1039.__lix_func__ = true;return _uniq_var_1039;})()([objectName, "[", args[0], "]"], "");
_uniq_var_510;
var expr = _uniq_var_510;
expr;
expr;
var _uniq_var_511 = flattenCondition(args[2], newVar, def);
_uniq_var_511;
var ret = _uniq_var_511;
ret;
ret;
var _uniq_var_512 = (function () {var _uniq_var_1042 = function (_uniq_var_1040, _uniq_var_1041) {
if (typeof _uniq_var_1040.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1040.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1040.join.apply(_uniq_var_1040, arguments);
} else if (_uniq_var_1040.join !== undefined) {
if (_uniq_var_1041 === undefined) {
return _uniq_var_1040.join;
}
_uniq_var_1040.join = _uniq_var_1041;
}return _uniq_var_1040;
};_uniq_var_1042.__lix_func__ = true;return _uniq_var_1042;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_512;
return _uniq_var_512;
};_uniq_var_1043.__lix_func__ = true;return _uniq_var_1043;})();
flattenIndexCondition;
flattenIndexCondition;
var flattenFieldCondition = (function () {var _uniq_var_1050 = function (args, objectName, def) {var _uniq_var_513 = call(def.newVar);
_uniq_var_513;
var newVar = _uniq_var_513;
newVar;
newVar;
var _uniq_var_514 = (function () {var _uniq_var_1046 = function (_uniq_var_1044, _uniq_var_1045) {
if (typeof _uniq_var_1044.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1044.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1044.join.apply(_uniq_var_1044, arguments);
} else if (_uniq_var_1044.join !== undefined) {
if (_uniq_var_1045 === undefined) {
return _uniq_var_1044.join;
}
_uniq_var_1044.join = _uniq_var_1045;
}return _uniq_var_1044;
};_uniq_var_1046.__lix_func__ = true;return _uniq_var_1046;})()([objectName, ".", args[0]], "");
_uniq_var_514;
var expr = _uniq_var_514;
expr;
expr;
var _uniq_var_515 = flattenCondition(args[2], newVar, def);
_uniq_var_515;
var ret = _uniq_var_515;
ret;
ret;
var _uniq_var_516 = (function () {var _uniq_var_1049 = function (_uniq_var_1047, _uniq_var_1048) {
if (typeof _uniq_var_1047.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1047.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1047.join.apply(_uniq_var_1047, arguments);
} else if (_uniq_var_1047.join !== undefined) {
if (_uniq_var_1048 === undefined) {
return _uniq_var_1047.join;
}
_uniq_var_1047.join = _uniq_var_1048;
}return _uniq_var_1047;
};_uniq_var_1049.__lix_func__ = true;return _uniq_var_1049;})()(["((", newVar, ' = ', expr, ") || 1) && (", ret, ")"], "");
_uniq_var_516;
return _uniq_var_516;
};_uniq_var_1050.__lix_func__ = true;return _uniq_var_1050;})();
flattenFieldCondition;
flattenFieldCondition;
var flattenObjectCondition = (function () {var _uniq_var_1064 = function (args, objectName, def) {var ret = [];
ret;
ret;
var _uniq_var_517 = true;
_uniq_var_517;
var _uniq_var_518 = null;
_uniq_var_518;
var _uniq_var_520 = __ne__(objectName, "arguments");
_uniq_var_520;
if ((_uniq_var_517 && _uniq_var_520)) {
(_uniq_var_517 = false);
var _uniq_var_519 = (function () {var _uniq_var_1053 = function (_uniq_var_1051, _uniq_var_1052) {
if (typeof _uniq_var_1051.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1051.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1051.push.apply(_uniq_var_1051, arguments);
} else if (_uniq_var_1051.push !== undefined) {
if (_uniq_var_1052 === undefined) {
return _uniq_var_1051.push;
}
_uniq_var_1051.push = _uniq_var_1052;
}return _uniq_var_1051;
};_uniq_var_1053.__lix_func__ = true;return _uniq_var_1053;})()(ret, objectName);
_uniq_var_519;
(_uniq_var_518 = _uniq_var_519);

};
_uniq_var_518;
var _uniq_var_526 = foreach(args[2], (function () {var _uniq_var_1060 = function (item, index) {var _uniq_var_521 = flattenCondition(item, objectName, def);
_uniq_var_521;
var cond = _uniq_var_521;
cond;
cond;
var _uniq_var_522 = true;
_uniq_var_522;
var _uniq_var_523 = null;
_uniq_var_523;
if ((_uniq_var_522 && cond)) {
(_uniq_var_522 = false);
var _uniq_var_524 = (function () {var _uniq_var_1056 = function (_uniq_var_1054, _uniq_var_1055) {
if (typeof _uniq_var_1054.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1054.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1054.join.apply(_uniq_var_1054, arguments);
} else if (_uniq_var_1054.join !== undefined) {
if (_uniq_var_1055 === undefined) {
return _uniq_var_1054.join;
}
_uniq_var_1054.join = _uniq_var_1055;
}return _uniq_var_1054;
};_uniq_var_1056.__lix_func__ = true;return _uniq_var_1056;})()(["(", cond, ")"], "");
_uniq_var_524;
var _uniq_var_525 = (function () {var _uniq_var_1059 = function (_uniq_var_1057, _uniq_var_1058) {
if (typeof _uniq_var_1057.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1057.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1057.push.apply(_uniq_var_1057, arguments);
} else if (_uniq_var_1057.push !== undefined) {
if (_uniq_var_1058 === undefined) {
return _uniq_var_1057.push;
}
_uniq_var_1057.push = _uniq_var_1058;
}return _uniq_var_1057;
};_uniq_var_1059.__lix_func__ = true;return _uniq_var_1059;})()(ret, _uniq_var_524);
_uniq_var_525;
(_uniq_var_523 = _uniq_var_525);

};
return _uniq_var_523;
};_uniq_var_1060.__lix_func__ = true;return _uniq_var_1060;})());
_uniq_var_526;
_uniq_var_526;
var _uniq_var_527 = (function () {var _uniq_var_1063 = function (_uniq_var_1061, _uniq_var_1062) {
if (typeof _uniq_var_1061.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1061.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1061.join.apply(_uniq_var_1061, arguments);
} else if (_uniq_var_1061.join !== undefined) {
if (_uniq_var_1062 === undefined) {
return _uniq_var_1061.join;
}
_uniq_var_1061.join = _uniq_var_1062;
}return _uniq_var_1061;
};_uniq_var_1063.__lix_func__ = true;return _uniq_var_1063;})()(ret, " && ");
_uniq_var_527;
return _uniq_var_527;
};_uniq_var_1064.__lix_func__ = true;return _uniq_var_1064;})();
flattenObjectCondition;
flattenObjectCondition;
var flattenVAArgsCondition = (function () {var _uniq_var_1100 = function (args, arrayName, def) {var _uniq_var_528 = __add__(args[2].length, args[4].length);
_uniq_var_528;
var len = _uniq_var_528;
len;
len;
var ret = [];
ret;
ret;
var _uniq_var_529 = true;
_uniq_var_529;
var _uniq_var_530 = null;
_uniq_var_530;
var _uniq_var_533 = __ne__(arrayName, "arguments");
_uniq_var_533;
if ((_uniq_var_529 && _uniq_var_533)) {
(_uniq_var_529 = false);
var _uniq_var_531 = (function () {var _uniq_var_1067 = function (_uniq_var_1065, _uniq_var_1066) {
if (typeof _uniq_var_1065.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1065.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1065.join.apply(_uniq_var_1065, arguments);
} else if (_uniq_var_1065.join !== undefined) {
if (_uniq_var_1066 === undefined) {
return _uniq_var_1065.join;
}
_uniq_var_1065.join = _uniq_var_1066;
}return _uniq_var_1065;
};_uniq_var_1067.__lix_func__ = true;return _uniq_var_1067;})()(["Array.isArray(", arrayName, ")"], "");
_uniq_var_531;
var _uniq_var_532 = (function () {var _uniq_var_1070 = function (_uniq_var_1068, _uniq_var_1069) {
if (typeof _uniq_var_1068.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1068.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1068.push.apply(_uniq_var_1068, arguments);
} else if (_uniq_var_1068.push !== undefined) {
if (_uniq_var_1069 === undefined) {
return _uniq_var_1068.push;
}
_uniq_var_1068.push = _uniq_var_1069;
}return _uniq_var_1068;
};_uniq_var_1070.__lix_func__ = true;return _uniq_var_1070;})()(ret, _uniq_var_531);
_uniq_var_532;
(_uniq_var_530 = _uniq_var_532);

};
_uniq_var_530;
var _uniq_var_534 = true;
_uniq_var_534;
var _uniq_var_535 = null;
_uniq_var_535;
var _uniq_var_538 = __gt__(len, 0);
_uniq_var_538;
if ((_uniq_var_534 && _uniq_var_538)) {
(_uniq_var_534 = false);
var _uniq_var_536 = (function () {var _uniq_var_1073 = function (_uniq_var_1071, _uniq_var_1072) {
if (typeof _uniq_var_1071.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1071.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1071.join.apply(_uniq_var_1071, arguments);
} else if (_uniq_var_1071.join !== undefined) {
if (_uniq_var_1072 === undefined) {
return _uniq_var_1071.join;
}
_uniq_var_1071.join = _uniq_var_1072;
}return _uniq_var_1071;
};_uniq_var_1073.__lix_func__ = true;return _uniq_var_1073;})()([arrayName, ".length >= ", len], "");
_uniq_var_536;
var _uniq_var_537 = (function () {var _uniq_var_1076 = function (_uniq_var_1074, _uniq_var_1075) {
if (typeof _uniq_var_1074.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1074.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1074.push.apply(_uniq_var_1074, arguments);
} else if (_uniq_var_1074.push !== undefined) {
if (_uniq_var_1075 === undefined) {
return _uniq_var_1074.push;
}
_uniq_var_1074.push = _uniq_var_1075;
}return _uniq_var_1074;
};_uniq_var_1076.__lix_func__ = true;return _uniq_var_1076;})()(ret, _uniq_var_536);
_uniq_var_537;
(_uniq_var_535 = _uniq_var_537);

};
_uniq_var_535;
var _uniq_var_546 = foreach(args[2], (function () {var _uniq_var_1086 = function (item, index) {var _uniq_var_539 = call(def.newVar);
_uniq_var_539;
var newVar = _uniq_var_539;
newVar;
newVar;
var _uniq_var_540 = (function () {var _uniq_var_1079 = function (_uniq_var_1077, _uniq_var_1078) {
if (typeof _uniq_var_1077.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1077.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1077.join.apply(_uniq_var_1077, arguments);
} else if (_uniq_var_1077.join !== undefined) {
if (_uniq_var_1078 === undefined) {
return _uniq_var_1077.join;
}
_uniq_var_1077.join = _uniq_var_1078;
}return _uniq_var_1077;
};_uniq_var_1079.__lix_func__ = true;return _uniq_var_1079;})()([arrayName, "[", index, "]"], "");
_uniq_var_540;
var expr = _uniq_var_540;
expr;
expr;
var _uniq_var_541 = flattenCondition(item, newVar, def);
_uniq_var_541;
var cond = _uniq_var_541;
cond;
cond;
var _uniq_var_542 = true;
_uniq_var_542;
var _uniq_var_543 = null;
_uniq_var_543;
if ((_uniq_var_542 && cond)) {
(_uniq_var_542 = false);
var _uniq_var_544 = (function () {var _uniq_var_1082 = function (_uniq_var_1080, _uniq_var_1081) {
if (typeof _uniq_var_1080.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1080.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1080.join.apply(_uniq_var_1080, arguments);
} else if (_uniq_var_1080.join !== undefined) {
if (_uniq_var_1081 === undefined) {
return _uniq_var_1080.join;
}
_uniq_var_1080.join = _uniq_var_1081;
}return _uniq_var_1080;
};_uniq_var_1082.__lix_func__ = true;return _uniq_var_1082;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_544;
var _uniq_var_545 = (function () {var _uniq_var_1085 = function (_uniq_var_1083, _uniq_var_1084) {
if (typeof _uniq_var_1083.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1083.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1083.push.apply(_uniq_var_1083, arguments);
} else if (_uniq_var_1083.push !== undefined) {
if (_uniq_var_1084 === undefined) {
return _uniq_var_1083.push;
}
_uniq_var_1083.push = _uniq_var_1084;
}return _uniq_var_1083;
};_uniq_var_1085.__lix_func__ = true;return _uniq_var_1085;})()(ret, _uniq_var_544);
_uniq_var_545;
(_uniq_var_543 = _uniq_var_545);

};
return _uniq_var_543;
};_uniq_var_1086.__lix_func__ = true;return _uniq_var_1086;})());
_uniq_var_546;
_uniq_var_546;
var _uniq_var_555 = foreach(args[4], (function () {var _uniq_var_1096 = function (item, index) {var _uniq_var_547 = call(def.newVar);
_uniq_var_547;
var newVar = _uniq_var_547;
newVar;
newVar;
var _uniq_var_548 = __sub__(args[4].length, index);
_uniq_var_548;
var _uniq_var_549 = (function () {var _uniq_var_1089 = function (_uniq_var_1087, _uniq_var_1088) {
if (typeof _uniq_var_1087.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1087.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1087.join.apply(_uniq_var_1087, arguments);
} else if (_uniq_var_1087.join !== undefined) {
if (_uniq_var_1088 === undefined) {
return _uniq_var_1087.join;
}
_uniq_var_1087.join = _uniq_var_1088;
}return _uniq_var_1087;
};_uniq_var_1089.__lix_func__ = true;return _uniq_var_1089;})()([arrayName, "[", arrayName, ".length - ", _uniq_var_548, "]"], "");
_uniq_var_549;
var expr = _uniq_var_549;
expr;
expr;
var _uniq_var_550 = flattenCondition(item, newVar, def);
_uniq_var_550;
var cond = _uniq_var_550;
cond;
cond;
var _uniq_var_551 = true;
_uniq_var_551;
var _uniq_var_552 = null;
_uniq_var_552;
if ((_uniq_var_551 && cond)) {
(_uniq_var_551 = false);
var _uniq_var_553 = (function () {var _uniq_var_1092 = function (_uniq_var_1090, _uniq_var_1091) {
if (typeof _uniq_var_1090.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1090.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1090.join.apply(_uniq_var_1090, arguments);
} else if (_uniq_var_1090.join !== undefined) {
if (_uniq_var_1091 === undefined) {
return _uniq_var_1090.join;
}
_uniq_var_1090.join = _uniq_var_1091;
}return _uniq_var_1090;
};_uniq_var_1092.__lix_func__ = true;return _uniq_var_1092;})()(["((", newVar, ' = ', expr, ") || 1) && (", cond, ")"], "");
_uniq_var_553;
var _uniq_var_554 = (function () {var _uniq_var_1095 = function (_uniq_var_1093, _uniq_var_1094) {
if (typeof _uniq_var_1093.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1093.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1093.push.apply(_uniq_var_1093, arguments);
} else if (_uniq_var_1093.push !== undefined) {
if (_uniq_var_1094 === undefined) {
return _uniq_var_1093.push;
}
_uniq_var_1093.push = _uniq_var_1094;
}return _uniq_var_1093;
};_uniq_var_1095.__lix_func__ = true;return _uniq_var_1095;})()(ret, _uniq_var_553);
_uniq_var_554;
(_uniq_var_552 = _uniq_var_554);

};
return _uniq_var_552;
};_uniq_var_1096.__lix_func__ = true;return _uniq_var_1096;})());
_uniq_var_555;
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
};_uniq_var_1099.__lix_func__ = true;return _uniq_var_1099;})()(ret, " && ");
_uniq_var_556;
return _uniq_var_556;
};_uniq_var_1100.__lix_func__ = true;return _uniq_var_1100;})();
flattenVAArgsCondition;
flattenVAArgsCondition;
var flattenVAArgsDestructor = (function () {var _uniq_var_1127 = function (args, arrayName) {var tail_lenth = args[4].length;
tail_lenth;
tail_lenth;
var ret = [];
ret;
ret;
var _uniq_var_565 = foreach(args[2], (function () {var _uniq_var_1110 = function (item, index) {var _uniq_var_557 = getAtomicExprVarName(item[0]);
_uniq_var_557;
var varName = _uniq_var_557;
varName;
varName;
var _uniq_var_558 = true;
_uniq_var_558;
var _uniq_var_559 = null;
_uniq_var_559;
var _uniq_var_562 = __ne__(arrayName, "arguments");
_uniq_var_562;
if ((_uniq_var_558 && _uniq_var_562)) {
(_uniq_var_558 = false);
var _uniq_var_560 = (function () {var _uniq_var_1103 = function (_uniq_var_1101, _uniq_var_1102) {
if (typeof _uniq_var_1101.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1101.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1101.join.apply(_uniq_var_1101, arguments);
} else if (_uniq_var_1101.join !== undefined) {
if (_uniq_var_1102 === undefined) {
return _uniq_var_1101.join;
}
_uniq_var_1101.join = _uniq_var_1102;
}return _uniq_var_1101;
};_uniq_var_1103.__lix_func__ = true;return _uniq_var_1103;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", index, "] : undefined"], "");
_uniq_var_560;
var _uniq_var_561 = (function () {var _uniq_var_1106 = function (_uniq_var_1104, _uniq_var_1105) {
if (typeof _uniq_var_1104.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1104.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1104.push.apply(_uniq_var_1104, arguments);
} else if (_uniq_var_1104.push !== undefined) {
if (_uniq_var_1105 === undefined) {
return _uniq_var_1104.push;
}
_uniq_var_1104.push = _uniq_var_1105;
}return _uniq_var_1104;
};_uniq_var_1106.__lix_func__ = true;return _uniq_var_1106;})()(ret, _uniq_var_560);
_uniq_var_561;
(_uniq_var_559 = _uniq_var_561);

};
_uniq_var_559;
var _uniq_var_563 = flattenDestructor(item, varName);
_uniq_var_563;
var _uniq_var_564 = (function () {var _uniq_var_1109 = function (_uniq_var_1107, _uniq_var_1108) {
if (typeof _uniq_var_1107.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1107.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1107.concat.apply(_uniq_var_1107, arguments);
} else if (_uniq_var_1107.concat !== undefined) {
if (_uniq_var_1108 === undefined) {
return _uniq_var_1107.concat;
}
_uniq_var_1107.concat = _uniq_var_1108;
}return _uniq_var_1107;
};_uniq_var_1109.__lix_func__ = true;return _uniq_var_1109;})()(ret, _uniq_var_563);
_uniq_var_564;
return (ret = _uniq_var_564);
};_uniq_var_1110.__lix_func__ = true;return _uniq_var_1110;})());
_uniq_var_565;
_uniq_var_565;
var _uniq_var_566 = true;
_uniq_var_566;
var _uniq_var_567 = null;
_uniq_var_567;
var _uniq_var_571 = __eq__(args[3][1], "{va_arg}");
_uniq_var_571;
if ((_uniq_var_566 && _uniq_var_571)) {
(_uniq_var_566 = false);
var _uniq_var_568 = getAtomicExprVarName(args[3][0]);
_uniq_var_568;
var varName = _uniq_var_568;
varName;
varName;
var _uniq_var_569 = (function () {var _uniq_var_1113 = function (_uniq_var_1111, _uniq_var_1112) {
if (typeof _uniq_var_1111.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1111.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1111.join.apply(_uniq_var_1111, arguments);
} else if (_uniq_var_1111.join !== undefined) {
if (_uniq_var_1112 === undefined) {
return _uniq_var_1111.join;
}
_uniq_var_1111.join = _uniq_var_1112;
}return _uniq_var_1111;
};_uniq_var_1113.__lix_func__ = true;return _uniq_var_1113;})()(["var ", varName, " = Array.prototype.slice.call(", arrayName, ", ", args[2].length, ", ", arrayName, ".length - ", tail_lenth, ")"], "");
_uniq_var_569;
var _uniq_var_570 = (function () {var _uniq_var_1116 = function (_uniq_var_1114, _uniq_var_1115) {
if (typeof _uniq_var_1114.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1114.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1114.push.apply(_uniq_var_1114, arguments);
} else if (_uniq_var_1114.push !== undefined) {
if (_uniq_var_1115 === undefined) {
return _uniq_var_1114.push;
}
_uniq_var_1114.push = _uniq_var_1115;
}return _uniq_var_1114;
};_uniq_var_1116.__lix_func__ = true;return _uniq_var_1116;})()(ret, _uniq_var_569);
_uniq_var_570;
(_uniq_var_567 = _uniq_var_570);

};
_uniq_var_567;
var _uniq_var_578 = foreach(args[4], (function () {var _uniq_var_1126 = function (item, index) {var _uniq_var_572 = getAtomicExprVarName(item[0]);
_uniq_var_572;
var varName = _uniq_var_572;
varName;
varName;
var _uniq_var_573 = __sub__(tail_lenth, index);
_uniq_var_573;
var _uniq_var_574 = (function () {var _uniq_var_1119 = function (_uniq_var_1117, _uniq_var_1118) {
if (typeof _uniq_var_1117.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1117.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1117.join.apply(_uniq_var_1117, arguments);
} else if (_uniq_var_1117.join !== undefined) {
if (_uniq_var_1118 === undefined) {
return _uniq_var_1117.join;
}
_uniq_var_1117.join = _uniq_var_1118;
}return _uniq_var_1117;
};_uniq_var_1119.__lix_func__ = true;return _uniq_var_1119;})()(["var ", varName, " = ", arrayName, " ? ", arrayName, "[", arrayName, ".length - ", _uniq_var_573, "] : undefined"], "");
_uniq_var_574;
var _uniq_var_575 = (function () {var _uniq_var_1122 = function (_uniq_var_1120, _uniq_var_1121) {
if (typeof _uniq_var_1120.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1120.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1120.push.apply(_uniq_var_1120, arguments);
} else if (_uniq_var_1120.push !== undefined) {
if (_uniq_var_1121 === undefined) {
return _uniq_var_1120.push;
}
_uniq_var_1120.push = _uniq_var_1121;
}return _uniq_var_1120;
};_uniq_var_1122.__lix_func__ = true;return _uniq_var_1122;})()(ret, _uniq_var_574);
_uniq_var_575;
_uniq_var_575;
var _uniq_var_576 = flattenDestructor(item, varName);
_uniq_var_576;
var _uniq_var_577 = (function () {var _uniq_var_1125 = function (_uniq_var_1123, _uniq_var_1124) {
if (typeof _uniq_var_1123.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1123.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1123.concat.apply(_uniq_var_1123, arguments);
} else if (_uniq_var_1123.concat !== undefined) {
if (_uniq_var_1124 === undefined) {
return _uniq_var_1123.concat;
}
_uniq_var_1123.concat = _uniq_var_1124;
}return _uniq_var_1123;
};_uniq_var_1125.__lix_func__ = true;return _uniq_var_1125;})()(ret, _uniq_var_576);
_uniq_var_577;
return (ret = _uniq_var_577);
};_uniq_var_1126.__lix_func__ = true;return _uniq_var_1126;})());
_uniq_var_578;
_uniq_var_578;
return ret;
};_uniq_var_1127.__lix_func__ = true;return _uniq_var_1127;})();
flattenVAArgsDestructor;
flattenVAArgsDestructor;
var flattenAnyTypeCondition = (function () {var _uniq_var_1128 = function (args, varName, def) {return null;
};_uniq_var_1128.__lix_func__ = true;return _uniq_var_1128;})();
flattenAnyTypeCondition;
flattenAnyTypeCondition;
var flattenLiteralArgCondition = (function () {var _uniq_var_1132 = function (args, varName, def) {var _uniq_var_579 = (function () {var _uniq_var_1131 = function (_uniq_var_1129, _uniq_var_1130) {
if (typeof _uniq_var_1129.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1129.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1129.join.apply(_uniq_var_1129, arguments);
} else if (_uniq_var_1129.join !== undefined) {
if (_uniq_var_1130 === undefined) {
return _uniq_var_1129.join;
}
_uniq_var_1129.join = _uniq_var_1130;
}return _uniq_var_1129;
};_uniq_var_1131.__lix_func__ = true;return _uniq_var_1131;})()([varName, " === ", args[2]], "");
_uniq_var_579;
return _uniq_var_579;
};_uniq_var_1132.__lix_func__ = true;return _uniq_var_1132;})();
flattenLiteralArgCondition;
flattenLiteralArgCondition;
var flattenLTArgCondition = (function () {var _uniq_var_1136 = function (args, varName, def) {var _uniq_var_580 = (function () {var _uniq_var_1135 = function (_uniq_var_1133, _uniq_var_1134) {
if (typeof _uniq_var_1133.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1133.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1133.join.apply(_uniq_var_1133, arguments);
} else if (_uniq_var_1133.join !== undefined) {
if (_uniq_var_1134 === undefined) {
return _uniq_var_1133.join;
}
_uniq_var_1133.join = _uniq_var_1134;
}return _uniq_var_1133;
};_uniq_var_1135.__lix_func__ = true;return _uniq_var_1135;})()(["typeof(", varName, ") == 'number' && ", varName, " < ", args[2]], "");
_uniq_var_580;
return _uniq_var_580;
};_uniq_var_1136.__lix_func__ = true;return _uniq_var_1136;})();
flattenLTArgCondition;
flattenLTArgCondition;
var flattenBetweenArgCondition = (function () {var _uniq_var_1140 = function (args, varName, def) {var _uniq_var_581 = (function () {var _uniq_var_1139 = function (_uniq_var_1137, _uniq_var_1138) {
if (typeof _uniq_var_1137.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1137.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1137.join.apply(_uniq_var_1137, arguments);
} else if (_uniq_var_1137.join !== undefined) {
if (_uniq_var_1138 === undefined) {
return _uniq_var_1137.join;
}
_uniq_var_1137.join = _uniq_var_1138;
}return _uniq_var_1137;
};_uniq_var_1139.__lix_func__ = true;return _uniq_var_1139;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2], " && ", varName, " < ", args[3]], "");
_uniq_var_581;
return _uniq_var_581;
};_uniq_var_1140.__lix_func__ = true;return _uniq_var_1140;})();
flattenBetweenArgCondition;
flattenBetweenArgCondition;
var flattenGEArgCondition = (function () {var _uniq_var_1144 = function (args, varName, def) {var _uniq_var_582 = (function () {var _uniq_var_1143 = function (_uniq_var_1141, _uniq_var_1142) {
if (typeof _uniq_var_1141.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1141.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1141.join.apply(_uniq_var_1141, arguments);
} else if (_uniq_var_1141.join !== undefined) {
if (_uniq_var_1142 === undefined) {
return _uniq_var_1141.join;
}
_uniq_var_1141.join = _uniq_var_1142;
}return _uniq_var_1141;
};_uniq_var_1143.__lix_func__ = true;return _uniq_var_1143;})()(["typeof(", varName, ") == 'number' && ", varName, " >= ", args[2]], "");
_uniq_var_582;
return _uniq_var_582;
};_uniq_var_1144.__lix_func__ = true;return _uniq_var_1144;})();
flattenGEArgCondition;
flattenGEArgCondition;
var flattenNamedArgCondition = (function () {var _uniq_var_1145 = function (args, varName, def) {var _uniq_var_583 = flattenCondition(args[2], varName, def);
_uniq_var_583;
return _uniq_var_583;
};_uniq_var_1145.__lix_func__ = true;return _uniq_var_1145;})();
flattenNamedArgCondition;
flattenNamedArgCondition;
var flattenNotArgCondition = (function () {var _uniq_var_1149 = function (args, varName, def) {var _uniq_var_584 = flattenCondition(args[2], varName, def);
_uniq_var_584;
var cond0 = _uniq_var_584;
cond0;
cond0;
var _uniq_var_585 = (function () {var _uniq_var_1148 = function (_uniq_var_1146, _uniq_var_1147) {
if (typeof _uniq_var_1146.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1146.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1146.join.apply(_uniq_var_1146, arguments);
} else if (_uniq_var_1146.join !== undefined) {
if (_uniq_var_1147 === undefined) {
return _uniq_var_1146.join;
}
_uniq_var_1146.join = _uniq_var_1147;
}return _uniq_var_1146;
};_uniq_var_1148.__lix_func__ = true;return _uniq_var_1148;})()(["!(", cond0, ")"], "");
_uniq_var_585;
return _uniq_var_585;
};_uniq_var_1149.__lix_func__ = true;return _uniq_var_1149;})();
flattenNotArgCondition;
flattenNotArgCondition;
var flattenAndArgCondition = (function () {var _uniq_var_1153 = function (args, varName, def) {var _uniq_var_586 = flattenCondition(args[2], varName, def);
_uniq_var_586;
var cond0 = _uniq_var_586;
cond0;
cond0;
var _uniq_var_587 = flattenCondition(args[3], varName, def);
_uniq_var_587;
var cond1 = _uniq_var_587;
cond1;
cond1;
var _uniq_var_588 = (function () {var _uniq_var_1152 = function (_uniq_var_1150, _uniq_var_1151) {
if (typeof _uniq_var_1150.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1150.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1150.join.apply(_uniq_var_1150, arguments);
} else if (_uniq_var_1150.join !== undefined) {
if (_uniq_var_1151 === undefined) {
return _uniq_var_1150.join;
}
_uniq_var_1150.join = _uniq_var_1151;
}return _uniq_var_1150;
};_uniq_var_1152.__lix_func__ = true;return _uniq_var_1152;})()(["(", cond0, ") && (", cond1, ")"], "");
_uniq_var_588;
return _uniq_var_588;
};_uniq_var_1153.__lix_func__ = true;return _uniq_var_1153;})();
flattenAndArgCondition;
flattenAndArgCondition;
var flattenOrArgCondition = (function () {var _uniq_var_1157 = function (args, varName, def) {var _uniq_var_589 = flattenCondition(args[2], varName, def);
_uniq_var_589;
var cond0 = _uniq_var_589;
cond0;
cond0;
var _uniq_var_590 = flattenCondition(args[3], varName, def);
_uniq_var_590;
var cond1 = _uniq_var_590;
cond1;
cond1;
var _uniq_var_591 = (function () {var _uniq_var_1156 = function (_uniq_var_1154, _uniq_var_1155) {
if (typeof _uniq_var_1154.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1154.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1154.join.apply(_uniq_var_1154, arguments);
} else if (_uniq_var_1154.join !== undefined) {
if (_uniq_var_1155 === undefined) {
return _uniq_var_1154.join;
}
_uniq_var_1154.join = _uniq_var_1155;
}return _uniq_var_1154;
};_uniq_var_1156.__lix_func__ = true;return _uniq_var_1156;})()(["(", cond0, ") || (", cond1, ")"], "");
_uniq_var_591;
return _uniq_var_591;
};_uniq_var_1157.__lix_func__ = true;return _uniq_var_1157;})();
flattenOrArgCondition;
flattenOrArgCondition;
var flattenProtoCondition = (function () {var _uniq_var_1161 = function (args, varName, def) {var _uniq_var_592 = transformVarName(args[0]);
_uniq_var_592;
var _uniq_var_593 = (function () {var _uniq_var_1160 = function (_uniq_var_1158, _uniq_var_1159) {
if (typeof _uniq_var_1158.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1158.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1158.join.apply(_uniq_var_1158, arguments);
} else if (_uniq_var_1158.join !== undefined) {
if (_uniq_var_1159 === undefined) {
return _uniq_var_1158.join;
}
_uniq_var_1158.join = _uniq_var_1159;
}return _uniq_var_1158;
};_uniq_var_1160.__lix_func__ = true;return _uniq_var_1160;})()(["Object.getPrototypeOf(", varName, ") === ", _uniq_var_592], "");
_uniq_var_593;
return _uniq_var_593;
};_uniq_var_1161.__lix_func__ = true;return _uniq_var_1161;})();
flattenProtoCondition;
flattenProtoCondition;
var flattenTypeCondition = (function () {var _uniq_var_1177 = function (args, varName, def) {var ret = null;
ret;
ret;
var _uniq_var_594 = true;
_uniq_var_594;
var _uniq_var_595 = null;
_uniq_var_595;
var _uniq_var_597 = __eq__(args[0], 'Number');
_uniq_var_597;
if ((_uniq_var_594 && _uniq_var_597)) {
(_uniq_var_594 = false);
var _uniq_var_596 = (function () {var _uniq_var_1164 = function (_uniq_var_1162, _uniq_var_1163) {
if (typeof _uniq_var_1162.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1162.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1162.join.apply(_uniq_var_1162, arguments);
} else if (_uniq_var_1162.join !== undefined) {
if (_uniq_var_1163 === undefined) {
return _uniq_var_1162.join;
}
_uniq_var_1162.join = _uniq_var_1163;
}return _uniq_var_1162;
};_uniq_var_1164.__lix_func__ = true;return _uniq_var_1164;})()(["typeof ", varName, " == 'number'"], "");
_uniq_var_596;
(_uniq_var_595 = (ret = _uniq_var_596));

};
var _uniq_var_599 = __eq__(args[0], 'String');
_uniq_var_599;
if ((_uniq_var_594 && _uniq_var_599)) {
(_uniq_var_594 = false);
var _uniq_var_598 = (function () {var _uniq_var_1167 = function (_uniq_var_1165, _uniq_var_1166) {
if (typeof _uniq_var_1165.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1165.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1165.join.apply(_uniq_var_1165, arguments);
} else if (_uniq_var_1165.join !== undefined) {
if (_uniq_var_1166 === undefined) {
return _uniq_var_1165.join;
}
_uniq_var_1165.join = _uniq_var_1166;
}return _uniq_var_1165;
};_uniq_var_1167.__lix_func__ = true;return _uniq_var_1167;})()(["typeof ", varName, " == 'string'"], "");
_uniq_var_598;
(_uniq_var_595 = (ret = _uniq_var_598));

};
var _uniq_var_601 = __eq__(args[0], 'Function');
_uniq_var_601;
if ((_uniq_var_594 && _uniq_var_601)) {
(_uniq_var_594 = false);
var _uniq_var_600 = (function () {var _uniq_var_1170 = function (_uniq_var_1168, _uniq_var_1169) {
if (typeof _uniq_var_1168.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1168.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1168.join.apply(_uniq_var_1168, arguments);
} else if (_uniq_var_1168.join !== undefined) {
if (_uniq_var_1169 === undefined) {
return _uniq_var_1168.join;
}
_uniq_var_1168.join = _uniq_var_1169;
}return _uniq_var_1168;
};_uniq_var_1170.__lix_func__ = true;return _uniq_var_1170;})()(["typeof ", varName, " == 'function'"], "");
_uniq_var_600;
(_uniq_var_595 = (ret = _uniq_var_600));

};
var _uniq_var_603 = __eq__(args[0], 'Boolean');
_uniq_var_603;
if ((_uniq_var_594 && _uniq_var_603)) {
(_uniq_var_594 = false);
var _uniq_var_602 = (function () {var _uniq_var_1173 = function (_uniq_var_1171, _uniq_var_1172) {
if (typeof _uniq_var_1171.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1171.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1171.join.apply(_uniq_var_1171, arguments);
} else if (_uniq_var_1171.join !== undefined) {
if (_uniq_var_1172 === undefined) {
return _uniq_var_1171.join;
}
_uniq_var_1171.join = _uniq_var_1172;
}return _uniq_var_1171;
};_uniq_var_1173.__lix_func__ = true;return _uniq_var_1173;})()(["typeof ", varName, " == 'boolean'"], "");
_uniq_var_602;
(_uniq_var_595 = (ret = _uniq_var_602));

};
if (_uniq_var_594) {
var _uniq_var_604 = transformVarName(args[0]);
_uniq_var_604;
var _uniq_var_605 = (function () {var _uniq_var_1176 = function (_uniq_var_1174, _uniq_var_1175) {
if (typeof _uniq_var_1174.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1174.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1174.join.apply(_uniq_var_1174, arguments);
} else if (_uniq_var_1174.join !== undefined) {
if (_uniq_var_1175 === undefined) {
return _uniq_var_1174.join;
}
_uniq_var_1174.join = _uniq_var_1175;
}return _uniq_var_1174;
};_uniq_var_1176.__lix_func__ = true;return _uniq_var_1176;})()([varName, " instanceof ", _uniq_var_604], "");
_uniq_var_605;
(_uniq_var_595 = _uniq_var_605);

};
return _uniq_var_595;
};_uniq_var_1177.__lix_func__ = true;return _uniq_var_1177;})();
flattenTypeCondition;
flattenTypeCondition;
var flattenVACondArgCondition = (function () {var _uniq_var_1178 = function (args, varName, def) {;
};_uniq_var_1178.__lix_func__ = true;return _uniq_var_1178;})();
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
"{proto_arg}": flattenProtoCondition,
"{index_arg}": flattenIndexCondition,
"{field_arg}": flattenFieldCondition
};
flattenConditionOp;
flattenConditionOp;
var flattenDestructorOp = {
"{atomic}": flattenAnyTypeDestructor,
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
"{proto_arg}": flattenAnyTypeDestructor,
"{index_arg}": flattenIndexDestructor,
"{field_arg}": flattenFieldDestructor
};
flattenDestructorOp;
flattenDestructorOp;
var getFlattenDestructorOp = (function () {var _uniq_var_1179 = function (hint) {var ret = flattenArrayDestructor;
ret;
ret;
var _uniq_var_606 = true;
_uniq_var_606;
var _uniq_var_607 = null;
_uniq_var_607;
if ((_uniq_var_606 && flattenDestructorOp[hint])) {
(_uniq_var_606 = false);
(_uniq_var_607 = (ret = flattenDestructorOp[hint]));

};
_uniq_var_607;
return ret;
};_uniq_var_1179.__lix_func__ = true;return _uniq_var_1179;})();
getFlattenDestructorOp;
getFlattenDestructorOp;
var getFlattenConditionOp = (function () {var _uniq_var_1180 = function (hint) {var ret = flattenArrayCondition;
ret;
ret;
var _uniq_var_608 = true;
_uniq_var_608;
var _uniq_var_609 = null;
_uniq_var_609;
if ((_uniq_var_608 && flattenConditionOp[hint])) {
(_uniq_var_608 = false);
(_uniq_var_609 = (ret = flattenConditionOp[hint]));

};
_uniq_var_609;
return ret;
};_uniq_var_1180.__lix_func__ = true;return _uniq_var_1180;})();
getFlattenConditionOp;
getFlattenConditionOp;
var flattenDestructor = (function () {var _uniq_var_1181 = function (args, varName) {var _uniq_var_610 = getFlattenDestructorOp(args[1]);
_uniq_var_610;
var _uniq_var_611 = call(_uniq_var_610, args, varName);
_uniq_var_611;
return _uniq_var_611;
};_uniq_var_1181.__lix_func__ = true;return _uniq_var_1181;})();
flattenDestructor;
flattenDestructor;
var flattenCondition = (function () {var _uniq_var_1182 = function (args, varName, def) {var _uniq_var_612 = getFlattenConditionOp(args[1]);
_uniq_var_612;
var _uniq_var_613 = call(_uniq_var_612, args, varName, def);
_uniq_var_613;
return _uniq_var_613;
};_uniq_var_1182.__lix_func__ = true;return _uniq_var_1182;})();
flattenCondition;
flattenCondition;
var flattenArgumentsCondition = (function () {var _uniq_var_1183 = function (args, def) {var _uniq_var_614 = flattenCondition(args, "arguments", def);
_uniq_var_614;
return _uniq_var_614;
};_uniq_var_1183.__lix_func__ = true;return _uniq_var_1183;})();
flattenArgumentsCondition;
flattenArgumentsCondition;
var flattenArgumentsDestructor = (function () {var _uniq_var_1184 = function (args) {var _uniq_var_615 = flattenDestructor(args, "arguments");
_uniq_var_615;
return _uniq_var_615;
};_uniq_var_1184.__lix_func__ = true;return _uniq_var_1184;})();
flattenArgumentsDestructor;
flattenArgumentsDestructor;
var getFuncArgsNameList = (function () {var _uniq_var_1192 = function (args) {var ret = [];
ret;
ret;
var _uniq_var_621 = foreach(args[2], (function () {var _uniq_var_1191 = function (item) {var _uniq_var_616 = true;
_uniq_var_616;
var _uniq_var_617 = null;
_uniq_var_617;
var _uniq_var_619 = __eq__(item[1], '{atomic}');
_uniq_var_619;
if ((_uniq_var_616 && _uniq_var_619)) {
(_uniq_var_616 = false);
var _uniq_var_618 = (function () {var _uniq_var_1187 = function (_uniq_var_1185, _uniq_var_1186) {
if (typeof _uniq_var_1185.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1185.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1185.push.apply(_uniq_var_1185, arguments);
} else if (_uniq_var_1185.push !== undefined) {
if (_uniq_var_1186 === undefined) {
return _uniq_var_1185.push;
}
_uniq_var_1185.push = _uniq_var_1186;
}return _uniq_var_1185;
};_uniq_var_1187.__lix_func__ = true;return _uniq_var_1187;})()(ret, item);
_uniq_var_618;
(_uniq_var_617 = _uniq_var_618);

};
if (_uniq_var_616) {
var _uniq_var_620 = (function () {var _uniq_var_1190 = function (_uniq_var_1188, _uniq_var_1189) {
if (typeof _uniq_var_1188.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1188.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1188.push.apply(_uniq_var_1188, arguments);
} else if (_uniq_var_1188.push !== undefined) {
if (_uniq_var_1189 === undefined) {
return _uniq_var_1188.push;
}
_uniq_var_1188.push = _uniq_var_1189;
}return _uniq_var_1188;
};_uniq_var_1190.__lix_func__ = true;return _uniq_var_1190;})()(ret, item[0]);
_uniq_var_620;
(_uniq_var_617 = _uniq_var_620);

};
return _uniq_var_617;
};_uniq_var_1191.__lix_func__ = true;return _uniq_var_1191;})());
_uniq_var_621;
_uniq_var_621;
return ret;
};_uniq_var_1192.__lix_func__ = true;return _uniq_var_1192;})();
getFuncArgsNameList;
getFuncArgsNameList;
var flattenLambda = (function () {var _uniq_var_1193 = function (expr, define) {var _uniq_var_622 = flattenArgumentsDestructor(expr[0]);
_uniq_var_622;
var destructor = _uniq_var_622;
destructor;
destructor;
var _uniq_var_623 = getFuncArgsNameList(expr[0]);
_uniq_var_623;
var funcArgsNameList = _uniq_var_623;
funcArgsNameList;
funcArgsNameList;
(expr[0] = funcArgsNameList);
(expr[1] = "{func}");
var _uniq_var_624 = flatten(expr[2], define);
_uniq_var_624;
(expr[2] = _uniq_var_624);
(expr[3] = destructor);
return expr;
};_uniq_var_1193.__lix_func__ = true;return _uniq_var_1193;})();
flattenLambda;
flattenLambda;
var flattenFn = (function () {var _uniq_var_1194 = function (expr, define) {var seq = expr[3];
seq;
seq;
var _uniq_var_625 = flattenArgumentsDestructor(expr[2]);
_uniq_var_625;
var destructor = _uniq_var_625;
destructor;
destructor;
var _uniq_var_626 = getFuncArgsNameList(expr[2]);
_uniq_var_626;
var funcArgsNameList = _uniq_var_626;
funcArgsNameList;
funcArgsNameList;
var condition = expr[2];
condition;
condition;
var _uniq_var_627 = flatten([funcArgsNameList, "{func}", seq, destructor], define);
_uniq_var_627;
var func = _uniq_var_627;
func;
func;
return [expr[0], "{fn}", func, condition];
};_uniq_var_1194.__lix_func__ = true;return _uniq_var_1194;})();
flattenFn;
flattenFn;
var flattenAsterisk = (function () {var _uniq_var_1195 = function (expr, define) {(expr[1] = ['call', '{atomic}', '{var}']);
var _uniq_var_628 = flatten(expr, define);
_uniq_var_628;
return _uniq_var_628;
};_uniq_var_1195.__lix_func__ = true;return _uniq_var_1195;})();
flattenAsterisk;
flattenAsterisk;
var flattenMatch = (function () {var _uniq_var_1196 = function (expr, define) {var _uniq_var_629 = flatten(expr[0], define);
_uniq_var_629;
return _uniq_var_629;
};_uniq_var_1196.__lix_func__ = true;return _uniq_var_1196;})();
flattenMatch;
flattenMatch;
var flattenMatchCaseList = (function () {var _uniq_var_1198 = function (expr, define) {var _uniq_var_632 = foreach(expr[2], (function () {var _uniq_var_1197 = function (item) {var _uniq_var_630 = flatten(item, define);
_uniq_var_630;
var _uniq_var_631 = define(_uniq_var_630);
_uniq_var_631;
return _uniq_var_631;
};_uniq_var_1197.__lix_func__ = true;return _uniq_var_1197;})());
_uniq_var_632;
_uniq_var_632;
return expr[0];
};_uniq_var_1198.__lix_func__ = true;return _uniq_var_1198;})();
flattenMatchCaseList;
flattenMatchCaseList;
var identity = (function () {var _uniq_var_1199 = function (x) {return x;
};_uniq_var_1199.__lix_func__ = true;return _uniq_var_1199;})();
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
var flattenOp = (function () {var _uniq_var_1200 = function (hint) {var _uniq_var_633 = true;
_uniq_var_633;
var _uniq_var_634 = null;
_uniq_var_634;
if ((_uniq_var_633 && flattenOpTable[hint])) {
(_uniq_var_633 = false);
(_uniq_var_634 = flattenOpTable[hint]);

};
if (_uniq_var_633) {
(_uniq_var_634 = flattenExpr);

};
return _uniq_var_634;
};_uniq_var_1200.__lix_func__ = true;return _uniq_var_1200;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_1201 = function (expr, define, ctx) {var _uniq_var_635 = flattenOp(expr[1]);
_uniq_var_635;
var _uniq_var_636 = _uniq_var_635(expr, define, ctx);
_uniq_var_636;
return _uniq_var_636;
};_uniq_var_1201.__lix_func__ = true;return _uniq_var_1201;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_1202 = function (i) {return i;
};_uniq_var_1202.__lix_func__ = true;return _uniq_var_1202;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_1203 = function (i) {;
};_uniq_var_1203.__lix_func__ = true;return _uniq_var_1203;})(),
appendExpr: (function () {var _uniq_var_1204 = function (i) {;
};_uniq_var_1204.__lix_func__ = true;return _uniq_var_1204;})()
};
def0;
def0;
var _uniq_var_637 = join(['s[', STEP, ']']);
_uniq_var_637;
var _uniq_var_638 = join(['s[', RET, ']']);
_uniq_var_638;
var seqFuncParamsName = {
step: _uniq_var_637,
ret: _uniq_var_638
};
seqFuncParamsName;
seqFuncParamsName;
var builtinNames = {
ccException: '_lixCCException'
};
builtinNames;
builtinNames;
var compile = (function () {var _uniq_var_1211 = function (expr) {var _uniq_var_639 = map(env0, (function () {var _uniq_var_1205 = function (i) {return i;
};_uniq_var_1205.__lix_func__ = true;return _uniq_var_1205;})());
_uniq_var_639;
var _uniq_var_640 = (function () {var _uniq_var_1208 = function (_uniq_var_1206, _uniq_var_1207) {
if (typeof _uniq_var_1206.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_1206.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_1206.join.apply(_uniq_var_1206, arguments);
} else if (_uniq_var_1206.join !== undefined) {
if (_uniq_var_1207 === undefined) {
return _uniq_var_1206.join;
}
_uniq_var_1206.join = _uniq_var_1207;
}return _uniq_var_1206;
};_uniq_var_1208.__lix_func__ = true;return _uniq_var_1208;})()(_uniq_var_639, "\n");
_uniq_var_640;
var libs = _uniq_var_640;
libs;
libs;
var _uniq_var_641 = flatten(expr, (function () {var _uniq_var_1209 = function (i) {;
};_uniq_var_1209.__lix_func__ = true;return _uniq_var_1209;})(), (function () {var _uniq_var_1210 = function (i) {return i;
};_uniq_var_1210.__lix_func__ = true;return _uniq_var_1210;})());
_uniq_var_641;
var flattenedExpr = _uniq_var_641;
flattenedExpr;
flattenedExpr;
var _uniq_var_642 = call(env_new);
_uniq_var_642;
var _uniq_var_643 = generateStart(flattenedExpr, _uniq_var_642, ctx0, def0);
_uniq_var_643;
var code = _uniq_var_643;
code;
code;
var _uniq_var_644 = join([libs, "\n", code]);
_uniq_var_644;
return _uniq_var_644;
};_uniq_var_1211.__lix_func__ = true;return _uniq_var_1211;})();
compile;
compile;
(exports.compile = compile);
compile;

