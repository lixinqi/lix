
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, Larray2generator, _3, Litt, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
function _15(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Lrequire("array2xlist"));
case 2:
_0 = s[3];
case 3:
s[2] = 4;
lix(s, Lrequire("xlist2generator"));
case 4:
_1 = s[3];
case 5:
s[2] = 6;
lix(s, L__compose__(_0, _1));
case 6:
_2 = s[3];
case 7:
s[3] = Larray2generator = _2;
case 8:
s[2] = 9;
lix(s, Larray2generator([1, 23, 5, 4]));
case 9:
_3 = s[3];
case 10:
s[2] = 11;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Litt = _x
}
} else {
return function () {
return Litt
}
}
})(_3));
case 11:
_4 = s[3];
case 12:
s[2] = 13;
lix(s, Lcall(Litt));
case 13:
_5 = s[3];
case 14:
s[2] = 15;
lix(s, Lprint(_5));
case 15:
_6 = s[3];
case 16:
s[2] = 17;
lix(s, Lcall(Litt));
case 17:
_7 = s[3];
case 18:
s[2] = 19;
lix(s, Lprint(_7));
case 19:
_8 = s[3];
case 20:
s[2] = 21;
lix(s, Lcall(Litt));
case 21:
_9 = s[3];
case 22:
s[2] = 23;
lix(s, Lprint(_9));
case 23:
_10 = s[3];
case 24:
s[2] = 25;
lix(s, Lcall(Litt));
case 25:
_11 = s[3];
case 26:
s[2] = 27;
lix(s, Lprint(_11));
case 27:
_12 = s[3];
case 28:
s[2] = 29;
lix(s, Lcall(Litt));
case 29:
_13 = s[3];
case 30:
s[2] = 31;
lix(s, Lprint(_13));
case 31:
_14 = s[3]
default:
}
return s[3]
}
;
module.exports = _15
