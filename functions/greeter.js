function greetByName (prompt) {
  let rlSync = require('readline-sync')
  return rlSync.question(prompt)
}
  
  let firstName = greetByName("What is your first name? ")
  let lastName = greetByName("What is your last name? ")
  console.log(`Hello ${firstName} ${lastName}`)



