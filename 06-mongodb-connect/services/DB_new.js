if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;

let _db

module.exports = {

    connectToServer: function (callback) {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            _db = client.db(db_name);
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
};