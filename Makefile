all: new
new:
	./lix.js lib.lix | tee newlib.lix.js

cc:
	./lix.js cclib.lix | tee cclib.lix.js
	cp __builtin__.js /lib/lix/__builtin__.js
