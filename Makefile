all: new
new:
	./lix.js lib.lix | tee newlib.lix.js

cc:
	./lix.js cclib.lix | tee cclib.lix.js
	cp __builtin__.js /lib/lix/__builtin__.js

s:
	./lix.js slib.lix | tee slib.lix.js
	cp s_builtin_.js /lib/lix/s_builtin_.js
