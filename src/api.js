module.exports = {
  InitAndServe() {
    const express = require("express");
    const app = express();

    const env = require('./config').GetEnvVariable()

    const HOST = env.Server.Host
    const PORT = env.Server.Port

    const api = require('./route').InitRoute(express.Router())
    app.use('/', api)

    app.listen(PORT, console.log(`Listening to ${HOST}:${PORT}`));
  },
};
