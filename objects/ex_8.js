let copyObject = function (originalObj, keys){
    let newObjValues = Object.values(originalObj);
    let newObjKeys = Object.keys(originalObj);
    let newObj = {};
    let i;
    if (arrayOfKeys === undefined) {
      for (i = 0; i < newObjKeys.length; i += 1) {
      newObj.newObjKeys[i] = newObjValues[i];
    }
    return newObj;
  } else {
    for (i = 0; i < arrayOfKeys.length; i += 1) {
      newObj.arrayOfKeys[i] = newObjValues[i];
    }
  }
};


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObject(objToCopy);
console.log(newObj);

let newObj2 = copyObject(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObject(objToCopy, ['bar']);
console.log(newObj3);






/*
let copyObject = function (originalObj, arrayOfKeys){
    let newObj = {}
    let protoObj = Object.create(originalObj)
     if (arrayOfKeys === undefined) {
    for (let prop in protoObj) {
      newObj = protoObj[prop]
    }
    return newObj
  } else { 
   
    }
  }
}
*/