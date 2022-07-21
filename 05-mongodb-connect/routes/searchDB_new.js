const express = require('express');
const router = express.Router();

const mongoUtil = require('../services/DB_new');
const db = mongoUtil.getDb();

router.get('/ejemplo', (req, res) => {
    db.collection('products').find().toArray(function(err, result){
        if (err) throw err;
        res.json(result);
    });
})

module.exports = router;