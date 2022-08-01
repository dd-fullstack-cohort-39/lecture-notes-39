// const doATask = () => {
//   return "ya I did some task"
// }
//
// // what is the value without ()
// const doAnotherTask = doATask
// console.log(doAnotherTask)
//
// // what is the value with ()
// const completedTask = doATask()
// console.log(completedTask)


// const doYetAnotherTask = (pointNumber) => {
//   console.log('triangle point', pointNumber + 1)
// }
//
// // a function receiving another function as an argument
// const doSomeTaskThreeTimes = (someTask) => {
//   for(let i = 0; i < 3; i++) {
//     someTask(i)
//   }
// }
//
// doSomeTaskThreeTimes(doYetAnotherTask)



// a function that returns another function
const createSomeTask = () => {
  const doSomeTask = () => {
    return "ya I did some task"
  }
  return doSomeTask
}

const someTask = createSomeTask()
console.log(someTask)
console.log(someTask())

