// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Importa el paquete mysql2 con soporte para promesas
const mysql = require('mysql2/promise');

// Lista de variables de entorno requeridas para la conexión a la base de datos
const requiredEnvVars = ['DB_HOST','DB_PORT', 'DB_USER', 'DB_NAME'];

// Verifica que todas las variables de entorno requeridas estén definidas
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    // Si falta alguna variable, lanza un error y detiene la ejecución
    throw new Error(`falta variable: ${varName}`);
  }
});

// Función asíncrona para establecer la conexión a la base de datos
const connectDB = async () => {
    try {
        // Crea una nueva conexión usando los datos de las variables de entorno
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        // Mensaje de éxito en la consola si la conexión es exitosa
        console.log('Conexión a la base de datos exitosa');
        // Retorna el objeto de conexión
        return connection;
    } catch (error) {
        // Manejo de errores en la conexión y muestra el error en consola
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
}




module.exports = connectDB;// Exporta la función para ser utilizada en otras partes de la aplicación// Exporta la función para ser utilizada en otras partes de la aplicación