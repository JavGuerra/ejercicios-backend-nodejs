// Más info en https://github.com/TheBridge-FullStackDeveloper/fullstack_INDRA_PT_mar22/blob/main/teoria/fundamentos-javascript/clase16.md

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mongoClient = require('mongodb').MongoClient;

const manufacters = require('../manufacters');

const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const db_name = process.env.DB_DATABASE;

// Crear una colección
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.createCollection('manufacters', function(err, res){
        if (err) throw err;
        console.log('Colección añadida.');
        database.close();
    });
});

const myObj = {};

// Añadir un documento
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).insertOne(myObj, function(err, res){
        if (err) throw err;
        console.log('Documento añadido.');
        database.close();
    });
});

// Añadir una lista de documentos
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).insertMany(manufacters, function(err, res){
        if (err) throw err;
        console.log('Documentos añadidos.');
        database.close();
    });
});

const myQuery = {color: "red"};

// Eliminar un documento
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).deleteOne(myQuery, function(err, res){
        if (err) throw err;
        console.log('Documentos añadidos.');
        database.close();
    });
});

// Eliminar varios documentos
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).deleteMany(myQuery, function(err, res){
        if (err) throw err;
        console.log('Documentos añadidos.');
        database.close();
    });
});

// Eliminar una colección
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).drop(function(err, res){
        if (err) throw err;
        console.log('Colección eliminada.');
        database.close();
    });
});

const newValue = {$set: {"color": "purple", "price": 5000}};

// Cambiar un documento
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).updateOne(myQuery, newValue, function(err, res){
        if (err) throw err;
        console.log('Documento actualizado.');
        database.close();
    });
});

const newValues = {$set: {"color": "purple", "price": 5000}};

// Cambiar un documento
mongoClient.connect(url, function(err, database) {
    if (err) throw err;
    const db = database.db(db_name);
    db.collection(collection).updateMany(myQuery, newValues, function(err, res){
        if (err) throw err;
        console.log('Documentos actualizados.');
        database.close();
    });
});

// Pendientes:
// Crear BBDD
// Eliminar BBDD