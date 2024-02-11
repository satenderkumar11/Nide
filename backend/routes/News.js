const express = require("express");
const { fetchNews, fetchNewsById, createNews } = require("../controller/News");

const router = express.Router();

router.get('/', fetchNews).get('/:id', fetchNewsById).post('/', createNews);

exports.router = router;
