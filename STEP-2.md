# Step 2 - Webpack Entry 

1. Webpack is going to create a map of our app dependencies, but to make a map you need to start somewhere. In our webpack config, we can declare a starting point for our app. To do this, we need to add this line to the module.exports of our webpack config

```
entry: './src/client/index.js',
```

2. Create a new index.js file at the address above. For now, it can be mostly empty, with just an alert.

3. Experiment by running the webpack build script. Take a look at the dist folder that appears after a successful webpack build.


**You have been successful when you see a dist folder in the root of your app**

*Some miscellanious notes:*

- If you run webpack build and in your text editor you see the dist folder, but nothing inside it - it might still be working. Some text editors will hide folders or folder contents like ```dist```. Yeah... that one didn't have me second guessing myself for like 20 min...
