#!/usr/bin/env node

var parser = require('./grammer.js');
var lib = require('./lib.lix.js');
var fs = require('fs');

var file = fs.readFileSync(process.argv[2], 'utf-8');

var ret = parser.parse(file);

lib.compile(ret);
