const AntecentesLaboral = require('../models/antecedentesLaboral');
//Controlador para obtener todos los antecedentes laborales
const getAll = async (req, res) => {
    try {
        // Llama al método del modelo para obtener todos los registros
       const result = await AntecentesLaboral.getAll();
       console.log('resultado de la consulta:', result);
       // Devuelve los resultados en formato JSON con estado 200 (OK)
       res.status(200).json(result);
    } catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};
// Controlador para crear un nuevo antecedente laboral
const create = async (req, res) => {
    try{
        // Obtiene los datos enviados en el cuerpo de la solicitud
        const antecedentelaboral = req.body;
        // Llama al método del modelo para crear el registro
        const result = await AntecentesLaboral.create(antecedentelaboral);
        res.status(201).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};
// actualizar un antecedente laboral
const update = async (req, res) => {
    try{
        // Obtiene los datos actualizados del cuerpo de la solicitud
        const antecedentelaboral = req.body;
        // Llama al método del modelo para actualizar el registro
        const result = await AntecentesLaboral.update(antecedentelaboral);
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};
// Controlador para eliminar un antecedente laboral
const remove = async (req, res) => {
    try{
        // Obtiene los datos necesarios para eliminar el registro del cuerpo de la solicitud
        const antecedentelaboral = req.body;
        // Llama al método del modelo para eliminar el registro
        const result = await AntecentesLaboral.remove(antecedentelaboral);
        res.status(200).json(result);
    }
    catch (err) {
        // Manejo de errores y respuesta con estado 500 (Error interno)
        console.error('Error en el controlador de usuarios:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};
// Exporta los controladores para ser utilizados en las rutas
module.exports = {
    getAll,update,create,remove
}