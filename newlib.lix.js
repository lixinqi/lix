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
var join = (function () {var _uniq_var_258 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_257 = function (_uniq_var_255, _uniq_var_256) {
if (typeof _uniq_var_255.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_255.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_255.join.apply(_uniq_var_255, arguments);
} else if (_uniq_var_255.join !== undefined) {
if (_uniq_var_256 === undefined) {
return _uniq_var_255.join;
}
_uniq_var_255.join = _uniq_var_256;
}return _uniq_var_255;
};_uniq_var_257.__lix_func__ = true;return _uniq_var_257;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_258.__lix_func__ = true;return _uniq_var_258;})();
join;
join;
var map = (function () {var _uniq_var_263 = function (arr, cb) {var ret = [];
ret;
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_262 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_261 = function (_uniq_var_259, _uniq_var_260) {
if (typeof _uniq_var_259.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_259.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_259.push.apply(_uniq_var_259, arguments);
} else if (_uniq_var_259.push !== undefined) {
if (_uniq_var_260 === undefined) {
return _uniq_var_259.push;
}
_uniq_var_259.push = _uniq_var_260;
}return _uniq_var_259;
};_uniq_var_261.__lix_func__ = true;return _uniq_var_261;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_262.__lix_func__ = true;return _uniq_var_262;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_263.__lix_func__ = true;return _uniq_var_263;})();
map;
map;
var counterGenerator = (function () {var _uniq_var_265 = function () {var counter = 0;
counter;
counter;
return (function () {var _uniq_var_264 = function () {var ret = counter;
ret;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_264.__lix_func__ = true;return _uniq_var_264;})();
};_uniq_var_265.__lix_func__ = true;return _uniq_var_265;})();
counterGenerator;
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
getCount;
var getUniqVarName = (function () {var _uniq_var_266 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_uniq_var_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_266.__lix_func__ = true;return _uniq_var_266;})();
getUniqVarName;
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_271 = function (args, env, ctx) {var _uniq_var_8 = map(args, (function () {var _uniq_var_267 = function (i) {var varname = i[0];
varname;
varname;
(env[varname] = true);
return varname;
};_uniq_var_267.__lix_func__ = true;return _uniq_var_267;})());
_uniq_var_8;
var _uniq_var_9 = (function () {var _uniq_var_270 = function (_uniq_var_268, _uniq_var_269) {
if (typeof _uniq_var_268.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_268.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_268.join.apply(_uniq_var_268, arguments);
} else if (_uniq_var_268.join !== undefined) {
if (_uniq_var_269 === undefined) {
return _uniq_var_268.join;
}
_uniq_var_268.join = _uniq_var_269;
}return _uniq_var_268;
};_uniq_var_270.__lix_func__ = true;return _uniq_var_270;})()(_uniq_var_8, ', ');
_uniq_var_9;
return _uniq_var_9;
};_uniq_var_271.__lix_func__ = true;return _uniq_var_271;})();
generateFuncArgs;
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_272 = function (x) {return x;
};_uniq_var_272.__lix_func__ = true;return _uniq_var_272;})();
ctx0;
ctx0;
var generateSeq = (function () {var _uniq_var_278 = function (expr, env, ctx) {var _uniq_var_10 = __sub__(expr[0].length, 1);
_uniq_var_10;
var last = _uniq_var_10;
last;
last;
var seqCtx = (function () {var _uniq_var_273 = function (index) {var _uniq_var_11 = true;
_uniq_var_11;
var _uniq_var_12 = null;
_uniq_var_12;
var _uniq_var_13 = __lt__(index, last);
_uniq_var_13;
if ((_uniq_var_11 && _uniq_var_13)) {
(_uniq_var_11 = false);
(_uniq_var_12 = ctx0);

};
if (_uniq_var_11) {
(_uniq_var_12 = ctx);

};
return _uniq_var_12;
};_uniq_var_273.__lix_func__ = true;return _uniq_var_273;})();
seqCtx;
seqCtx;
var _uniq_var_16 = map(expr[0], (function () {var _uniq_var_274 = function (item, index) {var _uniq_var_14 = seqCtx(index);
_uniq_var_14;
var _uniq_var_15 = generate(item, env, _uniq_var_14);
_uniq_var_15;
return _uniq_var_15;
};_uniq_var_274.__lix_func__ = true;return _uniq_var_274;})());
_uniq_var_16;
var _uniq_var_17 = (function () {var _uniq_var_277 = function (_uniq_var_275, _uniq_var_276) {
if (typeof _uniq_var_275.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_275.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_275.join.apply(_uniq_var_275, arguments);
} else if (_uniq_var_275.join !== undefined) {
if (_uniq_var_276 === undefined) {
return _uniq_var_275.join;
}
_uniq_var_275.join = _uniq_var_276;
}return _uniq_var_275;
};_uniq_var_277.__lix_func__ = true;return _uniq_var_277;})()(_uniq_var_16, ";\n");
_uniq_var_17;
var _uniq_var_18 = __add__(_uniq_var_17, ";\n");
_uniq_var_18;
return _uniq_var_18;
};_uniq_var_278.__lix_func__ = true;return _uniq_var_278;})();
generateSeq;
generateSeq;
var generateOr = (function () {var _uniq_var_279 = function (expr, env, ctx) {var _uniq_var_19 = generate(expr[0], env, ctx0);
_uniq_var_19;
var _uniq_var_20 = generate(expr[2], env, ctx0);
_uniq_var_20;
var _uniq_var_21 = join(['(', _uniq_var_19, " || ", _uniq_var_20, ')']);
_uniq_var_21;
var _uniq_var_22 = ctx(_uniq_var_21);
_uniq_var_22;
return _uniq_var_22;
};_uniq_var_279.__lix_func__ = true;return _uniq_var_279;})();
generateOr;
generateOr;
var generateAnd = (function () {var _uniq_var_280 = function (expr, env, ctx) {var _uniq_var_23 = generate(expr[0], env, ctx0);
_uniq_var_23;
var _uniq_var_24 = generate(expr[2], env, ctx0);
_uniq_var_24;
var _uniq_var_25 = join(['(', _uniq_var_23, " && ", _uniq_var_24, ')']);
_uniq_var_25;
var _uniq_var_26 = ctx(_uniq_var_25);
_uniq_var_26;
return _uniq_var_26;
};_uniq_var_280.__lix_func__ = true;return _uniq_var_280;})();
generateAnd;
generateAnd;
var generateIf = (function () {var _uniq_var_285 = function (expr, env, ctx) {var _uniq_var_37 = map(expr[0], (function () {var _uniq_var_281 = function (i) {var _uniq_var_27 = true;
_uniq_var_27;
var _uniq_var_28 = null;
_uniq_var_28;
var _uniq_var_31 = __eq__(i[1], 'else');
_uniq_var_31;
if ((_uniq_var_27 && _uniq_var_31)) {
(_uniq_var_27 = false);
var _uniq_var_29 = generate(i[0], env, ctx);
_uniq_var_29;
var _uniq_var_30 = join(['{\n', _uniq_var_29, '\n}']);
_uniq_var_30;
(_uniq_var_28 = _uniq_var_30);

};
var _uniq_var_33 = __eq__(i[1], 'if');
_uniq_var_33;
if ((_uniq_var_27 && _uniq_var_33)) {
(_uniq_var_27 = false);
var _uniq_var_32 = generateIf(i, env, ctx);
_uniq_var_32;
(_uniq_var_28 = _uniq_var_32);

};
if (_uniq_var_27) {
var _uniq_var_34 = generate(i[0], env, ctx0);
_uniq_var_34;
var _uniq_var_35 = generate(i[1], env, ctx);
_uniq_var_35;
var _uniq_var_36 = join(['if (', _uniq_var_34, ') {\n', _uniq_var_35, '\n}']);
_uniq_var_36;
(_uniq_var_28 = _uniq_var_36);

};
return _uniq_var_28;
};_uniq_var_281.__lix_func__ = true;return _uniq_var_281;})());
_uniq_var_37;
var _uniq_var_38 = (function () {var _uniq_var_284 = function (_uniq_var_282, _uniq_var_283) {
if (typeof _uniq_var_282.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_282.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_282.join.apply(_uniq_var_282, arguments);
} else if (_uniq_var_282.join !== undefined) {
if (_uniq_var_283 === undefined) {
return _uniq_var_282.join;
}
_uniq_var_282.join = _uniq_var_283;
}return _uniq_var_282;
};_uniq_var_284.__lix_func__ = true;return _uniq_var_284;})()(_uniq_var_37, ' else ');
_uniq_var_38;
return _uniq_var_38;
};_uniq_var_285.__lix_func__ = true;return _uniq_var_285;})();
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
var generateAtomic = (function () {var _uniq_var_286 = function (expr, env, ctx) {var ret = expr[0];
ret;
ret;
var _uniq_var_39 = true;
_uniq_var_39;
var _uniq_var_40 = null;
_uniq_var_40;
var _uniq_var_44 = __eq__(expr[2], '{var}');
_uniq_var_44;
if ((_uniq_var_39 && _uniq_var_44)) {
(_uniq_var_39 = false);
var _uniq_var_41 = true;
_uniq_var_41;
var _uniq_var_42 = null;
_uniq_var_42;
if ((_uniq_var_41 && operateFuncName[expr[0]])) {
(_uniq_var_41 = false);
(_uniq_var_42 = (ret = operateFuncName[expr[0]]));

};
if (_uniq_var_41) {
var _uniq_var_43 = transformVarName(expr[0]);
_uniq_var_43;
(_uniq_var_42 = (ret = _uniq_var_43));

};
(_uniq_var_40 = _uniq_var_42);

};
_uniq_var_40;
var _uniq_var_45 = ctx(ret);
_uniq_var_45;
return _uniq_var_45;
};_uniq_var_286.__lix_func__ = true;return _uniq_var_286;})();
generateAtomic;
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_287 = function (expr, env, ctx) {var _uniq_var_46 = true;
_uniq_var_46;
var _uniq_var_47 = null;
_uniq_var_47;
var _uniq_var_50 = __eq__(expr[1], '{atomic}');
_uniq_var_50;
if ((_uniq_var_46 && _uniq_var_50)) {
(_uniq_var_46 = false);
var _uniq_var_48 = generateAtomic(expr, env, ctx0);
_uniq_var_48;
var _uniq_var_49 = ctx(_uniq_var_48);
_uniq_var_49;
(_uniq_var_47 = _uniq_var_49);

};
var _uniq_var_53 = __eq__(expr[1], '{index}');
_uniq_var_53;
if ((_uniq_var_46 && _uniq_var_53)) {
(_uniq_var_46 = false);
var _uniq_var_51 = generateAtomic(expr[0], env, ctx0);
_uniq_var_51;
var _uniq_var_52 = ctx(_uniq_var_51);
_uniq_var_52;
(_uniq_var_47 = _uniq_var_52);

};
return _uniq_var_47;
};_uniq_var_287.__lix_func__ = true;return _uniq_var_287;})();
generatePropertyName;
generatePropertyName;
var generateProperty = (function () {var _uniq_var_288 = function (expr, env, ctx) {var _uniq_var_54 = generatePropertyName(expr[0], env, ctx0);
_uniq_var_54;
var propertyName = _uniq_var_54;
propertyName;
propertyName;
var _uniq_var_55 = generate(expr[2], env, ctx0);
_uniq_var_55;
var propertyValue = _uniq_var_55;
propertyValue;
propertyValue;
var _uniq_var_56 = join([propertyName, ": ", propertyValue]);
_uniq_var_56;
return _uniq_var_56;
};_uniq_var_288.__lix_func__ = true;return _uniq_var_288;})();
generateProperty;
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_293 = function (expr, env, ctx) {var _uniq_var_58 = map(expr[0], (function () {var _uniq_var_289 = function (i) {var _uniq_var_57 = generateProperty(i, env, ctx0);
_uniq_var_57;
return _uniq_var_57;
};_uniq_var_289.__lix_func__ = true;return _uniq_var_289;})());
_uniq_var_58;
var _uniq_var_59 = (function () {var _uniq_var_292 = function (_uniq_var_290, _uniq_var_291) {
if (typeof _uniq_var_290.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_290.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_290.join.apply(_uniq_var_290, arguments);
} else if (_uniq_var_290.join !== undefined) {
if (_uniq_var_291 === undefined) {
return _uniq_var_290.join;
}
_uniq_var_290.join = _uniq_var_291;
}return _uniq_var_290;
};_uniq_var_292.__lix_func__ = true;return _uniq_var_292;})()(_uniq_var_58, ",\n");
_uniq_var_59;
var objectBody = _uniq_var_59;
objectBody;
objectBody;
var _uniq_var_60 = join(["{\n", objectBody, "\n}"]);
_uniq_var_60;
var _uniq_var_61 = ctx(_uniq_var_60);
_uniq_var_61;
return _uniq_var_61;
};_uniq_var_293.__lix_func__ = true;return _uniq_var_293;})();
generateObjectLiteral;
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_294 = function (name) {return name;
};_uniq_var_294.__lix_func__ = true;return _uniq_var_294;})();
transformVarName;
transformVarName;
var getVarName = (function () {var _uniq_var_295 = function (expr) {var _uniq_var_62 = true;
_uniq_var_62;
var _uniq_var_63 = null;
_uniq_var_63;
var _uniq_var_65 = __eq__(expr[1], '{atomic}');
_uniq_var_65;
if ((_uniq_var_62 && _uniq_var_65)) {
(_uniq_var_62 = false);
var _uniq_var_64 = generateAtomic(expr, {

}, ctx0);
_uniq_var_64;
(_uniq_var_63 = _uniq_var_64);

};
var _uniq_var_67 = __eq__(expr[1], '{.}');
_uniq_var_67;
if ((_uniq_var_62 && _uniq_var_67)) {
(_uniq_var_62 = false);
var _uniq_var_66 = getVarName(expr[0]);
_uniq_var_66;
(_uniq_var_63 = _uniq_var_66);

};
return _uniq_var_63;
};_uniq_var_295.__lix_func__ = true;return _uniq_var_295;})();
getVarName;
getVarName;
var generateField = (function () {var _uniq_var_296 = function (expr, env, ctx) {var _uniq_var_68 = true;
_uniq_var_68;
var _uniq_var_69 = null;
_uniq_var_69;
var _uniq_var_72 = __eq__(expr[1], '{atomic}');
_uniq_var_72;
if ((_uniq_var_68 && _uniq_var_72)) {
(_uniq_var_68 = false);
var _uniq_var_70 = generateAtomic(expr, env, ctx0);
_uniq_var_70;
var _uniq_var_71 = __add__('.', _uniq_var_70);
_uniq_var_71;
(_uniq_var_69 = _uniq_var_71);

};
var _uniq_var_75 = __eq__(expr[1], '{index}');
_uniq_var_75;
if ((_uniq_var_68 && _uniq_var_75)) {
(_uniq_var_68 = false);
var _uniq_var_73 = generate(expr[0], env, ctx0);
_uniq_var_73;
var _uniq_var_74 = join(['[', _uniq_var_73, ']']);
_uniq_var_74;
(_uniq_var_69 = _uniq_var_74);

};
return _uniq_var_69;
};_uniq_var_296.__lix_func__ = true;return _uniq_var_296;})();
generateField;
generateField;
var generateFieldAccess = (function () {var _uniq_var_297 = function (expr, env, ctx) {var _uniq_var_76 = true;
_uniq_var_76;
var _uniq_var_77 = null;
_uniq_var_77;
var _uniq_var_80 = __eq__(expr[1], '{atomic}');
_uniq_var_80;
if ((_uniq_var_76 && _uniq_var_80)) {
(_uniq_var_76 = false);
var _uniq_var_78 = generateAtomic(expr, env, ctx0);
_uniq_var_78;
var _uniq_var_79 = ctx(_uniq_var_78);
_uniq_var_79;
(_uniq_var_77 = _uniq_var_79);

};
var _uniq_var_85 = __eq__(expr[1], '{.}');
_uniq_var_85;
if ((_uniq_var_76 && _uniq_var_85)) {
(_uniq_var_76 = false);
var _uniq_var_81 = generateFieldAccess(expr[0], env, ctx0);
_uniq_var_81;
var obj = _uniq_var_81;
obj;
obj;
var _uniq_var_82 = generateField(expr[2], env, ctx0);
_uniq_var_82;
var field = _uniq_var_82;
field;
field;
var _uniq_var_83 = __add__(obj, field);
_uniq_var_83;
var _uniq_var_84 = ctx(_uniq_var_83);
_uniq_var_84;
(_uniq_var_77 = _uniq_var_84);

};
return _uniq_var_77;
};_uniq_var_297.__lix_func__ = true;return _uniq_var_297;})();
generateFieldAccess;
generateFieldAccess;
var generateArray = (function () {var _uniq_var_302 = function (expr, env, ctx) {var _uniq_var_87 = map(expr[0], (function () {var _uniq_var_298 = function (i) {var _uniq_var_86 = generate(i, env, ctx0);
_uniq_var_86;
return _uniq_var_86;
};_uniq_var_298.__lix_func__ = true;return _uniq_var_298;})());
_uniq_var_87;
var _uniq_var_88 = (function () {var _uniq_var_301 = function (_uniq_var_299, _uniq_var_300) {
if (typeof _uniq_var_299.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_299.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_299.join.apply(_uniq_var_299, arguments);
} else if (_uniq_var_299.join !== undefined) {
if (_uniq_var_300 === undefined) {
return _uniq_var_299.join;
}
_uniq_var_299.join = _uniq_var_300;
}return _uniq_var_299;
};_uniq_var_301.__lix_func__ = true;return _uniq_var_301;})()(_uniq_var_87, ', ');
_uniq_var_88;
var arrayBody = _uniq_var_88;
arrayBody;
arrayBody;
var _uniq_var_89 = join(['[', arrayBody, ']']);
_uniq_var_89;
var _uniq_var_90 = ctx(_uniq_var_89);
_uniq_var_90;
return _uniq_var_90;
};_uniq_var_302.__lix_func__ = true;return _uniq_var_302;})();
generateArray;
generateArray;
var generateMethod = (function () {var _uniq_var_303 = function (expr, env, ctx) {var _uniq_var_91 = call(getUniqVarName);
_uniq_var_91;
var localVarName = _uniq_var_91;
localVarName;
localVarName;
var _uniq_var_92 = call(getUniqVarName);
_uniq_var_92;
var localValueName = _uniq_var_92;
localValueName;
localValueName;
var _uniq_var_93 = generateField(expr[0], env, ctx0);
_uniq_var_93;
var _uniq_var_94 = __add__(localVarName, _uniq_var_93);
_uniq_var_94;
var method = _uniq_var_94;
method;
method;
var _uniq_var_95 = call(getUniqVarName);
_uniq_var_95;
var tmpVar = _uniq_var_95;
tmpVar;
tmpVar;
var _uniq_var_96 = join(["(function () {", 'var ', tmpVar, ' = function (', localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(", "arguments, (", method, ".__lix_func__ ? 0 : 1), arguments.length);", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return ", method, ';\n', "}\n", method, " = ", localValueName, ";\n", "}", "return ", localVarName, ';\n', '};', tmpVar, '.__lix_func__ = true;', 'return ', tmpVar, ';', '})()']);
_uniq_var_96;
var _uniq_var_97 = ctx(_uniq_var_96);
_uniq_var_97;
return _uniq_var_97;
};_uniq_var_303.__lix_func__ = true;return _uniq_var_303;})();
generateMethod;
generateMethod;
var generateWhile = (function () {var _uniq_var_304 = function (expr, env, ctx) {var _uniq_var_98 = generate(expr[0], env, ctx0);
_uniq_var_98;
var _uniq_var_99 = generate(expr[2], env, ctx0);
_uniq_var_99;
var _uniq_var_100 = ctx('null');
_uniq_var_100;
var _uniq_var_101 = join(['while (', _uniq_var_98, ') {\n', _uniq_var_99, "}\n", _uniq_var_100]);
_uniq_var_101;
return _uniq_var_101;
};_uniq_var_304.__lix_func__ = true;return _uniq_var_304;})();
generateWhile;
generateWhile;
var generateBreak = (function () {var _uniq_var_305 = function (expr, env, ctx) {return 'break';
};_uniq_var_305.__lix_func__ = true;return _uniq_var_305;})();
generateBreak;
generateBreak;
var generateEmpty = (function () {var _uniq_var_306 = function (expr, env, ctx) {var _uniq_var_102 = ctx(0);
_uniq_var_102;
return _uniq_var_102;
};_uniq_var_306.__lix_func__ = true;return _uniq_var_306;})();
generateEmpty;
generateEmpty;
var generateDef = (function () {var _uniq_var_307 = function (expr, env, ctx) {var varname = expr[0][0];
varname;
varname;
var _uniq_var_103 = generate(expr[2], env, ctx0);
_uniq_var_103;
var _uniq_var_104 = ctx(varname);
_uniq_var_104;
var _uniq_var_105 = join(['var ', varname, ' = ', _uniq_var_103, ";\n", _uniq_var_104]);
_uniq_var_105;
var ret = _uniq_var_105;
ret;
ret;
(env[varname] = true);
return ret;
};_uniq_var_307.__lix_func__ = true;return _uniq_var_307;})();
generateDef;
generateDef;
var generateAssign = (function () {var _uniq_var_308 = function (expr, env, ctx) {var _uniq_var_106 = getVarName(expr[0]);
_uniq_var_106;
var varname = _uniq_var_106;
varname;
varname;
var _uniq_var_107 = true;
_uniq_var_107;
var _uniq_var_108 = null;
_uniq_var_108;
var _uniq_var_111 = __eq__(env[varname], undefined);
_uniq_var_111;
if ((_uniq_var_107 && _uniq_var_111)) {
(_uniq_var_107 = false);
var _uniq_var_109 = console.log(varname);
_uniq_var_109;
_uniq_var_109;
var _uniq_var_110 = console.log("var undefined");
_uniq_var_110;
(_uniq_var_108 = _uniq_var_110);

};
_uniq_var_108;
var _uniq_var_112 = generate(expr[0], env, ctx0);
_uniq_var_112;
var _uniq_var_113 = generate(expr[2], env, ctx0);
_uniq_var_113;
var _uniq_var_114 = join(["(", _uniq_var_112, " = ", _uniq_var_113, ")"]);
_uniq_var_114;
var _uniq_var_115 = ctx(_uniq_var_114);
_uniq_var_115;
return _uniq_var_115;
};_uniq_var_308.__lix_func__ = true;return _uniq_var_308;})();
generateAssign;
generateAssign;
var generateFunc = (function () {var _uniq_var_310 = function (expr, env, ctx) {var _uniq_var_116 = env_new(env);
_uniq_var_116;
var funcEnv = _uniq_var_116;
funcEnv;
funcEnv;
var _uniq_var_117 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_117;
var args = _uniq_var_117;
args;
args;
var _uniq_var_119 = generate(expr[2], funcEnv, (function () {var _uniq_var_309 = function (v) {var _uniq_var_118 = __add__('return ', v);
_uniq_var_118;
return _uniq_var_118;
};_uniq_var_309.__lix_func__ = true;return _uniq_var_309;})());
_uniq_var_119;
var body = _uniq_var_119;
body;
body;
var _uniq_var_120 = call(getUniqVarName);
_uniq_var_120;
var tmpVar = _uniq_var_120;
tmpVar;
tmpVar;
var _uniq_var_121 = join(['(function () {', 'var ', tmpVar, ' = function (', args, ') {', body, '};', tmpVar, '.__lix_func__ = true;', 'return ', tmpVar, ';', '})()']);
_uniq_var_121;
var _uniq_var_122 = ctx(_uniq_var_121);
_uniq_var_122;
return _uniq_var_122;
};_uniq_var_310.__lix_func__ = true;return _uniq_var_310;})();
generateFunc;
generateFunc;
var generateExpr = (function () {var _uniq_var_312 = function (expr, env, ctx) {var _uniq_var_123 = generate(expr[1], env, ctx0);
_uniq_var_123;
var func = _uniq_var_123;
func;
func;
var _uniq_var_124 = generate(expr[0], env, ctx0);
_uniq_var_124;
var args = _uniq_var_124;
args;
args;
var _uniq_var_130 = foreach(expr, (function () {var _uniq_var_311 = function (item, index) {var _uniq_var_125 = true;
_uniq_var_125;
var _uniq_var_126 = null;
_uniq_var_126;
var _uniq_var_129 = __gt__(index, 1);
_uniq_var_129;
if ((_uniq_var_125 && _uniq_var_129)) {
(_uniq_var_125 = false);
var _uniq_var_127 = generate(item, env, ctx0);
_uniq_var_127;
var _uniq_var_128 = join([args, ', ', _uniq_var_127]);
_uniq_var_128;
(_uniq_var_126 = (args = _uniq_var_128));

};
return _uniq_var_126;
};_uniq_var_311.__lix_func__ = true;return _uniq_var_311;})());
_uniq_var_130;
_uniq_var_130;
var _uniq_var_131 = join([func, '(', args, ')']);
_uniq_var_131;
var _uniq_var_132 = ctx(_uniq_var_131);
_uniq_var_132;
return _uniq_var_132;
};_uniq_var_312.__lix_func__ = true;return _uniq_var_312;})();
generateExpr;
generateExpr;
var generateStart = (function () {var _uniq_var_313 = function (expr, env, ctx) {var _uniq_var_133 = generate(expr[0], env, ctx);
_uniq_var_133;
return _uniq_var_133;
};_uniq_var_313.__lix_func__ = true;return _uniq_var_313;})();
generateStart;
generateStart;
var generateMono = (function () {var _uniq_var_314 = function (expr, env, ctx) {var _uniq_var_134 = generate(expr[0], env, ctx);
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_314.__lix_func__ = true;return _uniq_var_314;})();
generateMono;
generateMono;
var generatePathItem = (function () {var _uniq_var_315 = function (expr, env, ctx) {var _uniq_var_135 = join(['"', expr[0], '"']);
_uniq_var_135;
var _uniq_var_136 = ctx(_uniq_var_135);
_uniq_var_136;
return _uniq_var_136;
};_uniq_var_315.__lix_func__ = true;return _uniq_var_315;})();
generatePathItem;
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_316 = function (expr, env, ctx) {var _uniq_var_137 = generate(expr[0], env, ctx0);
_uniq_var_137;
var _uniq_var_138 = join(['("', expr[2], '" + ', _uniq_var_137, ')']);
_uniq_var_138;
var _uniq_var_139 = ctx(_uniq_var_138);
_uniq_var_139;
return _uniq_var_139;
};_uniq_var_316.__lix_func__ = true;return _uniq_var_316;})();
generatePathArgItem;
generatePathArgItem;
var generatePath = (function () {var _uniq_var_321 = function (expr, env, ctx) {var _uniq_var_141 = map(expr[0], (function () {var _uniq_var_317 = function (i) {var _uniq_var_140 = generate(i, env, ctx0);
_uniq_var_140;
return _uniq_var_140;
};_uniq_var_317.__lix_func__ = true;return _uniq_var_317;})());
_uniq_var_141;
var _uniq_var_142 = (function () {var _uniq_var_320 = function (_uniq_var_318, _uniq_var_319) {
if (typeof _uniq_var_318.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_318.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_318.join.apply(_uniq_var_318, arguments);
} else if (_uniq_var_318.join !== undefined) {
if (_uniq_var_319 === undefined) {
return _uniq_var_318.join;
}
_uniq_var_318.join = _uniq_var_319;
}return _uniq_var_318;
};_uniq_var_320.__lix_func__ = true;return _uniq_var_320;})()(_uniq_var_141, ',');
_uniq_var_142;
var path = _uniq_var_142;
path;
path;
var _uniq_var_143 = join(['[', path, '].join("/")']);
_uniq_var_143;
var _uniq_var_144 = ctx(_uniq_var_143);
_uniq_var_144;
return _uniq_var_144;
};_uniq_var_321.__lix_func__ = true;return _uniq_var_321;})();
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
var generateOp = (function () {var _uniq_var_322 = function (hint) {var _uniq_var_145 = true;
_uniq_var_145;
var _uniq_var_146 = null;
_uniq_var_146;
if ((_uniq_var_145 && generateOpTable[hint])) {
(_uniq_var_145 = false);
(_uniq_var_146 = generateOpTable[hint]);

};
if (_uniq_var_145) {
(_uniq_var_146 = generateExpr);

};
return _uniq_var_146;
};_uniq_var_322.__lix_func__ = true;return _uniq_var_322;})();
generateOp;
generateOp;
var generate = (function () {var _uniq_var_323 = function (expr, env, ctx) {var _uniq_var_147 = generateOp(expr[1]);
_uniq_var_147;
var _uniq_var_148 = _uniq_var_147(expr, env, ctx);
_uniq_var_148;
return _uniq_var_148;
};_uniq_var_323.__lix_func__ = true;return _uniq_var_323;})();
generate;
generate;
var env0 = {
exports: true,
require: true,
print: "function print(x) {\n return console.log(x); \n}",
print: "function print(x) {\n return console.log(x); \n}",
not: "function not(x) {\n return !x;\n}",
_instance_: "function _instance_(x) {\n return new x(); \n}",
__add__: "function __add__(x, y) {\n return x + y;\n}",
__sub__: "function __sub__(x, y) {\n return x - y;\n}",
__mul__: "function __mul__(x, y) {\n return x * y;\n}",
__div__: "function __div__(x, y) {\n return x / y;\n}",
__mod__: "function __mod__(x, y) {\n return x % y;\n}",
__gt__: "function __gt__(x, y) {\n return x > y;\n}",
__ge__: "function __ge__(x, y) {\n return x >= y;\n}",
__eq__: "function __eq__(x, y) {\n return x == y;\n}",
__ne__: "function __ne__(x, y) {\n return x != y;\n}",
__le__: "function __le__(x, y) {\n return x <= y;\n}",
__lt__: "function __lt__(x, y) {\n return x < y;\n}",
AND: "function AND(x, y) {\n return x & y;\n}",
OR: "function AND(x, y) {\n return x | y;\n}",
XOR: "function AND(x, y) {\n return x ^ y;\n}",
isFunction: "function isFunction(x) {\n return typeof x === 'function';\n}",
isArray: "function isArray(x) {\n return x instanceof Array;\n}",
foreach: "function foreach(arr, cb) {\n for (var i in arr) { cb(arr[i], i); };\n}",
call: "function call(fn) {\n var collect = []; for (var i in arguments) { collect.push(arguments[i]); }; collect.shift(); return fn.apply(fn, collect); \n}",
apply: "function apply(fn) {\n return fn.apply(fn, arguments[1]); \n}"
};
env0;
env0;
var env_new = (function () {var _uniq_var_325 = function (env) {var _uniq_var_149 = env;
_uniq_var_149;
if (not(_uniq_var_149)) {
(_uniq_var_149 = env0);

};
(env = _uniq_var_149);
var Env = (function () {var _uniq_var_324 = function () {;
};_uniq_var_324.__lix_func__ = true;return _uniq_var_324;})();
Env;
Env;
(Env.prototype = env);
var _uniq_var_150 = _instance_(Env);
_uniq_var_150;
return _uniq_var_150;
};_uniq_var_325.__lix_func__ = true;return _uniq_var_325;})();
env_new;
env_new;
var flattenExpr = (function () {var _uniq_var_327 = function (expr, define) {var _uniq_var_152 = map(expr, (function () {var _uniq_var_326 = function (item) {var _uniq_var_151 = flatten(item, define);
_uniq_var_151;
return _uniq_var_151;
};_uniq_var_326.__lix_func__ = true;return _uniq_var_326;})());
_uniq_var_152;
var _uniq_var_153 = define(_uniq_var_152);
_uniq_var_153;
return _uniq_var_153;
};_uniq_var_327.__lix_func__ = true;return _uniq_var_327;})();
flattenExpr;
flattenExpr;
var flattenBreak = (function () {var _uniq_var_328 = function (expr, define) {return expr;
};_uniq_var_328.__lix_func__ = true;return _uniq_var_328;})();
flattenBreak;
flattenBreak;
var flattenWhile = (function () {var _uniq_var_333 = function (expr, define) {var _uniq_var_154 = call(statementFlattenGenerator);
_uniq_var_154;
var whileDefine = _uniq_var_154;
whileDefine;
whileDefine;
var _uniq_var_155 = flatten(expr[0], whileDefine);
_uniq_var_155;
(expr[0] = _uniq_var_155);
var _uniq_var_156 = flatten(expr[2], define0);
_uniq_var_156;
(expr[2] = _uniq_var_156);
var _uniq_var_157 = call(whileDefine);
_uniq_var_157;
var _uniq_var_158 = (function () {var _uniq_var_331 = function (_uniq_var_329, _uniq_var_330) {
if (typeof _uniq_var_329.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_329.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_329.concat.apply(_uniq_var_329, arguments);
} else if (_uniq_var_329.concat !== undefined) {
if (_uniq_var_330 === undefined) {
return _uniq_var_329.concat;
}
_uniq_var_329.concat = _uniq_var_330;
}return _uniq_var_329;
};_uniq_var_331.__lix_func__ = true;return _uniq_var_331;})()(expr[2][0], _uniq_var_157);
_uniq_var_158;
(expr[2][0] = _uniq_var_158);
var _uniq_var_159 = call(whileDefine);
_uniq_var_159;
var _uniq_var_161 = foreach(_uniq_var_159, (function () {var _uniq_var_332 = function (i) {var _uniq_var_160 = define(i, true);
_uniq_var_160;
return _uniq_var_160;
};_uniq_var_332.__lix_func__ = true;return _uniq_var_332;})());
_uniq_var_161;
_uniq_var_161;
return expr;
};_uniq_var_333.__lix_func__ = true;return _uniq_var_333;})();
flattenWhile;
flattenWhile;
var flattenOr = (function () {var _uniq_var_338 = function (expr, define) {var _uniq_var_162 = flatten(expr[0], define);
_uniq_var_162;
var ret = _uniq_var_162;
ret;
ret;
var _uniq_var_163 = true;
_uniq_var_163;
var _uniq_var_164 = null;
_uniq_var_164;
var _uniq_var_166 = __ne__(ret[2], 'var');
_uniq_var_166;
if ((_uniq_var_163 && _uniq_var_166)) {
(_uniq_var_163 = false);
var _uniq_var_165 = define(ret);
_uniq_var_165;
var ret = _uniq_var_165;
ret;
(_uniq_var_164 = ret);

};
_uniq_var_164;
var getAndOpSeq = (function () {var _uniq_var_337 = function () {var _uniq_var_167 = call(statementFlattenGenerator);
_uniq_var_167;
var AndDefine = _uniq_var_167;
AndDefine;
AndDefine;
var _uniq_var_168 = flatten(expr[2], AndDefine);
_uniq_var_168;
var seqRet = _uniq_var_168;
seqRet;
seqRet;
var _uniq_var_169 = call(AndDefine);
_uniq_var_169;
var seq = _uniq_var_169;
seq;
seq;
var _uniq_var_170 = (function () {var _uniq_var_336 = function (_uniq_var_334, _uniq_var_335) {
if (typeof _uniq_var_334.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_334.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_334.push.apply(_uniq_var_334, arguments);
} else if (_uniq_var_334.push !== undefined) {
if (_uniq_var_335 === undefined) {
return _uniq_var_334.push;
}
_uniq_var_334.push = _uniq_var_335;
}return _uniq_var_334;
};_uniq_var_336.__lix_func__ = true;return _uniq_var_336;})()(seq, [ret, '=', seqRet]);
_uniq_var_170;
_uniq_var_170;
return [seq, '{seq}'];
};_uniq_var_337.__lix_func__ = true;return _uniq_var_337;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_171 = call(getAndOpSeq);
_uniq_var_171;
var _uniq_var_172 = define([[[[ret, ['not', '{atomic}', 'var']], _uniq_var_171]], 'if'], true);
_uniq_var_172;
_uniq_var_172;
return ret;
};_uniq_var_338.__lix_func__ = true;return _uniq_var_338;})();
flattenOr;
flattenOr;
var flattenAnd = (function () {var _uniq_var_343 = function (expr, define) {var _uniq_var_173 = flatten(expr[0], define);
_uniq_var_173;
var ret = _uniq_var_173;
ret;
ret;
var _uniq_var_174 = true;
_uniq_var_174;
var _uniq_var_175 = null;
_uniq_var_175;
var _uniq_var_177 = __ne__(ret[2], 'var');
_uniq_var_177;
if ((_uniq_var_174 && _uniq_var_177)) {
(_uniq_var_174 = false);
var _uniq_var_176 = define(ret);
_uniq_var_176;
var ret = _uniq_var_176;
ret;
(_uniq_var_175 = ret);

};
_uniq_var_175;
var getAndOpSeq = (function () {var _uniq_var_342 = function () {var _uniq_var_178 = call(statementFlattenGenerator);
_uniq_var_178;
var AndDefine = _uniq_var_178;
AndDefine;
AndDefine;
var _uniq_var_179 = flatten(expr[2], AndDefine);
_uniq_var_179;
var seqRet = _uniq_var_179;
seqRet;
seqRet;
var _uniq_var_180 = call(AndDefine);
_uniq_var_180;
var seq = _uniq_var_180;
seq;
seq;
var _uniq_var_181 = (function () {var _uniq_var_341 = function (_uniq_var_339, _uniq_var_340) {
if (typeof _uniq_var_339.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_339.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_339.push.apply(_uniq_var_339, arguments);
} else if (_uniq_var_339.push !== undefined) {
if (_uniq_var_340 === undefined) {
return _uniq_var_339.push;
}
_uniq_var_339.push = _uniq_var_340;
}return _uniq_var_339;
};_uniq_var_341.__lix_func__ = true;return _uniq_var_341;})()(seq, [ret, '=', seqRet]);
_uniq_var_181;
_uniq_var_181;
return [seq, '{seq}'];
};_uniq_var_342.__lix_func__ = true;return _uniq_var_342;})();
getAndOpSeq;
getAndOpSeq;
var _uniq_var_182 = call(getAndOpSeq);
_uniq_var_182;
var _uniq_var_183 = define([[[ret, _uniq_var_182]], 'if'], true);
_uniq_var_183;
_uniq_var_183;
return ret;
};_uniq_var_343.__lix_func__ = true;return _uniq_var_343;})();
flattenAnd;
flattenAnd;
var _flattenIf = (function () {var _uniq_var_348 = function (expr, define, tmpVar, ctx) {var _uniq_var_196 = foreach(expr[0], (function () {var _uniq_var_347 = function (i) {var _uniq_var_184 = true;
_uniq_var_184;
var _uniq_var_185 = null;
_uniq_var_185;
var _uniq_var_188 = __eq__(i[1], 'else');
_uniq_var_188;
if ((_uniq_var_184 && _uniq_var_188)) {
(_uniq_var_184 = false);
var _uniq_var_186 = flatten(i[0], define0, ctx);
_uniq_var_186;
var elseSeq = _uniq_var_186;
elseSeq;
elseSeq;
var _uniq_var_187 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_187;
(_uniq_var_185 = _uniq_var_187);

};
var _uniq_var_191 = __eq__(i[1], 'if');
_uniq_var_191;
if ((_uniq_var_184 && _uniq_var_191)) {
(_uniq_var_184 = false);
var _uniq_var_189 = _flattenIf(i, define, tmpVar, ctx);
_uniq_var_189;
var _uniq_var_190 = define(_uniq_var_189);
_uniq_var_190;
(_uniq_var_185 = _uniq_var_190);

};
if (_uniq_var_184) {
var _uniq_var_192 = flatten(i[1], define0, ctx);
_uniq_var_192;
var ifSeq = _uniq_var_192;
ifSeq;
ifSeq;
var _uniq_var_193 = (function () {var _uniq_var_346 = function (_uniq_var_344, _uniq_var_345) {
if (typeof _uniq_var_344.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_344.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_344.unshift.apply(_uniq_var_344, arguments);
} else if (_uniq_var_344.unshift !== undefined) {
if (_uniq_var_345 === undefined) {
return _uniq_var_344.unshift;
}
_uniq_var_344.unshift = _uniq_var_345;
}return _uniq_var_344;
};_uniq_var_346.__lix_func__ = true;return _uniq_var_346;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_193;
_uniq_var_193;
var _uniq_var_194 = flatten(i[0], define);
_uniq_var_194;
var cond = _uniq_var_194;
cond;
cond;
var cond = [tmpVar, 'and', cond];
cond;
cond;
var _uniq_var_195 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_195;
(_uniq_var_185 = _uniq_var_195);

};
return _uniq_var_185;
};_uniq_var_347.__lix_func__ = true;return _uniq_var_347;})());
_uniq_var_196;
return _uniq_var_196;
};_uniq_var_348.__lix_func__ = true;return _uniq_var_348;})();
_flattenIf;
_flattenIf;
var flattenIf = (function () {var _uniq_var_350 = function (expr, define) {var _uniq_var_197 = define(['true', '{atomic}']);
_uniq_var_197;
var tmpVar = _uniq_var_197;
tmpVar;
tmpVar;
var _uniq_var_198 = define(['null', '{atomic}']);
_uniq_var_198;
var retVar = _uniq_var_198;
retVar;
retVar;
var ctx = (function () {var _uniq_var_349 = function (i) {return [retVar, '=', i];
};_uniq_var_349.__lix_func__ = true;return _uniq_var_349;})();
ctx;
ctx;
var _uniq_var_199 = _flattenIf(expr, define, tmpVar, ctx);
_uniq_var_199;
_uniq_var_199;
return retVar;
};_uniq_var_350.__lix_func__ = true;return _uniq_var_350;})();
flattenIf;
flattenIf;
var flattenAssign = (function () {var _uniq_var_351 = function (expr, define) {var _uniq_var_200 = flatten(expr[2], define);
_uniq_var_200;
(expr[2] = _uniq_var_200);
return expr;
};_uniq_var_351.__lix_func__ = true;return _uniq_var_351;})();
flattenAssign;
flattenAssign;
var flattenDef = (function () {var _uniq_var_352 = function (expr, define) {var _uniq_var_201 = flatten(expr[2], define);
_uniq_var_201;
(expr[2] = _uniq_var_201);
var _uniq_var_202 = define(expr, true);
_uniq_var_202;
_uniq_var_202;
return expr[0];
};_uniq_var_352.__lix_func__ = true;return _uniq_var_352;})();
flattenDef;
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_353 = function (expr, define) {var _uniq_var_203 = flatten(expr[0], define);
_uniq_var_203;
(expr[0] = _uniq_var_203);
return expr;
};_uniq_var_353.__lix_func__ = true;return _uniq_var_353;})();
flattenPathArgItem;
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_354 = function (expr, define) {return expr;
};_uniq_var_354.__lix_func__ = true;return _uniq_var_354;})();
flattenPathItem;
flattenPathItem;
var flattenPath = (function () {var _uniq_var_356 = function (expr, define) {var _uniq_var_205 = map(expr[0], (function () {var _uniq_var_355 = function (i) {var _uniq_var_204 = flatten(i, define);
_uniq_var_204;
return _uniq_var_204;
};_uniq_var_355.__lix_func__ = true;return _uniq_var_355;})());
_uniq_var_205;
(expr[0] = _uniq_var_205);
return expr;
};_uniq_var_356.__lix_func__ = true;return _uniq_var_356;})();
flattenPath;
flattenPath;
var flattenEmpty = (function () {var _uniq_var_357 = function (expr, define) {return expr;
};_uniq_var_357.__lix_func__ = true;return _uniq_var_357;})();
flattenEmpty;
flattenEmpty;
var flattenField = (function () {var _uniq_var_358 = function (expr, define) {var _uniq_var_206 = true;
_uniq_var_206;
var _uniq_var_207 = null;
_uniq_var_207;
var _uniq_var_209 = __eq__(expr[1], '{index}');
_uniq_var_209;
if ((_uniq_var_206 && _uniq_var_209)) {
(_uniq_var_206 = false);
var _uniq_var_208 = flatten(expr[0], define);
_uniq_var_208;
(_uniq_var_207 = (expr[0] = _uniq_var_208));

};
_uniq_var_207;
return expr;
};_uniq_var_358.__lix_func__ = true;return _uniq_var_358;})();
flattenField;
flattenField;
var flattenMethod = (function () {var _uniq_var_359 = function (expr, define) {var _uniq_var_210 = flattenField(expr[0], define);
_uniq_var_210;
(expr[0] = _uniq_var_210);
return expr;
};_uniq_var_359.__lix_func__ = true;return _uniq_var_359;})();
flattenMethod;
flattenMethod;
var flattenProperty = (function () {var _uniq_var_360 = function (expr, define) {var _uniq_var_211 = flatten(expr[2], define);
_uniq_var_211;
(expr[2] = _uniq_var_211);
return expr;
};_uniq_var_360.__lix_func__ = true;return _uniq_var_360;})();
flattenProperty;
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_362 = function (expr, define) {var _uniq_var_213 = map(expr[0], (function () {var _uniq_var_361 = function (i) {var _uniq_var_212 = flattenProperty(i, define);
_uniq_var_212;
return _uniq_var_212;
};_uniq_var_361.__lix_func__ = true;return _uniq_var_361;})());
_uniq_var_213;
(expr[0] = _uniq_var_213);
return expr;
};_uniq_var_362.__lix_func__ = true;return _uniq_var_362;})();
flattenObjectLiteral;
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_364 = function (expr, define) {var _uniq_var_215 = map(expr[0], (function () {var _uniq_var_363 = function (i) {var _uniq_var_214 = flatten(i, define);
_uniq_var_214;
return _uniq_var_214;
};_uniq_var_363.__lix_func__ = true;return _uniq_var_363;})());
_uniq_var_215;
(expr[0] = _uniq_var_215);
return expr;
};_uniq_var_364.__lix_func__ = true;return _uniq_var_364;})();
flattenArray;
flattenArray;
var flattenFunc = (function () {var _uniq_var_365 = function (expr, define) {var _uniq_var_216 = flatten(expr[2], define);
_uniq_var_216;
(expr[2] = _uniq_var_216);
return expr;
};_uniq_var_365.__lix_func__ = true;return _uniq_var_365;})();
flattenFunc;
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_366 = function (expr, define) {var _uniq_var_217 = true;
_uniq_var_217;
var _uniq_var_218 = null;
_uniq_var_218;
var _uniq_var_221 = __eq__(expr[1], '{.}');
_uniq_var_221;
if ((_uniq_var_217 && _uniq_var_221)) {
(_uniq_var_217 = false);
var _uniq_var_219 = flattenFieldAccess(expr[0], define);
_uniq_var_219;
(expr[0] = _uniq_var_219);
var _uniq_var_220 = flattenField(expr[2], define);
_uniq_var_220;
(_uniq_var_218 = (expr[2] = _uniq_var_220));

};
_uniq_var_218;
return expr;
};_uniq_var_366.__lix_func__ = true;return _uniq_var_366;})();
flattenFieldAccess;
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_367 = function (expr, define) {return expr;
};_uniq_var_367.__lix_func__ = true;return _uniq_var_367;})();
flattenAtomic;
flattenAtomic;
var flattenMono = (function () {var _uniq_var_368 = function (expr, define) {var _uniq_var_222 = flatten(expr[0], define);
_uniq_var_222;
return _uniq_var_222;
};_uniq_var_368.__lix_func__ = true;return _uniq_var_368;})();
flattenMono;
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_376 = function () {var data = [];
data;
data;
return (function () {var _uniq_var_375 = function (statement, onlyPush) {var _uniq_var_223 = true;
_uniq_var_223;
var _uniq_var_224 = null;
_uniq_var_224;
var _uniq_var_225 = __eq__(statement, undefined);
_uniq_var_225;
if ((_uniq_var_223 && _uniq_var_225)) {
(_uniq_var_223 = false);
(_uniq_var_224 = data);

};
if ((_uniq_var_223 && onlyPush)) {
(_uniq_var_223 = false);
var _uniq_var_226 = (function () {var _uniq_var_371 = function (_uniq_var_369, _uniq_var_370) {
if (typeof _uniq_var_369.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_369.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_369.push.apply(_uniq_var_369, arguments);
} else if (_uniq_var_369.push !== undefined) {
if (_uniq_var_370 === undefined) {
return _uniq_var_369.push;
}
_uniq_var_369.push = _uniq_var_370;
}return _uniq_var_369;
};_uniq_var_371.__lix_func__ = true;return _uniq_var_371;})()(data, statement);
_uniq_var_226;
(_uniq_var_224 = _uniq_var_226);

};
if (_uniq_var_223) {
var _uniq_var_227 = call(getUniqVarName);
_uniq_var_227;
var varName = _uniq_var_227;
varName;
varName;
var lixVar = [varName, '{atomic}', '{var}'];
lixVar;
lixVar;
var _uniq_var_228 = (function () {var _uniq_var_374 = function (_uniq_var_372, _uniq_var_373) {
if (typeof _uniq_var_372.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_372.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_372.push.apply(_uniq_var_372, arguments);
} else if (_uniq_var_372.push !== undefined) {
if (_uniq_var_373 === undefined) {
return _uniq_var_372.push;
}
_uniq_var_372.push = _uniq_var_373;
}return _uniq_var_372;
};_uniq_var_374.__lix_func__ = true;return _uniq_var_374;})()(data, [lixVar, ':=', statement]);
_uniq_var_228;
_uniq_var_228;
(_uniq_var_224 = lixVar);

};
return _uniq_var_224;
};_uniq_var_375.__lix_func__ = true;return _uniq_var_375;})();
};_uniq_var_376.__lix_func__ = true;return _uniq_var_376;})();
statementFlattenGenerator;
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_385 = function (expr, define, seqCtx) {var ret = [];
ret;
ret;
var ctx = (function () {var _uniq_var_377 = function (stmt, index) {var ret = stmt;
ret;
ret;
var _uniq_var_229 = true;
_uniq_var_229;
var _uniq_var_230 = null;
_uniq_var_230;
var _uniq_var_232 = seqCtx;
_uniq_var_232;
if (_uniq_var_232) {
var _uniq_var_233 = parseInt(index);
_uniq_var_233;
var _uniq_var_234 = __sub__(expr[0].length, 1);
_uniq_var_234;
var _uniq_var_235 = __eq__(_uniq_var_233, _uniq_var_234);
_uniq_var_235;
(_uniq_var_232 = _uniq_var_235);

};
if ((_uniq_var_229 && _uniq_var_232)) {
(_uniq_var_229 = false);
var _uniq_var_231 = seqCtx(stmt);
_uniq_var_231;
var ret = _uniq_var_231;
ret;
(_uniq_var_230 = ret);

};
_uniq_var_230;
return ret;
};_uniq_var_377.__lix_func__ = true;return _uniq_var_377;})();
ctx;
ctx;
var _uniq_var_242 = foreach(expr[0], (function () {var _uniq_var_384 = function (item, index) {var _uniq_var_236 = call(statementFlattenGenerator);
_uniq_var_236;
var exprDefine = _uniq_var_236;
exprDefine;
exprDefine;
var _uniq_var_237 = flatten(item, exprDefine);
_uniq_var_237;
var itemRet = _uniq_var_237;
itemRet;
itemRet;
var _uniq_var_238 = call(exprDefine);
_uniq_var_238;
var _uniq_var_239 = (function () {var _uniq_var_380 = function (_uniq_var_378, _uniq_var_379) {
if (typeof _uniq_var_378.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_378.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_378.concat.apply(_uniq_var_378, arguments);
} else if (_uniq_var_378.concat !== undefined) {
if (_uniq_var_379 === undefined) {
return _uniq_var_378.concat;
}
_uniq_var_378.concat = _uniq_var_379;
}return _uniq_var_378;
};_uniq_var_380.__lix_func__ = true;return _uniq_var_380;})()(ret, _uniq_var_238);
_uniq_var_239;
(ret = _uniq_var_239);
var _uniq_var_240 = ctx(itemRet, index);
_uniq_var_240;
var _uniq_var_241 = (function () {var _uniq_var_383 = function (_uniq_var_381, _uniq_var_382) {
if (typeof _uniq_var_381.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_381.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_381.push.apply(_uniq_var_381, arguments);
} else if (_uniq_var_381.push !== undefined) {
if (_uniq_var_382 === undefined) {
return _uniq_var_381.push;
}
_uniq_var_381.push = _uniq_var_382;
}return _uniq_var_381;
};_uniq_var_383.__lix_func__ = true;return _uniq_var_383;})()(ret, _uniq_var_240);
_uniq_var_241;
return _uniq_var_241;
};_uniq_var_384.__lix_func__ = true;return _uniq_var_384;})());
_uniq_var_242;
_uniq_var_242;
(expr[0] = ret);
return expr;
};_uniq_var_385.__lix_func__ = true;return _uniq_var_385;})();
flattenSeq;
flattenSeq;
var flattenStart = (function () {var _uniq_var_386 = function (expr, define) {var _uniq_var_243 = flatten(expr[0], define);
_uniq_var_243;
var ret = _uniq_var_243;
ret;
ret;
return [ret, '{start}'];
};_uniq_var_386.__lix_func__ = true;return _uniq_var_386;})();
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
var flattenOp = (function () {var _uniq_var_387 = function (hint) {var _uniq_var_244 = true;
_uniq_var_244;
var _uniq_var_245 = null;
_uniq_var_245;
if ((_uniq_var_244 && flattenOpTable[hint])) {
(_uniq_var_244 = false);
(_uniq_var_245 = flattenOpTable[hint]);

};
if (_uniq_var_244) {
(_uniq_var_245 = flattenExpr);

};
return _uniq_var_245;
};_uniq_var_387.__lix_func__ = true;return _uniq_var_387;})();
flattenOp;
flattenOp;
var flatten = (function () {var _uniq_var_388 = function (expr, define, ctx) {var _uniq_var_246 = flattenOp(expr[1]);
_uniq_var_246;
var _uniq_var_247 = _uniq_var_246(expr, define, ctx);
_uniq_var_247;
return _uniq_var_247;
};_uniq_var_388.__lix_func__ = true;return _uniq_var_388;})();
flatten;
flatten;
var define0 = (function () {var _uniq_var_389 = function (i) {return i;
};_uniq_var_389.__lix_func__ = true;return _uniq_var_389;})();
define0;
define0;
(exports.compile = (function () {var _uniq_var_395 = function (expr) {var _uniq_var_248 = map(env0, (function () {var _uniq_var_390 = function (i) {return i;
};_uniq_var_390.__lix_func__ = true;return _uniq_var_390;})());
_uniq_var_248;
var _uniq_var_249 = (function () {var _uniq_var_393 = function (_uniq_var_391, _uniq_var_392) {
if (typeof _uniq_var_391.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_391.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_391.join.apply(_uniq_var_391, arguments);
} else if (_uniq_var_391.join !== undefined) {
if (_uniq_var_392 === undefined) {
return _uniq_var_391.join;
}
_uniq_var_391.join = _uniq_var_392;
}return _uniq_var_391;
};_uniq_var_393.__lix_func__ = true;return _uniq_var_393;})()(_uniq_var_248, "\n");
_uniq_var_249;
var libs = _uniq_var_249;
libs;
libs;
var _uniq_var_250 = flatten(expr, (function () {var _uniq_var_394 = function (i) {;
};_uniq_var_394.__lix_func__ = true;return _uniq_var_394;})());
_uniq_var_250;
var _uniq_var_251 = call(env_new);
_uniq_var_251;
var _uniq_var_252 = generate(_uniq_var_250, _uniq_var_251, ctx0);
_uniq_var_252;
var code = _uniq_var_252;
code;
code;
var _uniq_var_253 = join([libs, "\n", code]);
_uniq_var_253;
var _uniq_var_254 = console.log(_uniq_var_253);
_uniq_var_254;
return _uniq_var_254;
};_uniq_var_395.__lix_func__ = true;return _uniq_var_395;})());

