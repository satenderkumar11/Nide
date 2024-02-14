const mongoose = require('mongoose');
const {Schema} = mongoose;

const whitepaperSchema = new Schema({
    
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    authors: {type: mongoose.Schema.Types.ObjectId, ref: 'true'},
    tags: {type: mongoose.Schema.Types.Mixed}

}, {timestamps: true});
  
exports.WhitepaperModel = mongoose.model('Whitepaper', whitepaperSchema);