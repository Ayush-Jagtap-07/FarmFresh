const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const productController = require("../controllers/products.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index Route
router.get("/", productController.index);

// Shop Route
router.get("/shop", wrapAsync( productController.renderShop ));

// New Route
router.get("/shop/new", productController.newProductForm);

// Show Route 
router.get("/shop/:id", wrapAsync( productController.showProduct ));

// Create Route 
router.post("/shop/new",
    upload.single("product[image]") , 
    wrapAsync( productController.createNewProduct )
);

// Edit Route
router.get("/:id/edit", wrapAsync( productController.renderEditForm ));

//Update Route
router.put("/:id", upload.single("product[image]"),  wrapAsync( productController.updateProduct ));

//Delete Route
router.delete("/:id", wrapAsync( productController.deleteProduct ));

module.exports = router;