# Evaluation of a News Article with an external API from Aylien

This project is an example of a basic but functional app built on Express and Webpack.

## Client Side

A simple webpage lets the user submit a URL. A JS function `isURL` validates with regex, if the URL matches a URL pattern of either `https://www` or `http://www`. If the URL is valid, it's submitted to a NodeJS server. The response from the server includes the NLP analysis of an external provider, Aylien. The webpage is updated with the results of this analysis to display the language and topic of the URL as well as the confidence level of the external service.

## Server Side

A NodeJS server listens for POST requests to the `/aylien` endpoint. Upon receiving the request from the client, the server sends the request via the [Aylien NodeJS SDK](https://docs.aylien.com/newsapi/sdks/#javascript-node-js-sdk) to the Aylien service. The response is returned to the client to update the webpage. 

## Pre-requisites

The repo does not include the necessary Node Modules nor the private API key for Aylien. Both are required to run the app. 

## Tests

The tests are made using the Jest framework. They are located at `/__tests__` and can be run with `$ npm test`. There is one test for each client JS application.


