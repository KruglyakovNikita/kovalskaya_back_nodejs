import dbConfig from "./../config/database";
import { Sequelize } from "sequelize";
import { logger } from "../utils/logger";

const nodeEnv = process.env.NODE_ENV || "development";

export const pgClient = new Sequelize(
  dbConfig[nodeEnv].database!,
  dbConfig[nodeEnv].username!,
  dbConfig[nodeEnv].password,
  {
    host: dbConfig[nodeEnv].host,
    port: dbConfig[nodeEnv].port,
    dialect: "postgres",
    query: { raw: true },
  }
);

export const connectToDB = async () => {
  try {
    await pgClient.authenticate();
    logger.info("Database, connect successfully");
  } catch (error) {
    logger.error(`Database not connected, error: ${error}`);
    process.exit();
  }
};
