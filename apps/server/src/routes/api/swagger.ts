import express from 'express';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

export const router = express.Router();

const swaggerDoc = swaggerJsdoc({
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample Node',
      version: '1.0.0',
    },
  },
  apis: [],
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
