function factorial(number){
	let counter = 1;
	let factorialValue = 1;
	while (counter <= number){

		factorialValue *= counter;
		counter += 1;
	}

	return factorialValue;
}

function input(){
	let rlSync= require('readline-sync');
	return rlSync.question("What's your number? ");
}

console.log(factorial(input()));