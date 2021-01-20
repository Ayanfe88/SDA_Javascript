let button = document.querySelector('#alertButton')
button.onclick= ()=> {alert('Hello')}

const powNumber = (base, exponent) => Math.pow(base, exponent);

const myArray1 = [0, 1, 2, 3, 4, 5];
const combinedArray = myArray.concat(myArray.slice());
console.log(combinedArray);

//[0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
const myArray = [0, 1, 2, 3, 4, 5];
const newArray = [...myArray]
console.log([...myArray,...newArray]);