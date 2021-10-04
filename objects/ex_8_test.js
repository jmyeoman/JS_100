let copyObject = function (originalObj){
    let newObjValues = Object.values(originalObj);
    let newObjKeys = Object.keys(originalObj);
    let newObj = {};
    let i;
    for (i = 0; i < newObjKeys.length; i += 1) {
      newObj.newObjKeys[i] = newObjValues[i];
    }
    return newObj;
};


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newerObj = copyObject(objToCopy);
console.log(newerObj);

let newObj2 = copyObject(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObject(objToCopy, ['bar']);
console.log(newObj3);
