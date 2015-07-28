
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Lf, _ret, _12, _13;
function _14(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lf = (function (Lcb) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _1, _2;
function _16(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(_defer(defer_stack), (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _0;
function _18(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint('in f')(function (_ret) {
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
return _18;
}))(function (_ret) {
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
_1 = _ret;
case 2:
_ret = Lcall(Lcb)(function (_ret) {
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
};
return _16;
});
case 1:
_ret = Lcall(Lcall, (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _4, _6, _10, _11;
function _20(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(_defer(defer_stack), (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _3;
function _22(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint('good')(function (_ret) {
return _22(_cb, 1, true, _ret, function () {
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
_3 = _ret
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
return _22;
}))(function (_ret) {
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
_4 = _ret;
case 2:
_ret = Lcall(_defer(defer_stack), (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _5;
function _24(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint('yes')(function (_ret) {
return _24(_cb, 1, true, _ret, function () {
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
_5 = _ret
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
return _24;
}))(function (_ret) {
return _20(_cb, 3, true, _ret, function () {
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
_6 = _ret;
case 4:
_ret = Lcall(_defer(defer_stack), (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _9;
function _26(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbreak) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _8;
function _28(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(Lf, (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _7;
function _30(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(Lbreak)(function (_ret) {
return _30(_cb, 1, true, _ret, function () {
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
return _30;
}))(function (_ret) {
return _28(_cb, 1, true, _ret, function () {
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
_8 = _ret
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
return _28;
}))(function (_ret) {
return _26(_cb, 1, true, _ret, function () {
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
_9 = _ret
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
return _26;
}))(function (_ret) {
return _20(_cb, 5, true, _ret, function () {
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
_10 = _ret;
case 6:
_ret = Lprint('nice')(function (_ret) {
return _20(_cb, 7, true, _ret, function () {
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
return _20;
}))(function (_ret) {
return _14(_cb, 2, true, _ret, function () {
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
_12 = _ret;
case 3:
_ret = Lprint('end')(function (_ret) {
return _14(_cb, 4, true, _ret, function () {
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
case 4:
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
