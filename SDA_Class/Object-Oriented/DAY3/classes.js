/*Old way of making classes*/
const OldPet = function (name, weight, type) {
    this.id = 13232;
    let _name;
    let _weight = weight;
    let _type = type;

    this.introducePet = function () {
        return `Hello, my name is ${_name}!`;
    }

    this.getName = function (){
        return _name;
    }

    this.setName = function (name){
        _name = name;
    }
}
fluffy = new OldPet("caty", 2.5, "cat")

/*New way of making classes*/


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

    setName (name = ""){
        this.name = name
    }

    getName = function () {

    }
}

const caty = new Pet("caty", 2.5, "CAT",
    ['run','jump','climb'])

console.log(caty.introducePet())


/**/

class User {

    constructor(name, location, username, password) {
        this.name = name;
        this.location = location;
        this.username = username;
        var password = password;
        this.comparePassword = function(pass){
            return password === pass
        }

        this.setPassword = function (newPassword) {
            password = newPassword
        }

    }
}

console.log(new User("name", "tall", "user", "pass"))
