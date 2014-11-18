
require('/lib/lix/__builtin__.js');
var LWriteFile, LAppendFile, _ret, _10, _11, _12, _13, _14, _15, _16;
function _17(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LWriteFile = (function (Lfilename, Ldata, Loptions) {
var Larguments = arguments;
var _ret, _4;
function _19(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _0, _1, _3;
function _21(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _21(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _21(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.WriteFileAsync(Lfilename, Ldata, Loptions, (function (Lerr) {
var Larguments = arguments;
var _ret, _2;
function _23(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Lerr)(function (_ret) {
return _23(_cb, 1, true, _ret);
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
return _23;
}))(function (_ret) {
return _21(_cb, 5, true, _ret);
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
return _21;
}))(function (_ret) {
return _19(_cb, 1, true, _ret);
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
return _19;
});
case 1:
_ret = LAppendFile = (function (Lfilename, Ldata, Loptions) {
var Larguments = arguments;
var _ret, _9;
function _25(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _5, _6, _8;
function _27(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _27(_cb, 1, true, _ret);
}, 0);
case 1:
_5 = _ret;
case 2:
_ret = require(_5)(function (_ret) {
return _27(_cb, 3, true, _ret);
}, 0);
case 3:
_6 = _ret;
case 4:
_ret = _6.AppendFileAsync(Lfilename, Ldata, Loptions, (function (Lerr) {
var Larguments = arguments;
var _ret, _7;
function _29(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Lerr)(function (_ret) {
return _29(_cb, 1, true, _ret);
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
return _29;
}))(function (_ret) {
return _27(_cb, 5, true, _ret);
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
return _27;
}))(function (_ret) {
return _25(_cb, 1, true, _ret);
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
return _25;
});
case 2:
_ret = LWriteFile(["/tmp","/a"].join("/"), 'gooooooooooooood')(function (_ret) {
return _17(_cb, 3, true, _ret);
}, 0);
case 3:
_10 = _ret;
case 4:
_ret = Lprint(_10)(function (_ret) {
return _17(_cb, 5, true, _ret);
}, 0);
case 5:
_11 = _ret;
case 6:
_ret = LAppendFile(["/tmp","/a"].join("/"), '\nnice')(function (_ret) {
return _17(_cb, 7, true, _ret);
}, 0);
case 7:
_12 = _ret;
case 8:
_ret = Lprint(_12)(function (_ret) {
return _17(_cb, 9, true, _ret);
}, 0);
case 9:
_13 = _ret;
case 10:
_ret = L__add__("a", "-lix")(function (_ret) {
return _17(_cb, 11, true, _ret);
}, 0);
case 11:
_14 = _ret;
case 12:
_ret = require(_14)(function (_ret) {
return _17(_cb, 13, true, _ret);
}, 0);
case 13:
_15 = _ret;
case 14:
_ret = Lprint(_15)(function (_ret) {
return _17(_cb, 15, true, _ret);
}, 0);
case 15:
_16 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_17(function(x){return x;}, 0)
} catch (e) {
}