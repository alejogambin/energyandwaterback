// Importa el módulo express para crear el router
const express = require('express');
// Crea una nueva instancia de router de Express
const router = express.Router();
// Importa el controlador de postulaciones
const postulacionController = require('../controllers/postulacionController');

// Rutas para la API de postulaciones

// Ruta para obtener todas las postulaciones
router.get('/', (req, res, next) => {
   postulacionController.getAll(req, res);
});

// Ruta para crear una nueva postulación
router.post('/create', (req, res, next) => {
    postulacionController.create(req, res);
});

// Ruta para actualizar una postulación existente
router.put('/update', (req, res, next) => {
    postulacionController.update(req, res);
});

// Ruta para eliminar una postulación
router.delete('/remove', (req, res, next) => {
    postulacionController.remove(req, res);
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;