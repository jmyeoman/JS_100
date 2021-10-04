let rlSync = require('readline-sync');
let yourNum = parseInt(rlSync.question('Give me a number and I\'ll give you the factorial: '));

function myFactorial (num) {
  let factorial = 1
  for (let number = num; number > 0; number -= 1) {
    factorial = number * factorial;
  }
    return factorial
}

console.log(myFactorial(yourNum))