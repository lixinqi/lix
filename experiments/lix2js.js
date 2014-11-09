exports.require = function (filename) {
	return function (cb) {
		try {
			var ret = require(filename)()(cb, 0);
			cb(ret);
		} catch (e) {
		}
	}
}

exports.func = function (fn) {
	return function () {
		var args = Array.prototype.slice.call(arguments, 0);
		return function (cb) {
			try {
				var ret = fn.apply(fn, args)(cb, 0);
				cb(ret);
			} catch (e) {
			}
		}
	}
}

