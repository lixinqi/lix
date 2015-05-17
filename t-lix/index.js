
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _10, _11;
function _12(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Lcall(Lcc, (function (Lbreak) {
var Larguments = arguments
var _2, _3, Lraiser, _9;
function _14(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, (function (Le) {
var Larguments = arguments
var _0, _1;
function _16(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint(Le));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(Lbreak));
case 3:
_1 = s[3]
default:
}
return s[3]
}
;
return _16;
})));
case 1:
_2 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(LCurrentRaiser));
case 3:
_3 = s[3];
case 4:
s[3] = Lraiser = _3;
case 5:
s[2] = 6;
lix(s, Ltimeout(20, (function () {
var Larguments = arguments
var _4, _5, _6, _7, _8;
function _18(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, Lraiser));
case 1:
_4 = s[3];
case 2:
s[2] = 3;
lix(s, Lprint('good'));
case 3:
_5 = s[3];
case 4:
s[2] = 5;
lix(s, Lcall('nice'));
case 5:
_6 = s[3];
case 6:
s[2] = 7;
lix(s, Lprint('end'));
case 7:
_7 = s[3];
case 8:
s[2] = 9;
lix(s, Lcall(Lbreak));
case 9:
_8 = s[3]
default:
}
return s[3]
}
;
return _18;
})));
case 6:
_9 = s[3]
default:
}
return s[3]
}
;
return _14;
})));
case 2:
_10 = s[3];
case 3:
s[2] = 4;
lix(s, Lprint('end'));
case 4:
_11 = s[3]
default:
}
return s[3]
}
;
module.exports = _12
