
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Lf, _1, _2, _4, _6, _8, _10, _12, _14, _15;
function _22(LB) {
var Larguments = arguments;
var LB = arguments ? arguments[0] : undefined;
var _3;
function _24(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('boolean'));
case 1:
_3 = s[3]
default:
}
return s[3]
}
;
;
return _24;
};
function _25(_u_3) {
var Larguments = arguments;
var _u_3 = arguments ? arguments[0] : undefined;
var _5;
function _27(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('> 0'));
case 1:
_5 = s[3]
default:
}
return s[3]
}
;
;
return _27;
};
function _28(LN) {
var Larguments = arguments;
var LN = arguments ? arguments[0] : undefined;
var _7;
function _30(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('number'));
case 1:
_7 = s[3]
default:
}
return s[3]
}
;
;
return _30;
};
function _31(LS) {
var Larguments = arguments;
var LS = arguments ? arguments[0] : undefined;
var _9;
function _33(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('string'));
case 1:
_9 = s[3]
default:
}
return s[3]
}
;
;
return _33;
};
function _34(_u_9) {
var Larguments = arguments;
var _u_9 = arguments ? arguments[0] : undefined;
var _u_7 = _u_9.length;
var _11;
function _36(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('array'));
case 1:
_11 = s[3]
default:
}
return s[3]
}
;
;
return _36;
};
function _37(L_) {
var Larguments = arguments;
var L_ = arguments ? arguments[0] : undefined;
var _13;
function _39(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('else'));
case 1:
_13 = s[3]
default:
}
return s[3]
}
;
;
return _39;
};
function _40() {
var Larguments = arguments;
;
;
function _42(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
;
return _42;
};
function _16(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[3] = Lf = (function () {
var Larguments = arguments;
;
var _0;
function _19() {
var Larguments = arguments;
;
;
function _21(s) {
switch (s[2]) {
case 0:
s[3] = 3
default:
}
return s[3]
}
;
;
return _21;
};
function _18(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lf0));
case 1:
_0 = s[3]
default:
}
return s[3]
}
function Lf0() {
if (arguments.length == 0) {
return _19();
}
}
return _18;
});
case 2:
s[2] = 3;
lix(s, Lcall(Lf));
case 3:
_1 = s[3];
case 4:
s[2] = 5;
lix(s, Lprint(_1));
case 5:
_2 = s[3];
case 7:
_4 = s[3];
case 9:
_6 = s[3];
case 11:
_8 = s[3];
case 13:
_10 = s[3];
case 15:
_12 = s[3];
case 17:
_14 = s[3];
case 19:
_15 = s[3];
case 20:
s[3] = s[2] = 21;
lix(s, _u_2([1, 2, 3]))
default:
}
return s[3]
}
;
function _u_2(_fn_0) {
var _at_43;
if (arguments.length == 1 && ((_at_43 = arguments[0]) || 1) && (typeof _at_43 == 'boolean')) {
return _22(_fn_0);
}
var _at_44;
if (arguments.length == 1 && ((_at_44 = arguments[0]) || 1) && (typeof(_at_44) == 'number' && _at_44 >= 0)) {
return _25(_fn_0);
}
var _at_45;
if (arguments.length == 1 && ((_at_45 = arguments[0]) || 1) && (typeof _at_45 == 'number')) {
return _28(_fn_0);
}
var _at_46;
if (arguments.length == 1 && ((_at_46 = arguments[0]) || 1) && (typeof _at_46 == 'string')) {
return _31(_fn_0);
}
var _at_47, _at_48;
if (arguments.length == 1 && ((_at_47 = arguments[0]) || 1) && ((_at_47 instanceof LArray) && (_at_47 && (((_at_48 = _at_47.length) || 1) && (typeof(_at_48) == 'number' && _at_48 >= 3))))) {
return _34(_fn_0);
}
var _at_49;
if (arguments.length == 1) {
return _37(_fn_0);
}
return _40();
}
;
module.exports = _16
