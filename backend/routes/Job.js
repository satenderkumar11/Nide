const express = require('express');
const { createJob, fetchAllJobs, updateJobbyId, fetchJobById } = require('../controller/Job');

const router = express.Router();

router.post('/', createJob).get('/', fetchAllJobs).get('/:id', fetchJobById).patch('/:id', updateJobbyId);

exports.router = router;