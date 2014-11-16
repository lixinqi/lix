
require('/lib/lix/__builtin__.js');
var Linc1, Linc2, _ret, _2, _3, _4, _5;
function _6(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Linc1 = (function (Li) {
var Larguments = arguments;
var _ret, _0;
function _8(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__(Li, 1)(function (_ret) {
return _8(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _8;
});
case 1:
_ret = Linc2 = (function (Li) {
var Larguments = arguments;
var _ret, _1;
function _10(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__add__(Li, 2)(function (_ret) {
return _10(_cb, 1, true, _ret);
}, 0);
case 1:
_1 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _10;
});
case 2:
_ret = require("Compose")(function (_ret) {
return _6(_cb, 3, true, _ret);
}, 0);
case 3:
_2 = _ret;
case 4:
_ret = _2(Linc1, Linc2)(function (_ret) {
return _6(_cb, 5, true, _ret);
}, 0);
case 5:
_3 = _ret;
case 6:
_ret = _3(3)(function (_ret) {
return _6(_cb, 7, true, _ret);
}, 0);
case 7:
_4 = _ret;
case 8:
_ret = Lprint(_4)(function (_ret) {
return _6(_cb, 9, true, _ret);
}, 0);
case 9:
_5 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_6(function(x){return x;}, 0)
} catch (e) {
}