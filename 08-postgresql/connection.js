const { Client } = require('pg');

const connectionData = {
    user: 'postgres',
    host: '',
    database: 'concesionario',
    password: 'ABCD1234',
    port: 5432,
}

const client = new Client(connectionData);

// client.connect()
//     .then()
//     .catch();

module.exports = client;