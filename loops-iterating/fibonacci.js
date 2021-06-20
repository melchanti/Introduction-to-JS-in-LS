function fibonacci(number) {
	console.log (number);

	if (counter < n){
		
		sequence.push(sequence[counter]+sequence[counter-1]);
		counter += 1;
		number= sequence[counter];
		fibonacci(number )
	}
}

let counter = 1;

let sequence = [0, 1];
let n = 7;
console.log(sequence[0]);
fibonacci (sequence[1]);