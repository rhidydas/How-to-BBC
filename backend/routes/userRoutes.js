import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username } = req.body;

  const user = new User({ username });
  await user.save();

  res.status(201).json({ message: "User registered", user });
});

export default router;
