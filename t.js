function cachedFn(fn, cache)
{
	cache = cache || {}
	return function (id) {
		if (cache[id] !== undefined) {
			return cache[id]
		}
		cache[id] = fn(id);
	}
}

var incCache = {}

var inc = cachedFn(function (a) {
	console.log(a);
	return a + 1
}, incCache);

inc(1);
inc(1);
inc(3);
inc(2);
inc(3);
inc(2);

