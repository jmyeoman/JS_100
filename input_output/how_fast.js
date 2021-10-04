let rlSync = require('readline-sync');
let speed = Number(rlSync.question('How fast were you going?\n'));
if (speed <= 55) {
  console.log('That\'s safe');
  } else {
    console.log('That\'s too fast!!!')
  }
