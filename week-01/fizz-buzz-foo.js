// Write an algorithm that runs from 1 to 20. When the number is even, output 'fizz'. When the number is divisible by 5, output 'buzz'. If it is neither even nor divisible by five, output 'foo'.

// start = 1
// end = 20
// loop counter from start to end
// if counter is even, output 'fizz'
// if counter is divisible by 5 output 'buzz'
// else output 'foo'
// go back to start of loop

let start = 1
let end = 20
// loop counter from start to end
for (let i = start; i <= end; i++) {
// if counter is even, output 'fizz'
  if (i % 2 === 0){
    console.log('fizz')
  }
  // if counter is divisible by 5 output 'buzz'
  if (i % 5 === 0){
    console.log('buzz')
  }
// else output 'foo'
  if (i % 2 && i % 5) {
    console.log('foo')
  }

// go back to start of loop
}