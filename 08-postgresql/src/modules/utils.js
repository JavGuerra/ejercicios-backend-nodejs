/**
 * formatea la respuesta con el código de respuesta y el resultado.
 * @param {Number} response_code 
 * @param {JSON} result 
 * @returns 
 */
var response = (response_code, result) => {
    // response_code:
    // 0: OK: Hay datos que devolver
    // 1: Sin resultados encontrados
    // >=2: Sin alguno o todos los parámetros
    if (!response_code) response_code = (result.length) ? 0 : 1;
    return {response_code, result};
}

/**
 * Devuelve un un valor u otro si params está vacío o no.
 * @param {String} params 
 * @returns 
 */
function r(params) { return (params) ? ' AND ' : ' WHERE '; }

/**
 * formatea la salida del middleware que muestra la ruta solicitada.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var rute = (req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
};

module.exports = { response, r, rute };