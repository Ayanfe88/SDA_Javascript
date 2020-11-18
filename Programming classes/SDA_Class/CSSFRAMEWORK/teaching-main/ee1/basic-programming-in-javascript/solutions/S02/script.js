//Generate a random number from 0 to 1, using `Math.random()`.
var a = Math.random();
console.log(a);

//Generate an integer random number from 1 to 10, using `Math.random()` and `Math.ceil()`.
var b = Math.ceil( Math.random() * 10 );
console.log(b);

//Create an array of twenty integer random numbers from 1 to 10, using some loops.
var arr = [];
for(var i=0; i<20; i++){
    arr[i] = Math.ceil( Math.random() * 10 );
}
console.log(arr);

for(var j in arr){
    
    //The program must bypass every index divided by 5 (using continue).
    if(j % 5 == 0) {
        console.log('bypassing... ' + j);
        continue;
    }
    
    //Create a function that will output every even value from this array (use  `for ... in`).
    if(arr[j] % 2 == 0) {
    console.log(arr[j]);
    }
    //Additionally, the program must stop after value of 1 was found (using break).
    else if(arr[j] == 1) {
        console.log('ending... found 1');
        break;
    }
    
    

}