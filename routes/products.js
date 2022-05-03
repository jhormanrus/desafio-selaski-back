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

// Create Product
router.post('/', (req, res) => {
  const { idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark } = req.body
  query(
    'INSERT INTO OrdersProducts (IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
    [idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark]
  )
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Update Product
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark } = req.body
  query(
    'UPDATE OrdersProducts SET IdOrder = ?, ValueUnit = ?, Unit = ?, Description = ?, SKU = ?, Quantity = ?, QtyBox = ?, Weight = ?, Volumen = ?, Mark = ? WHERE IdOrdersProducts = ?',
    [idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark, id]
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