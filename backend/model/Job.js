const mongoose = require('mongoose');
const {Schema} = mongoose;

const jobSchema = new Schema({

    title: {type: String, required: true, unique: true},
    description: {type: String},
    date: {type: String, required: true},
    requirements: {type: String}

});

exports.JobModel = mongoose.model('Job', jobSchema);