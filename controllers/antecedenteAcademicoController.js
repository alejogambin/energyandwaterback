const antecedenteAcademico = require('../models/antecedenteAcademico');

const getAll = async (req, res) => {
    try {
        const result = await antecedenteAcademico.getAll();
        console.log("antecedenteAcademico obtenidos: ", result);
        res.status(200).json(result);
    } catch (e) {
        console.error("error al obtener los antecedenteAcademico: ", e);
        res.status(500), json({ error: "Errror al obtener los antecedenteAcademico" });
    }
};

module.exports = { getAll };