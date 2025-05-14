const db = require('../config/db');

const AntecentesLaboral = {
    getAll: async() => {
        try {
        const [rows] = await db.query('SELECT * FROM antecedentelaboral');
        console.log('antecedentelaboral obtenidos:', rows);
        if (!rows || rows.length === 0) {
           return { message : 'No se encontraron antecedentelaboral' };
        }
        return rows;
    } catch (err) {
        console.error('Error al obtener los antecedentelaboral:', err);
        throw err;
    }
}

};

module.exports = AntecentesLaboral;