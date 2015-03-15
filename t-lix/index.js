
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Lflist, Lsflist, Lcompose, Ladd, Ldata, _ret, _9, _10, _11, _12, _13, _14, _15, Ldf, _16, _17, LthreeDf, _18, _19, _20;
function _21(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lflist = (function (Larr) {
var Larguments = arguments, defer_stack = [];
;
function _23(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var Li, _ret, _0, _1, _2;
function _26(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend(Larr[Li])(function (_ret) {
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
_1 = _ret;
case 2:
_ret = L__add__(Li, 1)(function (_ret) {
return _26(_cb, 3, true, _ret, function () {
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
_ret = Li = _2;
case 5:
_ret = L__lt__(Li, Larr.length)(function (_ret) {
return _26(_cb, 6, true, _ret, function () {
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
function _25(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Li = 0;
case 1:
_ret = L__lt__(Li, Larr.length)(function (_ret) {
return _25(_cb, 2, true, _ret, function () {
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
_0 = _ret;
case 3:
while (_0) {
_26(function (_ret) {
return _25(_cb, 3, true, _ret, function () {
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
return _25;
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
return _23;
});
case 1:
_ret = Lsflist = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _28(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var _ret, _3;
function _30(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend(Lx)(function (_ret) {
return _30(_cb, 1, true, _ret, function () {
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
case 2:
_ret = Lcompose = (function (Lf0, Lf1) {
var Larguments = arguments, defer_stack = [];
;
function _32(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _4, _5;
function _34(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lf0(Li)(function (_ret) {
return _34(_cb, 1, true, _ret, function () {
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
_4 = _ret;
case 2:
_ret = Lf1(_4)(function (_ret) {
return _34(_cb, 3, true, _ret, function () {
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
return _34;
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
return _32;
});
case 3:
_ret = Ladd = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _36(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = (function (Li) {
var Larguments = arguments, defer_stack = [];
var _ret, _6;
function _38(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = L__add__(Li, Lx)(function (_ret) {
return _38(_cb, 1, true, _ret, function () {
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
return _36;
});
case 4:
_ret = Ldata = (function (Lappend) {
var Larguments = arguments, defer_stack = [];
var _ret, _7, _8;
function _40(_cb, _step, _cont, _ret, cb_defer) {
try {
switch (_step) {
case 0:
_ret = Lappend('good')(function (_ret) {
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
_7 = _ret;
case 2:
_ret = Lappend('nice')(function (_ret) {
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
return _40;
});
case 5:
_ret = L__(L__add__, '0')(function (_ret) {
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
_9 = _ret;
case 7:
_ret = Lcompose(_9, Lsflist)(function (_ret) {
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
_10 = _ret;
case 9:
_ret = L__bind__(Ldata, _10)(function (_ret) {
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
_11 = _ret;
case 11:
_ret = L__(L__add__, '1')(function (_ret) {
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
_12 = _ret;
case 13:
_ret = Lcompose(_12, Lsflist)(function (_ret) {
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
_13 = _ret;
case 15:
_ret = L__bind__(_11, _13)(function (_ret) {
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
_14 = _ret;
case 17:
_ret = Lcall(_14, Lprint)(function (_ret) {
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
_15 = _ret;
case 19:
_ret = Ldf = (function (Lx) {
var Larguments = arguments, defer_stack = [];
;
function _42(_cb, _step, _cont, _ret, cb_defer) {
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
return _42;
});
case 20:
_ret = L__vcompose__(Ldf, Ldf)(function (_ret) {
return _21(_cb, 21, true, _ret, function () {
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
_16 = _ret;
case 22:
_ret = L__vcompose__(_16, Ldf)(function (_ret) {
return _21(_cb, 23, true, _ret, function () {
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
_17 = _ret;
case 24:
_ret = LthreeDf = _17;
case 25:
_ret = Lcall(LthreeDf)(function (_ret) {
return _21(_cb, 26, true, _ret, function () {
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
_ret = Lcall(_18, Lprint)(function (_ret) {
return _21(_cb, 28, true, _ret, function () {
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
_ret = Lprint('end')(function (_ret) {
return _21(_cb, 30, true, _ret, function () {
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
module.exports = _21
