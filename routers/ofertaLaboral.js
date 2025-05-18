const express = require('express');
const router = express.Router();
const ofertaLaboralController = require('../controllers/ofertaLaboralController');


// rutas para la API de usuarios

router.get('/', (req, res, next) => {
   ofertaLaboralController.getAll(req, res);
 });

router.post('/create', (req, res, next) => {
    ofertaLaboralController.create(req, res);
 });

  router.put('/update', (req, res, next) => {
    ofertaLaboralController.update(req, res);
 });

 router.delete('/remove', (req, res, next) => {
    ofertaLaboralController.remove(req, res);
 });

 router.put('/cambiarEstado', (req, res, next) => {
    ofertaLaboralController.modificarestadoOfertaReclutador(req, res);
 });

module.exports = router;