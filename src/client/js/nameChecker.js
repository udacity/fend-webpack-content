function checkForName(inputText) {
    alert("First Alert")
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
