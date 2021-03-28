//REGEXP exercise

//function, finding a valid postal code in a string
const validatePostalCode = (string) => {
    // var rule = /[A-Z\-]{2}[0-9\-]{2,5}/gi;
    var rule = /[a-z]{2}[0-9]{2}\-?[0-9]{3}/gi
    var result = rule.test(string);
    var match = string.match(rule);
    console.log(match);

    //not found - let's return an information about it
    if(result == null) {
        result = "no postal code found";
    }
    
    return result;
}


var p = validatePostalCode("This is my postal code: DE12100");
console.log(p);

p = validatePostalCode("This is my postal code: DE12-100");
console.log(p);

p = validatePostalCode("There is no postal code here");
console.log(p);