const { JobModel } = require("../model/Job");

exports.createJob = async (req, res) => {
  const JobItem = new JobModel(req.body);

  try {
    const doc = await JobItem.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllJobs = async (req, res) => {
  try {
    const docs = await JobModel.find();
    console.log(docs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

exports.fetchJobById = async (req, res) => {

  const { id } = req.params;
    
  try {
    const docs = await JobModel.findById(id);
    console.log(docs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateJobbyId = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const docs = await JobModel.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};
