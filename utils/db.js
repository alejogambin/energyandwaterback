require('dotenv').config();
const { createPool } = require('mysql2');
const mysql = require('mysql2/promise');

//verfificar si existe la variable de entorno DB_HOST
const requiredEnvVars = ['DB_HOST','DB_PORT', 'DB_USER', 'DB_NAME'];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`falta variable: ${varName}`);
  }
});

//crear un pool de conexiones a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
module.exports = pool;
