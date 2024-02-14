const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
// router.get("/",isAuthenticated,(req,res)=>{
//     // render logout page 
// })
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout',authController.logout)
module.exports = router;