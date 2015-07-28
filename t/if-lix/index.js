
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var La, _ret, _0, _1, _2;
function _4(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_0 = false;
case 1:
_ret = Lprint('!!!!!!!!!!!!! oh no')(function (_ret) {
return _4(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {
cb_defer && cb_defer();
}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {
cb_defer && cb_defer();
}, 0);
cb_defer && cb_defer();
}
);
case 2:
_2 = _ret;
case 3:
_ret = _1 = _2
default:
}
thisDefer(defer_stack, false)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _3(_cb, _step, _cont, _ret, cb_defer) {
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
return _3(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {
cb_defer && cb_defer();
}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {
cb_defer && cb_defer();
}, 0);
cb_defer && cb_defer();
}
)
}
default:
}
thisDefer(defer_stack, false)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
module.exports = _3
