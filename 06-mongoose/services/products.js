if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mongoClient = require('mongodb').MongoClient;

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;
const collection = "products";

mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).find().toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        database.close();
    });
});
