fs = require('fs');

var jumpCall = function (ctx) {
	var outOfDomain = false;
	function _self(cb, step, cont, a) {
		var brk = function (ret) {
			function _self(_cb, step, cont, a) {
				setImmediate(function () {
					try {
						cb(ret);
					} catch (e) {
					}
				});
				if (!outOfDomain) {
					throw 0;
				}
			}
			return _self;
		};

		setImmediate(function () {
			try {
				a = ctx(brk)(function (x) {return x;}, 0);
				cb(a);
			} catch (e) {
			}
			outOfDomain = true;
		});
		throw 0;
	}
	return _self;
}

var callcc = function (ctx) {
	var outOfDomain = false;
	function _self(cb, step, cont, a) {
		var brk = function (ret) {
			function _self(_cb, step, cont, a) {
				setImmediate(function () {
					try {
						cb(ret);
					} catch (e) {
					}
				});
				if (!outOfDomain) {
					throw 0;
				}
			}
			return _self;
		};

		setImmediate(function () {
			try {
				a = ctx(brk)(function (x) {return x;}, 0);
//				cb(a);
			} catch (e) {
			}
			outOfDomain = true;
		});
		throw 0;
	}
	return _self;
}


try {
	var func = function (x) {
		function _self(cb, step, cont, a) {

				switch (step) {
					case 0:
						x = x + 1;
					default:
				}
				if (cont) {
					cb(x);
				} else {
					return x;
				}
		}
		return  _self;
	}

	var  func0 = function (x) {
		function _self(cb, step, cont, a) {

				switch (step) {
					case 0:
						x = x + 1;
						a = x;
					case 1:
						a = callcc(function (brk) {
							function _self(cb, step, cont, a) {
								switch (step) {
									case 0:
										fs.readdir('./', function (err, x) {
											brk(x)(function (x) {return _self(cb, 1, true, x)}, 0);
										});
									case 1:
									default:
								}
								if (cont) {
									cb(x);
								} else {
									return x;
								}
							}
							return _self;
						})(function (x) { return _self(cb, 2, true, x)}, 0);
					case 2:
						console.log(a);
					default:
				}

				if (cont) {
						cb(a);
				} else {
					return a;
				}
		}
		return _self;
	}

	var test0 = function (x) {
		var nice = 'var nice';
		function _self(cb, step, cont, a) {

				switch (step) {
					case 0:
						a = x;
						nice = nice + a;
						a = func(a)(function (x) { return _self(cb, 1, true, x);}, 0);
//						console.log('test0:' + 'after step' + a);
					case 1:
						nice = nice + a;
						a = func0(a)(function (x) { return _self(cb, 2, true, x);}, 0);
//						console.log('test0:' + 'after step' + a);
					case 2:
						nice = nice + a;
						a = func(a)(function (x) { return _self(cb, 3, true, x);}, 0);
//						console.log('test0:' + 'after step' + a);
					default:
				}
				if (cont) {
					cb(a);
				} else {
					return a;
				}
		};
		return  _self;
	}

	function test() {
		var nice = 'var-nice';
		var cond = true;
		var count = 0;
		function _self_if(cb, step, cont, a) {
				switch (step) {
					case 0:
						a = 10;
						a = test0(a)(function (x) { return _self_if(cb, 1, true, x);}, 0);
					case 1:
						a = test0(a)(function (x) { return _self_if(cb, 2, true, x);}, 0);
					case 2:
						a = test0(a)(function (x) { return _self_if(cb, 3, true, x);}, 0);
					default:
				}
				if (cont) {
					cb(a);
				} else {
					return a;
				}
		}

		function _self_else(cb, step, cont, a) {
				switch (step) {
					case 0:
						a = 30;
						a = test0(a)(function (x) { return _self_else(cb, 1, true, x);}, 0);
					case 1:
						a = test0(a)(function (x) { return _self_else(cb, 2, true, x);}, 0);
					case 2:
						a = test0(a)(function (x) { return _self_else(cb, 3, true, x);}, 0);
					default:
				}
				if (cont) {
					cb(a);
				} else {
					return a;
				}
		}
		function _self_elseif(cb, step, cont, a) {
				switch (step) {
					case 0:
						a = 20;
						a = test0(a)(function (x) { return _self_else(cb, 1, true, x);}, 0);
					case 1:
						a = test0(a)(function (x) { return _self_else(cb, 2, true, x);}, 0);
					case 2:
						a = test0(a)(function (x) { return _self_else(cb, 3, true, x);}, 0);
					default:
				}
				if (cont) {
					cb(a);
				} else {
					return a;
				}
		}

		function _self_while(cb, step, cont, a) {
				switch (step) {
					case 0:
						a = 50;
//						console.log('in-while:' + count); 
						a = func0(count)(function (x) { return _self_while(cb, 1, true, x);}, 0);
					case 1:
						console.log("count:" + count);
						count = count + 1;
						a = count;
					default:
				}
				if (cont) {
					cb(a);
				} else {
					return a;
				}
		}

		function _self(cb, step, cont, a) {
				switch (step) {
					case 0:
						a = 0;
						nice = nice + a;
//						a = test0(a)(function (x) { return _self(cb, 1, true, x);}, 0);
					case 1:
						nice = nice + a;
//						a = test0(a)(function (x) { return _self(cb, 2, true, x);}, 0);
					case 2:
						nice = nice + a;
//						a = test0(a)(function (x) { return _self(cb, 3, true, x);}, 0);
					case 3:
						nice = nice + a;
						a = true;
						if (cond && a) {
							cond = false;
//							_self_if(function (x) { return _self(cb, 4, true, x);}, 0);
						}
					case 4:
						a = false;
					 	if (cond && a) {
							cond = false;
//							_self_elseif(function (x) { return _self(cb, 5, true, x);}, 0);
						}
					case 5:
					 	if (cond) {
//							_self_else(function (x) { return _self(cb, 6, true, x);}, 0);
						}
					case 6:
						a = count < 10;
						while (a) {
							_self_while(function (x) {return _self(cb, 6, true, x);}, 0);
							a = count < 10;
						}
					case 7:
						a = jumpCall(anonymouse)(function (x) {return _self(cb, 8, true, x);}, 0);
					default:
				}
				console.trace('--nice--' + count);
				if (cont) {
					cb(a);
				} else {
					return a;
				}
		}

		var anonymouse = function (brk) {
			function _self_while0(cb, step, cont, a) {
					switch (step) {
						case 0:
							a = 50;
							console.log('count:' + count); 
							count = count + 1;
						case 1:
							if (count > 14) {
//							brk(a)(function (x) {_self_while0(cb, 2, true, x);}, 0)
							}
							a = count;
						default:
					}
					if (cont) {
						cb(a);
					} else {
						return a;
					}
			}

			function _self(cb, step, cont, a) {
				switch (step) {
					case 0:
						a = count < 20;
						while (a) {
							_self_while0(function (x) { return _self(cb, 0, true, x);}, 0);
							a = count < 20;
						}
					default:
				}
				if (cont) {
					cb(a);
				} else {
					return a;
				}
			}
			return _self;
		}
		
		return _self;
	}

	test()(function (x) {
		return x;
	}, 0);
} catch (e) {
}

