// Using loops (for or while), write a function, printing numbers from a to b, divisible by c.
function myNumber(a,b,c) {
    for (var i = a; i <= b; i++) {
  //divisible by c
        if (i % c === 0) {
            console.log("Divisible =" +" "+ i); 
        }
        else if (i % c != 0) {
            
            console.log(" Not divisible =" +" "+ i);
        } 
    }
}
myNumber(12,15,3);