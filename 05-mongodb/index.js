const express = require('express');
const app = express();
const searchRouter = require('./routes/search');
const DBRouter = require('./routes/searchDB');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}
const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));

app.use('/search', searchRouter);
app.use('/DB', DBRouter);

app.use(function(req, res) {
    res.status(404).send('Error 404: No encontrado.');
});

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}.`);
});