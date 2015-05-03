
require('/lib/lix/s_builtin_.js');
var _0, _1;
function _2(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Ltrap, Lprint));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(La));
case 3:
_1 = s[3]
default:
}
return s[3]
}
;
module.exports = _2
