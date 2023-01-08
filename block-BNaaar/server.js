var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest (req, res){
    console.log(req.method, req.url);
    if(req.method === 'GET' && req.url === '/') {
        res.write('welocome to node');
        res.end();
    } else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2> about page </h2>')
    } 
}

server.listen(3000, () => {
    console.log('server listening on port 3000')
});

