require('/lib/lix/s_builtin_.js');
lix_start(function (s) {
	var $file = process.argv[2];
	if ($file[0] != '/' || $file.slice(0,2 ) != './' | $file.slice(0, 3) != '../') {
		$file = './' + $file;
	}
	var f = require($file);
	lix(s, f);
});
