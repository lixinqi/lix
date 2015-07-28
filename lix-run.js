#!/usr/bin/env node
var lix = require('lix2js');
var fileFunc = lix.fileFunc(require(process.argv[2]));
fileFunc(function () { });
