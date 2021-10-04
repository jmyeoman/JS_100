let rlSync = require('readline-sync')
let getNumber = rlSync.question('Enter a number: ')


function numberRange(num) {
  if ((0 <= num) && (num <= 50)) {
      console.log(`${num} is between 0 and 50`);
  } else if ((51 <= num) && (num <= 100)) {
      console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
      console.log(`${num} is greater than 100`);
  } else {
      console.log(`${num} is less than 0`);
  }
}

numberRange(getNumber)

/*
More logical version
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
*/