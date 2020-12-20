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
// console.log(product.name);
// console.log(rice.name);
// console.log(milk.name);
// console.log(beef.name);

// Older way of implementing classes

function Person(name, age, password) {
    this.name = name;// public
    let _age = age; // _hidden
    let _password = password;
    let _brain = "Powerful";
    this.setPassword = function (newPassword) {
        _password = newPassword
    }
    this.getBio = function () {
        return `
            Hello, I am ${name}!
            I am ${age} years old
            i have a ${_brain}
        `
    }
}
let erik = new Person('Erik', '205', 'myPassword')
erik.setPassword('myNewPassword')
let ivan = new Person('Ivan', '12', 'ivanPassword');
ivan.setPassword("IvanNewPassword")
// console.log(ivan.getBio())
// console.log(erik.getBio())
// console.log(ivan.name)
// console.log(erik.name)

//Car Details

function car(name, year, price, brainbox) {
    this.name = name;
    this.year = year; 
    this.price = price;
    let _brainbox = brainbox

    this.getDetails = function () {
        return `
            Hello, I am ${name}!
            I am ${year} years old
            It cost ${price}
        `
    }
    this.getAccess = function (access) {
        _brainbox = access
    }

    let startEngine = function(getAccess, start){
        if(start === getAccess)
        {
            return access;
        }
    }
    
    this.inginite = function(access) {
        return startEngine(access)
    }
}


let BMW = new car('BMW X4', '2016', '16000', 'brainbox')
BMW.getAccess('0000')

let Honda = new car('Honda jazz', '2020', '10000', 'brainbox')
let access = Honda.getAccess('00012')
Honda.inginite(access)
console.log(Honda.inginite(access));



// const Honda = new car('Honda jazz', '2021', '10000', 'brainbox')


// console.log(BMW.getDetails())
// console.log(Honda.getDetails())