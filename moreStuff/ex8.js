function isNotANumber(value) {
	if (value === value){
		return false;
	}
	return true;
}

console.log(isNotANumber (NaN));
console.log(isNotANumber(3));