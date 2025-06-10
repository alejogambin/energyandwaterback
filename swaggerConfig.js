const swaggerJSDoc = require('swagger-jsdoc');

const  swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title:'API de usuarios',
        version: '1.0.0',
        descripcion: 'Documentacion de la API para la tienda de capsulas',

    },
    servers:[
        {
            url:'http://localhost:3001/api/usuarios',
            descripcion: 'Servidor de desarrollo',
        },
    ],
};
const options={
    swaggerDefinition,
    apis:['./routers/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;