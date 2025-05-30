const swaggerJSDoc = require('swagger-jsdoc');

const  swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title:'API de Capsulas',
        version: '1.0.0',
        descripcion: 'Documentacion de la API para la tienda de capsulas',

    },
    server:[
        {
            url:'http://localhost:3001',
            descripcion: 'Servidor local',
        },
    ],
};
const options={
    swaggerDefinition,apis:['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;