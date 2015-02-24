
require('/lib/lix/__builtin__.js');
var defer_stack = [];
function chain_defer() {
	thisDefer(defer_stack)(function(){return;}, 0);
}
var Ltry, Lraise;
function _10(_cb, _step, _cont, _ret, cb_defer) {
	switch (_step) {
		case 0:
			_ret = Ltry = (function (LtryBlock, LcatchBlock) {
				var Larguments = arguments, defer_stack = [];
				var _ret, _0, LoldTrapFn, _6, _7;
				function _12(_cb, _step, _cont, _ret, cb_defer) {
					switch (_step) {
						case 0:
							_ret = Lcall(Ltrap)(function (_ret) {
								return _12(_cb, 1, true, _ret, function () {
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
							_ret = LoldTrapFn = _0;
						case 3:
							_ret = Lcall(Lcc, (function (Lbreak) {
								var Larguments = arguments, defer_stack = [];
								var _ret, _3, _4, _5;
								function _14(_cb, _step, _cont, _ret, cb_defer) {
									switch (_step) {
										case 0:
											_ret = Lcall(Ltrap, (function (Le) {
												var Larguments = arguments, defer_stack = [];
												var _ret, _1, _2;
												function _16(_cb, _step, _cont, _ret, cb_defer) {
													switch (_step) {
														case 0:
															_ret = Lcall(LcatchBlock, Le)(function (_ret) {
																return _16(_cb, 1, true, _ret, function () {
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
															_1 = _ret;
														case 2:
															_ret = Lcall(Lbreak)(function (_ret) {
																return _16(_cb, 3, true, _ret, function () {
																	thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
																	cb_defer && cb_defer();
																}
																);
															}, 0, false, undefined, function () {
																thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
																cb_defer && cb_defer();
															}
															);
														case 3:
															_2 = _ret
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
												return _16;
											}))(function (_ret) {
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
											_3 = _ret;
										case 2:
											_ret = Lcall(LtryBlock)(function (_ret) {
												return _14(_cb, 3, true, _ret, function () {
													thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
													cb_defer && cb_defer();
												}
												);
											}, 0, false, undefined, function () {
												thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
												cb_defer && cb_defer();
											}
											);
										case 3:
											_4 = _ret;
										case 4:
											_ret = Lcall(Lbreak)(function (_ret) {
												return _14(_cb, 5, true, _ret, function () {
													thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
													cb_defer && cb_defer();
												}
												);
											}, 0, false, undefined, function () {
												thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
												cb_defer && cb_defer();
											}
											);
										case 5:
											_5 = _ret
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
							}))(function (_ret) {
								return _12(_cb, 4, true, _ret, function () {
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
							_6 = _ret;
						case 5:
							_ret = Lcall(Ltrap, LoldTrapFn)(function (_ret) {
								return _12(_cb, 6, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 6:
							_7 = _ret
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
				return _12;
			});
		case 1:
			_ret = Lraise = (function (Le) {
				var Larguments = arguments, defer_stack = [];
				var _ret, _8, _9;
				function _18(_cb, _step, _cont, _ret, cb_defer) {
					switch (_step) {
						case 0:
							_ret = Lcall(Ltrap)(function (_ret) {
								return _18(_cb, 1, true, _ret, function () {
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
							_8 = _ret;
						case 2:
							_ret = Lcall(_8, Le)(function (_ret) {
								return _18(_cb, 3, true, _ret, function () {
									thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
									cb_defer && cb_defer();
								}
								);
							}, 0, false, undefined, function () {
								thisDefer(defer_stack, true)(function () {cb_defer && cb_defer();}, 0);
								cb_defer && cb_defer();
							}
							);
						case 3:
							_9 = _ret
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
				return _18;
			});
		case 2:
			_ret = {
				try: Ltry,
				raise: Lraise
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
module.exports = _10
