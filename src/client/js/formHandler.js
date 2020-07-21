async function aylienRequest(url) {
    let payload = {
        'url': url
    }
    let aylienResponse = await fetch('http://localhost:8081/aylien', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    let data = await aylienResponse.json();
    return data
}

function updateUI(aylienArray) {
    let cat = aylienArray.categories[0]
    document.getElementById('language').innerHTML = aylienArray.language
    document.getElementById('label').innerHTML = cat.label
    document.getElementById('confidence').innerHTML = cat.confidence
}

async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let urlFromForm = document.getElementById('url').value;
     if (Client.isURL(urlFromForm)) {
        let aylienAnalysis = await aylienRequest(urlFromForm)
        updateUI(aylienAnalysis)
     }}

export { handleSubmit }
