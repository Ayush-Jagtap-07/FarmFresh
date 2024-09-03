const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        url: String,
        filename: String
    },
    price: Number,
    quantity: Number,
    category: String,
    unit: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;