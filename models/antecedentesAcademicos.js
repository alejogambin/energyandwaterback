// Importa la configuración de la base de datos (pool de conexiones)
const db = require('../config/db');

// Objeto que contiene los métodos para interactuar con la tabla antecedenteacademico
const AntecedentesAcademicos = {
    // Método para obtener todos los antecedentes académicos
    getAll: async() => {
        try {
            // Realiza la consulta para obtener todos los registros de la tabla
            const [rows] = await db.query('SELECT * FROM antecedenteacademico');
            console.log('antecedenteacademico obtenidos:', rows);
            // Si no hay registros, retorna un mensaje informativo
            if (!rows || rows.length === 0) {
                return { message : 'No se encontraron antecedentes academicos' };
            }
            // Retorna los registros encontrados
            return rows;
        } catch (err) {
            // Manejo de errores en la consulta
            console.error('Error al obtener los antecedentes academicos:', err);
            throw err;
        }
    },

    // Método para crear un nuevo antecedente académico
    create : async(antecedenteacademico) => {
        try {
            // Inserta un nuevo registro en la tabla con los datos recibidos
            const [rows] = await db.query(
                'INSERT INTO antecedenteacademico (candidato_id, institucion, titulo_obtenido, anio_ingreso, anio_egreso) VALUES (?, ?, ?, ?, ?)', 
                [antecedenteacademico.candidato_id, antecedenteacademico.institucion, antecedenteacademico.titulo_obtenido, antecedenteacademico.anio_ingreso, antecedenteacademico.anio_egreso]
            );
            console.log('Antecedente academico creado:');
            // Si la inserción fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'Antecedente academico creado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la inserción
            console.error('Error al crear el Antecedente academico:', err);
            throw err;
        }
    },

    // Método para actualizar un antecedente académico existente
    update : async(antecedenteacademico) => {
        try {
            // Actualiza los campos institucion y titulo_obtenido según el candidato_id
            const [rows] = await db.query(
                'UPDATE antecedenteacademico SET institucion = ?, titulo_obtenido = ? WHERE candidato_id = ?', 
                [antecedenteacademico.institucion, antecedenteacademico.nuevo_titulo_obtenido, antecedenteacademico.candidato_id]
            );
            console.log('Antecedente academico actualizado:');
            // Si la actualización fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'Antecedente academico actualizado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la actualización
            console.error('Error al actualizar el Antecedente academico:', err);
            throw err;
        }
    },

    // Método para eliminar un antecedente académico
    remove : async(antecedenteacademico) => {
        try {
            // Elimina el registro según el candidato_id recibido
            const [rows] = await db.query(
                'DELETE FROM antecedenteacademico WHERE candidato_id = ?', 
                [antecedenteacademico.candidato_id]
            );
            console.log('Antecedente academico eliminado:');
            // Si la eliminación fue exitosa, retorna un mensaje de éxito
            if (rows.affectedRows > 0) {
                return { message: 'Antecedente academico eliminado exitosamente' };
            }
            // Retorna el resultado de la consulta
            return rows;  
        } catch (err) {
            // Manejo de errores en la eliminación
            console.error('Error al eliminar el Antecedente academico:', err);
            throw err;
        }
    }
};

// Exporta el objeto para ser utilizado en los controladores
module.exports = AntecedentesAcademicos;