true
true
function print(x) {
 return console.log(x); 
}
function not(x) {
 return !x;
}
function _instance_(x) {
 return new x(); 
}
function __add__(x, y) {
 return x + y;
}
function __sub__(x, y) {
 return x - y;
}
function __mul__(x, y) {
 return x * y;
}
function __div__(x, y) {
 return x / y;
}
function __mod__(x, y) {
 return x % y;
}
function __gt__(x, y) {
 return x > y;
}
function __ge__(x, y) {
 return x >= y;
}
function __eq__(x, y) {
 return x == y;
}
function __ne__(x, y) {
 return x != y;
}
function __le__(x, y) {
 return x <= y;
}
function __lt__(x, y) {
 return x < y;
}
function isFunction(x) {
 return typeof x === 'function';
}
function isArray(x) {
 return x instanceof Array;
}
function foreach(arr, cb) {
 for (var i in arr) { cb(arr[i], i); };
}
function call(fn) {
 var collect = []; for (var i in arguments) { collect.push(arguments[i]); }; collect.shift(); return fn.apply(fn, collect); 
}
function apply(fn) {
 return fn.apply(fn, arguments[1]); 
}
0;
var 模块 = require;
模块;
var vm = 模块("vm");
vm;
print((function () {var _uniq_var_2 = function (_uniq_var_0, _uniq_var_1) {
if (typeof _uniq_var_0.runInThisContext === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_0.runInThisContext.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_0.runInThisContext.apply(_uniq_var_0, arguments);
} else if (_uniq_var_0.runInThisContext !== undefined) {
if (_uniq_var_1 === undefined) {
return _uniq_var_0.runInThisContext;
}
_uniq_var_0.runInThisContext = _uniq_var_1;
}return _uniq_var_0;
};_uniq_var_2.__lix_func__ = true;return _uniq_var_2;})()(vm, "1 + 1"));
var jq = 模块('jquery');
jq;
var jsdom = require('jsdom');
jsdom;
var jq = call(require('jquery'), (function () {var _uniq_var_5 = function (_uniq_var_3, _uniq_var_4) {
if (typeof _uniq_var_3.createWindow === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_3.createWindow.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_3.createWindow.apply(_uniq_var_3, arguments);
} else if (_uniq_var_3.createWindow !== undefined) {
if (_uniq_var_4 === undefined) {
return _uniq_var_3.createWindow;
}
_uniq_var_3.createWindow = _uniq_var_4;
}return _uniq_var_3;
};_uniq_var_5.__lix_func__ = true;return _uniq_var_5;})()((function () {var _uniq_var_8 = function (_uniq_var_6, _uniq_var_7) {
if (typeof _uniq_var_6.jsdom === 'function') {
arguments = Array.prototype.slice.call(arguments, (_uniq_var_6.jsdom.__lix_func__ ? 0 : 1), arguments.length);return _uniq_var_6.jsdom.apply(_uniq_var_6, arguments);
} else if (_uniq_var_6.jsdom !== undefined) {
if (_uniq_var_7 === undefined) {
return _uniq_var_6.jsdom;
}
_uniq_var_6.jsdom = _uniq_var_7;
}return _uniq_var_6;
};_uniq_var_8.__lix_func__ = true;return _uniq_var_8;})()(jsdom)));
jq;
var url = "https://github.com/popular/forked";
url;
jq.get(url, (function () {var _uniq_var_9 = function (html) {return console.log(html);
};_uniq_var_9.__lix_func__ = true;return _uniq_var_9;})());

