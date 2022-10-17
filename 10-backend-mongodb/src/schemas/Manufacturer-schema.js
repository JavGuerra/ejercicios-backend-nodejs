const {model, Schema} = require('mongoose');

const manufacturerSchema = new Schema({
    _id: String,
    name: String,
    cif: String,
    address: String

});

const Manufacturer = model('manufacters', manufacturerSchema);

module.exports = Manufacturer;