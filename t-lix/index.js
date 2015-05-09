
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _2, Lobj, _1, Lmethod, _3;
function _4(s) {
	var Lraise = raise(s);
	switch (s[2]) {
		case 0:
			_2 = (function (_5, _6) {
				if (_5 == undefined || _5 == null ) {
					return function () {
						return _5;
					}
				}
				if (typeof _5.hi === 'function') {
					arguments = Array.prototype.slice.call(arguments, 0, arguments.length);
					return _5.hi.apply(_5, arguments);
				} else {
					if (arguments.length > 1) {
						return function () {
							_5.hi = _6;
							return _5;
						}
					}
					return function () {
						return _5.hi;
					}
				}});
		case 1:
			s[3] = Lobj = {
				hi: (function () {
					var Larguments = arguments
					var _0;
				function _9(s) {
					var Lraise = raise(s);
					switch (s[2]) {
						case 0:
							s[2] = 1;
							lix(s, Lprint('hi'));
						case 1:
							_0 = s[3]
						default:
					}
					return s[3]
				}
				;
				return _9;
				})
			};
		case 2:
			s[2] = 3;
			lix(s, L__add__('h', 'i'));
		case 3:
			_1 = s[3];
		case 4:
			s[3] = Lmethod = _1;
		case 5:
			s[2] = 6;
			lix(s, _2(Lobj));
		case 6:
			_3 = s[3]
		default:
	}
	return s[3]
}
;
module.exports = _4
