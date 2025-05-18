// Importa la configuración de la base de datos (pool de conexiones)
const db = require('../config/db');

// Objeto que contiene los métodos para interactuar con la tabla usuario
const Usuarios = {
    // Método para obtener todos los usuarios
    getAll: async() => {
        try {
            // Realiza la consulta para obtener todos los registros de la tabla usuario
            const [rows] = await db.query('SELECT * FROM usuario');
            console.log('usuarios obtenidos:', rows);
            // Si no hay registros, retorna un mensaje informativo
            if (!rows || rows.length === 0) {
                return { message : 'No se encontraron usuarios' };
            }
            // Retorna los registros encontrados
            return rows;
        } catch (err) {
            // Manejo de errores en la consulta
            console.error('Error al obtener los usuarios:', err);
            throw err;
        }
    },

    // Método para crear un nuevo usuario
    create : async(usuario) => {
        try {
            // Inserta un nuevo registro en la tabla usuario con los datos recibidos
            const [rows] = await db.query(
                'INSERT INTO usuario (nombre, apellido, email, contraseña, fecha_nacimiento, telefono, direccion,rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
                [usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña, usuario.fecha_nacimiento, usuario.telefono, usuario.direccion, usuario.rol]
            );
            console.log('Usuario creado:');
            // Si la inserción fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'usuario creado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la inserción
            console.error('Error al crear el usuario:', err);
            throw err;
        }
    },

    // Método para actualizar un usuario existente
    update : async(usuario) => {
        try {
            // Actualiza los campos nombre, apellido, email, contraseña y rol según el email actual
            const [rows] = await db.query(
                'UPDATE usuario SET nombre = ?, apellido = ?, email = ?, contraseña = ?, rol = ? WHERE email = ?', 
                [usuario.nombre, usuario.apellido, usuario.email_nuevo, usuario.contraseña, usuario.rol, usuario.email]
            );
            console.log('Usuario actualizado:');
            // Si la actualización fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'usuario actualizado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la actualización
            console.error('Error al actualizar el usuario:', err);
            throw err;
        }
    },

    // Método para eliminar un usuario
    remove : async(usuario) => {
        try {
            // Elimina el registro según el email recibido
            const [rows] = await db.query(
                'DELETE FROM usuario WHERE email = ?', 
                [usuario.email]
            );
            console.log('Usuario eliminado:');
            // Si la eliminación fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'usuario eliminado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la eliminación
            console.error('Error al eliminar el usuario:', err);
            throw err;
        }
    }
};

// Exporta el objeto para ser utilizado en los controladores
module.exports = Usuarios;