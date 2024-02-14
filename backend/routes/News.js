const express = require("express");
const { fetchAllNews, fetchNewsById, createNews, deleteNewsById, updateNewsbyId } = require("../controller/News");

const router = express.Router();

router.get('/', fetchAllNews).get('/:id', fetchNewsById).post('/', createNews).delete('/:id', deleteNewsById).patch('/:id', updateNewsbyId);

exports.router = router;
