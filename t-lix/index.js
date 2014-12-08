
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, LReadFile;
function _17(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("a", "-lix")(function (_ret) {
return _17(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = _require(require)(_0)(function (_ret) {
return _17(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = Lprint(_1)(function (_ret) {
return _17(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = L__add__("a", "-lix")(function (_ret) {
return _17(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = _require(require)(_3)(function (_ret) {
return _17(_cb, 9, true, _ret);
}, 0);
case 9:
_4 = _ret;
case 10:
_ret = Lprint(_4)(function (_ret) {
return _17(_cb, 11, true, _ret);
}, 0);
case 11:
_5 = _ret;
case 12:
_ret = L__add__("a", "-lix")(function (_ret) {
return _17(_cb, 13, true, _ret);
}, 0);
case 13:
_6 = _ret;
case 14:
_ret = _require(require)(_6)(function (_ret) {
return _17(_cb, 15, true, _ret);
}, 0);
case 15:
_7 = _ret;
case 16:
_ret = Lprint(_7)(function (_ret) {
return _17(_cb, 17, true, _ret);
}, 0);
case 17:
_8 = _ret;
case 18:
_ret = L__add__("a", "-lix")(function (_ret) {
return _17(_cb, 19, true, _ret);
}, 0);
case 19:
_9 = _ret;
case 20:
_ret = _require(require)(_9)(function (_ret) {
return _17(_cb, 21, true, _ret);
}, 0);
case 21:
_10 = _ret;
case 22:
_ret = Lprint(_10)(function (_ret) {
return _17(_cb, 23, true, _ret);
}, 0);
case 23:
_11 = _ret;
case 24:
_ret = LReadFile = (function (Lfilename, Loptions) {
var Larguments = arguments;
var _ret, _16;
function _19(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _12, _13, _15;
function _21(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _21(_cb, 1, true, _ret);
}, 0);
case 1:
_12 = _ret;
case 2:
_ret = _require(require)(_12)(function (_ret) {
return _21(_cb, 3, true, _ret);
}, 0);
case 3:
_13 = _ret;
case 4:
_ret = _13.ReadFileAsync(Lfilename, Loptions, (function (Lerr, Ldata) {
var Larguments = arguments;
var _ret, _14;
function _23(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Ldata)(function (_ret) {
return _23(_cb, 1, true, _ret);
}, 0);
case 1:
_14 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _23;
}))(function (_ret) {
return _21(_cb, 5, true, _ret);
}, 0);
case 5:
_15 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _21;
}))(function (_ret) {
return _19(_cb, 1, true, _ret);
}, 0);
case 1:
_16 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _19;
})
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
module.exports = _17
