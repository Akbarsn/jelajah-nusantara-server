module.exports = {
  GetEnvVariable() {
    require("dotenv").config();

    const EnvVar = {
      Node_Env: process.env.NODE_ENV,
      Server: {
        Host: process.env.HOST,
        Port: process.env.PORT,
      },
      Database: {
        DB_Uri: process.env.MONGO_URI
      }
    };

    return EnvVar;
  },
};
