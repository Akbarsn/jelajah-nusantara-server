module.exports = {
  GetEnvVariable() {
    require("dotenv").config();

    const EnvVar = {
      Server: {
        Host: process.env.HOST,
        Port: process.env.PORT,
      },
    };

    return EnvVar;
  },
};
