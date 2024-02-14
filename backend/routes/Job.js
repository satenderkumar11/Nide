const express = require('express');
const { createJob, fetchAllJobs, updateJobbyId } = require('../controller/Job');

const router = express.Router();

router.post('/', createJob).get('/', fetchAllJobs).patch('/:id', updateJobbyId);

exports.router = router;