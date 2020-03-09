projectData = {};
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

app.get('/test', function (req, res) { 
    textapi.sentiment(
        {
          text: 'this is text',
          mode: "tweet"
        },
        function(error, response) {
          if (error === null) {
            console.log(response);
            res.send(response);
          } else {
            res.status(500).send('Something went wrong!');
          }
        }
      );
})


// axios.get('/test', data).then(req => {
//     textapi.sentiment(
//     {
//     text: req.body.text,
//     mode: "tweet"
//     }
// )}).then(() => {
//     console.log(textapi.sentiment.text);
// }).catch(error => {
//     console.log("error", error);
// })


// app.get('/', function (req, res) {
//     res.sendFile('dist/index.html')
// })



// set aylien API credentias
var textapi = new aylien({
    application_id: 'f90d8dce',
    application_key: 'b2bd76908675a43e3e936afaf7f57cf9'
  });

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})