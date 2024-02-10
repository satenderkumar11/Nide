const express = require('express');
const { fetchNews } = require('../controller/News');

const router = express.Router();

router.get('/news', fetchNews)
      
exports.router = router;