
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _3, _4;
function _5(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('in t.lix'));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, Lprint(L__dirname));
case 3:
_1 = s[3];
case 4:
s[2] = 5;
lix(s, Lprint(L__filename));
case 5:
_2 = s[3];
case 6:
s[2] = 7;
lix(s, Lrequire("c"));
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
module.exports = _5
