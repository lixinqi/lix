
require('/lib/lix/__builtin__.js');
var Lsleep, Li, _ret, _4, _5, _6, _7, _8;
function _16(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lsleep(500)(function (_ret) {
return _16(_cb, 1, true, _ret);
}, 0);
case 1:
_5 = _ret;
case 2:
_ret = Lprint(Li)(function (_ret) {
return _16(_cb, 3, true, _ret);
}, 0);
case 3:
_6 = _ret;
case 4:
_ret = L__add__(Li, 1)(function (_ret) {
return _16(_cb, 5, true, _ret);
}, 0);
case 5:
_7 = _ret;
case 6:
_ret = Li = _7;
case 7:
_ret = L__lt__(Li, 10)(function (_ret) {
return _16(_cb, 8, true, _ret);
}, 0);
case 8:
_4 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
function _9(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lsleep = (function (Lms) {
var Larguments = arguments;
var _ret, _3;
function _11(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _2;
function _13(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Ltimeout(Lms, (function () {
var Larguments = arguments;
var _ret, _0, _1;
function _15(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint('timeout')(function (_ret) {
return _15(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lcall(Lbrk)(function (_ret) {
return _15(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _15;
}))(function (_ret) {
return _13(_cb, 1, true, _ret);
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
return _13;
}))(function (_ret) {
return _11(_cb, 1, true, _ret);
}, 0);
case 1:
_3 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _11;
});
case 1:
_ret = Li = 0;
case 2:
_ret = L__lt__(Li, 10)(function (_ret) {
return _9(_cb, 3, true, _ret);
}, 0);
case 3:
_4 = _ret;
case 4:
while (_4) {
_16(function (_ret) {
return _9(_cb, 4, true, _ret);
}, 0)
};
case 5:
_ret = Lprint('end')(function (_ret) {
return _9(_cb, 6, true, _ret);
}, 0);
case 6:
_8 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_9(function(x){return x;}, 0)
} catch (e) {
}