
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _1, _2, _3, _4;
function _6(_u_4) {
var Larguments = arguments;
var _u_4 = arguments[0];
var Lx = _u_4[0];
var Lx = Lx;
var Ly = Array.prototype.slice.call(_u_4, 1, _u_4.length - 0);
var _0;
function _8(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint(Ly));
case 1:
_0 = s[3];
case 2:
s[3] = 9257
default:
}
return s[3]
}
;
;
return _8;
};
function _5(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 2:
s[2] = 3;
lix(s, Lf([0]));
case 3:
_1 = s[3];
case 4:
s[2] = 5;
lix(s, Lprint(_1));
case 5:
_2 = s[3];
case 6:
s[2] = 7;
lix(s, Lf([0, 3, 4, 5]));
case 7:
_3 = s[3];
case 8:
s[2] = 9;
lix(s, Lprint(_3));
case 9:
_4 = s[3]
default:
}
return s[3]
}
;
function Lf(_fn_0) {
if (arguments.length == 1 && (Array.isArray(arguments[0]) && arguments[0].length >= 1 && ((arguments[0][0] === 0) || (arguments[0][0] === 1)))) {
return _6(_fn_0);
}
}
;
module.exports = _5
