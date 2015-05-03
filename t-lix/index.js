
require('/lib/lix/s_builtin_.js');
var Larray2Monad, Lmonad2Array, Lseq, _6, _7, _8, _9, Lp, _10, _11, _12, _13, _14, _16;
function _17(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Larray2Monad = (function (Larr) {
var Larguments = arguments
;
function _19(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = (function (Lappend) {
var Larguments = arguments
var Li, _0, _1, _2;
function _22(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lappend(Larr[Li]));
case 1:
_1 = s[3];
case 2:
s[2] = 3;
lix(s, L__add__(Li, 1));
case 3:
_2 = s[3];
case 4:
s[3] = Li = _2;
case 5:
s[2] = 6;
lix(s, L__lt__(Li, Larr.length));
case 6:
_0 = s[3]
default:
}
return s[3]
}
;
function _21(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Li = 0;
case 1:
s[2] = 2;
lix(s, L__lt__(Li, Larr.length));
case 2:
_0 = s[3];
case 3:
while (_0) {
s[2] = 3;
lix(s, _22)
}
default:
}
return s[3]
}
;
return _21;
})
default:
}
return s[3]
}
;
return _19;
});
case 1:
s[3] = Lmonad2Array = (function (Lm) {
var Larguments = arguments
var Lret, _4;
function _24(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Lret = [];
case 1:
s[2] = 2;
lix(s, Lcall(Lm, (function (Lx) {
var Larguments = arguments
var _3;
function _26(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, (function (_27, _28) {
if (typeof _27.Push === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _27.Push.apply(_27, arguments);
} else if (_27.Push !== undefined) {
if (_28 === undefined) {
return function (_ret) {
return _27.Push;
}
}
return function (_ret) {
_27.Push = _28;
}
}})(Lret, Lx));
case 1:
_3 = s[3]
default:
}
return s[3]
}
;
return _26;
})));
case 2:
_4 = s[3];
case 3:
s[3] = Lret
default:
}
return s[3]
}
;
return _24;
});
case 2:
s[3] = Lseq = (function (Lx) {
var Larguments = arguments
var _5;
function _31(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Luntil(LN, L__gt__, Lx));
case 1:
_5 = s[3]
default:
}
return s[3]
}
;
return _31;
});
case 3:
s[2] = 4;
lix(s, L__(Lhook, Lprint));
case 4:
_6 = s[3];
case 5:
s[2] = 6;
lix(s, L__compose__(Larray2Monad, _6));
case 6:
_7 = s[3];
case 7:
s[2] = 8;
lix(s, L__(Lcall, Lidentity));
case 8:
_8 = s[3];
case 9:
s[2] = 10;
lix(s, L__compose__(_7, _8));
case 10:
_9 = s[3];
case 11:
s[3] = Lp = _9;
case 12:
s[2] = 13;
lix(s, Lseq(4));
case 13:
_10 = s[3];
case 14:
s[2] = 15;
lix(s, Lmonad2Array(_10));
case 15:
_11 = s[3];
case 16:
s[2] = 17;
lix(s, Lp(_11));
case 17:
_12 = s[3];
case 18:
s[2] = 19;
lix(s, Lprint('--------'));
case 19:
_13 = s[3];
case 20:
s[2] = 21;
lix(s, Lseq(4));
case 21:
_14 = s[3];
case 22:
s[2] = 23;
lix(s, Lcall(_14, (function (Lx) {
var Larguments = arguments
var _15;
function _33(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint(Lx));
case 1:
_15 = s[3]
default:
}
return s[3]
}
;
return _33;
})));
case 23:
_16 = s[3]
default:
}
return s[3]
}
;
module.exports = _17
