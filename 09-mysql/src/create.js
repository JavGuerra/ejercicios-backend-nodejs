// Crea las tablas e introduce el contenido de products y manufactures en ellas.
// La BBDD 'concesionario' debe estar creada previamente, sino dará error.

const products = require('./modules/products');
const manufacters = require('./modules/manufacters');

const client = require('./modules/connection');

const createBBDD = async () => {

    const queryCreateProductsTable = 'CREATE TABLE `concesionario`.`manufacters`( `cif` varchar(10), `name` varchar(20), `address` varchar(50), PRIMARY KEY (`cif`) );'

    const queryCreateManufactersTable = 'CREATE TABLE `concesionario`.`products`( `id` int NOT NULL, `name` varchar(20), `manufacter_cif` varchar(10), `price` int, `color` varchar(20), PRIMARY KEY (`id`), FOREIGN KEY (`manufacter_cif`) REFERENCES `concesionario`.`manufacters` (`cif`) );'
    
    try {
        await client.query(`${queryCreateProductsTable}`);
        await client.query(`${queryCreateManufactersTable}`);
        
        let values ='';

        manufacters.forEach(async manufacter => {
            values += `( '${manufacter.cif}', '${manufacter.name}', '${manufacter.address}' ),`;
        })

        values = values.substring(0, values.length - 1);

        let queryCreateManufacters = `INSERT INTO \`concesionario\`.\`manufacters\`(\`cif\`, \`name\`, \`address\`) VALUES ${values};`

        console.log('QUERY PARA INSERTAR FABRICANTES', queryCreateManufacters)

        let idProduct = 0;
        values = '';
        products.forEach(async product => {
            idProduct++;
            values += `(${idProduct},'${product.name}','${product.manufacter}',${product.price},'${product.color}'),`;
        })

        values = values.substring(0, values.length - 1);

        let queryCreateProducts = `INSERT INTO \`concesionario\`.\`products\`(\`id\`, \`name\`, \`manufacter_cif\`, \`price\`, \`color\`) VALUES ${values};`
        
        console.log('QUERY PARA INSERTAR PRODUCTOS', queryCreateProducts);

        await client.query(`${queryCreateManufacters}`);
        await client.query(`${queryCreateProducts}`);
        console.log('TABLAS CREADAS CON ÉXITO');
    } catch(e) {
        console.log('ERROR',e)
    }
    await client.end();
}

createBBDD();