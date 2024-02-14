const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    
    prodId: {type: Number, required : true, unique: true},
    prodTitle: {type: String, required: true, unique: true},
    prodModelNumber: {type: String, required: true, unique: true},
    prodVideoUrl: {type: String},
    prodImg: {type: String},
    prodSpec: {type: String, required: true}, 
    prodCategory: {type: String, required: true}

});
  
exports.ProductModel = mongoose.model('Product', productSchema);