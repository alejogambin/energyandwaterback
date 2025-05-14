const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   postulacionController.getAll(req, res);
 
 }
);

module.exports = router;