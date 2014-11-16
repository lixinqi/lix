
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
function _15(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lerror('error msg')(function (_ret) {
return _15(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = (function (_16, _17) {
if (typeof _16.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _16.name.apply(_16, arguments);
} else if (_16.name !== undefined) {
if (_17 === undefined) {
return function (_ret) {
return _16.name;
}
}
return function (_ret) {
_16.name = _17;
}
}})(_0)(function (_ret) {
return _15(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = Lprint(_1)(function (_ret) {
return _15(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lerror('error msg')(function (_ret) {
return _15(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = (function (_19, _20) {
if (typeof _19.message === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _19.message.apply(_19, arguments);
} else if (_19.message !== undefined) {
if (_20 === undefined) {
return function (_ret) {
return _19.message;
}
}
return function (_ret) {
_19.message = _20;
}
}})(_3)(function (_ret) {
return _15(_cb, 9, true, _ret);
}, 0);
case 9:
_4 = _ret;
case 10:
_ret = Lprint(_4)(function (_ret) {
return _15(_cb, 11, true, _ret);
}, 0);
case 11:
_5 = _ret;
case 12:
_ret = Lerror('error msg')(function (_ret) {
return _15(_cb, 13, true, _ret);
}, 0);
case 13:
_6 = _ret;
case 14:
_ret = (function (_22, _23) {
if (typeof _22.message === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _22.message.apply(_22, arguments);
} else if (_22.message !== undefined) {
if (_23 === undefined) {
return function (_ret) {
return _22.message;
}
}
return function (_ret) {
_22.message = _23;
}
}})(_6)(function (_ret) {
return _15(_cb, 15, true, _ret);
}, 0);
case 15:
_7 = _ret;
case 16:
_ret = Lprint(_7)(function (_ret) {
return _15(_cb, 17, true, _ret);
}, 0);
case 17:
_8 = _ret;
case 18:
_ret = Lerror('error msg')(function (_ret) {
return _15(_cb, 19, true, _ret);
}, 0);
case 19:
_9 = _ret;
case 20:
_ret = (function (_25, _26) {
if (typeof _25.ToString === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _25.ToString.apply(_25, arguments);
} else if (_25.ToString !== undefined) {
if (_26 === undefined) {
return function (_ret) {
return _25.ToString;
}
}
return function (_ret) {
_25.ToString = _26;
}
}})(_9)(function (_ret) {
return _15(_cb, 21, true, _ret);
}, 0);
case 21:
_10 = _ret;
case 22:
_ret = Lprint(_10)(function (_ret) {
return _15(_cb, 23, true, _ret);
}, 0);
case 23:
_11 = _ret;
case 24:
_ret = Lerror('error msg')(function (_ret) {
return _15(_cb, 25, true, _ret);
}, 0);
case 25:
_12 = _ret;
case 26:
_ret = Linstanceof(_12, LError)(function (_ret) {
return _15(_cb, 27, true, _ret);
}, 0);
case 27:
_13 = _ret;
case 28:
_ret = Lprint(_13)(function (_ret) {
return _15(_cb, 29, true, _ret);
}, 0);
case 29:
_14 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_15(function(x){return x;}, 0)
} catch (e) {
}