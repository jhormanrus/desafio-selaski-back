import mysql from 'mysql'

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'desafio-selaski'
})

//* test the MySQL connection
// connection.getConnection(error => {
//   if (error) throw error
//   console.log("Successfully connected to the database.")
// })

export const query = (sql, args = null) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (err, rows) => {
      if (err)
        return reject(err)
      resolve(rows)
    })
  })
}

export const handleError = (res, err) => {
  res.status(500).send({
    message: err.message || 'Some error occurred'
  })
}

export default connection