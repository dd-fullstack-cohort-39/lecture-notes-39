// Using a function recreate the map array prototype. The recreation should take two arguments, the first argument should be the array being mapped, the second argument should be a callback on how to change each element in the array.

function recreateMap (originalArray, callbackFunction) {
  let newArray = []
  for(let i = 0; i < originalArray.length; i++){
    const newArrayElement = callbackFunction(originalArray[i])
    newArray.push(newArrayElement)
  }
  return newArray
}

const myDoubleFunction = number => number * 2

const myArray = [1, 4, 9, 16]
const myNewArray = recreateMap(myArray, myDoubleFunction)
console.log(myNewArray)