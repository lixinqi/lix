
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, LL, _1, _3, _4, _5, _6, _7;
function Lxlist(x) {
return (typeof x == 'function') && (x && (((_at_9 = x.__xlist_signature__) || 1) && (_at_9 === true)));
};
;
function Lfunc(x) {
return (typeof x == 'function') && (x && (((_at_10 = x.__xlist_signature__) || 1) && (!(_at_10 === true))));
};
;
function _11(Lf) {
var Larguments = arguments;
;
;
function _13(s) {
switch (s[2]) {
case 0:
s[3] = "f"
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
;
var _2;
function _16(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lxlist2array(LL));
case 1:
_2 = s[3]
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
s[3] = 'error'
default:
}
return s[3]
}
;
;
return _19;
};
function _20() {
var Larguments = arguments;
;
;
function _22(s) {
switch (s[2]) {

default:
}
return s[3]
}
;
;
return _22;
};
function _8(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Luntil(LN, L__gt__, 3));
case 2:
_0 = s[3];
case 3:
s[3] = LL = _0;
case 4:
s[3] = LL.__xlist_signature__ = true;
case 5:
s[3] = Lxlist;
case 6:
s[3] = Lfunc;
case 8:
_1 = s[3];
case 10:
_3 = s[3];
case 12:
_4 = s[3];
case 14:
_5 = s[3];
case 15:
s[2] = 16;
lix(s, _u_8(LL));
case 16:
_6 = s[3];
case 17:
s[2] = 18;
lix(s, Lprint(_6));
case 18:
_7 = s[3]
default:
}
return s[3]
}
;
function _u_8(_fn_0) {
var _at_23;
if (arguments.length == 1 && ((_at_23 = arguments[0]) || 1) && (Lfunc(_at_23))) {
return _11(_fn_0);
}
var _at_24;
if (arguments.length == 1 && ((_at_24 = arguments[0]) || 1) && (Lxlist(_at_24))) {
return _14(_fn_0);
}
return _17.apply(_17, arguments);
return _20.apply(_20, arguments);
}
;
module.exports = _8
