function getInfo(prompt){
	return rlSync.question(prompt)
}

let rlSync= require('readline-sync');
let firstName= getInfo('What is your first name? ');
let lastName= getInfo('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);