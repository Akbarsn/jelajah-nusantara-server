const mongoose = require("mongoose");

const IslandSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  imgSrc: String,
  trivias: [{ content: String, imgSrc: String }],
});

module.exports = mongoose.model("Island", IslandSchema);
