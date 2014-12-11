
require('/lib/lix/__builtin__.js');
var Lf;
function _1(_cb, _step, _cont, _ret) {
	switch (_step) {
		case 0:
			_ret = Lf = (function () {
				var Larguments = arguments;
				var _ret, _0;
				function _3(_cb, _step, _cont, _ret) {
					switch (_step) {
						case 0:
							_ret = Lprint('good')(function (_ret) {
								return _3(_cb, 1, true, _ret);
							}, 0);
						case 1:
							_0 = _ret;
						case 2:
							_ret = undefined
						default:
					}
					if (_cont) {
						_cb(_ret)
					} else {
						return _ret
					}
				};
				return _3;
			})
		default:
	}
	if (_cont) {
		_cb(_ret)
	} else {
		return _ret
	}
};
module.exports = _1
