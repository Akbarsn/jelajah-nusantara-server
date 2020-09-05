const User = require("../model/User");
const Island = require("../model/Island");
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
      const response = await UtilityService.MigrateAll(User, Island);

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
