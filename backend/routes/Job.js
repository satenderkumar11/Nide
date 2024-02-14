const express = require('express');
const { createJob, fetchAllJobs } = require('../controller/Job');

const router = express.Router();

router.post('/', createJob).get('/', fetchAllJobs);

exports.router = router;