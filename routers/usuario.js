const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   usuarioController.getAll(req, res);
 
 }
);

module.exports = router;