
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
function _11(Lx, Ly) {
	var Larguments = arguments;
	var Lx = arguments ? arguments[0] : undefined;
	var Lx = Lx;
	var Ly = arguments ? arguments[1] : undefined;
	var Ly = Ly;
	;
	function _13(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lx, Ly]
			default:
		}
		return s[3]
	}
	;
	;
	return _13;
};
function _14(_u_1) {
	var Larguments = arguments;
	var _u_1 = arguments ? arguments[0] : undefined;
	var Lx = _u_1 ? _u_1[0] : undefined;
	var Lx = Lx;
	var Ly = _u_1 ? _u_1[1] : undefined;
	var Ly = Ly;
	;
	function _16(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lx, Ly]
			default:
		}
		return s[3]
	}
	;
	;
	return _16;
};
function _17(_u_3) {
	var Larguments = arguments;
	var _u_3 = arguments ? arguments[0] : undefined;
	var Lx = _u_3.fst;
	var Lx = Lx;
	var Ly = _u_3.snd;
	var Ly = Ly;
	;
	function _19(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lx, Ly]
			default:
		}
		return s[3]
	}
	;
	;
	return _19;
};
function _20(_u_6) {
	var Larguments = arguments;
	var _u_6 = arguments ? arguments[0] : undefined;
	var _u_5 = _u_6.data;
	var Lx = _u_5 ? _u_5[0] : undefined;
	var Lx = Lx;
	var Ly = _u_5 ? _u_5[1] : undefined;
	var Ly = Ly;
	;
	function _22(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lx, Ly]
			default:
		}
		return s[3]
	}
	;
	;
	return _22;
};
function _23(Lx, Ly) {
	var Larguments = arguments;
	var Lx = Lx;
	var Ly = Ly;
	var Lz = arguments ? arguments[arguments.length - 1] : undefined;
	var Lz = Lz;
	;
	function _25(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lx, Ly, Lz]
			default:
		}
		return s[3]
	}
	;
	;
	return _25;
};
function _10(s) {
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Ltrap(Lprint));
		case 4:
			s[2] = 5;
			lix(s, Lcall(Lpair, 3, 4));
		case 5:
			_0 = s[3];
		case 6:
			s[2] = 7;
			lix(s, Lprint(_0));
		case 7:
			_1 = s[3];
		case 8:
			s[2] = 9;
			lix(s, Lcall(Lpair, [3, 4]));
		case 9:
			_2 = s[3];
		case 10:
			s[2] = 11;
			lix(s, Lprint(_2));
		case 11:
			_3 = s[3];
		case 12:
			s[2] = 13;
			lix(s, Lcall(Lpair, {
				fst: 3,
				snd: 4
			}));
		case 13:
			_4 = s[3];
		case 14:
			s[2] = 15;
			lix(s, Lprint(_4));
		case 15:
			_5 = s[3];
		case 17:
			s[2] = 18;
			lix(s, Lcall(Lf, {
				data: [3, 4]
			}));
		case 18:
			_6 = s[3];
		case 19:
			s[2] = 20;
			lix(s, Lprint(_6));
		case 20:
			_7 = s[3];
		case 22:
			s[2] = 23;
			lix(s, Lcall(Lp, 3, 4, 5));
		case 23:
			_8 = s[3];
		case 24:
			s[2] = 25;
			lix(s, Lprint(_8));
		case 25:
			_9 = s[3]
		default:
	}
	return s[3]
}
;
function Lpair(_fn_0, _fn_1) {
	var _at_26, _at_27;
	if (arguments.length == 2 && ((_at_26 = arguments[0]) || 1) && (typeof _at_26 == 'number') && ((_at_27 = arguments[1]) || 1) && (typeof _at_27 == 'number')) {
		return _11(_fn_0, _fn_1);
	}
	var _at_28, _at_29, _at_30;
	if (arguments.length == 1 && ((_at_28 = arguments[0]) || 1) && (Array.isArray(_at_28) && _at_28.length == 2 && ((_at_29 = _at_28[0]) || 1) && (typeof _at_29 == 'number') && ((_at_30 = _at_28[1]) || 1) && (typeof _at_30 == 'number'))) {
		return _14(_fn_0);
	}
	var _at_31, _at_32, _at_33;
	if (arguments.length == 1 && ((_at_31 = arguments[0]) || 1) && (_at_31 && (((_at_32 = _at_31.fst) || 1) && (typeof _at_32 == 'number')) && (((_at_33 = _at_31.snd) || 1) && (typeof _at_33 == 'number')))) {
		return _17(_fn_0);
	}
}

function Lf(_fn_0) {
	var _at_34, _at_35, _at_36, _at_37;
	if (arguments.length == 1 && ((_at_34 = arguments[0]) || 1) && (_at_34 && (((_at_35 = _at_34.data) || 1) && (Array.isArray(_at_35) && _at_35.length == 2 && ((_at_36 = _at_35[0]) || 1) && (typeof _at_36 == 'number') && ((_at_37 = _at_35[1]) || 1) && (typeof _at_37 == 'number'))))) {
		return _20(_fn_0);
	}
}

function Lp(_fn_0, _fn_1) {
	var _at_38, _at_39, _at_40;
	if (arguments.length >= 3 && ((_at_38 = arguments[0]) || 1) && (typeof _at_38 == 'number') && ((_at_39 = arguments[1]) || 1) && (typeof _at_39 == 'number') && ((_at_40 = arguments[arguments.length - 1]) || 1) && (typeof _at_40 == 'number')) {
		return _23.apply(_23, arguments);
	}
}
;
module.exports = _10
