// Importa la configuración de la base de datos (pool de conexiones)
const db = require('../config/db');

// Objeto que contiene los métodos para interactuar con la tabla postulacion
const Postulacion = {
    // Método para obtener todas las postulaciones
    getAll: async() => {
        try {
            // Realiza la consulta para obtener todos los registros de la tabla postulacion
            const [rows] = await db.query('SELECT * FROM postulacion');
            console.log('postulaciones obtenidas:', rows);
            // Si no hay registros, retorna un mensaje informativo
            if (!rows || rows.length === 0) {
                return { message : 'No se encontraron postulaciones' };
            }
            // Retorna los registros encontrados
            return rows;
        } catch (err) {
            // Manejo de errores en la consulta
            console.error('Error al obtener los postulaciones:', err);
            throw err;
        }
    },

    // Método para crear una nueva postulación
    create : async(postulacion) => {
        try {
            // Inserta un nuevo registro en la tabla postulacion con los datos recibidos
            const [rows] = await db.query(
                'INSERT INTO postulacion (candidato_id, oferta_laboral_id, estado_postulacion, fecha_postulacion, fecha_actualizacion) VALUES (?, ?, ?, ?, ?)', 
                [postulacion.candidato_id, postulacion.oferta_laboral_id, postulacion.estado_postulacion, postulacion.fecha_postulacion, postulacion.fecha_actualizacion]
            );
            console.log('postulacion creada:');
            // Si la inserción fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'postulacion creada exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la inserción
            console.error('Error al crear la postulacion:', err);
            throw err;
        }
    },

    // Método para actualizar una postulación existente
    update : async(postulacion) => {
        try {
            // Actualiza los campos candidato_id, oferta_laboral_id, estado_postulacion y fecha_actualizada según el candidato_id y oferta_laboral_id
            const [rows] = await db.query(
                'UPDATE postulacion SET candidato_id = ?, oferta_laboral_id = ?, estado_postulacion = ?, fecha_actualizada = ? WHERE candidato_id = ? AND oferta_laboral_id = ?', 
                [postulacion.candidato_id, postulacion.oferta_laboral_id, postulacion.nuevo_estado_postulacion, postulacion.nueva_fecha_actualizada, postulacion.candidato_id, postulacion.oferta_laboral_id]
            );
            console.log('postulacion actualizada:');
            // Si la actualización fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'postulacion actualizada exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la actualización
            console.error('Error al actualizar la postulacion:', err);
            throw err;
        }
    },

    // Método para eliminar una postulación
    remove : async(postulacion) => {
        try {
            // Elimina el registro según el candidato_id y oferta_laboral_id recibidos
            const [rows] = await db.query(
                'DELETE FROM postulacion WHERE candidato_id = ? AND oferta_laboral_id = ?', 
                [postulacion.candidato_id, postulacion.oferta_laboral_id]
            );
            console.log('postulacion eliminada:');
            // Si la eliminación fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'postulacion eliminada exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la eliminación
            console.error('Error al eliminar la postulacion:', err);
            throw err;
        }
    }
};

// Exporta el objeto para ser utilizado en los controladores
module.exports = Postulacion;