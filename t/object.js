
require('/lib/lix/__builtin__.js');
var La, _ret, _0, _1, _2, _3, _4, _5, _6, Lindex, _7, _8, _9, Lb, _10, _11, Llist, _12, _13, Lpipe, _15, _16, _17, _18, LA, L_new, _20, _21, _22, Lobj, _23, Lext, _28, Linstance, Lgo, _32, _33, _34, _35;
function _36(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = La = {
1: 'ok',
a: "good",
b: "nice",
"hello world": 'good',
9527: 'fine'
};
case 1:
_ret = Lprint(La)(function (_ret) {
return _36(_cb, 2, true, _ret);
}, 0);
case 2:
_0 = _ret;
case 3:
_ret = Lprint(La[1])(function (_ret) {
return _36(_cb, 4, true, _ret);
}, 0);
case 4:
_1 = _ret;
case 5:
_ret = Lprint(La[1])(function (_ret) {
return _36(_cb, 6, true, _ret);
}, 0);
case 6:
_2 = _ret;
case 7:
_ret = Lprint(La["1"])(function (_ret) {
return _36(_cb, 8, true, _ret);
}, 0);
case 8:
_3 = _ret;
case 9:
_ret = Lprint(La.a)(function (_ret) {
return _36(_cb, 10, true, _ret);
}, 0);
case 10:
_4 = _ret;
case 11:
_ret = Lprint(La["a"])(function (_ret) {
return _36(_cb, 12, true, _ret);
}, 0);
case 12:
_5 = _ret;
case 13:
_ret = Lprint(La.b)(function (_ret) {
return _36(_cb, 14, true, _ret);
}, 0);
case 14:
_6 = _ret;
case 15:
_ret = Lindex = "hello world";
case 16:
_ret = L__add__(Lindex, ": ")(function (_ret) {
return _36(_cb, 17, true, _ret);
}, 0);
case 17:
_7 = _ret;
case 18:
_ret = L__add__(_7, La[Lindex])(function (_ret) {
return _36(_cb, 19, true, _ret);
}, 0);
case 19:
_8 = _ret;
case 20:
_ret = Lprint(_8)(function (_ret) {
return _36(_cb, 21, true, _ret);
}, 0);
case 21:
_9 = _ret;
case 22:
_ret = Lb = {

};
case 23:
_ret = Lprint(Lb)(function (_ret) {
return _36(_cb, 24, true, _ret);
}, 0);
case 24:
_10 = _ret;
case 25:
_ret = Lb[0] = 30;
case 26:
_ret = Lb[1] = 28;
case 27:
_ret = Lprint(Lb)(function (_ret) {
return _36(_cb, 28, true, _ret);
}, 0);
case 28:
_11 = _ret;
case 29:
_ret = Llist = {
length: (function (Li) {
var Larguments = arguments;
;
function _38(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Li.length
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _38;
}),
append: (function (Ll, Lx) {
var Larguments = arguments;
;
function _40(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Ll[Ll.length] = Lx;
case 1:
_ret = Ll
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _40;
})
};
case 30:
_ret = Llist.length([1, 2, 3, 4])(function (_ret) {
return _36(_cb, 31, true, _ret);
}, 0);
case 31:
_12 = _ret;
case 32:
_ret = Lprint(_12)(function (_ret) {
return _36(_cb, 33, true, _ret);
}, 0);
case 33:
_13 = _ret;
case 34:
_ret = Lpipe = (function (Li, Lfn) {
var Larguments = arguments;
var _ret, _14;
function _42(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lfn(Li)(function (_ret) {
return _42(_cb, 1, true, _ret);
}, 0);
case 1:
_14 = _ret;
case 2:
_ret = Li
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _42;
});
case 35:
_ret = Llist.append([0, 1, 2, 3], 30)(function (_ret) {
return _36(_cb, 36, true, _ret);
}, 0);
case 36:
_15 = _ret;
case 37:
_ret = Lpipe(_15, Lprint)(function (_ret) {
return _36(_cb, 38, true, _ret);
}, 0);
case 38:
_16 = _ret;
case 39:
_ret = Llist.length(_16)(function (_ret) {
return _36(_cb, 40, true, _ret);
}, 0);
case 40:
_17 = _ret;
case 41:
_ret = Lprint(_17)(function (_ret) {
return _36(_cb, 42, true, _ret);
}, 0);
case 42:
_18 = _ret;
case 43:
_ret = LA = (function (Lself, Lname) {
var Larguments = arguments;
;
function _44(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself.name = Lname;
case 1:
_ret = Lself
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _44;
});
case 44:
_ret = L_new = (function (LClass, Largs) {
var Larguments = arguments;
var Lobj, _ret, _19;
function _46(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lobj = {

};
case 1:
_ret = LClass(Lobj, Largs)(function (_ret) {
return _46(_cb, 2, true, _ret);
}, 0);
case 2:
_19 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _46;
});
case 45:
_ret = L_new(LA, "good")(function (_ret) {
return _36(_cb, 46, true, _ret);
}, 0);
case 46:
_20 = _ret;
case 47:
_ret = Lprint(_20)(function (_ret) {
return _36(_cb, 48, true, _ret);
}, 0);
case 48:
_21 = _ret;
case 49:
_ret = L_new(LA, "good")(function (_ret) {
return _36(_cb, 50, true, _ret);
}, 0);
case 50:
_22 = _ret;
case 51:
_ret = Lobj = _22;
case 52:
_ret = Lprint(Lobj.name)(function (_ret) {
return _36(_cb, 53, true, _ret);
}, 0);
case 53:
_23 = _ret;
case 54:
_ret = Lext = (function (LClass, Lconfig) {
var Larguments = arguments;
var LnewClassObj, _ret, _24, LnewClass;
function _48(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LnewClassObj = {

};
case 1:
_ret = Lconfig(LnewClassObj)(function (_ret) {
return _48(_cb, 2, true, _ret);
}, 0);
case 2:
_24 = _ret;
case 3:
_ret = LnewClass = (function () {
var Larguments = arguments;
;
function _50(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lthis
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _50;
});
case 4:
_ret = LnewClass.prototype = LnewClassObj;
case 5:
_ret = LnewClass
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _48;
});
case 55:
_ret = Lext({

}, (function (Lpub) {
var Larguments = arguments;
;
function _52(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lpub._name = "lixinqi";
case 1:
_ret = Lpub._age = 20;
case 2:
_ret = Lpub.construct = (function (Lself) {
var Larguments = arguments;
;
function _54(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _54;
});
case 3:
_ret = Lpub.name = (function (Lself, Lvalue) {
var Larguments = arguments;
var _ret, _25, _26, _27;
function _57(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_25 = false;
case 1:
_ret = _26 = Lself._name
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
function _58(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = _26 = Lself._name = Lvalue
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
function _56(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = true;
case 1:
_25 = _ret;
case 2:
_ret = null;
case 3:
_26 = _ret;
case 4:
_ret = L__eq__(Lvalue, undefined)(function (_ret) {
return _56(_cb, 5, true, _ret);
}, 0);
case 5:
_27 = _ret;
case 6:
if ((_25 && _27)) {
_57(function (_ret) {
return _56(_cb, 7, true, _ret);
}, 0)
};
case 7:
if (_25) {
_58(function (_ret) {
return _56(_cb, 8, true, _ret);
}, 0)
}
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _56;
});
case 4:
_ret = Lpub.age = (function (Lself) {
var Larguments = arguments;
;
function _60(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself._age
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _60;
})
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _52;
}))(function (_ret) {
return _36(_cb, 56, true, _ret);
}, 0);
case 56:
_28 = _ret;
case 57:
_ret = LA = _28;
case 58:
_ret = Linstance = (function (LClass, Largs) {
var Larguments = arguments;
var _ret, _29, Lobj, _30;
function _62(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L_instance_(LClass)(function (_ret) {
return _62(_cb, 1, true, _ret);
}, 0);
case 1:
_29 = _ret;
case 2:
_ret = Lobj = _29;
case 3:
_ret = LClass.prototype.construct(Lobj)(function (_ret) {
return _62(_cb, 4, true, _ret);
}, 0);
case 4:
_30 = _ret;
case 5:
_ret = Lobj
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _62;
});
case 59:
_ret = Lgo = (function (Lfn) {
var Larguments = arguments;
var _ret, _31;
function _64(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lfn(0)(function (_ret) {
return _64(_cb, 1, true, _ret);
}, 0);
case 1:
_31 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _64;
});
case 60:
_ret = Lprint(LA)(function (_ret) {
return _36(_cb, 61, true, _ret);
}, 0);
case 61:
_32 = _ret;
case 62:
_ret = Linstance(LA)(function (_ret) {
return _36(_cb, 63, true, _ret);
}, 0);
case 63:
_33 = _ret;
case 64:
_ret = Lobj = _33;
case 65:
_ret = Lobj.name(Lobj)(function (_ret) {
return _36(_cb, 66, true, _ret);
}, 0);
case 66:
_34 = _ret;
case 67:
_ret = Lprint(_34)(function (_ret) {
return _36(_cb, 68, true, _ret);
}, 0);
case 68:
_35 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_36(function(x){return x;}, 0)
} catch (e) {
}