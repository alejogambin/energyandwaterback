const OfertaLaboral = require('../models/ofertaLaboral');

const getAll = async (req, res) => {
    try {
       const result = await OfertaLaboral.getAll();
       console.log('resultado de la consulta:', result);
       res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de Ofertas Laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

module.exports = {
    getAll
}