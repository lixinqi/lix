
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Lx, Lf, _0, _1;
function _2(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[3] = Lx = 0;
case 2:
s[3] = Lf = (function (La) {
var Larguments = arguments;
;
;
function _4(s) {
switch (s[2]) {
case 0:
s[3] = Lx = La
default:
}
return s[3]
}
return _4;
});
case 3:
s[2] = 4;
lix(s, Lcall(Lf, 3));
case 4:
_0 = s[3];
case 5:
s[2] = 6;
lix(s, Lprint(Lx));
case 6:
_1 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _2
