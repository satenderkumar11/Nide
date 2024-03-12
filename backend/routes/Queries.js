const express = require("express");
const { createQuery, fetchAllQuery, updateQueryById, deleteQuery } = require("../controller/Queries");
const authMiddleware = require("../middlewares/authMiddleware.js")

const router = express.Router();

router.get('/', fetchAllQuery).post('/', authMiddleware,createQuery).patch('/:id',authMiddleware,updateQueryById).delete('/:id',authMiddleware,deleteQuery);

exports.router = router;