const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Rutas para la API de usuarios 
router.get('/', async(req,res,next)=>{
    try{
        const usuarios = await usuarioController.getAll();
        res.status(200).json(usuarios);
    }catch(e){
        next(e);
    }
});

module.exports = router;