const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  quizzes: [
    {
      attemptedQuiz: String,
      score: Number,
    },
  ],
  role: {
    type: String,
    default : "user",

  }
});
module.exports = mongoose.model("User", userSchema);
