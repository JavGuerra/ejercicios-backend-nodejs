const express = require('express');
const app = express();
const searchRouter = require('./routes/search');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));

app.use('/search', searchRouter);

app.use(function(req, res) {
    res.status(404).send('Error 404: No encontrado.');
});

mongoose.connect(process.env.MONGODB_URL);

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}.`);
})