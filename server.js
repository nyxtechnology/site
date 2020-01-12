const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const rendertron = require('rendertron-middleware')

const app = express()

const bots = rendertron.botUserAgents.concat('googlebot')

app.use(rendertron.makeMiddleware({
  proxyUrl: process.env.RENDERTRON_URL,
  userAgentPattern: new RegExp(bots.join('|'), 'i')
}))

app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.NODE_PORT || 5000
app.listen(port)
console.log('server started ' + port)
