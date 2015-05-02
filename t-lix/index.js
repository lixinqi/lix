
require('/lib/lix/s_builtin_.js');
var _0, _1, _2, _3, _4, _5, _6, _7, _8;
function _9(s) {
switch (s[2]) {
case 0:
lix(s, Lprint('good'));
case 1:
_0 = s[3];
case 2:
lix(s, Lprint('good'));
case 3:
_1 = s[3];
case 4:
lix(s, L__add__(1, 2));
case 5:
_2 = s[3];
case 6:
lix(s, L__add__(_2, 3));
case 7:
_3 = s[3];
case 8:
lix(s, L__sub__(_3, 1));
case 9:
_4 = s[3];
case 10:
lix(s, L__sub__(3, 0.5));
case 11:
_5 = s[3];
case 12:
lix(s, L__add__(1, _5));
case 13:
_6 = s[3];
case 14:
lix(s, L__mul__(_4, _6));
case 15:
_7 = s[3];
case 16:
lix(s, Lprint(_7));
case 17:
_8 = s[3]
default:
}
return s[3]
}
;
module.exports = _9
