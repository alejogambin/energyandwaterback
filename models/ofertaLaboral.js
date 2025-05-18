// Importa la configuración de la base de datos (pool de conexiones)
const db = require('../config/db');

const OfertaLaboral = {
    // Método para obtener todas las ofertas laborales
    getAll: async () => {
        try {
            // Realiza la consulta para obtener todos los registros de la tabla ofertalaboral
            const [rows] = await db.query('SELECT * FROM ofertalaboral');
            console.log('oferta laboral obtenida:', rows);
            // Si no hay registros, retorna un mensaje informativo
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron ofertas laborales' };
            }
            // Retorna los registros encontrados
            return rows;
        } catch (err) {
            // Manejo de errores en la consulta
            console.error('Error al obtener los oferta laboral:', err);
            throw err;
        }
    },

    // Método para crear una nueva oferta laboral
    create: async (ofertalaboral) => {
        try {
            // Inserta un nuevo registro en la tabla ofertalaboral con los datos recibidos
            const [rows] = await db.query(
                'INSERT INTO ofertalaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                [ofertalaboral.titulo, ofertalaboral.descripcion, ofertalaboral.ubicacion, ofertalaboral.salario, ofertalaboral.tipo_contrato, ofertalaboral.fecha_publicacion, ofertalaboral.fecha_cierre, ofertalaboral.estado, ofertalaboral.reclutador_id]
            );
            console.log('oferta laboral creada:');
            // Si la inserción fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral creada exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;
        } catch (err) {
            // Manejo de errores en la inserción
            console.error('Error al crear la oferta laboral:', err);
            throw err;
        }
    },

    // Método para actualizar una oferta laboral existente
    update: async (ofertalaboral) => {
        try {
            // Actualiza los campos titulo, salario y fecha_publicacion según el reclutador_id
            const [rows] = await db.query(
                'UPDATE ofertalaboral SET titulo = ?, salario = ?, fecha_publicacion = ? WHERE reclutador_id = ?', 
                [ofertalaboral.titulo, ofertalaboral.salario, ofertalaboral.fecha_publicacion, ofertalaboral.reclutador_id]
            );
            console.log('oferta laboral actualizada:');
            // Si la actualización fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral actualizada exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;
        } catch (err) {
            // Manejo de errores en la actualización
            console.error('Error al actualizar la oferta laboral:', err);
            throw err;
        }
    },

    // Método para eliminar una oferta laboral
    remove: async (ofertalaboral) => {
        try {
            // Elimina el registro según el título y el reclutador_id recibidos
            const [rows] = await db.query(
                'DELETE FROM ofertalaboral WHERE titulo = ? AND reclutador_id = ?', 
                [ofertalaboral.titulo, ofertalaboral.reclutador_id]
            );
            console.log('oferta laboral eliminada:');
            // Si la eliminación fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral eliminada exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;
        } catch (err) {
            // Manejo de errores en la eliminación
            console.error('Error al eliminar la oferta laboral:', err);
            throw err;
        }
    },

    // Método para modificar el estado de una oferta laboral por parte del reclutador
    modificarestadoOfertaReclutador: async (jsonbody) => {
        try {
            // Consulta el usuario con el email y contraseña proporcionados
            const [rows] = await db.query(
                'select * from usuario where email = ? and contraseña = ?',
                [jsonbody.email, jsonbody.contraseña]
            );
            console.log('usuario ingresado', rows[0].estado);
            console.log('rol', rows[0].rol);
            // Verifica si el usuario existe y si es el reclutador correspondiente
            if(rows.length >= 0){
                if(rows[0].id == jsonbody.reclutador_id){
                    // Actualiza el estado de la oferta laboral para el reclutador
                    const [update] = await db.query(
                        'update ofertalaboral set estado=? where reclutador_id =?',
                        [jsonbody.estado, jsonbody.reclutador_id]
                    );
                    // Si la actualización fue exitosa, retorna un mensaje de éxito
                    if(update.affectedRows > 0){
                        return {message: `oferta Laboral, estado: ${jsonbody.estado}, actualizado exitosamente`};
                    }
                    // Retorna el resultado de la actualización
                    return update;
                };
            }
            // Si no se cumplen las condiciones, retorna los datos del usuario consultado
            return rows;
        } catch (err) {
            // Manejo de errores en la actualización de estado
            console.error('Error al eliminar la oferta laboral:', err);
            throw err;
        }
    }
};

// Exporta el objeto para ser utilizado en los controladores
module.exports = OfertaLaboral;