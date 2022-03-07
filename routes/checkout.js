const express=require('express');
const router=express.Router();
const checkOut=require('../controller/checkoutController');
const User_Controller=require('../controller/userController')

router.use(User_Controller.protectRoute)
router.route('/:userId')
.get(checkOut)

module.exports=router;