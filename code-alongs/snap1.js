/**
 * A simple function that takes two numbers and multiplies them.
 *
 * @param {number} number1 first value to be multiplied
 * @param {number} number2 second value to be multiplied
 * @return number the product of number1 and number2
 **/
function multiplyTwoNumbers(number1, number2) {
  const product = number1 * number2
  return product
}

const result = multiplyTwoNumbers(2,2)
console.log("result", result)

const result2 = multiplyTwoNumbers(2,3)
console.log("result2", result2)

const result3 = multiplyTwoNumbers(2,4)

console.log("result3", result3)

/**
 * a function that concatenates two strings and returns the result
 *
 * @param {string} string1 the first string value to be concatenated
 * @param {string} string2 the second string value to be concatenated
 * @return {string} the result of concatenating two strings
 **/

function combineTwoStrings(string1, string2) {
  //return `${string1}${string2}`
  return string1 + string2
}

const combinedResult = combineTwoStrings('is this ', "thing on?")
console.log(combinedResult)

