let allMatches = function (array, matchValue) {
  let matchingArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (matchValue.test(array[i])) {
     matchingArray.push(array[i]);
    }
  };
  return matchingArray
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labrinth',
  'elaborate',
  'polar bear',
  ];
  
  console.log(allMatches(words, /lab/));
  