(function () {

	Function.prototype.unCurrying = function() {
		return this.call.bind(this);
	};
	
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

	this.LIX_apply = function (fn, args) {
		return fn.apply(fn, args);
	};

	this.LIX_call = function (fn) {
		return fn.apply(fn, Array_slice(arguments, 1));
	};

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

	this.LIX_Array_isArray = function (arr) {
		return function () {
			return Array.isArray(arr);
		};
	}

	var Array_toString = Array.prototype.toString.unCurrying();
	this.LIX_Array_toString = function (arr) {
		return function () {
			return Array_toString(arr);
		};
	}

	var Array_toLocaleString = Array.prototype.toLocaleString.unCurrying();
	this.LIX_Array_toLocaleString = function (arr) {
		return function () {
			return Array_toLocaleString(arr);
		};
	}

	var Array_concat = Array.prototype.concat.unCurrying();
	this.LIX_Array_concat = function (a, b) {
		return function () {
			return Array_concat(a, b);
		};
	}

	var Array_join = Array.prototype.join.unCurrying();
	this.LIX_Array_join = function (a, b) {
		return function () {
			return Array_join(a, b);
		};
	}

	var Array_push = Array.prototype.push.unCurrying();
	this.LIX_Array_push = function (a, b) {
		return function () {
			return Array_push(a, b);
		};
	}

	var Array_unshift = Array.prototype.unshift.unCurrying();
	this.LIX_Array_unshift = function (a, b) {
		return function () {
			return Array_unshift(a, b);
		};
	}

	var Array_pop = Array.prototype.pop.unCurrying();
	this.LIX_Array_pop = function (a) {
		return function () {
			return Array_pop(a);
		};
	}

	var Array_shift = Array.prototype.shift.unCurrying();
	this.LIX_Array_shift = function (a) {
		return function () {
			return Array_shift(a);
		};
	}

	var Array_reverse = Array.prototype.reverse.unCurrying();
	this.LIX_Array_reverse = function (a) {
		return function () {
			return Array_reverse(a);
		};
	}

	var Array_slice = Array.prototype.slice.unCurrying();
	this.LIX_Array_slice = function (a, start, end) {
		return function () {
			return Array_slice(a, start, end);
		};
	}

	var Array_indexOf = Array.prototype.indexOf.unCurrying();
	this.LIX_Array_indexOf = function (a, elem, start) {
		return function () {
			return Array_indexOf(a, elem, start);
		};
	}

	var Array_lastIndexOf = Array.prototype.lastIndexOf.unCurrying();
	this.LIX_Array_lastIndexOf = function (a, elem, start) {
		if (arguments.length == 2) {
			start = a.length
		}
		return function () {
			return Array_lastIndexOf(a, elem, start);
		};
	}

	this.LIX_Array_length = function (a) {
		return function () {
			return a.length;
		};
	}

	this.LIX_Array_splice = function (a) {
		var args = Array_slice(arguments, 1);
		return function () {
			return Array.prototype.splice.apply(a, args);
		};
	}

	this.LIX_Object_keys = function (a) {
		return function () {
			try {
				return Object.keys(a);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_getPrototypeOf = function (a) {
		return function () {
			try {
				return Object.getPrototypeOf(a);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_getOwnPropertyDescriptor = function (o, p) {
		return function () {
			try {
				return Object.getOwnPropertyDescriptor(o, p);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_getOwnPropertyNames = function (o) {
		return function () {
			try {
				return Object.getOwnPropertyNames(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_create = function (o) {
		return function () {
			try {
				return Object.create(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_defineProperty = function (o, p, attribute) {
		return function () {
			try {
				return Object.defineProperty(o, p, attribute);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_defineProperties = function (o, properties) {
		return function () {
			try {
				return Object.defineProperties(o, properties);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_seal = function (o) {
		return function () {
			try {
				return Object.seal(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_freeze = function (o) {
		return function () {
			try {
				return Object.freeze(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_preventExtensions = function (o) {
		return function () {
			try {
				return Object.preventExtensions(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_isSealed = function (o) {
		return function () {
			try {
				return Object.isSealed(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_isFrozen = function (o) {
		return function () {
			try {
				return Object.isFrozen(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_Object_isExtensible = function (o) {
		return function () {
			try {
				return Object.isExtensible(o);
			} catch (e) {
				return e;
			}
		};
	}

	var Object_toString = Object.prototype.toString.unCurrying();
	this.LIX_Object_toString = function (o) {
		return function () {
			try {
				return Object_toString(o);
			} catch (e) {
				return e;
			}
		};
	}

	var Object_toLocaleString = Object.prototype.toString.unCurrying();
	this.LIX_Object_toLocaleString = function (o) {
		return function () {
			try {
				return Object_toLocaleString(o);
			} catch (e) {
				return e;
			}
		};
	}

	var Object_valueOf = Object.prototype.valueOf.unCurrying();
	this.LIX_Object_valueOf = function (o) {
		return function () {
			try {
				return Object_valueOf(o);
			} catch (e) {
				return e;
			}
		};
	}

	var Object_hasOwnProperty = Object.prototype.hasOwnProperty.unCurrying();
	this.LIX_Object_hasOwnProperty = function (o, v) {
		return function () {
			try {
				return Object_hasOwnProperty(o, v);
			} catch (e) {
				return e;
			}
		};
	}

	var Object_isPrototypeOf = Object.prototype.isPrototypeOf.unCurrying();
	this.LIX_Object_isPrototypeOf = function (o, v) {
		return function () {
			try {
				return Object_isPrototypeOf(o, v);
			} catch (e) {
				return e;
			}
		};
	}

	var Object_propertyIsEnumerable = Object.prototype.propertyIsEnumerable.unCurrying();
	this.LIX_Object_propertyIsEnumerable = function (o, v) {
		return function () {
			try {
				return Object_propertyIsEnumerable(o, v);
			} catch (e) {
				return e;
			}
		};
	}

	var String_fromCharCode = String.fromCharCode;
	this.LIX_String_fromCharCode = function () {
		var args = Array_slice(arguments);
		return function () {
			return String_fromCharCode.apply(String_fromCharCode, args);
		};
	};

	var String_toString = String.prototype.toString.unCurrying();
	this.LIX_String_toString = function (a) {
		return function () {
			return String_toString(a);
		}
	}

	var String_valueOf = String.prototype.valueOf.unCurrying();
	this.LIX_String_valueOf = function (a) {
		return function () {
			return String_valueOf(a);
		}
	}

	var String_charAt = String.prototype.charAt.unCurrying();
	this.LIX_String_charAt = function (a, pos) {
		return function () {
			return String_charAt(a, pos);
		}
	}

	var String_charCodeAt = String.prototype.charCodeAt.unCurrying();
	this.LIX_String_charCodeAt = function (a, pos) {
		return function () {
			return String_charCodeAt(a, pos);
		}
	}

	var String_concat = String.prototype.concat.unCurrying();
	this.LIX_String_concat = function () {
		var args = Array_slice(arguments);
		return function () {
			return String_concat.apply(String_concat, args);
		}
	}

})();

