function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value;
    console.log(`Submitting Form with URL ${formText}`)
    fetch('http://localhost:8081/aylien', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formText)
        })
        .then(res => console.log(res))
    }
    // check what text was put into the form field
    let formText = document.getElementById('url').value;
     if (Client.isURL(formText)) { 
        console.log(`Submitting Form with URL ${formText}`)
        fetch('http://localhost:8081/aylien', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formText)
        }
         ).then(res=>res.json()) 
        .then(res => console.log(res))
        async () => {
        let response = await fetch('http://localhost:8081/aylien', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({formText})
        })
        .then(console.log(response)) 
        .then(res => res.json())
        .then(function(jsonres) {
            document.getElementById('language').innerHTML = jsonres.language,
            document.getElementById('label').innerHTML = jsonres.categories.label,
            document.getElementById('confidence').innerHTML = jsonres.categories.confidence
        }) 
     }} else {
        alert("Please enter a valid URL, e.g. www.udacity.com")
    }  

export { handleSubmit }
