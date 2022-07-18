const config = require('./config');
const homeRouter = require('./routes/home');
const searchRouter = require('./routes/search');
const express = require('express');
const app = express();

if (config.NODE_ENV !== 'production') {
    const cors = require('cors');
    app.use(cors());
}

app.use((req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
});

app.use(express.static(__dirname + '/public'));

app.use('/search', searchRouter);
app.use('/home', homeRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(`Error ${status}: ${err.message}.`);
});

app.use((req, res) => {
    res.send('Página de cierre.');
});

app.listen(config.PORT, () => {
    console.log(`Express iniciado en el puerto ${config.PORT}.`);
})