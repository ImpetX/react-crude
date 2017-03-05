var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');

module.exports = {
    plugins: [
        autoprefixer(
            {
                browsers: 'last 10 versions'
            }
        ),

        cssnext()
    ]
}