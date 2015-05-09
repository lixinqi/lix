
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Larr, _0, Li, _1, _2;
function _3(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Larr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
case 1:
s[2] = 2;
lix(s, Lprint(Larr[0]));
case 2:
_0 = s[3];
case 3:
s[3] = Li = 0;
case 4:
s[2] = 5;
lix(s, Lprint(Larr[0][Li]));
case 5:
_1 = s[3];
case 6:
s[2] = 7;
lix(s, Lprint(Larr[0][0]));
case 7:
_2 = s[3]
default:
}
return s[3]
}
;
module.exports = _3
