const manufacturerModel = require('../schemas/Manufacturer-schema');

const getAllManufacturers = async () => {
    return await manufacturerModel.find({}).exec();
}

const getManufacturer = async (marca) => {
    return await manufacturerModel.find({"cif": marca}).exec();
}

module.exports = { getAllManufacturers, getManufacturer };