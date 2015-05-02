require('/lib/lix/s_builtin_.js');
lix_start(function (s) {
	var f = require(process.argv[2]);
	lix(s, f);
});
