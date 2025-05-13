const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Cargar las variables de entorno desde el archivo .env
const app = express();// Crear una instancia de Express

app.use(bodyParser.json()); // Middleware para parsear el cuerpo de las solicitudes JSON

//middleware para registrar las solicitudes entrantes
app.use((req,res,next)=>{
    console.log(`Solicitud entrate: ${req.method} ${req.url}`)
    next();
});
// Importar las rutas de los diferentes modulos en el archivo index.js
const routes = require('./routes/index');
//Asociar las rutas importadas a ssus respectivos endpoints
app.use('/api', routes);
//middleware para manejar rutas no manejadas
app.use((req,res)=>{
    console.error("ruta no orquestada en app.js"+ req.method+" "+req.url);
    res.status(404).json({error: "Ruta no encontrada intenta agregar /api"});
});

//Middleware para manejar errores
app.use((err,req,res,next)=> {
    console.error("error en la aplicacion: ",err.message);
    res.status(500).json({error:"error interno del servidor"});
});
//Iniciar el servicio 
const PORT = process.env.PORT || 3000;
app.listen (PORT,()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`);
    console.log(`URL base: http://localhost:${PORT}/api`);
});