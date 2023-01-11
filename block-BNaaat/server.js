var http = require('fs');
var server = http.createServer('handleReqest');

function handleReqest(req, res){
    
    if(req.method === 'GET' && req.url ==='/'){
        res.write('welcome to node')
    }
    if(req.method === 'GET' && req.url ==='/about'){
        res.setHeader('content-type', 'text/html');
        http.fstat.createReadStream('./about.html').pipe(res);
    }
}

server.listen(3000, () => {
    console.log('server listening on port 3000')
})