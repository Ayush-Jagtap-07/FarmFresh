const Cart = require('../models/cart');
const Product = require('../models/product');

module.exports.addToCart = async (req, res) => {
    const id = req.params.id;
    const [price, quantity] = req.body.buyQuantity.split(',');
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    const product = await Product.findById(id);
    if (!product) {
        return res.redirect("/farmfresh/shop/");
    }

    cart.add(product, id, [parseFloat(price), quantity]);
    req.session.cart = cart;
    res.redirect("/farmfresh/shop/");
};

module.exports.increaseByOne = (req, res) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.addByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
};

module.exports.reduceByOne = (req, res) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
  };

  module.exports.removeAll = (req, res) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
  };

  module.exports.renderCart = (req, res) => {
    if (!req.session.cart) {
      return res.render('cart/cart', { products: null });
    }
  
    const cart = new Cart(req.session.cart);
    const products = cart.generateArray();
    const totalPrice = cart.totalPrice;
    return res.render('cart/cart', { products, totalPrice });
  };

  module.exports.checkoutCart = (req, res) => {
    if (!req.session.cart) {
      return res.render('cart/cart');
    }
    const cart = new Cart(req.session.cart);
    const products = cart.generateArray();
    cart.reduceStock(products);
    req.session.cart = {};
    return res.render('cart/payment.ejs');
  };