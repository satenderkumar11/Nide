const express = require('express');
const { createJob, fetchAllJobs, updateJobbyId, fetchJobById } = require('../controller/Job');

const authMiddlewareEmployee  = require("../middlewares/authMiddlewareEmployee.js")
const router = express.Router();

router.post('/', authMiddlewareEmployee, createJob).get('/',fetchAllJobs).get('/:id', fetchJobById).patch('/:id', authMiddlewareEmployee, updateJobbyId);

exports.router = router;