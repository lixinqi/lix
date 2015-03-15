
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var _ret, _0, Ladd2, _1, Lmul3, _2, _3, _4, Lflist, Lsflist, Lcompose, Ladd, Ldata, _14, _15, _16, _17, _18, _19, _20, Ldf, _21, _22, LthreeDf, _23, _24, _25;
function _26(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = L__(L__add__, 2)(function (_ret) {
return _26(_cb, 1, true, _ret, function () {
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
_ret = Ladd2 = _0;
case 3:
_ret = L__(L__mul__, 3)(function (_ret) {
return _26(_cb, 4, true, _ret, function () {
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
_1 = _ret;
case 5:
_ret = Lmul3 = _1;
case 6:
_ret = L__compose__(Ladd2, Lmul3)(function (_ret) {
return _26(_cb, 7, true, _ret, function () {
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
_2 = _ret;
case 8:
_ret = L__rcompose__(Lprint, _2)(function (_ret) {
return _26(_cb, 9, true, _ret, function () {
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
_3 = _ret;
case 10:
_ret = Lcall(_3, 3)(function (_ret) {
return _26(_cb, 11, true, _ret, function () {
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
_4 = _ret;
case 12:
_ret = Lflist = (function (Larr) {
var Larguments = arguments, defer_stack = [];
;
function _28(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var Li, _ret, _5, _6, _7;
function _31(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend(Larr[Li])(function (_ret) {
return _31(_cb, 1, true, _ret, function () {
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
_6 = _ret;
case 2:
_ret = L__add__(Li, 1)(function (_ret) {
return _31(_cb, 3, true, _ret, function () {
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
_7 = _ret;
case 4:
_ret = Li = _7;
case 5:
_ret = L__lt__(Li, Larr.length)(function (_ret) {
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
function _30(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Li = 0;
case 1:
_ret = L__lt__(Li, Larr.length)(function (_ret) {
return _30(_cb, 2, true, _ret, function () {
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
_5 = _ret;
case 3:
while (_5) {
_31(function (_ret) {
return _30(_cb, 3, true, _ret, function () {
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
return _30;
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
return _28;
});
case 13:
_ret = Lsflist = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _33(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var _ret, _8;
function _35(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend(Lx)(function (_ret) {
return _35(_cb, 1, true, _ret, function () {
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
return _33;
});
case 14:
_ret = Lcompose = (function (Lf0, Lf1) {
var Larguments = arguments, defer_stack = [];
;
function _37(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _9, _10;
function _39(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lf0(Li)(function (_ret) {
return _39(_cb, 1, true, _ret, function () {
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
_9 = _ret;
case 2:
_ret = Lf1(_9)(function (_ret) {
return _39(_cb, 3, true, _ret, function () {
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _39;
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
return _37;
});
case 15:
_ret = Ladd = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _41(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _11;
function _43(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = L__add__(Li, Lx)(function (_ret) {
return _43(_cb, 1, true, _ret, function () {
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _43;
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
return _41;
});
case 16:
_ret = Ldata = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var _ret, _12, _13;
function _45(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend('good')(function (_ret) {
return _45(_cb, 1, true, _ret, function () {
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
_12 = _ret;
case 2:
_ret = Lappend('nice')(function (_ret) {
return _45(_cb, 3, true, _ret, function () {
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _45;
});
case 17:
_ret = L__(L__add__, '0')(function (_ret) {
return _26(_cb, 18, true, _ret, function () {
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
_14 = _ret;
case 19:
_ret = L__compose__(_14, Lsflist)(function (_ret) {
return _26(_cb, 20, true, _ret, function () {
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
_15 = _ret;
case 21:
_ret = L__bind__(Ldata, _15)(function (_ret) {
return _26(_cb, 22, true, _ret, function () {
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
_16 = _ret;
case 23:
_ret = L__(L__add__, '1')(function (_ret) {
return _26(_cb, 24, true, _ret, function () {
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
_17 = _ret;
case 25:
_ret = L__compose__(_17, Lsflist)(function (_ret) {
return _26(_cb, 26, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 26:
_18 = _ret;
case 27:
_ret = L__bind__(_16, _18)(function (_ret) {
return _26(_cb, 28, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 28:
_19 = _ret;
case 29:
_ret = Lcall(_19, Lprint)(function (_ret) {
return _26(_cb, 30, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 30:
_20 = _ret;
case 31:
_ret = Ldf = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _47(_cb, _step, _cont, _ret, cb_defer) {
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
return _47;
});
case 32:
_ret = L__vcompose__(Ldf, Ldf)(function (_ret) {
return _26(_cb, 33, true, _ret, function () {
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
_21 = _ret;
case 34:
_ret = L__vcompose__(_21, Ldf)(function (_ret) {
return _26(_cb, 35, true, _ret, function () {
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
_22 = _ret;
case 36:
_ret = LthreeDf = _22;
case 37:
_ret = Lcall(LthreeDf)(function (_ret) {
return _26(_cb, 38, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 38:
_23 = _ret;
case 39:
_ret = Lcall(_23, Lprint)(function (_ret) {
return _26(_cb, 40, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
case 40:
_24 = _ret;
case 41:
_ret = Lprint('end')(function (_ret) {
return _26(_cb, 42, true, _ret, function () {
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
_25 = _ret
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
module.exports = _26
