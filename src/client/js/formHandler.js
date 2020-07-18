function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value;
     if (Client.isURL(formText)) { 
        let payload = {
            'url': formText
        }
        console.log(`Submitting Form with URL ${formText}`)
        fetch('http://localhost:8081/aylien', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json()).then(function(data) {
            console.log(data)
            document.getElementById('language').innerHTML = data.language
        }).catch(function (error) {
            console.log(error)
        })} else {
        alert("Please enter a valid URL, e.g. www.udacity.com")
    }  
}

export { handleSubmit }
