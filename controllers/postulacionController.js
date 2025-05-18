// Importa el modelo de Postulacion para interactuar con la base de datos
const Postulacion = require('../models/postulacion');

// Controlador para obtener todas las postulaciones
const getAll = async (req, res) => {
    try {
       // Llama al método del modelo para obtener todos los registros de postulaciones
       const result = await Postulacion.getAll();
       console.log('resultado de la consulta:', result);
       // Devuelve los resultados en formato JSON con estado 200 (OK)
       res.status(200).json(result);
    } catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de Postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para crear una nueva postulación
const create = async (req, res) => {
    try{
        // Obtiene los datos enviados en el cuerpo de la solicitud
        const postulacion = req.body;
        // Llama al método del modelo para crear el registro
        const result = await Postulacion.create(postulacion);
        // Devuelve el resultado con estado 201 (Creado)
        res.status(201).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para actualizar una postulación existente
const update = async (req, res) => {
    try{
        // Obtiene los datos actualizados del cuerpo de la solicitud
        const postulacion = req.body;
        // Llama al método del modelo para actualizar el registro
        const result = await Postulacion.update(postulacion);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para eliminar una postulación
const remove = async (req, res) => {
    try{
        // Obtiene los datos necesarios para eliminar el registro del cuerpo de la solicitud
        const postulacion = req.body;
        // Llama al método del modelo para eliminar el registro
        const result = await Postulacion.remove(postulacion);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Exporta los controladores para ser utilizados en las rutas
module.exports = {
    getAll, create, update, remove
}