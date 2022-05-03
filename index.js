const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
  res.send({hello: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})