let objToCopy = {
	foo: 1,
	bar: 2,
	qux: 3,
};

function copyObj (obj, keys=[]){
	//return obj;
	let newObj={};

	for (let prop in obj){
		if (keys.length === 0){
			newObj[prop] = obj[prop];
			continue;
		}
		if (keys.includes(prop)){
			newObj[prop] = obj[prop];
		}
	};

	return newObj;
}

let newObj = copyObj(objToCopy);
console.log(Object.keys(newObj));        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(Object.keys(newObj2));       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(Object.keys(newObj3));       // => { bar: 2 }
