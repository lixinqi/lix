
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _3;
function _4(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _4(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _4(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.Rename(["/tmp","/a"].join("/"), ["/tmp","/a-back"].join("/"), (function (Lerr) {
var Larguments = arguments;
var _ret, _2;
function _6(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint(Lerr)(function (_ret) {
return _6(_cb, 1, true, _ret);
}, 0);
case 1:
_2 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _6;
}))(function (_ret) {
return _4(_cb, 5, true, _ret);
}, 0);
case 5:
_3 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_4(function(x){return x;}, 0)
} catch (e) {
}