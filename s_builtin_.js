var PREV = 0; 
var F = 1; 
var STEP = 2; 
var RET = 3; 
var DEFER = 4; 
var TRAP = 5; 

(function () {

	this.Lsubclass = (function (Lbase, Lconfig) {
				var Larguments = arguments
				var _0, Lclass, _1, _2;
			function _6(s) {
				switch (s[2]) {
					case 0:
						_1 = false;
					case 1:
						s[2] = 2;
						lix(s, Lconfig(Lclass));
					case 2:
						_2 = s[3]
					default:
				}
				return s[3]
			}
			;
			function _5(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, LObject.Create(Lbase));
					case 1:
						_0 = s[3];
					case 2:
						s[3] = Lclass = _0;
					case 3:
						_1 = true;
					case 4:
						if ((_1 && Lconfig)) {
							s[2] = 5;
							lix(s, _6)
						};
					case 5:
						s[3] = Lclass
					default:
				}
				return s[3]
			}
			;
			return _5;
			});
	this.Lnew = (function (Lclass) {
				var Larguments = arguments
				var _0, Lobj, _1, Largs, _2, _3;
			function _7(s) {
				switch (s[2]) {
					case 0:
						_2 = false;
					case 1:
						s[2] = 2;
						lix(s, Lapply(Lclass.__init__, Largs));
					case 2:
						_3 = s[3]
					default:
				}
				return s[3]
			}
			;
			function _6(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, LObject.Create(Lclass));
					case 1:
						_0 = s[3];
					case 2:
						s[3] = Lobj = _0;
					case 3:
						s[2] = 4;
						lix(s, LArray.Slice(Larguments));
					case 4:
						_1 = s[3];
					case 5:
						s[3] = Largs = _1;
					case 6:
						s[3] = Largs[0] = Lobj;
					case 7:
						_2 = true;
					case 8:
						if ((_2 && Lclass.__init__)) {
							s[2] = 9;
							lix(s, _7)
						};
					case 9:
						s[3] = Lobj
					default:
				}
				return s[3]
			}
			;
			return _6;
			});
	this.Ltrap = function (f) {
		return function (s) {
			s = s[PREV];
			var old = s[TRAP];
			s[TRAP] = f;
			return old;
		}
	}

	function _raise (s, e) {
		while (s) {
			defer(s);
			if (s[TRAP]) {
				var reraise = raise(s[PREV]);
				lix_start(function (s0) {
					lix(s0, s[TRAP](e, reraise));
				});
				break;
			}
			s = s[PREV];
		}
	}

	this.LCurrentRaiser = function () {
		return function (s) {
			return raise(s[PREV]);
		}
	}

	this.raise = function (s) {
		return function (e) {
			return function () {
				_raise(s, e);
			};
		};
	}

	this.LIdentity = (function (Lx) {
		var Larguments = arguments
		;
	function _3(s) {
		switch (s[2]) {
			case 0:
				s[3] = (function (Lappend) {
					var Larguments = arguments
					var _0;
				function _5(s) {
					switch (s[2]) {
						case 0:
							s[2] = 1;
							lix(s, Lappend(Lx));
						case 1:
							_0 = s[3]
						default:
					}
					return s[3]
				}
				;
				return _5;
				})
			default:
		}
		return s[3]
	}
	;
	return _3;
	}) 
	this.Lidentity = (function (Li) {
		return function () {
			return Li;
		}
	})

	this.LNaturalNumbers = (function (Lcb) {
		var Larguments = arguments
		var Li, _0, _1;
	function _5(s) {
		switch (s[2]) {
			case 0:
				s[2] = 1;
				lix(s, Lcb(Li));
			case 1:
				_0 = s[3];
			case 2:
				s[2] = 3;
				lix(s, L__add__(Li, 1));
			case 3:
				_1 = s[3];
			case 4:
				s[3] = Li = _1
			default:
		}
		return s[3]
	}
	;
	function _4(s) {
		switch (s[2]) {
			case 0:
				s[3] = Li = 0;
			case 1:
				while (1) {
					s[2] = 1;
					lix(s, _5)
				}
			default:
		}
		return s[3]
	}
	;
	return _4;
	})

	this.LN = this.LNaturalNumbers

	this.LMinorArgs2Fn = (function (Largs) {
				var Larguments = arguments
				var _0, Largs, _1;
			function _4(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, LArray.Slice(Largs));
					case 1:
						_0 = s[3];
					case 2:
						s[3] = Largs = _0;
					case 3:
						s[3] = Largs[0] = L__;
					case 4:
						s[2] = 5;
						lix(s, Lapply(Lcall, Largs));
					case 5:
						_1 = s[3]
					default:
				}
				return s[3]
			}
			;
			return _4;
			})

	this.Lreduce = (function (Lmonad, Lacc, Linit) {
				var Larguments = arguments
				;
			function _6(s) {
				switch (s[2]) {
					case 0:
						s[3] = (function (Lcb) {
							var Larguments = arguments
							var Lret, _1, _2, _3;
						function _8(s) {
							switch (s[2]) {
								case 0:
									s[3] = Lret = Linit;
								case 1:
									s[2] = 2;
									lix(s, Lmap(Lmonad, (function (Li) {
										var Larguments = arguments
										var _0;
									function _10(s) {
										switch (s[2]) {
											case 0:
												s[2] = 1;
												lix(s, Lacc(Lret, Li));
											case 1:
												_0 = s[3];
											case 2:
												s[3] = Lret = _0
											default:
										}
										return s[3]
									}
									;
									return _10;
									})));
								case 2:
									_1 = s[3];
								case 3:
									s[2] = 4;
									lix(s, Lcall(_1, Lidentity));
								case 4:
									_2 = s[3];
								case 5:
									s[2] = 6;
									lix(s, Lcb(Lret));
								case 6:
									_3 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _8;
						})
					default:
				}
				return s[3]
			}
			;
			return _6;
			})
	this.Lfilter = (function (Lmonad) {
				var Larguments = arguments
				var _0, Lfn;
			function _7(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, LMinorArgs2Fn(Larguments));
					case 1:
						_0 = s[3];
					case 2:
						s[3] = Lfn = _0;
					case 3:
						s[3] = (function (Lcb) {
							var Larguments = arguments
							var _4;
						function _9(s) {
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lcall(Lmonad, (function (Lx) {
										var Larguments = arguments
										var _1, _3, _2;
									function _12(s) {
										switch (s[2]) {
											case 0:
												_1 = false;
											case 1:
												s[2] = 2;
												lix(s, Lcb(Lx));
											case 2:
												_2 = s[3]
											default:
										}
										return s[3]
									}
									;
									function _11(s) {
										switch (s[2]) {
											case 0:
												_1 = true;
											case 1:
												s[2] = 2;
												lix(s, Lfn(Lx));
											case 2:
												_3 = s[3];
											case 3:
												if ((_1 && _3)) {
													s[2] = 4;
													lix(s, _12)
												}
											default:
										}
										return s[3]
									}
									;
									return _11;
									})));
								case 1:
									_4 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _9;
						})
					default:
				}
				return s[3]
			}
			;
			return _7;
			});

	this.Luntil = (function (Lmonad) {
				var Larguments = arguments
				var _0, Lfn;
			function _10(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, LMinorArgs2Fn(Larguments));
					case 1:
						_0 = s[3];
					case 2:
						s[3] = Lfn = _0;
					case 3:
						s[3] = (function (Lcb) {
							var Larguments = arguments
							var _7;
						function _12(s) {
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lcall(Lcc, (function (Lbrk) {
										var Larguments = arguments
										var _5, _6;
									function _14(s) {
										switch (s[2]) {
											case 0:
												s[2] = 1;
												lix(s, Lcall(Lmonad, (function (Lx) {
													var Larguments = arguments
													var _1, _3, _2, _4;
												function _17(s) {
													switch (s[2]) {
														case 0:
															_1 = false;
														case 1:
															s[2] = 2;
															lix(s, Lcall(Lbrk));
														case 2:
															_2 = s[3]
														default:
													}
													return s[3]
												}
												;
												function _16(s) {
													switch (s[2]) {
														case 0:
															_1 = true;
														case 1:
															s[2] = 2;
															lix(s, Lfn(Lx));
														case 2:
															_3 = s[3];
														case 3:
															if ((_1 && _3)) {
																s[2] = 4;
																lix(s, _17)
															};
														case 4:
															s[2] = 5;
															lix(s, Lcb(Lx));
														case 5:
															_4 = s[3]
														default:
													}
													return s[3]
												}
												;
												return _16;
												})));
											case 1:
												_5 = s[3];
											case 2:
												s[2] = 3;
												lix(s, Lcall(Lbrk));
											case 3:
												_6 = s[3]
											default:
										}
										return s[3]
									}
									;
									return _14;
									})));
								case 1:
									_7 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _12;
						})
					default:
				}
				return s[3]
			}
			;
			return _10;
			})	
	this.Lexec = (function (Lxlist) {
				var Larguments = arguments
				var _0;
			function _3(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, Lcall(Lxlist, Lidentity));
					case 1:
						_0 = s[3]
					default:
				}
				return s[3]
			}
			;
			return _3;
			});

	this.Lhook = (function (Lmonad) {
		var Larguments = arguments
		var _0, Lfn;
	function _6(s) {
		switch (s[2]) {
			case 0:
				s[2] = 1;
				lix(s, LMinorArgs2Fn(Larguments));
			case 1:
				_0 = s[3];
			case 2:
				s[3] = Lfn = _0;
			case 3:
				s[3] = (function (Lcb) {
					var Larguments = arguments
					var _3;
				function _8(s) {
					switch (s[2]) {
						case 0:
							s[2] = 1;
							lix(s, Lcall(Lmonad, (function (Lx) {
								var Larguments = arguments
								var _1, _2;
							function _10(s) {
								switch (s[2]) {
									case 0:
										s[2] = 1;
										lix(s, Lfn(Lx));
									case 1:
										_1 = s[3];
									case 2:
										s[2] = 3;
										lix(s, Lcb(Lx));
									case 3:
										_2 = s[3]
									default:
								}
								return s[3]
							}
							;
							return _10;
							})));
						case 1:
							_3 = s[3]
						default:
					}
					return s[3]
				}
				;
				return _8;
				})
			default:
		}
		return s[3]
	}
	;
	return _6;
	});

	this.Lmap = (function (Lx) {
		var Larguments = arguments
		var _0, _1, _2;
	function _5(s) {
		switch (s[2]) {
			case 0:
				s[2] = 1;
				lix(s, LMinorArgs2Fn(Larguments));
			case 1:
				_0 = s[3];
			case 2:
				s[2] = 3;
				lix(s, L__rcompose__(LIdentity, _0));
			case 3:
				_1 = s[3];
			case 4:
				s[2] = 5;
				lix(s, L__bind__(Lx, _1));
			case 5:
				_2 = s[3]
			default:
		}
		return s[3]
	}
	;
	return _5;
	})

	this.Lbind = (function (Lflist, Lf) {
		var Larguments = arguments
		;
	function _6(s) {
		switch (s[2]) {
			case 0:
				s[3] = (function (Lappend) {
					var Larguments = arguments
					var _3;
				function _8(s) {
					switch (s[2]) {
						case 0:
							s[2] = 1;
							lix(s, Lcall(Lflist, (function (Li) {
								var Larguments = arguments
								var _0, _2;
							function _10(s) {
								switch (s[2]) {
									case 0:
										s[2] = 1;
										lix(s, Lf(Li));
									case 1:
										_0 = s[3];
									case 2:
										s[2] = 3;
										lix(s, Lcall(_0, (function (Lj) {
											var Larguments = arguments
											var _1;
										function _12(s) {
											switch (s[2]) {
												case 0:
													s[2] = 1;
													lix(s, Lappend(Lj));
												case 1:
													_1 = s[3]
												default:
											}
											return s[3]
										}
										;
										return _12;
										})));
									case 3:
										_2 = s[3]
									default:
								}
								return s[3]
							}
							;
							return _10;
							})));
						case 1:
							_3 = s[3]
						default:
					}
					return s[3]
				}
				;
				return _8;
				})
			default:
		}
		return s[3]
	}
	;
	return _6;
	});

	function defer(s) {
		var f;
		var deferList = s[DEFER];
		while (f = deferList.pop()) {
			lix_start(function (s0) {
				lix(s0, f());
			});
		}
	}

	var calledTimes = 1;

	this.lix = function (s, f) {
		var ns = [ /*prev:*/ s, /*f:*/ f, /*step:*/ 0,
				/*ret:*/ undefined, /*defer*/ [], /*trap*/ undefined];
		if ((calledTimes ++) > 10000) {
			setImmediate(function () {
					lix_resume(s);
			});
			calledTimes = 1;
		}
		try {
			s[RET] = f(ns);
			calledTimes --;
		} catch (e) {
			if (e !== _lixCCException) {
				_raise(ns, e);
			}
			throw _lixCCException;
		}
		defer(ns);
		ns[PREV] = undefined;
		ns[F] = undefined;
		return s[RET];
	}

	this.lix_resume = function (s) {//resume continuations
		var ret = s[RET];
		try {
			while (s) {
				s[RET] = ret;

				try {
					ret = s[F](s);
					calledTimes --;
				} catch (e) {
					if (e !== _lixCCException) {
						_raise(s, e);
					}
					throw _lixCCException;
				}

				defer(s);
				s = s[PREV];
			}
		} catch (e) {
		}
	}

	this.lix_start = function (f) {
		try {
			f([/*PREV*/ null, /*F*/ function () {}, /*STEP*/ 0,
					/*RET*/ undefined, /*defer*/ []], /*trap*/ undefined);
		} catch (e) {
//					console.log(e);
		}
	}

	function _LixCCException() {
		this.message = 'cc call exception';
	}

	var _lixCCException = new _LixCCException();
	this._lixCCException = _lixCCException;

	this._require = function (__require) {
		return function (name) {
			if (__require.lixCache[name] === undefined) {
				var moduleName = name + '-lix';

				if (__require.lixLoadingCache[name]) {//loading
					return function () {
						return undefined;
					}
				}
				__require.lixLoadingCache[name] = true;
				var f = __require(moduleName);
				return function (s) {
					switch (s[STEP]) {
						case 0:
							s[STEP] = 1;
							lix(s, f);
						case 1:
							__require.lixCache[name] = s[RET];
							__require.lixLoadingCache[name] = undefined;
						default:
					}
					return s[RET];
				}
			}

			//cached result
			return function () {
				return __require.lixCache[name];
			}
		}
	}


	this.L__compose__ = (function (Lf0, Lf1) {
				var Larguments = arguments
				;
			function _4(s) {
				switch (s[2]) {
					case 0:
						s[3] = (function (Li) {
							var Larguments = arguments
							var _0, _1;
						function _6(s) {
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lf0(Li));
								case 1:
									_0 = s[3];
								case 2:
									s[2] = 3;
									lix(s, Lf1(_0));
								case 3:
									_1 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _6;
						})
					default:
				}
				return s[3]
			}
			;
			return _4;
			});

	this.L__rcompose__ = (function (Lf1, Lf0) {
				var Larguments = arguments
				;
			function _4(s) {
				switch (s[2]) {
					case 0:
						s[3] = (function (Li) {
							var Larguments = arguments
							var _0, _1;
						function _6(s) {
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lf0(Li));
								case 1:
									_0 = s[3];
								case 2:
									s[2] = 3;
									lix(s, Lf1(_0));
								case 3:
									_1 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _6;
						})
					default:
				}
				return s[3]
			}
			;
			return _4;
			});

	this.L__bind__ = (function (Lflist, Lf) {
				var Larguments = arguments
				;
			function _6(s) {
				switch (s[2]) {
					case 0:
						s[3] = (function (Lappend) {
							var Larguments = arguments
							var _3;
						function _8(s) {
							switch (s[2]) {
								case 0:
									s[2] = 1;
									lix(s, Lcall(Lflist, (function (Li) {
										var Larguments = arguments
										var _0, _2;
									function _10(s) {
										switch (s[2]) {
											case 0:
												s[2] = 1;
												lix(s, Lf(Li));
											case 1:
												_0 = s[3];
											case 2:
												s[2] = 3;
												lix(s, Lcall(_0, (function (Lj) {
													var Larguments = arguments
													var _1;
												function _12(s) {
													switch (s[2]) {
														case 0:
															s[2] = 1;
															lix(s, Lappend(Lj));
														case 1:
															_1 = s[3]
														default:
													}
													return s[3]
												}
												;
												return _12;
												})));
											case 3:
												_2 = s[3]
											default:
										}
										return s[3]
									}
									;
									return _10;
									})));
								case 1:
									_3 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _8;
						})
					default:
				}
				return s[3]
			}
			;
			return _6;
			});

	this.L__ = (function (Lfn) {
				var Larguments = arguments
				var _0, Largs;
			function _4(s) {
				switch (s[2]) {
					case 0:
						s[2] = 1;
						lix(s, LArray.Slice(Larguments, 0));
					case 1:
						_0 = s[3];
					case 2:
						s[3] = Largs = _0;
					case 3:
						s[3] = (function (Li) {
							var Larguments = arguments
							var _1;
						function _6(s) {
							switch (s[2]) {
								case 0:
									s[3] = Largs[0] = Li;
								case 1:
									s[2] = 2;
									lix(s, Lapply(Lfn, Largs));
								case 2:
									_1 = s[3]
								default:
							}
							return s[3]
						}
						;
						return _6;
						})
					default:
				}
				return s[3]
			}
			;
			return _4;
			});

	this.L__vcompose__ = (function (Ldf0, Ldf1) {
		var Larguments = arguments
		;
	function _7(s) {
		switch (s[2]) {
			case 0:
				s[3] = (function (Lx) {
					var Larguments = arguments
					;
				function _9(s) {
					switch (s[2]) {
						case 0:
							s[3] = (function (Lappend) {
								var Larguments = arguments
								var _0, _4;
							function _11(s) {
								switch (s[2]) {
									case 0:
										s[2] = 1;
										lix(s, Ldf0(Lx));
									case 1:
										_0 = s[3];
									case 2:
										s[2] = 3;
										lix(s, Lcall(_0, (function (Li) {
											var Larguments = arguments
											var _1, _3;
										function _13(s) {
											switch (s[2]) {
												case 0:
													s[2] = 1;
													lix(s, Ldf1(Li));
												case 1:
													_1 = s[3];
												case 2:
													s[2] = 3;
													lix(s, Lcall(_1, (function (Lj) {
														var Larguments = arguments
														var _2;
													function _15(s) {
														switch (s[2]) {
															case 0:
																s[2] = 1;
																lix(s, Lappend(Lj));
															case 1:
																_2 = s[3]
															default:
														}
														return s[3]
													}
													;
													return _15;
													})));
												case 3:
													_3 = s[3]
												default:
											}
											return s[3]
										}
										;
										return _13;
										})));
									case 3:
										_4 = s[3]
									default:
								}
								return s[3]
							}
							;
							return _11;
							})
						default:
					}
					return s[3]
				}
				;
				return _9;
				})
			default:
		}
		return s[3]
	}
	;
	return _7;
	}); 

	this.L__rvcompose__ = (function (Ldf1, Ldf0) {
		var Larguments = arguments
		;
	function _7(s) {
		switch (s[2]) {
			case 0:
				s[3] = (function (Lx) {
					var Larguments = arguments
					;
				function _9(s) {
					switch (s[2]) {
						case 0:
							s[3] = (function (Lappend) {
								var Larguments = arguments
								var _0, _4;
							function _11(s) {
								switch (s[2]) {
									case 0:
										s[2] = 1;
										lix(s, Ldf0(Lx));
									case 1:
										_0 = s[3];
									case 2:
										s[2] = 3;
										lix(s, Lcall(_0, (function (Li) {
											var Larguments = arguments
											var _1, _3;
										function _13(s) {
											switch (s[2]) {
												case 0:
													s[2] = 1;
													lix(s, Ldf1(Li));
												case 1:
													_1 = s[3];
												case 2:
													s[2] = 3;
													lix(s, Lcall(_1, (function (Lj) {
														var Larguments = arguments
														var _2;
													function _15(s) {
														switch (s[2]) {
															case 0:
																s[2] = 1;
																lix(s, Lappend(Lj));
															case 1:
																_2 = s[3]
															default:
														}
														return s[3]
													}
													;
													return _15;
													})));
												case 3:
													_3 = s[3]
												default:
											}
											return s[3]
										}
										;
										return _13;
										})));
									case 3:
										_4 = s[3]
									default:
								}
								return s[3]
							}
							;
							return _11;
							})
						default:
					}
					return s[3]
				}
				;
				return _9;
				})
			default:
		}
		return s[3]
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
			return setTimeout(function () {
				lix_start(function (s) {
					lix(s, ctx());
				});
			}, secs);
		}
	}

	this.Limmediately = function (ctx) {
		return function () {
			return setImmediate(function () {
				lix_start(function (s) {
					lix(s, ctx());
				});
			});
		}
	}

	this.Ldefer = function (f) {
		return function (s) {
			s[PREV][DEFER].push(f);
		}
	}

	function defer_until(s, s0)
	{
		while (s0 && s0 != s) {
			defer(s0);
			s0 = s0[PREV];
		}
	}

	this.Lcc = function cc(ctx) {
		return function (s) {
			s = s[PREV]
				function brk(ret) {
					return function (s0) {
						defer_until(s, s0);
						s[RET] = ret;
						setImmediate(function () {
								lix_resume(s);
						});
						throw _lixCCException;
					}
				}
			try {
				lix(s, ctx(brk));
			} catch (e) {
				if (e !== _lixCCException) {
					_raise(s, e);
				}
				//				console.log(e);
			}
			throw _lixCCException;
		}
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

	this.LArray = Array;

	Array.Join = Array.prototype.Join = function (arr, glue) {
		return function () {
			return arr.join(glue)
		}
	}

	Array.IsArray = Array.prototype.IsArray = function (arr) {
		return function () {
			return Array.isArray(arr);
		};
	}

	Array.ToString = Array.prototype.ToString = function (arr) {
		return function () {
			return arr.toString();
		};
	}

	Array.ToLocaleString = Array.prototype.ToLocaleString = function (arr) {
		return function () {
			return arr.toLocaleString();
		};
	}

	Array.Concat = Array.prototype.Concat = function (a, b) {
		return function () {
			return a.concat(b);
		};
	}

	Array.Push = Array.prototype.Push = function (a, b) {
		return function () {
			return a.push(b);
		};
	}

	Array.Unshift = Array.prototype.Unshift = function (a, b) {
		return function () {
			return a.unshift(b);
		};
	}

	Array.Pop = Array.prototype.Pop = function (a) {
		return function () {
			return a.pop();
		};
	}

	Array.Shift = Array.prototype.Shift = function (a) {
		return function () {
			return a.shift();
		};
	}

	Array.Reverse = Array.prototype.Reverse = function (a) {
		return function () {
			return a.reverse();
		};
	}

	Array.Slice = Array.prototype.Slice = function (a, start, end) {
		return function () {
			return array_slice(a, start, end);
		};
	}

	Array.IndexOf = Array.prototype.IndexOf = function (a, elem, start) {
		return function () {
			return a.indexOf(elem, start);
		};
	}

	Array.LastIndexOf = Array.prototype.LastIndexOf = function (a, elem, start) {
		if (arguments.length == 2) {
			start = a.length
		}
		return function () {
			return a.lastIndexOf(elem, start);
		};
	}

	Array.Length = Array.prototype.Length = function (a) {
		return function () {
			return a.length;
		};
	}
	var array_slice = Array.prototype.slice.unCurrying();
	Array.Splice = Array.prototype.Splice = function (a) {
		var args = array_slice(arguments, 1);
		return function () {
			return Array.prototype.splice.apply(a, args);
		};
	}

	this.LObject = Object;
	Object.Keys = Object.prototype.Keys = function (a) {
		return function () {
			return Object.keys(a);
		};
	}

	Object.GetPrototypeOf = Object.prototype.GetPrototypeOf = function (a) {
		return function () {
			return Object.getPrototypeOf(a);
		};
	}

	Object.GetOwnPropertyDescriptor = Object.prototype.GetOwnPropertyDescriptor = function (o, p) {
		return function () {
			return Object.getOwnPropertyDescriptor(o, p);
		};
	}

	Object.GetOwnPropertyNames = Object.prototype.GetOwnPropertyNames = function (o) {
		return function () {
			return Object.getOwnPropertyNames(o);
		};
	}

	Object.Create = Object.prototype.Create = function (o) {
		return function () {
			return Object.create(o);
		};
	}

	Object.DefineProperty = Object.prototype.DefineProperty = function (o, p, attribute) {
		return function () {
			return Object.defineProperty(o, p, attribute);
		};
	}

	Object.DefineProperties = Object.prototype.DefineProperties = function (o, properties) {
		return function () {
			return Object.defineProperties(o, properties);
		};
	}

	Object.Seal = Object.prototype.Seal = function (o) {
		return function () {
			return Object.seal(o);
		};
	}

	Object.Freeze = Object.prototype.Freeze = function (o) {
		return function () {
			return Object.freeze(o);
		};
	}

	Object.PreventExtensions = Object.prototype.PreventExtensions = function (o) {
		return function () {
			return Object.preventExtensions(o);
		};
	}

	Object.IsSealed = Object.prototype.IsSealed = function (o) {
		return function () {
			return Object.isSealed(o);
		};
	}

	Object.IsFrozen = Object.prototype.IsFrozen = function (o) {
		return function () {
			return Object.isFrozen(o);
		};
	}

	Object.IsExtensible = Object.prototype.IsExtensible = function (o) {
		return function () {
			return Object.isExtensible(o);
		};
	}

	Object.ToString = Object.prototype.ToString = function (o) {
		return function () {
			return o.toString();
		};
	}

	Object.ToLocaleString = Object.prototype.ToLocaleString = function (o) {
		return function () {
			return o.toLocaleString();
		};
	}

	Object.ValueOf = Object.prototype.ValueOf = function (o) {
		return function () {
			return o.valueOf();
		};
	}

	Object.HasOwnProperty = Object.prototype.HasOwnProperty = function (o, v) {
		return function () {
			return o.hasOwnProperty(v);
		};
	}

	Object.IsPrototypeOf = Object.prototype.IsPrototypeOf = function (o, v) {
		return function () {
			return o.isPrototypeOf(v);
		};
	}

	Object.PropertyIsEnumerable = Object.prototype.PropertyIsEnumerable = function (o, v) {
		return function () {
			return o.propertyIsEnumerable(v);
		};
	}

	this.LString = String

		String.FromCharCode = String.prototype.FromCharCode = function () {
			var args = array_slice(arguments);
			return function () {
				return String.fromCharCode.apply(null, args);
			};
		};

	String.ToString = String.prototype.ToString = function (a) {
		return function () {
			return a.toString();
		}
	}

	String.ValueOf = String.prototype.ValueOf = function (a) {
		return function () {
			return a.valueOf();
		}
	}

	String.CharAt = String.prototype.CharAt = function (a, pos) {
		return function () {
			return a.charAt(pos);
		}
	}

	String.CharCodeAt = String.prototype.CharCodeAt = function (a, pos) {
		return function () {
			return a.charCodeAt(pos);
		}
	}

	String.Concat = String.prototype.Concat = function (str) {
		var args = array_slice(arguments, 1);
		return function () {
			return str.concat.apply(str, args);
		}
	}

	String.IndexOf = String.prototype.IndexOf = function (str, pos) {
		return function () {
			return str.indexOf(pos);
		}
	}

	String.LastIndexOf = String.prototype.LastIndexOf = function (str, pos) {
		return function () {
			return str.lastIndexOf(pos);
		}
	}

	String.LocaleCompare = String.prototype.LocaleCompare = function (str, pos) {
		return function () {
			return str.localeCompare(pos);
		}
	}

	String.Match = String.prototype.Match = function (str, r) {
		return function () {
			return str.match(r);
		}
	}

	String.Replace = String.prototype.Replace = function (str, searchValue, replaceValue) {
		return function () {
			return str.replace(searchValue, replaceValue);
		}
	}

	String.Search = String.prototype.Search = function (str, r) {
		return function () {
			return str.search(r);
		}
	}

	String.Slice = String.prototype.Slice = function (str, start, end) {
		return function () {
			return str.slice(start, end);
		}
	}

	String.Split = String.prototype.Split = function (str, separator, limit) {
		return function () {
			return str.split(separator, limit);
		}
	}

	String.Substring = String.prototype.Substring = function (str, start, end) {
		return function () {
			return str.substring(start, end);
		}
	}

	String.ToLowerCase = String.prototype.ToLowerCase = function (str) {
		return function () {
			return str.toLowerCase();
		}
	}

	String.ToLocaleLowerCase = String.prototype.ToLocaleLowerCase = function (str) {
		return function () {
			return str.toLocaleLowerCase();
		}
	}

	String.IsString = String.prototype.IsString = function (str) {
		return function () {
			return typeof str == 'string';
		}
	}

	String.ToUpperCase = String.prototype.ToUpperCase = function (str) {
		return function () {
			return str.toUpperCase();
		}
	}

	String.ToLocaleUpperCase = String.prototype.ToLocaleUpperCase = function (str) {
		return function () {
			return str.toLocaleUpperCase();
		}
	}

	String.Trim = String.prototype.Trim = function (str) {
		return function () {
			return str.trim();
		}
	}

	String.Length = String.prototype.Length = function (str) {
		return function () {
			return str.length;
		}
	}

	this.LBoolean = Boolean;

	Boolean.ToString = Boolean.prototype.ToString = function (b) {
		return function () {
			return b.toString();
		}
	}

	Boolean.ValueOf = Boolean.prototype.ValueOf = function (v) {
		return function () {
			return v.valueOf();
		}
	}

	this.LNumber = Number;
	Number.prototype.MAX_VALUE = Number.MAX_VALUE
	Number.prototype.MIN_VALUE = Number.MIN_VALUE
	Number.prototype.NaN = Number.NaN
	Number.prototype.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY
	Number.prototype.POSITIVE_INFINITY = Number.POSITIVE_INFINITY

		Number.ToString = Number.prototype.ToString = function (v) {
			return function () {
				return v.toString();
			}
		}

	Number.ToLocaleString = Number.prototype.ToLocaleString = function (v) {
		return function () {
			return v.toLocaleString();
		}
	}

	Number.ValueOf = Number.prototype.ValueOf = function (v) {
		return function () {
			return v.valueOf();
		}
	}

	Number.ToFixed = Number.prototype.ToFixed = function (v, fractionDigits) {
		return function () {
			return v.toFixed(fractionDigits);
		}
	}

	Number.ToExponential = Number.prototype.ToExponential = function (v, fractionDigits) {
		return function () {
			return v.toExponential(fractionDigits);
		}
	}

	Number.ToPrecision = Number.prototype.ToPrecision = function (v, precision) {
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

	this.LDate = Date;

	Date.Parse = Date.prototype.Parse = function (str) {
		return function () {
			return Date.parse(str);
		}
	}

	Date.UTC = Date.prototype.UTC = function () {
		var args = array_slice(arguments);
		return function () {
			return Date.UTC.apply(null, args);
		}
	}

	Date.Now = Date.prototype.Now = function () {
		return function () {
			return Date.now();
		}
	}

	Date.ToString = Date.prototype.ToString = function (x) {
		return function () {
			return x.toString();
		}
	}

	Date.ToDateString = Date.prototype.ToDateString = function (x) {
		return function () {
			return x.toDateString();
		}
	}

	Date.ToTimeString = Date.prototype.ToTimeString = function (x) {
		return function () {
			return x.toTimeString();
		}
	}

	Date.ToLocaleString = Date.prototype.ToLocaleString = function (x) {
		return function () {
			return x.toLocaleString();
		}
	}

	Date.ToLocaleDateString = Date.prototype.ToLocaleDateString = function (x) {
		return function () {
			return x.toLocaleDateString();
		}
	}

	Date.ToLocaleTimeString = Date.prototype.ToLocaleTimeString = function (x) {
		return function () {
			return x.toLocaleTimeString();
		}
	}

	Date.ValueOf = Date.prototype.ValueOf = function (x) {
		return function () {
			return x.valueOf();
		}
	}

	Date.GetTime = Date.prototype.GetTime = function (x) {
		return function () {
			return x.getTime();
		}
	}

	Date.GetFullYear = Date.prototype.GetFullYear = function (x) {
		return function () {
			return x.getFullYear();
		}
	}

	Date.GetUTCFullYear = Date.prototype.GetUTCFullYear = function (x) {
		return function () {
			return x.getUTCFullYear();
		}
	}

	Date.GetMonth = Date.prototype.GetMonth = function (x) {
		return function () {
			return x.getMonth();
		}
	}

	Date.GetUTCMonth = Date.prototype.GetUTCMonth = function (x) {
		return function () {
			return x.getUTCMonth();
		}
	}

	Date.GetDate = Date.prototype.GetDate = function (x) {
		return function () {
			return x.getDate();
		}
	}

	Date.GetUTCDate = Date.prototype.GetUTCDate = function (x) {
		return function () {
			return x.getUTCDate();
		}
	}

	Date.GetDay = Date.prototype.GetDay = function (x) {
		return function () {
			return x.getDay();
		}
	}

	Date.GetUTCDay = Date.prototype.GetUTCDay = function (x) {
		return function () {
			return x.getUTCDay();
		}
	}

	Date.GetHours = Date.prototype.GetHours = function (x) {
		return function () {
			return x.getHours();
		}
	}

	Date.GetUTCHours = Date.prototype.GetUTCHours = function (x) {
		return function () {
			return x.getUTCHours();
		}
	}

	Date.GetMinutes = Date.prototype.GetMinutes = function (x) {
		return function () {
			return x.getMinutes();
		}
	}

	Date.GetUTCMinutes = Date.prototype.GetUTCMinutes = function (x) {
		return function () {
			return x.getUTCMinutes();
		}
	}

	Date.GetSeconds = Date.prototype.GetSeconds = function (x) {
		return function () {
			return x.getSeconds();
		}
	}

	Date.GetUTCSeconds = Date.prototype.GetUTCSeconds = function (x) {
		return function () {
			return x.getUTCSeconds();
		}
	}

	Date.GetMilliseconds = Date.prototype.GetMilliseconds = function (x) {
		return function () {
			return x.getMilliseconds();
		}
	}

	Date.GetUTCMilliseconds = Date.prototype.GetUTCMilliseconds = function (x) {
		return function () {
			return x.getUTCMilliseconds();
		}
	}

	Date.GetTimezoneOffset = Date.prototype.GetTimezoneOffset = function (x) {
		return function () {
			return x.getTimezoneOffset();
		}
	}

	Date.SetTime = Date.prototype.SetTime = function (x, v) {
		return function () {
			return x.setTime(v);
		}
	}

	Date.SetMilliseconds = Date.prototype.SetMilliseconds = function (x, v) {
		return function () {
			return x.setMilliseconds(v);
		}
	}

	Date.SetMilliseconds = Date.prototype.SetMilliseconds = function (x, v) {
		return function () {
			return x.setMilliseconds(v);
		}
	}

	Date.SetUTCMilliseconds = Date.prototype.SetUTCMilliseconds = function (x, v) {
		return function () {
			return x.setUTCMilliseconds(v);
		}
	}

	Date.SetSeconds = Date.prototype.SetSeconds = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setSeconds.apply(x, args);
		}
	}

	Date.SetUTCSeconds = Date.prototype.SetUTCSeconds = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCSeconds.apply(x, args);
		}
	}

	Date.SetMinutes = Date.prototype.SetMinutes = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setMinutes.apply(x, args);
		}
	}

	Date.SetUTCMinutes = Date.prototype.SetUTCMinutes = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCMinutes.apply(x, args);
		}
	}

	Date.SetHours = Date.prototype.SetHours = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setHours.apply(x, args);
		}
	}

	Date.SetUTCHours = Date.prototype.SetUTCHours = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCHours.apply(x, args);
		}
	}

	Date.SetDate = Date.prototype.SetDate = function (x, v) {
		return function () {
			return x.setDate(v);
		}
	}

	Date.SetUTCDate = Date.prototype.SetUTCDate = function (x, v) {
		return function () {
			return x.setUTCDate(v);
		}
	}

	Date.SetMonth = Date.prototype.SetMonth = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setMonth.apply(x, args);
		}
	}

	Date.SetUTCMonth = Date.prototype.SetUTCMonth = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCMonth.apply(x, args);
		}
	}

	Date.SetFullYear = Date.prototype.SetFullYear = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setFullYear.apply(x, args);
		}
	}

	Date.SetUTCFullYear = Date.prototype.SetUTCFullYear = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return x.setUTCFullYear.apply(x, args);
		}
	}

	Date.ToUTCString = Date.prototype.ToUTCString = function (x) {
		return function () {
			return x.toUTCString();
		}
	}

	Date.ToISOString = Date.prototype.ToISOString = function (x) {
		return function () {
			return x.toISOString();
		}
	}

	Date.ToJSON = Date.prototype.ToJSON = function (x, key) {
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

	this.LRegExp = RegExp

		RegExp.Exec = RegExp.prototype.Exec = function (r, str) {
			return function () {
				return r.exec(str);
			}
		}

	RegExp.Test = RegExp.prototype.Test = function (r, str) {
		return function () {
			return r.test(str);
		}
	}

	RegExp.ToString = RegExp.prototype.ToString = function (r) {
		return function () {
			return r.toString();
		}
	}


	this.Lerror = function (message) {
		return function () {
			return new Error(message);
		}
	}

	Error.ToString = Error.prototype.ToString = function (e) {
		return function () {
			return e.toString();
		}
	}

	this.LError = Error;
	this.LEvalError = EvalError;
	this.LReferenceError = ReferenceError;
	this.LSyntaxError = SyntaxError;
	this.LTypeError = TypeError;
	this.LURIError = URIError;

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

	this.LFunction = Function;
})();

