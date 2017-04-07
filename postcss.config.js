var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var postcssSimpleVars = require('postcss-simple-vars');

module.exports = {
    plugins: [
        autoprefixer(
            {
                browsers: 'last 10 versions'
            }
        ),

        cssnext(),
        postcssSimpleVars()
    ]
}