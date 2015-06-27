
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _13, _0, _2, _3, _4, Lpairs, _5, _6, _7, _8, _9;
function _26(Larr) {
var Larguments = arguments;
var Larr = Larr;
;
function _28(s) {
switch (s[2]) {
case 0:
s[3] = (function (Lappend) {
var Larguments = arguments;
;
var Li, _10, _11, _12;
function _31(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lappend(Larr[Li], Li));
case 1:
_11 = s[3];
case 2:
s[2] = 3;
lix(s, L__add__(Li, 1));
case 3:
_12 = s[3];
case 4:
s[3] = Li = _12;
case 5:
s[2] = 6;
lix(s, L__lt__(Li, Larr.length));
case 6:
_10 = s[3]
default:
}
return s[3]
}
;
function _30(s) {
switch (s[2]) {
case 0:
s[3] = Li = 0;
case 1:
s[2] = 2;
lix(s, L__lt__(Li, Larr.length));
case 2:
_10 = s[3];
case 3:
while (_10) {
s[2] = 3;
lix(s, _31)
}
default:
}
return s[3]
}
return _30;
})
default:
}
return s[3]
}
;
;
return _28;
};
function _32(Lxl) {
var Larguments = arguments;
var Lxl = Lxl;
var Lret, _15;
function _34(s) {
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lcall(Lxl, (function (Lx) {
var Larguments = arguments;
;
var _14;
function _36(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, _13(Lret, Lx));
case 1:
_14 = s[3]
default:
}
return s[3]
}
return _36;
})));
case 2:
_15 = s[3];
case 3:
s[3] = Lret
default:
}
return s[3]
}
;
;
return _34;
};
function _37(Lxl) {
var Larguments = arguments;
;
var _16, _17;
function _39(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lxlist2array(Lxl));
case 1:
_16 = s[3];
case 2:
s[2] = 3;
lix(s, Larray2xlist(_16));
case 3:
_17 = s[3]
default:
}
return s[3]
}
;
;
return _39;
};
function _18(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
_13 = (function (_19, _20) {
if (_19 == undefined || _19 == null ) {
return function () {
return _19;
}
}
if (typeof _19.Push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _19.Push.apply(_19, arguments);
} else {
if (arguments.length > 1) {
return function () {
_19.Push = _20;
return _19;
}
}
return function () {
return _19.Push;
}
}});
case 2:
s[2] = 3;
lix(s, Luntil(LN, L__gt__, 5));
case 3:
_0 = s[3];
case 4:
s[2] = 5;
lix(s, Lmap(_0, (function (L_0, L_1, L_2, L_3, L_4, L_5, L_6, L_7, L_8, L_9) {
var Larguments = arguments;
;
var _1;
function _23(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__add__(L_0, 1));
case 1:
_1 = s[3];
case 2:
s[3] = [L_0, _1]
default:
}
return s[3]
}
return _23;
})));
case 5:
_2 = s[3];
case 6:
s[2] = 7;
lix(s, Lhook(_2, Lprint));
case 7:
_3 = s[3];
case 8:
s[2] = 9;
lix(s, Lforce(_3));
case 9:
_4 = s[3];
case 10:
s[2] = 11;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Lpairs = _x
}
} else {
return function () {
return Lpairs
}
}
})(_4));
case 11:
_5 = s[3];
case 12:
s[2] = 13;
lix(s, Lprint('---'));
case 13:
_6 = s[3];
case 14:
s[2] = 15;
lix(s, Lmap(Lpairs, (function (_u_0) {
var Larguments = arguments;
var Lx = _u_0 ? _u_0[0] : undefined;
var Ly = _u_0 ? _u_0[1] : undefined;
;
function _25(s) {
switch (s[2]) {
case 0:
s[3] = [Ly, Lx]
default:
}
return s[3]
}
return _25;
})));
case 15:
_7 = s[3];
case 16:
s[2] = 17;
lix(s, Lhook(_7, Lprint));
case 17:
_8 = s[3];
case 18:
s[2] = 19;
lix(s, Lexec(_8));
case 19:
_9 = s[3]
default:
}
return s[3]
}
;
function Larray2xlist(_fn_0) {
var _at_40;
if (arguments.length == 1 && ((_at_40 = arguments[0]) || 1) && (_at_40 instanceof LArray)) {
return _26(_fn_0);
}
}

function Lxlist2array(_fn_0) {
var _at_41;
if (arguments.length == 1 && ((_at_41 = arguments[0]) || 1) && (typeof _at_41 == 'function')) {
return _32(_fn_0);
}
}

function Lforce(_fn_0) {
var _at_42;
if (arguments.length == 1) {
return _37(_fn_0);
}
}
;
module.exports = _18
