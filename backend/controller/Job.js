const {JobModel} = require('../model/Job');

exports.createJob = async(req, res) => {

const JobItem  = new JobModel(req.body);

  try {
    const doc = await JobItem.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }

}

exports.updateJobbyId = async (req, res) => {

    const {id} = req.params;
    const details = req.body;
    try {
      
      const docs = await JobModel.findByIdAndUpdate(id, details, { new: true });
      if (!docs) {
        return res.status(404).json({ message: 'Job not found' });
      }

      res.status(201).json(docs);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }

}

exports.fetchAllJobs = async (req, res) => {

    try {
      const docs = await JobModel.find();
      console.log(docs);
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }

}