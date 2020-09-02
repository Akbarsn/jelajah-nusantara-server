module.exports = {
  InitAndServe() {
    const express = require("express");
    const mongoose = require("mongoose");
    const winston = require("winston");
    const app = express();

    //Get Environment Variable
    const env = require("./config").GetEnvVariable();
    const HOST = env.Server.Host;
    const PORT = env.Server.Port;
    const DB_URI = env.Database.DB_Uri;
    const NODE_ENV = env.Node_Env;

    //Initialize Logger using WinstonJS
    const logger = require('./loader/winston').InitLogger(winston, NODE_ENV)

    //Initialize and connecting to Mongo DB
    require("./loader/mongodb").InitDB(mongoose, DB_URI, logger);

    //Initialize API Route
    const api = require("./route").InitRoute(express.Router());
    app.use("/", api);

    //Serving the server
    app.listen(PORT, logger.info(`Listening to ${HOST}:${PORT}`));
  },
};
