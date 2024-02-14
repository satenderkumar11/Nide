const { ProductModel } = require("../model/Product");

exports.fetchAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatingFields = req.body;
    const existingProduct = await ProductModel.findByIdAndUpdate(id, updatingFields, {new: true});

    if (!existingProduct) {
      return res.status(404).send({ error: "Product Not Found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(deletedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

