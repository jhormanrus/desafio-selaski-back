# Endpoints

## Users

| Route | Type | Description |
| - | - | - |
| /api/v1/users | `GET` | Get all users |
| /api/v1/users/:id | `GET` | Get user by id |

## Orders

| Route | Type | Description |
| - | - | - |
| /api/v1/orders | `GET` | Get all orders |
| /api/v1/orders/:id | `GET` | Get order by id |
| /api/v1/orders | `POST` | Create order |
| /api/v1/orders/:id | `PUT` | Update order |
| /api/v1/orders/:id | `DELETE` | Delete order |

## Products

| Route | Type | Description |
| - | - | - |
| /api/v1/products | `GET` | Get all products |
| /api/v1/products/:id | `GET` | Get products by id |
| /api/v1/products | `POST` | Create products |
| /api/v1/products/:id | `PUT` | Update products |
| /api/v1/products/:id | `DELETE` | Delete products |

> Nota: El script para la creación de las tablas de base de datos y los http request para ser importados en postman se encuentran en la carpeta **postman - script sql**