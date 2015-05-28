
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Linc, _1, _2;
function _3(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[3] = Linc = (function (Lx) {
var Larguments = arguments
var _0;
function _5(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__add__(Lx, 1));
case 1:
_0 = s[3]
default:
}
return s[3]
}
;
return _5;
});
case 2:
s[2] = 3;
lix(s, Lcall(Linc, 1));
case 3:
_1 = s[3];
case 4:
s[2] = 5;
lix(s, Lprint(_1));
case 5:
_2 = s[3]
default:
}
return s[3]
}
;
module.exports = _3
