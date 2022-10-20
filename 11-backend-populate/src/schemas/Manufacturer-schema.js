const {model, Schema} = require('mongoose');

const manufacturerSchema = new Schema(
    {
        _id: String,
        name: String,
        cif: String,
        address: String
    },
    { versionKey: false }
);

const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;