//Car Details

function car(name, year, price, brainbox) {
    this.name = name;
    this.year = year;
    this.price = price;
    let _brainbox = brainbox

    this.getDetails = function () {
        return `
            Hello, Car: ${name}!
            Year: ${year} years old
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

    this.ignite = function(access) {
        return startEngine(access)
    }
}

// let BMW = new car('BMW X4', '2016', '16000', 'brainbox')
// BMW.getAccess('0000')

// let Honda = new car('Honda jazz', '2020', '10000', 'brainbox')
// let access = Honda.getAccess('00012')
// Honda.inginite(access)
// console.log(Honda.inginite(access));


class Car{
    constructor(name,year, price, brainBox) {
        this.name = name;
        this.year = year;
        this.price = price;
        let _brainBox = brainBox

       this.getAccess = (access) => _brainBox = access;

    }
    getDetails = (name, year,price) =>
         `
            Hello, Car: ${name}!
            Year: ${year} years old
            It cost ${price}
        `

    startEngine = (getAccess, start, access) => {
        if (start === getAccess) {
            return access;
        }
    }
    ignite = (access) => this.startEngine(access)
}
const Honda = new Car('Honda jazz', '2020', '10000', 'brainBox')
let access = Honda.getAccess('00012')
Honda.ignite(access)
console.log(Honda.ignite(access));