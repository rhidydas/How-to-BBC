// backend/seedQuiz.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import QuizQuestion from "./models/QuizQuestion.js";

dotenv.config();
await connectDB();

await QuizQuestion.deleteMany();

await QuizQuestion.insertMany([
  {
    question: "Which of the following is a dry cooking method?",
    options: ["Boiling", "Steaming", "Baking", "Simmering"],
    answer: "Baking",
  },
  {
    question: "What temperature is water boiled at?",
    options: ["100°C", "90°C", "80°C", "70°C"],
    answer: "100°C",
  },
  {
    question: "Which utensil is best for flipping pancakes?",
    options: ["Whisk", "Spatula", "Tongs", "Ladle"],
    answer: "Spatula",
  },
  {
    question: "Which of the following is not a kitchen appliance?",
    options: ["Oven", "Microwave", "Toaster", "Backpack"],
    answer: "Backpack",
  },
  {
    question: "Which ingredient is usually used to boil pasta?",
    options: ["Oil", "Water", "Flour", "Vinegar"],
    answer: "Water",
  },
  {
    question: "What is the purpose of preheating an oven?",
    options: [
      "To save electricity",
      "To heat the kitchen",
      "To ensure proper cooking temperature",
      "To boil water",
    ],
    answer: "To ensure proper cooking temperature",
  },
  {
    question: "Which one is a baking ingredient?",
    options: ["Salt", "Flour", "Vinegar", "Garlic"],
    answer: "Flour",
  },
  {
    question: "Which of these is used to measure ingredients?",
    options: ["Knife", "Cutting board", "Measuring cup", "Spatula"],
    answer: "Measuring cup",
  },
  {
    question: "Which of the following is NOT typically used in baking a cake?",
    options: ["Eggs", "Sugar", "Rice", "Butter"],
    answer: "Rice",
  },
  {
    question: "What should you use to remove something hot from the oven?",
    options: ["Bare hands", "Towel", "Oven mitt", "Spoon"],
    answer: "Oven mitt",
  },
]);


console.log("Quiz seeded!");
process.exit();
