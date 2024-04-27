import express, { Express } from "express";
import { tokenRouter } from './routes';

const app: Express = express();
const port = process.env.PORT || 3000;

async function init() {
  app.use(express.json());
  app.use('/token', tokenRouter);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

init().catch((err) => {
  console.log("An error occurred during app initialization:");
  console.log(err);
})
