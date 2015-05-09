
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _2, _5, Lobj, _3, _4, _6, _7, _8, _9;
function _10(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
_2 = (function (_11, _12) {
if (_11 == undefined || _11 == null ) {
return function () {
return _11;
}
}
if (typeof _11[0] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _11[0].apply(_11, arguments);
} else {
if (arguments.length > 1) {
return function () {
_11[0] = _12;
return _11;
}
}
return function () {
return _11[0];
}
}});
case 1:
_5 = (function (_14, _15) {
if (_14 == undefined || _14 == null ) {
return function () {
return _14;
}
}
if (typeof _14[1] === 'function') {
arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
return _14[1].apply(_14, arguments);
} else {
if (arguments.length > 1) {
return function () {
_14[1] = _15;
return _14;
}
}
return function () {
return _14[1];
}
}});
case 2:
s[3] = Lobj = {
0: {
0: (function () {
var Larguments = arguments
var _0;
function _18(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('hi obj.0.0'));
case 1:
_0 = s[3]
default:
}
return s[3]
}
;
return _18;
}),
1: (function () {
var Larguments = arguments
var _1;
function _20(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint('hi obj.0.1'));
case 1:
_1 = s[3]
default:
}
return s[3]
}
;
return _20;
})
}
};
case 3:
s[2] = 4;
lix(s, L__compose__(_2, _2));
case 4:
_3 = s[3];
case 5:
s[2] = 6;
lix(s, _3(Lobj));
case 6:
_4 = s[3];
case 7:
s[2] = 8;
lix(s, L__compose__(_2, _5));
case 8:
_6 = s[3];
case 9:
s[2] = 10;
lix(s, _6(Lobj));
case 10:
_7 = s[3];
case 11:
s[2] = 12;
lix(s, Lcall(Lobj[0][0]));
case 12:
_8 = s[3];
case 13:
s[2] = 14;
lix(s, Lcall(Lobj[0][1]));
case 14:
_9 = s[3]
default:
}
return s[3]
}
;
module.exports = _10
