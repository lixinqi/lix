
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
function _10(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Lcall((function () {
var Larguments = arguments;
;
;
function _12(s) {
switch (s[2]) {

default:
}
return s[3]
}
return _12;
})));
case 2:
_0 = s[3];
case 3:
s[2] = 4;
lix(s, Lprint(_0));
case 4:
_1 = s[3];
case 5:
s[2] = 6;
lix(s, Lcall((function (Lx) {
var Larguments = arguments;
;
;
function _14(s) {
switch (s[2]) {

default:
}
return s[3]
}
return _14;
})));
case 6:
_2 = s[3];
case 7:
s[2] = 8;
lix(s, Lprint(_2));
case 8:
_3 = s[3];
case 9:
s[2] = 10;
lix(s, Lcall((function () {
var Larguments = arguments;
;
;
function _16(s) {
switch (s[2]) {
case 0:
s[3] = 3
default:
}
return s[3]
}
return _16;
})));
case 10:
_4 = s[3];
case 11:
s[2] = 12;
lix(s, Lprint(_4));
case 12:
_5 = s[3];
case 13:
s[2] = 14;
lix(s, Lcall((function (Lx) {
var Larguments = arguments;
;
;
function _18(s) {
switch (s[2]) {
case 0:
s[3] = 3
default:
}
return s[3]
}
return _18;
})));
case 14:
_6 = s[3];
case 15:
s[2] = 16;
lix(s, Lprint(_6));
case 16:
_7 = s[3];
case 17:
s[2] = 18;
lix(s, Lcall((function (Lx, Ly) {
var Larguments = arguments;
;
;
function _20(s) {
switch (s[2]) {
case 0:
s[3] = [Lx, Ly]
default:
}
return s[3]
}
return _20;
}), 3, 4));
case 18:
_8 = s[3];
case 19:
s[2] = 20;
lix(s, Lprint(_8));
case 20:
_9 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _10
