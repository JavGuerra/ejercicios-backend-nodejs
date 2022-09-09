var response = (result) => {
    let response_code = (result.length) ? 0 : 1;
    return {response_code, result};
}

var rute = (req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
};

module.exports = { response, rute };