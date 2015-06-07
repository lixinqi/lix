
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15;
function _17(_u_0) {
var Larguments = arguments;
var _u_0 = arguments[0];
;
function _19(s) {
switch (s[2]) {
case 0:
s[3] = ["zero"]
default:
}
return s[3]
}
;
;
return _19;
};
function _20(_u_2) {
var Larguments = arguments;
var _u_2 = arguments[0];
var Lx = _u_2[0];
;
function _22(s) {
switch (s[2]) {
case 0:
s[3] = ["one", Lx]
default:
}
return s[3]
}
;
;
return _22;
};
function _23(_u_4) {
var Larguments = arguments;
var _u_4 = arguments[0];
var Lx = _u_4[0];
var Ly = _u_4[1];
;
function _25(s) {
switch (s[2]) {
case 0:
s[3] = ["two", Lx, Ly]
default:
}
return s[3]
}
;
;
return _25;
};
function _26(_u_6) {
var Larguments = arguments;
var _u_6 = arguments[0];
var Lx = _u_6[0];
var Ly = _u_6[1];
var Lz = _u_6[2];
;
function _28(s) {
switch (s[2]) {
case 0:
s[3] = ["three", Lx, Ly, Lz]
default:
}
return s[3]
}
;
;
return _28;
};
function _29(_u_10) {
var Larguments = arguments;
var _u_10 = arguments[0];
var Lx = _u_10[0];
var Ly = _u_10[1];
var Lz = _u_10[2];
var Lxs = Array.prototype.slice.call(_u_10, 3, _u_10.length - 1);
var Lt = _u_10[_u_10.length - 1];
;
function _31(s) {
switch (s[2]) {
case 0:
s[3] = ["more than three", Lx, Ly, Lz, Lxs, Lt]
default:
}
return s[3]
}
;
;
return _31;
};
function _32(Lx) {
var Larguments = arguments;
var Lx = arguments[0];
;
function _34(s) {
switch (s[2]) {
case 0:
s[3] = ["single"]
default:
}
return s[3]
}
;
;
return _34;
};
function _35() {
var Larguments = arguments;
;
;
function _37(s) {
switch (s[2]) {
case 0:
s[3] = ["error"]
default:
}
return s[3]
}
;
;
return _37;
};
function _16(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 8:
s[2] = 9;
lix(s, Lcall(Lf, []));
case 9:
_0 = s[3];
case 10:
s[2] = 11;
lix(s, Lprint(_0));
case 11:
_1 = s[3];
case 12:
s[2] = 13;
lix(s, Lcall(Lf, [1]));
case 13:
_2 = s[3];
case 14:
s[2] = 15;
lix(s, Lprint(_2));
case 15:
_3 = s[3];
case 16:
s[2] = 17;
lix(s, Lcall(Lf, [1, 2]));
case 17:
_4 = s[3];
case 18:
s[2] = 19;
lix(s, Lprint(_4));
case 19:
_5 = s[3];
case 20:
s[2] = 21;
lix(s, Lcall(Lf, [1, 2, 3]));
case 21:
_6 = s[3];
case 22:
s[2] = 23;
lix(s, Lprint(_6));
case 23:
_7 = s[3];
case 24:
s[2] = 25;
lix(s, Lcall(Lf, [1, 2, 3, 4]));
case 25:
_8 = s[3];
case 26:
s[2] = 27;
lix(s, Lprint(_8));
case 27:
_9 = s[3];
case 28:
s[2] = 29;
lix(s, Lcall(Lf, [1, 2, 3, 4, 5]));
case 29:
_10 = s[3];
case 30:
s[2] = 31;
lix(s, Lprint(_10));
case 31:
_11 = s[3];
case 32:
s[2] = 33;
lix(s, Lcall(Lf, 1, 2, 3, 4, 5));
case 33:
_12 = s[3];
case 34:
s[2] = 35;
lix(s, Lprint(_12));
case 35:
_13 = s[3];
case 36:
s[2] = 37;
lix(s, Lcall(Lf, 1));
case 37:
_14 = s[3];
case 38:
s[2] = 39;
lix(s, Lprint(_14));
case 39:
_15 = s[3]
default:
}
return s[3]
}
;
function Lf(_fn_0) {
if (arguments.length == 1 && (Array.isArray(arguments[0]) && arguments[0].length == 0)) {
return _17(_fn_0);
}
if (arguments.length == 1 && (Array.isArray(arguments[0]) && arguments[0].length == 1)) {
return _20(_fn_0);
}
if (arguments.length == 1 && (Array.isArray(arguments[0]) && arguments[0].length == 2)) {
return _23(_fn_0);
}
if (arguments.length == 1 && (Array.isArray(arguments[0]) && arguments[0].length == 3)) {
return _26(_fn_0);
}
if (arguments.length == 1 && (Array.isArray(arguments[0]) && arguments[0].length >= 4)) {
return _29(_fn_0);
}
if (arguments.length == 1) {
return _32(_fn_0);
}
return _35.apply(_35, arguments);
}
;
module.exports = _16
