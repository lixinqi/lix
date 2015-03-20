
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Lidentity, Lid, _ret, _0, Ladd2, _1, Ladd4, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, Lmul3, _18, _19, Lp, _20, _21, _22, _23, _24, _25, _26, Lflist, Lsflist, Ladd, Ldata, _34, _35, _36, _37, _38, _39, _40, Ldf, Ltimes, _42, _43, _44, LthreeDf, _45, _46, _47;
function _48(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lidentity = (function (Li) {
var Larguments = arguments, defer_stack = [];
;
function _50(_cb, _step, _cont, _ret, cb_defer) {
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
return _50;
});
case 1:
_ret = Lid = Lidentity;
case 2:
_ret = L__(L__add__, 2)(function (_ret) {
return _48(_cb, 3, true, _ret, function () {
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
_0 = _ret;
case 4:
_ret = Ladd2 = _0;
case 5:
_ret = L__compose__(Ladd2, Ladd2)(function (_ret) {
return _48(_cb, 6, true, _ret, function () {
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
_1 = _ret;
case 7:
_ret = Ladd4 = _1;
case 8:
_ret = L__compose__(Ladd2, Ladd4)(function (_ret) {
return _48(_cb, 9, true, _ret, function () {
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
_2 = _ret;
case 10:
_ret = L__compose__(_2, Lprint)(function (_ret) {
return _48(_cb, 11, true, _ret, function () {
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
_3 = _ret;
case 12:
_ret = Lcall(_3, 3)(function (_ret) {
return _48(_cb, 13, true, _ret, function () {
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
_4 = _ret;
case 14:
_ret = L__(L__add__, 2)(function (_ret) {
return _48(_cb, 15, true, _ret, function () {
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
_5 = _ret;
case 16:
_ret = L__compose__(Ladd2, _5)(function (_ret) {
return _48(_cb, 17, true, _ret, function () {
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
_6 = _ret;
case 18:
_ret = Lcall(_6, 3)(function (_ret) {
return _48(_cb, 19, true, _ret, function () {
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
_7 = _ret;
case 20:
_ret = Lprint(_7)(function (_ret) {
return _48(_cb, 21, true, _ret, function () {
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
_8 = _ret;
case 22:
_ret = L__(L__add__, 2)(function (_ret) {
return _48(_cb, 23, true, _ret, function () {
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
_9 = _ret;
case 24:
_ret = L__compose__(Lid, _9)(function (_ret) {
return _48(_cb, 25, true, _ret, function () {
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
_10 = _ret;
case 26:
_ret = L__(L__add__, 3)(function (_ret) {
return _48(_cb, 27, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 27:
_11 = _ret;
case 28:
_ret = L__compose__(_10, _11)(function (_ret) {
return _48(_cb, 29, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 29:
_12 = _ret;
case 30:
_ret = L__(L__mul__, 6)(function (_ret) {
return _48(_cb, 31, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 31:
_13 = _ret;
case 32:
_ret = L__compose__(_12, _13)(function (_ret) {
return _48(_cb, 33, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 33:
_14 = _ret;
case 34:
_ret = L__compose__(_14, Lprint)(function (_ret) {
return _48(_cb, 35, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 35:
_15 = _ret;
case 36:
_ret = Lcall(_15, 3)(function (_ret) {
return _48(_cb, 37, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 37:
_16 = _ret;
case 38:
_ret = L__(L__mul__, 3)(function (_ret) {
return _48(_cb, 39, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 39:
_17 = _ret;
case 40:
_ret = Lmul3 = _17;
case 41:
_ret = L__compose__(Ladd2, Lmul3)(function (_ret) {
return _48(_cb, 42, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 42:
_18 = _ret;
case 43:
_ret = L__compose__(_18, Lprint)(function (_ret) {
return _48(_cb, 44, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 44:
_19 = _ret;
case 45:
_ret = Lp = _19;
case 46:
_ret = Lp(5)(function (_ret) {
return _48(_cb, 47, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 47:
_20 = _ret;
case 48:
_ret = L__compose__(Ladd2, Lmul3)(function (_ret) {
return _48(_cb, 49, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 49:
_21 = _ret;
case 50:
_ret = L__compose__(_21, Lprint)(function (_ret) {
return _48(_cb, 51, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 51:
_22 = _ret;
case 52:
_ret = Lcall(_22, 3)(function (_ret) {
return _48(_cb, 53, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 53:
_23 = _ret;
case 54:
_ret = L__compose__(Ladd2, Lmul3)(function (_ret) {
return _48(_cb, 55, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 55:
_24 = _ret;
case 56:
_ret = L__rcompose__(Lprint, _24)(function (_ret) {
return _48(_cb, 57, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 57:
_25 = _ret;
case 58:
_ret = Lcall(_25, 3)(function (_ret) {
return _48(_cb, 59, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 59:
_26 = _ret;
case 60:
_ret = Lflist = (function (Larr) {
var Larguments = arguments, defer_stack = [];
;
function _52(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var Li, _ret, _27, _28, _29;
function _55(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend(Larr[Li])(function (_ret) {
return _55(_cb, 1, true, _ret, function () {
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
_28 = _ret;
case 2:
_ret = L__add__(Li, 1)(function (_ret) {
return _55(_cb, 3, true, _ret, function () {
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
_29 = _ret;
case 4:
_ret = Li = _29;
case 5:
_ret = L__lt__(Li, Larr.length)(function (_ret) {
return _55(_cb, 6, true, _ret, function () {
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
function _54(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Li = 0;
case 1:
_ret = L__lt__(Li, Larr.length)(function (_ret) {
return _54(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 2:
_27 = _ret;
case 3:
while (_27) {
_55(function (_ret) {
return _54(_cb, 3, true, _ret, function () {
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
case 4:
_ret = undefined
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
return _54;
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
return _52;
});
case 61:
_ret = Lsflist = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _57(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var _ret, _30;
function _59(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend(Lx)(function (_ret) {
return _59(_cb, 1, true, _ret, function () {
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
return _59;
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
return _57;
});
case 62:
_ret = Ladd = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _61(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _31;
function _63(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = L__add__(Li, Lx)(function (_ret) {
return _63(_cb, 1, true, _ret, function () {
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
_31 = _ret
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
return _63;
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
return _61;
});
case 63:
_ret = Ldata = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var _ret, _32, _33;
function _65(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend('good')(function (_ret) {
return _65(_cb, 1, true, _ret, function () {
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
_32 = _ret;
case 2:
_ret = Lappend('nice')(function (_ret) {
return _65(_cb, 3, true, _ret, function () {
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
_33 = _ret
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
return _65;
});
case 64:
_ret = L__(L__add__, 0)(function (_ret) {
return _48(_cb, 65, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 65:
_34 = _ret;
case 66:
_ret = L__rcompose__(Lsflist, _34)(function (_ret) {
return _48(_cb, 67, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 67:
_35 = _ret;
case 68:
_ret = L__bind__(Ldata, _35)(function (_ret) {
return _48(_cb, 69, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 69:
_36 = _ret;
case 70:
_ret = L__(L__add__, '1')(function (_ret) {
return _48(_cb, 71, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 71:
_37 = _ret;
case 72:
_ret = L__rcompose__(Lsflist, _37)(function (_ret) {
return _48(_cb, 73, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 73:
_38 = _ret;
case 74:
_ret = L__bind__(_36, _38)(function (_ret) {
return _48(_cb, 75, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 75:
_39 = _ret;
case 76:
_ret = Lcall(_39, Lprint)(function (_ret) {
return _48(_cb, 77, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 77:
_40 = _ret;
case 78:
_ret = Ldf = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _67(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Ldata
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
return _67;
});
case 79:
_ret = Ltimes = (function (Lx, Ln) {
var Larguments = arguments, defer_stack = [];
var Lret, _ret, _41;
function _69(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lret = [0];
case 1:
_ret = Lret.length = Ln;
case 2:
_ret = Lflist(Lret)(function (_ret) {
return _69(_cb, 3, true, _ret, function () {
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
_41 = _ret
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
return _69;
});
case 80:
_ret = L__(Ltimes, 5)(function (_ret) {
return _48(_cb, 81, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 81:
_42 = _ret;
case 82:
_ret = L__vcompose__(Lsflist, _42)(function (_ret) {
return _48(_cb, 83, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 83:
_43 = _ret;
case 84:
_ret = L__vcompose__(_43, Ldf)(function (_ret) {
return _48(_cb, 85, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 85:
_44 = _ret;
case 86:
_ret = LthreeDf = _44;
case 87:
_ret = Lcall(LthreeDf)(function (_ret) {
return _48(_cb, 88, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 88:
_45 = _ret;
case 89:
_ret = Lcall(_45, Lprint)(function (_ret) {
return _48(_cb, 90, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 90:
_46 = _ret;
case 91:
_ret = Lprint('end')(function (_ret) {
return _48(_cb, 92, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 92:
_47 = _ret
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
module.exports = _48
