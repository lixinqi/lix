
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var _ret, _1, LMyObject, _2, _3, Lobj, _4, _5, _6, _7;
function _8(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lsubclass(LObject, (function (Lpub) {
var Larguments = arguments, defer_stack = [];
;
function _10(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lpub.__init__ = (function () {
var Larguments = arguments, defer_stack = [];
var _ret, _0;
function _12(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint('good')(function (_ret) {
return _12(_cb, 1, true, _ret, function () {
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
};
return _12;
})
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
return _10;
}))(function (_ret) {
return _8(_cb, 1, true, _ret, function () {
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
_ret = LMyObject = _1;
case 3:
_ret = Lnew(LMyObject)(function (_ret) {
return _8(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 4:
_2 = _ret;
case 5:
_ret = Lnew(LMyObject)(function (_ret) {
return _8(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 6:
_3 = _ret;
case 7:
_ret = Lobj = _3;
case 8:
_ret = Lis(Lobj, LMyObject)(function (_ret) {
return _8(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 9:
_4 = _ret;
case 10:
_ret = Lprint(_4)(function (_ret) {
return _8(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 11:
_5 = _ret;
case 12:
_ret = Lis('good', LMyObject)(function (_ret) {
return _8(_cb, 13, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 13:
_6 = _ret;
case 14:
_ret = Lprint(_6)(function (_ret) {
return _8(_cb, 15, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 15:
_7 = _ret
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
module.exports = _8
