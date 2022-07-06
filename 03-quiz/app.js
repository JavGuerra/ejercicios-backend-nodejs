const config = require('./config');
const express = require('express');
const app = express();
const router = express.Router();

app.use((req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
});

app.use(express.static(__dirname + '/quiz'));

app.use('/home', router);

router.get('/contacto', (req, res, next) => {
    console.log('Estamos en la página de contacto');
    next();
});

router.get('/info', (req, res) => {
    res.send('Página de info');
});

router.get('/error', (err, req, res, next) => {
    console.log('Página de error');
    console.error(err.stack);
    next(err);
});

app.use((req, res) => {
    res.send('Página de cierre.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500: Algo salió mal.');
});
  
app.use((req, res, next) => {
    res.status(404).send('Error 404: No encontrado.');
});

app.listen(config.PORT);
console.log(`Express iniciado en el puerto ${config.PORT}.`);