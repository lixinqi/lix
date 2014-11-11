
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5, _6, _7;
function _8(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lmodule('a')(function (_ret) {
return _8(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint(_0)(function (_ret) {
return _8(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = Lmodule("a")(function (_ret) {
return _8(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lmodule("a")(function (_ret) {
return _8(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = _3.name;
case 9:
_ret = Lmodule("a")(function (_ret) {
return _8(_cb, 10, true, _ret);
}, 0);
case 10:
_4 = _ret;
case 11:
_ret = Lprint(_4.name)(function (_ret) {
return _8(_cb, 12, true, _ret);
}, 0);
case 12:
_5 = _ret;
case 13:
_ret = Lmodule("a")(function (_ret) {
return _8(_cb, 14, true, _ret);
}, 0);
case 14:
_6 = _ret;
case 15:
_ret = Lprint(_6)(function (_ret) {
return _8(_cb, 16, true, _ret);
}, 0);
case 16:
_7 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_8(function(x){return x;}, 0)
} catch (e) {
	console.log(e);
}
