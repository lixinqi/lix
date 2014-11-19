
require('/lib/lix/__builtin__.js');
var LReadFile, _ret, _5, _6, _11, _12, _13, _18;
function _19(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LReadFile = (function (Lfilename, Loptions) {
var Larguments = arguments;
var _ret, _4;
function _21(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _0, _1, _3;
function _23(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__("fs", "-lix")(function (_ret) {
return _23(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = require(_0)(function (_ret) {
return _23(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = _1.ReadFileAsync(Lfilename, Loptions, (function (Lerr, Ldata) {
var Larguments = arguments;
var _ret, _2;
function _25(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk, Ldata)(function (_ret) {
return _25(_cb, 1, true, _ret);
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
return _25;
}))(function (_ret) {
return _23(_cb, 5, true, _ret);
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
return _23;
}))(function (_ret) {
return _21(_cb, 1, true, _ret);
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
return _21;
});
case 1:
_ret = L__add__("test", "-lix")(function (_ret) {
return _19(_cb, 2, true, _ret);
}, 0);
case 2:
_5 = _ret;
case 3:
_ret = require(_5)(function (_ret) {
return _19(_cb, 4, true, _ret);
}, 0);
case 4:
_6 = _ret;
case 5:
_ret = _6('==', (function (Lassert) {
var Larguments = arguments;
var _ret, _7, _8, _9, _10;
function _27(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__eq__(0, 0)(function (_ret) {
return _27(_cb, 1, true, _ret);
}, 0);
case 1:
_7 = _ret;
case 2:
_ret = Lassert(_7)(function (_ret) {
return _27(_cb, 3, true, _ret);
}, 0);
case 3:
_8 = _ret;
case 4:
_ret = L__eq__(1, 0)(function (_ret) {
return _27(_cb, 5, true, _ret);
}, 0);
case 5:
_9 = _ret;
case 6:
_ret = Lassert(_9)(function (_ret) {
return _27(_cb, 7, true, _ret);
}, 0);
case 7:
_10 = _ret
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
return _19(_cb, 6, true, _ret);
}, 0);
case 6:
_11 = _ret;
case 7:
_ret = L__add__("test", "-lix")(function (_ret) {
return _19(_cb, 8, true, _ret);
}, 0);
case 8:
_12 = _ret;
case 9:
_ret = require(_12)(function (_ret) {
return _19(_cb, 10, true, _ret);
}, 0);
case 10:
_13 = _ret;
case 11:
_ret = _13('!=', (function (Lassert) {
var Larguments = arguments;
var _ret, _14, _15, _16, _17;
function _29(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__ne__(0, 0)(function (_ret) {
return _29(_cb, 1, true, _ret);
}, 0);
case 1:
_14 = _ret;
case 2:
_ret = Lassert(_14)(function (_ret) {
return _29(_cb, 3, true, _ret);
}, 0);
case 3:
_15 = _ret;
case 4:
_ret = L__ne__(1, 0)(function (_ret) {
return _29(_cb, 5, true, _ret);
}, 0);
case 5:
_16 = _ret;
case 6:
_ret = Lassert(_16)(function (_ret) {
return _29(_cb, 7, true, _ret);
}, 0);
case 7:
_17 = _ret
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
return _19(_cb, 12, true, _ret);
}, 0);
case 12:
_18 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_19(function(x){return x;}, 0)
} catch (e) {
}