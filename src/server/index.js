var path = require('path')
const express = require('express')
const bodyParser = require('body-parser') // Middleware
const cors = require('cors'); // Cross-origin allowance
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi") // SDK from Aylien to make API calls




// Use dotenv to process API key from .env file 
const dotenv = require('dotenv');
dotenv.config();





// API keys via dotenv
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

/* Set up app with middleware */
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'))


console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
