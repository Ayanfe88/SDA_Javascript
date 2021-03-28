//algorithms exercise

//binary search algorithm
function binary(arr, elem) { 
   
    //beginnig and ending of an array
    var start=0;
    var end=arr.length-1; 
          
    //iterating over an array
    while (start<=end){ 
  
        //find the middle of current array
        var mid=Math.floor((start + end)/2); 
   
        //if the searched element is in the middle, we found it
        if (arr[mid]===elem) return true; 
  
        //if not, divide array on two halves
        //next iteration of the while loop will search in one half only
        else if (arr[mid] < elem)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false; 
} 

//sample array of elements
var a = [1, 2, 3, 4, 7, 11, 22, 33, 45, 51, 55, 99];

console.log(binary(a, 51)); //true
console.log(binary(a, 52)); //false

// Bubble sort

const bubbleSort = (input)=>{
const len = input.length;
for (let i = 0; i < len; i++) {
    for (let j = 0; j <len; j++) {
        const element = array[j];
        
    }
    
}
}






