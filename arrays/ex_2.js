
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
/*
let num = 0;
let value = myArray[num];
do { 
  if (value % 2 === 0) {
    console.log(value);
  }
  num += 1;
} while (num < myArray.length);
*/

myArray.forEach (x => {
  if (x % 2 === 0) {
    console.log(x);
  }
} );


