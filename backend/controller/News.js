const {NewsModel} = require('../model/News');

exports.fetchAllNews = async (req, res) => {
   
    try {
      const docs = await NewsModel.find();
      console.log(docs);
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
};

exports.fetchNewsById = async (req, res) => {

    const { id } = req.params;
  
    try {
      const docs = await NewsModel.findById(id);
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
    }
};

exports.createNews = async(req, res) => {

  const newsItem  = new NewsModel(req.body);

  try {
    const doc = await newsItem.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }

}

exports.updateNewsbyId = async (req, res) => {

  const {id} = req.params;
  const details = req.body;
  try {
    
    const docs = await NewsModel.findByIdAndUpdate(id, details, { new: true });
    if (!docs) {
      return res.status(404).json({ message: 'News Item not found' });
    }

    res.status(201).json(docs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

exports.deleteNewsById = async(req, res) => {

  const { id } = req.params;
  
    try {
      const docs = await NewsModel.findByIdAndRemove(id);

      if(!docs) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
    }
}

