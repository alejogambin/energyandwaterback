// Importa la configuración de la base de datos (pool de conexiones)
const db = require('../config/db');

// Objeto que contiene los métodos para interactuar con la tabla antecedentelaboral
const AntecentesLaboral = {
    // Método para obtener todos los antecedentes laborales
    getAll: async() => {
        try {
            // Realiza la consulta para obtener todos los registros de la tabla
            const [rows] = await db.query('SELECT * FROM antecedentelaboral');
            console.log('antecedente laboral obtenido:', rows);
            // Si no hay registros, retorna un mensaje informativo
            if (!rows || rows.length === 0) {
                return { message : 'No se encontraron antecedentes laborales' };
            }
            // Retorna los registros encontrados
            return rows;
        } catch (err) {
            // Manejo de errores en la consulta
            console.error('Error al obtener los antecedentes laborales:', err);
            throw err;
        }
    },

    // Método para crear un nuevo antecedente laboral
    create : async(antecedentelaboral) => {
        try {
            // Inserta un nuevo registro en la tabla con los datos recibidos
            const [rows] = await db.query(
                'INSERT INTO antecedentelaboral (candidato_id, empresa, cargo, funciones, fecha_inicio, fecha_termino) VALUES (?, ?, ?, ?, ?, ?)', 
                [antecedentelaboral.candidato_id, antecedentelaboral.empresa, antecedentelaboral.cargo, antecedentelaboral.funciones, antecedentelaboral.fecha_inicio, antecedentelaboral.fecha_termino]
            );
            console.log('antecedente laboral creado:');
            // Si la inserción fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'antecedente laboral creado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la inserción
            console.error('Error al crear el antecedente laboral:', err);
            throw err;
        }
    },

    // Método para actualizar un antecedente laboral existente
    update : async(antecedentelaboral) => {
        try {
            // Actualiza los campos empresa, cargo y funciones según el candidato_id
            const [rows] = await db.query(
                'UPDATE antecedentelaboral SET empresa = ?, cargo = ?, funciones = ? WHERE candidato_id = ?', 
                [antecedentelaboral.empresa, antecedentelaboral.nuevo_cargo, antecedentelaboral.nueva_funciones, antecedentelaboral.candidato_id]
            );
            console.log('antecedente laboral actualizado:');
            // Si la actualización fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'antecedente laboral actualizado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la actualización
            console.error('Error al actualizar el antecedente laboral:', err);
            throw err;
        }
    },

    // Método para eliminar un antecedente laboral
    remove : async(antecedentelaboral) => {
        try {
            // Elimina el registro según el candidato_id recibido
            const [rows] = await db.query(
                'DELETE FROM antecedentelaboral WHERE candidato_id = ?', 
                [antecedentelaboral.candidato_id]
            );
            console.log('antecedente laboral eliminado:');
            // Si la eliminación fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'antecedente laboral eliminado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la eliminación
            console.error('Error al eliminar el antecedente laboral:', err);
            throw err;
        }
    }
};

// Exporta el objeto para ser utilizado en los controladores
module.exports = AntecentesLaboral;