import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./swagger";
import { router } from "./routes";
import { AppDataSource, checkUserTable } from "./data-source";

const app: express.Application = express();
const port: number = 8080;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
  console.log(`Docs available at http://localhost:${port}/docs`);
  AppDataSource.initialize()
    .then(async () => {
      await checkUserTable();
      console.log("Data Source has been initialized");
    })
    .catch((err) => console.error("Error in Data Source initialization", err));
});
