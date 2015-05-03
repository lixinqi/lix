
require('/lib/lix/s_builtin_.js');
var _5, _6;
function _7(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, (function (Lx) {
var Larguments = arguments
var _1, _3, _4;
function _9(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ldefer, (function () {
var Larguments = arguments
var _0;
function _11(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('good0'));
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
s[2] = 3;
lix(s, Lcall(Ldefer, (function () {
var Larguments = arguments
var _2;
function _13(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('good1'));
case 1:
_2 = s[3]
default:
}
return s[3]
}
;
return _13;
})));
case 3:
_3 = s[3];
case 4:
s[2] = 5;
lix(s, L__add__(Lx, 1));
case 5:
_4 = s[3]
default:
}
return s[3]
}
;
return _9;
})(1));
case 1:
_5 = s[3];
case 2:
s[2] = 3;
lix(s, Lprint(_5));
case 3:
_6 = s[3]
default:
}
return s[3]
}
;
module.exports = _7
