import { Router } from 'express'
import { query, handleError } from '../db.js'

const router = Router()

// Get All Orders
router.get('/', (req, res) => {
  query('SELECT * FROM Orders')
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Get Order by IdOrder
router.get('/:id', (req, res) => {
  const id = req.params.id
  query('SELECT * FROM Orders WHERE IdOrder = ?', [id])
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Get Order by IdUser
router.get('/user/:id', (req, res) => {
  const id = req.params.id
  query('SELECT * FROM Orders WHERE IdUser = ?', [id])
    .then(async (data) => {
      data = await Promise.all(data.map(async (order) => {
        await query('SELECT * FROM OrdersProducts WHERE IdOrder = ?', [order.IdOrder]).then(products => {
          order.Products = products
        })
        return order
      }))
      res.json(data)
    })
    .catch(err => handleError(res, err))
})

// Create Order
router.post('/', (req, res) => {
  const { idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue } = req.body
  query(
    'INSERT INTO Orders (IdUser, OrderNumber, DateTime, ProviderName, DateCreated, Observation, TotalValue, Status) VALUES (?, ?, ?, ?, ?, ?, ?, 1)',
    [idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue]
  )
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Update Order
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue } = req.body
  query(
    'UPDATE Orders SET IdUser = ?, OrderNumber = ?, DateTime = ?, ProviderName = ?, DateCreated = ?, Observation = ?, TotalValue = ? WHERE IdOrder = ?',
    [idUser, orderNumber, dateTime, providerName, dateCreated, observation, totalValue, id]
  )
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

// Delete Order
router.delete('/:id', (req, res) => {
  const { id } = req.params
  query('UPDATE Orders SET Status = 0 WHERE IdOrder = ?', [id])
    .then(data => res.json(data))
    .catch(err => handleError(res, err))
})

export default router