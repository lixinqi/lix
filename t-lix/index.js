
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, Lcounter, Lfib, _10, _11, _12, _13;
function _14(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, Lprint));
case 1:
_0 = s[3];
case 2:
s[3] = Lcounter = 0;
case 3:
s[3] = Lfib = (function (Lx) {
var Larguments = arguments
var _1, _2, _3, _4, _5, _6, _7, _8, _9;
function _17(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_2 = false;
case 1:
s[3] = 1
default:
}
return s[3]
}
;
function _18(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_2 = false;
case 1:
s[3] = 1
default:
}
return s[3]
}
;
function _19(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__sub__(Lx, 1));
case 1:
_5 = s[3];
case 2:
s[2] = 3;
lix(s, Lfib(_5));
case 3:
_6 = s[3];
case 4:
s[2] = 5;
lix(s, L__sub__(Lx, 2));
case 5:
_7 = s[3];
case 6:
s[2] = 7;
lix(s, Lfib(_7));
case 7:
_8 = s[3];
case 8:
s[2] = 9;
lix(s, L__add__(_6, _8));
case 9:
_9 = s[3]
default:
}
return s[3]
}
;
function _16(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__add__(Lcounter, 1));
case 1:
_1 = s[3];
case 2:
s[3] = Lcounter = _1;
case 3:
_2 = true;
case 4:
s[2] = 5;
lix(s, L__le__(Lx, 0));
case 5:
_3 = s[3];
case 6:
if ((_2 && _3)) {
s[2] = 7;
lix(s, _17)
};
case 7:
s[2] = 8;
lix(s, L__eq__(Lx, 1));
case 8:
_4 = s[3];
case 9:
if ((_2 && _4)) {
s[2] = 10;
lix(s, _18)
};
case 10:
if (_2) {
s[2] = 11;
lix(s, _19)
}
default:
}
return s[3]
}
;
return _16;
});
case 4:
s[2] = 5;
lix(s, Lfib(30));
case 5:
_10 = s[3];
case 6:
s[2] = 7;
lix(s, Lprint(_10));
case 7:
_11 = s[3];
case 8:
s[2] = 9;
lix(s, Lprint(Lcounter));
case 9:
_12 = s[3];
case 10:
s[2] = 11;
lix(s, Lprint('end'));
case 11:
_13 = s[3]
default:
}
return s[3]
}
;
module.exports = _14
