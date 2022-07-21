const express = require('express');
const router = express.Router();

const getDb = require('../services/DB_ZeroBI').getDb;
let db = getDb();

router.get('/ejemplo', (req, res) => {
    db.collection('products').find().toArray(function(err, result){
        if (err) throw err;
        res.json(result);
    });
})

module.exports = router;