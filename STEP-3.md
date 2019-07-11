# Step 3 - Webpack Output

The “output” of webpack is the distribution folder. It is where webpack drops or “outputs” the neat bundles of assets it creates from the individual files we point it to.

We have setup webpack just enough to be performing the most basic function of webpack - creating a dist folder with a main.js file from our entry point. And all of that is great - but none of it is useful yet.

What’s wrong? Let’s take a look:

- The main.js file of our distribution folder contains none of the javascript or other assets we wrote for our webpage.
- The distribution folder has no connection whatsoever to our app. If you start the express server, our app is still functioning exactly the same way it did in part 0.

1. Add our client/js file contents into dist/main.js


2. Create a new index.js file at the address above. For now, it can be mostly empty, with just an alert.




**You have been successful when you see a dist folder in the root of your app**

*Some miscellanious notes:*

- If you run webpack build and in your text editor you see the dist folder, but nothing inside it - it might still be working. Some text editors will hide folders or folder contents like ```dist```. Yeah... that one didn't have me second guessing myself for like 20 min...
