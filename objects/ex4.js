let obj = {
	b: 2,
	a: 1,
	c: 3,
};

let key = Object.keys(obj);

console.log(key.map ( c => c.toUpperCase()));

console.log(key);