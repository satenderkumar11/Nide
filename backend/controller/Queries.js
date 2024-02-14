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

exports.updateQueryById = async (req, res) => {
    try {
        const {id} = req.params;
        const update = req.body;
        const updatedQuery = await QueryModel.findByIdAndUpdate(id, update, {new: true});

        if(!updatedQuery){
            return res.status(404).json({message: "Query Doesn't exist."});
        }

        res.status(201).json(updatedQuery);
    } catch (err) {
        res.status(500).json({messge: err.message})
    }
}

exports.deleteQuery = async (req,res) => {
    try {
        const {id} = req.params;
        const query = await QueryModel.findByIdAndDelete(id);
        if(!query) {
            return res.status(404).send({error: "product not found"});
        }
        res.status(200).json(query);
    } catch (err) {
        res.status(400).json(err)
    }
}