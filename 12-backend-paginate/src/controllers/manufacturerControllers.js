const manufacturerServices = require('../services/manufacturerServices');

const getAllManufacturers = async (req, res) => {
    const result = await manufacturerServices.getAllManufacturers();
    const response_code = (result.length) ? 0 : 1;
    res.json({response_code, result});
};

const getManufacturer = async (req, res) => {
    const marca = req.params.marca.trim().toUpperCase();
    let response_code = (marca) ? 0 : 2;
    let result = '';
    if (!response_code) {
        result = await manufacturerServices.getManufacturer({ "name": marca });
        response_code = (result.length) ? 0 : 1;
    }
    res.json({response_code, result});
};

module.exports = { getAllManufacturers, getManufacturer };