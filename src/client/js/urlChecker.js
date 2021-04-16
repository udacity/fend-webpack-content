const results = document.getElementById('results')

function checkUrl(inputUrl) {
    console.log("::: Running checkUrl :::", inputUrl);
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const t = inputUrl;

    if (t.match(regex)) {
    alert("Successful match");
    } else {
    alert("No match");
    }


    // if(names.includes(inputText)) {
    //     results.innerHTML = `<p>${inputText}</p>`
    // }
}

export { checkUrl }


// var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
// var regex = new RegExp(expression);
// var t = 'www.google.com';

// if (t.match(regex)) {
//   alert("Successful match");
// } else {
//   alert("No match");
// }
