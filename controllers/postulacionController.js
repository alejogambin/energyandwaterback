const Postulacion = require('../models/postulacion');

const getAll = async (req, res) => {
    try {
       const result = await Postulacion.getAll();
       console.log('resultado de la consulta:', result);
       res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de Postulacion:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

module.exports = {
    getAll
}