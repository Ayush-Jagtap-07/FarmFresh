const Product = require("../models/product.js");
const ExpressError = require('../utils/ExpressError.js');

module.exports.index = async (req, res) => {
    res.render("index.ejs");
};

module.exports.renderShop = async (req, res) => {
    const allVegetableProducts = await Product.find({ category: "vegetable" });
    const allDairyProducts = await Product.find({ category: "dairy" });
    const allVeganProducts = await Product.find({ category: "vegan" });
    const allFruitProducts = await Product.find({ category: "fruit" });
    res.render("products/shop.ejs", { allVegetableProducts, allDairyProducts, allVeganProducts, allFruitProducts });
};

module.exports.newProductForm = (req, res) => {
    res.render("products/new.ejs");
};

module.exports.showProduct = async (req, res) => {
    let {id}  = req.params;
    const product = await Product.findById(id);
    if(!product){
        req.flash("error", "Product does not exist !");
        res.redirect("/farmfresh/shop");
    }else {
        res.render("products/show.ejs", {product});
    }
};

module.exports.createNewProduct = async (req, res) => {
    if(!req.body.product) {
        throw new ExpressError(400, "Send valid data !")
    }
    let url = req.file.path;
    let filename = req.file.filename;
    const newProduct = new Product(req.body.product);
    newProduct.image = { url, filename };
    await newProduct.save();
    req.flash("success", "New product added !");
    res.redirect("/farmfresh/shop");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const product = await Product.findById(id);
    if(!product){
        req.flash("error", "Product does not exist !");
        res.redirect("/farmfresh/shop");
    }

    let originalImageUrl = product.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("products/edit.ejs", {product, originalImageUrl});
    
};

module.exports.updateProduct = async (req, res) => {
    let {id} = req.params;
    let product = await Product.findByIdAndUpdate(id, {...req.body.product});

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        product.image = { url, filename };
        await product.save();
    }
    
    req.flash("success", "Product updated !");
    res.redirect(`/farmfresh/shop/${id}`);
};

module.exports.deleteProduct = async (req, res) => {
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success", "Product deleted !");
    res.redirect("/farmfresh/shop");
};