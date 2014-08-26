all: new
new:
	./lix lib.lix | tee newlib.lix.js
