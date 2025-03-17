const http = require('http');

// Crear un servidor web

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, mundo!\n');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
}); 