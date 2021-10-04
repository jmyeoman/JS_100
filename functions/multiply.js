let multiply = function (x, y) {
  return x * y;
}

let getNumber = function (numQ) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(numQ));
}

let firstNum = getNumber('Enter the first number: ');
let secondNum = getNumber('Enter the second number: ');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);

