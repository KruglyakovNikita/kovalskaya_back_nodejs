import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  logFormat: process.env.LOG_FORMAT,

  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
};
