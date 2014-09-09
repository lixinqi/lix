all: new
new:
	./lix lib.lix | tee newlib.lix.js

cc:
	./newlix cclib.lix | tee cclib.lix.js
	cp __builtin__.js /lib/lix/__builtin__.js
