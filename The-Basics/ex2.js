let fourDigit = 4936;
let thousandsPlace = parseInt(fourDigit/1000);
let hundredsPlace = parseInt((fourDigit-(thousandsPlace*1000))/100);
let tensPlace = parseInt ((fourDigit-(thousandsPlace*1000)-(hundredsPlace*100))/10);
let onesPlace = fourDigit - (thousandsPlace*1000) - (hundredsPlace*100) - (tensPlace*10);
console.log (`1.thousands place is ${thousandsPlace} \n2.hundreds place is ${hundredsPlace} 
3. tens place is ${tensPlace} \n4. ones place is ${onesPlace}`);