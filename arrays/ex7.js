function sumOfSquares(array){
	return array.reduce(function (accumulator, num){
		return accumulator + (num*num);
	},0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));