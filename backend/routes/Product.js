const express = require("express");
const {fetchAllProducts, createProduct} = require("../controller/Product");

const router = express.Router();

router.get('/',fetchAllProducts).post('/', createProduct);

exports.router = router;