
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Lf, _0, _1;
function _3(_u_2) {
	var Larguments = arguments;
	var _u_2 = arguments[0];
	var Lx = _u_2[0];
	var Lxs = Array.prototype.slice.call(_u_2, 1, _u_2.length - 2);
	var Ly = _u_2[_u_2.length - 2];
	var Lz = _u_2[_u_2.length - 1];
	;
	function _5(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lxs, Ly, Lz]
			default:
		}
		return s[3]
	}
	;
	return _5;
};
function _2(s) {
	switch (s[2]) {
		case 0:
			s[2] = 1;
			lix(s, Ltrap(Lprint));
		case 1:
			s[3] = Lf = _3;
		case 2:
			s[2] = 3;
			lix(s, Lf([3, 9527, 520, 3, 4]));
		case 3:
			_0 = s[3];
		case 4:
			s[2] = 5;
			lix(s, Lprint(_0));
		case 5:
			_1 = s[3]
		default:
	}
	return s[3]
}
;
module.exports = _2
