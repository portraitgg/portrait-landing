const path = require('path')

module.exports = {
  plugins: [
    'postcss-import',
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, './src/styles/mixins')
      }
    ],
    'postcss-nested',
    'tailwindcss',
    'autoprefixer'
  ]
}
