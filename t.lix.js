
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _2;
function _3(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Luntil(LN, L__gt__, 10));
case 2:
_0 = s[3];
case 3:
s[2] = 4;
lix(s, Lcall(_0, (function (Li) {
var Larguments = arguments;
;
var _1;
function _5(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lprint, Li));
case 1:
_1 = s[3]
default:
}
return s[3]
}
return _5;
})));
case 4:
_2 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _3
