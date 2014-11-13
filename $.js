
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, Linc1, _14, _15, Linc2, _16, _17, Linc3, _18, _19;
function _20(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = require(["./node_modules","/a.js"].join("/"))(function (_ret) {
return _20(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint(_0)(function (_ret) {
return _20(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = require(["./node_modules","/a.js"].join("/"))(function (_ret) {
return _20(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lprint(_2)(function (_ret) {
return _20(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = require("a")(function (_ret) {
return _20(_cb, 9, true, _ret);
}, 0);
case 9:
_4 = _ret;
case 10:
_ret = require("a")(function (_ret) {
return _20(_cb, 11, true, _ret);
}, 0);
case 11:
_5 = _ret;
case 12:
_ret = _5.name;
case 13:
_ret = require("a")(function (_ret) {
return _20(_cb, 14, true, _ret);
}, 0);
case 14:
_6 = _ret;
case 15:
_ret = Lprint(_6.name)(function (_ret) {
return _20(_cb, 16, true, _ret);
}, 0);
case 16:
_7 = _ret;
case 17:
_ret = require("a")(function (_ret) {
return _20(_cb, 18, true, _ret);
}, 0);
case 18:
_8 = _ret;
case 19:
_ret = Lprint(_8)(function (_ret) {
return _20(_cb, 20, true, _ret);
}, 0);
case 20:
_9 = _ret;
case 21:
_ret = require("a")(function (_ret) {
return _20(_cb, 22, true, _ret);
}, 0);
case 22:
_10 = _ret;
case 23:
_ret = (function (_21, _22) {
if (typeof _21.hi === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _21.hi.apply(_21, arguments);
} else if (_21.hi !== undefined) {
if (_22 === undefined) {
return function (_ret) {
return _21.hi;
}
}
return function (_ret) {
_21.hi = _22;
}
}})(_10)(function (_ret) {
return _20(_cb, 24, true, _ret);
}, 0);
case 24:
_11 = _ret;
case 25:
_ret = require("_")(function (_ret) {
return _20(_cb, 26, true, _ret);
}, 0);
case 26:
_12 = _ret;
case 27:
_ret = _12.Partial(L__add__, 1)(function (_ret) {
return _20(_cb, 28, true, _ret);
}, 0);
case 28:
_13 = _ret;
case 29:
_ret = Linc1 = _13;
case 30:
_ret = require("_")(function (_ret) {
return _20(_cb, 31, true, _ret);
}, 0);
case 31:
_14 = _ret;
case 32:
_ret = _14.Partial(L__add__, 2)(function (_ret) {
return _20(_cb, 33, true, _ret);
}, 0);
case 33:
_15 = _ret;
case 34:
_ret = Linc2 = _15;
case 35:
_ret = require("_")(function (_ret) {
return _20(_cb, 36, true, _ret);
}, 0);
case 36:
_16 = _ret;
case 37:
_ret = _16.Compose(Linc1, Linc2)(function (_ret) {
return _20(_cb, 38, true, _ret);
}, 0);
case 38:
_17 = _ret;
case 39:
_ret = Linc3 = _17;
case 40:
_ret = Linc3(1)(function (_ret) {
return _20(_cb, 41, true, _ret);
}, 0);
case 41:
_18 = _ret;
case 42:
_ret = Lprint(_18)(function (_ret) {
return _20(_cb, 43, true, _ret);
}, 0);
case 43:
_19 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_20(function(x){return x;}, 0)
} catch (e) {
}