// This is a regular JS file but VSC recognises it's a webpack file
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'), // Needs to be an absolute path
        filename: 'js/bundle.js' // Standard name for webpack output
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' 
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // This will search all files and check if they end in '.js'
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader' // If it finds a .js file it will paply the babel-loader package
                }
            }
        ]
    }
};
