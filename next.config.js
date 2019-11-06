const withCSS = require('@zeit/next-css')
const withStylus = require('@zeit/next-stylus')
const nib = require('nib')
const rupture = require('rupture')
const jeet = require('jeet')
const path = require('path')

module.exports = withCSS(withStylus({
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      jeet()
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
}))