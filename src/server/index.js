const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
const aylien = require("aylien_textapi");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// app.use(express.static("dist"));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// set aylien API credentias
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post("/api", (req, res) => {
  console.log(req.body);
  console.log(req.body.userInput);
  textapi.sentiment(
    {
      text: req.body.userInput,
      mode: "tweet"
    },
    (error, response) => {
      if (error === null) {
        console.log("Response from Aylien API: ", response);
        res.send(response);
      } else {
        console.log(error);
        res.status(500).send("Something went wrong!");
      }
    }
  );
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
