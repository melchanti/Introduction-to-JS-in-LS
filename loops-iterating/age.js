let rlSync= require('readline-sync');
let currentAge= Number(rlSync.question('What is your age? '));
console.log(`You are ${currentAge} years old.`);
for (i=1; i<5; i++){
	console.log(`In ${i*10} years you will be ${currentAge+(i*10)} years old`);
}