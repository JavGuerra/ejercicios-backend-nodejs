if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const router = express.Router();

let db;
const MongoClient = require('mongodb').MongoClient;
const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;
const collection = 'products';
const query = {name: "BMW M2"};

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database.db(db_name);
});

router.get('/ejemplo', (req, res) => {
    db.collection(collection).find(query).toArray(function(err, result){
        if (err) throw err;
        res.json(result);
    });
})

module.exports = router;