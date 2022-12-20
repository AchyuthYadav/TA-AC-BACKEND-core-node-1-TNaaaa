var fs = require(fs);

fs.readFile('./index.md', (err, file) => {
   console.log(err, file.toString());
})

var newFs = require('fs');
newFs.readFile('index.js', (err,content) => {
    console.log('First code');
    var prom = new Promise((res, rej) => {
        setTimeout(() => res(console.log('Promise Resolved')), 2000);
    });
    console.log(prom);
    console.log('Last code');
})

var newBuffer = Buffer.alloc(5);
newBuffer.write('Welcome to space');
console.log(newBuffer.toString());