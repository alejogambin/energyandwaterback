const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');

//Rutas para la API de usuarios 
router.get('/', async(req,res,next)=>{
    postulacionController.getAll(req,res);
});

module.exports = router;