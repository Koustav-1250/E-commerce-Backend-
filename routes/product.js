const express=require('express');
const router=express.Router();
const User_Controller = require("../controller/userController");
const Product_Controller = require("../controller/ProductController");

router.use(User_Controller.protectRoute)
router.route('/addProduct')
.post(Product_Controller.addProduct)

router.route('')
.get(Product_Controller.getAllProduct)


module.exports=router;