const path = require('path');

module.exports = {
    mode: "development",

    //Input
    entry: path.resolve(__dirname, 'src', 'index.js'),

    //Output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "budle.js"
    }
}