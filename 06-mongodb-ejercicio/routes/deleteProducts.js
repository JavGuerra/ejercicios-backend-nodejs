const express = require('express');
const router = express.Router();

const mongoDB = require('../services/DB');
const db = mongoDB.getDB();
const collection = db.collection('products');

let myQuery;

router.get('/', (req, res) => {

    myQuery = { "color": "blue" };
    collection.deleteOne(myQuery, function(err, obj) {
        if (err) throw err;
        console.log('Documento borrado.');
    });

    myQuery = { "color": "red" };
    collection.deleteMany(myQuery, function(err, obj) {
        if (err) throw err;
        console.log('Documentos borrados.');
    });

    res.end('OK');
});

module.exports = router;