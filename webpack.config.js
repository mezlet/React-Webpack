const webpack =require ('webpack');
const  path = require ('path');
require("@babel/register");


const DIST_DIR = path .resolve(__dirname, "dist")
const SRC_DIR = path.resolve(__dirname, "src")

const config = {
entry: SRC_DIR + "/app/index.js",

output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
},

module: {
    rules: [
        {
            test: /\.js?/,
            include: SRC_DIR,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
    ]
}

}

module.exports = config;