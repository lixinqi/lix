
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var La, Lx, Ly, Lz, _0, _1, _2, _3, _4;
function _5(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[3] = La = {
x: 4,
y: 5,
z: 6
};
case 2:
s[2] = 3;
lix(s, (function (_x) {
if (arguments.length && _x) {
return function () {
Lx = _x[0]
Ly = _x[1]
Lz = _x[2]
return _x
}
} else {
return function () {
return [Lx, Ly, Lz]
}
}
})([3, 2, 1]));
case 3:
_0 = s[3];
case 4:
s[2] = 5;
lix(s, Lprint(_0));
case 5:
_1 = s[3];
case 6:
s[2] = 7;
lix(s, Lprint([Lx, Ly, Lz]));
case 7:
_2 = s[3];
case 8:
s[2] = 9;
lix(s, (function (_x) {
if (arguments.length && _x) {
return function () {
Lx = _x.x
Ly = _x.y
Lz = _x.z
return _x
}
} else {
return function () {
return {x: Lx, y: Ly, z: Lz}
}
}
})(La));
case 9:
_3 = s[3];
case 10:
s[2] = 11;
lix(s, Lprint([Lx, Ly, Lz]));
case 11:
_4 = s[3]
default:
}
return s[3]
}
;
;
module.exports = _5
