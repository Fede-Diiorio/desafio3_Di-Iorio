const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hola mundo desde backend modificado');
});

server.listen(3000, () => {
    console.log('Server Listo y preparado nuevamente!');
});

