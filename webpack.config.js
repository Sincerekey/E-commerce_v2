const path = require('path');

module.exports = {
  entry: './src/index.js', // specify the entry point of your application
  output: {
    filename: 'bundle.js', // specify the output file name
    path: path.resolve(__dirname, 'dist'), // specify the output directory
  },
  resolve: {
    fallback: {
      "assert": require.resolve("assert/")
    }
  },
};