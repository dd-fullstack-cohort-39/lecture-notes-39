console.log("Is this thing on?")

function handleLoadEvent() {
  const result = fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then(whatever => whatever.json())
    .then(value => {
      document.getElementById("target").innerHTML = value.reduce((previous, current) => {
       return(`${previous}
       <p>${current}</p>`)
     },"")

    })
  console.log(result)
}