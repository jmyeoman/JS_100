let isNegZero = function (num) {
  return 1 / num === -Infinity
}

console.log(isNegZero(12))
console.log(isNegZero(0))
console.log(isNegZero(-0))