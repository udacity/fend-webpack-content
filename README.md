# Webbpack Express Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack. 

If you want to follow along, start from master and look at the numbered branches of this project. Each one is a step along the path to creating a fully functional webpack setup. 

## Get Up and Running

*To start from the beginning:*
- clone/download master
- run ```npm install```
- run ```npm start``` to start the app
- this app runs on localhost:3000, but you can of course edit that in server.js

** To skip to the end: **
- clone/download branch step4-add-service-workers (or the highest branch number)

## Breakdown of steps:

### 1. Adding an API call

Title says it all, but I think this part is important because I have found that most webpack tutorials stop at a successful local build and never address how to deal with things like Express routes and API responses.

### 2. Adding Webpack

Adds a webpack config file and the express-friendly architecture to go with it. I might break this step down into smaller chunks because this is a large step, but the idea is to set up Webpack with a webpack config file and start implementing some basic rules. 

### 3. Adding Service Workers

this is a pretty straight forward process with already wonderful documentation and instructions on workbox, but this is an example of it integrating with all the other things
