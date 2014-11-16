
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, Lr, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22;
function _23(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lregexp("good", 'i')(function (_ret) {
return _23(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint(_0)(function (_ret) {
return _23(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = Lregexp("(\\w)*", 'i')(function (_ret) {
return _23(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lprint(_2)(function (_ret) {
return _23(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = Lregexp("(\\w)*", 'i')(function (_ret) {
return _23(_cb, 9, true, _ret);
}, 0);
case 9:
_4 = _ret;
case 10:
_ret = (function (_24, _25) {
if (typeof _24.Exec === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _24.Exec.apply(_24, arguments);
} else if (_24.Exec !== undefined) {
if (_25 === undefined) {
return function (_ret) {
return _24.Exec;
}
}
return function (_ret) {
_24.Exec = _25;
}
}})(_4, "good 1 2 3")(function (_ret) {
return _23(_cb, 11, true, _ret);
}, 0);
case 11:
_5 = _ret;
case 12:
_ret = Lprint(_5)(function (_ret) {
return _23(_cb, 13, true, _ret);
}, 0);
case 13:
_6 = _ret;
case 14:
_ret = Lregexp("(\\w)*")(function (_ret) {
return _23(_cb, 15, true, _ret);
}, 0);
case 15:
_7 = _ret;
case 16:
_ret = (function (_27, _28) {
if (typeof _27.Test === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _27.Test.apply(_27, arguments);
} else if (_27.Test !== undefined) {
if (_28 === undefined) {
return function (_ret) {
return _27.Test;
}
}
return function (_ret) {
_27.Test = _28;
}
}})(_7, "good 1 2 3")(function (_ret) {
return _23(_cb, 17, true, _ret);
}, 0);
case 17:
_8 = _ret;
case 18:
_ret = Lprint(_8)(function (_ret) {
return _23(_cb, 19, true, _ret);
}, 0);
case 19:
_9 = _ret;
case 20:
_ret = Lregexp("(\\w)*")(function (_ret) {
return _23(_cb, 21, true, _ret);
}, 0);
case 21:
_10 = _ret;
case 22:
_ret = Lr = _10;
case 23:
_ret = (function (_30, _31) {
if (typeof _30.ToString === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _30.ToString.apply(_30, arguments);
} else if (_30.ToString !== undefined) {
if (_31 === undefined) {
return function (_ret) {
return _30.ToString;
}
}
return function (_ret) {
_30.ToString = _31;
}
}})(Lr)(function (_ret) {
return _23(_cb, 24, true, _ret);
}, 0);
case 24:
_11 = _ret;
case 25:
_ret = Lprint(_11)(function (_ret) {
return _23(_cb, 26, true, _ret);
}, 0);
case 26:
_12 = _ret;
case 27:
_ret = (function (_33, _34) {
if (typeof _33.source === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _33.source.apply(_33, arguments);
} else if (_33.source !== undefined) {
if (_34 === undefined) {
return function (_ret) {
return _33.source;
}
}
return function (_ret) {
_33.source = _34;
}
}})(Lr)(function (_ret) {
return _23(_cb, 28, true, _ret);
}, 0);
case 28:
_13 = _ret;
case 29:
_ret = Lprint(_13)(function (_ret) {
return _23(_cb, 30, true, _ret);
}, 0);
case 30:
_14 = _ret;
case 31:
_ret = (function (_36, _37) {
if (typeof _36.global === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _36.global.apply(_36, arguments);
} else if (_36.global !== undefined) {
if (_37 === undefined) {
return function (_ret) {
return _36.global;
}
}
return function (_ret) {
_36.global = _37;
}
}})(Lr)(function (_ret) {
return _23(_cb, 32, true, _ret);
}, 0);
case 32:
_15 = _ret;
case 33:
_ret = Lprint(_15)(function (_ret) {
return _23(_cb, 34, true, _ret);
}, 0);
case 34:
_16 = _ret;
case 35:
_ret = (function (_39, _40) {
if (typeof _39.ignoreCase === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _39.ignoreCase.apply(_39, arguments);
} else if (_39.ignoreCase !== undefined) {
if (_40 === undefined) {
return function (_ret) {
return _39.ignoreCase;
}
}
return function (_ret) {
_39.ignoreCase = _40;
}
}})(Lr)(function (_ret) {
return _23(_cb, 36, true, _ret);
}, 0);
case 36:
_17 = _ret;
case 37:
_ret = Lprint(_17)(function (_ret) {
return _23(_cb, 38, true, _ret);
}, 0);
case 38:
_18 = _ret;
case 39:
_ret = (function (_42, _43) {
if (typeof _42.multiline === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _42.multiline.apply(_42, arguments);
} else if (_42.multiline !== undefined) {
if (_43 === undefined) {
return function (_ret) {
return _42.multiline;
}
}
return function (_ret) {
_42.multiline = _43;
}
}})(Lr)(function (_ret) {
return _23(_cb, 40, true, _ret);
}, 0);
case 40:
_19 = _ret;
case 41:
_ret = Lprint(_19)(function (_ret) {
return _23(_cb, 42, true, _ret);
}, 0);
case 42:
_20 = _ret;
case 43:
_ret = (function (_45, _46) {
if (typeof _45.lastIndex === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _45.lastIndex.apply(_45, arguments);
} else if (_45.lastIndex !== undefined) {
if (_46 === undefined) {
return function (_ret) {
return _45.lastIndex;
}
}
return function (_ret) {
_45.lastIndex = _46;
}
}})(Lr)(function (_ret) {
return _23(_cb, 44, true, _ret);
}, 0);
case 44:
_21 = _ret;
case 45:
_ret = Lprint(_21)(function (_ret) {
return _23(_cb, 46, true, _ret);
}, 0);
case 46:
_22 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_23(function(x){return x;}, 0)
} catch (e) {
}