module.exports = {
  InitLogger(winston, NODE_ENV) {
    const { combine, timestamp, printf } = winston.format;
    const loggingFormat = printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    });
    const logger = winston.createLogger({
      level: "info",
      transports: [
        new winston.transports.File({
          filename: "log/error.log",
          level: "error",
          format: combine(timestamp(), loggingFormat),
        }),
        new winston.transports.File({
          filename: "log/app.log",
        }),
      ],
    });

    if (NODE_ENV !== "production") {
      logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        })
      );
    }

    return logger;
  },
};
