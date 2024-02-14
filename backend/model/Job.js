const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const {Schema} = mongoose;

const jobSchema = new Schema({

    jobId: {type: String, default: () => uuidv4()},
    title: {type: String, required: true, unique: true},
    description: {type: String},
    date: {type: String, required: true},
    requirements: {type: String}

});

exports.JobModel = mongoose.model('Job', jobSchema);