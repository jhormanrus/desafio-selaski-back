import { Router } from 'express'
import { query, handleError } from '../db.js'
import jwt from 'jsonwebtoken'

const router = Router()

router.get('/login', (req, res) => {
  const { email, password } = req.query
  query('SELECT * FROM User WHERE Email = ? AND Password = ?', [email, password])
    .then(data => {
      if (data.length > 0) {
        const token = jwt.sign({ email, password }, 'secret')
        res.json({ token })
      } else {
        res.json({ error: 'Usuario o contraseña incorrectos' })
      }
    })
})

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