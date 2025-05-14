const db = require('../config/db');

const AntecedentesAcademicos = {
    getAll: async() => {
        try {
        const [rows] = await db.query('SELECT * FROM antecedenteacademico');
        console.log('antecedenteacademico obtenidos:', rows);
        if (!rows || rows.length === 0) {
           return { message : 'No se encontraron antecedentes academicos' };
        }
        return rows;
    } catch (err) {
        console.error('Error al obtener los antecedentes academicos:', err);
        throw err;
    }
}

};

module.exports = AntecedentesAcademicos;