function handleLoadEvent() {
  fetch("https://ddc-web-student.cnm.edu/apis/")
    .then(response => response.json())
    .then(parsedResponse =>{
      console.log(parsedResponse)
      document.getElementById('target').innerHTML = parsedResponse.data.reduce((previousValue, currentValue) => {
        return(
          `${previousValue}
          <div class="col">
            <div class="card">
                <div class="card-body">
                    <h2 class="h5 card-title">${currentValue.title}</h2>
                    <p class="card-text">${currentValue.body}</p>
                </div>
            </div>
</div>`


        )

      }, "")
    }).catch(error => console.error(error))
}

