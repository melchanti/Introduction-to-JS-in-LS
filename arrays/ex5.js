function findIntegers(array){
	return array.filter(value => {
		if (typeof value === 'number'){
			return parseInt(value) === value;
		}

		else return false;
	});
};

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);