function factorial(number){
	if (number<2) return number;

	return number * factorial(number-1);
}

function input(){
	let rlSync = require ('readline-sync');

	return rlSync.question('Enter your number: ');
}

console.log (factorial(input()));