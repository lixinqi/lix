
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2;
function _3(s) {
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
s[3] = _0.nice = 'good';
case 4:
s[2] = 5;
lix(s, Lrequire("a"));
case 5:
_1 = s[3];
case 6:
s[2] = 7;
lix(s, Lprint(_1.nice));
case 7:
_2 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _3
