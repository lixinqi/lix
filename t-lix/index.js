
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _8, _9;
function _10(s) {
	var Lraise = raise(s);
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Lcall((function () {
				var Larguments = arguments
				var _1, _4, _7;
			function _12(s) {
				var Lraise = raise(s);
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, Lcall(Ldefer, (function () {
							var Larguments = arguments
							var _0;
						function _14(s) {
							var Lraise = raise(s);
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lprint('in defer'));
								case 1:
									_0 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _14;
						})));
					case 1:
						_1 = s[3];
					case 2:
						s[2] = 3;
						lix(s, Lcall(Ltrap, (function (Le) {
							var Larguments = arguments
							var _2, _3;
						function _16(s) {
							var Lraise = raise(s);
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lprint('in trap'));
								case 1:
									_2 = s[3];
								case 2:
									s[2] = 3;
									lix(s, Lprint(Le));
								case 3:
									_3 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _16;
						})));
					case 3:
						_4 = s[3];
					case 4:
						s[2] = 5;
						lix(s, Lcall(Lcc, (function (Lbrk) {
							var Larguments = arguments
							var _5, _6;
						function _18(s) {
							var Lraise = raise(s);
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lcall('good'));
								case 1:
									_5 = s[3];
								case 2:
									s[2] = 3;
									lix(s, Lcall(Lbrk));
								case 3:
									_6 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _18;
						})));
					case 5:
						_7 = s[3]
					default:
				}
				return s[3]
			}
			;
			return _12;
			})));
		case 1:
			_8 = s[3];
		case 2:
			s[2] = 3;
			lix(s, Lprint('end'));
		case 3:
			_9 = s[3]
		default:
	}
	return s[3]
}
;
module.exports = _10
