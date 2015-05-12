
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, Lfib, _9, _10, _11;
function _12(s) {
	var Lraise = raise(s);
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Lcall(Ltrap, Lprint));
		case 1:
			_0 = s[3];
		case 2:
			s[3] = Lfib = (function (Lx) {
				var Larguments = arguments
				var _1, _2, _3, _4, _5, _6, _7, _8;
			function _15(s) {
				var Lraise = raise(s);
				switch (s[2]) {
					case 0:
						_1 = false;
					case 1:
						s[3] = 1
					default:
				}
				return s[3]
			}
			;
			function _16(s) {
				var Lraise = raise(s);
				switch (s[2]) {
					case 0:
						_1 = false;
					case 1:
						s[3] = 1
					default:
				}
				return s[3]
			}
			;
			function _17(s) {
				var Lraise = raise(s);
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, L__sub__(Lx, 1));
					case 1:
						_4 = s[3];
					case 2:
						s[2] = 3;
						lix(s, Lfib(_4));
					case 3:
						_5 = s[3];
					case 4:
						s[2] = 5;
						lix(s, L__sub__(Lx, 2));
					case 5:
						_6 = s[3];
					case 6:
						s[2] = 7;
						lix(s, Lfib(_6));
					case 7:
						_7 = s[3];
					case 8:
						s[2] = 9;
						lix(s, L__add__(_5, _7));
					case 9:
						_8 = s[3]
					default:
				}
				return s[3]
			}
			;
			function _14(s) {
				var Lraise = raise(s);
				switch (s[2]) {
					case 0:
						_1 = true;
					case 1:
						s[2] = 2;
						lix(s, L__le__(Lx, 0));
					case 2:
						_2 = s[3];
					case 3:
						if ((_1 && _2)) {
							s[2] = 4;
							lix(s, _15)
						};
					case 4:
						s[2] = 5;
						lix(s, L__eq__(Lx, 1));
					case 5:
						_3 = s[3];
					case 6:
						if ((_1 && _3)) {
							s[2] = 7;
							lix(s, _16)
						};
					case 7:
						if (_1) {
							s[2] = 8;
							lix(s, _17)
						}
					default:
				}
				return s[3]
			}
			;
			return _14;
			});
		case 3:
			s[2] = 4;
			lix(s, Lfib(30));
		case 4:
			_9 = s[3];
		case 5:
			s[2] = 6;
			lix(s, Lprint(_9));
		case 6:
			_10 = s[3];
		case 7:
			s[2] = 8;
			lix(s, Lprint('end'));
		case 8:
			_11 = s[3]
		default:
	}
	return s[3]
}
;
module.exports = _12
