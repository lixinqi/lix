#!/usr/local/bin/node

function parseOptions(cbs)
{
	if (process.argv.length == 3) {
		cbs.run(process.argv[2]);
		return
	} else if (process.argv.length > 3) {
		if (process.argv[2] == 'run') {
			cbs.run(process.argv[3]);
			return
		} else if (process.argv[2] == 'm' || process.argv[2] == 'module') {
			cbs.module(process.argv[3]);
			return
		} else if (process.argv[2] == 'js') {
			cbs.js(process.argv[3]);
			return 
		}
	}
	console.log('Command Not Support Yet!')
	console.log(process.argv)
	process.exit(-1);
}

function checkInputFile(filename)
{
	var extension = filename.substr(-4);
	if (extension != '.lix') {
		console.log(filename + ' is not a lix file');
		process.exit(-1);
	}
}

function getLixContent(filename)
{
	return require('fs').readFileSync(filename, 'utf-8');
}


function saveJsCode(inputName, jsCode)
{
	var outputFileName = inputName.substr(0, inputName.length - 4) + '.js'; 
	require('fs').writeFileSync(outputFileName, jsCode);
	return outputFileName;
}

function compile(lixContent, filename, isMakingModule) {
	var parser = require('./grammer.js');
	var lib = require('./cclib.lix.js');
	return lib.compile(parser.parse(lixContent), isMakingModule);
}

function compileAndSave(inputFileName, isMakingModule)
{
	checkInputFile(inputFileName);
	var content = getLixContent(inputFileName);
	var jsCode = compile(content, inputFileName, isMakingModule);
	var outputFileName = saveJsCode(inputFileName, jsCode);
	return outputFileName
}

function exec(jsFileName) {
	require('child_process').exec(
		'node ' + jsFileName,
		function (err, stdout, stderr) {
			console.log(stdout.trim());
		}
	);
}

parseOptions({
	run: function (filename) {
		var jsFileName = compileAndSave(filename, false);
		exec(jsFileName);
	},
	module: function (filename) {
		compileAndSave(filename, true);
	},
	js: function (filename) {
		var jsFileName = compileAndSave(filename, false);
		console.log(require('fs').readFileSync(jsFileName, 'utf-8'));
	}
})
