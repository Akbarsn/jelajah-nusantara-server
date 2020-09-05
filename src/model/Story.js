const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  islandID: Number,
  title: String,
  description: String,
  imgSrc: String,
  steps: [
    {
      imgSrc: String,
      content: String,
    },
  ],
});

module.exports = mongoose.model("Story", StorySchema);
