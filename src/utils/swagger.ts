import swagger from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BCAS API',
      version: '1.0.0',
      description: 'API endpoints documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      },
      {
        url: 'https://capable-korry-maxbcastest.koyeb.app'
      }
    ]
  },
  apis: ['**/*.ts'],
};
const swaggerSpec = swagger(options);

export { swaggerSpec };