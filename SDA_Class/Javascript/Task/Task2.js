//Write a function with will output a multiplication table with size of a given argument
var result = '\n';
function multiplicationtTable(input) {

    for (var i = 1; i <= input; i++) {
        for (var k = 1; k <= input; k++) {
         result += (i * k) + " ";
            
        }
        console.log(result);
        result =" ";
    }
}
multiplicationtTable(4)