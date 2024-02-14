const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true},
    model: {type: String, required: true, unique: true},
    videoUrl: {type: String},
    img: {type: String},
    specification: {type: String, required: true}, 
    category: {type: String, required: true},
}, {timestamps: true});
  
exports.ProductModel = mongoose.model('Product', productSchema);
