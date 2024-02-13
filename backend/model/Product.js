const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    prodId: {type: Number, required: true, unique: true},
    prodName: {type: String, required: true, unique: true},
    prodImg: [{
        data: Buffer,
        contentType: String,
    }],
    prodSpec: {type: String},
    prodCtgry: {type: String, requrired: true}
});

exports.ProductModel = mongoose.model('Product', productSchema);