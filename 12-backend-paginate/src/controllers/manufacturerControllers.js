const manufacturerServices = require('../services/manufacturerServices');

const getAllManufacturers = async (req, res) => {
    const result = await manufacturerServices.getAllManufacturers();
    const response_code = (result.length) ? 0 : 1;
    res.json({response_code, result});
};

const getManufacturer = async (req, res) => {
    const brand = req.params.marca.trim().toUpperCase();
    result = await manufacturerServices.getManufacturer({ "name": brand });
    response_code = (result.length) ? 0 : 1;
    res.json({response_code, result});
};

module.exports = { getAllManufacturers, getManufacturer };