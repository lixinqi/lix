
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _2, _237, _272, LPREV, LF, LSTEP, LRET, LDEFER, LTRAP, Ljoin, Lmap, LcounterGenerator, _7, LgetCount, LgetUniqVarName, LgenerateFuncArgs, Lctx0, LgenerateSeq, LgenerateOr, LgenerateAnd, LgenerateIf, LoperateFuncName, LgenerateAtomic, LgeneratePropertyName, LgenerateProperty, LgenerateObjectLiteral, LtransformVarName, LgetVarName, LgenerateField, LgenerateFieldAccess, LgenerateArray, LgenerateMethod, LgenerateWhile, LgenerateBreak, LgenerateEmpty, LgenerateDef, LgenerateAsterisk, LgenerateAmpersand, LgenerateAssign, LgenerateFunc, LgenerateFn, LgenerateExpr, LpredefineFn, LGenerateDefNew, LgenerateStart, LgenerateMono, LgeneratePathItem, LgeneratePathArgItem, LgeneratePath, LgenerateModule, LgenerateOpTable, LgenerateOp, Lgenerate, Lenv0, Lenv_new, LflattenExpr, LflattenBreak, LflattenWhile, LflattenOr, LflattenAnd, L_flattenIf, LflattenIf, LflattenAssign, LflattenBasicOp, LflattenBind, LflattenCompose, LflattenReverseCompose, LflattenReverseCPSCompose, LflattenCPSCompose, LflattenDef, LflattenPathArgItem, LflattenPathItem, LflattenPath, LflattenEmpty, LflattenField, LNewGlobalDefine, _303, LglobalDefine, LflattenMethod, LflattenProperty, LflattenObjectLiteral, LflattenArray, LflattenFunc, LflattenFieldAccess, LflattenAtomic, LflattenMono, LstatementFlattenGenerator, LflattenSeq, LflattenStart, LflattenModule, LflattenDefer, LflattenAmpersand, LflattenAnyTypeDestructor, LgetAtomicExprVarName, LflattenIndexDestructor, LflattenFieldDestructor, LflattenObjectDestructor, LflattenArrayDestructor, LflattenArrayCondition, LflattenVAArgsDestructor, LflattenAnyTypeCondition, LflattenConditionOp, LflattenDestructorOp, LgetFlattenDestructorOp, LgetFlattenConditionOp, LflattenDestructor, LflattenCondition, LflattenArgumentsCondition, LflattenArgumentsDestructor, LgetFuncArgsNameList, LflattenFn, LflattenAsterisk, Lidentity, LflattenOpTable, LflattenOp, Lflatten, Ldefine0, Ldef0, _440, _441, LseqFuncParamsName, LbuiltinNames, Lcompile, exports;
function _448(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
_0 = (function (_449, _450) {
if (_449 == undefined || _449 == null ) {
return function () {
return _449;
}
}
if (typeof _449.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _449.join.apply(_449, arguments);
} else {
if (arguments.length > 1) {
return function () {
_449.join = _450;
return _449;
}
}
return function () {
return _449.join;
}
}});
case 2:
_2 = (function (_452, _453) {
if (_452 == undefined || _452 == null ) {
return function () {
return _452;
}
}
if (typeof _452.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _452.push.apply(_452, arguments);
} else {
if (arguments.length > 1) {
return function () {
_452.push = _453;
return _452;
}
}
return function () {
return _452.push;
}
}});
case 3:
_237 = (function (_455, _456) {
if (_455 == undefined || _455 == null ) {
return function () {
return _455;
}
}
if (typeof _455.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _455.concat.apply(_455, arguments);
} else {
if (arguments.length > 1) {
return function () {
_455.concat = _456;
return _455;
}
}
return function () {
return _455.concat;
}
}});
case 4:
_272 = (function (_458, _459) {
if (_458 == undefined || _458 == null ) {
return function () {
return _458;
}
}
if (typeof _458.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _458.unshift.apply(_458, arguments);
} else {
if (arguments.length > 1) {
return function () {
_458.unshift = _459;
return _458;
}
}
return function () {
return _458.unshift;
}
}});
case 5:
s[3] = LPREV = '0';
case 6:
s[3] = LF = '1';
case 7:
s[3] = LSTEP = '2';
case 8:
s[3] = LRET = '3';
case 9:
s[3] = LDEFER = '4';
case 10:
s[3] = LTRAP = '5';
case 11:
s[3] = Ljoin = (function (Larr) {
var Larguments = arguments;
;
var _1;
function _462(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _0(Larr, ""));
case 1:
_1 = s[3]
default:
}
return s[3]
}
return _462;
});
case 12:
s[3] = Lmap = (function (Larr, Lcb) {
var Larguments = arguments;
;
var Lret, _5;
function _464(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lforeach(Larr, (function (Li, Lindex) {
var Larguments = arguments;
;
var _3, _4;
function _466(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcb(Li, Lindex));
case 1:
_3 = s[3];
case 2:
s[2] = 3;
lix(s, _2(Lret, _3));
case 3:
_4 = s[3]
default:
}
return s[3]
}
return _466;
})));
case 2:
_5 = s[3];
case 3:
s[3] = Lret
default:
}
return s[3]
}
return _464;
});
case 13:
s[3] = LcounterGenerator = (function () {
var Larguments = arguments;
;
var Lcounter;
function _468(s) {
switch (s[2]) {
case 0:
s[3] = Lcounter = 0;
case 1:
s[3] = (function () {
var Larguments = arguments;
;
var Lret, _6;
function _470(s) {
switch (s[2]) {
case 0:
s[3] = Lret = Lcounter;
case 1:
s[2] = 2;
lix(s, L__add__(Lcounter, 1));
case 2:
_6 = s[3];
case 3:
s[3] = Lcounter = _6;
case 4:
s[3] = Lret
default:
}
return s[3]
}
return _470;
})
default:
}
return s[3]
}
return _468;
});
case 14:
s[2] = 15;
lix(s, Lcall(LcounterGenerator));
case 15:
_7 = s[3];
case 16:
s[3] = LgetCount = _7;
case 17:
s[3] = LgetUniqVarName = (function () {
var Larguments = arguments;
;
var _8, _9;
function _472(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LgetCount));
case 1:
_8 = s[3];
case 2:
s[2] = 3;
lix(s, L__add__('_', _8));
case 3:
_9 = s[3]
default:
}
return s[3]
}
return _472;
});
case 18:
s[3] = LgenerateFuncArgs = (function (Largs, Lenv, Lctx) {
var Larguments = arguments;
;
var _13, _14;
function _474(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Largs, (function (Li) {
var Larguments = arguments;
;
var _10, Lvarname, _11, _12;
function _477(s) {
switch (s[2]) {
case 0:
_11 = false;
case 1:
s[3] = Lvarname = Li[0]
default:
}
return s[3]
}
;
function _476(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LtransformVarName(Li[0]));
case 1:
_10 = s[3];
case 2:
s[3] = Lvarname = _10;
case 3:
_11 = true;
case 4:
s[2] = 5;
lix(s, L__eq__(Li[3], "{tmp}"));
case 5:
_12 = s[3];
case 6:
if ((_11 && _12)) {
s[2] = 7;
lix(s, _477)
};
case 7:
s[3] = Lenv[Lvarname] = true;
case 8:
s[3] = Lvarname
default:
}
return s[3]
}
return _476;
})));
case 1:
_13 = s[3];
case 2:
s[2] = 3;
lix(s, _0(_13, ', '));
case 3:
_14 = s[3]
default:
}
return s[3]
}
return _474;
});
case 19:
s[3] = Lctx0 = (function (Lx) {
var Larguments = arguments;
;
;
function _479(s) {
switch (s[2]) {
case 0:
s[3] = Lx
default:
}
return s[3]
}
return _479;
});
case 20:
s[3] = LgenerateSeq = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _15, LfuncName, _16, LgetCount, Lctx, Lbody, _27, _28, _29, _30;
function _481(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LgetUniqVarName));
case 1:
_15 = s[3];
case 2:
s[3] = LfuncName = _15;
case 3:
s[2] = 4;
lix(s, Lcall(LcounterGenerator));
case 4:
_16 = s[3];
case 5:
s[3] = LgetCount = _16;
case 6:
s[3] = Lctx = (function (Lcurrent) {
var Larguments = arguments;
;
;
function _483(s) {
switch (s[2]) {
case 0:
s[3] = (function (Lv, Lloop) {
var Larguments = arguments;
;
var Lnext, _17, _19, _18, _20;
function _486(s) {
switch (s[2]) {
case 0:
_17 = false;
case 1:
s[2] = 2;
lix(s, L__add__(Lnext, 1));
case 2:
_18 = s[3];
case 3:
s[3] = Lnext = _18
default:
}
return s[3]
}
;
function _485(s) {
switch (s[2]) {
case 0:
s[3] = Lnext = Lcurrent;
case 1:
_17 = true;
case 2:
s[2] = 3;
lix(s, L__eq__(Lloop, undefined));
case 3:
_19 = s[3];
case 4:
if ((_17 && _19)) {
s[2] = 5;
lix(s, _486)
};
case 5:
s[2] = 6;
lix(s, Ljoin([LseqFuncParamsName.step, ' = ', Lnext, ';\n', 'lix(s, ', Lv, ')']));
case 6:
_20 = s[3]
default:
}
return s[3]
}
return _485;
})
default:
}
return s[3]
}
return _483;
});
case 7:
s[3] = Lbody = [];
case 8:
s[2] = 9;
lix(s, Lforeach(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _21, Lcurrent, _22, _23, Lstmt, _24, _25, _26;
function _489(s) {
switch (s[2]) {
case 0:
_24 = false;
case 1:
s[2] = 2;
lix(s, Ljoin(['case ', Lcurrent, ':\n', Lstmt]));
case 2:
_25 = s[3];
case 3:
s[2] = 4;
lix(s, _2(Lbody, _25));
case 4:
_26 = s[3]
default:
}
return s[3]
}
;
function _488(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LgetCount));
case 1:
_21 = s[3];
case 2:
s[3] = Lcurrent = _21;
case 3:
s[2] = 4;
lix(s, Lctx(Lcurrent));
case 4:
_22 = s[3];
case 5:
s[2] = 6;
lix(s, Lgenerate(Litem, Lenv, _22, Ldef));
case 6:
_23 = s[3];
case 7:
s[3] = Lstmt = _23;
case 8:
_24 = true;
case 9:
if ((_24 && Lstmt)) {
s[2] = 10;
lix(s, _489)
};
case 10:
s[3] = Lstmt
default:
}
return s[3]
}
return _488;
})));
case 9:
_27 = s[3];
case 10:
s[2] = 11;
lix(s, _0(Lbody, ";\n"));
case 11:
_28 = s[3];
case 12:
s[3] = Lbody = _28;
case 13:
s[2] = 14;
lix(s, Ljoin(['function ', LfuncName, '(s) {\n', 'switch (s[', LSTEP, ']) {\n', Lbody, '\n', 'default:\n', '}\n', 'return s[', LRET, ']\n', '}\n']));
case 14:
_29 = s[3];
case 15:
s[2] = 16;
lix(s, Ldef.appendExpr(_29));
case 16:
_30 = s[3];
case 17:
s[3] = LfuncName
default:
}
return s[3]
}
return _481;
});
case 21:
s[3] = LgenerateOr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _31, _32, _33;
function _491(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_31 = s[3];
case 2:
s[2] = 3;
lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 3:
_32 = s[3];
case 4:
s[2] = 5;
lix(s, Ljoin(['(', _31, " || ", _32, ')']));
case 5:
_33 = s[3]
default:
}
return s[3]
}
return _491;
});
case 22:
s[3] = LgenerateAnd = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _34, _35, _36;
function _493(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_34 = s[3];
case 2:
s[2] = 3;
lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 3:
_35 = s[3];
case 4:
s[2] = 5;
lix(s, Ljoin(['(', _34, " && ", _35, ')']));
case 5:
_36 = s[3]
default:
}
return s[3]
}
return _493;
});
case 23:
s[3] = LgenerateIf = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _48, _49;
function _495(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _37, _41, _38, _39, _40, _43, _42, _44, _45, _46, _47;
function _498(s) {
switch (s[2]) {
case 0:
_37 = false;
case 1:
s[2] = 2;
lix(s, Lgenerate(Li[0], Lenv, Lctx, Ldef));
case 2:
_38 = s[3];
case 3:
s[2] = 4;
lix(s, Lctx(_38));
case 4:
_39 = s[3];
case 5:
s[2] = 6;
lix(s, Ljoin(['{\n', _39, '\n}']));
case 6:
_40 = s[3]
default:
}
return s[3]
}
;
function _499(s) {
switch (s[2]) {
case 0:
_37 = false;
case 1:
s[2] = 2;
lix(s, LgenerateIf(Li, Lenv, Lctx, Ldef));
case 2:
_42 = s[3]
default:
}
return s[3]
}
;
function _500(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Li[0], Lenv, Lctx, Ldef));
case 1:
_44 = s[3];
case 2:
s[2] = 3;
lix(s, Lgenerate(Li[1], Lenv, Lctx, Ldef));
case 3:
_45 = s[3];
case 4:
s[2] = 5;
lix(s, Lctx(_45));
case 5:
_46 = s[3];
case 6:
s[2] = 7;
lix(s, Ljoin(['if (', _44, ') {\n', _46, '\n}']));
case 7:
_47 = s[3]
default:
}
return s[3]
}
;
function _497(s) {
switch (s[2]) {
case 0:
_37 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Li[1], 'else'));
case 2:
_41 = s[3];
case 3:
if ((_37 && _41)) {
s[2] = 4;
lix(s, _498)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Li[1], 'if'));
case 5:
_43 = s[3];
case 6:
if ((_37 && _43)) {
s[2] = 7;
lix(s, _499)
};
case 7:
if (_37) {
s[2] = 8;
lix(s, _500)
}
default:
}
return s[3]
}
return _497;
})));
case 1:
_48 = s[3];
case 2:
s[2] = 3;
lix(s, _0(_48, ' else '));
case 3:
_49 = s[3]
default:
}
return s[3]
}
return _495;
});
case 24:
s[3] = LoperateFuncName = {
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
case 25:
s[3] = LgenerateAtomic = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var Lret, _50, _55, _51, _52, _54, _53;
function _504(s) {
switch (s[2]) {
case 0:
_51 = false;
case 1:
s[2] = 2;
lix(s, LtransformVarName(LoperateFuncName[Lexpr[0]]));
case 2:
_52 = s[3];
case 3:
s[3] = Lret = _52
default:
}
return s[3]
}
;
function _505(s) {
switch (s[2]) {
case 0:
_51 = false;
case 1:
s[2] = 2;
lix(s, LtransformVarName(Lexpr[0]));
case 2:
_53 = s[3];
case 3:
s[3] = Lret = _53
default:
}
return s[3]
}
;
function _503(s) {
switch (s[2]) {
case 0:
_50 = false;
case 1:
_51 = true;
case 2:
if ((_51 && LoperateFuncName[Lexpr[0]])) {
s[2] = 3;
lix(s, _504)
};
case 3:
s[2] = 4;
lix(s, L__eq__(Lexpr[3], undefined));
case 4:
_54 = s[3];
case 5:
if ((_51 && _54)) {
s[2] = 6;
lix(s, _505)
}
default:
}
return s[3]
}
;
function _502(s) {
switch (s[2]) {
case 0:
s[3] = Lret = Lexpr[0];
case 1:
_50 = true;
case 2:
s[2] = 3;
lix(s, L__eq__(Lexpr[2], '{var}'));
case 3:
_55 = s[3];
case 4:
if ((_50 && _55)) {
s[2] = 5;
lix(s, _503)
};
case 5:
s[3] = Lret
default:
}
return s[3]
}
return _502;
});
case 26:
s[3] = LgeneratePropertyName = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _56, _58, _57, _60, _59;
function _508(s) {
switch (s[2]) {
case 0:
_56 = false;
case 1:
s[2] = 2;
lix(s, LgenerateAtomic(Lexpr, Lenv, Lctx, Ldef));
case 2:
_57 = s[3]
default:
}
return s[3]
}
;
function _509(s) {
switch (s[2]) {
case 0:
_56 = false;
case 1:
s[2] = 2;
lix(s, LgenerateAtomic(Lexpr[0], Lenv, Lctx, Ldef));
case 2:
_59 = s[3]
default:
}
return s[3]
}
;
function _507(s) {
switch (s[2]) {
case 0:
_56 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 2:
_58 = s[3];
case 3:
if ((_56 && _58)) {
s[2] = 4;
lix(s, _508)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Lexpr[1], '{index}'));
case 5:
_60 = s[3];
case 6:
if ((_56 && _60)) {
s[2] = 7;
lix(s, _509)
}
default:
}
return s[3]
}
return _507;
});
case 27:
s[3] = LgenerateProperty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _61, LpropertyName, _62, LpropertyValue, _63;
function _511(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgeneratePropertyName(Lexpr[0], Lenv, Lctx0, Ldef));
case 1:
_61 = s[3];
case 2:
s[3] = LpropertyName = _61;
case 3:
s[2] = 4;
lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 4:
_62 = s[3];
case 5:
s[3] = LpropertyValue = _62;
case 6:
s[2] = 7;
lix(s, Ljoin([LpropertyName, ": ", LpropertyValue]));
case 7:
_63 = s[3]
default:
}
return s[3]
}
return _511;
});
case 28:
s[3] = LgenerateObjectLiteral = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _65, _66, LobjectBody, _67;
function _513(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _64;
function _515(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgenerateProperty(Li, Lenv, Lctx, Ldef));
case 1:
_64 = s[3]
default:
}
return s[3]
}
return _515;
})));
case 1:
_65 = s[3];
case 2:
s[2] = 3;
lix(s, _0(_65, ",\n"));
case 3:
_66 = s[3];
case 4:
s[3] = LobjectBody = _66;
case 5:
s[2] = 6;
lix(s, Ljoin(["{\n", LobjectBody, "\n}"]));
case 6:
_67 = s[3]
default:
}
return s[3]
}
return _513;
});
case 29:
s[3] = LtransformVarName = (function (Lname) {
var Larguments = arguments;
;
var _68, _70, _71, _72, _73, _74, _75, _76, _77, _78, _69;
function _518(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lname, 'undefined'));
case 1:
_72 = s[3];
case 2:
_71 = _72
default:
}
return s[3]
}
;
function _519(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lname, 'null'));
case 1:
_74 = s[3];
case 2:
_73 = _74
default:
}
return s[3]
}
;
function _520(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lname, 'true'));
case 1:
_76 = s[3];
case 2:
_75 = _76
default:
}
return s[3]
}
;
function _521(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lname, 'false'));
case 1:
_78 = s[3];
case 2:
_77 = _78
default:
}
return s[3]
}
;
function _522(s) {
switch (s[2]) {
case 0:
_68 = false;
case 1:
s[2] = 2;
lix(s, L__add__('L', Lname));
case 2:
_69 = s[3];
case 3:
s[3] = Lname = _69
default:
}
return s[3]
}
;
function _517(s) {
switch (s[2]) {
case 0:
_68 = true;
case 1:
s[2] = 2;
lix(s, L__ne__(Lname, 'exports'));
case 2:
_70 = s[3];
case 3:
_70;
case 4:
_71 = s[3];
case 5:
if (_71) {
s[2] = 6;
lix(s, _518)
};
case 6:
_71;
case 7:
_73 = s[3];
case 8:
if (_73) {
s[2] = 9;
lix(s, _519)
};
case 9:
_73;
case 10:
_75 = s[3];
case 11:
if (_75) {
s[2] = 12;
lix(s, _520)
};
case 12:
_75;
case 13:
_77 = s[3];
case 14:
if (_77) {
s[2] = 15;
lix(s, _521)
};
case 15:
if ((_68 && _77)) {
s[2] = 16;
lix(s, _522)
};
case 16:
s[3] = Lname
default:
}
return s[3]
}
return _517;
});
case 30:
s[3] = LgetVarName = (function (Lexpr) {
var Larguments = arguments;
;
var _79, _81, _80, _83, _82;
function _525(s) {
switch (s[2]) {
case 0:
_79 = false;
case 1:
s[2] = 2;
lix(s, LgenerateAtomic(Lexpr, {

}, Lctx0));
case 2:
_80 = s[3]
default:
}
return s[3]
}
;
function _526(s) {
switch (s[2]) {
case 0:
_79 = false;
case 1:
s[2] = 2;
lix(s, LgetVarName(Lexpr[0]));
case 2:
_82 = s[3]
default:
}
return s[3]
}
;
function _524(s) {
switch (s[2]) {
case 0:
_79 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 2:
_81 = s[3];
case 3:
if ((_79 && _81)) {
s[2] = 4;
lix(s, _525)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Lexpr[1], '{.}'));
case 5:
_83 = s[3];
case 6:
if ((_79 && _83)) {
s[2] = 7;
lix(s, _526)
}
default:
}
return s[3]
}
return _524;
});
case 31:
s[3] = LgenerateField = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _84, _87, _85, _86, _90, _88, _89;
function _529(s) {
switch (s[2]) {
case 0:
_84 = false;
case 1:
s[2] = 2;
lix(s, LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef));
case 2:
_85 = s[3];
case 3:
s[2] = 4;
lix(s, L__add__('.', _85));
case 4:
_86 = s[3]
default:
}
return s[3]
}
;
function _530(s) {
switch (s[2]) {
case 0:
_84 = false;
case 1:
s[2] = 2;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 2:
_88 = s[3];
case 3:
s[2] = 4;
lix(s, Ljoin(['[', _88, ']']));
case 4:
_89 = s[3]
default:
}
return s[3]
}
;
function _528(s) {
switch (s[2]) {
case 0:
_84 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[2], '{dot}'));
case 2:
_87 = s[3];
case 3:
if ((_84 && _87)) {
s[2] = 4;
lix(s, _529)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Lexpr[2], '{index}'));
case 5:
_90 = s[3];
case 6:
if ((_84 && _90)) {
s[2] = 7;
lix(s, _530)
}
default:
}
return s[3]
}
return _528;
});
case 32:
s[3] = LgenerateFieldAccess = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _91, _93, _92, _97, _94, Lobj, _95, Lfield, _96;
function _533(s) {
switch (s[2]) {
case 0:
_91 = false;
case 1:
s[2] = 2;
lix(s, LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef));
case 2:
_92 = s[3]
default:
}
return s[3]
}
;
function _534(s) {
switch (s[2]) {
case 0:
_91 = false;
case 1:
s[2] = 2;
lix(s, LgenerateFieldAccess(Lexpr[0], Lenv, Lctx, Ldef));
case 2:
_94 = s[3];
case 3:
s[3] = Lobj = _94;
case 4:
s[2] = 5;
lix(s, LgenerateField(Lexpr[2], Lenv, Lctx, Ldef));
case 5:
_95 = s[3];
case 6:
s[3] = Lfield = _95;
case 7:
s[2] = 8;
lix(s, L__add__(Lobj, Lfield));
case 8:
_96 = s[3]
default:
}
return s[3]
}
;
function _532(s) {
switch (s[2]) {
case 0:
_91 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 2:
_93 = s[3];
case 3:
if ((_91 && _93)) {
s[2] = 4;
lix(s, _533)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Lexpr[1], '{.}'));
case 5:
_97 = s[3];
case 6:
if ((_91 && _97)) {
s[2] = 7;
lix(s, _534)
}
default:
}
return s[3]
}
return _532;
});
case 33:
s[3] = LgenerateArray = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _99, _100, LarrayBody, _101;
function _536(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _98;
function _538(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Li, Lenv, Lctx, Ldef));
case 1:
_98 = s[3]
default:
}
return s[3]
}
return _538;
})));
case 1:
_99 = s[3];
case 2:
s[2] = 3;
lix(s, _0(_99, ', '));
case 3:
_100 = s[3];
case 4:
s[3] = LarrayBody = _100;
case 5:
s[2] = 6;
lix(s, Ljoin(['[', LarrayBody, ']']));
case 6:
_101 = s[3]
default:
}
return s[3]
}
return _536;
});
case 34:
s[3] = LgenerateMethod = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments;
;
var _102, LlocalVarName, _103, LlocalValueName, _104, LmethodName, _105, Lmethod, _106, LtmpVar, _107;
function _540(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LgetUniqVarName));
case 1:
_102 = s[3];
case 2:
s[3] = LlocalVarName = _102;
case 3:
s[2] = 4;
lix(s, Lcall(LgetUniqVarName));
case 4:
_103 = s[3];
case 5:
s[3] = LlocalValueName = _103;
case 6:
s[2] = 7;
lix(s, LgenerateField(Lexpr[0], Lenv, Lctx0));
case 7:
_104 = s[3];
case 8:
s[3] = LmethodName = _104;
case 9:
s[2] = 10;
lix(s, L__add__(LlocalVarName, LmethodName));
case 10:
_105 = s[3];
case 11:
s[3] = Lmethod = _105;
case 12:
s[2] = 13;
lix(s, Lcall(LgetUniqVarName));
case 13:
_106 = s[3];
case 14:
s[3] = LtmpVar = _106;
case 15:
s[2] = 16;
lix(s, Ljoin(["(function (", LlocalVarName, ", ", LlocalValueName, ") {\n", "if (", LlocalVarName, " == undefined || ", LlocalVarName, " == null ) {\n", "return function () {\n", "return ", LlocalVarName, ";\n", "}\n", "}\n", "if (typeof ", Lmethod, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", Lmethod, ".apply(", LlocalVarName, ", arguments);\n", "} else {\n", "if (arguments.length > 1) {\n", "return function () {\n", Lmethod, " = ", LlocalValueName, ";\n", "return ", LlocalVarName, ";\n", "}\n", "}\n", "return function () {\n", "return ", Lmethod, ';\n', "}\n", "}", "})"]));
case 16:
_107 = s[3]
default:
}
return s[3]
}
return _540;
});
case 35:
s[3] = LgenerateWhile = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _108, _109, _110, _111;
function _542(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_108 = s[3];
case 2:
s[2] = 3;
lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 3:
_109 = s[3];
case 4:
s[2] = 5;
lix(s, Lctx(_109, true));
case 5:
_110 = s[3];
case 6:
s[2] = 7;
lix(s, Ljoin(['while (', _108, ') {\n', _110, "\n}"]));
case 7:
_111 = s[3]
default:
}
return s[3]
}
return _542;
});
case 36:
s[3] = LgenerateBreak = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments;
;
;
function _544(s) {
switch (s[2]) {
case 0:
s[3] = 'break'
default:
}
return s[3]
}
return _544;
});
case 37:
s[3] = LgenerateEmpty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
;
function _546(s) {
switch (s[2]) {
case 0:
s[3] = ""
default:
}
return s[3]
}
return _546;
});
case 38:
s[3] = LgenerateDef = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _112, Lvarname, _113, _114, _115, Lret;
function _548(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetVarName(Lexpr[0]));
case 1:
_112 = s[3];
case 2:
s[3] = Lvarname = _112;
case 3:
s[2] = 4;
lix(s, Ldef.defineVar(Lvarname));
case 4:
_113 = s[3];
case 5:
s[2] = 6;
lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 6:
_114 = s[3];
case 7:
s[2] = 8;
lix(s, Ljoin([Lvarname, ' = ', _114]));
case 8:
_115 = s[3];
case 9:
s[3] = Lret = _115;
case 10:
s[3] = Lenv[Lvarname] = true;
case 11:
s[3] = Lret
default:
}
return s[3]
}
return _548;
});
case 39:
s[3] = LgenerateAsterisk = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _116;
function _550(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgenerateExpr([['undefined', '{atomic}', '{var}'], Lexpr[0]], Lenv, Lctx, Ldef));
case 1:
_116 = s[3]
default:
}
return s[3]
}
return _550;
});
case 40:
s[3] = LgenerateAmpersand = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _117, _124, _118, Lvarname, _119, _121, _122, _123, _120, _125, _126;
function _554(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lvarname, LseqFuncParamsName.ret));
case 1:
_123 = s[3];
case 2:
_122 = _123
default:
}
return s[3]
}
;
function _555(s) {
switch (s[2]) {
case 0:
_119 = false;
case 1:
s[2] = 2;
lix(s, Lgenerate([Lexpr[0], '=', ['undefined', '{atomic}', '{var}']], Lenv, Lctx, Ldef));
case 2:
_120 = s[3]
default:
}
return s[3]
}
;
function _553(s) {
switch (s[2]) {
case 0:
_117 = false;
case 1:
s[2] = 2;
lix(s, LgetVarName(Lexpr[0]));
case 2:
_118 = s[3];
case 3:
s[3] = Lvarname = _118;
case 4:
_119 = true;
case 5:
s[2] = 6;
lix(s, L__eq__(Lenv[Lvarname], undefined));
case 6:
_121 = s[3];
case 7:
_121;
case 8:
_122 = s[3];
case 9:
if (_122) {
s[2] = 10;
lix(s, _554)
};
case 10:
if ((_119 && _122)) {
s[2] = 11;
lix(s, _555)
}
default:
}
return s[3]
}
;
function _556(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_125 = s[3];
case 2:
s[3] = Lvarname = _125
default:
}
return s[3]
}
;
function _552(s) {
switch (s[2]) {
case 0:
_117 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[0][1], '{atomic}'));
case 2:
_124 = s[3];
case 3:
if ((_117 && _124)) {
s[2] = 4;
lix(s, _553)
};
case 4:
if (_117) {
s[2] = 5;
lix(s, _556)
};
case 5:
s[2] = 6;
lix(s, _0(["(function (_x) {\n", "if (arguments.length) {\n", "return function () {\n", "return ", Lvarname, " = _x\n", "}\n", "} else {\n", "return function () {\n", "return ", Lvarname, "\n", "}\n", "}\n", "})"], ""));
case 6:
_126 = s[3]
default:
}
return s[3]
}
return _552;
});
case 41:
s[3] = LgenerateAssign = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _127, Lvarname, Lret, _128, _130, _131, _132, _129, _133, _134, Lvalue, _135, _137, _136;
function _559(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lvarname, LseqFuncParamsName.ret));
case 1:
_132 = s[3];
case 2:
_131 = _132
default:
}
return s[3]
}
;
function _560(s) {
switch (s[2]) {
case 0:
_128 = false;
case 1:
s[2] = 2;
lix(s, LgenerateDef(Lexpr, Lenv, Lctx, Ldef));
case 2:
_129 = s[3];
case 3:
s[3] = Lret = _129
default:
}
return s[3]
}
;
function _562(s) {
switch (s[2]) {
case 0:
_135 = false;
case 1:
s[2] = 2;
lix(s, Ljoin([Lvarname, " = ", Lvalue]));
case 2:
_136 = s[3];
case 3:
s[3] = Lret = _136
default:
}
return s[3]
}
;
function _563(s) {
switch (s[2]) {
case 0:
s[3] = Lret = undefined
default:
}
return s[3]
}
;
function _561(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef));
case 1:
_133 = s[3];
case 2:
s[3] = Lvarname = _133;
case 3:
s[2] = 4;
lix(s, Lgenerate(Lexpr[2], Lenv, Lctx, Ldef));
case 4:
_134 = s[3];
case 5:
s[3] = Lvalue = _134;
case 6:
_135 = true;
case 7:
s[2] = 8;
lix(s, L__ne__(Lvalue, undefined));
case 8:
_137 = s[3];
case 9:
if ((_135 && _137)) {
s[2] = 10;
lix(s, _562)
};
case 10:
if (_135) {
s[2] = 11;
lix(s, _563)
}
default:
}
return s[3]
}
;
function _558(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetVarName(Lexpr[0]));
case 1:
_127 = s[3];
case 2:
s[3] = Lvarname = _127;
case 3:
s[3] = Lret = [];
case 4:
_128 = true;
case 5:
s[2] = 6;
lix(s, L__eq__(Lenv[Lvarname], undefined));
case 6:
_130 = s[3];
case 7:
_130;
case 8:
_131 = s[3];
case 9:
if (_131) {
s[2] = 10;
lix(s, _559)
};
case 10:
if ((_128 && _131)) {
s[2] = 11;
lix(s, _560)
};
case 11:
if (_128) {
s[2] = 12;
lix(s, _561)
};
case 12:
s[3] = Lret
default:
}
return s[3]
}
return _558;
});
case 42:
s[3] = LgenerateFunc = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _138, _139, _140, LfuncEnv, _141, Largs, _142, LtmpVar, _143, Ldef, _144, Lbody, _145, _146, _147, _148, _149, _150;
function _566(s) {
switch (s[2]) {
case 0:
_138 = false;
case 1:
s[3] = Lexpr[3] = []
default:
}
return s[3]
}
;
function _565(s) {
switch (s[2]) {
case 0:
_138 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[3], undefined));
case 2:
_139 = s[3];
case 3:
if ((_138 && _139)) {
s[2] = 4;
lix(s, _566)
};
case 4:
s[2] = 5;
lix(s, Lenv_new(Lenv));
case 5:
_140 = s[3];
case 6:
s[3] = LfuncEnv = _140;
case 7:
s[2] = 8;
lix(s, LgenerateFuncArgs(Lexpr[0], LfuncEnv, Lctx0));
case 8:
_141 = s[3];
case 9:
s[3] = Largs = _141;
case 10:
s[2] = 11;
lix(s, Lcall(LgetUniqVarName));
case 11:
_142 = s[3];
case 12:
s[3] = LtmpVar = _142;
case 13:
s[2] = 14;
lix(s, Lcall(LGenerateDefNew));
case 14:
_143 = s[3];
case 15:
s[3] = Ldef = _143;
case 16:
s[2] = 17;
lix(s, Lgenerate(Lexpr[2], LfuncEnv, Lctx0, Ldef));
case 17:
_144 = s[3];
case 18:
s[3] = Lbody = _144;
case 19:
s[2] = 20;
lix(s, LtransformVarName('arguments'));
case 20:
_145 = s[3];
case 21:
s[2] = 22;
lix(s, _0(Lexpr[3], ";\n"));
case 22:
_146 = s[3];
case 23:
s[2] = 24;
lix(s, Lcall(Ldef.defineVar));
case 24:
_147 = s[3];
case 25:
s[2] = 26;
lix(s, Lcall(Ldef.appendExpr));
case 26:
_148 = s[3];
case 27:
s[2] = 28;
lix(s, Lcall(Ldef.definedFns));
case 28:
_149 = s[3];
case 29:
s[2] = 30;
lix(s, _0(['(function (', Largs, ') {\n', 'var ', _145, ' = arguments;\n', _146, ";\n", _147, ";\n", _148, _149, 'return ', Lbody, ";\n", '})'], ''));
case 30:
_150 = s[3]
default:
}
return s[3]
}
return _565;
});
case 43:
s[3] = LgenerateFn = (function (Lexpr0, Lenv, Lctx, LprevDef) {
var Larguments = arguments;
;
var _151, LfuncName, Lexpr, _152, _153, _154, LfuncEnv, _155, Largs, _156, LtmpVar, _157, Ldef, _158, Lbody, _159, _160, _161, _162, _163, _164, _165, _166, _167;
function _569(s) {
switch (s[2]) {
case 0:
_152 = false;
case 1:
s[3] = Lexpr[3] = []
default:
}
return s[3]
}
;
function _568(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LgetUniqVarName));
case 1:
_151 = s[3];
case 2:
s[3] = LfuncName = _151;
case 3:
s[3] = Lexpr = Lexpr0[2];
case 4:
_152 = true;
case 5:
s[2] = 6;
lix(s, L__eq__(Lexpr[3], undefined));
case 6:
_153 = s[3];
case 7:
if ((_152 && _153)) {
s[2] = 8;
lix(s, _569)
};
case 8:
s[2] = 9;
lix(s, Lenv_new(Lenv));
case 9:
_154 = s[3];
case 10:
s[3] = LfuncEnv = _154;
case 11:
s[2] = 12;
lix(s, LgenerateFuncArgs(Lexpr[0], LfuncEnv, Lctx0));
case 12:
_155 = s[3];
case 13:
s[3] = Largs = _155;
case 14:
s[2] = 15;
lix(s, Lcall(LgetUniqVarName));
case 15:
_156 = s[3];
case 16:
s[3] = LtmpVar = _156;
case 17:
s[2] = 18;
lix(s, Lcall(LGenerateDefNew));
case 18:
_157 = s[3];
case 19:
s[3] = Ldef = _157;
case 20:
s[2] = 21;
lix(s, Lgenerate(Lexpr[2], LfuncEnv, Lctx0, Ldef));
case 21:
_158 = s[3];
case 22:
s[3] = Lbody = _158;
case 23:
s[2] = 24;
lix(s, LtransformVarName('arguments'));
case 24:
_159 = s[3];
case 25:
s[2] = 26;
lix(s, _0(Lexpr[3], ";\n"));
case 26:
_160 = s[3];
case 27:
s[2] = 28;
lix(s, Lcall(Ldef.defineVar));
case 28:
_161 = s[3];
case 29:
s[2] = 30;
lix(s, Lcall(Ldef.appendExpr));
case 30:
_162 = s[3];
case 31:
s[2] = 32;
lix(s, Lcall(Ldef.definedFns));
case 32:
_163 = s[3];
case 33:
s[2] = 34;
lix(s, _0(['function ', LfuncName, '(', Largs, ') {\n', 'var ', _159, ' = arguments;\n', _160, ";\n", _161, ";\n", _162, ";\n", _163, ";\n", 'return ', Lbody, ";\n", '}'], ''));
case 34:
_164 = s[3];
case 35:
s[2] = 36;
lix(s, LprevDef.appendExpr(_164));
case 36:
_165 = s[3];
case 37:
s[2] = 38;
lix(s, LgetAtomicExprVarName(Lexpr0[0]));
case 38:
_166 = s[3];
case 39:
s[2] = 40;
lix(s, LprevDef.defineFn(_166, LfuncName, Lexpr0[3], Lexpr[0].length));
case 40:
_167 = s[3];
case 41:
s[3] = undefined
default:
}
return s[3]
}
return _568;
});
case 44:
s[3] = LgenerateExpr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _168, Lfunc, _169, Largs, _174, _175, _176;
function _571(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[1], Lenv, Lctx0, Ldef));
case 1:
_168 = s[3];
case 2:
s[3] = Lfunc = _168;
case 3:
s[2] = 4;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef));
case 4:
_169 = s[3];
case 5:
s[3] = Largs = _169;
case 6:
s[2] = 7;
lix(s, Lforeach(Lexpr, (function (Litem, Lindex) {
var Larguments = arguments;
;
var _170, _173, _171, _172;
function _574(s) {
switch (s[2]) {
case 0:
_170 = false;
case 1:
s[2] = 2;
lix(s, Lgenerate(Litem, Lenv, Lctx0, Ldef));
case 2:
_171 = s[3];
case 3:
s[2] = 4;
lix(s, Ljoin([Largs, ', ', _171]));
case 4:
_172 = s[3];
case 5:
s[3] = Largs = _172
default:
}
return s[3]
}
;
function _573(s) {
switch (s[2]) {
case 0:
_170 = true;
case 1:
s[2] = 2;
lix(s, L__gt__(Lindex, 1));
case 2:
_173 = s[3];
case 3:
if ((_170 && _173)) {
s[2] = 4;
lix(s, _574)
}
default:
}
return s[3]
}
return _573;
})));
case 7:
_174 = s[3];
case 8:
s[2] = 9;
lix(s, Ljoin([Lfunc, '(', Largs, ')']));
case 9:
_175 = s[3];
case 10:
s[2] = 11;
lix(s, Lctx(_175));
case 11:
_176 = s[3]
default:
}
return s[3]
}
return _571;
});
case 45:
s[3] = LpredefineFn = (function (Lname, Lcandidates) {
var Larguments = arguments;
;
var Lbody, Lprefix, LgetArgListString, Lmax_narg, _189, _190, _191, _192;
function _576(s) {
switch (s[2]) {
case 0:
s[3] = Lbody = [];
case 1:
s[3] = Lprefix = "_fn_";
case 2:
s[3] = LgetArgListString = (function (Ln) {
var Larguments = arguments;
;
var Lret, Li, _177, _178, _179, _180, _181;
function _579(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__add__(Lprefix, Li));
case 1:
_178 = s[3];
case 2:
s[2] = 3;
lix(s, _2(Lret, _178));
case 3:
_179 = s[3];
case 4:
s[2] = 5;
lix(s, L__add__(Li, 1));
case 5:
_180 = s[3];
case 6:
s[3] = Li = _180;
case 7:
s[2] = 8;
lix(s, L__lt__(Li, Ln));
case 8:
_177 = s[3]
default:
}
return s[3]
}
;
function _578(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[3] = Li = 0;
case 2:
s[2] = 3;
lix(s, L__lt__(Li, Ln));
case 3:
_177 = s[3];
case 4:
while (_177) {
s[2] = 4;
lix(s, _579)
};
case 5:
s[2] = 6;
lix(s, _0(Lret, ", "));
case 6:
_181 = s[3]
default:
}
return s[3]
}
return _578;
});
case 3:
s[3] = Lmax_narg = 0;
case 4:
s[2] = 5;
lix(s, Lforeach(Lcandidates, (function (Litem) {
var Larguments = arguments;
;
var _182, _183, _184, _185, Lstmt, _186, _187, _188;
function _582(s) {
switch (s[2]) {
case 0:
_182 = false;
case 1:
s[3] = Lmax_narg = Litem.narg
default:
}
return s[3]
}
;
function _583(s) {
switch (s[2]) {
case 0:
_186 = false;
case 1:
s[2] = 2;
lix(s, _0(["if (", Litem.condition, ") {\n", Lstmt, "}\n"], ""));
case 2:
_187 = s[3];
case 3:
s[3] = Lstmt = _187
default:
}
return s[3]
}
;
function _581(s) {
switch (s[2]) {
case 0:
_182 = true;
case 1:
s[2] = 2;
lix(s, L__gt__(Litem.narg, Lmax_narg));
case 2:
_183 = s[3];
case 3:
if ((_182 && _183)) {
s[2] = 4;
lix(s, _582)
};
case 4:
s[2] = 5;
lix(s, Lcall(LgetArgListString, Litem.narg));
case 5:
_184 = s[3];
case 6:
s[2] = 7;
lix(s, _0(["return ", Litem.func, "(", _184, ");\n"], ""));
case 7:
_185 = s[3];
case 8:
s[3] = Lstmt = _185;
case 9:
_186 = true;
case 10:
if ((_186 && Litem.condition)) {
s[2] = 11;
lix(s, _583)
};
case 11:
s[2] = 12;
lix(s, _2(Lbody, Lstmt));
case 12:
_188 = s[3]
default:
}
return s[3]
}
return _581;
})));
case 5:
_189 = s[3];
case 6:
s[2] = 7;
lix(s, _0(Lbody, ""));
case 7:
_190 = s[3];
case 8:
s[3] = Lbody = _190;
case 9:
s[2] = 10;
lix(s, Lcall(LgetArgListString, Lmax_narg));
case 10:
_191 = s[3];
case 11:
s[2] = 12;
lix(s, _0(["function ", Lname, "(", _191, ") {\n", Lbody, "}\n"], ""));
case 12:
_192 = s[3]
default:
}
return s[3]
}
return _576;
});
case 46:
s[3] = LGenerateDefNew = (function () {
var Larguments = arguments;
;
var Lvars, Lfns, Lfuncs, Ldestructed;
function _585(s) {
switch (s[2]) {
case 0:
s[3] = Lvars = {

};
case 1:
s[3] = Lfns = {

};
case 2:
s[3] = Lfuncs = [];
case 3:
s[3] = Ldestructed = null;
case 4:
s[3] = {
defineDestructed: (function (Ld) {
var Larguments = arguments;
;
;
function _587(s) {
switch (s[2]) {
case 0:
s[3] = Ldestructed = Ld
default:
}
return s[3]
}
return _587;
}),
desctructedVars: (function () {
var Larguments = arguments;
;
var _193;
function _589(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _0(Ldestructed, ";\n"));
case 1:
_193 = s[3]
default:
}
return s[3]
}
return _589;
}),
defineFn: (function (Lname, Lfunc, Lcondition, Lnarg) {
var Larguments = arguments;
;
var _194, _195, _196;
function _592(s) {
switch (s[2]) {
case 0:
_194 = false;
case 1:
s[3] = Lfns[Lname] = []
default:
}
return s[3]
}
;
function _591(s) {
switch (s[2]) {
case 0:
_194 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lfns[Lname], undefined));
case 2:
_195 = s[3];
case 3:
if ((_194 && _195)) {
s[2] = 4;
lix(s, _592)
};
case 4:
s[2] = 5;
lix(s, _2(Lfns[Lname], {
func: Lfunc,
condition: Lcondition,
narg: Lnarg
}));
case 5:
_196 = s[3]
default:
}
return s[3]
}
return _591;
}),
definedFns: (function () {
var Larguments = arguments;
;
var Lret, _199, _200;
function _594(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lforeach(Lfns, (function (Litem, Lname) {
var Larguments = arguments;
;
var _197, _198;
function _596(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LpredefineFn(Lname, Litem));
case 1:
_197 = s[3];
case 2:
s[2] = 3;
lix(s, _2(Lret, _197));
case 3:
_198 = s[3]
default:
}
return s[3]
}
return _596;
})));
case 2:
_199 = s[3];
case 3:
s[2] = 4;
lix(s, _0(Lret, "\n"));
case 4:
_200 = s[3]
default:
}
return s[3]
}
return _594;
}),
defineVar: (function (Lv) {
var Larguments = arguments;
;
var _201, _202, Lvecs, _203, _206, _204, _205;
function _599(s) {
switch (s[2]) {
case 0:
_201 = false;
case 1:
s[3] = Lvars[Lv] = Lv
default:
}
return s[3]
}
;
function _603(s) {
switch (s[2]) {
case 0:
_203 = false;
case 1:
s[2] = 2;
lix(s, _0(Lvecs, ', '));
case 2:
_204 = s[3];
case 3:
s[2] = 4;
lix(s, L__add__('var ', _204));
case 4:
_205 = s[3]
default:
}
return s[3]
}
;
function _604(s) {
switch (s[2]) {
case 0:
s[3] = ''
default:
}
return s[3]
}
;
function _600(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lvars, (function (Li) {
var Larguments = arguments;
;
;
function _602(s) {
switch (s[2]) {
case 0:
s[3] = Li
default:
}
return s[3]
}
return _602;
})));
case 1:
_202 = s[3];
case 2:
s[3] = Lvecs = _202;
case 3:
_203 = true;
case 4:
s[2] = 5;
lix(s, L__gt__(Lvecs.length, 0));
case 5:
_206 = s[3];
case 6:
if ((_203 && _206)) {
s[2] = 7;
lix(s, _603)
};
case 7:
if (_203) {
s[2] = 8;
lix(s, _604)
}
default:
}
return s[3]
}
;
function _598(s) {
switch (s[2]) {
case 0:
_201 = true;
case 1:
if ((_201 && Lv)) {
s[2] = 2;
lix(s, _599)
};
case 2:
if (_201) {
s[2] = 3;
lix(s, _600)
}
default:
}
return s[3]
}
return _598;
}),
appendExpr: (function (Lv) {
var Larguments = arguments;
;
var _207, _208, _209;
function _607(s) {
switch (s[2]) {
case 0:
_207 = false;
case 1:
s[2] = 2;
lix(s, _2(Lfuncs, Lv));
case 2:
_208 = s[3]
default:
}
return s[3]
}
;
function _608(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _0(Lfuncs, ';\n'));
case 1:
_209 = s[3]
default:
}
return s[3]
}
;
function _606(s) {
switch (s[2]) {
case 0:
_207 = true;
case 1:
if ((_207 && Lv)) {
s[2] = 2;
lix(s, _607)
};
case 2:
if (_207) {
s[2] = 3;
lix(s, _608)
}
default:
}
return s[3]
}
return _606;
})
}
default:
}
return s[3]
}
return _585;
});
case 47:
s[3] = LgenerateStart = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _210, Ldef, _211, Lbody, _212, _213, _214, _215, _216;
function _610(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LGenerateDefNew));
case 1:
_210 = s[3];
case 2:
s[3] = Ldef = _210;
case 3:
s[2] = 4;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 4:
_211 = s[3];
case 5:
s[3] = Lbody = _211;
case 6:
s[2] = 7;
lix(s, Ljoin(['module.exports = ', Lbody, '\n']));
case 7:
_212 = s[3];
case 8:
s[3] = Lbody = _212;
case 9:
s[2] = 10;
lix(s, Lcall(Ldef.defineVar));
case 10:
_213 = s[3];
case 11:
s[2] = 12;
lix(s, Lcall(Ldef.appendExpr));
case 12:
_214 = s[3];
case 13:
s[2] = 14;
lix(s, Lcall(Ldef.definedFns));
case 14:
_215 = s[3];
case 15:
s[2] = 16;
lix(s, Ljoin(["require.lixCache = {};\n", "require.lixLoadingCache = {};\n", "var Lrequire = _require(require);\n", "var L__dirname = __dirname;\n", "var L__filename = __filename;\n", _213, ";\n", _214, ";\n", _215, ";\n", Lbody]));
case 16:
_216 = s[3]
default:
}
return s[3]
}
return _610;
});
case 48:
s[3] = LgenerateMono = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _217;
function _612(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_217 = s[3]
default:
}
return s[3]
}
return _612;
});
case 49:
s[3] = LgeneratePathItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _218;
function _614(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ljoin(['"', Lexpr[0], '"']));
case 1:
_218 = s[3]
default:
}
return s[3]
}
return _614;
});
case 50:
s[3] = LgeneratePathArgItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _219, _220;
function _616(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Lexpr[0], Lenv, Lctx, Ldef));
case 1:
_219 = s[3];
case 2:
s[2] = 3;
lix(s, Ljoin(['("', Lexpr[2], '" + ', _219, ')']));
case 3:
_220 = s[3]
default:
}
return s[3]
}
return _616;
});
case 51:
s[3] = LgeneratePath = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _222, _223, Lpath, _224;
function _618(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _221;
function _620(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lgenerate(Li, Lenv, Lctx, Ldef));
case 1:
_221 = s[3]
default:
}
return s[3]
}
return _620;
})));
case 1:
_222 = s[3];
case 2:
s[2] = 3;
lix(s, _0(_222, ','));
case 3:
_223 = s[3];
case 4:
s[3] = Lpath = _223;
case 5:
s[2] = 6;
lix(s, Ljoin(['[', Lpath, '].join("/")']));
case 6:
_224 = s[3]
default:
}
return s[3]
}
return _618;
});
case 52:
s[3] = LgenerateModule = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _225, Lname, LmoduleExpr;
function _622(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _0(['"', Lexpr[0], '"'], ''));
case 1:
_225 = s[3];
case 2:
s[3] = Lname = [_225, '{atomic}'];
case 3:
s[3] = LmoduleExpr = [Lname, ['module', '{atomic}', '{var}']]
default:
}
return s[3]
}
return _622;
});
case 53:
s[3] = LgenerateOpTable = {
'{start}': LgenerateStart,
'{seq}': LgenerateSeq,
'{mono}': LgenerateMono,
'{atomic}': LgenerateAtomic,
'{.}': LgenerateFieldAccess,
'{module}': LgenerateModule,
'{func}': LgenerateFunc,
'{fn}': LgenerateFn,
'{ampersand}': LgenerateAmpersand,
'{asterisk}': LgenerateAsterisk,
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
case 54:
s[3] = LgenerateOp = (function (Lhint) {
var Larguments = arguments;
;
var _226;
function _625(s) {
switch (s[2]) {
case 0:
_226 = false;
case 1:
s[3] = LgenerateOpTable[Lhint]
default:
}
return s[3]
}
;
function _626(s) {
switch (s[2]) {
case 0:
s[3] = LgenerateExpr
default:
}
return s[3]
}
;
function _624(s) {
switch (s[2]) {
case 0:
_226 = true;
case 1:
if ((_226 && LgenerateOpTable[Lhint])) {
s[2] = 2;
lix(s, _625)
};
case 2:
if (_226) {
s[2] = 3;
lix(s, _626)
}
default:
}
return s[3]
}
return _624;
});
case 55:
s[3] = Lgenerate = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
;
var _227, _228;
function _628(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgenerateOp(Lexpr[1]));
case 1:
_227 = s[3];
case 2:
s[2] = 3;
lix(s, _227(Lexpr, Lenv, Lctx, Ldef));
case 3:
_228 = s[3]
default:
}
return s[3]
}
return _628;
});
case 56:
s[3] = Lenv0 = {
exports: null,
__builtin__: "require('/lib/lix/s_builtin_.js');"
};
case 57:
s[3] = Lenv_new = (function (Lenv) {
var Larguments = arguments;
;
var _229, LEnv, _230;
function _631(s) {
switch (s[2]) {
case 0:
_229 = Lenv0
default:
}
return s[3]
}
;
function _630(s) {
switch (s[2]) {
case 0:
Lenv;
case 1:
_229 = s[3];
case 2:
if (_229) {
s[2] = 3;
lix(s, )
} else {
s[2] = 3;
lix(s, _631)
};
case 3:
s[3] = Lenv = _229;
case 4:
s[3] = LEnv = (function () {
var Larguments = arguments;
;
;
function _633(s) {
switch (s[2]) {

default:
}
return s[3]
}
return _633;
});
case 5:
s[3] = LEnv.prototype = Lenv;
case 6:
s[2] = 7;
lix(s, L_instance_(LEnv));
case 7:
_230 = s[3]
default:
}
return s[3]
}
return _630;
});
case 58:
s[3] = LflattenExpr = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _232, _233;
function _635(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr, (function (Litem) {
var Larguments = arguments;
;
var _231;
function _637(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Litem, Ldefine));
case 1:
_231 = s[3]
default:
}
return s[3]
}
return _637;
})));
case 1:
_232 = s[3];
case 2:
s[2] = 3;
lix(s, Ldefine(_232));
case 3:
_233 = s[3]
default:
}
return s[3]
}
return _635;
});
case 59:
s[3] = LflattenBreak = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
;
function _639(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr
default:
}
return s[3]
}
return _639;
});
case 60:
s[3] = LflattenWhile = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _234, LwhileDefine, _235, _236, _238, _239, _240, _242, _243;
function _641(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_234 = s[3];
case 2:
s[3] = LwhileDefine = _234;
case 3:
s[2] = 4;
lix(s, Lflatten(Lexpr[0], LwhileDefine));
case 4:
_235 = s[3];
case 5:
s[3] = Lexpr[0] = _235;
case 6:
s[2] = 7;
lix(s, Lflatten(Lexpr[2], Ldefine0));
case 7:
_236 = s[3];
case 8:
s[3] = Lexpr[2] = _236;
case 9:
s[2] = 10;
lix(s, Lcall(LwhileDefine));
case 10:
_238 = s[3];
case 11:
s[2] = 12;
lix(s, _237(Lexpr[2][0], _238));
case 12:
_239 = s[3];
case 13:
s[3] = Lexpr[2][0] = _239;
case 14:
s[2] = 15;
lix(s, Lcall(LwhileDefine));
case 15:
_240 = s[3];
case 16:
s[2] = 17;
lix(s, Lforeach(_240, (function (Li) {
var Larguments = arguments;
;
var _241;
function _643(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ldefine(Li, true));
case 1:
_241 = s[3]
default:
}
return s[3]
}
return _643;
})));
case 17:
_242 = s[3];
case 18:
s[2] = 19;
lix(s, Ldefine(Lexpr, true));
case 19:
_243 = s[3];
case 20:
s[3] = ['', '{empty}']
default:
}
return s[3]
}
return _641;
});
case 61:
s[3] = LflattenOr = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _244, Lret, _245, _247, _246, LgetAndOpSeq, _252, _253;
function _646(s) {
switch (s[2]) {
case 0:
_245 = false;
case 1:
s[2] = 2;
lix(s, Ldefine(Lret));
case 2:
_246 = s[3];
case 3:
s[3] = Lret = _246
default:
}
return s[3]
}
;
function _645(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_244 = s[3];
case 2:
s[3] = Lret = _244;
case 3:
_245 = true;
case 4:
s[2] = 5;
lix(s, L__ne__(Lret[2], 'var'));
case 5:
_247 = s[3];
case 6:
if ((_245 && _247)) {
s[2] = 7;
lix(s, _646)
};
case 7:
s[3] = LgetAndOpSeq = (function () {
var Larguments = arguments;
;
var _248, LAndDefine, _249, LseqRet, _250, Lseq, _251;
function _648(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_248 = s[3];
case 2:
s[3] = LAndDefine = _248;
case 3:
s[2] = 4;
lix(s, Lflatten(Lexpr[2], LAndDefine));
case 4:
_249 = s[3];
case 5:
s[3] = LseqRet = _249;
case 6:
s[2] = 7;
lix(s, Lcall(LAndDefine));
case 7:
_250 = s[3];
case 8:
s[3] = Lseq = _250;
case 9:
s[2] = 10;
lix(s, _2(Lseq, [Lret, '=', LseqRet]));
case 10:
_251 = s[3];
case 11:
s[3] = [Lseq, '{seq}']
default:
}
return s[3]
}
return _648;
});
case 8:
s[2] = 9;
lix(s, Lcall(LgetAndOpSeq));
case 9:
_252 = s[3];
case 10:
s[2] = 11;
lix(s, Ldefine([[[Lret, [[], '{empty}']], [_252, 'else']], 'if'], true));
case 11:
_253 = s[3];
case 12:
s[3] = Lret
default:
}
return s[3]
}
return _645;
});
case 62:
s[3] = LflattenAnd = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _254, Lret, _255, _257, _256, LgetAndOpSeq, _262, _263;
function _651(s) {
switch (s[2]) {
case 0:
_255 = false;
case 1:
s[2] = 2;
lix(s, Ldefine(Lret));
case 2:
_256 = s[3];
case 3:
s[3] = Lret = _256
default:
}
return s[3]
}
;
function _650(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_254 = s[3];
case 2:
s[3] = Lret = _254;
case 3:
_255 = true;
case 4:
s[2] = 5;
lix(s, L__ne__(Lret[2], 'var'));
case 5:
_257 = s[3];
case 6:
if ((_255 && _257)) {
s[2] = 7;
lix(s, _651)
};
case 7:
s[3] = LgetAndOpSeq = (function () {
var Larguments = arguments;
;
var _258, LAndDefine, _259, LseqRet, _260, Lseq, _261;
function _653(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_258 = s[3];
case 2:
s[3] = LAndDefine = _258;
case 3:
s[2] = 4;
lix(s, Lflatten(Lexpr[2], LAndDefine));
case 4:
_259 = s[3];
case 5:
s[3] = LseqRet = _259;
case 6:
s[2] = 7;
lix(s, Lcall(LAndDefine));
case 7:
_260 = s[3];
case 8:
s[3] = Lseq = _260;
case 9:
s[2] = 10;
lix(s, _2(Lseq, [Lret, '=', LseqRet]));
case 10:
_261 = s[3];
case 11:
s[3] = [Lseq, '{seq}']
default:
}
return s[3]
}
return _653;
});
case 8:
s[2] = 9;
lix(s, Lcall(LgetAndOpSeq));
case 9:
_262 = s[3];
case 10:
s[2] = 11;
lix(s, Ldefine([[[Lret, _262]], 'if'], true));
case 11:
_263 = s[3];
case 12:
s[3] = Lret
default:
}
return s[3]
}
return _650;
});
case 63:
s[3] = L_flattenIf = (function (Lexpr, Ldefine, LtmpVar, Lctx) {
var Larguments = arguments;
;
var _276;
function _655(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lforeach(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _264, _267, _265, LelseSeq, _266, _270, _268, _269, _271, LifSeq, _273, _274, Lcond, _275;
function _658(s) {
switch (s[2]) {
case 0:
_264 = false;
case 1:
s[2] = 2;
lix(s, Lflatten(Li[0], Ldefine0, Lctx));
case 2:
_265 = s[3];
case 3:
s[3] = LelseSeq = _265;
case 4:
s[2] = 5;
lix(s, Ldefine([[[LtmpVar, LelseSeq]], 'if'], true));
case 5:
_266 = s[3]
default:
}
return s[3]
}
;
function _659(s) {
switch (s[2]) {
case 0:
_264 = false;
case 1:
s[2] = 2;
lix(s, L_flattenIf(Li, Ldefine, LtmpVar, Lctx));
case 2:
_268 = s[3];
case 3:
s[2] = 4;
lix(s, Ldefine(_268));
case 4:
_269 = s[3]
default:
}
return s[3]
}
;
function _660(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Li[1], Ldefine0, Lctx));
case 1:
_271 = s[3];
case 2:
s[3] = LifSeq = _271;
case 3:
s[2] = 4;
lix(s, _272(LifSeq[0], [LtmpVar, '=', ['false', '{atomic}']]));
case 4:
_273 = s[3];
case 5:
s[2] = 6;
lix(s, Lflatten(Li[0], Ldefine));
case 6:
_274 = s[3];
case 7:
s[3] = Lcond = _274;
case 8:
s[3] = Lcond = [LtmpVar, 'and', Lcond];
case 9:
s[2] = 10;
lix(s, Ldefine([[[Lcond, LifSeq]], 'if'], true));
case 10:
_275 = s[3]
default:
}
return s[3]
}
;
function _657(s) {
switch (s[2]) {
case 0:
_264 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Li[1], 'else'));
case 2:
_267 = s[3];
case 3:
if ((_264 && _267)) {
s[2] = 4;
lix(s, _658)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Li[1], 'if'));
case 5:
_270 = s[3];
case 6:
if ((_264 && _270)) {
s[2] = 7;
lix(s, _659)
};
case 7:
if (_264) {
s[2] = 8;
lix(s, _660)
}
default:
}
return s[3]
}
return _657;
})));
case 1:
_276 = s[3]
default:
}
return s[3]
}
return _655;
});
case 64:
s[3] = LflattenIf = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _277, LtmpVar, LretVar, _278;
function _662(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ldefine(['true', '{atomic}'], 'new'));
case 1:
_277 = s[3];
case 2:
s[3] = LtmpVar = _277;
case 3:
s[3] = LretVar = ['null', '{atomic}'];
case 4:
s[3] = LretVar = ['', '{empty}'];
case 5:
s[2] = 6;
lix(s, L_flattenIf(Lexpr, Ldefine, LtmpVar, Lctx0));
case 6:
_278 = s[3];
case 7:
s[3] = LretVar
default:
}
return s[3]
}
return _662;
});
case 65:
s[3] = LflattenAssign = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _279;
function _664(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[2], Ldefine));
case 1:
_279 = s[3];
case 2:
s[3] = Lexpr[2] = _279;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _664;
});
case 66:
s[3] = LflattenBasicOp = (function (Lexpr, LbuiltinOpName, Ldefine) {
var Larguments = arguments;
;
var _280, _284, LpartialExpr, Li, _281, _282, _283, _285;
function _668(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _2(LpartialExpr, Lexpr[Li]));
case 1:
_282 = s[3];
case 2:
s[2] = 3;
lix(s, L__add__(Li, 1));
case 3:
_283 = s[3];
case 4:
s[3] = Li = _283;
case 5:
s[2] = 6;
lix(s, L__lt__(Li, Lexpr.length));
case 6:
_281 = s[3]
default:
}
return s[3]
}
;
function _667(s) {
switch (s[2]) {
case 0:
_280 = false;
case 1:
s[3] = LpartialExpr = [Lexpr[2], ['__', '{atomic}', '{var}']];
case 2:
s[3] = Li = 3;
case 3:
s[2] = 4;
lix(s, L__lt__(Li, Lexpr.length));
case 4:
_281 = s[3];
case 5:
while (_281) {
s[2] = 5;
lix(s, _668)
};
case 6:
s[3] = Lexpr = [Lexpr[0], Lexpr[1], LpartialExpr]
default:
}
return s[3]
}
;
function _666(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr[1] = [LbuiltinOpName, '{atomic}', '{var}'];
case 1:
_280 = true;
case 2:
s[2] = 3;
lix(s, L__gt__(Lexpr.length, 3));
case 3:
_284 = s[3];
case 4:
if ((_280 && _284)) {
s[2] = 5;
lix(s, _667)
};
case 5:
s[2] = 6;
lix(s, LflattenExpr(Lexpr, Ldefine));
case 6:
_285 = s[3]
default:
}
return s[3]
}
return _666;
});
case 67:
s[3] = LflattenBind = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _286;
function _670(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenBasicOp(Lexpr, '__bind__', Ldefine));
case 1:
_286 = s[3]
default:
}
return s[3]
}
return _670;
});
case 68:
s[3] = LflattenCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _287;
function _672(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenBasicOp(Lexpr, '__compose__', Ldefine));
case 1:
_287 = s[3]
default:
}
return s[3]
}
return _672;
});
case 69:
s[3] = LflattenReverseCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _288;
function _674(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenBasicOp(Lexpr, '__rcompose__', Ldefine));
case 1:
_288 = s[3]
default:
}
return s[3]
}
return _674;
});
case 70:
s[3] = LflattenReverseCPSCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _289;
function _676(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenBasicOp(Lexpr, '__rvcompose__', Ldefine));
case 1:
_289 = s[3]
default:
}
return s[3]
}
return _676;
});
case 71:
s[3] = LflattenCPSCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _290;
function _678(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenBasicOp(Lexpr, '__vcompose__', Ldefine));
case 1:
_290 = s[3]
default:
}
return s[3]
}
return _678;
});
case 72:
s[3] = LflattenDef = LflattenAssign;
case 73:
s[3] = LflattenPathArgItem = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _291;
function _680(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_291 = s[3];
case 2:
s[3] = Lexpr[0] = _291;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _680;
});
case 74:
s[3] = LflattenPathItem = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
;
function _682(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr
default:
}
return s[3]
}
return _682;
});
case 75:
s[3] = LflattenPath = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _293;
function _684(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _292;
function _686(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Li, Ldefine));
case 1:
_292 = s[3]
default:
}
return s[3]
}
return _686;
})));
case 1:
_293 = s[3];
case 2:
s[3] = Lexpr[0] = _293;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _684;
});
case 76:
s[3] = LflattenEmpty = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
;
function _688(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr
default:
}
return s[3]
}
return _688;
});
case 77:
s[3] = LflattenField = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _294, _296, _295;
function _691(s) {
switch (s[2]) {
case 0:
_294 = false;
case 1:
s[2] = 2;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 2:
_295 = s[3];
case 3:
s[3] = Lexpr[0] = _295
default:
}
return s[3]
}
;
function _690(s) {
switch (s[2]) {
case 0:
_294 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[1], '{index}'));
case 2:
_296 = s[3];
case 3:
if ((_294 && _296)) {
s[2] = 4;
lix(s, _691)
};
case 4:
s[3] = Lexpr
default:
}
return s[3]
}
return _690;
});
case 78:
s[3] = LNewGlobalDefine = (function () {
var Larguments = arguments;
;
var Ldefined, Lstatements;
function _693(s) {
switch (s[2]) {
case 0:
s[3] = Ldefined = {

};
case 1:
s[3] = Lstatements = [];
case 2:
s[3] = (function (Lname, Lvalue) {
var Larguments = arguments;
;
var Lret, _297, _302, _298, _301, _299, LvarName, LlixVar, _300;
function _697(s) {
switch (s[2]) {
case 0:
_298 = false;
case 1:
s[2] = 2;
lix(s, Lcall(LgetUniqVarName));
case 2:
_299 = s[3];
case 3:
s[3] = LvarName = _299;
case 4:
s[3] = LlixVar = [LvarName, '{atomic}', '{var}', 'tmp'];
case 5:
s[2] = 6;
lix(s, _2(Lstatements, [LlixVar, ':=', Lvalue]));
case 6:
_300 = s[3];
case 7:
s[3] = Ldefined[Lname] = LlixVar
default:
}
return s[3]
}
;
function _696(s) {
switch (s[2]) {
case 0:
_297 = false;
case 1:
_298 = true;
case 2:
s[2] = 3;
lix(s, L__eq__(Ldefined[Lname], undefined));
case 3:
_301 = s[3];
case 4:
if ((_298 && _301)) {
s[2] = 5;
lix(s, _697)
};
case 5:
s[3] = Lret = Ldefined[Lname]
default:
}
return s[3]
}
;
function _698(s) {
switch (s[2]) {
case 0:
s[3] = Lret = Lstatements
default:
}
return s[3]
}
;
function _695(s) {
switch (s[2]) {
case 0:
s[3] = Lret = undefined;
case 1:
_297 = true;
case 2:
s[2] = 3;
lix(s, L__eq__(Larguments.length, 2));
case 3:
_302 = s[3];
case 4:
if ((_297 && _302)) {
s[2] = 5;
lix(s, _696)
};
case 5:
if (_297) {
s[2] = 6;
lix(s, _698)
};
case 6:
s[3] = Lret
default:
}
return s[3]
}
return _695;
})
default:
}
return s[3]
}
return _693;
});
case 79:
s[2] = 80;
lix(s, Lcall(LNewGlobalDefine));
case 80:
_303 = s[3];
case 81:
s[3] = LglobalDefine = _303;
case 82:
s[3] = LflattenMethod = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var Lret, _304, _306, _305, _307;
function _701(s) {
switch (s[2]) {
case 0:
_304 = false;
case 1:
s[2] = 2;
lix(s, LglobalDefine(Lexpr[0][0], Lexpr));
case 2:
_305 = s[3];
case 3:
s[3] = Lret = _305
default:
}
return s[3]
}
;
function _702(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenField(Lexpr[0], Ldefine));
case 1:
_307 = s[3];
case 2:
s[3] = Lexpr[0] = _307;
case 3:
s[3] = Lret = Lexpr
default:
}
return s[3]
}
;
function _700(s) {
switch (s[2]) {
case 0:
s[3] = Lret = ['', '{empty}'];
case 1:
_304 = true;
case 2:
s[2] = 3;
lix(s, L__eq__(Lexpr[0][3], '{global}'));
case 3:
_306 = s[3];
case 4:
if ((_304 && _306)) {
s[2] = 5;
lix(s, _701)
};
case 5:
if (_304) {
s[2] = 6;
lix(s, _702)
};
case 6:
s[3] = Lret
default:
}
return s[3]
}
return _700;
});
case 83:
s[3] = LflattenProperty = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _308;
function _704(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[2], Ldefine));
case 1:
_308 = s[3];
case 2:
s[3] = Lexpr[2] = _308;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _704;
});
case 84:
s[3] = LflattenObjectLiteral = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _310;
function _706(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _309;
function _708(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenProperty(Li, Ldefine));
case 1:
_309 = s[3]
default:
}
return s[3]
}
return _708;
})));
case 1:
_310 = s[3];
case 2:
s[3] = Lexpr[0] = _310;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _706;
});
case 85:
s[3] = LflattenArray = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _312;
function _710(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
;
var _311;
function _712(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Li, Ldefine));
case 1:
_311 = s[3]
default:
}
return s[3]
}
return _712;
})));
case 1:
_312 = s[3];
case 2:
s[3] = Lexpr[0] = _312;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _710;
});
case 86:
s[3] = LflattenFunc = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _313;
function _714(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[2], Ldefine));
case 1:
_313 = s[3];
case 2:
s[3] = Lexpr[2] = _313;
case 3:
s[3] = Lexpr
default:
}
return s[3]
}
return _714;
});
case 87:
s[3] = LflattenFieldAccess = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _314, _317, _315, _316, _318;
function _717(s) {
switch (s[2]) {
case 0:
_314 = false;
case 1:
s[2] = 2;
lix(s, LflattenFieldAccess(Lexpr[0], Ldefine));
case 2:
_315 = s[3];
case 3:
s[3] = Lexpr[0] = _315;
case 4:
s[2] = 5;
lix(s, LflattenField(Lexpr[2], Ldefine));
case 5:
_316 = s[3];
case 6:
s[3] = Lexpr[2] = _316
default:
}
return s[3]
}
;
function _718(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr, Ldefine));
case 1:
_318 = s[3];
case 2:
s[3] = Lexpr = _318
default:
}
return s[3]
}
;
function _716(s) {
switch (s[2]) {
case 0:
_314 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[1], '{.}'));
case 2:
_317 = s[3];
case 3:
if ((_314 && _317)) {
s[2] = 4;
lix(s, _717)
};
case 4:
if (_314) {
s[2] = 5;
lix(s, _718)
};
case 5:
s[3] = Lexpr
default:
}
return s[3]
}
return _716;
});
case 88:
s[3] = LflattenAtomic = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
;
function _720(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr
default:
}
return s[3]
}
return _720;
});
case 89:
s[3] = LflattenMono = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _319;
function _722(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 1:
_319 = s[3]
default:
}
return s[3]
}
return _722;
});
case 90:
s[3] = LstatementFlattenGenerator = (function () {
var Larguments = arguments;
;
var Ldata;
function _724(s) {
switch (s[2]) {
case 0:
s[3] = Ldata = [];
case 1:
s[3] = (function (Lstatement, LtmpVarName) {
var Larguments = arguments;
;
var _320, _321, _323, _322, _327, _324, LvarName, LlixVar, LtmpRet, _325, _326, _330, _328, _329;
function _727(s) {
switch (s[2]) {
case 0:
_320 = false;
case 1:
s[3] = Ldata
default:
}
return s[3]
}
;
function _728(s) {
switch (s[2]) {
case 0:
_320 = false;
case 1:
s[2] = 2;
lix(s, _2(Ldata, Lstatement));
case 2:
_322 = s[3]
default:
}
return s[3]
}
;
function _729(s) {
switch (s[2]) {
case 0:
_320 = false;
case 1:
s[2] = 2;
lix(s, Lcall(LgetUniqVarName));
case 2:
_324 = s[3];
case 3:
s[3] = LvarName = _324;
case 4:
s[3] = LlixVar = [LvarName, '{atomic}', '{var}', 'tmp'];
case 5:
s[3] = LtmpRet = [LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
case 6:
s[2] = 7;
lix(s, _2(Ldata, Lstatement));
case 7:
_325 = s[3];
case 8:
s[2] = 9;
lix(s, _2(Ldata, [LlixVar, ':=', LtmpRet]));
case 9:
_326 = s[3];
case 10:
s[3] = LlixVar
default:
}
return s[3]
}
;
function _730(s) {
switch (s[2]) {
case 0:
_320 = false;
case 1:
s[2] = 2;
lix(s, Lcall(LgetUniqVarName));
case 2:
_328 = s[3];
case 3:
s[3] = LvarName = _328;
case 4:
s[3] = LlixVar = [LvarName, '{atomic}', '{var}', 'tmp'];
case 5:
s[2] = 6;
lix(s, _2(Ldata, [LlixVar, ':=', Lstatement]));
case 6:
_329 = s[3];
case 7:
s[3] = LlixVar
default:
}
return s[3]
}
;
function _726(s) {
switch (s[2]) {
case 0:
_320 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lstatement, undefined));
case 2:
_321 = s[3];
case 3:
if ((_320 && _321)) {
s[2] = 4;
lix(s, _727)
};
case 4:
s[2] = 5;
lix(s, L__eq__(LtmpVarName, true));
case 5:
_323 = s[3];
case 6:
if ((_320 && _323)) {
s[2] = 7;
lix(s, _728)
};
case 7:
s[2] = 8;
lix(s, L__eq__(LtmpVarName, undefined));
case 8:
_327 = s[3];
case 9:
if ((_320 && _327)) {
s[2] = 10;
lix(s, _729)
};
case 10:
s[2] = 11;
lix(s, L__eq__(LtmpVarName, 'new'));
case 11:
_330 = s[3];
case 12:
if ((_320 && _330)) {
s[2] = 13;
lix(s, _730)
}
default:
}
return s[3]
}
return _726;
})
default:
}
return s[3]
}
return _724;
});
case 91:
s[3] = LflattenSeq = (function (Lexpr, Ldefine, LseqCtx) {
var Larguments = arguments;
;
var Lret, Lctx, _361;
function _732(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[3] = Lctx = (function (Lstmt, Lindex) {
var Larguments = arguments;
;
var Lret, _331, _333, _334, _335, _336, _332;
function _735(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LparseInt(Lindex));
case 1:
_334 = s[3];
case 2:
s[2] = 3;
lix(s, L__sub__(Lexpr[0].length, 1));
case 3:
_335 = s[3];
case 4:
s[2] = 5;
lix(s, L__eq__(_334, _335));
case 5:
_336 = s[3];
case 6:
_333 = _336
default:
}
return s[3]
}
;
function _736(s) {
switch (s[2]) {
case 0:
_331 = false;
case 1:
s[2] = 2;
lix(s, LseqCtx(Lstmt));
case 2:
_332 = s[3];
case 3:
s[3] = Lret = _332
default:
}
return s[3]
}
;
function _734(s) {
switch (s[2]) {
case 0:
s[3] = Lret = Lstmt;
case 1:
_331 = true;
case 2:
LseqCtx;
case 3:
_333 = s[3];
case 4:
if (_333) {
s[2] = 5;
lix(s, _735)
};
case 5:
if ((_331 && _333)) {
s[2] = 6;
lix(s, _736)
};
case 6:
s[3] = Lret
default:
}
return s[3]
}
return _734;
});
case 2:
s[2] = 3;
lix(s, Lforeach(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _337, LexprDefine, _338, LitemRet, _339, _340, _341, LstmtRet, LisTmpVar, LisRealVar, LisRealExpr, _353, _357, _358, _359, _360, _354, _355, _356;
function _749(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LisTmpVar(LstmtRet));
case 1:
_359 = s[3];
case 2:
s[2] = 3;
lix(s, Lnot(_359));
case 3:
_360 = s[3];
case 4:
_358 = _360
default:
}
return s[3]
}
;
function _751(s) {
switch (s[2]) {
case 0:
_354 = false;
case 1:
s[3] = LstmtRet = [[LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', LstmtRet]
default:
}
return s[3]
}
;
function _750(s) {
switch (s[2]) {
case 0:
_353 = false;
case 1:
_354 = true;
case 2:
s[2] = 3;
lix(s, LisRealExpr(LstmtRet));
case 3:
_355 = s[3];
case 4:
if ((_354 && _355)) {
s[2] = 5;
lix(s, _751)
};
case 5:
s[2] = 6;
lix(s, _2(Lret, LstmtRet));
case 6:
_356 = s[3]
default:
}
return s[3]
}
;
function _738(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(LstatementFlattenGenerator));
case 1:
_337 = s[3];
case 2:
s[3] = LexprDefine = _337;
case 3:
s[2] = 4;
lix(s, Lflatten(Litem, LexprDefine));
case 4:
_338 = s[3];
case 5:
s[3] = LitemRet = _338;
case 6:
s[2] = 7;
lix(s, Lcall(LexprDefine));
case 7:
_339 = s[3];
case 8:
s[2] = 9;
lix(s, _237(Lret, _339));
case 9:
_340 = s[3];
case 10:
s[3] = Lret = _340;
case 11:
s[2] = 12;
lix(s, Lctx(LitemRet, Lindex));
case 12:
_341 = s[3];
case 13:
s[3] = LstmtRet = _341;
case 14:
s[3] = LisTmpVar = (function (Lexpr) {
var Larguments = arguments;
;
var _342, _343, _344;
function _741(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lexpr[3], undefined));
case 1:
_344 = s[3];
case 2:
_343 = _344
default:
}
return s[3]
}
;
function _740(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 1:
_342 = s[3];
case 2:
_342;
case 3:
_343 = s[3];
case 4:
if (_343) {
s[2] = 5;
lix(s, _741)
}
default:
}
return s[3]
}
return _740;
});
case 15:
s[3] = LisRealVar = (function (Lexpr) {
var Larguments = arguments;
;
var _345, _346, _347;
function _744(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__eq__(Lexpr[3], undefined));
case 1:
_347 = s[3];
case 2:
_346 = _347
default:
}
return s[3]
}
;
function _743(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__eq__(Lexpr[1], '{atomic}'));
case 1:
_345 = s[3];
case 2:
_345;
case 3:
_346 = s[3];
case 4:
if (_346) {
s[2] = 5;
lix(s, _744)
}
default:
}
return s[3]
}
return _743;
});
case 16:
s[3] = LisRealExpr = (function (Lexpr) {
var Larguments = arguments;
;
var _348, _349, _350, _351, _352;
function _748(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lexpr[1], 'while'));
case 1:
_352 = s[3];
case 2:
_351 = _352
default:
}
return s[3]
}
;
function _747(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__ne__(Lexpr[1], 'if'));
case 1:
_350 = s[3];
case 2:
_350;
case 3:
_351 = s[3];
case 4:
if (_351) {
s[2] = 5;
lix(s, _748)
};
case 5:
_349 = _351
default:
}
return s[3]
}
;
function _746(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LisRealVar(Lexpr));
case 1:
_348 = s[3];
case 2:
_348;
case 3:
_349 = s[3];
case 4:
if (_349) {
s[2] = 5;
lix(s, )
} else {
s[2] = 5;
lix(s, _747)
}
default:
}
return s[3]
}
return _746;
});
case 17:
_353 = true;
case 18:
s[2] = 19;
lix(s, L__ne__(LstmtRet[1], '{empty}'));
case 19:
_357 = s[3];
case 20:
_357;
case 21:
_358 = s[3];
case 22:
if (_358) {
s[2] = 23;
lix(s, _749)
};
case 23:
if ((_353 && _358)) {
s[2] = 24;
lix(s, _750)
}
default:
}
return s[3]
}
return _738;
})));
case 3:
_361 = s[3];
case 4:
s[3] = Lexpr[0] = Lret;
case 5:
s[3] = Lexpr
default:
}
return s[3]
}
return _732;
});
case 92:
s[3] = LflattenStart = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var LtrapExpr, _362, Lret, _363, _364, _365;
function _753(s) {
switch (s[2]) {
case 0:
s[3] = LtrapExpr = [[['print', '{atomic}', '{var}'], ['trap', '{atomic}', '{var}']]];
case 1:
s[2] = 2;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 2:
_362 = s[3];
case 3:
s[3] = Lret = _362;
case 4:
s[2] = 5;
lix(s, Lcall(LglobalDefine));
case 5:
_363 = s[3];
case 6:
s[2] = 7;
lix(s, _237(LtrapExpr, _363));
case 7:
_364 = s[3];
case 8:
s[2] = 9;
lix(s, _237(_364, Lret[0]));
case 9:
_365 = s[3];
case 10:
s[3] = Lret[0] = _365;
case 11:
s[3] = [Lret, '{start}']
default:
}
return s[3]
}
return _753;
});
case 93:
s[3] = LflattenModule = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _366, _368, _367, Lname, _370, _369, LmoduleExpr, _371;
function _756(s) {
switch (s[2]) {
case 0:
_366 = false;
case 1:
s[2] = 2;
lix(s, _0(['"', Lexpr[0], '"'], ''));
case 2:
_367 = s[3];
case 3:
s[3] = Lname = [_367, '{atomic}']
default:
}
return s[3]
}
;
function _757(s) {
switch (s[2]) {
case 0:
_366 = false;
case 1:
s[2] = 2;
lix(s, Lflatten(Lexpr[0], Ldefine));
case 2:
_369 = s[3];
case 3:
s[3] = Lname = _369
default:
}
return s[3]
}
;
function _755(s) {
switch (s[2]) {
case 0:
_366 = true;
case 1:
s[2] = 2;
lix(s, L__eq__(Lexpr[2], '{var}'));
case 2:
_368 = s[3];
case 3:
if ((_366 && _368)) {
s[2] = 4;
lix(s, _756)
};
case 4:
s[2] = 5;
lix(s, L__eq__(Lexpr[2], '{index}'));
case 5:
_370 = s[3];
case 6:
if ((_366 && _370)) {
s[2] = 7;
lix(s, _757)
};
case 7:
s[3] = LmoduleExpr = [Lname, ['require', '{atomic}', '{var}']];
case 8:
s[2] = 9;
lix(s, Ldefine(LmoduleExpr));
case 9:
_371 = s[3]
default:
}
return s[3]
}
return _755;
});
case 94:
s[3] = LflattenDefer = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
;
function _759(s) {
switch (s[2]) {
case 0:
s[3] = ['undefined', '{atomic}']
default:
}
return s[3]
}
return _759;
});
case 95:
s[3] = LflattenAmpersand = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
;
function _761(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr
default:
}
return s[3]
}
return _761;
});
case 96:
s[3] = LflattenAnyTypeDestructor = (function (Larg) {
var Larguments = arguments;
;
;
function _763(s) {
switch (s[2]) {
case 0:
s[3] = []
default:
}
return s[3]
}
return _763;
});
case 97:
s[3] = LgetAtomicExprVarName = (function (Lexpr) {
var Larguments = arguments;
;
var _372, LvarName, _373, _374;
function _766(s) {
switch (s[2]) {
case 0:
_373 = false;
case 1:
s[3] = LvarName = Lexpr[0]
default:
}
return s[3]
}
;
function _765(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LtransformVarName(Lexpr[0]));
case 1:
_372 = s[3];
case 2:
s[3] = LvarName = _372;
case 3:
_373 = true;
case 4:
s[2] = 5;
lix(s, L__eq__(Lexpr[3], "{tmp}"));
case 5:
_374 = s[3];
case 6:
if ((_373 && _374)) {
s[2] = 7;
lix(s, _766)
};
case 7:
s[3] = LvarName
default:
}
return s[3]
}
return _765;
});
case 98:
s[3] = LflattenIndexDestructor = (function (Largs, LobjName) {
var Larguments = arguments;
;
var Lret, _375, LvarName, _376, _377, _378, _379;
function _768(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, LgetAtomicExprVarName(Largs[2][0]));
case 2:
_375 = s[3];
case 3:
s[3] = LvarName = _375;
case 4:
s[2] = 5;
lix(s, _0(["var ", LvarName, " = ", LobjName, "[", Largs[0], "]"], ""));
case 5:
_376 = s[3];
case 6:
s[2] = 7;
lix(s, _2(Lret, _376));
case 7:
_377 = s[3];
case 8:
s[2] = 9;
lix(s, LflattenDestructor(Largs[2], LvarName));
case 9:
_378 = s[3];
case 10:
s[2] = 11;
lix(s, _237(Lret, _378));
case 11:
_379 = s[3];
case 12:
s[3] = Lret = _379;
case 13:
s[3] = Lret
default:
}
return s[3]
}
return _768;
});
case 99:
s[3] = LflattenFieldDestructor = (function (Largs, LobjName) {
var Larguments = arguments;
;
var Lret, _380, LvarName, _381, _382, _383, _384;
function _770(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, LgetAtomicExprVarName(Largs[2][0]));
case 2:
_380 = s[3];
case 3:
s[3] = LvarName = _380;
case 4:
s[2] = 5;
lix(s, _0(["var ", LvarName, " = ", LobjName, ".", Largs[0]], ""));
case 5:
_381 = s[3];
case 6:
s[2] = 7;
lix(s, _2(Lret, _381));
case 7:
_382 = s[3];
case 8:
s[2] = 9;
lix(s, LflattenDestructor(Largs[2], LvarName));
case 9:
_383 = s[3];
case 10:
s[2] = 11;
lix(s, _237(Lret, _383));
case 11:
_384 = s[3];
case 12:
s[3] = Lret = _384;
case 13:
s[3] = Lret
default:
}
return s[3]
}
return _770;
});
case 100:
s[3] = LflattenObjectDestructor = (function (Largs, LobjName) {
var Larguments = arguments;
;
var Lret, _387;
function _772(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lforeach(Largs[2], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _385, _386;
function _774(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenDestructor(Litem, LobjName));
case 1:
_385 = s[3];
case 2:
s[2] = 3;
lix(s, _237(Lret, _385));
case 3:
_386 = s[3];
case 4:
s[3] = Lret = _386
default:
}
return s[3]
}
return _774;
})));
case 2:
_387 = s[3];
case 3:
s[3] = Lret
default:
}
return s[3]
}
return _772;
});
case 101:
s[3] = LflattenArrayDestructor = (function (Largs, LarrayName) {
var Larguments = arguments;
;
var Lret, _393;
function _776(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lforeach(Largs[2], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _388, LvarName, _389, _390, _391, _392;
function _778(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetAtomicExprVarName(Litem[0]));
case 1:
_388 = s[3];
case 2:
s[3] = LvarName = _388;
case 3:
s[2] = 4;
lix(s, _0(["var ", LvarName, " = ", LarrayName, "[", Lindex, "]"], ""));
case 4:
_389 = s[3];
case 5:
s[2] = 6;
lix(s, _2(Lret, _389));
case 6:
_390 = s[3];
case 7:
s[2] = 8;
lix(s, LflattenDestructor(Litem, LvarName));
case 8:
_391 = s[3];
case 9:
s[2] = 10;
lix(s, _237(Lret, _391));
case 10:
_392 = s[3];
case 11:
s[3] = Lret = _392
default:
}
return s[3]
}
return _778;
})));
case 2:
_393 = s[3];
case 3:
s[3] = Lret
default:
}
return s[3]
}
return _776;
});
case 102:
s[3] = LflattenArrayCondition = (function (Largs, LvarName) {
var Larguments = arguments;
;
var _394, Lret, _399, _400, _401;
function _780(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _0([LvarName, ".length == ", Largs[2].length], ""));
case 1:
_394 = s[3];
case 2:
s[3] = Lret = [_394];
case 3:
s[2] = 4;
lix(s, Lforeach(Largs[2], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _395, _396, Lcond, _397, _398;
function _783(s) {
switch (s[2]) {
case 0:
_397 = false;
case 1:
s[2] = 2;
lix(s, _2(Lret, Lcond));
case 2:
_398 = s[3]
default:
}
return s[3]
}
;
function _782(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _0([LvarName, "[", Lindex, "]"], ""));
case 1:
_395 = s[3];
case 2:
s[2] = 3;
lix(s, LflattenCondition(Litem, _395));
case 3:
_396 = s[3];
case 4:
s[3] = Lcond = _396;
case 5:
_397 = true;
case 6:
if ((_397 && Lcond)) {
s[2] = 7;
lix(s, _783)
}
default:
}
return s[3]
}
return _782;
})));
case 4:
_399 = s[3];
case 5:
s[2] = 6;
lix(s, _0(Lret, " && "));
case 6:
_400 = s[3];
case 7:
s[2] = 8;
lix(s, _0(["(", Lret, ")"], ""));
case 8:
_401 = s[3]
default:
}
return s[3]
}
return _780;
});
case 103:
s[3] = LflattenVAArgsDestructor = (function (Largs, LarrayName) {
var Larguments = arguments;
;
var Ltail_lenth, Lret, _409, _410, _414, _411, LvarName, _412, _413, _421;
function _789(s) {
switch (s[2]) {
case 0:
_410 = false;
case 1:
s[2] = 2;
lix(s, LgetAtomicExprVarName(Largs[3][0]));
case 2:
_411 = s[3];
case 3:
s[3] = LvarName = _411;
case 4:
s[2] = 5;
lix(s, _0(["var ", LvarName, " = Array.prototype.slice.call(", LarrayName, ", ", Largs[2].length, ", ", LarrayName, ".length - ", Ltail_lenth, ")"], ""));
case 5:
_412 = s[3];
case 6:
s[2] = 7;
lix(s, _2(Lret, _412));
case 7:
_413 = s[3]
default:
}
return s[3]
}
;
function _785(s) {
switch (s[2]) {
case 0:
s[3] = Ltail_lenth = Largs[4].length;
case 1:
s[3] = Lret = [];
case 2:
s[2] = 3;
lix(s, Lforeach(Largs[2], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _402, LvarName, _403, _406, _404, _405, _407, _408;
function _788(s) {
switch (s[2]) {
case 0:
_403 = false;
case 1:
s[2] = 2;
lix(s, _0(["var ", LvarName, " = ", LarrayName, "[", Lindex, "]"], ""));
case 2:
_404 = s[3];
case 3:
s[2] = 4;
lix(s, _2(Lret, _404));
case 4:
_405 = s[3]
default:
}
return s[3]
}
;
function _787(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetAtomicExprVarName(Litem[0]));
case 1:
_402 = s[3];
case 2:
s[3] = LvarName = _402;
case 3:
_403 = true;
case 4:
s[2] = 5;
lix(s, L__ne__(LarrayName, "arguments"));
case 5:
_406 = s[3];
case 6:
if ((_403 && _406)) {
s[2] = 7;
lix(s, _788)
};
case 7:
s[2] = 8;
lix(s, LflattenDestructor(Litem, LvarName));
case 8:
_407 = s[3];
case 9:
s[2] = 10;
lix(s, _237(Lret, _407));
case 10:
_408 = s[3];
case 11:
s[3] = Lret = _408
default:
}
return s[3]
}
return _787;
})));
case 3:
_409 = s[3];
case 4:
_410 = true;
case 5:
s[2] = 6;
lix(s, L__eq__(Largs[3][1], "{va_arg}"));
case 6:
_414 = s[3];
case 7:
if ((_410 && _414)) {
s[2] = 8;
lix(s, _789)
};
case 8:
s[2] = 9;
lix(s, Lforeach(Largs[4], (function (Litem, Lindex) {
var Larguments = arguments;
;
var _415, LvarName, _416, _417, _418, _419, _420;
function _791(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetAtomicExprVarName(Litem[0]));
case 1:
_415 = s[3];
case 2:
s[3] = LvarName = _415;
case 3:
s[2] = 4;
lix(s, L__sub__(Ltail_lenth, Lindex));
case 4:
_416 = s[3];
case 5:
s[2] = 6;
lix(s, _0(["var ", LvarName, " = ", LarrayName, "[", LarrayName, ".length - ", _416, "]"], ""));
case 6:
_417 = s[3];
case 7:
s[2] = 8;
lix(s, _2(Lret, _417));
case 8:
_418 = s[3];
case 9:
s[2] = 10;
lix(s, LflattenDestructor(Litem, LvarName));
case 10:
_419 = s[3];
case 11:
s[2] = 12;
lix(s, _237(Lret, _419));
case 12:
_420 = s[3];
case 13:
s[3] = Lret = _420
default:
}
return s[3]
}
return _791;
})));
case 9:
_421 = s[3];
case 10:
s[3] = Lret
default:
}
return s[3]
}
return _785;
});
case 104:
s[3] = LflattenAnyTypeCondition = (function (Largs, LvarName) {
var Larguments = arguments;
;
;
function _793(s) {
switch (s[2]) {
case 0:
s[3] = null
default:
}
return s[3]
}
return _793;
});
case 105:
s[3] = LflattenConditionOp = {
"{any_type_arg}": LflattenAnyTypeCondition,
"{anonymous_va_arg}": LflattenAnyTypeCondition,
"{array_arg}": LflattenArrayCondition
};
case 106:
s[3] = LflattenDestructorOp = {
"{any_type_arg}": LflattenAnyTypeDestructor,
"{anonymous_va_arg}": LflattenAnyTypeDestructor,
"{array_arg}": LflattenArrayDestructor,
"{va_args}": LflattenVAArgsDestructor,
"{object_arg}": LflattenObjectDestructor,
"{index_arg}": LflattenIndexDestructor,
"{field_arg}": LflattenFieldDestructor
};
case 107:
s[3] = LgetFlattenDestructorOp = (function (Lhint) {
var Larguments = arguments;
;
var Lret, _422;
function _796(s) {
switch (s[2]) {
case 0:
_422 = false;
case 1:
s[3] = Lret = LflattenDestructorOp[Lhint]
default:
}
return s[3]
}
;
function _795(s) {
switch (s[2]) {
case 0:
s[3] = Lret = LflattenArrayDestructor;
case 1:
_422 = true;
case 2:
if ((_422 && LflattenDestructorOp[Lhint])) {
s[2] = 3;
lix(s, _796)
};
case 3:
s[3] = Lret
default:
}
return s[3]
}
return _795;
});
case 108:
s[3] = LgetFlattenConditionOp = (function (Lhint) {
var Larguments = arguments;
;
var Lret, _423;
function _799(s) {
switch (s[2]) {
case 0:
_423 = false;
case 1:
s[3] = Lret = LflattenConditionOp[Lhint]
default:
}
return s[3]
}
;
function _798(s) {
switch (s[2]) {
case 0:
s[3] = Lret = LflattenArrayCondition;
case 1:
_423 = true;
case 2:
if ((_423 && LflattenConditionOp[Lhint])) {
s[2] = 3;
lix(s, _799)
};
case 3:
s[3] = Lret
default:
}
return s[3]
}
return _798;
});
case 109:
s[3] = LflattenDestructor = (function (Largs, LvarName) {
var Larguments = arguments;
;
var _424, _425;
function _801(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetFlattenDestructorOp(Largs[1]));
case 1:
_424 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(_424, Largs, LvarName));
case 3:
_425 = s[3]
default:
}
return s[3]
}
return _801;
});
case 110:
s[3] = LflattenCondition = (function (Largs, LvarName) {
var Larguments = arguments;
;
var _426, _427;
function _803(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LgetFlattenConditionOp(Largs[1]));
case 1:
_426 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(_426, Largs, LvarName));
case 3:
_427 = s[3]
default:
}
return s[3]
}
return _803;
});
case 111:
s[3] = LflattenArgumentsCondition = (function (Largs) {
var Larguments = arguments;
;
var _428;
function _805(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenCondition(Largs, "arguments"));
case 1:
_428 = s[3]
default:
}
return s[3]
}
return _805;
});
case 112:
s[3] = LflattenArgumentsDestructor = (function (Largs) {
var Larguments = arguments;
;
var _429;
function _807(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenDestructor(Largs, "arguments"));
case 1:
_429 = s[3]
default:
}
return s[3]
}
return _807;
});
case 113:
s[3] = LgetFuncArgsNameList = (function (Largs) {
var Larguments = arguments;
;
var Lret, _431;
function _809(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lforeach(Largs[2], (function (Litem) {
var Larguments = arguments;
;
var _430;
function _811(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _2(Lret, Litem[0]));
case 1:
_430 = s[3]
default:
}
return s[3]
}
return _811;
})));
case 2:
_431 = s[3];
case 3:
s[3] = Lret
default:
}
return s[3]
}
return _809;
});
case 114:
s[3] = LflattenFn = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var Lseq, _432, Ldestructor, _433, LfuncArgsNameList, _434, Lcondition, _435, Lfunc;
function _813(s) {
switch (s[2]) {
case 0:
s[3] = Lseq = Lexpr[3];
case 1:
s[2] = 2;
lix(s, LflattenArgumentsDestructor(Lexpr[2]));
case 2:
_432 = s[3];
case 3:
s[3] = Ldestructor = _432;
case 4:
s[2] = 5;
lix(s, LgetFuncArgsNameList(Lexpr[2]));
case 5:
_433 = s[3];
case 6:
s[3] = LfuncArgsNameList = _433;
case 7:
s[2] = 8;
lix(s, LflattenArgumentsCondition(Lexpr[2]));
case 8:
_434 = s[3];
case 9:
s[3] = Lcondition = _434;
case 10:
s[2] = 11;
lix(s, Lflatten([LfuncArgsNameList, "{func}", Lseq, Ldestructor], Ldefine));
case 11:
_435 = s[3];
case 12:
s[3] = Lfunc = _435;
case 13:
s[3] = [Lexpr[0], "{fn}", Lfunc, Lcondition]
default:
}
return s[3]
}
return _813;
});
case 115:
s[3] = LflattenAsterisk = (function (Lexpr, Ldefine) {
var Larguments = arguments;
;
var _436;
function _815(s) {
switch (s[2]) {
case 0:
s[3] = Lexpr[1] = ['call', '{atomic}', '{var}'];
case 1:
s[2] = 2;
lix(s, Lflatten(Lexpr, Ldefine));
case 2:
_436 = s[3]
default:
}
return s[3]
}
return _815;
});
case 116:
s[3] = Lidentity = (function (Lx) {
var Larguments = arguments;
;
;
function _817(s) {
switch (s[2]) {
case 0:
s[3] = Lx
default:
}
return s[3]
}
return _817;
});
case 117:
s[3] = LflattenOpTable = {
'{start}': LflattenStart,
'{seq}': LflattenSeq,
'{mono}': LflattenMono,
'{atomic}': LflattenAtomic,
'{.}': LflattenFieldAccess,
'{module}': LflattenModule,
'{func}': LflattenFunc,
'{fn}': LflattenFn,
'{ampersand}': LflattenAmpersand,
'{asterisk}': LflattenAsterisk,
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
case 118:
s[3] = LflattenOp = (function (Lhint) {
var Larguments = arguments;
;
var _437;
function _820(s) {
switch (s[2]) {
case 0:
_437 = false;
case 1:
s[3] = LflattenOpTable[Lhint]
default:
}
return s[3]
}
;
function _821(s) {
switch (s[2]) {
case 0:
s[3] = LflattenExpr
default:
}
return s[3]
}
;
function _819(s) {
switch (s[2]) {
case 0:
_437 = true;
case 1:
if ((_437 && LflattenOpTable[Lhint])) {
s[2] = 2;
lix(s, _820)
};
case 2:
if (_437) {
s[2] = 3;
lix(s, _821)
}
default:
}
return s[3]
}
return _819;
});
case 119:
s[3] = Lflatten = (function (Lexpr, Ldefine, Lctx) {
var Larguments = arguments;
;
var _438, _439;
function _823(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LflattenOp(Lexpr[1]));
case 1:
_438 = s[3];
case 2:
s[2] = 3;
lix(s, _438(Lexpr, Ldefine, Lctx));
case 3:
_439 = s[3]
default:
}
return s[3]
}
return _823;
});
case 120:
s[3] = Ldefine0 = (function (Li) {
var Larguments = arguments;
;
;
function _825(s) {
switch (s[2]) {
case 0:
s[3] = Li
default:
}
return s[3]
}
return _825;
});
case 121:
s[3] = Ldef0 = {
defineVar: (function (Li) {
var Larguments = arguments;
;
;
function _827(s) {
switch (s[2]) {

default:
}
return s[3]
}
return _827;
}),
appendExpr: (function (Li) {
var Larguments = arguments;
;
;
function _829(s) {
switch (s[2]) {

default:
}
return s[3]
}
return _829;
})
};
case 122:
s[2] = 123;
lix(s, Ljoin(['s[', LSTEP, ']']));
case 123:
_440 = s[3];
case 124:
s[2] = 125;
lix(s, Ljoin(['s[', LRET, ']']));
case 125:
_441 = s[3];
case 126:
s[3] = LseqFuncParamsName = {
step: _440,
ret: _441
};
case 127:
s[3] = LbuiltinNames = {
ccException: '_lixCCException'
};
case 128:
s[3] = Lcompile = (function (Lexpr) {
var Larguments = arguments;
;
var _442, _443, Llibs, _444, LflattenedExpr, _445, _446, Lcode, _447;
function _831(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lmap(Lenv0, (function (Li) {
var Larguments = arguments;
;
;
function _833(s) {
switch (s[2]) {
case 0:
s[3] = Li
default:
}
return s[3]
}
return _833;
})));
case 1:
_442 = s[3];
case 2:
s[2] = 3;
lix(s, _0(_442, "\n"));
case 3:
_443 = s[3];
case 4:
s[3] = Llibs = _443;
case 5:
s[2] = 6;
lix(s, Lflatten(Lexpr, (function (Li) {
var Larguments = arguments;
;
;
function _835(s) {
switch (s[2]) {

default:
}
return s[3]
}
return _835;
}), (function (Li) {
var Larguments = arguments;
;
;
function _837(s) {
switch (s[2]) {
case 0:
s[3] = Li
default:
}
return s[3]
}
return _837;
})));
case 6:
_444 = s[3];
case 7:
s[3] = LflattenedExpr = _444;
case 8:
s[2] = 9;
lix(s, Lcall(Lenv_new));
case 9:
_445 = s[3];
case 10:
s[2] = 11;
lix(s, LgenerateStart(LflattenedExpr, _445, Lctx0, Ldef0));
case 11:
_446 = s[3];
case 12:
s[3] = Lcode = _446;
case 13:
s[2] = 14;
lix(s, Ljoin([Llibs, "\n", Lcode]));
case 14:
_447 = s[3]
default:
}
return s[3]
}
return _831;
});
case 129:
s[3] = exports = Lcompile;
case 130:
s[3] = Lcompile
default:
}
return s[3]
}
;
;
module.exports = _448
