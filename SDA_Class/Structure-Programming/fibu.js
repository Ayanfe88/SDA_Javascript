// 0,1,1,2,3,5,8,13,21,34
// 0+1 =1,1+1 =2,1+2= 3
// iterative Approach
function fibu(n) {
 let sequence = [0,1]
   for (let i = 2; i <= n; i++) {
       sequence.push(sequence[i - 2] + sequence[i - 1]);   
   }  
   return sequence;  
}
console.log(fibu(10))