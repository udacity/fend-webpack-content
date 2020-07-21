# Evaluation of a News Article with an external API from Aylien

This project is an example of a basic but functional app built on Express and Webpack.

## Client Side

A simple webpage lets the user submit a URL. A JS function `isURL` validates with regex, if the URL matches a URL pattern of either `https://www` or `http://www`. If the URL is valid, it's submitted to a NodeJS server. The response from the server includes the NLP analysis of an external provider, Aylien. The webpage is updated with the results of this analysis to display the language and topic of the URL as well as the confidence level of the external service.

## Server Side

A NodeJS server listens for POST requests to the `/aylien` endpoint. Upon receiving the request from the client, the server sends the request via the [Aylien NodeJS SDK](https://docs.aylien.com/newsapi/sdks/#javascript-node-js-sdk) to the Aylien service. The response is returned to the client to update the webpage. 

## Pre-requisites
### API Key
To run the Aylien analysis an API key is needed. You will need to register for your own key and store it in an .env file.
### Get Started
1. Install Node JS and the various dependent packages listed in `package.js`
2. Run `npm run build-prod` to update the `dist` folder with `index.html`, `main.css` and `main.js`
3. Run the `server.js` file via the terminal by running `npm run start` in the respective directory
4. Open the web page on your browser at `http://localhost:8081/`
5. Enter a valid URL into the input box (e.g. `https://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile/?guccounter=1`)
6. Click on the `submit` button to GET the Aylien analysis and display it in the webpage

## Tests

The tests are made using the Jest framework. They are located at `/__tests__` and can be run with `$ npm test`. There is one test for each client JS application.


