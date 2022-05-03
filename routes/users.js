import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM User', (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

export default router