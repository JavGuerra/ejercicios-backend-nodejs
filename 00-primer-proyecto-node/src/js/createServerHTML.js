const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1'; // loopback --> nuestra dirección local
const port = '3000';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html'); // html
    const file = 'src/index.html';

    fs.readFile(file, 'utf8', (error, data) => {        
        if (error) {
            console.err(`Ha surgido un error: ${err}`);
            response.end();
        } else {
            response.end(data);
        }
    });

});

server.listen(port, hostname, () => {
    console.log(`Servidor levantado con éxito en: http://${hostname}:${port}`);
})