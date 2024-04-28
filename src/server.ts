import express, { Express } from "express";
import { tokenRouter } from './routes';
import db from './db';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

async function init() {
  await db.sync();

  app.use(express.json());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/tokens', tokenRouter);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

init().catch((err) => {
  console.log("An error occurred during app initialization:");
  console.log(err);
});