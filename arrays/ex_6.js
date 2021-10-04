let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let lengths = array.map(element => element.length);
  let odds = lengths.filter(element => element % 2 !== 0);
  return odds;
}

console.log(oddLengths(arr));