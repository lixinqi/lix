
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var La, _0, _1, Lb, _2, _3, Lc, _4, _5;
function _6(s) {
var Lraise = raise(s);
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return La = _x
}
} else {
return function () {
return La
}
}
})(0));
case 1:
_0 = s[3];
case 2:
s[2] = 3;
lix(s, Lprint(La));
case 3:
_1 = s[3];
case 4:
s[3] = Lb = {
a: 3
};
case 5:
s[2] = 6;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Lb.a = _x
}
} else {
return function () {
return Lb.a
}
}
})(4));
case 6:
_2 = s[3];
case 7:
s[2] = 8;
lix(s, Lprint(Lb));
case 8:
_3 = s[3];
case 9:
s[3] = Lc = {
b: [0]
};
case 10:
s[2] = 11;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Lc.b[0] = _x
}
} else {
return function () {
return Lc.b[0]
}
}
})(5));
case 11:
_4 = s[3];
case 12:
s[2] = 13;
lix(s, Lprint(Lc));
case 13:
_5 = s[3]
default:
}
return s[3]
}
;
module.exports = _6
