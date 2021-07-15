# Step 1 - Installing Webpack

1. Webpack is an npm package, so we need to install it. Webpack also comes with a CLI tool (command line tool), so we will install that as well.
```
npm i webpack webpack-cli
```

You have been successful when you see webpack and webpack-cli added to your package.json dependencies

2. Get the basic webpack config up and running:

- [ ] Create a webpack.config.js file in the project root
- [ ] Add the new build npm script to your package.json ``` "build": "webpack" ```
- [ ] Fill your webpack config.js with the code below:

```
const path = require("path") 
const webpack = require('webpack')

module.exports = {

}
```

You have been successful when you can run your npm script (`$ npm run build`) in the terminal and see a webpack error (the error is there of course because our config file is empty)
