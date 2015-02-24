
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
	thisDefer(defer_stack)(function(){return;}, 0);
}
var Lsubclass, Lnew;
function _9(_cb, _step, _cont, _ret, cb_defer) {
	switch (_step) {
		case 0:
			_ret = Lsubclass = (function (Lbase, Lconfig) {
				var Larguments = arguments, defer_stack = [];
				var _ret, _0, Lclass, _1, _2, _3;
				function _12(_cb, _step, _cont, _ret, cb_defer) {
					switch (_step) {
						case 0:
							_1 = false;
						case 1:
							_ret = Lconfig(Lclass)(function (_ret) {
								return _12(_cb, 2, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 2:
							_3 = _ret;
						case 3:
							_ret = _2 = _3
						default:
					}
					thisDefer(defer_stack, false)(function () {
						_cb(_ret);
					}, 0);
					if (_cont) {
						_cb(_ret);
					} else {
						return _ret;
					}
				};
				function _11(_cb, _step, _cont, _ret, cb_defer) {
					switch (_step) {
						case 0:
							_ret = LObject.Create(Lbase)(function (_ret) {
								return _11(_cb, 1, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 1:
							_0 = _ret;
						case 2:
							_ret = Lclass = _0;
						case 3:
							_ret = true;
						case 4:
							_1 = _ret;
						case 5:
							_ret = null;
						case 6:
							_2 = _ret;
						case 7:
							if ((_1 && Lconfig)) {
								_12(function (_ret) {
									return _11(_cb, 8, true, _ret, function () {
										thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
										cb_defer && cb_defer();
									}
									);
								}, 0, false, undefined, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								)
							};
						case 8:
							_ret = Lclass
						default:
					}
					thisDefer(defer_stack, false)(function () {
						_cb(_ret);
					}, 0);
					if (_cont) {
						_cb(_ret);
					} else {
						return _ret;
					}
				};
				return _11;
			});
		case 1:
			_ret = Lnew = (function (Lclass) {
				var Larguments = arguments, defer_stack = [];
				var _ret, _4, Lobj, _5, Largs, _6, _7, _8;
				function _15(_cb, _step, _cont, _ret, cb_defer) {
					switch (_step) {
						case 0:
							_6 = false;
						case 1:
							_ret = Lapply(Lclass.__init__, Largs)(function (_ret) {
								return _15(_cb, 2, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 2:
							_8 = _ret;
						case 3:
							_ret = _7 = _8
						default:
					}
					thisDefer(defer_stack, false)(function () {
						_cb(_ret);
					}, 0);
					if (_cont) {
						_cb(_ret);
					} else {
						return _ret;
					}
				};
				function _14(_cb, _step, _cont, _ret, cb_defer) {
					switch (_step) {
						case 0:
							_ret = LObject.Create(Lclass)(function (_ret) {
								return _14(_cb, 1, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 1:
							_4 = _ret;
						case 2:
							_ret = Lobj = _4;
						case 3:
							_ret = LArray.Slice(Larguments)(function (_ret) {
								return _14(_cb, 4, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 4:
							_5 = _ret;
						case 5:
							_ret = Largs = _5;
						case 6:
							_ret = Largs[0] = Lobj;
						case 7:
							_ret = true;
						case 8:
							_6 = _ret;
						case 9:
							_ret = null;
						case 10:
							_7 = _ret;
						case 11:
							if ((_6 && Lclass.__init__)) {
								_15(function (_ret) {
									return _14(_cb, 12, true, _ret, function () {
										thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
										cb_defer && cb_defer();
									}
									);
								}, 0, false, undefined, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								)
							};
						case 12:
							_ret = Lobj
						default:
					}
					thisDefer(defer_stack, false)(function () {
						_cb(_ret);
					}, 0);
					if (_cont) {
						_cb(_ret);
					} else {
						return _ret;
					}
				};
				return _14;
			});
		case 2:
			_ret = {
				subclass: Lsubclass,
				new: Lnew,
				instanceof: Linstanceof,
				is: Lis
			}
		default:
	}
	thisDefer(defer_stack, false)(function () {
		_cb(_ret);
	}, 0);
	if (_cont) {
		_cb(_ret);
	} else {
		return _ret;
	}
};
module.exports = _9
