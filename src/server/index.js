const dotenv = require('dotenv');
dotenv.config();
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




app.get('/api/polarity/:value', (req, res) => { 
    // set aylien API credentias
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
  
    textapi.sentiment(
        {
          text: req.params.value,
          mode: "tweet"
        },
        (error, response) => {
          if (error === null) {
            console.log(response);
            res.send(`Your input is: ${response.polarity} \n 
            With a confidence level of ${response.polarity_confidence.toFixed(3)}`);
          } else {
            console.log(error);
            res.status(500).send('Something went wrong!');
          }
        }
      );
})



// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})