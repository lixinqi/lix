
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var _ret, _0, _1, _12, _13;
function _14(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__add__("try", "-lix")(function (_ret) {
return _14(_cb, 1, true, _ret, function () {
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
case 1:
_0 = _ret;
case 2:
_ret = _require(require)(_0)(function (_ret) {
return _14(_cb, 3, true, _ret, function () {
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
case 3:
_1 = _ret;
case 4:
_ret = Lcall(_1, (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _2, _3, _4, _5, _6;
function _16(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall('fine')(function (_ret) {
return _16(_cb, 1, true, _ret, function () {
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
case 1:
_2 = _ret;
case 2:
_ret = Lprint('good')(function (_ret) {
return _16(_cb, 3, true, _ret, function () {
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
case 3:
_3 = _ret;
case 4:
_ret = L__add__("raise", "-lix")(function (_ret) {
return _16(_cb, 5, true, _ret, function () {
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
case 5:
_4 = _ret;
case 6:
_ret = _require(require)(_4)(function (_ret) {
return _16(_cb, 7, true, _ret, function () {
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
case 7:
_5 = _ret;
case 8:
_ret = Lcall(_5, 'ok')(function (_ret) {
return _16(_cb, 9, true, _ret, function () {
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
case 9:
_6 = _ret
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
return _16;
}), (function (Le) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _7, _8, _9, _11;
function _18(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint('nice')(function (_ret) {
return _18(_cb, 1, true, _ret, function () {
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
case 1:
_7 = _ret;
case 2:
_ret = L__add__("foreach", "-lix")(function (_ret) {
return _18(_cb, 3, true, _ret, function () {
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
case 3:
_8 = _ret;
case 4:
_ret = _require(require)(_8)(function (_ret) {
return _18(_cb, 5, true, _ret, function () {
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
case 5:
_9 = _ret;
case 6:
_ret = _9(Le, (function (Lelem) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _10;
function _20(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint(Lelem)(function (_ret) {
return _20(_cb, 1, true, _ret, function () {
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
case 1:
_10 = _ret
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
return _20;
}))(function (_ret) {
return _18(_cb, 7, true, _ret, function () {
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
case 7:
_11 = _ret
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
return _18;
}))(function (_ret) {
return _14(_cb, 5, true, _ret, function () {
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
case 5:
_12 = _ret;
case 6:
_ret = Lprint('end')(function (_ret) {
return _14(_cb, 7, true, _ret, function () {
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
case 7:
_13 = _ret
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
module.exports = _14
