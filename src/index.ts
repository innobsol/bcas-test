import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

async function init() {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

init().catch((err) => {
  console.log("An error occurred during app initialization:");
  console.log(err);
})
