
require('/lib/lix/s_builtin_.js');
var _0, _6, _7, _8, _9, _11, _12, _13, _14, _15;
function _16(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Luntil(LN, L__gt__, 5));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, Lbind(_0, (function (Lx) {
var Larguments = arguments
var _1, _2, _3, _4, _5;
function _18(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__add__("naturalNumbers", "-lix"));
case 1:
_1 = s[3];
case 2:
s[2] = 3;
lix(s, _require(require)(_1));
case 3:
_2 = s[3];
case 4:
s[2] = 5;
lix(s, L__add__("until", "-lix"));
case 5:
_3 = s[3];
case 6:
s[2] = 7;
lix(s, _require(require)(_3));
case 7:
_4 = s[3];
case 8:
s[2] = 9;
lix(s, _4(_2, L__ge__, Lx));
case 9:
_5 = s[3]
default:
}
return s[3]
}
;
return _18;
})));
case 3:
_6 = s[3];
case 4:
s[2] = 5;
lix(s, Lmap(_6, L__mul__, 2));
case 5:
_7 = s[3];
case 6:
s[2] = 7;
lix(s, Lhook(_7, Lprint));
case 7:
_8 = s[3];
case 8:
s[2] = 9;
lix(s, Lreduce(_8, L__add__, 0));
case 9:
_9 = s[3];
case 10:
s[2] = 11;
lix(s, Lhook(_9, (function () {
var Larguments = arguments
var _10;
function _20(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('--------------'));
case 1:
_10 = s[3]
default:
}
return s[3]
}
;
return _20;
})));
case 11:
_11 = s[3];
case 12:
s[2] = 13;
lix(s, Lhook(_11, Lprint));
case 13:
_12 = s[3];
case 14:
s[2] = 15;
lix(s, L__add__("i", "-lix"));
case 15:
_13 = s[3];
case 16:
s[2] = 17;
lix(s, _require(require)(_13));
case 17:
_14 = s[3];
case 18:
s[2] = 19;
lix(s, Lcall(_12, _14));
case 19:
_15 = s[3]
default:
}
return s[3]
}
;
module.exports = _16
