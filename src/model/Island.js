const mongoose = require("mongoose");

const IslandSchema = new mongoose.Schema({
  name: String,
  imgSrc: String,
  trivias: [{ content: String, imgSrc: String }],
});

module.exports = mongoose.model("Island", IslandSchema);
