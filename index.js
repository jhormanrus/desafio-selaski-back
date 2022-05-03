import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'
import routes from './routes/index.js'

const app = express()
const port = 3000

app.use(cors())
app.use(json())
app.use('/api/v1', routes)

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}!`)
})