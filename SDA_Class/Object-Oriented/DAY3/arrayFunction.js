let pets = [
    'lizard',
    'rabbit',
    'cat',
    'rat',
    'spider',
    'crock',
    'dog'
]

pets.forEach((currentPet)=>{
    console.log(`I have a ${currentPet}`)
})
console.log(pets.join())
/*you can append some extra content during join process*/
console.log(pets.join("\nI have a "))
/*you can put them in a single string variable*/
let allPetsTogether = pets.join()
let newPetsArray = [...pets]
console.log(newPetsArray.shift(), newPetsArray)
console.log([...pets].pop())
newPetsArray.push('komodo dragon')
/*this method will sort your array when adding new item*/
newPetsArray.unshift('bird')
console.log(newPetsArray)
let exampleUsingDelete = [...pets];
/*delete does not free up the array item location, it leaves a mark and location can be reused manually for other items by developer*/
console.log(exampleUsingDelete)
delete exampleUsingDelete[3];
console.log(exampleUsingDelete)
/*this only works with array delete. If you use pop or unshifty and you try to put item in location which you delete, you will replace another item in your array*/
exampleUsingDelete[3] = 'komodo dragon'
console.log(exampleUsingDelete)
console.log("Example with splice starts here")
let exampleWithSplice = [...pets];
exampleWithSplice.splice(4, 1)
console.log(exampleWithSplice)