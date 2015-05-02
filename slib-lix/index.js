
require('/lib/lix/s_builtin_.js');
var LPREV, LF, LSTEP, LRET, Ljoin, Lmap, LcounterGenerator, _ret, _5, LgetCount, LgetUniqVarName, LgenerateFuncArgs, Lctx0, LgenerateSeq, LgenerateOr, LgenerateAnd, LgenerateIf, LoperateFuncName, LgenerateAtomic, LgeneratePropertyName, LgenerateProperty, LgenerateObjectLiteral, LtransformVarName, LgetVarName, LgenerateField, LgenerateFieldAccess, LgenerateArray, LgenerateMethod, LgenerateWhile, LgenerateBreak, LgenerateEmpty, LgenerateDef, LgenerateAssign, LgenerateFunc, LgenerateExpr, LGenerateDefNew, LgenerateStart, LgenerateMono, LgeneratePathItem, LgeneratePathArgItem, LgeneratePath, LgenerateModule, LgenerateOpTable, LgenerateOp, Lgenerate, Lenv0, Lenv_new, LflattenExpr, LflattenBreak, LflattenWhile, LflattenOr, LflattenAnd, L_flattenIf, LflattenIf, LflattenAssign, LflattenBasicOp, LflattenBind, LflattenCompose, LflattenReverseCompose, LflattenReverseCPSCompose, LflattenCPSCompose, LflattenDef, LflattenPathArgItem, LflattenPathItem, LflattenPath, LflattenEmpty, LflattenField, LflattenMethod, LflattenProperty, LflattenObjectLiteral, LflattenArray, LflattenFunc, LflattenFieldAccess, LflattenAtomic, LflattenMono, LstatementFlattenGenerator, LflattenSeq, LflattenStart, LflattenModule, LflattenDefer, LflattenOpTable, LflattenOp, Lflatten, Ldefine0, Ldef0, LseqFuncParamsName, LbuiltinNames, Lcompile;
function _324(s) {
switch (s[2]) {
case 0:
_ret = LPREV = '0';
case 1:
_ret = LF = '1';
case 2:
_ret = LSTEP = '2';
case 3:
_ret = LRET = '3';
case 4:
_ret = Ljoin = (function (Larr) {
var Larguments = arguments, defer_stack = [];
var _ret, _0;
function _326(s) {
switch (s[2]) {
case 0:
_ret = lix(s, (function (_327, _328) {
if (typeof _327.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _327.join.apply(_327, arguments);
} else if (_327.join !== undefined) {
if (_328 === undefined) {
return function (_ret) {
return _327.join;
}
}
return function (_ret) {
_327.join = _328;
}
}})(Larr, ""));
case 1:
_0 = _ret
default:
}
return s[3]
}
;
return _326;
});
case 5:
_ret = Lmap = (function (Larr, Lcb) {
var Larguments = arguments, defer_stack = [];
var Lret, _ret, _3;
function _331(s) {
switch (s[2]) {
case 0:
_ret = Lret = [];
case 1:
_ret = lix(s, Lforeach(Larr, (function (Li, Lindex) {
var Larguments = arguments, defer_stack = [];
var _ret, _1, _2;
function _333(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcb(Li, Lindex));
case 1:
_1 = _ret;
case 2:
_ret = lix(s, (function (_334, _335) {
if (typeof _334.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _334.push.apply(_334, arguments);
} else if (_334.push !== undefined) {
if (_335 === undefined) {
return function (_ret) {
return _334.push;
}
}
return function (_ret) {
_334.push = _335;
}
}})(Lret, _1));
case 3:
_2 = _ret
default:
}
return s[3]
}
;
return _333;
})));
case 2:
_3 = _ret;
case 3:
_ret = Lret
default:
}
return s[3]
}
;
return _331;
});
case 6:
_ret = LcounterGenerator = (function () {
var Larguments = arguments, defer_stack = [];
var Lcounter;
function _338(s) {
switch (s[2]) {
case 0:
_ret = Lcounter = 0;
case 1:
_ret = (function () {
var Larguments = arguments, defer_stack = [];
var Lret, _ret, _4;
function _340(s) {
switch (s[2]) {
case 0:
_ret = Lret = Lcounter;
case 1:
_ret = lix(s, L__add__(Lcounter, 1));
case 2:
_4 = _ret;
case 3:
_ret = Lcounter = _4;
case 4:
_ret = Lret
default:
}
return s[3]
}
;
return _340;
})
default:
}
return s[3]
}
;
return _338;
});
case 7:
_ret = lix(s, Lcall(LcounterGenerator));
case 8:
_5 = _ret;
case 9:
_ret = LgetCount = _5;
case 10:
_ret = LgetUniqVarName = (function () {
var Larguments = arguments, defer_stack = [];
var _ret, _6, _7;
function _342(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LgetCount));
case 1:
_6 = _ret;
case 2:
_ret = lix(s, L__add__('_', _6));
case 3:
_7 = _ret
default:
}
return s[3]
}
;
return _342;
});
case 11:
_ret = LgenerateFuncArgs = (function (Largs, Lenv, Lctx) {
var Larguments = arguments, defer_stack = [];
var _ret, _9, _10;
function _344(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Largs, (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _8, Lvarname;
function _346(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LtransformVarName(Li[0]));
case 1:
_8 = _ret;
case 2:
_ret = Lvarname = _8;
case 3:
_ret = Lenv[Lvarname] = true;
case 4:
_ret = Lvarname
default:
}
return s[3]
}
;
return _346;
})));
case 1:
_9 = _ret;
case 2:
_ret = lix(s, (function (_347, _348) {
if (typeof _347.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _347.join.apply(_347, arguments);
} else if (_347.join !== undefined) {
if (_348 === undefined) {
return function (_ret) {
return _347.join;
}
}
return function (_ret) {
_347.join = _348;
}
}})(_9, ', '));
case 3:
_10 = _ret
default:
}
return s[3]
}
;
return _344;
});
case 12:
_ret = Lctx0 = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _351(s) {
switch (s[2]) {
case 0:
_ret = Lx
default:
}
return s[3]
}
;
return _351;
});
case 13:
_ret = LgenerateSeq = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _11, LfuncName, _12, LgetCount, _16, _17, Lbody, _18, _19;
function _353(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LgetUniqVarName));
case 1:
_11 = _ret;
case 2:
_ret = LfuncName = _11;
case 3:
_ret = lix(s, Lcall(LcounterGenerator));
case 4:
_12 = _ret;
case 5:
_ret = LgetCount = _12;
case 6:
_ret = lix(s, Lmap(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments, defer_stack = [];
var _ret, _13, Lcurrent, _14, Lstmt, _15;
function _355(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LgetCount));
case 1:
_13 = _ret;
case 2:
_ret = Lcurrent = _13;
case 3:
_ret = lix(s, Lgenerate(Litem, Lenv, Lctx0, Ldef));
case 4:
_14 = _ret;
case 5:
_ret = Lstmt = _14;
case 6:
_ret = lix(s, Ljoin(['case ', Lcurrent, ':\n', Lstmt]));
case 7:
_15 = _ret;
case 8:
_ret = Lstmt = _15
default:
}
return s[3]
}
;
return _355;
})));
case 7:
_16 = _ret;
case 8:
_ret = lix(s, (function (_356, _357) {
if (typeof _356.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _356.join.apply(_356, arguments);
} else if (_356.join !== undefined) {
if (_357 === undefined) {
return function (_ret) {
return _356.join;
}
}
return function (_ret) {
_356.join = _357;
}
}})(_16, ";\n"));
case 9:
_17 = _ret;
case 10:
_ret = Lbody = _17;
case 11:
_ret = lix(s, Ljoin(['function ', LfuncName, '(s) {\n', 'switch (s[', LSTEP, ']) {\n', Lbody, '\n', 'default:\n', '}\n', 'return s[', LRET, ']\n', '}\n']));
case 12:
_18 = _ret;
case 13:
_ret = lix(s, Ldef.appendExpr(_18));
case 14:
_19 = _ret;
case 15:
_ret = LfuncName
default:
}
return s[3]
}
;
return _353;
});
case 14:
_ret = LgenerateOr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _20, _21, _22;
function _360(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_20 = _ret;
case 2:
_ret = lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 3:
_21 = _ret;
case 4:
_ret = lix(s, Ljoin(['(', _20, " || ", _21, ')']));
case 5:
_22 = _ret
default:
}
return s[3]
}
;
return _360;
});
case 15:
_ret = LgenerateAnd = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _23, _24, _25;
function _362(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_23 = _ret;
case 2:
_ret = lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 3:
_24 = _ret;
case 4:
_ret = lix(s, Ljoin(['(', _23, " && ", _24, ')']));
case 5:
_25 = _ret
default:
}
return s[3]
}
;
return _362;
});
case 16:
_ret = LgenerateIf = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _38, _39;
function _364(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _26, _27, _31, _28, _29, _30, _33, _32, _34, _35, _36, _37;
function _367(s) {
switch (s[2]) {
case 0:
_26 = false;
case 1:
_ret = lix(s, Lgenerate(Li[0], Lenv, Lctx, Ldef));
case 2:
_28 = _ret;
case 3:
_ret = lix(s, Lctx(_28));
case 4:
_29 = _ret;
case 5:
_ret = lix(s, Ljoin(['{\n', _29, '\n}']));
case 6:
_30 = _ret;
case 7:
_ret = _27 = _30
default:
}
return s[3]
}
;
function _368(s) {
switch (s[2]) {
case 0:
_26 = false;
case 1:
_ret = lix(s, LgenerateIf(Li, Lenv, Lctx, Ldef));
case 2:
_32 = _ret;
case 3:
_ret = _27 = _32
default:
}
return s[3]
}
;
function _369(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Li[0], Lenv, Lctx, Ldef));
case 1:
_34 = _ret;
case 2:
_ret = lix(s, Lgenerate(Li[1], Lenv, Lctx, Ldef));
case 3:
_35 = _ret;
case 4:
_ret = lix(s, Lctx(_35));
case 5:
_36 = _ret;
case 6:
_ret = lix(s, Ljoin(['if (', _34, ') {\n', _36, '\n}']));
case 7:
_37 = _ret;
case 8:
_ret = _27 = _37
default:
}
return s[3]
}
;
function _366(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_26 = _ret;
case 2:
_ret = null;
case 3:
_27 = _ret;
case 4:
_ret = lix(s, L__eq__(Li[1], 'else'));
case 5:
_31 = _ret;
case 6:
if ((_26 && _31)) {
_367
};
case 7:
_ret = lix(s, L__eq__(Li[1], 'if'));
case 8:
_33 = _ret;
case 9:
if ((_26 && _33)) {
_368
};
case 10:
if (_26) {
_369
}
default:
}
return s[3]
}
;
return _366;
})));
case 1:
_38 = _ret;
case 2:
_ret = lix(s, (function (_370, _371) {
if (typeof _370.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _370.join.apply(_370, arguments);
} else if (_370.join !== undefined) {
if (_371 === undefined) {
return function (_ret) {
return _370.join;
}
}
return function (_ret) {
_370.join = _371;
}
}})(_38, ' else '));
case 3:
_39 = _ret
default:
}
return s[3]
}
;
return _364;
});
case 17:
_ret = LoperateFuncName = {
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
case 18:
_ret = LgenerateAtomic = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var Lret, _ret, _40, _41, _47, _42, _43, _44, _46, _45;
function _376(s) {
switch (s[2]) {
case 0:
_42 = false;
case 1:
_ret = lix(s, LtransformVarName(LoperateFuncName[Lexpr[0]]));
case 2:
_44 = _ret;
case 3:
_ret = _43 = Lret = _44
default:
}
return s[3]
}
;
function _377(s) {
switch (s[2]) {
case 0:
_42 = false;
case 1:
_ret = lix(s, LtransformVarName(Lexpr[0]));
case 2:
_45 = _ret;
case 3:
_ret = _43 = Lret = _45
default:
}
return s[3]
}
;
function _375(s) {
switch (s[2]) {
case 0:
_40 = false;
case 1:
_ret = true;
case 2:
_42 = _ret;
case 3:
_ret = null;
case 4:
_43 = _ret;
case 5:
if ((_42 && LoperateFuncName[Lexpr[0]])) {
_376
};
case 6:
_ret = lix(s, L__eq__(Lexpr[3], undefined));
case 7:
_46 = _ret;
case 8:
if ((_42 && _46)) {
_377
};
case 9:
_ret = _41 = _43
default:
}
return s[3]
}
;
function _374(s) {
switch (s[2]) {
case 0:
_ret = Lret = Lexpr[0];
case 1:
_ret = true;
case 2:
_40 = _ret;
case 3:
_ret = null;
case 4:
_41 = _ret;
case 5:
_ret = lix(s, L__eq__(Lexpr[2], '{var}'));
case 6:
_47 = _ret;
case 7:
if ((_40 && _47)) {
_375
};
case 8:
_ret = Lret
default:
}
return s[3]
}
;
return _374;
});
case 19:
_ret = LgeneratePropertyName = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _48, _49, _51, _50, _53, _52;
function _380(s) {
switch (s[2]) {
case 0:
_48 = false;
case 1:
_ret = lix(s, LgenerateAtomic(Lexpr, Lenv, Lctx, Ldef));
case 2:
_50 = _ret;
case 3:
_ret = _49 = _50
default:
}
return s[3]
}
;
function _381(s) {
switch (s[2]) {
case 0:
_48 = false;
case 1:
_ret = lix(s, LgenerateAtomic(Lexpr[0], Lenv, Lctx, Ldef));
case 2:
_52 = _ret;
case 3:
_ret = _49 = _52
default:
}
return s[3]
}
;
function _379(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_48 = _ret;
case 2:
_ret = null;
case 3:
_49 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 5:
_51 = _ret;
case 6:
if ((_48 && _51)) {
_380
};
case 7:
_ret = lix(s, L__eq__(Lexpr[1], '{index}'));
case 8:
_53 = _ret;
case 9:
if ((_48 && _53)) {
_381
}
default:
}
return s[3]
}
;
return _379;
});
case 20:
_ret = LgenerateProperty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _54, LpropertyName, _55, LpropertyValue, _56;
function _383(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LgeneratePropertyName(Lexpr[0], Lenv, Lctx0, Ldef));
case 1:
_54 = _ret;
case 2:
_ret = LpropertyName = _54;
case 3:
_ret = lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 4:
_55 = _ret;
case 5:
_ret = LpropertyValue = _55;
case 6:
_ret = lix(s, Ljoin([LpropertyName, ": ", LpropertyValue]));
case 7:
_56 = _ret
default:
}
return s[3]
}
;
return _383;
});
case 21:
_ret = LgenerateObjectLiteral = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _58, _59, LobjectBody, _60;
function _385(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _57;
function _387(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LgenerateProperty(Li, Lenv, Lctx, Ldef));
case 1:
_57 = _ret
default:
}
return s[3]
}
;
return _387;
})));
case 1:
_58 = _ret;
case 2:
_ret = lix(s, (function (_388, _389) {
if (typeof _388.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _388.join.apply(_388, arguments);
} else if (_388.join !== undefined) {
if (_389 === undefined) {
return function (_ret) {
return _388.join;
}
}
return function (_ret) {
_388.join = _389;
}
}})(_58, ",\n"));
case 3:
_59 = _ret;
case 4:
_ret = LobjectBody = _59;
case 5:
_ret = lix(s, Ljoin(["{\n", LobjectBody, "\n}"]));
case 6:
_60 = _ret
default:
}
return s[3]
}
;
return _385;
});
case 22:
_ret = LtransformVarName = (function (Lname) {
var Larguments = arguments, defer_stack = [];
var _ret, _61, _62, _63, _64, _66, _67, _68, _69, _70, _71, _72, _73, _74, _65;
function _393(s) {
switch (s[2]) {
case 0:
_61 = false;
case 1:
_ret = _62 = Lname = '_require(require)'
default:
}
return s[3]
}
;
function _394(s) {
switch (s[2]) {
case 0:
_61 = false;
case 1:
_ret = _62 = Lname = '_defer(defer_stack)'
default:
}
return s[3]
}
;
function _395(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lname, 'undefined'));
case 1:
_68 = _ret;
case 2:
_67 = _68
default:
}
return s[3]
}
;
function _396(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lname, 'null'));
case 1:
_70 = _ret;
case 2:
_69 = _70
default:
}
return s[3]
}
;
function _397(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lname, 'true'));
case 1:
_72 = _ret;
case 2:
_71 = _72
default:
}
return s[3]
}
;
function _398(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lname, 'false'));
case 1:
_74 = _ret;
case 2:
_73 = _74
default:
}
return s[3]
}
;
function _399(s) {
switch (s[2]) {
case 0:
_61 = false;
case 1:
_ret = lix(s, L__add__('L', Lname));
case 2:
_65 = _ret;
case 3:
_ret = _62 = Lname = _65
default:
}
return s[3]
}
;
function _392(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_61 = _ret;
case 2:
_ret = null;
case 3:
_62 = _ret;
case 4:
_ret = lix(s, L__eq__(Lname, 'require'));
case 5:
_63 = _ret;
case 6:
if ((_61 && _63)) {
_393
};
case 7:
_ret = lix(s, L__eq__(Lname, 'defer'));
case 8:
_64 = _ret;
case 9:
if ((_61 && _64)) {
_394
};
case 10:
_ret = lix(s, L__ne__(Lname, 'exports'));
case 11:
_66 = _ret;
case 12:
_ret = _66;
case 13:
_67 = _ret;
case 14:
if (_67) {
_395
};
case 15:
_ret = _67;
case 16:
_69 = _ret;
case 17:
if (_69) {
_396
};
case 18:
_ret = _69;
case 19:
_71 = _ret;
case 20:
if (_71) {
_397
};
case 21:
_ret = _71;
case 22:
_73 = _ret;
case 23:
if (_73) {
_398
};
case 24:
if ((_61 && _73)) {
_399
};
case 25:
_ret = Lname
default:
}
return s[3]
}
;
return _392;
});
case 23:
_ret = LgetVarName = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var _ret, _75, _76, _78, _77, _80, _79;
function _402(s) {
switch (s[2]) {
case 0:
_75 = false;
case 1:
_ret = lix(s, LgenerateAtomic(Lexpr, {

}, Lctx0));
case 2:
_77 = _ret;
case 3:
_ret = _76 = _77
default:
}
return s[3]
}
;
function _403(s) {
switch (s[2]) {
case 0:
_75 = false;
case 1:
_ret = lix(s, LgetVarName(Lexpr[0]));
case 2:
_79 = _ret;
case 3:
_ret = _76 = _79
default:
}
return s[3]
}
;
function _401(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_75 = _ret;
case 2:
_ret = null;
case 3:
_76 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 5:
_78 = _ret;
case 6:
if ((_75 && _78)) {
_402
};
case 7:
_ret = lix(s, L__eq__(Lexpr[1], '{.}'));
case 8:
_80 = _ret;
case 9:
if ((_75 && _80)) {
_403
}
default:
}
return s[3]
}
;
return _401;
});
case 24:
_ret = LgenerateField = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _81, _82, _85, _83, _84, _88, _86, _87;
function _406(s) {
switch (s[2]) {
case 0:
_81 = false;
case 1:
_ret = lix(s, LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef));
case 2:
_83 = _ret;
case 3:
_ret = lix(s, L__add__('.', _83));
case 4:
_84 = _ret;
case 5:
_ret = _82 = _84
default:
}
return s[3]
}
;
function _407(s) {
switch (s[2]) {
case 0:
_81 = false;
case 1:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 2:
_86 = _ret;
case 3:
_ret = lix(s, Ljoin(['[', _86, ']']));
case 4:
_87 = _ret;
case 5:
_ret = _82 = _87
default:
}
return s[3]
}
;
function _405(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_81 = _ret;
case 2:
_ret = null;
case 3:
_82 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 5:
_85 = _ret;
case 6:
if ((_81 && _85)) {
_406
};
case 7:
_ret = lix(s, L__eq__(Lexpr[1], '{index}'));
case 8:
_88 = _ret;
case 9:
if ((_81 && _88)) {
_407
}
default:
}
return s[3]
}
;
return _405;
});
case 25:
_ret = LgenerateFieldAccess = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _89, _90, _92, _91, _96, _93, Lobj, _94, Lfield, _95;
function _410(s) {
switch (s[2]) {
case 0:
_89 = false;
case 1:
_ret = lix(s, LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef));
case 2:
_91 = _ret;
case 3:
_ret = _90 = _91
default:
}
return s[3]
}
;
function _411(s) {
switch (s[2]) {
case 0:
_89 = false;
case 1:
_ret = lix(s, LgenerateFieldAccess(Lexpr[0], Lenv, Lctx, Ldef));
case 2:
_93 = _ret;
case 3:
_ret = Lobj = _93;
case 4:
_ret = lix(s, LgenerateField(Lexpr[2], Lenv, Lctx, Ldef));
case 5:
_94 = _ret;
case 6:
_ret = Lfield = _94;
case 7:
_ret = lix(s, L__add__(Lobj, Lfield));
case 8:
_95 = _ret;
case 9:
_ret = _90 = _95
default:
}
return s[3]
}
;
function _409(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_89 = _ret;
case 2:
_ret = null;
case 3:
_90 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 5:
_92 = _ret;
case 6:
if ((_89 && _92)) {
_410
};
case 7:
_ret = lix(s, L__eq__(Lexpr[1], '{.}'));
case 8:
_96 = _ret;
case 9:
if ((_89 && _96)) {
_411
}
default:
}
return s[3]
}
;
return _409;
});
case 26:
_ret = LgenerateArray = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _98, _99, LarrayBody, _100;
function _413(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _97;
function _415(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Li, Lenv, Lctx, Ldef));
case 1:
_97 = _ret
default:
}
return s[3]
}
;
return _415;
})));
case 1:
_98 = _ret;
case 2:
_ret = lix(s, (function (_416, _417) {
if (typeof _416.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _416.join.apply(_416, arguments);
} else if (_416.join !== undefined) {
if (_417 === undefined) {
return function (_ret) {
return _416.join;
}
}
return function (_ret) {
_416.join = _417;
}
}})(_98, ', '));
case 3:
_99 = _ret;
case 4:
_ret = LarrayBody = _99;
case 5:
_ret = lix(s, Ljoin(['[', LarrayBody, ']']));
case 6:
_100 = _ret
default:
}
return s[3]
}
;
return _413;
});
case 27:
_ret = LgenerateMethod = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments, defer_stack = [];
var _ret, _101, LlocalVarName, _102, LlocalValueName, _103, LmethodName, _104, Lmethod, _105, LtmpVar, _106;
function _420(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LgetUniqVarName));
case 1:
_101 = _ret;
case 2:
_ret = LlocalVarName = _101;
case 3:
_ret = lix(s, Lcall(LgetUniqVarName));
case 4:
_102 = _ret;
case 5:
_ret = LlocalValueName = _102;
case 6:
_ret = lix(s, LgenerateField(Lexpr[0], Lenv, Lctx0));
case 7:
_103 = _ret;
case 8:
_ret = LmethodName = _103;
case 9:
_ret = lix(s, L__add__(LlocalVarName, LmethodName));
case 10:
_104 = _ret;
case 11:
_ret = Lmethod = _104;
case 12:
_ret = lix(s, Lcall(LgetUniqVarName));
case 13:
_105 = _ret;
case 14:
_ret = LtmpVar = _105;
case 15:
_ret = lix(s, Ljoin(["(function (", LlocalVarName, ", ", LlocalValueName, ") {\n", "if (typeof ", Lmethod, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", Lmethod, ".apply(", LlocalVarName, ", arguments);\n", "} else if (", Lmethod, " !== undefined) {\n", "if (", LlocalValueName, " === undefined) {\n", "return function (_ret) {\n", "return ", Lmethod, ';\n', "}\n", "}\n", "return function (_ret) {\n", Lmethod, " = ", LlocalValueName, ";\n", "}\n", "}", "})"]));
case 16:
_106 = _ret
default:
}
return s[3]
}
;
return _420;
});
case 28:
_ret = LgenerateWhile = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _107, _108, _109, _110;
function _422(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_107 = _ret;
case 2:
_ret = lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 3:
_108 = _ret;
case 4:
_ret = lix(s, Lctx(_108, true));
case 5:
_109 = _ret;
case 6:
_ret = lix(s, Ljoin(['while (', _107, ') {\n', _109, "\n}"]));
case 7:
_110 = _ret
default:
}
return s[3]
}
;
return _422;
});
case 29:
_ret = LgenerateBreak = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments, defer_stack = [];
;
function _424(s) {
switch (s[2]) {
case 0:
_ret = 'break'
default:
}
return s[3]
}
;
return _424;
});
case 30:
_ret = LgenerateEmpty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
;
function _426(s) {
switch (s[2]) {
case 0:
_ret = ""
default:
}
return s[3]
}
;
return _426;
});
case 31:
_ret = LgenerateDef = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _111, Lvarname, _112, _113, _114, Lret;
function _428(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LgetVarName(Lexpr[0]));
case 1:
_111 = _ret;
case 2:
_ret = Lvarname = _111;
case 3:
_ret = lix(s, Ldef.defineVar(Lvarname));
case 4:
_112 = _ret;
case 5:
_ret = lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 6:
_113 = _ret;
case 7:
_ret = lix(s, Ljoin([Lvarname, ' = ', _113]));
case 8:
_114 = _ret;
case 9:
_ret = Lret = _114;
case 10:
_ret = Lenv[Lvarname] = true;
case 11:
_ret = Lret
default:
}
return s[3]
}
;
return _428;
});
case 32:
_ret = LgenerateAssign = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _115, Lvarname, _116, _117, _120, _121, _122, _118, _119, _123, _124, Lvalue, _125;
function _431(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lvarname, LseqFuncParamsName.ret));
case 1:
_122 = _ret;
case 2:
_121 = _122
default:
}
return s[3]
}
;
function _432(s) {
switch (s[2]) {
case 0:
_116 = false;
case 1:
_ret = lix(s, Lconsole.log(Lvarname));
case 2:
_118 = _ret;
case 3:
_ret = lix(s, Lconsole.log("this var is undefined"));
case 4:
_119 = _ret;
case 5:
_ret = _117 = _119
default:
}
return s[3]
}
;
function _430(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LgetVarName(Lexpr[0]));
case 1:
_115 = _ret;
case 2:
_ret = Lvarname = _115;
case 3:
_ret = true;
case 4:
_116 = _ret;
case 5:
_ret = null;
case 6:
_117 = _ret;
case 7:
_ret = lix(s, L__eq__(Lenv[Lvarname], undefined));
case 8:
_120 = _ret;
case 9:
_ret = _120;
case 10:
_121 = _ret;
case 11:
if (_121) {
_431
};
case 12:
if ((_116 && _121)) {
_432
};
case 13:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef));
case 14:
_123 = _ret;
case 15:
_ret = Lvarname = _123;
case 16:
_ret = lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 17:
_124 = _ret;
case 18:
_ret = Lvalue = _124;
case 19:
_ret = lix(s, Ljoin([Lvarname, " = ", Lvalue]));
case 20:
_125 = _ret
default:
}
return s[3]
}
;
return _430;
});
case 33:
_ret = LgenerateFunc = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _126, LfuncEnv, _127, Largs, _128, LtmpVar, _129, Ldef, _130, Lbody, _131, _132, _133, _134;
function _434(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lenv_new(Lenv));
case 1:
_126 = _ret;
case 2:
_ret = LfuncEnv = _126;
case 3:
_ret = lix(s, LgenerateFuncArgs(Lexpr[0], LfuncEnv, Lctx0));
case 4:
_127 = _ret;
case 5:
_ret = Largs = _127;
case 6:
_ret = lix(s, Lcall(LgetUniqVarName));
case 7:
_128 = _ret;
case 8:
_ret = LtmpVar = _128;
case 9:
_ret = lix(s, Lcall(LGenerateDefNew));
case 10:
_129 = _ret;
case 11:
_ret = Ldef = _129;
case 12:
_ret = lix(s, Lgenerate(Lexpr[2], LfuncEnv, Lctx0, Ldef));
case 13:
_130 = _ret;
case 14:
_ret = Lbody = _130;
case 15:
_ret = lix(s, LtransformVarName('arguments'));
case 16:
_131 = _ret;
case 17:
_ret = lix(s, Lcall(Ldef.defineVar));
case 18:
_132 = _ret;
case 19:
_ret = lix(s, Lcall(Ldef.appendExpr));
case 20:
_133 = _ret;
case 21:
_ret = lix(s, (function (_435, _436) {
if (typeof _435.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _435.join.apply(_435, arguments);
} else if (_435.join !== undefined) {
if (_436 === undefined) {
return function (_ret) {
return _435.join;
}
}
return function (_ret) {
_435.join = _436;
}
}})(['(function (', Largs, ') {\n', 'var ', _131, ' = arguments, defer_stack = [];\n', _132, ";\n", _133, ";\n", 'return ', Lbody, ";\n", '})'], ''));
case 22:
_134 = _ret
default:
}
return s[3]
}
;
return _434;
});
case 34:
_ret = LgenerateExpr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _135, Lfunc, _136, Largs, _142, _143, _144;
function _439(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Lexpr[1], Lenv, Lctx0, Ldef));
case 1:
_135 = _ret;
case 2:
_ret = Lfunc = _135;
case 3:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef));
case 4:
_136 = _ret;
case 5:
_ret = Largs = _136;
case 6:
_ret = lix(s, Lforeach(Lexpr, (function (Litem, Lindex) {
var Larguments = arguments, defer_stack = [];
var _ret, _137, _138, _141, _139, _140;
function _442(s) {
switch (s[2]) {
case 0:
_137 = false;
case 1:
_ret = lix(s, Lgenerate(Litem, Lenv, Lctx0, Ldef));
case 2:
_139 = _ret;
case 3:
_ret = lix(s, Ljoin([Largs, ', ', _139]));
case 4:
_140 = _ret;
case 5:
_ret = _138 = Largs = _140
default:
}
return s[3]
}
;
function _441(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_137 = _ret;
case 2:
_ret = null;
case 3:
_138 = _ret;
case 4:
_ret = lix(s, L__gt__(Lindex, 1));
case 5:
_141 = _ret;
case 6:
if ((_137 && _141)) {
_442
}
default:
}
return s[3]
}
;
return _441;
})));
case 7:
_142 = _ret;
case 8:
_ret = lix(s, Ljoin(['lix(s, ', Lfunc, '(', Largs, '))']));
case 9:
_143 = _ret;
case 10:
_ret = lix(s, Lctx(_143));
case 11:
_144 = _ret
default:
}
return s[3]
}
;
return _439;
});
case 35:
_ret = LGenerateDefNew = (function () {
var Larguments = arguments, defer_stack = [];
var Lvars, Lfuncs;
function _444(s) {
switch (s[2]) {
case 0:
_ret = Lvars = {

};
case 1:
_ret = Lfuncs = [];
case 2:
_ret = {
defineVar: (function (Lv) {
var Larguments = arguments, defer_stack = [];
var _ret, _145, _146, _147, Lvecs, _148, _149, _152, _150, _151;
function _447(s) {
switch (s[2]) {
case 0:
_145 = false;
case 1:
_ret = _146 = Lvars[Lv] = Lv
default:
}
return s[3]
}
;
function _451(s) {
switch (s[2]) {
case 0:
_148 = false;
case 1:
_ret = lix(s, (function (_452, _453) {
if (typeof _452.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _452.join.apply(_452, arguments);
} else if (_452.join !== undefined) {
if (_453 === undefined) {
return function (_ret) {
return _452.join;
}
}
return function (_ret) {
_452.join = _453;
}
}})(Lvecs, ', '));
case 2:
_150 = _ret;
case 3:
_ret = lix(s, L__add__('var ', _150));
case 4:
_151 = _ret;
case 5:
_ret = _149 = _151
default:
}
return s[3]
}
;
function _455(s) {
switch (s[2]) {
case 0:
_ret = _149 = ''
default:
}
return s[3]
}
;
function _448(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lvars, (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _450(s) {
switch (s[2]) {
case 0:
_ret = Li
default:
}
return s[3]
}
;
return _450;
})));
case 1:
_147 = _ret;
case 2:
_ret = Lvecs = _147;
case 3:
_ret = true;
case 4:
_148 = _ret;
case 5:
_ret = null;
case 6:
_149 = _ret;
case 7:
_ret = lix(s, L__gt__(Lvecs.length, 0));
case 8:
_152 = _ret;
case 9:
if ((_148 && _152)) {
_451
};
case 10:
if (_148) {
_455
};
case 11:
_ret = _146 = _149
default:
}
return s[3]
}
;
function _446(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_145 = _ret;
case 2:
_ret = null;
case 3:
_146 = _ret;
case 4:
if ((_145 && Lv)) {
_447
};
case 5:
if (_145) {
_448
}
default:
}
return s[3]
}
;
return _446;
}),
appendExpr: (function (Lv) {
var Larguments = arguments, defer_stack = [];
var _ret, _153, _154, _155, _156;
function _458(s) {
switch (s[2]) {
case 0:
_153 = false;
case 1:
_ret = lix(s, (function (_459, _460) {
if (typeof _459.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _459.push.apply(_459, arguments);
} else if (_459.push !== undefined) {
if (_460 === undefined) {
return function (_ret) {
return _459.push;
}
}
return function (_ret) {
_459.push = _460;
}
}})(Lfuncs, Lv));
case 2:
_155 = _ret;
case 3:
_ret = _154 = _155
default:
}
return s[3]
}
;
function _462(s) {
switch (s[2]) {
case 0:
_ret = lix(s, (function (_463, _464) {
if (typeof _463.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _463.join.apply(_463, arguments);
} else if (_463.join !== undefined) {
if (_464 === undefined) {
return function (_ret) {
return _463.join;
}
}
return function (_ret) {
_463.join = _464;
}
}})(Lfuncs, ';\n'));
case 1:
_156 = _ret;
case 2:
_ret = _154 = _156
default:
}
return s[3]
}
;
function _457(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_153 = _ret;
case 2:
_ret = null;
case 3:
_154 = _ret;
case 4:
if ((_153 && Lv)) {
_458
};
case 5:
if (_153) {
_462
}
default:
}
return s[3]
}
;
return _457;
})
}
default:
}
return s[3]
}
;
return _444;
});
case 36:
_ret = LgenerateStart = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _157, Ldef, _158, Lbody, _159, _160, _161, _162;
function _467(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LGenerateDefNew));
case 1:
_157 = _ret;
case 2:
_ret = Ldef = _157;
case 3:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 4:
_158 = _ret;
case 5:
_ret = Lbody = _158;
case 6:
_ret = lix(s, Ljoin(['module.exports = ', Lbody, '\n']));
case 7:
_159 = _ret;
case 8:
_ret = Lbody = _159;
case 9:
_ret = lix(s, Lcall(Ldef.defineVar));
case 10:
_160 = _ret;
case 11:
_ret = lix(s, Lcall(Ldef.appendExpr));
case 12:
_161 = _ret;
case 13:
_ret = lix(s, Ljoin([_160, ";\n", _161, ";\n", Lbody]));
case 14:
_162 = _ret
default:
}
return s[3]
}
;
return _467;
});
case 37:
_ret = LgenerateMono = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _163;
function _469(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_163 = _ret
default:
}
return s[3]
}
;
return _469;
});
case 38:
_ret = LgeneratePathItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _164;
function _471(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Ljoin(['"', Lexpr[0], '"']));
case 1:
_164 = _ret
default:
}
return s[3]
}
;
return _471;
});
case 39:
_ret = LgeneratePathArgItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _165, _166;
function _473(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_165 = _ret;
case 2:
_ret = lix(s, Ljoin(['("', Lexpr[2], '" + ', _165, ')']));
case 3:
_166 = _ret
default:
}
return s[3]
}
;
return _473;
});
case 40:
_ret = LgeneratePath = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _168, _169, Lpath, _170;
function _475(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _167;
function _477(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lgenerate(Li, Lenv, Lctx, Ldef));
case 1:
_167 = _ret
default:
}
return s[3]
}
;
return _477;
})));
case 1:
_168 = _ret;
case 2:
_ret = lix(s, (function (_478, _479) {
if (typeof _478.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _478.join.apply(_478, arguments);
} else if (_478.join !== undefined) {
if (_479 === undefined) {
return function (_ret) {
return _478.join;
}
}
return function (_ret) {
_478.join = _479;
}
}})(_168, ','));
case 3:
_169 = _ret;
case 4:
_ret = Lpath = _169;
case 5:
_ret = lix(s, Ljoin(['[', Lpath, '].join("/")']));
case 6:
_170 = _ret
default:
}
return s[3]
}
;
return _475;
});
case 41:
_ret = LgenerateModule = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _171, Lname, LmoduleExpr;
function _482(s) {
switch (s[2]) {
case 0:
_ret = lix(s, (function (_483, _484) {
if (typeof _483.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _483.join.apply(_483, arguments);
} else if (_483.join !== undefined) {
if (_484 === undefined) {
return function (_ret) {
return _483.join;
}
}
return function (_ret) {
_483.join = _484;
}
}})(['"', Lexpr[0], '"'], ''));
case 1:
_171 = _ret;
case 2:
_ret = Lname = [_171, '{atomic}'];
case 3:
_ret = LmoduleExpr = [Lname, ['module', '{atomic}', '{var}']]
default:
}
return s[3]
}
;
return _482;
});
case 42:
_ret = LgenerateOpTable = {
'{start}': LgenerateStart,
'{seq}': LgenerateSeq,
'{mono}': LgenerateMono,
'{atomic}': LgenerateAtomic,
'{.}': LgenerateFieldAccess,
'{module}': LgenerateModule,
'{func}': LgenerateFunc,
'{array}': LgenerateArray,
'{object}': LgenerateObjectLiteral,
'{method}': LgenerateMethod,
'{empty}': LgenerateEmpty,
'{path}': LgeneratePath,
'{path_item}': LgeneratePathItem,
'{path_arg_item}': LgeneratePathArgItem,
':=': LgenerateDef,
'=': LgenerateAssign,
'if': LgenerateIf,
'and': LgenerateAnd,
'or': LgenerateOr,
'while': LgenerateWhile,
'break': LgenerateBreak
};
case 43:
_ret = LgenerateOp = (function (Lhint) {
var Larguments = arguments, defer_stack = [];
var _ret, _172, _173;
function _488(s) {
switch (s[2]) {
case 0:
_172 = false;
case 1:
_ret = _173 = LgenerateOpTable[Lhint]
default:
}
return s[3]
}
;
function _489(s) {
switch (s[2]) {
case 0:
_ret = _173 = LgenerateExpr
default:
}
return s[3]
}
;
function _487(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_172 = _ret;
case 2:
_ret = null;
case 3:
_173 = _ret;
case 4:
if ((_172 && LgenerateOpTable[Lhint])) {
_488
};
case 5:
if (_172) {
_489
}
default:
}
return s[3]
}
;
return _487;
});
case 44:
_ret = Lgenerate = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var _ret, _174, _175;
function _491(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LgenerateOp(Lexpr[1]));
case 1:
_174 = _ret;
case 2:
_ret = lix(s, _174(Lexpr, Lenv, Lctx, Ldef));
case 3:
_175 = _ret
default:
}
return s[3]
}
;
return _491;
});
case 45:
_ret = Lenv0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
case 46:
_ret = Lenv_new = (function (Lenv) {
var Larguments = arguments, defer_stack = [];
var _ret, _176, LEnv, _177;
function _494(s) {
switch (s[2]) {
case 0:
_176 = Lenv0
default:
}
return s[3]
}
;
function _493(s) {
switch (s[2]) {
case 0:
_ret = Lenv;
case 1:
_176 = _ret;
case 2:
if (_176) {

} else {
_494
};
case 3:
_ret = Lenv = _176;
case 4:
_ret = LEnv = (function () {
var Larguments = arguments, defer_stack = [];
;
function _496(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
return _496;
});
case 5:
_ret = LEnv.prototype = Lenv;
case 6:
_ret = lix(s, L_instance_(LEnv));
case 7:
_177 = _ret
default:
}
return s[3]
}
;
return _493;
});
case 47:
_ret = LflattenExpr = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _179, _180;
function _498(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr, (function (Litem) {
var Larguments = arguments, defer_stack = [];
var _ret, _178;
function _500(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Litem, Ldefine));
case 1:
_178 = _ret
default:
}
return s[3]
}
;
return _500;
})));
case 1:
_179 = _ret;
case 2:
_ret = lix(s, Ldefine(_179));
case 3:
_180 = _ret
default:
}
return s[3]
}
;
return _498;
});
case 48:
_ret = LflattenBreak = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
;
function _502(s) {
switch (s[2]) {
case 0:
_ret = Lexpr
default:
}
return s[3]
}
;
return _502;
});
case 49:
_ret = LflattenWhile = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _181, LwhileDefine, _182, _183, _184, _185, _186, _188, _189;
function _504(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_181 = _ret;
case 2:
_ret = LwhileDefine = _181;
case 3:
_ret = lix(s, Lflatten(Lexpr[0], LwhileDefine));
case 4:
_182 = _ret;
case 5:
_ret = Lexpr[0] = _182;
case 6:
_ret = lix(s, Lflatten(Lexpr[2], Ldefine0));
case 7:
_183 = _ret;
case 8:
_ret = Lexpr[2] = _183;
case 9:
_ret = lix(s, Lcall(LwhileDefine));
case 10:
_184 = _ret;
case 11:
_ret = lix(s, (function (_505, _506) {
if (typeof _505.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _505.concat.apply(_505, arguments);
} else if (_505.concat !== undefined) {
if (_506 === undefined) {
return function (_ret) {
return _505.concat;
}
}
return function (_ret) {
_505.concat = _506;
}
}})(Lexpr[2][0], _184));
case 12:
_185 = _ret;
case 13:
_ret = Lexpr[2][0] = _185;
case 14:
_ret = lix(s, Lcall(LwhileDefine));
case 15:
_186 = _ret;
case 16:
_ret = lix(s, Lforeach(_186, (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _187;
function _509(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Ldefine(Li, true));
case 1:
_187 = _ret
default:
}
return s[3]
}
;
return _509;
})));
case 17:
_188 = _ret;
case 18:
_ret = lix(s, Ldefine(Lexpr, true));
case 19:
_189 = _ret;
case 20:
_ret = ['undefined', '{atomic}']
default:
}
return s[3]
}
;
return _504;
});
case 50:
_ret = LflattenOr = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _190, Lret, _191, _192, _194, _193, LgetAndOpSeq, _199, _200;
function _512(s) {
switch (s[2]) {
case 0:
_191 = false;
case 1:
_ret = lix(s, Ldefine(Lret));
case 2:
_193 = _ret;
case 3:
_ret = _192 = Lret = _193
default:
}
return s[3]
}
;
function _511(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_190 = _ret;
case 2:
_ret = Lret = _190;
case 3:
_ret = true;
case 4:
_191 = _ret;
case 5:
_ret = null;
case 6:
_192 = _ret;
case 7:
_ret = lix(s, L__ne__(Lret[2], 'var'));
case 8:
_194 = _ret;
case 9:
if ((_191 && _194)) {
_512
};
case 10:
_ret = LgetAndOpSeq = (function () {
var Larguments = arguments, defer_stack = [];
var _ret, _195, LAndDefine, _196, LseqRet, _197, Lseq, _198;
function _514(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_195 = _ret;
case 2:
_ret = LAndDefine = _195;
case 3:
_ret = lix(s, Lflatten(Lexpr[2], LAndDefine));
case 4:
_196 = _ret;
case 5:
_ret = LseqRet = _196;
case 6:
_ret = lix(s, Lcall(LAndDefine));
case 7:
_197 = _ret;
case 8:
_ret = Lseq = _197;
case 9:
_ret = lix(s, (function (_515, _516) {
if (typeof _515.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _515.push.apply(_515, arguments);
} else if (_515.push !== undefined) {
if (_516 === undefined) {
return function (_ret) {
return _515.push;
}
}
return function (_ret) {
_515.push = _516;
}
}})(Lseq, [Lret, '=', LseqRet]));
case 10:
_198 = _ret;
case 11:
_ret = [Lseq, '{seq}']
default:
}
return s[3]
}
;
return _514;
});
case 11:
_ret = lix(s, Lcall(LgetAndOpSeq));
case 12:
_199 = _ret;
case 13:
_ret = lix(s, Ldefine([[[Lret, [[], '{empty}']], [_199, 'else']], 'if'], true));
case 14:
_200 = _ret;
case 15:
_ret = Lret
default:
}
return s[3]
}
;
return _511;
});
case 51:
_ret = LflattenAnd = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _201, Lret, _202, _203, _205, _204, LgetAndOpSeq, _210, _211;
function _520(s) {
switch (s[2]) {
case 0:
_202 = false;
case 1:
_ret = lix(s, Ldefine(Lret));
case 2:
_204 = _ret;
case 3:
_ret = _203 = Lret = _204
default:
}
return s[3]
}
;
function _519(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_201 = _ret;
case 2:
_ret = Lret = _201;
case 3:
_ret = true;
case 4:
_202 = _ret;
case 5:
_ret = null;
case 6:
_203 = _ret;
case 7:
_ret = lix(s, L__ne__(Lret[2], 'var'));
case 8:
_205 = _ret;
case 9:
if ((_202 && _205)) {
_520
};
case 10:
_ret = LgetAndOpSeq = (function () {
var Larguments = arguments, defer_stack = [];
var _ret, _206, LAndDefine, _207, LseqRet, _208, Lseq, _209;
function _522(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_206 = _ret;
case 2:
_ret = LAndDefine = _206;
case 3:
_ret = lix(s, Lflatten(Lexpr[2], LAndDefine));
case 4:
_207 = _ret;
case 5:
_ret = LseqRet = _207;
case 6:
_ret = lix(s, Lcall(LAndDefine));
case 7:
_208 = _ret;
case 8:
_ret = Lseq = _208;
case 9:
_ret = lix(s, (function (_523, _524) {
if (typeof _523.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _523.push.apply(_523, arguments);
} else if (_523.push !== undefined) {
if (_524 === undefined) {
return function (_ret) {
return _523.push;
}
}
return function (_ret) {
_523.push = _524;
}
}})(Lseq, [Lret, '=', LseqRet]));
case 10:
_209 = _ret;
case 11:
_ret = [Lseq, '{seq}']
default:
}
return s[3]
}
;
return _522;
});
case 11:
_ret = lix(s, Lcall(LgetAndOpSeq));
case 12:
_210 = _ret;
case 13:
_ret = lix(s, Ldefine([[[Lret, _210]], 'if'], true));
case 14:
_211 = _ret;
case 15:
_ret = Lret
default:
}
return s[3]
}
;
return _519;
});
case 52:
_ret = L_flattenIf = (function (Lexpr, Ldefine, LtmpVar, Lctx) {
var Larguments = arguments, defer_stack = [];
var _ret, _224;
function _527(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lforeach(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _212, _213, _216, _214, LelseSeq, _215, _219, _217, _218, _220, LifSeq, _221, _222, Lcond, _223;
function _530(s) {
switch (s[2]) {
case 0:
_212 = false;
case 1:
_ret = lix(s, Lflatten(Li[0], Ldefine0, Lctx));
case 2:
_214 = _ret;
case 3:
_ret = LelseSeq = _214;
case 4:
_ret = lix(s, Ldefine([[[LtmpVar, LelseSeq]], 'if'], true));
case 5:
_215 = _ret;
case 6:
_ret = _213 = _215
default:
}
return s[3]
}
;
function _531(s) {
switch (s[2]) {
case 0:
_212 = false;
case 1:
_ret = lix(s, L_flattenIf(Li, Ldefine, LtmpVar, Lctx));
case 2:
_217 = _ret;
case 3:
_ret = lix(s, Ldefine(_217));
case 4:
_218 = _ret;
case 5:
_ret = _213 = _218
default:
}
return s[3]
}
;
function _532(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Li[1], Ldefine0, Lctx));
case 1:
_220 = _ret;
case 2:
_ret = LifSeq = _220;
case 3:
_ret = lix(s, (function (_533, _534) {
if (typeof _533.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _533.unshift.apply(_533, arguments);
} else if (_533.unshift !== undefined) {
if (_534 === undefined) {
return function (_ret) {
return _533.unshift;
}
}
return function (_ret) {
_533.unshift = _534;
}
}})(LifSeq[0], [LtmpVar, '=', ['false', '{atomic}']]));
case 4:
_221 = _ret;
case 5:
_ret = lix(s, Lflatten(Li[0], Ldefine));
case 6:
_222 = _ret;
case 7:
_ret = Lcond = _222;
case 8:
_ret = Lcond = [LtmpVar, 'and', Lcond];
case 9:
_ret = lix(s, Ldefine([[[Lcond, LifSeq]], 'if'], true));
case 10:
_223 = _ret;
case 11:
_ret = _213 = _223
default:
}
return s[3]
}
;
function _529(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_212 = _ret;
case 2:
_ret = null;
case 3:
_213 = _ret;
case 4:
_ret = lix(s, L__eq__(Li[1], 'else'));
case 5:
_216 = _ret;
case 6:
if ((_212 && _216)) {
_530
};
case 7:
_ret = lix(s, L__eq__(Li[1], 'if'));
case 8:
_219 = _ret;
case 9:
if ((_212 && _219)) {
_531
};
case 10:
if (_212) {
_532
}
default:
}
return s[3]
}
;
return _529;
})));
case 1:
_224 = _ret
default:
}
return s[3]
}
;
return _527;
});
case 53:
_ret = LflattenIf = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _225, LtmpVar, _226, LretVar, Lctx, _227;
function _537(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Ldefine(['true', '{atomic}']));
case 1:
_225 = _ret;
case 2:
_ret = LtmpVar = _225;
case 3:
_ret = lix(s, Ldefine(['null', '{atomic}']));
case 4:
_226 = _ret;
case 5:
_ret = LretVar = _226;
case 6:
_ret = Lctx = (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _539(s) {
switch (s[2]) {
case 0:
_ret = [LretVar, '=', Li]
default:
}
return s[3]
}
;
return _539;
});
case 7:
_ret = lix(s, L_flattenIf(Lexpr, Ldefine, LtmpVar, Lctx));
case 8:
_227 = _ret;
case 9:
_ret = LretVar
default:
}
return s[3]
}
;
return _537;
});
case 54:
_ret = LflattenAssign = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _228;
function _541(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[2], Ldefine));
case 1:
_228 = _ret;
case 2:
_ret = Lexpr[2] = _228;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _541;
});
case 55:
_ret = LflattenBasicOp = (function (Lexpr, LbuiltinOpName, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _229, _230, _234, LpartialExpr, Li, _231, _232, _233, _235;
function _545(s) {
switch (s[2]) {
case 0:
_ret = lix(s, (function (_546, _547) {
if (typeof _546.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _546.push.apply(_546, arguments);
} else if (_546.push !== undefined) {
if (_547 === undefined) {
return function (_ret) {
return _546.push;
}
}
return function (_ret) {
_546.push = _547;
}
}})(LpartialExpr, Lexpr[Li]));
case 1:
_232 = _ret;
case 2:
_ret = lix(s, L__add__(Li, 1));
case 3:
_233 = _ret;
case 4:
_ret = Li = _233;
case 5:
_ret = lix(s, L__lt__(Li, Lexpr.length));
case 6:
_231 = _ret
default:
}
return s[3]
}
;
function _544(s) {
switch (s[2]) {
case 0:
_229 = false;
case 1:
_ret = LpartialExpr = [Lexpr[2], ['__', '{atomic}', '{var}']];
case 2:
_ret = Li = 3;
case 3:
_ret = lix(s, L__lt__(Li, Lexpr.length));
case 4:
_231 = _ret;
case 5:
while (_231) {
_545
};
case 6:
_ret = undefined;
case 7:
_ret = _230 = Lexpr = [Lexpr[0], Lexpr[1], LpartialExpr]
default:
}
return s[3]
}
;
function _543(s) {
switch (s[2]) {
case 0:
_ret = Lexpr[1] = [LbuiltinOpName, '{atomic}', '{var}'];
case 1:
_ret = true;
case 2:
_229 = _ret;
case 3:
_ret = null;
case 4:
_230 = _ret;
case 5:
_ret = lix(s, L__gt__(Lexpr.length, 3));
case 6:
_234 = _ret;
case 7:
if ((_229 && _234)) {
_544
};
case 8:
_ret = lix(s, LflattenExpr(Lexpr, Ldefine));
case 9:
_235 = _ret
default:
}
return s[3]
}
;
return _543;
});
case 56:
_ret = LflattenBind = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _236;
function _550(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenBasicOp(Lexpr, '__bind__', Ldefine));
case 1:
_236 = _ret
default:
}
return s[3]
}
;
return _550;
});
case 57:
_ret = LflattenCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _237;
function _552(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenBasicOp(Lexpr, '__compose__', Ldefine));
case 1:
_237 = _ret
default:
}
return s[3]
}
;
return _552;
});
case 58:
_ret = LflattenReverseCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _238;
function _554(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenBasicOp(Lexpr, '__rcompose__', Ldefine));
case 1:
_238 = _ret
default:
}
return s[3]
}
;
return _554;
});
case 59:
_ret = LflattenReverseCPSCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _239;
function _556(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenBasicOp(Lexpr, '__rvcompose__', Ldefine));
case 1:
_239 = _ret
default:
}
return s[3]
}
;
return _556;
});
case 60:
_ret = LflattenCPSCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _240;
function _558(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenBasicOp(Lexpr, '__vcompose__', Ldefine));
case 1:
_240 = _ret
default:
}
return s[3]
}
;
return _558;
});
case 61:
_ret = LflattenDef = LflattenAssign;
case 62:
_ret = LflattenPathArgItem = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _241;
function _560(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_241 = _ret;
case 2:
_ret = Lexpr[0] = _241;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _560;
});
case 63:
_ret = LflattenPathItem = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
;
function _562(s) {
switch (s[2]) {
case 0:
_ret = Lexpr
default:
}
return s[3]
}
;
return _562;
});
case 64:
_ret = LflattenPath = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _243;
function _564(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _242;
function _566(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Li, Ldefine));
case 1:
_242 = _ret
default:
}
return s[3]
}
;
return _566;
})));
case 1:
_243 = _ret;
case 2:
_ret = Lexpr[0] = _243;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _564;
});
case 65:
_ret = LflattenEmpty = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
;
function _568(s) {
switch (s[2]) {
case 0:
_ret = Lexpr
default:
}
return s[3]
}
;
return _568;
});
case 66:
_ret = LflattenField = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _244, _245, _247, _246;
function _571(s) {
switch (s[2]) {
case 0:
_244 = false;
case 1:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 2:
_246 = _ret;
case 3:
_ret = _245 = Lexpr[0] = _246
default:
}
return s[3]
}
;
function _570(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_244 = _ret;
case 2:
_ret = null;
case 3:
_245 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[1], '{index}'));
case 5:
_247 = _ret;
case 6:
if ((_244 && _247)) {
_571
};
case 7:
_ret = Lexpr
default:
}
return s[3]
}
;
return _570;
});
case 67:
_ret = LflattenMethod = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _248;
function _573(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenField(Lexpr[0], Ldefine));
case 1:
_248 = _ret;
case 2:
_ret = Lexpr[0] = _248;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _573;
});
case 68:
_ret = LflattenProperty = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _249;
function _575(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[2], Ldefine));
case 1:
_249 = _ret;
case 2:
_ret = Lexpr[2] = _249;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _575;
});
case 69:
_ret = LflattenObjectLiteral = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _251;
function _577(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _250;
function _579(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenProperty(Li, Ldefine));
case 1:
_250 = _ret
default:
}
return s[3]
}
;
return _579;
})));
case 1:
_251 = _ret;
case 2:
_ret = Lexpr[0] = _251;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _577;
});
case 70:
_ret = LflattenArray = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _253;
function _581(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _252;
function _583(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Li, Ldefine));
case 1:
_252 = _ret
default:
}
return s[3]
}
;
return _583;
})));
case 1:
_253 = _ret;
case 2:
_ret = Lexpr[0] = _253;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _581;
});
case 71:
_ret = LflattenFunc = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _254;
function _585(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[2], Ldefine));
case 1:
_254 = _ret;
case 2:
_ret = Lexpr[2] = _254;
case 3:
_ret = Lexpr
default:
}
return s[3]
}
;
return _585;
});
case 72:
_ret = LflattenFieldAccess = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _255, _256, _259, _257, _258, _260;
function _588(s) {
switch (s[2]) {
case 0:
_255 = false;
case 1:
_ret = lix(s, LflattenFieldAccess(Lexpr[0], Ldefine));
case 2:
_257 = _ret;
case 3:
_ret = Lexpr[0] = _257;
case 4:
_ret = lix(s, LflattenField(Lexpr[2], Ldefine));
case 5:
_258 = _ret;
case 6:
_ret = _256 = Lexpr[2] = _258
default:
}
return s[3]
}
;
function _589(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr, Ldefine));
case 1:
_260 = _ret;
case 2:
_ret = _256 = Lexpr = _260
default:
}
return s[3]
}
;
function _587(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_255 = _ret;
case 2:
_ret = null;
case 3:
_256 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[1], '{.}'));
case 5:
_259 = _ret;
case 6:
if ((_255 && _259)) {
_588
};
case 7:
if (_255) {
_589
};
case 8:
_ret = Lexpr
default:
}
return s[3]
}
;
return _587;
});
case 73:
_ret = LflattenAtomic = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
;
function _591(s) {
switch (s[2]) {
case 0:
_ret = Lexpr
default:
}
return s[3]
}
;
return _591;
});
case 74:
_ret = LflattenMono = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _261;
function _593(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_261 = _ret
default:
}
return s[3]
}
;
return _593;
});
case 75:
_ret = LstatementFlattenGenerator = (function () {
var Larguments = arguments, defer_stack = [];
var Ldata;
function _595(s) {
switch (s[2]) {
case 0:
_ret = Ldata = [];
case 1:
_ret = (function (Lstatement, LtmpVarName) {
var Larguments = arguments, defer_stack = [];
var _ret, _262, _263, _264, _266, _265, _270, _267, LvarName, LlixVar, LtmpRet, _268, _269;
function _598(s) {
switch (s[2]) {
case 0:
_262 = false;
case 1:
_ret = _263 = Ldata
default:
}
return s[3]
}
;
function _599(s) {
switch (s[2]) {
case 0:
_262 = false;
case 1:
_ret = lix(s, (function (_600, _601) {
if (typeof _600.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _600.push.apply(_600, arguments);
} else if (_600.push !== undefined) {
if (_601 === undefined) {
return function (_ret) {
return _600.push;
}
}
return function (_ret) {
_600.push = _601;
}
}})(Ldata, Lstatement));
case 2:
_265 = _ret;
case 3:
_ret = _263 = _265
default:
}
return s[3]
}
;
function _603(s) {
switch (s[2]) {
case 0:
_262 = false;
case 1:
_ret = lix(s, Lcall(LgetUniqVarName));
case 2:
_267 = _ret;
case 3:
_ret = LvarName = _267;
case 4:
_ret = LlixVar = [LvarName, '{atomic}', '{var}', 'tmp'];
case 5:
_ret = LtmpRet = [LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
case 6:
_ret = lix(s, (function (_604, _605) {
if (typeof _604.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _604.push.apply(_604, arguments);
} else if (_604.push !== undefined) {
if (_605 === undefined) {
return function (_ret) {
return _604.push;
}
}
return function (_ret) {
_604.push = _605;
}
}})(Ldata, [LtmpRet, ':=', Lstatement]));
case 7:
_268 = _ret;
case 8:
_ret = lix(s, (function (_607, _608) {
if (typeof _607.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _607.push.apply(_607, arguments);
} else if (_607.push !== undefined) {
if (_608 === undefined) {
return function (_ret) {
return _607.push;
}
}
return function (_ret) {
_607.push = _608;
}
}})(Ldata, [LlixVar, ':=', LtmpRet]));
case 9:
_269 = _ret;
case 10:
_ret = _263 = LlixVar
default:
}
return s[3]
}
;
function _597(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_262 = _ret;
case 2:
_ret = null;
case 3:
_263 = _ret;
case 4:
_ret = lix(s, L__eq__(Lstatement, undefined));
case 5:
_264 = _ret;
case 6:
if ((_262 && _264)) {
_598
};
case 7:
_ret = lix(s, L__eq__(LtmpVarName, true));
case 8:
_266 = _ret;
case 9:
if ((_262 && _266)) {
_599
};
case 10:
_ret = lix(s, L__eq__(LtmpVarName, undefined));
case 11:
_270 = _ret;
case 12:
if ((_262 && _270)) {
_603
}
default:
}
return s[3]
}
;
return _597;
})
default:
}
return s[3]
}
;
return _595;
});
case 76:
_ret = LflattenSeq = (function (Lexpr, Ldefine, LseqCtx) {
var Larguments = arguments, defer_stack = [];
var Lret, Lctx, _ret, _304;
function _611(s) {
switch (s[2]) {
case 0:
_ret = Lret = [];
case 1:
_ret = Lctx = (function (Lstmt, Lindex) {
var Larguments = arguments, defer_stack = [];
var Lret, _ret, _271, _272, _274, _275, _276, _277, _273;
function _614(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LparseInt(Lindex));
case 1:
_275 = _ret;
case 2:
_ret = lix(s, L__sub__(Lexpr[0].length, 1));
case 3:
_276 = _ret;
case 4:
_ret = lix(s, L__eq__(_275, _276));
case 5:
_277 = _ret;
case 6:
_274 = _277
default:
}
return s[3]
}
;
function _615(s) {
switch (s[2]) {
case 0:
_271 = false;
case 1:
_ret = lix(s, LseqCtx(Lstmt));
case 2:
_273 = _ret;
case 3:
_ret = _272 = Lret = _273
default:
}
return s[3]
}
;
function _613(s) {
switch (s[2]) {
case 0:
_ret = Lret = Lstmt;
case 1:
_ret = true;
case 2:
_271 = _ret;
case 3:
_ret = null;
case 4:
_272 = _ret;
case 5:
_ret = LseqCtx;
case 6:
_274 = _ret;
case 7:
if (_274) {
_614
};
case 8:
if ((_271 && _274)) {
_615
};
case 9:
_ret = Lret
default:
}
return s[3]
}
;
return _613;
});
case 2:
_ret = lix(s, Lforeach(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments, defer_stack = [];
var _ret, _278, LexprDefine, _279, LitemRet, _280, _281, _282, LstmtRet, LisTmpVar, LisRealVar, LisRealExpr, _294, _295, _300, _301, _302, _303, _296, _297, _298, _299;
function _631(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LisTmpVar(LstmtRet));
case 1:
_302 = _ret;
case 2:
_ret = lix(s, Lnot(_302));
case 3:
_303 = _ret;
case 4:
_301 = _303
default:
}
return s[3]
}
;
function _633(s) {
switch (s[2]) {
case 0:
_296 = false;
case 1:
_ret = _297 = LstmtRet = [[LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', LstmtRet]
default:
}
return s[3]
}
;
function _632(s) {
switch (s[2]) {
case 0:
_294 = false;
case 1:
_ret = true;
case 2:
_296 = _ret;
case 3:
_ret = null;
case 4:
_297 = _ret;
case 5:
_ret = lix(s, LisRealExpr(LstmtRet));
case 6:
_298 = _ret;
case 7:
if ((_296 && _298)) {
_633
};
case 8:
_ret = lix(s, (function (_634, _635) {
if (typeof _634.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _634.push.apply(_634, arguments);
} else if (_634.push !== undefined) {
if (_635 === undefined) {
return function (_ret) {
return _634.push;
}
}
return function (_ret) {
_634.push = _635;
}
}})(Lret, LstmtRet));
case 9:
_299 = _ret;
case 10:
_ret = _295 = _299
default:
}
return s[3]
}
;
function _617(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_278 = _ret;
case 2:
_ret = LexprDefine = _278;
case 3:
_ret = lix(s, Lflatten(Litem, LexprDefine));
case 4:
_279 = _ret;
case 5:
_ret = LitemRet = _279;
case 6:
_ret = lix(s, Lcall(LexprDefine));
case 7:
_280 = _ret;
case 8:
_ret = lix(s, (function (_618, _619) {
if (typeof _618.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _618.concat.apply(_618, arguments);
} else if (_618.concat !== undefined) {
if (_619 === undefined) {
return function (_ret) {
return _618.concat;
}
}
return function (_ret) {
_618.concat = _619;
}
}})(Lret, _280));
case 9:
_281 = _ret;
case 10:
_ret = Lret = _281;
case 11:
_ret = lix(s, Lctx(LitemRet, Lindex));
case 12:
_282 = _ret;
case 13:
_ret = LstmtRet = _282;
case 14:
_ret = LisTmpVar = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var _ret, _283, _284, _285;
function _623(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lexpr[3], undefined));
case 1:
_285 = _ret;
case 2:
_284 = _285
default:
}
return s[3]
}
;
function _622(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 1:
_283 = _ret;
case 2:
_ret = _283;
case 3:
_284 = _ret;
case 4:
if (_284) {
_623
}
default:
}
return s[3]
}
;
return _622;
});
case 15:
_ret = LisRealVar = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var _ret, _286, _287, _288;
function _626(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__eq__(Lexpr[3], undefined));
case 1:
_288 = _ret;
case 2:
_287 = _288
default:
}
return s[3]
}
;
function _625(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 1:
_286 = _ret;
case 2:
_ret = _286;
case 3:
_287 = _ret;
case 4:
if (_287) {
_626
}
default:
}
return s[3]
}
;
return _625;
});
case 16:
_ret = LisRealExpr = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var _ret, _289, _290, _291, _292, _293;
function _630(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lexpr[1], 'while'));
case 1:
_293 = _ret;
case 2:
_292 = _293
default:
}
return s[3]
}
;
function _629(s) {
switch (s[2]) {
case 0:
_ret = lix(s, L__ne__(Lexpr[1], 'if'));
case 1:
_291 = _ret;
case 2:
_ret = _291;
case 3:
_292 = _ret;
case 4:
if (_292) {
_630
};
case 5:
_290 = _292
default:
}
return s[3]
}
;
function _628(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LisRealVar(Lexpr));
case 1:
_289 = _ret;
case 2:
_ret = _289;
case 3:
_290 = _ret;
case 4:
if (_290) {

} else {
_629
}
default:
}
return s[3]
}
;
return _628;
});
case 17:
_ret = true;
case 18:
_294 = _ret;
case 19:
_ret = null;
case 20:
_295 = _ret;
case 21:
_ret = lix(s, L__ne__(LstmtRet[1], '{empty}'));
case 22:
_300 = _ret;
case 23:
_ret = _300;
case 24:
_301 = _ret;
case 25:
if (_301) {
_631
};
case 26:
if ((_294 && _301)) {
_632
}
default:
}
return s[3]
}
;
return _617;
})));
case 3:
_304 = _ret;
case 4:
_ret = Lexpr[0] = Lret;
case 5:
_ret = Lexpr
default:
}
return s[3]
}
;
return _611;
});
case 77:
_ret = LflattenStart = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _305, Lret;
function _638(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_305 = _ret;
case 2:
_ret = Lret = _305;
case 3:
_ret = [Lret, '{start}']
default:
}
return s[3]
}
;
return _638;
});
case 78:
_ret = LflattenModule = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var _ret, _306, _307, _309, _308, Lname, _311, _310, _312, LjsName, LmoduleExpr, _313;
function _641(s) {
switch (s[2]) {
case 0:
_306 = false;
case 1:
_ret = lix(s, (function (_642, _643) {
if (typeof _642.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _642.join.apply(_642, arguments);
} else if (_642.join !== undefined) {
if (_643 === undefined) {
return function (_ret) {
return _642.join;
}
}
return function (_ret) {
_642.join = _643;
}
}})(['"', Lexpr[0], '"'], ''));
case 2:
_308 = _ret;
case 3:
_ret = _307 = Lname = [_308, '{atomic}']
default:
}
return s[3]
}
;
function _645(s) {
switch (s[2]) {
case 0:
_306 = false;
case 1:
_ret = lix(s, Lflatten(Lexpr[0], Ldefine));
case 2:
_310 = _ret;
case 3:
_ret = _307 = Lname = _310
default:
}
return s[3]
}
;
function _640(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_306 = _ret;
case 2:
_ret = null;
case 3:
_307 = _ret;
case 4:
_ret = lix(s, L__eq__(Lexpr[2], '{var}'));
case 5:
_309 = _ret;
case 6:
if ((_306 && _309)) {
_641
};
case 7:
_ret = lix(s, L__eq__(Lexpr[2], '{index}'));
case 8:
_311 = _ret;
case 9:
if ((_306 && _311)) {
_645
};
case 10:
_ret = lix(s, Ldefine([Lname, ['__add__', '{atomic}', '{var}'], ['"-lix"', '{atomic}']]));
case 11:
_312 = _ret;
case 12:
_ret = LjsName = _312;
case 13:
_ret = LmoduleExpr = [LjsName, ['require', '{atomic}', '{var}']];
case 14:
_ret = lix(s, Ldefine(LmoduleExpr));
case 15:
_313 = _ret
default:
}
return s[3]
}
;
return _640;
});
case 79:
_ret = LflattenDefer = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
;
function _647(s) {
switch (s[2]) {
case 0:
_ret = ['undefined', '{atomic}']
default:
}
return s[3]
}
;
return _647;
});
case 80:
_ret = LflattenOpTable = {
'{start}': LflattenStart,
'{seq}': LflattenSeq,
'{mono}': LflattenMono,
'{atomic}': LflattenAtomic,
'{.}': LflattenFieldAccess,
'{module}': LflattenModule,
'{func}': LflattenFunc,
'{array}': LflattenArray,
'{object}': LflattenObjectLiteral,
'{method}': LflattenMethod,
'{empty}': LflattenEmpty,
'{path}': LflattenPath,
'{path_item}': LflattenPathItem,
'{path_arg_item}': LflattenPathArgItem,
':=': LflattenDef,
'=': LflattenAssign,
'>>=': LflattenBind,
'>>>': LflattenCPSCompose,
'<<<': LflattenReverseCPSCompose,
'>>': LflattenCompose,
'<<': LflattenReverseCompose,
'if': LflattenIf,
'and': LflattenAnd,
'or': LflattenOr,
'while': LflattenWhile,
'break': LflattenBreak,
'defer': LflattenDefer
};
case 81:
_ret = LflattenOp = (function (Lhint) {
var Larguments = arguments, defer_stack = [];
var _ret, _314, _315;
function _650(s) {
switch (s[2]) {
case 0:
_314 = false;
case 1:
_ret = _315 = LflattenOpTable[Lhint]
default:
}
return s[3]
}
;
function _651(s) {
switch (s[2]) {
case 0:
_ret = _315 = LflattenExpr
default:
}
return s[3]
}
;
function _649(s) {
switch (s[2]) {
case 0:
_ret = true;
case 1:
_314 = _ret;
case 2:
_ret = null;
case 3:
_315 = _ret;
case 4:
if ((_314 && LflattenOpTable[Lhint])) {
_650
};
case 5:
if (_314) {
_651
}
default:
}
return s[3]
}
;
return _649;
});
case 82:
_ret = Lflatten = (function (Lexpr, Ldefine, Lctx) {
var Larguments = arguments, defer_stack = [];
var _ret, _316, _317;
function _653(s) {
switch (s[2]) {
case 0:
_ret = lix(s, LflattenOp(Lexpr[1]));
case 1:
_316 = _ret;
case 2:
_ret = lix(s, _316(Lexpr, Ldefine, Lctx));
case 3:
_317 = _ret
default:
}
return s[3]
}
;
return _653;
});
case 83:
_ret = Ldefine0 = (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _655(s) {
switch (s[2]) {
case 0:
_ret = Li
default:
}
return s[3]
}
;
return _655;
});
case 84:
_ret = Ldef0 = {
defineVar: (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _657(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
return _657;
}),
appendExpr: (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _659(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
return _659;
})
};
case 85:
_ret = LseqFuncParamsName = {
dynamicScope: 'd',
cb: '_cb',
step: '_step',
cont: '_cont',
ret: '_ret',
defer: 'cb_defer',
thisDefer: 'this_defer',
chainDefer: 'chain_defer'
};
case 86:
_ret = LbuiltinNames = {
ccException: '_lixCCException'
};
case 87:
_ret = Lcompile = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var _ret, _318, _319, Llibs, _320, LflattenedExpr, _321, _322, Lcode, _323;
function _661(s) {
switch (s[2]) {
case 0:
_ret = lix(s, Lmap(Lenv0, (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _663(s) {
switch (s[2]) {
case 0:
_ret = Li
default:
}
return s[3]
}
;
return _663;
})));
case 1:
_318 = _ret;
case 2:
_ret = lix(s, (function (_664, _665) {
if (typeof _664.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _664.join.apply(_664, arguments);
} else if (_664.join !== undefined) {
if (_665 === undefined) {
return function (_ret) {
return _664.join;
}
}
return function (_ret) {
_664.join = _665;
}
}})(_318, "\n"));
case 3:
_319 = _ret;
case 4:
_ret = Llibs = _319;
case 5:
_ret = lix(s, Lflatten(Lexpr, (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _668(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
return _668;
}), (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _670(s) {
switch (s[2]) {
case 0:
_ret = Li
default:
}
return s[3]
}
;
return _670;
})));
case 6:
_320 = _ret;
case 7:
_ret = LflattenedExpr = _320;
case 8:
_ret = lix(s, Lcall(Lenv_new));
case 9:
_321 = _ret;
case 10:
_ret = lix(s, LgenerateStart(LflattenedExpr, _321, Lctx0, Ldef0));
case 11:
_322 = _ret;
case 12:
_ret = Lcode = _322;
case 13:
_ret = lix(s, Ljoin([Llibs, "\n", Lcode]));
case 14:
_323 = _ret
default:
}
return s[3]
}
;
return _661;
});
case 88:
_ret = exports.compile = Lcompile;
case 89:
_ret = Lcompile
default:
}
return s[3]
}
;
module.exports = _324
