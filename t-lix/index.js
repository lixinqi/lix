
require('/lib/lix/s_builtin_.js');
var _0, _2, _3, _4, _5, _6, _8, _9, _10, _11, _12;
function _13(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Luntil(LN, L__gt__, 8));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, Lbind(_0, (function (Lx) {
var Larguments = arguments
var _1;
function _15(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Luntil(LN, L__ge__, Lx));
case 1:
_1 = s[3]
default:
}
return s[3]
}
;
return _15;
})));
case 3:
_2 = s[3];
case 4:
s[2] = 5;
lix(s, Lmap(_2, L__mul__, 2));
case 5:
_3 = s[3];
case 6:
s[2] = 7;
lix(s, Lmap(_3, L__div__, 2));
case 7:
_4 = s[3];
case 8:
s[2] = 9;
lix(s, Lhook(_4, Lprint));
case 9:
_5 = s[3];
case 10:
s[2] = 11;
lix(s, Lreduce(_5, L__add__, 0));
case 11:
_6 = s[3];
case 12:
s[2] = 13;
lix(s, Lhook(_6, (function () {
var Larguments = arguments
var _7;
function _17(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('--------------'));
case 1:
_7 = s[3]
default:
}
return s[3]
}
;
return _17;
})));
case 13:
_8 = s[3];
case 14:
s[2] = 15;
lix(s, Lhook(_8, Lprint));
case 15:
_9 = s[3];
case 16:
s[2] = 17;
lix(s, L__add__("i", "-lix"));
case 17:
_10 = s[3];
case 18:
s[2] = 19;
lix(s, _require(require)(_10));
case 19:
_11 = s[3];
case 20:
s[2] = 21;
lix(s, Lcall(_9, _11));
case 21:
_12 = s[3]
default:
}
return s[3]
}
;
module.exports = _13
