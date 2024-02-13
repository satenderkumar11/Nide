const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    
    Username: {type: String, required: true, unique: true},
    prodModel: {type: String, required: true, unique: true},
    prodImg: [{
        data: Buffer,
        contentType: String,
    }],
    prodVideoURL: {type: String, required: true},
    prodSpecs: {type: String},
    prodCategory: {type: String, required: true},
    
});