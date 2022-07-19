const mongoClient = require('mongodb').MongoClient;

const db_host = process.env.DB_HOST || 'mongodb://localhost';
const db_port = process.env.DB_PORT || 49153;
const url = `${db_host}:${db_port}/`;
const db_name = process.env.DB_DATABASE || "products";
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
