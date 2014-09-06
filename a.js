true
function load (filename) {
	return function () {
		return require (filename);
	}
}
require("/tmp/__builtin__.js");
function array_join(arr, glue) {

	return function () {

		return arr.join(glue)

	}

}
function print(x) {
	return function () {
		return console.log(x); 
	}
}
function not(x) {
	return function () {
		return !x; 
	}
}
function _instance_(x) {
	return function () {
		return new x(); 
	}
}
function __add__(x, y) {
	return function () {
		return x + y;
	}
}
function __sub__(x, y) {
	return function () {
		return x - y;
	}
}
function __mul__(x, y) {
	return function () {
		return x * y;
	}
}
function __div__(x, y) {
	return function () {
		return x / y;
	}
}
function __mod__(x, y) {
	return function () {
		return x % y;
	}
}
function __gt__(x, y) {
	return function () {
		return x > y;
	}
}
function __ge__(x, y) {
	return function () {
		return x >= y;
	}
}
function __eq__(x, y) {
	return function () {
		return x == y;
	}
}
function __ne__(x, y) {
	return function () {
		return x != y;
	}
}
function __le__(x, y) {
	return function () {
		return x <= y;
	}
}
function __lt__(x, y) {
	return function () {
		return x < y;
	}
}
function isFunction(x) {
	return function () {
		return typeof x === 'function';
	}
}
function isArray(x) {
	return function () {
		return x instanceof Array;
	}
}
function foreach(arr, cb) {
	return function () {
		for (var i in arr) {
			cb(arr[i], i)();
		}
	}
}
function call(fn) {
	var collect = []
		for (var i in arguments) {
			collect.push(arguments[i])
		}
	return fn.apply(fn, collect);
}
function apply(fn) {
	var args = arguments[1]
		return function () {
			return fn.apply(fn, args)();
		}
}
var a;
function _uniq_var_0(_cb, _step, _cont, _ret) {
	switch (_step) {
		case 0:
			a = 0
		default:
	}
	if (_cont) {
		_cb(_ret)
	} else {
		return _ret
	}
};
try {
	_uniq_var_0(function(x){return x;}, 0)
} catch (e) {
}
