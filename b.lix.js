
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1;
function _2(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Lrequire("a"));
case 2:
_0 = s[3];
case 3:
s[2] = 4;
lix(s, Lprint(_0));
case 4:
_1 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _2
