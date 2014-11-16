
require('/lib/lix/__builtin__.js');
var _ret, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32;
function _33(_cb, _step, _cont, _ret) {
switch (_step) {
case 0:
_ret = Lprint(LMath.E)(function (_ret) {
return _33(_cb, 1, true, _ret);
}, 0);
case 1:
_0 = _ret;
case 2:
_ret = Lprint(LMath.LN10)(function (_ret) {
return _33(_cb, 3, true, _ret);
}, 0);
case 3:
_1 = _ret;
case 4:
_ret = Lprint(LMath.LN2)(function (_ret) {
return _33(_cb, 5, true, _ret);
}, 0);
case 5:
_2 = _ret;
case 6:
_ret = Lprint(LMath.LOG2E)(function (_ret) {
return _33(_cb, 7, true, _ret);
}, 0);
case 7:
_3 = _ret;
case 8:
_ret = Lprint(LMath.LOG10E)(function (_ret) {
return _33(_cb, 9, true, _ret);
}, 0);
case 9:
_4 = _ret;
case 10:
_ret = Lprint(LMath.PI)(function (_ret) {
return _33(_cb, 11, true, _ret);
}, 0);
case 11:
_5 = _ret;
case 12:
_ret = Lprint(LMath.SQRT1_2)(function (_ret) {
return _33(_cb, 13, true, _ret);
}, 0);
case 13:
_6 = _ret;
case 14:
_ret = Lprint(LMath.SQRT2)(function (_ret) {
return _33(_cb, 15, true, _ret);
}, 0);
case 15:
_7 = _ret;
case 16:
_ret = LMath.Abs(-1)(function (_ret) {
return _33(_cb, 17, true, _ret);
}, 0);
case 17:
_8 = _ret;
case 18:
_ret = Lprint(_8)(function (_ret) {
return _33(_cb, 19, true, _ret);
}, 0);
case 19:
_9 = _ret;
case 20:
_ret = LMath.Exp(1)(function (_ret) {
return _33(_cb, 21, true, _ret);
}, 0);
case 21:
_10 = _ret;
case 22:
_ret = Lprint(_10)(function (_ret) {
return _33(_cb, 23, true, _ret);
}, 0);
case 23:
_11 = _ret;
case 24:
_ret = LMath.Log(2)(function (_ret) {
return _33(_cb, 25, true, _ret);
}, 0);
case 25:
_12 = _ret;
case 26:
_ret = Lprint(_12)(function (_ret) {
return _33(_cb, 27, true, _ret);
}, 0);
case 27:
_13 = _ret;
case 28:
_ret = LMath.Log(LMath.E)(function (_ret) {
return _33(_cb, 29, true, _ret);
}, 0);
case 29:
_14 = _ret;
case 30:
_ret = Lprint(_14)(function (_ret) {
return _33(_cb, 31, true, _ret);
}, 0);
case 31:
_15 = _ret;
case 32:
_ret = LMath.Exp(LMath.E)(function (_ret) {
return _33(_cb, 33, true, _ret);
}, 0);
case 33:
_16 = _ret;
case 34:
_ret = Lprint(_16)(function (_ret) {
return _33(_cb, 35, true, _ret);
}, 0);
case 35:
_17 = _ret;
case 36:
_ret = LMath.Max(1, 2)(function (_ret) {
return _33(_cb, 37, true, _ret);
}, 0);
case 37:
_18 = _ret;
case 38:
_ret = Lprint(_18)(function (_ret) {
return _33(_cb, 39, true, _ret);
}, 0);
case 39:
_19 = _ret;
case 40:
_ret = LMath.Min(1, 2)(function (_ret) {
return _33(_cb, 41, true, _ret);
}, 0);
case 41:
_20 = _ret;
case 42:
_ret = Lprint(_20)(function (_ret) {
return _33(_cb, 43, true, _ret);
}, 0);
case 43:
_21 = _ret;
case 44:
_ret = LMath.Max(1, 2, -1, 3, 4)(function (_ret) {
return _33(_cb, 45, true, _ret);
}, 0);
case 45:
_22 = _ret;
case 46:
_ret = Lprint(_22)(function (_ret) {
return _33(_cb, 47, true, _ret);
}, 0);
case 47:
_23 = _ret;
case 48:
_ret = LMath.Min(1, 2, -1, 3, 4)(function (_ret) {
return _33(_cb, 49, true, _ret);
}, 0);
case 49:
_24 = _ret;
case 50:
_ret = Lprint(_24)(function (_ret) {
return _33(_cb, 51, true, _ret);
}, 0);
case 51:
_25 = _ret;
case 52:
_ret = Lcall(LMath.Max, 1, 2, -1, 3, 4)(function (_ret) {
return _33(_cb, 53, true, _ret);
}, 0);
case 53:
_26 = _ret;
case 54:
_ret = Lprint(_26)(function (_ret) {
return _33(_cb, 55, true, _ret);
}, 0);
case 55:
_27 = _ret;
case 56:
_ret = Lcall(LMath.Min, 1, 2, -1, 3, 4)(function (_ret) {
return _33(_cb, 57, true, _ret);
}, 0);
case 57:
_28 = _ret;
case 58:
_ret = Lprint(_28)(function (_ret) {
return _33(_cb, 59, true, _ret);
}, 0);
case 59:
_29 = _ret;
case 60:
_ret = LMath.Pow(2, 3)(function (_ret) {
return _33(_cb, 61, true, _ret);
}, 0);
case 61:
_30 = _ret;
case 62:
_ret = Lprint(_30)(function (_ret) {
return _33(_cb, 63, true, _ret);
}, 0);
case 63:
_31 = _ret;
case 64:
_ret = Lprint('end')(function (_ret) {
return _33(_cb, 65, true, _ret);
}, 0);
case 65:
_32 = _ret
default:
}
if (_cont) {
_cb(_ret)
} else {
return _ret
}
};
try {
_33(function(x){return x;}, 0)
} catch (e) {
}