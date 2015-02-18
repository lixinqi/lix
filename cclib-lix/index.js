
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Ljoin, Lmap, LcounterGenerator, _ret, _5, LgetCount, LgetUniqVarName, LgenerateFuncArgs, Lctx0, LwithSeqLayout, LgenerateSeq, LgenerateOr, LgenerateAnd, LgenerateIf, LoperateFuncName, LgenerateAtomic, LgeneratePropertyName, LgenerateProperty, LgenerateObjectLiteral, LtransformVarName, LgetVarName, LgenerateField, LgenerateFieldAccess, LgenerateArray, LgenerateMethod, LgenerateWhile, LgenerateBreak, LgenerateEmpty, LgenerateDef, LgenerateAssign, LgenerateFunc, LgenerateExpr, LGenerateDefNew, LgenerateStart, LgenerateMono, LgeneratePathItem, LgeneratePathArgItem, LgeneratePath, LgenerateModule, LgenerateOpTable, LgenerateOp, Lgenerate, Lenv0, Lenv_new, LflattenExpr, LflattenBreak, LflattenWhile, LflattenOr, LflattenAnd, L_flattenIf, LflattenIf, LflattenAssign, LflattenDef, LflattenPathArgItem, LflattenPathItem, LflattenPath, LflattenEmpty, LflattenField, LflattenMethod, LflattenProperty, LflattenObjectLiteral, LflattenArray, LflattenFunc, LflattenFieldAccess, LflattenAtomic, LflattenMono, LstatementFlattenGenerator, LflattenSeq, LflattenStart, LflattenModule, LflattenDefer, LflattenOpTable, LflattenOp, Lflatten, Ldefine0, Ldef0, LseqFuncParamsName, Lcompile;
function _328(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Ljoin = (function (Larr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _0;
function _330(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = (function (_331, _332) {
if (typeof _331.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _331.join.apply(_331, arguments);
} else if (_331.join !== undefined) {
if (_332 === undefined) {
return function (_ret) {
return _331.join;
}
}
return function (_ret) {
_331.join = _332;
}
}})(Larr, "")(function (_ret) {
return _330(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_0 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _330;
});
case 1:
_ret = Lmap = (function (Larr, Lcb) {
var Larguments = arguments;
var defer_stack = [];
var Lret, _ret, _3;
function _335(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lret = [];
case 1:
_ret = Lforeach(Larr, (function (Li, Lindex) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _1, _2;
function _337(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcb(Li, Lindex)(function (_ret) {
return _337(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_1 = _ret;
case 2:
_ret = (function (_338, _339) {
if (typeof _338.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _338.push.apply(_338, arguments);
} else if (_338.push !== undefined) {
if (_339 === undefined) {
return function (_ret) {
return _338.push;
}
}
return function (_ret) {
_338.push = _339;
}
}})(Lret, _1)(function (_ret) {
return _337(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_2 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _337;
}))(function (_ret) {
return _335(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_3 = _ret;
case 3:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _335;
});
case 2:
_ret = LcounterGenerator = (function () {
var Larguments = arguments;
var defer_stack = [];
var Lcounter;
function _342(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcounter = 0;
case 1:
_ret = (function () {
var Larguments = arguments;
var defer_stack = [];
var Lret, _ret, _4;
function _344(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lret = Lcounter;
case 1:
_ret = L__add__(Lcounter, 1)(function (_ret) {
return _344(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_4 = _ret;
case 3:
_ret = Lcounter = _4;
case 4:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _344;
})
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _342;
});
case 3:
_ret = Lcall(LcounterGenerator)(function (_ret) {
return _328(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_5 = _ret;
case 5:
_ret = LgetCount = _5;
case 6:
_ret = LgetUniqVarName = (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _6, _7;
function _346(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LgetCount)(function (_ret) {
return _346(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_6 = _ret;
case 2:
_ret = L__add__('_', _6)(function (_ret) {
return _346(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_7 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _346;
});
case 7:
_ret = LgenerateFuncArgs = (function (Largs, Lenv, Lctx) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _9, _10;
function _348(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Largs, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _8, Lvarname;
function _350(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LtransformVarName(Li[0])(function (_ret) {
return _350(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
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
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _350;
}))(function (_ret) {
return _348(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_9 = _ret;
case 2:
_ret = (function (_351, _352) {
if (typeof _351.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _351.join.apply(_351, arguments);
} else if (_351.join !== undefined) {
if (_352 === undefined) {
return function (_ret) {
return _351.join;
}
}
return function (_ret) {
_351.join = _352;
}
}})(_9, ', ')(function (_ret) {
return _348(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_10 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _348;
});
case 8:
_ret = Lctx0 = (function (Lx) {
var Larguments = arguments;
var defer_stack = [];
;
function _355(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lx
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _355;
});
case 9:
_ret = LwithSeqLayout = (function (Lstatements, Lctx) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _11, LfuncName, Lsuffix, _19, Lbody;
function _357(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _357(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_11 = _ret;
case 2:
_ret = LfuncName = _11;
case 3:
_ret = Lsuffix = (function (Lv) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _12;
function _359(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__add__(Lv, '()')(function (_ret) {
return _359(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_12 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _359;
});
case 4:
_ret = Lmap(Lstatements, (function (LstmtClosure, Lindex) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _13, Lstmt, _14, _15, _17, _18, _16;
function _362(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_14 = false;
case 1:
_ret = L__add__('return ', Lstmt)(function (_ret) {
return _362(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_16 = _ret;
case 3:
_ret = _15 = Lstmt = _16
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _361(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LstmtClosure, Lsuffix)(function (_ret) {
return _361(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_13 = _ret;
case 2:
_ret = Lstmt = _13;
case 3:
_ret = true;
case 4:
_14 = _ret;
case 5:
_ret = null;
case 6:
_15 = _ret;
case 7:
_ret = L__sub__(Lstatements.length, 1)(function (_ret) {
return _361(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_17 = _ret;
case 9:
_ret = L__eq__(Lindex, _17)(function (_ret) {
return _361(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_18 = _ret;
case 11:
if ((_14 && _18)) {
_362(function (_ret) {
return _361(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 12:
_ret = Lstmt
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _361;
}))(function (_ret) {
return _357(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_19 = _ret;
case 6:
_ret = Lbody = _19
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _357;
});
case 10:
_ret = LgenerateSeq = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _20, LfuncName, _21, LgetCount, _22, LchainDefer, Lctx, _32, _33, Lbody, _34, _35;
function _364(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _364(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_20 = _ret;
case 2:
_ret = LfuncName = _20;
case 3:
_ret = Lcall(LcounterGenerator)(function (_ret) {
return _364(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_21 = _ret;
case 5:
_ret = LgetCount = _21;
case 6:
_ret = Ljoin(['function () {\n', 'console.log("nice");\n', 'thisDefer(defer_stack)(function (', ') {\n', LseqFuncParamsName.defer, ' && ', LseqFuncParamsName.defer, '();\n', '}, 0);\n', '}\n'])(function (_ret) {
return _364(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_22 = _ret;
case 8:
_ret = LchainDefer = _22;
case 9:
_ret = Lctx = (function (Lcurrent) {
var Larguments = arguments;
var defer_stack = [];
;
function _366(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = (function (Lv, Lloop) {
var Larguments = arguments;
var defer_stack = [];
var Lnext, _ret, _23, _24, _26, _25, _27;
function _369(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_23 = false;
case 1:
_ret = L__add__(Lnext, 1)(function (_ret) {
return _369(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_25 = _ret;
case 3:
_ret = _24 = Lnext = _25
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _368(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lnext = Lcurrent;
case 1:
_ret = true;
case 2:
_23 = _ret;
case 3:
_ret = null;
case 4:
_24 = _ret;
case 5:
_ret = L__eq__(Lloop, undefined)(function (_ret) {
return _368(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_26 = _ret;
case 7:
if ((_23 && _26)) {
_369(function (_ret) {
return _368(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 8:
_ret = Ljoin([Lv, '(function (', LseqFuncParamsName.ret, ') {\n', 'return ', LfuncName, '(', LseqFuncParamsName.cb, ', ', Lnext, ', true, ', LseqFuncParamsName.ret, ', ', LchainDefer, ');\n', '}, 0, false, undefined, ', LchainDefer, ')'])(function (_ret) {
return _368(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_27 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _368;
})
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _366;
});
case 10:
_ret = Lmap(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _28, Lcurrent, _29, _30, Lstmt, _31;
function _371(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LgetCount)(function (_ret) {
return _371(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_28 = _ret;
case 2:
_ret = Lcurrent = _28;
case 3:
_ret = Lctx(Lcurrent)(function (_ret) {
return _371(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_29 = _ret;
case 5:
_ret = Lgenerate(Litem, Lenv, _29, Ldef)(function (_ret) {
return _371(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_30 = _ret;
case 7:
_ret = Lstmt = _30;
case 8:
_ret = Ljoin(['case ', Lcurrent, ':\n', Lstmt])(function (_ret) {
return _371(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_31 = _ret;
case 10:
_ret = Lstmt = _31
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _371;
}))(function (_ret) {
return _364(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 11:
_32 = _ret;
case 12:
_ret = (function (_372, _373) {
if (typeof _372.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _372.join.apply(_372, arguments);
} else if (_372.join !== undefined) {
if (_373 === undefined) {
return function (_ret) {
return _372.join;
}
}
return function (_ret) {
_372.join = _373;
}
}})(_32, ";\n")(function (_ret) {
return _364(_cb, 13, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 13:
_33 = _ret;
case 14:
_ret = Lbody = _33;
case 15:
_ret = Ljoin(['function ', LfuncName, '(', LseqFuncParamsName.cb, ', ', LseqFuncParamsName.step, ', ', LseqFuncParamsName.cont, ', ', LseqFuncParamsName.ret, ', ', LseqFuncParamsName.defer, ') {\n', 'switch (', LseqFuncParamsName.step, ') {\n', Lbody, '\n', 'default:\n', '}\n', 'thisDefer(defer_stack)(function () {\n', LseqFuncParamsName.cb, '(', LseqFuncParamsName.ret, ');\n', '}, 0);\n', 'if (', LseqFuncParamsName.cont, ') {\n', LseqFuncParamsName.cb, '(', LseqFuncParamsName.ret, ');\n', '} else {\n', 'return ', LseqFuncParamsName.ret, ';\n', '}\n', '}'])(function (_ret) {
return _364(_cb, 16, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 16:
_34 = _ret;
case 17:
_ret = Ldef.appendExpr(_34)(function (_ret) {
return _364(_cb, 18, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 18:
_35 = _ret;
case 19:
_ret = LfuncName
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _364;
});
case 11:
_ret = LgenerateOr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _36, _37, _38;
function _376(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _376(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_36 = _ret;
case 2:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _376(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_37 = _ret;
case 4:
_ret = Ljoin(['(', _36, " || ", _37, ')'])(function (_ret) {
return _376(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_38 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _376;
});
case 12:
_ret = LgenerateAnd = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _39, _40, _41;
function _378(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _378(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_39 = _ret;
case 2:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _378(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_40 = _ret;
case 4:
_ret = Ljoin(['(', _39, " && ", _40, ')'])(function (_ret) {
return _378(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_41 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _378;
});
case 13:
_ret = LgenerateIf = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _54, _55;
function _380(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _42, _43, _47, _44, _45, _46, _49, _48, _50, _51, _52, _53;
function _383(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_42 = false;
case 1:
_ret = Lgenerate(Li[0], Lenv, Lctx, Ldef)(function (_ret) {
return _383(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_44 = _ret;
case 3:
_ret = Lctx(_44)(function (_ret) {
return _383(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_45 = _ret;
case 5:
_ret = Ljoin(['{\n', _45, '\n}'])(function (_ret) {
return _383(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_46 = _ret;
case 7:
_ret = _43 = _46
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _384(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_42 = false;
case 1:
_ret = LgenerateIf(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _384(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_48 = _ret;
case 3:
_ret = _43 = _48
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _385(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Li[0], Lenv, Lctx, Ldef)(function (_ret) {
return _385(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_50 = _ret;
case 2:
_ret = Lgenerate(Li[1], Lenv, Lctx, Ldef)(function (_ret) {
return _385(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_51 = _ret;
case 4:
_ret = Lctx(_51)(function (_ret) {
return _385(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_52 = _ret;
case 6:
_ret = Ljoin(['if (', _50, ') {\n', _52, '\n}'])(function (_ret) {
return _385(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_53 = _ret;
case 8:
_ret = _43 = _53
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _382(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_42 = _ret;
case 2:
_ret = null;
case 3:
_43 = _ret;
case 4:
_ret = L__eq__(Li[1], 'else')(function (_ret) {
return _382(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_47 = _ret;
case 6:
if ((_42 && _47)) {
_383(function (_ret) {
return _382(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Li[1], 'if')(function (_ret) {
return _382(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_49 = _ret;
case 9:
if ((_42 && _49)) {
_384(function (_ret) {
return _382(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
if (_42) {
_385(function (_ret) {
return _382(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _382;
}))(function (_ret) {
return _380(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_54 = _ret;
case 2:
_ret = (function (_386, _387) {
if (typeof _386.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _386.join.apply(_386, arguments);
} else if (_386.join !== undefined) {
if (_387 === undefined) {
return function (_ret) {
return _386.join;
}
}
return function (_ret) {
_386.join = _387;
}
}})(_54, ' else ')(function (_ret) {
return _380(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_55 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _380;
});
case 14:
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
case 15:
_ret = LgenerateAtomic = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var Lret, _ret, _56, _57, _63, _58, _59, _60, _62, _61;
function _392(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_58 = false;
case 1:
_ret = LtransformVarName(LoperateFuncName[Lexpr[0]])(function (_ret) {
return _392(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_60 = _ret;
case 3:
_ret = _59 = Lret = _60
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _393(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_58 = false;
case 1:
_ret = LtransformVarName(Lexpr[0])(function (_ret) {
return _393(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_61 = _ret;
case 3:
_ret = _59 = Lret = _61
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _391(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_56 = false;
case 1:
_ret = true;
case 2:
_58 = _ret;
case 3:
_ret = null;
case 4:
_59 = _ret;
case 5:
if ((_58 && LoperateFuncName[Lexpr[0]])) {
_392(function (_ret) {
return _391(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 6:
_ret = L__eq__(Lexpr[3], undefined)(function (_ret) {
return _391(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_62 = _ret;
case 8:
if ((_58 && _62)) {
_393(function (_ret) {
return _391(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 9:
_ret = _57 = _59
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _390(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lret = Lexpr[0];
case 1:
_ret = true;
case 2:
_56 = _ret;
case 3:
_ret = null;
case 4:
_57 = _ret;
case 5:
_ret = L__eq__(Lexpr[2], '{var}')(function (_ret) {
return _390(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_63 = _ret;
case 7:
if ((_56 && _63)) {
_391(function (_ret) {
return _390(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 8:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _390;
});
case 16:
_ret = LgeneratePropertyName = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _64, _65, _67, _66, _69, _68;
function _396(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_64 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, Lenv, Lctx, Ldef)(function (_ret) {
return _396(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_66 = _ret;
case 3:
_ret = _65 = _66
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _397(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_64 = false;
case 1:
_ret = LgenerateAtomic(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _397(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_68 = _ret;
case 3:
_ret = _65 = _68
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _395(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_64 = _ret;
case 2:
_ret = null;
case 3:
_65 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _395(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_67 = _ret;
case 6:
if ((_64 && _67)) {
_396(function (_ret) {
return _395(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Lexpr[1], '{index}')(function (_ret) {
return _395(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_69 = _ret;
case 9:
if ((_64 && _69)) {
_397(function (_ret) {
return _395(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _395;
});
case 17:
_ret = LgenerateProperty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _70, LpropertyName, _71, LpropertyValue, _72;
function _399(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LgeneratePropertyName(Lexpr[0], Lenv, Lctx0, Ldef)(function (_ret) {
return _399(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_70 = _ret;
case 2:
_ret = LpropertyName = _70;
case 3:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _399(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_71 = _ret;
case 5:
_ret = LpropertyValue = _71;
case 6:
_ret = Ljoin([LpropertyName, ": ", LpropertyValue])(function (_ret) {
return _399(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_72 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _399;
});
case 18:
_ret = LgenerateObjectLiteral = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _74, _75, LobjectBody, _76;
function _401(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _73;
function _403(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LgenerateProperty(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _403(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_73 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _403;
}))(function (_ret) {
return _401(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_74 = _ret;
case 2:
_ret = (function (_404, _405) {
if (typeof _404.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _404.join.apply(_404, arguments);
} else if (_404.join !== undefined) {
if (_405 === undefined) {
return function (_ret) {
return _404.join;
}
}
return function (_ret) {
_404.join = _405;
}
}})(_74, ",\n")(function (_ret) {
return _401(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_75 = _ret;
case 4:
_ret = LobjectBody = _75;
case 5:
_ret = Ljoin(["{\n", LobjectBody, "\n}"])(function (_ret) {
return _401(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_76 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _401;
});
case 19:
_ret = LtransformVarName = (function (Lname) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _77, _78, _79, _80, _82, _83, _84, _85, _86, _87, _88, _89, _90, _81;
function _409(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_77 = false;
case 1:
_ret = _78 = Lname = '_require(require)'
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _410(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_77 = false;
case 1:
_ret = _78 = Lname = '_defer(defer_stack)'
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _411(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'undefined')(function (_ret) {
return _411(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_84 = _ret;
case 2:
_83 = _84
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _412(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'null')(function (_ret) {
return _412(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_86 = _ret;
case 2:
_85 = _86
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _413(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'true')(function (_ret) {
return _413(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_88 = _ret;
case 2:
_87 = _88
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _414(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lname, 'false')(function (_ret) {
return _414(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_90 = _ret;
case 2:
_89 = _90
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _415(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_77 = false;
case 1:
_ret = L__add__('L', Lname)(function (_ret) {
return _415(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_81 = _ret;
case 3:
_ret = _78 = Lname = _81
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _408(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_77 = _ret;
case 2:
_ret = null;
case 3:
_78 = _ret;
case 4:
_ret = L__eq__(Lname, 'require')(function (_ret) {
return _408(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_79 = _ret;
case 6:
if ((_77 && _79)) {
_409(function (_ret) {
return _408(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Lname, 'defer')(function (_ret) {
return _408(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_80 = _ret;
case 9:
if ((_77 && _80)) {
_410(function (_ret) {
return _408(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
_ret = L__ne__(Lname, 'exports')(function (_ret) {
return _408(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 11:
_82 = _ret;
case 12:
_ret = _82;
case 13:
_83 = _ret;
case 14:
if (_83) {
_411(function (_ret) {
return _408(_cb, 15, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 15:
_ret = _83;
case 16:
_85 = _ret;
case 17:
if (_85) {
_412(function (_ret) {
return _408(_cb, 18, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 18:
_ret = _85;
case 19:
_87 = _ret;
case 20:
if (_87) {
_413(function (_ret) {
return _408(_cb, 21, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 21:
_ret = _87;
case 22:
_89 = _ret;
case 23:
if (_89) {
_414(function (_ret) {
return _408(_cb, 24, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 24:
if ((_77 && _89)) {
_415(function (_ret) {
return _408(_cb, 25, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 25:
_ret = Lname
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _408;
});
case 20:
_ret = LgetVarName = (function (Lexpr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _91, _92, _94, _93, _96, _95;
function _418(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_91 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, {

}, Lctx0)(function (_ret) {
return _418(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_93 = _ret;
case 3:
_ret = _92 = _93
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _419(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_91 = false;
case 1:
_ret = LgetVarName(Lexpr[0])(function (_ret) {
return _419(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_95 = _ret;
case 3:
_ret = _92 = _95
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _417(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_91 = _ret;
case 2:
_ret = null;
case 3:
_92 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _417(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_94 = _ret;
case 6:
if ((_91 && _94)) {
_418(function (_ret) {
return _417(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Lexpr[1], '{.}')(function (_ret) {
return _417(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_96 = _ret;
case 9:
if ((_91 && _96)) {
_419(function (_ret) {
return _417(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _417;
});
case 21:
_ret = LgenerateField = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _97, _98, _101, _99, _100, _104, _102, _103;
function _422(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_97 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef)(function (_ret) {
return _422(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_99 = _ret;
case 3:
_ret = L__add__('.', _99)(function (_ret) {
return _422(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_100 = _ret;
case 5:
_ret = _98 = _100
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _423(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_97 = false;
case 1:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _423(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_102 = _ret;
case 3:
_ret = Ljoin(['[', _102, ']'])(function (_ret) {
return _423(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_103 = _ret;
case 5:
_ret = _98 = _103
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _421(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_97 = _ret;
case 2:
_ret = null;
case 3:
_98 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _421(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_101 = _ret;
case 6:
if ((_97 && _101)) {
_422(function (_ret) {
return _421(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Lexpr[1], '{index}')(function (_ret) {
return _421(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_104 = _ret;
case 9:
if ((_97 && _104)) {
_423(function (_ret) {
return _421(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _421;
});
case 22:
_ret = LgenerateFieldAccess = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _105, _106, _108, _107, _112, _109, Lobj, _110, Lfield, _111;
function _426(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_105 = false;
case 1:
_ret = LgenerateAtomic(Lexpr, Lenv, Lctx0, Ldef)(function (_ret) {
return _426(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_107 = _ret;
case 3:
_ret = _106 = _107
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _427(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_105 = false;
case 1:
_ret = LgenerateFieldAccess(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _427(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_109 = _ret;
case 3:
_ret = Lobj = _109;
case 4:
_ret = LgenerateField(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _427(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_110 = _ret;
case 6:
_ret = Lfield = _110;
case 7:
_ret = L__add__(Lobj, Lfield)(function (_ret) {
return _427(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_111 = _ret;
case 9:
_ret = _106 = _111
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _425(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_105 = _ret;
case 2:
_ret = null;
case 3:
_106 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _425(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_108 = _ret;
case 6:
if ((_105 && _108)) {
_426(function (_ret) {
return _425(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Lexpr[1], '{.}')(function (_ret) {
return _425(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_112 = _ret;
case 9:
if ((_105 && _112)) {
_427(function (_ret) {
return _425(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _425;
});
case 23:
_ret = LgenerateArray = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _114, _115, LarrayBody, _116;
function _429(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _113;
function _431(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _431(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_113 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _431;
}))(function (_ret) {
return _429(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_114 = _ret;
case 2:
_ret = (function (_432, _433) {
if (typeof _432.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _432.join.apply(_432, arguments);
} else if (_432.join !== undefined) {
if (_433 === undefined) {
return function (_ret) {
return _432.join;
}
}
return function (_ret) {
_432.join = _433;
}
}})(_114, ', ')(function (_ret) {
return _429(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_115 = _ret;
case 4:
_ret = LarrayBody = _115;
case 5:
_ret = Ljoin(['[', LarrayBody, ']'])(function (_ret) {
return _429(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_116 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _429;
});
case 24:
_ret = LgenerateMethod = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _117, LlocalVarName, _118, LlocalValueName, _119, LmethodName, _120, Lmethod, _121, LtmpVar, _122;
function _436(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _436(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_117 = _ret;
case 2:
_ret = LlocalVarName = _117;
case 3:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _436(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_118 = _ret;
case 5:
_ret = LlocalValueName = _118;
case 6:
_ret = LgenerateField(Lexpr[0], Lenv, Lctx0)(function (_ret) {
return _436(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_119 = _ret;
case 8:
_ret = LmethodName = _119;
case 9:
_ret = L__add__(LlocalVarName, LmethodName)(function (_ret) {
return _436(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_120 = _ret;
case 11:
_ret = Lmethod = _120;
case 12:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _436(_cb, 13, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 13:
_121 = _ret;
case 14:
_ret = LtmpVar = _121;
case 15:
_ret = Ljoin(["(function (", LlocalVarName, ", ", LlocalValueName, ") {\n", "if (typeof ", Lmethod, " === 'function') {\n", "arguments = Array.prototype.slice.call(arguments, 0, arguments.length);\n", "return ", Lmethod, ".apply(", LlocalVarName, ", arguments);\n", "} else if (", Lmethod, " !== undefined) {\n", "if (", LlocalValueName, " === undefined) {\n", "return function (_ret) {\n", "return ", Lmethod, ';\n', "}\n", "}\n", "return function (_ret) {\n", Lmethod, " = ", LlocalValueName, ";\n", "}\n", "}", "})"])(function (_ret) {
return _436(_cb, 16, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 16:
_122 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _436;
});
case 25:
_ret = LgenerateWhile = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _123, _124, _125, _126;
function _438(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _438(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_123 = _ret;
case 2:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _438(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_124 = _ret;
case 4:
_ret = Lctx(_124, true)(function (_ret) {
return _438(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_125 = _ret;
case 6:
_ret = Ljoin(['while (', _123, ') {\n', _125, "\n}"])(function (_ret) {
return _438(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_126 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _438;
});
case 26:
_ret = LgenerateBreak = (function (Lexpr, Lenv, Lctx) {
var Larguments = arguments;
var defer_stack = [];
;
function _440(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = 'break'
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _440;
});
case 27:
_ret = LgenerateEmpty = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
;
function _442(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = ""
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _442;
});
case 28:
_ret = LgenerateDef = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _127, Lvarname, _128, _129, _130, Lret;
function _444(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LgetVarName(Lexpr[0])(function (_ret) {
return _444(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_127 = _ret;
case 2:
_ret = Lvarname = _127;
case 3:
_ret = Ldef.defineVar(Lvarname)(function (_ret) {
return _444(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_128 = _ret;
case 5:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _444(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_129 = _ret;
case 7:
_ret = Ljoin([Lvarname, ' = ', _129])(function (_ret) {
return _444(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_130 = _ret;
case 9:
_ret = Lret = _130;
case 10:
_ret = Lenv[Lvarname] = true;
case 11:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _444;
});
case 29:
_ret = LgenerateAssign = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _131, Lvarname, _132, _133, _136, _137, _138, _134, _135, _139, _140, Lvalue, _141;
function _447(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lvarname, LseqFuncParamsName.ret)(function (_ret) {
return _447(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_138 = _ret;
case 2:
_137 = _138
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _448(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_132 = false;
case 1:
_ret = Lconsole.log(Lvarname)(function (_ret) {
return _448(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_134 = _ret;
case 3:
_ret = Lconsole.log("this var is undefined")(function (_ret) {
return _448(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_135 = _ret;
case 5:
_ret = _133 = _135
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _446(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LgetVarName(Lexpr[0])(function (_ret) {
return _446(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_131 = _ret;
case 2:
_ret = Lvarname = _131;
case 3:
_ret = true;
case 4:
_132 = _ret;
case 5:
_ret = null;
case 6:
_133 = _ret;
case 7:
_ret = L__eq__(Lenv[Lvarname], undefined)(function (_ret) {
return _446(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_136 = _ret;
case 9:
_ret = _136;
case 10:
_137 = _ret;
case 11:
if (_137) {
_447(function (_ret) {
return _446(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 12:
if ((_132 && _137)) {
_448(function (_ret) {
return _446(_cb, 13, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 13:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef)(function (_ret) {
return _446(_cb, 14, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 14:
_139 = _ret;
case 15:
_ret = Lvarname = _139;
case 16:
_ret = Lgenerate(Lexpr[2], Lenv, Lctx, Ldef)(function (_ret) {
return _446(_cb, 17, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 17:
_140 = _ret;
case 18:
_ret = Lvalue = _140;
case 19:
_ret = Ljoin([Lvarname, " = ", Lvalue])(function (_ret) {
return _446(_cb, 20, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 20:
_141 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _446;
});
case 30:
_ret = LgenerateFunc = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _142, LfuncEnv, _143, Largs, _144, LtmpVar, _145, Ldef, _146, Lbody, _147, _148, _149, _150;
function _450(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lenv_new(Lenv)(function (_ret) {
return _450(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_142 = _ret;
case 2:
_ret = LfuncEnv = _142;
case 3:
_ret = LgenerateFuncArgs(Lexpr[0], LfuncEnv, Lctx0)(function (_ret) {
return _450(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_143 = _ret;
case 5:
_ret = Largs = _143;
case 6:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _450(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_144 = _ret;
case 8:
_ret = LtmpVar = _144;
case 9:
_ret = Lcall(LGenerateDefNew)(function (_ret) {
return _450(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_145 = _ret;
case 11:
_ret = Ldef = _145;
case 12:
_ret = Lgenerate(Lexpr[2], LfuncEnv, Lctx0, Ldef)(function (_ret) {
return _450(_cb, 13, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 13:
_146 = _ret;
case 14:
_ret = Lbody = _146;
case 15:
_ret = LtransformVarName('arguments')(function (_ret) {
return _450(_cb, 16, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 16:
_147 = _ret;
case 17:
_ret = Lcall(Ldef.defineVar)(function (_ret) {
return _450(_cb, 18, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 18:
_148 = _ret;
case 19:
_ret = Lcall(Ldef.appendExpr)(function (_ret) {
return _450(_cb, 20, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 20:
_149 = _ret;
case 21:
_ret = (function (_451, _452) {
if (typeof _451.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _451.join.apply(_451, arguments);
} else if (_451.join !== undefined) {
if (_452 === undefined) {
return function (_ret) {
return _451.join;
}
}
return function (_ret) {
_451.join = _452;
}
}})(['(function (', Largs, ') {\n', 'var ', _147, ' = arguments;\n', 'var defer_stack = [];\n', _148, ";\n", _149, ";\n", 'return ', Lbody, ";\n", '})'], '')(function (_ret) {
return _450(_cb, 22, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 22:
_150 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _450;
});
case 31:
_ret = LgenerateExpr = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _151, Lfunc, _152, Largs, _158, _159, _160;
function _455(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[1], Lenv, Lctx0, Ldef)(function (_ret) {
return _455(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_151 = _ret;
case 2:
_ret = Lfunc = _151;
case 3:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx0, Ldef)(function (_ret) {
return _455(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_152 = _ret;
case 5:
_ret = Largs = _152;
case 6:
_ret = Lforeach(Lexpr, (function (Litem, Lindex) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _153, _154, _157, _155, _156;
function _458(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_153 = false;
case 1:
_ret = Lgenerate(Litem, Lenv, Lctx0, Ldef)(function (_ret) {
return _458(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_155 = _ret;
case 3:
_ret = Ljoin([Largs, ', ', _155])(function (_ret) {
return _458(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_156 = _ret;
case 5:
_ret = _154 = Largs = _156
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _457(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_153 = _ret;
case 2:
_ret = null;
case 3:
_154 = _ret;
case 4:
_ret = L__gt__(Lindex, 1)(function (_ret) {
return _457(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_157 = _ret;
case 6:
if ((_153 && _157)) {
_458(function (_ret) {
return _457(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _457;
}))(function (_ret) {
return _455(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_158 = _ret;
case 8:
_ret = Ljoin([Lfunc, '(', Largs, ')'])(function (_ret) {
return _455(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_159 = _ret;
case 10:
_ret = Lctx(_159)(function (_ret) {
return _455(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 11:
_160 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _455;
});
case 32:
_ret = LGenerateDefNew = (function () {
var Larguments = arguments;
var defer_stack = [];
var Lvars, Lfuncs;
function _460(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lvars = {

};
case 1:
_ret = Lfuncs = [];
case 2:
_ret = {
defineVar: (function (Lv) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _161, _162, _163, Lvecs, _164, _165, _168, _166, _167;
function _463(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_161 = false;
case 1:
_ret = _162 = Lvars[Lv] = Lv
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _467(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_164 = false;
case 1:
_ret = (function (_468, _469) {
if (typeof _468.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _468.join.apply(_468, arguments);
} else if (_468.join !== undefined) {
if (_469 === undefined) {
return function (_ret) {
return _468.join;
}
}
return function (_ret) {
_468.join = _469;
}
}})(Lvecs, ', ')(function (_ret) {
return _467(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_166 = _ret;
case 3:
_ret = L__add__('var ', _166)(function (_ret) {
return _467(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_167 = _ret;
case 5:
_ret = _165 = _167
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _471(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = _165 = ''
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _464(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lvars, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _466(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Li
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _466;
}))(function (_ret) {
return _464(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_163 = _ret;
case 2:
_ret = Lvecs = _163;
case 3:
_ret = true;
case 4:
_164 = _ret;
case 5:
_ret = null;
case 6:
_165 = _ret;
case 7:
_ret = L__gt__(Lvecs.length, 0)(function (_ret) {
return _464(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_168 = _ret;
case 9:
if ((_164 && _168)) {
_467(function (_ret) {
return _464(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
if (_164) {
_471(function (_ret) {
return _464(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 11:
_ret = _162 = _165
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _462(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_161 = _ret;
case 2:
_ret = null;
case 3:
_162 = _ret;
case 4:
if ((_161 && Lv)) {
_463(function (_ret) {
return _462(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 5:
if (_161) {
_464(function (_ret) {
return _462(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _462;
}),
appendExpr: (function (Lv) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _169, _170, _171, _172;
function _474(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_169 = false;
case 1:
_ret = (function (_475, _476) {
if (typeof _475.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _475.push.apply(_475, arguments);
} else if (_475.push !== undefined) {
if (_476 === undefined) {
return function (_ret) {
return _475.push;
}
}
return function (_ret) {
_475.push = _476;
}
}})(Lfuncs, Lv)(function (_ret) {
return _474(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_171 = _ret;
case 3:
_ret = _170 = _171
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _478(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = (function (_479, _480) {
if (typeof _479.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _479.join.apply(_479, arguments);
} else if (_479.join !== undefined) {
if (_480 === undefined) {
return function (_ret) {
return _479.join;
}
}
return function (_ret) {
_479.join = _480;
}
}})(Lfuncs, ';\n')(function (_ret) {
return _478(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_172 = _ret;
case 2:
_ret = _170 = _172
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _473(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_169 = _ret;
case 2:
_ret = null;
case 3:
_170 = _ret;
case 4:
if ((_169 && Lv)) {
_474(function (_ret) {
return _473(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 5:
if (_169) {
_478(function (_ret) {
return _473(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _473;
})
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _460;
});
case 33:
_ret = LgenerateStart = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _173, Ldef, _174, Lbody, _175, _176, _177, _178;
function _483(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LGenerateDefNew)(function (_ret) {
return _483(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_173 = _ret;
case 2:
_ret = Ldef = _173;
case 3:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _483(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_174 = _ret;
case 5:
_ret = Lbody = _174;
case 6:
_ret = Ljoin(['module.exports = ', Lbody, '\n'])(function (_ret) {
return _483(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_175 = _ret;
case 8:
_ret = Lbody = _175;
case 9:
_ret = Lcall(Ldef.defineVar)(function (_ret) {
return _483(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_176 = _ret;
case 11:
_ret = Lcall(Ldef.appendExpr)(function (_ret) {
return _483(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 12:
_177 = _ret;
case 13:
_ret = Ljoin(['var defer_stack = [];\n', 'function ', LseqFuncParamsName.chainDefer, '() {\n', 'thisDefer(defer_stack)(function(){return;}, 0);\n', '}\n', _176, ";\n", _177, ";\n", Lbody])(function (_ret) {
return _483(_cb, 14, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 14:
_178 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _483;
});
case 34:
_ret = LgenerateMono = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _179;
function _485(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _485(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_179 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _485;
});
case 35:
_ret = LgeneratePathItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _180;
function _487(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Ljoin(['"', Lexpr[0], '"'])(function (_ret) {
return _487(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_180 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _487;
});
case 36:
_ret = LgeneratePathArgItem = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _181, _182;
function _489(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Lexpr[0], Lenv, Lctx, Ldef)(function (_ret) {
return _489(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_181 = _ret;
case 2:
_ret = Ljoin(['("', Lexpr[2], '" + ', _181, ')'])(function (_ret) {
return _489(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_182 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _489;
});
case 37:
_ret = LgeneratePath = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _184, _185, Lpath, _186;
function _491(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _183;
function _493(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lgenerate(Li, Lenv, Lctx, Ldef)(function (_ret) {
return _493(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_183 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _493;
}))(function (_ret) {
return _491(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_184 = _ret;
case 2:
_ret = (function (_494, _495) {
if (typeof _494.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _494.join.apply(_494, arguments);
} else if (_494.join !== undefined) {
if (_495 === undefined) {
return function (_ret) {
return _494.join;
}
}
return function (_ret) {
_494.join = _495;
}
}})(_184, ',')(function (_ret) {
return _491(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_185 = _ret;
case 4:
_ret = Lpath = _185;
case 5:
_ret = Ljoin(['[', Lpath, '].join("/")'])(function (_ret) {
return _491(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_186 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _491;
});
case 38:
_ret = LgenerateModule = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _187, Lname, LmoduleExpr;
function _498(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = (function (_499, _500) {
if (typeof _499.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _499.join.apply(_499, arguments);
} else if (_499.join !== undefined) {
if (_500 === undefined) {
return function (_ret) {
return _499.join;
}
}
return function (_ret) {
_499.join = _500;
}
}})(['"', Lexpr[0], '"'], '')(function (_ret) {
return _498(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_187 = _ret;
case 2:
_ret = Lname = [_187, '{atomic}'];
case 3:
_ret = LmoduleExpr = [Lname, ['module', '{atomic}', '{var}']]
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _498;
});
case 39:
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
case 40:
_ret = LgenerateOp = (function (Lhint) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _188, _189;
function _504(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_188 = false;
case 1:
_ret = _189 = LgenerateOpTable[Lhint]
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _505(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = _189 = LgenerateExpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _503(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_188 = _ret;
case 2:
_ret = null;
case 3:
_189 = _ret;
case 4:
if ((_188 && LgenerateOpTable[Lhint])) {
_504(function (_ret) {
return _503(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 5:
if (_188) {
_505(function (_ret) {
return _503(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _503;
});
case 41:
_ret = Lgenerate = (function (Lexpr, Lenv, Lctx, Ldef) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _190, _191;
function _507(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LgenerateOp(Lexpr[1])(function (_ret) {
return _507(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_190 = _ret;
case 2:
_ret = _190(Lexpr, Lenv, Lctx, Ldef)(function (_ret) {
return _507(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_191 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _507;
});
case 42:
_ret = Lenv0 = {
exports: null,
__builtin__: "require('/lib/lix/__builtin__.js');"
};
case 43:
_ret = Lenv_new = (function (Lenv) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _192, LEnv, _193;
function _510(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_192 = Lenv0
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _509(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lenv;
case 1:
_192 = _ret;
case 2:
if (_192) {
(function (_ret) {
return _509(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
} else {
_510(function (_ret) {
return _509(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 3:
_ret = Lenv = _192;
case 4:
_ret = LEnv = (function () {
var Larguments = arguments;
var defer_stack = [];
;
function _512(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {

default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _512;
});
case 5:
_ret = LEnv.prototype = Lenv;
case 6:
_ret = L_instance_(LEnv)(function (_ret) {
return _509(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_193 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _509;
});
case 44:
_ret = LflattenExpr = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _195, _196;
function _514(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr, (function (Litem) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _194;
function _516(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Litem, Ldefine)(function (_ret) {
return _516(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_194 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _516;
}))(function (_ret) {
return _514(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_195 = _ret;
case 2:
_ret = Ldefine(_195)(function (_ret) {
return _514(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_196 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _514;
});
case 45:
_ret = LflattenBreak = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
;
function _518(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _518;
});
case 46:
_ret = LflattenWhile = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _197, LwhileDefine, _198, _199, _200, _201, _202, _204, _205;
function _520(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _520(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_197 = _ret;
case 2:
_ret = LwhileDefine = _197;
case 3:
_ret = Lflatten(Lexpr[0], LwhileDefine)(function (_ret) {
return _520(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_198 = _ret;
case 5:
_ret = Lexpr[0] = _198;
case 6:
_ret = Lflatten(Lexpr[2], Ldefine0)(function (_ret) {
return _520(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_199 = _ret;
case 8:
_ret = Lexpr[2] = _199;
case 9:
_ret = Lcall(LwhileDefine)(function (_ret) {
return _520(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_200 = _ret;
case 11:
_ret = (function (_521, _522) {
if (typeof _521.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _521.concat.apply(_521, arguments);
} else if (_521.concat !== undefined) {
if (_522 === undefined) {
return function (_ret) {
return _521.concat;
}
}
return function (_ret) {
_521.concat = _522;
}
}})(Lexpr[2][0], _200)(function (_ret) {
return _520(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 12:
_201 = _ret;
case 13:
_ret = Lexpr[2][0] = _201;
case 14:
_ret = Lcall(LwhileDefine)(function (_ret) {
return _520(_cb, 15, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 15:
_202 = _ret;
case 16:
_ret = Lforeach(_202, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _203;
function _525(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Ldefine(Li, true)(function (_ret) {
return _525(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_203 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _525;
}))(function (_ret) {
return _520(_cb, 17, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 17:
_204 = _ret;
case 18:
_ret = Ldefine(Lexpr, true)(function (_ret) {
return _520(_cb, 19, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 19:
_205 = _ret;
case 20:
_ret = ['undefined', '{atomic}']
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _520;
});
case 47:
_ret = LflattenOr = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _206, Lret, _207, _208, _210, _209, LgetAndOpSeq, _215, _216;
function _528(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_207 = false;
case 1:
_ret = Ldefine(Lret)(function (_ret) {
return _528(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_209 = _ret;
case 3:
_ret = _208 = Lret = _209
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _527(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _527(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_206 = _ret;
case 2:
_ret = Lret = _206;
case 3:
_ret = true;
case 4:
_207 = _ret;
case 5:
_ret = null;
case 6:
_208 = _ret;
case 7:
_ret = L__ne__(Lret[2], 'var')(function (_ret) {
return _527(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_210 = _ret;
case 9:
if ((_207 && _210)) {
_528(function (_ret) {
return _527(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
_ret = LgetAndOpSeq = (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _211, LAndDefine, _212, LseqRet, _213, Lseq, _214;
function _530(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _530(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_211 = _ret;
case 2:
_ret = LAndDefine = _211;
case 3:
_ret = Lflatten(Lexpr[2], LAndDefine)(function (_ret) {
return _530(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_212 = _ret;
case 5:
_ret = LseqRet = _212;
case 6:
_ret = Lcall(LAndDefine)(function (_ret) {
return _530(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_213 = _ret;
case 8:
_ret = Lseq = _213;
case 9:
_ret = (function (_531, _532) {
if (typeof _531.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _531.push.apply(_531, arguments);
} else if (_531.push !== undefined) {
if (_532 === undefined) {
return function (_ret) {
return _531.push;
}
}
return function (_ret) {
_531.push = _532;
}
}})(Lseq, [Lret, '=', LseqRet])(function (_ret) {
return _530(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_214 = _ret;
case 11:
_ret = [Lseq, '{seq}']
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _530;
});
case 11:
_ret = Lcall(LgetAndOpSeq)(function (_ret) {
return _527(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 12:
_215 = _ret;
case 13:
_ret = Ldefine([[[Lret, [[], '{empty}']], [_215, 'else']], 'if'], true)(function (_ret) {
return _527(_cb, 14, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 14:
_216 = _ret;
case 15:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _527;
});
case 48:
_ret = LflattenAnd = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _217, Lret, _218, _219, _221, _220, LgetAndOpSeq, _226, _227;
function _536(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_218 = false;
case 1:
_ret = Ldefine(Lret)(function (_ret) {
return _536(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_220 = _ret;
case 3:
_ret = _219 = Lret = _220
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _535(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _535(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_217 = _ret;
case 2:
_ret = Lret = _217;
case 3:
_ret = true;
case 4:
_218 = _ret;
case 5:
_ret = null;
case 6:
_219 = _ret;
case 7:
_ret = L__ne__(Lret[2], 'var')(function (_ret) {
return _535(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_221 = _ret;
case 9:
if ((_218 && _221)) {
_536(function (_ret) {
return _535(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
_ret = LgetAndOpSeq = (function () {
var Larguments = arguments;
var defer_stack = [];
var _ret, _222, LAndDefine, _223, LseqRet, _224, Lseq, _225;
function _538(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _538(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_222 = _ret;
case 2:
_ret = LAndDefine = _222;
case 3:
_ret = Lflatten(Lexpr[2], LAndDefine)(function (_ret) {
return _538(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_223 = _ret;
case 5:
_ret = LseqRet = _223;
case 6:
_ret = Lcall(LAndDefine)(function (_ret) {
return _538(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_224 = _ret;
case 8:
_ret = Lseq = _224;
case 9:
_ret = (function (_539, _540) {
if (typeof _539.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _539.push.apply(_539, arguments);
} else if (_539.push !== undefined) {
if (_540 === undefined) {
return function (_ret) {
return _539.push;
}
}
return function (_ret) {
_539.push = _540;
}
}})(Lseq, [Lret, '=', LseqRet])(function (_ret) {
return _538(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_225 = _ret;
case 11:
_ret = [Lseq, '{seq}']
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _538;
});
case 11:
_ret = Lcall(LgetAndOpSeq)(function (_ret) {
return _535(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 12:
_226 = _ret;
case 13:
_ret = Ldefine([[[Lret, _226]], 'if'], true)(function (_ret) {
return _535(_cb, 14, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 14:
_227 = _ret;
case 15:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _535;
});
case 49:
_ret = L_flattenIf = (function (Lexpr, Ldefine, LtmpVar, Lctx) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _240;
function _543(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lforeach(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _228, _229, _232, _230, LelseSeq, _231, _235, _233, _234, _236, LifSeq, _237, _238, Lcond, _239;
function _546(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_228 = false;
case 1:
_ret = Lflatten(Li[0], Ldefine0, Lctx)(function (_ret) {
return _546(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_230 = _ret;
case 3:
_ret = LelseSeq = _230;
case 4:
_ret = Ldefine([[[LtmpVar, LelseSeq]], 'if'], true)(function (_ret) {
return _546(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_231 = _ret;
case 6:
_ret = _229 = _231
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _547(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_228 = false;
case 1:
_ret = L_flattenIf(Li, Ldefine, LtmpVar, Lctx)(function (_ret) {
return _547(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_233 = _ret;
case 3:
_ret = Ldefine(_233)(function (_ret) {
return _547(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_234 = _ret;
case 5:
_ret = _229 = _234
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _548(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Li[1], Ldefine0, Lctx)(function (_ret) {
return _548(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_236 = _ret;
case 2:
_ret = LifSeq = _236;
case 3:
_ret = (function (_549, _550) {
if (typeof _549.unshift === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _549.unshift.apply(_549, arguments);
} else if (_549.unshift !== undefined) {
if (_550 === undefined) {
return function (_ret) {
return _549.unshift;
}
}
return function (_ret) {
_549.unshift = _550;
}
}})(LifSeq[0], [LtmpVar, '=', ['false', '{atomic}']])(function (_ret) {
return _548(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_237 = _ret;
case 5:
_ret = Lflatten(Li[0], Ldefine)(function (_ret) {
return _548(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_238 = _ret;
case 7:
_ret = Lcond = _238;
case 8:
_ret = Lcond = [LtmpVar, 'and', Lcond];
case 9:
_ret = Ldefine([[[Lcond, LifSeq]], 'if'], true)(function (_ret) {
return _548(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 10:
_239 = _ret;
case 11:
_ret = _229 = _239
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _545(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_228 = _ret;
case 2:
_ret = null;
case 3:
_229 = _ret;
case 4:
_ret = L__eq__(Li[1], 'else')(function (_ret) {
return _545(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_232 = _ret;
case 6:
if ((_228 && _232)) {
_546(function (_ret) {
return _545(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Li[1], 'if')(function (_ret) {
return _545(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_235 = _ret;
case 9:
if ((_228 && _235)) {
_547(function (_ret) {
return _545(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
if (_228) {
_548(function (_ret) {
return _545(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _545;
}))(function (_ret) {
return _543(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_240 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _543;
});
case 50:
_ret = LflattenIf = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _241, LtmpVar, _242, LretVar, Lctx, _243;
function _553(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Ldefine(['true', '{atomic}'])(function (_ret) {
return _553(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_241 = _ret;
case 2:
_ret = LtmpVar = _241;
case 3:
_ret = Ldefine(['null', '{atomic}'])(function (_ret) {
return _553(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_242 = _ret;
case 5:
_ret = LretVar = _242;
case 6:
_ret = Lctx = (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _555(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = [LretVar, '=', Li]
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _555;
});
case 7:
_ret = L_flattenIf(Lexpr, Ldefine, LtmpVar, Lctx)(function (_ret) {
return _553(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_243 = _ret;
case 9:
_ret = LretVar
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _553;
});
case 51:
_ret = LflattenAssign = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _244;
function _557(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[2], Ldefine)(function (_ret) {
return _557(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_244 = _ret;
case 2:
_ret = Lexpr[2] = _244;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _557;
});
case 52:
_ret = LflattenDef = LflattenAssign;
case 53:
_ret = LflattenPathArgItem = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _245;
function _559(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _559(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_245 = _ret;
case 2:
_ret = Lexpr[0] = _245;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _559;
});
case 54:
_ret = LflattenPathItem = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
;
function _561(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _561;
});
case 55:
_ret = LflattenPath = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _247;
function _563(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _246;
function _565(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Li, Ldefine)(function (_ret) {
return _565(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_246 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _565;
}))(function (_ret) {
return _563(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_247 = _ret;
case 2:
_ret = Lexpr[0] = _247;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _563;
});
case 56:
_ret = LflattenEmpty = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
;
function _567(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _567;
});
case 57:
_ret = LflattenField = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _248, _249, _251, _250;
function _570(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_248 = false;
case 1:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _570(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_250 = _ret;
case 3:
_ret = _249 = Lexpr[0] = _250
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _569(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_248 = _ret;
case 2:
_ret = null;
case 3:
_249 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{index}')(function (_ret) {
return _569(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_251 = _ret;
case 6:
if ((_248 && _251)) {
_570(function (_ret) {
return _569(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _569;
});
case 58:
_ret = LflattenMethod = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _252;
function _572(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LflattenField(Lexpr[0], Ldefine)(function (_ret) {
return _572(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_252 = _ret;
case 2:
_ret = Lexpr[0] = _252;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _572;
});
case 59:
_ret = LflattenProperty = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _253;
function _574(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[2], Ldefine)(function (_ret) {
return _574(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_253 = _ret;
case 2:
_ret = Lexpr[2] = _253;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _574;
});
case 60:
_ret = LflattenObjectLiteral = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _255;
function _576(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _254;
function _578(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LflattenProperty(Li, Ldefine)(function (_ret) {
return _578(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_254 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _578;
}))(function (_ret) {
return _576(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_255 = _ret;
case 2:
_ret = Lexpr[0] = _255;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _576;
});
case 61:
_ret = LflattenArray = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _257;
function _580(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lexpr[0], (function (Li) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _256;
function _582(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Li, Ldefine)(function (_ret) {
return _582(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_256 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _582;
}))(function (_ret) {
return _580(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_257 = _ret;
case 2:
_ret = Lexpr[0] = _257;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _580;
});
case 62:
_ret = LflattenFunc = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _258;
function _584(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[2], Ldefine)(function (_ret) {
return _584(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_258 = _ret;
case 2:
_ret = Lexpr[2] = _258;
case 3:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _584;
});
case 63:
_ret = LflattenFieldAccess = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _259, _260, _263, _261, _262, _264;
function _587(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_259 = false;
case 1:
_ret = LflattenFieldAccess(Lexpr[0], Ldefine)(function (_ret) {
return _587(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_261 = _ret;
case 3:
_ret = Lexpr[0] = _261;
case 4:
_ret = LflattenField(Lexpr[2], Ldefine)(function (_ret) {
return _587(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_262 = _ret;
case 6:
_ret = _260 = Lexpr[2] = _262
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _588(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr, Ldefine)(function (_ret) {
return _588(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_264 = _ret;
case 2:
_ret = _260 = Lexpr = _264
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _586(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_259 = _ret;
case 2:
_ret = null;
case 3:
_260 = _ret;
case 4:
_ret = L__eq__(Lexpr[1], '{.}')(function (_ret) {
return _586(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_263 = _ret;
case 6:
if ((_259 && _263)) {
_587(function (_ret) {
return _586(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
if (_259) {
_588(function (_ret) {
return _586(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 8:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _586;
});
case 64:
_ret = LflattenAtomic = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
;
function _590(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _590;
});
case 65:
_ret = LflattenMono = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _265;
function _592(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _592(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_265 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _592;
});
case 66:
_ret = LstatementFlattenGenerator = (function () {
var Larguments = arguments;
var defer_stack = [];
var Ldata;
function _594(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Ldata = [];
case 1:
_ret = (function (Lstatement, LtmpVarName) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _266, _267, _268, _270, _269, _274, _271, LvarName, LlixVar, LtmpRet, _272, _273;
function _597(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_266 = false;
case 1:
_ret = _267 = Ldata
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _598(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_266 = false;
case 1:
_ret = (function (_599, _600) {
if (typeof _599.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _599.push.apply(_599, arguments);
} else if (_599.push !== undefined) {
if (_600 === undefined) {
return function (_ret) {
return _599.push;
}
}
return function (_ret) {
_599.push = _600;
}
}})(Ldata, Lstatement)(function (_ret) {
return _598(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_269 = _ret;
case 3:
_ret = _267 = _269
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _602(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_266 = false;
case 1:
_ret = Lcall(LgetUniqVarName)(function (_ret) {
return _602(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_271 = _ret;
case 3:
_ret = LvarName = _271;
case 4:
_ret = LlixVar = [LvarName, '{atomic}', '{var}', 'tmp'];
case 5:
_ret = LtmpRet = [LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'];
case 6:
_ret = (function (_603, _604) {
if (typeof _603.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _603.push.apply(_603, arguments);
} else if (_603.push !== undefined) {
if (_604 === undefined) {
return function (_ret) {
return _603.push;
}
}
return function (_ret) {
_603.push = _604;
}
}})(Ldata, [LtmpRet, ':=', Lstatement])(function (_ret) {
return _602(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_272 = _ret;
case 8:
_ret = (function (_606, _607) {
if (typeof _606.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _606.push.apply(_606, arguments);
} else if (_606.push !== undefined) {
if (_607 === undefined) {
return function (_ret) {
return _606.push;
}
}
return function (_ret) {
_606.push = _607;
}
}})(Ldata, [LlixVar, ':=', LtmpRet])(function (_ret) {
return _602(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_273 = _ret;
case 10:
_ret = _267 = LlixVar
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _596(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_266 = _ret;
case 2:
_ret = null;
case 3:
_267 = _ret;
case 4:
_ret = L__eq__(Lstatement, undefined)(function (_ret) {
return _596(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_268 = _ret;
case 6:
if ((_266 && _268)) {
_597(function (_ret) {
return _596(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(LtmpVarName, true)(function (_ret) {
return _596(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_270 = _ret;
case 9:
if ((_266 && _270)) {
_598(function (_ret) {
return _596(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
_ret = L__eq__(LtmpVarName, undefined)(function (_ret) {
return _596(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 11:
_274 = _ret;
case 12:
if ((_266 && _274)) {
_602(function (_ret) {
return _596(_cb, 13, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _596;
})
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _594;
});
case 67:
_ret = LflattenSeq = (function (Lexpr, Ldefine, LseqCtx) {
var Larguments = arguments;
var defer_stack = [];
var Lret, Lctx, _ret, _308;
function _610(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lret = [];
case 1:
_ret = Lctx = (function (Lstmt, Lindex) {
var Larguments = arguments;
var defer_stack = [];
var Lret, _ret, _275, _276, _278, _279, _280, _281, _277;
function _613(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LparseInt(Lindex)(function (_ret) {
return _613(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_279 = _ret;
case 2:
_ret = L__sub__(Lexpr[0].length, 1)(function (_ret) {
return _613(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_280 = _ret;
case 4:
_ret = L__eq__(_279, _280)(function (_ret) {
return _613(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_281 = _ret;
case 6:
_278 = _281
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _614(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_275 = false;
case 1:
_ret = LseqCtx(Lstmt)(function (_ret) {
return _614(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_277 = _ret;
case 3:
_ret = _276 = Lret = _277
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _612(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lret = Lstmt;
case 1:
_ret = true;
case 2:
_275 = _ret;
case 3:
_ret = null;
case 4:
_276 = _ret;
case 5:
_ret = LseqCtx;
case 6:
_278 = _ret;
case 7:
if (_278) {
_613(function (_ret) {
return _612(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 8:
if ((_275 && _278)) {
_614(function (_ret) {
return _612(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 9:
_ret = Lret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _612;
});
case 2:
_ret = Lforeach(Lexpr[0], (function (Litem, Lindex) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _282, LexprDefine, _283, LitemRet, _284, _285, _286, LstmtRet, LisTmpVar, LisRealVar, LisRealExpr, _298, _299, _304, _305, _306, _307, _300, _301, _302, _303;
function _630(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LisTmpVar(LstmtRet)(function (_ret) {
return _630(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_306 = _ret;
case 2:
_ret = Lnot(_306)(function (_ret) {
return _630(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_307 = _ret;
case 4:
_305 = _307
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _632(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_300 = false;
case 1:
_ret = _301 = LstmtRet = [[LseqFuncParamsName.ret, '{atomic}', '{var}', 'aux'], '=', LstmtRet]
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _631(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_298 = false;
case 1:
_ret = true;
case 2:
_300 = _ret;
case 3:
_ret = null;
case 4:
_301 = _ret;
case 5:
_ret = LisRealExpr(LstmtRet)(function (_ret) {
return _631(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_302 = _ret;
case 7:
if ((_300 && _302)) {
_632(function (_ret) {
return _631(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 8:
_ret = (function (_633, _634) {
if (typeof _633.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _633.push.apply(_633, arguments);
} else if (_633.push !== undefined) {
if (_634 === undefined) {
return function (_ret) {
return _633.push;
}
}
return function (_ret) {
_633.push = _634;
}
}})(Lret, LstmtRet)(function (_ret) {
return _631(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_303 = _ret;
case 10:
_ret = _299 = _303
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _616(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lcall(LstatementFlattenGenerator)(function (_ret) {
return _616(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_282 = _ret;
case 2:
_ret = LexprDefine = _282;
case 3:
_ret = Lflatten(Litem, LexprDefine)(function (_ret) {
return _616(_cb, 4, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 4:
_283 = _ret;
case 5:
_ret = LitemRet = _283;
case 6:
_ret = Lcall(LexprDefine)(function (_ret) {
return _616(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 7:
_284 = _ret;
case 8:
_ret = (function (_617, _618) {
if (typeof _617.concat === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _617.concat.apply(_617, arguments);
} else if (_617.concat !== undefined) {
if (_618 === undefined) {
return function (_ret) {
return _617.concat;
}
}
return function (_ret) {
_617.concat = _618;
}
}})(Lret, _284)(function (_ret) {
return _616(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_285 = _ret;
case 10:
_ret = Lret = _285;
case 11:
_ret = Lctx(LitemRet, Lindex)(function (_ret) {
return _616(_cb, 12, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 12:
_286 = _ret;
case 13:
_ret = LstmtRet = _286;
case 14:
_ret = LisTmpVar = (function (Lexpr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _287, _288, _289;
function _622(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lexpr[3], undefined)(function (_ret) {
return _622(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_289 = _ret;
case 2:
_288 = _289
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _621(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _621(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_287 = _ret;
case 2:
_ret = _287;
case 3:
_288 = _ret;
case 4:
if (_288) {
_622(function (_ret) {
return _621(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _621;
});
case 15:
_ret = LisRealVar = (function (Lexpr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _290, _291, _292;
function _625(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__eq__(Lexpr[3], undefined)(function (_ret) {
return _625(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_292 = _ret;
case 2:
_291 = _292
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _624(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__eq__(Lexpr[1], '{atomic}')(function (_ret) {
return _624(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_290 = _ret;
case 2:
_ret = _290;
case 3:
_291 = _ret;
case 4:
if (_291) {
_625(function (_ret) {
return _624(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _624;
});
case 16:
_ret = LisRealExpr = (function (Lexpr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _293, _294, _295, _296, _297;
function _629(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lexpr[1], 'while')(function (_ret) {
return _629(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_297 = _ret;
case 2:
_296 = _297
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _628(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = L__ne__(Lexpr[1], 'if')(function (_ret) {
return _628(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_295 = _ret;
case 2:
_ret = _295;
case 3:
_296 = _ret;
case 4:
if (_296) {
_629(function (_ret) {
return _628(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 5:
_294 = _296
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _627(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LisRealVar(Lexpr)(function (_ret) {
return _627(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_293 = _ret;
case 2:
_ret = _293;
case 3:
_294 = _ret;
case 4:
if (_294) {
(function (_ret) {
return _627(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
} else {
_628(function (_ret) {
return _627(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _627;
});
case 17:
_ret = true;
case 18:
_298 = _ret;
case 19:
_ret = null;
case 20:
_299 = _ret;
case 21:
_ret = L__ne__(LstmtRet[1], '{empty}')(function (_ret) {
return _616(_cb, 22, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 22:
_304 = _ret;
case 23:
_ret = _304;
case 24:
_305 = _ret;
case 25:
if (_305) {
_630(function (_ret) {
return _616(_cb, 26, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 26:
if ((_298 && _305)) {
_631(function (_ret) {
return _616(_cb, 27, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _616;
}))(function (_ret) {
return _610(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_308 = _ret;
case 4:
_ret = Lexpr[0] = Lret;
case 5:
_ret = Lexpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _610;
});
case 68:
_ret = LflattenStart = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _309, Lret;
function _637(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _637(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_309 = _ret;
case 2:
_ret = Lret = _309;
case 3:
_ret = [Lret, '{start}']
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _637;
});
case 69:
_ret = LflattenModule = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _310, _311, _313, _312, Lname, _315, _314, _316, LjsName, LmoduleExpr, _317;
function _640(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_310 = false;
case 1:
_ret = (function (_641, _642) {
if (typeof _641.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _641.join.apply(_641, arguments);
} else if (_641.join !== undefined) {
if (_642 === undefined) {
return function (_ret) {
return _641.join;
}
}
return function (_ret) {
_641.join = _642;
}
}})(['"', Lexpr[0], '"'], '')(function (_ret) {
return _640(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_312 = _ret;
case 3:
_ret = _311 = Lname = [_312, '{atomic}']
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _644(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_310 = false;
case 1:
_ret = Lflatten(Lexpr[0], Ldefine)(function (_ret) {
return _644(_cb, 2, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 2:
_314 = _ret;
case 3:
_ret = _311 = Lname = _314
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _639(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_310 = _ret;
case 2:
_ret = null;
case 3:
_311 = _ret;
case 4:
_ret = L__eq__(Lexpr[2], '{var}')(function (_ret) {
return _639(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 5:
_313 = _ret;
case 6:
if ((_310 && _313)) {
_640(function (_ret) {
return _639(_cb, 7, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 7:
_ret = L__eq__(Lexpr[2], '{index}')(function (_ret) {
return _639(_cb, 8, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 8:
_315 = _ret;
case 9:
if ((_310 && _315)) {
_644(function (_ret) {
return _639(_cb, 10, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 10:
_ret = Ldefine([Lname, ['__add__', '{atomic}', '{var}'], ['"-lix"', '{atomic}']])(function (_ret) {
return _639(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 11:
_316 = _ret;
case 12:
_ret = LjsName = _316;
case 13:
_ret = LmoduleExpr = [LjsName, ['require', '{atomic}', '{var}']];
case 14:
_ret = Ldefine(LmoduleExpr)(function (_ret) {
return _639(_cb, 15, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 15:
_317 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _639;
});
case 70:
_ret = LflattenDefer = (function (Lexpr, Ldefine) {
var Larguments = arguments;
var defer_stack = [];
;
function _646(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = ['undefined', '{atomic}']
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _646;
});
case 71:
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
'if': LflattenIf,
'and': LflattenAnd,
'or': LflattenOr,
'while': LflattenWhile,
'break': LflattenBreak,
'defer': LflattenDefer
};
case 72:
_ret = LflattenOp = (function (Lhint) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _318, _319;
function _649(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_318 = false;
case 1:
_ret = _319 = LflattenOpTable[Lhint]
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _650(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = _319 = LflattenExpr
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
function _648(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = true;
case 1:
_318 = _ret;
case 2:
_ret = null;
case 3:
_319 = _ret;
case 4:
if ((_318 && LflattenOpTable[Lhint])) {
_649(function (_ret) {
return _648(_cb, 5, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
};
case 5:
if (_318) {
_650(function (_ret) {
return _648(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
)
}
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _648;
});
case 73:
_ret = Lflatten = (function (Lexpr, Ldefine, Lctx) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _320, _321;
function _652(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = LflattenOp(Lexpr[1])(function (_ret) {
return _652(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_320 = _ret;
case 2:
_ret = _320(Lexpr, Ldefine, Lctx)(function (_ret) {
return _652(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_321 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _652;
});
case 74:
_ret = Ldefine0 = (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _654(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Li
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _654;
});
case 75:
_ret = Ldef0 = {
defineVar: (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _656(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {

default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _656;
}),
appendExpr: (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _658(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {

default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _658;
})
};
case 76:
_ret = LseqFuncParamsName = {
cb: '_cb',
step: '_step',
cont: '_cont',
ret: '_ret',
defer: 'cb_defer',
thisDefer: 'this_defer',
chainDefer: 'chain_defer'
};
case 77:
_ret = Lcompile = (function (Lexpr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _322, _323, Llibs, _324, _325, _326, Lcode, _327;
function _660(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lenv0, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _662(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Li
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _662;
}))(function (_ret) {
return _660(_cb, 1, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 1:
_322 = _ret;
case 2:
_ret = (function (_663, _664) {
if (typeof _663.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _663.join.apply(_663, arguments);
} else if (_663.join !== undefined) {
if (_664 === undefined) {
return function (_ret) {
return _663.join;
}
}
return function (_ret) {
_663.join = _664;
}
}})(_322, "\n")(function (_ret) {
return _660(_cb, 3, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 3:
_323 = _ret;
case 4:
_ret = Llibs = _323;
case 5:
_ret = Lflatten(Lexpr, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _667(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {

default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _667;
}), (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _669(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Li
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _669;
}))(function (_ret) {
return _660(_cb, 6, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 6:
_324 = _ret;
case 7:
_ret = LflattenExpr = _324;
case 8:
_ret = Lcall(Lenv_new)(function (_ret) {
return _660(_cb, 9, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 9:
_325 = _ret;
case 10:
_ret = LgenerateStart(LflattenExpr, _325, Lctx0, Ldef0)(function (_ret) {
return _660(_cb, 11, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 11:
_326 = _ret;
case 12:
_ret = Lcode = _326;
case 13:
_ret = Ljoin([Llibs, "\n", Lcode])(function (_ret) {
return _660(_cb, 14, true, _ret, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
}, 0, false, undefined, function () {
console.log("nice");
thisDefer(defer_stack)(function () {
cb_defer && cb_defer();
}, 0);
}
);
case 14:
_327 = _ret
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
return _660;
});
case 78:
_ret = exports.compile = Lcompile;
case 79:
_ret = Lcompile
default:
}
thisDefer(defer_stack)(function () {
_cb(_ret);
}, 0);
if (_cont) {
_cb(_ret);
} else {
return _ret;
}
};
module.exports = _328
