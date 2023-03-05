const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const hostname = require('./constants').hostname
const port = require('./constants').port
const dev = require('./constants').dev
const protocol = require('./constants').protocol

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on ${protocol}://${hostname}:${port}`)
    })
})