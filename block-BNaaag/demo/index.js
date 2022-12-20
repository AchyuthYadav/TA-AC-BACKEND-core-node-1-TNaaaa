var { readFile, readFileSync } = require(fs);

readFile('./content.md','utf8', (err, file) => {
   console.log(content);
});

var result = readFileSync('./content.md', 'utf8')

console.log(result);

var buff1 = Buffer.alloc(5);
newBuffer.write('Welcome to space');
console.log(buff1);