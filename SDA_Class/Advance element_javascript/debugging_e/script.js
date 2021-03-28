//DEBUGGING exercise

//finding n-th power of x
const power = (x, n) =>{
    // let  result = x;
    //for(let i = 1; i <= n; i++) {
       const  result = Math.pow(x , n);
    // }
    return result;
}
var p = power(3, 3);

//displays: 256, should be 8
console.log(p);