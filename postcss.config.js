var autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer(
            {
                browsers: 'last 10 versions'
            }
        )
    ]
}