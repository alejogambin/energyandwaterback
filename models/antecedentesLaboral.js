const db = require('../utils/db');

const AntecedenteLaboral = {
    getAll: async () => {
        try {
            const [rows] = await db.query("select * from AntecedenteLaboral");
            console.log("AntecedenteLaboral obtenidos: ", rows);
            if(rows.length === 0){
                return {message : "No se encontraron AntecedenteLaboral"}
            }
            return rows;
        } catch (e) {
            console.error("Error al obtener los AntecedenteLaboral: ", e);
            throw e;
        }
    }
};
module.exports = AntecedenteLaboral;