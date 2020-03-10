function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)

    fetch(`http://localhost:8080/api/polarity/${formText}`)
    .then(res => res.text())
    .then((res) => {
        document.getElementById('response').innerHTML = res
    })
}

export { handleSubmit }
