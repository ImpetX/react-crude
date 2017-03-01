var path = require('path');

console.log(path.join(__dirname, 'src'));

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

    entry: [
        'babel-polyfill',
        './src/index.jsx'
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
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
    }
};

module.exports = config;