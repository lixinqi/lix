
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, Linc, _29, _30, Linc2, _31, _32, _33, _34, _35, _36, _39, _40, _41, _42, _43, _44, _45, _46, _48, _49, _50, _51, _52, _53, _54, _55, Ladd3, _56, _57, Lmul3, _58, _59, _60, _61, _62, _63, _64, _65, _66, Lseq, LseqSquare, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _82, _83, _84, _85, _86, Lend, _87, Litt, _88, _89, Li, _90, _91, _92, _93, Lfilter, _100, _101, _102, _103, _104;
function _118(Lx) {
var Larguments = arguments;
var Lx = arguments ? arguments[0] : undefined;
var Lx = Lx;
var _81;
function _120(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(Lx, Lx));
case 1:
_81 = s[3]
default:
}
return s[3]
}
;
;
return _120;
};
function _121(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lprint(Li));
case 1:
_92 = s[3];
case 2:
s[2] = 3;
lix(s, Lcall(Litt));
case 3:
_89 = s[3];
case 4:
s[2] = 5;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Li = _x
}
} else {
return function () {
return Li
}
}
})(_89));
case 5:
_90 = s[3];
case 6:
s[2] = 7;
lix(s, L__ne__(_90, Lend));
case 7:
_91 = s[3]
default:
}
return s[3]
}
;
function _105(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Ltrap(Lprint));
case 1:
s[2] = 2;
lix(s, Lrequire("until"));
case 2:
_0 = s[3];
case 3:
s[2] = 4;
lix(s, _0(LN, L__gt__, 10));
case 4:
_1 = s[3];
case 5:
s[2] = 6;
lix(s, Lrequire("map"));
case 6:
_2 = s[3];
case 7:
s[2] = 8;
lix(s, _2(_1, (function (Lx) {
var Larguments = arguments;
;
var _3;
function _107(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(Lx, Lx));
case 1:
_3 = s[3]
default:
}
return s[3]
}
return _107;
})));
case 8:
_4 = s[3];
case 9:
s[2] = 10;
lix(s, Lcall(_4, Lprint));
case 10:
_5 = s[3];
case 11:
s[2] = 12;
lix(s, Lcall(Lprint, '============'));
case 12:
_6 = s[3];
case 13:
s[2] = 14;
lix(s, Lrequire("until"));
case 14:
_7 = s[3];
case 15:
s[2] = 16;
lix(s, _7(LN, L__gt__, 10));
case 16:
_8 = s[3];
case 17:
s[2] = 18;
lix(s, Lrequire("filter"));
case 18:
_9 = s[3];
case 19:
s[2] = 20;
lix(s, _9(_8, L__mod__, 2));
case 20:
_10 = s[3];
case 21:
s[2] = 22;
lix(s, Lcall(_10, Lprint));
case 22:
_11 = s[3];
case 23:
s[2] = 24;
lix(s, Lcall(Lprint, '============'));
case 24:
_12 = s[3];
case 25:
s[2] = 26;
lix(s, Lrequire("naturalNumbers"));
case 26:
_13 = s[3];
case 27:
s[2] = 28;
lix(s, Lrequire("until"));
case 28:
_14 = s[3];
case 29:
s[2] = 30;
lix(s, _14(_13, L__gt__, 5));
case 30:
_15 = s[3];
case 31:
s[2] = 32;
lix(s, Lcall(_15, Lprint));
case 32:
_16 = s[3];
case 33:
s[2] = 34;
lix(s, Lcall(Lprint, '============'));
case 34:
_17 = s[3];
case 35:
s[2] = 36;
lix(s, Lrequire("array2xlist"));
case 36:
_18 = s[3];
case 37:
s[2] = 38;
lix(s, _18([3, 2, 1, 4, 5]));
case 38:
_19 = s[3];
case 39:
s[2] = 40;
lix(s, Luntil(_19, L__gt__, 4));
case 40:
_20 = s[3];
case 41:
s[2] = 42;
lix(s, Lcall(_20, Lprint));
case 42:
_21 = s[3];
case 43:
s[2] = 44;
lix(s, Lcall(Lprint, '============'));
case 44:
_22 = s[3];
case 45:
s[2] = 46;
lix(s, Lrequire("array2xlist"));
case 46:
_23 = s[3];
case 47:
s[2] = 48;
lix(s, _23([1, 2, 3]));
case 48:
_24 = s[3];
case 49:
s[2] = 50;
lix(s, Lcall(_24, Lprint));
case 50:
_25 = s[3];
case 51:
s[2] = 52;
lix(s, Lcall(Lprint, '============'));
case 52:
_26 = s[3];
case 53:
s[2] = 54;
lix(s, Lrequire("__"));
case 54:
_27 = s[3];
case 55:
s[2] = 56;
lix(s, _27(L__add__, 1));
case 56:
_28 = s[3];
case 57:
s[3] = Linc = _28;
case 58:
s[2] = 59;
lix(s, Lrequire("__compose__"));
case 59:
_29 = s[3];
case 60:
s[2] = 61;
lix(s, _29(Linc, Linc));
case 61:
_30 = s[3];
case 62:
s[2] = 63;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Linc2 = _x
}
} else {
return function () {
return Linc2
}
}
})(_30));
case 63:
_31 = s[3];
case 64:
s[2] = 65;
lix(s, Linc2(3));
case 65:
_32 = s[3];
case 66:
s[2] = 67;
lix(s, Lprint(_32));
case 67:
_33 = s[3];
case 68:
s[2] = 69;
lix(s, Lcall(Lprint, '============'));
case 69:
_34 = s[3];
case 70:
s[2] = 71;
lix(s, Lrequire("until"));
case 71:
_35 = s[3];
case 72:
s[2] = 73;
lix(s, _35(LN, L__gt__, 3));
case 73:
_36 = s[3];
case 74:
s[2] = 75;
lix(s, Lbind(_36, (function (Lx) {
var Larguments = arguments;
;
var _37, _38;
function _109(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lrequire("until"));
case 1:
_37 = s[3];
case 2:
s[2] = 3;
lix(s, _37(LN, L__gt__, 3));
case 3:
_38 = s[3]
default:
}
return s[3]
}
return _109;
})));
case 75:
_39 = s[3];
case 76:
s[2] = 77;
lix(s, Lcall(_39, Lprint));
case 77:
_40 = s[3];
case 78:
s[2] = 79;
lix(s, Lcall(Lprint, '============'));
case 79:
_41 = s[3];
case 80:
s[2] = 81;
lix(s, Lrequire("until"));
case 81:
_42 = s[3];
case 82:
s[2] = 83;
lix(s, _42(LN, L__gt__, 3));
case 83:
_43 = s[3];
case 84:
s[2] = 85;
lix(s, Lrequire("hook"));
case 85:
_44 = s[3];
case 86:
s[2] = 87;
lix(s, _44(_43, Lprint));
case 87:
_45 = s[3];
case 88:
s[2] = 89;
lix(s, Lrequire("map"));
case 89:
_46 = s[3];
case 90:
s[2] = 91;
lix(s, _46(_45, (function (Lx) {
var Larguments = arguments;
;
var _47;
function _111(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(Lx, Lx));
case 1:
_47 = s[3]
default:
}
return s[3]
}
return _111;
})));
case 91:
_48 = s[3];
case 92:
s[2] = 93;
lix(s, Lrequire("hook"));
case 93:
_49 = s[3];
case 94:
s[2] = 95;
lix(s, _49(_48, Lprint));
case 95:
_50 = s[3];
case 96:
s[2] = 97;
lix(s, Lrequire("exec"));
case 97:
_51 = s[3];
case 98:
s[2] = 99;
lix(s, _51(_50));
case 99:
_52 = s[3];
case 100:
s[2] = 101;
lix(s, Lcall(Lprint, '============'));
case 101:
_53 = s[3];
case 102:
s[2] = 103;
lix(s, Lrequire("__"));
case 103:
_54 = s[3];
case 104:
s[2] = 105;
lix(s, _54(L__add__, 3));
case 105:
_55 = s[3];
case 106:
s[3] = Ladd3 = _55;
case 107:
s[2] = 108;
lix(s, Lrequire("__"));
case 108:
_56 = s[3];
case 109:
s[2] = 110;
lix(s, _56(L__mul__, 3));
case 110:
_57 = s[3];
case 111:
s[3] = Lmul3 = _57;
case 112:
s[2] = 113;
lix(s, Lrequire("__compose__"));
case 113:
_58 = s[3];
case 114:
s[2] = 115;
lix(s, _58(Ladd3, Lmul3));
case 115:
_59 = s[3];
case 116:
s[2] = 117;
lix(s, _59(3));
case 117:
_60 = s[3];
case 118:
s[2] = 119;
lix(s, Lprint(_60));
case 119:
_61 = s[3];
case 120:
s[2] = 121;
lix(s, Lrequire("__rcompose__"));
case 121:
_62 = s[3];
case 122:
s[2] = 123;
lix(s, _62(Ladd3, Lmul3));
case 123:
_63 = s[3];
case 124:
s[2] = 125;
lix(s, _63(3));
case 125:
_64 = s[3];
case 126:
s[2] = 127;
lix(s, Lprint(_64));
case 127:
_65 = s[3];
case 128:
s[2] = 129;
lix(s, Lcall(Lprint, '============'));
case 129:
_66 = s[3];
case 130:
s[3] = Lseq = (function (Lx) {
var Larguments = arguments;
;
var _67;
function _113(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Luntil(LN, L__gt__, Lx));
case 1:
_67 = s[3]
default:
}
return s[3]
}
return _113;
});
case 131:
s[3] = LseqSquare = (function (Lx) {
var Larguments = arguments;
;
var _68, _70;
function _115(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Luntil(LN, L__gt__, Lx));
case 1:
_68 = s[3];
case 2:
s[2] = 3;
lix(s, Lmap(_68, (function (Ly) {
var Larguments = arguments;
;
var _69;
function _117(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, L__mul__(Ly, Ly));
case 1:
_69 = s[3]
default:
}
return s[3]
}
return _117;
})));
case 3:
_70 = s[3]
default:
}
return s[3]
}
return _115;
});
case 132:
s[2] = 133;
lix(s, Lrequire("__xcompose__"));
case 133:
_71 = s[3];
case 134:
s[2] = 135;
lix(s, _71(Lseq, LseqSquare));
case 135:
_72 = s[3];
case 136:
s[2] = 137;
lix(s, _72(2));
case 137:
_73 = s[3];
case 138:
s[2] = 139;
lix(s, Lcall(_73, Lprint));
case 139:
_74 = s[3];
case 140:
s[2] = 141;
lix(s, Lcall(Lprint, '---'));
case 141:
_75 = s[3];
case 142:
s[2] = 143;
lix(s, Lrequire("__rxcompose__"));
case 143:
_76 = s[3];
case 144:
s[2] = 145;
lix(s, _76(Lseq, LseqSquare));
case 145:
_77 = s[3];
case 146:
s[2] = 147;
lix(s, _77(2));
case 147:
_78 = s[3];
case 148:
s[2] = 149;
lix(s, Lcall(_78, Lprint));
case 149:
_79 = s[3];
case 150:
s[2] = 151;
lix(s, Lcall(Lprint, '============'));
case 151:
_80 = s[3];
case 153:
s[2] = 154;
lix(s, Lrequire("until"));
case 154:
_82 = s[3];
case 155:
s[2] = 156;
lix(s, _82(LN, L__gt__, 5));
case 156:
_83 = s[3];
case 157:
s[2] = 158;
lix(s, Lrequire("map"));
case 158:
_84 = s[3];
case 159:
s[2] = 160;
lix(s, _84(_83, Lsquare));
case 160:
_85 = s[3];
case 161:
s[2] = 162;
lix(s, Lrequire("xlist2generator"));
case 162:
_86 = s[3];
case 163:
s[2] = 164;
lix(s, _86(_85, (function (_x) {
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
case 164:
_87 = s[3];
case 165:
s[2] = 166;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Litt = _x
}
} else {
return function () {
return Litt
}
}
})(_87));
case 166:
_88 = s[3];
case 167:
s[2] = 168;
lix(s, Lcall(Litt));
case 168:
_89 = s[3];
case 169:
s[2] = 170;
lix(s, (function (_x) {
if (arguments.length) {
return function () {
return Li = _x
}
} else {
return function () {
return Li
}
}
})(_89));
case 170:
_90 = s[3];
case 171:
s[2] = 172;
lix(s, L__ne__(_90, Lend));
case 172:
_91 = s[3];
case 173:
while (_91) {
s[2] = 173;
lix(s, _121)
};
case 174:
s[2] = 175;
lix(s, Lcall(Lprint, '============'));
case 175:
_93 = s[3];
case 176:
s[3] = Lfilter = (function (Lxl) {
var Larguments = arguments;
;
var _94, _95, Lf;
function _123(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lrequire("MinorArgs2Fn"));
case 1:
_94 = s[3];
case 2:
s[2] = 3;
lix(s, _94(Larguments));
case 3:
_95 = s[3];
case 4:
s[3] = Lf = _95;
case 5:
s[3] = (function (Lappend) {
var Larguments = arguments;
;
var _99;
function _125(s) {
switch (s[2]) {
case 0:
s[2] = 1;
lix(s, Lcall(Lxl, (function (Lx) {
var Larguments = arguments;
;
var _96, _98, _97;
function _128(s) {
switch (s[2]) {
case 0:
_96 = false;
case 1:
s[2] = 2;
lix(s, Lappend(Lx));
case 2:
_97 = s[3]
default:
}
return s[3]
}
;
function _127(s) {
switch (s[2]) {
case 0:
_96 = true;
case 1:
s[2] = 2;
lix(s, Lf(Lx));
case 2:
_98 = s[3];
case 3:
if ((_96 && _98)) {
s[2] = 4;
lix(s, _128)
}
default:
}
return s[3]
}
return _127;
})));
case 1:
_99 = s[3]
default:
}
return s[3]
}
return _125;
})
default:
}
return s[3]
}
return _123;
});
case 177:
s[2] = 178;
lix(s, Lrequire("until"));
case 178:
_100 = s[3];
case 179:
s[2] = 180;
lix(s, _100(LN, L__gt__, 5));
case 180:
_101 = s[3];
case 181:
s[2] = 182;
lix(s, Lrequire("filter"));
case 182:
_102 = s[3];
case 183:
s[2] = 184;
lix(s, _102(_101, L__gt__, 2));
case 184:
_103 = s[3];
case 185:
s[2] = 186;
lix(s, Lcall(_103, Lprint));
case 186:
_104 = s[3]
default:
}
return s[3]
}
;
function Lsquare(_fn_0) {
var _at_129;
if (arguments.length == 1 && ((_at_129 = arguments[0]) || 1) && (typeof _at_129 == 'number')) {
return _118(_fn_0);
}
}
;
module.exports = _105
