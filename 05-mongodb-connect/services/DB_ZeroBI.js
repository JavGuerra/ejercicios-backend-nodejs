if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;

let _db

const mongoConnect = (cb) => {
    MongoClient.connect(url)
        .then((client) => {
            console.log('Connected!')
            _db = client.db(db_name)
            cb()
        })
        .catch((err) => {
            console.error(err)
            throw err
        })
}

const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb