const express = require('express');
const router = express.Router();
const products = require('../products');

const mongoDB = require('../services/DB');
const db = mongoDB.getDB();
const collection = db.collection('products');

router.get('/', (req, res) => {

    collection.drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Colección borrada.");
    });

    db.createCollection('products', function(err, res){
        if (err) throw err;
        console.log('Colección añadida.');
    });

    collection.insertMany(products, function(err, res){
        if (err) throw err;
        console.log('Documentos añadidos.');
    });

    res.end('OK');
});

module.exports = router;