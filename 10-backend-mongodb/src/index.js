const compression = require('compression');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const searchRoutes = require('./routes/searchRoutes');
const productRouters = require('./routes/productRoutes');
const manufacturerRouters = require('./routes/manufacturerRoutes');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
const port = process.env.PORT;

app.use(compression());

app.use((req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
});

app.use('/search', searchRoutes);
app.use('/products', productRouters);
app.use('/manufacturers', manufacturerRouters);

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