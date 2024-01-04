const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(
  express.static("src/client", {
    index: "/views/index.html",
  })
);

console.log(__dirname);

/* app.get('/', function (req, res) {
    console.log(__dirname + '/..')
    res.sendFile('/client/views/index.html', { root: __dirname + "/.." })
}) */

// designates what port the app will listen to for incoming requests
app.listen(1506, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
