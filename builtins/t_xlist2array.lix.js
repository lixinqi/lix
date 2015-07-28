
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _1, _2, _3, _4, _5;
function _6(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Lmap(LN, (function (L_0, L_1, L_2, L_3, L_4, L_5, L_6, L_7, L_8, L_9) {
var Larguments = arguments;
;
var _0;
function _8(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(L_0, L_0));
case 1:
_0 = s[3]
default:
}
return s[3]
}
return _8;
})));
case 2:
_1 = s[3];
case 3:
s[2] = 4;
lix(s, Luntil(_1, L__gt__, 99));
case 4:
_2 = s[3];
case 5:
s[2] = 6;
lix(s, Lrequire("xlist2array"));
case 6:
_3 = s[3];
case 7:
s[2] = 8;
lix(s, _3(_2));
case 8:
_4 = s[3];
case 9:
s[2] = 10;
lix(s, Lprint(_4));
case 10:
_5 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _6
