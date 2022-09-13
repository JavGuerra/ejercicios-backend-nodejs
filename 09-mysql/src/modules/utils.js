const { config, makeDb } = require('./connection');

/**
 * Formatea la respuesta con el código de respuesta y el resultado.
 * @param {Number} response_code 
 * @param {JSON} result 
 * @returns Object
 */
const response = (response_code, result) => {
    // response_code:
    // 0: OK: Hay datos que devolver
    // 1: Sin resultados encontrados
    // >=2: Sin alguno o todos los parámetros
    if (!response_code) response_code = (result.length) ? 0 : 1;
    return {response_code, result};
}

/**
 * Obtiene un listado de la BBDD MySQL mediante consulta SQL.
 * @param {String} request 
 * @returns Object
 */
const getMysqlDbList = async (request) => {
    let list = '';
    const db = makeDb(config);

    try {
        list = await db.query(request);
    } catch (err) {
        console.error(err);
    } finally {
        await db.close();
    }

    return list;
}

/**
 * Devuelve un un valor u otro si params está vacío o no.
 * @param {String} params 
 * @returns 
 */
const r = (params) => { return (params) ? ' AND ' : ' WHERE '; }

/**
 * formatea la salida del middleware que muestra la ruta solicitada.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const rute = (req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
};

module.exports = { response, getMysqlDbList, r, rute };