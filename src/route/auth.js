const User = require("../model/User");
const UserService = require("../service/Authorization");

module.exports = {
  async RegisterUser(req, res, next) {
    const UserDTO = req.body;

    try {
      const insertUser = await UserService.PostUser(User, UserDTO);

      if (insertUser.status) {
        const token = await UserService.CreateToken(insertUser.data);
        
        res.status(200).json({
          user: insertUser.data,
          token: token,
        });
      } else {
        throw insertUser.error;
      }
    } catch (error) {
      next(error);
    }
  },
};
