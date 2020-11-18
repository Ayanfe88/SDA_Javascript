// #1 Using loops (for or while), write a function, printing numbers from a to b, divisible by c.
// Write a function, that loops over the given range through function arguments
// Print out the numbers that are divisible by the last function argument.

// numbersinLoops(10,20,3)
// 10 starting
// 20 ending
// 3 divisible by
/*
12, 15, 18
*/

function numbersInLoop(rangeStart, rangeEnd, divisor) {
	for (index = rangeStart; index <= rangeEnd; index += 1) {
		if (index % divisor === 0) {
			console.log(index);
		}
	}
}
// numbersInLoop(10, 20, 3);
// console.log(function_test);

//Write a function that will output a multiplication table with size of a given argument.
// multiplicationTable(3);  3x3
// multiplicationTable(4);  4x4

var result = '\n';
function multiplicationtTable(input) {
	for (var i = 1; i <= input; i++) {
		debugger;
		for (var k = 1; k <= input; k++) {
			result += i * k + ' ';
			debugger;
		}
		result = ' ';
	}
}
// multiplicationtTable(4);

// Write a function, outputting a christmas tree of a given height, made of asterisk * character.
// christmasTree(4);

/** My thoughts on the problem
 * function
 * for loop
 * christmas tree must be a given into a function
 */

/*

*
**
***
****

*/

function christmasTree(height) {
	for (var i = 1; i < height; i++) {
		var result = '';
		for (var j = 1; j <= i; j++) {
			result += '*';
		}
		console.log(result);
	}
}
// christmasTree(5);

var multiplicator = 3;
var array = [
	[1, 2, 3],
	[2, 4, 6],
	[3, 6, 9],
];
array[0][0];
function multiplicationTable(array, multiplicator) {
	//  result = array.forEach(val) * multiplicator;
	array.forEach(function (value, index) {
		value.forEach(function (innerValue, innerIndex) {
			console.log(innerValue);
			array[index][innerIndex] = innerValue * multiplicator;
		});
	});
	return result;
}
var res = multiplicationTable(array, multiplicator);
console.log(array);
