const changeTextColor = () => {
  console.log('changeTextColor fired')
  let paragraph1 = document.getElementById('paragraph1')
  console.log(paragraph1)
  const red = Math.round(Math.random() * 255)
  const green = Math.round(Math.random() * 255)
  const blue = Math.round(Math.random() * 255)
  paragraph1.style.color = `rgb(${red}, ${green}, ${blue})`
}

function shuffleWords () {
  console.log('mouse entered shuffle words')
  let paragraph2 = document.getElementById('shuffleWords')
  console.log(paragraph2.innerText)
  let arrayOfWords = paragraph2.innerText.split(' ')
  console.log(arrayOfWords)

  // loop through all the word in the array and move them each to a new random index location
  arrayOfWords.forEach((word, index) => {
    console.log(word, index)
    const randomIndex = Math.floor(Math.random() * arrayOfWords.length)
    let placeholder = arrayOfWords[index]
    arrayOfWords[index] = arrayOfWords[randomIndex]
    arrayOfWords[randomIndex] = placeholder
  })
  console.log(arrayOfWords)
  paragraph2.innerText = arrayOfWords.join(' ')
}

const scrollDelete = () => {
  let paragraph3 = document.getElementById('scrollDelete')
  let arrayOfWords = paragraph3.innerText.split(' ')
  arrayOfWords.pop()
  paragraph3.innerText = arrayOfWords.join(' ')
}

function rot13 () {
  let rot13Paragraph = document.getElementById('rot13')
  console.log(rot13Paragraph.innerText.length)
  let originalText = rot13Paragraph.innerText
  let newInnerText = ''
  // loop once for each character and apply rot 13
  for(let i = 0; i < originalText.length; i++){
    // check if current character is a letter or not
    if (originalText.toLowerCase().charCodeAt(i) < 97){
      //if not a letter do this
      newInnerText = newInnerText + originalText[i]
    } else {
      // else (if it is a letter)
      let newCharCode =
        originalText.toLowerCase().charCodeAt(i) + 13 <= 122
          ?
          originalText.toLowerCase().charCodeAt(i) + 13
          :
          originalText.toLowerCase().charCodeAt(i) - 13

      newInnerText = newInnerText + String.fromCharCode(newCharCode)
    }
  }
  rot13Paragraph.innerText = newInnerText
  console.log('a'.charCodeAt(0))
  console.log('z'.charCodeAt(0))
}
