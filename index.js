require("dotenv").config();

const express = require("express");
const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.get("/ping", (req, res) => {
  res.json({
    message: "Pong",
  });
});

app.listen(PORT, console.log(`Listening to ${HOST}:${PORT}`));
