const { URLSearchParams } = require("url");
const fetch = require("node-fetch");
let baseUrl = "https://api.meaningcloud.com/sentiment-2.1";

let response = async function getResponse(url, data = {}) {
  const returnValue = await fetch(
    baseUrl + "?key=" + data.apikey + "&url=" + data.url + "&lang=en",
    {
      method: "POST",
      body: data
    }
  ).then(res => res.json());
  // .then(json => console.log(json));

  //   console.log(returnValue);
  return returnValue;
};

module.exports = response;
