import { Router } from 'express'
import { query, handleError } from '../db.js'

const router = Router()

// Get All Products
router.get('/', (req, res) => {
  query('SELECT * FROM OrdersProducts')
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Get Product by IdOrdersProducts
router.get('/:id', (req, res) => {
  const id = req.params.id
  query('SELECT * FROM OrdersProducts WHERE IdOrdersProducts = ?', [id])
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Get Product by IdOrder
router.get('/order/:id', (req, res) => {
  const id = req.params.id
  query('SELECT * FROM OrdersProducts WHERE IdOrder = ?', [id])
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Create Product
router.post('/', (req, res) => {
  const { IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark } = req.body
  query(
    'INSERT INTO OrdersProducts (IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
    [IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark]
  )
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Update Product
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark } = req.body
  query(
    'UPDATE OrdersProducts SET IdOrder = ?, ValueUnit = ?, Unit = ?, Description = ?, SKU = ?, Quantity = ?, QtyBox = ?, Weight = ?, Volumen = ?, Mark = ? WHERE IdOrdersProducts = ?',
    [IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, id]
  )
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Delete Product
router.delete('/:id', (req, res) => {
  const { id } = req.params
  query('UPDATE OrdersProducts SET Status = 0 WHERE IdOrdersProducts = ?', [id])
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

export default router