import morgan from "morgan";
import { logger, stream } from "./src/utils/logger";
import express from "express";
import { config } from "./src/config";
import cors from "cors";
import { errorMiddleware } from "./src/middlewares/error-middleware";
import routes from "./src/routes/index";
import { SequelizeStorage, Umzug } from "umzug";
import { connectToDB, pgClient } from "./src/database";
import bodyParser from "body-parser";

const app = express();
const PORT = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan(config.logFormat!, { stream }));

const umzug = new Umzug({
  migrations: { glob: "./src/database/migrations/*.js" },
  context: pgClient,
  storage: new SequelizeStorage({ sequelize: pgClient }),
  logger: console,
});

async function migrate() {
  await umzug.up();
}

app.use("/api", routes);
app.use("/", async () => {
  console.log("log");
});
app.use(errorMiddleware);

async function init() {
  try {
    await connectToDB();
    migrate();
    app.listen(PORT, async () => {
      logger.info(`=================================`);
      logger.info(`🚀 App listening on the port ${PORT}`);
      logger.info(`=================================`);
    });
  } catch (err) {
    logger.error(`Server error: ${err}`);
  }
}

init();
