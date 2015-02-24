
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var _ret, _1, _2;
function _3(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lcall(Ltry, (function () {
var Larguments = arguments, defer_stack = [];
var _ret, _0;
function _5(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lcall(0)(function (_ret) {
return _5(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 1:
_0 = _ret
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _5;
}), (function () {
var Larguments = arguments, defer_stack = [];
;
function _7(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {

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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _7;
}))(function (_ret) {
return _3(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 1:
_1 = _ret;
case 2:
_ret = Lprint('end')(function (_ret) {
return _3(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 3:
_2 = _ret
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
module.exports = _3
