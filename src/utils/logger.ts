import { createLogger, transports } from 'winston';
import winston from 'winston';

const logFormat = winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

const logger = createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.colorize(),
    logFormat
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
    new transports.Console({
      level: 'error',
      handleExceptions: true,
    }),
  ],
});

const stream = {
  write: (message: string): void => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
