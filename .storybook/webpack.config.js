// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local][hash:base64:5]',
          'postcss-loader'
        ]
      },

      {
        test: /\.(jpg|png|svg|ttf|woff|woff2|otf)?$/,
        loader: 'url-loader?limit=10000'
      }
    ],
  },

  postcss: function() {
    return [
      require('postcss-cssnext')
    ];
  }
};
