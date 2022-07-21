const express = require('express');
const router = express.Router();

const loadDB = require('../services/DB');
let db;

(async () => db = await loadDB())();

router.get('/ejemplo', (req, res) => {
    db.collection('products').find().toArray(function(err, result){
        if (err) throw err;
        res.json(result);
    });
})

module.exports = router;