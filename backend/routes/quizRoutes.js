import express from "express";
import QuizQuestion from "../models/QuizQuestion.js";
import User from "../models/user.js";

const router = express.Router();

// GET all questions
router.get("/", async (req, res) => {
  const questions = await QuizQuestion.find();
  res.json(questions);
});

// POST quiz submission
router.post("/submit", async (req, res) => {
  const { userId, answers } = req.body;
  const questions = await QuizQuestion.find();

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].answer) {
      score += 1;
    }
  }

  const percentage = (score / questions.length) * 100;
  let role = "LET_EM_COOK";
  if (percentage >= 95) role = "FIVE_STAR_MICHELIN";
  else if (percentage > 50) role = "SHEF";

  const user = await User.findByIdAndUpdate(userId, { score, role }, { new: true });

  res.json({ success: true, score, percentage, assignedRole: role, user });
});

export default router;
