
require('/lib/lix/s_builtin_.js');
var _0, _1, _2, Lexec, Lsquare, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
function _19(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__add__("i", "-lix"));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, _require(require)(_0));
case 3:
_1 = s[3];
case 4:
s[2] = 5;
lix(s, L__(Lcall, _1));
case 5:
_2 = s[3];
case 6:
s[3] = Lexec = _2;
case 7:
s[3] = Lsquare = (function (Lx) {
var Larguments = arguments
var _3;
function _21(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(Lx, Lx));
case 1:
_3 = s[3]
default:
}
return s[3]
}
;
return _21;
});
case 8:
s[2] = 9;
lix(s, L__add__("naturalNumbers", "-lix"));
case 9:
_4 = s[3];
case 10:
s[2] = 11;
lix(s, _require(require)(_4));
case 11:
_5 = s[3];
case 12:
s[2] = 13;
lix(s, L__add__("map", "-lix"));
case 13:
_6 = s[3];
case 14:
s[2] = 15;
lix(s, _require(require)(_6));
case 15:
_7 = s[3];
case 16:
s[2] = 17;
lix(s, _7(_5, Lsquare));
case 17:
_8 = s[3];
case 18:
s[2] = 19;
lix(s, L__add__("until", "-lix"));
case 19:
_9 = s[3];
case 20:
s[2] = 21;
lix(s, _require(require)(_9));
case 21:
_10 = s[3];
case 22:
s[2] = 23;
lix(s, _10(_8, L__gt__, 100));
case 23:
_11 = s[3];
case 24:
s[2] = 25;
lix(s, L__add__("reduce", "-lix"));
case 25:
_12 = s[3];
case 26:
s[2] = 27;
lix(s, _require(require)(_12));
case 27:
_13 = s[3];
case 28:
s[2] = 29;
lix(s, _13(_11, L__add__, 0));
case 29:
_14 = s[3];
case 30:
s[2] = 31;
lix(s, L__add__("hook", "-lix"));
case 31:
_15 = s[3];
case 32:
s[2] = 33;
lix(s, _require(require)(_15));
case 33:
_16 = s[3];
case 34:
s[2] = 35;
lix(s, _16(_14, Lprint));
case 35:
_17 = s[3];
case 36:
s[2] = 37;
lix(s, Lexec(_17));
case 37:
_18 = s[3]
default:
}
return s[3]
}
;
module.exports = _19
