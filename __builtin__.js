(function () {

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

	this.Lforeach = function (Larr, Lcb) {
		var Li, _ret, _0, _1, _2, _3;
		function _16(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					_ret = Lcb(Larr[Li], Li)(function (_ret) {
						return _16(_cb, 1, true, _ret);
					}, 0);
				case 1:
					_2 = _ret;
				case 2:
					_2;
				case 3:
					_ret = L__add__(Li, 1)(function (_ret) {
						return _16(_cb, 4, true, _ret);
					}, 0);
				case 4:
					_3 = _ret;
				case 5:
					Li = _3;
				case 6:
					_ret = L__lt__(Li, Larr.length)(function (_ret) {
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
					Li = 0;
				case 4:
					_ret = L__lt__(Li, Larr.length)(function (_ret) {
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
			try {
				return Object.keys(a);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.GetPrototypeOf = function (a) {
		return function () {
			try {
				return Object.getPrototypeOf(a);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.GetOwnPropertyDescriptor = function (o, p) {
		return function () {
			try {
				return Object.getOwnPropertyDescriptor(o, p);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.GetOwnPropertyNames = function (o) {
		return function () {
			try {
				return Object.getOwnPropertyNames(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.Create = function (o) {
		return function () {
			try {
				return Object.create(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.DefineProperty = function (o, p, attribute) {
		return function () {
			try {
				return Object.defineProperty(o, p, attribute);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.DefineProperties = function (o, properties) {
		return function () {
			try {
				return Object.defineProperties(o, properties);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.Seal = function (o) {
		return function () {
			try {
				return Object.seal(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.Freeze = function (o) {
		return function () {
			try {
				return Object.freeze(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.PreventExtensions = function (o) {
		return function () {
			try {
				return Object.preventExtensions(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.IsSealed = function (o) {
		return function () {
			try {
				return Object.isSealed(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.IsFrozen = function (o) {
		return function () {
			try {
				return Object.isFrozen(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.IsExtensible = function (o) {
		return function () {
			try {
				return Object.isExtensible(o);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.ToString = function (o) {
		return function () {
			try {
				return o.toString();
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.ToLocaleString = function (o) {
		return function () {
			try {
				return o.toLocaleString();
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.ValueOf = function (o) {
		return function () {
			try {
				return o.valueOf();
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.HasOwnProperty = function (o, v) {
		return function () {
			try {
				return o.hasOwnProperty(v);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.IsPrototypeOf = function (o, v) {
		return function () {
			try {
				return o.isPrototypeOf(v);
			} catch (e) {
				return e;
			}
		};
	}

	Object.prototype.PropertyIsEnumerable = function (o, v) {
		return function () {
			try {
				return o.propertyIsEnumerable(v);
			} catch (e) {
				return e;
			}
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

	this.Lrequire = function (filename) {
		return function () {
			return require(filename);
		}
	}

	this.Lmodule = (function (Lname) {
		var _ret, _0, _1, Lx, _2;
		function _5(_cb, _step, _cont, _ret) {
			switch (_step) {
				case 0:
					_ret = L__add__(Lname, '')(function (_ret) {
						return _5(_cb, 1, true, _ret);
					}, 0);
				case 1:
					_0 = _ret;
				case 2:
					_ret = Lrequire(_0)(function (_ret) {
						return _5(_cb, 3, true, _ret);
					}, 0);
				case 3:
					_1 = _ret;
				case 4:
					_ret = Lx = _1;
				case 5:
					_ret = Lcall(Lx)(function (_ret) {
						return _5(_cb, 6, true, _ret);
					}, 0);
				case 6:
					_2 = _ret
				default:
			}
			if (_cont) {
				_cb(_ret)
			} else {
				return _ret
			}
		};
		return _5;
	})
})();

