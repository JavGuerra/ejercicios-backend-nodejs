// node createdb
// La BBDD y las colecciones 'manufacturers' y 'products' deben estar creadas

require('dotenv').config();

const mongoose = require('mongoose');
const url = `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

const Product = require('./src/schemas/Product-schema');
const Manufacturer = require('./src/schemas/Manufacturer-schema');
const products = require('./data/products');
const manufacturers = require('./data/manufacturers');

const createdb = async () => {
    const db = await mongoose.connect(url);
    console.log('Conexión establecida con la BBDD.');

    console.log('Limpiando...');
    await Product.deleteMany({});
    await Manufacturer.deleteMany({});

    console.log('Llenando las colecciones...');
    await Manufacturer.insertMany(manufacturers);
    await Product.insertMany(products);

    db.disconnect();
    console.log('Conexión finalizada.');
};

createdb();
