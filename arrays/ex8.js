function oddLengths(myArray){
	let newArray = myArray.map(str => str.length);
	return newArray.filter (num => num % 2 === 1);
}

function oddLengthsReduce(myArray){
	return myArray.reduce(function (accumulator, str){
		if (str.length %2 === 1) {
			accumulator[accumulator.length]=str.length;
		}
		return accumulator;
	}, []);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(arr.push(5));
console.log(oddLengths(arr));

console.log(oddLengthsReduce(arr));