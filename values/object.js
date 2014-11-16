
require('/lib/lix/__builtin__.js');
var Lobj, _ret, _0, _1, _2, _3, _4, _5, _6, _7, _8, LnewObj, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23;
function _24(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lobj = {
a: 'nice',
b: 'good'
};
case 1:
_ret = (function (_25, _26) {
if (typeof _25.Keys === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _25.Keys.apply(_25, arguments);
} else if (_25.Keys !== undefined) {
if (_26 === undefined) {
return function (_ret) {
return _25.Keys;
}
}
return function (_ret) {
_25.Keys = _26;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 2, true, _ret);
}, 0);
case 2:
_0 = _ret;
case 3:
_ret = Lprint(_0)(function (_ret) {
return _24(_cb, 4, true, _ret);
}, 0);
case 4:
_1 = _ret;
case 5:
_ret = (function (_28, _29) {
if (typeof _28.GetPrototypeOf === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _28.GetPrototypeOf.apply(_28, arguments);
} else if (_28.GetPrototypeOf !== undefined) {
if (_29 === undefined) {
return function (_ret) {
return _28.GetPrototypeOf;
}
}
return function (_ret) {
_28.GetPrototypeOf = _29;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 6, true, _ret);
}, 0);
case 6:
_2 = _ret;
case 7:
_ret = Lprint(_2)(function (_ret) {
return _24(_cb, 8, true, _ret);
}, 0);
case 8:
_3 = _ret;
case 9:
_ret = (function (_31, _32) {
if (typeof _31.GetOwnPropertyDescriptor === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _31.GetOwnPropertyDescriptor.apply(_31, arguments);
} else if (_31.GetOwnPropertyDescriptor !== undefined) {
if (_32 === undefined) {
return function (_ret) {
return _31.GetOwnPropertyDescriptor;
}
}
return function (_ret) {
_31.GetOwnPropertyDescriptor = _32;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 10, true, _ret);
}, 0);
case 10:
_4 = _ret;
case 11:
_ret = Lprint(_4)(function (_ret) {
return _24(_cb, 12, true, _ret);
}, 0);
case 12:
_5 = _ret;
case 13:
_ret = (function (_34, _35) {
if (typeof _34.GetOwnPropertyNames === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _34.GetOwnPropertyNames.apply(_34, arguments);
} else if (_34.GetOwnPropertyNames !== undefined) {
if (_35 === undefined) {
return function (_ret) {
return _34.GetOwnPropertyNames;
}
}
return function (_ret) {
_34.GetOwnPropertyNames = _35;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 14, true, _ret);
}, 0);
case 14:
_6 = _ret;
case 15:
_ret = Lprint(_6)(function (_ret) {
return _24(_cb, 16, true, _ret);
}, 0);
case 16:
_7 = _ret;
case 17:
_ret = (function (_37, _38) {
if (typeof _37.Create === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _37.Create.apply(_37, arguments);
} else if (_37.Create !== undefined) {
if (_38 === undefined) {
return function (_ret) {
return _37.Create;
}
}
return function (_ret) {
_37.Create = _38;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 18, true, _ret);
}, 0);
case 18:
_8 = _ret;
case 19:
_ret = LnewObj = _8;
case 20:
_ret = (function (_40, _41) {
if (typeof _40.DefineProperty === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _40.DefineProperty.apply(_40, arguments);
} else if (_40.DefineProperty !== undefined) {
if (_41 === undefined) {
return function (_ret) {
return _40.DefineProperty;
}
}
return function (_ret) {
_40.DefineProperty = _41;
}
}})(LnewObj, 'c', {
value: 'ok'
})(function (_ret) {
return _24(_cb, 21, true, _ret);
}, 0);
case 21:
_9 = _ret;
case 22:
_ret = Lprint(LnewObj.c)(function (_ret) {
return _24(_cb, 23, true, _ret);
}, 0);
case 23:
_10 = _ret;
case 24:
_ret = (function (_43, _44) {
if (typeof _43.DefineProperties === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _43.DefineProperties.apply(_43, arguments);
} else if (_43.DefineProperties !== undefined) {
if (_44 === undefined) {
return function (_ret) {
return _43.DefineProperties;
}
}
return function (_ret) {
_43.DefineProperties = _44;
}
}})(LnewObj, {
d: {
value: 'property-d'
},
e: {
value: 'property-e'
}
})(function (_ret) {
return _24(_cb, 25, true, _ret);
}, 0);
case 25:
_11 = _ret;
case 26:
_ret = Lprint(LnewObj.d)(function (_ret) {
return _24(_cb, 27, true, _ret);
}, 0);
case 27:
_12 = _ret;
case 28:
_ret = Lprint(LnewObj.e)(function (_ret) {
return _24(_cb, 29, true, _ret);
}, 0);
case 29:
_13 = _ret;
case 30:
_ret = Lobj = {
a: 'value-a',
b: 'value-b',
c: 'value-c',
d: 'value-d'
};
case 31:
_ret = (function (_46, _47) {
if (typeof _46.Keys === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _46.Keys.apply(_46, arguments);
} else if (_46.Keys !== undefined) {
if (_47 === undefined) {
return function (_ret) {
return _46.Keys;
}
}
return function (_ret) {
_46.Keys = _47;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 32, true, _ret);
}, 0);
case 32:
_14 = _ret;
case 33:
_ret = Lprint(_14)(function (_ret) {
return _24(_cb, 34, true, _ret);
}, 0);
case 34:
_15 = _ret;
case 35:
_ret = (function (_49, _50) {
if (typeof _49.ValueOf === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _49.ValueOf.apply(_49, arguments);
} else if (_49.ValueOf !== undefined) {
if (_50 === undefined) {
return function (_ret) {
return _49.ValueOf;
}
}
return function (_ret) {
_49.ValueOf = _50;
}
}})(Lobj)(function (_ret) {
return _24(_cb, 36, true, _ret);
}, 0);
case 36:
_16 = _ret;
case 37:
_ret = Lprint(_16)(function (_ret) {
return _24(_cb, 38, true, _ret);
}, 0);
case 38:
_17 = _ret;
case 39:
_ret = (function (_52, _53) {
if (typeof _52.HasOwnProperty === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _52.HasOwnProperty.apply(_52, arguments);
} else if (_52.HasOwnProperty !== undefined) {
if (_53 === undefined) {
return function (_ret) {
return _52.HasOwnProperty;
}
}
return function (_ret) {
_52.HasOwnProperty = _53;
}
}})(Lobj, 'b')(function (_ret) {
return _24(_cb, 40, true, _ret);
}, 0);
case 40:
_18 = _ret;
case 41:
_ret = Lprint(_18)(function (_ret) {
return _24(_cb, 42, true, _ret);
}, 0);
case 42:
_19 = _ret;
case 43:
_ret = (function (_55, _56) {
if (typeof _55.HasOwnProperty === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _55.HasOwnProperty.apply(_55, arguments);
} else if (_55.HasOwnProperty !== undefined) {
if (_56 === undefined) {
return function (_ret) {
return _55.HasOwnProperty;
}
}
return function (_ret) {
_55.HasOwnProperty = _56;
}
}})(LnewObj, 'd')(function (_ret) {
return _24(_cb, 44, true, _ret);
}, 0);
case 44:
_20 = _ret;
case 45:
_ret = Lprint(_20)(function (_ret) {
return _24(_cb, 46, true, _ret);
}, 0);
case 46:
_21 = _ret;
case 47:
_ret = (function (_58, _59) {
if (typeof _58.HasOwnProperty === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _58.HasOwnProperty.apply(_58, arguments);
} else if (_58.HasOwnProperty !== undefined) {
if (_59 === undefined) {
return function (_ret) {
return _58.HasOwnProperty;
}
}
return function (_ret) {
_58.HasOwnProperty = _59;
}
}})(LnewObj, 'z')(function (_ret) {
return _24(_cb, 48, true, _ret);
}, 0);
case 48:
_22 = _ret;
case 49:
_ret = Lprint(_22)(function (_ret) {
return _24(_cb, 50, true, _ret);
}, 0);
case 50:
_23 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_24(function(x){return x;}, 0)
} catch (e) {
}