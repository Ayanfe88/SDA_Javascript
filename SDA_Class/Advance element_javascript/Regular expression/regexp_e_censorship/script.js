//REGEXP exercise

//function, replacing all numbers with X signs
function censorship(string) {
    var rule = /[0-9]+/g;
    var result = string.replace(rule, 'X');
    
    return result;
}


var p = censorship("This is my postal code: DE12100");
console.log(p);

p = censorship("The secret money is 10000 dollars");
console.log(p);

p = censorship("There is a treasure hidden under number 100, 200 or 300");
console.log(p);