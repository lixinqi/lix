
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _14, Literator, Larr, Lend, _9, Litt, _10, _11, _12, _13, _15;
function _32(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Litt));
case 1:
_12 = s[3];
case 2:
s[2] = 3;
lix(s, Lprint(_12));
case 3:
_13 = s[3];
case 4:
s[2] = 5;
lix(s, _14(Litt));
case 5:
_15 = s[3];
case 6:
s[2] = 7;
lix(s, Lcall(Litt));
case 7:
_10 = s[3];
case 8:
s[2] = 9;
lix(s, L__ne__(_10, Lend));
case 9:
_11 = s[3]
default:
}
return s[3]
}
;
function _16(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
_14 = (function (_17, _18) {
if (_17 == undefined || _17 == null ) {
return function () {
return _17;
}
}
if (typeof _17.inc === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _17.inc.apply(_17, arguments);
} else {
if (arguments.length > 1) {
return function () {
_17.inc = _18;
return _17;
}
}
return function () {
return _17.inc;
}
}});
case 2:
s[3] = Literator = (function (Larr, Lend) {
var Larguments = arguments
var Lcurrent, Ldefault, _0, Lret;
function _21(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Lcurrent = 0;
case 1:
s[3] = Ldefault = {
end: 'end'
};
case 2:
s[2] = 3;
lix(s, Lend(Ldefault));
case 3:
_0 = s[3];
case 4:
s[3] = Lret = (function (Lx) {
var Larguments = arguments
var _1, _2, _3;
function _24(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_1 = false;
case 1:
s[3] = Larr[Lcurrent] = Lx
default:
}
return s[3]
}
;
function _26(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_2 = false;
case 1:
s[3] = Ldefault
default:
}
return s[3]
}
;
function _27(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[3] = Larr[Lcurrent]
default:
}
return s[3]
}
;
function _25(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_2 = true;
case 1:
s[2] = 2;
lix(s, L__ge__(Lcurrent, Larr.length));
case 2:
_3 = s[3];
case 3:
if ((_2 && _3)) {
s[2] = 4;
lix(s, _26)
};
case 4:
if (_2) {
s[2] = 5;
lix(s, _27)
}
default:
}
return s[3]
}
;
function _23(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_1 = true;
case 1:
if ((_1 && Larguments.length)) {
s[2] = 2;
lix(s, _24)
};
case 2:
if (_1) {
s[2] = 3;
lix(s, _25)
}
default:
}
return s[3]
}
;
return _23;
});
case 5:
s[3] = Lret.inc = (function (Lself, Ln) {
var Larguments = arguments
var _4, _5, _6, Lpos, _7, _8;
function _30(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_4 = false;
case 1:
s[3] = Ln = 1
default:
}
return s[3]
}
;
function _31(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_7 = false;
case 1:
s[3] = Lpos = 0
default:
}
return s[3]
}
;
function _29(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_4 = true;
case 1:
s[2] = 2;
lix(s, L__le__(Larguments.length, 1));
case 2:
_5 = s[3];
case 3:
if ((_4 && _5)) {
s[2] = 4;
lix(s, _30)
};
case 4:
s[2] = 5;
lix(s, L__add__(Lcurrent, Ln));
case 5:
_6 = s[3];
case 6:
s[3] = Lpos = _6;
case 7:
_7 = true;
case 8:
s[2] = 9;
lix(s, L__lt__(Lpos, 0));
case 9:
_8 = s[3];
case 10:
if ((_7 && _8)) {
s[2] = 11;
lix(s, _31)
};
case 11:
s[3] = Lcurrent = Lpos
default:
}
return s[3]
}
;
return _29;
});
case 6:
s[3] = Lret
default:
}
return s[3]
}
;
return _21;
});
case 3:
s[3] = Larr = [1, 2, 3, 5, 4];
case 4:
s[2] = 5;
lix(s, Literator(Larr, (function (_x) {
if (arguments.length) {
return function () {
return Lend = _x
}
} else {
return function () {
return Lend
}
}
})));
case 5:
_9 = s[3];
case 6:
s[3] = Litt = _9;
case 7:
s[2] = 8;
lix(s, Lcall(Litt));
case 8:
_10 = s[3];
case 9:
s[2] = 10;
lix(s, L__ne__(_10, Lend));
case 10:
_11 = s[3];
case 11:
while (_11) {
s[2] = 11;
lix(s, _32)
}
default:
}
return s[3]
}
;
module.exports = _16
