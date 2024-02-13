const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    prodId: {type: Number, required : true, unique: true},
    prodTitle: {type: String, required: true, unique: true},
    prodModelNumber: {type: String, required: true, unique: true},
    prodeVideoUrl: {type: String},
    prodImg: {type: String},
    prodSpec: {type: String}, 
    prodCtgry: {type: String, requrired: true}
});

exports.ProductModel = mongoose.model('Product', productSchema);