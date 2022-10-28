const Manufacturer = require('../schemas/Manufacturer-schema');

const getAllManufacturers = async () => {
    return await Manufacturer.find({}).exec();
}

const getManufacturer = async (marca) => {
    return await Manufacturer.findOne({"name": marca}).exec();
}

module.exports = { getAllManufacturers, getManufacturer };