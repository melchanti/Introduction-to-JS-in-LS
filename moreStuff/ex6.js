function allMatches(words, RegExp){

	let matchedValues = [];
	for (let value of words){
		if (RegExp.test(value)){
			matchedValues.push(value);
		}
	}

	return matchedValues;
}

let words = [
	'laboratory',
	'experiment',
	'flab',
	'pans Labyrinth',
	'elaborate',
	'polar bear',
];

console.log(allMatches(words,/lab/));