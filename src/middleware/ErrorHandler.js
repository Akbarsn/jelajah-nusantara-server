/* eslint-disable no-unused-vars */
const { GeneralError } = require("../utils/Error");

module.exports = {
  GetErrorHandler(logger) {
    const handleErrors = (err, req, res, next) => {
      if (err instanceof GeneralError) {
        logger.error(`${err.getCode()} ${err.message}`);
        return res.status(err.getCode()).json({
          status: "error",
          message: err.message,
        });
      }

      logger.error(`${500} ${err.message}`);
      logger.error(`${err.error}`);
      return res.status(500).json({
        status: "error",
        message: err.message,
      });
    };

    const handleNotFound = (req, res, next) => {
      logger.error(`${404} Connecting to false endpoint`);
      return res.status(404).json({
        status: "error",
        message: "API Endpoint not found",
      });
    };

    return { handleErrors, handleNotFound };
  },
};
