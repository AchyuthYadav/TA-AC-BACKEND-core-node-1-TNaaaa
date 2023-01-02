var http = require('http')

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end('Welcome to node');
}

server.listen(4000, () => {
    console.log('server listening to on port 4000')
})