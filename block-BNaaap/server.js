var http = require('http')

var server = http.createServer(handleRequest);

function handleRequest(res, req) {
    res.statuCode = 201;
    res.setHeader = ('content-Type', 'text/plain')

    res.writeHead(201, {'content-Type':'text/plain'})

    res.write('welcome to node')
    
    req.end('welcome to node')
}

server.listen(4444)