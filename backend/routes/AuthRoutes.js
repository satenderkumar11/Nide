const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
// router.get("/",isAuthenticated,(req,res)=>{
//     // render logout page 
// })
router.post('/register', authController.register).post('/login', authController.login);
// router.post('/register', authController.register).post('/login', authController.login).get('/logout',authController.logout)
exports.router = router;