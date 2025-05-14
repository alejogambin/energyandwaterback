const express = require('express');
const router = express.Router();
const ancetecentesLaboralController = require('../controllers/ancetecentesLaboralController');

// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   ancetecentesLaboralController.getAll(req, res);
 
 }
);

module.exports = router;