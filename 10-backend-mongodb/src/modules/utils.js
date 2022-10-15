/**
 * Limpia un string
 * @param {string} value 
 * @returns string
 */
const clean = value => (value === undefined || value === '') ? '' : value.trim();


/**
 * Formatea la respuesta con el código de respuesta y el resultado.
 * @param {number} response_code 
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
 * Formatea la salida del middleware que muestra la ruta solicitada.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const rute = (req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
};

module.exports = { clean, response, rute };