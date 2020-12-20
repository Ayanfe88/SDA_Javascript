function Person(name, age, password) {
    this.name = name; // this is now public
    let _brain = "Powerful"; // hidden noone knows this exists
    let _age = age; // not available outside
    let _password = password;
    this.setPassword = function(newPassword){
        _password = newPassword
    }
    this.getName = function (){
        return this.name
    }
    this.getBio = function () {
        return `
        Hello, I am ${this.name}!
        I am ${_age} years old.
        I have a ${_brain}.
        `
    }
    let doMaths = function(number1, number2, calculationType){
        if(calculationType === 'ADDITION') {
            return number1 + number1
        };
    }
    this.addTwoNumbers = function(number1, number2){
        return doMaths(number1, number2, "ADDITION")
    }
}
const erik = new Person("erik", 100, "myPassword")
const james = new Person("James", 110, "myPassword1")//
// console.log(erik.addTwoNumbers(10, 45))
console.log(typeof james === Person)// inheritance