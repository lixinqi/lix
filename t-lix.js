
require('/lib/lix/__builtin__.js');
var LWriteFile, LAppendFile, _ret, _10, _11, _12, _13;
function _14(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LWriteFile = (function (Lfilename, Ldata, Loptions) {
var Larguments = arguments;
var _ret, _4;
function _16(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _0, _1, _3;
function _18(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _18(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _18(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.WriteFileAsync(Lfilename, Ldata, Loptions, (function (Lerr) {
var Larguments = arguments;
var _ret, _2;
function _20(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Lerr)(function (_ret) {
return _20(_cb, 1, true, _ret);
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
return _20;
}))(function (_ret) {
return _18(_cb, 5, true, _ret);
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
return _18;
}))(function (_ret) {
return _16(_cb, 1, true, _ret);
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
return _16;
});
case 1:
_ret = LAppendFile = (function (Lfilename, Ldata, Loptions) {
var Larguments = arguments;
var _ret, _9;
function _22(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _5, _6, _8;
function _24(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _24(_cb, 1, true, _ret);
}, 0);
case 1:
_5 = _ret;
case 2:
_ret = require(_5)(function (_ret) {
return _24(_cb, 3, true, _ret);
}, 0);
case 3:
_6 = _ret;
case 4:
_ret = _6.AppendFileAsync(Lfilename, Ldata, Loptions, (function (Lerr) {
var Larguments = arguments;
var _ret, _7;
function _26(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Lerr)(function (_ret) {
return _26(_cb, 1, true, _ret);
}, 0);
case 1:
_7 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _26;
}))(function (_ret) {
return _24(_cb, 5, true, _ret);
}, 0);
case 5:
_8 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _24;
}))(function (_ret) {
return _22(_cb, 1, true, _ret);
}, 0);
case 1:
_9 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _22;
});
case 2:
_ret = LWriteFile(["/tmp","/a"].join("/"), 'gooooooooooooood')(function (_ret) {
return _14(_cb, 3, true, _ret);
}, 0);
case 3:
_10 = _ret;
case 4:
_ret = Lprint(_10)(function (_ret) {
return _14(_cb, 5, true, _ret);
}, 0);
case 5:
_11 = _ret;
case 6:
_ret = LAppendFile(["/tmp","/a"].join("/"), '\nnice')(function (_ret) {
return _14(_cb, 7, true, _ret);
}, 0);
case 7:
_12 = _ret;
case 8:
_ret = Lprint(_12)(function (_ret) {
return _14(_cb, 9, true, _ret);
}, 0);
case 9:
_13 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_14(function(x){return x;}, 0)
} catch (e) {
}