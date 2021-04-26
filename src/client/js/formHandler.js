function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkUrl(formText)

    console.log('URL Submitted')
    fetch('http://localhost:8081/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            article: formText
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('score-tag').innerHTML = 'Sentiment Score: ' + data.score_tag
        document.getElementById('agreement').innerHTML = 'Contrast: ' + data.agreement
        document.getElementById('confidence').innerHTML = 'Confidence: ' + data.confidence
        document.getElementById('irony').innerHTML = 'Irony: ' + data.irony
    })
}

export { handleSubmit }
