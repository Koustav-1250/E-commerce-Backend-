const express=require('express');
const router=express.Router();
const User_Controller = require("../controller/userController");
const Cart_Controller = require("../controller/cartController");


router.use(User_Controller.protectRoute)
router.route('/addToCart/:productId')
.post(Cart_Controller.addToCart);

router.route('/getAllItems')
.get(Cart_Controller.getAllItems)

module.exports=router;