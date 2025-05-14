const db = require('../utils/db');

const Postulaciones = {
    getAll: async () => {
        try {
            const [rows] = await db.query("select * from postulacion");
            console.log("Postulacion obtenidos: ", rows);
            if(rows.length === 0){
                return {message : "No se encontraron postulaciones"}
            }
            return rows;
        } catch (e) {
            console.error("Error al obtener los Postulaciones: ", e);
            throw e;
        }
    }
};
module.exports = Postulaciones;