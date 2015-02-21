
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Lignore, Lecho, Leval, _ret, _12, _13, _14, _15, _16, _17, _18, _19, _20;
function _21(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lignore = (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _23(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Li
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
return _23;
});
case 1:
_ret = Lecho = (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _0;
function _25(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lprint(Li)(function (_ret) {
return _25(_cb, 1, true, _ret, function () {
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
_0 = _ret;
case 2:
_ret = Li
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
return _25;
});
case 2:
_ret = Leval = (function (Lstr) {
var Larguments = arguments, defer_stack = [];
var _ret, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
function _27(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__add__("syntax", "-lix")(function (_ret) {
return _27(_cb, 1, true, _ret, function () {
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
_ret = _require(require)(_1)(function (_ret) {
return _27(_cb, 3, true, _ret, function () {
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
_2 = _ret;
case 4:
_ret = _2.parse(Lstr)(function (_ret) {
return _27(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 5:
_3 = _ret;
case 6:
_ret = L__add__("lix", "-lix")(function (_ret) {
return _27(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 7:
_4 = _ret;
case 8:
_ret = _require(require)(_4)(function (_ret) {
return _27(_cb, 9, true, _ret, function () {
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
_5 = _ret;
case 10:
_ret = _5(_3, true)(function (_ret) {
return _27(_cb, 11, true, _ret, function () {
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
_6 = _ret;
case 12:
_ret = Lignore(_6, Lecho)(function (_ret) {
return _27(_cb, 13, true, _ret, function () {
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
_7 = _ret;
case 14:
_ret = L__add__("evalJs", "-lix")(function (_ret) {
return _27(_cb, 15, true, _ret, function () {
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
_8 = _ret;
case 16:
_ret = _require(require)(_8)(function (_ret) {
return _27(_cb, 17, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 17:
_9 = _ret;
case 18:
_ret = _9(_7)(function (_ret) {
return _27(_cb, 19, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 19:
_10 = _ret;
case 20:
_ret = Lcall(_10)(function (_ret) {
return _27(_cb, 21, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 21:
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
return _27;
});
case 3:
_ret = (function (_28, _29) {
if (typeof _28.Join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _28.Join.apply(_28, arguments);
} else if (_28.Join !== undefined) {
if (_29 === undefined) {
return function (_ret) {
return _28.Join;
}
}
return function (_ret) {
_28.Join = _29;
}
}})(['"good" print', '1 + 1 | print', '1 + 1 | * 2 | print', '$t0 print'], "\n")(function (_ret) {
return _21(_cb, 4, true, _ret, function () {
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
_12 = _ret;
case 5:
_ret = Leval(_12)(function (_ret) {
return _21(_cb, 6, true, _ret, function () {
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
_13 = _ret;
case 7:
_ret = Lprint('----1----')(function (_ret) {
return _21(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 8:
_14 = _ret;
case 9:
_ret = Leval('1 + 1')(function (_ret) {
return _21(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 10:
_15 = _ret;
case 11:
_ret = Lprint(_15)(function (_ret) {
return _21(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 12:
_16 = _ret;
case 13:
_ret = Lprint('----2----')(function (_ret) {
return _21(_cb, 14, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 14:
_17 = _ret;
case 15:
_ret = Leval('1 + 2')(function (_ret) {
return _21(_cb, 16, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 16:
_18 = _ret;
case 17:
_ret = Lprint(_18)(function (_ret) {
return _21(_cb, 18, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 18:
_19 = _ret;
case 19:
_ret = Lprint('end')(function (_ret) {
return _21(_cb, 20, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 20:
_20 = _ret
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
module.exports = _21
