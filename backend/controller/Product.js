const {ProductModel}  = require('../model/Product')

exports.fetchAllProducts = async( req, res ) => {

    try {
        const products = await ProductModel.find();
        console.log(products);
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
};

exports.createProduct = async( req, res ) => {
    try {
        const product = new ProductModel(req.body);
        res.status(200).json(product);
    } catch ( err ) {
        res.status(400).json(err);
    }

};