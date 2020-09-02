const env = require("../config").GetEnvVariable();

const joi = require("joi");
const { BadRequest, GeneralError } = require("../utils/Error");
const jwt = require("jsonwebtoken");
const JWT_SECRET = env.JWT_Secret;
module.exports = {
  async ValidateUserData(UserDTO) {
    const schema = joi.object({
      fullName: joi.string().required(),
      username: joi.string().alphanum().required(),
    });

    const validate = schema.validate(UserDTO);
    if (validate.error !== null) {
      return { status: true, data: validate };
    } else {
      return {
        status: false,
        error: new BadRequest("Data is missing or invalid"),
      };
    }
  },
  async PostUser(User, UserDTO) {
    try {
      const validate = await this.ValidateUserData(UserDTO);
      if (validate.status) {
        const user = new User({
          fullName: UserDTO.fullName,
          username: UserDTO.username,
        });
        return { status: true, data: user };
      } else {
        return validate.error;
      }
    } catch (error) {
      return {
        status: false,
        error: new GeneralError("Insert failed" + error),
      };
    }
  },
  async CreateToken(userData) {
    const payload = {
      id: userData._id,
      username: userData.username,
      fullName: userData.fullName,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  },
};
