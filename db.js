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

export default connection