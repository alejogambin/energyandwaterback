const Usuarios = require('../models/usuario');

const getAll = async (req, res) => {
    try {
        const result = await Usuarios.getAll();
        console.log("Usuarios obtenidos: ", result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("error al obtener los usuarios: ", e);
        return res.status(500), json({ error: "Errror al obtener los usuarios" });
    }
};

module.exports = { getAll };