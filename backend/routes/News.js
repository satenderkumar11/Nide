const express = require("express");
const { fetchAllNews, fetchNewsById, createNews, deleteNewsById } = require("../controller/News");

const router = express.Router();

router.get('/', fetchAllNews).get('/:id', fetchNewsById).post('/', createNews).delete(':/id', deleteNewsById);

exports.router = router;
