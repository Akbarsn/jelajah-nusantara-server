const User = require("../model/User");
const AuthService = require("../service/AuthService");

const RegisterUser = async (req, res, next) => {
  const UserDTO = req.body;

  try {
    const insertUser = await AuthService.PostUser(User, UserDTO);

    if (insertUser.status) {
      const token = await AuthService.CreateToken(insertUser.data);

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
};

const Login = async (req, res, next) => {
  const userDTO = req.body;

  try {
    const response = await AuthService.Login(User, userDTO);

    if (response.status) {
      res.status(200).json({token: response.token});
    } else {
      throw response.error;
    }
  } catch (error) {
    next(error);
  }
};

function AuthRoute(router) {
  router.post("/register", RegisterUser);
  router.post("/login", Login);

  return router;
}
module.exports = { AuthRoute };
