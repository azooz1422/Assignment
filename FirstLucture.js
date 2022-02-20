var msg = 'wellcom to javascript'
console.log(msg);
var peg = require("pegjs");
var fs = require('fs')
var filename = 'grammar.pegjs'
var grammarDemo = fs.readFileSync(filename, 'utf-8')
var parser = peg.generate(grammarDemo)
var input = '441010036'
var output = parser.parse(input)
console.log(output)