// Importa el módulo express para crear el router
const express = require('express');
// Crea una nueva instancia de router de Express
const router = express.Router();
// Importa el controlador de antecedentes laborales
const ancetecentesLaboralController = require('../controllers/ancetecentesLaboralController');

// Rutas para la API de antecedentes laborales

// Ruta para obtener todos los antecedentes laborales
router.get('/', (req, res, next) => {
   ancetecentesLaboralController.getAll(req, res);
});

// Ruta para crear un nuevo antecedente laboral
router.post('/create', (req, res, next) => {
    ancetecentesLaboralController.create(req, res);
});

// Ruta para actualizar un antecedente laboral existente
router.put('/update', (req, res, next) => {
    ancetecentesLaboralController.update(req, res);
});

// Ruta para eliminar un antecedente laboral
router.delete('/remove', (req, res, next) => {
    ancetecentesLaboralController.remove(req, res);
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;