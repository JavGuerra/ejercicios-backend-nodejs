const config = require('./config.js');
const http = require('http');
const fs   = require('fs').promises;

// const host = 'localhost';
// const port = 3000;


const escuchaPeticion = (req, res) => {

    if (req.method === 'GET' && req.url !== '/favicon.ico') { // evita doble petición

        res.setHeader("Content-Type", "text/html");

        const rutas = ['/', '/archivo', '/contacto', '/donde', '/que', '/quien'];
        let ruta = './src';

        if (!rutas.includes(req.url)) {
            escribeAviso('No encontrado', 404);
            return;
        } else if (req.url == '/') {
            ruta += '/index.html';
        } else {
            ruta += `${req.url}.html`;
        }

        if (ruta == './src/archivo.html') {
            fs.writeFile('./archivo.txt', 'Texto de prueba.')
                .then(escribeAviso('Archivo guardado'))
                .catch(err => {
                    escribeAviso(err.code, 500);
                    return;
                });
        } else {
            fs.readFile(ruta, 'utf8')
                .then(contenido => {
                    res.statusCode;
                    res.end(contenido);
                })
                .catch(err => {
                    escribeAviso(err.code, 500);
                    return;
                });
        }

        function escribeAviso(err, num = 200) {
            let msg = num < 300 ? 'OK' : 'Error';
            console.log(`${msg} ${num}.`);
            res.statusCode = num;
            res.end(`<h1>${msg} ${num}: ${err}</h1>`);
        }
    }
};

const server = http.createServer(escuchaPeticion);
server.listen(config.PORT, config.HOST, () => {
    console.log(`Servidor: http://${config.HOST}:${config.PORT}`);
});
