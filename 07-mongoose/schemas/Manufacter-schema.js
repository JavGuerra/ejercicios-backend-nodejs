const {model, Schema} = require('mongoose');

const manufacterSchema = new Schema({
    _id: String,
    name: String,
    cif: String,
    address: String

});

const manufacterModel = model('Manufacter', manufacterSchema);

module.exports = manufacterModel;