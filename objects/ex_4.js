let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objArray = Object.keys(obj)
let objArrayUpper = objArray.map( function (property) {
  return property.toUpperCase();
})

console.log(objArrayUpper);