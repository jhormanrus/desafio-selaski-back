import { Router } from 'express'
import { query, handleError } from '../db.js'

const router = Router()

router.get('/', (req, res) => {
  query('SELECT * FROM User')
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  query('SELECT * FROM User WHERE IdUser = ?', [id])
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

export default router