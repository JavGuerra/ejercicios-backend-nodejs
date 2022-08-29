const compression = require('compression');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const inicioRouter = require('./routes/inicio');
const productRouter = require('./routes/product');
const manufacterRouter = require('./routes/manufacter');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}
const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
const port = process.env.PORT;

app.use(compression());
app.use(express.static(__dirname + '/public'));

app.use('/inicio', inicioRouter);
app.use('/product', productRouter);
app.use('/manufacter', manufacterRouter);

app.use(function(req, res) {
    res.status(404).send('Error 404: No encontrado.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(`Error ${status}: ${err.message}.`);
});

async function bootstrap() {
    await mongoose.connect(url);
    console.log('Conexión establecida a la BBDD.');
    
    app.listen(port, () => {
        console.log(`Servidor levantado en el puerto ${port}.`);
    })
}

bootstrap();