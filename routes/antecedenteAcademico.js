const express = require('express');
const router = express.Router();
const antecedenteAcademicoController = require('../controllers/antecedenteAcademicoController');

//Rutas para la API de usuarios 
router.get('/', async(req,res,next)=>{
    antecedenteAcademicoController.getAll(req,res);
});

module.exports = router;