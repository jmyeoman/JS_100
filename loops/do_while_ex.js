let smoking = 'I\'m smoking'
let freezing = 'I\'m freezing'
let temp = 28

do { if (temp <= 32) {
  console.log(freezing);
} else if (temp <= 38) {
  console.log(smoking);
}
  temp += 1;
} while (temp < 38)
