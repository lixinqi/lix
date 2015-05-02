
require('/lib/lix/__builtin__.js');
var defer_stack = [];
var e;
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Ljoin, Lmap, LcounterGenerator, _ret, _5, LgetCount, LgetUniqVarName, LgenerateFuncArgs, Lctx0, LgenerateSeq, LgenerateOr, LgenerateAnd, LgenerateIf, LoperateFuncName, LgenerateAtomic, LgeneratePropertyName, LgenerateProperty, LgenerateObjectLiteral, LtransformVarName, LgetVarName, LgenerateField, LgenerateFieldAccess, LgenerateArray, LgenerateMethod, LgenerateWhile, LgenerateBreak, LgenerateEmpty, LgenerateDef, LgenerateAssign, LgenerateFunc, LgenerateExpr, LGenerateDefNew, LgenerateStart, LgenerateMono, LgeneratePathItem, LgeneratePathArgItem, LgeneratePath, LgenerateModule, LgenerateOpTable, LgenerateOp, Lgenerate, Lenv0, Lenv_new, LflattenExpr, LflattenBreak, LflattenWhile, LflattenOr, LflattenAnd, L_flattenIf, LflattenIf, LflattenAssign, LflattenBasicOp, LflattenBind, LflattenCompose, LflattenReverseCompose, LflattenReverseCPSCompose, LflattenCPSCompose, LflattenDef, LflattenPathArgItem, LflattenPathItem, LflattenPath, LflattenEmpty, LflattenField, LflattenMethod, LflattenProperty, LflattenObjectLiteral, LflattenArray, LflattenFunc, LflattenFieldAccess, LflattenAtomic, LflattenMono, LstatementFlattenGenerator, LflattenSeq, LflattenStart, LflattenModule, LflattenDefer, LflattenOpTable, LflattenOp, Lflatten, Ldefine0, Ldef0, LseqFuncParamsName, LbuiltinNames, Lcompile;
function _331(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Ljoin = (function (Larr) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _0;
function _333(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = (function (_334, _335) {
if (typeof _334.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _334.join.apply(_334, arguments);
} else if (_334.join !== undefined) {
if (_335 === undefined) {
return function (_ret) {
return _334.join;
}
}
return function (_ret) {
_334.join = _335;
}
}})(Larr, "")(function (_ret) {
return _333(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
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
return _333;
});
case 1:
_ret = Lmap = (function (Larr, Lcb) {
var Larguments = arguments, defer_stack = [];
var e;
var Lret, _ret, _3;
function _338(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lret = [];
case 1:
_ret = Lforeach(Larr, (function (Li, Lindex) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _1, _2;
function _340(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcb(Li, Lindex)(function (_ret) {
return _340(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_1 = _ret;
case 2:
_ret = (function (_341, _342) {
if (typeof _341.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _341.push.apply(_341, arguments);
} else if (_341.push !== undefined) {
if (_342 === undefined) {
return function (_ret) {
return _341.push;
}
}
return function (_ret) {
_341.push = _342;
}
}})(Lret, _1)(function (_ret) {
return _340(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
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
return _340;
}))(function (_ret) {
return _338(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_3 = _ret;
case 3:
_ret = Lret
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
return _338;
});
case 2:
_ret = LcounterGenerator = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var Lcounter;
function _345(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcounter = 0;
case 1:
_ret = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var Lret, _ret, _4;
function _347(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lret = Lcounter;
case 1:
_ret = L__add__(Lcounter, 1)(function (_ret) {
return _347(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_4 = _ret;
case 3:
_ret = Lcounter = _4;
case 4:
_ret = Lret
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
return _347;
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
return _345;
});
case 3:
_ret = Lcall(LcounterGenerator)(function (_ret) {
return _331(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_5 = _ret;
case 5:
_ret = LgetCount = _5;
case 6:
_ret = LgetUniqVarName = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _6, _7;
function _349(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LgetCount)(function (_ret) {
return _349(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_6 = _ret;
case 2:
_ret = L__add__('_', _6)(function (_ret) {
return _349(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _349;
});
case 7:
_ret = LgenerateFuncArgs = (function (Largs, Lenv, Lctx) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _9, _10;
function _351(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Largs, (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _8, Lvarname;
function _353(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LtransformVarName(Li[0])(function (_ret) {
return _353(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_8 = _ret;
case 2:
_ret = Lvarname = _8;
case 3:
_ret = Lenv[Lvarname] = true;
case 4:
_ret = Lvarname
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
return _353;
}))(function (_ret) {
return _351(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_9 = _ret;
case 2:
_ret = (function (_354, _355) {
if (typeof _354.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _354.join.apply(_354, arguments);
} else if (_354.join !== undefined) {
if (_355 === undefined) {
return function (_ret) {
return _354.join;
}
}
return function (_ret) {
_354.join = _355;
}
}})(_9, ', ')(function (_ret) {
return _351(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
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
return _351;
});
case 8:
_ret = Lctx0 = (function (Lx) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _358(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _358;
});
case 9:
_ret = LgenerateSeq = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _11, LfuncName, _12, LgetCount, _13, LchainDefer, Lctx, _23, _24, Lbody, _25, _26;
function _360(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _360(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_11 = _ret;
case 2:
_ret = LfuncName = _11;
case 3:
_ret = Lcall(LcounterGenerator)(function (_ret) {
return _360(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_12 = _ret;
case 5:
_ret = LgetCount = _12;
case 6:
_ret = Ljoin(['function () {\n', 'thisDefer(defer_stack, true)(function (', ') {', LseqFuncParamsName.defer, ' && ', LseqFuncParamsName.defer, '();', '}, 0);\n', LseqFuncParamsName.defer, ' && ', LseqFuncParamsName.defer, '();\n', '}\n'])(function (_ret) {
return _360(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_13 = _ret;
case 8:
_ret = LchainDefer = _13;
case 9:
_ret = Lctx = (function (Lcurrent) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _362(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = (function (Lv, Lloop) {
var Larguments = arguments, defer_stack = [];
var e;
var Lnext, _ret, _14, _15, _17, _16, _18;
function _365(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_14 = false;
case 1:
_ret = L__add__(Lnext, 1)(function (_ret) {
return _365(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_16 = _ret;
case 3:
_ret = _15 = Lnext = _16
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
function _364(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lnext = Lcurrent;
case 1:
_ret = true;
case 2:
_14 = _ret;
case 3:
_ret = null;
case 4:
_15 = _ret;
case 5:
_ret = L__eq__(Lloop, undefined)(function (_ret) {
return _364(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_17 = _ret;
case 7:
if ((_14 && _17)) {
_365(function (_ret) {
return _364(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 8:
_ret = Ljoin([Lv, '(function (', LseqFuncParamsName.ret, ') {\n', 'return ', LfuncName, '(', LseqFuncParamsName.cb, ', ', Lnext, ', true, ', LseqFuncParamsName.ret, ', ', LchainDefer, ');\n', '}, 0, false, undefined, ', LchainDefer, ')'])(function (_ret) {
return _364(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_18 = _ret
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
return _364;
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
return _362;
});
case 10:
_ret = Lmap(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _19, Lcurrent, _20, _21, Lstmt, _22;
function _367(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LgetCount)(function (_ret) {
return _367(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_19 = _ret;
case 2:
_ret = Lcurrent = _19;
case 3:
_ret = Lctx(Lcurrent)(function (_ret) {
return _367(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_20 = _ret;
case 5:
_ret = Lgenerate(Litem, Lenv, _20, Ldef)(function (_ret) {
return _367(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_21 = _ret;
case 7:
_ret = Lstmt = _21;
case 8:
_ret = Ljoin(['case ', Lcurrent, ':\n', Lstmt])(function (_ret) {
return _367(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_22 = _ret;
case 10:
_ret = Lstmt = _22
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
return _367;
}))(function (_ret) {
return _360(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 11:
_23 = _ret;
case 12:
_ret = (function (_368, _369) {
if (typeof _368.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _368.join.apply(_368, arguments);
} else if (_368.join !== undefined) {
if (_369 === undefined) {
return function (_ret) {
return _368.join;
}
}
return function (_ret) {
_368.join = _369;
}
}})(_23, ";\n")(function (_ret) {
return _360(_cb, 13, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 13:
_24 = _ret;
case 14:
_ret = Lbody = _24;
case 15:
_ret = Ljoin(['function ', LfuncName, '(', LseqFuncParamsName.cb, ', ', LseqFuncParamsName.step, ', ', LseqFuncParamsName.cont, ', ', LseqFuncParamsName.ret, ', ', LseqFuncParamsName.defer, ') {\n', 'try {\n', 'switch (', LseqFuncParamsName.step, ') {\n', Lbody, '\n', 'default:\n', '}\n', 'thisDefer(defer_stack, false)(function () {\n', LseqFuncParamsName.cb, '(', LseqFuncParamsName.ret, ');\n', '}, 0);\n', 'if (', LseqFuncParamsName.cont, ') {\n', LseqFuncParamsName.cb, '(', LseqFuncParamsName.ret, ');\n', '} else {\n', 'return ', LseqFuncParamsName.ret, ';\n', '}\n', '} catch (e) {\n', 'if (e == ', LbuiltinNames.ccException, ') {\n', 'throw e;\n', '} else {\n', 'Lraise(e)(function (x) {return x;}, 0);\n', '}\n', '}\n', '}\n'])(function (_ret) {
return _360(_cb, 16, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 16:
_25 = _ret;
case 17:
_ret = Ldef.appendExpr(_25)(function (_ret) {
return _360(_cb, 18, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 18:
_26 = _ret;
case 19:
_ret = LfuncName
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
return _360;
});
case 10:
_ret = LgenerateOr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _27, _28, _29;
function _372(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _372(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_27 = _ret;
case 2:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _372(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_28 = _ret;
case 4:
_ret = Ljoin(['(', _27, " || ", _28, ')'])(function (_ret) {
return _372(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_29 = _ret
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
return _372;
});
case 11:
_ret = LgenerateAnd = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _30, _31, _32;
function _374(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _374(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_30 = _ret;
case 2:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _374(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_31 = _ret;
case 4:
_ret = Ljoin(['(', _30, " && ", _31, ')'])(function (_ret) {
return _374(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_32 = _ret
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
return _374;
});
case 12:
_ret = LgenerateIf = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _45, _46;
function _376(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _33, _34, _38, _35, _36, _37, _40, _39, _41, _42, _43, _44;
function _379(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_33 = false;
case 1:
_ret = Lgenerate(Li[0], Lenv, Lctx, Ldef)(function (_ret) {
return _379(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_35 = _ret;
case 3:
_ret = Lctx(_35)(function (_ret) {
return _379(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_36 = _ret;
case 5:
_ret = Ljoin(['{\n', _36, '\n}'])(function (_ret) {
return _379(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_37 = _ret;
case 7:
_ret = _34 = _37
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
function _380(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_33 = false;
case 1:
_ret = LgenerateIf(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _380(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_39 = _ret;
case 3:
_ret = _34 = _39
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
function _381(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Li[0], Lenv, Lctx, Ldef)(function (_ret) {
return _381(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_41 = _ret;
case 2:
_ret = Lgenerate(Li[1], Lenv, Lctx, Ldef)(function (_ret) {
return _381(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_42 = _ret;
case 4:
_ret = Lctx(_42)(function (_ret) {
return _381(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_43 = _ret;
case 6:
_ret = Ljoin(['if (', _41, ') {\n', _43, '\n}'])(function (_ret) {
return _381(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_44 = _ret;
case 8:
_ret = _34 = _44
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
function _378(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_33 = _ret;
case 2:
_ret = null;
case 3:
_34 = _ret;
case 4:
_ret = L__eq__(Li[1], 'else')(function (_ret) {
return _378(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_38 = _ret;
case 6:
if ((_33 && _38)) {
_379(function (_ret) {
return _378(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Li[1], 'if')(function (_ret) {
return _378(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_40 = _ret;
case 9:
if ((_33 && _40)) {
_380(function (_ret) {
return _378(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
if (_33) {
_381(function (_ret) {
return _378(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _378;
}))(function (_ret) {
return _376(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_45 = _ret;
case 2:
_ret = (function (_382, _383) {
if (typeof _382.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _382.join.apply(_382, arguments);
} else if (_382.join !== undefined) {
if (_383 === undefined) {
return function (_ret) {
return _382.join;
}
}
return function (_ret) {
_382.join = _383;
}
}})(_45, ' else ')(function (_ret) {
return _376(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_46 = _ret
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
return _376;
});
case 13:
_ret = LoperateFuncName = {
"+": '__add__',
"-": '__sub__',
"*": '__mul__',
"/": '__div__',
"%": '__mod__',
">=": '__ge__',
">": '__gt__',
"==": '__eq__',
"!=": '__ne__',
"<": '__lt__',
"<=": '__le__'
};
case 14:
_ret = LgenerateAtomic = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var Lret, _ret, _47, _48, _54, _49, _50, _51, _53, _52;
function _388(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_49 = false;
case 1:
_ret = LtransformVarName(LoperateFuncName[Lexpr[0]])(function (_ret) {
return _388(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_51 = _ret;
case 3:
_ret = _50 = Lret = _51
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
function _389(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_49 = false;
case 1:
_ret = LtransformVarName(Lexpr[0])(function (_ret) {
return _389(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_52 = _ret;
case 3:
_ret = _50 = Lret = _52
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
function _387(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_47 = false;
case 1:
_ret = true;
case 2:
_49 = _ret;
case 3:
_ret = null;
case 4:
_50 = _ret;
case 5:
if ((_49 && LoperateFuncName[Lexpr[0]])) {
_388(function (_ret) {
return _387(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 6:
_ret = L__eq__(Lexpr[3], undefined)(function (_ret) {
return _387(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_53 = _ret;
case 8:
if ((_49 && _53)) {
_389(function (_ret) {
return _387(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 9:
_ret = _48 = _50
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
function _386(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lret = Lexpr[0];
case 1:
_ret = true;
case 2:
_47 = _ret;
case 3:
_ret = null;
case 4:
_48 = _ret;
case 5:
_ret = L__eq__(Lexpr[2], '{var}')(function (_ret) {
return _386(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_54 = _ret;
case 7:
if ((_47 && _54)) {
_387(function (_ret) {
return _386(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 8:
_ret = Lret
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
return _386;
});
case 15:
_ret = LgeneratePropertyName = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _55, _56, _58, _57, _60, _59;
function _392(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_55 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, Lenv, Lctx, Ldef)(function (_ret) {
return _392(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_57 = _ret;
case 3:
_ret = _56 = _57
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
function _393(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_55 = false;
case 1:
_ret = LgenerateAtomic(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _393(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_59 = _ret;
case 3:
_ret = _56 = _59
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
function _391(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_55 = _ret;
case 2:
_ret = null;
case 3:
_56 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _391(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_58 = _ret;
case 6:
if ((_55 && _58)) {
_392(function (_ret) {
return _391(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Lexpr[1], '{index}')(function (_ret) {
return _391(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_60 = _ret;
case 9:
if ((_55 && _60)) {
_393(function (_ret) {
return _391(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _391;
});
case 16:
_ret = LgenerateProperty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _61, LpropertyName, _62, LpropertyValue, _63;
function _395(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LgeneratePropertyName(Lexpr[0], Lenv, Lctx0, Ldef)(function (_ret) {
return _395(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_61 = _ret;
case 2:
_ret = LpropertyName = _61;
case 3:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _395(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_62 = _ret;
case 5:
_ret = LpropertyValue = _62;
case 6:
_ret = Ljoin([LpropertyName, ": ", LpropertyValue])(function (_ret) {
return _395(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_63 = _ret
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
return _395;
});
case 17:
_ret = LgenerateObjectLiteral = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _65, _66, LobjectBody, _67;
function _397(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _64;
function _399(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LgenerateProperty(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _399(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_64 = _ret
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
return _399;
}))(function (_ret) {
return _397(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_65 = _ret;
case 2:
_ret = (function (_400, _401) {
if (typeof _400.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _400.join.apply(_400, arguments);
} else if (_400.join !== undefined) {
if (_401 === undefined) {
return function (_ret) {
return _400.join;
}
}
return function (_ret) {
_400.join = _401;
}
}})(_65, ",\n")(function (_ret) {
return _397(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_66 = _ret;
case 4:
_ret = LobjectBody = _66;
case 5:
_ret = Ljoin(["{\n", LobjectBody, "\n}"])(function (_ret) {
return _397(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_67 = _ret
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
return _397;
});
case 18:
_ret = LtransformVarName = (function (Lname) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _68, _69, _70, _71, _73, _74, _75, _76, _77, _78, _79, _80, _81, _72;
function _405(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_68 = false;
case 1:
_ret = _69 = Lname = '_require(require)'
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
function _406(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_68 = false;
case 1:
_ret = _69 = Lname = '_defer(defer_stack)'
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
function _407(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'undefined')(function (_ret) {
return _407(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_75 = _ret;
case 2:
_74 = _75
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
function _408(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'null')(function (_ret) {
return _408(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_77 = _ret;
case 2:
_76 = _77
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
function _409(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'true')(function (_ret) {
return _409(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_79 = _ret;
case 2:
_78 = _79
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
function _410(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'false')(function (_ret) {
return _410(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_81 = _ret;
case 2:
_80 = _81
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
function _411(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_68 = false;
case 1:
_ret = L__add__('L', Lname)(function (_ret) {
return _411(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_72 = _ret;
case 3:
_ret = _69 = Lname = _72
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
function _404(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_68 = _ret;
case 2:
_ret = null;
case 3:
_69 = _ret;
case 4:
_ret = L__eq__(Lname, 'require')(function (_ret) {
return _404(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_70 = _ret;
case 6:
if ((_68 && _70)) {
_405(function (_ret) {
return _404(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Lname, 'defer')(function (_ret) {
return _404(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_71 = _ret;
case 9:
if ((_68 && _71)) {
_406(function (_ret) {
return _404(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
_ret = L__ne__(Lname, 'exports')(function (_ret) {
return _404(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 11:
_73 = _ret;
case 12:
_ret = _73;
case 13:
_74 = _ret;
case 14:
if (_74) {
_407(function (_ret) {
return _404(_cb, 15, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 15:
_ret = _74;
case 16:
_76 = _ret;
case 17:
if (_76) {
_408(function (_ret) {
return _404(_cb, 18, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 18:
_ret = _76;
case 19:
_78 = _ret;
case 20:
if (_78) {
_409(function (_ret) {
return _404(_cb, 21, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 21:
_ret = _78;
case 22:
_80 = _ret;
case 23:
if (_80) {
_410(function (_ret) {
return _404(_cb, 24, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 24:
if ((_68 && _80)) {
_411(function (_ret) {
return _404(_cb, 25, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 25:
_ret = Lname
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
return _404;
});
case 19:
_ret = LgetVarName = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _82, _83, _85, _84, _87, _86;
function _414(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_82 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, {

}, Lctx0)(function (_ret) {
return _414(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_84 = _ret;
case 3:
_ret = _83 = _84
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
function _415(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_82 = false;
case 1:
_ret = LgetVarName(Lexpr[0])(function (_ret) {
return _415(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_86 = _ret;
case 3:
_ret = _83 = _86
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
function _413(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_82 = _ret;
case 2:
_ret = null;
case 3:
_83 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _413(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_85 = _ret;
case 6:
if ((_82 && _85)) {
_414(function (_ret) {
return _413(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Lexpr[1], '{.}')(function (_ret) {
return _413(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_87 = _ret;
case 9:
if ((_82 && _87)) {
_415(function (_ret) {
return _413(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _413;
});
case 20:
_ret = LgenerateField = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _88, _89, _92, _90, _91, _95, _93, _94;
function _418(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_88 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef)(function (_ret) {
return _418(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_90 = _ret;
case 3:
_ret = L__add__('.', _90)(function (_ret) {
return _418(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_91 = _ret;
case 5:
_ret = _89 = _91
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
function _419(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_88 = false;
case 1:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _419(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_93 = _ret;
case 3:
_ret = Ljoin(['[', _93, ']'])(function (_ret) {
return _419(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_94 = _ret;
case 5:
_ret = _89 = _94
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
function _417(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_88 = _ret;
case 2:
_ret = null;
case 3:
_89 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _417(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_92 = _ret;
case 6:
if ((_88 && _92)) {
_418(function (_ret) {
return _417(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Lexpr[1], '{index}')(function (_ret) {
return _417(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_95 = _ret;
case 9:
if ((_88 && _95)) {
_419(function (_ret) {
return _417(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _417;
});
case 21:
_ret = LgenerateFieldAccess = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _96, _97, _99, _98, _103, _100, Lobj, _101, Lfield, _102;
function _422(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_96 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef)(function (_ret) {
return _422(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_98 = _ret;
case 3:
_ret = _97 = _98
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
function _423(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_96 = false;
case 1:
_ret = LgenerateFieldAccess(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _423(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_100 = _ret;
case 3:
_ret = Lobj = _100;
case 4:
_ret = LgenerateField(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _423(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_101 = _ret;
case 6:
_ret = Lfield = _101;
case 7:
_ret = L__add__(Lobj, Lfield)(function (_ret) {
return _423(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_102 = _ret;
case 9:
_ret = _97 = _102
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
function _421(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_96 = _ret;
case 2:
_ret = null;
case 3:
_97 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _421(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_99 = _ret;
case 6:
if ((_96 && _99)) {
_422(function (_ret) {
return _421(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Lexpr[1], '{.}')(function (_ret) {
return _421(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_103 = _ret;
case 9:
if ((_96 && _103)) {
_423(function (_ret) {
return _421(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _421;
});
case 22:
_ret = LgenerateArray = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _105, _106, LarrayBody, _107;
function _425(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _104;
function _427(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _427(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_104 = _ret
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
return _427;
}))(function (_ret) {
return _425(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_105 = _ret;
case 2:
_ret = (function (_428, _429) {
if (typeof _428.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _428.join.apply(_428, arguments);
} else if (_428.join !== undefined) {
if (_429 === undefined) {
return function (_ret) {
return _428.join;
}
}
return function (_ret) {
_428.join = _429;
}
}})(_105, ', ')(function (_ret) {
return _425(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_106 = _ret;
case 4:
_ret = LarrayBody = _106;
case 5:
_ret = Ljoin(['[', LarrayBody, ']'])(function (_ret) {
return _425(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_107 = _ret
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
return _425;
});
case 23:
_ret = LgenerateMethod = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _108, LlocalVarName, _109, LlocalValueName, _110, LmethodName, _111, Lmethod, _112, LtmpVar, _113;
function _432(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _432(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_108 = _ret;
case 2:
_ret = LlocalVarName = _108;
case 3:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _432(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_109 = _ret;
case 5:
_ret = LlocalValueName = _109;
case 6:
_ret = LgenerateField(Lexpr[0], Lenv, Lctx0)(function (_ret) {
return _432(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_110 = _ret;
case 8:
_ret = LmethodName = _110;
case 9:
_ret = L__add__(LlocalVarName, LmethodName)(function (_ret) {
return _432(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_111 = _ret;
case 11:
_ret = Lmethod = _111;
case 12:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _432(_cb, 13, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 13:
_112 = _ret;
case 14:
_ret = LtmpVar = _112;
case 15:
_ret = Ljoin(["(function (", LlocalVarName, ", ", LlocalValueName, ") {\n", "if (typeof ", Lmethod, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", Lmethod, ".apply(", LlocalVarName, ", arguments);\n", "} else if (", Lmethod, " !== undefined) {\n", "if (", LlocalValueName, " === undefined) {\n", "return function (_ret) {\n", "return ", Lmethod, ';\n', "}\n", "}\n", "return function (_ret) {\n", Lmethod, " = ", LlocalValueName, ";\n", "}\n", "}", "})"])(function (_ret) {
return _432(_cb, 16, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 16:
_113 = _ret
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
return _432;
});
case 24:
_ret = LgenerateWhile = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _114, _115, _116, _117;
function _434(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _434(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_114 = _ret;
case 2:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _434(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_115 = _ret;
case 4:
_ret = Lctx(_115, true)(function (_ret) {
return _434(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_116 = _ret;
case 6:
_ret = Ljoin(['while (', _114, ') {\n', _116, "\n}"])(function (_ret) {
return _434(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_117 = _ret
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
return _434;
});
case 25:
_ret = LgenerateBreak = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _436(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = 'break'
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
return _436;
});
case 26:
_ret = LgenerateEmpty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _438(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = ""
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
return _438;
});
case 27:
_ret = LgenerateDef = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _118, Lvarname, _119, _120, _121, Lret;
function _440(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LgetVarName(Lexpr[0])(function (_ret) {
return _440(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_118 = _ret;
case 2:
_ret = Lvarname = _118;
case 3:
_ret = Ldef.defineVar(Lvarname)(function (_ret) {
return _440(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_119 = _ret;
case 5:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _440(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_120 = _ret;
case 7:
_ret = Ljoin([Lvarname, ' = ', _120])(function (_ret) {
return _440(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_121 = _ret;
case 9:
_ret = Lret = _121;
case 10:
_ret = Lenv[Lvarname] = true;
case 11:
_ret = Lret
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
return _440;
});
case 28:
_ret = LgenerateAssign = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _122, Lvarname, _123, _124, _127, _128, _129, _125, _126, _130, _131, Lvalue, _132;
function _443(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lvarname, LseqFuncParamsName.ret)(function (_ret) {
return _443(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_129 = _ret;
case 2:
_128 = _129
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
function _444(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_123 = false;
case 1:
_ret = Lconsole.log(Lvarname)(function (_ret) {
return _444(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_125 = _ret;
case 3:
_ret = Lconsole.log("this var is undefined")(function (_ret) {
return _444(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_126 = _ret;
case 5:
_ret = _124 = _126
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
function _442(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LgetVarName(Lexpr[0])(function (_ret) {
return _442(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_122 = _ret;
case 2:
_ret = Lvarname = _122;
case 3:
_ret = true;
case 4:
_123 = _ret;
case 5:
_ret = null;
case 6:
_124 = _ret;
case 7:
_ret = L__eq__(Lenv[Lvarname], undefined)(function (_ret) {
return _442(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_127 = _ret;
case 9:
_ret = _127;
case 10:
_128 = _ret;
case 11:
if (_128) {
_443(function (_ret) {
return _442(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 12:
if ((_123 && _128)) {
_444(function (_ret) {
return _442(_cb, 13, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 13:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef)(function (_ret) {
return _442(_cb, 14, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 14:
_130 = _ret;
case 15:
_ret = Lvarname = _130;
case 16:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _442(_cb, 17, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 17:
_131 = _ret;
case 18:
_ret = Lvalue = _131;
case 19:
_ret = Ljoin([Lvarname, " = ", Lvalue])(function (_ret) {
return _442(_cb, 20, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 20:
_132 = _ret
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
return _442;
});
case 29:
_ret = LgenerateFunc = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _133, LfuncEnv, _134, Largs, _135, LtmpVar, _136, Ldef, _137, Lbody, _138, _139, _140, _141;
function _446(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lenv_new(Lenv)(function (_ret) {
return _446(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_133 = _ret;
case 2:
_ret = LfuncEnv = _133;
case 3:
_ret = LgenerateFuncArgs(Lexpr[0], LfuncEnv, Lctx0)(function (_ret) {
return _446(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_134 = _ret;
case 5:
_ret = Largs = _134;
case 6:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _446(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_135 = _ret;
case 8:
_ret = LtmpVar = _135;
case 9:
_ret = Lcall(LGenerateDefNew)(function (_ret) {
return _446(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_136 = _ret;
case 11:
_ret = Ldef = _136;
case 12:
_ret = Lgenerate(Lexpr[2], LfuncEnv, Lctx0, Ldef)(function (_ret) {
return _446(_cb, 13, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 13:
_137 = _ret;
case 14:
_ret = Lbody = _137;
case 15:
_ret = LtransformVarName('arguments')(function (_ret) {
return _446(_cb, 16, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 16:
_138 = _ret;
case 17:
_ret = Lcall(Ldef.defineVar)(function (_ret) {
return _446(_cb, 18, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 18:
_139 = _ret;
case 19:
_ret = Lcall(Ldef.appendExpr)(function (_ret) {
return _446(_cb, 20, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 20:
_140 = _ret;
case 21:
_ret = (function (_447, _448) {
if (typeof _447.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _447.join.apply(_447, arguments);
} else if (_447.join !== undefined) {
if (_448 === undefined) {
return function (_ret) {
return _447.join;
}
}
return function (_ret) {
_447.join = _448;
}
}})(['(function (', Largs, ') {\n', 'var ', _138, ' = arguments, defer_stack = [];\n', _139, ";\n", _140, ";\n", 'return ', Lbody, ";\n", '})'], '')(function (_ret) {
return _446(_cb, 22, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 22:
_141 = _ret
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
return _446;
});
case 30:
_ret = LgenerateExpr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _142, Lfunc, _143, Largs, _149, _150, _151;
function _451(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[1], Lenv, Lctx0, Ldef)(function (_ret) {
return _451(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_142 = _ret;
case 2:
_ret = Lfunc = _142;
case 3:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef)(function (_ret) {
return _451(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_143 = _ret;
case 5:
_ret = Largs = _143;
case 6:
_ret = Lforeach(Lexpr, (function (Litem, Lindex) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _144, _145, _148, _146, _147;
function _454(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_144 = false;
case 1:
_ret = Lgenerate(Litem, Lenv, Lctx0, Ldef)(function (_ret) {
return _454(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_146 = _ret;
case 3:
_ret = Ljoin([Largs, ', ', _146])(function (_ret) {
return _454(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_147 = _ret;
case 5:
_ret = _145 = Largs = _147
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
function _453(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_144 = _ret;
case 2:
_ret = null;
case 3:
_145 = _ret;
case 4:
_ret = L__gt__(Lindex, 1)(function (_ret) {
return _453(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_148 = _ret;
case 6:
if ((_144 && _148)) {
_454(function (_ret) {
return _453(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _453;
}))(function (_ret) {
return _451(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_149 = _ret;
case 8:
_ret = Ljoin([Lfunc, '(', Largs, ')'])(function (_ret) {
return _451(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_150 = _ret;
case 10:
_ret = Lctx(_150)(function (_ret) {
return _451(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 11:
_151 = _ret
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
return _451;
});
case 31:
_ret = LGenerateDefNew = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var Lvars, Lfuncs;
function _456(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lvars = {

};
case 1:
_ret = Lfuncs = [];
case 2:
_ret = {
defineVar: (function (Lv) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _152, _153, _154, Lvecs, _155, _156, _159, _157, _158;
function _459(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_152 = false;
case 1:
_ret = _153 = Lvars[Lv] = Lv
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
function _463(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_155 = false;
case 1:
_ret = (function (_464, _465) {
if (typeof _464.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _464.join.apply(_464, arguments);
} else if (_464.join !== undefined) {
if (_465 === undefined) {
return function (_ret) {
return _464.join;
}
}
return function (_ret) {
_464.join = _465;
}
}})(Lvecs, ', ')(function (_ret) {
return _463(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_157 = _ret;
case 3:
_ret = L__add__('var ', _157)(function (_ret) {
return _463(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_158 = _ret;
case 5:
_ret = _156 = _158
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
function _467(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = _156 = ''
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
function _460(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lvars, (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _462(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _462;
}))(function (_ret) {
return _460(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_154 = _ret;
case 2:
_ret = Lvecs = _154;
case 3:
_ret = true;
case 4:
_155 = _ret;
case 5:
_ret = null;
case 6:
_156 = _ret;
case 7:
_ret = L__gt__(Lvecs.length, 0)(function (_ret) {
return _460(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_159 = _ret;
case 9:
if ((_155 && _159)) {
_463(function (_ret) {
return _460(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
if (_155) {
_467(function (_ret) {
return _460(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 11:
_ret = _153 = _156
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
function _458(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_152 = _ret;
case 2:
_ret = null;
case 3:
_153 = _ret;
case 4:
if ((_152 && Lv)) {
_459(function (_ret) {
return _458(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 5:
if (_152) {
_460(function (_ret) {
return _458(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _458;
}),
appendExpr: (function (Lv) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _160, _161, _162, _163;
function _470(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_160 = false;
case 1:
_ret = (function (_471, _472) {
if (typeof _471.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _471.push.apply(_471, arguments);
} else if (_471.push !== undefined) {
if (_472 === undefined) {
return function (_ret) {
return _471.push;
}
}
return function (_ret) {
_471.push = _472;
}
}})(Lfuncs, Lv)(function (_ret) {
return _470(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_162 = _ret;
case 3:
_ret = _161 = _162
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
function _474(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = (function (_475, _476) {
if (typeof _475.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _475.join.apply(_475, arguments);
} else if (_475.join !== undefined) {
if (_476 === undefined) {
return function (_ret) {
return _475.join;
}
}
return function (_ret) {
_475.join = _476;
}
}})(Lfuncs, ';\n')(function (_ret) {
return _474(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_163 = _ret;
case 2:
_ret = _161 = _163
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
function _469(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_160 = _ret;
case 2:
_ret = null;
case 3:
_161 = _ret;
case 4:
if ((_160 && Lv)) {
_470(function (_ret) {
return _469(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 5:
if (_160) {
_474(function (_ret) {
return _469(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _469;
})
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _456;
});
case 32:
_ret = LgenerateStart = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _164, Ldef, _165, Lbody, _166, _167, _168, _169;
function _479(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LGenerateDefNew)(function (_ret) {
return _479(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_164 = _ret;
case 2:
_ret = Ldef = _164;
case 3:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _479(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_165 = _ret;
case 5:
_ret = Lbody = _165;
case 6:
_ret = Ljoin(['module.exports = ', Lbody, '\n'])(function (_ret) {
return _479(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_166 = _ret;
case 8:
_ret = Lbody = _166;
case 9:
_ret = Lcall(Ldef.defineVar)(function (_ret) {
return _479(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_167 = _ret;
case 11:
_ret = Lcall(Ldef.appendExpr)(function (_ret) {
return _479(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 12:
_168 = _ret;
case 13:
_ret = Ljoin(['var defer_stack = [];\n', 'function ', LseqFuncParamsName.chainDefer, '() {\n', 'thisDefer(defer_stack)(function(){return;}, 0);\n', '}\n', _167, ";\n", _168, ";\n", Lbody])(function (_ret) {
return _479(_cb, 14, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 14:
_169 = _ret
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
return _479;
});
case 33:
_ret = LgenerateMono = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _170;
function _481(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _481(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_170 = _ret
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
return _481;
});
case 34:
_ret = LgeneratePathItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _171;
function _483(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Ljoin(['"', Lexpr[0], '"'])(function (_ret) {
return _483(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_171 = _ret
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
return _483;
});
case 35:
_ret = LgeneratePathArgItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _172, _173;
function _485(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _485(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_172 = _ret;
case 2:
_ret = Ljoin(['("', Lexpr[2], '" + ', _172, ')'])(function (_ret) {
return _485(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_173 = _ret
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
return _485;
});
case 36:
_ret = LgeneratePath = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _175, _176, Lpath, _177;
function _487(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _174;
function _489(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lgenerate(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _489(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_174 = _ret
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
return _489;
}))(function (_ret) {
return _487(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_175 = _ret;
case 2:
_ret = (function (_490, _491) {
if (typeof _490.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _490.join.apply(_490, arguments);
} else if (_490.join !== undefined) {
if (_491 === undefined) {
return function (_ret) {
return _490.join;
}
}
return function (_ret) {
_490.join = _491;
}
}})(_175, ',')(function (_ret) {
return _487(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_176 = _ret;
case 4:
_ret = Lpath = _176;
case 5:
_ret = Ljoin(['[', Lpath, '].join("/")'])(function (_ret) {
return _487(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_177 = _ret
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
return _487;
});
case 37:
_ret = LgenerateModule = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _178, Lname, LmoduleExpr;
function _494(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = (function (_495, _496) {
if (typeof _495.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _495.join.apply(_495, arguments);
} else if (_495.join !== undefined) {
if (_496 === undefined) {
return function (_ret) {
return _495.join;
}
}
return function (_ret) {
_495.join = _496;
}
}})(['"', Lexpr[0], '"'], '')(function (_ret) {
return _494(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_178 = _ret;
case 2:
_ret = Lname = [_178, '{atomic}'];
case 3:
_ret = LmoduleExpr = [Lname, ['module', '{atomic}', '{var}']]
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
return _494;
});
case 38:
_ret = LgenerateOpTable = {
'{start}': LgenerateStart,
'{seq}': LgenerateSeq,
'{mono}': LgenerateMono,
'{atomic}': LgenerateAtomic,
'{.}': LgenerateFieldAccess,
'{module}': LgenerateModule,
'{func}': LgenerateFunc,
'{array}': LgenerateArray,
'{object}': LgenerateObjectLiteral,
'{method}': LgenerateMethod,
'{empty}': LgenerateEmpty,
'{path}': LgeneratePath,
'{path_item}': LgeneratePathItem,
'{path_arg_item}': LgeneratePathArgItem,
':=': LgenerateDef,
'=': LgenerateAssign,
'if': LgenerateIf,
'and': LgenerateAnd,
'or': LgenerateOr,
'while': LgenerateWhile,
'break': LgenerateBreak
};
case 39:
_ret = LgenerateOp = (function (Lhint) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _179, _180;
function _500(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_179 = false;
case 1:
_ret = _180 = LgenerateOpTable[Lhint]
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
function _501(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = _180 = LgenerateExpr
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
function _499(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_179 = _ret;
case 2:
_ret = null;
case 3:
_180 = _ret;
case 4:
if ((_179 && LgenerateOpTable[Lhint])) {
_500(function (_ret) {
return _499(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 5:
if (_179) {
_501(function (_ret) {
return _499(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _499;
});
case 40:
_ret = Lgenerate = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _181, _182;
function _503(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LgenerateOp(Lexpr[1])(function (_ret) {
return _503(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_181 = _ret;
case 2:
_ret = _181(Lexpr, Lenv, Lctx, Ldef)(function (_ret) {
return _503(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_182 = _ret
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
return _503;
});
case 41:
_ret = Lenv0 = {
exports: null,
__builtin__: "require('/lib/lix/__builtin__.js');"
};
case 42:
_ret = Lenv_new = (function (Lenv) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _183, LEnv, _184;
function _506(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_183 = Lenv0
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
function _505(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lenv;
case 1:
_183 = _ret;
case 2:
if (_183) {
(function (_ret) {
return _505(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
} else {
_506(function (_ret) {
return _505(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 3:
_ret = Lenv = _183;
case 4:
_ret = LEnv = (function () {
var Larguments = arguments, defer_stack = [];
var e;
;
function _508(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _508;
});
case 5:
_ret = LEnv.prototype = Lenv;
case 6:
_ret = L_instance_(LEnv)(function (_ret) {
return _505(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_184 = _ret
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
return _505;
});
case 43:
_ret = LflattenExpr = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _186, _187;
function _510(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr, (function (Litem) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _185;
function _512(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Litem, Ldefine)(function (_ret) {
return _512(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_185 = _ret
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
return _512;
}))(function (_ret) {
return _510(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_186 = _ret;
case 2:
_ret = Ldefine(_186)(function (_ret) {
return _510(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_187 = _ret
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
return _510;
});
case 44:
_ret = LflattenBreak = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _514(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lexpr
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
return _514;
});
case 45:
_ret = LflattenWhile = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _188, LwhileDefine, _189, _190, _191, _192, _193, _195, _196;
function _516(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _516(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_188 = _ret;
case 2:
_ret = LwhileDefine = _188;
case 3:
_ret = Lflatten(Lexpr[0], LwhileDefine)(function (_ret) {
return _516(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_189 = _ret;
case 5:
_ret = Lexpr[0] = _189;
case 6:
_ret = Lflatten(Lexpr[2], Ldefine0)(function (_ret) {
return _516(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_190 = _ret;
case 8:
_ret = Lexpr[2] = _190;
case 9:
_ret = Lcall(LwhileDefine)(function (_ret) {
return _516(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_191 = _ret;
case 11:
_ret = (function (_517, _518) {
if (typeof _517.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _517.concat.apply(_517, arguments);
} else if (_517.concat !== undefined) {
if (_518 === undefined) {
return function (_ret) {
return _517.concat;
}
}
return function (_ret) {
_517.concat = _518;
}
}})(Lexpr[2][0], _191)(function (_ret) {
return _516(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 12:
_192 = _ret;
case 13:
_ret = Lexpr[2][0] = _192;
case 14:
_ret = Lcall(LwhileDefine)(function (_ret) {
return _516(_cb, 15, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 15:
_193 = _ret;
case 16:
_ret = Lforeach(_193, (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _194;
function _521(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Ldefine(Li, true)(function (_ret) {
return _521(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_194 = _ret
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
return _521;
}))(function (_ret) {
return _516(_cb, 17, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 17:
_195 = _ret;
case 18:
_ret = Ldefine(Lexpr, true)(function (_ret) {
return _516(_cb, 19, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 19:
_196 = _ret;
case 20:
_ret = ['undefined', '{atomic}']
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
return _516;
});
case 46:
_ret = LflattenOr = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _197, Lret, _198, _199, _201, _200, LgetAndOpSeq, _206, _207;
function _524(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_198 = false;
case 1:
_ret = Ldefine(Lret)(function (_ret) {
return _524(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_200 = _ret;
case 3:
_ret = _199 = Lret = _200
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
function _523(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _523(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_197 = _ret;
case 2:
_ret = Lret = _197;
case 3:
_ret = true;
case 4:
_198 = _ret;
case 5:
_ret = null;
case 6:
_199 = _ret;
case 7:
_ret = L__ne__(Lret[2], 'var')(function (_ret) {
return _523(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_201 = _ret;
case 9:
if ((_198 && _201)) {
_524(function (_ret) {
return _523(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
_ret = LgetAndOpSeq = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _202, LAndDefine, _203, LseqRet, _204, Lseq, _205;
function _526(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _526(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_202 = _ret;
case 2:
_ret = LAndDefine = _202;
case 3:
_ret = Lflatten(Lexpr[2], LAndDefine)(function (_ret) {
return _526(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_203 = _ret;
case 5:
_ret = LseqRet = _203;
case 6:
_ret = Lcall(LAndDefine)(function (_ret) {
return _526(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_204 = _ret;
case 8:
_ret = Lseq = _204;
case 9:
_ret = (function (_527, _528) {
if (typeof _527.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _527.push.apply(_527, arguments);
} else if (_527.push !== undefined) {
if (_528 === undefined) {
return function (_ret) {
return _527.push;
}
}
return function (_ret) {
_527.push = _528;
}
}})(Lseq, [Lret, '=', LseqRet])(function (_ret) {
return _526(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_205 = _ret;
case 11:
_ret = [Lseq, '{seq}']
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
return _526;
});
case 11:
_ret = Lcall(LgetAndOpSeq)(function (_ret) {
return _523(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 12:
_206 = _ret;
case 13:
_ret = Ldefine([[[Lret, [[], '{empty}']], [_206, 'else']], 'if'], true)(function (_ret) {
return _523(_cb, 14, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 14:
_207 = _ret;
case 15:
_ret = Lret
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
return _523;
});
case 47:
_ret = LflattenAnd = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _208, Lret, _209, _210, _212, _211, LgetAndOpSeq, _217, _218;
function _532(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_209 = false;
case 1:
_ret = Ldefine(Lret)(function (_ret) {
return _532(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_211 = _ret;
case 3:
_ret = _210 = Lret = _211
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
function _531(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _531(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_208 = _ret;
case 2:
_ret = Lret = _208;
case 3:
_ret = true;
case 4:
_209 = _ret;
case 5:
_ret = null;
case 6:
_210 = _ret;
case 7:
_ret = L__ne__(Lret[2], 'var')(function (_ret) {
return _531(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_212 = _ret;
case 9:
if ((_209 && _212)) {
_532(function (_ret) {
return _531(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
_ret = LgetAndOpSeq = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _213, LAndDefine, _214, LseqRet, _215, Lseq, _216;
function _534(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _534(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_213 = _ret;
case 2:
_ret = LAndDefine = _213;
case 3:
_ret = Lflatten(Lexpr[2], LAndDefine)(function (_ret) {
return _534(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_214 = _ret;
case 5:
_ret = LseqRet = _214;
case 6:
_ret = Lcall(LAndDefine)(function (_ret) {
return _534(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_215 = _ret;
case 8:
_ret = Lseq = _215;
case 9:
_ret = (function (_535, _536) {
if (typeof _535.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _535.push.apply(_535, arguments);
} else if (_535.push !== undefined) {
if (_536 === undefined) {
return function (_ret) {
return _535.push;
}
}
return function (_ret) {
_535.push = _536;
}
}})(Lseq, [Lret, '=', LseqRet])(function (_ret) {
return _534(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_216 = _ret;
case 11:
_ret = [Lseq, '{seq}']
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
return _534;
});
case 11:
_ret = Lcall(LgetAndOpSeq)(function (_ret) {
return _531(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 12:
_217 = _ret;
case 13:
_ret = Ldefine([[[Lret, _217]], 'if'], true)(function (_ret) {
return _531(_cb, 14, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 14:
_218 = _ret;
case 15:
_ret = Lret
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
return _531;
});
case 48:
_ret = L_flattenIf = (function (Lexpr, Ldefine, LtmpVar, Lctx) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _231;
function _539(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lforeach(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _219, _220, _223, _221, LelseSeq, _222, _226, _224, _225, _227, LifSeq, _228, _229, Lcond, _230;
function _542(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_219 = false;
case 1:
_ret = Lflatten(Li[0], Ldefine0, Lctx)(function (_ret) {
return _542(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_221 = _ret;
case 3:
_ret = LelseSeq = _221;
case 4:
_ret = Ldefine([[[LtmpVar, LelseSeq]], 'if'], true)(function (_ret) {
return _542(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_222 = _ret;
case 6:
_ret = _220 = _222
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
function _543(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_219 = false;
case 1:
_ret = L_flattenIf(Li, Ldefine, LtmpVar, Lctx)(function (_ret) {
return _543(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_224 = _ret;
case 3:
_ret = Ldefine(_224)(function (_ret) {
return _543(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_225 = _ret;
case 5:
_ret = _220 = _225
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
function _544(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Li[1], Ldefine0, Lctx)(function (_ret) {
return _544(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_227 = _ret;
case 2:
_ret = LifSeq = _227;
case 3:
_ret = (function (_545, _546) {
if (typeof _545.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _545.unshift.apply(_545, arguments);
} else if (_545.unshift !== undefined) {
if (_546 === undefined) {
return function (_ret) {
return _545.unshift;
}
}
return function (_ret) {
_545.unshift = _546;
}
}})(LifSeq[0], [LtmpVar, '=', ['false', '{atomic}']])(function (_ret) {
return _544(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_228 = _ret;
case 5:
_ret = Lflatten(Li[0], Ldefine)(function (_ret) {
return _544(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_229 = _ret;
case 7:
_ret = Lcond = _229;
case 8:
_ret = Lcond = [LtmpVar, 'and', Lcond];
case 9:
_ret = Ldefine([[[Lcond, LifSeq]], 'if'], true)(function (_ret) {
return _544(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 10:
_230 = _ret;
case 11:
_ret = _220 = _230
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
function _541(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_219 = _ret;
case 2:
_ret = null;
case 3:
_220 = _ret;
case 4:
_ret = L__eq__(Li[1], 'else')(function (_ret) {
return _541(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_223 = _ret;
case 6:
if ((_219 && _223)) {
_542(function (_ret) {
return _541(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Li[1], 'if')(function (_ret) {
return _541(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_226 = _ret;
case 9:
if ((_219 && _226)) {
_543(function (_ret) {
return _541(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
if (_219) {
_544(function (_ret) {
return _541(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _541;
}))(function (_ret) {
return _539(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_231 = _ret
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
return _539;
});
case 49:
_ret = LflattenIf = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _232, LtmpVar, _233, LretVar, Lctx, _234;
function _549(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Ldefine(['true', '{atomic}'])(function (_ret) {
return _549(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_232 = _ret;
case 2:
_ret = LtmpVar = _232;
case 3:
_ret = Ldefine(['null', '{atomic}'])(function (_ret) {
return _549(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_233 = _ret;
case 5:
_ret = LretVar = _233;
case 6:
_ret = Lctx = (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _551(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = [LretVar, '=', Li]
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
return _551;
});
case 7:
_ret = L_flattenIf(Lexpr, Ldefine, LtmpVar, Lctx)(function (_ret) {
return _549(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_234 = _ret;
case 9:
_ret = LretVar
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
return _549;
});
case 50:
_ret = LflattenAssign = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _235;
function _553(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[2], Ldefine)(function (_ret) {
return _553(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_235 = _ret;
case 2:
_ret = Lexpr[2] = _235;
case 3:
_ret = Lexpr
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
return _553;
});
case 51:
_ret = LflattenBasicOp = (function (Lexpr, LbuiltinOpName, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _236, _237, _241, LpartialExpr, Li, _238, _239, _240, _242;
function _557(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = (function (_558, _559) {
if (typeof _558.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _558.push.apply(_558, arguments);
} else if (_558.push !== undefined) {
if (_559 === undefined) {
return function (_ret) {
return _558.push;
}
}
return function (_ret) {
_558.push = _559;
}
}})(LpartialExpr, Lexpr[Li])(function (_ret) {
return _557(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_239 = _ret;
case 2:
_ret = L__add__(Li, 1)(function (_ret) {
return _557(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_240 = _ret;
case 4:
_ret = Li = _240;
case 5:
_ret = L__lt__(Li, Lexpr.length)(function (_ret) {
return _557(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_238 = _ret
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
function _556(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_236 = false;
case 1:
_ret = LpartialExpr = [Lexpr[2], ['__', '{atomic}', '{var}']];
case 2:
_ret = Li = 3;
case 3:
_ret = L__lt__(Li, Lexpr.length)(function (_ret) {
return _556(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_238 = _ret;
case 5:
while (_238) {
_557(function (_ret) {
return _556(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 6:
_ret = undefined;
case 7:
_ret = _237 = Lexpr = [Lexpr[0], Lexpr[1], LpartialExpr]
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
function _555(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lexpr[1] = [LbuiltinOpName, '{atomic}', '{var}'];
case 1:
_ret = true;
case 2:
_236 = _ret;
case 3:
_ret = null;
case 4:
_237 = _ret;
case 5:
_ret = L__gt__(Lexpr.length, 3)(function (_ret) {
return _555(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_241 = _ret;
case 7:
if ((_236 && _241)) {
_556(function (_ret) {
return _555(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 8:
_ret = LflattenExpr(Lexpr, Ldefine)(function (_ret) {
return _555(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_242 = _ret
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
return _555;
});
case 52:
_ret = LflattenBind = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _243;
function _562(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenBasicOp(Lexpr, '__bind__', Ldefine)(function (_ret) {
return _562(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_243 = _ret
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
return _562;
});
case 53:
_ret = LflattenCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _244;
function _564(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenBasicOp(Lexpr, '__compose__', Ldefine)(function (_ret) {
return _564(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_244 = _ret
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
return _564;
});
case 54:
_ret = LflattenReverseCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _245;
function _566(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenBasicOp(Lexpr, '__rcompose__', Ldefine)(function (_ret) {
return _566(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_245 = _ret
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
return _566;
});
case 55:
_ret = LflattenReverseCPSCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _246;
function _568(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenBasicOp(Lexpr, '__rvcompose__', Ldefine)(function (_ret) {
return _568(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_246 = _ret
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
return _568;
});
case 56:
_ret = LflattenCPSCompose = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _247;
function _570(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenBasicOp(Lexpr, '__vcompose__', Ldefine)(function (_ret) {
return _570(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_247 = _ret
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
return _570;
});
case 57:
_ret = LflattenDef = LflattenAssign;
case 58:
_ret = LflattenPathArgItem = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _248;
function _572(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _572(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_248 = _ret;
case 2:
_ret = Lexpr[0] = _248;
case 3:
_ret = Lexpr
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
return _572;
});
case 59:
_ret = LflattenPathItem = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _574(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lexpr
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
return _574;
});
case 60:
_ret = LflattenPath = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _250;
function _576(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _249;
function _578(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Li, Ldefine)(function (_ret) {
return _578(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_249 = _ret
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
return _578;
}))(function (_ret) {
return _576(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_250 = _ret;
case 2:
_ret = Lexpr[0] = _250;
case 3:
_ret = Lexpr
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
return _576;
});
case 61:
_ret = LflattenEmpty = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _580(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lexpr
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
return _580;
});
case 62:
_ret = LflattenField = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _251, _252, _254, _253;
function _583(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_251 = false;
case 1:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _583(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_253 = _ret;
case 3:
_ret = _252 = Lexpr[0] = _253
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
function _582(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_251 = _ret;
case 2:
_ret = null;
case 3:
_252 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{index}')(function (_ret) {
return _582(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_254 = _ret;
case 6:
if ((_251 && _254)) {
_583(function (_ret) {
return _582(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = Lexpr
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
return _582;
});
case 63:
_ret = LflattenMethod = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _255;
function _585(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenField(Lexpr[0], Ldefine)(function (_ret) {
return _585(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_255 = _ret;
case 2:
_ret = Lexpr[0] = _255;
case 3:
_ret = Lexpr
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
return _585;
});
case 64:
_ret = LflattenProperty = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _256;
function _587(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[2], Ldefine)(function (_ret) {
return _587(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_256 = _ret;
case 2:
_ret = Lexpr[2] = _256;
case 3:
_ret = Lexpr
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
return _587;
});
case 65:
_ret = LflattenObjectLiteral = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _258;
function _589(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _257;
function _591(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenProperty(Li, Ldefine)(function (_ret) {
return _591(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_257 = _ret
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
return _591;
}))(function (_ret) {
return _589(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_258 = _ret;
case 2:
_ret = Lexpr[0] = _258;
case 3:
_ret = Lexpr
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
return _589;
});
case 66:
_ret = LflattenArray = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _260;
function _593(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _259;
function _595(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Li, Ldefine)(function (_ret) {
return _595(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_259 = _ret
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
return _595;
}))(function (_ret) {
return _593(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_260 = _ret;
case 2:
_ret = Lexpr[0] = _260;
case 3:
_ret = Lexpr
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
return _593;
});
case 67:
_ret = LflattenFunc = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _261;
function _597(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[2], Ldefine)(function (_ret) {
return _597(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_261 = _ret;
case 2:
_ret = Lexpr[2] = _261;
case 3:
_ret = Lexpr
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
return _597;
});
case 68:
_ret = LflattenFieldAccess = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _262, _263, _266, _264, _265, _267;
function _600(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_262 = false;
case 1:
_ret = LflattenFieldAccess(Lexpr[0], Ldefine)(function (_ret) {
return _600(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_264 = _ret;
case 3:
_ret = Lexpr[0] = _264;
case 4:
_ret = LflattenField(Lexpr[2], Ldefine)(function (_ret) {
return _600(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_265 = _ret;
case 6:
_ret = _263 = Lexpr[2] = _265
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
function _601(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr, Ldefine)(function (_ret) {
return _601(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_267 = _ret;
case 2:
_ret = _263 = Lexpr = _267
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
function _599(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_262 = _ret;
case 2:
_ret = null;
case 3:
_263 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{.}')(function (_ret) {
return _599(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_266 = _ret;
case 6:
if ((_262 && _266)) {
_600(function (_ret) {
return _599(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
if (_262) {
_601(function (_ret) {
return _599(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 8:
_ret = Lexpr
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
return _599;
});
case 69:
_ret = LflattenAtomic = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _603(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lexpr
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
return _603;
});
case 70:
_ret = LflattenMono = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _268;
function _605(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _605(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_268 = _ret
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
return _605;
});
case 71:
_ret = LstatementFlattenGenerator = (function () {
var Larguments = arguments, defer_stack = [];
var e;
var Ldata;
function _607(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Ldata = [];
case 1:
_ret = (function (Lstatement, LtmpVarName) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _269, _270, _271, _273, _272, _277, _274, LvarName, LlixVar, LtmpRet, _275, _276;
function _610(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_269 = false;
case 1:
_ret = _270 = Ldata
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
function _611(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_269 = false;
case 1:
_ret = (function (_612, _613) {
if (typeof _612.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _612.push.apply(_612, arguments);
} else if (_612.push !== undefined) {
if (_613 === undefined) {
return function (_ret) {
return _612.push;
}
}
return function (_ret) {
_612.push = _613;
}
}})(Ldata, Lstatement)(function (_ret) {
return _611(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_272 = _ret;
case 3:
_ret = _270 = _272
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
function _615(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_269 = false;
case 1:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _615(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_274 = _ret;
case 3:
_ret = LvarName = _274;
case 4:
_ret = LlixVar = [LvarName, '{atomic}', '{var}', 'tmp'];
case 5:
_ret = LtmpRet = [LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
case 6:
_ret = (function (_616, _617) {
if (typeof _616.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _616.push.apply(_616, arguments);
} else if (_616.push !== undefined) {
if (_617 === undefined) {
return function (_ret) {
return _616.push;
}
}
return function (_ret) {
_616.push = _617;
}
}})(Ldata, [LtmpRet, ':=', Lstatement])(function (_ret) {
return _615(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_275 = _ret;
case 8:
_ret = (function (_619, _620) {
if (typeof _619.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _619.push.apply(_619, arguments);
} else if (_619.push !== undefined) {
if (_620 === undefined) {
return function (_ret) {
return _619.push;
}
}
return function (_ret) {
_619.push = _620;
}
}})(Ldata, [LlixVar, ':=', LtmpRet])(function (_ret) {
return _615(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_276 = _ret;
case 10:
_ret = _270 = LlixVar
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
function _609(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_269 = _ret;
case 2:
_ret = null;
case 3:
_270 = _ret;
case 4:
_ret = L__eq__(Lstatement, undefined)(function (_ret) {
return _609(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_271 = _ret;
case 6:
if ((_269 && _271)) {
_610(function (_ret) {
return _609(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(LtmpVarName, true)(function (_ret) {
return _609(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_273 = _ret;
case 9:
if ((_269 && _273)) {
_611(function (_ret) {
return _609(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
_ret = L__eq__(LtmpVarName, undefined)(function (_ret) {
return _609(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 11:
_277 = _ret;
case 12:
if ((_269 && _277)) {
_615(function (_ret) {
return _609(_cb, 13, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _609;
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
return _607;
});
case 72:
_ret = LflattenSeq = (function (Lexpr, Ldefine, LseqCtx) {
var Larguments = arguments, defer_stack = [];
var e;
var Lret, Lctx, _ret, _311;
function _623(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lret = [];
case 1:
_ret = Lctx = (function (Lstmt, Lindex) {
var Larguments = arguments, defer_stack = [];
var e;
var Lret, _ret, _278, _279, _281, _282, _283, _284, _280;
function _626(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LparseInt(Lindex)(function (_ret) {
return _626(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_282 = _ret;
case 2:
_ret = L__sub__(Lexpr[0].length, 1)(function (_ret) {
return _626(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_283 = _ret;
case 4:
_ret = L__eq__(_282, _283)(function (_ret) {
return _626(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_284 = _ret;
case 6:
_281 = _284
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
function _627(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_278 = false;
case 1:
_ret = LseqCtx(Lstmt)(function (_ret) {
return _627(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_280 = _ret;
case 3:
_ret = _279 = Lret = _280
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
function _625(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lret = Lstmt;
case 1:
_ret = true;
case 2:
_278 = _ret;
case 3:
_ret = null;
case 4:
_279 = _ret;
case 5:
_ret = LseqCtx;
case 6:
_281 = _ret;
case 7:
if (_281) {
_626(function (_ret) {
return _625(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 8:
if ((_278 && _281)) {
_627(function (_ret) {
return _625(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 9:
_ret = Lret
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
return _625;
});
case 2:
_ret = Lforeach(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _285, LexprDefine, _286, LitemRet, _287, _288, _289, LstmtRet, LisTmpVar, LisRealVar, LisRealExpr, _301, _302, _307, _308, _309, _310, _303, _304, _305, _306;
function _643(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LisTmpVar(LstmtRet)(function (_ret) {
return _643(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_309 = _ret;
case 2:
_ret = Lnot(_309)(function (_ret) {
return _643(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_310 = _ret;
case 4:
_308 = _310
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
function _645(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_303 = false;
case 1:
_ret = _304 = LstmtRet = [[LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', LstmtRet]
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
function _644(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_301 = false;
case 1:
_ret = true;
case 2:
_303 = _ret;
case 3:
_ret = null;
case 4:
_304 = _ret;
case 5:
_ret = LisRealExpr(LstmtRet)(function (_ret) {
return _644(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_305 = _ret;
case 7:
if ((_303 && _305)) {
_645(function (_ret) {
return _644(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 8:
_ret = (function (_646, _647) {
if (typeof _646.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _646.push.apply(_646, arguments);
} else if (_646.push !== undefined) {
if (_647 === undefined) {
return function (_ret) {
return _646.push;
}
}
return function (_ret) {
_646.push = _647;
}
}})(Lret, LstmtRet)(function (_ret) {
return _644(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_306 = _ret;
case 10:
_ret = _302 = _306
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
function _629(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _629(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_285 = _ret;
case 2:
_ret = LexprDefine = _285;
case 3:
_ret = Lflatten(Litem, LexprDefine)(function (_ret) {
return _629(_cb, 4, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 4:
_286 = _ret;
case 5:
_ret = LitemRet = _286;
case 6:
_ret = Lcall(LexprDefine)(function (_ret) {
return _629(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 7:
_287 = _ret;
case 8:
_ret = (function (_630, _631) {
if (typeof _630.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _630.concat.apply(_630, arguments);
} else if (_630.concat !== undefined) {
if (_631 === undefined) {
return function (_ret) {
return _630.concat;
}
}
return function (_ret) {
_630.concat = _631;
}
}})(Lret, _287)(function (_ret) {
return _629(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_288 = _ret;
case 10:
_ret = Lret = _288;
case 11:
_ret = Lctx(LitemRet, Lindex)(function (_ret) {
return _629(_cb, 12, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 12:
_289 = _ret;
case 13:
_ret = LstmtRet = _289;
case 14:
_ret = LisTmpVar = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _290, _291, _292;
function _635(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lexpr[3], undefined)(function (_ret) {
return _635(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_292 = _ret;
case 2:
_291 = _292
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
function _634(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _634(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_290 = _ret;
case 2:
_ret = _290;
case 3:
_291 = _ret;
case 4:
if (_291) {
_635(function (_ret) {
return _634(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _634;
});
case 15:
_ret = LisRealVar = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _293, _294, _295;
function _638(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__eq__(Lexpr[3], undefined)(function (_ret) {
return _638(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_295 = _ret;
case 2:
_294 = _295
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
function _637(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _637(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_293 = _ret;
case 2:
_ret = _293;
case 3:
_294 = _ret;
case 4:
if (_294) {
_638(function (_ret) {
return _637(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _637;
});
case 16:
_ret = LisRealExpr = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _296, _297, _298, _299, _300;
function _642(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lexpr[1], 'while')(function (_ret) {
return _642(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_300 = _ret;
case 2:
_299 = _300
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
function _641(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = L__ne__(Lexpr[1], 'if')(function (_ret) {
return _641(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_298 = _ret;
case 2:
_ret = _298;
case 3:
_299 = _ret;
case 4:
if (_299) {
_642(function (_ret) {
return _641(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 5:
_297 = _299
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
function _640(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LisRealVar(Lexpr)(function (_ret) {
return _640(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_296 = _ret;
case 2:
_ret = _296;
case 3:
_297 = _ret;
case 4:
if (_297) {
(function (_ret) {
return _640(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
} else {
_641(function (_ret) {
return _640(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _640;
});
case 17:
_ret = true;
case 18:
_301 = _ret;
case 19:
_ret = null;
case 20:
_302 = _ret;
case 21:
_ret = L__ne__(LstmtRet[1], '{empty}')(function (_ret) {
return _629(_cb, 22, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 22:
_307 = _ret;
case 23:
_ret = _307;
case 24:
_308 = _ret;
case 25:
if (_308) {
_643(function (_ret) {
return _629(_cb, 26, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 26:
if ((_301 && _308)) {
_644(function (_ret) {
return _629(_cb, 27, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _629;
}))(function (_ret) {
return _623(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_311 = _ret;
case 4:
_ret = Lexpr[0] = Lret;
case 5:
_ret = Lexpr
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
return _623;
});
case 73:
_ret = LflattenStart = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _312, Lret;
function _650(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _650(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_312 = _ret;
case 2:
_ret = Lret = _312;
case 3:
_ret = [Lret, '{start}']
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
return _650;
});
case 74:
_ret = LflattenModule = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _313, _314, _316, _315, Lname, _318, _317, _319, LjsName, LmoduleExpr, _320;
function _653(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_313 = false;
case 1:
_ret = (function (_654, _655) {
if (typeof _654.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _654.join.apply(_654, arguments);
} else if (_654.join !== undefined) {
if (_655 === undefined) {
return function (_ret) {
return _654.join;
}
}
return function (_ret) {
_654.join = _655;
}
}})(['"', Lexpr[0], '"'], '')(function (_ret) {
return _653(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_315 = _ret;
case 3:
_ret = _314 = Lname = [_315, '{atomic}']
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
function _657(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_313 = false;
case 1:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _657(_cb, 2, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 2:
_317 = _ret;
case 3:
_ret = _314 = Lname = _317
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
function _652(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_313 = _ret;
case 2:
_ret = null;
case 3:
_314 = _ret;
case 4:
_ret = L__eq__(Lexpr[2], '{var}')(function (_ret) {
return _652(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 5:
_316 = _ret;
case 6:
if ((_313 && _316)) {
_653(function (_ret) {
return _652(_cb, 7, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 7:
_ret = L__eq__(Lexpr[2], '{index}')(function (_ret) {
return _652(_cb, 8, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 8:
_318 = _ret;
case 9:
if ((_313 && _318)) {
_657(function (_ret) {
return _652(_cb, 10, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 10:
_ret = Ldefine([Lname, ['__add__', '{atomic}', '{var}'], ['"-lix"', '{atomic}']])(function (_ret) {
return _652(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 11:
_319 = _ret;
case 12:
_ret = LjsName = _319;
case 13:
_ret = LmoduleExpr = [LjsName, ['require', '{atomic}', '{var}']];
case 14:
_ret = Ldefine(LmoduleExpr)(function (_ret) {
return _652(_cb, 15, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 15:
_320 = _ret
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
return _652;
});
case 75:
_ret = LflattenDefer = (function (Lexpr, Ldefine) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _659(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = ['undefined', '{atomic}']
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
return _659;
});
case 76:
_ret = LflattenOpTable = {
'{start}': LflattenStart,
'{seq}': LflattenSeq,
'{mono}': LflattenMono,
'{atomic}': LflattenAtomic,
'{.}': LflattenFieldAccess,
'{module}': LflattenModule,
'{func}': LflattenFunc,
'{array}': LflattenArray,
'{object}': LflattenObjectLiteral,
'{method}': LflattenMethod,
'{empty}': LflattenEmpty,
'{path}': LflattenPath,
'{path_item}': LflattenPathItem,
'{path_arg_item}': LflattenPathArgItem,
':=': LflattenDef,
'=': LflattenAssign,
'>>=': LflattenBind,
'>>>': LflattenCPSCompose,
'<<<': LflattenReverseCPSCompose,
'>>': LflattenCompose,
'<<': LflattenReverseCompose,
'if': LflattenIf,
'and': LflattenAnd,
'or': LflattenOr,
'while': LflattenWhile,
'break': LflattenBreak,
'defer': LflattenDefer
};
case 77:
_ret = LflattenOp = (function (Lhint) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _321, _322;
function _662(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_321 = false;
case 1:
_ret = _322 = LflattenOpTable[Lhint]
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
function _663(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = _322 = LflattenExpr
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
function _661(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = true;
case 1:
_321 = _ret;
case 2:
_ret = null;
case 3:
_322 = _ret;
case 4:
if ((_321 && LflattenOpTable[Lhint])) {
_662(function (_ret) {
return _661(_cb, 5, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
};
case 5:
if (_321) {
_663(function (_ret) {
return _661(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e })
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
} catch (e) {
if (e == _lixCCException) {
throw e;
} else {
Lraise(e)(function (x) {return x;}, 0);
}
}
}
;
return _661;
});
case 78:
_ret = Lflatten = (function (Lexpr, Ldefine, Lctx) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _323, _324;
function _665(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = LflattenOp(Lexpr[1])(function (_ret) {
return _665(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_323 = _ret;
case 2:
_ret = _323(Lexpr, Ldefine, Lctx)(function (_ret) {
return _665(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_324 = _ret
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
return _665;
});
case 79:
_ret = Ldefine0 = (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _667(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _667;
});
case 80:
_ret = Ldef0 = {
defineVar: (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _669(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _669;
}),
appendExpr: (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _671(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _671;
})
};
case 81:
_ret = LseqFuncParamsName = {
cb: '_cb',
step: '_step',
cont: '_cont',
ret: '_ret',
defer: 'cb_defer',
thisDefer: 'this_defer',
chainDefer: 'chain_defer'
};
case 82:
_ret = LbuiltinNames = {
ccException: '_lixCCException'
};
case 83:
_ret = Lcompile = (function (Lexpr) {
var Larguments = arguments, defer_stack = [];
var e;
var _ret, _325, _326, Llibs, _327, LflattenedExpr, _328, _329, Lcode, _330;
function _673(_cb, _step, _cont, _ret, cb_defer, d) {
try {
switch (_step) {
case 0:
_ret = Lmap(Lenv0, (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _675(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _675;
}))(function (_ret) {
return _673(_cb, 1, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 1:
_325 = _ret;
case 2:
_ret = (function (_676, _677) {
if (typeof _676.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _676.join.apply(_676, arguments);
} else if (_676.join !== undefined) {
if (_677 === undefined) {
return function (_ret) {
return _676.join;
}
}
return function (_ret) {
_676.join = _677;
}
}})(_325, "\n")(function (_ret) {
return _673(_cb, 3, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 3:
_326 = _ret;
case 4:
_ret = Llibs = _326;
case 5:
_ret = Lflatten(Lexpr, (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _680(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _680;
}), (function (Li) {
var Larguments = arguments, defer_stack = [];
var e;
;
function _682(_cb, _step, _cont, _ret, cb_defer, d) {
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
return _682;
}))(function (_ret) {
return _673(_cb, 6, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 6:
_327 = _ret;
case 7:
_ret = LflattenedExpr = _327;
case 8:
_ret = Lcall(Lenv_new)(function (_ret) {
return _673(_cb, 9, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 9:
_328 = _ret;
case 10:
_ret = LgenerateStart(LflattenedExpr, _328, Lctx0, Ldef0)(function (_ret) {
return _673(_cb, 11, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 11:
_329 = _ret;
case 12:
_ret = Lcode = _329;
case 13:
_ret = Ljoin([Llibs, "\n", Lcode])(function (_ret) {
return _673(_cb, 14, true, _ret, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
);
}, 0, false, undefined, function () {
thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
cb_defer && cb_defer();
}
,{ p:d, e:e });
case 14:
_330 = _ret
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
return _673;
});
case 84:
_ret = exports.compile = Lcompile;
case 85:
_ret = Lcompile
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
module.exports = _331
