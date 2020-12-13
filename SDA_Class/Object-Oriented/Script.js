let product1 = {
    name: "Rice",
    price: 120,
    quantity: 5,
    measurement: "kg",
    discount: 15,
    calculateDiscount: function () {
        return this.price - (this.price / 100 * this.discount)
    },
    introduce: function(){
        return 
        `Hello! i am this.name
         you can buy me for ${this.price} Euros per
        ${this.measurement} There is exactly 
         ${this.quantity}copies left on shelf.
         If you buy now, you get ${this.discount}  "% off
         new price will be ${this.calculateDiscount()}  euros!`
    }
}
// console.log(product1.introduce());

let person = {
    name: "Oluwafemi",
    age: 25,
    height: 5.6,
    measurement: "ft",
    
    introduce: function(){
        return 
        `Hello!  My name is ${this.name}
         I am  ${this.age} old  My height is  ${this.height} 
         ${this.measurement}`;
    }
    
}
//  
// Destructuring
let product = {
    name: "",
    price: ""
}
let milk = {...product};
milk.name = 'milk';
let rice = {...product};
rice.name = 'rice';
let laptop = {...product};
laptop.name = 'laptop';
let beef = Object.create(product);
beef.name = "cow"
console.log(product.name);
console.log(rice.name);
console.log(milk.name);
console.log(beef.name);