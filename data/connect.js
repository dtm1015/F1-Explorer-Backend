const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'f1db',
  password: 'password',
  port: 5432,
})


module.exports = {
  query: async (text, params) => {
    const start = Date.now()
    try{
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: res.rowCount })
        return res
    } catch (err){
      console.log("Conection to postgres failed")
      console.log(err.stack)
      throw new Error(err.message)
    }
  }
}
