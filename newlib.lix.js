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
var join = (function () {var _uniq_var_230 = function (arr) {var _uniq_var_0 = (function () {var _uniq_var_229 = function (_uniq_var_227, _uniq_var_228) {
if (typeof _uniq_var_227.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_227.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_227.join.apply(_uniq_var_227, arguments);
} else if (_uniq_var_227.join !== undefined) {
if (_uniq_var_228 === undefined) {
return _uniq_var_227.join;
}
_uniq_var_227.join = _uniq_var_228;
}return _uniq_var_227;
};_uniq_var_229.__lix_func__ = true;return _uniq_var_229;})()(arr, "");
_uniq_var_0;
return _uniq_var_0;
};_uniq_var_230.__lix_func__ = true;return _uniq_var_230;})();
join;
var map = (function () {var _uniq_var_235 = function (arr, cb) {var ret = [];
ret;
var _uniq_var_3 = foreach(arr, (function () {var _uniq_var_234 = function (i, index) {var _uniq_var_1 = cb(i, index);
_uniq_var_1;
var _uniq_var_2 = (function () {var _uniq_var_233 = function (_uniq_var_231, _uniq_var_232) {
if (typeof _uniq_var_231.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_231.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_231.push.apply(_uniq_var_231, arguments);
} else if (_uniq_var_231.push !== undefined) {
if (_uniq_var_232 === undefined) {
return _uniq_var_231.push;
}
_uniq_var_231.push = _uniq_var_232;
}return _uniq_var_231;
};_uniq_var_233.__lix_func__ = true;return _uniq_var_233;})()(ret, _uniq_var_1);
_uniq_var_2;
return _uniq_var_2;
};_uniq_var_234.__lix_func__ = true;return _uniq_var_234;})());
_uniq_var_3;
_uniq_var_3;
return ret;
};_uniq_var_235.__lix_func__ = true;return _uniq_var_235;})();
map;
var counterGenerator = (function () {var _uniq_var_237 = function () {var counter = 0;
counter;
return (function () {var _uniq_var_236 = function () {var ret = counter;
ret;
var _uniq_var_4 = __add__(counter, 1);
_uniq_var_4;
(counter = _uniq_var_4);
return ret;
};_uniq_var_236.__lix_func__ = true;return _uniq_var_236;})();
};_uniq_var_237.__lix_func__ = true;return _uniq_var_237;})();
counterGenerator;
var _uniq_var_5 = call(counterGenerator);
_uniq_var_5;
var getCount = _uniq_var_5;
getCount;
var getUniqVarName = (function () {var _uniq_var_238 = function () {var _uniq_var_6 = call(getCount);
_uniq_var_6;
var _uniq_var_7 = __add__('_uniq_var_', _uniq_var_6);
_uniq_var_7;
return _uniq_var_7;
};_uniq_var_238.__lix_func__ = true;return _uniq_var_238;})();
getUniqVarName;
var generateFuncArgs = (function () {var _uniq_var_243 = function (args, env, ctx) {var _uniq_var_8 = map(args, (function () {var _uniq_var_239 = function (i) {var varname = i[0];
varname;
(env[varname] = true);
return varname;
};_uniq_var_239.__lix_func__ = true;return _uniq_var_239;})());
_uniq_var_8;
var _uniq_var_9 = (function () {var _uniq_var_242 = function (_uniq_var_240, _uniq_var_241) {
if (typeof _uniq_var_240.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_240.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_240.join.apply(_uniq_var_240, arguments);
} else if (_uniq_var_240.join !== undefined) {
if (_uniq_var_241 === undefined) {
return _uniq_var_240.join;
}
_uniq_var_240.join = _uniq_var_241;
}return _uniq_var_240;
};_uniq_var_242.__lix_func__ = true;return _uniq_var_242;})()(_uniq_var_8, ', ');
_uniq_var_9;
return _uniq_var_9;
};_uniq_var_243.__lix_func__ = true;return _uniq_var_243;})();
generateFuncArgs;
var ctx0 = (function () {var _uniq_var_244 = function (x) {return x;
};_uniq_var_244.__lix_func__ = true;return _uniq_var_244;})();
ctx0;
var generateSeq = (function () {var _uniq_var_250 = function (expr, env, ctx) {var _uniq_var_10 = __sub__(expr[0].length, 1);
_uniq_var_10;
var last = _uniq_var_10;
last;
var seqCtx = (function () {var _uniq_var_245 = function (index) {var _uniq_var_11 = true;
_uniq_var_11;
var _uniq_var_12 = __lt__(index, last);
_uniq_var_12;
if ((_uniq_var_11 && _uniq_var_12)) {
(_uniq_var_11 = false);
ctx0;

};
if (_uniq_var_11) {
ctx;

};
return 0;
};_uniq_var_245.__lix_func__ = true;return _uniq_var_245;})();
seqCtx;
var _uniq_var_15 = map(expr[0], (function () {var _uniq_var_246 = function (item, index) {var _uniq_var_13 = seqCtx(index);
_uniq_var_13;
var _uniq_var_14 = generate(item, env, _uniq_var_13);
_uniq_var_14;
return _uniq_var_14;
};_uniq_var_246.__lix_func__ = true;return _uniq_var_246;})());
_uniq_var_15;
var _uniq_var_16 = (function () {var _uniq_var_249 = function (_uniq_var_247, _uniq_var_248) {
if (typeof _uniq_var_247.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_247.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_247.join.apply(_uniq_var_247, arguments);
} else if (_uniq_var_247.join !== undefined) {
if (_uniq_var_248 === undefined) {
return _uniq_var_247.join;
}
_uniq_var_247.join = _uniq_var_248;
}return _uniq_var_247;
};_uniq_var_249.__lix_func__ = true;return _uniq_var_249;})()(_uniq_var_15, ";\n");
_uniq_var_16;
var _uniq_var_17 = __add__(_uniq_var_16, ";\n");
_uniq_var_17;
return _uniq_var_17;
};_uniq_var_250.__lix_func__ = true;return _uniq_var_250;})();
generateSeq;
var generateOr = (function () {var _uniq_var_251 = function (expr, env, ctx) {var _uniq_var_18 = generate(expr[0], env, ctx0);
_uniq_var_18;
var _uniq_var_19 = generate(expr[2], env, ctx0);
_uniq_var_19;
var _uniq_var_20 = join(['(', _uniq_var_18, " || ", _uniq_var_19, ')']);
_uniq_var_20;
var _uniq_var_21 = ctx(_uniq_var_20);
_uniq_var_21;
return _uniq_var_21;
};_uniq_var_251.__lix_func__ = true;return _uniq_var_251;})();
generateOr;
var generateAnd = (function () {var _uniq_var_252 = function (expr, env, ctx) {var _uniq_var_22 = generate(expr[0], env, ctx0);
_uniq_var_22;
var _uniq_var_23 = generate(expr[2], env, ctx0);
_uniq_var_23;
var _uniq_var_24 = join(['(', _uniq_var_22, " && ", _uniq_var_23, ')']);
_uniq_var_24;
var _uniq_var_25 = ctx(_uniq_var_24);
_uniq_var_25;
return _uniq_var_25;
};_uniq_var_252.__lix_func__ = true;return _uniq_var_252;})();
generateAnd;
var generateIf = (function () {var _uniq_var_257 = function (expr, env, ctx) {var _uniq_var_35 = map(expr[0], (function () {var _uniq_var_253 = function (i) {var _uniq_var_26 = true;
_uniq_var_26;
var _uniq_var_29 = __eq__(i[1], 'else');
_uniq_var_29;
if ((_uniq_var_26 && _uniq_var_29)) {
(_uniq_var_26 = false);
var _uniq_var_27 = generate(i[0], env, ctx);
_uniq_var_27;
var _uniq_var_28 = join(['{\n', _uniq_var_27, '\n}']);
_uniq_var_28;
_uniq_var_28;

};
var _uniq_var_31 = __eq__(i[1], 'if');
_uniq_var_31;
if ((_uniq_var_26 && _uniq_var_31)) {
(_uniq_var_26 = false);
var _uniq_var_30 = generateIf(i, env, ctx);
_uniq_var_30;
_uniq_var_30;

};
if (_uniq_var_26) {
var _uniq_var_32 = generate(i[0], env, ctx0);
_uniq_var_32;
var _uniq_var_33 = generate(i[1], env, ctx);
_uniq_var_33;
var _uniq_var_34 = join(['if (', _uniq_var_32, ') {\n', _uniq_var_33, '\n}']);
_uniq_var_34;
_uniq_var_34;

};
return 0;
};_uniq_var_253.__lix_func__ = true;return _uniq_var_253;})());
_uniq_var_35;
var _uniq_var_36 = (function () {var _uniq_var_256 = function (_uniq_var_254, _uniq_var_255) {
if (typeof _uniq_var_254.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_254.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_254.join.apply(_uniq_var_254, arguments);
} else if (_uniq_var_254.join !== undefined) {
if (_uniq_var_255 === undefined) {
return _uniq_var_254.join;
}
_uniq_var_254.join = _uniq_var_255;
}return _uniq_var_254;
};_uniq_var_256.__lix_func__ = true;return _uniq_var_256;})()(_uniq_var_35, ' else ');
_uniq_var_36;
return _uniq_var_36;
};_uniq_var_257.__lix_func__ = true;return _uniq_var_257;})();
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
var generateAtomic = (function () {var _uniq_var_258 = function (expr, env, ctx) {var ret = expr[0];
ret;
var _uniq_var_37 = true;
_uniq_var_37;
var _uniq_var_40 = __eq__(expr[2], '{var}');
_uniq_var_40;
if ((_uniq_var_37 && _uniq_var_40)) {
(_uniq_var_37 = false);
var _uniq_var_38 = true;
_uniq_var_38;
if ((_uniq_var_38 && operateFuncName[expr[0]])) {
(_uniq_var_38 = false);
(ret = operateFuncName[expr[0]]);

};
if (_uniq_var_38) {
var _uniq_var_39 = transformVarName(expr[0]);
_uniq_var_39;
(ret = _uniq_var_39);

};
0;

};
0;
var _uniq_var_41 = ctx(ret);
_uniq_var_41;
return _uniq_var_41;
};_uniq_var_258.__lix_func__ = true;return _uniq_var_258;})();
generateAtomic;
var generatePropertyName = (function () {var _uniq_var_259 = function (expr, env, ctx) {var _uniq_var_42 = true;
_uniq_var_42;
var _uniq_var_45 = __eq__(expr[1], '{atomic}');
_uniq_var_45;
if ((_uniq_var_42 && _uniq_var_45)) {
(_uniq_var_42 = false);
var _uniq_var_43 = generateAtomic(expr, env, ctx0);
_uniq_var_43;
var _uniq_var_44 = ctx(_uniq_var_43);
_uniq_var_44;
_uniq_var_44;

};
var _uniq_var_48 = __eq__(expr[1], '{index}');
_uniq_var_48;
if ((_uniq_var_42 && _uniq_var_48)) {
(_uniq_var_42 = false);
var _uniq_var_46 = generateAtomic(expr[0], env, ctx0);
_uniq_var_46;
var _uniq_var_47 = ctx(_uniq_var_46);
_uniq_var_47;
_uniq_var_47;

};
return 0;
};_uniq_var_259.__lix_func__ = true;return _uniq_var_259;})();
generatePropertyName;
var generateProperty = (function () {var _uniq_var_260 = function (expr, env, ctx) {var _uniq_var_49 = generatePropertyName(expr[0], env, ctx0);
_uniq_var_49;
var propertyName = _uniq_var_49;
propertyName;
var _uniq_var_50 = generate(expr[2], env, ctx0);
_uniq_var_50;
var propertyValue = _uniq_var_50;
propertyValue;
var _uniq_var_51 = join([propertyName, ": ", propertyValue]);
_uniq_var_51;
return _uniq_var_51;
};_uniq_var_260.__lix_func__ = true;return _uniq_var_260;})();
generateProperty;
var generateObjectLiteral = (function () {var _uniq_var_265 = function (expr, env, ctx) {var _uniq_var_53 = map(expr[0], (function () {var _uniq_var_261 = function (i) {var _uniq_var_52 = generateProperty(i, env, ctx0);
_uniq_var_52;
return _uniq_var_52;
};_uniq_var_261.__lix_func__ = true;return _uniq_var_261;})());
_uniq_var_53;
var _uniq_var_54 = (function () {var _uniq_var_264 = function (_uniq_var_262, _uniq_var_263) {
if (typeof _uniq_var_262.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_262.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_262.join.apply(_uniq_var_262, arguments);
} else if (_uniq_var_262.join !== undefined) {
if (_uniq_var_263 === undefined) {
return _uniq_var_262.join;
}
_uniq_var_262.join = _uniq_var_263;
}return _uniq_var_262;
};_uniq_var_264.__lix_func__ = true;return _uniq_var_264;})()(_uniq_var_53, ",\n");
_uniq_var_54;
var objectBody = _uniq_var_54;
objectBody;
var _uniq_var_55 = join(["{\n", objectBody, "\n}"]);
_uniq_var_55;
var _uniq_var_56 = ctx(_uniq_var_55);
_uniq_var_56;
return _uniq_var_56;
};_uniq_var_265.__lix_func__ = true;return _uniq_var_265;})();
generateObjectLiteral;
var transformVarName = (function () {var _uniq_var_266 = function (name) {return name;
};_uniq_var_266.__lix_func__ = true;return _uniq_var_266;})();
transformVarName;
var getVarName = (function () {var _uniq_var_267 = function (expr) {var _uniq_var_57 = true;
_uniq_var_57;
var _uniq_var_59 = __eq__(expr[1], '{atomic}');
_uniq_var_59;
if ((_uniq_var_57 && _uniq_var_59)) {
(_uniq_var_57 = false);
var _uniq_var_58 = generateAtomic(expr, {

}, ctx0);
_uniq_var_58;
_uniq_var_58;

};
var _uniq_var_61 = __eq__(expr[1], '{.}');
_uniq_var_61;
if ((_uniq_var_57 && _uniq_var_61)) {
(_uniq_var_57 = false);
var _uniq_var_60 = getVarName(expr[0]);
_uniq_var_60;
_uniq_var_60;

};
return 0;
};_uniq_var_267.__lix_func__ = true;return _uniq_var_267;})();
getVarName;
var generateField = (function () {var _uniq_var_268 = function (expr, env, ctx) {var _uniq_var_62 = true;
_uniq_var_62;
var _uniq_var_65 = __eq__(expr[1], '{atomic}');
_uniq_var_65;
if ((_uniq_var_62 && _uniq_var_65)) {
(_uniq_var_62 = false);
var _uniq_var_63 = generateAtomic(expr, env, ctx0);
_uniq_var_63;
var _uniq_var_64 = __add__('.', _uniq_var_63);
_uniq_var_64;
_uniq_var_64;

};
var _uniq_var_68 = __eq__(expr[1], '{index}');
_uniq_var_68;
if ((_uniq_var_62 && _uniq_var_68)) {
(_uniq_var_62 = false);
var _uniq_var_66 = generate(expr[0], env, ctx0);
_uniq_var_66;
var _uniq_var_67 = join(['[', _uniq_var_66, ']']);
_uniq_var_67;
_uniq_var_67;

};
return 0;
};_uniq_var_268.__lix_func__ = true;return _uniq_var_268;})();
generateField;
var generateFieldAccess = (function () {var _uniq_var_269 = function (expr, env, ctx) {var _uniq_var_69 = true;
_uniq_var_69;
var _uniq_var_72 = __eq__(expr[1], '{atomic}');
_uniq_var_72;
if ((_uniq_var_69 && _uniq_var_72)) {
(_uniq_var_69 = false);
var _uniq_var_70 = generateAtomic(expr, env, ctx0);
_uniq_var_70;
var _uniq_var_71 = ctx(_uniq_var_70);
_uniq_var_71;
_uniq_var_71;

};
var _uniq_var_77 = __eq__(expr[1], '{.}');
_uniq_var_77;
if ((_uniq_var_69 && _uniq_var_77)) {
(_uniq_var_69 = false);
var _uniq_var_73 = generateFieldAccess(expr[0], env, ctx0);
_uniq_var_73;
var obj = _uniq_var_73;
obj;
var _uniq_var_74 = generateField(expr[2], env, ctx0);
_uniq_var_74;
var field = _uniq_var_74;
field;
var _uniq_var_75 = __add__(obj, field);
_uniq_var_75;
var _uniq_var_76 = ctx(_uniq_var_75);
_uniq_var_76;
_uniq_var_76;

};
return 0;
};_uniq_var_269.__lix_func__ = true;return _uniq_var_269;})();
generateFieldAccess;
var generateArray = (function () {var _uniq_var_274 = function (expr, env, ctx) {var _uniq_var_79 = map(expr[0], (function () {var _uniq_var_270 = function (i) {var _uniq_var_78 = generate(i, env, ctx0);
_uniq_var_78;
return _uniq_var_78;
};_uniq_var_270.__lix_func__ = true;return _uniq_var_270;})());
_uniq_var_79;
var _uniq_var_80 = (function () {var _uniq_var_273 = function (_uniq_var_271, _uniq_var_272) {
if (typeof _uniq_var_271.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_271.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_271.join.apply(_uniq_var_271, arguments);
} else if (_uniq_var_271.join !== undefined) {
if (_uniq_var_272 === undefined) {
return _uniq_var_271.join;
}
_uniq_var_271.join = _uniq_var_272;
}return _uniq_var_271;
};_uniq_var_273.__lix_func__ = true;return _uniq_var_273;})()(_uniq_var_79, ', ');
_uniq_var_80;
var arrayBody = _uniq_var_80;
arrayBody;
var _uniq_var_81 = join(['[', arrayBody, ']']);
_uniq_var_81;
var _uniq_var_82 = ctx(_uniq_var_81);
_uniq_var_82;
return _uniq_var_82;
};_uniq_var_274.__lix_func__ = true;return _uniq_var_274;})();
generateArray;
var generateMethod = (function () {var _uniq_var_275 = function (expr, env, ctx) {var _uniq_var_83 = call(getUniqVarName);
_uniq_var_83;
var localVarName = _uniq_var_83;
localVarName;
var _uniq_var_84 = call(getUniqVarName);
_uniq_var_84;
var localValueName = _uniq_var_84;
localValueName;
var _uniq_var_85 = generateField(expr[0], env, ctx0);
_uniq_var_85;
var _uniq_var_86 = __add__(localVarName, _uniq_var_85);
_uniq_var_86;
var method = _uniq_var_86;
method;
var _uniq_var_87 = call(getUniqVarName);
_uniq_var_87;
var tmpVar = _uniq_var_87;
tmpVar;
var _uniq_var_88 = join(["(function () {", 'var ', tmpVar, ' = function (', localVarName, ", ", localValueName, ") {\n", "if (typeof ", method, " === 'function') {\n", "arguments = Array.prototype.slice.call(", "arguments, (", method, ".__lix_func__ ? 0 : 1), arguments.length);", "return ", method, ".apply(", localVarName, ", arguments);\n", "} else if (", method, " !== undefined) {\n", "if (", localValueName, " === undefined) {\n", "return ", method, ';\n', "}\n", method, " = ", localValueName, ";\n", "}", "return ", localVarName, ';\n', '};', tmpVar, '.__lix_func__ = true;', 'return ', tmpVar, ';', '})()']);
_uniq_var_88;
var _uniq_var_89 = ctx(_uniq_var_88);
_uniq_var_89;
return _uniq_var_89;
};_uniq_var_275.__lix_func__ = true;return _uniq_var_275;})();
generateMethod;
var generateWhile = (function () {var _uniq_var_276 = function (expr, env, ctx) {var _uniq_var_90 = generate(expr[0], env, ctx0);
_uniq_var_90;
var _uniq_var_91 = generate(expr[2], env, ctx0);
_uniq_var_91;
var _uniq_var_92 = ctx('null');
_uniq_var_92;
var _uniq_var_93 = join(['while (', _uniq_var_90, ') {\n', _uniq_var_91, "}\n", _uniq_var_92]);
_uniq_var_93;
return _uniq_var_93;
};_uniq_var_276.__lix_func__ = true;return _uniq_var_276;})();
generateWhile;
var generateBreak = (function () {var _uniq_var_277 = function (expr, env, ctx) {return 'break';
};_uniq_var_277.__lix_func__ = true;return _uniq_var_277;})();
generateBreak;
var generateEmpty = (function () {var _uniq_var_278 = function (expr, env, ctx) {var _uniq_var_94 = ctx(0);
_uniq_var_94;
return _uniq_var_94;
};_uniq_var_278.__lix_func__ = true;return _uniq_var_278;})();
generateEmpty;
var generateDef = (function () {var _uniq_var_279 = function (expr, env, ctx) {var varname = expr[0][0];
varname;
var _uniq_var_95 = generate(expr[2], env, ctx0);
_uniq_var_95;
var _uniq_var_96 = ctx(varname);
_uniq_var_96;
var _uniq_var_97 = join(['var ', varname, ' = ', _uniq_var_95, ";\n", _uniq_var_96]);
_uniq_var_97;
var ret = _uniq_var_97;
ret;
(env[varname] = true);
return ret;
};_uniq_var_279.__lix_func__ = true;return _uniq_var_279;})();
generateDef;
var generateAssign = (function () {var _uniq_var_280 = function (expr, env, ctx) {var _uniq_var_98 = getVarName(expr[0]);
_uniq_var_98;
var varname = _uniq_var_98;
varname;
var _uniq_var_99 = true;
_uniq_var_99;
var _uniq_var_102 = __eq__(env[varname], undefined);
_uniq_var_102;
if ((_uniq_var_99 && _uniq_var_102)) {
(_uniq_var_99 = false);
var _uniq_var_100 = console.log(varname);
_uniq_var_100;
_uniq_var_100;
var _uniq_var_101 = console.log("var undefined");
_uniq_var_101;
_uniq_var_101;

};
0;
var _uniq_var_103 = generate(expr[0], env, ctx0);
_uniq_var_103;
var _uniq_var_104 = generate(expr[2], env, ctx0);
_uniq_var_104;
var _uniq_var_105 = join(["(", _uniq_var_103, " = ", _uniq_var_104, ")"]);
_uniq_var_105;
var _uniq_var_106 = ctx(_uniq_var_105);
_uniq_var_106;
return _uniq_var_106;
};_uniq_var_280.__lix_func__ = true;return _uniq_var_280;})();
generateAssign;
var generateFunc = (function () {var _uniq_var_282 = function (expr, env, ctx) {var _uniq_var_107 = env_new(env);
_uniq_var_107;
var funcEnv = _uniq_var_107;
funcEnv;
var _uniq_var_108 = generateFuncArgs(expr[0], funcEnv, ctx0);
_uniq_var_108;
var args = _uniq_var_108;
args;
var _uniq_var_110 = generate(expr[2], funcEnv, (function () {var _uniq_var_281 = function (v) {var _uniq_var_109 = __add__('return ', v);
_uniq_var_109;
return _uniq_var_109;
};_uniq_var_281.__lix_func__ = true;return _uniq_var_281;})());
_uniq_var_110;
var body = _uniq_var_110;
body;
var _uniq_var_111 = call(getUniqVarName);
_uniq_var_111;
var tmpVar = _uniq_var_111;
tmpVar;
var _uniq_var_112 = join(['(function () {', 'var ', tmpVar, ' = function (', args, ') {', body, '};', tmpVar, '.__lix_func__ = true;', 'return ', tmpVar, ';', '})()']);
_uniq_var_112;
var _uniq_var_113 = ctx(_uniq_var_112);
_uniq_var_113;
return _uniq_var_113;
};_uniq_var_282.__lix_func__ = true;return _uniq_var_282;})();
generateFunc;
var generateExpr = (function () {var _uniq_var_284 = function (expr, env, ctx) {var _uniq_var_114 = generate(expr[1], env, ctx0);
_uniq_var_114;
var func = _uniq_var_114;
func;
var _uniq_var_115 = generate(expr[0], env, ctx0);
_uniq_var_115;
var args = _uniq_var_115;
args;
var _uniq_var_120 = foreach(expr, (function () {var _uniq_var_283 = function (item, index) {var _uniq_var_116 = true;
_uniq_var_116;
var _uniq_var_119 = __gt__(index, 1);
_uniq_var_119;
if ((_uniq_var_116 && _uniq_var_119)) {
(_uniq_var_116 = false);
var _uniq_var_117 = generate(item, env, ctx0);
_uniq_var_117;
var _uniq_var_118 = join([args, ', ', _uniq_var_117]);
_uniq_var_118;
(args = _uniq_var_118);

};
return 0;
};_uniq_var_283.__lix_func__ = true;return _uniq_var_283;})());
_uniq_var_120;
_uniq_var_120;
var _uniq_var_121 = join([func, '(', args, ')']);
_uniq_var_121;
var _uniq_var_122 = ctx(_uniq_var_121);
_uniq_var_122;
return _uniq_var_122;
};_uniq_var_284.__lix_func__ = true;return _uniq_var_284;})();
generateExpr;
var generateStart = (function () {var _uniq_var_285 = function (expr, env, ctx) {var _uniq_var_123 = generate(expr[0], env, ctx);
_uniq_var_123;
return _uniq_var_123;
};_uniq_var_285.__lix_func__ = true;return _uniq_var_285;})();
generateStart;
var generateMono = (function () {var _uniq_var_286 = function (expr, env, ctx) {var _uniq_var_124 = generate(expr[0], env, ctx);
_uniq_var_124;
return _uniq_var_124;
};_uniq_var_286.__lix_func__ = true;return _uniq_var_286;})();
generateMono;
var generatePathItem = (function () {var _uniq_var_287 = function (expr, env, ctx) {var _uniq_var_125 = join(['"', expr[0], '"']);
_uniq_var_125;
var _uniq_var_126 = ctx(_uniq_var_125);
_uniq_var_126;
return _uniq_var_126;
};_uniq_var_287.__lix_func__ = true;return _uniq_var_287;})();
generatePathItem;
var generatePathArgItem = (function () {var _uniq_var_288 = function (expr, env, ctx) {var _uniq_var_127 = generate(expr[0], env, ctx0);
_uniq_var_127;
var _uniq_var_128 = join(['("', expr[2], '" + ', _uniq_var_127, ')']);
_uniq_var_128;
var _uniq_var_129 = ctx(_uniq_var_128);
_uniq_var_129;
return _uniq_var_129;
};_uniq_var_288.__lix_func__ = true;return _uniq_var_288;})();
generatePathArgItem;
var generatePath = (function () {var _uniq_var_293 = function (expr, env, ctx) {var _uniq_var_131 = map(expr[0], (function () {var _uniq_var_289 = function (i) {var _uniq_var_130 = generate(i, env, ctx0);
_uniq_var_130;
return _uniq_var_130;
};_uniq_var_289.__lix_func__ = true;return _uniq_var_289;})());
_uniq_var_131;
var _uniq_var_132 = (function () {var _uniq_var_292 = function (_uniq_var_290, _uniq_var_291) {
if (typeof _uniq_var_290.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_290.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_290.join.apply(_uniq_var_290, arguments);
} else if (_uniq_var_290.join !== undefined) {
if (_uniq_var_291 === undefined) {
return _uniq_var_290.join;
}
_uniq_var_290.join = _uniq_var_291;
}return _uniq_var_290;
};_uniq_var_292.__lix_func__ = true;return _uniq_var_292;})()(_uniq_var_131, ',');
_uniq_var_132;
var path = _uniq_var_132;
path;
var _uniq_var_133 = join(['[', path, '].join("/")']);
_uniq_var_133;
var _uniq_var_134 = ctx(_uniq_var_133);
_uniq_var_134;
return _uniq_var_134;
};_uniq_var_293.__lix_func__ = true;return _uniq_var_293;})();
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
var generateOp = (function () {var _uniq_var_294 = function (hint) {var _uniq_var_135 = true;
_uniq_var_135;
if ((_uniq_var_135 && generateOpTable[hint])) {
(_uniq_var_135 = false);
generateOpTable[hint];

};
if (_uniq_var_135) {
generateExpr;

};
return 0;
};_uniq_var_294.__lix_func__ = true;return _uniq_var_294;})();
generateOp;
var generate = (function () {var _uniq_var_295 = function (expr, env, ctx) {var _uniq_var_136 = generateOp(expr[1]);
_uniq_var_136;
var _uniq_var_137 = _uniq_var_136(expr, env, ctx);
_uniq_var_137;
return _uniq_var_137;
};_uniq_var_295.__lix_func__ = true;return _uniq_var_295;})();
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
var env_new = (function () {var _uniq_var_297 = function (env) {var _uniq_var_138 = env;
_uniq_var_138;
if (not(_uniq_var_138)) {
(_uniq_var_138 = env0);

};
(env = _uniq_var_138);
var Env = (function () {var _uniq_var_296 = function () {;
};_uniq_var_296.__lix_func__ = true;return _uniq_var_296;})();
Env;
(Env.prototype = env);
var _uniq_var_139 = _instance_(Env);
_uniq_var_139;
return _uniq_var_139;
};_uniq_var_297.__lix_func__ = true;return _uniq_var_297;})();
env_new;
var flattenExpr = (function () {var _uniq_var_299 = function (expr, define) {var _uniq_var_141 = map(expr, (function () {var _uniq_var_298 = function (item) {var _uniq_var_140 = flatten(item, define);
_uniq_var_140;
return _uniq_var_140;
};_uniq_var_298.__lix_func__ = true;return _uniq_var_298;})());
_uniq_var_141;
var _uniq_var_142 = define(_uniq_var_141);
_uniq_var_142;
return _uniq_var_142;
};_uniq_var_299.__lix_func__ = true;return _uniq_var_299;})();
flattenExpr;
var flattenBreak = (function () {var _uniq_var_300 = function (expr, define) {return expr;
};_uniq_var_300.__lix_func__ = true;return _uniq_var_300;})();
flattenBreak;
var flattenWhile = (function () {var _uniq_var_305 = function (expr, define) {var _uniq_var_143 = call(statementFlattenGenerator);
_uniq_var_143;
var whileDefine = _uniq_var_143;
whileDefine;
var _uniq_var_144 = flatten(expr[0], whileDefine);
_uniq_var_144;
(expr[0] = _uniq_var_144);
var _uniq_var_145 = flatten(expr[2], define0);
_uniq_var_145;
(expr[2] = _uniq_var_145);
var _uniq_var_146 = call(whileDefine);
_uniq_var_146;
var _uniq_var_147 = (function () {var _uniq_var_303 = function (_uniq_var_301, _uniq_var_302) {
if (typeof _uniq_var_301.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_301.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_301.concat.apply(_uniq_var_301, arguments);
} else if (_uniq_var_301.concat !== undefined) {
if (_uniq_var_302 === undefined) {
return _uniq_var_301.concat;
}
_uniq_var_301.concat = _uniq_var_302;
}return _uniq_var_301;
};_uniq_var_303.__lix_func__ = true;return _uniq_var_303;})()(expr[2][0], _uniq_var_146);
_uniq_var_147;
(expr[2][0] = _uniq_var_147);
var _uniq_var_148 = call(whileDefine);
_uniq_var_148;
var _uniq_var_150 = foreach(_uniq_var_148, (function () {var _uniq_var_304 = function (i) {var _uniq_var_149 = define(i, true);
_uniq_var_149;
return _uniq_var_149;
};_uniq_var_304.__lix_func__ = true;return _uniq_var_304;})());
_uniq_var_150;
_uniq_var_150;
return expr;
};_uniq_var_305.__lix_func__ = true;return _uniq_var_305;})();
flattenWhile;
var flattenOr = (function () {var _uniq_var_310 = function (expr, define) {var _uniq_var_151 = flatten(expr[0], define);
_uniq_var_151;
var ret = _uniq_var_151;
ret;
var _uniq_var_152 = true;
_uniq_var_152;
var _uniq_var_154 = __ne__(ret[2], 'var');
_uniq_var_154;
if ((_uniq_var_152 && _uniq_var_154)) {
(_uniq_var_152 = false);
var _uniq_var_153 = define(ret);
_uniq_var_153;
var ret = _uniq_var_153;
ret;

};
0;
var getAndOpSeq = (function () {var _uniq_var_309 = function () {var _uniq_var_155 = call(statementFlattenGenerator);
_uniq_var_155;
var AndDefine = _uniq_var_155;
AndDefine;
var _uniq_var_156 = flatten(expr[2], AndDefine);
_uniq_var_156;
var seqRet = _uniq_var_156;
seqRet;
var _uniq_var_157 = call(AndDefine);
_uniq_var_157;
var seq = _uniq_var_157;
seq;
var _uniq_var_158 = (function () {var _uniq_var_308 = function (_uniq_var_306, _uniq_var_307) {
if (typeof _uniq_var_306.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_306.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_306.push.apply(_uniq_var_306, arguments);
} else if (_uniq_var_306.push !== undefined) {
if (_uniq_var_307 === undefined) {
return _uniq_var_306.push;
}
_uniq_var_306.push = _uniq_var_307;
}return _uniq_var_306;
};_uniq_var_308.__lix_func__ = true;return _uniq_var_308;})()(seq, [ret, '=', seqRet]);
_uniq_var_158;
_uniq_var_158;
return [seq, '{seq}'];
};_uniq_var_309.__lix_func__ = true;return _uniq_var_309;})();
getAndOpSeq;
var _uniq_var_159 = call(getAndOpSeq);
_uniq_var_159;
var _uniq_var_160 = define([[[[ret, ['not', '{atomic}', 'var']], _uniq_var_159]], 'if'], true);
_uniq_var_160;
_uniq_var_160;
return ret;
};_uniq_var_310.__lix_func__ = true;return _uniq_var_310;})();
flattenOr;
var flattenAnd = (function () {var _uniq_var_315 = function (expr, define) {var _uniq_var_161 = flatten(expr[0], define);
_uniq_var_161;
var ret = _uniq_var_161;
ret;
var _uniq_var_162 = true;
_uniq_var_162;
var _uniq_var_164 = __ne__(ret[2], 'var');
_uniq_var_164;
if ((_uniq_var_162 && _uniq_var_164)) {
(_uniq_var_162 = false);
var _uniq_var_163 = define(ret);
_uniq_var_163;
var ret = _uniq_var_163;
ret;

};
0;
var getAndOpSeq = (function () {var _uniq_var_314 = function () {var _uniq_var_165 = call(statementFlattenGenerator);
_uniq_var_165;
var AndDefine = _uniq_var_165;
AndDefine;
var _uniq_var_166 = flatten(expr[2], AndDefine);
_uniq_var_166;
var seqRet = _uniq_var_166;
seqRet;
var _uniq_var_167 = call(AndDefine);
_uniq_var_167;
var seq = _uniq_var_167;
seq;
var _uniq_var_168 = (function () {var _uniq_var_313 = function (_uniq_var_311, _uniq_var_312) {
if (typeof _uniq_var_311.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_311.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_311.push.apply(_uniq_var_311, arguments);
} else if (_uniq_var_311.push !== undefined) {
if (_uniq_var_312 === undefined) {
return _uniq_var_311.push;
}
_uniq_var_311.push = _uniq_var_312;
}return _uniq_var_311;
};_uniq_var_313.__lix_func__ = true;return _uniq_var_313;})()(seq, [ret, '=', seqRet]);
_uniq_var_168;
_uniq_var_168;
return [seq, '{seq}'];
};_uniq_var_314.__lix_func__ = true;return _uniq_var_314;})();
getAndOpSeq;
var _uniq_var_169 = call(getAndOpSeq);
_uniq_var_169;
var _uniq_var_170 = define([[[ret, _uniq_var_169]], 'if'], true);
_uniq_var_170;
_uniq_var_170;
return ret;
};_uniq_var_315.__lix_func__ = true;return _uniq_var_315;})();
flattenAnd;
var _flattenIf = (function () {var _uniq_var_320 = function (expr, define, tmpVar) {var _uniq_var_182 = foreach(expr[0], (function () {var _uniq_var_319 = function (i) {var _uniq_var_171 = true;
_uniq_var_171;
var _uniq_var_174 = __eq__(i[1], 'else');
_uniq_var_174;
if ((_uniq_var_171 && _uniq_var_174)) {
(_uniq_var_171 = false);
var _uniq_var_172 = flatten(i[0], define0);
_uniq_var_172;
var elseSeq = _uniq_var_172;
elseSeq;
var _uniq_var_173 = define([[[tmpVar, elseSeq]], 'if'], true);
_uniq_var_173;
_uniq_var_173;

};
var _uniq_var_177 = __eq__(i[1], 'if');
_uniq_var_177;
if ((_uniq_var_171 && _uniq_var_177)) {
(_uniq_var_171 = false);
var _uniq_var_175 = _flattenIf(i, define, tmpVar);
_uniq_var_175;
var _uniq_var_176 = define(_uniq_var_175);
_uniq_var_176;
_uniq_var_176;

};
if (_uniq_var_171) {
var _uniq_var_178 = flatten(i[1], define0);
_uniq_var_178;
var ifSeq = _uniq_var_178;
ifSeq;
var _uniq_var_179 = (function () {var _uniq_var_318 = function (_uniq_var_316, _uniq_var_317) {
if (typeof _uniq_var_316.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_316.unshift.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_316.unshift.apply(_uniq_var_316, arguments);
} else if (_uniq_var_316.unshift !== undefined) {
if (_uniq_var_317 === undefined) {
return _uniq_var_316.unshift;
}
_uniq_var_316.unshift = _uniq_var_317;
}return _uniq_var_316;
};_uniq_var_318.__lix_func__ = true;return _uniq_var_318;})()(ifSeq[0], [tmpVar, '=', ['false', '{atomic}']]);
_uniq_var_179;
_uniq_var_179;
var _uniq_var_180 = flatten(i[0], define);
_uniq_var_180;
var cond = _uniq_var_180;
cond;
var cond = [tmpVar, 'and', cond];
cond;
var _uniq_var_181 = define([[[cond, ifSeq]], 'if'], true);
_uniq_var_181;
_uniq_var_181;

};
return 0;
};_uniq_var_319.__lix_func__ = true;return _uniq_var_319;})());
_uniq_var_182;
_uniq_var_182;
return ['', '{empty}'];
};_uniq_var_320.__lix_func__ = true;return _uniq_var_320;})();
_flattenIf;
var flattenIf = (function () {var _uniq_var_321 = function (expr, define) {var _uniq_var_183 = define(['true', '{atomic}']);
_uniq_var_183;
var tmpVar = _uniq_var_183;
tmpVar;
var _uniq_var_184 = _flattenIf(expr, define, tmpVar);
_uniq_var_184;
return _uniq_var_184;
};_uniq_var_321.__lix_func__ = true;return _uniq_var_321;})();
flattenIf;
var flattenAssign = (function () {var _uniq_var_322 = function (expr, define) {var _uniq_var_185 = flatten(expr[2], define);
_uniq_var_185;
(expr[2] = _uniq_var_185);
return expr;
};_uniq_var_322.__lix_func__ = true;return _uniq_var_322;})();
flattenAssign;
var flattenDef = (function () {var _uniq_var_323 = function (expr, define) {var _uniq_var_186 = flatten(expr[2], define);
_uniq_var_186;
(expr[2] = _uniq_var_186);
return expr;
};_uniq_var_323.__lix_func__ = true;return _uniq_var_323;})();
flattenDef;
var flattenPathArgItem = (function () {var _uniq_var_324 = function (expr, define) {var _uniq_var_187 = flatten(expr[0], define);
_uniq_var_187;
(expr[0] = _uniq_var_187);
return expr;
};_uniq_var_324.__lix_func__ = true;return _uniq_var_324;})();
flattenPathArgItem;
var flattenPathItem = (function () {var _uniq_var_325 = function (expr, define) {return expr;
};_uniq_var_325.__lix_func__ = true;return _uniq_var_325;})();
flattenPathItem;
var flattenPath = (function () {var _uniq_var_327 = function (expr, define) {var _uniq_var_189 = map(expr[0], (function () {var _uniq_var_326 = function (i) {var _uniq_var_188 = flatten(i, define);
_uniq_var_188;
return _uniq_var_188;
};_uniq_var_326.__lix_func__ = true;return _uniq_var_326;})());
_uniq_var_189;
(expr[0] = _uniq_var_189);
return expr;
};_uniq_var_327.__lix_func__ = true;return _uniq_var_327;})();
flattenPath;
var flattenEmpty = (function () {var _uniq_var_328 = function (expr, define) {return expr;
};_uniq_var_328.__lix_func__ = true;return _uniq_var_328;})();
flattenEmpty;
var flattenField = (function () {var _uniq_var_329 = function (expr, define) {var _uniq_var_190 = true;
_uniq_var_190;
var _uniq_var_192 = __eq__(expr[1], '{index}');
_uniq_var_192;
if ((_uniq_var_190 && _uniq_var_192)) {
(_uniq_var_190 = false);
var _uniq_var_191 = flatten(expr[0], define);
_uniq_var_191;
(expr[0] = _uniq_var_191);

};
0;
return expr;
};_uniq_var_329.__lix_func__ = true;return _uniq_var_329;})();
flattenField;
var flattenMethod = (function () {var _uniq_var_330 = function (expr, define) {var _uniq_var_193 = flattenField(expr[0], define);
_uniq_var_193;
(expr[0] = _uniq_var_193);
return expr;
};_uniq_var_330.__lix_func__ = true;return _uniq_var_330;})();
flattenMethod;
var flattenProperty = (function () {var _uniq_var_331 = function (expr, define) {var _uniq_var_194 = flatten(expr[2], define);
_uniq_var_194;
(expr[2] = _uniq_var_194);
return expr;
};_uniq_var_331.__lix_func__ = true;return _uniq_var_331;})();
flattenProperty;
var flattenObjectLiteral = (function () {var _uniq_var_333 = function (expr, define) {var _uniq_var_196 = map(expr[0], (function () {var _uniq_var_332 = function (i) {var _uniq_var_195 = flattenProperty(i, define);
_uniq_var_195;
return _uniq_var_195;
};_uniq_var_332.__lix_func__ = true;return _uniq_var_332;})());
_uniq_var_196;
(expr[0] = _uniq_var_196);
return expr;
};_uniq_var_333.__lix_func__ = true;return _uniq_var_333;})();
flattenObjectLiteral;
var flattenArray = (function () {var _uniq_var_335 = function (expr, define) {var _uniq_var_198 = map(expr[0], (function () {var _uniq_var_334 = function (i) {var _uniq_var_197 = flatten(i, define);
_uniq_var_197;
return _uniq_var_197;
};_uniq_var_334.__lix_func__ = true;return _uniq_var_334;})());
_uniq_var_198;
(expr[0] = _uniq_var_198);
return expr;
};_uniq_var_335.__lix_func__ = true;return _uniq_var_335;})();
flattenArray;
var flattenFunc = (function () {var _uniq_var_336 = function (expr, define) {var _uniq_var_199 = flatten(expr[2], define);
_uniq_var_199;
(expr[2] = _uniq_var_199);
return expr;
};_uniq_var_336.__lix_func__ = true;return _uniq_var_336;})();
flattenFunc;
var flattenFieldAccess = (function () {var _uniq_var_337 = function (expr, define) {var _uniq_var_200 = true;
_uniq_var_200;
var _uniq_var_203 = __eq__(expr[1], '{.}');
_uniq_var_203;
if ((_uniq_var_200 && _uniq_var_203)) {
(_uniq_var_200 = false);
var _uniq_var_201 = flattenFieldAccess(expr[0], define);
_uniq_var_201;
(expr[0] = _uniq_var_201);
var _uniq_var_202 = flattenField(expr[2], define);
_uniq_var_202;
(expr[2] = _uniq_var_202);

};
0;
return expr;
};_uniq_var_337.__lix_func__ = true;return _uniq_var_337;})();
flattenFieldAccess;
var flattenAtomic = (function () {var _uniq_var_338 = function (expr, define) {return expr;
};_uniq_var_338.__lix_func__ = true;return _uniq_var_338;})();
flattenAtomic;
var flattenMono = (function () {var _uniq_var_339 = function (expr, define) {var _uniq_var_204 = flatten(expr[0], define);
_uniq_var_204;
return _uniq_var_204;
};_uniq_var_339.__lix_func__ = true;return _uniq_var_339;})();
flattenMono;
var statementFlattenGenerator = (function () {var _uniq_var_347 = function () {var data = [];
data;
return (function () {var _uniq_var_346 = function (statement, onlyPush) {var _uniq_var_205 = true;
_uniq_var_205;
var _uniq_var_206 = __eq__(statement, undefined);
_uniq_var_206;
if ((_uniq_var_205 && _uniq_var_206)) {
(_uniq_var_205 = false);
data;

};
if ((_uniq_var_205 && onlyPush)) {
(_uniq_var_205 = false);
var _uniq_var_207 = (function () {var _uniq_var_342 = function (_uniq_var_340, _uniq_var_341) {
if (typeof _uniq_var_340.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_340.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_340.push.apply(_uniq_var_340, arguments);
} else if (_uniq_var_340.push !== undefined) {
if (_uniq_var_341 === undefined) {
return _uniq_var_340.push;
}
_uniq_var_340.push = _uniq_var_341;
}return _uniq_var_340;
};_uniq_var_342.__lix_func__ = true;return _uniq_var_342;})()(data, statement);
_uniq_var_207;
_uniq_var_207;

};
if (_uniq_var_205) {
var _uniq_var_208 = call(getUniqVarName);
_uniq_var_208;
var varName = _uniq_var_208;
varName;
var lixVar = [varName, '{atomic}', '{var}'];
lixVar;
var _uniq_var_209 = (function () {var _uniq_var_345 = function (_uniq_var_343, _uniq_var_344) {
if (typeof _uniq_var_343.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_343.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_343.push.apply(_uniq_var_343, arguments);
} else if (_uniq_var_343.push !== undefined) {
if (_uniq_var_344 === undefined) {
return _uniq_var_343.push;
}
_uniq_var_343.push = _uniq_var_344;
}return _uniq_var_343;
};_uniq_var_345.__lix_func__ = true;return _uniq_var_345;})()(data, [lixVar, ':=', statement]);
_uniq_var_209;
_uniq_var_209;
lixVar;

};
return 0;
};_uniq_var_346.__lix_func__ = true;return _uniq_var_346;})();
};_uniq_var_347.__lix_func__ = true;return _uniq_var_347;})();
statementFlattenGenerator;
var flattenSeq = (function () {var _uniq_var_355 = function (expr, define) {var ret = [];
ret;
var _uniq_var_215 = foreach(expr[0], (function () {var _uniq_var_354 = function (item, index) {var _uniq_var_210 = call(statementFlattenGenerator);
_uniq_var_210;
var exprDefine = _uniq_var_210;
exprDefine;
var _uniq_var_211 = flatten(item, exprDefine);
_uniq_var_211;
var itemRet = _uniq_var_211;
itemRet;
var _uniq_var_212 = call(exprDefine);
_uniq_var_212;
var _uniq_var_213 = (function () {var _uniq_var_350 = function (_uniq_var_348, _uniq_var_349) {
if (typeof _uniq_var_348.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_348.concat.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_348.concat.apply(_uniq_var_348, arguments);
} else if (_uniq_var_348.concat !== undefined) {
if (_uniq_var_349 === undefined) {
return _uniq_var_348.concat;
}
_uniq_var_348.concat = _uniq_var_349;
}return _uniq_var_348;
};_uniq_var_350.__lix_func__ = true;return _uniq_var_350;})()(ret, _uniq_var_212);
_uniq_var_213;
(ret = _uniq_var_213);
var _uniq_var_214 = (function () {var _uniq_var_353 = function (_uniq_var_351, _uniq_var_352) {
if (typeof _uniq_var_351.push === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_351.push.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_351.push.apply(_uniq_var_351, arguments);
} else if (_uniq_var_351.push !== undefined) {
if (_uniq_var_352 === undefined) {
return _uniq_var_351.push;
}
_uniq_var_351.push = _uniq_var_352;
}return _uniq_var_351;
};_uniq_var_353.__lix_func__ = true;return _uniq_var_353;})()(ret, itemRet);
_uniq_var_214;
return _uniq_var_214;
};_uniq_var_354.__lix_func__ = true;return _uniq_var_354;})());
_uniq_var_215;
_uniq_var_215;
(expr[0] = ret);
return expr;
};_uniq_var_355.__lix_func__ = true;return _uniq_var_355;})();
flattenSeq;
var flattenStart = (function () {var _uniq_var_356 = function (expr, define) {var _uniq_var_216 = flatten(expr[0], define);
_uniq_var_216;
var ret = _uniq_var_216;
ret;
return [ret, '{start}'];
};_uniq_var_356.__lix_func__ = true;return _uniq_var_356;})();
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
var flattenOp = (function () {var _uniq_var_357 = function (hint) {var _uniq_var_217 = true;
_uniq_var_217;
if ((_uniq_var_217 && flattenOpTable[hint])) {
(_uniq_var_217 = false);
flattenOpTable[hint];

};
if (_uniq_var_217) {
flattenExpr;

};
return 0;
};_uniq_var_357.__lix_func__ = true;return _uniq_var_357;})();
flattenOp;
var flatten = (function () {var _uniq_var_358 = function (expr, define) {var _uniq_var_218 = flattenOp(expr[1]);
_uniq_var_218;
console.log(expr[1]);
console.log(_uniq_var_218);
var _uniq_var_219 = _uniq_var_218(expr, define);
_uniq_var_219;
return _uniq_var_219;
};_uniq_var_358.__lix_func__ = true;return _uniq_var_358;})();
flatten;
var define0 = (function () {var _uniq_var_359 = function (i) {return i;
};_uniq_var_359.__lix_func__ = true;return _uniq_var_359;})();
define0;
(exports.compile = (function () {var _uniq_var_365 = function (expr) {var _uniq_var_220 = map(env0, (function () {var _uniq_var_360 = function (i) {return i;
};_uniq_var_360.__lix_func__ = true;return _uniq_var_360;})());
_uniq_var_220;
var _uniq_var_221 = (function () {var _uniq_var_363 = function (_uniq_var_361, _uniq_var_362) {
if (typeof _uniq_var_361.join === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_361.join.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_361.join.apply(_uniq_var_361, arguments);
} else if (_uniq_var_361.join !== undefined) {
if (_uniq_var_362 === undefined) {
return _uniq_var_361.join;
}
_uniq_var_361.join = _uniq_var_362;
}return _uniq_var_361;
};_uniq_var_363.__lix_func__ = true;return _uniq_var_363;})()(_uniq_var_220, "\n");
_uniq_var_221;
var libs = _uniq_var_221;
libs;
var _uniq_var_222 = flatten(expr, (function () {var _uniq_var_364 = function (i) {;
};_uniq_var_364.__lix_func__ = true;return _uniq_var_364;})());
_uniq_var_222;
var _uniq_var_223 = call(env_new);
_uniq_var_223;
var _uniq_var_224 = generate(_uniq_var_222, _uniq_var_223, ctx0);
_uniq_var_224;
var code = _uniq_var_224;
code;
var _uniq_var_225 = join([libs, "\n", code]);
_uniq_var_225;
var _uniq_var_226 = console.log(_uniq_var_225);
_uniq_var_226;
return _uniq_var_226;
};_uniq_var_365.__lix_func__ = true;return _uniq_var_365;})());

