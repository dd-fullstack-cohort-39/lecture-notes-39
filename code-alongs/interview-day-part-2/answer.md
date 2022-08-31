In pseudocode, write a function that takes an array of numbers and returns the greatest number in the array.

declare function findGreatestNumber that takes an argument arrayOfNumbers that is an array of numbers.
declare maxValue = 0
for let i = 0; i < arrayOfNumbers.length; i++
    if arrayOFNumbers[i] > maxValue
        maxValue = arrayOfNumbers[i]
    else contiue loop    
return maxValue


// extra credit write a function that loops over an array of card objects and return all card objects that have a suit of CLUBS 
declare function findClubs that takes an argument arraryOfCards that is an array of card objects
if arrayOfCards.length !== 52
    stop execution and return an error
declare variable arrayOfClubs = []
for let i = 0; i < 52; i++
    if arrayOfCard[i].suit === "CLUBS"
        add arrayOfCards[i] to arrayOfClubs
    else continue     
return arrayOfClubs    

 In pseudocode, write a function that computes the first 100 numbers in the Fibonacci sequence. The Fibonacci sequence is created by adding the two previous numbers in the sequence together, and starts 0, 1, 1, 2, 3, 5, 8, ...

 declare function ComputeFibonacciTo100Digits
    declare previousNumber = 0
    declare currentNumber = 1
    start at 0 loop to 100 increment 1
        currentNumber = previousNumber + currentNumber
        print currentNumber
        previousNumber = currentNumber
```javascript
// Write a function that computes the first 100 numbers in the Fibonacci sequence.
function fibonacciHundred () {

    // Declare our array and some helper values.
    let fibonacciArray = [0, 1];
    let previousNumber = 0;
    let thisNumber = 1;

    // Loop over our array until we get 100 values.
    for (i=3; i<=100; i++) {

        // Calculate our next value in the sequence and add it to our array.
        let nextNumber = previousNumber + thisNumber;
        fibonacciArray.push(nextNumber);

        // Set our numbers to the last known numbers.
        previousNumber = thisNumber;
        thisNumber = nextNumber;
    }

    // Return our Fibonacci sequence.
    return fibonacciArray;
}

console.log(fibonacciHundred());     
```    

//  Write a function that takes a string and returns it with all vowels (not including y) removed.
function removeVowels (myString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let filteredString = '';

    // Split our string into an array of characters and iterate over each character.
    let myArray = myString.split('');
    myArray.forEach(letter => {

        // Check if our character is in the vowels array.
        if (!vowels.includes(letter)){
            // If not, add it to our filtered string.
            filteredString = filteredString + letter;
        }
    });

    return filteredString;
}

console.log(removeVowels("hello world"));
// Result: hll wrld


