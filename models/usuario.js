const db = require('../utils/db');

const Usuarios = {
    getAll: async () => {
        try {
            const [rows] = await db.query("select * from usuario");
            console.log("Usuarios obtenidoss: ", rows);
            if(rows.length === 0){
                return {message : "No se encontraron usuarios"}
            }
            return rows;
        } catch (e) {
            console.error("Error al obtener los usuarios: ", e);
            throw e;
        }
    }
};
module.exports = Usuarios;