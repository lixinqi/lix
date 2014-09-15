var sleep = function (ms, cb) {
	setTimeout(function () {
		cb();
	}, ms);
};

sleep(20, function () {
	console.log(0);
	sleep(20, function () {
		console.log(1);
		sleep(20, function () {
			console.log(2);
			sleep(20, function () {
				console.log(3);
				sleep(20, function () {
					console.log(4);
					sleep(20, function () {
						console.log(5);
						sleep(20, function () {
							console.log(6);
							sleep(20, function () {
								console.log(7);
								sleep(20, function () {
									console.log(8);
									sleep(20, function () {
										console.log(9);
										console.log('end');
									});
								});
							});
						});
					});
				});
			});
		});
	});
});

