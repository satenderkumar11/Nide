const mongoose = require('mongoose');
const {Schema} = mongoose;


const newsSchema = new Schema({
    title: { type : String, required: true, unique: true},
    description: { type : String, required: true},
    image: {type: String},
    date: {type : String, required: true}
}, {timestamps: true})

exports.NewsModel = mongoose.model('News', newsSchema)