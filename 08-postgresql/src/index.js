const compression = require('compression');
const express = require('express');
const app = express();
const { rute } = require('./modules/utils'); 
const productRouters = require('./routes/productRoutes');
const manufacterRouters = require('./routes/manufacterRoutes');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}
const port = process.env.PORT;

app.use(compression());
app.use(express.static(__dirname + '/../public'));
app.use(rute);
app.use('/products', productRouters);
app.use('/manufacters', manufacterRouters);

app.use(function(req, res) {
    res.status(404).send('Error 404: No encontrado.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(`Error ${status}: ${err.message}.`);
});

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}.`);
})