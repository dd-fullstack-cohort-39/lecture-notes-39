// IF (condition) {THEN do this if the condition is true} ELSE {do this if the condition is false}
// condition ? do this if the condition is true : do this if the condition is false
let meaningOfLife = 42

if (meaningOfLife === 42) {
  console.log(meaningOfLife)
} else {
  console.log('do not know meaning of life')
}

console.log(meaningOfLife === 42 ? meaningOfLife : 'do not know meaning of life')

let mood = 'good'

console.log(mood === 'good' ? 'Give me ice cream!' : 'I am not hungry')