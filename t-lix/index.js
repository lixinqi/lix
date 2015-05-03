
require('/lib/lix/s_builtin_.js');
var _1, Louter_raise, _7, _8;
function _9(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, (function () {
var Larguments = arguments
var _0;
function _11(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('outer'));
case 1:
_0 = s[3]
default:
}
return s[3]
}
;
return _11;
})));
case 1:
_1 = s[3];
case 2:
s[3] = Louter_raise = Lraise;
case 3:
s[2] = 4;
lix(s, Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments
var _2, Linner_raise, _6;
function _13(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, Louter_raise));
case 1:
_2 = s[3];
case 2:
s[3] = Linner_raise = Lraise;
case 3:
s[2] = 4;
lix(s, Lcall(Limmediately, (function () {
var Larguments = arguments
var _3, _4, _5;
function _15(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, Linner_raise));
case 1:
_3 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(Lraise, 'good'));
case 3:
_4 = s[3];
case 4:
s[2] = 5;
lix(s, Lcall(Lbrk));
case 5:
_5 = s[3]
default:
}
return s[3]
}
;
return _15;
})));
case 4:
_6 = s[3]
default:
}
return s[3]
}
;
return _13;
})));
case 4:
_7 = s[3];
case 5:
s[2] = 6;
lix(s, Lprint('end'));
case 6:
_8 = s[3]
default:
}
return s[3]
}
;
module.exports = _9
