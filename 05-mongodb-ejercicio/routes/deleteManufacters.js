const express = require('express');
const router = express.Router();

const mongoDB = require('../services/DB');
const db = mongoDB.getDB();

router.get('/', (req, res) => {

    db.collection('manufacters').drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log('Colección borrada.');
    });

    res.end('OK');
});

module.exports = router;