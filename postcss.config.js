module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.vue'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract (content) {
              return content.match(/[A-z0-9-:/]+/g) || []
            }
          },
          extensions: ['vue']
        }
      ]
    }),
    require('autoprefixer')()
  ]
}
