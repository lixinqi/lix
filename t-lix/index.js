
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Lx, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, Lp, _11, _12;
function _13(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Lx = 0;
case 1:
s[2] = 2;
lix(s, Luntil(LN, L__gt__, 25));
case 2:
_0 = s[3];
case 3:
s[2] = 4;
lix(s, Lreduce(_0, L__add__, 0));
case 4:
_1 = s[3];
case 5:
s[2] = 6;
lix(s, Lhook(_1, (function (L$x) {
var Larguments = arguments
;
function _15(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Lx = L$x
default:
}
return s[3]
}
;
return _15;
})));
case 6:
_2 = s[3];
case 7:
s[2] = 8;
lix(s, Lexec(_2));
case 8:
_3 = s[3];
case 9:
s[2] = 10;
lix(s, Lprint(Lx));
case 10:
_4 = s[3];
case 11:
s[2] = 12;
lix(s, Lrequire("i"));
case 12:
_5 = s[3];
case 13:
s[2] = 14;
lix(s, L__(L__add__, 2));
case 14:
_6 = s[3];
case 15:
s[2] = 16;
lix(s, L__compose__(_5, _6));
case 16:
_7 = s[3];
case 17:
s[2] = 18;
lix(s, L__(L__mul__, 3));
case 18:
_8 = s[3];
case 19:
s[2] = 20;
lix(s, L__compose__(_7, _8));
case 20:
_9 = s[3];
case 21:
s[2] = 22;
lix(s, L__compose__(_9, (function (L$x) {
var Larguments = arguments
;
function _17(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Lx = L$x
default:
}
return s[3]
}
;
return _17;
})));
case 22:
_10 = s[3];
case 23:
s[3] = Lp = _10;
case 24:
s[2] = 25;
lix(s, Lp(3));
case 25:
_11 = s[3];
case 26:
s[2] = 27;
lix(s, Lprint(Lx));
case 27:
_12 = s[3]
default:
}
return s[3]
}
;
module.exports = _13
