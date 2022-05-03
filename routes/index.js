import { Router } from 'express'
import orders from './orders.js'
import products from './products.js'
import users from './users.js'

const routes = Router()

routes.use("/orders", orders)
routes.use("/products", products)
routes.use("/users", users)

export default routes