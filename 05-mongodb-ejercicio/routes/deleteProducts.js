const express = require('express');
const router = express.Router();

const mongoDB = require('../services/DB');
const db = mongoDB.getDB();

let myQuery;

router.get('/', (req, res) => {

    myQuery = { "color": "blue" };
    db.collection('products').deleteOne(myQuery, function(err, obj) {
        if (err) throw err;
        console.log('Documento borrado.');
    });

    myQuery = { "color": "red" };
    db.collection('products').deleteMany(myQuery, function(err, obj) {
        if (err) throw err;
        console.log('Documentos borrados.');
    });

    res.end('OK');
});

module.exports = router;