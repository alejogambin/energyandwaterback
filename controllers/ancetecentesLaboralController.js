const AntecentesLaboral = require('../models/antecedentesLaboral');

const getAll = async (req, res) => {
    try {
       const result = await AntecentesLaboral.getAll();
       console.log('resultado de la consulta:', result);
       res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de antecedentes laborales:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

module.exports = {
    getAll
}