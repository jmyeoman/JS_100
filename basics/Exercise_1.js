let num = 7652;
let firstNum = num % 10;
let partNum2 = num % 100 - firstNum;
let secNum = partNum2 / 10;
let partNum3 = num % 1000 - firstNum - partNum2;
let thirdNum = partNum3 / 100;
let partNum4 = num % 10000 - firstNum - partNum2 - partNum3; 
let fourthNum = partNum4 / 1000;
console.log(firstNum);
console.log(secNum);
console.log(thirdNum);
console.log(fourthNum);

string
boolean
number
number
undefined
object
