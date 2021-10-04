function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  });
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
