// 1

const { write } = require('fs');
var http = require('http');
var server = http.createServer('handleRequired');

function handleRequired (req, res) {
    consolelog(req.method , req.url)
    res.end();
}

server.listen (5000, () => {
    console.log('server listening to port 5k')
})

// 2

var http = require('http');
var server = http.createServer('handleRequired');

function handleRequired (req, res) {
    consolelog(req.method , req.url)
    res.end;
}

server.listen (5100, () => {
    console.log('server listening to port 5100')
})

// 3

var http = require('http');
var server = http.createServer('handleRequired');

function handleRequired (req, res) {
    consolelog(req.method , req.url)
    res.end;
}

server.listen (5555, () => {
    console.log('server listening to port 5555')
})

// 4

// 5

var http = require('http');
var server = http.createServer('handleRequired');

function handleRequired (req, res) {
    consolelog(req.method , req.url)
    res.end;
}

server.listen (7000, () => {
    console.log('server listening to port 7k')
})

// 6

var http = require('http');
var server = http.createServer('handleRequired');

function handleRequired (req, res) {
    consolelog(req.method , req.url)
    res.statusCode = 202
    res.end;
}

server.listen (3333, () => {
    console.log('server listening to port 3333')
})

// 7

var http = require('http');
var server = http.createServer('handleRequest');

function handleRequest(req , res){
    console.log(req.method, req.url);
    res.statusCode = 202;
    res.setHeader = ('content-Type','text/html')
    res.write = (`<h3>Welcome to altcampus</h3>`)
    req.end;
}
server.listen(8000, () => {
    console.log('erver listening to port 8k')
})

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest (req, res){
    console.log(req.method, req.url);
    if(req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/plain')
        res.write('welocome to node');
        res.end();
    } else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2> about page </h2>')
    } else if(req.method === 'POST' && req.url === '/about'){
        res.setHeader('Content-Type', 'application/json')
        res.end('{message: this is a post request}')
    }
}

server.listen(3000, () => {
    console.log('server listening on port 3000')
});