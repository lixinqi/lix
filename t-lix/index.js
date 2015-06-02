
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Lmax, _2, _3, Lf, _6, _7;
function _8(s) {
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Ltrap(Lprint));
		case 1:
			s[3] = Lmax = (function (_u_0) {
				var Larguments = arguments;
				var La = _u_0[0];
				var Lb = _u_0[1];
				var _0, _1;
				function _11(s) {
					switch (s[2]) {
						case 0:
							_0 = false;
						case 1:
							s[3] = La
						default:
					}
					return s[3]
				}
				;
				function _12(s) {
					switch (s[2]) {
						case 0:
							s[3] = Lb
						default:
					}
					return s[3]
				}
				;
				function _10(s) {
					switch (s[2]) {
						case 0:
							_0 = true;
						case 1:
							s[2] = 2;
							lix(s, L__gt__(La, Lb));
						case 2:
							_1 = s[3];
						case 3:
							if ((_0 && _1)) {
								s[2] = 4;
								lix(s, _11)
							};
						case 4:
							if (_0) {
								s[2] = 5;
								lix(s, _12)
							}
						default:
					}
					return s[3]
				}
				;
				return _10;
			});
		case 2:
			s[2] = 3;
			lix(s, Lmax([3, 4]));
		case 3:
			_2 = s[3];
		case 4:
			s[2] = 5;
			lix(s, Lprint(_2));
		case 5:
			_3 = s[3];
		case 6:
			s[3] = Lf = (function (_u_3) {
				var Larguments = arguments;
				var Lx = _u_3[0];
				var _u_2 = _u_3[1];
				var Ly = _u_2[0];
				var _u_1 = _u_2[1];
				var Lz = _u_1[0];
				var _4, _5;
				function _14(s) {
					switch (s[2]) {
						case 0:
							s[2] = 1;
							lix(s, L__add__(Lx, Ly));
						case 1:
							_4 = s[3];
						case 2:
							s[2] = 3;
							lix(s, L__add__(_4, Lz));
						case 3:
							_5 = s[3]
						default:
					}
					return s[3]
				}
				;
				return _14;
			});
		case 7:
			s[2] = 8;
			lix(s, Lcall(Lf, [1, [2, [3]]]));
		case 8:
			_6 = s[3];
		case 9:
			s[2] = 10;
			lix(s, Lprint(_6));
		case 10:
			_7 = s[3]
		default:
	}
	return s[3]
}
;
module.exports = _8
