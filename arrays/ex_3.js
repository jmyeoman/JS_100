let myArray = [[1,3,6,11], [4, 2, 4], [9, 17, 16, 0]];

for (let i = 0; i < myArray.length; i++) {
  for (let x = 0; x < myArray[i].length; x++) {
  let value = myArray[i][x];
  if (value % 2 === 0) {
    console.log(value);
  }
}
}

/*
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});
*/