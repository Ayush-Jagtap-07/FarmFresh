const express = require('express');
const router = express.Router();


const cartController = require("../controllers/cart.js");

router.post('/add-to-cart/:id', cartController.addToCart );

router.get('/cart/add/:id', cartController.increaseByOne );

router.get('/cart/reduce/:id', cartController.reduceByOne );

router.get('/cart/remove/:id', cartController.removeAll );

router.get('/cart', cartController.renderCart );

router.get('/checkout', isLoggedIn, cartController.checkoutCart );

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.locals.redirectUrl = req.originalUrl;
  req.session.checkoutIntended = true;
  req.flash("error", "Please login before placing order !!");
  return res.redirect('/farmfresh/login');
}


module.exports = router;