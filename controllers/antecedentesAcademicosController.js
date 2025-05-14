const AntecedentesAcademicos = require('../models/antecedentesAcademicos');

const getAll = async (req, res) => {
    try {
       const result = await AntecedentesAcademicos.getAll();
       console.log('resultado de la consulta AAC:', result);
       res.status(200).json(result);
    } catch (err) {
        console.error('Error en el controlador de antecedentes Academicos:', err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};

module.exports = {
    getAll
}