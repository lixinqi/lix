(function () {
	this.LIX_timeout = function (secs, ctx) {
		return function () {
			setTimeout(function () {
				try {
					a = ctx()(function (x) {return x;}, 0);
				} catch (e) {
				}
			}, secs);
		}
	}
	this.LIX_immediately = function (ctx) {
		return function () {
			setImmediate(function () {
				try {
					a = ctx()(function (x) {return x;}, 0);
				} catch (e) {
				}
			});
		}
	}
	this.LIX_cc = function (ctx) {
		function _self(cb, step, cont, a) {
			var brk = function (ret) {
				function _self(_cb, step, cont, a) {
					setImmediate(function () {
						try {
							cb(ret);
						} catch (e) {
						}
					});
					throw 0;
				}
				return _self;
			};

			setImmediate(function () {
				try {
					a = ctx(brk)(function (x) {return x;}, 0);
				} catch (e) {
				}
			});
			throw 0;
		}
		return _self;
	}

	this.LIX_array_join = function (arr, glue) {
		return function () {
			return arr.join(glue)
		}
	}
	this.LIX_print = function (x) {
		return function () {
			return console.log(x); 
		}
	}
	this.LIX_not = function (x) {
		return function () {
			return !x; 
		}
	}
	this.LIX__instance_ = function _instance_(x) {
		return function () {
			return new x(); 
		}
	}
	this.LIX___add__ = function __add__(x, y) {
		return function () {
			return x + y;
		}
	}
	this.LIX___sub__ = function __sub__(x, y) {
		return function () {
			return x - y;
		}
	}
	this.LIX___mul__ = function __mul__(x, y) {
		return function () {
			return x * y;
		}
	}
	this.LIX___div__ = function __div__(x, y) {
		return function () {
			return x / y;
		}
	}
	this.LIX___mod__ = function __mod__(x, y) {
		return function () {
			return x % y;
		}
	}
	this.LIX___gt__ = function __gt__(x, y) {
		return function () {
			return x > y;
		}
	}
	this.LIX___ge__ = function __ge__(x, y) {
		return function () {
			return x >= y;
		}
	}
	this.LIX___eq__ = function __eq__(x, y) {
		return function () {
			return x == y;
		}
	}
	this.LIX___ne__ = function __ne__(x, y) {
		return function () {
			return x != y;
		}
	}
	this.LIX___le__ = function __le__(x, y) {
		return function () {
			return x <= y;
		}
	}
	this.LIX___lt__ = function __lt__(x, y) {
		return function () {
			return x < y;
		}
	}
	this.LIX_isFunction = function isFunction(x) {
		return function () {
			return typeof x === 'function';
		}
	}
	this.LIX_isArray = function isArray(x) {
		return function () {
			return x instanceof Array;
		}
	}
	this.LIX_apply = (function () {}).apply;
	this.LIX_call = function call(fn) {
		return fn.apply(fn, Array.prototype.slice.call(arguments, 1, arguments.length));
	}
	this.LIX_foreach = function (LIX_arr, LIX_cb) {
		var LIX_i, _ret, _0, _1, _2, _3;
		function _16(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					_ret = LIX_cb(LIX_arr[LIX_i], LIX_i)(function (_ret) {
						return _16(_cb, 1, true, _ret);
					}, 0);
				case 1:
					_2 = _ret;
				case 2:
					_2;
				case 3:
					_ret = LIX___add__(LIX_i, 1)(function (_ret) {
						return _16(_cb, 4, true, _ret);
					}, 0);
				case 4:
					_3 = _ret;
				case 5:
					LIX_i = _3;
				case 6:
					_ret = LIX___lt__(LIX_i, LIX_arr.length)(function (_ret) {
						return _16(_cb, 7, true, _ret);
					}, 0);
				case 7:
					_1 = _ret
				default:
			}
			if (_cont) {
				_cb(_ret)
			} else {
				return _ret
			}
		};
		function _15(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					LIX_i = 0;
				case 4:
					_ret = LIX___lt__(LIX_i, LIX_arr.length)(function (_ret) {
						return _15(_cb, 5, true, _ret);
					}, 0);
				case 5:
					_1 = _ret;
				case 6:
					while (_1) {
						_16(function (_ret) {
							return _15(_cb, 6, true, _ret);
						}, 0)
					};
				case 7:

				default:
			}
			if (_cont) {
				_cb(_ret)
			} else {
				return _ret
			}
		};
		return _15;
	};
})();
