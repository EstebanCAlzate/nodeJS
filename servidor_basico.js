const http = require('http');

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    response.end(' wake up, <b>Neo</b>...\n');
});


//arrancamos el servidor

server.listen(1377, '127.0.0.1');
console.log('Servidor arrancando en http:///127.0.0.1:1377');
