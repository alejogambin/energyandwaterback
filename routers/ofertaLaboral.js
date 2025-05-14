const express = require('express');
const router = express.Router();
const ofertaLaboralController = require('../controllers/ofertaLaboralController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   ofertaLaboralController.getAll(req, res);
 
 }
);

module.exports = router;