const AntecedenteLaboral = require('../models/antecedentesLaboral');

const getAll = async (req, res) => {
    try {
        const result = await AntecedenteLaboral.getAll();
        console.log(" obtenidos: ", result);
        res.status(200).json(result);
    } catch (e) {
        console.error("error al obtener los antecedentes: ", e);
        res.status(500), json({ error: "Errror al obtener los antecedentes" });
    }
};

module.exports = { getAll };