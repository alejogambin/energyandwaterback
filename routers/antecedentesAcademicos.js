const express = require('express');
const router = express.Router();
const antecedentesAcademicosController = require('../controllers/antecedentesAcademicosController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   antecedentesAcademicosController.getAll(req, res);
 
 }
);

module.exports = router;