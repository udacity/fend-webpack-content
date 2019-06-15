const express = require('express')

const app = express()
app.use(express.static('src/public'));

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

app.get('/', function (req, res) {
    res.sendFile('/views/index.html', { root: __dirname });
})

app.get('/test', function (req, res) {
    res.send(json);
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
