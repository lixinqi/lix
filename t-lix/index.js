
require('/lib/lix/__builtin__.js');
var LReadFile, _ret, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
function _15(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LReadFile = (function (Lfilename, Loptions) {
var Larguments = arguments;
var _ret, _4;
function _17(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _0, _1, _3;
function _19(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _19(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _19(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.ReadFileAsync(Lfilename, Loptions, (function (Lerr, Ldata) {
var Larguments = arguments;
var _ret, _2;
function _21(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Ldata)(function (_ret) {
return _21(_cb, 1, true, _ret);
}, 0);
case 1:
_2 = _ret
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
return _19(_cb, 5, true, _ret);
}, 0);
case 5:
_3 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _19;
}))(function (_ret) {
return _17(_cb, 1, true, _ret);
}, 0);
case 1:
_4 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _17;
});
case 1:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _15(_cb, 2, true, _ret);
}, 0);
case 2:
_5 = _ret;
case 3:
_ret = require(_5)(function (_ret) {
return _15(_cb, 4, true, _ret);
}, 0);
case 4:
_6 = _ret;
case 5:
_ret = _6.ReadFile(["/etc","/passwd"].join("/"), 'utf-8')(function (_ret) {
return _15(_cb, 6, true, _ret);
}, 0);
case 6:
_7 = _ret;
case 7:
_ret = (function (_22, _23) {
if (typeof _22[1] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _22[1].apply(_22, arguments);
} else if (_22[1] !== undefined) {
if (_23 === undefined) {
return function (_ret) {
return _22[1];
}
}
return function (_ret) {
_22[1] = _23;
}
}})(_7)(function (_ret) {
return _15(_cb, 8, true, _ret);
}, 0);
case 8:
_8 = _ret;
case 9:
_ret = Lprint(_8)(function (_ret) {
return _15(_cb, 10, true, _ret);
}, 0);
case 10:
_9 = _ret;
case 11:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _15(_cb, 12, true, _ret);
}, 0);
case 12:
_10 = _ret;
case 13:
_ret = require(_10)(function (_ret) {
return _15(_cb, 14, true, _ret);
}, 0);
case 14:
_11 = _ret;
case 15:
_ret = _11.ReadFile(["/etc","/passwd"].join("/"), 'utf-8')(function (_ret) {
return _15(_cb, 16, true, _ret);
}, 0);
case 16:
_12 = _ret;
case 17:
_ret = (function (_25, _26) {
if (typeof _25[0] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _25[0].apply(_25, arguments);
} else if (_25[0] !== undefined) {
if (_26 === undefined) {
return function (_ret) {
return _25[0];
}
}
return function (_ret) {
_25[0] = _26;
}
}})(_12)(function (_ret) {
return _15(_cb, 18, true, _ret);
}, 0);
case 18:
_13 = _ret;
case 19:
_ret = Lprint(_13)(function (_ret) {
return _15(_cb, 20, true, _ret);
}, 0);
case 20:
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