// Importa los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea una instancia de la aplicación Express
const app = express();

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Middleware para registrar todas las solicitudes entrantes en consola
app.use((req, res, next) => {
    console.log('solicitud entrante:' + req.method + ' ' + req.url);
    next();
});

// Importa las rutas definidas en el archivo index.js dentro de la carpeta routers
const routes = require('./routers/index');

// Asocia las rutas importadas a sus respectivos endpoints bajo el prefijo /api
app.use('/api', routes);

// Middleware para manejar errores globales de la aplicación
app.use((err, req, res, next) => {
    console.error('error en la aplicacion: ', err.message);
    res.status(500).json({
        error: 'error interno del servidor'
    });
});

// Inicia el servidor en el puerto definido en las variables de entorno o en el 3000 por defecto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
    console.log(`url de la api: http://localhost:${PORT}/api`);
});
