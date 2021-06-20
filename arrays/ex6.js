function oddLengths(myArray){
	let newArray = myArray.map(str => str.length);
	return newArray.filter (num => num % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));