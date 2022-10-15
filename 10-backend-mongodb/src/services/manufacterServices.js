const manufacterModel = require('../schemas/Manufacter-schema');

const getAllManufacters = async () => {
    return await manufacterModel.find({}).exec();
}

const getManufacter = async (marca) => {
    return await manufacterModel.find({"cif": marca}).exec();
}

module.exports = { getAllManufacters, getManufacter };