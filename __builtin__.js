function identity(x) {
	return x;
}
(function () {


	function _LixCCException() {
		this.message = 'cc call exception';
	}

	var _lixCCException = new _LixCCException();
	this._lixCCException = _lixCCException;

	require.lixCache = {}
	require.lixLoadingCache = {}

	this._require = function (__require) {
		return function (name) {
			var path = name;
			try {
				path = __require.resolve(name);
			} catch (e) {
				console.log(e);
				return function () {
					return null;
				}
			}

			if (require.lixCache[path] === undefined) {
				if (require.lixLoadingCache[path]) {
					return function () {
						return undefined;
					}
				}
				require.lixLoadingCache[path] = true;
				var f = __require(name);
				return function (cb) {
					require.lixCache[path] = f(function (ret) {
						//async cache module
						require.lixCache[path] = ret;
						require.lixLoadingCache[path] = undefined;
						cb(ret);
					}, 0);
					//sync cache module
					require.lixLoadingCache[path] = undefined;
					return require.lixCache[path];
				}
			}

			//cached result
			return function () {
				return require.lixCache[path];
			}
		}
	}

	var global_trap = function () {
		var Larguments = arguments;
		var defer_stack = [];
		;
		function _2(_cb, _step, _cont, _ret, cb_defer) {
			switch (_step) {

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
		return _2;
	}

	//	this.Ltrap = function Ltrap(f) {
	function Ltrap(f) {
		var nargs = arguments.length;
		return function () {
			if (nargs == 0)	{
				return global_trap;
			} else {
				global_trap = f;
			}
		}
	}

	this.thisDefer = function (LdeferList, isBreak) {
		var Larguments = arguments;
		var defer_stack = [];
		var chain_defer = undefined;
		var _ret, _0, _1;
		function _5(_cb, _step, _cont, _ret, cb_defer) {
			switch (_step) {
				case 0:
					_ret = LdeferList.Pop(LdeferList)(function (_ret) {
						return _5(_cb, 1, true, _ret, chain_defer);
					}, 0);
				case 1:
					_0 = _ret;
					//					console.log('pop:');
					//					console.log(_0.toString());
				case 2:
					_ret = Lcall(_0, isBreak)(function (_ret) {
						return _5(_cb, 3, true, _ret, chain_defer);
					}, 0);
				case 3:
					_1 = _ret
				default:
			}
			if (_cont) {
				_cb(_ret);
			} else {
				return _ret;
			}
		};
		function _4(_cb, _step, _cont, _ret, cb_defer) {
			switch (_step) {
				case 0:
					while (LdeferList.length) {
						_5(function (_ret) {
							return _4(_cb, 0, true, _ret, chain_defer);
						}, 0)
					};
				case 1:
					_ret = undefined
				default:
			}
			if (_cont) {
				_cb(_ret);
			} else {
				return _ret;
			}
		};
		return _4;
	}; 

	this._defer = function (defer_stack) {
		return function (cb) {
			return function () {
				defer_stack.push(cb);
				//				console.log('push:');
				//				console.log(cb.toString());
			}
		}
	}

	this.L__compose__ = (function (Lf0, Lf1) {
		var Larguments = arguments;
		;
		function _4(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					_ret = (function (Li) {
						var Larguments = arguments;
						var _ret, _0, _1;
						function _6(_cb, _step, _cont, _ret) {
							switch (_step) {
								case 0:
									_ret = Lf0(Li)(function (_ret) {
										return _6(_cb, 1, true, _ret);
									}, 0);
								case 1:
									_0 = _ret;
								case 2:
									_ret = Lf1(_0)(function (_ret) {
										return _6(_cb, 3, true, _ret);
									}, 0);
								case 3:
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
					})
				default:
			}
			if (_cont) {
				_cb(_ret)
			} else {
				return _ret
			}
		};
		return _4;
	});

	this.L__rcompose__ = (function (Lf1, Lf0) {
		var Larguments = arguments;
		;
		function _4(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					_ret = (function (Li) {
						var Larguments = arguments;
						var _ret, _0, _1;
						function _6(_cb, _step, _cont, _ret) {
							switch (_step) {
								case 0:
									_ret = Lf0(Li)(function (_ret) {
										return _6(_cb, 1, true, _ret);
									}, 0);
								case 1:
									_0 = _ret;
								case 2:
									_ret = Lf1(_0)(function (_ret) {
										return _6(_cb, 3, true, _ret);
									}, 0);
								case 3:
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
					})
				default:
			}
			if (_cont) {
				_cb(_ret)
			} else {
				return _ret
			}
		};
		return _4;
	});

	this.L__bind__ = (function (Lflist, Lf) {
		var Larguments = arguments, defer_stack = [];
		;
		function _6(_cb, _step, _cont, _ret, cb_defer) {
			try {
				switch (_step) {
					case 0:
						_ret = (function (Lappend) {
							var Larguments = arguments, defer_stack = [];
							var _ret, _3;
							function _8(_cb, _step, _cont, _ret, cb_defer) {
								try {
									switch (_step) {
										case 0:
											_ret = Lcall(Lflist, (function (Li) {
												var Larguments = arguments, defer_stack = [];
												var _ret, _0, _2;
												function _10(_cb, _step, _cont, _ret, cb_defer) {
													try {
														switch (_step) {
															case 0:
																_ret = Lf(Li)(function (_ret) {
																	return _10(_cb, 1, true, _ret, function () {
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
																_ret = Lcall(_0, (function (Lj) {
																	var Larguments = arguments, defer_stack = [];
																	var _ret, _1;
																	function _12(_cb, _step, _cont, _ret, cb_defer) {
																		try {
																			switch (_step) {
																				case 0:
																					_ret = Lappend(Lj)(function (_ret) {
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
																					_1 = _ret
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
																		} catch (e) {
																			if (e == _lixCCException) {
																				throw e;
																			} else {
																				Lraise(e)(function (x) {return x;}, 0);
																			}
																		}
																	}
																	;
																	return _12;
																}))(function (_ret) {
																	return _10(_cb, 3, true, _ret, function () {
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
													} catch (e) {
														if (e == _lixCCException) {
															throw e;
														} else {
															Lraise(e)(function (x) {return x;}, 0);
														}
													}
												}
												;
												return _10;
											}))(function (_ret) {
												return _8(_cb, 1, true, _ret, function () {
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
											_3 = _ret
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
								} catch (e) {
									if (e == _lixCCException) {
										throw e;
									} else {
										Lraise(e)(function (x) {return x;}, 0);
									}
								}
							}
							;
							return _8;
						})
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
			} catch (e) {
				if (e == _lixCCException) {
					throw e;
				} else {
					Lraise(e)(function (x) {return x;}, 0);
				}
			}
		}
		;
		return _6;
	});

	this.L__ = (function (Lfn) {
		var Larguments = arguments;
		var _ret, _0, Largs;
		function _4(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					_ret = LArray.Slice(Larguments, 0)(function (_ret) {
						return _4(_cb, 1, true, _ret);
					}, 0);
				case 1:
					_0 = _ret;
				case 2:
					_ret = Largs = _0;
				case 3:
					_ret = (function (Li) {
						var Larguments = arguments;
						var _ret, _1;
						function _6(_cb, _step, _cont, _ret) {
							switch (_step) {
								case 0:
									_ret = Largs[0] = Li;
								case 1:
									_ret = Lapply(Lfn, Largs)(function (_ret) {
										return _6(_cb, 2, true, _ret);
									}, 0);
								case 2:
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
					})
				default:
			}
			if (_cont) {
				_cb(_ret)
			} else {
				return _ret
			}
		};
		return _4;
	});

	this.L__vcompose__ = (function (Ldf0, Ldf1) {
		var Larguments = arguments, defer_stack = [];
		;
		function _7(_cb, _step, _cont, _ret, cb_defer) {
			try {
				switch (_step) {
					case 0:
						_ret = (function (Lx) {
							var Larguments = arguments, defer_stack = [];
							;
							function _9(_cb, _step, _cont, _ret, cb_defer) {
								try {
									switch (_step) {
										case 0:
											_ret = (function (Lappend) {
												var Larguments = arguments, defer_stack = [];
												var _ret, _0, _4;
												function _11(_cb, _step, _cont, _ret, cb_defer) {
													try {
														switch (_step) {
															case 0:
																_ret = Ldf0(Lx)(function (_ret) {
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
																_ret = Lcall(_0, (function (Li) {
																	var Larguments = arguments, defer_stack = [];
																	var _ret, _1, _3;
																	function _13(_cb, _step, _cont, _ret, cb_defer) {
																		try {
																			switch (_step) {
																				case 0:
																					_ret = Ldf1(Li)(function (_ret) {
																						return _13(_cb, 1, true, _ret, function () {
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
																					_ret = Lcall(_1, (function (Lj) {
																						var Larguments = arguments, defer_stack = [];
																						var _ret, _2;
																						function _15(_cb, _step, _cont, _ret, cb_defer) {
																							try {
																								switch (_step) {
																									case 0:
																										_ret = Lappend(Lj)(function (_ret) {
																											return _15(_cb, 1, true, _ret, function () {
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
																							} catch (e) {
																								if (e == _lixCCException) {
																									throw e;
																								} else {
																									Lraise(e)(function (x) {return x;}, 0);
																								}
																							}
																						}
																						;
																						return _15;
																					}))(function (_ret) {
																						return _13(_cb, 3, true, _ret, function () {
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
																					_3 = _ret
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
																		} catch (e) {
																			if (e == _lixCCException) {
																				throw e;
																			} else {
																				Lraise(e)(function (x) {return x;}, 0);
																			}
																		}
																	}
																	;
																	return _13;
																}))(function (_ret) {
																	return _11(_cb, 3, true, _ret, function () {
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
																_4 = _ret
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
													} catch (e) {
														if (e == _lixCCException) {
															throw e;
														} else {
															Lraise(e)(function (x) {return x;}, 0);
														}
													}
												}
												;
												return _11;
											})
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
								} catch (e) {
									if (e == _lixCCException) {
										throw e;
									} else {
										Lraise(e)(function (x) {return x;}, 0);
									}
								}
							}
							;
							return _9;
						})
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
			} catch (e) {
				if (e == _lixCCException) {
					throw e;
				} else {
					Lraise(e)(function (x) {return x;}, 0);
				}
			}
		}
		;
		return _7;
	}); 

	this.L__rvcompose__ = (function (Ldf1, Ldf0) {
		var Larguments = arguments, defer_stack = [];
		;
		function _7(_cb, _step, _cont, _ret, cb_defer) {
			try {
				switch (_step) {
					case 0:
						_ret = (function (Lx) {
							var Larguments = arguments, defer_stack = [];
							;
							function _9(_cb, _step, _cont, _ret, cb_defer) {
								try {
									switch (_step) {
										case 0:
											_ret = (function (Lappend) {
												var Larguments = arguments, defer_stack = [];
												var _ret, _0, _4;
												function _11(_cb, _step, _cont, _ret, cb_defer) {
													try {
														switch (_step) {
															case 0:
																_ret = Ldf0(Lx)(function (_ret) {
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
																_ret = Lcall(_0, (function (Li) {
																	var Larguments = arguments, defer_stack = [];
																	var _ret, _1, _3;
																	function _13(_cb, _step, _cont, _ret, cb_defer) {
																		try {
																			switch (_step) {
																				case 0:
																					_ret = Ldf1(Li)(function (_ret) {
																						return _13(_cb, 1, true, _ret, function () {
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
																					_ret = Lcall(_1, (function (Lj) {
																						var Larguments = arguments, defer_stack = [];
																						var _ret, _2;
																						function _15(_cb, _step, _cont, _ret, cb_defer) {
																							try {
																								switch (_step) {
																									case 0:
																										_ret = Lappend(Lj)(function (_ret) {
																											return _15(_cb, 1, true, _ret, function () {
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
																							} catch (e) {
																								if (e == _lixCCException) {
																									throw e;
																								} else {
																									Lraise(e)(function (x) {return x;}, 0);
																								}
																							}
																						}
																						;
																						return _15;
																					}))(function (_ret) {
																						return _13(_cb, 3, true, _ret, function () {
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
																					_3 = _ret
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
																		} catch (e) {
																			if (e == _lixCCException) {
																				throw e;
																			} else {
																				Lraise(e)(function (x) {return x;}, 0);
																			}
																		}
																	}
																	;
																	return _13;
																}))(function (_ret) {
																	return _11(_cb, 3, true, _ret, function () {
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
																_4 = _ret
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
													} catch (e) {
														if (e == _lixCCException) {
															throw e;
														} else {
															Lraise(e)(function (x) {return x;}, 0);
														}
													}
												}
												;
												return _11;
											})
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
								} catch (e) {
									if (e == _lixCCException) {
										throw e;
									} else {
										Lraise(e)(function (x) {return x;}, 0);
									}
								}
							}
							;
							return _9;
						})
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
			} catch (e) {
				if (e == _lixCCException) {
					throw e;
				} else {
					Lraise(e)(function (x) {return x;}, 0);
				}
			}
		}
		;
		return _7;
	}); 

	Function.prototype.unCurrying = function() {
		return this.call.bind(this);
	};

	this.Linstanceof = function (obj, type) {
		return function () {
			return Object.getPrototypeOf(obj) == type;
		}
	}

	this.Lis = function (obj, type) {
		return function () {
			while (obj) {
				if (obj == type) {
					return true;
				}
				obj = Object.getPrototypeOf(obj);
			}
			return false;
		}
	}

	this.Ltimeout = function (secs, ctx) {
		return function () {
			setTimeout(function () {
				try {
					a = ctx()(function (x) {return x;}, 0);
				} catch (e) {
				}
			}, secs);
		}
	}
	this.Limmediately = function (ctx) {
		return function () {
			setImmediate(function () {
				try {
					a = ctx()(function (x) {return x;}, 0);
				} catch (e) {
				}
			});
		}
	}
	this.Lcc = function (ctx) {
		function _self(cb, step, cont, a, cb_defer) {
			var brk = function (ret) {
				function _self(_cb, step, cont, a, cb_defer) {
					cb_defer && cb_defer();
					setImmediate(function () {
						try {
							cb(ret);
						} catch (e) {
							//							console.log(e);
						}
					});
					throw _lixCCException;
				}
				return _self;
			};

			setImmediate(function () {
				try {
					a = ctx(brk)(function (x) {return x;}, 0);
				} catch (e) {
					//					console.log(e);
				}
			});
			throw _lixCCException;
		}
		return _self;
	}

	this.Lprint = function (x) {
		return function () {
			return console.log(x); 
		}
	}
	this.Lnot = function (x) {
		return function () {
			return !x; 
		}
	}
	this.L_instance_ = function _instance_(x) {
		return function () {
			return new x(); 
		}
	}
	this.L__add__ = function __add__(x, y) {
		return function () {
			return x + y;
		}
	}
	this.L__sub__ = function __sub__(x, y) {
		return function () {
			return x - y;
		}
	}
	this.L__mul__ = function __mul__(x, y) {
		return function () {
			return x * y;
		}
	}
	this.L__div__ = function __div__(x, y) {
		return function () {
			return x / y;
		}
	}
	this.L__mod__ = function __mod__(x, y) {
		return function () {
			return x % y;
		}
	}
	this.L__gt__ = function __gt__(x, y) {
		return function () {
			return x > y;
		}
	}
	this.L__ge__ = function __ge__(x, y) {
		return function () {
			return x >= y;
		}
	}
	this.L__eq__ = function __eq__(x, y) {
		return function () {
			return x == y;
		}
	}
	this.L__ne__ = function __ne__(x, y) {
		return function () {
			return x != y;
		}
	}
	this.L__le__ = function __le__(x, y) {
		return function () {
			return x <= y;
		}
	}
	this.L__lt__ = function __lt__(x, y) {
		return function () {
			return x < y;
		}
	}
	this.LisFunction = function isFunction(x) {
		return function () {
			return typeof x === 'function';
		}
	}
	this.LisArray = function isArray(x) {
		return function () {
			return x instanceof Array;
		}
	}

	this.Lapply = function (fn, args) {
		return fn.apply(fn, args);
	};

	this.Lcall = function (fn) {
		return fn.apply(fn, array_slice(arguments, 1));
	};

	this.LArray = Array.prototype;

	Array.prototype.Join = function (arr, glue) {
		return function () {
			return arr.join(glue)
		}
	}

	Array.prototype.IsArray = function (arr) {
		return function () {
			return Array.isArray(arr);
		};
	}

	Array.prototype.ToString = function (arr) {
		return function () {
			return arr.toString();
		};
	}

	Array.prototype.ToLocaleString = function (arr) {
		return function () {
			return arr.toLocaleString();
		};
	}

	Array.prototype.Concat = function (a, b) {
		return function () {
			return a.concat(b);
		};
	}

	Array.prototype.Push = function (a, b) {
		return function () {
			return a.push(b);
		};
	}

	Array.prototype.Unshift = function (a, b) {
		return function () {
			return a.unshift(b);
		};
	}

	Array.prototype.Pop = function (a) {
		return function () {
			return a.pop();
		};
	}

	Array.prototype.Shift = function (a) {
		return function () {
			return a.shift();
		};
	}

	Array.prototype.Reverse = function (a) {
		return function () {
			return a.reverse();
		};
	}

	Array.prototype.Slice = function (a, start, end) {
		return function () {
			return array_slice(a, start, end);
		};
	}

	Array.prototype.IndexOf = function (a, elem, start) {
		return function () {
			return a.indexOf(elem, start);
		};
	}

	Array.prototype.LastIndexOf = function (a, elem, start) {
		if (arguments.length == 2) {
			start = a.length
		}
		return function () {
			return a.lastIndexOf(elem, start);
		};
	}

	Array.prototype.Length = function (a) {
		return function () {
			return a.length;
		};
	}
	var array_slice = Array.prototype.slice.unCurrying();
	Array.prototype.Splice = function (a) {
		var args = array_slice(arguments, 1);
		return function () {
			return Array.prototype.splice.apply(a, args);
		};
	}

	this.LObject = Object.prototype;
	Object.prototype.Keys = function (a) {
		return function () {
			return Object.keys(a);
		};
	}

	Object.prototype.GetPrototypeOf = function (a) {
		return function () {
			return Object.getPrototypeOf(a);
		};
	}

	Object.prototype.GetOwnPropertyDescriptor = function (o, p) {
		return function () {
			return Object.getOwnPropertyDescriptor(o, p);
		};
	}

	Object.prototype.GetOwnPropertyNames = function (o) {
		return function () {
			return Object.getOwnPropertyNames(o);
		};
	}

	Object.prototype.Create = function (o) {
		return function () {
			return Object.create(o);
		};
	}

	Object.prototype.DefineProperty = function (o, p, attribute) {
		return function () {
			return Object.defineProperty(o, p, attribute);
		};
	}

	Object.prototype.DefineProperties = function (o, properties) {
		return function () {
			return Object.defineProperties(o, properties);
		};
	}

	Object.prototype.Seal = function (o) {
		return function () {
			return Object.seal(o);
		};
	}

	Object.prototype.Freeze = function (o) {
		return function () {
			return Object.freeze(o);
		};
	}

	Object.prototype.PreventExtensions = function (o) {
		return function () {
			return Object.preventExtensions(o);
		};
	}

	Object.prototype.IsSealed = function (o) {
		return function () {
			return Object.isSealed(o);
		};
	}

	Object.prototype.IsFrozen = function (o) {
		return function () {
			return Object.isFrozen(o);
		};
	}

	Object.prototype.IsExtensible = function (o) {
		return function () {
			return Object.isExtensible(o);
		};
	}

	Object.prototype.ToString = function (o) {
		return function () {
			return o.toString();
		};
	}

	Object.prototype.ToLocaleString = function (o) {
		return function () {
			return o.toLocaleString();
		};
	}

	Object.prototype.ValueOf = function (o) {
		return function () {
			return o.valueOf();
		};
	}

	Object.prototype.HasOwnProperty = function (o, v) {
		return function () {
			return o.hasOwnProperty(v);
		};
	}

	Object.prototype.IsPrototypeOf = function (o, v) {
		return function () {
			return o.isPrototypeOf(v);
		};
	}

	Object.prototype.PropertyIsEnumerable = function (o, v) {
		return function () {
			return o.propertyIsEnumerable(v);
		};
	}

	this.LString = String.prototype

		String.prototype.FromCharCode = function () {
			var args = array_slice(arguments);
			return function () {
				return String.fromCharCode.apply(null, args);
			};
		};

	String.prototype.ToString = function (a) {
		return function () {
			return a.toString();
		}
	}

	String.prototype.ValueOf = function (a) {
		return function () {
			return a.valueOf();
		}
	}

	String.prototype.CharAt = function (a, pos) {
		return function () {
			return a.charAt(pos);
		}
	}

	String.prototype.CharCodeAt = function (a, pos) {
		return function () {
			return a.charCodeAt(pos);
		}
	}

	String.prototype.Concat = function (str) {
		var args = array_slice(arguments, 1);
		return function () {
			return str.concat.apply(str, args);
		}
	}

	String.prototype.IndexOf = function (str, pos) {
		return function () {
			return str.indexOf(pos);
		}
	}

	String.prototype.LastIndexOf = function (str, pos) {
		return function () {
			return str.lastIndexOf(pos);
		}
	}

	String.prototype.LocaleCompare = function (str, pos) {
		return function () {
			return str.localeCompare(pos);
		}
	}

	String.prototype.Match = function (str, r) {
		return function () {
			return str.match(r);
		}
	}

	String.prototype.Replace = function (str, searchValue, replaceValue) {
		return function () {
			return str.replace(searchValue, replaceValue);
		}
	}

	String.prototype.Search = function (str, r) {
		return function () {
			return str.search(r);
		}
	}

	String.prototype.Slice = function (str, start, end) {
		return function () {
			return str.slice(start, end);
		}
	}

	String.prototype.Split = function (str, separator, limit) {
		return function () {
			return str.split(separator, limit);
		}
	}

	String.prototype.Substring = function (str, start, end) {
		return function () {
			return str.substring(start, end);
		}
	}

	String.prototype.ToLowerCase = function (str) {
		return function () {
			return str.toLowerCase();
		}
	}

	String.prototype.ToLocaleLowerCase = function (str) {
		return function () {
			return str.toLocaleLowerCase();
		}
	}

	String.prototype.IsString = function (str) {
		return function () {
			return typeof str == 'string';
		}
	}

	String.prototype.ToUpperCase = function (str) {
		return function () {
			return str.toUpperCase();
		}
	}

	String.prototype.ToLocaleUpperCase = function (str) {
		return function () {
			return str.toLocaleUpperCase();
		}
	}

	String.prototype.Trim = function (str) {
		return function () {
			return str.trim();
		}
	}

	String.prototype.Length = function (str) {
		return function () {
			return str.length;
		}
	}

	Boolean.prototype.ToString = function (b) {
		return function () {
			return b.toString();
		}
	}

	Boolean.prototype.ValueOf = function (v) {
		return function () {
			return v.valueOf();
		}
	}

	this.LNumber = Number.prototype;
	Number.prototype.MAX_VALUE = Number.MAX_VALUE
		Number.prototype.MIN_VALUE = Number.MIN_VALUE
		Number.prototype.NaN = Number.NaN
		Number.prototype.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY
		Number.prototype.POSITIVE_INFINITY = Number.POSITIVE_INFINITY

		Number.prototype.ToString = function (v) {
			return function () {
				return v.toString();
			}
		}

	Number.prototype.ToLocaleString = function (v) {
		return function () {
			return v.toLocaleString();
		}
	}

	Number.prototype.ValueOf = function (v) {
		return function () {
			return v.valueOf();
		}
	}

	Number.prototype.ToFixed = function (v, fractionDigits) {
		return function () {
			return v.toFixed(fractionDigits);
		}
	}

	Number.prototype.ToExponential = function (v, fractionDigits) {
		return function () {
			return v.toExponential(fractionDigits);
		}
	}

	Number.prototype.ToPrecision = function (v, precision) {
		return function () {
			return v.toPrecision(v, precision);
		}
	}

	this.LMath = Math;

	Math.Abs = function (x) {
		return function () {
			return Math.abs(x);
		}
	}

	Math.Acos = function (x) {
		return function () {
			return Math.acos(x);
		}
	}

	Math.Asin = function (x) {
		return function () {
			return Math.asin(x);
		}
	}

	Math.Atan = function (x) {
		return function () {
			return Math.atan(x);
		}
	}

	Math.Atan2 = function (y, x) {
		return function () {
			return Math.atan2(y, x);
		}
	}

	Math.Ceil = function (x) {
		return function () {
			return Math.ceil(x);
		}
	}

	Math.Cos = function (x) {
		return function () {
			return Math.cos(x);
		}
	}

	Math.Exp = function (x) {
		return function () {
			return Math.exp(x);
		}
	}

	Math.Floor = function (x) {
		return function () {
			return Math.floor(x);
		}
	}

	Math.Log = function (x) {
		return function () {
			return Math.log(x);
		}
	}

	Math.Max = function () {
		var args = array_slice(arguments);
		return function () {
			return Math.max.apply(null, args);
		}
	}

	Math.Min = function () {
		var args = array_slice(arguments);
		return function () {
			return Math.min.apply(null, args);
		}
	}

	Math.Pow = function (x, y) {
		return function () {
			return Math.pow(x, y);
		}
	}

	Math.Random = function () {
		return function () {
			return Math.random();
		}
	}

	Math.Round = function (x) {
		return function () {
			return Math.round(x);
		}
	}

	Math.Sin = function (x) {
		return function () {
			return Math.sin(x);
		}
	}

	Math.Sqrt = function (x) {
		return function () {
			return Math.sqrt(x);
		}
	}

	Math.Tan = function (x) {
		return function () {
			return Math.tan(x);
		}
	}

	this.Ldate = function () {
		var args = arguments;
		return function () {
			switch (args.length) {
				case 0:
					return new Date();
				case 1:
					return new Date(args[0]);
				case 2:
					return new Date(args[0], args[1]);
				case 3:
					return new Date(args[0], args[1], args[2]);
				case 4:
					return new Date(args[0], args[1], args[2], args[3]);
				case 5:
					return new Date(args[0], args[1], args[2], args[3], args[4]);
				case 6:
					return new Date(args[0], args[1], args[2], args[3], args[4], args[5]);
				case 7:
				default:
					return new Date(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
			}
		}
	}

	this.LDate = Date.prototype;

	Date.prototype.Parse = function (str) {
		return function () {
			return Date.parse(str);
		}
	}

	Date.prototype.UTC = function () {
		var args = array_slice(arguments);
		return function () {
			return Date.UTC.apply(null, args);
		}
	}

	Date.prototype.Now = function () {
		return function () {
			return Date.now();
		}
	}

	Date.prototype.ToString = function (x) {
		return function () {
			return x.toString();
		}
	}

	Date.prototype.ToDateString = function (x) {
		return function () {
			return x.toDateString();
		}
	}

	Date.prototype.ToTimeString = function (x) {
		return function () {
			return x.toTimeString();
		}
	}

	Date.prototype.ToLocaleString = function (x) {
		return function () {
			return x.toLocaleString();
		}
	}

	Date.prototype.ToLocaleDateString = function (x) {
		return function () {
			return x.toLocaleDateString();
		}
	}

	Date.prototype.ToLocaleTimeString = function (x) {
		return function () {
			return x.toLocaleTimeString();
		}
	}

	Date.prototype.ValueOf = function (x) {
		return function () {
			return x.valueOf();
		}
	}

	Date.prototype.GetTime = function (x) {
		return function () {
			return x.getTime();
		}
	}

	Date.prototype.GetFullYear = function (x) {
		return function () {
			return x.getFullYear();
		}
	}

	Date.prototype.GetUTCFullYear = function (x) {
		return function () {
			return x.getUTCFullYear();
		}
	}

	Date.prototype.GetMonth = function (x) {
		return function () {
			return x.getMonth();
		}
	}

	Date.prototype.GetUTCMonth = function (x) {
		return function () {
			return x.getUTCMonth();
		}
	}

	Date.prototype.GetDate = function (x) {
		return function () {
			return x.getDate();
		}
	}

	Date.prototype.GetUTCDate = function (x) {
		return function () {
			return x.getUTCDate();
		}
	}

	Date.prototype.GetDay = function (x) {
		return function () {
			return x.getDay();
		}
	}

	Date.prototype.GetUTCDay = function (x) {
		return function () {
			return x.getUTCDay();
		}
	}

	Date.prototype.GetHours = function (x) {
		return function () {
			return x.getHours();
		}
	}

	Date.prototype.GetUTCHours = function (x) {
		return function () {
			return x.getUTCHours();
		}
	}

	Date.prototype.GetMinutes = function (x) {
		return function () {
			return x.getMinutes();
		}
	}

	Date.prototype.GetUTCMinutes = function (x) {
		return function () {
			return x.getUTCMinutes();
		}
	}

	Date.prototype.GetSeconds = function (x) {
		return function () {
			return x.getSeconds();
		}
	}

	Date.prototype.GetUTCSeconds = function (x) {
		return function () {
			return x.getUTCSeconds();
		}
	}

	Date.prototype.GetMilliseconds = function (x) {
		return function () {
			return x.getMilliseconds();
		}
	}

	Date.prototype.GetUTCMilliseconds = function (x) {
		return function () {
			return x.getUTCMilliseconds();
		}
	}

	Date.prototype.GetTimezoneOffset = function (x) {
		return function () {
			return x.getTimezoneOffset();
		}
	}

	Date.prototype.SetTime = function (x, v) {
		return function () {
			return x.setTime(v);
		}
	}

	Date.prototype.SetMilliseconds = function (x, v) {
		return function () {
			return x.setMilliseconds(v);
		}
	}

	Date.prototype.SetMilliseconds = function (x, v) {
		return function () {
			return x.setMilliseconds(v);
		}
	}

	Date.prototype.SetUTCMilliseconds = function (x, v) {
		return function () {
			return x.setUTCMilliseconds(v);
		}
	}

	Date.prototype.SetSeconds = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setSeconds.apply(x, args);
		}
	}

	Date.prototype.SetUTCSeconds = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCSeconds.apply(x, args);
		}
	}

	Date.prototype.SetMinutes = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setMinutes.apply(x, args);
		}
	}

	Date.prototype.SetUTCMinutes = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCMinutes.apply(x, args);
		}
	}

	Date.prototype.SetHours = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setHours.apply(x, args);
		}
	}

	Date.prototype.SetUTCHours = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCHours.apply(x, args);
		}
	}

	Date.prototype.SetDate = function (x, v) {
		return function () {
			return x.setDate(v);
		}
	}

	Date.prototype.SetUTCDate = function (x, v) {
		return function () {
			return x.setUTCDate(v);
		}
	}

	Date.prototype.SetMonth = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setMonth.apply(x, args);
		}
	}

	Date.prototype.SetUTCMonth = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCMonth.apply(x, args);
		}
	}

	Date.prototype.SetFullYear = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setFullYear.apply(x, args);
		}
	}

	Date.prototype.SetUTCFullYear = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCFullYear.apply(x, args);
		}
	}

	Date.prototype.ToUTCString = function (x) {
		return function () {
			return x.toUTCString();
		}
	}

	Date.prototype.ToISOString = function (x) {
		return function () {
			return x.toISOString();
		}
	}

	Date.prototype.ToJSON = function (x, key) {
		return function () {
			return x.toJSON(key);
		}
	}

	this.Lregexp = function () {
		var args = array_slice(arguments);
		return function () {
			switch (args.length) {
				case 1:
					return new RegExp(args[0]);
				case 2:
					return new RegExp(args[0], args[1]);
				default:
					return null;
			}
		}
	}

	this.LRegExp = RegExp.prototype

		RegExp.prototype.Exec = function (r, str) {
			return function () {
				return r.exec(str);
			}
		}

	RegExp.prototype.Test = function (r, str) {
		return function () {
			return r.test(str);
		}
	}

	RegExp.prototype.ToString = function (r) {
		return function () {
			return r.toString();
		}
	}


	this.Lerror = function (message) {
		return function () {
			return new Error(message);
		}
	}

	Error.prototype.ToString = function (e) {
		return function () {
			return e.toString();
		}
	}

	this.LError = Error.prototype;
	this.LEvalError = EvalError.prototype;
	this.LReferenceError = ReferenceError.prototype;
	this.LSyntaxError = SyntaxError.prototype;
	this.LTypeError = TypeError.prototype;
	this.LURIError = URIError.prototype;

	this.LJSON = JSON
		JSON.Parse = function () {
			var args = array_slice(arguments);
			return function () {
				return JSON.parse.apply(null, args);
			}
		}

	JSON.Stringify = function () {
		var args = array_slice(arguments);
		return function () {
			return JSON.stringify.apply(null, args);
		}
	}

	this.LFunction = Function.prototype;

	this.Ltry = function (LtryBlock, LcatchBlock) {
		var Larguments = arguments;
		var defer_stack = [];
		var _ret, _5, LoldTrapFn, _11, _12;
		function _18(_cb, _step, _cont, _ret, cb_defer) {
			switch (_step) {
				case 0:
					_ret = Lcall(Ltrap)(function (_ret) {
						return _18(_cb, 1, true, _ret, function () {
							thisDefer(defer_stack, true)(function () {
								cb_defer && cb_defer();
							}, 0);
							cb_defer && cb_defer();
						}
						);
					}, 0, false, undefined, function () {
						thisDefer(defer_stack, true)(function () {
							cb_defer && cb_defer();
						}, 0);
						cb_defer && cb_defer();
					}
					);
				case 1:
					_5 = _ret;
				case 2:
					_ret = LoldTrapFn = _5;
				case 3:
					_ret = Lcall(Lcc, (function (Lbreak) {
						var Larguments = arguments;
						var defer_stack = [];
						var _ret, _8, _9, _10;
						function _20(_cb, _step, _cont, _ret, cb_defer) {
							switch (_step) {
								case 0:
									_ret = Lcall(Ltrap, (function (Le) {
										var Larguments = arguments;
										var defer_stack = [];
										var _ret, _6, _7;
										function _22(_cb, _step, _cont, _ret, cb_defer) {
											switch (_step) {
												case 0:
													_ret = Lcall(LcatchBlock, Le)(function (_ret) {
														return _22(_cb, 1, true, _ret, function () {
															thisDefer(defer_stack, true)(function () {
																cb_defer && cb_defer();
															}, 0);
															cb_defer && cb_defer();
														}
														);
													}, 0, false, undefined, function () {
														thisDefer(defer_stack, true)(function () {
															cb_defer && cb_defer();
														}, 0);
														cb_defer && cb_defer();
													}
													);
												case 1:
													_6 = _ret;
												case 2:
													_ret = Lcall(Lbreak)(function (_ret) {
														return _22(_cb, 3, true, _ret, function () {
															thisDefer(defer_stack, true)(function () {
																cb_defer && cb_defer();
															}, 0);
															cb_defer && cb_defer();
														}
														);
													}, 0, false, undefined, function () {
														thisDefer(defer_stack, true)(function () {
															cb_defer && cb_defer();
														}, 0);
														cb_defer && cb_defer();
													}
													);
												case 3:
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
										return _22;
									}))(function (_ret) {
										return _20(_cb, 1, true, _ret, function () {
											thisDefer(defer_stack, true)(function () {
												cb_defer && cb_defer();
											}, 0);
											cb_defer && cb_defer();
										}
										);
									}, 0, false, undefined, function () {
										thisDefer(defer_stack, true)(function () {
											cb_defer && cb_defer();
										}, 0);
										cb_defer && cb_defer();
									}
									);
								case 1:
									_8 = _ret;
								case 2:
									_ret = Lcall(LtryBlock)(function (_ret) {
										return _20(_cb, 3, true, _ret, function () {
											thisDefer(defer_stack, true)(function () {
												cb_defer && cb_defer();
											}, 0);
											cb_defer && cb_defer();
										}
										);
									}, 0, false, undefined, function () {
										thisDefer(defer_stack, true)(function () {
											cb_defer && cb_defer();
										}, 0);
										cb_defer && cb_defer();
									}
									);
								case 3:
									_9 = _ret;
								case 4:
									_ret = Lcall(Lbreak)(function (_ret) {
										return _20(_cb, 5, true, _ret, function () {
											thisDefer(defer_stack, true)(function () {
												cb_defer && cb_defer();
											}, 0);
											cb_defer && cb_defer();
										}
										);
									}, 0, false, undefined, function () {
										thisDefer(defer_stack, true)(function () {
											cb_defer && cb_defer();
										}, 0);
										cb_defer && cb_defer();
									}
									);
								case 5:
									_10 = _ret
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
						return _20;
					}))(function (_ret) {
						return _18(_cb, 4, true, _ret, function () {
							thisDefer(defer_stack, true)(function () {
								cb_defer && cb_defer();
							}, 0);
							cb_defer && cb_defer();
						}
						);
					}, 0, false, undefined, function () {
						thisDefer(defer_stack, true)(function () {
							cb_defer && cb_defer();
						}, 0);
						cb_defer && cb_defer();
					}
					);
				case 4:
					_11 = _ret;
				case 5:
					_ret = Lcall(Ltrap, LoldTrapFn)(function (_ret) {
						return _18(_cb, 6, true, _ret, function () {
							thisDefer(defer_stack, true)(function () {
								cb_defer && cb_defer();
							}, 0);
							cb_defer && cb_defer();
						}
						);
					}, 0, false, undefined, function () {
						thisDefer(defer_stack, true)(function () {
							cb_defer && cb_defer();
						}, 0);
						cb_defer && cb_defer();
					}
					);
				case 6:
					_12 = _ret
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
	};
	this.Lraise = function (Le) {
		var Larguments = arguments;
		var defer_stack = [];
		var _ret, _13, _14;
		function _24(_cb, _step, _cont, _ret, cb_defer) {
			switch (_step) {
				case 0:
					_ret = Lcall(Ltrap)(function (_ret) {
						return _24(_cb, 1, true, _ret, function () {
							thisDefer(defer_stack, true)(function () {
								cb_defer && cb_defer();
							}, 0);
							cb_defer && cb_defer();
						}
						);
					}, 0, false, undefined, function () {
						thisDefer(defer_stack, true)(function () {
							cb_defer && cb_defer();
						}, 0);
						cb_defer && cb_defer();
					}
					);
				case 1:
					_13 = _ret;
				case 2:
					_ret = Lcall(_13, Le)(function (_ret) {
						return _24(_cb, 3, true, _ret, function () {
							thisDefer(defer_stack, true)(function () {
								cb_defer && cb_defer();
							}, 0);
							cb_defer && cb_defer();
						}
						);
					}, 0, false, undefined, function () {
						thisDefer(defer_stack, true)(function () {
							cb_defer && cb_defer();
						}, 0);
						cb_defer && cb_defer();
					}
					);
				case 3:
					_14 = _ret
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
		return _24;
	};
	this.Lsubclass = (function (Lbase, Lconfig) {
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
	this.Lnew = (function (Lclass) {
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
})();

