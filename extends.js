function Extends(base, config) {
	var Sub = function() {};  
	Sub.prototype = new base();  
	config && config(Sub.prototype);
	return Sub;
}

var Base0 = function () {};
var Base = Extends(Base0, function (pub) {
	pub.name = 'base';
	name = 'Li Lei';
	pub.hi = function () {
		console.log('hi I\'m ' + name);
	}
});

// Base := Base0 extends (pub)->{
// 	name = 'base';
// 	pub.name = 'base';
// 	pub.hi = ()->{
// 		'hi I\'m ' + name | print
// 	}
// }
//
// Sub = Base extends ()

var Sub = Extends(Base, function (pub) {
	pub.name = 'sub';
});
var obj = new Sub();
var objB = new Base();
console.log(objB instanceof Sub);
console.log(objB instanceof Base);
console.log(objB.name);

console.log(obj instanceof Sub);
console.log(obj instanceof Base);
console.log(obj.name);
obj.name = 'good';
obj.hi();

