const express = require('express');
const router = express.Router();
const OfertaLaboralController = require('../controllers/ofertaLaboralController');

//Rutas para la API de usuarios 
router.get('/', async(req,res,next)=>{
    OfertaLaboralController.getAll(req,res);
});

module.exports = router;