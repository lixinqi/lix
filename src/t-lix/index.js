
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Ldont, Lecho, Leval, _ret, _18, _19, _20, _21, _22, _23, _24, _25, _26, _29, _30;
function _31(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Ldont = (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _33(_cb, _step, _cont, _ret, cb_defer) {
try {
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _33;
});
case 1:
_ret = Lecho = (function (Li, Lattr) {
var Larguments = arguments, defer_stack = [];
var _ret, _0, _1, _2, _3, _4;
function _36(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_0 = false;
case 1:
_ret = _1 = Lattr = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _38(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lx
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
return _38;
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
function _35(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_0 = _ret;
case 2:
_ret = null;
case 3:
_1 = _ret;
case 4:
_ret = L__eq__(Lattr, null)(function (_ret) {
return _35(_cb, 5, true, _ret, function () {
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
_2 = _ret;
case 6:
if ((_0 && _2)) {
_36(function (_ret) {
return _35(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
)
};
case 7:
_ret = Lattr(Li)(function (_ret) {
return _35(_cb, 8, true, _ret, function () {
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
_3 = _ret;
case 9:
_ret = Lprint(_3)(function (_ret) {
return _35(_cb, 10, true, _ret, function () {
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
_4 = _ret;
case 11:
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _35;
});
case 2:
_ret = Leval = (function (Lstr) {
var Larguments = arguments, defer_stack = [];
var _ret, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
function _40(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lecho(Lstr)(function (_ret) {
return _40(_cb, 1, true, _ret, function () {
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
_5 = _ret;
case 2:
_ret = L__add__("syntax", "-lix")(function (_ret) {
return _40(_cb, 3, true, _ret, function () {
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
_6 = _ret;
case 4:
_ret = _require(require)(_6)(function (_ret) {
return _40(_cb, 5, true, _ret, function () {
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
_7 = _ret;
case 6:
_ret = _7.parse(_5)(function (_ret) {
return _40(_cb, 7, true, _ret, function () {
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
_8 = _ret;
case 8:
_ret = Ldont(_8, Lecho, (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _42(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lx[0][0]
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
return _42;
}))(function (_ret) {
return _40(_cb, 9, true, _ret, function () {
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
_9 = _ret;
case 10:
_ret = L__add__("lix", "-lix")(function (_ret) {
return _40(_cb, 11, true, _ret, function () {
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
_10 = _ret;
case 12:
_ret = _require(require)(_10)(function (_ret) {
return _40(_cb, 13, true, _ret, function () {
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
_11 = _ret;
case 14:
_ret = _11(_9, true)(function (_ret) {
return _40(_cb, 15, true, _ret, function () {
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
_12 = _ret;
case 16:
_ret = Ldont(_12, Lecho)(function (_ret) {
return _40(_cb, 17, true, _ret, function () {
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
_13 = _ret;
case 18:
_ret = L__add__("evalJs", "-lix")(function (_ret) {
return _40(_cb, 19, true, _ret, function () {
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
_14 = _ret;
case 20:
_ret = _require(require)(_14)(function (_ret) {
return _40(_cb, 21, true, _ret, function () {
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
_15 = _ret;
case 22:
_ret = _15(_13)(function (_ret) {
return _40(_cb, 23, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 23:
_16 = _ret;
case 24:
_ret = Lcall(_16)(function (_ret) {
return _40(_cb, 25, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 25:
_17 = _ret
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
return _40;
});
case 3:
_ret = (function (_43, _44) {
if (typeof _43.Join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _43.Join.apply(_43, arguments);
} else if (_43.Join !== undefined) {
if (_44 === undefined) {
return function (_ret) {
return _43.Join;
}
}
return function (_ret) {
_43.Join = _44;
}
}})(['"good" print', '1 + 1 | print', '1 + 1 | * 2 | print', '$t0 print'], "\n")(function (_ret) {
return _31(_cb, 4, true, _ret, function () {
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
_18 = _ret;
case 5:
_ret = Leval(_18)(function (_ret) {
return _31(_cb, 6, true, _ret, function () {
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
_19 = _ret;
case 7:
_ret = Lprint('----1----')(function (_ret) {
return _31(_cb, 8, true, _ret, function () {
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
_20 = _ret;
case 9:
_ret = Leval('1 + 1')(function (_ret) {
return _31(_cb, 10, true, _ret, function () {
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
_21 = _ret;
case 11:
_ret = Lprint(_21)(function (_ret) {
return _31(_cb, 12, true, _ret, function () {
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
_22 = _ret;
case 13:
_ret = Lprint('----2----')(function (_ret) {
return _31(_cb, 14, true, _ret, function () {
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
_23 = _ret;
case 15:
_ret = Leval('1 + 2')(function (_ret) {
return _31(_cb, 16, true, _ret, function () {
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
_24 = _ret;
case 17:
_ret = Lprint(_24)(function (_ret) {
return _31(_cb, 18, true, _ret, function () {
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
_25 = _ret;
case 19:
_ret = Lprint('----0 call----')(function (_ret) {
return _31(_cb, 20, true, _ret, function () {
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
_26 = _ret;
case 21:
_ret = Lcall(Ltry, (function () {
var Larguments = arguments, defer_stack = [];
var _ret, _27;
function _47(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Leval('0 call')(function (_ret) {
return _47(_cb, 1, true, _ret, function () {
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
_27 = _ret
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
return _47;
}), (function (Le) {
var Larguments = arguments, defer_stack = [];
var _ret, _28;
function _49(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lprint(Le)(function (_ret) {
return _49(_cb, 1, true, _ret, function () {
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
_28 = _ret
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
return _49;
}))(function (_ret) {
return _31(_cb, 22, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 22:
_29 = _ret;
case 23:
_ret = Lprint('end')(function (_ret) {
return _31(_cb, 24, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 24:
_30 = _ret
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
module.exports = _31
