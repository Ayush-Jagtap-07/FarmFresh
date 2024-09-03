const express = require("express");
const router = express.Router({});
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const userController = require("../controllers/user.js");

router.get("/farmfresh/signup", userController.renderSignupForm );

router.post("/farmfresh/signup", userController.saveCart, wrapAsync( userController.signupUser )), userController.restoreCart;

router.get("/farmfresh/login", userController.renderLoginForm );

router.post("/farmfresh/login", 
    userController.saveCart, 
    passport.authenticate("local", { failureRedirect: '/farmfresh/login', failureFlash: true }), 
    userController.restoreCart, 
    userController.loginUser
);

router.get("/farmfresh/logout", userController.logoutUser )

module.exports = router;