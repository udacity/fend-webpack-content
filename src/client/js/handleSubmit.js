function handleSubmit(formText) {
    // check what text was put into the form field
    // checkForName(formText)

    fetch(`http://localhost:8080/api/polarity/${formText}`)
    .then(res => res.json())
    .then((res) => {
        console.log(res, 'testing');
        document.getElementById('response').innerHTML = `<p>${res.polarity}</p>`;
    })
}

export { handleSubmit }
