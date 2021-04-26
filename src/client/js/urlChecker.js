const results = document.getElementById('results')

function checkUrl(inputUrl) {
    console.log('Checking URL. . .');
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const t = inputUrl;
    
    if (t.match(regex)) {
        console.log('sucess!');
    } else {
        console.log('try again!');
    }
}

export { checkUrl }