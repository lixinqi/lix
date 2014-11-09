var lix = require('./lix2js.js');
lix.require('./a.js')(function (x) {
	var getName = lix.func(x.getName);
	getName(x, 2)(function (ret) {
		console.log(ret);
		var hi = lix.func(x.hi)
		hi()(function () {
		});
	});
});

