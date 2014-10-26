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
		return fn.apply(fn, array_slice(arguments, 1));
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

	this.LIX_array_isArray = function (arr) {
		return function () {
			return Array.isArray(arr);
		};
	}

	var array_toString = Array.prototype.toString.unCurrying();
	this.LIX_array_toString = function (arr) {
		return function () {
			return array_toString(arr);
		};
	}

	var array_toLocaleString = Array.prototype.toLocaleString.unCurrying();
	this.LIX_array_toLocaleString = function (arr) {
		return function () {
			return array_toLocaleString(arr);
		};
	}

	var array_concat = Array.prototype.concat.unCurrying();
	this.LIX_array_concat = function (a, b) {
		return function () {
			return array_concat(a, b);
		};
	}

	var array_join = Array.prototype.join.unCurrying();
	this.LIX_array_join = function (a, b) {
		return function () {
			return array_join(a, b);
		};
	}

	var array_push = Array.prototype.push.unCurrying(); 
	this.LIX_array_push = function (a, b) {
		return function () {
			return array_push(a, b);
		};
	}

	var array_unshift = Array.prototype.unshift.unCurrying();
	this.LIX_array_unshift = function (a, b) {
		return function () {
			return array_unshift(a, b);
		};
	}

	var array_pop = Array.prototype.pop.unCurrying();
	this.LIX_array_pop = function (a) {
		return function () {
			return array_pop(a);
		};
	}

	var array_shift = Array.prototype.shift.unCurrying();
	this.LIX_array_shift = function (a) {
		return function () {
			return array_shift(a);
		};
	}

	var array_reverse = Array.prototype.reverse.unCurrying();
	this.LIX_array_reverse = function (a) {
		return function () {
			return array_reverse(a);
		};
	}

	var array_slice = Array.prototype.slice.unCurrying();
	this.LIX_array_slice = function (a, start, end) {
		return function () {
			return array_slice(a, start, end);
		};
	}

	var array_indexOf = Array.prototype.indexOf.unCurrying();
	this.LIX_array_indexOf = function (a, elem, start) {
		return function () {
			return array_indexOf(a, elem, start);
		};
	}

	var array_lastIndexOf = Array.prototype.lastIndexOf.unCurrying();
	this.LIX_array_lastIndexOf = function (a, elem, start) {
		if (arguments.length == 2) {
			start = a.length
		}
		return function () {
			return array_lastIndexOf(a, elem, start);
		};
	}

	this.LIX_array_length = function (a) {
		return function () {
			return a.length;
		};
	}

	this.LIX_array_splice = function (a) {
		var args = array_slice(arguments, 1);
		return function () {
			return Array.prototype.splice.apply(a, args);
		};
	}

	this.LIX_object_keys = function (a) {
		return function () {
			try {
				return Object.keys(a);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_getPrototypeOf = function (a) {
		return function () {
			try {
				return Object.getPrototypeOf(a);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_getOwnPropertyDescriptor = function (o, p) {
		return function () {
			try {
				return Object.getOwnPropertyDescriptor(o, p);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_getOwnPropertyNames = function (o) {
		return function () {
			try {
				return Object.getOwnPropertyNames(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_create = function (o) {
		return function () {
			try {
				return Object.create(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_defineProperty = function (o, p, attribute) {
		return function () {
			try {
				return Object.defineProperty(o, p, attribute);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_defineProperties = function (o, properties) {
		return function () {
			try {
				return Object.defineProperties(o, properties);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_seal = function (o) {
		return function () {
			try {
				return Object.seal(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_freeze = function (o) {
		return function () {
			try {
				return Object.freeze(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_preventExtensions = function (o) {
		return function () {
			try {
				return Object.preventExtensions(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_isSealed = function (o) {
		return function () {
			try {
				return Object.isSealed(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_isFrozen = function (o) {
		return function () {
			try {
				return Object.isFrozen(o);
			} catch (e) {
				return e;
			}
		};
	}

	this.LIX_object_isExtensible = function (o) {
		return function () {
			try {
				return Object.isExtensible(o);
			} catch (e) {
				return e;
			}
		};
	}

	var object_toString = Object.prototype.toString.unCurrying();
	this.LIX_object_toString = function (o) {
		return function () {
			try {
				return object_toString(o);
			} catch (e) {
				return e;
			}
		};
	}

	var object_toLocaleString = Object.prototype.toString.unCurrying();
	this.LIX_object_toLocaleString = function (o) {
		return function () {
			try {
				return object_toLocaleString(o);
			} catch (e) {
				return e;
			}
		};
	}

	var object_valueOf = Object.prototype.valueOf.unCurrying();
	this.LIX_object_valueOf = function (o) {
		return function () {
			try {
				return object_valueOf(o);
			} catch (e) {
				return e;
			}
		};
	}

	var object_hasOwnProperty = Object.prototype.hasOwnProperty.unCurrying();
	this.LIX_object_hasOwnProperty = function (o, v) {
		return function () {
			try {
				return object_hasOwnProperty(o, v);
			} catch (e) {
				return e;
			}
		};
	}

	var object_isPrototypeOf = Object.prototype.isPrototypeOf.unCurrying();
	this.LIX_object_isPrototypeOf = function (o, v) {
		return function () {
			try {
				return object_isPrototypeOf(o, v);
			} catch (e) {
				return e;
			}
		};
	}

	var object_propertyIsEnumerable = Object.prototype.propertyIsEnumerable.unCurrying();
	this.LIX_object_propertyIsEnumerable = function (o, v) {
		return function () {
			try {
				return object_propertyIsEnumerable(o, v);
			} catch (e) {
				return e;
			}
		};
	}

	var string_fromCharCode = String.fromCharCode;
	this.LIX_string_fromCharCode = function () {
		var args = array_slice(arguments);
		return function () {
			return string_fromCharCode.apply(string_fromCharCode, args);
		};
	};

	var string_toString = String.prototype.toString.unCurrying();
	this.LIX_string_toString = function (a) {
		return function () {
			return string_toString(a);
		}
	}

	var string_valueOf = String.prototype.valueOf.unCurrying();
	this.LIX_string_valueOf = function (a) {
		return function () {
			return string_valueOf(a);
		}
	}

	var string_charAt = String.prototype.charAt.unCurrying();
	this.LIX_string_charAt = function (a, pos) {
		return function () {
			return string_charAt(a, pos);
		}
	}

	var string_charCodeAt = String.prototype.charCodeAt.unCurrying();
	this.LIX_string_charCodeAt = function (a, pos) {
		return function () {
			return string_charCodeAt(a, pos);
		}
	}

	var string_concat = String.prototype.concat.unCurrying();
	this.LIX_string_concat = function () {
		var args = array_slice(arguments);
		return function () {
			return string_concat.apply(string_concat, args);
		}
	}

	var string_indexOf = String.prototype.indexOf.unCurrying();
	this.LIX_string_indexOf = function (str, pos) {
		return function () {
			return string_indexOf(str, pos);
		}
	}

	var string_lastIndexOf = String.prototype.lastIndexOf.unCurrying();
	this.LIX_string_lastIndexOf = function (str, pos) {
		return function () {
			return string_lastIndexOf(str, pos);
		}
	}

	var string_localeCompare = String.prototype.localeCompare.unCurrying();
	this.LIX_string_localeCompare = function (str, pos) {
		return function () {
			return string_localeCompare(str, pos);
		}
	}

	var string_replace = String.prototype.replace.unCurrying();
	this.LIX_string_replace = function (str, searchValue, replaceValue) {
		return function () {
			return string_replace(str, searchValue, replaceValue);
		}
	}

	var string_slice = String.prototype.slice.unCurrying();
	this.LIX_string_slice = function (str, start, end) {
		return function () {
			return string_slice(str, start, end);
		}
	}

	var string_substring = String.prototype.substring.unCurrying();
	this.LIX_string_substring = function (str, start, end) {
		return function () {
			return string_substring(str, start, end);
		}
	}

	var string_toLowerCase = String.prototype.toLowerCase.unCurrying();
	this.LIX_string_toLowerCase = function (str) {
		return function () {
			return string_toLowerCase(str);
		}
	}

	var string_toLocaleLowerCase = String.prototype.toLocaleLowerCase.unCurrying();
	this.LIX_string_toLocaleLowerCase = function (str) {
		return function () {
			return string_toLocaleLowerCase(str);
		}
	}

	var string_toUpperCase = String.prototype.toUpperCase.unCurrying();
	this.LIX_string_toUpperCase = function (str) {
		return function () {
			return string_toUpperCase(str);
		}
	}

	var string_toLocaleUpperCase = String.prototype.toLocaleUpperCase.unCurrying();
	this.LIX_string_toLocaleUpperCase = function (str) {
		return function () {
			return string_toLocaleUpperCase(str);
		}
	}

	var string_trim = String.prototype.trim.unCurrying();
	this.LIX_string_trim = function (str) {
		return function () {
			return string_trim(str);
		}
	}

	this.LIX_string_length = function (str) {
		return function () {
			return str.length;
		}
	}

	var boolean_toString = Boolean.prototype.toString.unCurrying();
	this.LIX_boolean_toString = function (str) {
		return function () {
			return boolean_toString(str);
		}
	}

	var boolean_valueOf = Boolean.prototype.valueOf.unCurrying();
	this.LIX_boolean_valueOf = function (str) {
		return function () {
			return boolean_valueOf(str);
		}
	}

	this.LIX_number_MAX_VALUE = Number.MAX_VALUE
	this.LIX_number_MIN_VALUE = Number.MIN_VALUE
	this.LIX_number_NaN = Number.NaN
	this.LIX_number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY
	this.LIX_number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY

	var number_toString = Number.prototype.toString.unCurrying();
	this.LIX_number_toString = function (str) {
		return function () {
			return number_toString(str);
		}
	}

	var number_toLocaleString = Number.prototype.toLocaleString.unCurrying();
	this.LIX_number_toLocaleString = function (str) {
		return function () {
			return number_toLocaleString(str);
		}
	}

	var number_valueOf = Number.prototype.valueOf.unCurrying();
	this.LIX_number_valueOf = function (str) {
		return function () {
			return number_valueOf(str);
		}
	}

	var number_toFixed = Number.prototype.toFixed.unCurrying();
	this.LIX_number_toFixed = function (str, fractionDigits) {
		return function () {
			return number_toFixed(str, fractionDigits);
		}
	}

	var number_toExponential = Number.prototype.toExponential.unCurrying();
	this.LIX_number_toExponential = function (str, fractionDigits) {
		return function () {
			return number_toExponential(str, fractionDigits);
		}
	}

	var number_toPrecision = Number.prototype.toPrecision.unCurrying();
	this.LIX_number_toPrecision = function (str, precision) {
		return function () {
			return number_toPrecision(str, precision);
		}
	}

	var number_toPrecision = Number.prototype.toPrecision.unCurrying();
	this.LIX_number_toPrecision = function (str, precision) {
		return function () {
			return number_toPrecision(str, precision);
		}
	}

	this.LIX_math_E = Math.E
	this.LIX_math_LN10 = Math.LN10
	this.LIX_math_LN2 = Math.LN2
	this.LIX_math_LOG2E = Math.LOG2E
	this.LIX_math_LOG10E = Math.LOG10E
	this.LIX_math_PI = Math.PI
	this.LIX_math_SQRT1_2 = Math.SQRT1_2
	this.LIX_math_SQRT2 = Math.SQRT2

	this.LIX_math_abs = function (x) {
		return function () {
			return Math.abs(x);
		}
	}

	this.LIX_math_acos = function (x) {
		return function () {
			return Math.acos(x);
		}
	}

	this.LIX_math_asin = function (x) {
		return function () {
			return Math.asin(x);
		}
	}

	this.LIX_math_atan = function (x) {
		return function () {
			return Math.atan(x);
		}
	}

	this.LIX_math_atan2 = function (y, x) {
		return function () {
			return Math.atan2(y, x);
		}
	}

	this.LIX_math_ceil = function (x) {
		return function () {
			return Math.ceil(x);
		}
	}

	this.LIX_math_cos = function (x) {
		return function () {
			return Math.cos(x);
		}
	}

	this.LIX_math_exp = function (x) {
		return function () {
			return Math.exp(x);
		}
	}

	this.LIX_math_floor = function (x) {
		return function () {
			return Math.floor(x);
		}
	}

	this.LIX_math_log = function (x) {
		return function () {
			return Math.log(x);
		}
	}

	this.LIX_math_max = function () {
		var args = array_slice(arguments);
		return function () {
			return Math.max.apply(null, args);
		}
	}

	this.LIX_math_min = function () {
		var args = array_slice(arguments);
		return function () {
			return Math.min.apply(null, args);
		}
	}

	this.LIX_math_pow = function (x, y) {
		return function () {
			return Math.pow(x, y);
		}
	}

	this.LIX_math_random = function () {
		return function () {
			return Math.random();
		}
	}

	this.LIX_math_round = function (x) {
		return function () {
			return Math.round(x);
		}
	}

	this.LIX_math_sin = function (x) {
		return function () {
			return Math.sin(x);
		}
	}

	this.LIX_math_sqrt = function (x) {
		return function () {
			return Math.sqrt(x);
		}
	}

	this.LIX_math_tan = function (x) {
		return function () {
			return Math.tan(x);
		}
	}

	this.LIX_date = function () {
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

	this.LIX_date_parse = function (str) {
		return function () {
			return Date.parse(str);
		}
	}

	this.LIX_date_UTC = function () {
		var args = array_slice(arguments);
		return function () {
			return Date.UTC.apply(null, args);
		}
	}

	this.LIX_date_now = function () {
		return function () {
			return Date.now();
		}
	}

	var date_toString = Date.prototype.toString.unCurrying();
	this.LIX_date_toString = function (x) {
		return function () {
			return date_toString(x);
		}
	}

	var date_toDateString = Date.prototype.toDateString.unCurrying();
	this.LIX_date_toDateString = function (x) {
		return function () {
			return date_toDateString(x);
		}
	}

	var date_toTimeString = Date.prototype.toTimeString.unCurrying();
	this.LIX_date_toTimeString = function (x) {
		return function () {
			return date_toTimeString(x);
		}
	}

	var date_toLocaleString = Date.prototype.toLocaleString.unCurrying();
	this.LIX_date_toLocaleString = function (x) {
		return function () {
			return date_toLocaleString(x);
		}
	}

	var date_toLocaleDateString = Date.prototype.toLocaleDateString.unCurrying();
	this.LIX_date_toLocaleDateString = function (x) {
		return function () {
			return date_toLocaleDateString(x);
		}
	}

	var date_toLocaleTimeString = Date.prototype.toLocaleTimeString.unCurrying();
	this.LIX_date_toLocaleTimeString = function (x) {
		return function () {
			return date_toLocaleTimeString(x);
		}
	}

	var date_valueOf = Date.prototype.valueOf.unCurrying();
	this.LIX_date_valueOf = function (x) {
		return function () {
			return date_valueOf(x);
		}
	}

	var date_getTime = Date.prototype.getTime.unCurrying();
	this.LIX_date_getTime = function (x) {
		return function () {
			return date_getTime(x);
		}
	}

	var date_getFullYear = Date.prototype.getFullYear.unCurrying();
	this.LIX_date_getFullYear = function (x) {
		return function () {
			return date_getFullYear(x);
		}
	}

	var date_getUTCFullYear = Date.prototype.getUTCFullYear.unCurrying();
	this.LIX_date_getUTCFullYear = function (x) {
		return function () {
			return date_getUTCFullYear(x);
		}
	}

	var date_getMonth = Date.prototype.getMonth.unCurrying();
	this.LIX_date_getMonth = function (x) {
		return function () {
			return date_getMonth(x);
		}
	}

	var date_getUTCMonth = Date.prototype.getUTCMonth.unCurrying();
	this.LIX_date_getUTCMonth = function (x) {
		return function () {
			return date_getUTCMonth(x);
		}
	}

	var date_getDate = Date.prototype.getDate.unCurrying();
	this.LIX_date_getDate = function (x) {
		return function () {
			return date_getDate(x);
		}
	}

	var date_getUTCDate = Date.prototype.getUTCDate.unCurrying();
	this.LIX_date_getUTCDate = function (x) {
		return function () {
			return date_getUTCDate(x);
		}
	}

	var date_getDay = Date.prototype.getDay.unCurrying();
	this.LIX_date_getDay = function (x) {
		return function () {
			return date_getDay(x);
		}
	}

	var date_getUTCDay = Date.prototype.getUTCDay.unCurrying();
	this.LIX_date_getUTCDay = function (x) {
		return function () {
			return date_getUTCDay(x);
		}
	}

	var date_getHours = Date.prototype.getHours.unCurrying();
	this.LIX_date_getHours = function (x) {
		return function () {
			return date_getHours(x);
		}
	}

	var date_getUTCHours = Date.prototype.getUTCHours.unCurrying();
	this.LIX_date_getUTCHours = function (x) {
		return function () {
			return date_getUTCHours(x);
		}
	}

	var date_getMinutes = Date.prototype.getMinutes.unCurrying();
	this.LIX_date_getMinutes = function (x) {
		return function () {
			return date_getMinutes(x);
		}
	}

	var date_getUTCMinutes = Date.prototype.getUTCMinutes.unCurrying();
	this.LIX_date_getUTCMinutes = function (x) {
		return function () {
			return date_getUTCMinutes(x);
		}
	}

	var date_getSeconds = Date.prototype.getSeconds.unCurrying();
	this.LIX_date_getSeconds = function (x) {
		return function () {
			return date_getSeconds(x);
		}
	}

	var date_getUTCSeconds = Date.prototype.getUTCSeconds.unCurrying();
	this.LIX_date_getUTCSeconds = function (x) {
		return function () {
			return date_getUTCSeconds(x);
		}
	}

	var date_getMilliseconds = Date.prototype.getMilliseconds.unCurrying();
	this.LIX_date_getMilliseconds = function (x) {
		return function () {
			return date_getMilliseconds(x);
		}
	}

	var date_getUTCMilliseconds = Date.prototype.getUTCMilliseconds.unCurrying();
	this.LIX_date_getUTCMilliseconds = function (x) {
		return function () {
			return date_getUTCMilliseconds(x);
		}
	}

	var date_getTimezoneOffset = Date.prototype.getTimezoneOffset.unCurrying();
	this.LIX_date_getTimezoneOffset = function (x) {
		return function () {
			return date_getTimezoneOffset(x);
		}
	}

	var date_setTime = Date.prototype.setTime.unCurrying();
	this.LIX_date_setTime = function (x, v) {
		return function () {
			return date_setTime(x, v);
		}
	}

	var date_setMilliseconds = Date.prototype.setMilliseconds.unCurrying();
	this.LIX_date_setMilliseconds = function (x, v) {
		return function () {
			return date_setMilliseconds(x, v);
		}
	}

	var date_setMilliseconds = Date.prototype.setMilliseconds.unCurrying();
	this.LIX_date_setMilliseconds = function (x, v) {
		return function () {
			return date_setMilliseconds(x, v);
		}
	}

	var date_setUTCMilliseconds = Date.prototype.setUTCMilliseconds.unCurrying();
	this.LIX_date_setUTCMilliseconds = function (x, v) {
		return function () {
			return date_setUTCMilliseconds(x, v);
		}
	}

	var date_setSeconds = Date.prototype.setSeconds;
	this.LIX_date_setSeconds = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setSeconds.apply(x, args);
		}
	}

	var date_setUTCSeconds = Date.prototype.setUTCSeconds;
	this.LIX_date_setUTCSeconds = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setUTCSeconds.apply(x, args);
		}
	}

	var date_setMinutes = Date.prototype.setMinutes;
	this.LIX_date_setMinutes = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setMinutes.apply(x, args);
		}
	}

	var date_setUTCMinutes = Date.prototype.setUTCMinutes;
	this.LIX_date_setUTCMinutes = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setUTCMinutes.apply(x, args);
		}
	}

	var date_setHours = Date.prototype.setHours;
	this.LIX_date_setHours = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setHours.apply(x, args);
		}
	}

	var date_setUTCHours = Date.prototype.setUTCHours;
	this.LIX_date_setUTCHours = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setUTCHours.apply(x, args);
		}
	}

	var date_setDate = Date.prototype.setDate.unCurrying();
	this.LIX_date_setDate = function (x, v) {
		return function () {
			return date_setDate(x, v);
		}
	}

	var date_setUTCDate = Date.prototype.setUTCDate.unCurrying();
	this.LIX_date_setUTCDate = function (x, v) {
		return function () {
			return date_setUTCDate(x, v);
		}
	}

	var date_setMonth = Date.prototype.setMonth
	this.LIX_date_setMonth = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setMonth.apply(x, args);
		}
	}

	var date_setUTCMonth = Date.prototype.setUTCMonth;
	this.LIX_date_setUTCMonth = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setUTCMonth.apply(x, args);
		}
	}

	var date_setFullYear = Date.prototype.setFullYear
	this.LIX_date_setFullYear = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setFullYear.apply(x, args);
		}
	}

	var date_setUTCFullYear = Date.prototype.setUTCFullYear;
	this.LIX_date_setUTCFullYear = function (x) {
		var args = array_slice(arguments, 1);
		return function () {
			return date_setUTCFullYear.apply(x, args);
		}
	}

	var date_toUTCString = Date.prototype.toUTCString.unCurrying();
	this.LIX_date_toUTCString = function (x) {
		return function () {
			return date_toUTCString(x);
		}
	}

	var date_toISOString = Date.prototype.toISOString.unCurrying();
	this.LIX_date_toISOString = function (x) {
		return function () {
			return date_toISOString(x);
		}
	}

	var date_toJSON = Date.prototype.toJSON.unCurrying();
	this.LIX_date_toJSON = function (x, key) {
		return function () {
			return date_toJSON(x, key);
		}
	}

	this.LIX_regexp = function () {
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

	var regexp_exec = RegExp.prototype.exec.unCurrying();
	this.LIX_regexp_exec = function (r, str) {
		return function () {
			return regexp_exec(r, str);
		}
	}

	var regexp_test = RegExp.prototype.test.unCurrying();
	this.LIX_regexp_test = function (r, str) {
		return function () {
			return regexp_test(r, str);
		}
	}

	var regexp_toString = RegExp.prototype.toString.unCurrying();
	this.LIX_regexp_toString = function (r) {
		return function () {
			return regexp_toString(r);
		}
	}

	this.LIX_regexp_source = function (r) {
		return function () {
			return r.source;
		}
	}

	this.LIX_regexp_global = function (r) {
		return function () {
			return r.global;
		}
	}

	this.LIX_regexp_ignoreCase = function (r) {
		return function () {
			return r.ignoreCase;
		}
	}

	this.LIX_regexp_multiline = function (r) {
		return function () {
			return r.multiline;
		}
	}

	this.LIX_regexp_lastIndex = function (r) {
		return function () {
			return r.lastIndex;
		}
	}

	this.LIX_error = function (message) {
		return function () {
			return new Error(message);
		}
	}

	this.LIX_error_name = function (e) {
		return function () {
			return e.name;
		}
	}

	this.LIX_error_message = function (e) {
		return function () {
			return e.message;
		}
	}

	var error_toString = Error.prototype.toString.unCurrying();
	this.LIX_error_toString = function (e) {
		return function () {
			return error_toString(e);
		}
	}

	this.LIX_Error = Error.prototype;
	this.LIX_EvalError = EvalError.prototype;
	this.LIX_ReferenceError = ReferenceError.prototype;
	this.LIX_SyntaxError = SyntaxError.prototype;
	this.LIX_TypeError = TypeError.prototype;
	this.LIX_URIError = URIError.prototype;

	this.LIX_instanceof = function (obj, type) {
		return function () {
			return Object.getPrototypeOf(obj) == type;
		}
	}

	this.LIX_is = function (obj, type) {
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

})();

