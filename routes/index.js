const express = require('express'); 
const router = express.Router();

//Importar las rutas de los diferentes modulos
const usuarioRoutes = require('./usuario');
const antecedentesLaboralRoutes = require('./antecedentesLaboral');

//Asocias las rutas importadas a sus respectivos endpoints
router.use('/usuarios', usuarioRoutes);
router.use('/antecedentesLaboral', antecedentesLaboralRoutes);

//Middleware para capturar rutas no manejadas en este archivo
router.use((req,res)=>{
    console.error("ruta no orquestada en index.js"+req.method+" "+req.url);
    res.status(404).json({error:"ruta no encontrada"});
})

module.exports = router;
