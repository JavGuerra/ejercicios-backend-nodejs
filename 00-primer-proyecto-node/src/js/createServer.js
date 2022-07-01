const http = require('http');
const myFistModule = require('myFirstModule');
const hostname = '127.0.0.1'; // loopback --> nuestra dirección local
const port = '3000';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    const url = request.url;

    if (url === '/about') {
        response.write('Sobre nosotros');
    } else  if (url === '/contact') {
        response.write('Datos de contacto');
    } else  if (url === '/date') {
        response.write('Fecha actual:' + myFistModule.myDate());
    } else {
        response.write('Hello World!');
    }
    
    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Servidor levantado con éxito en: http://${hostname}:${port}`);
})