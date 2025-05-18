// Importa el módulo express para crear el router
const express = require('express');
// Crea una nueva instancia de router de Express
const router = express.Router();
// Importa el controlador de usuarios
const usuarioController = require('../controllers/usuarioController');

// Rutas para la API de usuarios

// Ruta para obtener todos los usuarios
router.get('/', (req, res, next) => {
   usuarioController.getAll(req, res);
});

// Ruta para crear un nuevo usuario
router.post('/create', (req, res, next) => {
    usuarioController.create(req, res);
});

// Ruta para actualizar un usuario existente
router.put('/update', (req, res, next) => {
    usuarioController.update(req, res);
});

// Ruta para eliminar un usuario
router.delete('/remove', (req, res, next) => {
    usuarioController.remove(req, res);
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;