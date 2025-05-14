const OfertaLaboral = require('../models/ofertaLaboral');

const getAll = async (req, res) => {
    try {
        const result = await OfertaLaboral.getAll();
        console.log("ofertaLaboral obtenidas: ", result);
        res.status(200).json(result);
    } catch (e) {
        console.error("error al obtener las ofertaLaboral: ", e);
        res.status(500), json({ error: "Errror al obtener las ofertaLaboral" });
    }
};

module.exports = { getAll };