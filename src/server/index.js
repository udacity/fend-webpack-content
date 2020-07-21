var path = require('path')
const express = require('express')
const bodyParser = require('body-parser') // Middleware
const cors = require('cors') // Cross-origin allowance
/* const mockAPIResponse = require('./mockAPI.js') */
const AYLIENtextAPI = require("aylien_textapi") // SDK from Aylien to make API calls
const fetch = require('node-fetch'); // Node JS Fetch

// Use dotenv to process API key from .env file 
const dotenv = require('dotenv');
dotenv.config();

// API keys via dotenv
const textapi = new AYLIENtextAPI({
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

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Setting up the server
const port = 8081;
const server = app.listen(port, function () {
    console.log(`Running on localhost: ${port}!`)
})


// Serving index.html from distribution folder for other requests
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


function aylienAnalysis(req, res) {
    console.log("Sending URL to Aylien")
    textapi.classify({
            url: req.body.url,
        },
        function(error, response) {
            if (error === null) {
                res.send(response)
            }
        })
}

app.post('/aylien', aylienAnalysis)

/* app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
 */