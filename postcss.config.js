module.exports = {
  ident: 'postcss',
  plugins: [
    require('autoprefixer')({ browsers: ['ie >= 6', 'last 25 version'] }),
    require('postcss-import')({}),
    require('postcss-preset-env')({}),
    require('cssnano')
  ],
  minimize: true
};