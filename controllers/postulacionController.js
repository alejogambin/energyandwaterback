const Postulaciones = require('../models/postulacion');

const getAll = async (req, res) => {
    try {
        const result = await Postulaciones.getAll();
        console.log("postulaciones obtenidos: ", result);
        res.status(200).json(result);
    } catch (e) {
        console.error("error al obtener los postulaciones: ", e);
        res.status(500), json({ error: "Errror al obtener los postulaciones" });
    }
};

module.exports = { getAll };