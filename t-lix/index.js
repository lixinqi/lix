
require('/lib/lix/__builtin__.js');
var LReadFile, _ret, _5, _6, _7, _8, _9;
function _10(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LReadFile = (function (Lfilename, Loptions) {
var Larguments = arguments;
var _ret, _4;
function _12(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _0, _1, _3;
function _14(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _14(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _14(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.ReadFileAsync(Lfilename, Loptions, (function (Lerr, Ldata) {
var Larguments = arguments;
var _ret, _2;
function _16(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Ldata)(function (_ret) {
return _16(_cb, 1, true, _ret);
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
return _16;
}))(function (_ret) {
return _14(_cb, 5, true, _ret);
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
return _14;
}))(function (_ret) {
return _12(_cb, 1, true, _ret);
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
return _12;
});
case 1:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _10(_cb, 2, true, _ret);
}, 0);
case 2:
_5 = _ret;
case 3:
_ret = require(_5)(function (_ret) {
return _10(_cb, 4, true, _ret);
}, 0);
case 4:
_6 = _ret;
case 5:
_ret = _6.ReadFile(["/etc","/passwd"].join("/"), 'utf-8')(function (_ret) {
return _10(_cb, 6, true, _ret);
}, 0);
case 6:
_7 = _ret;
case 7:
_ret = (function (_17, _18) {
if (typeof _17[1] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _17[1].apply(_17, arguments);
} else if (_17[1] !== undefined) {
if (_18 === undefined) {
return function (_ret) {
return _17[1];
}
}
return function (_ret) {
_17[1] = _18;
}
}})(_7)(function (_ret) {
return _10(_cb, 8, true, _ret);
}, 0);
case 8:
_8 = _ret;
case 9:
_ret = Lprint(_8)(function (_ret) {
return _10(_cb, 10, true, _ret);
}, 0);
case 10:
_9 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
module.exports = _10
