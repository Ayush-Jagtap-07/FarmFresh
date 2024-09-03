
const Product = require("../models/product.js");

class Cart {
    constructor(oldCart = {}) {
        this.items = oldCart.items || {};
        this.totalQty = oldCart.totalQty || 0;
        this.totalPrice = oldCart.totalPrice || 0;
    }

    add(item, id, buyQuantity) {
        const [ price, quantity ] = buyQuantity;
        const itemId = `${id}_${quantity}`;
        let storedItem = this.items[itemId];
        if (!storedItem) {
            storedItem = this.items[itemId] = { item, itemId, qty: 0, price: 0, quantity: 0 };
        }
        storedItem.qty++;
        storedItem.quantity = quantity;
        storedItem.price = price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += price;
    }

    addByOne(itemId) {
        if (!this.items[itemId]) return;

        const pricePerUnit = this.items[itemId].price / this.items[itemId].qty;
        this.items[itemId].qty++;
        this.items[itemId].price += pricePerUnit;
        this.totalQty++;
        this.totalPrice += pricePerUnit;
    }

    reduceByOne(itemId) {
        if (!this.items[itemId]) return;

        const pricePerUnit = this.items[itemId].price / this.items[itemId].qty;
        this.items[itemId].qty--;
        this.items[itemId].price -= pricePerUnit;
        this.totalQty--;
        this.totalPrice -= pricePerUnit;

        if (this.items[itemId].qty <= 0) {
            delete this.items[itemId];
        }
    }

    removeItem(itemId) {
        if (!this.items[itemId]) return;

        this.totalQty -= this.items[itemId].qty;
        this.totalPrice -= this.items[itemId].price;
        delete this.items[itemId];
    }

    generateArray() {
        return Object.values(this.items);
    }

    async reduceStock(products){
        for(let cartProduct of products){
            const productId = cartProduct.item._id ;
            const totalCartQuantity =  this.calQuantity(cartProduct.quantity, cartProduct.qty) ; //0.5
            await Product.findByIdAndUpdate(productId, { $inc: {quantity: -totalCartQuantity}} );
        }
    }

    calQuantity(quantity, qty){
        if(quantity == "250g"){ return 0.25*qty ;}
        else if(quantity == "500g"){ return 0.5*qty ;}
        else{ return qty ;}
    }
}


module.exports = Cart;
