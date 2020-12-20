/*
old way, dont do this anymore
let pets = [
    {"name": "bingo", "type": "dog"},
    {"name": "fluffy", "type": "cat"},
    {"name": "ratty", "type": "rat"},
    {"name": "birdy", "type": "bird"},
    {"name": "barky", "type": "dog"}
]*/
/*
this is better way to write
let pets = [
    new Pet('fluffy', 'cat', '2'),
    new Pet('fluffy', 'cat', '2'),
    new Pet('fluffy', 'cat', '2')
]*/
function PetFinder(){
    let _pets = [];
    this.getAllPets = function () {
        return _pets
    }
    this.addPet = function(pet){
        _pets.push(pet)
    }
    this.findPetByName = function (petName) {
        return _pets.find(function (currentPet, index, array) {
            if (currentPet.name === petName){
                return true
            }
        })
        // if you have plans to update or delete, you might want to return the index in find above as well
        /*_pets[index] = newPetInformation*/
    }
}
const Pet = function(name, type, age){
    this.name = name;
    this.type = type;
    this.age = age;
}
const homeOfPets = new PetFinder();
const bingo = new Pet('bingo', 'dog', '5');
homeOfPets.addPet(bingo)
homeOfPets.addPet(new Pet('fluffy', 'cat', '2'))
homeOfPets.addPet(new Pet('ratty', 'rat', '2'))
homeOfPets.addPet(new Pet('birdy', 'bird', '2'))
homeOfPets.addPet(new Pet('barky', 'dog', '2'))

let petFound = homeOfPets.findPetByName('fluffy')
console.log(petFound.name, petFound.age, petFound.type)
const showAllPets = function( ) {
    Pet.forEach(function (pet) {
        console.log(`
        Hello, my name is ${pet.name}!
        I am a ${pet.type}
        `);
    })
}