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
 return x === y;
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
var join = (function (arr) {
var ret = "";
ret;
foreach(arr, (function (i) {
return (ret = __add__(ret, i));

}));
return ret;

});
join;
var map = (function (arr, cb) {
var ret = [];
ret;
foreach(arr, (function (i, index) {
return (function (_var_0, _val_1) {
if (typeof _var_0.push === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_0.push.apply(_var_0, arguments);
} else if (_var_0.push !== undefined) {
if (_val_1 === undefined) {
return _var_0.push;
}
_var_0.push = _val_1;
}return _var_0;
})(ret, cb(i, index));

}));
return ret;

});
map;
var counterGenerator = (function () {
var counter = 0;
counter;
return (function () {
var ret = counter;
ret;
(counter = __add__(counter, 1));
return ret;

});

});
counterGenerator;
var getCount = call(counterGenerator);
getCount;
var getUniqVarName = (function () {
return __add__('_uniq_val_', call(getCount))
});
getUniqVarName;
var generateFuncArgs = (function (args, env, ctx) {
return (function (_var_2, _val_3) {
if (typeof _var_2.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_2.join.apply(_var_2, arguments);
} else if (_var_2.join !== undefined) {
if (_val_3 === undefined) {
return _var_2.join;
}
_var_2.join = _val_3;
}return _var_2;
})(map(args, (function (i) {
var varname = i[0];
varname;
(env[varname] = true);
return varname;

})), ', ');

});
generateFuncArgs;
var ctx0 = (function (x) {
return x
});
ctx0;
var generateSeq = (function (expr, env, ctx) {
var last = __sub__(expr[0].length, 1);
last;
var seqCtx = (function (index) {
if (__lt__(index, last)) {
return ctx0;

} else {
return ctx;

};

});
seqCtx;
return __add__((function (_var_5, _val_6) {
if (typeof _var_5.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_5.join.apply(_var_5, arguments);
} else if (_var_5.join !== undefined) {
if (_val_6 === undefined) {
return _var_5.join;
}
_var_5.join = _val_6;
}return _var_5;
})(map(expr[0], (function (item, index) {
return generate(item, env, seqCtx(index));

})), ";\n"), ";\n");

});
generateSeq;
var generateOr = (function (expr, env, ctx) {
return join(['(',generate(expr[0], env, ctx0)," || ",generate(expr[2], env, ctx0),')',]);

});
generateOr;
var generateAnd = (function (expr, env, ctx) {
return join(['(',generate(expr[0], env, ctx0)," && ",generate(expr[2], env, ctx0),')',]);

});
generateAnd;
var generateIf = (function (expr, env, ctx) {
return (function (_var_7, _val_8) {
if (typeof _var_7.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_7.join.apply(_var_7, arguments);
} else if (_var_7.join !== undefined) {
if (_val_8 === undefined) {
return _var_7.join;
}
_var_7.join = _val_8;
}return _var_7;
})(map(expr[0], (function (i) {
if (__eq__(i[1], 'else')) {
return join(['{\n',generate(i[0], env, ctx),'\n}',]);

} else if (__eq__(i[1], 'if')) {
return generateIf(i, env, ctx);

} else {
return join(['if (',generate(i[0], env, ctx0),') {\n',generate(i[1], env, ctx),'\n}',]);

};

})), ' else ');

});
generateIf;
var operateFuncName = {
"+": '__add__',
"-": '__sub__',
"*": '__mul__',
"/": '__div__',
"%": '__mod__',
">=": '__ge__',
">": '__gt__',
"==": '__eq__',
"<": '__lt__',
"<=": '__le__'
};
operateFuncName;
var generateAtomic = (function (expr, env, ctx) {
var ret = expr[0];
ret;
if (__eq__(expr[2], '{var}')) {
if (operateFuncName[expr[0]]) {
(ret = operateFuncName[expr[0]]);

} else {
(ret = transformVarName(expr[0]));

};

};
return ctx(ret);

});
generateAtomic;
var generatePropertyName = (function (expr, env, ctx) {
if (__eq__(expr[1], '{atomic}')) {
return ctx(generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{index}')) {
return ctx(generateAtomic(expr[0], env, ctx0));

};

});
generatePropertyName;
var generateProperty = (function (expr, env, ctx) {
var propertyName = generatePropertyName(expr[0], env, ctx0);
propertyName;
var propertyValue = generate(expr[2], env, ctx0);
propertyValue;
return __add__(__add__(propertyName, ": "), propertyValue);

});
generateProperty;
var generateObjectLiteral = (function (expr, env, ctx) {
var objectBody = (function (_var_13, _val_14) {
if (typeof _var_13.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_13.join.apply(_var_13, arguments);
} else if (_var_13.join !== undefined) {
if (_val_14 === undefined) {
return _var_13.join;
}
_var_13.join = _val_14;
}return _var_13;
})(map(expr[0], (function (i) {
return generateProperty(i, env, ctx0);

})), ",\n");
objectBody;
return ctx(join(["{\n",objectBody,"\n}",]));

});
generateObjectLiteral;
var transformVarName = (function (name) {
return name
});
transformVarName;
var getVarName = (function (expr) {
if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, {

}, ctx0);

} else if (__eq__(expr[1], '{.}')) {
return getVarName(expr[0]);

};

});
getVarName;
var generateField = (function (expr, env, ctx) {
if (__eq__(expr[1], '{atomic}')) {
return __add__('.', generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{index}')) {
return join(['[',generate(expr[0], env, ctx0),']',]);

};

});
generateField;
var generateFieldAccess = (function (expr, env, ctx) {
if (__eq__(expr[1], '{atomic}')) {
return ctx(generateAtomic(expr, env, ctx0));

} else if (__eq__(expr[1], '{.}')) {
var obj = generateFieldAccess(expr[0], env, ctx0);
obj;
var field = generateField(expr[2], env, ctx0);
field;
return ctx(__add__(obj, field));

};

});
generateFieldAccess;
var generateArray = (function (expr, env, ctx) {
var arrayBody = (function (_var_18, _val_19) {
if (typeof _var_18.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_18.join.apply(_var_18, arguments);
} else if (_var_18.join !== undefined) {
if (_val_19 === undefined) {
return _var_18.join;
}
_var_18.join = _val_19;
}return _var_18;
})(map(expr[0], (function (i) {
return generate(i, env, ctx0);

})), ', ');
arrayBody;
return ctx(join(['[',arrayBody,']',]));

});
generateArray;
var generateMethod = (function (expr, env, ctx) {
var localVarName = call(getUniqVarName);
localVarName;
var localValueName = call(getUniqVarName);
localValueName;
var method = __add__(localVarName, generateField(expr[0], env, ctx0));
method;
return ctx(join(['(function (',localVarName,", ",localValueName,") {\n","if (typeof ",method," === 'function') {\n","arguments = Array.prototype.slice.call(arguments, 1, arguments.length);","return ",method,".apply(",localVarName,", arguments);\n","} else if (",method," !== undefined) {\n","if (",localValueName," === undefined) {\n","return ",method,';\n',"}\n",method," = ",localValueName,";\n","}","return ",localVarName,';\n','})',]));

});
generateMethod;
var generateWhile = (function (expr, env, ctx) {
return join(['while (',generate(expr[0], env, ctx0),') {\n',generate(expr[2], env, ctx0),"}\n",ctx('null'),]);

});
generateWhile;
var generateBreak = (function (expr, env, ctx) {
return 'break';

});
generateBreak;
var generateEmpty = (function (expr, env, ctx) {
return ctx(0);

});
generateEmpty;
var generateDef = (function (expr, env, ctx) {
var varname = expr[0][0];
varname;
var ret = join(['var ',varname,' = ',generate(expr[2], env, ctx0),";\n",ctx(varname),]);
ret;
(env[varname] = true);
return ret;

});
generateDef;
var generateAssign = (function (expr, env, ctx) {
var varname = getVarName(expr[0]);
varname;
if (__eq__(env[varname], undefined)) {
console.log(varname);
console.log("var undefined");

};
return ctx(join(["(",generate(expr[0], env, ctx0)," = ",generate(expr[2], env, ctx0),")",]));

});
generateAssign;
var generateFunc = (function (expr, env, ctx) {
var funcEnv = env_new(env);
funcEnv;
var args = generateFuncArgs(expr[0], funcEnv, ctx0);
args;
var body = generate(expr[2], funcEnv, (function (v) {
return __add__('return ', v);

}));
body;
return ctx(join(['(function (',args,') {\n',body,'\n})',]));

});
generateFunc;
var generateExpr = (function (expr, env, ctx) {
var func = generate(expr[1], env, ctx0);
func;
var args = generate(expr[0], env, ctx0);
args;
foreach(expr, (function (item, index) {
if (__gt__(index, 1)) {
return (args = join([args,', ',generate(item, env, ctx0),]));

};

}));
return ctx(join([func,'(',args,')',]));

});
generateExpr;
var generateStart = (function (expr, env, ctx) {
return generate(expr[0], env, ctx);

});
generateStart;
var generateMono = (function (expr, env, ctx) {
return generate(expr[0], env, ctx);

});
generateMono;
var generate = (function (expr, env, ctx) {
if (__eq__(expr[1], '{start}')) {
return generateStart(expr, env, ctx);

} else if (__eq__(expr[1], '{seq}')) {
return generateSeq(expr, env, ctx);

} else if (__eq__(expr[1], '{mono}')) {
return generateMono(expr, env, ctx);

} else if (__eq__(expr[1], '{atomic}')) {
return generateAtomic(expr, env, ctx);

} else if (__eq__(expr[1], '{.}')) {
return generateFieldAccess(expr, env, ctx);

} else if (__eq__(expr[1], '{func}')) {
return generateFunc(expr, env, ctx);

} else if (__eq__(expr[1], '{array}')) {
return generateArray(expr, env, ctx);

} else if (__eq__(expr[1], '{object}')) {
return generateObjectLiteral(expr, env, ctx);

} else if (__eq__(expr[1], '{method}')) {
return generateMethod(expr, env, ctx);

} else if (__eq__(expr[1], '{empty}')) {
return generateEmpty(expr, env, ctx);

} else if (__eq__(expr[1], ':=')) {
return generateDef(expr, env, ctx);

} else if (__eq__(expr[1], '=')) {
return generateAssign(expr, env, ctx);

} else if (__eq__(expr[1], 'if')) {
return generateIf(expr, env, ctx);

} else if (__eq__(expr[1], 'and')) {
return generateAnd(expr, env, ctx);

} else if (__eq__(expr[1], 'or')) {
return generateOr(expr, env, ctx);

} else if (__eq__(expr[1], 'while')) {
return generateWhile(expr, env, ctx);

} else if (__eq__(expr[1], 'break')) {
return generateBreak(expr, env, ctx);

} else {
return generateExpr(expr, env, ctx);

};

});
generate;
var env_new = (function (env) {
(env = (env || {
print: true,
not: true,
_instance_: true,
__gt__: true,
__ge__: true,
__eq__: true,
__le__: true,
__lt__: true,
__add__: true,
__sub__: true,
__mul__: true,
__div__: true,
__mod__: true,
isFunction: true,
isArray: true,
foreach: true,
call: true,
apply: true,
exports: true
}));
var Env = (function () {

});
Env;
(Env.prototype = env);
return _instance_(Env);

});
env_new;
(exports.compile = (function (expr) {
var libs = (function (_var_23, _val_24) {
if (typeof _var_23.join === 'function') {
arguments = Array.prototype.slice.call(arguments, 1, arguments.length);return _var_23.join.apply(_var_23, arguments);
} else if (_var_23.join !== undefined) {
if (_val_24 === undefined) {
return _var_23.join;
}
_var_23.join = _val_24;
}return _var_23;
})(["function print(x) {\n return console.log(x); \n}","function not(x) {\n return !x;\n}","function _instance_(x) {\n return new x(); \n}","function __add__(x, y) {\n return x + y;\n}","function __sub__(x, y) {\n return x - y;\n}","function __mul__(x, y) {\n return x * y;\n}","function __div__(x, y) {\n return x / y;\n}","function __mod__(x, y) {\n return x % y;\n}","function __gt__(x, y) {\n return x > y;\n}","function __ge__(x, y) {\n return x >= y;\n}","function __eq__(x, y) {\n return x == y;\n}","function __le__(x, y) {\n return x <= y;\n}","function __lt__(x, y) {\n return x < y;\n}","function isFunction(x) {\n return typeof x === 'function';\n}","function isArray(x) {\n return x instanceof Array;\n}","function foreach(arr, cb) {\n for (var i in arr) { cb(arr[i], i); };\n}","function call(fn) {\n var collect = []; for (var i in arguments) { collect.push(arguments[i]); }; collect.shift(); return fn.apply(fn, collect); \n}","function apply(fn) {\n return fn.apply(fn, arguments[1]); \n}",], "\n");
libs;
return console.log(join([libs,"\n",generate(expr, call(env_new), ctx0),]));

}));

