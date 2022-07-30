require('./mongo.js');
const Product = require('./models/Product.js');
const Manufacter = require('./models/Manufacter.js');
const products = require('./modules/products');
const manufacters = require('./modules/manufacters');

const createdb = async (resquest, response) => {
    await Product.deleteMany({});
    await Manufacter.deleteMany({});

    const newManufacters = await Manufacter.insertMany(manufacters);
    const newProducts = products.map( product => {
        const manufacter = newManufacters.filter((manufacter) => manufacter.cif === product.manufacter)[0];
        const { _id, name } = manufacter;
        return {
            ...product,
            manufacter: { _id, name }
        }
    });
    await Product.insertMany(newProducts);
};

createdb();