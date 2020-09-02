module.exports = {
  GetEnvVariable() {
    require("dotenv").config();

    const EnvVar = {
      Node_Env: process.env.NODE_ENV,
      JWT_Secret: process.env.JWT_SECRET,
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
