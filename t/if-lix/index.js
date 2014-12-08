
require('/lib/lix/__builtin__.js');
var La, _ret, _0, _1, _2;
function _4(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_0 = false;
case 1:
_ret = Lprint('!!!!!!!!!!!!! oh no')(function (_ret) {
return _4(_cb, 2, true, _ret);
}, 0);
case 2:
_2 = _ret;
case 3:
_ret = _1 = _2
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
function _3(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = La = {
b: undefined
};
case 1:
_ret = true;
case 2:
_0 = _ret;
case 3:
_ret = null;
case 4:
_1 = _ret;
case 5:
if ((_0 && La.b)) {
_4(function (_ret) {
return _3(_cb, 6, true, _ret);
}, 0)
}
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
module.exports = _3
