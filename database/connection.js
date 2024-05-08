import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg;

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_URL_DATABASE
})

try {
    await pool.query('SELECT NOW()')
    console.log('db conectada!')
} catch (error) {
    console.log(error)
}