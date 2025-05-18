// Importa el modelo de OfertaLaboral para interactuar con la base de datos
const OfertaLaboral = require('../models/ofertaLaboral');

// Controlador para obtener todas las ofertas laborales
const getAll = async (req, res) => {
    try {
       // Llama al método del modelo para obtener todos los registros
       const result = await OfertaLaboral.getAll();
       console.log('resultado de la consulta:', result);
       // Devuelve los resultados en formato JSON con estado 200 (OK)
       res.status(200).json(result);
    } catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de Ofertas Laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para crear una nueva oferta laboral
const create = async (req, res) => {
    try{
        // Obtiene los datos enviados en el cuerpo de la solicitud
        const ofertalaboral = req.body;
        // Llama al método del modelo para crear el registro
        const result = await OfertaLaboral.create(ofertalaboral);
        // Devuelve el resultado con estado 201 (Creado)
        res.status(201).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de ofertas laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para actualizar una oferta laboral existente
const update = async (req, res) => {
    try{
        // Obtiene los datos actualizados del cuerpo de la solicitud
        const ofertalaboral = req.body;
        // Llama al método del modelo para actualizar el registro
        const result = await OfertaLaboral.update(ofertalaboral);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de ofertas laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para eliminar una oferta laboral
const remove = async (req, res) => {
    try{
        // Obtiene los datos necesarios para eliminar el registro del cuerpo de la solicitud
        const ofertalaboral = req.body;
        // Llama al método del modelo para eliminar el registro
        const result = await OfertaLaboral.remove(ofertalaboral);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error en el controlador de ofertas laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

// Controlador para modificar el estado de una oferta laboral por parte del reclutador
const modificarestadoOfertaReclutador = async (req,res) =>{
    try{
        // Obtiene los datos necesarios para modificar el estado del cuerpo de la solicitud
        const ofertalaboral = req.body;
        // Llama al método del modelo para modificar el estado de la oferta
        const result = await OfertaLaboral.modificarestadoOfertaReclutador(ofertalaboral);
        // Devuelve el resultado con estado 200 (OK)
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500
        console.error('Error al cambiar el estado de oferta: ', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
}

// Exporta los controladores para ser utilizados en las rutas
module.exports = {
    getAll, update, create, remove, modificarestadoOfertaReclutador
}