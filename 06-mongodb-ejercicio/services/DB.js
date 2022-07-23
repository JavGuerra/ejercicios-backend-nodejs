if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;

let _db;
let _client;

const connectDB = function (callback) {
    try {
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, client) {
            _client = client;
            _db = client.db(db_name);
            return callback(err, client);
        });
    } catch (err) {
        throw err;
    }
}

const getDB = function () {
    if (_db) return _db;
    throw 'BBDD no encontrada.';
}

const disconnectDB = function () {
    if (_db) return _client.close();
    throw 'BBDD no encontrada.';
}

module.exports = { connectDB, getDB, disconnectDB };