
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
function _11(Lx) {
var Larguments = arguments;
var Lx = arguments ? arguments[0] : undefined;
var Lx = Lx;
;
function _13(s) {
switch (s[2]) {
case 0:
s[3] = Lx
default:
}
return s[3]
}
;
;
return _13;
};
function _14(Lx) {
var Larguments = arguments;
var Lx = arguments ? arguments[0] : undefined;
var Lx = Lx;
;
function _16(s) {
switch (s[2]) {
case 0:
s[3] = "object"
default:
}
return s[3]
}
;
;
return _16;
};
function _17() {
var Larguments = arguments;
;
;
function _19(s) {
switch (s[2]) {
case 0:
s[3] = "error"
default:
}
return s[3]
}
;
;
return _19;
};
function _10(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 4:
s[2] = 5;
lix(s, Lcall(Lf, 0));
case 5:
_0 = s[3];
case 6:
s[2] = 7;
lix(s, Lprint(_0));
case 7:
_1 = s[3];
case 8:
s[2] = 9;
lix(s, Lcall(Lf, 2));
case 9:
_2 = s[3];
case 10:
s[2] = 11;
lix(s, Lprint(_2));
case 11:
_3 = s[3];
case 12:
s[2] = 13;
lix(s, Lcall(Lf, "2"));
case 13:
_4 = s[3];
case 14:
s[2] = 15;
lix(s, Lprint(_4));
case 15:
_5 = s[3];
case 16:
s[2] = 17;
lix(s, Lcall(Lf, {

}));
case 17:
_6 = s[3];
case 18:
s[2] = 19;
lix(s, Lprint(_6));
case 19:
_7 = s[3];
case 20:
s[2] = 21;
lix(s, Lcall(Lf, true));
case 21:
_8 = s[3];
case 22:
s[2] = 23;
lix(s, Lprint(_8));
case 23:
_9 = s[3]
default:
}
return s[3]
}
;
function Lf(_fn_0) {
if (arguments.length == 1 && ((typeof arguments[0] == 'number') || (arguments[0] === "2"))) {
return _11(_fn_0);
}
if (arguments.length == 1 && (arguments[0] instanceof LObject)) {
return _14(_fn_0);
}
return _17.apply(_17, arguments);
}
;
module.exports = _10
