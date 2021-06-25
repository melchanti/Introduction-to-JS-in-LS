let myProtoObj = {
	foo: 1,
	bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

console.log(myObj);

for (let prop in myObj){
	console.log(myObj[prop]);
}