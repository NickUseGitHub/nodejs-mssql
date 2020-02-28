const express = require('express')
const mapRoutes = require('express-routes-mapper')
const next = require('next')
const routes = require('./apis/routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mappedRoutes = mapRoutes(routes, 'src/apis/controllers/')

app.prepare().then(() => {
  const server = express()

  server.use('/apis', mappedRoutes);

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
