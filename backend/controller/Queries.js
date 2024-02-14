const {QueryModel} = require("../model/Queries");

exports.createQuery = async (req, res) => {
    try {
        const newQuery = new QueryModel(req.body);
        const query = await newQuery.save();
        res.status(201).json(query);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

exports.fetchAllQuery = async (req, res) => {
    try {
        const queries = await QueryModel.find();
        res.status(200).json(queries);
    } catch (err) {
        res.status(400).json(err);
    }
}