
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5;
function _6(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint([1, "2", 3])(function (_ret) {
return _6(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint([[1, 2, 3], [4, 5, 6], [7, 8, 9]])(function (_ret) {
return _6(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = LisArray([])(function (_ret) {
return _6(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lprint(_2)(function (_ret) {
return _6(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = (function (_7, _8) {
if (typeof _7.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _7.concat.apply(_7, arguments);
} else if (_7.concat !== undefined) {
if (_8 === undefined) {
return function (_ret) {
return _7.concat;
}
}
return function (_ret) {
_7.concat = _8;
}
}})([1, 2, 3], [3, 4, 5])(function (_ret) {
return _6(_cb, 9, true, _ret);
}, 0);
case 9:
_4 = _ret;
case 10:
_ret = Lprint(_4)(function (_ret) {
return _6(_cb, 11, true, _ret);
}, 0);
case 11:
_5 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_6(function(x){return x;}, 0)
} catch (e) {
}