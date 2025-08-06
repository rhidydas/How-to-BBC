import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

export default mongoose.model("QuizQuestion", quizQuestionSchema);
