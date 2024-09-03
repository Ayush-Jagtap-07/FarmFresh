const mongoose = require("mongoose");
const initData = require("./data.js");
const Product = require("../models/product.js")

main().then(() => {
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/farmfresh");
}

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();