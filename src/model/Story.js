const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  _id: Number,
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
  quiz: [
    {
      question: String,
      answers: [
        {
          id: Number,
          answer: String,
        },
      ],
      correctAnswerId: Number,
    },
  ],
});

module.exports = mongoose.model("Story", StorySchema);
