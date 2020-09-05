const env = require("../config").GetEnvVariable();

const joi = require("joi");
const { BadRequest, GeneralError, NotAcceptable } = require("../utils/Error");
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

  async CheckUsername(UserModel, username) {
    try {
      const user = await UserModel.findOne({
        username: username,
      });

      if (user) {
        return {
          status: false,
          error: new NotAcceptable("Username already in use"),
        };
      } else {
        return { status: true };
      }
    } catch (error) {
      return {
        status: false,
        error: new NotAcceptable("Username already in use"),
      };
    }
  },

  async PostUser(User, UserDTO) {
    try {
      const validate = await this.ValidateUserData(UserDTO);

      if (validate.status) {
        const check = await this.CheckUsername(User, validate.data.username);

        if (check) {
          const user = new User({
            fullName: validate.data.value.fullName,
            username: validate.data.value.username,
          });

          const query = await user.save();

          if (query) {
            return { status: true, data: user };
          } else {
            return {
              status: false,
              error: new GeneralError("Insert failed"),
            };
          }
        } else {
          return check.error;
        }
      } else {
        return validate.error;
      }
    } catch (error) {
      return {
        status: false,
        error: new GeneralError("Insert failed"),
      };
    }
  },

  CreateToken(userData) {
    const payload = {
      id: userData._id,
      username: userData.username,
      fullName: userData.fullName,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  },

  async Login(UserModel, UserDTO) {
    const schema = joi.object({
      username: joi.string().required(),
    });

    const validate = schema.validate(UserDTO);

    if (validate.error !== null) {
      const { username } = validate.value;

      try {
        const user = await UserModel.findOne({
          username: username,
        });

        if (user) {
          const token = this.CreateToken(user);
          return { status: true, token: token };
        } else {
          return { status: false, error: new BadRequest("Username not found") };
        }
      } catch (error) {
        return {
          status: false,
          error: new GeneralError("Query failed"),
        };
      }
    } else {
      return {
        status: false,
        error: new BadRequest("Data is missing or invalid"),
      };
    }
  },
};
