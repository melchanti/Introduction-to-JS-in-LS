function maximum(numbers){
	let max;

	for (let value of numbers){
		if (!max){
			max = value;
		}
		if (value > max){
			max = value;
		}
	}
	return max;
}
function input () {
	let rlSync = require ('readline-sync');
	let numbers = rlSync.question('Enter your set of values: ');
	let numArray = [];
	try {
		for (let value of numbers.split(',')){
			numArray.push(Number(value));
		}
	} catch (exception){
		console.log("You've entered incorrect list of number");
	}

	return numArray;
}



console.log (maximum(input()));