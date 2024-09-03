const User = require("../models/user");
const Cart = require('../models/cart');

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signupUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Signup successfull, continue shopping !");
            res.redirect("/farmfresh");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.saveCart = (req, res, next) => {
    res.locals.cartData = new Cart(req.session.cart ? req.session.cart : {});
    res.locals.checkoutIntended = req.session.checkoutIntended;
    next();
}

module.exports.restoreCart = (req, res, next) => {
    req.session.cart = res.locals.cartData || {};
    next();
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.loginUser = async (req, res) => {
    req.flash("success", "Login Succesfull, continue shopping !");
    let redirectUrl = res.locals.redirectUrl || "/farmfresh";
    if (res.locals.checkoutIntended) {
        res.locals.checkoutIntended = false;
        res.redirect('/cart')
    }else {
        res.redirect(redirectUrl);
    }
};

module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logout successfull !");
        res.redirect("/farmfresh");
    })
};