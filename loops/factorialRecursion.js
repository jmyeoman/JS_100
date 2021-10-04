let rlSync = require('readline-sync');
let yourNum = parseInt(rlSync.question('Give me a number and I\'ll give you the factorial: '));

function myFactorialRecursion (num) {
  
  if (num === 1) {
    return 1;
  }
  return myFactorialRecursion(num - 1) * num;
}

console.log(myFactorialRecursion(yourNum));