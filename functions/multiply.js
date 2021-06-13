function getNumber(prompt){
	return rlSync.question(prompt);
}

let rlSync = require('readline-sync');

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

let times = (a, b) => a * b;

console.log (`${firstNumber} * ${secondNumber} = ${times(firstNumber,secondNumber)}`);