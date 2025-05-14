const db = require('../config/db');

const Usuarios = {
    getAll: async() => {
        try {
        const [rows] = await db.query('SELECT * FROM usuario');
        console.log('usuarios obtenidos:', rows);
        if (!rows || rows.length === 0) {
           return { message : 'No se encontraron usuarios' };
        }
        return rows;
    } catch (err) {
        console.error('Error al obtener los usuarios:', err);
        throw err;
    }
}

};

module.exports = Usuarios;