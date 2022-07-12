let message = 'Hello World'
console.log(message)
message = 'How are you?'
console.log(message)

let counter = 0;
while(counter < 16) {
  console.log (counter);
  counter++;
  // counter = counter + 1
}

for(
  // declare the counter variable and start value
  let i = 0;
  // boolean expression containing the counter - will loop as long as this is true
  i < 16;
  // define the step of the counter
  i++)
// this is what will be done multiple times
{
  console.log ('i = ', i);
}