/* eslint no-var: "off" */

var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {

    /*
        best option for development::

        devtool: 'cheap-module-eval-source-map'

        but due to the requirement of css modules for generating sourcemap
        'source-map' is used.
    */
    devtool: 'source-map',

    resolve: {
        extensions: [
            '.js', ".jsx", '.css'
        ],

        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],

        alias: {
            modules: path.resolve(__dirname, 'src/modules'),
            styles: path.resolve(__dirname, 'src/stylesheet'),
            images: path.resolve(__dirname, 'src/assets/images'),
            fonts: path.resolve(__dirname, 'src/assets/fonts')
        }
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

            },

            {
                test: /\.css?$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                    modules: true,
                                    localIdentName: '[name]-[local][hash:base64:5]',
                                    importLoaders: 1
                                }
                            },

                            {
                                loader: 'postcss-loader'
                            }
                        ]
                    }
                )
            },

            {
                test: /\.(jpg|png|svg|ttf|woff|woff2|otf)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-report.html',
            openAnalyzer: false
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
        }),

        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;