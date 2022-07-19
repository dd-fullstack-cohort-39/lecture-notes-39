const iAmAString = 'Fred'
let age = 27
const human = true
let fredsCars = ['VW', 'Porsche', 'Audi', '930']

// objects
let vW = {
  make: 'VW',
  model: 'Beetle',
  year: '1967',
  speed: 'really slow',
  drive: speed => console.log(`driving ${speed}`) // shorter arrow function syntax
}

console.log(vW.make, vW.model, vW.year)

vW.drive(vW.speed) // running the drive function
console.log(vW.drive) // console log the value of vW.drive ...which is a function
