if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const PORT = process.env.PORT || 3001;
const searchRouter = require('./routes/search');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

if (config.NODE_ENV !== 'production') {
    const cors = require('cors');
    app.use(cors());
}

app.use(express.static(__dirname + '/public'));

app.use('/search', searchRouter);

app.use(function(req, res) {
    res.status(404).send('Error 404: No encontrado.');
});

mongoose.connect(process.env.MONGODB_URL);
    
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}.`);
})