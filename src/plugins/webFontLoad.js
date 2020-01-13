import WebFontLoader from 'webfontloader'

WebFontLoader.load({
  google: {
    families: [process.env.VUE_APP_GOOGLE_FONT]
  }
})
