
const changeTextColor = () => {
  console.log('changeTextColor fired')
  let paragraph1 = document.getElementById('paragraph1')
  console.log(paragraph1)
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  paragraph1.style.color = `rgb(${red}, ${green}, ${blue})`
}