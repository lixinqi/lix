
require('/lib/lix/s_builtin_.js');
var Ltry, _13, _14;
function _15(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Ltry = (function (LtryBlock, LcatchBlock, LfinBlock) {
var Larguments = arguments
var _0, _1, Louter_raise, _10;
function _18(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_0 = false;
case 1:
s[3] = LfinBlock = Lidentity
default:
}
return s[3]
}
;
function _17(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_0 = true;
case 1:
s[2] = 2;
lix(s, Lnot(LfinBlock));
case 2:
_1 = s[3];
case 3:
if ((_0 && _1)) {
s[2] = 4;
lix(s, _18)
};
case 4:
s[3] = Louter_raise = Lraise;
case 5:
s[2] = 6;
lix(s, Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments
var _6, _7, _8, _9;
function _20(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, (function (Le) {
var Larguments = arguments
var _2, _3, _4, _5;
function _22(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, Louter_raise));
case 1:
_2 = s[3];
case 2:
s[2] = 3;
lix(s, LcatchBlock(Le));
case 3:
_3 = s[3];
case 4:
s[2] = 5;
lix(s, Lcall(LfinBlock));
case 5:
_4 = s[3];
case 6:
s[2] = 7;
lix(s, Lcall(Lbrk));
case 7:
_5 = s[3]
default:
}
return s[3]
}
;
return _22;
})));
case 1:
_6 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(LtryBlock));
case 3:
_7 = s[3];
case 4:
s[2] = 5;
lix(s, Lcall(LfinBlock));
case 5:
_8 = s[3];
case 6:
s[2] = 7;
lix(s, Lcall(Lbrk));
case 7:
_9 = s[3]
default:
}
return s[3]
}
;
return _20;
})));
case 6:
_10 = s[3]
default:
}
return s[3]
}
;
return _17;
});
case 1:
s[2] = 2;
lix(s, Lcall(Ltry, (function () {
var Larguments = arguments
var _11;
function _24(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltry));
case 1:
_11 = s[3]
default:
}
return s[3]
}
;
return _24;
}), (function (Le) {
var Larguments = arguments
var _12;
function _26(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint(Le));
case 1:
_12 = s[3]
default:
}
return s[3]
}
;
return _26;
})));
case 2:
_13 = s[3];
case 3:
s[2] = 4;
lix(s, Lprint('end'));
case 4:
_14 = s[3]
default:
}
return s[3]
}
;
module.exports = _15
