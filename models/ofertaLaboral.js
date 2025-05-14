const db = require('../utils/db');

const OfertaLaboral = {
    getAll: async () => {
        try {
            const [rows] = await db.query("select * from ofertaLaboral");
            console.log("ofertaLaboral obtenidos: ", rows);
            if(rows.length === 0){
                return {message : "No se encontraron ofertaLaboral"}
            }
            return rows;
        } catch (e) {
            console.error("Error al obtener los ofertaLaboral: ", e);
            throw e;
        }
    }
};
module.exports = OfertaLaboral;