let rlSync = require('readline-sync')

let getNumber = rlSync.question('Enter number: ')


function evenOrOdd(Number) {
  if (Number % 2 === 0) { 
    console.log('even');
  } else if (Number % 1 !== 0) {
    console.log('Error: Not an integer');
    } else  {
    console.log('odd');
  }
}

evenOrOdd(getNumber)

/* Alternative
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
*/