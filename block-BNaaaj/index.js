console.log('Welcome to Nodejs');


var os = require('os');
console.log(os.cpus().length , os.freemem() , os.uptime() , os.version() );

var readFile = require('fs')
readFile.readFile('', 'utf8', )