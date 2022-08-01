console.log('hello world')

function clickedParagraph () {
  console.log('someone clicked my paragraph')
  // get the dom element that we want to change
  let myParagraphElement = document.getElementById('myParagraph')
  console.log(myParagraphElement)
  console.log('font size before change', myParagraphElement.style.fontSize)
  // change something about this element
  myParagraphElement.style.fontSize = '2em'
  console.log('font size after change', myParagraphElement.style.fontSize)
}

let paragraph = document.getElementById('myParagraph')
console.log(paragraph.innerText)
let myInnerText = paragraph.innerText
paragraph.innerHTML = myInnerText.replaceAll('love', '<strong>love</strong>')

let myArray = myInnerText.split(' ')
console.log(myArray)
let placeHolder = myArray[0]
myArray[0] = myArray[1]
myArray[1] = placeHolder
console.log(myArray)