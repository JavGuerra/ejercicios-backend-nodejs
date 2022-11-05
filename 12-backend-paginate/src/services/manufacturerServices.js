const Manufacturer = require('../schemas/Manufacturer-schema');

const getAllManufacturers = async () => {
    return await Manufacturer.find({}).exec();
}

const getManufacturer = async (filter) => {
    return await Manufacturer.findOne(filter).exec();
}

module.exports = { getAllManufacturers, getManufacturer };