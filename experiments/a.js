
require('/lib/lix/__builtin__.js');
var _ret, _2;
function _4(_cb, _step, _cont, _ret) {
	switch (_step) {
		case 0:
			_ret = Lcall(Lcc, (function (Lbreak) {
				var Larguments = arguments;
				var _ret, _1;
				function _6(_cb, _step, _cont, _ret) {
					switch (_step) {
						case 0:
							_ret = Ltimeout(0, (function () {
								var Larguments = arguments;
								var _ret, _0;
								function _8(_cb, _step, _cont, _ret) {
									switch (_step) {
										case 0:
											_ret = Lcall(Lbreak)(function (_ret) {
												return _8(_cb, 1, true, _ret);
											}, 0);
										case 1:
											_0 = _ret
										default:
									}
									if (_cont) {
										_cb(_ret)
									} else {
										return _ret
									}
								};
								return _8;
							}))(function (_ret) {
								return _6(_cb, 1, true, _ret);
							}, 0);
						case 1:
							_1 = _ret
						default:
					}
					if (_cont) {
						_cb(_ret)
					} else {
						return _ret
					}
				};
				return _6;
			}))(function (_ret) {
				return _4(_cb, 1, true, _ret);
			}, 0);
		case 1:
			_2 = _ret;
		case 2:
			_ret = {
				hi: (function () {
					var Larguments = arguments;
					var _ret, _3;
					function _10(_cb, _step, _cont, _ret) {
						switch (_step) {
							case 0:
								_ret = Lprint('hi, I\'am OK')(function (_ret) {
									return _10(_cb, 1, true, _ret);
								}, 0);
							case 1:
								_3 = _ret
							default:
						}
						if (_cont) {
							_cb(_ret)
						} else {
							return _ret
						}
					};
					return _10;
				}),
				name: 'lixinqi',
				getName: (function (Lself) {
					var Larguments = arguments;
					;
					function _12(_cb, _step, _cont, _ret) {
						switch (_step) {
							case 0:
								_ret = Lself.name
							default:
						}
						if (_cont) {
							_cb(_ret)
						} else {
							return _ret
						}
					};
					return _12;
				})
			}
		default:
	}
	if (_cont) {
		_cb(_ret)
	} else {
		return _ret
	}
};
module.exports = function () {
	return _4
}

