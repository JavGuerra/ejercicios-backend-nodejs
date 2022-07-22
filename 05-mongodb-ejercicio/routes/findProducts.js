const express = require('express');
const router = express.Router();

const mongoDB = require('../services/DB');
const db = mongoDB.getDB();

let mySort, myQuery;

router.get('/', (req, res) => {

    db.collection('products').findOne({}, function(err, result) {
        if (err) throw err;
        console.log('Primero de la lista: ', result);
    });

    mySort = { "price": -1 };
    db.collection('products').find().sort(mySort).limit(10).toArray(function (err, result) {
        if (err) throw err;
        console.log('10 por precio inverso: ', result);
    });

    myQuery = {"color": "blue"};
    mySort = {"price": 1};
    db.collection('products').find(myQuery).sort(mySort).toArray(function (err, result) {
        if (err) throw err;
        console.log('Color azul por precio', result);
    });

    myQuery = {"color": "red", "price": 53900};
    db.collection('products').find(myQuery).toArray(function (err, result) {
        if (err) throw err;
        console.log('Color rojo, precio 53900: ', result);
    });

    res.end('OK');
});

module.exports = router;