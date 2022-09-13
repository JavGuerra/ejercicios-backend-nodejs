if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT,
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

module.exports = conexion;