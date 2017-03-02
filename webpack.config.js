var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {

    devtool: 'cheap-module-eval-source-map',

    resolve: {
        extensions: [
            '.js', ".jsx"
        ],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ]
    },

    entry: {
        main: './src/index.jsx'
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        // chunkFilename is required for CommonsChunkPlugin
        chunkFilename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader'

            }
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-report.html',
            openAnalyzer: true
        }),

        // building all the 3rd party modules into vendor js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
               return module.context && module.context.indexOf('node_modules') !== -1;
           },
       }),

       /*
        Generating a seperate file for webpack runtime code.
        this file must be loaded first via script tag
        */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
       })
    ]
};

module.exports = config;