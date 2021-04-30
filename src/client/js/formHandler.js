function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")

    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
    alert("sadsa!")
}
