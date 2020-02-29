const express = require('express')
const { Connection, Request } = require('tedious')

const port = 3000
const app = express()

const config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: 'Pass_12345',
    },
  },
}

const connection = new Connection(config)

connection.on('connect', function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Sql Server connected!')
  }
})

function findAll(request) {
  return new Promise(async function(resolve, reject) {
    await connection.execSql(request)

    request.on('row', resolve)
    request.on('error', reject)
  })
}

app.get('/', async function(_, res) {
  const request = new Request('select * from nodedb.dbo.Todo', function(
    err,
    rowCount
  ) {
    if (err) {
      console.log(err)
    } else {
      console.log(rowCount + ' rows')
    }
  })

  const data = await findAll(request)

  console.log('data', data)

  res.send('hello world')
})

const server = app.listen(3000, function() {
  console.log(`Server is running ... on port: ${port}`)
})
