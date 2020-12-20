// class carManager {
//
//     constructor(name, year, price, id)
//         {
//             this.name = name;
//             this.year = year;
//             this.price = price;
//             this.id = id;
//         }
//     }
//  class carManager{
//
//      listOfCar = [];
//
//      constructor() {
//      }
//     addUser = (car) => {
//         this.listOfCar.push(car)
//     }
//
//     findCar(id = "", name = ""){
//         return this.listOfCar.find((car) =>
//             car.id === car.name)
//     }
//
//     deleteUser(userId) {
//         this.user = this.users.filter(function (user) {
//             if (user.id !== userId){
//                 return user
//             }
//         })
//     }
// }

let rice = {
    "name": "rice",
    "weight": "2kg"
}
let milk = {
    "name": "mike",
    "weight": "2kg",
    "calculatePrice": function (value) {
        return value * 10;
    }
}
function product(name, weight) {
    this.name = name;
    this.weight = weight;
    this.calculatePrice = function (value) {
        return value * 10;
    }
}
new product('milk', '2.5kg')
new product('rice', '2.5kg')
class Product {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.shopName = "Rimi";
    }
    productSpecialNumber(){
        return 12;
    }
}
class Milk extends Product {
    constructor(name, weight, expiryDate) {
        super(name, weight)
        this.expiryDate = expiryDate;
    }
    whenWillYouExpire(){
        return `My expiry date is ${this.expiryDate}`
    }
}
class Rice extends Product {
    constructor(name, weight) {
        super(name, weight);
        this.numberOfGrains = 400000
    }
    howManyGrains(){
        return `i have ${this.numberOfGrains} in me!`
    }
}
let  randomProduct = new Product(`Chair`)



















