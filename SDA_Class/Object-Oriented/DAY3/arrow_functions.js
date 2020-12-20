/* old way of writing functions */
/*

myFunction(){

}

const myfunction = function () {

}

let myObject = {
    myfucntion: function () {

    }
}
*/


/*
()({
    console.log("hello world")
})*/

let addition = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

/*new way of writting functions == arrow function */

const subtraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
}

let multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;


class Pet {
    constructor(name, weight, type, superPowers = []){
        /* here you loose the ability to use private variable declared in constructor from other functions inside class */
        this.name = name;
        this.weight = weight || 0.0;
        this.type = type;
        this.superPowers = superPowers;
    }

    introducePet (){
        return `
            Hi, my name is ${this.name}
        `
    }

    setName = (name = "") => {
        this.name = name
        /*its possible to have arrow functions inside another  */
        let fullname = () => {
         // does sometihing
        }
    }


    getName = () => this.name || "";
    getWeight = () => this.weight;
    getToy = () => ({
        name: "spiderMan",
        weight: 2.5
    });
    getSuperPowers = () => this.superPowers;
}

const caty = new Pet("caty", 2.5, "CAT",
    ['run','jump','climb'])

console.log(caty.introducePet())

const doSomethingComplex = (someParam1, someParam2,someParam3 ) => {
    let result;

    if(someParam1 > someParam2){
        result = someParam2 + someParam3
    }

    return result;
}

const doSomethingComplexOneLine = (someParam1, someParam2,someParam3 ) => (someParam1 > someParam2) ? someParam1 : someParam2;

