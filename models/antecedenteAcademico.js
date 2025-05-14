const db = require('../utils/db');

const AntecedenteAcademico = {
    getAll: async () => {
        try {
            const [rows] = await db.query("select * from AntecedenteAcademico");
            console.log("AntecedenteAcademico obtenidos: ", rows);
            if(rows.length === 0){
                return {message : "No se encontraron AntecedenteAcademico"}
            }
            return rows;
        } catch (e) {
            console.error("Error al obtener los AntecedenteAcademico: ", e);
            throw e;
        }
    }
};
module.exports = AntecedenteAcademico;