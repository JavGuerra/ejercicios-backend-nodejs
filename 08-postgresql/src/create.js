// Crea las tablas e introduce el contenido de products y manufactures en ellas.
// La BBDD 'concesionario' debe estar creada previamente, sino dará error.

const products = require('./modules/products');
const manufacters = require('./modules/manufacters');

const client = require('./modules/connection');

const createBBDD = async () => {

    const queryCreateProductsTable = 'CREATE TABLE concesionario.public.manufacters( cif text NOT NULL, name text NOT NULL, address text NOT NULL, PRIMARY KEY (cif) );'

    const queryCreateManufactersTable = 'CREATE TABLE concesionario.public.products( id bigint NOT NULL, name text, manufacter_cif text, price bigint, color text, PRIMARY KEY (id), FOREIGN KEY (manufacter_cif) REFERENCES concesionario.public.manufacters (cif) );'
    
    try {
        // await client.connect();
        await client.query(`${queryCreateProductsTable} ${queryCreateManufactersTable}`);

        let values ='';

        manufacters.forEach(async manufacter => {
            values += `( '${manufacter.cif}', '${manufacter.name}', '${manufacter.address}' ),`;
        })

        values = values.substring(0, values.length - 1);

        const queryCreateManufacters = `INSERT INTO public.manufacters (cif, name, addres) VALUES ${values};`

        console.log('QUERY PARA INSERTAR FABRICANTES', queryCreateManufacters)

        let idProduct = 0;
        values = '';
        products.forEach(async product => {
            idProduct++;
            values += `(${idProduct}, '${product.name}','${product.manufacter}',${product.price},'${product.color}'),`;
        })

        values = values.substring(0, values.length - 1);

        const queryCreateProducts = `INSERT INTO public.products(id, name, manufacter_cif, price, color) VALUES ${values};`
        
        console.log('QUERY PARA INSERTAR PRODUCTOS', queryCreateManufacters)

        await client.query(`${queryCreateManufacters} ${queryCreateProducts}`);
        
        console.log('TABLAS CREADAS CON ÉXITO');
    } catch(e) {
        console.log('ERROR', e)
    }
    // await client.end();
}

createBBDD();