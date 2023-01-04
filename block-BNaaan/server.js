var http = require('http');

var server = http.createServer(handleReqest)

function handleReqest (res, req){
    res.end('welcome to node')
}

server.listen(3000, () => {
    console.log('server listening to on port 3000')
})


var http = require('http');

var server = http.createServer(handleReqest)

function handleReqest (res, req){
    console.log(req.headers)
    res.end('welcome to node')
}

server.listen(3000, () => {
    console.log('server listening to on port 3000')
})


var http = require('http');

var server = http.createServer(handleReqest)

function handleReqest (res, req){
    console.log(req.method , req.url)
    res.end('welcome to node')
}

server.listen(3000, () => {
    console.log('server listening to on port 3000')
})