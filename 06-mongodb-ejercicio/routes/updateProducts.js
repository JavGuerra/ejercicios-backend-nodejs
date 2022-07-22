const express = require('express');
const router = express.Router();

const mongoDB = require('../services/DB');
const db = mongoDB.getDB();
const collection = db.collection('products');

let myQuery, newValues;

router.get('/', (req, res) => {

    myQuery = {"color": "blue", "price": 53500};
    newValues = { $set: {
        "price": 70000,
        "color": "red"
    }};
    collection.updateOne(myQuery, newValues, function(err, res) {
        if (err) throw err;
        console.log('Documento actualizado.');
    });

    myQuery = {"manufacter": "Q60174112"};
    newValues = { $set: {
        'price': 33000
    }};
    collection.updateMany(myQuery, newValues, function(err, res) {
        if (err) throw err;
        console.log('Documentos actualizados.');
    });

    res.end('OK');
});

module.exports = router;