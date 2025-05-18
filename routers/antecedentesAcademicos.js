// Importa el módulo express para crear el router
const express = require('express');
// Crea una nueva instancia de router de Express
const router = express.Router();
// Importa el controlador de antecedentes académicos
const antecedentesAcademicosController = require('../controllers/antecedentesAcademicosController');

// Ruta para obtener todos los antecedentes académicos
router.get('/', (req, res, next) => {
   antecedentesAcademicosController.getAll(req, res);
});

// Ruta para crear un nuevo antecedente académico
router.post('/create', (req, res, next) => {
    antecedentesAcademicosController.create(req, res);
});

// Ruta para actualizar un antecedente académico existente
router.put('/update', (req, res, next) => {
    antecedentesAcademicosController.update(req, res);
});

// Ruta para eliminar un antecedente académico
router.delete('/remove', (req, res, next) => {
    antecedentesAcademicosController.remove(req, res);
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;