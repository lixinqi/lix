
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var _0, _1, _2, _3;
function _5(_u_10) {
	var Larguments = arguments;
	var _u_10 = arguments ? arguments[0] : undefined;
	;
	function _7(s) {
		switch (s[2]) {
			case 0:
				s[3] = 1
			default:
		}
		return s[3]
	}
	;
	;
	return _7;
};
function _4(s) {
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Ltrap(Lprint));
		case 2:
			s[2] = 3;
			lix(s, Lcall(Lfib, 1));
		case 3:
			_0 = s[3];
		case 4:
			s[2] = 5;
			lix(s, Lprint(_0));
		case 5:
			_1 = s[3];
		case 6:
			s[2] = 7;
			lix(s, Lcall(Lfib, 1));
		case 7:
			_2 = s[3];
		case 8:
			s[2] = 9;
			lix(s, Lprint(_2));
		case 9:
			_3 = s[3]
		default:
	}
	return s[3]
}
;
function Lfib(_fn_0) {
	if (arguments.length == 1 && ((((arguments[0] === 0) || (arguments[0] === 1)) || (arguments[0] === 2)) && (((arguments[0] === 1) || (arguments[0] === 2)) || (arguments[0] === 3)))) {
		return _5(_fn_0);
	}
}
;
module.exports = _4
