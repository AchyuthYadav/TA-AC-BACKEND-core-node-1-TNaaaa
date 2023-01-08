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

