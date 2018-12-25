const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin("style.css")

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'dist/',
        libraryExport: 'default',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractSass
    ]
}