const results = document.getElementById('results')

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        results.innerHTML = `<p>${inputText}</p>`
    }
}

export { checkForName }
