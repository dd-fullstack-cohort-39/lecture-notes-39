const array1 = [1, 4, 9, 16];

// pass a function to map
const newArray = array1.map(
  (element) => { return element * 2}
);

console.log(newArray);
// expected output: Array [2, 8, 18, 32]