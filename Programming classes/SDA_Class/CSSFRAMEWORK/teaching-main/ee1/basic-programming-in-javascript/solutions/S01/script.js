//Using loops (`for` or `while`), write a function, printing numbers from a to b, divisible by c.
function numbersInLoops(a, b, c) {
  //iterate over numbers a to b
  for (var i = a; i <= b; i++) {
    //if value is divisible by c
    if (i % c == 0) {
      //print in console
      console.log(i);
    }
  }
}
//calling:
//numbersInLoops(10, 20, 3);

//Write a function with will output a multiplication table with size of a given argument.
function multiplicationTable(n) {
  //variable for a line of text
  var line = '';

  //loop for rows
  for (var i = 1; i <= n; i++) {
    //loop for columns inside a row
    for (var j = 1; j <= n; j++) {
      //appending a number to the line
      line += j * i + ' ';
    }

    //outputting and clearing the line
    console.log(line);
    line = '';
  }
}
//calling:
multiplicationTable(10);

//Write a function, outputting a christmas tree of a given height, made of asterisk `*` character.
function christmasTree(n) {
  var line = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
    line = '';
  }
}
//calling:
christmasTree(4);

//Christmas Tree By Night
function christmasTreeByNight(n) {
  //variable for a line of text
  var line = '';

  //row length
  row = n * 2 - 1;

  //first and last rows are easy
  for (k = 1; k <= row; k++) {
    line += '*';
  }
  console.log(line);

  //all the other rows
  for (i = 2; i < n; i++) {
    line = '';

    //how many spaces should i draw
    spaces = i * 2 - 1;

    //how many stars should i draw
    stars = (row - spaces) / 2;

    //let's draw it
    for (j = 0; j < stars; j++) {
      line += '*';
    }
    for (j = 0; j < spaces; j++) {
      line += ' ';
    }
    for (j = 0; j < stars; j++) {
      line += '*';
    }
    console.log(line);
  }

  line = '';
  //first and last rows are easy
  for (k = 1; k <= row; k++) {
    line += '*';
  }
  console.log(line);
}

// Write a function which will accept 3 numbers and check, whether they form a pythagorean triple.
// Modify the function so that it works, regardless the order of the arguments.
function pythagoreanTriple(a, b, c) {
  if (a * a == b * b + c * c) {
    console.log('yes');
  } else if (b * b == a * a + c * c) {
    console.log('yes');
  } else if (c * c == a * a + b * b) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
//calling:
//pythagoreanTriple(3,4,5);

//Write a function which will count surface area of a given shape (triangle, rectangle, trapezoid), using `switch`.
function surfaceArea(shape, a, b, c) {
  var result;
  switch (shape) {
    case 'triangle':
      result = (a * b) / 2;
      break;
    case 'rectangle':
      result = a * b;
      break;
    case 'trapezoid':
      result = ((a + b) * c) / 2;
      break;
    default:
      result = 'invalid data';
      break;
  }
  console.log(result);
}
//calling:
//surfaceArea("triangle",2,5)
