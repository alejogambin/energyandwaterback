// Importa el modelo de Usuarios para interactuar con la base de datos
const Usuarios = require('../models/usuario');

// Controlador para obtener todos los usuarios
const getAll = async (req, res) => {
    try {
       // Llama al método del modelo para obtener todos los registros de usuarios
       const result = await Usuarios.getAll();
       console.log('resultado de la consulta:', result);
       // Devuelve los resultados en formato JSON con estado 200 (OK)
       res.status(200).json(result);
    } catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para crear un nuevo usuario
const create = async (req, res) => {
    try{
        // Obtiene los datos enviados en el cuerpo de la solicitud
        const usuario = req.body;
        // Llama al método del modelo para crear el registro
        const result = await Usuarios.create(usuario);
        // Devuelve el resultado con estado 201 (Creado)
        res.status(201).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para actualizar un usuario existente
const update = async (req, res) => {
    try{
        // Obtiene los datos actualizados del cuerpo de la solicitud
        const usuario = req.body;
        // Llama al método del modelo para actualizar el registro
        const result = await Usuarios.update(usuario);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para eliminar un usuario
const remove = async (req, res) => {
    try{
        // Obtiene los datos necesarios para eliminar el registro del cuerpo de la solicitud
        const usuario = req.body;
        // Llama al método del modelo para eliminar el registro
        const result = await Usuarios.remove(usuario);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Exporta los controladores para ser utilizados en las rutas
module.exports = {
    getAll, create, update, remove
}