
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _12, _23, _3, _5, _6, _10, _11, Ldata, _17, _22, _24, _25, _26, _37, _38;
function _46(Lx) {
var Larguments = arguments;
;
;
function _48(s) {
switch (s[2]) {
case 0:
s[3] = [Lx]
default:
}
return s[3]
}
;
;
return _48;
};
function _49(LA) {
var Larguments = arguments;
;
var _0, _1;
function _51(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__xcompose__(Larray2xlist, LleaveXlist));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, _0(Larguments[0]));
case 3:
_1 = s[3]
default:
}
return s[3]
}
;
;
return _51;
};
function _52(L_) {
var Larguments = arguments;
;
var _2;
function _54(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LIdentity(Larguments[0]));
case 1:
_2 = s[3]
default:
}
return s[3]
}
;
;
return _54;
};
function _57(LA) {
var Larguments = arguments;
;
var _7, _8;
function _59(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__compose__(LleaveXlist, Lxlist2array));
case 1:
_7 = s[3];
case 2:
s[2] = 3;
lix(s, _7(Larguments[0]));
case 3:
_8 = s[3]
default:
}
return s[3]
}
;
;
return _59;
};
function _60(L_) {
var Larguments = arguments;
;
var _9;
function _62(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LwrappedInArray(Larguments[0]));
case 1:
_9 = s[3]
default:
}
return s[3]
}
;
;
return _62;
};
function _63(_u_5) {
var Larguments = arguments;
var LA = _u_5.children;
var _13, _14, _15;
function _65(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__compose__(_12, Larray2xlist));
case 1:
_13 = s[3];
case 2:
s[2] = 3;
lix(s, L__xcompose__(_13, LtreeLeafXlist));
case 3:
_14 = s[3];
case 4:
s[2] = 5;
lix(s, _14(Larguments[0]));
case 5:
_15 = s[3]
default:
}
return s[3]
}
;
;
return _65;
};
function _66(L_) {
var Larguments = arguments;
;
var _16;
function _68(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LIdentity(Larguments[0]));
case 1:
_16 = s[3]
default:
}
return s[3]
}
;
;
return _68;
};
function _69(Lxl0, Lxl1) {
var Larguments = arguments;
var Lxl1 = Lxl1;
var _18, _19;
function _71(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LIdentity(Lxl1));
case 1:
_18 = s[3];
case 2:
s[2] = 3;
lix(s, Lprepend(Lxl0, _18));
case 3:
_19 = s[3]
default:
}
return s[3]
}
;
;
return _71;
};
function _72(Lxl0, Lxl1) {
var Larguments = arguments;
;
;
function _74(s) {
switch (s[2]) {
case 0:
s[3] = (function (Lappend) {
var Larguments = arguments;
;
var _20, _21;
function _76(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lxl1, Lappend));
case 1:
_20 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(Lxl0, Lappend));
case 3:
_21 = s[3]
default:
}
return s[3]
}
return _76;
})
default:
}
return s[3]
}
;
;
return _74;
};
function _77(_u_12) {
var Larguments = arguments;
var Lx = _u_12.node;
var LA = _u_12.children;
var _27, _28, _29, _30, _31;
function _79(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__compose__(_12, Larray2xlist));
case 1:
_27 = s[3];
case 2:
s[2] = 3;
lix(s, L__(Lprepend, {
node: Lx
}));
case 3:
_28 = s[3];
case 4:
s[2] = 5;
lix(s, L__compose__(_27, _28));
case 5:
_29 = s[3];
case 6:
s[2] = 7;
lix(s, L__xcompose__(_29, LtreeNodeXlist));
case 7:
_30 = s[3];
case 8:
s[2] = 9;
lix(s, _30(Larguments[0]));
case 9:
_31 = s[3]
default:
}
return s[3]
}
;
;
return _79;
};
function _80(L_) {
var Larguments = arguments;
;
var _32;
function _82(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, LIdentity(Larguments[0]));
case 1:
_32 = s[3]
default:
}
return s[3]
}
;
;
return _82;
};
function _83(L_) {
var Larguments = arguments;
;
var _33, _34, _35, _36;
function _85(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__(Lmap, _23));
case 1:
_33 = s[3];
case 2:
s[2] = 3;
lix(s, L__compose__(LtreeNodeXlist, _33));
case 3:
_34 = s[3];
case 4:
s[2] = 5;
lix(s, L__compose__(_34, Lxlist2array));
case 5:
_35 = s[3];
case 6:
s[2] = 7;
lix(s, _35(Larguments[0]));
case 7:
_36 = s[3]
default:
}
return s[3]
}
;
;
return _85;
};
function _39(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
_12 = (function (_40, _41) {
if (_40 == undefined || _40 == null ) {
return function () {
return _40;
}
}
if (typeof _40.children === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _40.children.apply(_40, arguments);
} else {
if (arguments.length > 1) {
return function () {
_40.children = _41;
return _40;
}
}
return function () {
return _40.children;
}
}});
case 2:
_23 = (function (_43, _44) {
if (_43 == undefined || _43 == null ) {
return function () {
return _43;
}
}
if (typeof _43.node === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _43.node.apply(_43, arguments);
} else {
if (arguments.length > 1) {
return function () {
_43.node = _44;
return _43;
}
}
return function () {
return _43.node;
}
}});
case 6:
s[2] = 7;
lix(s, LleaveXlist([1, 2, 3, [4], [5, [6], [7, 8, [9, [10, 11]]]]]));
case 7:
_3 = s[3];
case 8:
s[2] = 9;
lix(s, Lmap(_3, (function (L_0, L_1, L_2, L_3, L_4, L_5, L_6, L_7, L_8, L_9) {
var Larguments = arguments;
;
var _4;
function _56(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(L_0, L_0));
case 1:
_4 = s[3]
default:
}
return s[3]
}
return _56;
})));
case 9:
_5 = s[3];
case 10:
s[2] = 11;
lix(s, Lcall(_5, Lprint));
case 11:
_6 = s[3];
case 14:
s[2] = 15;
lix(s, Lflatten([1, 2, 3, [4], [5, [6], [7, 8, [9, [10, 11]]]]]));
case 15:
_10 = s[3];
case 16:
s[2] = 17;
lix(s, Lprint(_10));
case 17:
_11 = s[3];
case 20:
s[2] = 21;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Ldata = _x
}
} else {
return function () {
return Ldata
}
}
})({
node: 0.5,
children: [{
node: 1
}, {
node: 2
}, {
node: 3
}, {
node: 4
}, {
node: 4.5,
children: [{
node: 5
}, {
node: 6
}, {
node: 7
}, {
node: 8
}]
}]
}));
case 21:
_17 = s[3];
case 24:
s[2] = 25;
lix(s, LtreeLeafXlist(Ldata));
case 25:
_22 = s[3];
case 26:
s[2] = 27;
lix(s, Lmap(_22, _23));
case 27:
_24 = s[3];
case 28:
s[2] = 29;
lix(s, Lxlist2array(_24));
case 29:
_25 = s[3];
case 30:
s[2] = 31;
lix(s, Lprint(_25));
case 31:
_26 = s[3];
case 35:
s[2] = 36;
lix(s, LtreeNodeArray(Ldata));
case 36:
_37 = s[3];
case 37:
s[2] = 38;
lix(s, Lprint(_37));
case 38:
_38 = s[3]
default:
}
return s[3]
}
;
function LwrappedInArray(_fn_0) {
var _at_86;
if (arguments.length == 1 && ((_at_86 = arguments[0]) || 1) && (1)) {
return _46(_fn_0);
}
}

function LleaveXlist(_fn_0) {
var _at_87;
if (arguments.length == 1 && ((_at_87 = arguments[0]) || 1) && (_at_87 instanceof LArray)) {
return _49(_fn_0);
}
var _at_88;
if (arguments.length == 1 && ((_at_88 = arguments[0]) || 1) && (1)) {
return _52(_fn_0);
}
}

function Lflatten(_fn_0) {
var _at_89;
if (arguments.length == 1 && ((_at_89 = arguments[0]) || 1) && (_at_89 instanceof LArray)) {
return _57(_fn_0);
}
var _at_90;
if (arguments.length == 1 && ((_at_90 = arguments[0]) || 1) && (1)) {
return _60(_fn_0);
}
}

function LtreeLeafXlist(_fn_0) {
var _at_91, _at_92;
if (arguments.length == 1 && ((_at_91 = arguments[0]) || 1) && (_at_91 && (((_at_92 = _at_91.children) || 1) && (_at_92 instanceof LArray)))) {
return _63(_fn_0);
}
var _at_93;
if (arguments.length == 1 && ((_at_93 = arguments[0]) || 1) && (1)) {
return _66(_fn_0);
}
}

function Lprepend(_fn_0, _fn_1) {
var _at_94, _at_95;
if (arguments.length == 2 && ((_at_94 = arguments[0]) || 1) && (1) && ((_at_95 = arguments[1]) || 1) && (!(typeof _at_95 == 'function'))) {
return _69(_fn_0, _fn_1);
}
var _at_96, _at_97;
if (arguments.length == 2 && ((_at_96 = arguments[0]) || 1) && (1) && ((_at_97 = arguments[1]) || 1) && (1)) {
return _72(_fn_0, _fn_1);
}
}

function LtreeNodeXlist(_fn_0) {
var _at_98, _at_99, _at_100;
if (arguments.length == 1 && ((_at_98 = arguments[0]) || 1) && (_at_98 && (((_at_99 = _at_98.node) || 1) && (1)) && (((_at_100 = _at_98.children) || 1) && (_at_100 instanceof LArray)))) {
return _77(_fn_0);
}
var _at_101;
if (arguments.length == 1 && ((_at_101 = arguments[0]) || 1) && (1)) {
return _80(_fn_0);
}
}

function LtreeNodeArray(_fn_0) {
var _at_102;
if (arguments.length == 1 && ((_at_102 = arguments[0]) || 1) && (1)) {
return _83(_fn_0);
}
}
;
module.exports = _39
