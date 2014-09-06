(function () {
	this.timeout = function (secs, ctx) {
		return function () {
			setTimeout(function () {
				try {
					a = ctx()(function (x) {return x;}, 0);
				} catch (e) {
				}
			}, secs);
		}
	}
	this.immediately = function (ctx) {
		return function () {
			setImmediate(function () {
				try {
					a = ctx()(function (x) {return x;}, 0);
				} catch (e) {
				}
			});
		}
	}
	this.cc = function (ctx) {
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

	this.array_join = function (arr, glue) {
		return function () {
			return arr.join(glue)
		}
	}
	this.print = function (x) {
		return function () {
			return console.log(x); 
		}
	}
	this.not = function (x) {
		return function () {
			return !x; 
		}
	}
	this._instance_ = function _instance_(x) {
		return function () {
			return new x(); 
		}
	}
	this.__add__ = function __add__(x, y) {
		return function () {
			return x + y;
		}
	}
	this.__sub__ = function __sub__(x, y) {
		return function () {
			return x - y;
		}
	}
	this.__mul__ = function __mul__(x, y) {
		return function () {
			return x * y;
		}
	}
	this.__div__ = function __div__(x, y) {
		return function () {
			return x / y;
		}
	}
	this.__mod__ = function __mod__(x, y) {
		return function () {
			return x % y;
		}
	}
	this.__gt__ = function __gt__(x, y) {
		return function () {
			return x > y;
		}
	}
	this.__ge__ = function __ge__(x, y) {
		return function () {
			return x >= y;
		}
	}
	this.__eq__ = function __eq__(x, y) {
		return function () {
			return x == y;
		}
	}
	this.__ne__ = function __ne__(x, y) {
		return function () {
			return x != y;
		}
	}
	this.__le__ = function __le__(x, y) {
		return function () {
			return x <= y;
		}
	}
	this.__lt__ = function __lt__(x, y) {
		return function () {
			return x < y;
		}
	}
	this.isFunction = function isFunction(x) {
		return function () {
			return typeof x === 'function';
		}
	}
	this.isArray = function isArray(x) {
		return function () {
			return x instanceof Array;
		}
	}
	this.foreach = function foreach(arr, cb) {
		return function () {
			for (var i in arr) {
				cb(arr[i], i)();
			}
		}
	}
	this.apply = (function () {}).apply;
	this.call = function call(fn) {
		return fn.apply(fn, Array.prototype.slice.call(arguments, 1, arguments.length));
	}

})();
