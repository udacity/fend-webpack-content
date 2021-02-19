var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const meaningAPIResponse = require("./meaningAPI.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
  console.log("Example app listening on port 8081!");
});

app.post("/analyze", async function(req, res) {
  res.status = 200;
  analyzeUrl = req.body.url;
  console.log(analyzeUrl);
  if (analyzeUrl === "") {
    res.status = 400;
    res.send();
    console.log("ERROR: no url given");
    return;
  }

  let meaningResult = await meaningAPIResponse(
    "https://api.meaningcloud.com/sentiment-2.1",
    {
      url: analyzeUrl,
      apikey: process.env.API_KEY
    }
  );
  res.send(meaningResult);
  console.log("analysis completed...");
});
