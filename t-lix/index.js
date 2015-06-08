
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20;
function _22(_u_2) {
	var Larguments = arguments;
	var _u_2 = arguments ? arguments[0] : undefined;
	;
	function _24(s) {
		switch (s[2]) {
			case 0:
				s[3] = 1
			default:
		}
		return s[3]
	}
	;
	;
	return _24;
};
function _25(Lx) {
	var Larguments = arguments;
	var Lx = arguments ? arguments[0] : undefined;
	var Lx = Lx;
	var _0, _1, _2, _3, _4;
	function _27(s) {
		switch (s[2]) {
			case 0:
				s[2] = 1;
				lix(s, L__sub__(Lx, 1));
			case 1:
				_0 = s[3];
			case 2:
				s[2] = 3;
				lix(s, Lfib(_0));
			case 3:
				_1 = s[3];
			case 4:
				s[2] = 5;
				lix(s, L__sub__(Lx, 2));
			case 5:
				_2 = s[3];
			case 6:
				s[2] = 7;
				lix(s, Lfib(_2));
			case 7:
				_3 = s[3];
			case 8:
				s[2] = 9;
				lix(s, L__add__(_1, _3));
			case 9:
				_4 = s[3]
			default:
		}
		return s[3]
	}
	;
	;
	return _27;
};
function _28() {
	var Larguments = arguments;
	;
	;
	function _30(s) {
		switch (s[2]) {
			case 0:
				s[3] = "zero args"
			default:
		}
		return s[3]
	}
	;
	;
	return _30;
};
function _31() {
	var Larguments = arguments;
	;
	;
	function _33(s) {
		switch (s[2]) {
			case 0:
				s[3] = "error"
			default:
		}
		return s[3]
	}
	;
	;
	return _33;
};
function _21(s) {
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Ltrap(Lprint));
		case 5:
			s[2] = 6;
			lix(s, Lcall(Lfib, 0));
		case 6:
			_5 = s[3];
		case 7:
			s[2] = 8;
			lix(s, Lprint(_5));
		case 8:
			_6 = s[3];
		case 9:
			s[2] = 10;
			lix(s, Lcall(Lfib, 1));
		case 10:
			_7 = s[3];
		case 11:
			s[2] = 12;
			lix(s, Lprint(_7));
		case 12:
			_8 = s[3];
		case 13:
			s[2] = 14;
			lix(s, Lcall(Lfib, 2));
		case 14:
			_9 = s[3];
		case 15:
			s[2] = 16;
			lix(s, Lprint(_9));
		case 16:
			_10 = s[3];
		case 17:
			s[2] = 18;
			lix(s, Lcall(Lfib, 3));
		case 18:
			_11 = s[3];
		case 19:
			s[2] = 20;
			lix(s, Lprint(_11));
		case 20:
			_12 = s[3];
		case 21:
			s[2] = 22;
			lix(s, Lcall(Lfib, 4));
		case 22:
			_13 = s[3];
		case 23:
			s[2] = 24;
			lix(s, Lprint(_13));
		case 24:
			_14 = s[3];
		case 25:
			s[2] = 26;
			lix(s, Lcall(Lfib, -1));
		case 26:
			_15 = s[3];
		case 27:
			s[2] = 28;
			lix(s, Lprint(_15));
		case 28:
			_16 = s[3];
		case 29:
			s[2] = 30;
			lix(s, Lcall(Lfib, "good"));
		case 30:
			_17 = s[3];
		case 31:
			s[2] = 32;
			lix(s, Lprint(_17));
		case 32:
			_18 = s[3];
		case 33:
			s[2] = 34;
			lix(s, Lcall(Lfib));
		case 34:
			_19 = s[3];
		case 35:
			s[2] = 36;
			lix(s, Lprint(_19));
		case 36:
			_20 = s[3]
		default:
	}
	return s[3]
}
;
function Lfib(_fn_0) {
	if (arguments.length == 1 && ((arguments[0] === 0) || (arguments[0] === 1))) {
		return _22(_fn_0);
	}
	if (arguments.length == 1 && (arguments[0] >= 2)) {
		return _25(_fn_0);
	}
	if (arguments.length == 0) {
		return _28();
	}
	return _31.apply(_31, arguments);
}
;
module.exports = _21
