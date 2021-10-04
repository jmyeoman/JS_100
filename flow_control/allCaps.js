let rlSync = require('readline-sync')
let Words = rlSync.question('Enter some words: ')

function longCaps(phrase) {
  if (phrase.length > 10) {
    return phrase.toUpperCase();
  } else {
    return phrase
  }
}

console.log(longCaps(Words))
