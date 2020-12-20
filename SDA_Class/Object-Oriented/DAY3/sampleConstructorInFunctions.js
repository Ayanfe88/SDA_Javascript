function Pet (name, age, type){
    // we can say constructor starts here
    if(name ===  undefined)
        return undefined;

    this.name = name;
    this.age = age;
    // and ends here
    this.sayMyName = function(){

    }
}

let caty = new Pet("caty", 20, "cat")

console.log(caty)
