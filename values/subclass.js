
require('/lib/lix/__builtin__.js');
var Lsubclass, Linstance, LMyObject, _ret, _17, LPerson, _18, Lperson, _20, LStudent, _22, LTeacher, _23, Lstudent, _24, Lteacher, _25, _26, _27, _28, _29, _30, _31, LMyStudent, _32, Lstu, _33, _34, _35, _36, _37, _38, _39, _40;
function _41(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lsubclass = (function (Lparent, Lconfig) {
var Larguments = arguments;
var _ret, _0, Lclass, _1, _2, _3;
function _44(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_1 = false;
case 1:
_ret = Lconfig(Lclass)(function (_ret) {
return _44(_cb, 2, true, _ret);
}, 0);
case 2:
_3 = _ret;
case 3:
_ret = _2 = _3
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
function _43(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LObject.Create(Lparent)(function (_ret) {
return _43(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lclass = _0;
case 3:
_ret = true;
case 4:
_1 = _ret;
case 5:
_ret = null;
case 6:
_2 = _ret;
case 7:
if ((_1 && Lconfig)) {
_44(function (_ret) {
return _43(_cb, 8, true, _ret);
}, 0)
};
case 8:
_ret = Lclass
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _43;
});
case 1:
_ret = Linstance = LObject.Create;
case 2:
_ret = LMyObject = {

};
case 3:
_ret = Lsubclass(LMyObject, (function (Lpub) {
var Larguments = arguments;
var Lsleep, LtimesRepeat, Lperiodically;
function _46(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lpub.__class__ = 'Person';
case 1:
_ret = Lpub.name = 'lix';
case 2:
_ret = Lpub.__init__ = (function (Lself, Lname, Lage) {
var Larguments = arguments;
;
function _48(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself.name = Lname
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
case 3:
_ret = Lpub.hi = (function (Lself) {
var Larguments = arguments;
var _ret, _4;
function _50(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint(Lself.name)(function (_ret) {
return _50(_cb, 1, true, _ret);
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
return _50;
});
case 4:
_ret = Lsleep = (function (Lsecs) {
var Larguments = arguments;
var _ret, _8;
function _52(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lcc, (function (Lbrk) {
var Larguments = arguments;
var _ret, _5, _7;
function _54(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = L__mul__(Lsecs, 1000)(function (_ret) {
return _54(_cb, 1, true, _ret);
}, 0);
case 1:
_5 = _ret;
case 2:
_ret = Ltimeout(_5, (function () {
var Larguments = arguments;
var _ret, _6;
function _56(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lbrk)(function (_ret) {
return _56(_cb, 1, true, _ret);
}, 0);
case 1:
_6 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _56;
}))(function (_ret) {
return _54(_cb, 3, true, _ret);
}, 0);
case 3:
_7 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _54;
}))(function (_ret) {
return _52(_cb, 1, true, _ret);
}, 0);
case 1:
_8 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _52;
});
case 5:
_ret = LtimesRepeat = (function (Lcount, Lfn) {
var Larguments = arguments;
var Li, _ret, _9, _10, _11;
function _59(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lfn)(function (_ret) {
return _59(_cb, 1, true, _ret);
}, 0);
case 1:
_10 = _ret;
case 2:
_ret = L__add__(Li, 1)(function (_ret) {
return _59(_cb, 3, true, _ret);
}, 0);
case 3:
_11 = _ret;
case 4:
_ret = Li = _11;
case 5:
_ret = L__lt__(Li, Lcount)(function (_ret) {
return _59(_cb, 6, true, _ret);
}, 0);
case 6:
_9 = _ret
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
_ret = Li = 0;
case 1:
_ret = L__lt__(Li, Lcount)(function (_ret) {
return _58(_cb, 2, true, _ret);
}, 0);
case 2:
_9 = _ret;
case 3:
while (_9) {
_59(function (_ret) {
return _58(_cb, 3, true, _ret);
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
return _58;
});
case 6:
_ret = Lperiodically = (function (Lcount, Lsecs, Lfn) {
var Larguments = arguments;
var _ret, _14;
function _61(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = LtimesRepeat(Lcount, (function () {
var Larguments = arguments;
var _ret, _12, _13;
function _63(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lsleep(Lsecs)(function (_ret) {
return _63(_cb, 1, true, _ret);
}, 0);
case 1:
_12 = _ret;
case 2:
_ret = Lcall(Lfn)(function (_ret) {
return _63(_cb, 3, true, _ret);
}, 0);
case 3:
_13 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _63;
}))(function (_ret) {
return _61(_cb, 1, true, _ret);
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
return _61;
});
case 7:
_ret = Lpub.periodicallyHi = (function (Lself) {
var Larguments = arguments;
var _ret, _16;
function _65(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lcall(Lperiodically, 5, 1, (function () {
var Larguments = arguments;
var _ret, _15;
function _67(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = (function (_68, _69) {
if (typeof _68.hi === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _68.hi.apply(_68, arguments);
} else if (_68.hi !== undefined) {
if (_69 === undefined) {
return function (_ret) {
return _68.hi;
}
}
return function (_ret) {
_68.hi = _69;
}
}})(Lself)(function (_ret) {
return _67(_cb, 1, true, _ret);
}, 0);
case 1:
_15 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _67;
}))(function (_ret) {
return _65(_cb, 1, true, _ret);
}, 0);
case 1:
_16 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _65;
})
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _46;
}))(function (_ret) {
return _41(_cb, 4, true, _ret);
}, 0);
case 4:
_17 = _ret;
case 5:
_ret = LPerson = _17;
case 6:
_ret = Linstance(LPerson)(function (_ret) {
return _41(_cb, 7, true, _ret);
}, 0);
case 7:
_18 = _ret;
case 8:
_ret = Lperson = _18;
case 9:
_ret = Lsubclass(LPerson, (function (Lpub) {
var Larguments = arguments;
;
function _72(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lpub.hi = (function (Lself) {
var Larguments = arguments;
var _ret, _19;
function _74(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint('Im\' a student')(function (_ret) {
return _74(_cb, 1, true, _ret);
}, 0);
case 1:
_19 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _74;
})
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _72;
}))(function (_ret) {
return _41(_cb, 10, true, _ret);
}, 0);
case 10:
_20 = _ret;
case 11:
_ret = LStudent = _20;
case 12:
_ret = Lsubclass(LPerson, (function (Lpub) {
var Larguments = arguments;
;
function _76(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lpub.hi = (function (Lself) {
var Larguments = arguments;
var _ret, _21;
function _78(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint('Im\' a teacher')(function (_ret) {
return _78(_cb, 1, true, _ret);
}, 0);
case 1:
_21 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _78;
})
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _76;
}))(function (_ret) {
return _41(_cb, 13, true, _ret);
}, 0);
case 13:
_22 = _ret;
case 14:
_ret = LTeacher = _22;
case 15:
_ret = Linstance(LStudent)(function (_ret) {
return _41(_cb, 16, true, _ret);
}, 0);
case 16:
_23 = _ret;
case 17:
_ret = Lstudent = _23;
case 18:
_ret = Linstance(LTeacher)(function (_ret) {
return _41(_cb, 19, true, _ret);
}, 0);
case 19:
_24 = _ret;
case 20:
_ret = Lteacher = _24;
case 21:
_ret = Linstanceof(Lstudent, LStudent)(function (_ret) {
return _41(_cb, 22, true, _ret);
}, 0);
case 22:
_25 = _ret;
case 23:
_ret = Lprint(_25)(function (_ret) {
return _41(_cb, 24, true, _ret);
}, 0);
case 24:
_26 = _ret;
case 25:
_ret = Lis(Lstudent, LStudent)(function (_ret) {
return _41(_cb, 26, true, _ret);
}, 0);
case 26:
_27 = _ret;
case 27:
_ret = Lprint(_27)(function (_ret) {
return _41(_cb, 28, true, _ret);
}, 0);
case 28:
_28 = _ret;
case 29:
_ret = Lis(Lstudent, LTeacher)(function (_ret) {
return _41(_cb, 30, true, _ret);
}, 0);
case 30:
_29 = _ret;
case 31:
_ret = Lprint(_29)(function (_ret) {
return _41(_cb, 32, true, _ret);
}, 0);
case 32:
_30 = _ret;
case 33:
_ret = Lsubclass(LStudent)(function (_ret) {
return _41(_cb, 34, true, _ret);
}, 0);
case 34:
_31 = _ret;
case 35:
_ret = LMyStudent = _31;
case 36:
_ret = Linstance(LMyStudent)(function (_ret) {
return _41(_cb, 37, true, _ret);
}, 0);
case 37:
_32 = _ret;
case 38:
_ret = Lstu = _32;
case 39:
_ret = Linstanceof(Lstu, LMyStudent)(function (_ret) {
return _41(_cb, 40, true, _ret);
}, 0);
case 40:
_33 = _ret;
case 41:
_ret = Lprint(_33)(function (_ret) {
return _41(_cb, 42, true, _ret);
}, 0);
case 42:
_34 = _ret;
case 43:
_ret = Linstanceof(Lstu, LStudent)(function (_ret) {
return _41(_cb, 44, true, _ret);
}, 0);
case 44:
_35 = _ret;
case 45:
_ret = Lprint(_35)(function (_ret) {
return _41(_cb, 46, true, _ret);
}, 0);
case 46:
_36 = _ret;
case 47:
_ret = Lis(Lstu, LMyStudent)(function (_ret) {
return _41(_cb, 48, true, _ret);
}, 0);
case 48:
_37 = _ret;
case 49:
_ret = Lprint(_37)(function (_ret) {
return _41(_cb, 50, true, _ret);
}, 0);
case 50:
_38 = _ret;
case 51:
_ret = Lis(Lstu, LStudent)(function (_ret) {
return _41(_cb, 52, true, _ret);
}, 0);
case 52:
_39 = _ret;
case 53:
_ret = Lprint(_39)(function (_ret) {
return _41(_cb, 54, true, _ret);
}, 0);
case 54:
_40 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_41(function(x){return x;}, 0)
} catch (e) {
}