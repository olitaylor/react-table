var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  plugins:[
    new ExtractTextPlugin({
        filename: 'table.css',
    }), 
  ],
  module: {
    rules: [
      {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : [
                'css-loader',
                'sass-loader'
            ]
        })
      },
      {
        test: /\.scss$/,
        include: paths.appSrc,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};