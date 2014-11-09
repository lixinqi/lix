function Lrequire(filename) {
	return function (cb) {
		try {
			var ret = require(filename)()(cb, 0);
			cb(ret);
		} catch (e) {
		}
	}
}

function lixFunc(fn) {
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

Lrequire('./a.js')(function (x) {
	var getName = lixFunc(x.getName);
	getName(x, 2)(function (ret) {
		console.log(ret);
	});
});

