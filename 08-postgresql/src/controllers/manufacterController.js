const { response } = require('../modules/utils');
const manufacterService = require('../services/manufacterService');

const getAllManufacters = async (req, res) => {
    const allManufacters = await manufacterService.getAllManufacters();
    res.send(response(allManufacters));
};

module.exports = { getAllManufacters };