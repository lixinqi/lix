
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
thisDefer(defer_stack)(function(){return;}, 0);
}
var Ljoin, Lcompile;
function _7(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Ljoin = (function (Larr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _0;
function _9(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = (function (_10, _11) {
if (typeof _10.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _10.join.apply(_10, arguments);
} else if (_10.join !== undefined) {
if (_11 === undefined) {
return function (_ret) {
return _10.join;
}
}
return function (_ret) {
_10.join = _11;
}
}})(Larr, "")(function (_ret) {
return _9(_cb, 1, true, _ret, function () {
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
return _9;
});
case 1:
_ret = Lcompile = (function (Lexpr) {
var Larguments = arguments;
var defer_stack = [];
var _ret, _1, _2, Llibs, _3, _4, _5, Lcode, _6;
function _14(_cb, _step, _cont, _ret, cb_defer) {
switch (_step) {
case 0:
_ret = Lmap(Lenv0, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _16(_cb, _step, _cont, _ret, cb_defer) {
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
return _16;
}))(function (_ret) {
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
_1 = _ret;
case 2:
_ret = (function (_17, _18) {
if (typeof _17.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _17.join.apply(_17, arguments);
} else if (_17.join !== undefined) {
if (_18 === undefined) {
return function (_ret) {
return _17.join;
}
}
return function (_ret) {
_17.join = _18;
}
}})(_1, "\n")(function (_ret) {
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
_2 = _ret;
case 4:
_ret = Llibs = _2;
case 5:
_ret = Lflatten(Lexpr, (function (Li) {
var Larguments = arguments;
var defer_stack = [];
;
function _21(_cb, _step, _cont, _ret, cb_defer) {
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
};
return _21;
}), (function (Li) {
var Larguments = arguments;
var defer_stack = [];
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
}))(function (_ret) {
return _14(_cb, 6, true, _ret, function () {
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
case 6:
_3 = _ret;
case 7:
_ret = LflattenExpr = _3;
case 8:
_ret = Lcall(Lenv_new)(function (_ret) {
return _14(_cb, 9, true, _ret, function () {
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
_4 = _ret;
case 10:
_ret = LgenerateStart(LflattenExpr, _4, Lctx0, Ldef0)(function (_ret) {
return _14(_cb, 11, true, _ret, function () {
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
case 11:
_5 = _ret;
case 12:
_ret = Lcode = _5;
case 13:
_ret = Ljoin([Llibs, "\n", Lcode])(function (_ret) {
return _14(_cb, 14, true, _ret, function () {
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
case 14:
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
return _14;
});
case 2:
_ret = exports.compile = Lcompile;
case 3:
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
};
module.exports = _7
