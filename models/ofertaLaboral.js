const db = require('../config/db');

const OfertaLaboral = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM ofertalaboral');
            console.log('oferta laboral obtenida:', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron ofertas laborales' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los oferta laboral:', err);
            throw err;
        }
    },

    create: async (ofertalaboral) => {
        try {
            const [rows] = await db.query('INSERT INTO ofertalaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [ofertalaboral.titulo, ofertalaboral.descripcion, ofertalaboral.ubicacion, ofertalaboral.salario, ofertalaboral.tipo_contrato, ofertalaboral.fecha_publicacion, ofertalaboral.fecha_cierre, ofertalaboral.estado, ofertalaboral.reclutador_id]);
            console.log('oferta laboral creada:');
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral creada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al crear la oferta laboral:', err);
            throw err;
        }
    },

    update: async (ofertalaboral) => {
        try {
            const [rows] = await db.query('UPDATE ofertalaboral SET titulo = ?, salario = ?, fecha_publicacion = ? WHERE reclutador_id = ?', [ofertalaboral.titulo, ofertalaboral.salario, ofertalaboral.fecha_publicacion, ofertalaboral.reclutador_id]);
            console.log('oferta laboral actualizada:');
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral actualizada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al actualizar la oferta laboral:', err);
            throw err;
        }

    },

    remove: async (ofertalaboral) => {
        try {
            const [rows] = await db.query('DELETE FROM ofertalaboral WHERE titulo = ? AND reclutador_id = ?', [ofertalaboral.titulo, ofertalaboral.reclutador_id]);
            console.log('oferta laboral eliminada:');
            if (rows.affectedRows > 0) {
                return { message: 'oferta laboral eliminada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar la oferta laboral:', err);
            throw err;
        }

    },
    modificarestadoOfertaReclutador: async (jsonbody) => {
        try {
            const [rows] = await db.query('select *from usuario where email = ? and contraseña = ?',
                [jsonbody.email, jsonbody.contraseña]
            );
            console.log('usuario ingresado', rows[0].estado);
            console.log('rol', rows[0].rol);
            if(rows.length > 0){
                
                if(rows[0].rol == "Reclutador" && rows[0].estado =="Activo"){
                    const [update] = await db.query('update ofertalaboral set estado=? where reclutador_id =?',
                        [jsonbody.estado, jsonbody.reclutador_id]
                    );
                    if(update.affectedRows > 0){
                        return {message: `oferta Laboral ${jsonbody.estado} actualizado exitosamente`};
                    }
                    return update;
                };
            }
            return rows;
        } catch (err) {
            console.error('Error al eliminar la oferta laboral:', err);
            throw err;
        }
    }

};

module.exports = OfertaLaboral;