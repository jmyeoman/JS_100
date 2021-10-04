let result
let tries

for (tries = 0; result <= 2; tries += 1) {
  function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  result = randomNumberBetween(1, 6);
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');