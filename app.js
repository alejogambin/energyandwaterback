const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./utils/db.js');// Importar la función de conexión a la base de datos

connectDB(); // Llamar a la función para conectar a la base de datos

dotenv.config(); // Cargar las variables de entorno desde el archivo .env
const app = express();// Crear una instancia de Express

app.use(bodyParser.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

connectDB().then(() => {
    const PORT = process.env.PORT || 3000; //Definimos el puerto en el que escuchará la aplicación
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`); //Mensaje de confirmación al iniciar el servidor
    });
})
    .catch (error => {
        console.error('Error al levantar el servicio', error.message); //Mensaje de error si no se puede conectar a la base de datos
    })