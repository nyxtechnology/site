const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')

const plugins = [
  postcssImport,
  tailwindcss('tailwind.config.js'),
  autoprefixer()
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      whitelist: ['html', 'body', 'h1', 'h2', 'h3'],
      content: ['./src/**/*.vue'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract (content) {
              return content.match(/[A-z0-9-:\/]+/g) || []
            }
          },
          extensions: ['vue']
        }
      ]
    })
  )
}

module.exports = {
  plugins
}
