let product = {
    name: "Rice",
    price: 120,
    quantity: 5,
    measurement: "kg",
    discount: 15,
    calculateDiscount: function () {
        return this.price - (this.price / 100 * this.discount)
    },

}
let laptop = {...product} 

laptop.price = 5000
laptop.discount = 200
laptop.calculateDiscount = function() {
   return this.price - this.discount
}
console.log(laptop.calculateDiscount());
console.log(product.calculateDiscount())