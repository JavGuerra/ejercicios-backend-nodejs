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
    const newManufacturers = await Manufacturer.insertMany(manufacturers);

    const newProducts = products.map( product => {
        const manufacturer = newManufacturers.filter(
            manufacturer => manufacturer.cif === product.manufacturer)[0];
        const { _id, name } = manufacturer;
        return { ...product, manufacturer: { ref: _id, name }
        };
    });
    await Product.insertMany(newProducts);

    db.disconnect();
    console.log('Conexión finalizada.');
};

createdb();
