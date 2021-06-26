function isANumberMinusZero(number){

	if (512/number === -Infinity){
		return true;
	}

	return false;
}

console.log(isANumberMinusZero(0));
console.log(isANumberMinusZero(121));
console.log(isANumberMinusZero(-0));