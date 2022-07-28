function handleLoadEvent() {
  const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

  const reducer = (previousValue, currentValue) => {
    console.log("previous value", previousValue)
    console.log("current value", currentValue)
    return(`${previousValue}    
    <h2>${currentValue}</h2>`)
  }

  const nameElements = names.reduce(reducer, "")
  const element = document.getElementById('target')
  console.log(element)
  element.innerHTML = nameElements
}