
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _1, _3, _5, _7, _9, _11, _12, _13, _14;
function _16(LB) {
var Larguments = arguments;
var LB = arguments ? arguments[0] : undefined;
var _0;
function _18(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('boolean'));
case 1:
_0 = s[3]
default:
}
return s[3]
}
;
;
return _18;
};
function _19(_u_2) {
var Larguments = arguments;
var _u_2 = arguments ? arguments[0] : undefined;
var _2;
function _21(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('> 0'));
case 1:
_2 = s[3]
default:
}
return s[3]
}
;
;
return _21;
};
function _22(LN) {
var Larguments = arguments;
var LN = arguments ? arguments[0] : undefined;
var _4;
function _24(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('number'));
case 1:
_4 = s[3]
default:
}
return s[3]
}
;
;
return _24;
};
function _25(LS) {
var Larguments = arguments;
var LS = arguments ? arguments[0] : undefined;
var _6;
function _27(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('string'));
case 1:
_6 = s[3]
default:
}
return s[3]
}
;
;
return _27;
};
function _28(_u_8) {
var Larguments = arguments;
var _u_8 = arguments ? arguments[0] : undefined;
var _u_6 = _u_8.length;
var _8;
function _30(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('array'));
case 1:
_8 = s[3]
default:
}
return s[3]
}
;
;
return _30;
};
function _31(L_) {
var Larguments = arguments;
var L_ = arguments ? arguments[0] : undefined;
var _10;
function _33(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('else'));
case 1:
_10 = s[3]
default:
}
return s[3]
}
;
;
return _33;
};
function _34() {
var Larguments = arguments;
;
;
function _36(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
;
return _36;
};
function _37(Lx) {
var Larguments = arguments;
var Lx = arguments ? arguments[0] : undefined;
var Lx = Lx;
;
function _39(s) {
switch (s[2]) {
case 0:
s[3] = 3
default:
}
return s[3]
}
;
;
return _39;
};
function _15(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 2:
_1 = s[3];
case 4:
_3 = s[3];
case 6:
_5 = s[3];
case 8:
_7 = s[3];
case 10:
_9 = s[3];
case 12:
_11 = s[3];
case 14:
_12 = s[3];
case 15:
s[3] = s[2] = 16;
lix(s, _u_1([1, 2, 3]));
case 17:
s[2] = 18;
lix(s, Lf(4));
case 18:
_13 = s[3];
case 19:
s[2] = 20;
lix(s, Lprint(_13));
case 20:
_14 = s[3]
default:
}
return s[3]
}
;
function _u_1(_fn_0) {
var _at_40;
if (arguments.length == 1 && ((_at_40 = arguments[0]) || 1) && (typeof _at_40 == 'boolean')) {
return _16(_fn_0);
}
var _at_41;
if (arguments.length == 1 && ((_at_41 = arguments[0]) || 1) && (typeof(_at_41) == 'number' && _at_41 >= 0)) {
return _19(_fn_0);
}
var _at_42;
if (arguments.length == 1 && ((_at_42 = arguments[0]) || 1) && (typeof _at_42 == 'number')) {
return _22(_fn_0);
}
var _at_43;
if (arguments.length == 1 && ((_at_43 = arguments[0]) || 1) && (typeof _at_43 == 'string')) {
return _25(_fn_0);
}
var _at_44, _at_45;
if (arguments.length == 1 && ((_at_44 = arguments[0]) || 1) && ((_at_44 instanceof LArray) && (_at_44 && (((_at_45 = _at_44.length) || 1) && (typeof(_at_45) == 'number' && _at_45 >= 3))))) {
return _28(_fn_0);
}
var _at_46;
if (arguments.length == 1) {
return _31(_fn_0);
}
return _34();
}

function Lf(_fn_0) {
var _at_47;
if (arguments.length == 1) {
return _37(_fn_0);
}
}
;
module.exports = _15
