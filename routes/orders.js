import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM Orders', (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.query('SELECT * FROM Orders WHERE IdOrder = ?', [id], (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

router.post('/', (req, res) => {
  const { idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue } = req.body
  db.query('INSERT INTO Orders (IdUser, OrderNumber, DateTime, ProviderName, DateCreated, Observation, TotalValue, Status) VALUES (?, ?, ?, ?, ?, ?, ?, 1)', [idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue], (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue } = req.body
  db.query('UPDATE Orders SET IdUser = ?, OrderNumber = ?, DateTime = ?, ProviderName = ?, DateCreated = ?, Observation = ?, TotalValue = ? WHERE IdOrder = ?', [idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue, id], (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.query('UPDATE Orders SET Status = 0 WHERE IdOrder = ?', [id], (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

export default router