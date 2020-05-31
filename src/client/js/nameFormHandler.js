function handleNameSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formName = document.getElementById('name').value;
    console.log(formName);
    Client.checkForName(formName)
/*     fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('language').innerHTML = res.message
    }) */
}

export { handleNameSubmit }
