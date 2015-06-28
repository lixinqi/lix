
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _3, _6;
function _8(Lms) {
var Larguments = arguments;
;
var _2;
function _10(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
;
var _1;
function _12(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltimeout(Lms, (function () {
var Larguments = arguments;
;
var _0;
function _14(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lbrk));
case 1:
_0 = s[3]
default:
}
return s[3]
}
return _14;
})));
case 1:
_1 = s[3]
default:
}
return s[3]
}
return _12;
})));
case 1:
_2 = s[3]
default:
}
return s[3]
}
;
;
return _10;
};
function _7(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 2:
s[2] = 3;
lix(s, Luntil(LN, L__gt__, 5));
case 3:
_3 = s[3];
case 4:
s[2] = 5;
lix(s, Lcall(_3, (function () {
var Larguments = arguments;
;
var _4, _5;
function _16(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lsleep, 200));
case 1:
_4 = s[3];
case 2:
s[2] = 3;
lix(s, Lprint('nice'));
case 3:
_5 = s[3]
default:
}
return s[3]
}
return _16;
})));
case 5:
_6 = s[3]
default:
}
return s[3]
}
;
function Lsleep(_fn_0) {
var _at_17;
if (arguments.length == 1) {
return _8(_fn_0);
}
}
;
module.exports = _7
