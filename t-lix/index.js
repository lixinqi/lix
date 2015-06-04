
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Linc, _1, _2, Linc_inc_print, _3;
function _5(Lx) {
	var Larguments = arguments;
	;
	var _0;
	function _7(s) {
		switch (s[2]) {
			case 0:
				s[2] = 1;
				lix(s, L__add__(Lx, 1));
			case 1:
				_0 = s[3]
			default:
		}
		return s[3]
	}
	;
	return _7;
};
function _4(s) {
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Ltrap(Lprint));
		case 1:
			s[3] = Linc = _5;
		case 2:
			s[2] = 3;
			lix(s, L__compose__(Linc, Linc));
		case 3:
			_1 = s[3];
		case 4:
			s[2] = 5;
			lix(s, L__compose__(_1, Lprint));
		case 5:
			_2 = s[3];
		case 6:
			s[3] = Linc_inc_print = _2;
		case 7:
			s[2] = 8;
			lix(s, Linc_inc_print(3));
		case 8:
			_3 = s[3]
		default:
	}
	return s[3]
}
;
module.exports = _4
