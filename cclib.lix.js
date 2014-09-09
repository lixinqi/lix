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
var join = (function () {var _uniq_var_307 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_306 = function (_uniq_var_304, _uniq_var_305) {
if (typeof _uniq_var_304.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_304.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_304.join.apply(_uniq_var_304, arguments);
} else if (_uniq_var_304.join !== undefined) {
if (_uniq_var_305 === undefined) {
return _uniq_var_304.join;
}
_uniq_var_304.join = _uniq_var_305;
}return _uniq_var_304;
};_uniq_var_306.__lix_func__ = true;return _uniq_var_306;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_307.__lix_func__ = true;return _uniq_var_307;})();
join;
join;
var map = (function () {var _uniq_var_312 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_311 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_310 = function (_uniq_var_308, _uniq_var_309) {
if (typeof _uniq_var_308.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_308.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_308.push.apply(_uniq_var_308, arguments);
} else if (_uniq_var_308.push !== undefined) {
if (_uniq_var_309 === undefined) {
return _uniq_var_308.push;
}
_uniq_var_308.push = _uniq_var_309;
}return _uniq_var_308;
};_uniq_var_310.__lix_func__ = true;return _uniq_var_310;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_311.__lix_func__ = true;return _uniq_var_311;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_312.__lix_func__ = true;return _uniq_var_312;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_314 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_313 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_313.__lix_func__ = true;return _uniq_var_313;})();
};_uniq_var_314.__lix_func__ = true;return _uniq_var_314;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_315 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_315.__lix_func__ = true;return _uniq_var_315;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_320 = function (args, env, ctx) {var _uniq_var_9 = map(args, (function () {var _uniq_var_316 = function (i) {var varname = i[0];
varname;
varname;
(env[varname] = true);
var _uniq_var_8 = transformVarName(varname);
_uniq_var_8;
return _uniq_var_8;
};_uniq_var_316.__lix_func__ = true;return _uniq_var_316;})());
_uniq_var_9;
var _uniq_var_10 = (function () {var _uniq_var_319 = function (_uniq_var_317, _uniq_var_318) {
if (typeof _uniq_var_317.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_317.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_317.join.apply(_uniq_var_317, arguments);
} else if (_uniq_var_317.join !== undefined) {
if (_uniq_var_318 === undefined) {
return _uniq_var_317.join;
}
_uniq_var_317.join = _uniq_var_318;
}return _uniq_var_317;
};_uniq_var_319.__lix_func__ = true;return _uniq_var_319;})()(_uniq_var_9, ', ');
_uniq_var_10;
return _uniq_var_10;
};_uniq_var_320.__lix_func__ = true;return _uniq_var_320;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_321 = function (x) {return x;
};_uniq_var_321.__lix_func__ = true;return _uniq_var_321;})();
ctx0;
ctx0;
var withSeqLayout = (function () {var _uniq_var_324 = function (statements, ctx) {var _uniq_var_11 = call(getUniqVarName);
_uniq_var_11;
var funcName = _uniq_var_11;
funcName;
funcName;
var suffix = (function () {var _uniq_var_322 = function (v) {var _uniq_var_12 = __add__(v, '()');
_uniq_var_12;
return _uniq_var_12;
};_uniq_var_322.__lix_func__ = true;return _uniq_var_322;})();
suffix;
suffix;
var _uniq_var_19 = map(statements, (function () {var _uniq_var_323 = function (stmtClosure, index) {var _uniq_var_13 = call(stmtClosure, suffix);
_uniq_var_13;
var stmt = _uniq_var_13;
stmt;
stmt;
var _uniq_var_14 = true;
_uniq_var_14;
var _uniq_var_15 = null;
_uniq_var_15;
var _uniq_var_17 = __sub__(statements.length, 1);
_uniq_var_17;
var _uniq_var_18 = __eq__(index, _uniq_var_17);
_uniq_var_18;
if ((_uniq_var_14 && _uniq_var_18)) {
(_uniq_var_14 = false);
var _uniq_var_16 = __add__('return ', stmt);
_uniq_var_16;
(_uniq_var_15 = (stmt = _uniq_var_16));

};
_uniq_var_15;
return stmt;
};_uniq_var_323.__lix_func__ = true;return _uniq_var_323;})());
_uniq_var_19;
var body = _uniq_var_19;
body;
return body;
};_uniq_var_324.__lix_func__ = true;return _uniq_var_324;})();
withSeqLayout;
withSeqLayout;
var generateSeq = (function () {var _uniq_var_331 = function (expr, env, ctx, def) {var _uniq_var_20 = call(getUniqVarName);
_uniq_var_20;
var funcName = _uniq_var_20;
funcName;
funcName;
var _uniq_var_21 = call(counterGenerator);
_uniq_var_21;
var getCount = _uniq_var_21;
getCount;
getCount;
var ctx = (function () {var _uniq_var_326 = function (current) {return (function () {var _uniq_var_325 = function (v, loop) {var next = current;
next;
next;
var _uniq_var_22 = true;
_uniq_var_22;
var _uniq_var_23 = null;
_uniq_var_23;
var _uniq_var_25 = __eq__(loop, undefined);
_uniq_var_25;
if ((_uniq_var_22 && _uniq_var_25)) {
(_uniq_var_22 = false);
var _uniq_var_24 = __add__(next, 1);
_uniq_var_24;
(_uniq_var_23 = (next = _uniq_var_24));

};
_uniq_var_23;
var _uniq_var_26 = join([v, '(function (', seqFuncParamsName.ret, ') {\n', 'return ', funcName, '(', seqFuncParamsName.cb, ', ', next, ', true, ', seqFuncParamsName.ret, ');\n', '}, 0)']);
_uniq_var_26;
return _uniq_var_26;
};_uniq_var_325.__lix_func__ = true;return _uniq_var_325;})();
};_uniq_var_326.__lix_func__ = true;return _uniq_var_326;})();
ctx;
ctx;
var _uniq_var_31 = map(expr[0], (function () {var _uniq_var_327 = function (item, index) {var _uniq_var_27 = call(getCount);
_uniq_var_27;
var current = _uniq_var_27;
current;
current;
var _uniq_var_28 = ctx(current);
_uniq_var_28;
var _uniq_var_29 = generate(item, env, _uniq_var_28, def);
_uniq_var_29;
var stmt = _uniq_var_29;
stmt;
stmt;
var _uniq_var_30 = join(['case ', current, ':\n', stmt]);
_uniq_var_30;
var stmt = _uniq_var_30;
stmt;
return stmt;
};_uniq_var_327.__lix_func__ = true;return _uniq_var_327;})());
_uniq_var_31;
var _uniq_var_32 = (function () {var _uniq_var_330 = function (_uniq_var_328, _uniq_var_329) {
if (typeof _uniq_var_328.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_328.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_328.join.apply(_uniq_var_328, arguments);
} else if (_uniq_var_328.join !== undefined) {
if (_uniq_var_329 === undefined) {
return _uniq_var_328.join;
}
_uniq_var_328.join = _uniq_var_329;
}return _uniq_var_328;
};_uniq_var_330.__lix_func__ = true;return _uniq_var_330;})()(_uniq_var_31, ";\n");
_uniq_var_32;
var body = _uniq_var_32;
body;
body;
var _uniq_var_33 = join(['function ', funcName, '(', seqFuncParamsName.cb, ', ', seqFuncParamsName.step, ', ', seqFuncParamsName.cont, ', ', seqFuncParamsName.ret, ') {\n', 'switch (', seqFuncParamsName.step, ') {\n', body, '\n', 'default:\n', '}\n', 'if (', seqFuncParamsName.cont, ') {\n', seqFuncParamsName.cb, '(', seqFuncParamsName.ret, ')\n', '} else {\n', 'return ', seqFuncParamsName.ret, '\n', '}\n', '}']);
_uniq_var_33;
var _uniq_var_34 = def.appendExpr(_uniq_var_33);
_uniq_var_34;
_uniq_var_34;
return funcName;
};_uniq_var_331.__lix_func__ = true;return _uniq_var_331;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_332 = function (expr, env, ctx, def) {var _uniq_var_35 = generate(expr[0], env, ctx, def);
_uniq_var_35;
var _uniq_var_36 = generate(expr[2], env, ctx, def);
_uniq_var_36;
var _uniq_var_37 = join(['(', _uniq_var_35, " || ", _uniq_var_36, ')']);
_uniq_var_37;
return _uniq_var_37;
};_uniq_var_332.__lix_func__ = true;return _uniq_var_332;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_333 = function (expr, env, ctx, def) {var _uniq_var_38 = generate(expr[0], env, ctx, def);
_uniq_var_38;
var _uniq_var_39 = generate(expr[2], env, ctx, def);
_uniq_var_39;
var _uniq_var_40 = join(['(', _uniq_var_38, " && ", _uniq_var_39, ')']);
_uniq_var_40;
return _uniq_var_40;
};_uniq_var_333.__lix_func__ = true;return _uniq_var_333;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_338 = function (expr, env, ctx, def) {var _uniq_var_52 = map(expr[0], (function () {var _uniq_var_334 = function (i) {var _uniq_var_41 = true;
_uniq_var_41;
var _uniq_var_42 = null;
_uniq_var_42;
var _uniq_var_45 = __eq__(i[1], 'else');
_uniq_var_45;
if ((_uniq_var_41 && _uniq_var_45)) {
(_uniq_var_41 = false);
var _uniq_var_43 = generate(i[0], env, ctx, def);
_uniq_var_43;
var _uniq_var_44 = join(['{\n', _uniq_var_43, '\n}']);
_uniq_var_44;
(_uniq_var_42 = _uniq_var_44);

};
var _uniq_var_47 = __eq__(i[1], 'if');
_uniq_var_47;
if ((_uniq_var_41 && _uniq_var_47)) {
(_uniq_var_41 = false);
var _uniq_var_46 = generateIf(i, env, ctx, def);
_uniq_var_46;
(_uniq_var_42 = _uniq_var_46);

};
if (_uniq_var_41) {
var _uniq_var_48 = generate(i[0], env, ctx, def);
_uniq_var_48;
var _uniq_var_49 = generate(i[1], env, ctx, def);
_uniq_var_49;
var _uniq_var_50 = ctx(_uniq_var_49);
_uniq_var_50;
var _uniq_var_51 = join(['if (', _uniq_var_48, ') {\n', _uniq_var_50, '\n}']);
_uniq_var_51;
(_uniq_var_42 = _uniq_var_51);

};
return _uniq_var_42;
};_uniq_var_334.__lix_func__ = true;return _uniq_var_334;})());
_uniq_var_52;
var _uniq_var_53 = (function () {var _uniq_var_337 = function (_uniq_var_335, _uniq_var_336) {
if (typeof _uniq_var_335.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_335.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_335.join.apply(_uniq_var_335, arguments);
} else if (_uniq_var_335.join !== undefined) {
if (_uniq_var_336 === undefined) {
return _uniq_var_335.join;
}
_uniq_var_335.join = _uniq_var_336;
}return _uniq_var_335;
};_uniq_var_337.__lix_func__ = true;return _uniq_var_337;})()(_uniq_var_52, ' else ');
_uniq_var_53;
return _uniq_var_53;
};_uniq_var_338.__lix_func__ = true;return _uniq_var_338;})();
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
var generateAtomic = (function () {var _uniq_var_339 = function (expr, env, ctx, def) {var ret = expr[0];
ret;
ret;
var _uniq_var_54 = true;
_uniq_var_54;
var _uniq_var_55 = null;
_uniq_var_55;
var _uniq_var_61 = __eq__(expr[2], '{var}');
_uniq_var_61;
if ((_uniq_var_54 && _uniq_var_61)) {
(_uniq_var_54 = false);
var _uniq_var_56 = true;
_uniq_var_56;
var _uniq_var_57 = null;
_uniq_var_57;
if ((_uniq_var_56 && operateFuncName[expr[0]])) {
(_uniq_var_56 = false);
var _uniq_var_58 = transformVarName(operateFuncName[expr[0]]);
_uniq_var_58;
(_uniq_var_57 = (ret = _uniq_var_58));

};
var _uniq_var_60 = __eq__(expr[3], undefined);
_uniq_var_60;
if ((_uniq_var_56 && _uniq_var_60)) {
(_uniq_var_56 = false);
var _uniq_var_59 = transformVarName(expr[0]);
_uniq_var_59;
(_uniq_var_57 = (ret = _uniq_var_59));

};
(_uniq_var_55 = _uniq_var_57);

};
_uniq_var_55;
return ret;
};_uniq_var_339.__lix_func__ = true;return _uniq_var_339;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_340 = function (expr, env, ctx, def) {var _uniq_var_62 = true;
_uniq_var_62;
var _uniq_var_63 = null;
_uniq_var_63;
var _uniq_var_65 = __eq__(expr[1], '{atomic}');
_uniq_var_65;
if ((_uniq_var_62 && _uniq_var_65)) {
(_uniq_var_62 = false);
var _uniq_var_64 = generateAtomic(expr, env, ctx, def);
_uniq_var_64;
(_uniq_var_63 = _uniq_var_64);

};
var _uniq_var_67 = __eq__(expr[1], '{index}');
_uniq_var_67;
if ((_uniq_var_62 && _uniq_var_67)) {
(_uniq_var_62 = false);
var _uniq_var_66 = generateAtomic(expr[0], env, ctx, def);
_uniq_var_66;
(_uniq_var_63 = _uniq_var_66);

};
return _uniq_var_63;
};_uniq_var_340.__lix_func__ = true;return _uniq_var_340;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_341 = function (expr, env, ctx, def) {var _uniq_var_68 = generatePropertyName(expr[0], env, ctx0, def);
_uniq_var_68;
var propertyName = _uniq_var_68;
propertyName;
propertyName;
var _uniq_var_69 = generate(expr[2], env, ctx, def);
_uniq_var_69;
var propertyValue = _uniq_var_69;
propertyValue;
propertyValue;
var _uniq_var_70 = join([propertyName, ": ", propertyValue]);
_uniq_var_70;
return _uniq_var_70;
};_uniq_var_341.__lix_func__ = true;return _uniq_var_341;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_346 = function (expr, env, ctx, def) {var _uniq_var_72 = map(expr[0], (function () {var _uniq_var_342 = function (i) {var _uniq_var_71 = generateProperty(i, env, ctx, def);
_uniq_var_71;
return _uniq_var_71;
};_uniq_var_342.__lix_func__ = true;return _uniq_var_342;})());
_uniq_var_72;
var _uniq_var_73 = (function () {var _uniq_var_345 = function (_uniq_var_343, _uniq_var_344) {
if (typeof _uniq_var_343.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_343.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_343.join.apply(_uniq_var_343, arguments);
} else if (_uniq_var_343.join !== undefined) {
if (_uniq_var_344 === undefined) {
return _uniq_var_343.join;
}
_uniq_var_343.join = _uniq_var_344;
}return _uniq_var_343;
};_uniq_var_345.__lix_func__ = true;return _uniq_var_345;})()(_uniq_var_72, ",\n");
_uniq_var_73;
var objectBody = _uniq_var_73;
objectBody;
objectBody;
var _uniq_var_74 = join(["{\n", objectBody, "\n}"]);
_uniq_var_74;
return _uniq_var_74;
};_uniq_var_346.__lix_func__ = true;return _uniq_var_346;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_347 = function (name) {name;
var _uniq_var_75 = __add__('LIX_', name);
_uniq_var_75;
return (name = _uniq_var_75);
};_uniq_var_347.__lix_func__ = true;return _uniq_var_347;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_348 = function (expr) {var _uniq_var_76 = true;
_uniq_var_76;
var _uniq_var_77 = null;
_uniq_var_77;
var _uniq_var_79 = __eq__(expr[1], '{atomic}');
_uniq_var_79;
if ((_uniq_var_76 && _uniq_var_79)) {
(_uniq_var_76 = false);
var _uniq_var_78 = generateAtomic(expr, {

}, ctx0);
_uniq_var_78;
(_uniq_var_77 = _uniq_var_78);

};
var _uniq_var_81 = __eq__(expr[1], '{.}');
_uniq_var_81;
if ((_uniq_var_76 && _uniq_var_81)) {
(_uniq_var_76 = false);
var _uniq_var_80 = getVarName(expr[0]);
_uniq_var_80;
(_uniq_var_77 = _uniq_var_80);

};
return _uniq_var_77;
};_uniq_var_348.__lix_func__ = true;return _uniq_var_348;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_349 = function (expr, env, ctx, def) {var _uniq_var_82 = true;
_uniq_var_82;
var _uniq_var_83 = null;
_uniq_var_83;
var _uniq_var_86 = __eq__(expr[1], '{atomic}');
_uniq_var_86;
if ((_uniq_var_82 && _uniq_var_86)) {
(_uniq_var_82 = false);
var _uniq_var_84 = generateAtomic(expr, env, ctx0, def);
_uniq_var_84;
var _uniq_var_85 = __add__('.', _uniq_var_84);
_uniq_var_85;
(_uniq_var_83 = _uniq_var_85);

};
var _uniq_var_89 = __eq__(expr[1], '{index}');
_uniq_var_89;
if ((_uniq_var_82 && _uniq_var_89)) {
(_uniq_var_82 = false);
var _uniq_var_87 = generate(expr[0], env, ctx, def);
_uniq_var_87;
var _uniq_var_88 = join(['[', _uniq_var_87, ']']);
_uniq_var_88;
(_uniq_var_83 = _uniq_var_88);

};
return _uniq_var_83;
};_uniq_var_349.__lix_func__ = true;return _uniq_var_349;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_350 = function (expr, env, ctx, def) {var _uniq_var_90 = true;
_uniq_var_90;
var _uniq_var_91 = null;
_uniq_var_91;
var _uniq_var_93 = __eq__(expr[1], '{atomic}');
_uniq_var_93;
if ((_uniq_var_90 && _uniq_var_93)) {
(_uniq_var_90 = false);
var _uniq_var_92 = generateAtomic(expr, env, ctx0, def);
_uniq_var_92;
(_uniq_var_91 = _uniq_var_92);

};
var _uniq_var_97 = __eq__(expr[1], '{.}');
_uniq_var_97;
if ((_uniq_var_90 && _uniq_var_97)) {
(_uniq_var_90 = false);
var _uniq_var_94 = generateFieldAccess(expr[0], env, ctx, def);
_uniq_var_94;
var obj = _uniq_var_94;
obj;
obj;
var _uniq_var_95 = generateField(expr[2], env, ctx, def);
_uniq_var_95;
var field = _uniq_var_95;
field;
field;
var _uniq_var_96 = __add__(obj, field);
_uniq_var_96;
(_uniq_var_91 = _uniq_var_96);

};
return _uniq_var_91;
};_uniq_var_350.__lix_func__ = true;return _uniq_var_350;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_355 = function (expr, env, ctx, def) {var _uniq_var_99 = map(expr[0], (function () {var _uniq_var_351 = function (i) {var _uniq_var_98 = generate(i, env, ctx, def);
_uniq_var_98;
return _uniq_var_98;
};_uniq_var_351.__lix_func__ = true;return _uniq_var_351;})());
_uniq_var_99;
var _uniq_var_100 = (function () {var _uniq_var_354 = function (_uniq_var_352, _uniq_var_353) {
if (typeof _uniq_var_352.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_352.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_352.join.apply(_uniq_var_352, arguments);
} else if (_uniq_var_352.join !== undefined) {
if (_uniq_var_353 === undefined) {
return _uniq_var_352.join;
}
_uniq_var_352.join = _uniq_var_353;
}return _uniq_var_352;
};_uniq_var_354.__lix_func__ = true;return _uniq_var_354;})()(_uniq_var_99, ', ');
_uniq_var_100;
var arrayBody = _uniq_var_100;
arrayBody;
arrayBody;
var _uniq_var_101 = join(['[', arrayBody, ']']);
_uniq_var_101;
return _uniq_var_101;
};_uniq_var_355.__lix_func__ = true;return _uniq_var_355;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_356 = function (expr, env, ctx) {var _uniq_var_102 = call(getUniqVarName);
_uniq_var_102;
var localVarName = _uniq_var_102;
localVarName;
localVarName;
var _uniq_var_103 = call(getUniqVarName);
_uniq_var_103;
var localValueName = _uniq_var_103;
localValueName;
localValueName;
var _uniq_var_104 = generateField(expr[0], env, ctx0);
_uniq_var_104;
var methodName = _uniq_var_104;
methodName;
methodName;
var _uniq_var_105 = __add__(localVarName, methodName);
_uniq_var_105;
var method = _uniq_var_105;
method;
method;
var _uniq_var_106 = call(getUniqVarName);
_uniq_var_106;
var tmpVar = _uniq_var_106;
tmpVar;
tmpVar;
var _uniq_var_107 = join(["(function (", localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return function (_ret) {\n", "return ", method, ';\n', "}\n", "}\n", "return function (_ret) {\n", method, " = ", localValueName, ";\n", "}\n", "}", "})"]);
_uniq_var_107;
return _uniq_var_107;
};_uniq_var_356.__lix_func__ = true;return _uniq_var_356;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_357 = function (expr, env, ctx, def) {var _uniq_var_108 = generate(expr[0], env, ctx, def);
_uniq_var_108;
var _uniq_var_109 = generate(expr[2], env, ctx, def);
_uniq_var_109;
var _uniq_var_110 = ctx(_uniq_var_109, true);
_uniq_var_110;
var _uniq_var_111 = join(['while (', _uniq_var_108, ') {\n', _uniq_var_110, "\n}"]);
_uniq_var_111;
return _uniq_var_111;
};_uniq_var_357.__lix_func__ = true;return _uniq_var_357;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_358 = function (expr, env, ctx) {return 'break';
};_uniq_var_358.__lix_func__ = true;return _uniq_var_358;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_359 = function (expr, env, ctx, def) {return "";
};_uniq_var_359.__lix_func__ = true;return _uniq_var_359;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_360 = function (expr, env, ctx, def) {var _uniq_var_112 = getVarName(expr[0]);
_uniq_var_112;
var varname = _uniq_var_112;
varname;
varname;
var _uniq_var_113 = def.defineVar(varname);
_uniq_var_113;
_uniq_var_113;
var _uniq_var_114 = generate(expr[2], env, ctx, def);
_uniq_var_114;
var _uniq_var_115 = join([varname, ' = ', _uniq_var_114]);
_uniq_var_115;
var ret = _uniq_var_115;
ret;
ret;
(env[varname] = true);
return ret;
};_uniq_var_360.__lix_func__ = true;return _uniq_var_360;})();
generateDef;
generateDef;
var generateAssign = (function () {var _uniq_var_361 = function (expr, env, ctx, def) {var _uniq_var_116 = getVarName(expr[0]);
_uniq_var_116;
var varname = _uniq_var_116;
varname;
varname;
var _uniq_var_117 = true;
_uniq_var_117;
var _uniq_var_118 = null;
_uniq_var_118;
var _uniq_var_121 = __eq__(env[varname], undefined);
_uniq_var_121;
var _uniq_var_122 = _uniq_var_121;
_uniq_var_122;
if (_uniq_var_122) {
var _uniq_var_123 = __ne__(varname, seqFuncParamsName.ret);
_uniq_var_123;
(_uniq_var_122 = _uniq_var_123);

};
if ((_uniq_var_117 && _uniq_var_122)) {
(_uniq_var_117 = false);
var _uniq_var_119 = console.log(varname);
_uniq_var_119;
_uniq_var_119;
var _uniq_var_120 = console.log("var undefined");
_uniq_var_120;
(_uniq_var_118 = _uniq_var_120);

};
_uniq_var_118;
var _uniq_var_124 = generate(expr[0], env, ctx0, def);
_uniq_var_124;
var varname = _uniq_var_124;
varname;
varname;
var _uniq_var_125 = generate(expr[2], env, ctx, def);
_uniq_var_125;
var value = _uniq_var_125;
value;
value;
var _uniq_var_126 = join([varname, " = ", value]);
_uniq_var_126;
return _uniq_var_126;
};_uniq_var_361.__lix_func__ = true;return _uniq_var_361;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_362 = function (expr, env, ctx, def) {var _uniq_var_127 = env_new(env);
_uniq_var_127;
var funcEnv = _uniq_var_127;
funcEnv;
funcEnv;
var _uniq_var_128 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_128;
var args = _uniq_var_128;
args;
args;
var _uniq_var_129 = call(getUniqVarName);
_uniq_var_129;
var tmpVar = _uniq_var_129;
tmpVar;
tmpVar;
var _uniq_var_130 = call(GenerateDefNew);
_uniq_var_130;
var def = _uniq_var_130;
def;
def;
var _uniq_var_131 = generate(expr[2], funcEnv, ctx0, def);
_uniq_var_131;
var body = _uniq_var_131;
body;
body;
var _uniq_var_132 = call(def.defineVar);
_uniq_var_132;
var _uniq_var_133 = call(def.appendExpr);
_uniq_var_133;
var _uniq_var_134 = join(['(function (', args, ') {\n', _uniq_var_132, ";\n", _uniq_var_133, ";\n", 'return ', body, ";\n", '})']);
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_362.__lix_func__ = true;return _uniq_var_362;})();
generateFunc;
generateFunc;
var generateExpr = (function () {var _uniq_var_364 = function (expr, env, ctx, def) {var _uniq_var_135 = generate(expr[1], env, ctx0, def);
_uniq_var_135;
var func = _uniq_var_135;
func;
func;
var _uniq_var_136 = generate(expr[0], env, ctx0, def);
_uniq_var_136;
var args = _uniq_var_136;
args;
args;
var _uniq_var_142 = foreach(expr, (function () {var _uniq_var_363 = function (item, index) {var _uniq_var_137 = true;
_uniq_var_137;
var _uniq_var_138 = null;
_uniq_var_138;
var _uniq_var_141 = __gt__(index, 1);
_uniq_var_141;
if ((_uniq_var_137 && _uniq_var_141)) {
(_uniq_var_137 = false);
var _uniq_var_139 = generate(item, env, ctx0, def);
_uniq_var_139;
var _uniq_var_140 = join([args, ', ', _uniq_var_139]);
_uniq_var_140;
(_uniq_var_138 = (args = _uniq_var_140));

};
return _uniq_var_138;
};_uniq_var_363.__lix_func__ = true;return _uniq_var_363;})());
_uniq_var_142;
_uniq_var_142;
var _uniq_var_143 = join([func, '(', args, ')']);
_uniq_var_143;
var _uniq_var_144 = ctx(_uniq_var_143);
_uniq_var_144;
return _uniq_var_144;
};_uniq_var_364.__lix_func__ = true;return _uniq_var_364;})();
generateExpr;
generateExpr;
var GenerateDefNew = (function () {var _uniq_var_377 = function () {var vars = {

};
vars;
vars;
var funcs = [];
funcs;
funcs;
return {
defineVar: (function () {var _uniq_var_369 = function (v) {var _uniq_var_145 = true;
_uniq_var_145;
var _uniq_var_146 = null;
_uniq_var_146;
if ((_uniq_var_145 && v)) {
(_uniq_var_145 = false);
(_uniq_var_146 = (vars[v] = v));

};
if (_uniq_var_145) {
var _uniq_var_147 = map(vars, (function () {var _uniq_var_365 = function (i) {return i;
};_uniq_var_365.__lix_func__ = true;return _uniq_var_365;})());
_uniq_var_147;
var vecs = _uniq_var_147;
vecs;
vecs;
var _uniq_var_148 = true;
_uniq_var_148;
var _uniq_var_149 = null;
_uniq_var_149;
var _uniq_var_152 = __gt__(vecs.length, 0);
_uniq_var_152;
if ((_uniq_var_148 && _uniq_var_152)) {
(_uniq_var_148 = false);
var _uniq_var_150 = (function () {var _uniq_var_368 = function (_uniq_var_366, _uniq_var_367) {
if (typeof _uniq_var_366.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_366.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_366.join.apply(_uniq_var_366, arguments);
} else if (_uniq_var_366.join !== undefined) {
if (_uniq_var_367 === undefined) {
return _uniq_var_366.join;
}
_uniq_var_366.join = _uniq_var_367;
}return _uniq_var_366;
};_uniq_var_368.__lix_func__ = true;return _uniq_var_368;})()(vecs, ', ');
_uniq_var_150;
var _uniq_var_151 = __add__('var ', _uniq_var_150);
_uniq_var_151;
(_uniq_var_149 = _uniq_var_151);

};
if (_uniq_var_148) {
(_uniq_var_149 = '');

};
(_uniq_var_146 = _uniq_var_149);

};
return _uniq_var_146;
};_uniq_var_369.__lix_func__ = true;return _uniq_var_369;})(),
appendExpr: (function () {var _uniq_var_376 = function (v) {var _uniq_var_153 = true;
_uniq_var_153;
var _uniq_var_154 = null;
_uniq_var_154;
if ((_uniq_var_153 && v)) {
(_uniq_var_153 = false);
var _uniq_var_155 = (function () {var _uniq_var_372 = function (_uniq_var_370, _uniq_var_371) {
if (typeof _uniq_var_370.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_370.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_370.push.apply(_uniq_var_370, arguments);
} else if (_uniq_var_370.push !== undefined) {
if (_uniq_var_371 === undefined) {
return _uniq_var_370.push;
}
_uniq_var_370.push = _uniq_var_371;
}return _uniq_var_370;
};_uniq_var_372.__lix_func__ = true;return _uniq_var_372;})()(funcs, v);
_uniq_var_155;
(_uniq_var_154 = _uniq_var_155);

};
if (_uniq_var_153) {
var _uniq_var_156 = (function () {var _uniq_var_375 = function (_uniq_var_373, _uniq_var_374) {
if (typeof _uniq_var_373.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_373.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_373.join.apply(_uniq_var_373, arguments);
} else if (_uniq_var_373.join !== undefined) {
if (_uniq_var_374 === undefined) {
return _uniq_var_373.join;
}
_uniq_var_373.join = _uniq_var_374;
}return _uniq_var_373;
};_uniq_var_375.__lix_func__ = true;return _uniq_var_375;})()(funcs, ';\n');
_uniq_var_156;
(_uniq_var_154 = _uniq_var_156);

};
return _uniq_var_154;
};_uniq_var_376.__lix_func__ = true;return _uniq_var_376;})()
};
};_uniq_var_377.__lix_func__ = true;return _uniq_var_377;})();
GenerateDefNew;
GenerateDefNew;
var generateStart = (function () {var _uniq_var_378 = function (expr, env, ctx, def) {var _uniq_var_157 = call(GenerateDefNew);
_uniq_var_157;
var def = _uniq_var_157;
def;
def;
var _uniq_var_158 = generate(expr[0], env, ctx, def);
_uniq_var_158;
var body = _uniq_var_158;
body;
body;
var _uniq_var_159 = join(['try {\n', body, '(function(x){return x;}, 0)\n', '} catch (e) {\n', '}']);
_uniq_var_159;
var body = _uniq_var_159;
body;
body;
var _uniq_var_160 = call(def.defineVar);
_uniq_var_160;
var _uniq_var_161 = call(def.appendExpr);
_uniq_var_161;
var _uniq_var_162 = join([_uniq_var_160, ";\n", _uniq_var_161, ";\n", body]);
_uniq_var_162;
return _uniq_var_162;
};_uniq_var_378.__lix_func__ = true;return _uniq_var_378;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_379 = function (expr, env, ctx, def) {var _uniq_var_163 = generate(expr[0], env, ctx, def);
_uniq_var_163;
return _uniq_var_163;
};_uniq_var_379.__lix_func__ = true;return _uniq_var_379;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_380 = function (expr, env, ctx, def) {var _uniq_var_164 = join(['"', expr[0], '"']);
_uniq_var_164;
return _uniq_var_164;
};_uniq_var_380.__lix_func__ = true;return _uniq_var_380;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_381 = function (expr, env, ctx, def) {var _uniq_var_165 = generate(expr[0], env, ctx, def);
_uniq_var_165;
var _uniq_var_166 = join(['("', expr[2], '" + ', _uniq_var_165, ')']);
_uniq_var_166;
return _uniq_var_166;
};_uniq_var_381.__lix_func__ = true;return _uniq_var_381;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_386 = function (expr, env, ctx, def) {var _uniq_var_168 = map(expr[0], (function () {var _uniq_var_382 = function (i) {var _uniq_var_167 = generate(i, env, ctx, def);
_uniq_var_167;
return _uniq_var_167;
};_uniq_var_382.__lix_func__ = true;return _uniq_var_382;})());
_uniq_var_168;
var _uniq_var_169 = (function () {var _uniq_var_385 = function (_uniq_var_383, _uniq_var_384) {
if (typeof _uniq_var_383.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_383.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_383.join.apply(_uniq_var_383, arguments);
} else if (_uniq_var_383.join !== undefined) {
if (_uniq_var_384 === undefined) {
return _uniq_var_383.join;
}
_uniq_var_383.join = _uniq_var_384;
}return _uniq_var_383;
};_uniq_var_385.__lix_func__ = true;return _uniq_var_385;})()(_uniq_var_168, ',');
_uniq_var_169;
var path = _uniq_var_169;
path;
path;
var _uniq_var_170 = join(['[', path, '].join("/")']);
_uniq_var_170;
return _uniq_var_170;
};_uniq_var_386.__lix_func__ = true;return _uniq_var_386;})();
generatePath;
generatePath;
var generateOpTable = {
'{start}': generateStart,
'{seq}': generateSeq,
'{mono}': generateMono,
'{atomic}': generateAtomic,
'{.}': generateFieldAccess,
'{func}': generateFunc,
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
var generateOp = (function () {var _uniq_var_387 = function (hint) {var _uniq_var_171 = true;
_uniq_var_171;
var _uniq_var_172 = null;
_uniq_var_172;
if ((_uniq_var_171 && generateOpTable[hint])) {
(_uniq_var_171 = false);
(_uniq_var_172 = generateOpTable[hint]);

};
if (_uniq_var_171) {
(_uniq_var_172 = generateExpr);

};
return _uniq_var_172;
};_uniq_var_387.__lix_func__ = true;return _uniq_var_387;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_388 = function (expr, env, ctx, def) {var _uniq_var_173 = generateOp(expr[1]);
_uniq_var_173;
var _uniq_var_174 = _uniq_var_173(expr, env, ctx, def);
_uniq_var_174;
return _uniq_var_174;
};_uniq_var_388.__lix_func__ = true;return _uniq_var_388;})();
generate;
generate;
var _uniq_var_175 = (function () {var _uniq_var_391 = function (_uniq_var_389, _uniq_var_390) {
if (typeof _uniq_var_389.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_389.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_389.join.apply(_uniq_var_389, arguments);
} else if (_uniq_var_389.join !== undefined) {
if (_uniq_var_390 === undefined) {
return _uniq_var_389.join;
}
_uniq_var_389.join = _uniq_var_390;
}return _uniq_var_389;
};_uniq_var_391.__lix_func__ = true;return _uniq_var_391;})()(["function load (filename) {", "return function () {", "return require (filename);", "}", "}"], '\n');
_uniq_var_175;
var env0 = {
exports: null,
require: _uniq_var_175,
__builtin__: "load('/lib/lix/__builtin__.js')();"
};
env0;
env0;
var env_new = (function () {var _uniq_var_393 = function (env) {var _uniq_var_176 = env;
_uniq_var_176;
if (not(_uniq_var_176)) {
(_uniq_var_176 = env0);

};
(env = _uniq_var_176);
var Env = (function () {var _uniq_var_392 = function () {;
};_uniq_var_392.__lix_func__ = true;return _uniq_var_392;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_177 = _instance_(Env);
_uniq_var_177;
return _uniq_var_177;
};_uniq_var_393.__lix_func__ = true;return _uniq_var_393;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_395 = function (expr, define) {var _uniq_var_179 = map(expr, (function () {var _uniq_var_394 = function (item) {var _uniq_var_178 = flatten(item, define);
_uniq_var_178;
return _uniq_var_178;
};_uniq_var_394.__lix_func__ = true;return _uniq_var_394;})());
_uniq_var_179;
var _uniq_var_180 = define(_uniq_var_179);
_uniq_var_180;
return _uniq_var_180;
};_uniq_var_395.__lix_func__ = true;return _uniq_var_395;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_396 = function (expr, define) {return expr;
};_uniq_var_396.__lix_func__ = true;return _uniq_var_396;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_401 = function (expr, define) {var _uniq_var_181 = call(statementFlattenGenerator);
_uniq_var_181;
var whileDefine = _uniq_var_181;
whileDefine;
whileDefine;
var _uniq_var_182 = flatten(expr[0], whileDefine);
_uniq_var_182;
(expr[0] = _uniq_var_182);
var _uniq_var_183 = flatten(expr[2], define0);
_uniq_var_183;
(expr[2] = _uniq_var_183);
var _uniq_var_184 = call(whileDefine);
_uniq_var_184;
var _uniq_var_185 = (function () {var _uniq_var_399 = function (_uniq_var_397, _uniq_var_398) {
if (typeof _uniq_var_397.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_397.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_397.concat.apply(_uniq_var_397, arguments);
} else if (_uniq_var_397.concat !== undefined) {
if (_uniq_var_398 === undefined) {
return _uniq_var_397.concat;
}
_uniq_var_397.concat = _uniq_var_398;
}return _uniq_var_397;
};_uniq_var_399.__lix_func__ = true;return _uniq_var_399;})()(expr[2][0], _uniq_var_184);
_uniq_var_185;
(expr[2][0] = _uniq_var_185);
var _uniq_var_186 = call(whileDefine);
_uniq_var_186;
var _uniq_var_188 = foreach(_uniq_var_186, (function () {var _uniq_var_400 = function (i) {var _uniq_var_187 = define(i, true);
_uniq_var_187;
return _uniq_var_187;
};_uniq_var_400.__lix_func__ = true;return _uniq_var_400;})());
_uniq_var_188;
_uniq_var_188;
var _uniq_var_189 = define(expr, true);
_uniq_var_189;
_uniq_var_189;
return ['', '{empty}'];
};_uniq_var_401.__lix_func__ = true;return _uniq_var_401;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_406 = function (expr, define) {var _uniq_var_190 = flatten(expr[0], define);
_uniq_var_190;
var ret = _uniq_var_190;
ret;
ret;
var _uniq_var_191 = true;
_uniq_var_191;
var _uniq_var_192 = null;
_uniq_var_192;
var _uniq_var_194 = __ne__(ret[2], 'var');
_uniq_var_194;
if ((_uniq_var_191 && _uniq_var_194)) {
(_uniq_var_191 = false);
var _uniq_var_193 = define(ret);
_uniq_var_193;
var ret = _uniq_var_193;
ret;
(_uniq_var_192 = ret);

};
_uniq_var_192;
var getAndOpSeq = (function () {var _uniq_var_405 = function () {var _uniq_var_195 = call(statementFlattenGenerator);
_uniq_var_195;
var AndDefine = _uniq_var_195;
AndDefine;
AndDefine;
var _uniq_var_196 = flatten(expr[2], AndDefine);
_uniq_var_196;
var seqRet = _uniq_var_196;
seqRet;
seqRet;
var _uniq_var_197 = call(AndDefine);
_uniq_var_197;
var seq = _uniq_var_197;
seq;
seq;
var _uniq_var_198 = (function () {var _uniq_var_404 = function (_uniq_var_402, _uniq_var_403) {
if (typeof _uniq_var_402.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_402.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_402.push.apply(_uniq_var_402, arguments);
} else if (_uniq_var_402.push !== undefined) {
if (_uniq_var_403 === undefined) {
return _uniq_var_402.push;
}
_uniq_var_402.push = _uniq_var_403;
}return _uniq_var_402;
};_uniq_var_404.__lix_func__ = true;return _uniq_var_404;})()(seq, [ret, '=', seqRet]);
_uniq_var_198;
_uniq_var_198;
return [seq, '{seq}'];
};_uniq_var_405.__lix_func__ = true;return _uniq_var_405;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_199 = call(getAndOpSeq);
_uniq_var_199;
var _uniq_var_200 = define([[[[ret, ['not', '{atomic}', 'var']], _uniq_var_199]], 'if'], true);
_uniq_var_200;
_uniq_var_200;
return ret;
};_uniq_var_406.__lix_func__ = true;return _uniq_var_406;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_411 = function (expr, define) {var _uniq_var_201 = flatten(expr[0], define);
_uniq_var_201;
var ret = _uniq_var_201;
ret;
ret;
var _uniq_var_202 = true;
_uniq_var_202;
var _uniq_var_203 = null;
_uniq_var_203;
var _uniq_var_205 = __ne__(ret[2], 'var');
_uniq_var_205;
if ((_uniq_var_202 && _uniq_var_205)) {
(_uniq_var_202 = false);
var _uniq_var_204 = define(ret);
_uniq_var_204;
var ret = _uniq_var_204;
ret;
(_uniq_var_203 = ret);

};
_uniq_var_203;
var getAndOpSeq = (function () {var _uniq_var_410 = function () {var _uniq_var_206 = call(statementFlattenGenerator);
_uniq_var_206;
var AndDefine = _uniq_var_206;
AndDefine;
AndDefine;
var _uniq_var_207 = flatten(expr[2], AndDefine);
_uniq_var_207;
var seqRet = _uniq_var_207;
seqRet;
seqRet;
var _uniq_var_208 = call(AndDefine);
_uniq_var_208;
var seq = _uniq_var_208;
seq;
seq;
var _uniq_var_209 = (function () {var _uniq_var_409 = function (_uniq_var_407, _uniq_var_408) {
if (typeof _uniq_var_407.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_407.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_407.push.apply(_uniq_var_407, arguments);
} else if (_uniq_var_407.push !== undefined) {
if (_uniq_var_408 === undefined) {
return _uniq_var_407.push;
}
_uniq_var_407.push = _uniq_var_408;
}return _uniq_var_407;
};_uniq_var_409.__lix_func__ = true;return _uniq_var_409;})()(seq, [ret, '=', seqRet]);
_uniq_var_209;
_uniq_var_209;
return [seq, '{seq}'];
};_uniq_var_410.__lix_func__ = true;return _uniq_var_410;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_210 = call(getAndOpSeq);
_uniq_var_210;
var _uniq_var_211 = define([[[ret, _uniq_var_210]], 'if'], true);
_uniq_var_211;
_uniq_var_211;
return ret;
};_uniq_var_411.__lix_func__ = true;return _uniq_var_411;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_416 = function (expr, define, tmpVar, ctx) {var _uniq_var_224 = foreach(expr[0], (function () {var _uniq_var_415 = function (i) {var _uniq_var_212 = true;
_uniq_var_212;
var _uniq_var_213 = null;
_uniq_var_213;
var _uniq_var_216 = __eq__(i[1], 'else');
_uniq_var_216;
if ((_uniq_var_212 && _uniq_var_216)) {
(_uniq_var_212 = false);
var _uniq_var_214 = flatten(i[0], define0, ctx);
_uniq_var_214;
var elseSeq = _uniq_var_214;
elseSeq;
elseSeq;
var _uniq_var_215 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_215;
(_uniq_var_213 = _uniq_var_215);

};
var _uniq_var_219 = __eq__(i[1], 'if');
_uniq_var_219;
if ((_uniq_var_212 && _uniq_var_219)) {
(_uniq_var_212 = false);
var _uniq_var_217 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_217;
var _uniq_var_218 = define(_uniq_var_217);
_uniq_var_218;
(_uniq_var_213 = _uniq_var_218);

};
if (_uniq_var_212) {
var _uniq_var_220 = flatten(i[1], define0, ctx);
_uniq_var_220;
var ifSeq = _uniq_var_220;
ifSeq;
ifSeq;
var _uniq_var_221 = (function () {var _uniq_var_414 = function (_uniq_var_412, _uniq_var_413) {
if (typeof _uniq_var_412.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_412.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_412.unshift.apply(_uniq_var_412, arguments);
} else if (_uniq_var_412.unshift !== undefined) {
if (_uniq_var_413 === undefined) {
return _uniq_var_412.unshift;
}
_uniq_var_412.unshift = _uniq_var_413;
}return _uniq_var_412;
};_uniq_var_414.__lix_func__ = true;return _uniq_var_414;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_221;
_uniq_var_221;
var _uniq_var_222 = flatten(i[0], define);
_uniq_var_222;
var cond = _uniq_var_222;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_223 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_223;
(_uniq_var_213 = _uniq_var_223);

};
return _uniq_var_213;
};_uniq_var_415.__lix_func__ = true;return _uniq_var_415;})());
_uniq_var_224;
return _uniq_var_224;
};_uniq_var_416.__lix_func__ = true;return _uniq_var_416;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_418 = function (expr, define) {var _uniq_var_225 = define(['true', '{atomic}']);
_uniq_var_225;
var tmpVar = _uniq_var_225;
tmpVar;
tmpVar;
var _uniq_var_226 = define(['null', '{atomic}']);
_uniq_var_226;
var retVar = _uniq_var_226;
retVar;
retVar;
var ctx = (function () {var _uniq_var_417 = function (i) {return [retVar, '=', i];
};_uniq_var_417.__lix_func__ = true;return _uniq_var_417;})();
ctx;
ctx;
var _uniq_var_227 = _flattenIf(expr, define, tmpVar, ctx);
_uniq_var_227;
_uniq_var_227;
return retVar;
};_uniq_var_418.__lix_func__ = true;return _uniq_var_418;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_419 = function (expr, define) {var _uniq_var_228 = flatten(expr[2], define);
_uniq_var_228;
(expr[2] = _uniq_var_228);
return expr;
};_uniq_var_419.__lix_func__ = true;return _uniq_var_419;})();
flattenAssign;
flattenAssign;
var flattenDef = flattenAssign;
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_420 = function (expr, define) {var _uniq_var_229 = flatten(expr[0], define);
_uniq_var_229;
(expr[0] = _uniq_var_229);
return expr;
};_uniq_var_420.__lix_func__ = true;return _uniq_var_420;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_421 = function (expr, define) {return expr;
};_uniq_var_421.__lix_func__ = true;return _uniq_var_421;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_423 = function (expr, define) {var _uniq_var_231 = map(expr[0], (function () {var _uniq_var_422 = function (i) {var _uniq_var_230 = flatten(i, define);
_uniq_var_230;
return _uniq_var_230;
};_uniq_var_422.__lix_func__ = true;return _uniq_var_422;})());
_uniq_var_231;
(expr[0] = _uniq_var_231);
return expr;
};_uniq_var_423.__lix_func__ = true;return _uniq_var_423;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_424 = function (expr, define) {return expr;
};_uniq_var_424.__lix_func__ = true;return _uniq_var_424;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_425 = function (expr, define) {var _uniq_var_232 = true;
_uniq_var_232;
var _uniq_var_233 = null;
_uniq_var_233;
var _uniq_var_235 = __eq__(expr[1], '{index}');
_uniq_var_235;
if ((_uniq_var_232 && _uniq_var_235)) {
(_uniq_var_232 = false);
var _uniq_var_234 = flatten(expr[0], define);
_uniq_var_234;
(_uniq_var_233 = (expr[0] = _uniq_var_234));

};
_uniq_var_233;
return expr;
};_uniq_var_425.__lix_func__ = true;return _uniq_var_425;})();
flattenField;
flattenField;
var flattenMethod = (function () {var _uniq_var_426 = function (expr, define) {var _uniq_var_236 = flattenField(expr[0], define);
_uniq_var_236;
(expr[0] = _uniq_var_236);
return expr;
};_uniq_var_426.__lix_func__ = true;return _uniq_var_426;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_427 = function (expr, define) {var _uniq_var_237 = flatten(expr[2], define);
_uniq_var_237;
(expr[2] = _uniq_var_237);
return expr;
};_uniq_var_427.__lix_func__ = true;return _uniq_var_427;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_429 = function (expr, define) {var _uniq_var_239 = map(expr[0], (function () {var _uniq_var_428 = function (i) {var _uniq_var_238 = flattenProperty(i, define);
_uniq_var_238;
return _uniq_var_238;
};_uniq_var_428.__lix_func__ = true;return _uniq_var_428;})());
_uniq_var_239;
(expr[0] = _uniq_var_239);
return expr;
};_uniq_var_429.__lix_func__ = true;return _uniq_var_429;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_431 = function (expr, define) {var _uniq_var_241 = map(expr[0], (function () {var _uniq_var_430 = function (i) {var _uniq_var_240 = flatten(i, define);
_uniq_var_240;
return _uniq_var_240;
};_uniq_var_430.__lix_func__ = true;return _uniq_var_430;})());
_uniq_var_241;
(expr[0] = _uniq_var_241);
return expr;
};_uniq_var_431.__lix_func__ = true;return _uniq_var_431;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_432 = function (expr, define) {var _uniq_var_242 = flatten(expr[2], define);
_uniq_var_242;
(expr[2] = _uniq_var_242);
return expr;
};_uniq_var_432.__lix_func__ = true;return _uniq_var_432;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_433 = function (expr, define) {var _uniq_var_243 = true;
_uniq_var_243;
var _uniq_var_244 = null;
_uniq_var_244;
var _uniq_var_247 = __eq__(expr[1], '{.}');
_uniq_var_247;
if ((_uniq_var_243 && _uniq_var_247)) {
(_uniq_var_243 = false);
var _uniq_var_245 = flattenFieldAccess(expr[0], define);
_uniq_var_245;
(expr[0] = _uniq_var_245);
var _uniq_var_246 = flattenField(expr[2], define);
_uniq_var_246;
(_uniq_var_244 = (expr[2] = _uniq_var_246));

};
_uniq_var_244;
return expr;
};_uniq_var_433.__lix_func__ = true;return _uniq_var_433;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_434 = function (expr, define) {return expr;
};_uniq_var_434.__lix_func__ = true;return _uniq_var_434;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_435 = function (expr, define) {var _uniq_var_248 = flatten(expr[0], define);
_uniq_var_248;
return _uniq_var_248;
};_uniq_var_435.__lix_func__ = true;return _uniq_var_435;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_446 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_445 = function (statement, tmpVarName) {var _uniq_var_249 = true;
_uniq_var_249;
var _uniq_var_250 = null;
_uniq_var_250;
var _uniq_var_251 = __eq__(statement, undefined);
_uniq_var_251;
if ((_uniq_var_249 && _uniq_var_251)) {
(_uniq_var_249 = false);
(_uniq_var_250 = data);

};
var _uniq_var_253 = __eq__(tmpVarName, true);
_uniq_var_253;
if ((_uniq_var_249 && _uniq_var_253)) {
(_uniq_var_249 = false);
var _uniq_var_252 = (function () {var _uniq_var_438 = function (_uniq_var_436, _uniq_var_437) {
if (typeof _uniq_var_436.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_436.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_436.push.apply(_uniq_var_436, arguments);
} else if (_uniq_var_436.push !== undefined) {
if (_uniq_var_437 === undefined) {
return _uniq_var_436.push;
}
_uniq_var_436.push = _uniq_var_437;
}return _uniq_var_436;
};_uniq_var_438.__lix_func__ = true;return _uniq_var_438;})()(data, statement);
_uniq_var_252;
(_uniq_var_250 = _uniq_var_252);

};
var _uniq_var_257 = __eq__(tmpVarName, undefined);
_uniq_var_257;
if ((_uniq_var_249 && _uniq_var_257)) {
(_uniq_var_249 = false);
var _uniq_var_254 = call(getUniqVarName);
_uniq_var_254;
var varName = _uniq_var_254;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}', 'tmp'];
lixVar;
lixVar;
var tmpRet = [seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
tmpRet;
tmpRet;
var _uniq_var_255 = (function () {var _uniq_var_441 = function (_uniq_var_439, _uniq_var_440) {
if (typeof _uniq_var_439.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_439.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_439.push.apply(_uniq_var_439, arguments);
} else if (_uniq_var_439.push !== undefined) {
if (_uniq_var_440 === undefined) {
return _uniq_var_439.push;
}
_uniq_var_439.push = _uniq_var_440;
}return _uniq_var_439;
};_uniq_var_441.__lix_func__ = true;return _uniq_var_441;})()(data, [tmpRet, ':=', statement]);
_uniq_var_255;
_uniq_var_255;
var _uniq_var_256 = (function () {var _uniq_var_444 = function (_uniq_var_442, _uniq_var_443) {
if (typeof _uniq_var_442.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_442.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_442.push.apply(_uniq_var_442, arguments);
} else if (_uniq_var_442.push !== undefined) {
if (_uniq_var_443 === undefined) {
return _uniq_var_442.push;
}
_uniq_var_442.push = _uniq_var_443;
}return _uniq_var_442;
};_uniq_var_444.__lix_func__ = true;return _uniq_var_444;})()(data, [lixVar, ':=', tmpRet]);
_uniq_var_256;
_uniq_var_256;
(_uniq_var_250 = lixVar);

};
return _uniq_var_250;
};_uniq_var_445.__lix_func__ = true;return _uniq_var_445;})();
};_uniq_var_446.__lix_func__ = true;return _uniq_var_446;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_458 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_447 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_258 = true;
_uniq_var_258;
var _uniq_var_259 = null;
_uniq_var_259;
var _uniq_var_261 = seqCtx;
_uniq_var_261;
if (_uniq_var_261) {
var _uniq_var_262 = parseInt(index);
_uniq_var_262;
var _uniq_var_263 = __sub__(expr[0].length, 1);
_uniq_var_263;
var _uniq_var_264 = __eq__(_uniq_var_262, _uniq_var_263);
_uniq_var_264;
(_uniq_var_261 = _uniq_var_264);

};
if ((_uniq_var_258 && _uniq_var_261)) {
(_uniq_var_258 = false);
var _uniq_var_260 = seqCtx(stmt);
_uniq_var_260;
var ret = _uniq_var_260;
ret;
(_uniq_var_259 = ret);

};
_uniq_var_259;
return ret;
};_uniq_var_447.__lix_func__ = true;return _uniq_var_447;})();
ctx;
ctx;
var _uniq_var_291 = foreach(expr[0], (function () {var _uniq_var_457 = function (item, index) {var _uniq_var_265 = call(statementFlattenGenerator);
_uniq_var_265;
var exprDefine = _uniq_var_265;
exprDefine;
exprDefine;
var _uniq_var_266 = flatten(item, exprDefine);
_uniq_var_266;
var itemRet = _uniq_var_266;
itemRet;
itemRet;
var _uniq_var_267 = call(exprDefine);
_uniq_var_267;
var _uniq_var_268 = (function () {var _uniq_var_450 = function (_uniq_var_448, _uniq_var_449) {
if (typeof _uniq_var_448.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_448.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_448.concat.apply(_uniq_var_448, arguments);
} else if (_uniq_var_448.concat !== undefined) {
if (_uniq_var_449 === undefined) {
return _uniq_var_448.concat;
}
_uniq_var_448.concat = _uniq_var_449;
}return _uniq_var_448;
};_uniq_var_450.__lix_func__ = true;return _uniq_var_450;})()(ret, _uniq_var_267);
_uniq_var_268;
(ret = _uniq_var_268);
var _uniq_var_269 = ctx(itemRet, index);
_uniq_var_269;
var stmtRet = _uniq_var_269;
stmtRet;
stmtRet;
var isTmpVar = (function () {var _uniq_var_451 = function (expr) {var _uniq_var_270 = __eq__(expr[1], '{atomic}');
_uniq_var_270;
var _uniq_var_271 = _uniq_var_270;
_uniq_var_271;
if (_uniq_var_271) {
var _uniq_var_272 = __ne__(expr[3], undefined);
_uniq_var_272;
(_uniq_var_271 = _uniq_var_272);

};
return _uniq_var_271;
};_uniq_var_451.__lix_func__ = true;return _uniq_var_451;})();
isTmpVar;
isTmpVar;
var isRealVar = (function () {var _uniq_var_452 = function (expr) {var _uniq_var_273 = __eq__(expr[1], '{atomic}');
_uniq_var_273;
var _uniq_var_274 = _uniq_var_273;
_uniq_var_274;
if (_uniq_var_274) {
var _uniq_var_275 = __eq__(expr[3], undefined);
_uniq_var_275;
(_uniq_var_274 = _uniq_var_275);

};
return _uniq_var_274;
};_uniq_var_452.__lix_func__ = true;return _uniq_var_452;})();
isRealVar;
isRealVar;
var isRealExpr = (function () {var _uniq_var_453 = function (expr) {var _uniq_var_276 = isRealVar(expr);
_uniq_var_276;
var _uniq_var_277 = _uniq_var_276;
_uniq_var_277;
if (not(_uniq_var_277)) {
var _uniq_var_278 = __ne__(expr[1], 'if');
_uniq_var_278;
var _uniq_var_279 = _uniq_var_278;
_uniq_var_279;
if (_uniq_var_279) {
var _uniq_var_280 = __ne__(expr[1], 'while');
_uniq_var_280;
(_uniq_var_279 = _uniq_var_280);

};
(_uniq_var_277 = _uniq_var_279);

};
return _uniq_var_277;
};_uniq_var_453.__lix_func__ = true;return _uniq_var_453;})();
isRealExpr;
isRealExpr;
var _uniq_var_281 = true;
_uniq_var_281;
var _uniq_var_282 = null;
_uniq_var_282;
var _uniq_var_287 = __ne__(stmtRet[1], '{empty}');
_uniq_var_287;
var _uniq_var_288 = _uniq_var_287;
_uniq_var_288;
if (_uniq_var_288) {
var _uniq_var_289 = isTmpVar(stmtRet);
_uniq_var_289;
var _uniq_var_290 = not(_uniq_var_289);
_uniq_var_290;
(_uniq_var_288 = _uniq_var_290);

};
if ((_uniq_var_281 && _uniq_var_288)) {
(_uniq_var_281 = false);
var _uniq_var_283 = true;
_uniq_var_283;
var _uniq_var_284 = null;
_uniq_var_284;
var _uniq_var_285 = isRealExpr(stmtRet);
_uniq_var_285;
if ((_uniq_var_283 && _uniq_var_285)) {
(_uniq_var_283 = false);
(_uniq_var_284 = (stmtRet = [[seqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', stmtRet]));

};
_uniq_var_284;
var _uniq_var_286 = (function () {var _uniq_var_456 = function (_uniq_var_454, _uniq_var_455) {
if (typeof _uniq_var_454.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_454.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_454.push.apply(_uniq_var_454, arguments);
} else if (_uniq_var_454.push !== undefined) {
if (_uniq_var_455 === undefined) {
return _uniq_var_454.push;
}
_uniq_var_454.push = _uniq_var_455;
}return _uniq_var_454;
};_uniq_var_456.__lix_func__ = true;return _uniq_var_456;})()(ret, stmtRet);
_uniq_var_286;
(_uniq_var_282 = _uniq_var_286);

};
return _uniq_var_282;
};_uniq_var_457.__lix_func__ = true;return _uniq_var_457;})());
_uniq_var_291;
_uniq_var_291;
(expr[0] = ret);
return expr;
};_uniq_var_458.__lix_func__ = true;return _uniq_var_458;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_459 = function (expr, define) {var _uniq_var_292 = flatten(expr[0], define);
_uniq_var_292;
var ret = _uniq_var_292;
ret;
ret;
return [ret, '{start}'];
};_uniq_var_459.__lix_func__ = true;return _uniq_var_459;})();
flattenStart;
flattenStart;
var flattenOpTable = {
'{start}': flattenStart,
'{seq}': flattenSeq,
'{mono}': flattenMono,
'{atomic}': flattenAtomic,
'{.}': flattenFieldAccess,
'{func}': flattenFunc,
'{array}': flattenArray,
'{object}': flattenObjectLiteral,
'{method}': flattenMethod,
'{empty}': flattenEmpty,
'{path}': flattenPath,
'{path_item}': flattenPathItem,
'{path_arg_item}': flattenPathArgItem,
':=': flattenDef,
'=': flattenAssign,
'if': flattenIf,
'and': flattenAnd,
'or': flattenOr,
'while': flattenWhile,
'break': flattenBreak
};
flattenOpTable;
flattenOpTable;
var flattenOp = (function () {var _uniq_var_460 = function (hint) {var _uniq_var_293 = true;
_uniq_var_293;
var _uniq_var_294 = null;
_uniq_var_294;
if ((_uniq_var_293 && flattenOpTable[hint])) {
(_uniq_var_293 = false);
(_uniq_var_294 = flattenOpTable[hint]);

};
if (_uniq_var_293) {
(_uniq_var_294 = flattenExpr);

};
return _uniq_var_294;
};_uniq_var_460.__lix_func__ = true;return _uniq_var_460;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_461 = function (expr, define, ctx) {var _uniq_var_295 = flattenOp(expr[1]);
_uniq_var_295;
var _uniq_var_296 = _uniq_var_295(expr, define, ctx);
_uniq_var_296;
return _uniq_var_296;
};_uniq_var_461.__lix_func__ = true;return _uniq_var_461;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_462 = function (i) {return i;
};_uniq_var_462.__lix_func__ = true;return _uniq_var_462;})();
define0;
define0;
var def0 = {
defineVar: (function () {var _uniq_var_463 = function (i) {;
};_uniq_var_463.__lix_func__ = true;return _uniq_var_463;})(),
appendExpr: (function () {var _uniq_var_464 = function (i) {;
};_uniq_var_464.__lix_func__ = true;return _uniq_var_464;})()
};
def0;
def0;
var seqFuncParamsName = {
cb: '_cb',
step: '_step',
cont: '_cont',
ret: '_ret'
};
seqFuncParamsName;
seqFuncParamsName;
(exports.compile = (function () {var _uniq_var_471 = function (expr) {var _uniq_var_297 = map(env0, (function () {var _uniq_var_465 = function (i) {return i;
};_uniq_var_465.__lix_func__ = true;return _uniq_var_465;})());
_uniq_var_297;
var _uniq_var_298 = (function () {var _uniq_var_468 = function (_uniq_var_466, _uniq_var_467) {
if (typeof _uniq_var_466.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_466.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_466.join.apply(_uniq_var_466, arguments);
} else if (_uniq_var_466.join !== undefined) {
if (_uniq_var_467 === undefined) {
return _uniq_var_466.join;
}
_uniq_var_466.join = _uniq_var_467;
}return _uniq_var_466;
};_uniq_var_468.__lix_func__ = true;return _uniq_var_468;})()(_uniq_var_297, "\n");
_uniq_var_298;
var libs = _uniq_var_298;
libs;
libs;
var _uniq_var_299 = flatten(expr, (function () {var _uniq_var_469 = function (i) {;
};_uniq_var_469.__lix_func__ = true;return _uniq_var_469;})(), (function () {var _uniq_var_470 = function (i) {return i;
};_uniq_var_470.__lix_func__ = true;return _uniq_var_470;})());
_uniq_var_299;
var _uniq_var_300 = call(env_new);
_uniq_var_300;
var _uniq_var_301 = generate(_uniq_var_299, _uniq_var_300, ctx0, def0);
_uniq_var_301;
var code = _uniq_var_301;
code;
code;
var _uniq_var_302 = join([libs, "\n", code]);
_uniq_var_302;
var _uniq_var_303 = console.log(_uniq_var_302);
_uniq_var_303;
return _uniq_var_303;
};_uniq_var_471.__lix_func__ = true;return _uniq_var_471;})());

