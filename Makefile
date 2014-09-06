all: new
new:
	./lix lib.lix | tee newlib.lix.js

cc:
	./lix cclib.lix | tee cclib.lix.js
	cp __builtin__.js /lib/lix/__builtin__.js
