require ('dotenv').config();
const mysql = require('mysql2/promise');

// vericar que las variables de entorno esten definidas
// Lista de variables de entorno requeridas para la conexión a la base de datos
const requiredEnvVars = [
  'DB_HOST',
  'DB_USER',
  'DB_NAME',
  'DB_PORT',]   
// Verifica que todas las variables de entorno requeridas estén definidas
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      // Si falta alguna variable, lanza un error y detiene la ejecución
       throw new Error(`Falta variable de entorno:  ${envVar}`);
    }
});

// crear un pool de conexiones a la base de datos

const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Dirección del servidor de la base de datos
  user: process.env.DB_USER,         // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  database: process.env.DB_NAME,     // Nombre de la base de datos
  port: process.env.DB_PORT,         // Puerto de conexión
  waitForConnections: true,          // Espera conexiones si el pool está lleno
  connectionLimit: 10,               // Número máximo de conexiones en el pool
  queueLimit: 0                      // Número máximo de solicitudes en cola (0 = ilimitado)
});
// Exporta el pool para que pueda ser utilizado en otras partes de la aplicación
module.exports = pool;
