//data structures exercise

class Element{
    
    //constructor for Element
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
}

class Stack{
    
    //constructor for Stack
    constructor() {
        //initializes an empty stack with zero elements
        this.items = [];
        this.count = 0;
    }

    //adding an element to the top of the stack
    push(item) {
        this.items.push(item);
        this.count = this.count + 1;
    }

    //removing and returning an element from the top
    pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
    }

    //viewing an element on top
    view() {
    return this.items.slice(-1)[0];
    }
    
}

//let's try if it works
var p1 = new Element("First", "Test");
var p2 = new Element("Second", "Test");
var p3 = new Element("Third", "Test");

var s = new Stack();

s.push(p1);
s.push(p2);
console.log(s.view()); //currently, Second Test is on top

s.push(p3);
console.log(s.pop()); //we return Third Test and we remove it from the top...
console.log(s.view()); //...which means Second Test is now on top









