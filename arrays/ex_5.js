let things = [1, 'a', '1', 3, NaN, 3.14515, -4, null, false];

function findIntegers(array) {
  return array.filter(element => Number.isInteger(element));
}

let integers = findIntegers(things);
console.log(integers);
