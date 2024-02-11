const express = require("express");
const { fetchAllNews, fetchNewsById, createNews } = require("../controller/News");

const router = express.Router();

router.get('/', fetchAllNews).get('/:id', fetchNewsById).post('/', createNews);

exports.router = router;
