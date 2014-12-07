exports.func = function (fn) {
	return function () {
		try {
			fn.apply(null, arguments)(function (x) { return 0 }, 0);
		} catch (e) {
		}
	}
}
