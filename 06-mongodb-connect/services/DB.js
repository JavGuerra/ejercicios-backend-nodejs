if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;

const loadDB = async () => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(db_name);
        return db;
    } catch (err) {
        console.log(err);
    }
    return db;
};

module.exports = loadDB;
