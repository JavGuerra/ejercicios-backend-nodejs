const express = require('express');
const app = express();
const mongoose = require('mongoose');
const searchRouter = require('./routes/search');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}
const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));

app.use('/search', searchRouter);

app.use(function(req, res) {
    res.status(404).send('Error 404: No encontrado.');
});

mongoose.connect(url);

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}.`);
})