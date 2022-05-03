const express = require('express')
const port = 3000

const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send({hello: 'Hello World!'})
})

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}!`)
})