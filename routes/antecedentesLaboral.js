const express = require('express');
const router = express.Router();
const antecedentesLaboralController = require('../controllers/antecedentesLaboralController');

//Rutas para la API de usuarios 
router.get('/', async(req,res,next)=>{
    antecedentesLaboralController.getAll(req,res);
});

module.exports = router;