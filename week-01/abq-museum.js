// Build a pseudocode algorithm that outputs the cost for a ticket for admission to the Albuquerque Museum: https://www.cabq.gov/culturalservices/albuquerque-museum/plan-your-visit/admission-ticketing

// pseudocode algorithm
// get age
// get isNMResident
// get isFoundationMember
// if isFoundationMember or age < 4 then free
// if age is > 12 and age < 65 and isNMResident then charge 5
// if age is > 12 and age < 65 then charge 6
// if age is >= 65 then charge 4
// if age is > 3 and age <= 12 then charge 3

// turn it into code
let age = 3
let isNMResident = true
let isFoundationMember = false
let price
if (isFoundationMember || age < 4){
  price = 0
} else if (age > 12 && age < 65 && isNMResident) {
  price = 5
} else if (age > 12 && age < 65 && !isNMResident) {
  price = 6
} else if (age >= 65) {
  price = 4
} else if (age > 3 && age <= 12) {
  price = 3
}
console.log(price)
