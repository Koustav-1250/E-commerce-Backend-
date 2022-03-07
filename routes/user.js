const express = require("express");
const router = express.Router();
const User_Controller = require("../controller/userController");


//signup
router.route("/signup").post(User_Controller.signUp);

//login
router.route("/login").post(User_Controller.login);

//authenticate
router.use(User_Controller.protectRoute);

// logout
router.route("/logout").get(User_Controller.logOut);


module.exports = router;
