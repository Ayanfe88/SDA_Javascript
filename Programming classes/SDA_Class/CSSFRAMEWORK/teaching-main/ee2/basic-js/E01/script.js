//function definition
function sum3(a, b, c) {
  return a + b + c;
}

//sum of 3 values; note that it handles not only numbers
// console.log(sum3(1, 2, 3));
// console.log(sum3('this', 'is', 'test'));

// Make the function sum 4 numbers instead of 3.
// If the sum of the numbers is over 15, make an alert for it.

function sum4(first, second, third, fourth) {
  var result = first + second + third + fourth;
  return result;
}
// console.log(sum4(1, 2, 3, 4));
// var sum_result = sum4(2, 4, 6, 8);
// console.log(sum_result);

function sum4(num1, num2, num3, num4) {
  let result = num1 + num2 + num3 + num4;
  if (result > 15) {
    alert('Result is over 15');
  }
  return result;
}

// console.log(sum4(1, 1, 1, 1));

function sum(a, b, c, d) {
  var result = a + b + c + d;
  if (result > 15) {
    alert('more then 15');
  }
  return result;
}

console.log(sum(5, 5, 5, 5));
