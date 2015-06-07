
require('/lib/lix/s_builtin_.js');
require.lixCache = {};
require.lixLoadingCache = {};
var Lrequire = _require(require);
var L__dirname = __dirname;
var L__filename = __filename;
var Lf, _0, _1;
function _3(_u_0) {
	var Larguments = arguments;
	var _u_0 = arguments[0];
	var Lfst = _u_0["first"];
	var Lsnd = _u_0.second;
	var _u_1 = _u_0[9527];
	var Lx = _u_1[0];
	var Ly = _u_1[1];
	var Lz = _u_1[2];
	;
	function _5(s) {
		switch (s[2]) {
			case 0:
				s[3] = [Lfst, Lsnd, Lx, Ly, Lz]
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
			lix(s, Lf({
				first: 0,
				second: 10,
				9527: ["fine", "good", "nice"]
			}));
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
