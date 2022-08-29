// 1. In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

/* function countOccurrences of each number in the array
*  argument arrayOfNumbers
*  return occurrences array
* */

// declare new empty array occurrences
// loop over arrayOfNumbers [5,7,2,5,1,5]
// add 1 to the index location of the new array for the current value
// for example if the value is 5, then we will add 1 to the value at the index location of 5
// [,,,,,+1]
// occurrences[5] = occurrences[5] + 1
// after loop finishes, return occurrences array

function countOccurrences (arrayOfNumbers) {
  let occurrences = []
  for(let value of arrayOfNumbers){
    occurrences[value] = occurrences[value] ? occurrences[value] + 1 : 1
  }
  return occurrences
}

console.log(countOccurrences([5,7,2,5,1,5]))

// 2. In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both.

function fizzBuzzBaz (integer1, integer2) {
  const start = integer1 > integer2 ? integer2 : integer1
  const end = integer1 < integer2 ? integer2 : integer1
  for(let i = start; i <= end; i++){
    if (i % 2 === 0) {
      if (i % 3 === 0){
        console.log('buz')
      }else{
        console.log('fizz')
      }
    } else if(i % 3 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzzBaz(27, 3)