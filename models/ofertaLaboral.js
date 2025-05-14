const db = require('../config/db');

const OfertaLaboral = {
    getAll: async() => {
        try {
        const [rows] = await db.query('SELECT * FROM ofertalaboral');
        console.log('usuarios obtenidos:', rows);
        if (!rows || rows.length === 0) {
           return { message : 'No se encontraron ofertas laborales' };
        }
        return rows;
    } catch (err) {
        console.error('Error al obtener los oferta laboral:', err);
        throw err;
    }
}

};

module.exports = OfertaLaboral;