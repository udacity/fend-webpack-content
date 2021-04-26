const dotenv = require('dotenv');
dotenv.config();

const path = require('path')

const fetch = require('node-fetch');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
const { response } = require('express');
const app = express()

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

console.log(`Your API key is ${process.env.API_KEY}`)

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analyze', function(req, res) {
    const oneKey = process.env.API_KEY,
          article = req.body.article,
          yoda = 'https://api.meaningcloud.com/sentiment-2.1',
          conditions = `?key=${oneKey}&lang=en&model=general&url=${article}`,
          analyzeArticle = yoda + conditions;
          
    fetch(analyzeArticle, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
        
    }) .then((response) => {
        return response.json()
    }) .then((data) => {        
        res.send({
            score_tag: data.score_tag,
            agreement: data.agreement,
            confidence: data.confidence,
            irony: data.irony
        })
    });
})