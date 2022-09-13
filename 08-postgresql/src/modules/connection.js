if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const { Pool } = require('pg');
//const { Client } = require('pg');

const connectionData = {
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

const pool = new Pool(connectionData);
//const client = new Client(connectionData);
//client.connect();

console.log('Conexión establecida a la BBDD.');

module.exports = pool;
//module.exports = client;