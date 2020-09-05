const env = require("../config").GetEnvVariable();

const JWT_SECRET = env.JWT_Secret;
const jwt = require("jsonwebtoken");

const { GeneralError, NoToken } = require("../utils/Error");

module.exports = {
  async CheckToken(req, res, next) {
    const header = req.headers.authorization;
    try {
      if (header) {
        const token = header.split(" ")[1];
        if (token) {
          const payload = jwt.verify(token, JWT_SECRET);
          if (payload) {
            req.user = payload;
            next();
          } else {
            throw new GeneralError("Payload not found");
          }
        } else {
          throw new NoToken("Token missing or invalid");
        }
      } else {
        throw new NoToken("Token missing or invalid");
      }
    } catch (error) {
      next(error);
    }
  },
};
