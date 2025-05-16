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
},

create : async(usuario) => {
    try {
        const [rows] = await db.query('INSERT INTO usuario (nombre, apellido, email, contraseña, fecha_nacimiento, telefono, direccion,rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña, usuario.fecha_nacimiento, usuario.telefono, usuario.direccion, usuario.rol]);
        console.log('Usuario creado:');
        if (rows.affectedRows > 0) {
            return { message: 'usuario creado exitosamente' };
        }
        return rows;  
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        throw err;
    }
},

update : async(usuario) => {
    try {
        const [rows] = await db.query('UPDATE usuario SET nombre = ?, apellido = ?, email = ?, contraseña = ?, rol = ? WHERE email = ?', [usuario.nombre, usuario.apellido, usuario.email_nuevo, usuario.contraseña, usuario.rol, usuario.email]);
        console.log('Usuario actualizado:');
        if (rows.affectedRows > 0) {
            return { message: 'usuario actualizado exitosamente' };
        }
        return rows;  
    } catch (err) {
        console.error('Error al actualizar el usuario:', err);
        throw err;
    }

},

remove : async(usuario) => {
    try {
        const [rows] = await db.query('DELETE FROM usuario WHERE email = ?', [usuario.email]);
        console.log('Usuario eliminado:');
        if (rows.affectedRows > 0) {
            return { message: 'usuario eliminado exitosamente' };
        }
        return rows;  
    } catch (err) {
        console.error('Error al eliminar el usuario:', err);
        throw err;
    }

}
};

module.exports = Usuarios;