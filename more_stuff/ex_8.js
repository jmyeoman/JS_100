let isNotANumber = function (num) {
  if (num < 1) {
    return false;
  } else if (num >= 1) {
    return false;
  } else { 
    return true
  }  
}

console.log(isNotANumber(5))
console.log(isNotANumber(-9))
console.log(isNotANumber(NaN))