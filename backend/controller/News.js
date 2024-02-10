const {NewsModel} = require('../model/News');

exports.fetchNews = async (req, res) => {
   
    try {
      const docs = await NewsModel.find();
      console.log(docs);
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  };