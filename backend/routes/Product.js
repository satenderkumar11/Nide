const express = require("express");
const {fetchAllProducts, createProduct, updateProduct, deleteProductById} = require("../controller/Product");

const router = express.Router();

router.get('/',fetchAllProducts).post('/', createProduct).patch('/:id',updateProduct).delete('/:id', deleteProductById);

exports.router = router;