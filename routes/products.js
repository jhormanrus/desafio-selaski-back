import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM OrdersProducts', (err, data) => {
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
  db.query('SELECT * FROM OrdersProducts WHERE IdOrdersProducts = ?', [id], (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

router.post('/', (req, res) => {
  const { idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark } = req.body
  db.query('INSERT INTO OrdersProducts (IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)', [idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark], (err, data) => {
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
  const { idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark } = req.body
  db.query('UPDATE OrdersProducts SET IdOrder = ?, ValueUnit = ?, Unit = ?, Description = ?, SKU = ?, Quantity = ?, QtyBox = ?, Weight = ?, Volumen = ?, Mark = ? WHERE IdOrdersProducts = ?', [idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark, id], (err, data) => {
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
  db.query('UPDATE OrdersProducts SET Status = 0 WHERE IdOrdersProducts = ?', [id], (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    }
    else res.json(data)
  })
})

export default router