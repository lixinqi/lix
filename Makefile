all: new
new:
	./lix lib.lix | tee newlib.lix.js

cc:
	./lix cclib.lix | tee cclib.lix.js
