const { clean, response } = require('../modules/utils');
const manufacterServices = require('../services/manufacterServices');

const getAllManufacters = async (req, res) => {
    const allManufacters = await manufacterServices.getAllManufacters();
    res.json(response(0, allManufacters));
};

const getManufacter = async (req, res) => {
    const marca = clean(req.params.marca.toUpperCase());
    const code = (marca) ? 0 : 2;
    let manufacter = '';
    if (!code) manufacter = await manufacterServices.getManufacter(marca);
    res.json(response(code, manufacter));
};

module.exports = { getAllManufacters, getManufacter };