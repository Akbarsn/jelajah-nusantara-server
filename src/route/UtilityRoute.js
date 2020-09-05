const UtilityService = require("../service/UtilityService");
const { GeneralError } = require("../utils/Error");

module.exports = {
  PingRoute(req, res) {
    res.status(200).json({
      message: "Pong",
    });
  },
  async MigrateRoute(req, res, next) {
    try {
      const response = await UtilityService.MigrateAll();

      if (response) {
        res.status(200).json({
          message: "Migrate Successful",
        });
      } else {
        throw new GeneralError("Migrate failed");
      }
    } catch (error) {
      next(error);
    }
  },
};
