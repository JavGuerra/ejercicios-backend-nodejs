const express = require('express');
const app = express();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cors = require('cors');
    app.use(cors());
}
const port = process.env.PORT;

// const mongoConnect = require('./services/DB_ZeroBI').mongoConnect
const mongoUtil = require('./services/DB_new');

app.use(express.static(__dirname + '/public'));

const searchRouter = require('./routes/search');
app.use('/search', searchRouter);

//mongoConnect(() => {
mongoUtil.connectToServer( function( err, client ) {
    if (err) console.log(err);

    // const DBRouter = require('./routes/searchDB_ZeroBI');
    const DBRouter = require('./routes/searchDB_new');
    app.use('/DB', DBRouter);

    app.use(function(req, res) {
        res.status(404).send('Error 404: No encontrado.');
    });

    app.listen(port, () => {
        console.log(`Servidor levantado en el puerto ${port}.`);
    });
});