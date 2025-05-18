// Importa el módulo express para crear el router
const express = require('express');
// Crea una nueva instancia de router de Express
const router = express.Router();
// Importa el controlador de ofertas laborales
const ofertaLaboralController = require('../controllers/ofertaLaboralController');

// Rutas para la API de ofertas laborales

// Ruta para obtener todas las ofertas laborales
router.get('/', (req, res, next) => {
   ofertaLaboralController.getAll(req, res);
});

// Ruta para crear una nueva oferta laboral
router.post('/create', (req, res, next) => {
    ofertaLaboralController.create(req, res);
});

// Ruta para actualizar una oferta laboral existente
router.put('/update', (req, res, next) => {
    ofertaLaboralController.update(req, res);
});

// Ruta para eliminar una oferta laboral
router.delete('/remove', (req, res, next) => {
    ofertaLaboralController.remove(req, res);
});

// Ruta para cambiar el estado de una oferta laboral por parte del reclutador
router.put('/cambiarEstado', (req, res, next) => {
    ofertaLaboralController.modificarestadoOfertaReclutador(req, res);
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;