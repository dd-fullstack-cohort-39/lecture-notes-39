// Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number.  (The factors of a number are all numbers that divide evenly into it.  For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)


/* this function totals the positive factors of a number
*
* @param (number) receives number
*
* @return (number) returns total of positive factors of number
* */
let sumFactors = (number) => {
  let sum = 0
  for (let i = 1; i <= number; i++){
    if (number % i === 0) {
      sum = sum + i
    }
  }
  return sum
}

console.log(sumFactors(24))