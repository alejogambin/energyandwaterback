// Importa el módulo express para crear el router
const express = require('express');
// Crea una nueva instancia de router de Express
const router = express.Router();
// Importa el controlador de usuarios
const usuarioController = require('../controllers/usuarioController');

// Rutas para la API de usuarios
//localhost:3001/api/usuarios/

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: API para gestionar usuarios
 */

/**
 * @swagger
 * /:
 *  get:
 *   summary: obtener todos los usuarios
 *   tags: [Usuarios]
 *   responses: 
 *    200: 
 *      description: Lista de usuarios obtenida correctamente
 *    500: 
 *      description : Error interno del servidor al obtener los usuarios
 */

// Ruta para obtener todos los usuarios
router.get('/', (req, res, next) => {
   usuarioController.getAll(req, res);
});

// Ruta para crear un nuevo usuario
router.post('/create', (req, res, next) => {
    usuarioController.create(req, res);
});
/**
 * @swagger
 * /create:
 *   post:
 *     summary: crear un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: alejo
 *               email:
 *                 type: string
 *                 example: ag@ipss.cl
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *       500:
 *         description: Error interno del servidor al crear el usuario
 */
// Ruta para actualizar un usuario existente
router.put('/update', (req, res, next) => {
    usuarioController.update(req, res);
});
/**
 * @swagger
 * /update:
 *   put:
 *     summary: crear un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: alejo
 *               email:
 *                 type: string
 *                 example: ag@ipss.cl
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *       500:
 *         description: Error interno del servidor al crear el usuario
 */

// Ruta para eliminar un usuario
router.delete('/remove', (req, res, next) => {
    usuarioController.remove(req, res);
});
/**
 * @swagger
 * /remove:
 *   delete:
 *     summary: crear un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: alejo
 *               email:
 *                 type: string
 *                 example: ag@ipss.cl
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario creado correctamente
 *       500:
 *         description: Error interno del servidor al crear el usuario
 */
// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;