
require('/lib/lix/__builtin__.js');
var LReadFile, LWriteFile, LAppendFile, _ret, _15, _16, _17, _18, _19, _20, _21, _22, _23;
function _24(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LReadFile = (function (Lfilename, Loptions) {
var Larguments = arguments;
var _ret, _4;
function _26(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _0, _1, _3;
function _28(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _28(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _28(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.ReadFileAsync(Lfilename, Loptions, (function (Lerr, Ldata) {
var Larguments = arguments;
var _ret, _2;
function _30(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Ldata)(function (_ret) {
return _30(_cb, 1, true, _ret);
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
return _30;
}))(function (_ret) {
return _28(_cb, 5, true, _ret);
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
return _28;
}))(function (_ret) {
return _26(_cb, 1, true, _ret);
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
return _26;
});
case 1:
_ret = LWriteFile = (function (Lfilename, Ldata, Loptions) {
var Larguments = arguments;
var _ret, _9;
function _32(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _5, _6, _8;
function _34(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _34(_cb, 1, true, _ret);
}, 0);
case 1:
_5 = _ret;
case 2:
_ret = require(_5)(function (_ret) {
return _34(_cb, 3, true, _ret);
}, 0);
case 3:
_6 = _ret;
case 4:
_ret = _6.WriteFileAsync(Lfilename, Ldata, Loptions, (function (Lerr, Ldata) {
var Larguments = arguments;
var _ret, _7;
function _36(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Lfilename)(function (_ret) {
return _36(_cb, 1, true, _ret);
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
return _36;
}))(function (_ret) {
return _34(_cb, 5, true, _ret);
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
return _34;
}))(function (_ret) {
return _32(_cb, 1, true, _ret);
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
return _32;
});
case 2:
_ret = LAppendFile = (function (Lfilename, Ldata, Loptions) {
var Larguments = arguments;
var _ret, _14;
function _38(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _10, _11, _13;
function _40(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _40(_cb, 1, true, _ret);
}, 0);
case 1:
_10 = _ret;
case 2:
_ret = require(_10)(function (_ret) {
return _40(_cb, 3, true, _ret);
}, 0);
case 3:
_11 = _ret;
case 4:
_ret = _11.AppendFileAsync(Lfilename, Ldata, Loptions, (function (Lerr) {
var Larguments = arguments;
var _ret, _12;
function _42(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Lfilename)(function (_ret) {
return _42(_cb, 1, true, _ret);
}, 0);
case 1:
_12 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _42;
}))(function (_ret) {
return _40(_cb, 5, true, _ret);
}, 0);
case 5:
_13 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _40;
}))(function (_ret) {
return _38(_cb, 1, true, _ret);
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
return _38;
});
case 3:
_ret = LWriteFile(["/tmp","/a"].join("/"), 'gooooooooooooood')(function (_ret) {
return _24(_cb, 4, true, _ret);
}, 0);
case 4:
_15 = _ret;
case 5:
_ret = LReadFile(_15, 'utf-8')(function (_ret) {
return _24(_cb, 6, true, _ret);
}, 0);
case 6:
_16 = _ret;
case 7:
_ret = Lprint(_16)(function (_ret) {
return _24(_cb, 8, true, _ret);
}, 0);
case 8:
_17 = _ret;
case 9:
_ret = LAppendFile(["/tmp","/a"].join("/"), '\nnice')(function (_ret) {
return _24(_cb, 10, true, _ret);
}, 0);
case 10:
_18 = _ret;
case 11:
_ret = LReadFile(_18, 'utf-8')(function (_ret) {
return _24(_cb, 12, true, _ret);
}, 0);
case 12:
_19 = _ret;
case 13:
_ret = Lprint(_19)(function (_ret) {
return _24(_cb, 14, true, _ret);
}, 0);
case 14:
_20 = _ret;
case 15:
_ret = L__add__("a", "-lix")(function (_ret) {
return _24(_cb, 16, true, _ret);
}, 0);
case 16:
_21 = _ret;
case 17:
_ret = require(_21)(function (_ret) {
return _24(_cb, 18, true, _ret);
}, 0);
case 18:
_22 = _ret;
case 19:
_ret = Lprint(_22)(function (_ret) {
return _24(_cb, 20, true, _ret);
}, 0);
case 20:
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