
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _2, _6, _12, _0, Lobj, _3, _4, _5, _7, _8, _9, _10, _11, _13, _14, _16, _17, Lobj0, _19, _20, _21, _22;
function _23(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_2 = (function (_24, _25) {
if (_24 == undefined || _24 == null ) {
return function () {
return _24;
}
}
if (typeof _24.name === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _24.name.apply(_24, arguments);
} else {
if (arguments.length > 1) {
return function () {
_24.name = _25;
return _24;
}
}
return function () {
return _24.name;
}
}});
case 1:
_6 = (function (_27, _28) {
if (_27 == undefined || _27 == null ) {
return function () {
return _27;
}
}
if (typeof _27.age === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _27.age.apply(_27, arguments);
} else {
if (arguments.length > 1) {
return function () {
_27.age = _28;
return _27;
}
}
return function () {
return _27.age;
}
}});
case 2:
_12 = (function (_30, _31) {
if (_30 == undefined || _30 == null ) {
return function () {
return _30;
}
}
if (typeof _30.hi === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _30.hi.apply(_30, arguments);
} else {
if (arguments.length > 1) {
return function () {
_30.hi = _31;
return _30;
}
}
return function () {
return _30.hi;
}
}});
case 3:
s[2] = 4;
lix(s, Lprint('in t.lix'));
case 4:
_0 = s[3];
case 5:
s[3] = Lobj = {
name: (function () {
var Larguments = arguments
var _1;
function _34(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('good'));
case 1:
_1 = s[3]
default:
}
return s[3]
}
;
return _34;
})
};
case 6:
s[2] = 7;
lix(s, _2(Lobj));
case 7:
_3 = s[3];
case 8:
s[2] = 9;
lix(s, _2(Lobj));
case 9:
_4 = s[3];
case 10:
s[2] = 11;
lix(s, Lprint(Lobj));
case 11:
_5 = s[3];
case 12:
s[2] = 13;
lix(s, _6(Lobj));
case 13:
_7 = s[3];
case 14:
s[2] = 15;
lix(s, Lprint(_7));
case 15:
_8 = s[3];
case 16:
s[2] = 17;
lix(s, _6(Lobj, 10));
case 17:
_9 = s[3];
case 18:
s[2] = 19;
lix(s, _6(Lobj));
case 19:
_10 = s[3];
case 20:
s[2] = 21;
lix(s, Lprint(_10));
case 21:
_11 = s[3];
case 22:
s[2] = 23;
lix(s, _12(Lobj));
case 23:
_13 = s[3];
case 24:
s[2] = 25;
lix(s, Lprint(_13));
case 25:
_14 = s[3];
case 26:
s[2] = 27;
lix(s, _12(Lobj, (function () {
var Larguments = arguments
var _15;
function _36(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('hi'));
case 1:
_15 = s[3]
default:
}
return s[3]
}
;
return _36;
})));
case 27:
_16 = s[3];
case 28:
s[2] = 29;
lix(s, _12(_16));
case 29:
_17 = s[3];
case 30:
s[3] = Lobj0 = {

};
case 31:
s[2] = 32;
lix(s, _12(Lobj0, (function () {
var Larguments = arguments
var _18;
function _38(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('nice'));
case 1:
_18 = s[3]
default:
}
return s[3]
}
;
return _38;
})));
case 32:
_19 = s[3];
case 33:
s[2] = 34;
lix(s, _12(_19));
case 34:
_20 = s[3];
case 35:
s[2] = 36;
lix(s, Lcall(_12));
case 36:
_21 = s[3];
case 37:
s[2] = 38;
lix(s, Lprint(_21));
case 38:
_22 = s[3]
default:
}
return s[3]
}
;
module.exports = _23
