const express = require("express");
const { createQuery, fetchAllQuery } = require("../controller/Queries");


const router = express.Router();

router.get('/', fetchAllQuery).post('/', createQuery);

exports.router = router;