const db = require('../config/db');

const Postulacion = {
    getAll: async() => {
        try {
        const [rows] = await db.query('SELECT * FROM postulacion');
        console.log('usuarios obtenidos:', rows);
        if (!rows || rows.length === 0) {
           return { message : 'No se encontraron postulaciones' };
        }
        return rows;
    } catch (err) {
        console.error('Error al obtener los postulaciones:', err);
        throw err;
    }
}

};

module.exports = Postulacion;