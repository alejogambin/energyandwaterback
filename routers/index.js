// Importa el módulo express para crear el router principal
const express = require('express');
const router = express.Router();

// Importa las rutas de los diferentes módulos de la aplicación
const usuarioRoutes = require('./usuario');
const antecedentesLaboralesRoutes = require('./antecedentesLaborales');
const antecedentesAcademicosRoutes = require('./antecedentesAcademicos');
const ofertaLaboralRoutes = require('./ofertaLaboral');
const postulacionRoutes = require('./postulacion');

// Asocia las rutas importadas a sus respectivos endpoints base
router.use('/usuarios', usuarioRoutes);
router.use('/antecedentesLaborales', antecedentesLaboralesRoutes);
router.use('/antecedentesAcademicos', antecedentesAcademicosRoutes);
router.use('/ofertasLaborales', ofertaLaboralRoutes);
router.use('/postulaciones', postulacionRoutes);

// Middleware para capturar rutas no manejadas en este archivo
router.use((req, res) => {
    // Muestra en consola la ruta y método no orquestados
    console.error('ruta no orquestada en index.js ' + req.method + ' ' + req.url);
    // Devuelve un error 404 en formato JSON
    res.status(404).json({
        error: 'ruta no encontrada'
    });
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;