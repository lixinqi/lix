
require('/lib/lix/__builtin__.js');
var _ret, _0, _1;
function _2(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lmodule(["./node_modules","/a.js"].join("/"))(function (_ret) {
return _2(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint(_0)(function (_ret) {
return _2(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_2(function(x){return x;}, 0)
} catch (e) {
}