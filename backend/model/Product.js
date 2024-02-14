const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
<<<<<<< Updated upstream
    
    
    title: {type: String, required: true},
    model: {type: String, required: true, unique: true},
    videoUrl: {type: String},
    img: {type: String},
    specification: {type: String, required: true}, 
    category: {type: String, required: true},
    

}, {timestamps: true});
  
exports.ProductModel = mongoose.model('Product', productSchema);
=======
  prodId: { type: Number, required: true, unique: true },
  prodTitle: { type: String, required: true, unique: true },
  prodModelNumber: { type: String, required: true, unique: true },
  prodVideoUrl: { type: String },
  prodImg: { type: String },
  prodSpec: { type: String, required: true },
  prodCategory: { type: String, required: true },
});

exports.ProductModel = mongoose.model("Product", productSchema);
>>>>>>> Stashed changes
