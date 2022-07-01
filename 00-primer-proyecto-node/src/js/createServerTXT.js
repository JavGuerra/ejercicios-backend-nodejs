const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1'; // loopback --> nuestra dirección local
const port = '3000';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    if (request.url !== '/favicon.ico') {

        fs.writeFile('./archivo.txt', 'Texto de prueba.', error => {
            const msg = error ? `Error: ${error}` : 'Ha ido bien';
            console.log(msg);
        })

        fs.readFile('./archivo.txt', 'utf8', (error, data) => {
            if (error) {
                console.err(`Ha surgido un error: ${error}`);
                response.end();
            } else {
                response.end(data);
            }
        });

    }

});

server.listen(port, hostname, () => {
    console.log(`Servidor levantado con éxito en: http://${hostname}:${port}`);
})