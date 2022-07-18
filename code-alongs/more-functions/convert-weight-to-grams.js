// Write a function, that converts weights to grams.  The function should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".  Based on the second argument, convert the number to grams and output it

function weightToGrams (amount, units) {
  let grams
  if (units === 'lbs') {
    grams = 453.592 * amount
  } else if (units === 'g') {
    grams = amount
  } else if (units === 'oz') {
    grams = 28.3495 * amount
  } else if (units === 'kg') {
    grams = amount * 1000
  } else if (units === 'mg') {
    grams = amount / 1000
  }
  return grams
}

console.log(weightToGrams(10, 'lbs'))

