//data structures exercise

class Element{
    
    //constructor for Element
    constructor(brand, model, number) {
        //TODO
       this.brand = brand; 
       this.model = model;
       this.number = number;
    }
    
}
class Queue{
    
    //constructor for Queue
    constructor() {
        //TODO code
        this.elements = [];
    }

    //TODO queue methods
    
  push(brand, model, number) {
    return this.elements.push(element);
  }
  shift(brand, model, number) {
    return this.elements.shift(brand, model, number);
  }
 
  setLength(length) {
    return this.elements.length = length;
  }
}
    


//let's try if it works
var p1 = new Element("Ford", "Fiesta", "111");
var p2 = new Element("Nissan", "Almera", "222");
var p3 = new Element("Opel", "Insignia", "333");

var q = new Queue();
debugger
q.push(p1);
q.push(p2);
console.log(q.view()); //Ford Fiesta went first and should be still first

q.push(p3);
// console.log(q.pop()); //should return Ford Fiesta and remove it from the beginning...
console.log(q.view()); //...which means Nissan Almera should be now first









