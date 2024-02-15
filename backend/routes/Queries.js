const express = require("express");
const { createQuery, fetchAllQuery, updateQueryById, deleteQuery } = require("../controller/Queries");


const router = express.Router();

router.get('/', fetchAllQuery).post('/', createQuery).patch('/:id',updateQueryById).delete('/:id',deleteQuery);

exports.router = router;