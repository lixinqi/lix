
require('/lib/lix/__builtin__.js');
var Lobj, _ret, _4, _7, _12, Larr, _13, _14, _15, Lcompose, _18, LnamePrint, _19, _20, _21, _22, _23, _24;
function _25(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lobj = {
name: (function (Lself) {
var Larguments = arguments;
;
function _27(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself._name
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _27;
}),
setName: (function (Lself, Lvalue) {
var Larguments = arguments;
;
function _29(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself._name = Lvalue;
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
return _29;
}),
age: (function (Lself) {
var Larguments = arguments;
;
function _31(_cb, _step, _cont, _ret) {
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
return _31;
}),
setAge: (function (Lself, Lvalue) {
var Larguments = arguments;
;
function _33(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself._age = Lvalue;
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
return _33;
}),
_name: "good",
_age: 21
};
case 1:
_ret = (function (Li) {
var Larguments = arguments;
var _ret, _0, _1, _2, _3;
function _35(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = (function (_36, _37) {
if (typeof _36.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _36.name.apply(_36, arguments);
} else if (_36.name !== undefined) {
if (_37 === undefined) {
return function (_ret) {
return _36.name;
}
}
return function (_ret) {
_36.name = _37;
}
}})(Li)(function (_ret) {
return _35(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint(_0)(function (_ret) {
return _35(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = (function (_39, _40) {
if (typeof _39.age === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _39.age.apply(_39, arguments);
} else if (_39.age !== undefined) {
if (_40 === undefined) {
return function (_ret) {
return _39.age;
}
}
return function (_ret) {
_39.age = _40;
}
}})(Li)(function (_ret) {
return _35(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lprint(_2)(function (_ret) {
return _35(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = Li
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _35;
})(Lobj)(function (_ret) {
return _25(_cb, 2, true, _ret);
}, 0);
case 2:
_4 = _ret;
case 3:
_ret = (function (Li) {
var Larguments = arguments;
var _ret, _5, _6;
function _43(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = (function (_44, _45) {
if (typeof _44.setName === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _44.setName.apply(_44, arguments);
} else if (_44.setName !== undefined) {
if (_45 === undefined) {
return function (_ret) {
return _44.setName;
}
}
return function (_ret) {
_44.setName = _45;
}
}})(Li, "fine")(function (_ret) {
return _43(_cb, 1, true, _ret);
}, 0);
case 1:
_5 = _ret;
case 2:
_ret = (function (_47, _48) {
if (typeof _47.setAge === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _47.setAge.apply(_47, arguments);
} else if (_47.setAge !== undefined) {
if (_48 === undefined) {
return function (_ret) {
return _47.setAge;
}
}
return function (_ret) {
_47.setAge = _48;
}
}})(_5, 43)(function (_ret) {
return _43(_cb, 3, true, _ret);
}, 0);
case 3:
_6 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _43;
})(_4)(function (_ret) {
return _25(_cb, 4, true, _ret);
}, 0);
case 4:
_7 = _ret;
case 5:
_ret = (function (Li) {
var Larguments = arguments;
var _ret, _8, _9, _10, _11;
function _51(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = (function (_52, _53) {
if (typeof _52.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _52.name.apply(_52, arguments);
} else if (_52.name !== undefined) {
if (_53 === undefined) {
return function (_ret) {
return _52.name;
}
}
return function (_ret) {
_52.name = _53;
}
}})(Li)(function (_ret) {
return _51(_cb, 1, true, _ret);
}, 0);
case 1:
_8 = _ret;
case 2:
_ret = Lprint(_8)(function (_ret) {
return _51(_cb, 3, true, _ret);
}, 0);
case 3:
_9 = _ret;
case 4:
_ret = (function (_55, _56) {
if (typeof _55.age === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _55.age.apply(_55, arguments);
} else if (_55.age !== undefined) {
if (_56 === undefined) {
return function (_ret) {
return _55.age;
}
}
return function (_ret) {
_55.age = _56;
}
}})(Li)(function (_ret) {
return _51(_cb, 5, true, _ret);
}, 0);
case 5:
_10 = _ret;
case 6:
_ret = Lprint(_10)(function (_ret) {
return _51(_cb, 7, true, _ret);
}, 0);
case 7:
_11 = _ret;
case 8:
_ret = Li
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _51;
})(_7)(function (_ret) {
return _25(_cb, 6, true, _ret);
}, 0);
case 6:
_12 = _ret;
case 7:
_ret = Larr = [(function (Lself) {
var Larguments = arguments;
;
function _59(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lself[1]
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _59;
}), "good", (function (Lself) {
var Larguments = arguments;
;
function _61(_cb, _step, _cont, _ret) {
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
return _61;
})];
case 8:
_ret = (function (_62, _63) {
if (typeof _62[2] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _62[2].apply(_62, arguments);
} else if (_62[2] !== undefined) {
if (_63 === undefined) {
return function (_ret) {
return _62[2];
}
}
return function (_ret) {
_62[2] = _63;
}
}})(Larr)(function (_ret) {
return _25(_cb, 9, true, _ret);
}, 0);
case 9:
_13 = _ret;
case 10:
_ret = (function (_65, _66) {
if (typeof _65[0] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _65[0].apply(_65, arguments);
} else if (_65[0] !== undefined) {
if (_66 === undefined) {
return function (_ret) {
return _65[0];
}
}
return function (_ret) {
_65[0] = _66;
}
}})(_13)(function (_ret) {
return _25(_cb, 11, true, _ret);
}, 0);
case 11:
_14 = _ret;
case 12:
_ret = Lprint(_14)(function (_ret) {
return _25(_cb, 13, true, _ret);
}, 0);
case 13:
_15 = _ret;
case 14:
_ret = Lcompose = (function (Lf0, Lf1) {
var Larguments = arguments;
;
function _69(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = (function (Li) {
var Larguments = arguments;
var _ret, _16, _17;
function _71(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lf0(Li)(function (_ret) {
return _71(_cb, 1, true, _ret);
}, 0);
case 1:
_16 = _ret;
case 2:
_ret = Lf1(_16)(function (_ret) {
return _71(_cb, 3, true, _ret);
}, 0);
case 3:
_17 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _71;
})
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _69;
});
case 15:
_ret = Lobj = {
name: "nice name"
};
case 16:
_ret = Lcompose((function (_72, _73) {
if (typeof _72.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _72.name.apply(_72, arguments);
} else if (_72.name !== undefined) {
if (_73 === undefined) {
return function (_ret) {
return _72.name;
}
}
return function (_ret) {
_72.name = _73;
}
}}), Lprint)(function (_ret) {
return _25(_cb, 17, true, _ret);
}, 0);
case 17:
_18 = _ret;
case 18:
_ret = LnamePrint = _18;
case 19:
_ret = LnamePrint(Lobj)(function (_ret) {
return _25(_cb, 20, true, _ret);
}, 0);
case 20:
_19 = _ret;
case 21:
_ret = (function (_75, _76) {
if (typeof _75.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _75.name.apply(_75, arguments);
} else if (_75.name !== undefined) {
if (_76 === undefined) {
return function (_ret) {
return _75.name;
}
}
return function (_ret) {
_75.name = _76;
}
}})(Lobj, "oh yeah")(function (_ret) {
return _25(_cb, 22, true, _ret);
}, 0);
case 22:
_20 = _ret;
case 23:
_ret = LnamePrint(Lobj)(function (_ret) {
return _25(_cb, 24, true, _ret);
}, 0);
case 24:
_21 = _ret;
case 25:
_ret = (function (_78, _79) {
if (typeof _78.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _78.name.apply(_78, arguments);
} else if (_78.name !== undefined) {
if (_79 === undefined) {
return function (_ret) {
return _78.name;
}
}
return function (_ret) {
_78.name = _79;
}
}})(Lobj, (function () {
var Larguments = arguments;
;
function _82(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = "function changed"
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
return _82;
}))(function (_ret) {
return _25(_cb, 26, true, _ret);
}, 0);
case 26:
_22 = _ret;
case 27:
_ret = LnamePrint(Lobj)(function (_ret) {
return _25(_cb, 28, true, _ret);
}, 0);
case 28:
_23 = _ret;
case 29:
_ret = (function (_83, _84) {
if (typeof _83.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _83.name.apply(_83, arguments);
} else if (_83.name !== undefined) {
if (_84 === undefined) {
return function (_ret) {
return _83.name;
}
}
return function (_ret) {
_83.name = _84;
}
}})(Lobj, "oh yeah")(function (_ret) {
return _25(_cb, 30, true, _ret);
}, 0);
case 30:
_24 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_25(function(x){return x;}, 0)
} catch (e) {
}