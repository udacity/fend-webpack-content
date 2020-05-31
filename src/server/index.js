var path = require('path')
const express = require('express')
const bodyParser = require('body-parser') // Middleware
const cors = require('cors') // Cross-origin allowance
const mockAPIResponse = require('./mockAPI.js')
const AYLIENtextAPI = require("aylien_textapi") // SDK from Aylien to make API calls

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


// POST call to aylien endpoint
app.post('/aylien', function (req, res, next) {
    res.send("Got a POST Request")
    next()
    console.log("Received Post Request")
}) 

// Serving index.html from distribution folder for other requests
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



function aylienAnalysis(req) {
    const inputURL = req.body;
    console.log(inputURL),
    textapi.classify({
            url: inputURL,
        },
        function(error, response) {
            if (error === null) {
                console.log(response);
            }
            res.set('Content-Type', 'application/json');
            /* res.send(response) */
        });;
}