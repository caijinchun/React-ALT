var webpack = require('webpack');
var path = require('path');
var glob = require('glob');



module.exports = {
    entry: {
        index: "./src/js/index.js",
        vendor: ['react']
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: "[name].js",
        publicPath: '',
        chunkFilename: "[name].[chunkHash:8].js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=512'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),
    ]
};